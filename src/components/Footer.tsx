import { GraduationCap, Twitter, Youtube, Github } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <GraduationCap className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                eeduhub
              </span>
            </Link>
            <p className="text-sm text-muted-foreground mb-4 max-w-md">
           We make Bitcoin and crypto easy to understand. With step-by-step lessons, lifetime access, and beginner-friendly guidance, you’ll learn at your own pace and gain the confidence to start your crypto journey.
            </p>

          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/sample-class" className="text-muted-foreground hover:text-primary transition-colors">
                  Sample Class
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

     <div className="border-t border-border pt-8 mt-8">
  <div className="flex flex-col md:flex-row justify-between items-center">
    <p className="text-muted-foreground text-sm">
      © 2025 eeduhub. All rights reserved.
    </p>
    <p className="text-muted-foreground text-sm mt-2 md:mt-0">
      Website designed by <a href="https://www.aionespark.com/" className="no-underline">Aione Spark TechHive LLP</a>.
      Business operations are solely managed by eeduhub.
    </p>
  </div>
</div>

      </div>
    </footer>
  );
};