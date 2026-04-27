import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, MapPin } from 'lucide-react';
import bgImg from '../../assets/images/hero_bg.png';

export default function Hero() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const { scrollY } = useScroll();

    // Parallax effects
    const y = useTransform(scrollY, [0, 500], [0, 150]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);
    const scale = useTransform(scrollY, [0, 300], [1, 1.1]);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth - 0.5) * 20,
                y: (e.clientY / window.innerHeight - 0.5) * 20
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const scrollToContent = () => {
        const nextSection = document.getElementById('about') || document.getElementById('approach');
        if (nextSection) {
            const elementPosition = nextSection.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - 80;
            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        } else {
            window.scrollTo({
                top: window.innerHeight,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section className="relative h-screen w-full overflow-hidden bg-black">
            {/* Background Image with Parallax */}
            <motion.div
                className="absolute inset-0"
                style={{ y, scale }}
            >
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${bgImg})`,
                        transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`
                    }}
                />
                {/* Sophisticated Gradient Overlays - Reduced Opacity */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/10" />
            </motion.div>

            {/* Content */}
            <motion.div
                className="relative h-full flex flex-col justify-center items-center text-center px-6 md:px-12 pt-28"
                style={{ opacity }}
            >
                <div className="max-w-[1200px] mx-auto">
                    {/* Eyebrow Text */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                        className="mb-8"
                    >
                        <span className="inline-block text-white text-xs md:text-sm uppercase tracking-[0.4em] font-bold drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)]">
                            Anantham
                        </span>
                        <div className="w-24 h-[1px] bg-[#C9A961] mx-auto mt-4" />
                    </motion.div>

                    {/* Main Heading - Ultra Premium */}
                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                        className="font-serif text-white mb-6 text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal leading-[0.95] tracking-tight drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]"
                    >
                        Where Legacies Take Root
                    </motion.h1>

                    {/* Product Categories */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
                        className="flex flex-wrap justify-center items-center gap-4 md:gap-8 mb-8 text-white text-xs md:text-sm lg:text-base uppercase tracking-[0.3em] font-bold opacity-100 drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)]"
                    >
                        <span>Plots</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C9A961]" />
                        <span>Residential</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C9A961]" />
                        <span>Commercial</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C9A961]" />
                        <span>Farmhouses</span>
                    </motion.div>

                    {/* Location Highlight */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                        className="flex justify-center items-center gap-3 mb-10 drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)]"
                    >
                        <MapPin className="w-5 h-5 md:w-6 md:h-6 text-[#C9A961]" />
                        <span className="text-white text-base md:text-lg lg:text-xl uppercase tracking-[0.2em] font-bold">
                            Sector 87 & 88
                        </span>
                    </motion.div>

                    {/* Subheading */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
                        className="text-white text-base md:text-lg lg:text-xl font-normal max-w-3xl mx-auto leading-relaxed mb-12 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
                    >
                        A testament to permanence and prestige. We curate environments where
                        generations find their anchor in the shifting tides of time.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 1.1, ease: [0.25, 0.1, 0.25, 1] }}
                        className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 w-full max-w-2xl mx-auto px-4 sm:px-0"
                    >
                        <a
                            href="#contact"
                            className="group w-full sm:w-auto inline-flex justify-center items-center gap-4 px-8 sm:px-10 py-4 sm:py-5 border-2 border-white/30 bg-black/30 text-white hover:bg-white hover:text-black transition-all duration-500 backdrop-blur-md"
                        >
                            <span className="text-xs sm:text-sm uppercase tracking-[0.3em] font-semibold whitespace-nowrap">
                                Build Your Legacy
                            </span>
                            <svg
                                className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-500 group-hover:translate-x-2"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                        <a
                            href="/brochure.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group w-full sm:w-auto inline-flex justify-center items-center gap-4 px-8 sm:px-10 py-4 sm:py-5 border-2 border-[#C9A961] bg-black/40 text-[#C9A961] hover:bg-[#C9A961] hover:text-black transition-all duration-500 backdrop-blur-md"
                        >
                            <span className="text-xs sm:text-sm uppercase tracking-[0.3em] font-semibold whitespace-nowrap">
                                Download Brochure
                            </span>
                            <svg 
                                className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-500 group-hover:translate-y-1" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                        </a>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.5 }}
                    className="absolute bottom-12 left-1/2 -translate-x-1/2 cursor-pointer"
                    onClick={scrollToContent}
                >
                    <div className="flex flex-col items-center gap-3 group">
                        <span className="text-white/60 text-xs uppercase tracking-[0.3em] font-light">
                            Scroll
                        </span>
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <ChevronDown className="w-6 h-6 text-white/60 group-hover:text-white transition-colors" strokeWidth={1} />
                        </motion.div>
                    </div>
                </motion.div>
            </motion.div>

            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                {/* Corner Accents */}
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 0.3, scale: 1 }}
                    transition={{ duration: 1.5, delay: 1 }}
                    className="absolute top-12 left-12 w-32 h-32 border-l-2 border-t-2 border-[#C9A961]/30"
                />
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 0.3, scale: 1 }}
                    transition={{ duration: 1.5, delay: 1.2 }}
                    className="absolute bottom-12 right-12 w-32 h-32 border-r-2 border-b-2 border-[#C9A961]/30"
                />
            </div>
        </section>
    );
}