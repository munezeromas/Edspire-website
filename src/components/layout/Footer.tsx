import React from 'react'
import { Link } from 'react-router-dom'
import { Linkedin, Mail, MapPin, Youtube, ExternalLink } from 'lucide-react'
import Logo from '../ui/Logo'

export const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-950 border-t border-white/10 text-white/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="md:col-span-2 space-y-4">
            <Logo size="md" />
            <p className="text-sm text-white/70 leading-relaxed max-w-md mt-2">
              Edspire is an emerging African EdTech company developing AI-powered learning and accessibility solutions. Creators of <strong>Vive-AI</strong> and <strong>Ability</strong>.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.linkedin.com/company/edspire-hub/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white/80 hover:text-white hover:border-blue-400 text-xs font-semibold transition-colors"
                aria-label="Edspire on LinkedIn"
              >
                <Linkedin className="w-4 h-4 text-blue-400" />
                <span>LinkedIn Company Page</span>
                <ExternalLink className="w-3 h-3 text-white/40" />
              </a>

              <a
                href="https://www.youtube.com/watch?v=PctaPk1tdbk&t=242s"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white/80 hover:text-white hover:border-rose-400 text-xs font-semibold transition-colors"
                aria-label="Edspire on YouTube"
              >
                <Youtube className="w-4 h-4 text-rose-400" />
                <span>Watch Presentation</span>
                <ExternalLink className="w-3 h-3 text-white/40" />
              </a>
            </div>

            <div className="pt-2 flex items-center gap-2 text-xs text-white/60">
              <MapPin className="w-4 h-4 text-blue-400 shrink-0" />
              <span>Headquartered in Kigali, Rwanda</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Products and Work</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/products#vive-ai" className="hover:text-white transition-colors">
                  Vive-AI Platform
                </Link>
              </li>
              <li>
                <Link to="/products#ability" className="hover:text-white transition-colors">
                  Ability (Accessibility Tech)
                </Link>
              </li>
              <li>
                <a href="/#recognition" className="hover:text-white transition-colors">
                  GLC AI Hackathon Victory
                </a>
              </li>
              <li>
                <a href="/#media" className="hover:text-white transition-colors">
                  Featured Video
                </a>
              </li>
            </ul>
          </div>

          {/* Company & Legal */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About Edspire
                </Link>
              </li>
              <li>
                <Link to="/about#team" className="hover:text-white transition-colors">
                  Team and Founder
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Partner with Us
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-white transition-colors">
                  Privacy and Protection
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>© {new Date().getFullYear()} Edspire. All rights reserved.</p>
          <div className="flex items-center gap-3 text-white/60">
            <span>Built in Rwanda</span>
            <span>•</span>
            <span>Designed for Africa</span>
            <span>•</span>
            <span>Powered by AI</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
