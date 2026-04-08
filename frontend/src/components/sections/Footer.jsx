import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { Phone, Mail, Globe, ArrowUpRight, Instagram, Linkedin } from 'lucide-react';

// X (formerly Twitter) brand mark – lucide-react only has the old bird logo
const XIcon = ({ size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.734-8.835L1.254 2.25H8.08l4.261 5.634 5.903-5.634Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
);
import AnanthamLogo from '../brand/AnanthamLogo';
import fabulousLogo from '../../assets/images/sitecredit/fabulous.png';
import gocommerciallyLogo from '../../assets/images/sitecredit/gocommercially.webp';

export default function Footer() {
    const navigate = useNavigate();
    const location = useLocation();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleContactClick = (e) => {
        e.preventDefault();
        const isHome = location.pathname === '/' || location.pathname === '';
        if (!isHome) {
            navigate('/#contact');
        } else {
            const contactSection = document.getElementById('contact');
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    };

    return (
        <footer className="relative bg-[#0A0A0A] overflow-hidden pt-16 pb-12">
            {/* Large Boutique Watermark */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden z-0">
                <h2 className="text-[18vw] font-serif text-white/[0.02] leading-none text-center whitespace-nowrap tracking-tighter">
                    ANANTHAM
                </h2>
            </div>

            <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24">
                <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 mb-24">
                    {/* Brand Column */}
                    <div className="lg:col-span-4 flex flex-col items-start">
                        <button onClick={scrollToTop} className="mb-8 outline-none group">
                            <AnanthamLogo className="h-28 md:h-36 w-auto transition-transform duration-500 group-hover:scale-105" />
                        </button>
                        <p className="text-white/40 font-light text-lg leading-relaxed mb-10 max-w-sm">
                            Curating legacies through premium land developments. Where heritage meets modern luxury across the Indian landscape.
                        </p>

                        {/* Social Links */}
                        <div className="flex items-center gap-6">
                            {[
                                { Icon: Instagram, href: 'https://www.instagram.com/anantham.projects/', label: 'Instagram' },
                                { Icon: Linkedin, href: 'https://www.linkedin.com/company/anantham-projects/', label: 'LinkedIn' },
                                { Icon: XIcon, href: 'https://x.com/Anantham88', label: 'X (Twitter)' },
                            ].map(({ Icon, href, label }) => (
                                <motion.a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={label}
                                    whileHover={{ scale: 1.1, color: '#C9A961' }}
                                    className="text-white/40 transition-colors p-2 -m-2 flex items-center justify-center rounded-full"
                                >
                                    <Icon size={20} strokeWidth={1.5} />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Access */}
                    <div className="lg:col-span-4 grid grid-cols-2 gap-8">
                        <div>
                            <h4 className="text-white text-xs uppercase tracking-[0.3em] font-semibold mb-8">Navigation</h4>
                            <ul className="space-y-4">
                                {[
                                    { label: 'The Story', id: '#story' },
                                    { label: 'Founders', id: '#founders' },
                                    { label: 'Philosophy', path: '/philosophy' },
                                    { label: 'Strategy', id: '#strategy' },
                                    { label: 'Trust', id: '#trust' }
                                ].map((item) => (
                                    <li key={item.label}>
                                        <a
                                            href={item.path || item.id}
                                            onClick={(e) => {
                                                if (item.path) {
                                                    e.preventDefault();
                                                    navigate(item.path);
                                                    return;
                                                }
                                                e.preventDefault();
                                                const isHome = location.pathname === '/' || location.pathname === '';
                                                if (!isHome) {
                                                    navigate(`/${item.id}`);
                                                } else {
                                                    const element = document.getElementById(item.id.slice(1));
                                                    if (element) {
                                                        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                                    }
                                                }
                                            }}
                                            className="text-white/40 hover:text-[#C9A961] transition-colors font-light"
                                        >
                                            {item.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-white text-xs uppercase tracking-[0.3em] font-semibold mb-8">Consultation</h4>
                            <ul className="space-y-4">
                                <li>
                                    <a
                                        href="#contact"
                                        onClick={handleContactClick}
                                        className="text-white/40 hover:text-[#C9A961] transition-colors font-light flex items-center gap-2 group"
                                    >
                                        Private Request
                                        <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                    </a>
                                </li>
                                {/* <li>
                                    <a href="#" className="text-white/40 hover:text-[#C9A961] transition-colors font-light">
                                        Press & Media
                                    </a>
                                </li> */}
                            </ul>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="lg:col-span-4 flex flex-col items-start lg:items-end text-left lg:text-right">
                        <h4 className="text-white text-xs uppercase tracking-[0.3em] font-semibold mb-8">Establish Contact</h4>
                        <div className="space-y-6">
                            <a href="tel:+918510070809" className="block group">
                                <span className="text-white/40 text-sm block mb-1">Direct Line</span>
                                <span className="text-white text-xl md:text-2xl font-serif group-hover:text-[#C9A961] transition-colors tracking-tight">
                                    +91 85100 70809
                                </span>
                            </a>
                            {/* <a href="mailto:info@ananthamprojects.com" className="block group">
                                <span className="text-white/40 text-sm block mb-1">Communication</span>
                                <span className="text-white text-xl md:text-2xl font-serif group-hover:text-[#C9A961] transition-colors tracking-tight">
                                    info@ananthamprojects.com
                                </span>
                            </a> */}
                            {/* <div className="pt-4">
                                <button
                                    onClick={scrollToTop}
                                    className="px-8 py-3 border border-white/20 text-white text-xs uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-500"
                                >
                                    Back to Top
                                </button>
                            </div> */}
                        </div>
                    </div>
                </div>

                {/* Final Footer Bar - Unified Black */}
                <div className="mt-24 pt-12 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
                    {/* Copyright Info */}
                    <div className="flex flex-col items-center md:items-start gap-4">
                        <p className="text-white/20 text-[10px] uppercase tracking-[0.2em] font-medium">
                            &copy; {new Date().getFullYear()} Anantham Projects. All rights reserved.
                        </p>
                    </div>

                    {/* Site Credits */}
                    <div className="flex items-center gap-8">
                        {/* <span className="text-white/20 text-[10px] uppercase tracking-[0.2em] font-medium">Curation by</span> */}
                        <div className="flex items-center gap-6">
                            <a
                                href="https://fabulousmedia.in/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:opacity-80 transition-all duration-300"
                            >
                                <img src={fabulousLogo} alt="Fabulous Media" className="h-5" />
                            </a>
                            <a
                                href="https://gocommercially.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:opacity-80 transition-all duration-300"
                            >
                                <img src={gocommerciallyLogo} alt="GoCommercially" className="h-5" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}