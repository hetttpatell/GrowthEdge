import { motion } from 'framer-motion';
import { Shield, Home, Car, Plane, HeartPulse, Briefcase, Users, Award, TrendingUp, ShieldCheck, Clock } from 'lucide-react';

export const ServicesSection = () => {
    const services = [
        {
            icon: Shield,
            title: 'Life Insurance',
            description: 'Comprehensive life coverage plans that protect your family\'s financial future with guaranteed benefits and tax advantages.',
            image: 'https://images.unsplash.com/photo-1528256507509-cc4facea43f6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODl8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGZhbWlseSUyMHN1bnNldCUyMHNpbGhvdWV0dGV8ZW58MHx8fHwxNzcwOTgyMzQ0fDA&ixlib=rb-4.1.0&q=85',
            features: ['Term Life (10-40 years)', 'Whole Life (Lifetime)', 'Universal Life (Flexible)', 'Critical Illness Cover', 'Accidental Death Benefit'],
            rating: 4.9,
            coverage: 'Up to $5M',
            startingFrom: '$29/month',
            benefits: ['Tax-free payouts', 'Loan facility', 'Waiver of premium', 'Riders available'],
            claimProcess: '24-48 hours',
            documents: ['Age proof', 'Income proof', 'Medical reports'],
        },
        {
            icon: HeartPulse,
            title: 'Health Insurance',
            description: 'Complete medical coverage with nationwide network of 10,000+ hospitals and cashless claim facilities for your peace of mind.',
            image: 'https://images.unsplash.com/photo-1766405533321-03aab76df3cc?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NzV8MHwxfHNlYXJjaHw0fHxoZWFsdGh5JTIwbGlmZXN0eWxlJTIwcnVubmluZyUyMG91dGRvb3IlMjBzdW5yaXNlfGVufDB8fHx8MTc3MDk4MjM1OHww&ixlib=rb-4.1.0&q=85',
            features: ['Individual Plans', 'Family Floater', 'Senior Citizen', 'Critical Illness', 'Maternity Cover'],
            rating: 4.8,
            coverage: 'Up to $10M',
            startingFrom: '$45/month',
            benefits: ['Cashless hospitalization', 'No claim bonus', 'Free health checkup', 'Ambulance cover'],
            claimProcess: '2-4 hours',
            documents: ['ID proof', 'Address proof', 'Medical history'],
        },
        {
            icon: Car,
            title: 'Vehicle Insurance',
            description: 'Complete vehicle protection with 24/7 roadside assistance, quick claim settlement, and coverage for all types of vehicles.',
            image: 'https://images.unsplash.com/photo-1768929571987-8b0d52ba8836?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXIlMjBpbnRlcmlvciUyMGxlYXRoZXIlMjBkZXRhaWx8ZW58MHx8fHwxNzcwOTgyMzYwfDA&ixlib=rb-4.1.0&q=85',
            features: ['Comprehensive Cover', 'Third Party Liability', 'Own Damage', 'Personal Accident', 'Zero Depreciation'],
            rating: 4.7,
            coverage: 'Full Coverage',
            startingFrom: '$35/month',
            benefits: ['24/7 roadside assistance', 'No claim bonus', 'Engine protection', 'Consumable cover'],
            claimProcess: 'Same day',
            documents: ['RC book', 'Driving license', 'Insurance papers'],
        },
        {
            icon: Home,
            title: 'Home Insurance',
            description: 'Protect your home and belongings against natural disasters, theft, fire, and unforeseen events with comprehensive coverage.',
            image: 'https://images.unsplash.com/photo-1706808849802-8f876ade0d1f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHw0fHxtb2Rlcm4lMjBsdXh1cnklMjBob3VzZSUyMGV4dGVyaW9yJTIwYXJjaGl0ZWN0dXJlfGVufDB8fHx8MTc3MDk4MjM0NXww&ixlib=rb-4.1.0&q=85',
            features: ['Building Coverage', 'Contents Insurance', 'Natural Disasters', 'Theft & Burglary', 'Fire & Lightning'],
            rating: 4.8,
            coverage: 'Up to $2M',
            startingFrom: '$25/month',
            benefits: ['Temporary accommodation', 'Valuables cover', 'Liability protection', 'Legal expenses'],
            claimProcess: '3-5 days',
            documents: ['Property papers', 'ID proof', 'Valuation report'],
        },
        {
            icon: Plane,
            title: 'Travel Insurance',
            description: 'International travel coverage with medical emergencies, trip cancellations, lost baggage, and emergency evacuation services.',
            image: 'https://images.unsplash.com/photo-1678485652523-cabdeb24a6a3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwxfHxhaXJwbGFuZSUyMHdpbmRvdyUyMHZpZXclMjBzdW5zZXR8ZW58MHx8fHwxNzcwOTgyMzYxfDA&ixlib=rb-4.1.0&q=85',
            features: ['Trip Cancellation', 'Medical Emergency', 'Lost Luggage', 'Flight Delay', 'Emergency Evacuation'],
            rating: 4.6,
            coverage: 'Worldwide',
            startingFrom: '$15/day',
            benefits: ['24/7 global assistance', 'Cashless treatment', 'Passport loss cover', 'Adventure sports'],
            claimProcess: 'Instant',
            documents: ['Passport', 'Visa', 'Travel tickets'],
        },
        {
            icon: Briefcase,
            title: 'Business Insurance',
            description: 'Comprehensive business protection covering liability, property, employees, professional indemnity, and business interruption.',
            image: 'https://images.unsplash.com/photo-1761735486549-7a6a04e67061?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMzl8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBidXNpbmVzcyUyMG1lZXRpbmclMjBnbGFzcyUyMG9mZmljZXxlbnwwfHx8fDE3NzA5ODIzNDV8MA&ixlib=rb-4.1.0&q=85',
            features: ['Liability Coverage', 'Property Insurance', 'Employee Benefits', 'Professional Indemnity', 'Business Interruption'],
            rating: 4.9,
            coverage: 'Custom Plans',
            startingFrom: '$99/month',
            benefits: ['Legal protection', 'Employee welfare', 'Asset protection', 'Income loss cover'],
            claimProcess: '5-7 days',
            documents: ['Business registration', 'Financial statements', 'Employee details'],
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                duration: 0.6,
                ease: [0.23, 1, 0.32, 1]
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30, scale: 0.98 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: [0.23, 1, 0.32, 1]
            },
        },
    };

    const floatingVariants = {
        initial: { y: 0 },
        animate: {
            y: [-3, 3, -3],
            transition: {
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    const agentInfo = {
        name: "Sarthak Shukla",
        title: "Senior Insurance Agent",
        license: "LIC-A-12345-67890",
        experience: "5+ Years",
        phone: "1-800-555-0199",
        email: "sarah.mitchell@insurepro.com",
        photo: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3MjQ3OTB8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMGhlYWRzaG90JTIwc21pbGluZ3xlbnwwfHx8fDE3NzA5ODU2NDB8MA&ixlib=rb-4.1.0&q=85"
    };

    return (
        <section id="services" className="py-12 md:py-15 bg-white relative overflow-hidden" data-testid="services-section">
            {/* Optimized Background decorative elements */}
            <motion.div
                variants={floatingVariants}
                initial="initial"
                animate="animate"
                className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-200 to-cyan-200 rounded-full blur-2xl opacity-20"
            />
            <motion.div
                variants={floatingVariants}
                initial="initial"
                animate="animate"
                transition={{ delay: 1 }}
                className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full blur-2xl opacity-20"
            />

            {/* Ultra-optimized particles - minimal for performance */}
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(3)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-0.5 h-0.5 bg-blue-300/20 rounded-full"
                        initial={{
                            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
                            y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
                            scale: 0
                        }}
                        animate={{
                            y: [null, -Math.random() * 80 - 40],
                            opacity: [0, 0.3, 0],
                            scale: [0, 0.6, 0]
                        }}
                        transition={{
                            duration: Math.random() * 3 + 10,
                            repeat: Infinity,
                            delay: Math.random() * 4,
                            ease: "easeOut"
                        }}
                    />
                ))}
            </div>
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-indigo-50/50 rounded-full blur-2xl opacity-10" />

            <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
                {/* Section Header - More Professional */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-20"
                >
                    {/* Agent Profile Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                        className="flex items-center justify-center gap-4 mb-8"
                    >
                        <div className="flex items-center gap-3 px-6 py-2 bg-white border border-slate-200 rounded-full shadow-sm">
                            <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-[#E63946]">
                                <img src={agentInfo.photo} alt={agentInfo.name} className="w-full h-full object-cover" />
                            </div>
                            <div className="text-left">
                                <p className="text-xs text-slate-500">Your Agent</p>
                                <p className="text-sm font-bold text-slate-800">{agentInfo.name}</p>
                            </div>
                            <div className="h-4 w-px bg-slate-300 mx-2" />
                            <ShieldCheck className="w-5 h-5 text-[#E63946]" />
                            <span className="text-xs font-semibold text-slate-700">Licensed</span>
                        </div>
                    </motion.div>

                    <motion.h2
                        className="text-4xl md:text-6xl font-bold font-['Outfit'] tracking-tight text-[#0B1F3A] mb-6"
                        initial={{ opacity: 0, y: 15, scale: 0.98 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <motion.span
                            className="bg-gradient-to-r from-[#0B1F3A] via-blue-800 to-[#0B1F3A] bg-clip-text text-transparent block"
                            whileHover={{ scale: 1.005 }}
                            transition={{ duration: 0.15 }}
                        >
                            Complete Protection
                        </motion.span>
                        <br />
                        <motion.span
                            className="bg-gradient-to-r from-[#E63946] to-red-600 bg-clip-text text-transparent block"
                            whileHover={{ scale: 1.005 }}
                            transition={{ duration: 0.15 }}
                        >
                            for Your Future
                        </motion.span>
                    </motion.h2>

                    <motion.p
                        className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        As an independent insurance agent, I work with top-rated carriers to find you the best coverage at the most competitive rates.
                    </motion.p>

                    {/* Trust indicators - More Agent-focused */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="flex flex-wrap justify-center gap-6 mb-8"
                    >
                        <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm border border-slate-100">
                            <Award className="w-5 h-5 text-[#E63946]" />
                            <span className="text-sm font-semibold text-slate-700">Licensed Agent</span>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm border border-slate-100">
                            <Users className="w-5 h-5 text-[#E63946]" />
                            <span className="text-sm font-semibold text-slate-700">1,200+ Clients</span>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm border border-slate-100">
                            <TrendingUp className="w-5 h-5 text-[#E63946]" />
                            <span className="text-sm font-semibold text-slate-700">98% Retention</span>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm border border-slate-100">
                            <Clock className="w-5 h-5 text-[#E63946]" />
                            <span className="text-sm font-semibold text-slate-700">24/7 Support</span>
                        </div>
                    </motion.div>

                    {/* Agent Contact Bar */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-red-50 via-pink-50 to-red-50 border border-red-200 rounded-full mb-8 shadow-lg hover:shadow-xl transition-all duration-400"
                        whileHover={{ scale: 1.01, y: -0.5 }}
                    >
                        <div className="inline-flex items-center justify-center w-6 h-6">
                            <Shield className="w-6 h-6 text-[#E63946]" />
                        </div>
                        <p className="text-sm font-bold tracking-widest uppercase text-[#E63946]">Licensed Insurance Agency</p>
                        <div className="inline-flex items-center justify-center w-6 h-6">
                            <Shield className="w-6 h-6 text-[#E63946]" />
                        </div>
                        <span className="text-sm">Free Consultation</span>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};