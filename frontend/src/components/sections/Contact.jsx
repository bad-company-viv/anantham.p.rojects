import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useToast } from '../ui/Toast';
import { Mail, Phone, MapPin, Send, Clock, ShieldCheck } from 'lucide-react';
import ScrollReveal from '../animations/ScrollReveal';

export default function Contact() {
    const { addToast } = useToast();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        interest: 'investment',
        message: ''
    });
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const validateField = (name, value) => {
        switch (name) {
            case 'name':
                if (!value.trim()) return 'Identity is required';
                return '';
            case 'email':
                if (!value.trim()) return 'Communication channel is required';
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(value)) return 'Please provide a valid email';
                return '';
            case 'phone':
                if (!value.trim()) return 'Contact number is required';
                return '';
            case 'message':
                if (!value.trim()) return 'A brief context is helpful';
                return '';
            default:
                return '';
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (touched[name]) {
            setErrors(prev => ({ ...prev, [name]: validateField(name, value) }));
        }
    };

    const handleBlur = (e) => {
        const { name, value } = e.target;
        setTouched(prev => ({ ...prev, [name]: true }));
        setErrors(prev => ({ ...prev, [name]: validateField(name, value) }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newErrors = {};
        Object.keys(formData).forEach(key => {
            const error = validateField(key, formData[key]);
            if (error) newErrors[key] = error;
        });

        setErrors(newErrors);
        setTouched(Object.keys(formData).reduce((acc, key) => ({ ...acc, [key]: true }), {}));

        if (Object.keys(newErrors).length > 0) {
            addToast('Please complete all essential fields', 'error');
            return;
        }

        setIsSubmitting(true);
        try {
            await new Promise(resolve => setTimeout(resolve, 2000));
            addToast('Request received. A consultant will reach out shortly.', 'success');
            setFormData({ name: '', email: '', phone: '', interest: 'investment', message: '' });
            setTouched({});
            setErrors({});
        } catch (error) {
            addToast('System error. Please contact directly.', 'error');
        } finally {
            setIsSubmitting(false);
        }
    };

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
                        <div className="relative">
                            <div className="absolute -inset-8 border border-white/5 -z-10 group-hover:border-white/10 transition-colors" />

                            <form onSubmit={handleSubmit} className="space-y-8">
                                <div className="grid md:grid-cols-2 gap-8">
                                    {/* Name */}
                                    <div className="group">
                                        <label className="block text-[10px] uppercase tracking-[0.2em] text-[#C9A961] mb-2 font-bold">FullName / Entity</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className="w-full bg-white/5 border-b border-white/10 py-4 px-4 focus:outline-none focus:border-[#C9A961] text-white font-light transition-all placeholder:text-white/10"
                                            placeholder="Ex: Singh Enterprises"
                                        />
                                        {errors.name && touched.name && <p className="text-[#C9A961] text-[10px] mt-2 uppercase tracking-widest">{errors.name}</p>}
                                    </div>

                                    {/* Phone */}
                                    <div className="group">
                                        <label className="block text-[10px] uppercase tracking-[0.2em] text-[#C9A961] mb-2 font-bold">Contact Number</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className="w-full bg-white/5 border-b border-white/10 py-4 px-4 focus:outline-none focus:border-[#C9A961] text-white font-light transition-all placeholder:text-white/10"
                                            placeholder="+91 00000 00000"
                                        />
                                        {errors.phone && touched.phone && <p className="text-[#C9A961] text-[10px] mt-2 uppercase tracking-widest">{errors.phone}</p>}
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="group">
                                    <label className="block text-[10px] uppercase tracking-[0.2em] text-[#C9A961] mb-2 font-bold">Digital Correspondence</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className="w-full bg-white/5 border-b border-white/10 py-4 px-4 focus:outline-none focus:border-[#C9A961] text-white font-light transition-all placeholder:text-white/10"
                                        placeholder="email@example.com"
                                    />
                                    {errors.email && touched.email && <p className="text-[#C9A961] text-[10px] mt-2 uppercase tracking-widest">{errors.email}</p>}
                                </div>

                                {/* Type of Interest */}
                                <div className="group">
                                    <label className="block text-[10px] uppercase tracking-[0.2em] text-[#C9A961] mb-4 font-bold">Nature of Inquiry</label>
                                    <div className="flex flex-wrap gap-4">
                                        {['Investment', 'Development', 'Residential', 'Other'].map((type) => (
                                            <button
                                                key={type}
                                                type="button"
                                                onClick={() => setFormData(p => ({ ...p, interest: type.toLowerCase() }))}
                                                className={`px-6 py-2 text-[10px] uppercase tracking-widest border transition-all ${formData.interest === type.toLowerCase()
                                                    ? 'bg-[#C9A961] text-black border-[#C9A961]'
                                                    : 'border-white/10 text-white/40 hover:border-white/30'
                                                    }`}
                                            >
                                                {type}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Message */}
                                <div className="group">
                                    <label className="block text-[10px] uppercase tracking-[0.2em] text-[#C9A961] mb-2 font-bold">Additional Context</label>
                                    <textarea
                                        rows="4"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className="w-full bg-white/5 border-b border-white/10 py-4 px-4 focus:outline-none focus:border-[#C9A961] text-white font-light transition-all resize-none placeholder:text-white/10"
                                        placeholder="Briefly describe your requirements..."
                                    />
                                </div>

                                <motion.button
                                    type="submit"
                                    disabled={isSubmitting}
                                    whileHover={{ scale: 1.01 }}
                                    whileTap={{ scale: 0.99 }}
                                    className="w-full py-6 bg-transparent border border-[#C9A961] text-[#C9A961] uppercase tracking-[0.4em] text-xs font-bold hover:bg-[#C9A961] hover:text-black transition-all duration-500 flex items-center justify-center gap-4"
                                >
                                    {isSubmitting ? (
                                        'Verifying Request...'
                                    ) : (
                                        <>
                                            Request Private Access
                                            <Send size={14} />
                                        </>
                                    )}
                                </motion.button>
                            </form>
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