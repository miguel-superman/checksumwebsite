'use client'

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Phone, Mail, MapPin, MessageCircle, Clock, Send } from 'lucide-react';
import { addDoc , collection, db, serverTimestamp} from '@/lib/firebase';
import Footer from '../components/footer';
import Header from '../components/header';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    service: '',
    propertyType: '',
    message: ''
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

   const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);


    // ✅ Upload form data to Firestore
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitSuccess(false);

    try {
      await addDoc(collection(db, 'CustomerMessages'), {
        ...formData,
        createdAt: serverTimestamp(),
      });
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        propertyType: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-sky-500  to-gray-800">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-hero">
        <div className="container-section p-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-hero text-7xl text-foreground">
              Contact Our Security 
              <span className="text-accent"> Experts</span>
            </h1>
            <p className="text-body-large text-gray-900 text-lg max-w-2xl mx-auto">
              Ready to secure your property? Get in touch with our team for a free consultation 
              and custom security solution designed for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="cta" size="xl" asChild>
                <a href="https://wa.me/18768592783" className="flex items-center gap-2">
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp Now
                </a>
              </Button>
              <Button variant="minimal" size="xl" asChild>
                <a href="tel:+1876-859-2783" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Call (876) 859-2783
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding">
        <div className="container-section">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 p-4">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="card-gradient">
                <CardHeader>
                  <CardTitle className="text-2xl">Get Your Security Quote</CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and our security experts will contact you within 24 hours 
                    to schedule your free on-site assessment.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          placeholder="Your full name"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your@email.com"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+1 (876) 859-2783"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="address">Site Survey Address</Label>
                        <Input
                          id="address"
                          type="text"
                          placeholder="Your Site Address"
                          value={formData.address}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          required
                        />
                      </div>

                      

                      
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2 w-full">
                        <Label htmlFor="service">Service Interested In</Label>
                        <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="cctv">CCTV Systems</SelectItem>
                            <SelectItem value="access-control">Access Control</SelectItem>
                            <SelectItem value="alarm-monitoring">Alarm Monitoring</SelectItem>
                            <SelectItem value="networking">Network Solutions</SelectItem>
                            <SelectItem value="complete-package">Complete Security Package</SelectItem>
                            <SelectItem value="account-deletion">Account deletion</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2 w-full">
                      <Label htmlFor="propertyType">Property Type</Label>
                      <Select value={formData.propertyType} onValueChange={(value) => handleInputChange('propertyType', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select property type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="residential">Residential Home</SelectItem>
                          <SelectItem value="apartment">Apartment/Condo</SelectItem>
                          <SelectItem value="office">Office Building</SelectItem>
                          <SelectItem value="retail">Retail Store</SelectItem>
                          <SelectItem value="warehouse">Warehouse/Industrial</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                        
                      </div>

                    

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your security needs, property size, current concerns, or any specific requirements..."
                        rows={4}
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                      />
                    </div>

                    {/* <Button type="submit" variant="hero" size="lg" className="w-full">
                      <Send className="h-5 w-5 mr-2" />
                      Send Message & Schedule Assessment
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      By submitting this form, you agree to our privacy policy and consent to being contacted 
                      by our team regarding your security needs.
                    </p> */}

                     <Button type="submit" variant="hero" size="lg" className="w-full border hover:border-teal-500" disabled={isSubmitting}>
                        <Send className="h-5 w-5 mr-2" />
                        {isSubmitting ? 'Sending...' : 'Send Message & Schedule Assessment'}
                      </Button>

                      {submitSuccess && (
                        <p className="text-sm text-green-500 text-center mt-2">
                          ✅ Message sent successfully! We&apos;ll reach out soon.
                        </p>
                      )}
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              {/* Contact Details */}
              <Card className="card-gradient">
                <CardHeader>
                  <CardTitle>Get in Touch</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                      <Phone className="h-5 w-5 text-teal-500" />
                    </div>
                    <div>
                      <p className="font-medium">Call Us</p>
                      <a href="tel:+1876-859-2783" className="text-sm text-muted-foreground hover:text-gray-400">
                        +1 (876) 859-2783
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                      <Mail className="h-5 w-5 text-teal-500" />
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <a href="mailto:sales@cs3.ltd" className="text-sm text-muted-foreground hover:text-accent">
                        sales@cs3.ltd
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-teal-500" />
                    </div>
                    <div>
                      <p className="font-medium">Office</p>
                      <p className="text-sm text-muted-foreground">
                        {/* 9 <br /> */}
                        Portmore, Jamaica
                      </p>
                    </div>
                  </div>

                  <Button variant="cta" className="w-full" asChild>
                    <a href="https://wa.me/18768592783" className="flex items-center gap-2 justify-center">
                      <MessageCircle className="h-4 w-4" />
                      WhatsApp Us Now
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* Business Hours */}
              <Card className="card-gradient">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-teal-500" />
                    Business Hours
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Monday - Friday</span>
                    <span className="text-sm font-medium">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Saturday</span>
                    <span className="text-sm font-medium">9:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Sunday</span>
                    <span className="text-sm font-medium">Emergency Only</span>
                  </div>
                  <div className="border-t border-border pt-3 mt-3">
                    <div className="flex justify-between items-center">
                      {/* <span className="text-sm font-medium text-white">Emergency Support</span> */}
                      {/* <span className="text-sm font-medium text-white">24/7 Available</span> */}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Service Areas */}
              <Card className="card-gradient">
                <CardHeader>
                  <CardTitle>Service Areas</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>• Kingston & St. Andrew</p>
                    <p>• Spanish Town</p>
                    <p>• Portmore</p>
                    <p>• Mandeville</p>
                    <p>• Montego Bay</p>
                    <p>• And surrounding areas</p>
                  </div>
                  <p className="text-xs text-muted-foreground mt-4">
                    Don&apos;t see your area? Contact us - we may still be able to serve you.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      {/* <section className="py-8">
        <div className="container-section">
          <Card className="overflow-hidden">
            <div className="h-96 bg-muted flex items-center justify-center">
              <div className="text-center space-y-2">
                <MapPin className="h-12 w-12 text-accent mx-auto" />

              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d970743.4484940184!2d-77.2761154!3d18.11933375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xcc245fc420e4fdf%3A0x8ceb704a424bf841!2sChecksum%20Smart%20Security%20Solutions%20Ltd!5e0!3m2!1sen!2sjm!4v1759969922121!5m2!1sen!2sjm" 

                className="w-full h-[400px] rounded-md border-0 shadow-md"
                allowFullScreen=""
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">

                </iframe>
              </div>
            </div>
          </Card>
        </div>
      </section> */}

      <section className='py-8'>
        
      </section>
    </main>
    <Footer />
    </>
    
  );
};

export default ContactPage;
