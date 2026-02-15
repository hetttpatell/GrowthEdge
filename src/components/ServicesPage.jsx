import { motion } from 'framer-motion';
import { Shield, Home, Car, Plane, HeartPulse, Briefcase, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export const ServicesPage = () => {
    const services = [
        {
            icon: Shield,
            title: 'Life Insurance',
            description: 'Secure your family\'s future with comprehensive life coverage plans tailored to your needs.',
            features: ['Term Life Insurance', 'Whole Life Coverage', 'Universal Life Plans', 'Critical Illness Coverage'],
            image: 'https://images.unsplash.com/photo-1528256507509-cc4facea43f6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODl8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGZhbWlseSUyMHN1bnNldCUyMHNpbGhvdWV0dGV8ZW58MHx8fHwxNzcwOTgyMzQ0fDA&ixlib=rb-4.1.0&q=85',
        },
        {
            icon: HeartPulse,
            title: 'Health Insurance',
            description: 'Comprehensive medical coverage for you and your loved ones with nationwide network.',
            features: ['Individual Health Plans', 'Family Coverage', 'Critical Illness', 'Maternity Benefits'],
            image: 'https://images.unsplash.com/photo-1766405533321-03aab76df3cc?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NzV8MHwxfHNlYXJjaHw0fHxoZWFsdGh5JTIwbGlmZXN0eWxlJTIwcnVubmluZyUyMG91dGRvb3IlMjBzdW5yaXNlfGVufDB8fHx8MTc3MDk4MjM1OHww&ixlib=rb-4.1.0&q=85',
        },
        {
            icon: Car,
            title: 'Vehicle Insurance',
            description: 'Protect your vehicles with our comprehensive auto insurance policies and roadside assistance.',
            features: ['Comprehensive Coverage', 'Third Party Liability', 'Roadside Assistance', 'Accident Coverage'],
            image: 'https://images.unsplash.com/photo-1768929571987-8b0d52ba8836?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXIlMjBpbnRlcmlvciUyMGxlYXRoZXIlMjBkZXRhaWx8ZW58MHx8fHwxNzcwOTgyMzYwfDA&ixlib=rb-4.1.0&q=85',
        },
        {
            icon: Home,
            title: 'Home Insurance',
            description: 'Safeguard your property and belongings against natural disasters and unforeseen events.',
            features: ['Property Coverage', 'Personal Belongings', 'Natural Disasters', 'Theft Protection'],
            image: 'https://images.unsplash.com/photo-1706808849802-8f876ade0d1f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHw0fHxtb2Rlcm4lMjBsdXh1cnklMjBob3VzZSUyMGV4dGVyaW9yJTIwYXJjaGl0ZWN0dXJlfGVufDB8fHx8MTc3MDk4MjM0NXww&ixlib=rb-4.1.0&q=85',
        },
        {
            icon: Plane,
            title: 'Travel Insurance',
            description: 'Travel worry-free with coverage for medical emergencies, trip cancellations, and lost luggage.',
            features: ['Medical Emergencies', 'Trip Cancellation', 'Lost Luggage', 'Travel Delays'],
            image: 'https://images.unsplash.com/photo-1678485652523-cabdeb24a6a3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwxfHxhaXJwbGFuZSUyMHdpbmRvdyUyMHZpZXclMjBzdW5zZXR8ZW58MHx8fHwxNzcwOTgyMzYxfDA&ixlib=rb-4.1.0&q=85',
        },
        {
            icon: Briefcase,
            title: 'Business Insurance',
            description: 'Comprehensive protection for your business assets, liability, and employee welfare programs.',
            features: ['Property Insurance', 'Liability Coverage', 'Employee Benefits', 'Business Interruption'],
            image: 'https://images.unsplash.com/photo-1761735486549-7a6a04e67061?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMzl8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBidXNpbmVzcyUyMG1lZXRpbmclMjBnbGFzcyUyMG9mZmljZXxlbnwwfHx8fDE3NzA5ODIzNDV8MA&ixlib=rb-4.1.0&q=85',
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
            },
        },
    };

    return (
        <div className="min-h-screen bg-slate-50">
            <Navbar />

            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-[#0B1F3A] to-[#1e3a5f] text-white py-32">
                <div className="absolute inset-0 bg-black/20" />
                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                    >
                        <h1 className="text-5xl md:text-6xl font-bold font-['Outfit'] tracking-tight mb-6">
                            Our Services
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-200 max-w-3xl mx-auto leading-relaxed">
                            Comprehensive insurance solutions designed to protect what matters most to you and your loved ones.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20 md:py-32">
                <div className="container mx-auto px-6 max-w-7xl">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {services.map((service, index) => {
                            const Icon = service.icon;
                            return (
                                <motion.div
                                    key={service.title}
                                    variants={itemVariants}
                                    className="group relative overflow-hidden rounded-3xl bg-white p-8 border border-slate-100 shadow-lg hover:shadow-2xl transition-all duration-500"
                                >
                                    {/* Background image overlay */}
                                    <div
                                        className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-700"
                                        style={{
                                            backgroundImage: `url('${service.image}')`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                        }}
                                    />

                                    <div className="relative z-10">
                                        {/* Icon */}
                                        <motion.div
                                            className="mb-6 inline-block p-4 bg-gradient-to-br from-[#0B1F3A] to-[#1e3a5f] rounded-2xl group-hover:from-[#E63946] group-hover:to-[#d62828] transition-all duration-500"
                                            whileHover={{ scale: 1.1, rotate: 5 }}
                                        >
                                            <Icon size={32} className="text-white" />
                                        </motion.div>

                                        {/* Content */}
                                        <h3 className="text-2xl font-bold text-[#0B1F3A] mb-4 font-['Outfit']">
                                            {service.title}
                                        </h3>
                                        <p className="text-slate-600 leading-relaxed mb-6">
                                            {service.description}
                                        </p>

                                        {/* Features */}
                                        <div className="mb-6">
                                            <h4 className="text-sm font-semibold text-[#0B1F3A] mb-3">Key Features:</h4>
                                            <ul className="space-y-2">
                                                {service.features.map((feature, idx) => (
                                                    <li key={idx} className="flex items-center text-sm text-slate-600">
                                                        <div className="w-1.5 h-1.5 bg-[#E63946] rounded-full mr-3" />
                                                        {feature}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* CTA Button */}
                                        <motion.button
                                            className="flex items-center gap-2 px-6 py-3 bg-[#0B1F3A] text-white rounded-xl hover:bg-[#E63946] transition-all duration-300 font-medium"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            Get Quote
                                            <ArrowRight size={18} />
                                        </motion.button>
                                    </div>

                                    {/* Accent line */}
                                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0B1F3A] to-[#E63946] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-br from-[#0B1F3A] to-[#1e3a5f] text-white">
                <div className="container mx-auto px-6 max-w-7xl text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold font-['Outfit'] mb-6">
                            Ready to Get Protected?
                        </h2>
                        <p className="text-xl text-slate-200 mb-8 max-w-2xl mx-auto">
                            Contact our insurance experts today and get a personalized quote tailored to your needs.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <motion.button
                                className="px-8 py-4 bg-[#E63946] text-white rounded-xl hover:bg-[#d62828] transition-colors font-semibold text-lg"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Get Started
                            </motion.button>
                            <motion.button
                                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-xl hover:bg-white/20 transition-colors font-semibold text-lg border border-white/20"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Learn More
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
};
