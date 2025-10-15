import React, { useEffect, useState, useRef } from 'react';
import './Hero.css';

const slides = [
  { id: 1, image: '/images/slide1.jpg', subtitle: 'Van rá egy jó játékunk!', slogan: 'Csatlakozz most és játssz velünk!' },
  { id: 2, image: '/images/slide2.jpg', subtitle: 'Kihívás vár rád', slogan: 'Próbáld ki a legújabb módokat!' },
  { id: 3, image: '/images/slide3.jpg', subtitle: 'Barátok és verseny', slogan: 'Hívd meg a csapatot és győzzetek!' }
];