import React, { useEffect } from 'react';

export default function useSmoothScroll() {
    useEffect(() => {
        // Enhanced smooth scroll with easing
        const smoothScrollTo = (target, duration = 1200) => {
            const start = window.pageYOffset;
            const distance = target - start;
            const startTime = performance.now();

            const easeInOutCubic = (t) => {
                return t < 0.5
                    ? 4 * t * t * t
                    : 1 - Math.pow(-2 * t + 2, 3) / 2;
            };

            const scroll = (currentTime) => {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const easing = easeInOutCubic(progress);

                window.scrollTo(0, start + distance * easing);

                if (progress < 1) {
                    requestAnimationFrame(scroll);
                }
            };

            requestAnimationFrame(scroll);
        };

        // Intercept anchor link clicks for smooth scrolling
        const handleClick = (e) => {
            const target = e.target.closest('a[href^="#"]');
            if (target) {
                const id = target.getAttribute('href').slice(1);
                if (!id) return; // Skip empty hash

                const element = document.getElementById(id);
                if (element) {
                    e.preventDefault();

                    // Stop other listeners if propagation is enabled
                    // e.stopPropagation(); 

                    // Robust absolute position calculation
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - 100; // offset for header

                    smoothScrollTo(offsetPosition);
                }
            }
        };

        document.addEventListener('click', handleClick);

        // Smooth scroll behavior
        document.documentElement.style.scrollBehavior = 'auto';

        return () => {
            document.removeEventListener('click', handleClick);
            document.documentElement.style.scrollBehavior = 'auto';
        };
    }, []);
}