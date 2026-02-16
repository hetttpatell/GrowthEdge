import { motion } from 'framer-motion';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { AboutSection } from './AboutSection';
import { useEffect, useState } from 'react';

export const AboutPage = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // Set loaded state for smooth animations
        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, 100);

        // Trigger navbar loaded state by dispatching custom event
        const event = new CustomEvent('pageLoaded', { detail: { page: 'about' } });
        window.dispatchEvent(event);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="min-h-screen bg-white" data-testid="about-page">
            <Navbar />

            {/* Page Header */}
            <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 8 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="pt-32 pb-8 bg-gradient-to-br from-white via-blue-50/30 to-cyan-50/30"
            >
                <div className="container mx-auto px-4 md:px-8 max-w-7xl">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.995 }}
                        animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 0.995 }}
                        transition={{ duration: 0.3, delay: 0.1, ease: "easeOut" }}
                        className="text-center"
                    >
                        <motion.h1
                            className="text-4xl md:text-6xl font-bold font-['Outfit'] text-[#0B1F3A] mb-4"
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 5 }}
                            transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
                        >
                            About <span className="text-[#E63946]">Growth Edge</span>
                        </motion.h1>
                        <motion.p
                            className="text-lg text-slate-600 max-w-2xl mx-auto"
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 5 }}
                            transition={{ duration: 0.3, delay: 0.5, ease: "easeOut" }}
                        >
                            Discover our story, values, and commitment to providing exceptional insurance solutions for you and your family.
                        </motion.p>
                    </motion.div>
                </div>
            </motion.div>

            {/* About Section */}
            <AboutSection />

            <Footer />
        </div>
    );
};
