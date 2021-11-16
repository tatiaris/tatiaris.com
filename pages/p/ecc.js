import React, { useEffect, useRef, useState } from 'react';
import Head from 'next/head';
import Title from '../../components/slides/396/title';
import Recap from '../../components/slides/396/recap';

function useKey(key, cb) {
  const callbackRef = useRef(cb);
  useEffect(() => {
    callbackRef.current = cb;
  });
  useEffect(() => {
    function handle(event) {
      if (event.code === key) {
        callbackRef.current(event);
      }
    }
    document.addEventListener('keypress', handle);
    return () => document.removeEventListener('keypress', handle);
  }, [key]);
}

const Project = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [<Title key="slide-0" />, <Recap key="slide-1" />];

  function previousSlide() {
    if (currentSlide > 0) setCurrentSlide(currentSlide - 1);
  }
  function nextSlide() {
    if (currentSlide < slides.length - 1) setCurrentSlide(currentSlide + 1);
  }
  function openFullscreen() {
    let elem = document.documentElement;
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) {
      /* Safari */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
      /* IE11 */
      elem.msRequestFullscreen();
    }
  }
  useKey('KeyB', previousSlide);
  useKey('ArrowLeft', previousSlide);
  useKey('Space', nextSlide);
  useKey('ArrowRight', nextSlide);
  useKey('KeyF', openFullscreen);

  return (
    <>
      <Head>
        <title>ECC Presentation | Rishabh Tatia</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Presentation on Error Correcting Codes." />
        <meta name="viewport" content="user-scalable=yes, initial-scale=1, maximum-scale=5, minimum-scale=1, width=device-width" />
        <meta property="og:title" content={`ECC Presentation`} />
        <meta property="og:site_name" content="Rishabh Tatia" />
        <meta property="og:url" content="tatiaris.com/p/ecc" />
        <meta property="og:description" content="Presentation on Error Correcting Codes." />
        <meta property="og:type" content="profile" />
        <meta httpEquiv="content-language" content="en" />
      </Head>
      <div className="slide-container">{slides[currentSlide]}</div>
    </>
  );
};

export default Project;
