import { motion } from 'framer-motion';
import { Navbar } from './Navbar';
import { ContactSection } from './ContactSection';
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

            {/* Contact Section */}
            <ContactSection />

            {/* Additional Info Section */}
            <motion.section
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="py-16 bg-white"
            >
                <div className="container mx-auto px-4 md:px-8 max-w-7xl">
                    <div className="text-center mb-12">
                        <motion.h2
                            className="text-3xl md:text-4xl font-bold font-['Outfit'] text-[#0B1F3A] mb-4"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            Why Choose <span className="text-[#E63946]">Growth Edge</span>
                        </motion.h2>
                        <motion.p
                            className="text-slate-600 max-w-3xl mx-auto"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            With over 25 years of experience, we've helped thousands of families and businesses secure their futures with tailored insurance solutions.
                        </motion.p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-center p-6"
                        >
                            <div className="w-16 h-16 bg-gradient-to-br from-[#0B1F3A] to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl font-bold text-white">24/7</span>
                            </div>
                            <h3 className="text-xl font-bold text-[#0B1F3A] mb-2 font-['Outfit']">Support Available</h3>
                            <p className="text-slate-600">Round-the-clock customer service to assist you whenever you need help</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-center p-6"
                        >
                            <div className="w-16 h-16 bg-gradient-to-br from-[#E63946] to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl font-bold text-white">98%</span>
                            </div>
                            <h3 className="text-xl font-bold text-[#0B1F3A] mb-2 font-['Outfit']">Satisfaction Rate</h3>
                            <p className="text-slate-600">Our customers consistently rate us excellent for service and support</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="text-center p-6"
                        >
                            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl font-bold text-white">25+</span>
                            </div>
                            <h3 className="text-xl font-bold text-[#0B1F3A] mb-2 font-['Outfit']">Years Experience</h3>
                            <p className="text-slate-600">Decades of expertise in providing comprehensive insurance solutions</p>
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            <Footer />
        </div>
    );
};
