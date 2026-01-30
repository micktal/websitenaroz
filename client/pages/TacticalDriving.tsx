import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";
import SessionInfo from "@/components/SessionInfo";

export default function TacticalDriving() {
  return (
    <div>
      {/* Hero Section with Training Image */}
      <div className="mb-12 -mt-10 -mx-4 lg:-mx-8">
        <div className="relative h-[400px] overflow-hidden group">
          {/* Main Image */}
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2Fd93d9a0ec7824aa1ac4d890a1f90a2ec%2Ff6eb8a5a7b2143f2a7ac1dbcc657f437?format=webp&width=800&height=1200"
            alt="Tactical Driving Training"
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
          />

          {/* Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

          {/* Vignette Effect */}
          <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/30" />

          {/* Cool Blue Tint for Outdoor Environment */}
          <div className="absolute inset-0 bg-blue-900/5 mix-blend-overlay" />

          {/* Subtle Motion Blur Effect (Horizontal) */}
          <div
            className="absolute inset-0 opacity-10 group-hover:opacity-0 transition-opacity duration-700"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)",
            }}
          />

          {/* Content Overlay */}
          <div className="absolute inset-0 flex items-end pb-12">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl">
                <div className="inline-block px-4 py-1 bg-primary/90 backdrop-blur-sm text-white text-xs uppercase tracking-wider rounded mb-4">
                  Advanced Vehicle Training
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl text-white mb-4">
                  Tactical Driving Programme
                </h1>
                <p className="text-xl text-white/90 mb-6">
                  Master defensive driving, convoy operations and emergency
                  manoeuvres
                </p>
                <div className="flex flex-wrap gap-4 text-sm text-white/80">
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>3-Day Intensive</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                    <span>High-Speed Manoeuvres</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-5 h-5"
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
                    <span>Protective Formations</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Corner Elements */}
          <div className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-6 flex gap-3">
          <a
            href="/contact?course=Tactical%20Driving%20Programme"
            className="inline-flex items-center px-6 py-3 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors shadow-lg"
          >
            Book this course
          </a>
        </div>

        <SessionInfo />

        <Card>
          <h2 className="text-xl">Overview</h2>
          <p className="mt-2 text-muted-foreground">
            A focused programme on defensive and protective driving techniques,
            vehicle handling, escort formations and emergency manoeuvres
            suitable for protection operations.
          </p>
        </Card>
      </div>
    </div>
  );
}
