import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '../animations/ScrollReveal';
import meharSinghImg from '../../assets/images/founders/mehar-singh.webp';
import sagarJanghuImg from '../../assets/images/founders/sagar-janghu.webp';
import shubhamJanghuImg from '../../assets/images/founders/Shubham-janghu.jpeg';
import pratibhaMalikImg from '../../assets/images/founders/pratibha-malik.jpeg';

export default function Team() {

    const teamMembers = [
        {
            name: "Mehar Singh",
            role: "Founder & Visionary",
            image: meharSinghImg,
            specialties: ["25+ Years Experience", "Real Estate Pioneer"],
            bio: "Over 25 years of experience in the real estate and construction sector. Graduated with a B.A. from MD University Rohtak in 1987. Started professional career as a draftsman and went on to start a business with the construction of 13 Maharish Vidyamandir Schools all over India in 1992 & started real estate business in 2001."
        },
        {
            name: "Sagar Janghu",
            role: "Managing Partner",
            image: sagarJanghuImg,
            linkedin: "https://www.linkedin.com/in/sagar-janghu/",
            portfolio: "https://www.sagarjanghu.com",
            specialties: ["Investment Banking", "MBA, ESADE"],
            bio: "Graduated with an MBA from ESADE Business School (Spain) in 2018. Previously worked as an investment banking analyst with JP Morgan (Mumbai) and as a business analyst with ZS Associates (Gurugram). Well experienced in real estate investments and analysis."
        },
        {
            name: "Shubham Janghu",
            role: "Legal Advisor",
            image: shubhamJanghuImg,
            linkedin: "https://www.linkedin.com/in/shubham-janghu/",
            specialties: ["Legal Advice", "Corporate Law"],
            bio: "Legal Advisor ensuring compliance, structure, and providing strategic legal counsel for real estate projects."
        },
        {
            name: "Pratibha Malik",
            role: "Chief Designer",
            image: pratibhaMalikImg,
            linkedin: "https://www.linkedin.com/in/pratibha-malik-b036a953/",
            specialties: ["Design", "Architecture"],
            bio: "Chief Designer steering the aesthetic direction and functional design of premium developments."
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
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
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
                                <div className="relative w-56 h-56 md:w-52 md:h-52 mx-auto overflow-hidden rounded-full p-2 bg-white/80 border border-[#8A6E4B]/15">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full rounded-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />

                                </div>

                                {/* Content */}
                                <div className="p-5 md:p-6 flex-grow flex flex-col">
                                    <div className="mb-4">
                                        <h3 className="font-serif text-xl md:text-2xl text-[#1C1C1C] mb-1 group-hover:text-[#8A6E4B] transition-colors duration-300 flex items-center gap-2">
                                            {member.name}
                                            {member.linkedin && (
                                                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition-colors">
                                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>
                                                </a>
                                            )}
                                        </h3>
                                        <p className="text-[#8A6E4B] text-[10px] uppercase tracking-[0.3em] font-bold">
                                            {member.role}
                                        </p>
                                    </div>

                                    <div className="w-12 h-[1px] bg-[#8A6E4B]/30 mb-4 group-hover:w-full transition-all duration-700" />

                                    <p className="text-[#5E5E5E] text-xs leading-relaxed font-light">
                                        {member.bio}
                                    </p>
                                    
                                    {member.portfolio && (
                                        <div className="mt-4 pt-4 border-t border-[#8A6E4B]/10">
                                            <a 
                                                href={member.portfolio} 
                                                target="_blank" 
                                                rel="noopener noreferrer" 
                                                className="inline-flex items-center gap-1.5 text-[9px] uppercase tracking-[0.25em] font-semibold text-[#8A6E4B] hover:text-[#1C1C1C] transition-colors duration-300"
                                            >
                                                View Portfolio
                                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                                            </a>
                                        </div>
                                    )}
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
