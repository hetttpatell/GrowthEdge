import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

export const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        insuranceType: '',
        message: '',
    });

    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const insuranceTypes = [
        'Life Insurance',
        'Health Insurance',
        'Vehicle Insurance',
        'Home Insurance',
        'Travel Insurance',
        'Business Insurance',
    ];

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }

        if (!formData.phone.trim()) {
            newErrors.phone = 'Phone is required';
        }

        if (!formData.insuranceType) {
            newErrors.insuranceType = 'Please select an insurance type';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            console.log('Form submitted:', formData);
            setSubmitted(true);
            setFormData({
                name: '',
                email: '',
                phone: '',
                insuranceType: '',
                message: '',
            });

            setTimeout(() => setSubmitted(false), 5000);
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
        // Clear error when user starts typing
        if (errors[e.target.name]) {
            setErrors({ ...errors, [e.target.name]: '' });
        }
    };

    const contactInfo = [
        { icon: Phone, label: 'Phone', value: '+1 (555) 123-4567', href: 'tel:+15551234567' },
        { icon: Mail, label: 'Email', value: 'info@growthedge.com', href: 'mailto:info@growthedge.com' },
        { icon: MapPin, label: 'Address', value: '123 Insurance Plaza, New York, NY 10001', href: null },
    ];

    return (
        <section id="contact" className="py-20 md:py-32 bg-white" data-testid="contact-section">
            <div className="container mx-auto px-4 md:px-8 max-w-7xl">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <p className="text-sm font-medium tracking-widest uppercase text-[#E63946] mb-4">Get In Touch</p>
                    <h2 className="text-3xl md:text-5xl font-semibold font-['Outfit'] tracking-tight text-[#0B1F3A] mb-4">
                        Request a Consultation
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Have questions? We're here to help. Fill out the form below and our team will get back to you shortly.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        {submitted && (
                            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl text-green-800" data-testid="success-message">
                                Thank you for your message! We'll get back to you soon.
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-6" data-testid="contact-form">
                            {/* Name */}
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">Your Name *</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 rounded-xl border ${errors.name ? 'border-red-500' : 'border-slate-300'
                                        } focus:outline-none focus:ring-2 focus:ring-[#E63946] focus:border-transparent transition-all`}
                                    placeholder="John Doe"
                                    data-testid="input-name"
                                />
                                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                            </div>

                            {/* Email */}
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">Email Address *</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 rounded-xl border ${errors.email ? 'border-red-500' : 'border-slate-300'
                                        } focus:outline-none focus:ring-2 focus:ring-[#E63946] focus:border-transparent transition-all`}
                                    placeholder="john@example.com"
                                    data-testid="input-email"
                                />
                                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                            </div>

                            {/* Phone */}
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number *</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 rounded-xl border ${errors.phone ? 'border-red-500' : 'border-slate-300'
                                        } focus:outline-none focus:ring-2 focus:ring-[#E63946] focus:border-transparent transition-all`}
                                    placeholder="+1 (555) 123-4567"
                                    data-testid="input-phone"
                                />
                                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                            </div>

                            {/* Insurance Type */}
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">Insurance Type *</label>
                                <select
                                    name="insuranceType"
                                    value={formData.insuranceType}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 rounded-xl border ${errors.insuranceType ? 'border-red-500' : 'border-slate-300'
                                        } focus:outline-none focus:ring-2 focus:ring-[#E63946] focus:border-transparent transition-all`}
                                    data-testid="select-insurance-type"
                                >
                                    <option value="">Select Insurance Type</option>
                                    {insuranceTypes.map((type) => (
                                        <option key={type} value={type}>
                                            {type}
                                        </option>
                                    ))}
                                </select>
                                {errors.insuranceType && <p className="text-red-500 text-sm mt-1">{errors.insuranceType}</p>}
                            </div>

                            {/* Message */}
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">Message *</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={4}
                                    className={`w-full px-4 py-3 rounded-xl border ${errors.message ? 'border-red-500' : 'border-slate-300'
                                        } focus:outline-none focus:ring-2 focus:ring-[#E63946] focus:border-transparent transition-all resize-none`}
                                    placeholder="Tell us about your insurance needs..."
                                    data-testid="textarea-message"
                                />
                                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full px-8 py-4 bg-[#E63946] hover:bg-[#D62839] text-white rounded-full font-semibold text-lg transition-all hover:shadow-lg flex items-center justify-center gap-2 group"
                                data-testid="submit-button"
                            >
                                <span>Request Consultation</span>
                                <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>
                    </motion.div>

                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        {/* Contact Cards */}
                        {contactInfo.map((info, index) => {
                            const Icon = info.icon;
                            return (
                                <motion.div
                                    key={info.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 * index }}
                                    className="flex items-start gap-4 p-6 bg-slate-50 rounded-2xl hover:shadow-md transition-shadow"
                                    data-testid={`contact-info-${info.label.toLowerCase()}`}
                                >
                                    <div className="p-3 bg-[#0B1F3A] rounded-xl">
                                        <Icon size={24} className="text-white" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold text-[#0B1F3A] mb-1">{info.label}</h4>
                                        {info.href ? (
                                            <a href={info.href} className="text-slate-600 hover:text-[#E63946] transition-colors">
                                                {info.value}
                                            </a>
                                        ) : (
                                            <p className="text-slate-600">{info.value}</p>
                                        )}
                                    </div>
                                </motion.div>
                            );
                        })}

                        {/* Additional Info */}
                        <div className="p-8 bg-gradient-to-br from-[#0B1F3A] to-[#15335E] rounded-2xl text-white">
                            <h3 className="text-2xl font-bold font-['Outfit'] mb-4">Office Hours</h3>
                            <div className="space-y-2">
                                <p className="flex justify-between">
                                    <span className="text-slate-300">Monday - Friday:</span>
                                    <span className="font-semibold">9:00 AM - 6:00 PM</span>
                                </p>
                                <p className="flex justify-between">
                                    <span className="text-slate-300">Saturday:</span>
                                    <span className="font-semibold">10:00 AM - 4:00 PM</span>
                                </p>
                                <p className="flex justify-between">
                                    <span className="text-slate-300">Sunday:</span>
                                    <span className="font-semibold">Closed</span>
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
