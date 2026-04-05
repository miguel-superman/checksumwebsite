

import Link from "next/link";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
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
        <div className="grid md:grid-cols-2 gap-6 mt-10 ">
          {[
            // {
            //   text: "4K Ultra HD cameras with night vision",
            //   icon: Camera,
            // },
            {
              text: "AI facial recognition & analytics",
              icon: Brain,
            },
            {
              text: "Employee & customer tracking",
              icon: Smartphone,
            },
            {
              text: "Cloud storage & backup",
              icon: Cloud,
            },
            {
              text: "Professional installation & maintenance",
              icon: Wrench,
            },
          ].map((item, i) => {
            const Icon = item.icon;

            return (
              <div
                key={i}
                className="flex items-center gap-4 bg-zinc-900/60 p-4 rounded-xl hover:scale-[1.02] transition"
              >
                {/* Icon */}
                <div className="w-12 h-12 flex items-center justify-center bg-cyan-500/10 rounded-lg">
                  <Icon className="text-cyan-500 w-6 h-6" />
                </div>

                {/* Text */}
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-cyan-500 w-5 h-5" />
                  <p className="text-lg font-semibold text-white">{item.text}</p>
                </div>
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

      <div className="mt-12 p-6 border rounded-xl justify-center items-center">
          {/* <Wifi className="flex text-cyan-500 mb-3 justify-center  text-center" /> */}
          {/* Centered Icon */}
          <div className="flex justify-center">
            <Wifi className="text-cyan-500 mb-3 w-10 h-10" />
          </div>
          <h3 className="font-semibold text-center text-4xl text-white ">Business Network Solutions</h3>
          <p className="text-black text-xl text-center text-teal-300">
            Secure, scalable network infrastructure for large surveillance systems.
          </p>
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