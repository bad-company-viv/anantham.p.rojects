import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, MapPin, TrendingUp, Award } from 'lucide-react';
import ScrollReveal from '../animations/ScrollReveal';

import skylineImg from '../../assets/images/sky-line.webp';
import meridianImg from '../../assets/images/meridian.webp';
import ivoryImg from '../../assets/images/ivory.webp';

export default function FeaturedProjects() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const projects = [
        {
            title: "The Sky-Line",
            location: "Sector 89, Gurugram",
            type: "Premium Residential Plots",
            status: "Delivered",
            image: skylineImg,
            highlights: [
                "RERA Approved",
                "Gated Community",
                "Prime Location"
            ],
            description: "Curated land parcels designed for generational wealth. Located in the heart of Gurugram's most prestigious corridor, offering unparalleled connectivity and future appreciation potential.",
            stats: {
                area: "200-500 Sq. Yds",
                appreciation: "15-20% YoY",
                delivery: "Immediate"
            }
        },
        {
            title: "The Meridian",
            location: "Sohna Road, Gurugram",
            type: "Luxury Commercial spaces",
            status: "Delivered",
            image: meridianImg,
            highlights: [
                "Eco-Certified",
                "Water Features",
                "Premium Amenities"
            ],
            description: "Expansive high-street retail and commercial spaces where business meets luxury. Perfect for those seeking a premium address while maintaining proximity to the city's top residential hubs.",
            stats: {
                area: "1000-5000 Sq. Ft",
                appreciation: "20-25% YoY",
                delivery: "Q4 2026"
            }
        },
        {
            title: "Ivory Estates",
            location: "Golf Course Extension Road",
            type: "Ultra-Luxury Villas",
            status: "Delivered",
            image: ivoryImg,
            highlights: [
                "Golf Course Facing",
                "Premium Infrastructure",
                "Limited Edition"
            ],
            description: "An exclusive collection of ultra-premium plots in Gurugram's most coveted address. A testament to timeless elegance and strategic investment.",
            stats: {
                area: "300-800 Sq. Yds",
                appreciation: "25-30% YoY",
                delivery: "2027"
            }
        }
    ];

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % projects.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    };

    return (
        <section id="projects" className="relative bg-white overflow-hidden border-t border-black/5 py-20 md:py-32 px-6 md:px-12 lg:px-24">
            {/* Sophisticated Background */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-b from-[#F6F4F0] via-white to-[#F6F4F0]" />
                <div className="absolute inset-0 opacity-[0.015]" style={{
                    backgroundImage: `repeating-linear-gradient(45deg, #1C1C1C 0, #1C1C1C 1px, transparent 0, transparent 50%)`,
                    backgroundSize: '20px 20px'
                }} />
            </div>

            <div className="relative z-10 max-w-[1400px] mx-auto">
                {/* Section Header */}
                <ScrollReveal>
                    <div className="text-center mb-16 md:mb-24">
                        <span className="text-xs md:text-sm font-semibold uppercase tracking-[0.3em] text-[#C9A961] block mb-6">
                            Portfolio
                        </span>
                        <h2 className="font-serif text-[#1C1C1C] text-5xl md:text-6xl lg:text-7xl font-medium mb-8 leading-[1.1]">
                            Our Projects
                        </h2>
                        <p className="text-[#5E5E5E] text-lg md:text-xl font-light max-w-3xl mx-auto leading-relaxed">
                            Discover our curated collection of premium land investments,
                            spanning Delivered, Ongoing, and Upcoming master-planned developments.
                        </p>
                    </div>
                </ScrollReveal>

                {/* Project Slider */}
                <div className="relative max-w-6xl mx-auto">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                            className="bg-white border border-[#E5E2DD] overflow-hidden hover:border-[#C9A961] transition-all duration-500 shadow-xl shadow-black/5"
                        >
                            <div className="relative h-[450px] sm:h-[500px] md:h-[600px] lg:h-[700px] w-full overflow-hidden bg-[#1C1C1C] group">
                                {/* Actual Image */}
                                <img 
                                    src={projects[currentIndex].image} 
                                    alt={projects[currentIndex].title}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                                />
                                {/* Gradient Overlay for text visibility */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />

                                {/* Status Badge */}
                                <div className="absolute top-6 left-6 md:top-8 md:left-8">
                                    <span className={`px-3 py-1.5 md:px-4 md:py-2 text-[10px] md:text-xs uppercase tracking-wider font-semibold shadow-lg backdrop-blur-md ${
                                        projects[currentIndex].status === 'Delivered'
                                            ? 'bg-black/60 text-[#C9A961] border border-[#C9A961]/30'
                                            : projects[currentIndex].status === 'Ongoing'
                                                ? 'bg-[#C9A961]/80 text-white'
                                                : 'bg-white/80 text-[#1C1C1C]'
                                        }`}>
                                        {projects[currentIndex].status}
                                    </span>
                                </div>

                                {/* Content Overlay */}
                                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 md:p-12 flex flex-col justify-end">
                                    <h3 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white mb-3 md:mb-4 leading-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                                        {projects[currentIndex].title}
                                    </h3>

                                    <div className="flex flex-col md:flex-row md:items-center gap-2 sm:gap-3 md:gap-6 text-[#C9A961]">
                                        <div className="flex items-center gap-2">
                                            <MapPin className="w-4 h-4 md:w-5 md:h-5" />
                                            <span className="text-sm md:text-xl font-medium text-white/90 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                                                {projects[currentIndex].location}
                                            </span>
                                        </div>
                                        <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-[#C9A961]" />
                                        <p className="text-white/80 text-[10px] sm:text-xs md:text-sm uppercase tracking-[0.3em] font-semibold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                                            {projects[currentIndex].type}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation Controls */}
                    <div className="flex items-center justify-center gap-8 mt-12">
                        <button
                            onClick={prevSlide}
                            className="w-12 h-12 border-2 border-[#1C1C1C] flex items-center justify-center hover:bg-[#1C1C1C] hover:text-[#C9A961] transition-all duration-300"
                            aria-label="Previous project"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>

                        <div className="text-[#1C1C1C] font-light text-lg">
                            <span className="font-semibold text-[#C9A961]">{currentIndex + 1}</span>
                            <span className="mx-2 text-[#5E5E5E]">/</span>
                            <span>{projects.length}</span>
                        </div>

                        <button
                            onClick={nextSlide}
                            className="w-12 h-12 border-2 border-[#1C1C1C] flex items-center justify-center hover:bg-[#1C1C1C] hover:text-[#C9A961] transition-all duration-300"
                            aria-label="Next project"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Dot Indicators */}
                    <div className="flex items-center justify-center gap-3 mt-8">
                        {projects.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentIndex(idx)}
                                className={`transition-all duration-300 ${idx === currentIndex
                                        ? 'w-12 h-2 bg-[#C9A961]'
                                        : 'w-2 h-2 bg-[#C9A961]/30 hover:bg-[#C9A961]/60'
                                    }`}
                                aria-label={`Go to project ${idx + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 0.02, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2 }}
                    className="absolute top-1/4 -left-40 w-96 h-96 rounded-full bg-[#1C1C1C] blur-[120px]"
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
