import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Target, Shield, Eye, ArrowLeft, Compass, ArrowUpRight } from 'lucide-react';
import SEO from '../components/seo/SEO';
import { createPageUrl } from '@/utils';
import Header from '@/components/navigation/Header';
import Footer from '@/components/sections/Footer';
import PageTransition from '@/components/transitions/PageTransition';
import SectionTransition from '@/components/transitions/SectionTransition';
import ScrollReveal from '@/components/animations/ScrollReveal';
import useSmoothScroll from '@/components/utils/useSmoothScroll';
import bgImg from '../assets/images/hero_bg.png';
import land3 from '../assets/images/land3.jpg';

export default function Philosophy() {
    useSmoothScroll();
    const { scrollY } = useScroll();

    // Parallax & Fade effects
    const yHero = useTransform(scrollY, [0, 800], [0, 250]);
    const opacityHero = useTransform(scrollY, [0, 500], [1, 0]);
    const scaleHero = useTransform(scrollY, [0, 500], [1, 1.1]);

    const principles = [
        {
            id: "01",
            icon: Target,
            title: "Decadal Vision",
            subtitle: "Think in decades, not quarters.",
            description: "The land we curate today shapes communities for generations. We measure success not in immediate returns, but in enduring value—the kind that grows stronger with every passing decade."
        },
        {
            id: "02",
            icon: Shield,
            title: "Selective Integrity",
            subtitle: "Restraint is our greatest strength.",
            description: "More opportunities are declined than accepted. This selectivity isn't arrogance—it's responsibility. We only offer what we would proudly hold for our own families' legacies."
        },
        {
            id: "03",
            icon: Eye,
            title: "Absolute Clarity",
            subtitle: "Clarity eliminates doubt.",
            description: "Every detail of ownership is made explicit. Legal standing, development potential, and environmental considerations—nothing is hidden. The more you know, the better your legacy."
        }
    ];

    return (
        <PageTransition>
            <SEO 
                title="Our Philosophy & Core Values"
                description="Explore the essence of permanence at Anantham. Our core ideology centers on decadal vision, selective integrity, and absolute clarity in premium land development."
                canonical="/philosophy"
            />
            <div className="bg-[#0A0A0A] min-h-screen text-white">
                <Header />

                <main>
                    {/* Cinematic Hero */}
                    <section className="relative h-screen flex flex-col justify-start pt-40 md:pt-48 overflow-hidden">
                        <motion.div
                            className="absolute inset-0 z-0"
                            style={{ y: yHero, scale: scaleHero, opacity: opacityHero }}
                        >
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000"
                                style={{ backgroundImage: `url(${bgImg})` }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-[#0A0A0A]" />
                            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />
                        </motion.div>

                        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 text-center">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 0.2 }}
                            >
                                <Link
                                    to={createPageUrl('Home')}
                                    className="inline-flex items-center gap-2 text-[#C9A961] hover:text-white transition-colors mb-12 group"
                                >
                                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                                    <span className="text-[10px] tracking-[0.4em] uppercase font-bold">Return to Core</span>
                                </Link>

                                <span className="block text-[#C9A961] text-xs md:text-sm uppercase tracking-[0.5em] font-semibold mb-8">
                                    Our Core Ideology
                                </span>

                                <h1 className="font-serif text-white text-6xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tighter mb-12 font-light">
                                    The Essence of<br />
                                    <span className="text-[#C9A961]">Permanence.</span>
                                </h1>

                                <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light mb-16">
                                    Our philosophy is not a statement; it is a commitment to the few who understand that true wealth is measured in generations.
                                </p>

                                <div className="flex flex-col items-center gap-4">
                                    <div className="w-[1px] h-24 bg-gradient-to-b from-[#C9A961] to-transparent" />
                                </div>
                            </motion.div>
                        </div>

                        {/* Side Watermark */}
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 rotate-90 origin-right translate-x-1/2 pointer-events-none opacity-5 hidden lg:block">
                            <span className="text-[15vh] font-serif text-white whitespace-nowrap tracking-tighter uppercase">
                                Anantham Projects
                            </span>
                        </div>
                    </section>

                    {/* Principles Grid */}
                    <section className="py-24 md:py-48 px-6 md:px-12 lg:px-24 bg-[#0A0A0A] relative border-t border-white/5">
                        <div className="max-w-[1600px] mx-auto">
                            <div className="grid lg:grid-cols-3 gap-12 md:gap-24">
                                {principles.map((principle, index) => (
                                    <ScrollReveal key={principle.id} delay={index * 0.2}>
                                        <div className="group relative">
                                            <div className="mb-12 flex items-center gap-6">
                                                <span className="font-serif text-[#C9A961] text-4xl opacity-20 group-hover:opacity-100 transition-opacity duration-500">
                                                    {principle.id}
                                                </span>
                                                <div className="h-[1px] flex-grow bg-white/10 group-hover:bg-[#C9A961]/50 transition-colors" />
                                                <principle.icon size={24} className="text-[#C9A961] opacity-40 group-hover:opacity-100 transition-opacity" />
                                            </div>

                                            <h3 className="text-[#C9A961] text-xs uppercase tracking-[0.3em] font-bold mb-4">
                                                {principle.title}
                                            </h3>
                                            <h4 className="font-serif text-white text-3xl md:text-4xl mb-8 leading-tight font-light group-hover:text-[#C9A961] transition-colors">
                                                {principle.subtitle}
                                            </h4>
                                            <p className="text-white/40 text-lg leading-relaxed font-light group-hover:text-white/70 transition-colors">
                                                {principle.description}
                                            </p>
                                        </div>
                                    </ScrollReveal>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Legacy Quote Section */}
                    <SectionTransition>
                        <section className="py-48 md:py-64 px-6 md:px-12 lg:px-24 relative overflow-hidden bg-white text-[#0A0A0A]">
                            {/* Decorative Background Texture */}
                            <div className="absolute inset-0 opacity-[0.03]" style={{
                                backgroundImage: `radial-gradient(#0A0A0A 1px, transparent 0)`,
                                backgroundSize: '40px 40px'
                            }} />

                            <div className="max-w-[1200px] mx-auto text-center relative z-10">
                                <ScrollReveal>
                                    <motion.blockquote
                                        className="font-serif text-4xl md:text-6xl lg:text-7xl leading-[1.1] mb-16 tracking-tight font-light"
                                    >
                                        "The land we curate today is the <span className="italic text-[#8A6E4B]">foundation</span> of legacies yet to be born."
                                    </motion.blockquote>
                                    <div className="w-24 h-[1px] bg-[#8A6E4B] mx-auto mb-12" />
                                    <p className="text-[#8A6E4B] text-xs uppercase tracking-[0.5em] font-bold">
                                        Anantham Core Principal
                                    </p>
                                </ScrollReveal>
                            </div>

                            {/* Architectural Accent */}
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] h-32 bg-gradient-to-t from-[#8A6E4B] to-transparent" />
                        </section>
                    </SectionTransition>

                    {/* Operational Philosophy */}
                    <SectionTransition>
                        <section className="py-24 md:py-48 px-6 md:px-12 lg:px-24 bg-[#0A0A0A] relative">
                            <div className="max-w-[1600px] mx-auto grid lg:grid-cols-2 gap-24 items-center">
                                <ScrollReveal>
                                    <div className="relative aspect-[4/5] overflow-hidden group">
                                        <div
                                            className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                                            style={{ backgroundImage: `url(${land3})` }}
                                        />
                                        <div className="absolute inset-0 bg-[#0A0A0A]/20 group-hover:bg-transparent transition-colors duration-700" />

                                        {/* Floating Badge */}
                                        <div className="absolute bottom-12 right-12 bg-[#0A0A0A] p-12 text-center border border-white/10 group-hover:border-[#C9A961]/50 transition-colors">
                                            <span className="block text-[#C9A961] text-4xl font-serif mb-2">100%</span>
                                            <span className="block text-white/40 text-[10px] uppercase tracking-[0.3em] font-bold">Transparency</span>
                                        </div>
                                    </div>
                                </ScrollReveal>

                                <div className="space-y-12">
                                    <ScrollReveal delay={0.2}>
                                        <span className="text-[#C9A961] text-xs md:text-sm uppercase tracking-[0.4em] font-semibold block mb-8">
                                            Beyond Intention
                                        </span>
                                        <h2 className="font-serif text-white text-5xl md:text-7xl leading-[1.05] tracking-tight font-light mb-12">
                                            Operational <br />
                                            <span className="italic">Excellence.</span>
                                        </h2>
                                        <p className="text-white/40 text-xl leading-relaxed font-light mb-12">
                                            Philosophy without action is merely intention. These principles guide every decision, every conversation, and every transaction. Our methodology is built on the rigorous application of these internal standards.
                                        </p>

                                        <div className="flex flex-wrap gap-8 py-12 border-t border-white/10">
                                            <div className="flex items-center gap-4 text-white group cursor-default">
                                                <Compass size={20} className="text-[#C9A961] group-hover:rotate-45 transition-transform duration-500" />
                                                <span className="text-sm tracking-widest uppercase font-medium">Guided by Value</span>
                                            </div>
                                            <div className="flex items-center gap-4 text-white group cursor-default">
                                                <Shield size={20} className="text-[#C9A961] group-hover:scale-110 transition-transform duration-500" />
                                                <span className="text-sm tracking-widest uppercase font-medium">Built on Trust</span>
                                            </div>
                                        </div>

                                        <Link
                                            to={createPageUrl('Home')}
                                            className="inline-flex items-center gap-4 px-10 py-5 border border-[#C9A961] text-[#C9A961] hover:bg-[#C9A961] hover:text-[#0A0A0A] transition-all duration-500 group"
                                        >
                                            <span className="text-xs uppercase tracking-[0.3em] font-bold">
                                                Return to Homepage
                                            </span>
                                            <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                        </Link>
                                    </ScrollReveal>
                                </div>
                            </div>
                        </section>
                    </SectionTransition>
                </main>

                <Footer />
            </div>
        </PageTransition>
    );
}