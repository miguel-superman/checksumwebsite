

import Link from "next/link";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import { Car, Camera, ShieldCheck } from "lucide-react";

export default function AutomotivePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-300 to-gray-500">

        <Header />

      {/* HERO */}
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">
          Automotive CCTV & Dash Cameras
        </h1>
        <p className="text-gray-600">
          Protect your vehicle with advanced dash cams and mobile surveillance systems.
        </p>
      </div>

      {/* FEATURES */}
      <div className="grid md:grid-cols-3 gap-6 mt-12">
        <div className="p-6 rounded-xl border hover:shadow-lg">
          <Car className="text-cyan-500 mb-3" />
          <h3 className="font-semibold">Dash Cameras</h3>
          <p className="text-sm text-gray-500">Record every drive</p>
        </div>

        <div className="p-6 rounded-xl border hover:shadow-lg">
          <Camera className="text-cyan-500 mb-3" />
          <h3 className="font-semibold">360° Coverage</h3>
          <p className="text-sm text-gray-500">Full vehicle visibility</p>
        </div>

        <div className="p-6 rounded-xl border hover:shadow-lg">
          <ShieldCheck className="text-cyan-500 mb-3" />
          <h3 className="font-semibold">Accident Protection</h3>
          <p className="text-sm text-gray-500">Evidence when you need it</p>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center mt-12">
        <Link
          href="/contact"
          className="bg-cyan-500 text-white px-6 py-3 rounded-lg hover:bg-cyan-600"
        >
          Install in My Vehicle
        </Link>
      </div>
      <Footer />
    </div>
  );
}