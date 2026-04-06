// "use client";


// import React, { useState } from 'react';
// // import { Link } from 'react-router-dom';
// import Link from 'next/link';
// import Image from 'next/image';
// import { Button } from '@/components/ui/button';
// import { Menu, X, Shield, Phone, MessageCircle ,Receipt, LetterTextIcon } from 'lucide-react';

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const navItems = [
//     { name: 'Home', path: '/' },
//     { name: 'Services', path: '/services', hasDropdown: true },
//     // { name: 'Industries', path: '/industries', hasDropdown: true },
//     { name: 'Shop', path: '/shop' },
//     { name: 'Products', path: '/products' },
//     { name: 'Customer Reviews', path: 'https://www.google.com/search?q=checksum+smart+security+solutions+ltd&oq=checksum&gs_lcrp=EgZjaHJvbWUqBggCECMYJzIGCAAQRRg8Mg4IARBFGCcYOxiABBiKBTIGCAIQIxgnMgYIAxBFGDwyBggEEEUYQTIGCAUQRRg8MgYIBhBFGDwyBggHEEUYPNIBCDUzMjVqMGo3qAIIsAIB8QW9shyLyIsQfw&sourceid=chrome&ie=UTF-8#' },
//     { name: 'About', path: '/about' },
//     { name: 'Contact', path: '/contact' },
//   ];

//   return (
//     <header className="sticky top-0 z-50 p-2 bg-background/95 backdrop-blur-sm border-b border-border">
//       <div className="container-section">
//         <div className="flex items-center justify-between h-16">
//           {/* Logo */}
//           <Link href="/" className="flex items-center space-x-2">
//             {/* <Shield className="h-8 w-8 text-accent" /> */}
//             {/* <Image src='/checksum-logo.png' alt='checksum logo' width={80} height={80} /> */}
//             <img src='/checksum-logo.png'  alt='checksum logo' className="w-20 h-20" />
//             <div className="flex flex-col">
//               <span className="font-bold text-lg leading-none">Checksum</span>
//               <span className="text-xs text-muted-foreground leading-none">Smart Security Solutions Ltd.</span>
              
//             </div>
//           </Link>

//           {/* Desktop Navigation */}
//           <nav className="hidden lg:flex items-center space-x-8">
//             {navItems.map((item) => (
//               <div key={item.name} className="relative group">
                
//                 {/* Main Nav Item */}
//                 <Link
//                   href={item.path}
//                   className="text-sm font-medium text-foreground hover:text-cyan-400 transition-colors flex items-center gap-1"
//                 >
//                   {item.name}
//                   {item.hasDropdown && (
//                     <span className="text-xs transition-transform group-hover:rotate-180">▼</span>
//                   )}
//                 </Link>

//                 {/* Dropdown */}
//                 {item.hasDropdown && (
//                   <div className="absolute left-0 mt-3 w-56 rounded-xl bg-white shadow-xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 z-50">
                    
//                     <div className="py-2">
//                       <Link
//                         href="/services/cctv"
//                         className="block px-4 py-2 text-sm hover:bg-cyan-50 hover:text-cyan-600 transition"
//                       >
//                         CCTV Installation
//                       </Link>

//                       <Link
//                         href="/services/access-control"
//                         className="block px-4 py-2 text-sm hover:bg-cyan-50 hover:text-cyan-600 transition"
//                       >
//                         Access Control
//                       </Link>

//                       <Link
//                         href="/services/alarm-systems"
//                         className="block px-4 py-2 text-sm hover:bg-cyan-50 hover:text-cyan-600 transition"
//                       >
//                         Alarm Systems
//                       </Link>

//                       <Link
//                         href="/services/networking"
//                         className="block px-4 py-2 text-sm hover:bg-cyan-50 hover:text-cyan-600 transition"
//                       >
//                         Networking
//                       </Link>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             ))}
//           </nav>
//           {/* <nav className="hidden lg:flex items-center space-x-8">
//             {navItems.map((item) => (
//               <Link
//                 key={item.name}
//                 href={item.path}
//                 className="text-sm font-medium text-foreground hover:text-sky-500 transition-colors"
//               >
//                 {item.name}
//               </Link>
//             ))}
//           </nav> */}

//           {/* CTA Buttons */}
//           <div className="hidden md:flex items-center space-x-4">
//             <Button variant="ghost" size="sm" asChild>
//               <Link href="tel:+1876-859-2783" className="flex items-center gap-2">
//                 <Phone className="h-4 w-4" />
//                 Call Now
//               </Link>
//             </Button>
//             <Button variant="cta" size="sm" asChild>
//               <Link href="https://wa.me/18768592783" className="flex items-center gap-2">
//                 {/* <MessageCircle className="h-4 w-4" /> */}
//                 <img
//                   src="/WhatsApp.png"
//                   alt="WhatsApp"
//                   className="h-5 w-5"
//                 />
//                 WhatsApp
//               </Link>
//             </Button>
//             <Button variant="hero" size="sm">

//               <Link href="/contact" className="flex items-center gap-2">
//                 {/* <Package className="h-4 w-4" /> */}
//                 <Receipt className="h-4 w-4"/>
//                 Request Quote
//               </Link>
              
//             </Button>
//           </div>

//           {/* Mobile Menu Toggle */}
//           <Button
//             variant="ghost"
//             size="icon"
//             className="lg:hidden"
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//           >
//             {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//           </Button>
//         </div>

//         {/* Mobile Menu */}
//         {isMenuOpen && (
//           <div className="lg:hidden py-4 border-t border-border">
//             <nav className="flex flex-col space-y-4">
//               {navItems.map((item) => (
//                 <Link
//                   key={item.name}
//                   href={item.path}
//                   className="text-foreground hover:text-sky-500 transition-colors py-2"
//                   onClick={() => setIsMenuOpen(false)}
//                 >
//                   {item.name}
//                 </Link>
//               ))}
//               <div className="flex flex-col space-y-3 pt-4">
//                 <Button variant="ghost" size="sm" asChild>
//                   <a href="tel:+1876-555-0123" className="flex items-center gap-2 justify-center">
//                     <Phone className="h-4 w-4" />
//                     Call Now
//                   </a>
//                 </Button>
//                 <Button variant="cta" size="sm" asChild>
//                   <Link href="https://wa.me/18768592783" className="flex items-center gap-2">
//                     {/* <MessageCircle className="h-4 w-4" /> */}
//                     <img
//                     src="/WhatsApp.png"
//                     alt="WhatsApp"
//                     className="h-5 w-5"
//                     />
//                     WhatsApp
//                   </Link>
//                 </Button>
//                 <Button variant="hero" size="sm">
//                   <Link href="/contact" className="flex items-center gap-2">
//                     <Receipt className="h-4 w-4"/>
//                       Request Quote
//                   </Link>
//                 </Button>
//               </div>
//             </nav>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// };

// export default Header;

"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
// import { Menu, X, Phone, Receipt } from "lucide-react";
import { Menu, X, Phone, Receipt, ShoppingCart } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState(null);
  const pathname = usePathname();

  const navItems = [
    // { name: "Home", path: "/" },
    {
      name: "Services",
      path: "/services",
      hasDropdown: true,
      dropdown: [
        { name: "Residential", path: "/services/residential" },
        { name: "Business", path: "/services/business" },
        { name: "Automotive", path: "/services/automotive" },
        // { name: "Networking", path: "/services/networking" },
      ],
    },
    { name: "Proucts", path: "/shop" ,
      hasDropdown: true,
      dropdown: [
        { name: "Residential", path: "/products/residential" },
        { name: "Business", path: "/products/business" },
        { name: "Automotive", path: "/products/automotive" },
      ],

    },
    { name: "Mobile Apps", path: "/MobileApps" , 
      hasDropdown: true,
      dropdown: [
        { name: "CS3 POS (Point-of-Sale) Mobile App", path: "/MobileApps" },
        // { name: "Access Control", path: "/services/access-control" },
        // { name: "Alarm Systems", path: "/services/alarm-systems" },
        // { name: "Networking", path: "/services/networking" },
      ],


    },
    // { name: "Customer Reviews", path: "#" },
    { name: "About", path: "/about" , 
      hasDropdown: true,
      dropdown: [
        { name: "Gallery (Coming Soon)", path: "/services/cctv" },
        // { name: "Access Control", path: "/services/access-control" },
        // { name: "Alarm Systems", path: "/services/alarm-systems" },
        // { name: "Networking", path: "/services/networking" },
      ],

    },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path) => pathname === path;

  return (
    <header className="sticky top-0 z-50 p-6 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container-section">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <img src="/checksum-logo.png" className="w-40 h-40" />
            <div className="flex flex-col">
              <span className="font-bold text-lg leading-none">Checksum</span>
              <span className="text-md text-black">
                Smart Security Solutions Ltd.
              </span>
            </div>
          </Link>

          {/* ================= DESKTOP ================= */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">

                {/* Main Link */}
                <Link
                  href={item.path}
                  className={`text-md font-medium transition-all flex items-center gap-1 relative
                    ${
                      isActive(item.path)
                        ? "text-cyan-400"
                        : "text-foreground hover:text-cyan-400"
                    }
                    after:absolute after:left-0 after:-bottom-1 after:h-[2px]
                    after:w-0 after:bg-cyan-400 after:transition-all after:duration-300
                    hover:after:w-full
                  `}
                >
                  {item.name}
                  {item.hasDropdown && (
                    <span className="text-md group-hover:rotate-180 transition">
                      ▼
                    </span>
                  )}
                </Link>

                {/* ===== MEGA MENU ===== */}
                {item.hasDropdown && (
                  <div className="absolute left-1/2 -translate-x-1/2 mt-6 w-[500px] rounded-2xl bg-white/95 backdrop-blur-md shadow-2xl border border-cyan-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 z-50">

                    <div className="grid grid-cols-2 gap-4 p-6">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.path}
                          className="p-4 rounded-xl hover:bg-cyan-50 transition group/item"
                        >
                          <p className="font-semibold text-gray-800 group-hover/item:text-cyan-600">
                            {subItem.name}
                          </p>
                          <p className="text-xs text-gray-500 mt-1">
                            Learn more about {subItem.name.toLowerCase()}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA */}
          {/* RIGHT SIDE (CTA + CART) */}
          <div className="hidden md:flex items-center space-x-4">

            {/* Call */}
            <Button variant="ghost" size="sm" asChild>
              <Link href="tel:+18768592783" className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                Call Now (876) 859-2783
              </Link>
            </Button>
            
            {/* WhatsApp */}
            <Button variant="ghost" size="sm" asChild>
              <Link href="tel:+18768592783" className="flex items-center gap-2">
                <img
                  src="/WhatsApp.png"
                  alt="WhatsApp"
                  className="h-5 w-5"
                />
                WhatsApp (876) 859-2783
              </Link>
            </Button>

            {/* Quote */}
            <Button variant="hero" size="sm">
              <Link href="/contact" className="flex items-center gap-2">
                <Receipt className="h-4 w-4" />
                Request Quote
              </Link>
            </Button>

            {/* 🛒 CART BUTTON */}
            <Link href="/cart" className="relative group">
              <div className="p-2 rounded-full hover:bg-cyan-50 transition">
                <ShoppingCart className="h-6 w-6 text-foreground group-hover:text-cyan-500 transition" />
              </div>

              {/* Badge */}
              <span className="absolute -top-1 -right-1 bg-cyan-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                3
                {/* {cartItems.length} */}
              </span>
            </Link>

          </div>
          {/* <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm" asChild>
              <Link href="tel:+18768592783" className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                Call Now
              </Link>
            </Button>

            <Button variant="hero" size="sm">
              <Link href="/contact" className="flex items-center gap-2">
                <Receipt className="h-4 w-4" />
                Request Quote
              </Link>
            </Button>
          </div> */}

          {/* MOBILE BUTTON */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* ================= MOBILE ================= */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-3">

              {navItems.map((item) => (
                <div key={item.name}>
                  
                  {/* Main Mobile Item */}
                  <button
                    onClick={() =>
                      item.hasDropdown
                        ? setOpenMobileDropdown(
                            openMobileDropdown === item.name ? null : item.name
                          )
                        : setIsMenuOpen(false)
                    }
                    className="w-full flex justify-between items-center py-2 text-left text-foreground hover:text-cyan-400"
                  >
                    <Link href={item.path}>{item.name}</Link>
                    {item.hasDropdown && <span>▼</span>}
                  </button>

                  {/* Mobile Dropdown */}
                  {item.hasDropdown &&
                    openMobileDropdown === item.name && (
                      <div className="ml-4 mt-2 space-y-2">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.path}
                            className="block text-sm text-gray-600 hover:text-cyan-500"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                </div>
              ))}

              {/* Mobile CTA */}
              <div className="pt-4">
                <Button className="w-full">
                  <Link href="/contact">Request Quote</Link>
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