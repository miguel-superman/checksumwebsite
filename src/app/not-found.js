'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Home, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Header from './components/header';
import Footer from './components/footer';

export default function NotFound() {
  const pathname = usePathname();

  useEffect(() => {
    console.error('404 Error: User attempted to access non-existent route:', pathname);
  }, [pathname]);

  return (
    <>
        <Header />
            <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background via-muted/10 to-background">

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="w-full max-w-2xl text-center px-6 py-12 rounded-2xl shadow-lg border border-border/40 bg-card/60 backdrop-blur-md"
            >
                {/* Logo + Main Heading */}
                <div className="space-y-4">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    <img
                    src="/checksum-logo.png"
                    alt="Checksum Logo"
                    className="mx-auto rounded-full w-80 h-80 shadow-sm"
                    priority
                    />
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-6xl font-black text-foreground tracking-tight"
                >
                    404
                </motion.h1>

                <motion.h2
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-2xl font-semibold text-foreground"
                >
                    Page Not Found
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-muted-foreground max-w-md mx-auto"
                >
                    The page you&apos;re looking for doesn&apos;t exist or may have been moved.  
                    Let&apos;s get you back to safety.
                </motion.p>
                </div>

                {/* Buttons */}
                <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8"
                >
                <Button variant="default" size="lg" asChild className="px-6">
                    <Link href="/" className="flex items-center gap-2">
                    <Home className="h-5 w-5" />
                    Back to Home
                    </Link>
                </Button>

                <Button variant="outline" size="lg" asChild className="px-6">
                    <Link href="/contact" className="flex items-center gap-2">
                    <ArrowLeft className="h-5 w-5" />
                    Contact Support
                    </Link>
                </Button>
                </motion.div>

                {/* Footer Info */}
                <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="pt-10 text-sm text-muted-foreground"
                >
                <p>
                    Need help? Call us at{' '}
                    <a
                    href="tel:+18768592783"
                    className="text-black hover:underline font-medium"
                    >
                    +1 (876) 859-2783
                    </a>
                </p>
                </motion.div>
            </motion.div>
            </main>
        <Footer/>    
    </>
  );
}
