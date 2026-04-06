
import ProductCard from "@/app/components/ProductCard";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";

const products = [
  {
    name: "4G CCTV",
    price: 599,
    description: "Full business surveillance setup",
    image: "/CCTV-4G/1.jpg",
  },
  {
    name: "Warehouse CCTV",
    price: 899,
    description: "Wide coverage system",
    image: "/biz2.jpg",
  },
  {
    name: "Networking Devices and Equipment",
    price: 899,
    description: "Wide coverage system",
    image: "/biz2.jpg",
  },
  {
    name: "Access Control Locks",
    price: 899,
    description: "Wide coverage system",
    image: "/biz2.jpg",
  },
  {
    name: "Biometrics Locks",
    price: 899,
    description: "Wide coverage system",
    image: "/biz2.jpg",
  },
];

export default function ResidentialPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />

      <h1 className="text-6xl text-white text-center mt-10">
        Business Security
      </h1>

      <div className="grid md:grid-cols-3 gap-6 p-6">
        {products.map((p, i) => (
          <ProductCard key={i} product={p} />
        ))}
      </div>

      <Footer />
    </div>
  );
}