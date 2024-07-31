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

const ImageScroller = ({ images, containerHeight = 150, gap = 20 }) => {
  const { width } = useWindowDimensions();
  const [loading, setLoading] = useState(true);
  const [photos, setPhotos] = useState(null);
  const [circumference, setCircumference] = useState(0);
  const [scrolloffset, setScrollOffset] = useState(1680);
  const scrollerRef = useRef(null);

  useEffect(() => {
    let originalImages = images;
    for (let i = 0; i < originalImages.length; i++) {
      const img = new Image();
      img.src = originalImages[i];
      img.onload = () => {
        const w = img.width;
        const h = img.height;
        const ratio = w / h;
        originalImages[i] = { src: originalImages[i], width: w, height: h, ratio };
        let loaded = true;
        for (let j = 0; j < originalImages.length; j++) {
          if (typeof originalImages[j] === 'string') {
            loaded = false;
            break;
          }
        }
        if (loaded) {
          while (images.length < 10) {
            images = images.concat(originalImages);
          }

          let circumference = 0;
          for (let j = 0; j < images.length; j++) {
            circumference += images[j].ratio * containerHeight + gap;
          }
          circumference -= gap;
          setCircumference(circumference);
          setPhotos(images);
          setLoading(false);
        }
      };
    }
  }, [images]);

  useEffect(() => {
    if (loading) return;
    setInterval(() => {
      setScrollOffset(prev => (prev + 1) % (circumference));
    }, 50);
  }, [loading]);

  if (loading) return null;
  return (
    <div
      className="scroller"
      ref={scrollerRef}
    >
      {photos.map((img, index) => {
        let x = -scrolloffset;
        for (let i = 0; i < index; i++) {
          x += containerHeight * photos[i].ratio + gap;
        }
        const left = (x < -circumference / 4) ? x + (circumference + gap) : x;
        const visible = left > ((-img.ratio * containerHeight) - 80) && left < width;

        return (
          <img
            key={index}
            src={img.src}
            alt={`img-${index}`}
            height={containerHeight}
            className="scroller-image"
            style={{
              left,
              display: visible ? 'block' : 'none',
            }}
          />
        )
      })}
    </div>
  );
};

export default ImageScroller;
