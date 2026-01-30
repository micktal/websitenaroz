import { Outlet } from "react-router-dom";
import LinkWrapper from "@/components/LinkWrapper";
import useScroll from "@/hooks/useScroll";

export default function Layout() {
  const scrolled = useScroll(8);

  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <header className={`sticky top-0 z-40 transition-shadow bg-white/95 backdrop-blur-sm border-b border-border ${scrolled ? 'shadow-sm' : ''}`}>
        <div className={`container flex items-center justify-between ${scrolled ? 'py-3' : 'py-5'}`}>
          <div className="flex items-center gap-3">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets%2Fd93d9a0ec7824aa1ac4d890a1f90a2ec%2F947900be11374c6193cb00d108c35b16?format=webp&width=800&height=1200" alt="Naroz Shield Institute" className="h-10 w-10 rounded object-cover" />
            <div>
              <h1 className="text-lg font-semibold leading-tight text-primary">Naroz Shield Institute</h1>
              <p className="text-sm text-muted-foreground">Training & Protection Services — International</p>
            </div>
          </div>

          <nav>
            <ul className="flex items-center gap-6 text-sm">
              <li>
                <LinkWrapper to="/" className="hover:text-primary transition-colors">Home</LinkWrapper>
              </li>
              <li>
                <LinkWrapper to="/about" className="hover:text-primary transition-colors">About</LinkWrapper>
              </li>
              <li>
                <LinkWrapper to="/about-highfield" className="hover:text-primary transition-colors">Highfield</LinkWrapper>
              </li>
              <li>
                <LinkWrapper to="/courses" className="hover:text-primary transition-colors">Courses</LinkWrapper>
              </li>
              <li>
                <LinkWrapper to="/sia" className="hover:text-primary transition-colors">SIA</LinkWrapper>
              </li>
              <li>
                <LinkWrapper to="/calendar" className="hover:text-primary transition-colors">Calendar</LinkWrapper>
              </li>
              <li>
                <LinkWrapper to="/contact" className="hover:text-primary transition-colors">Contact</LinkWrapper>
              </li>
              <li>
                <LinkWrapper to="/contact" className="ml-2 inline-flex items-center px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">Book Now</LinkWrapper>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container py-10">
        <Outlet />
      </main>

      <footer className="border-t border-border py-8">
        <div className="container">
          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-8 mb-8 pb-8 border-b border-border">
            <div className="text-center">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fd93d9a0ec7824aa1ac4d890a1f90a2ec%2Fd057780ebfb44287962bbce62cfe94b5?format=webp&width=800&height=1200"
                alt="Security Industry Authority"
                className="h-16 w-auto mx-auto grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100"
              />
              <p className="text-xs text-muted-foreground mt-2">SIA Approved Training</p>
            </div>
            <div className="text-center">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fd93d9a0ec7824aa1ac4d890a1f90a2ec%2F5ff0bed850854dc2ac2c034f77766073?format=webp&width=800&height=1200"
                alt="Highfield Qualifications Approved Centre"
                className="h-16 w-auto mx-auto grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100"
              />
              <p className="text-xs text-muted-foreground mt-2">Accredited Centre</p>
            </div>
          </div>

          {/* Footer Info */}
          <div className="text-sm text-muted-foreground flex flex-col md:flex-row items-center justify-between gap-4">
            <div>© {new Date().getFullYear()} Naroz Shield Institute</div>
            <div className="flex items-center gap-4">
              <a href="mailto:training@naroz-shield.com" className="text-primary hover:underline">training@naroz-shield.com</a>
              <span className="hidden md:inline">•</span>
              <span className="hidden md:inline">International protection & training</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
