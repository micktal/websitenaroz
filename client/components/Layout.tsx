import { Outlet } from "react-router-dom";
import LinkWrapper from "@/components/LinkWrapper";
import useScroll from "@/hooks/useScroll";

export default function Layout() {
  const scrolled = useScroll(8);

  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <header className={`sticky top-0 z-40 transition-shadow bg-[hsl(var(--navy-deep))]/85 backdrop-blur-sm ${scrolled ? 'shadow-[0_6px_30px_rgba(0,0,0,0.6)]' : ''}`}>
        <div className={`container flex items-center justify-between ${scrolled ? 'py-3' : 'py-5'}`}>
          <div className="flex items-center gap-3">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets%2Fd93d9a0ec7824aa1ac4d890a1f90a2ec%2F947900be11374c6193cb00d108c35b16?format=webp&width=800&height=1200" alt="Naroz Shield Institute" className="h-10 w-10 rounded-md object-cover ring-1 ring-[rgba(255,255,255,0.04)]" />
            <div>
              <h1 className="text-lg font-semibold leading-tight">Naroz Shield Institute</h1>
              <p className="text-sm text-muted-foreground">Training & Protection Services — International</p>
            </div>
          </div>

          <nav>
            <ul className="flex items-center gap-6 text-sm tracking-wide uppercase">
              <li>
                <LinkWrapper to="/" className="hover:text-[hsl(var(--accent))]">Home</LinkWrapper>
              </li>
              <li>
                <LinkWrapper to="/about" className="hover:text-[hsl(var(--accent))]">About</LinkWrapper>
              </li>
              <li>
                <LinkWrapper to="/about-highfield" className="hover:text-[hsl(var(--accent))]">Highfield</LinkWrapper>
              </li>
              <li>
                <LinkWrapper to="/courses" className="hover:text-[hsl(var(--accent))]">Courses</LinkWrapper>
              </li>
              <li>
                <LinkWrapper to="/sia" className="hover:text-[hsl(var(--accent))]">SIA</LinkWrapper>
              </li>
              <li>
                <LinkWrapper to="/calendar" className="hover:text-[hsl(var(--accent))]">Calendar</LinkWrapper>
              </li>
              <li>
                <LinkWrapper to="/contact" className="hover:text-[hsl(var(--accent))]">Contact</LinkWrapper>
              </li>
              <li>
                <LinkWrapper to="/contact" className="ml-2 inline-flex items-center px-3 py-2 rounded bg-[hsl(var(--accent))] text-[hsl(var(--navy-deep))] font-semibold">Book</LinkWrapper>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container py-10">
        <Outlet />
      </main>

      <footer className="border-t border-border py-8">
        <div className="container text-sm text-muted-foreground flex flex-col md:flex-row items-center justify-between gap-4">
          <div>© {new Date().getFullYear()} Naroz Shield Institute</div>
          <div>Made for international protection & training</div>
        </div>
      </footer>
    </div>
  );
}
