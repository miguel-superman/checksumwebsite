import React from 'react';
import { Button } from '../../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import ServiceCard from '../components/serviceCard';
import Carousel from './Carousel';
import { 
  Shield, 
  Camera, 
  Lock, 
  Bell, 
  Wifi, 
  Star, 
  CheckCircle, 
  Users,
  Building,
  Home,
  Factory,
  Store,
  ArrowRight,
  Phone,
  MessageCircle
} from 'lucide-react';

import ImageCarousel from './ImageCarousel';

const HomePage = () => {
  const services = [
    {
      icon: Camera,
      title: 'CCTV Systems',
      description: 'Advanced surveillance solutions with 4K cameras and AI-powered analytics.',
      features: [
        '24/7 HD monitoring',
        'Mobile app access', 
        'Motion detection alerts',
        'Cloud & local storage'
      ],
      href: '/services/cctv'
    },
    {
      icon: Lock,
      title: 'Access Control',
      description: 'Secure entry systems with biometric and card-based authentication.',
      features: [
        'Biometric scanners',
        'Key card systems',
        'Remote access control',
        'Audit trail logging'
      ],
      href: '/services/access-control'
    },
    {
      icon: Bell,
      title: 'Alarm Monitoring',
      description: 'Professional 24/7 monitoring with instant emergency response.',
      features: [
        '24/7 monitoring center',
        'Instant alerts',
        'Emergency response',
        'Mobile notifications'
      ],
      href: '/services/alarm-monitoring'
    },
    {
      icon: Wifi,
      title: 'Networking',
      description: 'Reliable network infrastructure for seamless security operations.',
      features: [
        'Fiber optic installation',
        'Wireless networks',
        'Network security',
        'Technical support'
      ],
      href: '/services/networking'
    }
  ];

  const industries = [
    { icon: Home, title: 'Residential', description: 'Home security solutions' },
    { icon: Building, title: 'Commercial', description: 'Office & retail security' },
    { icon: Factory, title: 'Industrial', description: 'Manufacturing security' },
    { icon: Store, title: 'Retail', description: 'Store protection systems' }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Homeowner, Kingston',
      content: 'Checksum transformed our home security. The CCTV system is crystal clear and the mobile app makes monitoring effortless.',
      rating: 5
    },
    {
      name: 'Marcus Brown',
      role: 'Business Owner, Spanish Town',
      content: 'Professional installation and excellent ongoing support. Our retail theft incidents dropped by 80% since installation.',
      rating: 5
    },
    {
      name: 'Lisa Williams',
      role: 'Property Manager, Montego Bay',
      content: 'The access control system has streamlined our building management. Highly recommend their services.',
      rating: 5
    }
  ];


  const slides = [
    "/checksum-logo.png",
    "/cardfront.jpeg",
    "/cardback.jpeg",
    "/monitor.jpg",
    "/dashcam.jpeg",
    "/smartlock.jpeg",
    "/smart1.jpeg",
    "/install1.jpeg",

    
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-teal-500 via-gray to-white">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-background/80" />
        <div className="container-section relative my-4 mx-8">
          <ImageCarousel slides={slides} />
        
          <div className="max-w-4xl mx-auto text-center space-y-8 my-10">
            <h1 className="text-hero text-foreground text-2xl mb-4">
              Smart Security Solutions for 
              <span className="text-accent"> Jamaica</span>
            </h1>
            <p className="text-body-large text-gray-900 max-w-2xl mx-auto">
              Protecting homes and businesses with cutting-edge CCTV, access control, 
              and alarm systems. Professional installation and 24/7 monitoring services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="hero" size="xl">
                Book Free Site Survey
              </Button>
              <Button variant="minimal" size="xl" asChild>
                <a href="tel:+1876-555-0123" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Call Now: (876) 555-0123
                </a>
              </Button>
            </div>
            
            {/* Trust Badges */}
            {/* <div className="flex flex-wrap justify-center items-center gap-8 pt-12 opacity-80">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="h-5 w-5 text-success" />
                Licensed & Insured
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="h-5 w-5 text-success" />
                10+ Years Experience  
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="h-5 w-5 text-success" />
                24/7 Support
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="h-5 w-5 text-success" />
                Free Estimates
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-card p-4 pb-20 pt-20">
        <div className="container-section mb-8">
          <div className="text-center mb-16">
            <h2 className="text-heading font-extrabold text-gray-500 text-2xl mb-4">Our Security Services</h2>
            <p className="text-body-large text-gray-800 max-w-2xl mx-auto">
              Comprehensive security solutions tailored to protect what matters most to you
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="section-padding p-4 pb-20 pt-20">
        <div className="container-section">
          <div className="text-center mb-16">
            <h2 className="text-heading font-extrabold text-gray-700 text-2xl mb-4">Industries We Serve</h2>
            <p className="text-body-large text-muted-foreground max-w-2xl mx-auto">
              Specialized security solutions for different sectors across Jamaica
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <Card key={index} className="card-gradient hover:shadow-glow transition-all duration-300 group cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="mx-auto mb-4 w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <industry.icon className="h-7 w-7 text-accent" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{industry.title}</h3>
                  <p className="text-sm text-muted-foreground">{industry.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-card p-4  pb-20 pt-20">
        <div className="container-section">
          <div className="text-center mb-16">
            <h2 className="text-heading font-extrabold text-gray-500 text-2xl mb-4">What Our Clients Say</h2>
            <p className="text-body-large text-muted-foreground max-w-2xl mx-auto">
              Trusted by hundreds of homes and businesses across Jamaica
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="card-gradient">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-accent fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">&apos;{testimonial.content}&apos;</p>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="section-padding bg-gradient-hero p-4">
        <div className="container-section text-center mb-28 mt-28">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-heading text-foreground">Ready to Secure Your Property?</h2>
            <p className="text-body-large text-muted-foreground">
              Get a free security assessment and custom quote for your home or business. 
              Our experts will design the perfect solution for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="hero" size="xl">
                Get Free Quote
              </Button>
              <Button variant="cta" size="xl" asChild>
                <a href="https://wa.me/18765550123" className="flex items-center gap-2">
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp Now
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section> */}
    </main>
  );
};

export default HomePage;