import { Link, Outlet } from "react-router-dom";

import useScroll from "@/hooks/useScroll";

export default function Layout() {
  const scrolled = useScroll(8);

  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <header className={`sticky top-0 z-40 transition-shadow bg-white/60 backdrop-blur-sm ${scrolled ? 'shadow-md' : ''}`}>
        <div className={`container flex items-center justify-between ${scrolled ? 'py-4' : 'py-6'}`}>
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-md bg-primary flex items-center justify-center text-primary-foreground font-bold">NS</div>
            <div>
              <h1 className="text-lg font-semibold leading-tight">Naroz Shield Institute</h1>
              <p className="text-sm text-muted-foreground">Training & Protection Services — International</p>
            </div>
          </div>

          <nav>
            <ul className="flex items-center gap-6 text-sm">
              <li>
                <Link to="/" className="hover:underline">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:underline">About</Link>
              </li>
              <li>
                <Link to="/courses" className="hover:underline">Courses</Link>
              </li>
              <li>
                <Link to="/sia" className="hover:underline">About SIA</Link>
              </li>
              <li>
                <Link to="/calendar" className="hover:underline">Calendar</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:underline">Contact / Book</Link>
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
