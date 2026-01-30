import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '../animations/ScrollReveal';
import AbstractShape from '../decorative/AbstractShape';

const ValueCard = ({ title, description, icon, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.7, delay: index * 0.15 }}
        className="group relative"
    >
        <div className="bg-white p-8 md:p-10 lg:p-12 h-full flex flex-col border border-[#E5E2DD] hover:border-[#8A6E4B] transition-all duration-500 hover:shadow-xl">
            {/* Icon */}
            <div className="w-14 h-14 md:w-16 md:h-16 text-[#8A6E4B] mb-8 group-hover:scale-110 transition-transform duration-500">
                {icon}
            </div>

            {/* Title */}
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#1C1C1C] mb-6 group-hover:text-[#8A6E4B] transition-colors duration-500">
                {title}
            </h3>

            {/* Description */}
            <p className="text-base md:text-lg text-[#5E5E5E] font-light leading-relaxed">
                {description}
            </p>

            {/* Decorative element */}
            <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#8A6E4B] group-hover:w-full transition-all duration-700" />
        </div>
    </motion.div>
);

export default function ValueProposition() {
    const values = [
        {
            title: "Clarity",
            description: "Transparent documentation, clear titles, and an honest dialogue about what you are buying.",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                    <polyline points="10 9 9 9 8 9" />
                </svg>
            )
        },
        {
            title: "Security",
            description: "Gated communities, legal due diligence, and the peace of mind that comes from certainty.",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="M9 12l2 2 4-4" />
                </svg>
            )
        },
        {
            title: "Legacy",
            description: "Land that appreciates not just in value, but in emotional significance for generations to come.",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
                    <path d="M12 10a6 6 0 0 0-6-6H4a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a6 6 0 0 0 6 6 6 6 0 0 0 6-6h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-2a6 6 0 0 0-6 6z" />
                    <path d="M12 22v-6" />
                    <path d="M8 22l4-4 4 4" />
                </svg>
            )
        },
    ];

    return (
        <section className="py-24 md:py-32 bg-[#F6F4F0] px-6 md:px-12 lg:px-24 relative overflow-hidden">
            <div className="max-w-[1400px] mx-auto relative z-10">
                {/* Header */}
                <div className="mb-16 md:mb-24 text-center">
                    <ScrollReveal>
                        <span className="text-xs md:text-sm font-semibold uppercase tracking-[0.3em] text-[#8A6E4B] block mb-6">
                            Core Pillars
                        </span>
                        <h2 className="font-serif text-[#1C1C1C] text-5xl md:text-6xl lg:text-7xl font-medium max-w-4xl mx-auto leading-[1.1]">
                            Foundations of Excellence.
                        </h2>
                    </ScrollReveal>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
                    {values.map((value, index) => (
                        <ValueCard key={index} {...value} index={index} />
                    ))}
                </div>
            </div>

            {/* Decorative Abstract Shapes */}
            <AbstractShape
                variant="circle"
                className="w-[500px] h-[500px] text-[#8A6E4B] -right-48 top-20 hidden lg:block opacity-[0.04]"
                delay={0.8}
                duration={4}
            />
            <AbstractShape
                variant="square"
                className="w-[300px] h-[300px] text-[#1C1C1C] -left-32 bottom-32 hidden md:block opacity-[0.03]"
                delay={1.2}
                duration={5}
            />
        </section>
    );
}