import React, { useEffect, useRef } from 'react';

export default function SmoothScroll({ children }) {
  const scrollRef = useRef(null);

  useEffect(() => {
    let rafId = null;
    let currentScroll = 0;
    let targetScroll = 0;
    const ease = 0.075; // Lower = smoother/slower

    const lerp = (start, end, factor) => {
      return start + (end - start) * factor;
    };

    const updateScroll = () => {
      currentScroll = lerp(currentScroll, targetScroll, ease);
      
      if (scrollRef.current) {
        scrollRef.current.style.transform = `translate3d(0, -${currentScroll}px, 0)`;
      }

      const diff = Math.abs(targetScroll - currentScroll);
      if (diff > 0.1) {
        rafId = requestAnimationFrame(updateScroll);
      }
    };

    const onScroll = () => {
      targetScroll = window.pageYOffset;
      if (!rafId) {
        rafId = requestAnimationFrame(updateScroll);
      }
    };

    // Initial update
    targetScroll = window.pageYOffset;
    currentScroll = targetScroll;

    window.addEventListener('scroll', onScroll);
    rafId = requestAnimationFrame(updateScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  }, []);

  return (
    <div className="smooth-scroll-wrapper" style={{ position: 'fixed', top: 0, left: 0, width: '100%', willChange: 'transform' }} ref={scrollRef}>
      {children}
    </div>
  );
}