"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import AppScreenshotCarousel from "../components/AppScreenshotCarousel";
import { Badge } from '@/components/ui/badge';
import { 
  Smartphone, 
  Star, 
  Download, 
  CreditCard, 
  Receipt, 
  Wifi, 
  Shield, 
  Mic,
  BarChart3,
  CheckCircle,
  ExternalLink,
  Play
} from 'lucide-react';
import Header from '../components/header';
import Footer from '../components/footer';

const ProductsPage = () => {
  const appFeatures = [
    { icon: CreditCard, title: 'Accept Payments', description: 'Process card payments, cash, and digital wallets seamlessly' },
    { icon: Receipt, title: 'Receipt Management', description: 'Generate digital and printed receipts instantly' },
    { icon: BarChart3, title: 'Sales Analytics', description: 'Track sales, inventory, and business performance in real-time' },
    { icon: Wifi, title: 'Offline Mode', description: 'Continue processing sales even without internet connection' },
    { icon: Mic, title: 'Voice Search', description: 'Search for your products with ease using voice command' },
    { icon: Smartphone, title: 'Multi-Device', description: 'Works on phones and tablets for flexible point of sale' },
  ];

  const benefits = [
    'No expensive hardware required',
    'Easy setup in under 5 minutes',
    'Automatic sync across devices',
    'Inventory management built-in',
    'Customer database & loyalty',
    'Daily sales reports via email',
    'Multi-user support',
    '24/7 customer support',
  ];

  return (

    <>
        <Header />
        <main className="min-h-screen bg-gradient-to-b from-sky-300 to-zinc-500">
        {/* Hero Section */}
        
        <section className="relative section-padding bg-gradient-to-br from-cyan-50/70 via-cyan-50/40 to-background dark:from-cyan-950/50 dark:via-cyan-950/30 px-6 py-24">
            <div className="container-section grid lg:grid-cols-2 gap-16 items-center relative z-10">

                {/* LEFT — Messaging */}
                <div className="space-y-6">
                <Badge className="bg-cyan-500/15 text-cyan-700 dark:text-cyan-300 border border-cyan-400/30">
                    Mobile POS Application
                </Badge>

                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                    CS3 Mobile{" "}
                    <span className="bg-gradient-to-r from-cyan-500 to-cyan-500 bg-clip-text text-transparent">
                    POS
                    </span>
                </h1>

                <p className="text-xl text-cyan-700/80 dark:text-cyan-300/80 leading-relaxed">
                    Turn your smartphone into a complete point-of-sale system.  
                    Accept payments, manage inventory, and serve customers — anywhere.
                </p>

                <div className="flex items-center gap-4">
                    <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-cyan-500 fill-current" />
                    ))}
                    </div>
                    <span className="text-cyan-600/80 dark:text-cyan-300/80">
                    Trusted by Jamaican businesses
                    </span>
                </div>

                <Button
                    size="lg"
                    className="bg-gradient-to-r from-cyan-500 to-cyan-500 hover:opacity-90 text-white shadow-lg shadow-cyan-500/30"
                    asChild
                >
                    <a
                    href="https://play.google.com/store/apps/details?id=com.cs3.cs3pos&pcampaignid=web_share"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                    >
                    <Play className="h-5 w-5" />
                    Get on Google Play
                    </a>
                </Button>
                </div>

                {/* RIGHT — App Preview */}
                <div className="relative flex justify-center">

                {/* Framing Card */}
                <div className="relative bg-white/80 dark:bg-cyan-950/60 backdrop-blur border border-cyan-200/40 dark:border-cyan-800/40 rounded-3xl shadow-xl shadow-cyan-500/20 p-6">

                    <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                        <Smartphone className="h-5 w-5 text-cyan-500" />
                        <span className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">
                        Live App Screens
                        </span>
                    </div>

                    <Badge className="bg-cyan-500/15 text-cyan-700 dark:text-cyan-300 border border-cyan-400/30">
                        Swipe
                    </Badge>
                    </div>

                    {/* Carousel */}
                    <AppScreenshotCarousel />

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 text-center mt-6">
                    <div>
                        <p className="text-lg font-bold text-cyan-600">Free</p>
                        <p className="text-xs text-cyan-600/70">Download</p>
                    </div>
                    <div>
                        <p className="text-lg font-bold text-cyan-600">5+</p>
                        <p className="text-xs text-cyan-600/70">Installs</p>
                    </div>
                    <div>
                        <p className="text-lg font-bold text-cyan-600">4.5★</p>
                        <p className="text-xs text-cyan-600/70">Rating</p>
                    </div>
                    </div>
                </div>

                {/* Glow */}
                <div className="absolute -z-10 -top-10 -right-10 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl" />
                <div className="absolute -z-10 -bottom-10 -left-10 w-56 h-56 bg-cyan-500/20 rounded-full blur-2xl" />
                </div>
            </div>
            </section>


        {/* Features Grid */}
        <section className="section-padding bg-gradient-to-br from-cyan-50/60 to-cyan-50/40 dark:from-cyan-950/40 dark:to-cyan-950/30 my-48 p-6">
            <div className="container-section py-24">
            <div className="text-center max-w-2xl mx-auto mb-12">
                <h2 className="text-3xl font-bold mb-4">
                Everything You Need to <span className="text-gradient">Run Your Business</span>
                </h2>
                <p className="text-muted-foreground">
                A complete mobile point-of-sale solution designed for Jamaican businesses
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {appFeatures.map((feature, index) => (
                <Card key={index} className="bg-white/80 dark:bg-cyan-950/60 backdrop-blur border border-cyan-200/40 dark:border-cyan-800/40 shadow-lg shadow-cyan-500/10 hover:shadow-glow transition-all duration-300">
                    <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mb-4">
                        <feature.icon className="h-6 w-6 text-cyan-400" />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                    </CardHeader>
                </Card>
                ))}
            </div>
            </div>
        </section>

        {/* Benefits Section */}
        <section className="section-padding my-48 p-6">
            <div className="container-section">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                <h2 className="text-3xl font-bold">
                    Why Choose <span className="text-gradient">CS3 POS?</span>
                </h2>
                <p className="text-white text-lg">
                    Built specifically for Caribbean businesses, our mobile POS solution 
                    helps you accept payments, manage your business, and grow your revenue.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-cyan-400 flex-shrink-0" />
                        <span className="text-sm text-zinc-200 ">{benefit}</span>
                    </div>
                    ))}
                </div>

                <Button variant="hero" size="lg" asChild>
                    <a 
                    href="https://play.google.com/store/apps/details?id=com.cs3.cs3pos&pcampaignid=web_share" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-zinc-300"
                    >
                    <Download className="h-5 w-5 text-cyan-400   " />
                    Download Free on Google Play
                    </a>
                </Button>
                </div>

                <Card className="bg-white/80 dark:bg-cyan-950/60 backdrop-blur border border-cyan-200/40 dark:border-cyan-800/40 shadow-lg shadow-cyan-500/10 p-8">
                <div className="space-y-6">
                    <div className="text-center">
                    <h3 className="text-2xl font-bold mb-2">Perfect For</h3>
                    <p className="text-zinc-700">Businesses of all sizes</p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                    {[
                        'Retail Stores',
                        'Restaurants',
                        'Food Trucks',
                        'Market Vendors',
                        'Service Providers',
                        'Pop-up Shops',
                        'Salons & Spas',
                        'Delivery Services'
                    ].map((business, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 rounded-full bg-cyan-400" />
                        {business}
                        </div>
                    ))}
                    </div>
                </div>
                </Card>
            </div>
            </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-accent/10 py-8 p-6 rounded-lg">
            <div className="container-section text-center">
            <div className="max-w-2xl mx-auto space-y-6">
                <h2 className="text-3xl font-bold">
                Ready to Modernize Your Business?
                </h2>
                <p className="text-white text-lg">
                Join businesses across Jamaica using CS3 POS to streamline their operations 
                and accept payments anywhere.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                <Button variant="hero" size="lg" asChild>
                    <a 
                    href="https://play.google.com/store/apps/details?id=com.cs3.cs3pos&pcampaignid=web_share" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-zinc-300"
                    >
                    <Play className="h-5 w-5" />
                    Get Started Free
                    </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                    <a href="/contact">Contact Sales</a>
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

export default ProductsPage;
