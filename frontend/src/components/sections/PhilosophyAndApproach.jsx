import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '../animations/ScrollReveal';
import { IconForesight, IconAccess, IconCuration } from '../decorative/ConceptIcons';
import { Shield, Route, Clock, Lightbulb } from 'lucide-react';
import guidingImg from '../../assets/images/guiding.jpeg';

export default function PhilosophyAndApproach() {
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

    const principles = [
        {
            title: "Restraint",
            description: "We don't overbuild. We preserve the natural character of the land, intervening only where necessary.",
            icon: Shield,
            color: "#7FB069"
        },
        {
            title: "Planning",
            description: "Every road, plot, and amenity is placed with decades of foresight, not just for immediate sale.",
            icon: Route,
            color: "#5B8FB9"
        },
        {
            title: "Longevity",
            description: "Materials and infrastructure chosen to weather time with grace, ensuring the estate ages beautifully.",
            icon: Clock,
            color: "#B8956A"
        },
        {
            title: "Thoughtfulness",
            description: "Decisions made with the residents' future well-being as the primary compass.",
            icon: Lightbulb,
            color: "#C9A961"
        }
    ];

    return (
        <section className="relative overflow-hidden">
            {/* Part 1: Our Approach - Light Background */}
            <div className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-[#EDEAE5] relative">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-[0.02]">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, #8A6E4B 1px, transparent 0)`,
                        backgroundSize: '48px 48px'
                    }} />
                </div>

                <div className="max-w-[1400px] mx-auto relative z-10">
                    {/* Header */}
                    <div className="text-center mb-16 md:mb-24">
                        <ScrollReveal>
                            <span className="text-[#8A6E4B] tracking-[0.3em] text-xs md:text-sm uppercase mb-6 font-semibold block">
                                Our Approach
                            </span>
                        </ScrollReveal>
                        <ScrollReveal delay={0.1}>
                            <h2 className="font-serif text-[#1C1C1C] text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-8 font-medium">
                                How we think,<br />not what we build.
                            </h2>
                        </ScrollReveal>
                        <ScrollReveal delay={0.2}>
                            <p className="text-[#5E5E5E] text-lg md:text-xl leading-relaxed font-light max-w-3xl mx-auto">
                                Anantham emphasizes foresight, seamless access, and purposeful curation
                                to create lasting value in each land parcel.
                            </p>
                        </ScrollReveal>
                    </div>

                    {/* Approach Cards - Horizontal Flow */}
                    <div className="flex flex-col md:flex-row items-start gap-8 md:gap-6 lg:gap-8">
                        {approaches.map((item, index) => (
                            <React.Fragment key={item.label}>
                                <motion.div
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{
                                        duration: 0.8,
                                        delay: index * 0.15,
                                        ease: [0.25, 0.1, 0.25, 1]
                                    }}
                                    className="flex-1 bg-white border-2 border-[#E5E2DD] p-8 md:p-10 hover:border-[#8A6E4B] hover:shadow-xl transition-all duration-500 group"
                                >
                                    {/* Icon */}
                                    <div className="mb-6 text-[#8A6E4B] opacity-80 group-hover:opacity-100 transition-opacity duration-500">
                                        <item.Icon className="w-16 h-16 md:w-20 md:h-20" />
                                    </div>

                                    {/* Number */}
                                    <span className="text-[#8A6E4B] text-sm tracking-[0.2em] uppercase block mb-4 font-semibold">
                                        {item.number}
                                    </span>

                                    {/* Title */}
                                    <h3 className="font-serif text-[#1C1C1C] text-3xl md:text-4xl mb-4 group-hover:text-[#8A6E4B] transition-colors duration-500">
                                        {item.label}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-[#5E5E5E] text-base md:text-lg leading-relaxed font-light">
                                        {item.text}
                                    </p>

                                    {/* Decorative corner */}
                                    <div className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        <div className="absolute top-0 right-0 w-full h-full border-t-2 border-r-2 border-[#8A6E4B]" />
                                    </div>
                                </motion.div>

                                {/* Arrow between cards */}
                                {index < approaches.length - 1 && (
                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.8, delay: 0.4 + index * 0.15 }}
                                        className="hidden md:flex h-full pt-20 items-start justify-center text-[#8A6E4B]/40 shrink-0"
                                    >
                                        <svg width="60" height="20" viewBox="0 0 60 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0 10H58M58 10L49 1M58 10L49 19" stroke="currentColor" strokeWidth="1.5" />
                                        </svg>
                                    </motion.div>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>

            {/* Part 2: Guiding Principles - Dark Background */}
            <div className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-[#1C1C1C] relative">
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#8A6E4B]/5 to-transparent pointer-events-none" />

                <div className="max-w-[1400px] mx-auto relative z-10">
                    {/* Header with Image */}
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20 md:mb-32">
                        <div>
                            <ScrollReveal>
                                <span className="text-[#8A6E4B] tracking-[0.3em] text-xs md:text-sm uppercase mb-6 font-semibold block">
                                    Guiding Principles
                                </span>
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

                    {/* Principles Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                        {principles.map((principle, index) => (
                            <motion.div
                                key={principle.title}
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
                                        className="absolute -top-4 -left-2 text-[120px] md:text-[140px] font-serif leading-none pointer-events-none"
                                        style={{ color: `${principle.color}10` }}
                                    >
                                        {String(index + 1).padStart(2, '0')}
                                    </motion.div>

                                    <div className="relative pt-8 pb-12 md:pb-16 border-b-2 transition-all duration-700" style={{ borderColor: `${principle.color}30` }}>
                                        {/* Icon */}
                                        <div className="mb-6">
                                            <div
                                                className="w-14 h-14 rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-110"
                                                style={{ backgroundColor: `${principle.color}20` }}
                                            >
                                                <principle.icon className="w-7 h-7" style={{ color: principle.color }} strokeWidth={1.5} />
                                            </div>
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#F6F4F0] mb-6 group-hover:transition-colors duration-500"
                                            style={{ '--hover-color': principle.color }}
                                            onMouseEnter={(e) => e.currentTarget.style.color = principle.color}
                                            onMouseLeave={(e) => e.currentTarget.style.color = '#F6F4F0'}
                                        >
                                            {principle.title}.
                                        </h3>

                                        {/* Description */}
                                        <p className="text-base md:text-lg text-[#B8B8B8] font-light max-w-md leading-relaxed">
                                            {principle.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
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
            </div>
        </section>
    );
}
