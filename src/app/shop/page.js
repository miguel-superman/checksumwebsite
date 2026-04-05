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
import { addDoc , collection, db, serverTimestamp} from '@/lib/firebase';
import Header from '../components/header';
import Footer from '../components/footer';
import Image from 'next/image';

const ShopPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [cart, setCart] = useState([]);
  const [quickViewItem, setQuickViewItem] = useState(null);

  const [checkoutOpen, setCheckoutOpen] = useState(false);

  const [customerForm, setCustomerForm] = useState({
    name: '',
    phone: '',
    email: '',
    address: ''
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setCustomerForm(prev => ({ ...prev, [name]: value }));
  };



  useEffect(() => {
    const savedCart = localStorage.getItem("shop_cart");
    if (savedCart) setCart(JSON.parse(savedCart));
  }, []);

  useEffect(() => {
    localStorage.setItem("shop_cart", JSON.stringify(cart));
  }, [cart]);

  const [activeImage, setActiveImage] = useState(0);

  console.log('cart', cart);

  useEffect(() => {
    if (quickViewItem) setActiveImage(0);
  }, [quickViewItem]);



   // ✅ Upload form data to Firestore
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, 'ProductRequests'), {
        ...cart,
        // createdAt: serverTimestamp(),
      });
      clearCart();
      alert('Your order has been submitted successfully!');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Something went wrong. Please try again.');
    } 

    alert('');
  };


  const PARISH_TRAVEL_FEES = {
    "St. Catherine": 0,
    "Kingston": 3000,
    "St. Andrew": 3000,
    "Portmore": 1500,
    "Clarendon": 5000,
    "St. Thomas": 6000,
    "Manchester": 7000,
    "St. Ann": 8000,
    "St. James": 9000,
    "Westmoreland": 9500,
    "Hanover": 9500,
    "Trelawny": 8500,
    "St. Elizabeth": 9000,
  };

  const [selectedParish, setSelectedParish] = useState("St. Catherine");

  const travellingFee = PARISH_TRAVEL_FEES[selectedParish];



  const products = [
    {
      id: 1,
      name: 'AzDome M17 Pro Dashcam',
      category: 'dashcams',
      price: 1300000,
      originalPrice: 1651842,
      installationPrice: 300000,
      rating: 5,
      reviews: 24,
      features: ['4x 4K Cameras', '1TB DVR', 'Mobile App', 'Night Vision'],
      images: [
      '/M17/1.jpg',
      '/M17/2.jpg',
      '/M17/3.jpg',
      '/M17/4.jpg',
      '/M17/5.jpg',
      '/M17/6.jpg',
      '/M17/7.jpg',
    ],
      description: 'A complete professional-grade CCTV system with remote access, easy setup, and lifetime support.',
      popular: true,
      inStock: true,
      includeInstallation: false
    },
    {
      id: 2,
      name: 'AzDome M550 Pro Dashcam',
      category: 'dashcams',
      price: 1300000,
      installationPrice: 400000,
      rating: 5,
      reviews: 18,
      features: ['Mobile Control', 'Audit Logs'],
      images: [
      '/M550/1.jpg',
      '/M550/2.jpg',
      '/M550/3.jpg',
      '/M550/4.jpg',
      '/M550/5.jpg',
      '/M550/6.jpg',
      '/M550/7.jpg',
      '/M550/8.jpg'
    ],
      description: 'Secure access control kit for offices, schools, or homes. Biometric and RFID card support.',
      inStock: true,
      includeInstallation: false
    },
    {
      id: 3,
      name: 'AzDome V600',
      category: 'dashcams',
      price: 1185000,
      installationPrice: 300000,
      rating: 4,
      reviews: 31,
      features: ['Motion Sensors', 'Smart Hub', 'Mobile Alerts'],
      images: [
      '/V6/1.jpg',
      '/V6/2.jpg',
      '/V6/3.jpg',
      '/V6/4.jpg',
      '/V6/5.jpg',
      '/V6/6.jpg',
    ],
      description: 'Stay alert with our smart alarm sensors. Compatible with Alexa and Google Home.',
      inStock: true ,
      includeInstallation: false
    },
    {
      id: 4,
      name: '4G Solcar CCTV Camera (Outdoor)',
      category: 'cctv',
      price: 2400000,
      installationPrice: 800000,
      rating: 4,
      reviews: 42,
      features: ['1080p HD', 'Weatherproof', 'Night Vision', 'WiFi Enabled'],
      images: [
      '/CCTV-4G/1.jpg',
      '/CCTV-4G/2.jpg',
      '/CCTV-4G/3.jpg',
      '/CCTV-4G/4.jpg',
      '/CCTV-4G/5.jpg',
      '/CCTV-4G/6.jpg',
      '/CCTV-4G/7.jpg',
      '/CCTV-4G/8.jpg'
    ],
      description: 'Outdoor IP camera built for reliability, clarity, and remote monitoring.',
      inStock: true ,
      includeInstallation: false
    },
    // {
    //   id: 5,
    //   name: 'Fingerprint Door Lock',
    //   category: 'access-control',
    //   price: 32999,
    //   rating: 5,
    //   reviews: 55,
    //   features: ['Biometric Access', 'App Unlock', 'Auto-Lock Timer', 'Low Power Mode'],
    //   image: '/checksum-logo.png',
    //   description: 'Smart fingerprint lock for modern homes and offices. High security and easy installation.',
    //   inStock: true
    // },
    // {
    //   id: 6,
    //   name: 'Motion Detection Camera System',
    //   category: 'cctv',
    //   price: 45999,
    //   rating: 5,
    //   reviews: 37,
    //   features: ['AI Motion Detection', 'Cloud Storage', '4K Resolution', '2-Way Audio'],
    //   image: '/checksum-logo.png',
    //   description: 'AI-powered camera system with automatic alerts and full HD recording.',
    //   inStock: true
    // }
  ];

  const handleAddToCart = (product, withInstallation = false) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);

      if (existing) {
        return prev.map(item =>
          item.id === product.id
            ? {
                ...item,
                price: item.price + (product.installationPrice * item.qty ),
                includeInstallation: item.includeInstallation || withInstallation
              }
            : item
        );
      }

      return [
        ...prev,
        {
          ...product,
          includeInstallation: withInstallation,
          price: withInstallation ? product.price + product.installationPrice : product.price
        }
      ];
    });
  };


  const categories = [
    { value: 'all', label: 'All Products' },
    { value: 'cctv', label: 'CCTV Systems' },
    { value: 'dashcams', label: 'Dashcams' },
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

  // const ProductImageGallery = ({ images, height = "h-56" }) => {
  //   const [active, setActive] = useState(0);

  //   if (!images || images.length === 0) return null;

  //   return (
  //     <div className="space-y-2">
  //       {/* Main Image */}
  //       <div className={`relative w-full ${height} overflow-hidden rounded-xl`}>
  //         <Image
  //           src={images[active]}
  //           alt="Product image"
  //           fill
  //           style={{ objectFit: "cover" }}
  //           className="transition-all duration-300"
  //         />
  //       </div>

  //       {/* Thumbnails */}
  //       <div className="flex gap-2 overflow-x-auto">
  //         {images.map((img, idx) => (
  //           <button
  //             key={idx}
  //             onClick={() => setActive(idx)}
  //             className={`relative h-14 w-14 flex-shrink-0 rounded-md overflow-hidden border
  //               ${active === idx ? "border-cyan-400" : "border-slate-700"}`}
  //           >
  //             <Image src={img} alt="" fill style={{ objectFit: "cover" }} />
  //           </button>
  //         ))}
  //       </div>
  //     </div>
  //   );
  // };

  const ProductImageGallery = ({ images, height = "h-56" }) => {
    const [active, setActive] = useState(0);

    if (!images || images.length === 0) return null;

    return (
      <div className="space-y-2 max-w-full overflow-hidden">
        {/* Main Image */}
        <div className={`relative w-76 md:w-full ${height} overflow-hidden rounded-xl`}>
          <Image
            src={images[active]}
            alt="Product image"
            fill
            className="object-cover transition-all duration-300"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>

        {/* Thumbnails */}
        <div
          className="flex gap-2 overflow-x-auto md:overflow-x-auto max-w-76 md:max-w-full overscroll-x-contain"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setActive(idx)}
              className={`relative h-14 w-14 flex-shrink-0 rounded-md overflow-hidden border max-w-full
                ${active === idx ? "border-cyan-400" : "border-slate-700"}`}
            >
              <Image
                src={img}
                alt=""
                fill
                className=" md:object-cover"
                sizes="56px"
              />
            </button>
          ))}
        </div>
      </div>
    );
  };

  
  const handleSubmitOrder = async () => {
    if (!customerForm.name || !customerForm.phone) {
      alert('Name and phone number are required');
      return;
    }

    const orderPayload = {
      customer: customerForm,
      cartItems: cart.map(item => ({
        id: item.id,
        name: item.name,
        qty: item.qty,
        price: item.price,
        installationPrice: item.includeInstallation
          ? item.installationPrice
          : 0,
        includeInstallation: item.includeInstallation
      })),
      totals: {
        subtotal: cartTotal,
        currency: 'JMD'
      },
      status: 'pending',
      createdAt: serverTimestamp()
    };

    try {
      await addDoc(collection(db, 'ProductRequests'), orderPayload);

      // Success cleanup
      setCart([]);
      setCustomerForm({
        name: '',
        phone: '',
        email: '',
        address: ''
      });
      setCheckoutOpen(false);

      alert('Request submitted successfully!');
    } catch (error) {
      console.error(error);
      alert('Failed to submit request. Please try again.');
    }
  };

  const getItemTotal = (item) => {
    const basePrice = item.price || 0;
    const installationPrice =
      item.includeInstallation ? item.installationPrice || 0 : 0;

    return (basePrice + installationPrice) * (item.qty || 1);
  };


  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-cyan-500 to-zinc-800">
        
        {/* Hero Section */}
        <section className="h-screen py-16 bg-gradient-to-b from-cyan-500 to-zinc-800 text-center py-48 md:py-96">
          <img
          src="/ssss.png"
          alt="Hero Background"
          className="absolute z-0 inset-0 w-screen h-full object-none"

        />
          {/* <h1 className="text-6xl md:text-6xl font-bold text-zinc-500 mb-4 z-10 relative">
             <span className="text-cyan-400"></span>
          </h1>
          <p className="text-white max-w-2xl mx-auto z-10 relative">
            
          </p> */}
          {/* <div className="flex justify-center gap-8 mt-6 text-sm text-zinc-300 z-10 relative">
            <span className="flex items-center gap-2"><Shield className="w-4 h-4 text-cyan-400" /> </span>
            <span className="flex items-center gap-2"><Truck className="w-4 h-4 text-cyan-400" /> </span>
            <span className="flex items-center gap-2"><CreditCard className="w-4 h-4 text-cyan-400" /> Secure Checkout</span> 
          </div> */}
        </section>

        {/* Search & Filter */}


        {/* Product Grid */}
        <section className="py-12 md:py-36">
                  {/* Toolbar */}
          <div
            className="
              sticky top-0 z-40
              mx-auto
              flex max-w-6xl
              flex-col gap-3
              px-4 py-3
              bg-slate-900/95 backdrop-blur
              md:static md:bg-transparent
              md:flex-row md:items-center md:justify-between
            "
          >

            {/* Search */}
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white" />
              <Input
                placeholder="Search for products..."
                className="pl-10 text-white bg-slate-800 border border-slate-700"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3">
              {/* Category Filter */}
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-white" />
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-48 bg-slate-800 border border-slate-700 text-stone-200">
                    <SelectValue placeholder="Filter category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((c) => (
                      <SelectItem key={c.value} value={c.value}>
                        {c.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Cart */}
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="cta" className="flex items-center gap-2 text-white border-1 border-cyan-300 rounded-full hover:bg-cyan-500 bg-cyan-400">
                    <ShoppingCart className="h-4 w-4 text-white " />
                    Cart ({cart.reduce((a, i) => a + i.qty, 0)})
                  </Button>
                </SheetTrigger>

                <SheetContent
                  side="right"
                  className="
                  bg-zinc-200
                    w-full
                    md:w-96
                    h-[100dvh]
                    flex flex-col
                    p-0
                  "
                >
                  {/* HEADER (fixed) */}
                  <div className="shrink-0 border-b p-3 md:p-4 bg-zinc-100">
                    <SheetHeader>
                      <div className="flex items-center gap-3 ">
                        <Image
                          src="/checksum-logo.png"
                          alt="checksum logo"
                          width={48}
                          height={48}
                        />
                        <SheetTitle className="text-lg font-semibold">
                          Your Cart
                        </SheetTitle>
                      </div>
                    </SheetHeader>
                  </div>

                  {/* SCROLLABLE CART ITEMS */}
                  <div className="flex-1 overflow-y-auto px-3 md:px-4 py-4 space-y-4">
                    <hr className="border-1 w-full border-white" />
                    {cart.length === 0 ? (
                      <p className="text-muted-foreground text-sm text-center py-8">
                        Your cart is empty
                      </p>
                    ) : (
                      cart.map((item) => (
                        <div
                          key={item.id}
                          className="flex justify-between items-start border-b pb-3"
                        >
                          <div>
                            <p className="font-medium">{item.name}</p>
                            <p className="text-sm text-muted-foreground">
                              {formatPrice(item.price)}
                            </p>

                            {item.includeInstallation === false ? (
                              <Button
                                size="sm"
                                variant="outline"
                                className="mt-2 bg-lime-500 hover:bg-lime-600 text-white"
                                onClick={() => handleAddToCart(item, true)}
                              >
                                Add Installation Cost
                              </Button>
                            ) : (
                              <Button
                                size="sm"
                                variant="outline"
                                className="mt-2"
                                disabled
                              >
                                Installation Cost Included
                              </Button>
                            )}

                            <div className="flex items-center gap-2 mt-2">
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => updateQty(item.id, -1)}
                              >
                                -
                              </Button>
                              <span>{item.qty}</span>
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => updateQty(item.id, 1)}
                              >
                                +
                              </Button>
                            </div>
                          </div>

                          <div className="flex flex-col items-end gap-2">
                            <span className="font-semibold">
                              {formatPrice(getItemTotal(item))}
                            </span>
                            <Button
                              size="icon"
                              variant="ghost"
                              onClick={() => removeFromCart(item.id)}
                            >
                              <Trash2 className="h-4 w-4 text-red-500" />
                            </Button>
                          
                          </div>
                        </div>
                      ))
                    )}
                    <hr className="border-1 w-full border-white" />
                    <label className="block text-sm font-medium mb-1">
                      Prices does not include travelling fees and varies based on parish - for installation services.
                    </label>

                   
                    
                  </div>

                  {/* FOOTER (sticky on mobile) */}
                  {cart.length > 0 && (
                    <div className="shrink-0 border-t p-3 md:p-4 bg-zinc-100 sticky bottom-0">
                      <p className="flex justify-between text-sm mb-3">
                        <span>Subtotal</span>
                        <span className="font-semibold">
                          {formatPrice(cartTotal)}
                        </span>
                      </p>

                      <Button
                        className="w-full bg-cyan-400 mb-2"
                        onClick={() => setCheckoutOpen(true)}
                      >
                        Request Installation / Quote
                      </Button>

                      <Button
                        className="w-full"
                        variant="outline"
                        onClick={clearCart}
                      >
                        Clear Cart
                      </Button>
                    </div>
                  )}
                </SheetContent>

              </Sheet>
            </div>
          </div>

            
          <div className="container  px-4 pt-6 grid gap-6 sm:grid-cols-1 lg:grid-cols-3">
            {filteredProducts.map(p => (
              <Card key={p.id} className="p-4 bg-gradient-to-b from-slate-900 to-slate-800 border border-slate-700 hover:shadow-cyan-500/20 hover:shadow-lg transition-all">
               <ProductImageGallery images={p.images} />
                <CardHeader className="space-y-2">
                  <CardTitle className="flex justify-between items-start text-stone-200">
                    {p.name}
                    {p.popular && <Badge className="bg-cyan-500/20 text-cyan-400">Best Seller</Badge>}
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
                      <span className="text-sm text-zinc-500 line-through">{formatPrice(p.originalPrice)}</span>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <Button className="flex-1 text-white rounded-full border-1 hover:bg-cyan-500" variant="cta" onClick={() => addToCart(p)}>
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
                  src={quickViewItem.images?.[0] || '/images/placeholder.jpg'}
                  alt={quickViewItem.name}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div>
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold">{quickViewItem.name}</DialogTitle>
                  <DialogDescription className="text-zinc-400 mt-2">{quickViewItem.description}</DialogDescription>
                </DialogHeader>
                <div className="mt-4 flex items-center gap-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`h-4 w-4 ${i < quickViewItem.rating ? 'text-yellow-400 fill-yellow-400' : 'text-slate-600'}`} />
                  ))}
                  <span className="text-muted-foreground text-sm">({quickViewItem.reviews} reviews)</span>
                </div>
                <label className="text-sm text-zinc-400">Device cost :</label>
                <p className="mt-4 text-xl font-semibold text-cyan-400 mb-4">{formatPrice(quickViewItem.price)}</p>
                {/* <p>Installation Cost: </p> */}
                <label className="text-sm text-zinc-400">Installation cost :</label>
                <p className="mt-4 text-xl font-semibold text-cyan-400">{formatPrice(quickViewItem.installationPrice)}</p>
                
                <ul className="mt-3 text-sm text-zinc-400 space-y-1">
                  {quickViewItem.features.map((f, i) => <li key={i}>• {f}</li>)}
                </ul>
                <div className="mt-6 flex gap-3">
                  <Button className="flex-1 border-1 rounded-full hover:bg-cyan-500" variant="cta" onClick={() => addToCart(quickViewItem)}>
                    <ShoppingCart className="h-4 w-4 mr-2" /> Add to Cart
                  </Button>
                  <Button variant="outline" onClick={() => setQuickViewItem(null)}>Close</Button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
      <Dialog open={checkoutOpen} onOpenChange={setCheckoutOpen}>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle>Customer Contact Details</DialogTitle>
          <DialogDescription>
            Please enter your details so we can arrange installation and pricing.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <Input
            name="name"
            required
            placeholder="* Full Name"
            value={customerForm.name}
            onChange={(e) => handleFormChange(e)}
          />

          <Input
            name="phone"
            required
            placeholder="* Phone Number"
            value={customerForm.phone}
            onChange={(e) => handleFormChange(e)}
          />

          <Input
            name="email"
            placeholder="Email Address"
            value={customerForm.email}
            onChange={(e) => handleFormChange(e)}
          />

          <Input
            name="address"
            placeholder="Installation Address"
            value={customerForm.address}
            onChange={(e) => handleFormChange(e)}
          />
        </div>

        <div className="border rounded-md p-3 text-sm space-y-1">
        {cart.map(item => (
          <div key={item.id} className="flex justify-between">
            <span>
              {item.name} × {item.qty}
              {item.includeInstallation && ' (Install)'}
            </span>
            <span>{formatPrice(getItemTotal(item))}</span>
          </div>
        ))}
      </div>


        <div className="mt-6 flex gap-3">
          <Button
            className="flex-1 border-1 rounded-full hover:bg-cyan-500 bg-cyan-400"
            variant="cta"
            onClick={() => handleSubmitOrder()}
          >
            Submit Request
          </Button>

          <Button
            variant="outline"
            onClick={() => setCheckoutOpen(false)}
          >
            Cancel
          </Button>
        </div>
      </DialogContent>
    </Dialog>


      <Footer />
    </>
  );
};

export default ShopPage;
