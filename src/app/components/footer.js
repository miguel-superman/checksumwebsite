"use client";

import Link from "next/link";
import { Shield, Phone, Mail, MapPin, MessageCircle, Facebook, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border p-4">
      <div className="container-section">
        {/* Main Footer */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <img src='checksum-logo.png' alt='checksum logo' className='h-20 w-20' />
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-none">Checksum</span>
                <span className="text-xs text-muted-foreground leading-none">
                  Smart Security Solutions
                </span>
              </div>
            </Link>

            <p className="text-sm text-muted-foreground">
              Protecting homes and businesses across Jamaica with cutting-edge security
              technology and 24/7 professional monitoring services.
            </p>

            <div className="flex space-x-3">
              <Button variant="ghost" size="icon">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Linkedin className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Services</h3>
            <div className="space-y-2">
              <Link href="/services/cctv" className="block text-sm text-muted-foreground hover:text-accent transition-colors">
                CCTV Systems
              </Link>
              <Link href="/services/access-control" className="block text-sm text-muted-foreground hover:text-accent transition-colors">
                Access Control
              </Link>
              <Link href="/services/alarm-monitoring" className="block text-sm text-muted-foreground hover:text-accent transition-colors">
                Alarm Monitoring
              </Link>
              <Link href="/services/networking" className="block text-sm text-muted-foreground hover:text-accent transition-colors">
                Networking Solutions
              </Link>
            </div>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Company</h3>
            <div className="space-y-2">
              <Link href="/about" className="block text-sm text-muted-foreground hover:text-accent transition-colors">
                About Us
              </Link>
              <Link href="/case-studies" className="block text-sm text-muted-foreground hover:text-accent transition-colors">
                Case Studies
              </Link>
              <Link href="/careers" className="block text-sm text-muted-foreground hover:text-accent transition-colors">
                Careers
              </Link>
              <Link href="/faqs" className="block text-sm text-muted-foreground hover:text-accent transition-colors">
                FAQs
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-accent" />
                <a href="tel:+18765550123" className="hover:text-accent transition-colors">
                  +1 (876) 555-0123
                </a>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-accent" />
                <a href="mailto:info@checksum.jm" className="hover:text-accent transition-colors">
                  info@checksum.jm
                </a>
              </div>
              <div className="flex items-start space-x-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-accent mt-0.5" />
                <span>Kingston, Jamaica</span>
              </div>
              <Button variant="cta" size="sm" className="w-full" asChild>
                <a href="https://wa.me/18765550123" className="flex items-center gap-2 justify-center">
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp Us
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Checksum Smart Security Solutions. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <Link href="/privacy" className="hover:text-accent transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-accent transition-colors">
                Terms of Service
              </Link>
              <Link href="/returns" className="hover:text-accent transition-colors">
                Returns
              </Link>
              <Link href="/warranty" className="hover:text-accent transition-colors">
                Warranty
              </Link>
              <Link href="/shipping" className="hover:text-accent transition-colors">
                Shipping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
