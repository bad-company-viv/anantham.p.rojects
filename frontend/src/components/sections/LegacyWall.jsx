import React, { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { timelineData } from '../../lib/timelineData';

gsap.registerPlugin(ScrollTrigger);

export default function LegacyWall() {
    const scrollContainerRef = useRef(null);
    const pauseTimeoutRef = useRef(null);
    const activePageRef = useRef(0);
    const [activePage, setActivePage] = useState(0);
    const [isAutoPaused, setIsAutoPaused] = useState(false);
    const [cardsPerPage, setCardsPerPage] = useState(4);

    const CARD_GAP = 520;
    const cardsContainerWidth = timelineData.length * CARD_GAP + 420;
    const totalPages = Math.ceil(timelineData.length / cardsPerPage);

    // Dynamically update cards per page based on screen width
    useEffect(() => {
        const updateCardsPerPage = () => {
            if (window.innerWidth < 640) {
                setCardsPerPage(1); // mobile: 1 card per dot
            } else if (window.innerWidth < 1024) {
                setCardsPerPage(2); // tablet: 2 cards per dot
            } else {
                setCardsPerPage(3); // desktop: 3 cards per dot
            }
        };
        updateCardsPerPage();
        window.addEventListener('resize', updateCardsPerPage);
        return () => window.removeEventListener('resize', updateCardsPerPage);
    }, []);

    const scrollToPage = (pageIndex) => {
        if (!scrollContainerRef.current) return;
        const targetCardIndex = pageIndex * cardsPerPage;
        scrollContainerRef.current.scrollTo({
            left: targetCardIndex * CARD_GAP,
            behavior: 'smooth'
        });
    };

    const pauseAutoScrollTemporarily = (duration = 5000) => {
        setIsAutoPaused(true);
        if (pauseTimeoutRef.current) {
            clearTimeout(pauseTimeoutRef.current);
        }
        pauseTimeoutRef.current = setTimeout(() => {
            setIsAutoPaused(false);
        }, duration);
    };

    // Keep ref in sync so interval callback always uses latest page
    useEffect(() => {
        activePageRef.current = activePage;
    }, [activePage]);

    // Update active dot based on scroll position
    const handleScroll = (e) => {
        const scrollLeft = e.target.scrollLeft;
        const pageScrollWidth = cardsPerPage * CARD_GAP;
        const newPage = Math.round(scrollLeft / pageScrollWidth);
        if (newPage !== activePage) {
            setActivePage(Math.min(newPage, totalPages - 1));
        }
    };

    // Auto-scroll functionality
    useEffect(() => {
        if (isAutoPaused || totalPages <= 1) return;

        const intervalId = setInterval(() => {
            const nextPage = (activePageRef.current + 1) % totalPages;
            scrollToPage(nextPage);
            setActivePage(nextPage);
        }, 3000); // 3 seconds per section

        return () => clearInterval(intervalId);
    }, [isAutoPaused, totalPages, cardsPerPage]);

    useEffect(() => {
        return () => {
            if (pauseTimeoutRef.current) {
                clearTimeout(pauseTimeoutRef.current);
            }
        };
    }, []);

    useGSAP(() => {
        // 1. Dotted Path Animation
        gsap.from(".path", {
            strokeDasharray: 1000,
            strokeDashoffset: 1000,
            scrollTrigger: {
                trigger: ".timeline",
                start: "top center",
                end: "bottom center",
                scrub: true
            }
        });

        // 2. Fade + Slide Buildings
        gsap.from(".milestone", {
            opacity: 0,
            y: 50,
            stagger: 0.3,
            scrollTrigger: {
                trigger: ".timeline",
                start: "top 70%"
            }
        });

        // 3. Subtle Parallax (Premium Feel)
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
        <section id="legacy-wall" className="relative overflow-hidden bg-black py-12"
            style={{
                backgroundImage: 'radial-gradient(rgba(201, 169, 97, 0.1) 1px, transparent 1px)',
                backgroundSize: '32px 32px'
            }}>

            {/* Header */}
            <div className="relative px-6 md:px-12 lg:px-20 mb-4 z-10">
                <div className="mx-auto max-w-3xl text-center">
                    <span className="inline-flex rounded-full border border-[#C9A961]/30 bg-[#C9A961]/5 px-5 py-2 text-[12px] font-semibold uppercase tracking-[0.3em] text-[#C9A961]">
                        Our Legacy
                    </span>
                    <h2 className="mt-5 font-serif text-3xl leading-tight text-white md:text-5xl">
                        Decades of Building <br className="hidden md:block" />
                        <span className="text-[#C9A961] italic font-light">Trust & Excellence</span>
                    </h2>
                </div>
            </div>

            {/* Horizontal Scrolling Timeline Area */}
            <div
                className="timeline relative w-full overflow-x-auto overflow-y-hidden hide-scrollbar pb-20 pt-3"
                ref={scrollContainerRef}
                onScroll={handleScroll}
                onMouseDown={() => pauseAutoScrollTemporarily()}
                onTouchStart={() => pauseAutoScrollTemporarily()}
                onWheel={() => pauseAutoScrollTemporarily(3000)}
            >

                <div className="relative flex items-center min-w-max px-10 md:px-32 w-[max-content] h-[520px]">

                    {/* Cards + SVG share same coordinate system */}
                    <div className="relative h-[520px]" style={{ width: `${cardsContainerWidth}px` }}>

                        {/* SVG inside cards container — same origin, no offset bug */}
                        <div className="absolute inset-0 pointer-events-none">
                            <svg className="text-[#C9A961]/30 drop-shadow-sm" style={{ height: '520px', width: `${cardsContainerWidth}px` }} width={cardsContainerWidth} height={520} viewBox={`0 0 ${cardsContainerWidth} 520`} preserveAspectRatio="none">
                                <path
                                    className="path"
                                    d={`M 0,300 ${timelineData.map((_, i) => {
                                        // dot CENTER Y:
                                        // top cards  → milestone top=30, h=320, dot -bottom-2 → center = 30+320-8+8 = 350
                                        // bottom cards → milestone top=250, dot -top-2 → center = 250-8+8 = 250
                                        const xOffset = (i * CARD_GAP) + 260;
                                        const yOffset = i % 2 === 0 ? 350 : 250;
                                        const prevX = i === 0 ? 0 : ((i - 1) * CARD_GAP) + 260;
                                        const prevY = i === 0 ? 300 : ((i - 1) % 2 === 0 ? 350 : 250);
                                        const diffX = xOffset - prevX;
                                        const c1x = prevX + (diffX * 0.45);
                                        const c1y = prevY;
                                        const c2x = xOffset - (diffX * 0.45);
                                        const c2y = yOffset;
                                        return `C ${c1x},${c1y} ${c2x},${c2y} ${xOffset},${yOffset}`;
                                    }).join(' ')} L ${cardsContainerWidth},${(timelineData.length - 1) % 2 === 0 ? 350 : 250}`}
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
                            const leftPos = (index * CARD_GAP) + 260 - 210;

                            return (
                                <div
                                    key={index}
                                    className="milestone absolute w-[420px] flex flex-col items-center"
                                    style={{
                                        left: `${leftPos}px`,
                                        top: `${isTop ? 350 : 250}px` // This is the exact Y coordinate of the dot and the line
                                    }}
                                >
                                    {/* Fixed Dot exactly on the SVG line */}
                                    <div className={`absolute left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full w-4 h-4 border-[3px] border-zinc-900 bg-[#C9A961] shadow-[0_0_15px_rgba(201,169,97,0.4)] z-20`} />

                                    {/* Card Content - Anchored to the dot */}
                                    <div
                                        className={`relative w-full flex flex-col items-center z-10 bg-zinc-900/80 backdrop-blur-md px-3 py-4 rounded-2xl border border-[#C9A961]/20 shadow-[0_8px_30px_rgba(0,0,0,0.5)] ${isTop ? '-translate-y-full mb-4' : 'mt-4'}`}
                                    >
                                        {item.imageUrl && item.imageUrl !== "" && (
                                            <img src={item.imageUrl} alt={item.placeholderText || 'Legacy image'} className="building w-full h-auto rounded-md mb-4 block" onError={(e) => e.currentTarget.style.display = 'none'} />
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

            {/* Responsive Pagination Dots */}
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

            {/* Custom CSS for hiding the scrollbar */}
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
