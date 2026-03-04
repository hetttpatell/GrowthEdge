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

            {/* Photo Gallery Section */}
            <motion.section
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="py-16 bg-gradient-to-br from-white via-blue-50/20 to-cyan-50/20"
            >
                <div className="container mx-auto px-4 md:px-8 max-w-7xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-[#E63946]/10 to-red-50 border border-[#E63946]/20 rounded-full mb-4 shadow-sm backdrop-blur-sm"
                        >
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                className="w-2 h-2 bg-gradient-to-r from-[#E63946] to-orange-500 rounded-full"
                            />
                            <p className="text-sm font-black tracking-widest uppercase text-[#0B1F3A]">Moments</p>
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                className="w-2 h-2 bg-gradient-to-r from-[#E63946] to-orange-500 rounded-full"
                            />
                        </motion.div>
                        <h2 className="text-3xl md:text-4xl font-bold font-['Outfit'] text-[#0B1F3A] mb-4">
                            Award <span className="text-[#E63946]">Ceremony</span> Gallery
                        </h2>
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: "4rem" }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="h-1 bg-gradient-to-r from-[#E63946] to-orange-500 mx-auto rounded-full"
                        />
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            whileHover={{ scale: 1.02, y: -4 }}
                            className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500"
                        >
                            <div className="aspect-w-16 aspect-h-12 bg-gradient-to-br from-[#0B1F3A] to-blue-600">
                                <img
                                    src="/Awards.jpeg"
                                    alt="Award Ceremony 1"
                                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="absolute bottom-4 left-4 right-4">
                                    <p className="text-white font-bold text-lg">Excellence Recognition</p>
                                    <p className="text-white/80 text-sm">Celebrating outstanding achievements</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            whileHover={{ scale: 1.02, y: -4 }}
                            className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500"
                        >
                            <div className="aspect-w-16 aspect-h-12 bg-gradient-to-br from-[#E63946] to-orange-500">
                                <img
                                    src="/Awards2.jpeg"
                                    alt="Award Ceremony 2"
                                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="absolute bottom-4 left-4 right-4">
                                    <p className="text-white font-bold text-lg">Certificate of Achievement</p>
                                    <p className="text-white/80 text-sm">Recognizing dedication and success</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            whileHover={{ scale: 1.02, y: -4 }}
                            className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500"
                        >
                            <div className="aspect-w-16 aspect-h-12 bg-gradient-to-br from-green-500 to-emerald-500">
                                <img
                                    src="/Sarthak.jpeg"
                                    alt="Sarthak Shukla Award"
                                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="absolute bottom-4 left-4 right-4">
                                    <p className="text-white font-bold text-lg">Sarthak Shukla</p>
                                    <p className="text-white/80 text-sm">Outstanding Performance Award</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-center mt-12"
                    >
                        <p className="text-slate-600 max-w-3xl mx-auto">
                            These moments capture our team's dedication and the recognition we've received for our commitment to excellence in the insurance industry. Each award represents our promise to deliver exceptional service to our valued customers.
                        </p>
                    </motion.div>
                </div>
            </motion.section>

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
