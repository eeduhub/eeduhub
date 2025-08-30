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
                CryptoCampus
              </span>
            </Link>
            <p className="text-muted-foreground mb-4 max-w-md">
              Learn digital currency and blockchain technology through expert-led courses 
              and hands-on projects. Start your crypto education journey today.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center hover:bg-primary cursor-pointer transition-colors">
                <Twitter className="h-4 w-4" />
              </div>
              <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center hover:bg-primary cursor-pointer transition-colors">
                <Youtube className="h-4 w-4" />
              </div>
              <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center hover:bg-primary cursor-pointer transition-colors">
                <Github className="h-4 w-4" />
              </div>
            </div>
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
              © 2024 CryptoCampus. All rights reserved.
            </p>
            <p className="text-muted-foreground text-sm mt-2 md:mt-0">
              Built with 💜 for crypto education
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};