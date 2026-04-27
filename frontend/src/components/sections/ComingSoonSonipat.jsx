import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import ScrollReveal from '../animations/ScrollReveal';
import land3 from '../../assets/images/land3.jpg';

export default function ComingSoonSonipat() {
    return (
        <section className="relative w-full min-h-[80vh] lg:min-h-[90vh] flex items-center justify-center overflow-hidden border-y border-white/10">
            {/* Cinematic Background Image */}
            <div className="absolute inset-0 w-full h-full">
                <img
                    src={land3}
                    alt="Sonipat Landscape"
                    className="w-full h-full object-cover scale-105"
                />

                {/* Overlay Gradients for readability and mood */}
                <div className="absolute inset-0 bg-black/60" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-[#0A0A0A]" />
            </div>

            <div className="relative z-10 px-6 max-w-5xl mx-auto text-center">
                <ScrollReveal>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
                        className="flex flex-col items-center"
                    >
                        <span className="block text-[#C9A961] text-xs md:text-sm uppercase tracking-[0.4em] font-semibold mb-6">
                            Premium Plotted Development
                        </span>
                        <h2 className="font-serif text-white text-6xl md:text-[5.5rem] lg:text-[7rem] font-normal leading-[1.1] md:leading-[1.05] tracking-tight mb-4 drop-shadow-2xl">
                            Coming Soon in <br />
                            <span className="italic font-light text-[#C9A961] block -mt-2 md:-mt-4 lg:-mt-6 pr-4 md:pr-8">Sonipat</span>
                        </h2>

                        <div className="flex items-center justify-center gap-3 mb-6 md:mb-8 text-[#C9A961]">
                            <MapPin className="w-6 h-6 md:w-8 md:h-8" />
                            <span className="text-xl md:text-3xl font-medium tracking-wide text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">Sector 87 & 88</span>
                        </div>

                        <p className="pt-6 md:pt-8 text-white text-base md:text-xl lg:text-2xl font-normal max-w-[800px] mx-auto leading-[1.8] md:leading-[2] tracking-wide mb-10 md:mb-14 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                            An exclusive community of premium residential and commercial plots. Our next masterpiece is taking shape—prepare to witness a newly defined standard of living.
                        </p>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => {
                                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="group relative inline-flex items-center justify-center px-10 py-4 bg-transparent border border-[#C9A961] text-[#C9A961] hover:bg-[#C9A961] hover:text-black transition-all duration-500 overflow-hidden"
                        >
                            <span className="relative z-10 text-xs font-bold uppercase tracking-[0.3em]">
                                Register Interest
                            </span>
                        </motion.button>
                    </motion.div>
                </ScrollReveal>
            </div>

            {/* Decorative Corner Borders */}
            <div className="absolute top-8 left-8 w-16 h-16 border-t border-l border-[#C9A961]/30 hidden md:block" />
            <div className="absolute bottom-8 right-8 w-16 h-16 border-b border-r border-[#C9A961]/30 hidden md:block" />
        </section>
    );
}
