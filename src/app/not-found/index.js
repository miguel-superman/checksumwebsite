'use client'

import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Shield, Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-subtle">
      <div className="container-section">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            {/* <Shield className="h-24 w-24 text-accent mx-auto" /> */}
            <Image src='checksum-logo.png' alt='checksum logo' className='h-20 w-20' />
            <h1 className="text-6xl font-black text-foreground">404</h1>
            <h2 className="text-2xl font-semibold text-foreground">Page Not Found</h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              The page you're looking for doesn't exist or has been moved. 
              Let's get you back to safety.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/" className="flex items-center gap-2">
                <Home className="h-5 w-5" />
                Back to Home
              </Link>
            </Button>
            <Button variant="minimal" size="lg" asChild>
              <Link to="/contact" className="flex items-center gap-2">
                <ArrowLeft className="h-5 w-5" />
                Contact Support
              </Link>
            </Button>
          </div>

          <div className="pt-8 text-sm text-muted-foreground">
            <p>
              Need help? Call us at{" "}
              <a href="tel:+1876-859-2783" className="text-accent hover:underline">
                +1 (876) 859-2783
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
