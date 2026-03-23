import React, { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { timelineData } from '../../lib/timelineData';

gsap.registerPlugin(ScrollTrigger);

export default function LegacyWall() {
    const scrollContainerRef = useRef(null);
    const sectionRef = useRef(null);
    const pauseTimeoutRef = useRef(null);
    const activePageRef = useRef(0);
    const [activePage, setActivePage] = useState(0);
    const [isAutoPaused, setIsAutoPaused] = useState(false);
    const [isInView, setIsInView] = useState(false);
    const [cardsPerPage, setCardsPerPage] = useState(3);
    const [viewportWidth, setViewportWidth] = useState(() =>
        typeof window !== 'undefined' ? window.innerWidth : 1440
    );

    const desktopScale = viewportWidth >= 1600 ? 0.9 : viewportWidth >= 1280 ? 0.84 : viewportWidth >= 1024 ? 0.8 : 1;
    const CARD_WIDTH = Math.round(360 * desktopScale);
    const CARD_GAP = Math.round(520 * desktopScale);
    const TRACK_HEIGHT = Math.round(600 * desktopScale);
    // Adjust START_OFFSET based on viewport - less offset on mobile for better centering
    const START_OFFSET = viewportWidth < 640 
        ? Math.round(180 * desktopScale) 
        : viewportWidth < 1024 
            ? Math.round(220 * desktopScale)
            : Math.round(260 * desktopScale);
    const TOP_NODE_Y = Math.round(350 * desktopScale);
    const BOTTOM_NODE_Y = Math.round(250 * desktopScale);
    const IMAGE_HEIGHT = Math.round(208 * desktopScale);
    const cardsContainerWidth = timelineData.length * CARD_GAP + Math.round(420 * desktopScale);
    const totalPages = Math.ceil(timelineData.length / cardsPerPage);

    useEffect(() => {
        const updateCardsPerPage = () => {
            if (window.innerWidth < 640) setCardsPerPage(1);
            else if (window.innerWidth < 1024) setCardsPerPage(2);
            else setCardsPerPage(3);
        };
        updateCardsPerPage();
        window.addEventListener('resize', updateCardsPerPage);
        return () => window.removeEventListener('resize', updateCardsPerPage);
    }, []);

    useEffect(() => {
        const updateViewportWidth = () => setViewportWidth(window.innerWidth);
        updateViewportWidth();
        window.addEventListener('resize', updateViewportWidth);
        return () => window.removeEventListener('resize', updateViewportWidth);
    }, []);

    const scrollToPage = (pageIndex) => {
        if (!scrollContainerRef.current) return;
        scrollContainerRef.current.scrollTo({
            left: pageIndex * cardsPerPage * CARD_GAP,
            behavior: 'smooth'
        });
    };

    const pauseAutoScrollTemporarily = (duration = 5000) => {
        setIsAutoPaused(true);
        if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
        pauseTimeoutRef.current = setTimeout(() => setIsAutoPaused(false), duration);
    };

    useEffect(() => { activePageRef.current = activePage; }, [activePage]);

    const handleScroll = (e) => {
        const scrollLeft = e.target.scrollLeft;
        const pageScrollWidth = cardsPerPage * CARD_GAP;
        const newPage = Math.round(scrollLeft / pageScrollWidth);
        if (newPage !== activePage) setActivePage(Math.min(newPage, totalPages - 1));
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIsInView(entry.isIntersecting),
            { threshold: 0.3 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (!isInView) return; // Only work when section is in view
            
            if (e.key === 'ArrowLeft') {
                e.preventDefault();
                const prevPage = Math.max(0, activePage - 1);
                if (prevPage !== activePage) {
                    pauseAutoScrollTemporarily();
                    scrollToPage(prevPage);
                    setActivePage(prevPage);
                }
            } else if (e.key === 'ArrowRight') {
                e.preventDefault();
                const nextPage = Math.min(totalPages - 1, activePage + 1);
                if (nextPage !== activePage) {
                    pauseAutoScrollTemporarily();
                    scrollToPage(nextPage);
                    setActivePage(nextPage);
                }
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isInView, activePage, totalPages]);

    useEffect(() => {
        if (isAutoPaused || totalPages <= 1 || !isInView) return;
        const intervalId = setInterval(() => {
            const nextPage = (activePageRef.current + 1) % totalPages;
            scrollToPage(nextPage);
            setActivePage(nextPage);
        }, 3000);
        return () => clearInterval(intervalId);
    }, [isAutoPaused, totalPages, cardsPerPage, isInView]);

    useEffect(() => () => {
        if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
    }, []);

    useGSAP(() => {
        gsap.from(".milestone", {
            opacity: 0,
            y: 50,
            stagger: 0.3,
            scrollTrigger: { trigger: ".timeline", start: "top 70%" }
        });
        gsap.to(".building", {
            y: -40,
            scrollTrigger: {
                trigger: ".timeline",
                start: "top bottom",
                end: "bottom top",
                scrub: true
            }
        });
    }, { scope: scrollContainerRef });

    return (
        <section
            id="legacy-wall"
            ref={sectionRef}
            className="relative overflow-hidden bg-black py-6"
            style={{
                backgroundImage: 'radial-gradient(rgba(201, 169, 97, 0.1) 1px, transparent 1px)',
                backgroundSize: '32px 32px'
            }}
        >
            {/* Header */}
            <div className="relative px-6 md:px-12 lg:px-20 mb-8 z-10">
                <div className="mx-auto max-w-3xl text-center">
                    <span className="inline-flex rounded-full border border-[#C9A961]/30 bg-[#C9A961]/5 px-5 py-2 text-[10px] md:text-[12px] font-semibold uppercase tracking-[0.3em] text-[#C9A961]">
                        Our Legacy
                    </span>
                    <h2 className="font-serif mt-4 text-2xl sm:text-3xl leading-tight text-white md:text-5xl px-2">
                        Decades of Building{' '}
                        <span className="text-[#C9A961] italic font-light">Trust &amp; Excellence</span>
                    </h2>
                </div>
            </div>

            {/* Horizontal Scrolling Timeline */}
            <div
                className="timeline relative w-full overflow-x-auto overflow-y-hidden hide-scrollbar pb-2"
                ref={scrollContainerRef}
                onScroll={handleScroll}
                onMouseDown={() => pauseAutoScrollTemporarily()}
                onTouchStart={() => pauseAutoScrollTemporarily()}
                onWheel={() => pauseAutoScrollTemporarily(3000)}
            >
                <div
                    className="relative flex items-center min-w-max px-4 sm:px-8 md:px-24 w-[max-content]"
                    style={{ height: `${TRACK_HEIGHT}px` }}
                >
                    <div className="relative" style={{ width: `${cardsContainerWidth}px`, height: `${TRACK_HEIGHT}px` }}>

                        {/* SVG connecting path */}
                        <div className="absolute inset-0 pointer-events-none">
                            <svg
                                className="text-[#C9A961]/30 drop-shadow-sm"
                                style={{ height: `${TRACK_HEIGHT}px`, width: `${cardsContainerWidth}px` }}
                                width={cardsContainerWidth}
                                height={TRACK_HEIGHT}
                                viewBox={`0 0 ${cardsContainerWidth} ${TRACK_HEIGHT}`}
                                preserveAspectRatio="none"
                            >
                                <path
                                    className="path"
                                    d={`M 0,${Math.round(TRACK_HEIGHT / 2)} ${timelineData.map((_, i) => {
                                        const xOffset = (i * CARD_GAP) + START_OFFSET;
                                        const yOffset = i % 2 === 0 ? TOP_NODE_Y : BOTTOM_NODE_Y;
                                        const prevX = i === 0 ? 0 : ((i - 1) * CARD_GAP) + START_OFFSET;
                                        const prevY = i === 0 ? Math.round(TRACK_HEIGHT / 2) : ((i - 1) % 2 === 0 ? TOP_NODE_Y : BOTTOM_NODE_Y);
                                        const diffX = xOffset - prevX;
                                        const c1x = prevX + (diffX * 0.45);
                                        const c1y = prevY;
                                        const c2x = xOffset - (diffX * 0.45);
                                        const c2y = yOffset;
                                        return `C ${c1x},${c1y} ${c2x},${c2y} ${xOffset},${yOffset}`;
                                    }).join(' ')} L ${cardsContainerWidth},${(timelineData.length - 1) % 2 === 0 ? TOP_NODE_Y : BOTTOM_NODE_Y}`}
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeDasharray="4 6"
                                />
                            </svg>
                        </div>

                        {/* Timeline Cards */}
                        {timelineData.map((item, index) => {
                            const isTop = index % 2 === 0;
                            const leftPos = (index * CARD_GAP) + START_OFFSET - (CARD_WIDTH / 2);
                            return (
                                <div
                                    key={index}
                                    className="milestone absolute flex flex-col items-center"
                                    style={{
                                        width: `${CARD_WIDTH}px`,
                                        left: `${leftPos}px`,
                                        top: `${isTop ? TOP_NODE_Y : BOTTOM_NODE_Y}px`
                                    }}
                                >
                                    <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full w-4 h-4 border-[3px] border-zinc-900 bg-[#C9A961] shadow-[0_0_15px_rgba(201,169,97,0.4)] z-20" />
                                    <div
                                        className={`relative w-full flex flex-col items-center z-10 bg-zinc-900/80 backdrop-blur-md px-3 pt-2 pb-4 rounded-2xl border border-[#C9A961]/20 shadow-[0_8px_30px_rgba(0,0,0,0.5)] ${isTop ? '-translate-y-full mb-4' : 'mt-4'}`}
                                    >
                                        {item.imageUrl && item.imageUrl !== "" && (
                                            <div
                                                className="w-full p-3 pt-3 flex items-start justify-center overflow-hidden"
                                                style={{ height: `${IMAGE_HEIGHT}px` }}
                                            >
                                                <img
                                                    src={item.imageUrl}
                                                    alt={item.placeholderText || 'Legacy image'}
                                                    className="building w-full h-full object-contain rounded-md block"
                                                    onError={(e) => e.currentTarget.parentElement.style.display = 'none'}
                                                />
                                            </div>
                                        )}
                                        <h3 className="font-serif text-3xl font-light text-[#C9A961] mb-1">{item.year}</h3>
                                        {item.title && <h4 className="font-serif font-light text-[10px] tracking-widest text-white/80 uppercase text-center mb-1 px-1">{item.title}</h4>}
                                        <p className="font-serif font-light text-xs text-white/50 text-center leading-relaxed px-1">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center mt-8 px-4 h-6 items-center gap-3">
                {Array.from({ length: totalPages }).map((_, pageIndex) => (
                    <button
                        key={pageIndex}
                        onClick={() => {
                            pauseAutoScrollTemporarily();
                            scrollToPage(pageIndex);
                            setActivePage(pageIndex);
                        }}
                        aria-label={`Scroll to timeline section ${pageIndex + 1}`}
                        className={`transition-all duration-300 rounded-full h-2 ${activePage === pageIndex
                            ? "w-8 bg-[#C9A961]"
                            : "w-2 bg-zinc-600 hover:bg-[#C9A961]/50 hover:scale-125"
                            }`}
                    />
                ))}
            </div>

            <style jsx>{`
                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .hide-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </section>
    );
}
