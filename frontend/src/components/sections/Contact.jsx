import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Clock, ShieldCheck } from 'lucide-react';
import ScrollReveal from '../animations/ScrollReveal';

export default function Contact() {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://link.on.bingo/js/form_embed.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <section id="contact" className="relative bg-[#0A0A0A] overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-[0.03]" style={{
                backgroundImage: `radial-gradient(#C9A961 1px, transparent 0)`,
                backgroundSize: '40px 40px'
            }} />

            <div className="relative z-10 py-24 md:py-40 px-6 md:px-12 lg:px-24">
                <div className="max-w-[1600px] mx-auto grid lg:grid-cols-2 gap-20 lg:gap-32 items-start">

                    {/* Perspective Side */}
                    <div>
                        <ScrollReveal>
                            <span className="inline-block text-[#C9A961] text-xs md:text-sm uppercase tracking-[0.4em] font-semibold mb-8">
                                Secure Your Legacy
                            </span>
                            <h2 className="font-serif text-white text-5xl md:text-7xl lg:text-8xl font-light leading-[1.05] tracking-tight mb-12">
                                Private
                                <br />
                                <span className="text-[#C9A961]">Consultation</span>
                            </h2>
                            <p className="text-white/40 text-lg md:text-xl font-light leading-relaxed mb-20 max-w-lg">
                                We curate opportunities for the few. Begin a conversation with our principals for exclusive access to premier land holdings.
                            </p>

                            {/* Concierge Perks */}
                            <div className="space-y-12">
                                <div className="flex items-start gap-6 group">
                                    <div className="p-4 bg-white/5 border border-white/10 group-hover:border-[#C9A961]/50 transition-colors">
                                        <Clock size={24} className="text-[#C9A961]" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-serif text-xl mb-2">Priority Response</h4>
                                        <p className="text-white/30 text-sm">Engagement targets within 24 business hours.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-6 group">
                                    <div className="p-4 bg-white/5 border border-white/10 group-hover:border-[#C9A961]/50 transition-colors">
                                        <ShieldCheck size={24} className="text-[#C9A961]" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-serif text-xl mb-2">Confidentiality</h4>
                                        <p className="text-white/30 text-sm">Strict non-disclosure on all early inquiries.</p>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>

                    {/* Engagement Form */}
                    <ScrollReveal delay={0.3}>
                        <div className="relative min-h-[535px] bg-white/5 p-8 border border-white/5">
                            <iframe
                                src="https://link.on.bingo/widget/form/7VpTOAf6SOxJEU3UYqIX"
                                style={{ width: '100%', height: '535px', border: 'none', borderRadius: '3px' }}
                                id="inline-7VpTOAf6SOxJEU3UYqIX"
                                data-layout="{'id':'INLINE'}"
                                data-trigger-type="alwaysShow"
                                data-trigger-value=""
                                data-activation-type="alwaysActivated"
                                data-activation-value=""
                                data-deactivation-type="neverDeactivate"
                                data-deactivation-value=""
                                data-form-name="Website"
                                data-height="535"
                                data-layout-iframe-id="inline-7VpTOAf6SOxJEU3UYqIX"
                                data-form-id="7VpTOAf6SOxJEU3UYqIX"
                                title="Website"
                            >
                            </iframe>
                        </div>
                    </ScrollReveal>
                </div>
            </div>

            {/* Bottom Divider Line */}
            <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24">
                <div className="h-[1px] w-full bg-white/10" />
            </div>
        </section>
    );
}