import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from '../animations/ScrollReveal';
import { Play, X } from 'lucide-react';

const videos = [
    {
        id: 1,
        type: 'youtube',
        youtubeId: 'XuyywcTyQDc',
        youtubeStart: 46,
        title: "Founder's Vision",
        speaker: "Mehar Singh",
        label: "Watch Interview",
        thumbnail: `https://img.youtube.com/vi/XuyywcTyQDc/maxresdefault.jpg`,
    },
    {
        id: 2,
        type: 'local',
        src: '/Anantham-Journey.mp4',
        title: "The Anantham Journey",
        speaker: "Our Story",
        label: "Watch Film",
        thumbnail: null, // will use video poster or gradient
    },
];

function YouTubeEmbed({ youtubeId, youtubeStart, onClose }) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
            onClick={onClose}
        >
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="relative w-full max-w-4xl aspect-video rounded-sm overflow-hidden shadow-2xl"
                onClick={(e) => e.stopPropagation()}
            >
                <iframe
                    src={`https://www.youtube.com/embed/${youtubeId}?start=${youtubeStart}&autoplay=1&rel=0`}
                    title="Founder Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full border-0"
                />
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/70 border border-white/20 flex items-center justify-center hover:bg-[#C9A961] hover:border-[#C9A961] transition-all duration-300"
                >
                    <X className="w-4 h-4 text-white" />
                </button>
            </motion.div>
        </motion.div>
    );
}

function LocalVideoEmbed({ src, title, onClose }) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
            onClick={onClose}
        >
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="relative w-full max-w-4xl aspect-video rounded-sm overflow-hidden shadow-2xl bg-black"
                onClick={(e) => e.stopPropagation()}
            >
                <video
                    src={src}
                    controls
                    autoPlay
                    className="w-full h-full object-contain"
                    title={title}
                />
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/70 border border-white/20 flex items-center justify-center hover:bg-[#C9A961] hover:border-[#C9A961] transition-all duration-300"
                >
                    <X className="w-4 h-4 text-white" />
                </button>
            </motion.div>
        </motion.div>
    );
}

export default function FounderVideos() {
    const [activeVideo, setActiveVideo] = useState(null);

    const openVideo = (video) => setActiveVideo(video);
    const closeVideo = () => setActiveVideo(null);

    return (
        <>
            {/* Lightbox overlay */}
            <AnimatePresence>
                {activeVideo && activeVideo.type === 'youtube' && (
                    <YouTubeEmbed
                        key="yt"
                        youtubeId={activeVideo.youtubeId}
                        youtubeStart={activeVideo.youtubeStart}
                        onClose={closeVideo}
                    />
                )}
                {activeVideo && activeVideo.type === 'local' && (
                    <LocalVideoEmbed
                        key="local"
                        src={activeVideo.src}
                        title={activeVideo.title}
                        onClose={closeVideo}
                    />
                )}
            </AnimatePresence>

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
                                onClick={() => openVideo(video)}
                            >
                                <div className="relative w-full aspect-video bg-[#1C1C1C] overflow-hidden rounded-sm">
                                    {/* YouTube thumbnail */}
                                    {video.type === 'youtube' && (
                                        <img
                                            src={video.thumbnail}
                                            alt={video.title}
                                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                    )}

                                    {/* Local video: show first frame via video element as poster */}
                                    {video.type === 'local' && (
                                        <video
                                            src={video.src}
                                            className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                                            muted
                                            playsInline
                                            preload="metadata"
                                        />
                                    )}

                                    {/* Dark overlay */}
                                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/25 transition-all duration-500" />

                                    {/* Play button */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <motion.div
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="w-16 h-16 rounded-full bg-black/50 border border-white/30 backdrop-blur-sm flex items-center justify-center group-hover:bg-[#C9A961] group-hover:border-[#C9A961] transition-all duration-500 shadow-lg"
                                        >
                                            <Play className="w-6 h-6 text-white ml-1" fill="currentColor" />
                                        </motion.div>
                                    </div>


                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
