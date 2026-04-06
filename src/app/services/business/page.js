"use client"

import Link from "next/link";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import { useEffect } from "react";
import { animate } from "animejs";
// import { Building2, ShieldCheck, Users } from "lucide-react";
// import { Building2, ShieldCheck, CheckCircle, Wifi , Users} from "lucide-react";

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
  MessageCircle,
  Brain, 
  Smartphone, 
  Cloud, 
  Wrench 
} from 'lucide-react';

export default function BusinessPage() {

  const features = [
  {
    title: "AI Facial Recognition & Analytics",
    description:
      "Advanced AI technology identifies individuals, detects unusual behavior, and provides valuable insights to improve security and operational awareness.",
    icon: Brain,
  },
  {
    title: "Employee & Customer Tracking",
    description:
      "Monitor movement patterns and activity within your business to enhance safety, improve workflow efficiency, and gain better visibility into daily operations.",
    icon: Smartphone,
  },
  {
    title: "Cloud Storage & Backup",
    description:
      "Securely store surveillance footage with reliable cloud backup, ensuring your data is protected and accessible anytime when needed.",
    icon: Cloud,
  },
  {
    title: "Professional Installation & Maintenance",
    description:
      "Our expert team handles complete system setup and ongoing maintenance to ensure your security system runs smoothly and efficiently at all times.",
    icon: Wrench,
  },
];

    useEffect(() => {
    const icons = document.querySelectorAll(".feature-icon");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            animate(entry.target, {
              translateY: [-20, 0],
              opacity: [0, 1],
              scale: [0.8, 1],
              duration: 800,
              easing: "easeOutExpo",
              delay: index * 150,
            });

            // Start idle animation AFTER reveal
            // animate(entry.target, {
            //   translateY: [-6, 6],
            //   duration: 2000,
            //   loop: true,
            //   direction: "alternate",
            //   easing: "easeInOutSine",
            // });

            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    icons.forEach((icon) => observer.observe(icon));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-300 to-gray-500">
        <Header />

      {/* HERO */}
      <div className="relative w-full h-[70vh] flex items-center justify-center text-center overflow-hidden">

        {/* Background Image */}
        <img
            src="/business.jpg"
            alt="Business CCTV"
            className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 max-w-3xl px-4 text-white">
            <h1 className="text-6xl font-bold mb-4">
          Business CCTV Solutions
        </h1>
        <p className="text-teal-300 text-2xl">
          Secure your business, staff, and assets with enterprise-grade surveillance systems.
        </p>
        </div>
    </div>
      {/* <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">
          Business CCTV Solutions
        </h1>
        <p className="text-gray-600">
          Secure your business, staff, and assets with enterprise-grade surveillance systems.
        </p>
      </div> */}

      {/* FEATURES */}
      

      {/* INSIDE CONTENT SECTION */}
      <div className="flex justify-center items-center">

         <div className="flex  z-10 max-w-3xl px-4 text-white justify-center items-center mt-10">
            <h1 className="text-6xl font-bold mb-4">
          Business Services
        </h1>
        </div>
         


      </div>

      {/* FEATURES */}
      <div className="grid md:grid-cols-2 gap-6 mt-10 px-4">
        {features.map((item, i) => {
          const Icon = item.icon;

          return (
            <div
              key={i}
              className="feature-card bg-zinc-900/60 p-6 rounded-xl hover:bg-zinc-800 transition"
              onMouseEnter={(e) => {
                const icon = e.currentTarget.querySelector(".feature-icon");

                animate(icon, {
                  scale: 1.25,
                  rotate: "1turn",
                  duration: 600,
                  easing: "easeOutBack",
                });
              }}
              onMouseLeave={(e) => {
                const icon = e.currentTarget.querySelector(".feature-icon");

                animate(icon, {
                  scale: 1,
                  duration: 300,
                  easing: "easeOutQuad",
                });
              }}
            >
              {/* Icon */}
              <div className="w-14 h-14 flex items-center justify-center bg-cyan-500/10 rounded-lg mb-4">
                <Icon className="feature-icon  text-cyan-500 w-7 h-7" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-white mb-2">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 text-lg leading-relaxed">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* <div className="grid md:grid-cols-2 gap-8 mx-4 mt-15">
        {[
          "4K multi-camera surveillance systems",
          "AI facial recognition & analytics",
          "24/7 monitoring capabilities",
          "Employee & customer tracking",
          "Cloud storage & backup",
          "Professional installation & maintenance",
        ].map((item, i) => (
          <div key={i} className="flex gap-3">
            <CheckCircle className="text-cyan-500" />
            <p>{item}</p>
          </div>
        ))}
      </div> */}

     

      {/* NETWORK */}
      {/* <div className="mt-12 p-6 border rounded-xl p-4 mx-4">
        <Wifi className="text-cyan-500 mb-3" />
        <h3 className="font-semibold">Business Network Solutions</h3>
        <p className="text-md text-gray-900">
          Secure, scalable network infrastructure for large surveillance systems.
        </p>
      </div> */}

        <div className="featurte-card mt-12 p-8 border rounded-2xl flex flex-col items-center text-center hover:shadow-xl hover:scale-[1.02] transition duration-300 mx-4"
             onMouseEnter={(e) => {
                const icon = e.currentTarget.querySelector(".feature-icon");

                animate(icon, {
                  scale: 1.25,
                  rotate: "1turn",
                  duration: 600,
                  easing: "easeOutBack",
                });
              }}
              onMouseLeave={(e) => {
                const icon = e.currentTarget.querySelector(".feature-icon");

                animate(icon, {
                  scale: 1,
                  duration: 300,
                  easing: "easeOutQuad",
                });
              }}
        >
          
          {/* Icon with background + glow */}
          <div className="w-16 h-16 flex items-center justify-center rounded-full bg-cyan-500/10 mb-4 shadow-md">
            <Wifi className="feature-icon text-cyan-500 w-8 h-8" />
          </div>


          <h3 className="font-semibold text-center text-4xl text-white ">Business Network Solutions</h3>
          <p className="text-black text-xl text-center text-teal-300">
            Secure, scalable network infrastructure for large surveillance systems.
          </p>

          {/* <h3 className="font-semibold text-2xl mb-2">Home Network Setup</h3>

          <p className="text-black text-lg max-w-md">
            We ensure your cameras are securely connected with reliable WiFi and remote access.
          </p> */}

        </div>

        
      {/* <div className="grid md:grid-cols-3 gap-6 mt-12">
        <div className="p-6 rounded-xl border hover:shadow-lg">
          <Building2 className="text-cyan-500 mb-3" />
          <h3 className="font-semibold">Multi-Camera Systems</h3>
          <p className="text-sm text-gray-500">Cover all business areas</p>
        </div>

        <div className="p-6 rounded-xl border hover:shadow-lg">
          <Users className="text-cyan-500 mb-3" />
          <h3 className="font-semibold">Staff Monitoring</h3>
          <p className="text-sm text-gray-500">Improve accountability</p>
        </div>

        <div className="p-6 rounded-xl border hover:shadow-lg">
          <ShieldCheck className="text-cyan-500 mb-3" />
          <h3 className="font-semibold">Theft Prevention</h3>
          <p className="text-sm text-gray-500">Reduce losses & risks</p>
        </div>
      </div> */}

      {/* CTA */}
      <div className="text-center mt-12 my-8">
        <Link
          href="/contact"
          className="bg-cyan-500 text-white px-6 py-3 rounded-lg hover:bg-cyan-600"
        >
          Get Business Quote
        </Link>
      </div>
      <Footer />
    </div>
  );
}