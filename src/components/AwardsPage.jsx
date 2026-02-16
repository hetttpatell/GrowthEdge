import { motion } from 'framer-motion';
import { Navbar } from './Navbar';
import { AwardsSection } from './AwardsSection';
import { Footer } from './Footer';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const AwardsPage = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        // Set loaded state for smooth animations
        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, 100);

        // Trigger navbar loaded state by dispatching custom event
        const event = new CustomEvent('pageLoaded', { detail: { page: 'awards' } });
        window.dispatchEvent(event);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="min-h-screen bg-white" data-testid="awards-page">
            <Navbar />

            {/* Page Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
                transition={{ duration: 0.6 }}
                className="pt-32 pb-8 bg-gradient-to-br from-white via-blue-50/30 to-cyan-50/30"
            >
                <div className="container mx-auto px-4 md:px-8 max-w-7xl">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 0.9 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-center"
                    >
                        <motion.h1
                            className="text-4xl md:text-6xl font-bold font-['Outfit'] text-[#0B1F3A] mb-4"
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 15 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            Our <span className="text-[#E63946]">Awards</span> & Recognition
                        </motion.h1>
                        <motion.p
                            className="text-lg text-slate-600 max-w-2xl mx-auto"
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 15 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                        >
                            Celebrating excellence and innovation in the insurance industry. Our commitment to quality service has been recognized by leading organizations worldwide.
                        </motion.p>
                    </motion.div>
                </div>
            </motion.div>

            {/* Awards Section */}
            <AwardsSection />

            {/* Additional Content Section */}
            <motion.section
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="py-16 bg-white"
            >
                <div className="container mx-auto px-4 md:px-8 max-w-7xl">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-center p-6"
                        >
                            <div className="w-16 h-16 bg-gradient-to-br from-[#0B1F3A] to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl font-bold text-white">25+</span>
                            </div>
                            <h3 className="text-xl font-bold text-[#0B1F3A] mb-2 font-['Outfit']">Years of Excellence</h3>
                            <p className="text-slate-600">Serving customers with dedication and trust since 1999</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-center p-6"
                        >
                            <div className="w-16 h-16 bg-gradient-to-br from-[#E63946] to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl font-bold text-white">50+</span>
                            </div>
                            <h3 className="text-xl font-bold text-[#0B1F3A] mb-2 font-['Outfit']">Industry Awards</h3>
                            <p className="text-slate-600">Recognition from leading insurance and business organizations</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="text-center p-6"
                        >
                            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl font-bold text-white">98%</span>
                            </div>
                            <h3 className="text-xl font-bold text-[#0B1F3A] mb-2 font-['Outfit']">Customer Satisfaction</h3>
                            <p className="text-slate-600">Consistently high ratings from our valued customers</p>
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            <Footer />
        </div>
    );
};
