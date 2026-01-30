import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '../animations/ScrollReveal';
import WaveText from '../animations/WaveText';
import AbstractShape from '../decorative/AbstractShape';
import land1 from '../../assets/images/land1.jpeg';

export default function Problem() {
    return (
        <section className="py-32 md:py-48 px-6 md:px-12 lg:px-24 relative overflow-hidden">
            <div className="max-w-[1400px] mx-auto">
                <ScrollReveal>
                    <p className="text-[#8A6E4B] tracking-[0.3em] text-sm font-semibold uppercase mb-12">
                        The Problem
                    </p>
                </ScrollReveal>

                <div className="grid md:grid-cols-12 gap-12 lg:gap-20 items-center">
                    <div className="md:col-span-7">
                        <ScrollReveal delay={0.2}>
                            <h2 className="font-serif text-[#1C1C1C] text-5xl md:text-7xl lg:text-8xl leading-[1.1] mb-12 font-medium">
                                Land is often sold as a transaction.<br />
                                <span className="text-[#5E5E5E]">Rarely as a relationship.</span>
                            </h2>
                        </ScrollReveal>

                        <div className="h-[1px] bg-gradient-to-r from-[#8A6E4B] via-[#8A6E4B]/20 to-transparent mb-12" />
                        <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 2, delay: 0.3 }}
                            className="h-[1px] bg-gradient-to-r from-transparent via-[#8A6E4B]/20 to-[#8A6E4B] mb-12 origin-right"
                            style={{ marginTop: -13 }}
                        />

                        <ScrollReveal delay={0.4}>
                            <p className="text-[#5E5E5E] text-lg leading-relaxed mb-8 font-light max-w-xl">
                                In a market driven by urgency and volume, the essence of what land truly
                                represents has been forgotten. Buyers are left navigating uncertainty,
                                confronted by fragmented information and short-term thinking.
                            </p>
                        </ScrollReveal>

                        <ScrollReveal delay={0.45}>
                            <p className="text-[#1C1C1C] text-lg leading-relaxed mb-8 font-light italic max-w-xl">
                                We believe in creating{' '}
                                <WaveText className="font-serif text-xl text-[#8A6E4B] not-italic" delay={0.6}>
                                    enduring places
                                </WaveText>
                                {' '}that transcend the ordinary.
                            </p>
                        </ScrollReveal>

                        <ScrollReveal delay={0.5}>
                            <p className="text-[#5E5E5E] text-lg leading-relaxed font-light max-w-xl">
                                The result is not just a purchase—it's often a compromise. A decision made
                                in haste, without clarity, without confidence.
                            </p>
                        </ScrollReveal>
                    </div>

                    <div className="md:col-span-5 relative mt-12 md:mt-0">
                        <ScrollReveal delay={0.6}>
                            <div className="relative overflow-hidden aspect-[4/5] md:aspect-[3/4]">
                                <img
                                    src={land1}
                                    alt="Land Landscape"
                                    className="w-full h-full object-cover transition-all duration-700 ease-in-out"
                                />
                                <div className="absolute inset-0 bg-black/10" />
                            </div>
                        </ScrollReveal>
                    </div>
                </div>

                {/* Subtle decorative elements */}
                <AbstractShape
                    variant="square"
                    className="w-[300px] h-[300px] text-[#8A6E4B] right-0 top-1/4 hidden md:block"
                    delay={1}
                    duration={4}
                />
                <AbstractShape
                    variant="line"
                    className="w-[200px] h-[200px] text-[#1C1C1C] left-12 bottom-1/4 hidden lg:block"
                    delay={1.5}
                    duration={3}
                />
            </div>
        </section>
    );
}