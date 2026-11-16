import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
let scroller: Lenis | undefined;
let paused = false;
try { paused = sessionStorage.getItem('parth-portfolio-effects') === 'paused'; } catch {}

function updateScrolling() {
  scroller?.destroy();
  scroller = undefined;
  if (paused || reducedMotion.matches) return;
  scroller = new Lenis({
    autoRaf: true,
    smoothWheel: true,
    syncTouch: true,
    // Settle quickly so smoothing does not feel detached from the input.
    lerp: 0.24,
    syncTouchLerp: 0.22,
    touchInertiaExponent: 1.3,
    wheelMultiplier: 1,
    touchMultiplier: 1,
    // Keep ordinary anchor navigation; only wheel/touch input is smoothed.
    anchors: false,
    stopInertiaOnNavigate: true,
    allowNestedScroll: true,
  });
}

reducedMotion.addEventListener('change', updateScrolling);
window.addEventListener('portfolio-effects-change', event => {
  paused = (event as CustomEvent<{ paused: boolean }>).detail.paused;
  updateScrolling();
});
window.addEventListener('pagehide', () => {
  scroller?.destroy();
  scroller = undefined;
});
window.addEventListener('pageshow', event => {
  if (event.persisted) updateScrolling();
});
updateScrolling();
