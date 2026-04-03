import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import ScrollReveal from "../animations/ScrollReveal";

export default function InstagramReels() {
  const scrollContainerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [activeReel, setActiveReel] = useState(null);
  const reelContainerRefs = useRef([]);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  // Instagram profile URL
  const instagramUrl = "https://www.instagram.com/anantham.projects/";

  // Instagram reel URLs
  const reels = [
    "https://www.instagram.com/reel/DV3Zj3lktF4/",
    "https://www.instagram.com/reel/DVXmV4Tkgvc/",
    "https://www.instagram.com/reel/DVVM4FYCIOu/",
    "https://www.instagram.com/reel/DVBNzJUEswr/",
    "https://www.instagram.com/reel/DUnLB_uEk6c/",
    "https://www.instagram.com/reel/DUVD77yEX3N/",
    "https://www.instagram.com/reel/DUDXQpUkv2e/",
  ];

  // Load Instagram embed script
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    // Process embeds after script loads
    script.onload = () => {
      if (window.instgrm) {
        window.instgrm.Embeds.process();
      }
    };

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  // Intersection Observer to pause reels when not in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsInView(entry.isIntersecting);
          const index = reelContainerRefs.current.indexOf(entry.target);
          if (!entry.isIntersecting && activeReel === index) {
            // Reset active reel when it goes out of view
            setActiveReel(null);
          }
        });
      },
      {
        root: scrollContainerRef.current,
        threshold: 0.5,
      },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    reelContainerRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      observer.disconnect();
    };
  }, [activeReel]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isInView || !scrollContainerRef.current) return;

      const scrollAmount = 360; // Width of one reel card + gap

      if (e.key === "ArrowLeft") {
        e.preventDefault();
        scrollContainerRef.current.scrollBy({
          left: -scrollAmount,
          behavior: "smooth",
        });
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        scrollContainerRef.current.scrollBy({
          left: scrollAmount,
          behavior: "smooth",
        });
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isInView]);

  // Handle reel click
  const handleReelClick = (index) => {
    // Only allow one active reel at a time
    if (activeReel !== index) {
      setActiveReel(index);
    }
  };

  // Mouse drag handlers
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  // Touch handlers for mobile
  const handleTouchStart = (e) => {
    setStartX(e.touches[0].pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    const x = e.touches[0].pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section ref={sectionRef} className="relative bg-white overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-[#F6F4F0] to-white" />
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, #1C1C1C 0, #1C1C1C 1px, transparent 0, transparent 50%)`,
            backgroundSize: "20px 20px",
          }}
        />
      </div>

      <div className="relative z-10 py-16 md:py-24">
        {/* Section Header */}
        <div className="px-6 md:px-10 lg:px-16 mb-12">
          <ScrollReveal>
            <div className="max-w-[1600px] mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mb-8"
              >
                <span className="inline-block text-[#8A6E4B] text-xs md:text-sm uppercase tracking-[0.4em] font-semibold">
                  Follow Our Journey
                </span>
                <div className="w-24 h-[1px] bg-[#8A6E4B] mx-auto mt-6" />
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
                className="font-serif text-[#1C1C1C] text-3xl md:text-4xl lg:text-5xl font-light leading-[1.1] tracking-tight mb-6"
              >
                Explore Our
                <br />
                <span className="text-[#8A6E4B]">Latest Updates</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-[#5E5E5E] text-base md:text-lg font-light max-w-3xl mx-auto leading-relaxed mb-8"
              >
                Experience our projects, insights, and daily moments as we build
                the future
              </motion.p>

              <motion.a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="inline-flex items-center gap-2 text-[#8A6E4B] hover:text-[#6B5538] transition-colors duration-300 text-sm uppercase tracking-[0.2em] font-semibold group"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
                Follow @anantham.projects
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </motion.a>
            </div>
          </ScrollReveal>
        </div>

        {/* Scrolling Reels Container */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative"
        >
          {/* Scroll Hint */}
          <div className="text-center mb-6 px-6">
            <p className="text-[#8A6E4B] text-xs uppercase tracking-[0.3em] font-semibold flex items-center justify-center gap-2">
              <svg
                className="w-4 h-4 animate-pulse"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 16l-4-4m0 0l4-4m-4 4h18"
                />
              </svg>
              Scroll to explore
              <svg
                className="w-4 h-4 animate-pulse"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </p>
          </div>

          {/* Reels Scroll Container */}
          <div
            ref={scrollContainerRef}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onMouseMove={handleMouseMove}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            className="flex gap-6 overflow-x-auto scrollbar-hide px-6 md:px-10 lg:px-16 pb-8 cursor-grab active:cursor-grabbing"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {reels.map((reelUrl, index) => (
              <motion.div
                key={index}
                ref={(el) => (reelContainerRefs.current[index] = el)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex-shrink-0 w-[320px] md:w-[340px] lg:w-1/5 group"
              >
                <div
                  onClick={() => handleReelClick(index)}
                  className="relative bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-[#8A6E4B]/10 hover:border-[#8A6E4B]/30"
                >
                  {/* Instagram Embed - Only render active reel with iframe, others as links */}
                  {activeReel === index ? (
                    <div className="aspect-[9/16] bg-gradient-to-br from-[#F6F4F0] to-white">
                      <iframe
                        src={`${reelUrl}embed`}
                        className="w-full h-full"
                        frameBorder="0"
                        scrolling="no"
                        allowFullScreen
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                      />
                    </div>
                  ) : (
                    <a
                      href={reelUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => {
                        e.preventDefault();
                        handleReelClick(index);
                      }}
                      className="block aspect-[9/16] bg-gradient-to-br from-[#F6F4F0] to-white relative cursor-pointer"
                    >
                      <blockquote
                        className="instagram-media"
                        data-instgrm-permalink={`${reelUrl}?utm_source=ig_embed&utm_campaign=loading`}
                        data-instgrm-version="14"
                        style={{
                          background: "#FFF",
                          border: 0,
                          borderRadius: "3px",
                          margin: 0,
                          padding: 0,
                          width: "100%",
                          height: "100%",
                        }}
                      />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Gradient Overlays for scroll indication */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent pointer-events-none" />
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-12 px-6"
        >
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-gradient-to-r from-[#8A6E4B] to-[#6B5538] text-white text-sm uppercase tracking-[0.2em] font-semibold hover:from-[#6B5538] hover:to-[#8A6E4B] transition-all duration-500 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            View More on Instagram
          </a>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.02, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2 }}
          className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-[#8A6E4B] blur-[120px]"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.02, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-[#C9A961] blur-[120px]"
        />
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
