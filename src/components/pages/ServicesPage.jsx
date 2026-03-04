import { motion } from 'framer-motion';
import { Shield, Home, Car, Plane, HeartPulse, Briefcase, ArrowRight, AlertTriangle, TrendingUp, Flame, Ship, HardHat, Wrench, Phone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../layout/Navbar';
import { Footer } from '../layout/Footer';
import { useEffect, useState } from 'react';

export const ServicesPage = () => {
    const [selectedCategory, setSelectedCategory] = useState('life');
    const [isLoaded, setIsLoaded] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        // Set loaded state for smooth animations
        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, 100);

        // Trigger navbar loaded state by dispatching custom event
        const event = new CustomEvent('pageLoaded', { detail: { page: 'services' } });
        window.dispatchEvent(event);

        return () => clearTimeout(timer);
    }, []);

    const services = [
        {
            icon: Shield,
            title: 'TERM PLAN',
            category: 'life',
            description: 'Pure protection plan offering high coverage at affordable premiums.',
            features: ['Financial Protection for the family', 'Ensures Business Continuity', 'Substantial Credit and Loan protection', 'Tax Benefits (u/s 80C)'],
            image: 'https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?q=80&w=2070&auto=format&fit=crop', // Family protection concept
        },
        {
            icon: Shield,
            title: 'ULIPS (Insurance & Investment)',
            category: 'life',
            description: 'Dual benefit plan combining insurance coverage with investment opportunities.',
            features: ['Dual Benefit', 'Tax Benefit', 'Investment Flexibility', 'Wealth Creation', 'Long Term Savings Objective'],
            image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070&auto=format&fit=crop', // Stock market growth chart
        },
        {
            icon: Shield,
            title: 'CHILD EDUCATION PLAN',
            category: 'life',
            description: 'Dedicated savings plan to secure your child\'s educational future.',
            features: ['Dedicated Financial Security', 'Long Term Wealth', 'Tax Benefits and Insurance', 'Accumulate Funds for Higher Education', 'Promotes Financial Discipline'],
            image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop', // Child studying/education
        },
        {
            icon: Briefcase,
            title: 'KEY MAN INSURANCE',
            category: 'life',
            description: 'Business protection insurance covering key personnel in the organization.',
            features: ['Financial Protection for the Company', 'Ensures Business Continuity', 'Tax Benefits for Company', 'Key Personnel Recruitment & Retention'],
            image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop', // Business executive/leadership
        },
        {
            icon: HeartPulse,
            title: 'MWPA (Married Women\'s Property Act) Policy',
            category: 'life',
            description: 'Exclusive financial protection for wife and children under legal provisions.',
            features: ['Exclusive Financial Security for Wife & Children', 'Protects from Business Creditors & Liabilities', 'Trustee Protection', 'Ideal for Business Owners & Professionals'],
            image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=2070&auto=format&fit=crop', // Happy family with mother and children
        },
        {
            icon: Briefcase,
            title: 'Employee-Employer Insurance',
            category: 'life',
            description: 'Group insurance solution providing financial security to employees.',
            features: ['Financial Security for Employees', 'Tax Benefits for the Company', 'Employee Retention and Loyalty', 'Improved Productivity', 'Social Security & Well-being of Employees'],
            image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop', // Happy diverse team at work
        },
        {
            icon: Plane,
            title: 'NRI INSURANCE (Health Insurance for NRIs in India)',
            category: 'life',
            description: 'Specialized insurance solutions for Non-Resident Indians and their families.',
            features: ['Financial Protection for NRI\'s families', 'Affordable and tailored', 'Convenient and Fast Service', 'Tax and Regulatory Benefits'],
            image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop', // Airplane flying/global travel
        },
        {
            icon: Home,
            title: 'HUF INSURANCE (Everything you need to know about HUF & its Tax Benefits)',
            category: 'life',
            description: 'Insurance solutions for Hindu Undivided Families with tax advantages.',
            features: ['Protection of Family Assets', 'Tax Efficiency', 'Consolidated Wealth Management', 'Government Allowances and Exemptions'],
            image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop', // Indian joint family/home
        },
        {
            icon: Briefcase,
            title: 'Partnership Insurance',
            category: 'life',
            description: 'Insurance solutions designed for business partnerships and continuity.',
            features: ['Dedicated Financial Security', 'Ensures Business Continuity', 'Tax Benefits and Insurance', 'Conflict Resolution', 'Promotes Financial Discipline'],
            image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop', // Business partners shaking hands
        },
        {
            icon: Briefcase,
            title: 'Group Insurance Plan',
            category: 'life',
            description: 'Comprehensive group insurance solutions for organizations and communities.',
            features: ['Cost Efficiency', 'Enhanced Insurance Benefits', 'Convenience', 'Streamlined Administrative Procedures', 'Tax Advantages'],
            image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop', // Large group of professionals
        },
        {
            icon: HeartPulse,
            title: 'Health Insurance (Medi Claim)',
            category: 'general',
            description: 'Comprehensive medical coverage for disease, surgery, and healthcare expenses.',
            features: ['Financial Risk Protection against disease & Surgery', 'Cashless Hospitalization and Reimbursement Benefits', 'Access to Quality and Timely Healthcare', 'Tax Benefits', 'Peace of Mind and Better Health Management', 'Additional Covers and No Claim Bonuses'],
            image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=2070&auto=format&fit=crop', // Medical hospital/healthcare
        },
        {
            icon: Car,
            title: 'Car Insurance',
            category: 'general',
            description: 'Complete vehicle protection with comprehensive coverage and emergency support.',
            features: ['Comprehensive Financial Protection', 'Emergency Medical and Evacuation Coverage', 'Business Continuity and Liability Protection', 'Enhanced Safety for Students', 'Additional Benefits and Peace of Mind'],
            image: 'https://images.unsplash.com/photo-1555529672-3d8c9ba19c1c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80', // Car insurance/vehicle
        },
        {
            icon: Briefcase,
            title: 'Group Personal Accident Insurance',
            category: 'general',
            description: 'Comprehensive accident coverage for employees with financial protection.',
            features: ['Comprehensive Coverage for Accidents', 'Financial Support for Medical Expenses', 'Income Protection in Case of Disability', 'Death Benefit for Employer\'s Family', 'Covers Workplace and Non-Workplace Accidents', 'Enhances Employee Welfare & Satisfaction'],
            image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80', // Workplace safety/protection
        },
        {
            icon: HeartPulse,
            title: 'Group Mediclaim',
            category: 'general',
            description: 'Corporate health insurance solution with comprehensive medical benefits.',
            features: ['Comprehensive Medical Coverage', 'Cashless Treatment Facility', 'Coverage for Pre-Existing Diseases', 'Maternity & Newborn Benefits', 'Family Coverage Options', 'Wellness and Preventive Healthcare Benefits', 'No Waiting Period or Medical Tests', 'Tax Benefits for Employers', 'Boosts Employee Morale & Retention'],
            image: 'https://images.unsplash.com/photo-1573496359149-bd73889c7e5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80', // Corporate team/healthcare
        },
        {
            icon: Plane,
            title: 'Travel Insurance',
            category: 'general',
            description: 'Complete travel protection covering emergencies, delays, and baggage issues.',
            features: ['Covers Emergency Medical Assistance', 'Flight delays', 'Loss of baggage', 'Financial emergency. These things can be quite unsettling. But with travel insurance backing you up, you can keep calm and carry on', 'Covers Baggage-Related Hassles', 'Flight Cancellation Can Still Happen'],
            image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop', // Airport travel
        },
        {
            icon: Shield,
            title: 'Cyber Shield & Cyber Insurance',
            category: 'commercial',
            description: 'Comprehensive protection against cyber threats and digital risks for modern businesses.',
            features: ['Third Party Liability', 'First Party Losses', 'E-Crime', 'Cyber Extortion', 'Business Interruption', 'Crisis Management'],
            image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2070&auto=format&fit=crop', // Cybersecurity/digital protection
        },
        {
            icon: Briefcase,
            title: 'Director & Officers Liability',
            category: 'commercial',
            description: 'Protection for company directors and officers against legal actions and claims.',
            features: ['Company Reimbursement', 'Entity Cover (Securities Claims)', 'Employment Practice Liability', 'Spouse / Domestic Partner / Estate / Heir', 'Legal Representation Expenses', 'Run-off Cover for Retired Directors'],
            image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop', // Corporate leadership/board meeting
        },
        {
            icon: Shield,
            title: 'Professional Indemnity Policy',
            category: 'commercial',
            description: 'Coverage for professionals against claims of negligence or inadequate work.',
            features: ['Errors and Omissions', 'Defamation', 'Breach of Intellectual Property', 'Loss of Documents', 'Dishonesty of Employees', 'Extended Reporting Period'],
            image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop', // Professional services/legal documents
        },
        {
            icon: Briefcase,
            title: 'Trade Credit',
            category: 'commercial',
            description: 'Protection against bad debts and customer insolvency for businesses.',
            features: ['Domestic & Export Coverage', 'Protection Against Insolvency', 'Protracted Default Cover', 'Political Risk Cover', 'Credit Limit Monitoring', 'Collection Services'],
            image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070&auto=format&fit=crop', // Business finance/credit management
        },
        {
            icon: Shield,
            title: 'Surety Bond Insurance',
            category: 'commercial',
            description: 'Guarantee bonds ensuring contractual obligations are met.',
            features: ['Performance Bond', 'Advance Payment Bond', 'Retention Money Bond', 'Bid Bond/Tender Bond', 'Customs Bond', 'Maintenance Bond'],
            image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop', // Contract signing/business agreement
        },
        {
            icon: AlertTriangle,
            title: 'Pollution Legal Liability Insurance',
            category: 'commercial',
            description: 'Coverage for environmental pollution incidents and cleanup costs.',
            features: ['On-site & Off-site Cleanup', 'Third Party Bodily Injury', 'Third Party Property Damage', 'Sudden & Accidental Pollution', 'Gradual Pollution Coverage', 'Transportation Pollution'],
            image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop', // Environmental protection/industrial
        },
        {
            icon: Shield,
            title: 'Employee Fidelity Policy',
            category: 'commercial',
            description: 'Protection against losses due to employee dishonesty and fraud.',
            features: ['Loss of Money or Securities', 'Employee Dishonesty/Fraud', 'Forgery or Alteration', 'Computer Fraud', 'Funds Transfer Fraud', 'Discovery Period Extension'],
            image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2070&auto=format&fit=crop', // Security/employee protection
        },
        {
            icon: TrendingUp,
            title: 'IPO Insurance & Investment Capital Protector',
            category: 'commercial',
            description: 'Specialized coverage for IPO processes and investment protection.',
            features: ['Policy Liability for Misstatements', 'Defense Costs Coverage', 'Coverage for the Company & Directors', 'Protection for Shareholders', 'Underwriting Risk Coverage', 'Post-IPO Protection'],
            image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070&auto=format&fit=crop', // Stock market/financial trading
        },
        {
            icon: Flame,
            title: 'Fire Insurance',
            category: 'commercial',
            description: 'Comprehensive coverage against fire damage for commercial properties.',
            features: ['Building & Infrastructure', 'Plant & Machinery', 'Stocks & Inventory', 'Furniture, Fixtures & Fittings', 'Removal of Debris', 'Architects/Surveyors Fees'],
            image: 'https://images.unsplash.com/photo-1545558014-869a7191bda7?q=80&w=2070&auto=format&fit=crop', // Fire damage/industrial fire
        },
        {
            icon: Shield,
            title: 'Industrial All Risk Policy',
            category: 'commercial',
            description: 'Comprehensive coverage for industrial assets and operations.',
            features: ['Comprehensive Asset Cover', 'Machinery Breakdown', 'Business Interruption (Fire/MB)', 'Burglary and Theft', 'Accidental Damage', 'Electronic Equipment Cover'],
            image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop', // Industrial factory/manufacturing
        },
        {
            icon: Ship,
            title: 'Marine Insurance',
            category: 'commercial',
            description: 'Complete protection for marine cargo and vessel operations.',
            features: ['Cargo Transit (Sea/Air/Land)', 'Hull and Machinery', 'Protection and Indemnity', 'Freight Interest', 'War and Strike Risks', 'General Average Contribution'],
            image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=2070&auto=format&fit=crop', // Shipping/maritime transport
        },
        {
            icon: HeartPulse,
            title: 'Workers Compensation',
            category: 'commercial',
            description: 'Mandatory coverage for workplace injuries and employee protection.',
            features: ['Death Benefit', 'Permanent Total Disablement', 'Permanent Partial Disablement', 'Temporary Total Disablement', 'Medical Expenses', 'Legal Costs & Expenses'],
            image: 'https://images.unsplash.com/photo-1555529672-3d8c9ba19c1c?q=80&w=2070&auto=format&fit=crop', // Workplace safety/industrial workers
        },
        {
            icon: HardHat,
            title: 'Contractor All Risk (C.A.R)',
            category: 'commercial',
            description: 'Comprehensive coverage for construction projects and contractors.',
            features: ['Material Damage to Works', 'Third Party Liability', 'Surrounding Property Cover', 'Maintenance Period Cover', 'Expediting Expenses'],
            image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop', // Construction site/building project
        },
        {
            icon: Wrench,
            title: 'Construction Plant & Equipment',
            category: 'commercial',
            description: 'Specialized coverage for construction machinery and equipment.',
            features: ['Earthmoving Equipment', 'Cranes and Hoists', 'Piling Rigs', 'Transit Cover', 'Third Party Liability', 'Theft and Burglary'],
            image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop', // Heavy machinery/construction equipment
        },
        {
            icon: Phone,
            title: 'Crisis Manager',
            category: 'commercial',
            description: 'Comprehensive crisis management and reputation protection services.',
            features: ['Crisis Management', 'Public Relations Expenses', 'Emergency Response Costs', 'Business Stabilization', 'Reputation Management', 'Post-Crisis Support'],
            image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2070&auto=format&fit=crop', // Crisis management/business communication
        },
    ];

    const filteredServices = services.filter(service =>
        selectedCategory === 'all' || service.category === selectedCategory
    );

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
        <div className="min-h-screen bg-white" data-testid="services-page">
            <Navbar />

            {/* Page Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
                transition={{ duration: 0.6 }}
                className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden"
            >
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/20 to-indigo-50/30">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100/30 via-transparent to-transparent" />
                    <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-indigo-200/20 to-blue-200/20 rounded-full blur-3xl" />
                </div>

                {/* Floating elements */}
                <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-2xl rotate-45 animate-float" />
                <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-xl rotate-12 animate-float" style={{ animationDelay: '1s' }} />
                <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-full animate-float" style={{ animationDelay: '2s' }} />

                <div className="relative z-10 container mx-auto px-4 md:px-8 max-w-7xl">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 0.9 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-center"
                    >
                        {/* Pre-title badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 15 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-white/60 backdrop-blur-sm border border-white/20 rounded-full shadow-lg"
                        >
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                            <span className="text-sm font-medium text-slate-700">30+ Insurance Solutions</span>
                        </motion.div>

                        <motion.h1
                            className="text-4xl md:text-6xl lg:text-7xl font-bold font-['Outfit'] text-transparent bg-clip-text bg-gradient-to-r from-[#0B1F3A] via-blue-800 to-[#0B1F3A] mb-4 md:mb-6 leading-tight px-2"
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 15 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            Our Insurance
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#E63946] to-orange-500 mt-1">Services</span>
                        </motion.h1>
                        <motion.p
                            className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light px-4 md:px-0"
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 15 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                        >
                            Comprehensive protection solutions tailored to your unique needs. From personal security to business continuity, we've got you covered.
                        </motion.p>

                        {/* Enhanced Stats badges */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 mt-12 md:mt-16 px-4">
                            <motion.div
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 15 }}
                                transition={{ duration: 0.5, delay: 0.8 }}
                                className="group relative"
                            >
                                <div className="absolute -inset-1 bg-gradient-to-r from-[#0B1F3A] to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300" />
                                <div className="relative bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl p-6 md:p-8 shadow-xl flex flex-col items-center text-center">
                                    <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-[#0B1F3A] to-blue-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <span className="text-2xl md:text-3xl font-bold text-white">30+</span>
                                    </div>
                                    <h3 className="text-lg md:text-xl font-bold text-[#0B1F3A] mb-1 md:mb-2 font-['Outfit']">Insurance Plans</h3>
                                    <p className="text-slate-600 text-xs md:text-sm">Comprehensive coverage options</p>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 15 }}
                                transition={{ duration: 0.5, delay: 0.9 }}
                                className="group relative"
                            >
                                <div className="absolute -inset-1 bg-gradient-to-r from-[#E63946] to-orange-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300" />
                                <div className="relative bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl p-6 md:p-8 shadow-xl flex flex-col items-center text-center">
                                    <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-[#E63946] to-orange-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <span className="text-2xl md:text-3xl font-bold text-white">3</span>
                                    </div>
                                    <h3 className="text-lg md:text-xl font-bold text-[#0B1F3A] mb-1 md:mb-2 font-['Outfit']">Categories</h3>
                                    <p className="text-slate-600 text-xs md:text-sm">Life, General & Commercial</p>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 15 }}
                                transition={{ duration: 0.5, delay: 1.0 }}
                                className="group relative sm:col-span-3 lg:col-span-1"
                            >
                                <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300" />
                                <div className="relative bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl p-6 md:p-8 shadow-xl flex flex-col items-center text-center">
                                    <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <span className="text-2xl md:text-3xl font-bold text-white">24/7</span>
                                    </div>
                                    <h3 className="text-lg md:text-xl font-bold text-[#0B1F3A] mb-1 md:mb-2 font-['Outfit']">Support</h3>
                                    <p className="text-slate-600 text-xs md:text-sm">Always here to help</p>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>

            {/* Insurance Category Selector */}
            <motion.section
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="py-16 md:py-24 relative overflow-hidden"
            >
                {/* Background decoration */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/30 to-transparent" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-blue-100/20 to-purple-100/20 rounded-full blur-3xl" />

                <div className="relative z-10 container mx-auto px-4 md:px-8 max-w-7xl">
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-10 md:mb-16"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="inline-block mb-3 md:mb-4 px-2"
                        >
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-['Outfit'] text-transparent bg-clip-text bg-gradient-to-r from-[#0B1F3A] to-blue-600 leading-tight">
                                Choose Your Insurance Category
                            </h2>
                        </motion.div>
                        <div className="w-24 md:w-32 h-1.5 bg-gradient-to-r from-[#0B1F3A] via-[#E63946] to-[#0B1F3A] mx-auto rounded-full" />
                        <p className="mt-4 md:mt-6 text-sm md:text-base text-slate-600 max-w-2xl mx-auto px-4">
                            Select the type of insurance that best fits your needs and explore our comprehensive coverage options.
                        </p>
                    </motion.div>

                    <div className="flex flex-col lg:flex-row gap-8 justify-center items-center">
                        <motion.button
                            onClick={() => setSelectedCategory('life')}
                            className={`group relative w-full max-w-sm overflow-hidden rounded-3xl transition-all duration-700 font-bold text-xl shadow-2xl ${selectedCategory === 'life'
                                ? 'scale-105'
                                : 'hover:scale-105'
                                }`}
                            whileHover={{ y: -8 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            {/* Glow effect */}
                            <div className={`absolute inset-0 bg-gradient-to-r ${selectedCategory === 'life'
                                ? 'from-blue-600/20 to-purple-600/20'
                                : 'from-[#0B1F3A]/10 to-blue-600/10'
                                } rounded-3xl blur-xl transition-all duration-500 ${selectedCategory === 'life' ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} />

                            {/* Main button */}
                            <div className={`relative bg-white/90 backdrop-blur-sm border-2 ${selectedCategory === 'life'
                                ? 'border-blue-500 bg-gradient-to-br from-blue-50 to-indigo-50'
                                : 'border-[#0B1F3A]/20 hover:border-[#0B1F3A]/40'
                                } rounded-3xl p-6 md:p-8 transition-all duration-500`}>
                                <div className="flex items-center gap-4 md:gap-6">
                                    <div className={`p-3 md:p-4 rounded-2xl transition-all duration-500 ${selectedCategory === 'life'
                                        ? 'bg-gradient-to-br from-[#0B1F3A] to-blue-600 shadow-lg'
                                        : 'bg-gradient-to-br from-[#0B1F3A]/10 to-blue-600/10 group-hover:from-[#0B1F3A] group-hover:to-blue-600'
                                        }`}>
                                        <Shield size={32} className={selectedCategory === 'life' ? 'text-white' : 'text-[#0B1F3A] group-hover:text-white transition-colors duration-500'} />
                                    </div>
                                    <div className="flex-1 text-left">
                                        <div className={`text-2xl mb-1 ${selectedCategory === 'life' ? 'text-blue-600' : 'text-[#0B1F3A] group-hover:text-blue-600'} transition-colors duration-500`}>
                                            Life Insurance
                                        </div>
                                        <div className={`text-sm ${selectedCategory === 'life' ? 'text-blue-500' : 'text-slate-500 group-hover:text-blue-500'} transition-colors duration-500`}>
                                            10 Premium Plans Available
                                        </div>
                                        {selectedCategory === 'life' && (
                                            <motion.div
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                className="flex items-center gap-1 mt-2"
                                            >
                                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                                <span className="text-xs text-green-600 font-medium">Currently Selected</span>
                                            </motion.div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.button>

                        <motion.button
                            onClick={() => setSelectedCategory('general')}
                            className={`group relative w-full max-w-sm overflow-hidden rounded-3xl transition-all duration-700 font-bold text-xl shadow-2xl ${selectedCategory === 'general'
                                ? 'scale-105'
                                : 'hover:scale-105'
                                }`}
                            whileHover={{ y: -8 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            {/* Glow effect */}
                            <div className={`absolute inset-0 bg-gradient-to-r ${selectedCategory === 'general'
                                ? 'from-emerald-600/20 to-teal-600/20'
                                : 'from-[#0B1F3A]/10 to-blue-600/10'
                                } rounded-3xl blur-xl transition-all duration-500 ${selectedCategory === 'general' ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} />

                            {/* Main button */}
                            <div className={`relative bg-white/90 backdrop-blur-sm border-2 ${selectedCategory === 'general'
                                ? 'border-emerald-500 bg-gradient-to-br from-emerald-50 to-teal-50'
                                : 'border-[#0B1F3A]/20 hover:border-[#0B1F3A]/40'
                                } rounded-3xl p-6 md:p-8 transition-all duration-500`}>
                                <div className="flex items-center gap-4 md:gap-6">
                                    <div className={`p-3 md:p-4 rounded-2xl transition-all duration-500 ${selectedCategory === 'general'
                                        ? 'bg-gradient-to-br from-emerald-600 to-teal-600 shadow-lg'
                                        : 'bg-gradient-to-br from-[#0B1F3A]/10 to-blue-600/10 group-hover:from-emerald-600 group-hover:to-teal-600'
                                        }`}>
                                        <Home size={32} className={selectedCategory === 'general' ? 'text-white' : 'text-[#0B1F3A] group-hover:text-white transition-colors duration-500'} />
                                    </div>
                                    <div className="flex-1 text-left">
                                        <div className={`text-2xl mb-1 ${selectedCategory === 'general' ? 'text-emerald-600' : 'text-[#0B1F3A] group-hover:text-emerald-600'} transition-colors duration-500`}>
                                            General Insurance
                                        </div>
                                        <div className={`text-sm ${selectedCategory === 'general' ? 'text-emerald-500' : 'text-slate-500 group-hover:text-emerald-500'} transition-colors duration-500`}>
                                            5 Essential Plans Available
                                        </div>
                                        {selectedCategory === 'general' && (
                                            <motion.div
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                className="flex items-center gap-1 mt-2"
                                            >
                                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                                <span className="text-xs text-green-600 font-medium">Currently Selected</span>
                                            </motion.div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.button>

                        <motion.button
                            onClick={() => setSelectedCategory('commercial')}
                            className={`group relative w-full max-w-sm overflow-hidden rounded-3xl transition-all duration-700 font-bold text-xl shadow-2xl ${selectedCategory === 'commercial'
                                ? 'scale-105'
                                : 'hover:scale-105'
                                }`}
                            whileHover={{ y: -8 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            {/* Glow effect */}
                            <div className={`absolute inset-0 bg-gradient-to-r ${selectedCategory === 'commercial'
                                ? 'from-purple-600/20 to-pink-600/20'
                                : 'from-[#0B1F3A]/10 to-blue-600/10'
                                } rounded-3xl blur-xl transition-all duration-500 ${selectedCategory === 'commercial' ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} />

                            {/* Main button */}
                            <div className={`relative bg-white/90 backdrop-blur-sm border-2 ${selectedCategory === 'commercial'
                                ? 'border-purple-500 bg-gradient-to-br from-purple-50 to-pink-50'
                                : 'border-[#0B1F3A]/20 hover:border-[#0B1F3A]/40'
                                } rounded-3xl p-6 md:p-8 transition-all duration-500`}>
                                <div className="flex items-center gap-4 md:gap-6">
                                    <div className={`p-3 md:p-4 rounded-2xl transition-all duration-500 ${selectedCategory === 'commercial'
                                        ? 'bg-gradient-to-br from-purple-600 to-pink-600 shadow-lg'
                                        : 'bg-gradient-to-br from-[#0B1F3A]/10 to-blue-600/10 group-hover:from-purple-600 group-hover:to-pink-600'
                                        }`}>
                                        <Briefcase size={32} className={selectedCategory === 'commercial' ? 'text-white' : 'text-[#0B1F3A] group-hover:text-white transition-colors duration-500'} />
                                    </div>
                                    <div className="flex-1 text-left">
                                        <div className={`text-2xl mb-1 ${selectedCategory === 'commercial' ? 'text-purple-600' : 'text-[#0B1F3A] group-hover:text-purple-600'} transition-colors duration-500`}>
                                            Commercial Insurance
                                        </div>
                                        <div className={`text-sm ${selectedCategory === 'commercial' ? 'text-purple-500' : 'text-slate-500 group-hover:text-purple-500'} transition-colors duration-500`}>
                                            15 Business Plans Available
                                        </div>
                                        {selectedCategory === 'commercial' && (
                                            <motion.div
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                className="flex items-center gap-1 mt-2"
                                            >
                                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                                <span className="text-xs text-green-600 font-medium">Currently Selected</span>
                                            </motion.div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.button>
                    </div>
                </div>
            </motion.section>

            {/* Services Grid */}
            <motion.section
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="py-16 md:py-24 relative overflow-hidden"
            >
                {/* Background decoration */}
                <div className="absolute inset-0 bg-gradient-to-b from-slate-50/50 via-white to-transparent" />
                <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-100/20 to-purple-100/20 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-indigo-100/20 to-cyan-100/20 rounded-full blur-3xl" />

                <div className="relative z-10 container mx-auto px-4 md:px-8 max-w-7xl">
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-12 md:mb-20"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="inline-block px-2"
                        >
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-['Outfit'] text-transparent bg-clip-text bg-gradient-to-r from-[#0B1F3A] to-blue-600 mb-3 md:mb-4 leading-tight">
                                {selectedCategory === 'life' && 'Life Insurance Plans'}
                                {selectedCategory === 'general' && 'General Insurance Plans'}
                                {selectedCategory === 'commercial' && 'Commercial Insurance Plans'}
                            </h2>
                        </motion.div>
                        <div className="w-24 md:w-32 h-1.5 bg-gradient-to-r from-[#0B1F3A] via-[#E63946] to-[#0B1F3A] mx-auto rounded-full mb-4 md:mb-6" />
                        <p className="text-sm md:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed px-4 md:px-0">
                            {selectedCategory === 'life' && 'Secure your family\'s future with our comprehensive life insurance solutions designed for every stage of life.'}
                            {selectedCategory === 'general' && 'Protect your everyday life with our general insurance coverage plans that safeguard what matters most.'}
                            {selectedCategory === 'commercial' && 'Safeguard your business with our specialized commercial insurance policies tailored for modern enterprises.'}
                        </p>
                    </motion.div>

                    <motion.div
                        key={selectedCategory}
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {filteredServices.map((service, index) => {
                            const Icon = service.icon;
                            return (
                                <motion.div
                                    key={service.title}
                                    variants={itemVariants}
                                    className="group relative"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    whileHover={{ y: -8 }}
                                >
                                    {/* Card Content */}
                                    <div className="relative bg-white/90 backdrop-blur-sm border border-slate-200 rounded-3xl p-6 md:p-8 hover:border-blue-500/50 transition-all duration-500 flex flex-col h-full shadow-lg hover:shadow-2xl">
                                        {/* Image Section */}
                                        <div className="w-full h-40 md:h-48 rounded-2xl overflow-hidden mb-6 md:mb-8 relative">
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
                                            <img
                                                src={service.image}
                                                alt={service.title}
                                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                            />
                                            <div className="absolute bottom-4 left-4 z-20 flex items-center gap-3">
                                                <div className="p-2.5 bg-white/20 backdrop-blur-md rounded-xl">
                                                    <Icon size={20} className="text-white" />
                                                </div>
                                            </div>
                                        </div>

                                        <h3 className="text-xl font-bold text-[#0B1F3A] font-['Outfit'] leading-tight mb-4">
                                            {service.title}
                                        </h3>

                                        <p className="text-slate-600 mb-8 flex-grow leading-relaxed">
                                            {service.description}
                                        </p>

                                        <div className="space-y-3 mb-8">
                                            {service.features.map((feature, fIndex) => (
                                                <div key={fIndex} className="flex items-start gap-3">
                                                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                                                    <span className="text-sm text-slate-600 leading-snug">{feature}</span>
                                                </div>
                                            ))}
                                        </div>


                                    </div>

                                    {/* Glow effect */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </motion.section>

            {/* CTA Section */}
            <motion.section
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="py-20 md:py-32 relative overflow-hidden"
            >
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/40">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-100/40 via-transparent to-transparent" />
                    <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-200/30 to-purple-200/30 rounded-full blur-3xl animate-pulse" />
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-indigo-200/30 to-cyan-200/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
                </div>

                <div className="relative z-10 container mx-auto px-4 md:px-8 max-w-7xl text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="max-w-5xl mx-auto"
                    >
                        {/* Pre-title badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="inline-flex items-center gap-2 px-6 py-3 mb-8 bg-white/70 backdrop-blur-sm border border-white/30 rounded-full shadow-lg"
                        >
                            <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full animate-pulse" />
                            <span className="text-sm font-semibold text-slate-700">Get Started Today</span>
                        </motion.div>

                        <motion.h2
                            className="text-4xl md:text-6xl lg:text-7xl font-bold font-['Outfit'] text-transparent bg-clip-text bg-gradient-to-r from-[#0B1F3A] via-blue-800 to-[#0B1F3A] mb-6 md:mb-8 leading-tight px-2"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            Ready to Get
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#E63946] via-orange-500 to-[#E63946] mt-2">Protected?</span>
                        </motion.h2>

                        <motion.p
                            className="text-lg md:text-2xl text-slate-600 mb-10 md:mb-12 max-w-4xl mx-auto leading-relaxed font-light px-4 md:px-0"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                        >
                            Take the first step towards comprehensive coverage. Our expert team is here to help you find the perfect insurance solution for your unique needs.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                            className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center mb-12 md:mb-16 px-4 w-full"
                        >
                            <motion.button
                                className="w-full sm:w-auto group relative px-8 py-4 bg-gradient-to-r from-[#0B1F3A] to-blue-600 text-white font-bold text-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <span className="relative z-10 flex items-center justify-center gap-2">
                                    Get Quote Now
                                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                                </span>
                            </motion.button>

                            <motion.button
                                className="w-full sm:w-auto group px-8 py-4 bg-white/80 backdrop-blur-sm border-2 border-[#0B1F3A]/20 text-[#0B1F3A] font-bold text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:border-[#0B1F3A] hover:bg-gradient-to-r hover:from-[#0B1F3A] hover:to-blue-600 hover:text-white"
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <span className="flex items-center justify-center gap-2">
                                    Learn More
                                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                                </span>
                            </motion.button>
                        </motion.div>

                        {/* Enhanced Trust indicators */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 1.0 }}
                            className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-6 md:gap-12"
                        >
                            <div className="group flex items-center gap-3">
                                <div className="relative">
                                    <div className="w-4 h-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full animate-pulse" />
                                    <div className="absolute inset-0 w-4 h-4 bg-green-500 rounded-full animate-ping" />
                                </div>
                                <span className="text-base font-medium text-slate-700 group-hover:text-blue-600 transition-colors duration-300">24/7 Expert Support</span>
                            </div>
                            <div className="group flex items-center gap-3">
                                <div className="relative">
                                    <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full animate-pulse" />
                                    <div className="absolute inset-0 w-4 h-4 bg-blue-500 rounded-full animate-ping" />
                                </div>
                                <span className="text-base font-medium text-slate-700 group-hover:text-blue-600 transition-colors duration-300">Professional Advice</span>
                            </div>
                            <div className="group flex items-center gap-3">
                                <div className="relative">
                                    <div className="w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse" />
                                    <div className="absolute inset-0 w-4 h-4 bg-purple-500 rounded-full animate-ping" />
                                </div>
                                <span className="text-base font-medium text-slate-700 group-hover:text-blue-600 transition-colors duration-300">Quick Claims Process</span>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.section>

            <Footer />
        </div>
    );
};
