import Image from 'next/image'
import Link from 'next/link'
import {
  FaFacebookF,
  FaYoutube,
  FaTwitter,
  FaInstagram,
  FaGoogle,
} from 'react-icons/fa'

const Footer = () => {
  const footerLinks = {
    forHer: [
      { text: 'Women Jeans', href: '/' },
      { text: 'Tops and Shirts', href: '/' },
      { text: 'Women Jackets', href: '/' },
      { text: 'Heels and Flats', href: '/' },
      { text: 'Women Accessories', href: '/' },
    ],
    forHim: [
      { text: 'Men Jeans', href: '/' },
      { text: 'Men Shirts', href: '/' },
      { text: 'Men Shoes', href: '/' }, // Fixed typo from "Sjoes"
      { text: 'Men Accessories', href: '/' },
      { text: 'Men Jackets', href: '/' },
    ],
  }

  const socialLinks = [
    { icon: <FaFacebookF />, href: 'https://www.facebook.com' },
    { icon: <FaYoutube />, href: 'https://www.youtube.com' },
    { icon: <FaTwitter />, href: 'https://www.twitter.com' },
    { icon: <FaInstagram />, href: 'https://www.instagram.com' },
    { icon: <FaGoogle />, href: 'https://www.google.com' },
  ]

  return (
    <footer className='bg-white border-t'>
      {/* Main Footer Section */}
      <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8'>
        {/* Brand Column */}
        <div className='flex flex-col items-center md:items-start gap-6'>
          <Image
            src='/images/logo-black.png'
            alt='Brandstore logo'
            width={150}
            height={60}
            className='h-auto w-32 lg:w-40'
          />
          <p className='font-medium text-lg text-center md:text-left'>
            The best look anytime, anywhere.
          </p>
        </div>

        {/* For Her Links */}
        <div className='flex flex-col items-center md:items-start'>
          <h3 className='text-xl font-bold mb-4 md:mb-6'>For Her</h3>
          <ul className='space-y-2 text-center md:text-left'>
            {footerLinks.forHer.map((link, index) => (
              <li key={`her-${index}`}>
                <Link
                  href={link.href}
                  className='text-gray-600 hover:text-blue-500 transition-colors'
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* For Him Links */}
        <div className='flex flex-col items-center md:items-start'>
          <h3 className='text-xl font-bold mb-4 md:mb-6'>For Him</h3>
          <ul className='space-y-2 text-center md:text-left'>
            {footerLinks.forHim.map((link, index) => (
              <li key={`him-${index}`}>
                <Link
                  href={link.href}
                  className='text-gray-600 hover:text-blue-500 transition-colors'
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter/Social (Placeholder for future expansion) */}
        <div className='hidden lg:flex flex-col'>
          <h3 className='text-xl font-bold mb-6'>Stay Connected</h3>
          {/* Can add newsletter form here later */}
        </div>
      </div>

      {/* Copyright & Social Section */}
      <div className='border-t py-6'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4'>
          <p className='text-gray-500 text-sm text-center sm:text-left'>
            Copyright © {new Date().getFullYear()} Brandstore. Powered by
            Brandstore.
          </p>

          <div className='flex items-center justify-center gap-4'>
            {socialLinks.map((social, index) => (
              <Link
                key={`social-${index}`}
                href={social.href}
                target='_blank'
                rel='noopener noreferrer'
                className='text-gray-500 hover:text-blue-500 transition-colors text-xl'
                aria-label={`Follow us on ${social.href.split('.')[1]}`}
              >
                {social.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
