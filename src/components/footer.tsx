// components/Footer.tsx
import { Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        
        {/* Brand */}
        <div>
          <h2 className="text-xl font-bold text-white">ResQ</h2>
          <p className="mt-2 text-gray-400 text-sm">
            Smart coastal hazard monitoring & response platform for safer communities.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-white transition">Home</Link></li>
            <li><Link to="/dashboard" className="hover:text-white transition">Dashboard</Link></li>
            <li><a href="#features" className="hover:text-white transition">Features</a></li>
            <li><a href="#about" className="hover:text-white transition">About</a></li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Connect</h3>
          <p className="text-sm text-gray-400 mb-4">Have questions? Reach out anytime.</p>
          <div className="flex space-x-4">
            <a href="mailto:support@resq.com" className="hover:text-white">
              <Mail className="w-5 h-5" />
            </a>
            <a href="https://github.com/Siddheshwar9/resQ" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} ResQ. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
