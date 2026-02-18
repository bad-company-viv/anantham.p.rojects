import React from 'react';
import { motion } from 'framer-motion';

const milestones = [
    {
        year: '1991',
        title: 'MR Construction Begins',
        detail: 'Started MR Construction, a building construction firm by Shri Mehar Singh.'
    },
    {
        year: '1992-2001',
        title: 'Maharishi Vidya Mandir Expansion',
        detail: 'Constructed 25+ Maharishi Vidya Mandir schools across Haryana, MP, UP, and Rajasthan.'
    },
    {
        year: '1994',
        title: 'Sagar Properties Launched',
        detail: 'Started Sagar Properties at MG Road, Sikanderpur, Gurugram as a real estate consulting firm.'
    },
    {
        year: '1990s-2000s',
        title: 'HUDA Plot Advisory Legacy',
        detail: 'Sagar Properties became a prime consulting firm for mass sale of HUDA plots from Sector 31 to 57, Gurugram.'
    },
    {
        year: '2007',
        title: 'Dew Drops Apartment Complex',
        detail: 'Delivered Dew Drops Apartment Complex in Sector 47.'
    },
    {
        year: '2008',
        title: 'N.B. Construction Partnership',
        detail: 'Shri Mehar Singh partnered with Shri Ombir Singh to start NB Construction.'
    },
    {
        year: '2011',
        title: 'SYS Developers Office',
        detail: 'Established SYS Developers office on Main Golf Course Road, Gurugram.'
    },
    {
        year: '2014-2016',
        title: 'Delhi Master Plan Works',
        detail: 'SYS worked extensively in Delhi Master Plan projects.'
    },
    {
        year: '2016-2022',
        title: 'Builder Floors Across Gurugram',
        detail: 'SYS delivered builder floor developments across Gurugram.'
    },
    {
        year: '2018',
        title: 'Next-Gen Leadership',
        detail: 'Sagar joined after MBA and took over the development part of the group.'
    },
    {
        year: '2022',
        title: 'Olive Residency',
        detail: 'Delivered row housing of luxury builder floors: Olive Residency, Mayfield Garden.'
    },
    {
        year: '2024',
        title: 'Krishna Farmland',
        detail: 'Launched Krishna Farmland, a gated farmhouse community.'
    },
    {
        year: '2025',
        title: 'Birth of Anantham',
        detail: 'Anantham was born as the legacy-forward evolution of decades of development experience.'
    }
];

export default function Journey() {
    const pageSize = 4;
    const pages = milestones.reduce((acc, item, index) => {
        const pageIndex = Math.floor(index / pageSize);
        if (!acc[pageIndex]) acc[pageIndex] = [];
        acc[pageIndex].push({ ...item, globalIndex: index });
        return acc;
    }, []);

    return (
        <section id="story" className="relative overflow-hidden bg-[#EEE2C6]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(138,93,54,0.16),transparent_35%),radial-gradient(circle_at_90%_80%,rgba(186,123,62,0.15),transparent_40%)]" />
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(to right, rgba(93,64,35,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(93,64,35,0.08) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

            <div className="relative px-6 pb-20 pt-10 md:px-12 md:pb-28 md:pt-14 lg:px-20 lg:pb-32 lg:pt-16">
                <div className="mx-auto max-w-[1600px]">
                    <div className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
                        <span className="inline-flex rounded-full border border-[#6B4A2B]/30 bg-[#F8F0DD] px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.32em] text-[#6B4A2B]">
                            Legacy Wall
                        </span>
                        <h2 className="mt-5 font-serif text-3xl leading-tight text-[#4A2F1B] md:text-5xl">
                            Decades of Building
                            <span className="block text-[#9C5F2B]">Trust, Places, and Legacy</span>
                        </h2>
                        <p className="mt-4 text-base text-[#5A3A23]/80 md:text-lg">
                            A visual timeline of the milestones that shaped Anantham.
                        </p>
                    </div>

                    <div className="relative -mx-6 md:-mx-12 lg:-mx-20">
                        <div
                            className="snap-x snap-mandatory overflow-x-auto px-6 md:px-12 lg:px-20 [&::-webkit-scrollbar]:hidden"
                            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                        >
                            <div className="flex">
                                {pages.map((page, pageIndex) => (
                                    <div
                                        key={`page-${pageIndex}`}
                                        className="w-[100vw] shrink-0 snap-start"
                                    >
                                        <div className="relative mx-auto h-[620px] max-w-[1500px]">
                                            <div className="absolute left-8 right-8 top-[310px] h-[2px] border-t border-dashed border-[#7D5734]/45" />

                                            {page.map((milestone, itemIndex) => {
                                                const isTop = milestone.globalIndex % 2 === 0;
                                                const leftPosition = `${((itemIndex + 0.5) / page.length) * 100}%`;

                                                return (
                                                    <motion.article
                                                        key={`${milestone.year}-${milestone.title}`}
                                                        initial={{ opacity: 0, y: isTop ? -16 : 16 }}
                                                        whileInView={{ opacity: 1, y: 0 }}
                                                        viewport={{ once: true, margin: '-80px' }}
                                                        transition={{ duration: 0.4, delay: itemIndex * 0.04 }}
                                                        className="absolute h-[620px] w-[290px] -translate-x-1/2"
                                                        style={{ left: leftPosition }}
                                                    >
                                                        <div className={`absolute left-0 right-0 ${isTop ? 'top-0' : 'bottom-0'}`}>
                                                            <div className="flex h-[260px] flex-col rounded-2xl border border-[#7D5734]/22 bg-[#FAF2E1]/90 p-4 shadow-[0_10px_20px_rgba(89,58,35,0.10)]">
                                                                <div className="mb-3 inline-flex rounded-sm bg-[#6B4A2B] px-3 py-1 text-sm font-bold text-[#F8F0DD]">
                                                                    {milestone.year}
                                                                </div>
                                                                <h3 className="font-serif text-[1.45rem] leading-tight text-[#4A2F1B]">
                                                                    {milestone.title}
                                                                </h3>
                                                                <p
                                                                    className="mt-2 text-[0.9rem] leading-relaxed text-[#5A3A23]/84"
                                                                    style={{
                                                                        display: '-webkit-box',
                                                                        WebkitLineClamp: 3,
                                                                        WebkitBoxOrient: 'vertical',
                                                                        overflow: 'hidden'
                                                                    }}
                                                                >
                                                                    {milestone.detail}
                                                                </p>
                                                                <div className="mt-auto rounded-xl border border-dashed border-[#A0784C]/55 bg-[#F3E5C8] p-3">
                                                                    <div className="flex h-[74px] items-center justify-center rounded-lg border border-[#B18A5A]/45 bg-[#EEDCBD] text-[11px] font-semibold uppercase tracking-[0.18em] text-[#8B6036]">
                                                                        Image Space
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className={`absolute left-1/2 h-10 w-[2px] -translate-x-1/2 border-l border-dashed border-[#7D5734]/45 ${isTop ? 'top-[260px]' : 'top-[320px]'}`} />
                                                        <div className="absolute left-1/2 top-[300px] h-5 w-5 -translate-x-1/2 rounded-full border-2 border-[#6B4A2B] bg-[#EEE2C6]">
                                                            <div className="absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#B8743A]" />
                                                        </div>
                                                    </motion.article>
                                                );
                                            })}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="mt-5 flex justify-center">
                        <motion.div
                            animate={{ y: [0, -3, 0] }}
                            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                            className="inline-flex items-center gap-3.5 rounded-full border border-[#8A6038]/40 bg-[#F6EBD4]/95 px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#6B4A2B]"
                        >
                            <span>Swipe Timeline</span>
                            <motion.span
                                animate={{ x: [0, 7, 0] }}
                                transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
                                className="text-[#9C5F2B]"
                            >
                                →
                            </motion.span>
                            <span className="flex items-center gap-1">
                                <motion.i
                                    animate={{ opacity: [0.25, 1, 0.25] }}
                                    transition={{ duration: 1, repeat: Infinity }}
                                    className="h-1.5 w-1.5 rounded-full bg-[#9C5F2B]"
                                />
                                <motion.i
                                    animate={{ opacity: [0.25, 1, 0.25] }}
                                    transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
                                    className="h-1.5 w-1.5 rounded-full bg-[#9C5F2B]"
                                />
                                <motion.i
                                    animate={{ opacity: [0.25, 1, 0.25] }}
                                    transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
                                    className="h-1.5 w-1.5 rounded-full bg-[#9C5F2B]"
                                />
                            </span>
                            <motion.span
                                animate={{ x: [0, 3, 0, -3, 0] }}
                                transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
                                className="ml-1 inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#8A6038]/70 bg-[#9C5F2B] shadow-[0_4px_10px_rgba(96,58,28,0.28)]"
                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    className="h-4.5 w-4.5 text-[#F8EEDB]"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2.2"
                                >
                                    <path d="M3 12h18" />
                                    <path d="m8 7-5 5 5 5" />
                                    <path d="m16 7 5 5-5 5" />
                                </svg>
                            </motion.span>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
