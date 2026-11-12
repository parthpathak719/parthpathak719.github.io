const preferenceKey = 'parth-portfolio-effects';
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const targets = [...document.querySelectorAll<HTMLElement>([
  '.hero > *',
  '.section-heading', '.about-grid', '.credentials-heading', '.credential-card',
  '.featured-project', '.more-work', '.experience-row', '.security-report',
  '.contact-section > *', '.project-index > :not(.archive)', '.archive-row',
].join(', '))];
const revealed = new WeakSet<HTMLElement>();
const animations = new Set<Animation>();
let observer: IntersectionObserver | undefined;
let paused = false;
let initialized = false;
try { paused = localStorage.getItem(preferenceKey) === 'paused'; } catch {}
document.documentElement.setAttribute('data-reveal-initialized', '');

function markRevealed(element: HTMLElement) {
  revealed.add(element);
  element.dataset.revealed = 'true';
}

function updateReveal() {
  observer?.disconnect();
  if (paused || reducedMotion.matches || !('IntersectionObserver' in window)) {
    document.documentElement.classList.remove('scroll-reveal-ready');
    animations.forEach(animation => animation.cancel());
    animations.clear();
    initialized = true;
    return;
  }

  // Resuming effects should never hide content the visitor is already reading.
  if (initialized) targets.forEach(element => {
    if (element.getBoundingClientRect().bottom <= window.innerHeight) markRevealed(element);
  });
  document.documentElement.classList.add('scroll-reveal-ready');

  observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const element = entry.target as HTMLElement;
      observer?.unobserve(element);
      markRevealed(element);
      // The initial hidden state is installed before first paint. Reveal and
      // animate in the same frame, preserving layout and existing hover styles.
      const hero = element.parentElement?.classList.contains('hero');
      const delay = hero ? [...element.parentElement!.children].indexOf(element) * 110 : 0;
      const animation = element.animate([
        { opacity: 0, translate: hero ? '0 64px' : '0 56px' },
        { opacity: 1, translate: '0 0' },
      ], { duration: 1200, delay, fill: 'backwards', easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)' });
      animations.add(animation);
      animation.finished.then(() => animations.delete(animation), () => animations.delete(animation));
    });
  }, { rootMargin: '0px 0px -24px 0px', threshold: 0 });
  targets.forEach(element => {
    if (!revealed.has(element)) observer?.observe(element);
  });
  initialized = true;
}

document.addEventListener('focusin', event => {
  targets.forEach(element => {
    if (event.target instanceof Node && element.contains(event.target)) {
      markRevealed(element);
      observer?.unobserve(element);
      animations.forEach(animation => {
        if ((animation.effect as KeyframeEffect)?.target === element) animation.finish();
      });
    }
  });
});

window.addEventListener('portfolio-effects-change', event => {
  paused = (event as CustomEvent<{ paused: boolean }>).detail.paused;
  updateReveal();
});
window.addEventListener('storage', event => {
  if (event.key === preferenceKey || event.key === null) {
    try { paused = localStorage.getItem(preferenceKey) === 'paused'; } catch {}
    updateReveal();
  }
});
reducedMotion.addEventListener('change', updateReveal);
updateReveal();
