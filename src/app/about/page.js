'use client'

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Shield, Target, Star, Award, Briefcase } from 'lucide-react';
import Footer from '../components/footer';
import Header from '../components/header';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const AboutPage = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-teal-300 via-black to-white">
        
        {/* Hero Section */}
        <section className="section-padding bg-gradient-hero ">
          <div className="container-section p-6 text-center space-y-6">
            <h1 className="text-hero text-6xl md:text-7xl font-bold">
              About <span className="text-accent">Checksum Security</span>
            </h1>
            <p className="text-gray-700 max-w-2xl mx-auto text-lg">
              Trusted by businesses and homeowners across Jamaica, we deliver cutting-edge
              security solutions tailored to your needs. 
            </p>
          </div>
        </section>

        {/* Mission / Vision / Values */}
        <section className="section-padding ">
          <div className="container-section grid grid-cols-1 md:grid-cols-3 gap-8 p-6">
            <Card className="card-gradient text-center">
              <CardHeader>
                <Shield className="w-10 h-10 text-teal-500 mx-auto" />
                <CardTitle className={"text-2xl"}>Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Empowering customers’ digital transformation through technological solutions and innovation. 
                </p>
              </CardContent>
            </Card>

            <Card className="card-gradient text-center">
              <CardHeader>
                <Target className="w-10 h-10 text-teal-500 mx-auto" />
                <CardTitle className={"text-2xl"}>Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To become a global solution for the technologically challenged.
                </p>
              </CardContent>
            </Card>

            <Card className="card-gradient text-center">
              <CardHeader>
                <Star className="w-10 h-10 text-teal-500 mx-auto" />
                <CardTitle className={"text-2xl"}>Our Values</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• Integrity & Transparency</li>
                  <li>• Customer First Approach</li>
                  <li>• Innovation in Security</li>
                  <li>• Commitment to Excellence</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Timeline / Experience */}
        <section className="section-padding ">
          <div className="container-section p-6">
            <Card className="card-gradient">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="h-6 w-6 text-teal-500" />
                  Our Journey
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <p className="font-medium">2021 – Founded</p>
                  <p className="text-sm text-muted-foreground">
                    Started with a vision to provide reliable CCTV installations for small businesses.
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="font-medium">2018 – Expansion</p>
                  <p className="text-sm text-muted-foreground">
                    Added access control, alarm monitoring, and network solutions.
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="font-medium">2022 – Industry Recognition</p>
                  <p className="text-sm text-muted-foreground">
                    Awarded “Top Security Solutions Provider” for innovation and service excellence.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Team Section */}
        <section className="section-padding">
          <div className="container-section text-center space-y-6 p-4">
            {/* <h2 className="text-4xl font-bold">Meet Our Team</h2> */}
            {/* <p className="text-muted-foreground max-w-2xl mx-auto">
              Our experts bring years of experience in technology, security, and customer support. 
              Together, we work to deliver the highest standard of safety and reliability.
            </p> */}

            <div className='justify-between grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8 mt-8'>
              <div>

                <h1 className="text-teal-200 text-6xl md:text-7xl font-bold mb-7 md:mb-32">
                  Who <span className="text-accent">We Are</span>
                </h1>

                <p className="text-white font-bold text-lg md:text-xl max-w-2xl mx-auto">
                    Established in 2021, Checksum Smart Security Solutions Limited (CS³) was founded by a group of Information Technology (IT) specialists, unified by a vision, mutual desires and abilities, to address growing technological needs for IT products and services in the Caribbean and, by extension, the world. 

                    Checksum’s initial focus mainly consisted of Closed-circuit Television (CCTV) surveillance and motor vehicle camera system products and services. As Checksum continues to develop, its focus has expanded to include Information Communication and Technology (ICT) infrastructure consultation, installation and support, cloud infrastructure implementation and support, as well as IT training and smart technological solutions.

                    With the qualifications, skills and principles possessed by the members of the Checksum team, Checksum is equipped and aims to provide the greatest degree of credibility and quality within the ICT space.
                </p>
                
              </div>
              <div>
                {/* <Image src={"/checksum-logo.png"}
                width={1040}
                height={1050}
                  alt="checksum logo"
                /> */}
                <img src='/checksum-logo.png'  alt='checksum logo' className="w-120 h-140" 
                
                />
              </div>

              
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
              {[ 
                { name: 'John Smith', role: 'CEO & Founder' },
                { name: 'Sarah Johnson', role: 'Operations Manager' },
                { name: 'Michael Brown', role: 'Lead Technician' },
              ].map((member, i) => (
                <Card key={i} className="card-gradient text-center">
                  <CardContent className="pt-6 space-y-3">
                    <div className="w-24 h-24 rounded-full bg-accent/10 mx-auto flex items-center justify-center">
                      <Users className="w-10 h-10 text-accent" />
                    </div>
                    <p className="font-medium">{member.name}</p>
                    <p className="text-sm text-muted-foreground">{member.role}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="section-padding ">
          <div className="container-section text-center space-y-6 text-gray-600 p-6">
            <h2 className="text-3xl font-bold">Ready to Secure Your Future?</h2>
            <p className="max-w-xl mx-auto text-lg">
              Contact our experts today for a free consultation and discover how we can safeguard
              your property with the latest in security technology.
            </p>
            <Button variant="cta" size="xl" asChild>
              <a href="/contact">Get Started</a>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default AboutPage;
