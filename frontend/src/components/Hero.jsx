import React, { useEffect, useState, useRef } from 'react';
import './Hero.css';

const slides = [
  { id: 1, image: '/images/slide1.jpg', subtitle: 'Van rá egy jó játékunk!', slogan: 'Csatlakozz most és játssz velünk!' },
  { id: 2, image: '/images/slide2.jpg', subtitle: 'Kihívás vár rád', slogan: 'Próbáld ki a legújabb módokat!' },
  { id: 3, image: '/images/slide3.jpg', subtitle: 'Barátok és verseny', slogan: 'Hívd meg a csapatot és győzzetek!' }
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef(null);
  const slideCount = slides.length;

  useEffect(() => {
    startAutoplay();
    return stopAutoplay;
  }, [index, paused]);

  function startAutoplay() {
    if (intervalRef.current) return;
    if (paused) return;
    intervalRef.current = setInterval(() => {
      setIndex(prev => (prev + 1) % slideCount);
    }, 5000);
  }

  function stopAutoplay() {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  }

  function goTo(i) {
    setIndex(i % slideCount);
  }

  function handleJoinClick() {
    window.location.href = '/register';
  }

   return (
    <section
      className="hero"
      onMouseEnter={() => { setPaused(true); stopAutoplay(); }}
      onMouseLeave={() => { setPaused(false); startAutoplay(); }}
      aria-roledescription="carousel"
      aria-label="Hero slideshow"
    >
      {slides.map((s, i) => (
        <div
          key={s.id}
          className={`hero-slide ${i === index ? 'active' : ''}`}
          style={{ backgroundImage: `url(${s.image})` }}
          aria-hidden={i === index ? 'false' : 'true'}
        >
          <div className="hero-overlay">
            <h1 className="hero-title">Fő Üzenet</h1>
            <p className="hero-subtitle">{s.subtitle}</p>
            <p className="hero-slogan">{s.slogan}</p>
            <button
              className="join-btn"
              onClick={handleJoinClick}
              aria-label={`Csatlakozz - ${s.subtitle}`}
            >
              Join
            </button>
          </div>
        </div>
      ))}

      <div className="hero-controls">
        <button
          className="hero-prev"
          onClick={() => { setIndex((index - 1 + slideCount) % slideCount); }}
          aria-label="Előző slide"
        >
          ‹
        </button>
        <div className="hero-dots">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`dot ${i === index ? 'dot-active' : ''}`}
              onClick={() => goTo(i)}
              aria-label={`Ugrás a ${i + 1}. képre`}
            />
          ))}
        </div>
        <button
          className="hero-next"
          onClick={() => { setIndex((index + 1) % slideCount); }}
          aria-label="Következő slide"
        >
          ›
        </button>
      </div>
    </section>
  );
}

