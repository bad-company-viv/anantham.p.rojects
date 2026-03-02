import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '../animations/ScrollReveal';
import { Shield, Layers, Users, Heart, Award, CheckCircle } from 'lucide-react';
import land2 from '../../assets/images/land2.jpeg';



export default function Trust() {


    return (
        <section id="trust" className="relative bg-[#0A0A0A] overflow-hidden">
            {/* Sophisticated Background */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0A0A0A] to-black" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(201,169,97,0.03),transparent_50%)]" />

                {/* Subtle Grid */}
                <div className="absolute inset-0 opacity-[0.02]">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `linear-gradient(rgba(201,169,97,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,97,0.5) 1px, transparent 1px)`,
                        backgroundSize: '100px 100px'
                    }} />
                </div>
            </div>

            <div className="relative z-10 py-16 md:py-24 px-6 md:px-12 lg:px-24">
                <div className="max-w-[1600px] mx-auto">
                    {/* Section Header */}
                    <ScrollReveal>
                        <div className="text-center mb-12 md:mb-20">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="mb-8"
                            >
                                <span className="inline-block text-[#C9A961] text-xs md:text-sm uppercase tracking-[0.4em] font-semibold">
                                    Built on Trust
                                </span>
                                <div className="w-24 h-[1px] bg-[#C9A961] mx-auto mt-6" />
                            </motion.div>

                            <motion.h2
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: 0.2 }}
                                className="font-serif text-white text-4xl md:text-5xl lg:text-6xl font-light leading-[1.05] tracking-tight mb-6"
                            >
                                Relationships over
                                <br />
                                <span className="text-[#C9A961]">Transactions</span>
                            </motion.h2>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                className="text-white/70 text-lg md:text-xl font-light max-w-3xl mx-auto leading-relaxed"
                            >
                                Trust isn't built in a day. It's earned through decades of integrity,
                                transparency, and unwavering commitment to our clients' legacies.
                            </motion.p>
                        </div>
                    </ScrollReveal>

                    {/* Featured Image with Quote */}
                    <motion.div
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="relative mb-12 md:mb-20 max-w-5xl mx-auto"
                    >
                        <div className="relative aspect-[16/9] overflow-hidden">
                            <img
                                src={land2}
                                alt="Trust and Legacy"
                                className="w-full h-full object-cover"
                            />

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                            {/* Quote Overlay */}
                            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 lg:p-16">
                                <p className="font-serif text-white text-2xl md:text-3xl lg:text-4xl italic font-light leading-relaxed mb-4">
                                    "We don't just sell land. We curate legacies that outlast lifetimes."
                                </p>
                                <p className="text-[#C9A961] text-sm uppercase tracking-[0.3em] font-semibold">
                                    — Anantham Promise
                                </p>
                            </div>
                        </div>

                        {/* Decorative Frame */}
                        <div className="absolute -bottom-6 -right-6 w-full h-full border-4 border-[#C9A961]/30 -z-10 hidden md:block" />
                    </motion.div>


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