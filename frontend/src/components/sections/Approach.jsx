import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '../animations/ScrollReveal';
import { IconForesight, IconAccess, IconCuration } from '../decorative/ConceptIcons';

export default function Approach() {
    const approaches = [
        {
            label: "Foresight",
            text: "We identify land where others see only ground. Potential is recognized before it becomes obvious.",
            Icon: IconForesight,
            number: "01"
        },
        {
            label: "Access",
            text: "Seamless pathways to ownership. Every complexity handled, every concern addressed.",
            Icon: IconAccess,
            number: "02"
        },
        {
            label: "Curation",
            text: "Not everything makes the cut. Only parcels that meet our exacting standards are offered.",
            Icon: IconCuration,
            number: "03"
        }
    ];

    return (
        <section id="strategy" className="relative bg-[#F6F4F0] overflow-hidden">
            {/* Sophisticated Background */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-[#F6F4F0] via-white to-[#EDEAE5]" />
                <div className="absolute inset-0 opacity-[0.02]">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, #8A6E4B 1px, transparent 0)`,
                        backgroundSize: '60px 60px'
                    }} />
                </div>
            </div>

            <div className="relative z-10 py-24 md:py-40 px-6 md:px-12 lg:px-24">
                <div className="max-w-[1600px] mx-auto">
                    {/* Section Header */}
                    <ScrollReveal>
                        <div className="text-center mb-20 md:mb-32">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="mb-8"
                            >
                                <span className="inline-block text-[#8A6E4B] text-xs md:text-sm uppercase tracking-[0.4em] font-semibold">
                                    Our Approach
                                </span>
                                <div className="w-24 h-[1px] bg-[#8A6E4B] mx-auto mt-6" />
                            </motion.div>

                            <motion.h2
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: 0.2 }}
                                className="font-serif text-[#1C1C1C] text-5xl md:text-7xl lg:text-8xl font-light leading-[1.05] tracking-tight mb-8"
                            >
                                How we think,
                                <br />
                                <span className="text-[#8A6E4B]">not what we build.</span>
                            </motion.h2>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                className="text-[#5E5E5E] text-lg md:text-xl font-light max-w-3xl mx-auto leading-relaxed"
                            >
                                Anantham emphasizes foresight, seamless access, and purposeful curation
                                to create lasting value in each land parcel.
                            </motion.p>
                        </div>
                    </ScrollReveal>

                    {/* Approach Cards */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
                        {approaches.map((item, index) => (
                            <motion.div
                                key={item.label}
                                initial={{ opacity: 0, y: 60 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{
                                    duration: 0.8,
                                    delay: index * 0.2,
                                    ease: [0.25, 0.1, 0.25, 1]
                                }}
                                className="group relative"
                            >
                                {/* Card */}
                                <div className="relative bg-white border-2 border-[#E5E2DD] p-10 md:p-12 lg:p-14 hover:border-[#8A6E4B] transition-all duration-700 h-full flex flex-col">
                                    {/* Number Badge */}
                                    <div className="absolute -top-6 -right-6 w-16 h-16 bg-[#8A6E4B] flex items-center justify-center group-hover:bg-[#C9A961] transition-colors duration-500">
                                        <span className="text-white text-xl font-serif">{item.number}</span>
                                    </div>

                                    {/* Icon */}
                                    <div className="mb-10 text-[#8A6E4B] opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">
                                        <item.Icon className="w-20 h-20 md:w-24 md:h-24" />
                                    </div>

                                    {/* Title */}
                                    <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#1C1C1C] mb-6 leading-tight group-hover:text-[#8A6E4B] transition-colors duration-500">
                                        {item.label}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-[#5E5E5E] text-base md:text-lg font-light leading-relaxed flex-grow">
                                        {item.text}
                                    </p>

                                    {/* Bottom Line Accent */}
                                    <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#8A6E4B] group-hover:w-full transition-all duration-700" />

                                    {/* Corner Decorations */}
                                    <div className="absolute top-0 left-0 w-20 h-20 border-l-2 border-t-2 border-[#C9A961] opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
                                    <div className="absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-[#C9A961] opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
                                </div>

                                {/* Shadow Effect */}
                                <div className="absolute inset-0 -z-10 translate-y-2 translate-x-2 bg-[#8A6E4B]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </motion.div>
                        ))}
                    </div>

                    {/* Connecting Line */}
                    <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[1px] pointer-events-none">
                        <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, delay: 0.5 }}
                            className="w-full h-full bg-gradient-to-r from-transparent via-[#8A6E4B]/20 to-transparent origin-center"
                        />
                    </div>
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 0.03, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2 }}
                    className="absolute top-1/4 -right-40 w-96 h-96 rounded-full bg-[#8A6E4B] blur-[120px]"
                />
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 0.02, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, delay: 0.5 }}
                    className="absolute bottom-1/4 -left-40 w-96 h-96 rounded-full bg-[#C9A961] blur-[120px]"
                />
            </div>
        </section>
    );
}