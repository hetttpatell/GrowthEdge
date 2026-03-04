import { motion } from 'framer-motion';
import { Navbar } from '../layout/Navbar';
import { AwardsSection } from '../sections/AwardsSection';
import { Footer } from '../layout/Footer';
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
                className="py-16 md:py-24 bg-white relative overflow-hidden"
            >
                {/* Decorative background elements */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50 -z-10 transform translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-50 rounded-full blur-3xl opacity-50 -z-10 transform -translate-x-1/2 translate-y-1/2"></div>

                <div className="container mx-auto px-4 md:px-8 max-w-7xl">
                    <div className="text-center mb-16">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-100 rounded-full mb-4"
                        >
                            <span className="text-sm font-bold tracking-widest uppercase text-blue-800">Moments of Glory</span>
                        </motion.div>
                        <h2 className="text-4xl md:text-5xl font-bold font-['Outfit'] text-[#0B1F3A] mb-4">
                            Celebrating Our <span className="text-[#E63946]">Success</span>
                        </h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            Glimpses of our team receiving prestigious awards and recognition for their outstanding dedication and innovation.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Image 1 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="group relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 h-[350px] md:h-[450px]"
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/80 via-transparent to-transparent z-10 opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>
                            <img
                                src="/Award-1.jpeg"
                                alt="Award Ceremony"
                                className="w-full h-full object-cover object-top transform group-hover:scale-110 transition-transform duration-700 filter contrast-[1.1] saturate-[1.1] brightness-[1.05]"
                            />
                            <div className="absolute bottom-6 left-6 right-6 z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                <h3 className="text-white text-xl md:text-2xl font-bold font-['Outfit'] mb-1">Industry Excellence</h3>
                                <div className="h-1 w-12 bg-[#E63946] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100"></div>
                            </div>
                        </motion.div>

                        {/* Image 2 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="group relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 h-[350px] md:h-[450px]"
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/80 via-transparent to-transparent z-10 opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>
                            <img
                                src="/Award-2.jpeg"
                                alt="Team Award"
                                className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-700 filter contrast-[1.1] saturate-[1.1] brightness-[1.05]"
                            />
                            <div className="absolute bottom-6 left-6 right-6 z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                <h3 className="text-white text-xl md:text-2xl font-bold font-['Outfit'] mb-1">Team Achievement</h3>
                                <div className="h-1 w-12 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100"></div>
                            </div>
                        </motion.div>

                        {/* Image 3 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="group relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 h-[350px] md:h-[450px] md:col-span-2 lg:col-span-1"
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/80 via-transparent to-transparent z-10 opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>
                            <img
                                src="/Sarthak.jpeg"
                                alt="Recognition"
                                className="w-full h-full object-cover object-top transform group-hover:scale-110 transition-transform duration-700 filter contrast-[1.1] saturate-[1.1] brightness-[1.05]"
                            />
                            <div className="absolute bottom-6 left-6 right-6 z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                <h3 className="text-white text-xl md:text-2xl font-bold font-['Outfit'] mb-1">Outstanding Performance</h3>
                                <div className="h-1 w-12 bg-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100"></div>
                            </div>
                        </motion.div>
                    </div>
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
                                <span className="text-2xl font-bold text-white">4+</span>
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
                                <span className="text-2xl font-bold text-white">4</span>
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
                                <span className="text-2xl font-bold text-white">87%</span>
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
