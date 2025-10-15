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

