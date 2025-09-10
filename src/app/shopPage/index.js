import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ShoppingCart, Search, Filter, Star, Shield, Truck, CreditCard } from 'lucide-react';

const ShopPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [cart, setCart] = useState([]);

  const products = [
    {
      id: 1,
      name: 'Complete CCTV Starter Kit',
      category: 'cctv',
      price: 89999,
      originalPrice: 99999,
      image: '/placeholder-cctv-kit.jpg',
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
      image: '/placeholder-access-kit.jpg',
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
      image: '/placeholder-alarm-kit.jpg',
      rating: 4,
      reviews: 31,
      features: ['Motion Sensors', 'Door/Window Sensors', 'Smart Hub', 'Mobile Alerts'],
      inStock: true
    },
    {
      id: 4,
      name: 'Wireless Security Camera',
      category: 'cctv',
      price: 15999,
      image: '/placeholder-camera.jpg',
      rating: 5,
      reviews: 45,
      features: ['4K Resolution', 'Two-Way Audio', 'Cloud Storage', 'Weather Resistant'],
      inStock: false
    },
    {
      id: 5,
      name: 'Smart Door Lock Pro',
      category: 'access-control',
      price: 29999,
      image: '/placeholder-door-lock.jpg',
      rating: 4,
      reviews: 22,
      features: ['Fingerprint + PIN', 'Mobile App', 'Emergency Keys', 'Auto-Lock'],
      inStock: true
    },
    {
      id: 6,
      name: 'Network Security Router',
      category: 'networking',
      price: 19999,
      image: '/placeholder-router.jpg',
      rating: 4,
      reviews: 12,
      features: ['Enterprise Grade', 'VPN Support', 'Firewall', '24/7 Monitoring'],
      inStock: true
    }
  ];

  const categories = [
    { value: 'all', label: 'All Products' },
    { value: 'cctv', label: 'CCTV Systems' },
    { value: 'access-control', label: 'Access Control' },
    { value: 'alarms', label: 'Alarm Systems' },
    { value: 'networking', label: 'Network Equipment' }
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
    setCart(prev => [...prev, product]);
    // In a real app, this would integrate with a proper cart system
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-hero">
        <div className="container-section">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-hero text-foreground">
              Security Equipment 
              <span className="text-accent"> Store</span>
            </h1>
            <p className="text-body-large text-muted-foreground max-w-2xl mx-auto">
              Professional-grade security equipment and complete security kits. 
              All products come with professional installation and warranty support.
            </p>
            <div className="flex items-center justify-center gap-8 pt-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Shield className="h-5 w-5 text-success" />
                Professional Grade
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Truck className="h-5 w-5 text-success" />
                Free Installation
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CreditCard className="h-5 w-5 text-success" />
                Secure Checkout
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-card border-b border-border">
        <div className="container-section">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search security products..."
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
                  {categories.map(category => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            {cart.length > 0 && (
              <Button variant="cta" size="sm" className="flex items-center gap-2">
                <ShoppingCart className="h-4 w-4" />
                Cart ({cart.length})
              </Button>
            )}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding">
        <div className="container-section">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="card-gradient hover:shadow-glow transition-all duration-300 relative">
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
                      className="flex-1"
                      disabled={!product.inStock}
                      onClick={() => product.inStock && addToCart(product)}
                    >
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                    </Button>
                    <Button variant="cta">
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

      {/* Features Section */}
      <section className="section-padding bg-card">
        <div className="container-section">
          <div className="text-center mb-12">
            <h2 className="text-heading mb-4">Why Shop With Checksum?</h2>
            <p className="text-body-large text-muted-foreground max-w-2xl mx-auto">
              More than just equipment - we provide complete security solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="card-gradient text-center">
              <CardContent className="p-6">
                <Shield className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Professional Installation</h3>
                <p className="text-sm text-muted-foreground">
                  Every purchase includes professional installation by our certified technicians
                </p>
              </CardContent>
            </Card>

            <Card className="card-gradient text-center">
              <CardContent className="p-6">
                <CreditCard className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Secure Payment</h3>
                <p className="text-sm text-muted-foreground">
                  Multiple payment options with secure checkout and financing available
                </p>
              </CardContent>
            </Card>

            <Card className="card-gradient text-center">
              <CardContent className="p-6">
                <Truck className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Warranty & Support</h3>
                <p className="text-sm text-muted-foreground">
                  2-year warranty on all products plus ongoing technical support
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-hero">
        <div className="container-section text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-heading text-foreground">Need Help Choosing?</h2>
            <p className="text-body-large text-muted-foreground">
              Our security experts can recommend the perfect equipment for your specific needs and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="hero" size="xl">
                Free Consultation
              </Button>
              <Button variant="cta" size="xl">
                Call (876) 555-0123
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ShopPage;
