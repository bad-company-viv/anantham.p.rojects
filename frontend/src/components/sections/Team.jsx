import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '../animations/ScrollReveal';
import founder1 from '../../assets/images/founders/founder1.webp';
import founder2 from '../../assets/images/founders/founder2.webp';
import founder3 from '../../assets/images/founders/founder3.webp';

export default function Team() {

    const teamMembers = [
        {
            name: "Mehar Singh",
            role: "Founder & Visionary",
            image: founder1,
            specialties: ["25+ Years Experience", "Real Estate Pioneer"],
            bio: "Over 25 years of experience in the real estate and construction sector. Graduated with a B.A. from MD University Rohtak in 1987. Started professional career as a draftsman and went on to start a business with the construction of 13 Maharish Vidyamandir Schools all over India in 1992 & started real estate business in 2001."
        },
        {
            name: "Sagar Janghu",
            role: "Strategic Leader",
            image: founder2,
            specialties: ["Investment Banking", "MBA, ESADE"],
            bio: "Graduated with an MBA from ESADE Business School (Spain) in 2018. Previously worked as an investment banking analyst with JP Morgan (Mumbai) and as a business analyst with ZS Associates (Gurugram). Well experienced in real estate investments and analysis."
        },
        {
            name: "Ombir Singh",
            role: "Founder & Chief Engineer",
            image: founder3,
            specialties: ["25+ Years Experience", "Civil Engineer"],
            bio: "Over 25 years of experience in the real estate and construction sector. Completed Civil Engineer Diploma from VTI Rohtak in 1992. Started professional career as a junior engineer in the government sector. Founded N.B. Constructions in 1995 and have delivered over 400 projects in pan India."
        }
    ];



    return (
        <section id="founders" className="relative bg-white overflow-hidden">
            {/* Sophisticated Background */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-b from-[#F6F4F0] via-white to-[#F6F4F0]" />
                <div className="absolute inset-0 opacity-[0.015]" style={{
                    backgroundImage: `repeating-linear-gradient(45deg, #1C1C1C 0, #1C1C1C 1px, transparent 0, transparent 50%)`,
                    backgroundSize: '20px 20px'
                }} />
            </div>

            <div className="relative z-10 py-10 md:py-16 px-6 md:px-10 lg:px-16">
                <div className="max-w-[1600px] mx-auto">
                    {/* Section Header */}
                    <ScrollReveal>
                        <div className="text-center mb-8 md:mb-12">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="mb-8"
                            >
                                <span className="inline-block text-[#8A6E4B] text-xs md:text-sm uppercase tracking-[0.4em] font-semibold">
                                    Leadership
                                </span>
                                <div className="w-24 h-[1px] bg-[#8A6E4B] mx-auto mt-6" />
                            </motion.div>

                            <motion.h2
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: 0.2 }}
                                className="font-serif text-[#1C1C1C] text-3xl md:text-4xl lg:text-5xl font-light leading-[1.1] tracking-tight mb-4"
                            >
                                Visionaries Behind
                                <br />
                                <span className="text-[#8A6E4B]">The Legacy</span>
                            </motion.h2>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                className="text-[#5E5E5E] text-base md:text-lg font-light max-w-3xl mx-auto leading-relaxed"
                            >
                                Guided by decades of experience and an unwavering commitment to excellence
                            </motion.p>
                        </div>
                    </ScrollReveal>

                    {/* Team Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        {teamMembers.map((member, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: index * 0.2 }}
                                className="group flex flex-col h-full bg-[#F6F4F0]/50 border border-[#8A6E4B]/10 hover:border-[#8A6E4B]/30 transition-all duration-500"
                            >
                                {/* Image Container */}
                                <div className="relative w-56 h-56 md:w-52 md:h-52 mx-auto overflow-hidden rounded-full">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />

                                    {/* Overlay */}
                                    <div className="absolute inset-0 rounded-full bg-gradient-to-t from-[#1C1C1C]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700" />

                                    {/* Content on Image Hover */}
                                    <div className="absolute inset-0 rounded-full flex flex-col justify-end items-center pb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        <div className="flex flex-wrap justify-center gap-1 px-2">
                                            {member.specialties.map((specialty, idx) => (
                                                <span key={idx} className="text-[9px] uppercase tracking-widest text-[#C9A961] border border-[#C9A961]/30 px-2 py-1 bg-black/50 backdrop-blur-md">
                                                    {specialty}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-5 md:p-6 flex-grow flex flex-col">
                                    <div className="mb-4">
                                        <h3 className="font-serif text-xl md:text-2xl text-[#1C1C1C] mb-1 group-hover:text-[#8A6E4B] transition-colors duration-300">
                                            {member.name}
                                        </h3>
                                        <p className="text-[#8A6E4B] text-[10px] uppercase tracking-[0.3em] font-bold">
                                            {member.role}
                                        </p>
                                    </div>

                                    <div className="w-12 h-[1px] bg-[#8A6E4B]/30 mb-4 group-hover:w-full transition-all duration-700" />

                                    <p className="text-[#5E5E5E] text-xs leading-relaxed font-light line-clamp-4 group-hover:line-clamp-none transition-all duration-700">
                                        {member.bio}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 0.02, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2 }}
                    className="absolute top-1/4 -left-40 w-96 h-96 rounded-full bg-[#8A6E4B] blur-[120px]"
                />
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 0.02, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, delay: 0.5 }}
                    className="absolute bottom-1/4 -right-40 w-96 h-96 rounded-full bg-[#C9A961] blur-[120px]"
                />
            </div>
        </section>
    );
}
