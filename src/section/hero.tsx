import { cn } from '@/lib/utils'
import { useState } from 'react'

const HeroSection = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }
  return (
    <section className="container mx-auto px-4 md:py-8 py-2">
      {/* NAVBAR */}
      <nav className="flex items-center justify-between py-4">
        <div className="flex items-center justify-between w-full md:w-auto md:justify-start gap-4 md:gap-16">
          <h1 className="text-xl md:text-2xl font-bold flex items-center space-x-3">
            <img src={'/logo.png'} alt="" className="w-8 md:w-10" />
            <span className="md:inline">Malinau Data</span>
          </h1>
          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={toggleMobileMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <ul
            className={cn(
              'hidden md:flex items-center space-x-8 fixed md:static bg-white md:bg-transparent transition-all duration-300 ease-in-out',
              isMobileMenuOpen && 'top-16 left-0 w-full md:w-auto md:top-0',
              isMobileMenuOpen && 'bg-white md:bg-transparent p-8 space-y-4',
              isMobileMenuOpen && 'flex flex-col md:flex-row',
              isMobileMenuOpen && 'block'
            )}
          >
            <li>
              <a className="text-slate-600 text-base" href="#">
                Product
              </a>
            </li>
            <li>
              <a className="text-slate-600 text-base" href="#">
                Solutions
              </a>
            </li>
            <li>
              <a className="text-slate-600 text-base" href="#">
                Services
              </a>
            </li>
            <li>
              <a className="text-slate-600 text-base" href="#">
                About Us
              </a>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-slate-600 font-semibold text-base">
            Login
          </a>
          <a
            href="#"
            className="bg-black font-semibold text-white px-4 py-2 rounded-full"
          >
            Get Started
          </a>
        </div>
      </nav>

      {/* HERO */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="md:max-w-xl flex flex-col items-center md:items-start justify-center text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight md:leading-20 text-slate-800">
              Solusi Praktis <br />
              <span className="bg-gradient-to-b from-indigo-700 to-indigo-500 bg-clip-text text-transparent">
                Data Storage
              </span>{' '}
              Untuk Masa Depan.
            </h1>
            <p className="text-slate-400 mt-4 w-full text-sm md:text-base">
              Simpan, kelola, dan akses data Anda dengan mudah melalui teknologi
              penyimpanan modern yang aman, scalable, dan siap menghadapi
              kebutuhan masa depan.
            </p>
            <div className="flex flex-col sm:flex-row items-center w-full mt-4 gap-4">
              <a
                href="#"
                className="bg-black font-semibold text-white px-5 py-3 rounded-full mt-8 w-full sm:w-auto text-center"
              >
                Start for Free
              </a>
              <a
                href="#"
                className="bg-gray-100 border font-semibold text-black px-5 py-3 rounded-full mt-0 md:mt-8 w-full sm:w-auto text-center"
              >
                Contact Sales
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center mt-8 md:mt-0">
            <img
              src={'/top-image.png'}
              alt="Hero Image"
              className="w-full max-w-xs md:max-w-md"
            />
          </div>
        </div>
      </div>

      {/* LOGOS */}
      <div className="flex flex-wrap items-center justify-center mt-8 gap-8 md:gap-24">
        <img
          src={'/logos/google.svg'}
          alt="Google"
          className="h-6 md:h-8 grayscale opacity-60"
        />
        <img
          src={'/logos/dropbox.svg'}
          alt="Dropbox"
          className="h-6 md:h-8 grayscale opacity-60"
        />
        <img
          src={'/logos/medium.svg'}
          alt="Medium"
          className="h-5 md:h-6 grayscale opacity-60"
        />
        <img
          src={'/logos/dropbox.svg'}
          alt="Dropbox"
          className="h-6 md:h-8 grayscale opacity-60"
        />
        <img
          src={'/logos/medium.svg'}
          alt="Medium"
          className="h-5 md:h-6 grayscale opacity-60"
        />
        <img
          src={'/logos/google.svg'}
          alt="Google"
          className="h-6 md:h-8 grayscale opacity-60"
        />
      </div>
    </section>
  )
}

export default HeroSection
