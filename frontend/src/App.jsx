import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import Philosophy from './pages/Philosophy';
import AdminLeads from './pages/AdminLeads';
import Curtain from './components/transitions/Curtain';
import LoadingScreen from './components/ui/LoadingScreen';
import ScrollProgress from './components/ui/ScrollProgress';
import BackToTop from './components/ui/BackToTop';
import WhatsAppWidget from './components/ui/WhatsAppWidget';
import { HelmetProvider } from 'react-helmet-async';
import { ToastProvider } from './components/ui/Toast';
import './index.css';

function App() {
    const location = useLocation();

    useEffect(() => {
        // Track PageView on route changes for Meta Pixel
        if (window.fbq) {
            window.fbq('track', 'PageView');
        }
    }, [location]);

    return (
        <HelmetProvider>
            <ToastProvider>
                <LoadingScreen />
                <ScrollProgress />
                <BackToTop />
                <WhatsAppWidget />

                <AnimatePresence mode="wait">
                    <Routes location={location} key={location.pathname}>
                        <Route path="/" element={<Home />} />
                        <Route path="/philosophy" element={<Philosophy />} />
                        <Route path="/admin" element={<AdminLeads />} />
                        {/* Fallback or 404 can go here */}
                    </Routes>
                </AnimatePresence>
            </ToastProvider>
        </HelmetProvider>
    );
}

export default App;
