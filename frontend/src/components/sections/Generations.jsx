import React from 'react';
import { motion } from 'framer-motion';
import AbstractShape from '../decorative/AbstractShape';
import land3 from '../../assets/images/land3.jpeg';

export default function Generations() {
    return (
        <section className="py-12 md:py-16 bg-[#F6F4F0] px-6 md:px-12 flex items-center justify-center text-center relative overflow-hidden">
            <div className="max-w-[900px] relative z-10">
                <motion.h2
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="text-4xl md:text-7xl font-serif text-[#1C1C1C] leading-tight mb-8"
                >
                    We don't just own land.<br />
                    <span className="italic text-[#5E5E5E]">We borrow it from our children.</span>
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    <p className="text-lg md:text-xl text-[#5E5E5E] font-light mb-16">
                        Designed for generations.
                    </p>
                </motion.div>

                <AbstractShape
                    variant="triangle"
                    className="w-[400px] h-[400px] text-[#8A6E4B] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02]"
                    delay={1}
                    duration={5}
                />
            </div>
        </section>
    );
}
