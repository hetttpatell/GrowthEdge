import { motion } from 'framer-motion';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const ContactPage = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        // Set loaded state for smooth animations
        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, 100);

        // Trigger navbar loaded state by dispatching custom event
        const event = new CustomEvent('pageLoaded', { detail: { page: 'contact' } });
        window.dispatchEvent(event);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="min-h-screen bg-white" data-testid="contact-page">
            <Navbar />

            {/* Page Header */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
                transition={{ duration: 0.8 }}
                className="pt-32 pb-8 bg-gradient-to-br from-white via-blue-50/30 to-cyan-50/30"
            >
                <div className="container mx-auto px-4 md:px-8 max-w-7xl">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 0.8 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-center"
                    >
                        <motion.h1
                            className="text-4xl md:text-6xl font-bold font-['Outfit'] text-[#0B1F3A] mb-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            Get In <span className="text-[#E63946]">Touch</span>
                        </motion.h1>
                        <motion.p
                            className="text-lg text-slate-600 max-w-2xl mx-auto"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            We're here to help you find the perfect insurance solutions. Reach out to our team for personalized assistance and expert guidance.
                        </motion.p>
                    </motion.div>
                </div>
            </motion.div>

            {/* Agent Information Section */}
            <motion.section
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="py-16 bg-gradient-to-br from-white via-blue-50/20 to-cyan-50/20"
            >
                <div className="container mx-auto px-4 md:px-8 max-w-7xl">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-white rounded-3xl shadow-xl p-8 md:p-12"
                    >
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            {/* Agent Photo and Basic Info */}
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className="text-center lg:text-left"
                            >
                                <div className="relative inline-block mb-6">
                                    <div className="w-48 h-48 md:w-56 md:h-56 mx-auto lg:mx-0 rounded-2xl overflow-hidden shadow-lg border-4 border-white/50 bg-gradient-to-br from-[#0B1F3A] to-blue-600">
                                        <div className="w-full h-full flex items-center justify-center">
                                            <span className="text-white text-6xl font-bold">Sk</span>
                                        </div>
                                    </div>
                                    <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-[#E63946] to-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                                        Senior Agent
                                    </div>
                                </div>

                                <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F3A] mb-2 font-['Outfit']">
                                    Sarthak Shukla
                                </h2>
                                <p className="text-xl text-[#E63946] font-semibold mb-4">
                                    Licensed Insurance Professional
                                </p>

                                <div className="space-y-3 mb-6">
                                    <div className="flex items-center justify-center lg:justify-start gap-3">
                                        <div className="w-10 h-10 bg-gradient-to-br from-[#0B1F3A] to-blue-600 rounded-lg flex items-center justify-center">
                                            <span className="text-white">📞</span>
                                        </div>
                                        <div>
                                            <p className="text-sm text-slate-500">Direct Line</p>
                                            <p className="text-lg font-semibold text-[#0B1F3A]">(555) 123-4567</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-center lg:justify-start gap-3">
                                        <div className="w-10 h-10 bg-gradient-to-br from-[#E63946] to-orange-500 rounded-lg flex items-center justify-center">
                                            <span className="text-white">✉️</span>
                                        </div>
                                        <div>
                                            <p className="text-sm text-slate-500">Email</p>
                                            <p className="text-lg font-semibold text-[#0B1F3A]">john.davidson@growthedge.com</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Company Description */}
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="space-y-6"
                            >
                                <div>
                                    <h3 className="text-2xl font-bold text-[#0B1F3A] mb-4 font-['Outfit']">
                                        About Growth Edge Insurance
                                    </h3>
                                    <p className="text-slate-600 leading-relaxed mb-4">
                                        With over 15 years of excellence in the insurance industry, Growth Edge Insurance has been serving communities with comprehensive coverage solutions tailored to individual and business needs.
                                    </p>
                                    <p className="text-slate-600 leading-relaxed mb-4">
                                        Our commitment to customer service and personalized attention sets us apart. We believe in building long-term relationships with our clients, ensuring they have the right protection when it matters most.
                                    </p>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-4 rounded-xl">
                                        <div className="text-3xl font-bold text-[#0B1F3A] mb-1">10,000+</div>
                                        <div className="text-sm text-slate-600">Happy Clients</div>
                                    </div>
                                    <div className="bg-gradient-to-br from-red-50 to-orange-50 p-4 rounded-xl">
                                        <div className="text-3xl font-bold text-[#E63946] mb-1">24/7</div>
                                        <div className="text-sm text-slate-600">Support Available</div>
                                    </div>
                                </div>

                                <div className="pt-4">
                                    <h4 className="font-semibold text-[#0B1F3A] mb-3">Our Specialties:</h4>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Life Insurance</span>
                                        <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm">Auto Insurance</span>
                                        <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">Home Insurance</span>
                                        <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">Business Insurance</span>
                                        <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm">Health Insurance</span>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </motion.section>

            <Footer />
        </div>
    );
};
