import Link from "next/link";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import { Car, Camera, ShieldCheck } from "lucide-react";

export default function AutomotivePage() {
  const features = [
    {
      title: "Dash Cameras",
      description:
        "Capture every moment on the road with high-definition dash cameras that continuously record your journeys for safety, security, and peace of mind.",
      icon: Car,
    },
    {
      title: "360° Coverage",
      description:
        "Get complete visibility around your vehicle with multi-camera systems that eliminate blind spots and provide full situational awareness.",
      icon: Camera,
    },
    {
      title: "Accident Protection",
      description:
        "Have reliable video evidence in case of accidents, disputes, or insurance claims, helping you stay protected when it matters most.",
      icon: ShieldCheck,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-300 to-gray-500">
      <Header />

      {/* HERO */}
      <div className="relative w-full h-[70vh] flex items-center justify-center text-center overflow-hidden">

        {/* Background Image */}
        <img
          src="/widescreen.jpg"
          alt="Automotive CCTV"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 max-w-3xl px-4 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Automotive CCTV & Dash Cameras
          </h1>

          <p className="text-lg text-gray-200">
            Protect your vehicle with advanced dash cams and mobile surveillance systems designed for safety, monitoring, and evidence capture.
          </p>
        </div>

      </div>

      <div className="flex justify-center items-center">

         <div className="flex  z-10 max-w-3xl px-4 text-white justify-center items-center mt-10">
            <h1 className="text-6xl font-bold mb-4 text-center  ">
          Automotive Services
        </h1>
        </div>
         


      </div>

      {/* FEATURES */}
      <div className="grid md:grid-cols-3 gap-6 mt-8 px-6">
        {features.map((item, i) => {
          const Icon = item.icon;

          return (
            <div
              key={i}
              className="bg-white/90 p-6 rounded-xl hover:shadow-xl hover:scale-[1.02] transition"
            >
              {/* Icon */}
              <div className="w-14 h-14 flex items-center justify-center bg-cyan-500/10 rounded-lg mb-4">
                <Icon className="text-cyan-500 w-7 h-7" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-2">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* CTA */}
      <div className="text-center mt-16 mb-10">
        <Link
          href="/contact"
          className="bg-cyan-500 text-white px-6 py-3 rounded-lg hover:bg-cyan-600 transition"
        >
          Install in My Vehicle
        </Link>
      </div>

      <Footer />
    </div>
  );
}