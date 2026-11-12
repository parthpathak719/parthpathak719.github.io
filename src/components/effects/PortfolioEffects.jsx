import { useEffect, useState } from 'react';
import LightPillar from './LightPillar';
import SplashCursor from './SplashCursor';

const PREFERENCE_KEY = 'parth-portfolio-effects';

// React Bits effects are decorative. Content and navigation work without WebGL.
export default function PortfolioEffects() {
  const [mode, setMode] = useState({ active: false, cursor: false, mobile: false, available: false });
  const [paused, setPaused] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // Read before mounting either canvas, so paused pages never flash an effect.
    try { setPaused(localStorage.getItem(PREFERENCE_KEY) === 'paused'); } catch {}
    setReady(true);
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)');
    const narrow = window.matchMedia('(max-width: 700px)');
    const update = () => setMode({
      active: !reduced.matches && !document.hidden,
      cursor: !reduced.matches && fine.matches && !document.hidden,
      mobile: narrow.matches,
      available: !reduced.matches,
    });
    const syncPreference = event => {
      if (event.key === PREFERENCE_KEY || event.key === null) {
        setPaused(event.newValue === 'paused');
      }
    };
    update();
    [reduced, fine, narrow].forEach(query => query.addEventListener('change', update));
    document.addEventListener('visibilitychange', update);
    window.addEventListener('storage', syncPreference);
    return () => {
      [reduced, fine, narrow].forEach(query => query.removeEventListener('change', update));
      document.removeEventListener('visibilitychange', update);
      window.removeEventListener('storage', syncPreference);
    };
  }, []);

  const toggleEffects = () => {
    const next = !paused;
    setPaused(next);
    try { localStorage.setItem(PREFERENCE_KEY, next ? 'paused' : 'running'); } catch {}
    window.dispatchEvent(new CustomEvent('portfolio-effects-change', { detail: { paused: next } }));
  };

  return <>
    {ready && !paused && <div className="ambient-backdrop" aria-hidden="true">
      <div className="pillar-wash">
        {mode.active && !paused && <LightPillar
          topColor="#b184ff" middleColor="#4b85ff" bottomColor="#53dec8" intensity={1.05}
          rotationSpeed={0.17} pillarWidth={3.2} pillarHeight={0.45}
          pillarRotation={22} glowAmount={0.002} bloom={0.42}
          noiseIntensity={0.12} quality="low" detail={mode.mobile ? 2 : 3}
          resolution={mode.mobile ? 0.25 : 0.4} fade={0.2} interactive={false}
          clickPulse={false} intro={false}
        />}
      </div>
    </div>}
    {ready && mode.cursor && !paused && <SplashCursor
      colors={['#b184ff', '#5c9dff', '#53dec8']} rainbow={false}
      intensity={0.48} size={0.82} force={0.8} swirl={1.9} trail={0.58}
      momentum={0.7} shading={0.4} glow={0.16} quality="low"
      clickSplash={true} clickIntensity={0.3} intro={false} zIndex={25}
      style={{ opacity: 0.7, mixBlendMode: 'screen' }}
    />}
    {ready && mode.available && <button type="button" className="effects-toggle"
      onClick={toggleEffects} aria-pressed={!paused}>
      <span aria-hidden="true">{paused ? '▷' : 'Ⅱ'}</span>
      {paused ? 'Resume effects' : 'Pause effects'}
    </button>}
  </>;
}
