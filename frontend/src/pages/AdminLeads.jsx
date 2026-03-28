import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useToast } from '../components/ui/Toast';
import Header from '../components/navigation/Header';
import Footer from '../components/sections/Footer';
import PageTransition from '../components/transitions/PageTransition';
import CustomCursor from '../components/ui/CustomCursor';
import NoiseOverlay from '../components/ui/NoiseOverlay';
import { Mail, Phone, Clock, User, MessageSquare, Info } from 'lucide-react';

export default function AdminLeads() {
    const [leads, setLeads] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [credentials, setCredentials] = useState({ id: '', password: '' });
    const { addToast } = useToast();

    const handleLogin = (e) => {
        e.preventDefault();
        const ADMIN_ID = import.meta.env.VITE_ADMIN_ID || 'admin';
        const ADMIN_PASS = import.meta.env.VITE_ADMIN_PASSWORD || 'anantham';

        if (credentials.id === ADMIN_ID && credentials.password === ADMIN_PASS) {
            setIsAuthenticated(true);
            addToast('Access Granted', 'success');
        } else {
            addToast('Invalid Credentials', 'error');
        }
    };

    useEffect(() => {
        if (!isAuthenticated) return;
        const fetchLeads = async () => {
            try {
                const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5002/api';
                const response = await fetch(`${API_URL}/leads`, {
                    headers: {
                        'x-admin-id': import.meta.env.VITE_ADMIN_ID || 'admin',
                        'x-admin-password': import.meta.env.VITE_ADMIN_PASSWORD || 'anantham'
                    }
                });
                if (!response.ok) throw new Error('Failed to fetch leads');
                const data = await response.json();
                setLeads(data);
            } catch (error) {
                console.error('Error:', error);
                addToast('Failed to load leads', 'error');
            } finally {
                setIsLoading(false);
            }
        };

        fetchLeads();
    }, [isAuthenticated, addToast]);

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    if (!isAuthenticated) {
        return (
            <PageTransition>
                <div className="bg-[#0A0A0A] min-h-screen flex items-center justify-center px-6">
                    <CustomCursor />
                    <NoiseOverlay />
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="w-full max-w-md p-12 bg-white/5 border border-white/10 relative"
                    >
                        <div className="absolute -inset-4 border border-[#C9A961]/20 -z-10" />
                        
                        <div className="text-center mb-12">
                            <span className="text-[#C9A961] text-[10px] uppercase tracking-[0.4em] font-bold block mb-4">Verification Required</span>
                            <h2 className="font-serif text-white text-3xl font-light">Admin Access</h2>
                        </div>

                        <form onSubmit={handleLogin} className="space-y-6">
                            <div>
                                <label className="block text-[10px] uppercase tracking-[0.2em] text-[#C9A961] mb-2 font-bold">Username</label>
                                <input 
                                    type="text"
                                    value={credentials.id}
                                    onChange={(e) => setCredentials(p => ({ ...p, id: e.target.value }))}
                                    className="w-full bg-white/5 border-b border-white/10 py-3 px-4 focus:outline-none focus:border-[#C9A961] text-white font-light transition-all"
                                    placeholder="Enter username"
                                />
                            </div>
                            <div>
                                <label className="block text-[10px] uppercase tracking-[0.2em] text-[#C9A961] mb-2 font-bold">Password</label>
                                <input 
                                    type="password"
                                    value={credentials.password}
                                    onChange={(e) => setCredentials(p => ({ ...p, password: e.target.value }))}
                                    className="w-full bg-white/5 border-b border-white/10 py-3 px-4 focus:outline-none focus:border-[#C9A961] text-white font-light transition-all"
                                    placeholder="••••••••"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full py-4 mt-8 bg-transparent border border-[#C9A961] text-[#C9A961] uppercase tracking-[0.3em] text-[10px] font-bold hover:bg-[#C9A961] hover:text-black transition-all duration-500"
                            >
                                Authenticate
                            </button>
                        </form>
                    </motion.div>
                </div>
            </PageTransition>
        );
    }

    return (
        <PageTransition>
            <div className="bg-[#F6F4F0] min-h-screen">
                <CustomCursor />
                <NoiseOverlay />
                <Header />
                
                <main className="py-32 px-6 md:px-12 lg:px-24">
                    <div className="max-w-[1600px] mx-auto">
                        <div className="mb-12">
                            <span className="inline-block text-[#C9A961] text-xs md:text-sm uppercase tracking-[0.4em] font-semibold mb-4">
                                Administration
                            </span>
                            <h1 className="font-serif text-[#0A0A0A] text-4xl md:text-6xl font-light tracking-tight">
                                Lead <span className="text-[#C9A961]">Dashboard</span>
                            </h1>
                        </div>

                        {isLoading ? (
                            <div className="flex justify-center items-center h-64">
                                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#C9A961]"></div>
                            </div>
                        ) : leads.length === 0 ? (
                            <div className="bg-white p-12 text-center border border-[#0A0A0A]/5 shadow-sm">
                                <p className="text-black/40 text-lg uppercase tracking-widest">No inquiries received yet.</p>
                            </div>
                        ) : (
                            <div className="grid gap-6">
                                {leads.map((lead) => (
                                    <motion.div 
                                        key={lead.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="bg-white border border-[#0A0A0A]/5 p-8 shadow-sm hover:shadow-md transition-shadow group relative overflow-hidden"
                                    >
                                        <div className="absolute top-0 right-0 p-4">
                                            <span className="text-[10px] uppercase tracking-widest text-black/20 flex items-center gap-2">
                                                <Clock size={12} />
                                                {formatDate(lead.created_at)}
                                            </span>
                                        </div>

                                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                                            <div>
                                                <label className="block text-[10px] uppercase tracking-[0.2em] text-[#C9A961] mb-2 font-bold">Inquirer</label>
                                                <div className="flex items-center gap-3">
                                                    <User size={16} className="text-black/20" />
                                                    <span className="text-black font-serif text-lg">{lead.name}</span>
                                                </div>
                                            </div>

                                            <div>
                                                <label className="block text-[10px] uppercase tracking-[0.2em] text-[#C9A961] mb-2 font-bold">Correspondence</label>
                                                <div className="space-y-1">
                                                    <div className="flex items-center gap-3 text-black/60 text-sm">
                                                        <Mail size={14} />
                                                        {lead.email}
                                                    </div>
                                                    <div className="flex items-center gap-3 text-black/60 text-sm">
                                                        <Phone size={14} />
                                                        {lead.phone}
                                                    </div>
                                                </div>
                                            </div>

                                            <div>
                                                <label className="block text-[10px] uppercase tracking-[0.2em] text-[#C9A961] mb-2 font-bold">Interest</label>
                                                <span className="inline-block px-3 py-1 bg-[#C9A961]/10 text-[#C9A961] text-[10px] uppercase tracking-widest font-bold border border-[#C9A961]/20">
                                                    {lead.interest}
                                                </span>
                                            </div>

                                            <div className="lg:col-span-1">
                                                <label className="block text-[10px] uppercase tracking-[0.2em] text-[#C9A961] mb-2 font-bold">Context</label>
                                                <p className="text-black/60 text-sm italic leading-relaxed">
                                                    "{lead.message || 'No additional context provided.'}"
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        )}
                    </div>
                </main>

                <Footer />
            </div>
        </PageTransition>
    );
}
