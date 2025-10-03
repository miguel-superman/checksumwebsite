// // 'use client'

// // import React, { useState } from 'react';
// // import { Button } from '@/components/ui/button';
// // import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
// // import { Badge } from '@/components/ui/badge';
// // import { Input } from '@/components/ui/input';
// // import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
// // import { ShoppingCart, Search, Filter, Star, Shield, Truck, CreditCard } from 'lucide-react';
// // import Header from '../components/header';
// // import Footer from '../components/footer';

// // const ShopPage = () => {
// //   const [searchTerm, setSearchTerm] = useState('');
// //   const [selectedCategory, setSelectedCategory] = useState('all');
// //   const [cart, setCart] = useState([]);

// //   const products = [
// //     {
// //       id: 1,
// //       name: 'Complete CCTV Starter Kit',
// //       category: 'cctv',
// //       price: 89999,
// //       originalPrice: 99999,
// //       image: '/placeholder-cctv-kit.jpg',
// //       rating: 5,
// //       reviews: 24,
// //       features: ['4x 4K Cameras', '1TB DVR', 'Mobile App', 'Night Vision'],
// //       popular: true,
// //       inStock: true
// //     },
// //     {
// //       id: 2,
// //       name: 'Professional Access Control Kit',
// //       category: 'access-control',
// //       price: 69999,
// //       image: '/placeholder-access-kit.jpg',
// //       rating: 5,
// //       reviews: 18,
// //       features: ['Biometric Scanner', 'RFID Cards', 'Mobile Control', 'Audit Logs'],
// //       inStock: true
// //     },
// //     {
// //       id: 3,
// //       name: 'Smart Alarm Sensor Pack',
// //       category: 'alarms',
// //       price: 24999,
// //       image: '/placeholder-alarm-kit.jpg',
// //       rating: 4,
// //       reviews: 31,
// //       features: ['Motion Sensors', 'Door/Window Sensors', 'Smart Hub', 'Mobile Alerts'],
// //       inStock: true
// //     },
// //     {
// //       id: 4,
// //       name: 'Wireless Security Camera',
// //       category: 'cctv',
// //       price: 15999,
// //       image: '/placeholder-camera.jpg',
// //       rating: 5,
// //       reviews: 45,
// //       features: ['4K Resolution', 'Two-Way Audio', 'Cloud Storage', 'Weather Resistant'],
// //       inStock: false
// //     },
// //     {
// //       id: 5,
// //       name: 'Smart Door Lock Pro',
// //       category: 'access-control',
// //       price: 29999,
// //       image: '/placeholder-door-lock.jpg',
// //       rating: 4,
// //       reviews: 22,
// //       features: ['Fingerprint + PIN', 'Mobile App', 'Emergency Keys', 'Auto-Lock'],
// //       inStock: true
// //     },
// //     {
// //       id: 6,
// //       name: 'Network Security Router',
// //       category: 'networking',
// //       price: 19999,
// //       image: '/placeholder-router.jpg',
// //       rating: 4,
// //       reviews: 12,
// //       features: ['Enterprise Grade', 'VPN Support', 'Firewall', '24/7 Monitoring'],
// //       inStock: true
// //     }
// //   ];

// //   const categories = [
// //     { value: 'all', label: 'All Products' },
// //     { value: 'cctv', label: 'CCTV Systems' },
// //     { value: 'access-control', label: 'Access Control' },
// //     { value: 'alarms', label: 'Alarm Systems' },
// //     { value: 'networking', label: 'Network Equipment' }
// //   ];

// //   const formatPrice = (price) => {
// //     return new Intl.NumberFormat('en-JM', {
// //       style: 'currency',
// //       currency: 'JMD'
// //     }).format(price / 100);
// //   };

// //   const filteredProducts = products.filter(product => {
// //     const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
// //     const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
// //     return matchesSearch && matchesCategory;
// //   });

// //   const addToCart = (product) => {
// //     setCart(prev => [...prev, product]);
// //     // In a real app, this would integrate with a proper cart system
// //   };

// //   return (
// //     <>
// //     <Header />
// //       <main className="min-h-screen">
// //         {/* Hero Section */}
// //         <section className="section-padding bg-gradient-hero">
// //           <div className="container-section p-4">
// //             <div className="max-w-4xl mx-auto text-center space-y-6">
// //               <h1 className="text-hero  text-7xl text-foreground">
// //                 Security Equipment 
// //                 <span className="text-teal-500"> Store</span>
// //               </h1>
// //               <p className="text-body-large text-muted-foreground max-w-2xl mx-auto">
// //                 Professional-grade security equipment and complete security kits. 
// //                 All products come with professional installation and warranty support.
// //               </p>
// //               <div className="flex items-center justify-center gap-8 pt-4">
// //                 <div className="flex items-center gap-2 text-sm text-muted-foreground">
// //                   <Shield className="h-5 w-5 text-teal-300" />
// //                   Professional Grade
// //                 </div>
// //                 <div className="flex items-center gap-2 text-sm text-muted-foreground">
// //                   <Truck className="h-5 w-5 text-teal-300" />
// //                   Free Installation
// //                 </div>
// //                 <div className="flex items-center gap-2 text-sm text-muted-foreground">
// //                   <CreditCard className="h-5 w-5 text-teal-300" />
// //                   Secure Checkout
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </section>

// //         {/* Search and Filter */}
// //         <section className="py-8 bg-card border-b border-border">
// //           <div className="container-section p-4">
// //             <div className="flex flex-col md:flex-row gap-4 items-center">
// //               <div className="flex-1 relative">
// //                 <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
// //                 <Input
// //                   placeholder="Search security products..."
// //                   className="pl-10"
// //                   value={searchTerm}
// //                   onChange={(e) => setSearchTerm(e.target.value)}
// //                 />
// //               </div>
// //               <div className="flex items-center gap-2">
// //                 <Filter className="h-4 w-4 text-muted-foreground" />
// //                 <Select value={selectedCategory} onValueChange={setSelectedCategory}>
// //                   <SelectTrigger className="w-48">
// //                     <SelectValue placeholder="Filter by category" />
// //                   </SelectTrigger>
// //                   <SelectContent>
// //                     {categories.map(category => (
// //                       <SelectItem key={category.value} value={category.value}>
// //                         {category.label}
// //                       </SelectItem>
// //                     ))}
// //                   </SelectContent>
// //                 </Select>
// //               </div>
// //               {cart.length > 0 && (
// //                 <Button variant="cta" size="sm" className="flex items-center gap-2">
// //                   <ShoppingCart className="h-4 w-4" />
// //                   Cart ({cart.length})
// //                 </Button>
// //               )}
// //             </div>
// //           </div>
// //         </section>

// //         {/* Products Grid */}
// //         <section className="section-padding">
// //           <div className="container-section p-4">
// //             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
// //               {filteredProducts.map((product) => (
// //                 <Card key={product.id} className="card-gradient hover:shadow-teal-400 hover:shadow-2xl transition-all duration-300 relative">
// //                   {product.popular && (
// //                     <div className="absolute -top-3 left-4 z-10">
// //                       <Badge className="bg-accent text-accent-foreground">Best Seller</Badge>
// //                     </div>
// //                   )}
                  
// //                   <CardHeader className="pb-4">
// //                     {/* Product Image Placeholder */}
// //                     <div className="aspect-video bg-muted rounded-lg mb-4 flex items-center justify-center">
// //                       <div className="text-center space-y-2">
// //                         <Shield className="h-12 w-12 text-accent mx-auto" />
// //                         <p className="text-xs text-muted-foreground">Product Image</p>
// //                       </div>
// //                     </div>
                    
// //                     <div className="space-y-2">
// //                       <div className="flex items-start justify-between">
// //                         <CardTitle className="text-lg leading-tight">{product.name}</CardTitle>
// //                         {!product.inStock && (
// //                           <Badge variant="destructive">Out of Stock</Badge>
// //                         )}
// //                       </div>
                      
// //                       <div className="flex items-center gap-2">
// //                         <div className="flex items-center">
// //                           {[...Array(5)].map((_, i) => (
// //                             <Star 
// //                               key={i} 
// //                               className={`h-4 w-4 ${i < product.rating ? 'text-accent fill-current' : 'text-muted-foreground'}`} 
// //                             />
// //                           ))}
// //                         </div>
// //                         <span className="text-sm text-muted-foreground">({product.reviews})</span>
// //                       </div>
// //                     </div>
// //                   </CardHeader>

// //                   <CardContent className="space-y-4">
// //                     {/* Features */}
// //                     <div className="space-y-2">
// //                       {product.features.map((feature, index) => (
// //                         <div key={index} className="flex items-center gap-2">
// //                           <div className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" />
// //                           <span className="text-sm text-muted-foreground">{feature}</span>
// //                         </div>
// //                       ))}
// //                     </div>

// //                     {/* Price */}
// //                     <div className="flex items-center gap-2">
// //                       <span className="text-2xl font-bold text-foreground">
// //                         {formatPrice(product.price)}
// //                       </span>
// //                       {product.originalPrice && (
// //                         <span className="text-sm text-muted-foreground line-through">
// //                           {formatPrice(product.originalPrice)}
// //                         </span>
// //                       )}
// //                     </div>

// //                     {/* Actions */}
// //                     <div className="flex gap-2">
// //                       <Button 
// //                         variant={product.inStock ? "security" : "minimal"} 
// //                         className="flex-1"
// //                         disabled={!product.inStock}
// //                         onClick={() => product.inStock && addToCart(product)}
// //                       >
// //                         <ShoppingCart className="h-4 w-4 mr-2" />
// //                         {product.inStock ? 'Add to Cart' : 'Out of Stock'}
// //                       </Button>
// //                       <Button variant="cta">
// //                         Quote
// //                       </Button>
// //                     </div>

// //                     {product.inStock && (
// //                       <p className="text-xs text-muted-foreground text-center">
// //                         Free installation included • 2-year warranty
// //                       </p>
// //                     )}
// //                   </CardContent>
// //                 </Card>
// //               ))}
// //             </div>

// //             {filteredProducts.length === 0 && (
// //               <div className="text-center py-16">
// //                 <Search className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
// //                 <h3 className="text-xl font-semibold mb-2">No products found</h3>
// //                 <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
// //               </div>
// //             )}
// //           </div>
// //         </section>


// //         {/* Features Section */}
// //         <section className="section-padding bg-card">
// //           <div className="container-section p-4">
// //             <div className="text-center mb-12">
// //               <h2 className="text-heading mb-4">Why Shop With Checksum?</h2>
// //               <p className="text-body-large text-muted-foreground max-w-2xl mx-auto">
// //                 More than just equipment - we provide complete security solutions
// //               </p>
// //             </div>

// //             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
// //               <Card className="card-gradient text-center">
// //                 <CardContent className="p-6">
// //                   <Shield className="h-12 w-12 text-accent mx-auto mb-4" />
// //                   <h3 className="font-semibold text-lg mb-2">Professional Installation</h3>
// //                   <p className="text-sm text-muted-foreground">
// //                     Every purchase includes professional installation by our certified technicians
// //                   </p>
// //                 </CardContent>
// //               </Card>

// //               <Card className="card-gradient text-center">
// //                 <CardContent className="p-6">
// //                   <CreditCard className="h-12 w-12 text-accent mx-auto mb-4" />
// //                   <h3 className="font-semibold text-lg mb-2">Secure Payment</h3>
// //                   <p className="text-sm text-muted-foreground">
// //                     Multiple payment options with secure checkout and financing available
// //                   </p>
// //                 </CardContent>
// //               </Card>

// //               <Card className="card-gradient text-center">
// //                 <CardContent className="p-6">
// //                   <Truck className="h-12 w-12 text-accent mx-auto mb-4" />
// //                   <h3 className="font-semibold text-lg mb-2">Warranty & Support</h3>
// //                   <p className="text-sm text-muted-foreground">
// //                     2-year warranty on all products plus ongoing technical support
// //                   </p>
// //                 </CardContent>
// //               </Card>
// //             </div>
// //           </div>
// //         </section>

// //         {/* CTA Section */}
// //         <section className="section-padding bg-gradient-hero">
// //           <div className="container-section text-center">
// //             <div className="max-w-3xl mx-auto space-y-6">
// //               <h2 className="text-heading text-foreground">Need Help Choosing?</h2>
// //               <p className="text-body-large text-muted-foreground">
// //                 Our security experts can recommend the perfect equipment for your specific needs and budget.
// //               </p>
// //               <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
// //                 <Button variant="hero" size="xl">
// //                   Free Consultation
// //                 </Button>
// //                 <Button variant="cta" size="xl">
// //                   Call (876) 555-0123
// //                 </Button>
// //               </div>
// //             </div>
// //           </div>
// //         </section>
// //       </main>
// //     <Footer />
// //     </>
// //     );
// // };

// // export default ShopPage;


// 'use client'

// import React, { useState, useEffect } from 'react';
// import { Button } from '@/components/ui/button';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { Badge } from '@/components/ui/badge';
// import { Input } from '@/components/ui/input';
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
// import { ShoppingCart, Search, Filter, Star, Shield, Truck, CreditCard, Trash2 } from 'lucide-react';
// import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
// import Header from '../components/header';
// import Footer from '../components/footer';

// const ShopPage = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedCategory, setSelectedCategory] = useState('all');
//   const [cart, setCart] = useState([]);

//   // ✅ Load cart from localStorage on mount
//   useEffect(() => {
//     const savedCart = localStorage.getItem("shop_cart");
//     if (savedCart) {
//       setCart(JSON.parse(savedCart));
//     }
//   }, []);

//   // ✅ Save cart to localStorage whenever it changes
//   useEffect(() => {
//     localStorage.setItem("shop_cart", JSON.stringify(cart));
//   }, [cart]);

//   const products = [
//     {
//       id: 1,
//       name: 'Complete CCTV Starter Kit',
//       category: 'cctv',
//       price: 89999,
//       originalPrice: 99999,
//       rating: 5,
//       reviews: 24,
//       features: ['4x 4K Cameras', '1TB DVR', 'Mobile App', 'Night Vision'],
//       popular: true,
//       inStock: true
//     },
//     {
//       id: 2,
//       name: 'Professional Access Control Kit',
//       category: 'access-control',
//       price: 69999,
//       rating: 5,
//       reviews: 18,
//       features: ['Biometric Scanner', 'RFID Cards', 'Mobile Control', 'Audit Logs'],
//       inStock: true
//     },
//     {
//       id: 3,
//       name: 'Smart Alarm Sensor Pack',
//       category: 'alarms',
//       price: 24999,
//       rating: 4,
//       reviews: 31,
//       features: ['Motion Sensors', 'Door/Window Sensors', 'Smart Hub', 'Mobile Alerts'],
//       inStock: true
//     }
//   ];

//   const categories = [
//     { value: 'all', label: 'All Products' },
//     { value: 'cctv', label: 'CCTV Systems' },
//     { value: 'access-control', label: 'Access Control' },
//     { value: 'alarms', label: 'Alarm Systems' }
//   ];

//   const formatPrice = (price) => {
//     return new Intl.NumberFormat('en-JM', {
//       style: 'currency',
//       currency: 'JMD'
//     }).format(price / 100);
//   };

//   const filteredProducts = products.filter(product => {
//     const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
//     const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
//     return matchesSearch && matchesCategory;
//   });

//   const addToCart = (product) => {
//     setCart(prev => {
//       const existing = prev.find(item => item.id === product.id);
//       if (existing) {
//         return prev.map(item =>
//           item.id === product.id ? { ...item, qty: item.qty + 1 } : item
//         );
//       }
//       return [...prev, { ...product, qty: 1 }];
//     });
//   };

//   const removeFromCart = (id) => {
//     setCart(prev => prev.filter(item => item.id !== id));
//   };

//   const updateQty = (id, change) => {
//     setCart(prev =>
//       prev.map(item =>
//         item.id === id ? { ...item, qty: Math.max(1, item.qty + change) } : item
//       )
//     );
//   };

//   const clearCart = () => {
//     setCart([]);
//   };

//   const cartTotal = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

//   return (
//     <>
//       <Header />
//       <main className="min-h-screen">
//         {/* Search + Filter + Cart */}
//         <section className="py-8 bg-card border-b border-border">
//           <div className="container-section p-4 flex flex-col md:flex-row gap-4 items-center">
//             <div className="flex-1 relative">
//               <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
//               <Input
//                 placeholder="Search products..."
//                 className="pl-10"
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//               />
//             </div>
//             <div className="flex items-center gap-2">
//               <Filter className="h-4 w-4 text-muted-foreground" />
//               <Select value={selectedCategory} onValueChange={setSelectedCategory}>
//                 <SelectTrigger className="w-48">
//                   <SelectValue placeholder="Filter by category" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   {categories.map(c => (
//                     <SelectItem key={c.value} value={c.value}>
//                       {c.label}
//                     </SelectItem>
//                   ))}
//                 </SelectContent>
//               </Select>
//             </div>

//             {/* Cart Drawer */}
//             <Sheet>
//               <SheetTrigger asChild>
//                 <Button variant="cta" size="sm" className="flex items-center gap-2">
//                   <ShoppingCart className="h-4 w-4" />
//                   Cart ({cart.reduce((acc, i) => acc + i.qty, 0)})
//                 </Button>
//               </SheetTrigger>
//               <SheetContent side="right" className="w-96">
//                 <SheetHeader>
//                   <SheetTitle>Your Cart</SheetTitle>
//                 </SheetHeader>
//                 <div className="mt-4 space-y-4">
//                   {cart.length === 0 ? (
//                     <p className="text-muted-foreground text-sm">Your cart is empty</p>
//                   ) : (
//                     cart.map(item => (
//                       <div key={item.id} className="flex justify-between items-center border-b pb-2">
//                         <div>
//                           <p className="font-medium">{item.name}</p>
//                           <p className="text-sm text-muted-foreground">{formatPrice(item.price)}</p>
//                           <div className="flex items-center gap-2 mt-1">
//                             <Button variant="outline" size="xs" onClick={() => updateQty(item.id, -1)}>-</Button>
//                             <span>{item.qty}</span>
//                             <Button variant="outline" size="xs" onClick={() => updateQty(item.id, 1)}>+</Button>
//                           </div>
//                         </div>
//                         <div className="flex flex-col items-end">
//                           <span className="font-semibold">{formatPrice(item.price * item.qty)}</span>
//                           <Button
//                             variant="ghost"
//                             size="icon"
//                             onClick={() => removeFromCart(item.id)}
//                           >
//                             <Trash2 className="h-4 w-4 text-red-500" />
//                           </Button>
//                         </div>
//                       </div>
//                     ))
//                   )}
//                 </div>
//                 {cart.length > 0 && (
//                   <div className="mt-6 border-t pt-4 space-y-2">
//                     <p className="flex justify-between text-sm">
//                       <span>Subtotal</span>
//                       <span>{formatPrice(cartTotal)}</span>
//                     </p>
//                     <Button className="w-full" variant="cta">Checkout</Button>
//                     <Button className="w-full" variant="outline" onClick={clearCart}>Clear Cart</Button>
//                   </div>
//                 )}
//               </SheetContent>
//             </Sheet>
//           </div>
//         </section>

//         {/* Products Grid */}
//         <section className="section-padding">
//           <div className="container-section p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {filteredProducts.map((product) => (
//               <Card key={product.id} className="card-gradient p-4">
//                 <CardHeader>
//                   <CardTitle>{product.name}</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <p className="font-bold">{formatPrice(product.price)}</p>
//                   <div className="flex gap-2 mt-2">
//                     <Button onClick={() => addToCart(product)}>
//                       <ShoppingCart className="h-4 w-4 mr-2" />
//                       Add to Cart
//                     </Button>
//                     <Button variant="outline">Quote</Button>
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </section>
//       </main>
//       <Footer />
//     </>
//   );
// };

// export default ShopPage;


'use client'

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ShoppingCart, Search, Filter, Star, Shield, Truck, CreditCard, Trash2 } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import Header from '../components/header';
import Footer from '../components/footer';

const ShopPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [cart, setCart] = useState([]);

  // ✅ Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem("shop_cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // ✅ Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("shop_cart", JSON.stringify(cart));
  }, [cart]);

  const products = [
    {
      id: 1,
      name: 'Complete CCTV Starter Kit',
      category: 'cctv',
      price: 89999,
      originalPrice: 99999,
      rating: 5,
      reviews: 24,
      features: ['4x 4K Cameras', '1TB DVR', 'Mobile App', 'Night Vision'],
      popular: true,
      inStock: true
    },
    {
      id: 2,
      name: 'Professional Access Control Kit',
      category: 'access-control',
      price: 69999,
      rating: 5,
      reviews: 18,
      features: ['Biometric Scanner', 'RFID Cards', 'Mobile Control', 'Audit Logs'],
      inStock: true
    },
    {
      id: 3,
      name: 'Smart Alarm Sensor Pack',
      category: 'alarms',
      price: 24999,
      rating: 4,
      reviews: 31,
      features: ['Motion Sensors', 'Door/Window Sensors', 'Smart Hub', 'Mobile Alerts'],
      inStock: true
    }
  ];

  const categories = [
    { value: 'all', label: 'All Products' },
    { value: 'cctv', label: 'CCTV Systems' },
    { value: 'access-control', label: 'Access Control' },
    { value: 'alarms', label: 'Alarm Systems' }
  ];

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-JM', {
      style: 'currency',
      currency: 'JMD'
    }).format(price / 100);
  };

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const updateQty = (id, change) => {
    setCart(prev =>
      prev.map(item =>
        item.id === id ? { ...item, qty: Math.max(1, item.qty + change) } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartTotal = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Search + Filter + Cart */}
        <section className="py-8 bg-card border-b border-border">
          <div className="container-section p-4 flex flex-col md:flex-row gap-4 items-center">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search products..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-muted-foreground" />
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Filter by category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map(c => (
                    <SelectItem key={c.value} value={c.value}>
                      {c.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Cart Drawer */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="cta" size="sm" className="flex items-center gap-2">
                  <ShoppingCart className="h-4 w-4" />
                  Cart ({cart.reduce((acc, i) => acc + i.qty, 0)})
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-96 p-4">
                <SheetHeader>
                  <SheetTitle>Your Cart</SheetTitle>
                </SheetHeader>
                <div className="mt-4 space-y-4">
                  {cart.length === 0 ? (
                    <p className="text-muted-foreground text-sm">Your cart is empty</p>
                  ) : (
                    cart.map(item => (
                      <div key={item.id} className="flex justify-between items-center border-b pb-2">
                        <div>
                          <p className="font-medium">{item.name}</p>
                          <p className="text-sm text-muted-foreground">{formatPrice(item.price)}</p>
                          <div className="flex items-center gap-2 mt-1">
                            <Button variant="outline" size="xs" onClick={() => updateQty(item.id, -1)}>-</Button>
                            <span>{item.qty}</span>
                            <Button variant="outline" size="xs" onClick={() => updateQty(item.id, 1)}>+</Button>
                          </div>
                        </div>
                        <div className="flex flex-col items-end">
                          <span className="font-semibold">{formatPrice(item.price * item.qty)}</span>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => removeFromCart(item.id)}
                          >
                            <Trash2 className="h-4 w-4 text-red-500" />
                          </Button>
                        </div>
                      </div>
                    ))
                  )}
                </div>
                {cart.length > 0 && (
                  <div className="mt-6 border-t pt-4 space-y-2">
                    <p className="flex justify-between text-sm">
                      <span>Subtotal</span>
                      <span>{formatPrice(cartTotal)}</span>
                    </p>
                    <Button className="w-full border bg-teal-200" variant="cta">Checkout</Button>
                    <Button className="w-full bg-red-400" variant="outline" onClick={clearCart}>Clear Cart</Button>
                  </div>
                )}
              </SheetContent>
            </Sheet>
          </div>
        </section>

        {/* Products Grid */}
        {/* <section className="section-padding">
          <div className="container-section p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="card-gradient p-4">
                <CardHeader>
                  <CardTitle>{product.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-bold">{formatPrice(product.price)}</p>
                  <div className="flex gap-2 mt-2">
                    <Button onClick={() => addToCart(product)}>
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Add to Cart
                    </Button>
                    <Button variant="outline">Quote</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section> */}

                 {/* Products Grid */}
         <section className="section-padding">
           <div className="container-section p-4">
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               {filteredProducts.map((product) => (
                 <Card key={product.id} className="card-gradient hover:shadow-teal-400 hover:shadow-2xl transition-all duration-300 relative">
                   {product.popular && (
                     <div className="absolute -top-3 left-4 z-10">
                       <Badge className="bg-accent text-accent-foreground">Best Seller</Badge>
                     </div>
                   )}
                  
                   <CardHeader className="pb-4">
                     {/* Product Image Placeholder */}
                     <div className="aspect-video bg-muted rounded-lg mb-4 flex items-center justify-center">
                       <div className="text-center space-y-2">
                         <Shield className="h-12 w-12 text-accent mx-auto" />
                         <p className="text-xs text-muted-foreground">Product Image</p>
                       </div>
                     </div>
                    
                     <div className="space-y-2">
                       <div className="flex items-start justify-between">
                         <CardTitle className="text-lg leading-tight">{product.name}</CardTitle>
                         {!product.inStock && (
                           <Badge variant="destructive">Out of Stock</Badge>
                         )}
                       </div>
                      
                       <div className="flex items-center gap-2">
                         <div className="flex items-center">
                           {[...Array(5)].map((_, i) => (
                             <Star 
                               key={i} 
                               className={`h-4 w-4 ${i < product.rating ? 'text-accent fill-current' : 'text-muted-foreground'}`} 
                             />
                           ))}
                         </div>
                         <span className="text-sm text-muted-foreground">({product.reviews})</span>
                       </div>
                     </div>
                   </CardHeader>

                   <CardContent className="space-y-4">
                     {/* Features */}
                     <div className="space-y-2">
                       {product.features.map((feature, index) => (
                         <div key={index} className="flex items-center gap-2">
                           <div className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" />
                           <span className="text-sm text-muted-foreground">{feature}</span>
                         </div>
                       ))}
                     </div>

                     {/* Price */}
                     <div className="flex items-center gap-2">
                       <span className="text-2xl font-bold text-foreground">
                         {formatPrice(product.price)}
                       </span>
                       {product.originalPrice && (
                         <span className="text-sm text-muted-foreground line-through">
                           {formatPrice(product.originalPrice)}
                         </span>
                       )}
                     </div>

                     {/* Actions */}
                     <div className="flex gap-2">
                       <Button 
                         variant={product.inStock ? "security" : "minimal"} 
                         className="flex-1 border ring-1 ring-black hover:ring-teal-400 "
                         disabled={!product.inStock}
                         onClick={() => product.inStock && addToCart(product)}
                       >
                         <ShoppingCart className="h-4 w-4 mr-2" />
                         {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                       </Button>
                       <Button  
                       className="border" 
                       variant="cta"
                       >
                         Quote
                       </Button>
                     </div>

                     {product.inStock && (
                       <p className="text-xs text-muted-foreground text-center">
                         Free installation included • 2-year warranty
                       </p>
                     )}
                   </CardContent>
                 </Card>
               ))}
             </div>

             {filteredProducts.length === 0 && (
               <div className="text-center py-16">
                 <Search className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                 <h3 className="text-xl font-semibold mb-2">No products found</h3>
                 <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
               </div>
             )}
           </div>
         </section>

      </main>
      <Footer />
    </>
  );
};

export default ShopPage;
