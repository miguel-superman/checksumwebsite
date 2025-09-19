"use client";


import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X, Shield, Phone, MessageCircle } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services', hasDropdown: true },
    { name: 'Industries', path: '/industries', hasDropdown: true },
    { name: 'Shop', path: '/shop' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 p-2 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container-section">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            {/* <Shield className="h-8 w-8 text-accent" /> */}
            <img src='checksum-logo.png' alt='checksum logo' className='h-20 w-20' />
            <div className="flex flex-col">
              <span className="font-bold text-lg leading-none">Checksum</span>
              <span className="text-xs text-muted-foreground leading-none">Smart Security Solutions Ltd.</span>
              
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className="text-sm font-medium text-foreground hover:text-accent transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm" asChild>
              <a href="tel:+1876-555-0123" className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                Call Now
              </a>
            </Button>
            <Button variant="cta" size="sm" asChild>
              <a href="https://wa.me/18765550123" className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
            </Button>
            <Button variant="hero" size="sm">
              Free Quote
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className="text-foreground hover:text-accent transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-3 pt-4">
                <Button variant="ghost" size="sm" asChild>
                  <a href="tel:+1876-555-0123" className="flex items-center gap-2 justify-center">
                    <Phone className="h-4 w-4" />
                    Call Now
                  </a>
                </Button>
                <Button variant="cta" size="sm" asChild>
                  <a href="https://wa.me/18765550123" className="flex items-center gap-2 justify-center">
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp
                  </a>
                </Button>
                <Button variant="hero" size="sm">
                  Free Quote
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;