// // // 'use client'

// // // import React, { useState } from 'react';
// // // import { Button } from '@/components/ui/button';
// // // import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
// // // import { Badge } from '@/components/ui/badge';
// // // import { Input } from '@/components/ui/input';
// // // import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
// // // import { ShoppingCart, Search, Filter, Star, Shield, Truck, CreditCard } from 'lucide-react';
// // // import Header from '../components/header';
// // // import Footer from '../components/footer';

// // // const ShopPage = () => {
// // //   const [searchTerm, setSearchTerm] = useState('');
// // //   const [selectedCategory, setSelectedCategory] = useState('all');
// // //   const [cart, setCart] = useState([]);

// // //   const products = [
// // //     {
// // //       id: 1,
// // //       name: 'Complete CCTV Starter Kit',
// // //       category: 'cctv',
// // //       price: 89999,
// // //       originalPrice: 99999,
// // //       image: '/placeholder-cctv-kit.jpg',
// // //       rating: 5,
// // //       reviews: 24,
// // //       features: ['4x 4K Cameras', '1TB DVR', 'Mobile App', 'Night Vision'],
// // //       popular: true,
// // //       inStock: true
// // //     },
// // //     {
// // //       id: 2,
// // //       name: 'Professional Access Control Kit',
// // //       category: 'access-control',
// // //       price: 69999,
// // //       image: '/placeholder-access-kit.jpg',
// // //       rating: 5,
// // //       reviews: 18,
// // //       features: ['Biometric Scanner', 'RFID Cards', 'Mobile Control', 'Audit Logs'],
// // //       inStock: true
// // //     },
// // //     {
// // //       id: 3,
// // //       name: 'Smart Alarm Sensor Pack',
// // //       category: 'alarms',
// // //       price: 24999,
// // //       image: '/placeholder-alarm-kit.jpg',
// // //       rating: 4,
// // //       reviews: 31,
// // //       features: ['Motion Sensors', 'Door/Window Sensors', 'Smart Hub', 'Mobile Alerts'],
// // //       inStock: true
// // //     },
// // //     {
// // //       id: 4,
// // //       name: 'Wireless Security Camera',
// // //       category: 'cctv',
// // //       price: 15999,
// // //       image: '/placeholder-camera.jpg',
// // //       rating: 5,
// // //       reviews: 45,
// // //       features: ['4K Resolution', 'Two-Way Audio', 'Cloud Storage', 'Weather Resistant'],
// // //       inStock: false
// // //     },
// // //     {
// // //       id: 5,
// // //       name: 'Smart Door Lock Pro',
// // //       category: 'access-control',
// // //       price: 29999,
// // //       image: '/placeholder-door-lock.jpg',
// // //       rating: 4,
// // //       reviews: 22,
// // //       features: ['Fingerprint + PIN', 'Mobile App', 'Emergency Keys', 'Auto-Lock'],
// // //       inStock: true
// // //     },
// // //     {
// // //       id: 6,
// // //       name: 'Network Security Router',
// // //       category: 'networking',
// // //       price: 19999,
// // //       image: '/placeholder-router.jpg',
// // //       rating: 4,
// // //       reviews: 12,
// // //       features: ['Enterprise Grade', 'VPN Support', 'Firewall', '24/7 Monitoring'],
// // //       inStock: true
// // //     }
// // //   ];

// // //   const categories = [
// // //     { value: 'all', label: 'All Products' },
// // //     { value: 'cctv', label: 'CCTV Systems' },
// // //     { value: 'access-control', label: 'Access Control' },
// // //     { value: 'alarms', label: 'Alarm Systems' },
// // //     { value: 'networking', label: 'Network Equipment' }
// // //   ];

// // //   const formatPrice = (price) => {
// // //     return new Intl.NumberFormat('en-JM', {
// // //       style: 'currency',
// // //       currency: 'JMD'
// // //     }).format(price / 100);
// // //   };

// // //   const filteredProducts = products.filter(product => {
// // //     const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
// // //     const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
// // //     return matchesSearch && matchesCategory;
// // //   });

// // //   const addToCart = (product) => {
// // //     setCart(prev => [...prev, product]);
// // //     // In a real app, this would integrate with a proper cart system
// // //   };

// // //   return (
// // //     <>
// // //     <Header />
// // //       <main className="min-h-screen">
// // //         {/* Hero Section */}
// // //         <section className="section-padding bg-gradient-hero">
// // //           <div className="container-section p-4">
// // //             <div className="max-w-4xl mx-auto text-center space-y-6">
// // //               <h1 className="text-hero  text-7xl text-foreground">
// // //                 Security Equipment 
// // //                 <span className="text-teal-500"> Store</span>
// // //               </h1>
// // //               <p className="text-body-large text-muted-foreground max-w-2xl mx-auto">
// // //                 Professional-grade security equipment and complete security kits. 
// // //                 All products come with professional installation and warranty support.
// // //               </p>
// // //               <div className="flex items-center justify-center gap-8 pt-4">
// // //                 <div className="flex items-center gap-2 text-sm text-muted-foreground">
// // //                   <Shield className="h-5 w-5 text-teal-300" />
// // //                   Professional Grade
// // //                 </div>
// // //                 <div className="flex items-center gap-2 text-sm text-muted-foreground">
// // //                   <Truck className="h-5 w-5 text-teal-300" />
// // //                   Free Installation
// // //                 </div>
// // //                 <div className="flex items-center gap-2 text-sm text-muted-foreground">
// // //                   <CreditCard className="h-5 w-5 text-teal-300" />
// // //                   Secure Checkout
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </section>

// // //         {/* Search and Filter */}
// // //         <section className="py-8 bg-card border-b border-border">
// // //           <div className="container-section p-4">
// // //             <div className="flex flex-col md:flex-row gap-4 items-center">
// // //               <div className="flex-1 relative">
// // //                 <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
// // //                 <Input
// // //                   placeholder="Search security products..."
// // //                   className="pl-10"
// // //                   value={searchTerm}
// // //                   onChange={(e) => setSearchTerm(e.target.value)}
// // //                 />
// // //               </div>
// // //               <div className="flex items-center gap-2">
// // //                 <Filter className="h-4 w-4 text-muted-foreground" />
// // //                 <Select value={selectedCategory} onValueChange={setSelectedCategory}>
// // //                   <SelectTrigger className="w-48">
// // //                     <SelectValue placeholder="Filter by category" />
// // //                   </SelectTrigger>
// // //                   <SelectContent>
// // //                     {categories.map(category => (
// // //                       <SelectItem key={category.value} value={category.value}>
// // //                         {category.label}
// // //                       </SelectItem>
// // //                     ))}
// // //                   </SelectContent>
// // //                 </Select>
// // //               </div>
// // //               {cart.length > 0 && (
// // //                 <Button variant="cta" size="sm" className="flex items-center gap-2">
// // //                   <ShoppingCart className="h-4 w-4" />
// // //                   Cart ({cart.length})
// // //                 </Button>
// // //               )}
// // //             </div>
// // //           </div>
// // //         </section>

// // //         {/* Products Grid */}
// // //         <section className="section-padding">
// // //           <div className="container-section p-4">
// // //             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
// // //               {filteredProducts.map((product) => (
// // //                 <Card key={product.id} className="card-gradient hover:shadow-teal-400 hover:shadow-2xl transition-all duration-300 relative">
// // //                   {product.popular && (
// // //                     <div className="absolute -top-3 left-4 z-10">
// // //                       <Badge className="bg-accent text-accent-foreground">Best Seller</Badge>
// // //                     </div>
// // //                   )}
                  
// // //                   <CardHeader className="pb-4">
// // //                     {/* Product Image Placeholder */}
// // //                     <div className="aspect-video bg-muted rounded-lg mb-4 flex items-center justify-center">
// // //                       <div className="text-center space-y-2">
// // //                         <Shield className="h-12 w-12 text-accent mx-auto" />
// // //                         <p className="text-xs text-muted-foreground">Product Image</p>
// // //                       </div>
// // //                     </div>
                    
// // //                     <div className="space-y-2">
// // //                       <div className="flex items-start justify-between">
// // //                         <CardTitle className="text-lg leading-tight">{product.name}</CardTitle>
// // //                         {!product.inStock && (
// // //                           <Badge variant="destructive">Out of Stock</Badge>
// // //                         )}
// // //                       </div>
                      
// // //                       <div className="flex items-center gap-2">
// // //                         <div className="flex items-center">
// // //                           {[...Array(5)].map((_, i) => (
// // //                             <Star 
// // //                               key={i} 
// // //                               className={`h-4 w-4 ${i < product.rating ? 'text-accent fill-current' : 'text-muted-foreground'}`} 
// // //                             />
// // //                           ))}
// // //                         </div>
// // //                         <span className="text-sm text-muted-foreground">({product.reviews})</span>
// // //                       </div>
// // //                     </div>
// // //                   </CardHeader>

// // //                   <CardContent className="space-y-4">
// // //                     {/* Features */}
// // //                     <div className="space-y-2">
// // //                       {product.features.map((feature, index) => (
// // //                         <div key={index} className="flex items-center gap-2">
// // //                           <div className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" />
// // //                           <span className="text-sm text-muted-foreground">{feature}</span>
// // //                         </div>
// // //                       ))}
// // //                     </div>

// // //                     {/* Price */}
// // //                     <div className="flex items-center gap-2">
// // //                       <span className="text-2xl font-bold text-foreground">
// // //                         {formatPrice(product.price)}
// // //                       </span>
// // //                       {product.originalPrice && (
// // //                         <span className="text-sm text-muted-foreground line-through">
// // //                           {formatPrice(product.originalPrice)}
// // //                         </span>
// // //                       )}
// // //                     </div>

// // //                     {/* Actions */}
// // //                     <div className="flex gap-2">
// // //                       <Button 
// // //                         variant={product.inStock ? "security" : "minimal"} 
// // //                         className="flex-1"
// // //                         disabled={!product.inStock}
// // //                         onClick={() => product.inStock && addToCart(product)}
// // //                       >
// // //                         <ShoppingCart className="h-4 w-4 mr-2" />
// // //                         {product.inStock ? 'Add to Cart' : 'Out of Stock'}
// // //                       </Button>
// // //                       <Button variant="cta">
// // //                         Quote
// // //                       </Button>
// // //                     </div>

// // //                     {product.inStock && (
// // //                       <p className="text-xs text-muted-foreground text-center">
// // //                         Free installation included • 2-year warranty
// // //                       </p>
// // //                     )}
// // //                   </CardContent>
// // //                 </Card>
// // //               ))}
// // //             </div>

// // //             {filteredProducts.length === 0 && (
// // //               <div className="text-center py-16">
// // //                 <Search className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
// // //                 <h3 className="text-xl font-semibold mb-2">No products found</h3>
// // //                 <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
// // //               </div>
// // //             )}
// // //           </div>
// // //         </section>


// // //         {/* Features Section */}
// // //         <section className="section-padding bg-card">
// // //           <div className="container-section p-4">
// // //             <div className="text-center mb-12">
// // //               <h2 className="text-heading mb-4">Why Shop With Checksum?</h2>
// // //               <p className="text-body-large text-muted-foreground max-w-2xl mx-auto">
// // //                 More than just equipment - we provide complete security solutions
// // //               </p>
// // //             </div>

// // //             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
// // //               <Card className="card-gradient text-center">
// // //                 <CardContent className="p-6">
// // //                   <Shield className="h-12 w-12 text-accent mx-auto mb-4" />
// // //                   <h3 className="font-semibold text-lg mb-2">Professional Installation</h3>
// // //                   <p className="text-sm text-muted-foreground">
// // //                     Every purchase includes professional installation by our certified technicians
// // //                   </p>
// // //                 </CardContent>
// // //               </Card>

// // //               <Card className="card-gradient text-center">
// // //                 <CardContent className="p-6">
// // //                   <CreditCard className="h-12 w-12 text-accent mx-auto mb-4" />
// // //                   <h3 className="font-semibold text-lg mb-2">Secure Payment</h3>
// // //                   <p className="text-sm text-muted-foreground">
// // //                     Multiple payment options with secure checkout and financing available
// // //                   </p>
// // //                 </CardContent>
// // //               </Card>

// // //               <Card className="card-gradient text-center">
// // //                 <CardContent className="p-6">
// // //                   <Truck className="h-12 w-12 text-accent mx-auto mb-4" />
// // //                   <h3 className="font-semibold text-lg mb-2">Warranty & Support</h3>
// // //                   <p className="text-sm text-muted-foreground">
// // //                     2-year warranty on all products plus ongoing technical support
// // //                   </p>
// // //                 </CardContent>
// // //               </Card>
// // //             </div>
// // //           </div>
// // //         </section>

// // //         {/* CTA Section */}
// // //         <section className="section-padding bg-gradient-hero">
// // //           <div className="container-section text-center">
// // //             <div className="max-w-3xl mx-auto space-y-6">
// // //               <h2 className="text-heading text-foreground">Need Help Choosing?</h2>
// // //               <p className="text-body-large text-muted-foreground">
// // //                 Our security experts can recommend the perfect equipment for your specific needs and budget.
// // //               </p>
// // //               <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
// // //                 <Button variant="hero" size="xl">
// // //                   Free Consultation
// // //                 </Button>
// // //                 <Button variant="cta" size="xl">
// // //                   Call (876) 555-0123
// // //                 </Button>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </section>
// // //       </main>
// // //     <Footer />
// // //     </>
// // //     );
// // // };

// // // export default ShopPage;


// // 'use client'

// // import React, { useState, useEffect } from 'react';
// // import { Button } from '@/components/ui/button';
// // import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// // import { Badge } from '@/components/ui/badge';
// // import { Input } from '@/components/ui/input';
// // import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
// // import { ShoppingCart, Search, Filter, Star, Shield, Truck, CreditCard, Trash2 } from 'lucide-react';
// // import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
// // import Header from '../components/header';
// // import Footer from '../components/footer';

// // const ShopPage = () => {
// //   const [searchTerm, setSearchTerm] = useState('');
// //   const [selectedCategory, setSelectedCategory] = useState('all');
// //   const [cart, setCart] = useState([]);

// //   // ✅ Load cart from localStorage on mount
// //   useEffect(() => {
// //     const savedCart = localStorage.getItem("shop_cart");
// //     if (savedCart) {
// //       setCart(JSON.parse(savedCart));
// //     }
// //   }, []);

// //   // ✅ Save cart to localStorage whenever it changes
// //   useEffect(() => {
// //     localStorage.setItem("shop_cart", JSON.stringify(cart));
// //   }, [cart]);

// //   const products = [
// //     {
// //       id: 1,
// //       name: 'Complete CCTV Starter Kit',
// //       category: 'cctv',
// //       price: 89999,
// //       originalPrice: 99999,
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
// //       rating: 4,
// //       reviews: 31,
// //       features: ['Motion Sensors', 'Door/Window Sensors', 'Smart Hub', 'Mobile Alerts'],
// //       inStock: true
// //     }
// //   ];

// //   const categories = [
// //     { value: 'all', label: 'All Products' },
// //     { value: 'cctv', label: 'CCTV Systems' },
// //     { value: 'access-control', label: 'Access Control' },
// //     { value: 'alarms', label: 'Alarm Systems' }
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
// //     setCart(prev => {
// //       const existing = prev.find(item => item.id === product.id);
// //       if (existing) {
// //         return prev.map(item =>
// //           item.id === product.id ? { ...item, qty: item.qty + 1 } : item
// //         );
// //       }
// //       return [...prev, { ...product, qty: 1 }];
// //     });
// //   };

// //   const removeFromCart = (id) => {
// //     setCart(prev => prev.filter(item => item.id !== id));
// //   };

// //   const updateQty = (id, change) => {
// //     setCart(prev =>
// //       prev.map(item =>
// //         item.id === id ? { ...item, qty: Math.max(1, item.qty + change) } : item
// //       )
// //     );
// //   };

// //   const clearCart = () => {
// //     setCart([]);
// //   };

// //   const cartTotal = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

// //   return (
// //     <>
// //       <Header />
// //       <main className="min-h-screen">
// //         {/* Search + Filter + Cart */}
// //         <section className="py-8 bg-card border-b border-border">
// //           <div className="container-section p-4 flex flex-col md:flex-row gap-4 items-center">
// //             <div className="flex-1 relative">
// //               <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
// //               <Input
// //                 placeholder="Search products..."
// //                 className="pl-10"
// //                 value={searchTerm}
// //                 onChange={(e) => setSearchTerm(e.target.value)}
// //               />
// //             </div>
// //             <div className="flex items-center gap-2">
// //               <Filter className="h-4 w-4 text-muted-foreground" />
// //               <Select value={selectedCategory} onValueChange={setSelectedCategory}>
// //                 <SelectTrigger className="w-48">
// //                   <SelectValue placeholder="Filter by category" />
// //                 </SelectTrigger>
// //                 <SelectContent>
// //                   {categories.map(c => (
// //                     <SelectItem key={c.value} value={c.value}>
// //                       {c.label}
// //                     </SelectItem>
// //                   ))}
// //                 </SelectContent>
// //               </Select>
// //             </div>

// //             {/* Cart Drawer */}
// //             <Sheet>
// //               <SheetTrigger asChild>
// //                 <Button variant="cta" size="sm" className="flex items-center gap-2">
// //                   <ShoppingCart className="h-4 w-4" />
// //                   Cart ({cart.reduce((acc, i) => acc + i.qty, 0)})
// //                 </Button>
// //               </SheetTrigger>
// //               <SheetContent side="right" className="w-96">
// //                 <SheetHeader>
// //                   <SheetTitle>Your Cart</SheetTitle>
// //                 </SheetHeader>
// //                 <div className="mt-4 space-y-4">
// //                   {cart.length === 0 ? (
// //                     <p className="text-muted-foreground text-sm">Your cart is empty</p>
// //                   ) : (
// //                     cart.map(item => (
// //                       <div key={item.id} className="flex justify-between items-center border-b pb-2">
// //                         <div>
// //                           <p className="font-medium">{item.name}</p>
// //                           <p className="text-sm text-muted-foreground">{formatPrice(item.price)}</p>
// //                           <div className="flex items-center gap-2 mt-1">
// //                             <Button variant="outline" size="xs" onClick={() => updateQty(item.id, -1)}>-</Button>
// //                             <span>{item.qty}</span>
// //                             <Button variant="outline" size="xs" onClick={() => updateQty(item.id, 1)}>+</Button>
// //                           </div>
// //                         </div>
// //                         <div className="flex flex-col items-end">
// //                           <span className="font-semibold">{formatPrice(item.price * item.qty)}</span>
// //                           <Button
// //                             variant="ghost"
// //                             size="icon"
// //                             onClick={() => removeFromCart(item.id)}
// //                           >
// //                             <Trash2 className="h-4 w-4 text-red-500" />
// //                           </Button>
// //                         </div>
// //                       </div>
// //                     ))
// //                   )}
// //                 </div>
// //                 {cart.length > 0 && (
// //                   <div className="mt-6 border-t pt-4 space-y-2">
// //                     <p className="flex justify-between text-sm">
// //                       <span>Subtotal</span>
// //                       <span>{formatPrice(cartTotal)}</span>
// //                     </p>
// //                     <Button className="w-full" variant="cta">Checkout</Button>
// //                     <Button className="w-full" variant="outline" onClick={clearCart}>Clear Cart</Button>
// //                   </div>
// //                 )}
// //               </SheetContent>
// //             </Sheet>
// //           </div>
// //         </section>

// //         {/* Products Grid */}
// //         <section className="section-padding">
// //           <div className="container-section p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
// //             {filteredProducts.map((product) => (
// //               <Card key={product.id} className="card-gradient p-4">
// //                 <CardHeader>
// //                   <CardTitle>{product.name}</CardTitle>
// //                 </CardHeader>
// //                 <CardContent>
// //                   <p className="font-bold">{formatPrice(product.price)}</p>
// //                   <div className="flex gap-2 mt-2">
// //                     <Button onClick={() => addToCart(product)}>
// //                       <ShoppingCart className="h-4 w-4 mr-2" />
// //                       Add to Cart
// //                     </Button>
// //                     <Button variant="outline">Quote</Button>
// //                   </div>
// //                 </CardContent>
// //               </Card>
// //             ))}
// //           </div>
// //         </section>
// //       </main>
// //       <Footer />
// //     </>
// //   );
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
//       <main className="min-h-screen bg-gradient-to-b from-teal-500 via-gray to-white">
//         {/* Search + Filter + Cart */}
//         <section className="py-8 bg-card border-b border-border bg-gradient-to-b from-teal-500 via-gray to-white">
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
//             <div className="flex items-center gap-2 ">
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
//               <SheetContent side="right" className="w-96 p-4">
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
//                     <Button className="w-full border bg-teal-200" variant="cta">Checkout</Button>
//                     <Button className="w-full bg-red-400" variant="outline" onClick={clearCart}>Clear Cart</Button>
//                   </div>
//                 )}
//               </SheetContent>
//             </Sheet>
//           </div>
//         </section>

//         {/* Products Grid */}
//         {/* <section className="section-padding">
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
//         </section> */}

//                  {/* Products Grid */}
//          <section className="section-padding">
//            <div className="container-section p-4">
//              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                {filteredProducts.map((product) => (
//                  <Card key={product.id} className="card-gradient hover:shadow-teal-400 hover:shadow-2xl transition-all duration-300 relative">
//                    {product.popular && (
//                      <div className="absolute -top-3 left-4 z-10">
//                        <Badge className="bg-accent text-accent-foreground">Best Seller</Badge>
//                      </div>
//                    )}
                  
//                    <CardHeader className="pb-4">
//                      {/* Product Image Placeholder */}
//                      <div className="aspect-video bg-muted rounded-lg mb-4 flex items-center justify-center">
//                        <div className="text-center space-y-2">
//                          <Shield className="h-12 w-12 text-accent mx-auto" />
//                          <p className="text-xs text-muted-foreground">Product Image</p>
//                        </div>
//                      </div>
                    
//                      <div className="space-y-2">
//                        <div className="flex items-start justify-between">
//                          <CardTitle className="text-lg leading-tight">{product.name}</CardTitle>
//                          {!product.inStock && (
//                            <Badge variant="destructive">Out of Stock</Badge>
//                          )}
//                        </div>
                      
//                        <div className="flex items-center gap-2">
//                          <div className="flex items-center">
//                            {[...Array(5)].map((_, i) => (
//                              <Star 
//                                key={i} 
//                                className={`h-4 w-4 ${i < product.rating ? 'text-accent fill-current' : 'text-muted-foreground'}`} 
//                              />
//                            ))}
//                          </div>
//                          <span className="text-sm text-muted-foreground">({product.reviews})</span>
//                        </div>
//                      </div>
//                    </CardHeader>

//                    <CardContent className="space-y-4">
//                      {/* Features */}
//                      <div className="space-y-2">
//                        {product.features.map((feature, index) => (
//                          <div key={index} className="flex items-center gap-2">
//                            <div className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" />
//                            <span className="text-sm text-muted-foreground">{feature}</span>
//                          </div>
//                        ))}
//                      </div>

//                      {/* Price */}
//                      <div className="flex items-center gap-2">
//                        <span className="text-2xl font-bold text-foreground">
//                          {formatPrice(product.price)}
//                        </span>
//                        {product.originalPrice && (
//                          <span className="text-sm text-muted-foreground line-through">
//                            {formatPrice(product.originalPrice)}
//                          </span>
//                        )}
//                      </div>

//                      {/* Actions */}
//                      <div className="flex gap-2">
//                        <Button 
//                          variant={product.inStock ? "security" : "minimal"} 
//                          className="flex-1 border ring-1 ring-black hover:ring-teal-400 "
//                          disabled={!product.inStock}
//                          onClick={() => product.inStock && addToCart(product)}
//                        >
//                          <ShoppingCart className="h-4 w-4 mr-2" />
//                          {product.inStock ? 'Add to Cart' : 'Out of Stock'}
//                        </Button>
//                        <Button  
//                        className="border" 
//                        variant="cta"
//                        >
//                          Quote
//                        </Button>
//                      </div>

//                      {product.inStock && (
//                        <p className="text-xs text-muted-foreground text-center">
//                          Free installation included • 2-year warranty
//                        </p>
//                      )}
//                    </CardContent>
//                  </Card>
//                ))}
//              </div>

//              {filteredProducts.length === 0 && (
//                <div className="text-center py-16">
//                  <Search className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
//                  <h3 className="text-xl font-semibold mb-2">No products found</h3>
//                  <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
//                </div>
//              )}
//            </div>
//          </section>

//       </main>
//       <Footer />
//     </>
//   );
// };

// export default ShopPage;


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

//   useEffect(() => {
//     const savedCart = localStorage.getItem("shop_cart");
//     if (savedCart) setCart(JSON.parse(savedCart));
//   }, []);

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

//   const formatPrice = (price) =>
//     new Intl.NumberFormat('en-JM', { style: 'currency', currency: 'JMD' }).format(price / 100);

//   const filteredProducts = products.filter(p => {
//     const matchSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase());
//     const matchCategory = selectedCategory === 'all' || p.category === selectedCategory;
//     return matchSearch && matchCategory;
//   });

//   const addToCart = (product) => {
//     setCart(prev => {
//       const existing = prev.find(item => item.id === product.id);
//       return existing
//         ? prev.map(item => item.id === product.id ? { ...item, qty: item.qty + 1 } : item)
//         : [...prev, { ...product, qty: 1 }];
//     });
//   };

//   const updateQty = (id, change) => {
//     setCart(prev => prev.map(item =>
//       item.id === id ? { ...item, qty: Math.max(1, item.qty + change) } : item
//     ));
//   };

//   const removeFromCart = (id) => setCart(prev => prev.filter(item => item.id !== id));
//   const clearCart = () => setCart([]);
//   const cartTotal = cart.reduce((sum, i) => sum + i.price * i.qty, 0);

//   return (
//     <>
//       <Header />
//       <main className="min-h-screen bg-background">
        
//         {/* Hero Section */}
//         <section className="py-16 bg-gradient-to-r from-slate-900 to-slate-800 text-center">
//           <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
//             Your Trusted <span className="text-teal-400">Security Store</span>
//           </h1>
//           <p className="text-gray-400 max-w-2xl mx-auto">
//             Explore our professional-grade security systems with installation, warranty, and expert support.
//           </p>
//           <div className="flex justify-center gap-8 mt-6 text-sm text-gray-300">
//             <span className="flex items-center gap-2"><Shield className="w-4 h-4 text-teal-400" /> Certified Quality</span>
//             <span className="flex items-center gap-2"><Truck className="w-4 h-4 text-teal-400" /> Free Installation</span>
//             <span className="flex items-center gap-2"><CreditCard className="w-4 h-4 text-teal-400" /> Secure Checkout</span>
//           </div>
//         </section>

//         {/* Search & Filter Section */}
//         <section className="py-6 bg-card border-b border-border">
//           <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-4">
//             <div className="relative flex-1 w-full">
//               <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
//               <Input
//                 placeholder="Search for products..."
//                 className="pl-10"
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//               />
//             </div>

//             <div className="flex items-center gap-2">
//               <Filter className="h-4 w-4 text-muted-foreground" />
//               <Select value={selectedCategory} onValueChange={setSelectedCategory}>
//                 <SelectTrigger className="w-48">
//                   <SelectValue placeholder="Filter category" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   {categories.map(c => (
//                     <SelectItem key={c.value} value={c.value}>{c.label}</SelectItem>
//                   ))}
//                 </SelectContent>
//               </Select>
//             </div>

//             <Sheet>
//               <SheetTrigger asChild>
//                 <Button variant="cta" className="flex items-center gap-2">
//                   <ShoppingCart className="h-4 w-4" />
//                   Cart ({cart.reduce((a, i) => a + i.qty, 0)})
//                 </Button>
//               </SheetTrigger>
//               <SheetContent side="right" className="w-96 overflow-y-auto">
//                 <SheetHeader>
//                   <SheetTitle className="text-lg font-semibold">Your Cart</SheetTitle>
//                 </SheetHeader>
//                 <div className="mt-4 space-y-4">
//                   {cart.length === 0 ? (
//                     <p className="text-muted-foreground text-sm text-center py-8">Your cart is empty</p>
//                   ) : cart.map(item => (
//                     <div key={item.id} className="flex justify-between items-start border-b pb-3">
//                       <div>
//                         <p className="font-medium">{item.name}</p>
//                         <p className="text-sm text-muted-foreground">{formatPrice(item.price)}</p>
//                         <div className="flex items-center gap-2 mt-2">
//                           <Button size="xs" variant="outline" onClick={() => updateQty(item.id, -1)}>-</Button>
//                           <span>{item.qty}</span>
//                           <Button size="xs" variant="outline" onClick={() => updateQty(item.id, 1)}>+</Button>
//                         </div>
//                       </div>
//                       <div className="flex flex-col items-end gap-2">
//                         <span className="font-semibold">{formatPrice(item.price * item.qty)}</span>
//                         <Button size="icon" variant="ghost" onClick={() => removeFromCart(item.id)}>
//                           <Trash2 className="h-4 w-4 text-red-500" />
//                         </Button>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//                 {cart.length > 0 && (
//                   <div className="mt-6 border-t pt-4 space-y-2">
//                     <p className="flex justify-between text-sm">
//                       <span>Subtotal</span>
//                       <span className="font-semibold">{formatPrice(cartTotal)}</span>
//                     </p>
//                     <Button className="w-full" variant="cta">Checkout</Button>
//                     <Button className="w-full" variant="outline" onClick={clearCart}>Clear Cart</Button>
//                   </div>
//                 )}
//               </SheetContent>
//             </Sheet>
//           </div>
//         </section>

//         {/* Product Grid */}
//         <section className="py-12">
//           <div className="container mx-auto px-4 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
//             {filteredProducts.map(p => (
//               <Card key={p.id} className="h-96 bg-gradient-to-b from-slate-900 to-slate-800 border border-slate-700 hover:shadow-teal-500/20 hover:shadow-lg transition-all">
//                 <CardHeader className="space-y-2">
//                   <CardTitle className="flex justify-between items-start">
//                     {p.name}
//                     {p.popular && <Badge className="bg-teal-500/20 text-teal-400">Best Seller</Badge>}
//                   </CardTitle>
//                   <div className="flex items-center gap-2 text-sm">
//                     {[...Array(5)].map((_, i) => (
//                       <Star key={i} className={`h-4 w-4 ${i < p.rating ? 'text-yellow-400 fill-yellow-400' : 'text-slate-600'}`} />
//                     ))}
//                     <span className="text-muted-foreground">({p.reviews})</span>
//                   </div>
//                 </CardHeader>
//                 <CardContent className="space-y-3">
//                   <div className="space-y-1">
//                     {p.features.map((f, i) => (
//                       <p key={i} className="text-sm text-muted-foreground">• {f}</p>
//                     ))}
//                   </div>
//                   <div className="flex items-center gap-2 text-lg font-semibold">
//                     {formatPrice(p.price)}
//                     {p.originalPrice && (
//                       <span className="text-sm text-gray-500 line-through">{formatPrice(p.originalPrice)}</span>
//                     )}
//                   </div>
//                   <div className="flex gap-2">
//                     <Button className="flex-1" variant="cta" onClick={() => addToCart(p)}>
//                       <ShoppingCart className="h-4 w-4 mr-2" />
//                       Add to Cart
//                     </Button>
//                     <Button variant="outline">Quote</Button>
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>

//           {filteredProducts.length === 0 && (
//             <div className="text-center text-muted-foreground py-20">
//               <Search className="mx-auto h-10 w-10 mb-3" />
//               <p>No products found matching your search.</p>
//             </div>
//           )}
//         </section>

//                          {/* Products Grid */}
//           <section className="section-padding p-14">
//             <div className="container-section p-4">
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                 {filteredProducts.map((product) => (
//                   <Card key={product.id} className="card-gradient hover:shadow-teal-400 hover:shadow-2xl transition-all duration-300 relative">
//                     {product.popular && (
//                       <div className="absolute -top-3 left-4 z-10">
//                         <Badge className="bg-accent text-accent-foreground">Best Seller</Badge>
//                       </div>
//                     )}
                  
//                     <CardHeader className="pb-4">
//                       {/* Product Image Placeholder */}
//                       <div className="aspect-video bg-muted rounded-lg mb-4 flex items-center justify-center">
//                         <div className="text-center space-y-2">
//                           <Shield className="h-12 w-12 text-accent mx-auto" />
//                           <p className="text-xs text-muted-foreground">Product Image</p>
//                         </div>
//                       </div>
                    
//                       <div className="space-y-2">
//                         <div className="flex items-start justify-between">
//                           <CardTitle className="text-lg leading-tight">{product.name}</CardTitle>
//                           {!product.inStock && (
//                             <Badge variant="destructive">Out of Stock</Badge>
//                           )}
//                         </div>
                      
//                         <div className="flex items-center gap-2">
//                           <div className="flex items-center">
//                             {[...Array(5)].map((_, i) => (
//                               <Star 
//                                 key={i} 
//                                 className={`h-4 w-4 ${i < product.rating ? 'text-accent fill-current' : 'text-muted-foreground'}`} 
//                               />
//                             ))}
//                           </div>
//                           <span className="text-sm text-muted-foreground">({product.reviews})</span>
//                         </div>
//                       </div>
//                     </CardHeader>

//                     <CardContent className="space-y-4">
//                       {/* Features */}
//                       <div className="space-y-2">
//                         {product.features.map((feature, index) => (
//                           <div key={index} className="flex items-center gap-2">
//                             <div className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" />
//                             <span className="text-sm text-muted-foreground">{feature}</span>
//                           </div>
//                         ))}
//                       </div>

//                       {/* Price */}
//                       <div className="flex items-center gap-2">
//                         <span className="text-2xl font-bold text-foreground">
//                           {formatPrice(product.price)}
//                         </span>
//                         {product.originalPrice && (
//                           <span className="text-sm text-muted-foreground line-through">
//                             {formatPrice(product.originalPrice)}
//                           </span>
//                         )}
//                       </div>

//                       {/* Actions */}
//                       <div className="flex gap-2">
//                         <Button 
//                           variant={product.inStock ? "security" : "minimal"} 
//                           className="flex-1 border ring-1 ring-black hover:ring-teal-400 "
//                           disabled={!product.inStock}
//                           onClick={() => product.inStock && addToCart(product)}
//                         >
//                           <ShoppingCart className="h-4 w-4 mr-2" />
//                           {product.inStock ? 'Add to Cart' : 'Out of Stock'}
//                         </Button>
//                         <Button  
//                         className="border" 
//                         variant="cta"
//                         >
//                           Quote
//                         </Button>
//                       </div>

//                       {product.inStock && (
//                         <p className="text-xs text-muted-foreground text-center">
//                           Free installation included • 2-year warranty
//                         </p>
//                       )}
//                     </CardContent>
//                   </Card>
//                 ))}
//               </div>

//               {filteredProducts.length === 0 && (
//                 <div className="text-center py-16">
//                   <Search className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
//                   <h3 className="text-xl font-semibold mb-2">No products found</h3>
//                   <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
//                 </div>
//               )}
//             </div>
//           </section>
//       </main>
//       <Footer />
//     </>
//   );
// };

// export default ShopPage;


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
// import Image from 'next/image';

// const ShopPage = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedCategory, setSelectedCategory] = useState('all');
//   const [cart, setCart] = useState([]);

//   useEffect(() => {
//     const savedCart = localStorage.getItem("shop_cart");
//     if (savedCart) setCart(JSON.parse(savedCart));
//   }, []);

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
//       image: '/images/cctv-kit.jpg',
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
//       image: '/images/access-control.jpg',
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
//       image: '/images/alarm-kit.jpg',
//       inStock: true
//     },
//     {
//       id: 4,
//       name: 'Wireless IP Camera (Outdoor)',
//       category: 'cctv',
//       price: 19999,
//       rating: 4,
//       reviews: 42,
//       features: ['1080p HD', 'Weatherproof', 'Night Vision', 'WiFi Enabled'],
//       image: '/images/ip-camera.jpg',
//       inStock: true
//     },
//     {
//       id: 5,
//       name: 'Fingerprint Door Lock',
//       category: 'access-control',
//       price: 32999,
//       rating: 5,
//       reviews: 55,
//       features: ['Biometric Access', 'App Unlock', 'Auto-Lock Timer', 'Low Power Mode'],
//       image: '/images/door-lock.jpg',
//       inStock: true
//     },
//     {
//       id: 6,
//       name: 'Motion Detection Camera System',
//       category: 'cctv',
//       price: 45999,
//       rating: 5,
//       reviews: 37,
//       features: ['AI Motion Detection', 'Cloud Storage', '4K Resolution', '2-Way Audio'],
//       image: '/images/motion-cam.jpg',
//       inStock: true
//     }
//   ];

//   const categories = [
//     { value: 'all', label: 'All Products' },
//     { value: 'cctv', label: 'CCTV Systems' },
//     { value: 'access-control', label: 'Access Control' },
//     { value: 'alarms', label: 'Alarm Systems' }
//   ];

//   const formatPrice = (price) =>
//     new Intl.NumberFormat('en-JM', { style: 'currency', currency: 'JMD' }).format(price / 100);

//   const filteredProducts = products.filter(p => {
//     const matchSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase());
//     const matchCategory = selectedCategory === 'all' || p.category === selectedCategory;
//     return matchSearch && matchCategory;
//   });

//   const addToCart = (product) => {
//     setCart(prev => {
//       const existing = prev.find(item => item.id === product.id);
//       return existing
//         ? prev.map(item => item.id === product.id ? { ...item, qty: item.qty + 1 } : item)
//         : [...prev, { ...product, qty: 1 }];
//     });
//   };

//   const updateQty = (id, change) => {
//     setCart(prev => prev.map(item =>
//       item.id === id ? { ...item, qty: Math.max(1, item.qty + change) } : item
//     ));
//   };

//   const removeFromCart = (id) => setCart(prev => prev.filter(item => item.id !== id));
//   const clearCart = () => setCart([]);
//   const cartTotal = cart.reduce((sum, i) => sum + i.price * i.qty, 0);

//   return (
//     <>
//       <Header />
//       <main className="min-h-screen bg-background">
        
//         {/* Hero Section */}
//         <section className="py-16 bg-gradient-to-r from-slate-900 to-slate-800 text-center">
//           <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
//             Your Trusted <span className="text-teal-400">Security Store</span>
//           </h1>
//           <p className="text-gray-400 max-w-2xl mx-auto">
//             Explore our professional-grade security systems with installation, warranty, and expert support.
//           </p>
//           <div className="flex justify-center gap-8 mt-6 text-sm text-gray-300">
//             <span className="flex items-center gap-2"><Shield className="w-4 h-4 text-teal-400" /> Certified Quality</span>
//             <span className="flex items-center gap-2"><Truck className="w-4 h-4 text-teal-400" /> Free Installation</span>
//             <span className="flex items-center gap-2"><CreditCard className="w-4 h-4 text-teal-400" /> Secure Checkout</span>
//           </div>
//         </section>

//         {/* Search & Filter Section */}
//         <section className="py-6 bg-card border-b border-border">
//           <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-4">
//             <div className="relative flex-1 w-full">
//               <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
//               <Input
//                 placeholder="Search for products..."
//                 className="pl-10"
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//               />
//             </div>

//             <div className="flex items-center gap-2">
//               <Filter className="h-4 w-4 text-muted-foreground" />
//               <Select value={selectedCategory} onValueChange={setSelectedCategory}>
//                 <SelectTrigger className="w-48">
//                   <SelectValue placeholder="Filter category" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   {categories.map(c => (
//                     <SelectItem key={c.value} value={c.value}>{c.label}</SelectItem>
//                   ))}
//                 </SelectContent>
//               </Select>
//             </div>

//             <Sheet>
//               <SheetTrigger asChild>
//                 <Button variant="cta" className="flex items-center gap-2">
//                   <ShoppingCart className="h-4 w-4" />
//                   Cart ({cart.reduce((a, i) => a + i.qty, 0)})
//                 </Button>
//               </SheetTrigger>
//               <SheetContent side="right" className="w-96 overflow-y-auto">
//                 <SheetHeader>
//                   <SheetTitle className="text-lg font-semibold">Your Cart</SheetTitle>
//                 </SheetHeader>
//                 <div className="mt-4 space-y-4">
//                   {cart.length === 0 ? (
//                     <p className="text-muted-foreground text-sm text-center py-8">Your cart is empty</p>
//                   ) : cart.map(item => (
//                     <div key={item.id} className="flex justify-between items-start border-b pb-3">
//                       <div>
//                         <p className="font-medium">{item.name}</p>
//                         <p className="text-sm text-muted-foreground">{formatPrice(item.price)}</p>
//                         <div className="flex items-center gap-2 mt-2">
//                           <Button size="xs" variant="outline" onClick={() => updateQty(item.id, -1)}>-</Button>
//                           <span>{item.qty}</span>
//                           <Button size="xs" variant="outline" onClick={() => updateQty(item.id, 1)}>+</Button>
//                         </div>
//                       </div>
//                       <div className="flex flex-col items-end gap-2">
//                         <span className="font-semibold">{formatPrice(item.price * item.qty)}</span>
//                         <Button size="icon" variant="ghost" onClick={() => removeFromCart(item.id)}>
//                           <Trash2 className="h-4 w-4 text-red-500" />
//                         </Button>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//                 {cart.length > 0 && (
//                   <div className="mt-6 border-t pt-4 space-y-2">
//                     <p className="flex justify-between text-sm">
//                       <span>Subtotal</span>
//                       <span className="font-semibold">{formatPrice(cartTotal)}</span>
//                     </p>
//                     <Button className="w-full" variant="cta">Checkout</Button>
//                     <Button className="w-full" variant="outline" onClick={clearCart}>Clear Cart</Button>
//                   </div>
//                 )}
//               </SheetContent>
//             </Sheet>
//           </div>
//         </section>

//         {/* Product Grid */}
//         <section className="py-12">
//           <div className="container mx-auto px-4 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
//             {filteredProducts.map(p => (
//               <Card key={p.id} className="bg-gradient-to-b from-slate-900 to-slate-800 border border-slate-700 hover:shadow-teal-500/20 hover:shadow-lg transition-all">
//                 <div className="relative w-full h-56 overflow-hidden rounded-t-xl">
//                   <Image
//                     src={p.image || '/images/placeholder.jpg'}
//                     alt={p.name}
//                     layout="fill"
//                     objectFit="cover"
//                     className="transition-transform duration-300 hover:scale-105"
//                   />
//                 </div>
//                 <CardHeader className="space-y-2">
//                   <CardTitle className="flex justify-between items-start">
//                     {p.name}
//                     {p.popular && <Badge className="bg-teal-500/20 text-teal-400">Best Seller</Badge>}
//                   </CardTitle>
//                   <div className="flex items-center gap-2 text-sm">
//                     {[...Array(5)].map((_, i) => (
//                       <Star key={i} className={`h-4 w-4 ${i < p.rating ? 'text-yellow-400 fill-yellow-400' : 'text-slate-600'}`} />
//                     ))}
//                     <span className="text-muted-foreground">({p.reviews})</span>
//                   </div>
//                 </CardHeader>
//                 <CardContent className="space-y-3">
//                   <div className="space-y-1">
//                     {p.features.map((f, i) => (
//                       <p key={i} className="text-sm text-muted-foreground">• {f}</p>
//                     ))}
//                   </div>
//                   <div className="flex items-center gap-2 text-lg font-semibold">
//                     {formatPrice(p.price)}
//                     {p.originalPrice && (
//                       <span className="text-sm text-gray-500 line-through">{formatPrice(p.originalPrice)}</span>
//                     )}
//                   </div>
//                   <div className="flex gap-2">
//                     <Button className="flex-1" variant="cta" onClick={() => addToCart(p)}>
//                       <ShoppingCart className="h-4 w-4 mr-2" />
//                       Add to Cart
//                     </Button>
//                     <Button variant="outline">Quote</Button>
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>

//           {filteredProducts.length === 0 && (
//             <div className="text-center text-muted-foreground py-20">
//               <Search className="mx-auto h-10 w-10 mb-3" />
//               <p>No products found matching your search.</p>
//             </div>
//           )}
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
import { ShoppingCart, Search, Filter, Star, Shield, Truck, CreditCard, Trash2, Eye } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import Header from '../components/header';
import Footer from '../components/footer';
import Image from 'next/image';

const ShopPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [cart, setCart] = useState([]);
  const [quickViewItem, setQuickViewItem] = useState(null);

  useEffect(() => {
    const savedCart = localStorage.getItem("shop_cart");
    if (savedCart) setCart(JSON.parse(savedCart));
  }, []);

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
      image: '/checksum-logo.png',
      description: 'A complete professional-grade CCTV system with remote access, easy setup, and lifetime support.',
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
      image: '/checksum-logo.png',
      description: 'Secure access control kit for offices, schools, or homes. Biometric and RFID card support.',
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
      image: '/checksum-logo.png',
      description: 'Stay alert with our smart alarm sensors. Compatible with Alexa and Google Home.',
      inStock: true
    },
    {
      id: 4,
      name: 'Wireless IP Camera (Outdoor)',
      category: 'cctv',
      price: 19999,
      rating: 4,
      reviews: 42,
      features: ['1080p HD', 'Weatherproof', 'Night Vision', 'WiFi Enabled'],
      image: '/checksum-logo.png',
      description: 'Outdoor IP camera built for reliability, clarity, and remote monitoring.',
      inStock: true
    },
    {
      id: 5,
      name: 'Fingerprint Door Lock',
      category: 'access-control',
      price: 32999,
      rating: 5,
      reviews: 55,
      features: ['Biometric Access', 'App Unlock', 'Auto-Lock Timer', 'Low Power Mode'],
      image: '/checksum-logo.png',
      description: 'Smart fingerprint lock for modern homes and offices. High security and easy installation.',
      inStock: true
    },
    {
      id: 6,
      name: 'Motion Detection Camera System',
      category: 'cctv',
      price: 45999,
      rating: 5,
      reviews: 37,
      features: ['AI Motion Detection', 'Cloud Storage', '4K Resolution', '2-Way Audio'],
      image: '/checksum-logo.png',
      description: 'AI-powered camera system with automatic alerts and full HD recording.',
      inStock: true
    }
  ];

  const categories = [
    { value: 'all', label: 'All Products' },
    { value: 'cctv', label: 'CCTV Systems' },
    { value: 'access-control', label: 'Access Control' },
    { value: 'alarms', label: 'Alarm Systems' }
  ];

  const formatPrice = (price) =>
    new Intl.NumberFormat('en-JM', { style: 'currency', currency: 'JMD' }).format(price / 100);

  const filteredProducts = products.filter(p => {
    const matchSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchCategory = selectedCategory === 'all' || p.category === selectedCategory;
    return matchSearch && matchCategory;
  });

  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      return existing
        ? prev.map(item => item.id === product.id ? { ...item, qty: item.qty + 1 } : item)
        : [...prev, { ...product, qty: 1 }];
    });
  };

  const updateQty = (id, change) => {
    setCart(prev => prev.map(item =>
      item.id === id ? { ...item, qty: Math.max(1, item.qty + change) } : item
    ));
  };

  const removeFromCart = (id) => setCart(prev => prev.filter(item => item.id !== id));
  const clearCart = () => setCart([]);
  const cartTotal = cart.reduce((sum, i) => sum + i.price * i.qty, 0);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-slate-900 to-slate-800 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Your Trusted <span className="text-teal-400">Security Store</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore our professional-grade security systems with installation, warranty, and expert support.
          </p>
          <div className="flex justify-center gap-8 mt-6 text-sm text-gray-300">
            <span className="flex items-center gap-2"><Shield className="w-4 h-4 text-teal-400" /> Certified Quality</span>
            <span className="flex items-center gap-2"><Truck className="w-4 h-4 text-teal-400" /> Free Installation</span>
            <span className="flex items-center gap-2"><CreditCard className="w-4 h-4 text-teal-400" /> Secure Checkout</span>
          </div>
        </section>

        {/* Search & Filter */}
        <section className="py-6 bg-card border-b border-border">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-4">
            <div className="relative flex-1 w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search for products..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-muted-foreground" />
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Filter category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map(c => (
                    <SelectItem key={c.value} value={c.value}>{c.label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Cart Sheet */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="cta" className="flex items-center gap-2">
                  <ShoppingCart className="h-4 w-4" />
                  Cart ({cart.reduce((a, i) => a + i.qty, 0)})
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-96 overflow-y-auto p-4">
                <SheetHeader>
                  <SheetTitle className="text-lg font-semibold">Your Cart</SheetTitle>
                </SheetHeader>
                <div className="mt-4 space-y-4">
                  {cart.length === 0 ? (
                    <p className="text-muted-foreground text-sm text-center py-8">Your cart is empty</p>
                  ) : cart.map(item => (
                    <div key={item.id} className="flex justify-between items-start border-b pb-3">
                      <div>
                        <p className="font-medium">{item.name}</p>
                        <p className="text-sm text-muted-foreground">{formatPrice(item.price)}</p>
                        <div className="flex items-center gap-2 mt-2">
                          <Button size="sm" variant="outline" onClick={() => updateQty(item.id, -1)}>-</Button>
                          <span>{item.qty}</span>
                          <Button size="sm" variant="outline" onClick={() => updateQty(item.id, 1)}>+</Button>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <span className="font-semibold">{formatPrice(item.price * item.qty)}</span>
                        <Button size="icon" variant="ghost" onClick={() => removeFromCart(item.id)}>
                          <Trash2 className="h-4 w-4 text-red-500" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
                {cart.length > 0 && (
                  <div className="mt-6 border-t pt-4 space-y-2">
                    <p className="flex justify-between text-sm">
                      <span>Subtotal</span>
                      <span className="font-semibold">{formatPrice(cartTotal)}</span>
                    </p>
                    <Button className="w-full" variant="cta">Checkout</Button>
                    <Button className="w-full" variant="outline" onClick={clearCart}>Clear Cart</Button>
                  </div>
                )}
              </SheetContent>
            </Sheet>
          </div>
        </section>

        {/* Product Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map(p => (
              <Card key={p.id} className="bg-gradient-to-b from-slate-900 to-slate-800 border border-slate-700 hover:shadow-teal-500/20 hover:shadow-lg transition-all">
                <div className="relative w-full h-56 overflow-hidden rounded-t-xl">
                  <Image
                    src={p.image || '/images/placeholder.jpg'}
                    alt={p.name}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardHeader className="space-y-2">
                  <CardTitle className="flex justify-between items-start text-stone-200">
                    {p.name}
                    {p.popular && <Badge className="bg-teal-500/20 text-teal-400">Best Seller</Badge>}
                  </CardTitle>
                  <div className="flex items-center gap-2 text-sm">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`h-4 w-4 ${i < p.rating ? 'text-yellow-400 fill-yellow-400' : 'text-slate-600'}`} />
                    ))}
                    <span className="text-muted-foreground">({p.reviews})</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2 text-lg font-semibold text-stone-200">
                    {formatPrice(p.price)}
                    {p.originalPrice && (
                      <span className="text-sm text-gray-500 line-through">{formatPrice(p.originalPrice)}</span>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <Button className="flex-1 text-white" variant="cta" onClick={() => addToCart(p)}>
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Add to Cart
                    </Button>
                    <Button variant="outline" onClick={() => setQuickViewItem(p)}>
                      <Eye className="h-4 w-4 mr-2" /> View
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center text-muted-foreground py-20">
              <Search className="mx-auto h-10 w-10 mb-3" />
              <p>No products found matching your search.</p>
            </div>
          )}
        </section>
      </main>

      {/* Quick View Dialog */}
      <Dialog open={!!quickViewItem} onOpenChange={() => setQuickViewItem(null)}>
        <DialogContent className="max-w-3xl">
          {quickViewItem && (
            <div className="grid md:grid-cols-2 gap-6">
              <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden">
                <Image
                  src={quickViewItem.image}
                  alt={quickViewItem.name}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div>
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold">{quickViewItem.name}</DialogTitle>
                  <DialogDescription className="text-gray-400 mt-2">{quickViewItem.description}</DialogDescription>
                </DialogHeader>
                <div className="mt-4 flex items-center gap-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`h-4 w-4 ${i < quickViewItem.rating ? 'text-yellow-400 fill-yellow-400' : 'text-slate-600'}`} />
                  ))}
                  <span className="text-muted-foreground text-sm">({quickViewItem.reviews} reviews)</span>
                </div>
                <p className="mt-4 text-xl font-semibold text-teal-400">{formatPrice(quickViewItem.price)}</p>
                <ul className="mt-3 text-sm text-gray-400 space-y-1">
                  {quickViewItem.features.map((f, i) => <li key={i}>• {f}</li>)}
                </ul>
                <div className="mt-6 flex gap-3">
                  <Button className="flex-1" variant="cta" onClick={() => addToCart(quickViewItem)}>
                    <ShoppingCart className="h-4 w-4 mr-2" /> Add to Cart
                  </Button>
                  <Button variant="outline" onClick={() => setQuickViewItem(null)}>Close</Button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </>
  );
};

export default ShopPage;
