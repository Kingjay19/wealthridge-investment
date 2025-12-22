import Link from 'next/link'
import { Building2, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'

const footerLinks = {
  Company: [
    { name: 'About Us', href: '/about' },
    { name: 'Careers', href: '/careers' },
    { name: 'Press', href: '/press' },
    { name: 'Blog', href: '/blog' },
  ],
  Services: [
    { name: 'Investment Management', href: '/services/investment-management' },
    { name: 'Wealth Advisory', href: '/services/wealth-advisory' },
    { name: 'Tax Optimization', href: '/services/tax-optimization' },
    { name: 'Retirement Planning', href: '/services/retirement-planning' },
    { name: 'Education Planning', href: '/services/education-planning' },
    { name: 'Risk Management', href: '/services/risk-management' },
  ],
  Legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'Regulatory Info', href: '/regulatory' },
  ],
  Support: [
    { name: 'Help Center', href: '/help' },
    { name: 'Contact Us', href: '/contact' },
    { name: 'Security', href: '/security' },
    { name: 'Status', href: '/status' },
  ],
}

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: 'https://facebook.com' },
  { name: 'Twitter', icon: Twitter, href: 'https://twitter.com' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com' },
  { name: 'Instagram', icon: Instagram, href: 'https://instagram.com' },
]

export default function Footer() {
  return (
    <footer className="mt-auto bg-linear-to-b from-gray-900 to-gray-950 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Brand and contact */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-linear-to-br from-primary-600 to-primary-800">
                <Building2 className="h-6 w-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">WealthBridge</h2>
                <p className="text-primary-400 font-medium">Investment Banking</p>
              </div>
            </div>
            
            <p className="text-gray-400 mb-8 max-w-md">
              Professional investment banking services with cutting-edge technology, 
              secure transactions, and expert financial guidance for your wealth growth.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary-400" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary-400" />
                <span>support@wealthbridge.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-primary-400" />
                <span>123 Wall Street, New York, NY 10005</span>
              </div>
            </div>
            
            <div className="flex space-x-4 mt-8">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
          
          {/* Links grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h3 className="text-white font-semibold mb-4">{category}</h3>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        
        {/* Divider */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} WealthBridge Investment Banking. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm text-gray-500">
              <span>FINRA Member</span>
              <span>•</span>
              <span>SIPC Insured</span>
              <span>•</span>
              <span>SEC Registered</span>
            </div>
          </div>
          
          <p className="text-gray-600 text-xs mt-6 max-w-3xl">
            WealthBridge is a registered investment advisor. Investing involves risk, including possible loss of principal. 
            Past performance does not guarantee future results. This platform is for informational purposes only and does 
            not constitute investment advice. Please consult with a qualified financial advisor before making investment decisions.
          </p>
        </div>
      </div>
    </footer>
  )
}