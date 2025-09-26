import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
// import ServiceCard from '@/components/ServiceCard';
import Header from '../components/header';
import Footer from '../components/footer';
import { Camera, Lock, Bell, Wifi, ArrowRight, CheckCircle } from 'lucide-react';

const ServicesPage = () => {
  const services = [
    {
      icon: Camera,
      title: 'CCTV Systems',
      description: 'Advanced surveillance solutions with 4K cameras, night vision, and AI-powered analytics for comprehensive property monitoring.',
      features: [
        '4K Ultra HD cameras with night vision',
        'AI-powered motion detection & facial recognition',
        'Mobile app with live streaming',
        'Cloud storage with 30-day retention',
        'Professional installation & setup',
        '24/7 technical support'
      ],
      href: '/services/cctv',
      popular: true
    },
    {
      icon: Lock,
      title: 'Access Control Systems',
      description: 'Secure entry solutions with biometric scanners, key cards, and remote access management for enhanced security.',
      features: [
        'Biometric fingerprint scanners',
        'RFID key card systems',
        'Mobile app access control',
        'Multi-level user permissions',
        'Audit trail & reporting',
        'Integration with existing systems'
      ],
      href: '/services/access-control'
    },
    {
      icon: Bell,
      title: 'Alarm Monitoring',
      description: 'Professional 24/7 monitoring services with instant emergency response and real-time notifications.',
      features: [
        '24/7 professional monitoring center',
        'Instant emergency response dispatch',
        'Mobile push notifications',
        'SMS & email alerts',
        'Police & fire department coordination',
        'Monthly monitoring reports'
      ],
      href: '/services/alarm-monitoring'
    },
    {
      icon: Wifi,
      title: 'Network Solutions',
      description: 'Reliable network infrastructure installation and management for seamless security system operations.',
      features: [
        'Fiber optic network installation',
        'Wireless network setup',
        'Network security configuration',
        'Bandwidth optimization',
        'Remote network monitoring',
        'Technical support & maintenance'
      ],
      href: '/services/networking'
    }
  ];

  return (
    <>
        <Header />
            <main className="min-h-screen bg-gray-300">
                {/* Hero Section */}
                <section className="section-padding bg-gradient-hero p-4">
                    <div className="container-section">
                    <div className="max-w-4xl mx-auto text-center space-y-6">
                        <h1 className="text-hero text-foreground text-7xl">
                        Professional Security 
                        <span className="text-accent"> Services</span>
                        </h1>
                        <p className="text-body-large text-xl text-gray-700 max-w-2xl mx-auto">
                        Comprehensive security solutions designed to protect your property with the latest technology 
                        and professional monitoring services available 24/7.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Button variant="hero" size="xl">
                            Cheap Security Assessment
                        </Button>
                        <Button variant="minimal" size="xl">
                            View All Services
                        </Button>
                        </div>
                    </div>
                    </div>
                </section>

                {/* Services Grid */}
                <section className="section-padding p-4">
                    <div className="container-section">
                    <div className="text-center mb-16">
                        <h2 className="text-heading mb-4 text-2xl">Our Security Services</h2>
                        <p className="text-body-large text-gray-700 text-lg max-w-2xl mx-auto">
                        From residential homes to commercial buildings, we provide tailored security solutions 
                        that meet your specific needs and budget.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {services.map((service, index) => (
                        <Card key={index} className="card-gradient hover:shadow-glow transition-all duration-300 relative">
                            {service.popular && (
                            <div className="absolute -top-3 left-6">
                                <span className="bg-accent text-accent-foreground px-3 py-1 text-xs font-semibold rounded-full">
                                Most Popular
                                </span>
                            </div>
                            )}
                            <CardHeader className="pb-4">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                                <service.icon className="h-6 w-6 text-teal-500" />
                                </div>
                                <div>
                                <CardTitle className="text-xl">{service.title}</CardTitle>
                                </div>
                            </div>
                            <CardDescription className="text-base">{service.description}</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-6">
                            <div className="space-y-3">
                                {service.features.map((feature, featureIndex) => (
                                <div key={featureIndex} className="flex items-start gap-3">
                                    <CheckCircle className="h-5 w-5 text-teal-500 mt-0.5 flex-shrink-0" />
                                    <span className="text-sm text-muted-foreground">{feature}</span>
                                </div>
                                ))}
                            </div>
                            <div className="flex gap-3">
                                <Button variant="security" className="flex-1" asChild>
                                <a href={service.href}>Learn More</a>
                                </Button>
                                <Button variant="cta">
                                Get Quote
                                </Button>
                            </div>
                            </CardContent>
                        </Card>
                        ))}
                    </div>
                    </div>
                </section>

                {/* Why Choose Us */}
                <section className="section-padding bg-card p-4">
                    <div className="container-section">
                    <div className="text-center mb-16">
                        <h2 className="text-heading mt-8 mb-4 text-7xl">Why Choose Checksum?</h2>
                        <p className="text-body-large text-xl text-muted-foreground max-w-2xl mx-auto">
                        Experience the difference with Jamaica's leading security solutions provider
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <Card className="card-gradient text-center">
                        <CardContent className="p-8">
                            <div className="mx-auto mb-4 w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                            <CheckCircle className="h-8 w-8 text-teal-500" />
                            </div>
                            <h3 className="font-semibold text-lg mb-3">Licensed & Certified</h3>
                            <p className="text-sm text-muted-foreground">
                            Fully licensed security contractors with certified technicians and industry certifications.
                            </p>
                        </CardContent>
                        </Card>

                        <Card className="card-gradient text-center">
                        <CardContent className="p-8">
                            <div className="mx-auto mb-4 w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                            <span className="text-2xl font-bold text-teal-500">10+</span>
                            </div>
                            <h3 className="font-semibold text-lg mb-3">Years of Experience</h3>
                            <p className="text-sm text-muted-foreground">
                            Over a decade protecting Jamaican homes and businesses with proven security solutions.
                            </p>
                        </CardContent>
                        </Card>

                        <Card className="card-gradient text-center">
                        <CardContent className="p-8">
                            <div className="mx-auto mb-4 w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                            <span className="text-lg font-bold text-teal-500">24/7</span>
                            </div>
                            <h3 className="font-semibold text-lg mb-3">Round-the-Clock Support</h3>
                            <p className="text-sm text-muted-foreground">
                            Professional monitoring and technical support available 24 hours a day, 7 days a week.
                            </p>
                        </CardContent>
                        </Card>
                    </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="section-padding bg-gradient-hero p-4">
                    <div className="container-section text-center">
                        <div className="max-w-3xl mx-auto space-y-6">
                            <h2 className="text-heading text-foreground">Ready to Get Started?</h2>
                            <p className="text-body-large text-muted-foreground">
                            Contact us today for a free security assessment and custom quote. 
                            Our security experts will design the perfect solution for your property.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Button variant="hero" size="xl">
                                Schedule Free Assessment
                            </Button>
                            <Button variant="cta" size="xl">
                                Call (876) 555-0123
                            </Button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        <Footer />
    </>
  );
};

export default ServicesPage;