import React, { useEffect } from 'react';
import SEO from '../components/seo/SEO';
import Header from '../components/navigation/Header';
import Hero from '../components/sections/Hero';
import Approach from '../components/sections/Approach';
import Trust from '../components/sections/Trust';
import Team from '../components/sections/Team';
import FounderVideos from '../components/sections/FounderVideos';
import Journey from '../components/sections/Journey';
import LegacyWall from '../components/sections/LegacyWall';
import ComingSoonSonipat from '../components/sections/ComingSoonSonipat';
import FeaturedProjects from '../components/sections/FeaturedProjects';
import InstagramReels from '../components/sections/InstagramReels';
import Contact from '../components/sections/Contact';
import Footer from '../components/sections/Footer';
import PageTransition from '../components/transitions/PageTransition';
import SectionTransition from '../components/transitions/SectionTransition';
import useSmoothScroll from '../components/utils/useSmoothScroll';
import CustomCursor from '../components/ui/CustomCursor';
import NoiseOverlay from '../components/ui/NoiseOverlay';

export default function Home() {
    useSmoothScroll();

    useEffect(() => {
        // Set body height for smooth scroll
        const updateHeight = () => {
            document.body.style.height = 'auto';
        };
        updateHeight();
        window.addEventListener('resize', updateHeight);

        // Handle hash navigation on page load
        if (window.location.hash === '#contact') {
            setTimeout(() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }, 500); // Delay to ensure page is fully rendered
        }

        return () => window.removeEventListener('resize', updateHeight);
    }, []);

    return (
        <PageTransition>
            <SEO 
                title="Premium Land Developments & Infinite Legacies"
                description="Anantham - Infinite.Legacy. We curate premium land environments where generations find their anchor in the shifting tides of time. Discover our vision of permanence and prestige."
                canonical="/"
            />
            <div className="bg-[#F6F4F0] min-h-[100svh]">
                <CustomCursor />
                <NoiseOverlay />
                <Header />
                <main>
                    {/* 1. Hero - First Impression */}
                    {/* Uses svh-based viewport units to ensure consistent height across macOS & Windows */}
                    <Hero />

                    {/* 2. Coming Soon - The Project */}
                    <SectionTransition delay={0.1}>
                        <ComingSoonSonipat />
                    </SectionTransition>

                    {/* 3. Our Projects - Portfolio Slider */}
                    <SectionTransition delay={0.1}>
                        <FeaturedProjects />
                    </SectionTransition>

                    {/* 3. Legacy Wall - Horizontal Timeline */}
                    <SectionTransition delay={0.1}>
                        <LegacyWall />
                    </SectionTransition>

                    {/* 4. Journey - Our Story & Heritage */}
                    <SectionTransition delay={0.1}>
                        <Journey />
                    </SectionTransition>

                    {/* 5. Our Approach - How We Work */}
                    <SectionTransition delay={0.1}>
                        <Approach />
                    </SectionTransition>

                    {/* 6. Trust - Our Values & Principles */}
                    <SectionTransition delay={0.2}>
                        <Trust />
                    </SectionTransition>

                    {/* 7. Team - The People Behind the Story */}
                    <SectionTransition delay={0.1}>
                        <Team />
                    </SectionTransition>

                    {/* Founder Perspectives */}
                    <SectionTransition delay={0.15}>
                        <FounderVideos />
                    </SectionTransition>

                    {/* 9. Instagram Reels */}
                    <SectionTransition delay={0.1}>
                        <InstagramReels />
                    </SectionTransition>

                    {/* 10. Contact - Let's Talk */}
                    <SectionTransition delay={0.1}>
                        <Contact />
                    </SectionTransition>
                </main>

                <SectionTransition delay={0.2}>
                    <Footer />
                </SectionTransition>
            </div>
        </PageTransition>
    );
}
