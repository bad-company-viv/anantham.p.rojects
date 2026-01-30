import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import Philosophy from './pages/Philosophy';
import Curtain from './components/transitions/Curtain';
import { ToastProvider } from './components/ui/Toast';
import LoadingScreen from './components/ui/LoadingScreen';
import ScrollProgress from './components/ui/ScrollProgress';
import BackToTop from './components/ui/BackToTop';
import './index.css';

function App() {
    const location = useLocation();

    return (
        <ToastProvider>
            <LoadingScreen />
            <ScrollProgress />
            <BackToTop />

            <AnimatePresence mode="wait">
                <Routes location={location} key={location.pathname}>
                    <Route path="/" element={<Home />} />
                    <Route path="/philosophy" element={<Philosophy />} />
                    {/* Fallback or 404 can go here */}
                </Routes>
            </AnimatePresence>
        </ToastProvider>
    );
}

export default App;
