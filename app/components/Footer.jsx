import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

const socialLinks = [
  {
    name: 'Github',
    href: 'https://github.com/Imrann-Khan',
    icon: assets.github_icon, 
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/md-imran-ul-huq-b6b712202/',
    icon: assets.linkedin_icon,
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/Imrann.Khannnn/',
    icon: assets.facebook_icon,
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/imran.khan.2019/',
    icon: assets.instagram_icon,
  },
]

const Footer = () => {
  return (
    <footer className="mt-20 bg-gray-50 border-t border-gray-200">
      <div className="max-w-4xl mx-auto px-4 py-10">
        <div className="text-center">
          <Image src={assets.logo} alt="Logo" className="w-36 mx-auto mb-4" />
          <div className="flex w-max items-center gap-2 mx-auto text-gray-600 text-sm mb-6">
            <Image src={assets.mail_icon} alt="Mail" className="w-5" />
            <a href="mailto:ik11150500218@gmail.com" className="hover:underline">
              ik11150500218@gmail.com
            </a>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between border-t border-gray-300 pt-6">
          <p className="text-gray-500 text-sm mb-4 sm:mb-0">
            © 2025 Md. Imran-Ul-Huq. All rights reserved.
          </p>
          <ul className="flex items-center gap-6">
            {socialLinks.map(link => (
              <li key={link.name}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition"
                >
                  {link.icon && (
                    <Image src={link.icon} alt={link.name} className="w-5 h-5" />
                  )}
                  <span className="hidden sm:inline">{link.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
