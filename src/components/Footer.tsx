import { Link } from 'react-router-dom';
import { Train, Mail, MapPin } from 'lucide-react';
import logoIcon from '@/assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img src={logoIcon} alt="Sustainability Express" className="h-10 w-10" />
              <span className="font-bold text-xl">Sustainability Express</span>
            </div>
            <p className="text-background/80 text-sm">
              Innovation on rails. Building sustainable solutions for the future of travel.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-bold text-lg mb-4">Navigate</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-background/80 hover:text-background transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-background/80 hover:text-background transition-colors">
                  How it Works
                </Link>
              </li>
              <li>
                <Link to="/apply" className="text-background/80 hover:text-background transition-colors">
                  Apply Now
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-background/80 hover:text-background transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Event Details */}
          <div>
            <h3 className="font-bold text-lg mb-4">Event Details</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-background/80">
                <Train className="h-4 w-4" />
                Bucharest ↔ Arad
              </li>
              <li className="flex items-center gap-2 text-background/80">
                <MapPin className="h-4 w-4" />
                48 Hours on Rails
              </li>
              <li className="text-background/80">
                20-30 Participants
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Get in Touch</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a 
                  href="mailto:hello@sustainabilityexpress.com" 
                  className="flex items-center gap-2 text-background/80 hover:text-background transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  hello@sustainabilityexpress.com
                </a>
              </li>
              <li className="text-background/80">
                Powered by Astra Trans Carpatic
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/60 text-sm">
              © 2024 Sustainability Express. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-background/60 hover:text-background transition-colors">
                Code of Conduct
              </a>
              <a href="#" className="text-background/60 hover:text-background transition-colors">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;