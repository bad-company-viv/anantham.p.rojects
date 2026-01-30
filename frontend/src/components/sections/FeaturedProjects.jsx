import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, MapPin, TrendingUp, Award } from 'lucide-react';
import ScrollReveal from '../animations/ScrollReveal';

export default function FeaturedProjects() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const projects = [
        {
            title: "Anantham Estates",
            location: "Sector 89, Gurugram",
            type: "Premium Residential Plots",
            status: "Available",
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
            title: "Legacy Greens",
            location: "Sohna Road, Gurugram",
            type: "Luxury Farmlands",
            status: "Launching Soon",
            highlights: [
                "Eco-Certified",
                "Water Features",
                "Premium Amenities"
            ],
            description: "Expansive farmland estates where nature meets luxury. Perfect for those seeking a retreat from urban chaos while maintaining proximity to the city's conveniences.",
            stats: {
                area: "1-5 Acres",
                appreciation: "20-25% YoY",
                delivery: "Q4 2026"
            }
        },
        {
            title: "Heritage Villas",
            location: "Golf Course Extension Road",
            type: "Ultra-Luxury Plots",
            status: "Sold Out",
            highlights: [
                "Golf Course Facing",
                "Premium Infrastructure",
                "Limited Edition"
            ],
            description: "An exclusive collection of ultra-premium plots in Gurugram's most coveted address. A testament to timeless elegance and strategic investment.",
            stats: {
                area: "300-800 Sq. Yds",
                appreciation: "25-30% YoY",
                delivery: "Completed"
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
        <section className="py-20 md:py-32 bg-white px-6 md:px-12 lg:px-24 relative overflow-hidden">
            <div className="max-w-[1400px] mx-auto relative">
                {/* Section Header */}
                <ScrollReveal>
                    <div className="text-center mb-16 md:mb-24">
                        <span className="text-xs md:text-sm font-semibold uppercase tracking-[0.3em] text-[#8A6E4B] block mb-6">
                            Portfolio
                        </span>
                        <h2 className="font-serif text-[#1C1C1C] text-5xl md:text-6xl lg:text-7xl font-medium mb-8 leading-[1.1]">
                            Featured Projects
                        </h2>
                        <p className="text-[#5E5E5E] text-lg md:text-xl font-light max-w-3xl mx-auto leading-relaxed">
                            Discover our curated collection of premium land investments,
                            each representing a unique opportunity for generational wealth creation.
                        </p>
                    </div>
                </ScrollReveal>

                {/* Project Slider */}
                <div className="relative max-w-5xl mx-auto">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                            className="bg-[#F6F4F0] border-2 border-[#E5E2DD] overflow-hidden hover:border-[#8A6E4B] transition-all duration-500"
                        >
                            <div className="grid md:grid-cols-2">
                                {/* Image Placeholder - Replace with actual project images */}
                                <div className="relative aspect-[4/3] md:aspect-auto bg-gradient-to-br from-[#8A6E4B]/20 to-[#8A6E4B]/5">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="text-center p-8">
                                            <Award className="w-16 h-16 text-[#8A6E4B] mx-auto mb-4 opacity-40" />
                                            <p className="text-[#8A6E4B] text-sm uppercase tracking-wider">
                                                Project Visualization
                                            </p>
                                        </div>
                                    </div>

                                    {/* Status Badge */}
                                    <div className="absolute top-6 left-6">
                                        <span className={`px-4 py-2 text-xs uppercase tracking-wider font-semibold ${projects[currentIndex].status === 'Available'
                                                ? 'bg-green-500 text-white'
                                                : projects[currentIndex].status === 'Launching Soon'
                                                    ? 'bg-blue-500 text-white'
                                                    : 'bg-gray-500 text-white'
                                            }`}>
                                            {projects[currentIndex].status}
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-8 md:p-12 flex flex-col justify-between">
                                    <div>
                                        <h3 className="font-serif text-3xl md:text-4xl text-[#1C1C1C] mb-4 leading-tight">
                                            {projects[currentIndex].title}
                                        </h3>

                                        <div className="flex items-center gap-2 text-[#8A6E4B] mb-3">
                                            <MapPin className="w-4 h-4" />
                                            <span className="text-sm md:text-base font-medium">
                                                {projects[currentIndex].location}
                                            </span>
                                        </div>

                                        <p className="text-[#5E5E5E] text-sm uppercase tracking-[0.2em] font-semibold mb-6">
                                            {projects[currentIndex].type}
                                        </p>

                                        {/* Highlights */}
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {projects[currentIndex].highlights.map((highlight, idx) => (
                                                <span
                                                    key={idx}
                                                    className="px-3 py-1 bg-white border border-[#8A6E4B] text-[#8A6E4B] text-xs uppercase tracking-wider font-medium"
                                                >
                                                    {highlight}
                                                </span>
                                            ))}
                                        </div>

                                        <p className="text-[#5E5E5E] text-base md:text-lg font-light leading-relaxed mb-8">
                                            {projects[currentIndex].description}
                                        </p>
                                    </div>

                                    {/* Stats */}
                                    <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#E5E2DD]">
                                        <div>
                                            <p className="text-[#8A6E4B] text-xs uppercase tracking-wider mb-1">Area</p>
                                            <p className="text-[#1C1C1C] font-semibold text-sm">
                                                {projects[currentIndex].stats.area}
                                            </p>
                                        </div>
                                        <div>
                                            <p className="text-[#8A6E4B] text-xs uppercase tracking-wider mb-1">Growth</p>
                                            <p className="text-[#1C1C1C] font-semibold text-sm flex items-center gap-1">
                                                <TrendingUp className="w-3 h-3" />
                                                {projects[currentIndex].stats.appreciation}
                                            </p>
                                        </div>
                                        <div>
                                            <p className="text-[#8A6E4B] text-xs uppercase tracking-wider mb-1">Delivery</p>
                                            <p className="text-[#1C1C1C] font-semibold text-sm">
                                                {projects[currentIndex].stats.delivery}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation Controls */}
                    <div className="flex items-center justify-center gap-8 mt-12">
                        <button
                            onClick={prevSlide}
                            className="w-12 h-12 border-2 border-[#1C1C1C] flex items-center justify-center hover:bg-[#1C1C1C] hover:text-white transition-all duration-300"
                            aria-label="Previous project"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>

                        <div className="text-[#1C1C1C] font-light text-lg">
                            <span className="font-semibold">{currentIndex + 1}</span>
                            <span className="mx-2">/</span>
                            <span>{projects.length}</span>
                        </div>

                        <button
                            onClick={nextSlide}
                            className="w-12 h-12 border-2 border-[#1C1C1C] flex items-center justify-center hover:bg-[#1C1C1C] hover:text-white transition-all duration-300"
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
                                        ? 'w-12 h-2 bg-[#8A6E4B]'
                                        : 'w-2 h-2 bg-[#8A6E4B]/30 hover:bg-[#8A6E4B]/60'
                                    }`}
                                aria-label={`Go to project ${idx + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
