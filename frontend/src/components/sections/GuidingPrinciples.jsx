import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '../animations/ScrollReveal';
import guidingImg from '../../assets/images/guiding.jpeg';

const PrincipleCard = ({ title, description, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: index * 0.15 }}
            className="group relative"
        >
            <div className="relative overflow-hidden">
                {/* Number indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.15 + 0.3 }}
                    className="absolute -top-4 -left-2 text-[120px] md:text-[140px] font-serif text-[#8A6E4B]/5 leading-none pointer-events-none"
                >
                    {String(index + 1).padStart(2, '0')}
                </motion.div>

                <div className="relative pt-8 pb-12 md:pb-16 border-b border-[#3A3A3A] group-hover:border-[#8A6E4B] transition-all duration-700">
                    <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#F6F4F0] mb-6 group-hover:text-[#8A6E4B] transition-colors duration-500">
                        {title}
                    </h3>
                    <p className="text-base md:text-lg text-[#B8B8B8] font-light max-w-md leading-relaxed">
                        {description}
                    </p>
                </div>
            </div>
        </motion.div>
    );
};

export default function GuidingPrinciples() {
    const principles = [
        {
            title: "Restraint.",
            description: "We don't overbuild. We preserve the natural character of the land, intervening only where necessary."
        },
        {
            title: "Planning.",
            description: "Every road, plot, and amenity is placed with decades of foresight, not just for immediate sale."
        },
        {
            title: "Longevity.",
            description: "Materials and infrastructure chosen to weather time with grace, ensuring the estate ages beautifully."
        },
        {
            title: "Thoughtfulness.",
            description: "Decisions made with the residents' future well-being as the primary compass."
        }
    ];

    return (
        <section className="py-32 md:py-48 bg-[#1C1C1C] px-6 md:px-12 lg:px-24 relative overflow-hidden">
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#8A6E4B]/5 to-transparent pointer-events-none" />

            <div className="max-w-[1400px] mx-auto relative z-10">
                <div className="mb-20 md:mb-32 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <div>
                        <ScrollReveal>
                            <p className="text-[#8A6E4B] tracking-[0.3em] text-xs md:text-sm uppercase mb-6 font-semibold">
                                Guiding Principles
                            </p>
                        </ScrollReveal>
                        <ScrollReveal delay={0.2}>
                            <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif text-[#F6F4F0] max-w-4xl leading-[1.1] font-medium">
                                The foundation of<br />every decision.
                            </h2>
                        </ScrollReveal>
                    </div>

                    <ScrollReveal delay={0.3}>
                        <div className="relative w-full aspect-[4/3] overflow-hidden">
                            <img
                                src={guidingImg}
                                alt="Guiding Principles"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C]/40 to-transparent" />
                        </div>
                    </ScrollReveal>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-8 md:gap-y-12">
                    {principles.map((p, i) => (
                        <PrincipleCard key={i} {...p} index={i} />
                    ))}
                </div>
            </div>

            {/* Decorative elements */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 0.03, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2, delay: 0.5 }}
                className="absolute -right-40 top-1/4 w-[600px] h-[600px] border border-[#8A6E4B] rounded-full hidden lg:block pointer-events-none"
            />
            <motion.div
                initial={{ opacity: 0, rotate: 0 }}
                whileInView={{ opacity: 0.02, rotate: 45 }}
                viewport={{ once: true }}
                transition={{ duration: 3, delay: 0.8 }}
                className="absolute -left-20 bottom-1/4 w-[400px] h-[400px] border border-[#F6F4F0] hidden md:block pointer-events-none"
            />
        </section>
    );
}