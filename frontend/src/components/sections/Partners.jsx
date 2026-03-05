import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, MapPin, Phone, Mail, Award } from 'lucide-react';
import ScrollReveal from '../animations/ScrollReveal';
import partner1 from '../../assets/images/partners/partner1.webp';
import partner2 from '../../assets/images/partners/partner2.webp';


const PartnerModal = ({ partner, isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                onClick={onClose}
            >
                <motion.div
                    initial={{ scale: 0.9, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.9, opacity: 0, y: 20 }}
                    transition={{ type: "spring", duration: 0.5 }}
                    className="bg-white max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-6 right-6 w-10 h-10 bg-[#1C1C1C] text-white flex items-center justify-center hover:bg-[#8A6E4B] transition-colors duration-300 z-10"
                    >
                        <X className="w-5 h-5" />
                    </button>

                    {/* Modal Content */}
                    <div className="p-6 md:p-12">
                        {/* Logo */}
                        <div className="flex justify-center mb-8">
                            <img
                                src={partner.image}
                                alt={partner.name}
                                className="max-w-[200px] max-h-[80px] object-contain"
                            />
                        </div>

                        {/* Company Name */}
                        <h2 className="font-serif text-4xl md:text-5xl text-[#1C1C1C] text-center mb-4">
                            {partner.name}
                        </h2>

                        {/* Tagline */}
                        <p className="text-[#8A6E4B] text-center text-lg md:text-xl italic mb-8">
                            {partner.tagline}
                        </p>

                        {/* Description */}
                        <div className="prose prose-lg max-w-none mb-8">
                            <p className="text-[#5E5E5E] leading-relaxed text-base md:text-lg">
                                {partner.description}
                            </p>
                        </div>

                        {/* Key Highlights */}
                        {partner.highlights && (
                            <div className="mb-8">
                                <h3 className="font-serif text-2xl text-[#1C1C1C] mb-4">Key Highlights</h3>
                                <div className="grid md:grid-cols-2 gap-4">
                                    {partner.highlights.map((highlight, idx) => (
                                        <div key={idx} className="flex items-start gap-3">
                                            <Award className="w-5 h-5 text-[#8A6E4B] flex-shrink-0 mt-1" />
                                            <span className="text-[#5E5E5E]">{highlight}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Contact Info */}
                        {partner.contact && (
                            <div className="border-t border-[#E5E2DD] pt-6 mb-6">
                                <div className="grid md:grid-cols-3 gap-4">
                                    {partner.contact.location && (
                                        <div className="flex items-start gap-3">
                                            <MapPin className="w-5 h-5 text-[#8A6E4B] flex-shrink-0" />
                                            <span className="text-sm text-[#5E5E5E]">{partner.contact.location}</span>
                                        </div>
                                    )}
                                    {partner.contact.phone && (
                                        <div className="flex items-start gap-3">
                                            <Phone className="w-5 h-5 text-[#8A6E4B] flex-shrink-0" />
                                            <span className="text-sm text-[#5E5E5E]">{partner.contact.phone}</span>
                                        </div>
                                    )}
                                    {partner.contact.email && (
                                        <div className="flex items-start gap-3">
                                            <Mail className="w-5 h-5 text-[#8A6E4B] flex-shrink-0" />
                                            <span className="text-sm text-[#5E5E5E]">{partner.contact.email}</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}

                        {/* Visit Website Button */}
                        {partner.website && (
                            <div className="flex justify-center">
                                <a
                                    href={partner.website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-3 bg-[#1C1C1C] text-white px-8 py-4 hover:bg-[#8A6E4B] transition-all duration-300 group"
                                >
                                    <span className="font-medium tracking-wider uppercase text-sm">Visit Website</span>
                                    <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                                </a>
                            </div>
                        )}
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

const PartnerLogo = ({ partner, index, onClick }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: index * 0.15 }}
        className="group cursor-pointer"
        onClick={onClick}
    >
        <div className="flex flex-col items-center">
            <div className="relative w-full flex items-center justify-center h-32 md:h-48 px-8 pt-6 pb-12 bg-white border-2 border-[#E5E2DD] group-hover:border-[#8A6E4B] group-hover:bg-[#F6F4F0] transition-all duration-500 group-hover:shadow-2xl overflow-hidden">
                {/* Highlight Overlay */}
                <div className="absolute inset-0 bg-[#8A6E4B]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <img
                    src={partner.image}
                    alt={partner.name}
                    className="max-w-full max-h-full object-contain transition-all duration-700 group-hover:scale-110 relative z-10 mix-blend-multiply"
                />

                {/* "View Info" Indicator */}
                <div className="absolute bottom-0 left-0 right-0 py-3 bg-[#8A6E4B] text-white text-[10px] uppercase tracking-[0.2em] font-bold text-center translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-20">
                    View Details
                </div>
            </div>

            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#8A6E4B] opacity-40 group-hover:opacity-100 transition-all duration-500">
                Click to learn more
            </p>
        </div>
    </motion.div>
);

export default function Partners() {
    const [selectedPartner, setSelectedPartner] = useState(null);

    const partners = [
        {
            name: "NB Constructions Pvt Ltd",
            image: partner1,
            tagline: "Builders to Nations",
            description: "A nationally recognized construction leader based in Gurgaon, focused on providing a one-stop solution for institutional, industrial, commercial, and individual clients nationwide. NB Constructions is synonymous with a new urban lifestyle, delivering premium homes, offices, and retail spaces with a strong emphasis on safety and quality. Part of the Nirman Bharti Group, we have been transforming cityscapes and landscapes for over two decades.",
            highlights: [
                "20+ Years of Excellence in Construction",
                "150+ Skilled Professionals & 3000+ Workforce",
                "Prestigious Projects: IIT Delhi Sonipat Campus",
                "Magneti Marelli Motherson Factory",
                "Gulf Adiba IT Building",
                "Awarded by PWD Minister Haryana for Early Completion",
                "ISO Certification Applied - International Standards",
                "Full-Service: Civil, Plumbing, Fire, HVAC, Solar & More"
            ],
            contact: {
                location: "Plot No. 585, Main Golf Course Road, Sector 43, Gurgaon, Haryana – 122002",
                phone: "+91 124-238-6062/63",
                email: "info@nbconstructions.com"
            },
            website: "https://nbconstructions.com/"
        },
        {
            name: "SYS Developers",
            image: partner2,
            tagline: "Crafting Bespoke Luxury Residences",
            description: "A boutique luxury real estate developer specializing in premium residences across Gurugram. SYS Developers is committed to architectural purity and excellence through a vertically integrated model that includes in-house construction and smart planning to ensure seamless experiences and on-time delivery. Founded by visionaries Mehar Singh, Sagar Janghu, and Ombir Singh, we bring 17+ years of expertise in the luxury segment.",
            highlights: [
                "17+ Years of Luxury Real Estate Expertise",
                "50+ Delivered Projects",
                "1 Million+ Sq Ft Crafted",
                "500+ Families Served",
                "Design with Intention Philosophy",
                "Featured Projects: The Meridian Residences",
                "Skyline Heights & The Ivory Towers",
                "Transparent Delivery & Premium Quality"
            ],
            contact: {
                location: "Plot No. 585, Golf Course Road, Sector 43, Gurugram, Haryana 122003",
                phone: "+91 98113 43475",
                email: "info@sysdevelopers.com"
            },
            website: "https://sys.fabulousmedia.in/"
        },

    ];

    return (
        <>
            <section id="partners" className="relative bg-[#F6F4F0] overflow-hidden">
                {/* Sophisticated Background */}
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-white via-[#F6F4F0] to-white" />
                    <div className="absolute inset-0 opacity-[0.015]" style={{
                        backgroundImage: `repeating-linear-gradient(45deg, #1C1C1C 0, #1C1C1C 1px, transparent 0, transparent 50%)`,
                        backgroundSize: '20px 20px'
                    }} />
                </div>

                <div className="relative z-10 py-16 md:py-24 px-6 md:px-12 lg:px-24">
                    <div className="max-w-[1600px] mx-auto">
                        {/* Section Header */}
                        <div className="text-center mb-12 md:mb-20">
                            <ScrollReveal>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8 }}
                                    className="mb-8"
                                >
                                    <span className="inline-block text-[#8A6E4B] text-xs md:text-sm uppercase tracking-[0.4em] font-semibold">
                                        Trusted Collaborations
                                    </span>
                                    <div className="w-24 h-[1px] bg-[#8A6E4B] mx-auto mt-6" />
                                </motion.div>

                                <motion.h2
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, delay: 0.2 }}
                                    className="font-serif text-[#1C1C1C] text-4xl md:text-5xl lg:text-6xl font-light leading-[1.05] tracking-tight mb-6"
                                >
                                    Our <span className="text-[#8A6E4B]">Partners</span>
                                </motion.h2>

                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: 0.4 }}
                                    className="text-[#5E5E5E] text-lg md:text-xl font-light max-w-3xl mx-auto leading-relaxed"
                                >
                                    We collaborate with industry leaders who share our commitment to excellence,
                                    integrity, and creating lasting value.
                                </motion.p>
                            </ScrollReveal>
                        </div>

                        {/* Partners Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
                            {partners.map((partner, index) => (
                                <PartnerLogo
                                    key={index}
                                    partner={partner}
                                    index={index}
                                    onClick={() => setSelectedPartner(partner)}
                                />
                            ))}
                        </div>

                        {/* Decorative Line */}
                        <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, delay: 0.5 }}
                            className="w-32 h-[1px] bg-[#8A6E4B] mx-auto mt-12 md:mt-16 origin-center"
                        />
                    </div>
                </div>
            </section>

            {/* Partner Modal */}
            <PartnerModal
                partner={selectedPartner}
                isOpen={selectedPartner !== null}
                onClose={() => setSelectedPartner(null)}
            />
        </>
    );
}
