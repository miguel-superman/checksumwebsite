import React from "react";
import { Link } from "react-router-dom";
import { Shield, Phone, Mail, MapPin, MessageCircle, Facebook, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return React.createElement(
    "footer",
    { className: "bg-card border-t border-border" },
    React.createElement(
      "div",
      { className: "container-section" },
      // Main Footer
      React.createElement(
        "div",
        { className: "py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" },
        
        // Company Info
        React.createElement(
          "div",
          { className: "space-y-4" },
          React.createElement(
            Link,
            { to: "/", className: "flex items-center space-x-2" },
            React.createElement(Shield, { className: "h-8 w-8 text-accent" }),
            React.createElement(
              "div",
              { className: "flex flex-col" },
              React.createElement("span", { className: "font-bold text-lg leading-none" }, "Checksum"),
              React.createElement("span", { className: "text-xs text-muted-foreground leading-none" }, "Smart Security Solutions")
            )
          ),
          React.createElement(
            "p",
            { className: "text-sm text-muted-foreground" },
            "Protecting homes and businesses across Jamaica with cutting-edge security technology and 24/7 professional monitoring services."
          ),
          React.createElement(
            "div",
            { className: "flex space-x-3" },
            React.createElement(Button, { variant: "ghost", size: "icon" }, React.createElement(Facebook, { className: "h-4 w-4" })),
            React.createElement(Button, { variant: "ghost", size: "icon" }, React.createElement(Instagram, { className: "h-4 w-4" })),
            React.createElement(Button, { variant: "ghost", size: "icon" }, React.createElement(Linkedin, { className: "h-4 w-4" }))
          )
        ),

        // Services
        React.createElement(
          "div",
          { className: "space-y-4" },
          React.createElement("h3", { className: "font-semibold text-foreground" }, "Services"),
          React.createElement(
            "div",
            { className: "space-y-2" },
            React.createElement(Link, { to: "/services/cctv", className: "block text-sm text-muted-foreground hover:text-accent transition-colors" }, "CCTV Systems"),
            React.createElement(Link, { to: "/services/access-control", className: "block text-sm text-muted-foreground hover:text-accent transition-colors" }, "Access Control"),
            React.createElement(Link, { to: "/services/alarm-monitoring", className: "block text-sm text-muted-foreground hover:text-accent transition-colors" }, "Alarm Monitoring"),
            React.createElement(Link, { to: "/services/networking", className: "block text-sm text-muted-foreground hover:text-accent transition-colors" }, "Networking Solutions")
          )
        ),

        // Company
        React.createElement(
          "div",
          { className: "space-y-4" },
          React.createElement("h3", { className: "font-semibold text-foreground" }, "Company"),
          React.createElement(
            "div",
            { className: "space-y-2" },
            React.createElement(Link, { to: "/about", className: "block text-sm text-muted-foreground hover:text-accent transition-colors" }, "About Us"),
            React.createElement(Link, { to: "/case-studies", className: "block text-sm text-muted-foreground hover:text-accent transition-colors" }, "Case Studies"),
            React.createElement(Link, { to: "/careers", className: "block text-sm text-muted-foreground hover:text-accent transition-colors" }, "Careers"),
            React.createElement(Link, { to: "/faqs", className: "block text-sm text-muted-foreground hover:text-accent transition-colors" }, "FAQs")
          )
        ),

        // Contact Info
        React.createElement(
          "div",
          { className: "space-y-4" },
          React.createElement("h3", { className: "font-semibold text-foreground" }, "Contact"),
          React.createElement(
            "div",
            { className: "space-y-3" },
            React.createElement(
              "div",
              { className: "flex items-center space-x-2 text-sm text-muted-foreground" },
              React.createElement(Phone, { className: "h-4 w-4 text-accent" }),
              React.createElement("a", { href: "tel:+1876-555-0123", className: "hover:text-accent transition-colors" }, "+1 (876) 555-0123")
            ),
            React.createElement(
              "div",
              { className: "flex items-center space-x-2 text-sm text-muted-foreground" },
              React.createElement(Mail, { className: "h-4 w-4 text-accent" }),
              React.createElement("a", { href: "mailto:info@checksum.jm", className: "hover:text-accent transition-colors" }, "info@checksum.jm")
            ),
            React.createElement(
              "div",
              { className: "flex items-start space-x-2 text-sm text-muted-foreground" },
              React.createElement(MapPin, { className: "h-4 w-4 text-accent mt-0.5" }),
              React.createElement("span", null, "Kingston, Jamaica")
            ),
            React.createElement(
              Button,
              { variant: "cta", size: "sm", className: "w-full", asChild: true },
              React.createElement(
                "a",
                { href: "https://wa.me/18765550123", className: "flex items-center gap-2 justify-center" },
                React.createElement(MessageCircle, { className: "h-4 w-4" }),
                "WhatsApp Us"
              )
            )
          )
        )
      ),

      // Bottom Footer
      React.createElement(
        "div",
        { className: "py-6 border-t border-border" },
        React.createElement(
          "div",
          { className: "flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0" },
          React.createElement("p", { className: "text-sm text-muted-foreground" }, `© ${currentYear} Checksum Smart Security Solutions. All rights reserved.`),
          React.createElement(
            "div",
            { className: "flex flex-wrap items-center gap-6 text-sm text-muted-foreground" },
            React.createElement(Link, { to: "/privacy", className: "hover:text-accent transition-colors" }, "Privacy Policy"),
            React.createElement(Link, { to: "/terms", className: "hover:text-accent transition-colors" }, "Terms of Service"),
            React.createElement(Link, { to: "/returns", className: "hover:text-accent transition-colors" }, "Returns"),
            React.createElement(Link, { to: "/warranty", className: "hover:text-accent transition-colors" }, "Warranty"),
            React.createElement(Link, { to: "/shipping", className: "hover:text-accent transition-colors" }, "Shipping")
          )
        )
      )
    )
  );
};

export default Footer;
