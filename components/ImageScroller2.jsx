import React, { useState, useRef, useEffect } from 'react';

function getWindowDimensions() {
  if (typeof window === 'undefined') return { width: 500, height: 0 }; // for SSR (server-side rendering
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

const ImageScroller = ({ images }) => {
  const { width, height } = useWindowDimensions();
  const [photos, setPhotos] = useState(images);
  const [theta, setTheta] = useState(0);
  const [circumference, setCircumference] = useState(0);
  const [radius, setRadius] = useState(0);
  const scrollerRef = useRef(null);

  useEffect(() => {
    const originalImages = images;
    while (images.length < 15) {
      images = images.concat(originalImages);
    }
    const c = images.length * 200 + (images.length * 70);
    const r = c / (2 * Math.PI);
    setPhotos(images);
    setCircumference(c);
    setRadius(r);
    console.log({ r });
  }, [images]);

  useEffect(() => {
    setInterval(() => {
      setTheta(prev => (prev - 0.25) % 360);
    }, 10);
  }, []);

  // useEffect(() => {
  //   console.log({ theta });
  // }, [theta]);

  return (
    <div
      className="scroller"
      ref={scrollerRef}
    >
      {photos.map((src, index) => {
        // if (index > 0) return null;
        const adjustedTheta = (theta + ((index + 1) * (360 / photos.length))) % 360;
        const y = (radius * Math.cos(adjustedTheta * Math.PI / 180));
        const x = (radius * Math.sin(adjustedTheta * Math.PI / 180));
        const containerWidth = (scrollerRef.current ? scrollerRef.current.offsetWidth : 0);
        // console.log({ index, theta, radius, adjustedTheta, x, y, containerWidth });
        return (
          <img
            key={index}
            src={src}
            alt={`img-${index}`}
            height={150}
            className="scroller-image"
            style={{
              top: 0,
              left: x + radius / 2 - 50,
              display: y > 0 ? 'block' : 'none',
            }}
          />
        )
      })}
    </div>
  );
};

export default ImageScroller;
