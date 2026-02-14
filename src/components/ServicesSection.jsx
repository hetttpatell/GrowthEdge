import { motion } from 'framer-motion';
import { Shield, Home, Car, Plane, HeartPulse, Briefcase } from 'lucide-react';

export const ServicesSection = () => {
    const services = [
        {
            icon: Shield,
            title: 'Life Insurance',
            description: 'Secure your family\'s future with comprehensive life coverage plans tailored to your needs.',
            image: 'https://images.unsplash.com/photo-1528256507509-cc4facea43f6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODl8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGZhbWlseSUyMHN1bnNldCUyMHNpbGhvdWV0dGV8ZW58MHx8fHwxNzcwOTgyMzQ0fDA&ixlib=rb-4.1.0&q=85',
        },
        {
            icon: HeartPulse,
            title: 'Health Insurance',
            description: 'Comprehensive medical coverage for you and your loved ones with nationwide network.',
            image: 'https://images.unsplash.com/photo-1766405533321-03aab76df3cc?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NzV8MHwxfHNlYXJjaHw0fHxoZWFsdGh5JTIwbGlmZXN0eWxlJTIwcnVubmluZyUyMG91dGRvb3IlMjBzdW5yaXNlfGVufDB8fHx8MTc3MDk4MjM1OHww&ixlib=rb-4.1.0&q=85',
        },
        {
            icon: Car,
            title: 'Vehicle Insurance',
            description: 'Protect your vehicles with our comprehensive auto insurance policies and roadside assistance.',
            image: 'https://images.unsplash.com/photo-1768929571987-8b0d52ba8836?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXIlMjBpbnRlcmlvciUyMGxlYXRoZXIlMjBkZXRhaWx8ZW58MHx8fHwxNzcwOTgyMzYwfDA&ixlib=rb-4.1.0&q=85',
        },
        {
            icon: Home,
            title: 'Home Insurance',
            description: 'Safeguard your property and belongings against natural disasters and unforeseen events.',
            image: 'https://images.unsplash.com/photo-1706808849802-8f876ade0d1f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHw0fHxtb2Rlcm4lMjBsdXh1cnklMjBob3VzZSUyMGV4dGVyaW9yJTIwYXJjaGl0ZWN0dXJlfGVufDB8fHx8MTc3MDk4MjM0NXww&ixlib=rb-4.1.0&q=85',
        },
        {
            icon: Plane,
            title: 'Travel Insurance',
            description: 'Travel worry-free with coverage for medical emergencies, trip cancellations, and lost luggage.',
            image: 'https://images.unsplash.com/photo-1678485652523-cabdeb24a6a3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwxfHxhaXJwbGFuZSUyMHdpbmRvdyUyMHZpZXclMjBzdW5zZXR8ZW58MHx8fHwxNzcwOTgyMzYxfDA&ixlib=rb-4.1.0&q=85',
        },
        {
            icon: Briefcase,
            title: 'Business Insurance',
            description: 'Comprehensive protection for your business assets, liability, and employee welfare programs.',
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
        <section id="services" className="py-20 md:py-32 bg-slate-50" data-testid="services-section">
            <div className="container mx-auto px-4 md:px-8 max-w-7xl">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <p className="text-sm font-medium tracking-widest uppercase text-[#E63946] mb-4">Our Services</p>
                    <h2 className="text-3xl md:text-5xl font-semibold font-['Outfit'] tracking-tight text-[#0B1F3A] mb-4">
                        Comprehensive Insurance Solutions
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Choose from our wide range of insurance products designed to protect what matters most to you.
                    </p>
                </motion.div>

                {/* Services Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <motion.div
                                key={service.title}
                                variants={itemVariants}
                                className="service-card group relative overflow-hidden rounded-2xl bg-white p-8 border border-slate-100 shadow-sm hover:shadow-xl"
                                data-testid={`service-card-${service.title.toLowerCase().replace(' ', '-')}`}
                            >
                                {/* Background image overlay on hover */}
                                <div
                                    className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                                    style={{
                                        backgroundImage: `url('${service.image}')`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                    }}
                                />

                                <div className="relative z-10">
                                    {/* Icon */}
                                    <div className="mb-6 inline-block p-4 bg-[#0B1F3A] rounded-2xl group-hover:bg-[#E63946] transition-colors duration-300">
                                        <Icon size={32} className="text-white" />
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-2xl font-semibold text-[#0B1F3A] mb-3 font-['Outfit']">
                                        {service.title}
                                    </h3>
                                    <p className="text-slate-600 leading-relaxed mb-4">
                                        {service.description}
                                    </p>

                                    {/* Learn More Link */}
                                    <div className="flex items-center gap-2 text-[#E63946] font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <span>Learn More</span>
                                        <motion.span
                                            animate={{ x: [0, 5, 0] }}
                                            transition={{ repeat: Infinity, duration: 1.5 }}
                                        >
                                            →
                                        </motion.span>
                                    </div>
                                </div>

                                {/* Red accent line on hover */}
                                <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#E63946] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};