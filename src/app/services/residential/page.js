

// import Link from "next/link";
// import Header from "@/app/components/header";
// import { ShieldCheck, Camera, Home } from "lucide-react";

// export default function ResidentialPage() {
//   return (
//     // <div className="container mx-auto px-4 py-16">
//     <div className="min-h-screen">
//         <Header />

//       {/* HERO */}
//       {/* HERO */}
//     <div className="relative w-full h-[70vh] flex items-center justify-center text-center overflow-hidden">

//         {/* Background Image */}
//         <img
//             src="/residential.jpg"
//             alt="Residential CCTV"
//             className="absolute inset-0 w-full h-full object-cover"
//         />

//         {/* Overlay */}
//         <div className="absolute inset-0 bg-black/60"></div>

//         {/* Content */}
//         <div className="relative z-10 max-w-3xl px-4 text-white">
//             <h1 className="text-4xl md:text-5xl font-bold mb-4">
//             Residential CCTV Installation
//             </h1>
//             <p className="text-gray-200">
//             Protect your home and loved ones with reliable, high-definition surveillance systems.
//             </p>
//         </div>
//     </div>
//       {/* <div className="text-center max-w-3xl mx-auto">
//         <h1 className="text-4xl font-bold mb-4">
//           Residential CCTV Installation
//         </h1>
//         <p className="text-gray-600">
//           Protect your home and loved ones with reliable, high-definition surveillance systems.
//         </p>

//         <img
//           src="/residential.jpg"
//           alt="Hero Background"
//           className="absolute inset-0 w-screen h-screen object-cover object-[center_50%]"

//         />
//       <div className="w-screen h-full inset-0 bg-black opacity-50"></div>
//       </div> */}

//       {/* FEATURES */}
//       <div className="grid md:grid-cols-3 gap-6 mt-12">
//         <div className="p-6 rounded-xl border hover:shadow-lg">
//           <Camera className="text-cyan-500 mb-3" />
//           <h3 className="font-semibold">HD Cameras</h3>
//           <p className="text-sm text-gray-500">Clear day & night recording</p>
//         </div>

//         <div className="p-6 rounded-xl border hover:shadow-lg">
//           <ShieldCheck className="text-cyan-500 mb-3" />
//           <h3 className="font-semibold">24/7 Monitoring</h3>
//           <p className="text-sm text-gray-500">Always protect your property</p>
//         </div>

//         <div className="p-6 rounded-xl border hover:shadow-lg">
//           <Home className="text-cyan-500 mb-3" />
//           <h3 className="font-semibold">Remote Access</h3>
//           <p className="text-sm text-gray-500">View cameras from your phone</p>
//         </div>
//       </div>

//       {/* CTA */}
//       <div className="text-center mt-12">
//         <Link
//           href="/contact"
//           className="bg-cyan-500 text-white px-6 py-3 rounded-lg hover:bg-cyan-600"
//         >
//           Request Installation
//         </Link>
//       </div>
//     </div>
//   );
// }

"use client"
import Link from "next/link";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import { useEffect } from "react";
import { animate } from "animejs";
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

export default function ResidentialPage() {

  const features = [
  {
    title: "4K Ultra HD Cameras",
    description:
      "Capture crystal-clear footage day and night with advanced 4K resolution cameras designed for maximum visibility and reliability in all lighting conditions.",
    icon: Camera,
  },
  {
    title: "AI Motion Detection",
    description:
      "Smart detection technology identifies real threats while reducing false alarms, sending instant alerts directly to your device.",
    icon: Brain,
  },
  {
    title: "Mobile App Access",
    description:
      "Monitor your property from anywhere in the world with live streaming, playback, and instant notifications through your smartphone.",
    icon: Smartphone,
  },
  {
    title: "Cloud Storage",
    description:
      "Securely store and access your recordings with reliable cloud backup options and flexible storage plans.",
    icon: Cloud,
  },
  {
    title: "Professional Installation",
    description:
      "Our trained technicians ensure proper setup, optimal camera placement, and seamless system integration for maximum performance.",
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
    <div className="min-h-screen bg-gradient-to-b from-cyan-500 to-zinc-800" >
      <Header />

      {/* HERO */}
      <div className="relative h-[70vh] flex items-center justify-center text-center">
        <img src="/residential.jpg" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 text-white max-w-2xl">
          <h1 className="text-6xl font-bold">Residential CCTV Systems</h1>
          <p className="mt-2 text-2xl">Protect your home with smart surveillance</p>
        </div>
      </div>

      {/* CONTENT */}
      <div className="container mx-auto px-4 py-16 ">

        <div className="flex justify-center items-center">

         <div className="flex  z-10 max-w-3xl px-4 text-white justify-center items-center mt-10">
            <h1 className="text-6xl font-bold mb-4">
             Residential Services
           </h1>
        </div>
         


      </div>

        {/* FEATURES */}
        <div className="grid md:grid-cols-2 gap-6">
          {features.map((item, i) => {
            const Icon = item.icon;

            return (
              // <div
              //   key={i}
              //   className="bg-zinc-900/60 p-6 rounded-xl hover:bg-zinc-800 transition"
              // >
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
                  <Icon className="feature-icon text-cyan-500 w-7 h-7" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-white mb-2">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
        {/* <div className="grid md:grid-cols-2 gap-8">
          {[
            "4K Ultra HD cameras with night vision",
            "AI motion detection & alerts",
            "Mobile app live viewing",
            "Cloud storage options",
            "Professional installation",
          ].map((item, i) => (
            <div key={i} className="flex gap-3">
              <CheckCircle className="text-cyan-500" />
              <p className="text-xl text-bold ">{item}</p>
            </div>
          ))}
        </div> */}

        {/* NETWORK BONUS */}
        {/* <div className="mt-12 p-6 border rounded-xl justify-center items-center"> */}
          {/* <Wifi className="flex text-cyan-500 mb-3 justify-center  text-center" /> */}
          {/* Centered Icon */}
          {/* <div className="flex justify-center">
            <Wifi className="text-cyan-500 mb-3 w-10 h-10" />
          </div>
          <h3 className="font-semibold text-center text-4xl text-white ">Home Network Setup</h3>
          <p className="text-black text-xl text-center text-teal-300">
            We ensure your cameras are securely connected with reliable WiFi and remote access.
          </p>
        </div> */}
        {/* NETWORK BONUS */}
        <div className="feature-card mt-12 p-8 border rounded-2xl flex flex-col items-center text-center hover:shadow-xl hover:scale-[1.02] transition duration-300">
          
          {/* Icon with background + glow */}
          <div className="w-16 h-16 flex items-center justify-center rounded-full bg-cyan-500/10 mb-4 shadow-md"
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
            <Wifi className="feature-icon text-cyan-500 w-8 h-8" />
          </div>


          <h3 className="font-semibold text-center text-4xl text-white ">Home Network Setup</h3>
          <p className="text-black text-xl text-center text-teal-300">
            We ensure your cameras are securely connected with reliable WiFi and remote access.
          </p>

          {/* <h3 className="font-semibold text-2xl mb-2">Home Network Setup</h3>

          <p className="text-black text-lg max-w-md">
            We ensure your cameras are securely connected with reliable WiFi and remote access.
          </p> */}

        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link href="/contact" className="bg-cyan-500 px-6 py-3 text-white rounded-lg">
            Request Installation
          </Link>
        </div>

      </div>

      <Footer />
    </div>
  );
}