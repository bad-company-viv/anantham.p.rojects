import React from 'react';
import { motion } from 'framer-motion';

export default function AwardsMarquee() {
    const awards = [
        "Times Real Estate Excellence 2023",
        "North India's Most Trusted Developer",
        "Luxury Land Development of the Year",
        "Economic Times Leadership Award",
        "Zima Award for Architectural Vision",
        "National Architecture Council - Gold Medallion",
        "Green Earth Sustainability Award"
    ];

    return (
        <section className="bg-[#0A0A0A] py-12 border-y border-white/5 overflow-hidden">
            <div className="flex whitespace-nowrap">
                <motion.div
                    animate={{
                        x: [0, -1000],
                    }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 30,
                            ease: "linear",
                        },
                    }}
                    className="flex items-center gap-24 pr-24"
                >
                    {awards.map((award, i) => (
                        <div key={i} className="flex items-center gap-6">
                            <span className="w-2 h-2 bg-[#C9A961] rotate-45" />
                            <span className="text-white/30 text-xs uppercase tracking-[0.5em] font-light">
                                {award}
                            </span>
                        </div>
                    ))}
                    {/* Duplicate for seamless loop */}
                    {awards.map((award, i) => (
                        <div key={`dup-${i}`} className="flex items-center gap-6">
                            <span className="w-2 h-2 bg-[#C9A961] rotate-45" />
                            <span className="text-white/30 text-xs uppercase tracking-[0.5em] font-light">
                                {award}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
