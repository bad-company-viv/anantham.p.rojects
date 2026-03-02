import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '../animations/ScrollReveal';
import { ShieldCheck, HardHat, Car, School, TrendingUp } from 'lucide-react';

const WhyUsItem = ({ icon: Icon, title, description, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, delay: index * 0.15 }}
        className="group relative h-full"
    >
        <div className="relative bg-white border-2 border-[#E5E2DD] p-8 md:p-10 hover:border-[#8A6E4B] transition-all duration-700 h-full flex flex-col">
            {/* Icon Container */}
            <div className="mb-8">
                <div className="w-20 h-20 rounded-full bg-[#F6F4F0] flex items-center justify-center text-[#8A6E4B] group-hover:scale-110 group-hover:bg-[#8A6E4B] group-hover:text-white transition-all duration-500 relative">
                    <Icon size={32} strokeWidth={1.5} />

                    {/* Pulse Effect */}
                    <div className="absolute inset-0 rounded-full bg-[#8A6E4B] opacity-0 group-hover:opacity-20 group-hover:animate-ping" />
                </div>
            </div>

            {/* Title */}
            <h3 className="font-serif text-3xl md:text-4xl text-[#1C1C1C] mb-4 group-hover:text-[#8A6E4B] transition-colors duration-500 leading-tight">
                {title}
            </h3>

            {/* Description */}
            <p className="text-[#5E5E5E] text-base md:text-lg font-light leading-relaxed flex-grow">
                {description}
            </p>

            {/* Bottom Accent Line */}
            <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-[#8A6E4B] to-[#C9A961] group-hover:w-full transition-all duration-700" />

            {/* Corner Accents */}
            <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-[#C9A961] opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
        </div>

        {/* Shadow Effect */}
        <div className="absolute inset-0 -z-10 translate-y-2 translate-x-2 bg-[#8A6E4B]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
);

export default function WhyUs() {
    const reasons = [
        {
            icon: ShieldCheck,
            title: "Clear Titles",
            description: "All plots come with verified legal documentation and clear titles, ensuring a hassle-free investment experience."
        },
        {
            icon: HardHat,
            title: "Future-Ready Infrastructure",
            description: "Well-planned development with modern infrastructure including wide roads, drainage systems, and utility connections."
        },
        {
            icon: Car,
            title: "Excellent Connectivity",
            description: "Easy access to highways, airports, and public transportation, making daily commute and travel convenient."
        },
        {
            icon: School,
            title: "Nearby Facilities",
            description: "Close proximity to schools, hospitals, shopping centers, and recreational facilities for a complete lifestyle."
        },
        {
            icon: TrendingUp,
            title: "Investment Potential",
            description: "High appreciation potential with planned development projects and infrastructure growth in the surrounding area."
        }
    ];

    return (
        <section id="benefits" className="relative bg-white overflow-hidden">
            {/* Sophisticated Background */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-b from-white via-[#F6F4F0] to-white" />
                <div className="absolute inset-0 opacity-[0.015]" style={{
                    backgroundImage: `repeating-linear-gradient(45deg, #1C1C1C 0, #1C1C1C 1px, transparent 0, transparent 50%)`,
                    backgroundSize: '20px 20px'
                }} />
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
                                    Why Choose Us
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
                                The Anantham
                                <br />
                                <span className="text-[#8A6E4B]">Advantage</span>
                            </motion.h2>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                className="text-[#5E5E5E] text-lg md:text-xl font-light max-w-3xl mx-auto leading-relaxed"
                            >
                                We don't just sell plots; we provide a foundation for your aspirations,
                                built on trust, transparency, and strategic foresight.
                            </motion.p>
                        </div>
                    </ScrollReveal>

                    {/* Reasons Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                        {reasons.map((reason, index) => (
                            <div
                                key={index}
                                className={index === reasons.length - 1 && reasons.length % 3 !== 0 ? "md:col-span-2 lg:col-span-1" : ""}
                            >
                                <WhyUsItem {...reason} index={index} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 0.02, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2 }}
                    className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-[#8A6E4B] blur-[120px]"
                />
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 0.02, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, delay: 0.5 }}
                    className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-[#C9A961] blur-[120px]"
                />
            </div>
        </section>
    );
}
