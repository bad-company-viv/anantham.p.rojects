import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '../animations/ScrollReveal';
import { Play } from 'lucide-react';

export default function FounderVideos() {
    const videos = [
        {
            id: 1,
            title: "Vision & Legacy",
            speaker: "Mehar Singh",
            duration: "3:45",
            thumbnail: "/legacy/nine.png"
        },
        {
            id: 2,
            title: "Building the Future",
            speaker: "Sagar Janghu",
            duration: "4:20",
            thumbnail: "/legacy/eight.jpeg"
        }
    ];

    return (
        <section className="relative bg-[#0A0A0A] overflow-hidden py-24 md:py-32">
            <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0A0A0A] to-[#111]" />
            <div className="relative z-10 px-6 md:px-12 lg:px-24 max-w-[1600px] mx-auto">
                <ScrollReveal>
                    <div className="text-center mb-16 md:mb-24">
                        <span className="inline-block text-[#C9A961] text-xs md:text-sm uppercase tracking-[0.4em] font-semibold mb-6">
                            Insights
                        </span>
                        <h2 className="font-serif text-white text-4xl md:text-5xl lg:text-6xl font-light leading-[1.05] tracking-tight">
                            Founder <span className="text-[#C9A961]">Perspectives</span>
                        </h2>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {videos.map((video, idx) => (
                        <motion.div
                            key={video.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: idx * 0.2 }}
                            className="group relative cursor-pointer"
                        >
                            <div className="relative w-full aspect-video bg-[#1C1C1C] overflow-hidden rounded-sm">
                                {/* Video Placeholder space */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-16 h-16 rounded-full bg-black/50 border border-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-[#C9A961] group-hover:border-[#C9A961] transition-all duration-500">
                                        <Play className="w-6 h-6 text-white ml-1" fill="currentColor" />
                                    </div>
                                </div>
                                <div className="absolute bottom-6 left-6 right-6">
                                    <div className="flex justify-between items-end">
                                        <div>
                                            <h3 className="text-white font-serif text-2xl mb-1">{video.title}</h3>
                                            <p className="text-[#C9A961] text-sm uppercase tracking-wider">{video.speaker}</p>
                                        </div>
                                        <span className="text-white/60 text-xs tracking-widest">{video.duration}</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
