import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import AnanthamLogo from '../brand/AnanthamLogo';

export default function BrandExplanation() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    return (
        <section
            id="brand-explanation"
            ref={containerRef}
            className="py-24 md:py-32 bg-[#F6F4F0] relative overflow-hidden"
        >
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-repeat" />

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24">

                    {/* Brand Logo Section - Visual Anchor */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="w-full lg:w-5/12 flex flex-col items-center lg:items-end text-center lg:text-right"
                    >
                        <div className="relative group p-8 md:p-12 border border-[#C9A961]/20 rounded-sm bg-white shadow-sm transition-all duration-700 hover:shadow-xl hover:border-[#C9A961]/40">
                            {/* Decorative Corner Lines */}
                            <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-[#C9A961] opacity-50 transition-all duration-500 group-hover:w-full group-hover:h-full group-hover:opacity-100" />
                            <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-[#C9A961] opacity-50 transition-all duration-500 group-hover:w-full group-hover:h-full group-hover:opacity-100" />

                            <AnanthamLogo variant="black" className="h-32 md:h-40 w-auto object-contain transition-transform duration-700 transform group-hover:scale-110" />

                            <div className="mt-6">
                                <span className="block text-[#C9A961] text-xs uppercase tracking-[0.4em] font-semibold">Est. 2024</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Content Section - Narrative */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        className="w-full lg:w-7/12"
                    >
                        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#1C1C1C] leading-tight mb-8">
                            More Than a Name. <br />
                            <span className="text-[#8A6E4B] italic">A Promise of Permancence.</span>
                        </h2>

                        <div className="space-y-6 text-lg md:text-xl text-[#3D3D3D] font-light leading-relaxed">
                            <p>
                                Anantham serves as the cornerstone of digital evolution. We are not just architects of code; we are custodians of your legacy in the digital realm.
                            </p>
                            <p>
                                In a world of fleeting interactions, we build platforms that stand the test of time. Our brand represents the infinite possibilities that arise when elegance meets engineering, creating experiences that resonate deeply and endure eternally.
                            </p>
                            <blockquote className="pl-6 border-l-2 border-[#C9A961] my-8 italic text-[#5C5C5C]">
                                "We don't just build websites. We craft digital monuments."
                            </blockquote>
                        </div>

                        <div className="mt-10">
                            <a
                                href="#approach"
                                className="inline-flex items-center gap-3 text-[#1C1C1C] hover:text-[#C9A961] transition-colors duration-300 group"
                            >
                                <span className="uppercase tracking-widest text-sm font-medium border-b border-transparent group-hover:border-[#C9A961] pb-1">Our Philosophy</span>
                                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
