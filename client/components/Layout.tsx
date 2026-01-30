import { Outlet } from "react-router-dom";
import { useState } from "react";
import LinkWrapper from "@/components/LinkWrapper";
import useScroll from "@/hooks/useScroll";

export default function Layout() {
  const scrolled = useScroll(8);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <header
        className={`sticky top-0 z-40 transition-shadow bg-white/95 backdrop-blur-sm border-b border-border ${scrolled ? "shadow-sm" : ""}`}
      >
        <div
          className={`container flex items-center justify-between ${scrolled ? "py-3" : "py-5"}`}
        >
          {/* Logo - Responsive */}
          <LinkWrapper to="/" className="flex items-center gap-3">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets%2Fd93d9a0ec7824aa1ac4d890a1f90a2ec%2F947900be11374c6193cb00d108c35b16?format=webp&width=800&height=1200"
              alt="Naroz Shield Institute"
              className="h-10 w-10 rounded object-cover"
            />
            <div className="hidden sm:block">
              <h1 className="text-lg font-semibold leading-tight text-primary">
                Naroz Shield Institute
              </h1>
              <p className="text-sm text-muted-foreground">
                Training & Protection Services — International
              </p>
            </div>
            <div className="sm:hidden">
              <h1 className="text-base font-semibold text-primary">
                Naroz Shield
              </h1>
            </div>
          </LinkWrapper>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <ul className="flex items-center gap-6 text-sm">
              <li>
                <LinkWrapper
                  to="/"
                  className="hover:text-primary transition-colors"
                >
                  Home
                </LinkWrapper>
              </li>
              <li>
                <LinkWrapper
                  to="/about"
                  className="hover:text-primary transition-colors"
                >
                  About
                </LinkWrapper>
              </li>
              <li>
                <LinkWrapper
                  to="/facilities"
                  className="hover:text-primary transition-colors"
                >
                  Facilities
                </LinkWrapper>
              </li>
              <li>
                <LinkWrapper
                  to="/about-highfield"
                  className="hover:text-primary transition-colors"
                >
                  Highfield
                </LinkWrapper>
              </li>
              <li>
                <LinkWrapper
                  to="/courses"
                  className="hover:text-primary transition-colors"
                >
                  Courses
                </LinkWrapper>
              </li>
              <li>
                <LinkWrapper
                  to="/sia"
                  className="hover:text-primary transition-colors"
                >
                  SIA
                </LinkWrapper>
              </li>
              <li>
                <LinkWrapper
                  to="/calendar"
                  className="hover:text-primary transition-colors"
                >
                  Calendar
                </LinkWrapper>
              </li>
              <li>
                <LinkWrapper
                  to="/contact"
                  className="hover:text-primary transition-colors"
                >
                  Contact
                </LinkWrapper>
              </li>
              <li>
                <LinkWrapper
                  to="/contact"
                  className="ml-2 inline-flex items-center px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  Book Now
                </LinkWrapper>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg
                className="w-6 h-6 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6 text-primary"
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
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-border bg-white">
            <nav className="container py-4">
              <ul className="space-y-3">
                <li>
                  <LinkWrapper
                    to="/"
                    className="block py-2 px-4 rounded-md hover:bg-gray-50 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Home
                  </LinkWrapper>
                </li>
                <li>
                  <LinkWrapper
                    to="/about"
                    className="block py-2 px-4 rounded-md hover:bg-gray-50 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    About
                  </LinkWrapper>
                </li>
                <li>
                  <LinkWrapper
                    to="/facilities"
                    className="block py-2 px-4 rounded-md hover:bg-gray-50 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Facilities
                  </LinkWrapper>
                </li>
                <li>
                  <LinkWrapper
                    to="/about-highfield"
                    className="block py-2 px-4 rounded-md hover:bg-gray-50 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Highfield
                  </LinkWrapper>
                </li>
                <li>
                  <LinkWrapper
                    to="/courses"
                    className="block py-2 px-4 rounded-md hover:bg-gray-50 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Courses
                  </LinkWrapper>
                </li>
                <li>
                  <LinkWrapper
                    to="/sia"
                    className="block py-2 px-4 rounded-md hover:bg-gray-50 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    SIA
                  </LinkWrapper>
                </li>
                <li>
                  <LinkWrapper
                    to="/calendar"
                    className="block py-2 px-4 rounded-md hover:bg-gray-50 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Calendar
                  </LinkWrapper>
                </li>
                <li>
                  <LinkWrapper
                    to="/contact"
                    className="block py-2 px-4 rounded-md hover:bg-gray-50 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Contact
                  </LinkWrapper>
                </li>
                <li>
                  <LinkWrapper
                    to="/contact"
                    className="block py-3 px-4 rounded-md bg-primary text-primary-foreground text-center font-medium hover:bg-primary/90 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Book Now
                  </LinkWrapper>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </header>

      <main className="container py-6 md:py-10">
        <Outlet />
      </main>

      <footer className="border-t border-border py-8">
        <div className="container">
          {/* Training Programmes Quick Links */}
          <div className="mb-8 pb-8 border-b border-border">
            <h3 className="text-center text-lg font-semibold text-primary mb-6">
              Our Training Programmes
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
              <LinkWrapper
                to="/courses/cpo-level-3"
                className="text-sm text-muted-foreground hover:text-primary transition-colors text-center sm:text-left"
              >
                Close Protection Level 3
              </LinkWrapper>
              <LinkWrapper
                to="/courses/diplomatic-protection"
                className="text-sm text-muted-foreground hover:text-primary transition-colors text-center sm:text-left"
              >
                Diplomatic Protection
              </LinkWrapper>
              <LinkWrapper
                to="/courses/counter-terrorism"
                className="text-sm text-muted-foreground hover:text-primary transition-colors text-center sm:text-left"
              >
                Counter-Terrorism
              </LinkWrapper>
              <LinkWrapper
                to="/courses/surveillance-intelligence"
                className="text-sm text-muted-foreground hover:text-primary transition-colors text-center sm:text-left"
              >
                Surveillance & Intelligence
              </LinkWrapper>
              <LinkWrapper
                to="/courses/protective-intelligence"
                className="text-sm text-muted-foreground hover:text-primary transition-colors text-center sm:text-left"
              >
                Protective Intelligence
              </LinkWrapper>
              <LinkWrapper
                to="/courses/heat"
                className="text-sm text-muted-foreground hover:text-primary transition-colors text-center sm:text-left"
              >
                HEAT Training
              </LinkWrapper>
              <LinkWrapper
                to="/courses/protective-medical"
                className="text-sm text-muted-foreground hover:text-primary transition-colors text-center sm:text-left"
              >
                Protective Medical
              </LinkWrapper>
              <LinkWrapper
                to="/courses/protective-operations"
                className="text-sm text-muted-foreground hover:text-primary transition-colors text-center sm:text-left"
              >
                Operations Management
              </LinkWrapper>
              <LinkWrapper
                to="/courses/tactical-firearms"
                className="text-sm text-muted-foreground hover:text-primary transition-colors text-center sm:text-left"
              >
                Tactical Firearms
              </LinkWrapper>
              <LinkWrapper
                to="/courses/tactical-driving"
                className="text-sm text-muted-foreground hover:text-primary transition-colors text-center sm:text-left"
              >
                Tactical Driving
              </LinkWrapper>
            </div>
          </div>

          {/* Trust Badges - Mobile Optimized */}
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 mb-8 pb-8 border-b border-border">
            <div className="text-center">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fd93d9a0ec7824aa1ac4d890a1f90a2ec%2Fd057780ebfb44287962bbce62cfe94b5?format=webp&width=800&height=1200"
                alt="Security Industry Authority"
                className="h-12 md:h-16 w-auto mx-auto grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100"
              />
              <p className="text-xs text-muted-foreground mt-2">
                SIA Approved Training
              </p>
            </div>

            <div className="text-center">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fd93d9a0ec7824aa1ac4d890a1f90a2ec%2F62f56cb9ad59469fa0f53e92cd0ad51b?format=webp&width=800&height=1200"
                alt="Highfield Qualifications"
                className="h-12 md:h-16 w-auto mx-auto grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100"
              />
              <p className="text-xs text-muted-foreground mt-2">
                Highfield Qualifications
              </p>
            </div>

            <div className="text-center w-full sm:w-auto">
              <div className="h-12 md:h-16 flex items-center justify-center px-3 md:px-4 bg-white border-2 border-primary rounded-lg hover:shadow-md transition-all mx-auto max-w-[200px]">
                <svg
                  className="w-6 md:w-8 h-6 md:h-8 text-primary mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
                <div className="text-left">
                  <div className="text-[10px] md:text-xs font-bold text-primary uppercase leading-tight">
                    Insured &
                  </div>
                  <div className="text-[10px] md:text-xs font-bold text-primary uppercase leading-tight">
                    Licensed
                  </div>
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                Fully Covered Operations
              </p>
            </div>

            <div className="text-center w-full sm:w-auto">
              <div className="h-12 md:h-16 flex items-center justify-center px-3 md:px-4 bg-white border-2 border-primary rounded-lg hover:shadow-md transition-all mx-auto max-w-[200px]">
                <svg
                  className="w-6 md:w-8 h-6 md:h-8 text-primary mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <div className="text-left">
                  <div className="text-[10px] md:text-xs font-bold text-primary uppercase leading-tight">
                    International
                  </div>
                  <div className="text-[10px] md:text-xs font-bold text-primary uppercase leading-tight">
                    Standards
                  </div>
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                Global Recognition
              </p>
            </div>

            <div className="text-center w-full sm:w-auto">
              <div className="h-12 md:h-16 flex items-center justify-center px-3 md:px-4 bg-white border-2 border-primary rounded-lg hover:shadow-md transition-all mx-auto max-w-[200px]">
                <svg
                  className="w-6 md:w-8 h-6 md:h-8 text-primary mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
                <div className="text-left">
                  <div className="text-[10px] md:text-xs font-bold text-primary uppercase leading-tight">
                    CPD
                  </div>
                  <div className="text-[10px] md:text-xs font-bold text-primary uppercase leading-tight">
                    Accredited
                  </div>
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                Professional Development
              </p>
            </div>

            <div className="text-center w-full sm:w-auto">
              <div className="h-12 md:h-16 flex items-center justify-center px-3 md:px-4 bg-white border-2 border-primary rounded-lg hover:shadow-md transition-all mx-auto max-w-[200px]">
                <svg
                  className="w-6 md:w-8 h-6 md:h-8 text-primary mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <div className="text-left">
                  <div className="text-[10px] md:text-xs font-bold text-primary uppercase leading-tight">
                    OFQUAL
                  </div>
                  <div className="text-[10px] md:text-xs font-bold text-primary uppercase leading-tight">
                    Recognised
                  </div>
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-2">UK Regulated</p>
            </div>

            <div className="text-center w-full sm:w-auto">
              <div className="h-12 md:h-16 flex items-center justify-center px-3 md:px-4 bg-white border-2 border-primary rounded-lg hover:shadow-md transition-all mx-auto max-w-[200px]">
                <svg
                  className="w-6 md:w-8 h-6 md:h-8 text-primary mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
                <div className="text-left">
                  <div className="text-[10px] md:text-xs font-bold text-primary uppercase leading-tight">
                    ISO 9001
                  </div>
                  <div className="text-[10px] md:text-xs font-bold text-primary uppercase leading-tight">
                    Certified
                  </div>
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                Quality Management
              </p>
            </div>
          </div>

          {/* Contact Info - Mobile Optimized */}
          <div className="text-center space-y-3 mb-6">
            <div className="text-sm text-muted-foreground">
              <a
                href="mailto:training@naroz-shield.com"
                className="text-primary hover:underline"
              >
                training@naroz-shield.com
              </a>
            </div>
            <div className="text-sm text-muted-foreground">
              <a href="tel:+385913575909" className="hover:text-primary">
                +385 91 357 5909
              </a>
            </div>
          </div>

          <div className="text-center text-sm text-muted-foreground">
            <p>
              © {new Date().getFullYear()} Naroz Shield Institute. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
