import { useEffect, useState } from 'react';

export default function HeroSlideshow({ slides, interval = 6000 }) {
  const [index, setIndex] = useState(0);
  const total = slides.length;

  useEffect(() => {
    const handle = setInterval(() => {
      setIndex((prev) => (prev + 1) % total);
    }, interval);
    return () => clearInterval(handle);
  }, [interval, total]);

  if (total === 0) {
    return null;
  }

  const active = slides[index];

  return (
    <div className="hero-slideshow" aria-label="Featured initiatives">
      <figure>
        <img src={active.image} alt={active.title} loading="lazy" />
        <figcaption>
          <strong>{active.title}</strong>
          <p>{active.caption}</p>
          {active.ctaHref && (
            <a className="button" href={active.ctaHref}>
              {active.ctaLabel ?? 'Learn more'}
            </a>
          )}
        </figcaption>
      </figure>
      <nav aria-label="Slideshow controls">
        {slides.map((slide, idx) => (
          <button
            key={slide.title}
            aria-label={`Show slide ${idx + 1}: ${slide.title}`}
            aria-pressed={index === idx}
            onClick={() => setIndex(idx)}
          />
        ))}
      </nav>
    </div>
  );
}
