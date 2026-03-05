import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import ScrollReveal from '../animations/ScrollReveal';
import AnanthamLogo from '../brand/AnanthamLogo';
import partner1 from '../../assets/images/partners/partner1.webp';
import partner2 from '../../assets/images/partners/partner2.webp';
import partner3 from '../../assets/images/partners/partner3.webp';
import ananthamLogo from '../../assets/logo/ananthamlogo3.jpeg';

export default function Journey() {
    const milestones = [
        {
            year: "",
            company: "SYS Developers",
            title: "Strategic Expansion",
            description: "Established SYS Developers to focus on premium residential and commercial developments. Bringing innovation and modern design principles to luxury real estate.",
            logo: partner2,
            website: "https://sys.fabulousmedia.in/",
            color: "#B8956A",
            achievements: [
                "Premium Developments",
                "Modern Architecture",
                "Client-Centric Approach"
            ]
        },
        {
            year: "",
            company: "N.B. Constructions",
            title: "The Foundation",
            description: "Founded N.B. Constructions with a vision to deliver quality infrastructure projects. Started as a junior engineering firm and grew to deliver over 400 projects across pan India.",
            logo: partner1,
            website: "https://nbconstructions.com/",
            color: "#8A6E4B",
            achievements: [
                "400+ Projects Delivered",
                "Pan India Presence",
                "Government & Private Sector"
            ]
        },

        {
            year: "",
            company: "Anantham",
            title: "The Eternal Legacy",
            description: "Introducing Anantham - where we curate environments where generations find their anchor in the shifting tides of time. Not just land, but legacy. Not just property, but permanence.",
            logo: ananthamLogo,
            color: "#C9A961",
            darkCard: true,
            achievements: [
                "Generational Anchors",
                "Timeless Environments",
                "Infinite Value"
            ]
        }
    ];

    return (
        <section id="story" className="relative bg-[#0A0A0A] overflow-hidden">
            {/* Sophisticated Background */}
            <div className="absolute inset-0">
                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0A0A0A] to-black" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(201,169,97,0.03),transparent_50%)]" />

                {/* Subtle Grid Pattern */}
                <div className="absolute inset-0 opacity-[0.02]">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `linear-gradient(rgba(201,169,97,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,97,0.5) 1px, transparent 1px)`,
                        backgroundSize: '100px 100px'
                    }} />
                </div>
            </div>

            <div className="relative z-10 py-24 md:py-40 px-6 md:px-12 lg:px-24">
                <div className="max-w-[1600px] mx-auto">
                    {/* Section Header - Elite Typography */}
                    <ScrollReveal>
                        <div className="text-center mb-20 md:mb-32">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="mb-8"
                            >
                                <span className="inline-block text-[#C9A961] text-xs md:text-sm uppercase tracking-[0.4em] font-semibold">
                                    Our Journey
                                </span>
                                <div className="w-24 h-[1px] bg-[#C9A961] mx-auto mt-6" />
                            </motion.div>

                            <motion.h2
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: 0.2 }}
                                className="font-serif text-white text-5xl md:text-7xl lg:text-8xl font-light leading-[1.05] tracking-tight mb-8"
                            >
                                Three Decades of
                                <br />
                                <span className="text-[#C9A961]">Excellence</span>
                            </motion.h2>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                className="text-white/70 text-lg md:text-xl font-light max-w-3xl mx-auto leading-relaxed"
                            >
                                From humble beginnings to creating generational legacies,
                                our evolution reflects an unwavering commitment to excellence.
                            </motion.p>
                        </div>
                    </ScrollReveal>

                    {/* Timeline - Premium Design */}
                    <div className="relative">
                        {/* Vertical Timeline Line */}
                        <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[#C9A961]/30 to-transparent hidden lg:block" />

                        {/* Milestones */}
                        <div className="space-y-24 md:space-y-32">
                            {milestones.map((milestone, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 60 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 1, delay: index * 0.2 }}
                                    className={`relative grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'
                                        }`}
                                >
                                    {/* Timeline Dot */}
                                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:block z-20">
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            whileInView={{ scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                                            className="relative"
                                        >
                                            <div
                                                className="w-6 h-6 rounded-full border-4 border-[#0A0A0A]"
                                                style={{ backgroundColor: milestone.color }}
                                            />
                                            <div
                                                className="absolute inset-0 rounded-full animate-ping opacity-20"
                                                style={{ backgroundColor: milestone.color }}
                                            />
                                        </motion.div>
                                    </div>

                                    {/* Content Card */}
                                    <div className={`${index % 2 === 0 ? 'lg:text-right lg:pr-16' : 'lg:pl-16 lg:col-start-2'}`}>
                                        {/* Year Badge */}
                                        <motion.div
                                            initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.8, delay: index * 0.2 + 0.2 }}
                                            className={`inline-block mb-6 ${index % 2 === 0 ? '' : 'lg:ml-0'}`}
                                        >
                                            <span
                                                className="text-6xl md:text-7xl font-serif font-light tracking-tight"
                                                style={{ color: milestone.color }}
                                            >
                                                {milestone.year}
                                            </span>
                                        </motion.div>

                                        {/* Company Name */}
                                        <h3 className="font-serif text-white text-4xl md:text-5xl lg:text-6xl font-light mb-4 leading-tight">
                                            {milestone.company}
                                        </h3>

                                        {/* Title */}
                                        <p
                                            className="text-xl md:text-2xl font-light mb-6 tracking-wide"
                                            style={{ color: milestone.color }}
                                        >
                                            {milestone.title}
                                        </p>

                                        {/* Description */}
                                        <p className="text-white/60 text-base md:text-lg font-light leading-relaxed mb-6 max-w-xl">
                                            {milestone.description}
                                        </p>

                                        {/* Website Link */}
                                        {milestone.website && (
                                            <div className="mb-8">
                                                <a href={milestone.website} target="_blank" rel="noopener noreferrer" className="inline-block text-[#C9A961] hover:text-white transition-colors duration-300 text-sm uppercase tracking-widest font-semibold border-b border-[#C9A961]/30 pb-1">
                                                    Visit Website →
                                                </a>
                                            </div>
                                        )}


                                    </div>

                                    {/* Logo Card */}
                                    <div className={`${index % 2 === 0 ? 'lg:col-start-2' : 'lg:col-start-1 lg:row-start-1'}`}>
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
                                            className="group relative"
                                        >
                                            <div className={`relative p-12 md:p-16 transition-all duration-700 ${milestone.darkCard ? '' : 'bg-white shadow-2xl'}`}>
                                                {/* Logo */}
                                                <div className="flex items-center justify-center h-32 md:h-40">
                                                    {milestone.company === "Anantham" ? (
                                                        <AnanthamLogo className="h-full w-auto" variant="white" />
                                                    ) : milestone.logo ? (
                                                        <img
                                                            src={milestone.logo}
                                                            alt={milestone.company}
                                                            className={`max-h-full max-w-full object-contain opacity-100 ${milestone.darkCard ? 'mix-blend-screen' : 'mix-blend-multiply'}`}
                                                        />
                                                    ) : (
                                                        <h3 className={`font-serif text-3xl md:text-4xl ${milestone.darkCard ? 'text-white' : 'text-[#1C1C1C]'}`}>{milestone.company}</h3>
                                                    )}
                                                </div>
                                            </div>
                                        </motion.div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
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
                    className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[#C9A961] blur-[120px]"
                />
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 0.02, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, delay: 0.5 }}
                    className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-[#8A6E4B] blur-[120px]"
                />
            </div>
        </section>
    );
}
