import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";
import SessionInfo from "@/components/SessionInfo";

export default function TacticalFirearms() {
  return (
    <div>
      {/* Hero Section with Training Image */}
      <div className="mb-12 -mt-10 -mx-4 lg:-mx-8">
        <div className="relative h-[400px] overflow-hidden group">
          {/* Main Image */}
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2Fd93d9a0ec7824aa1ac4d890a1f90a2ec%2F9b330fab9ef04b2c82d2cecb163bfe11?format=webp&width=800&height=1200"
            alt="Tactical Firearms Training"
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
          />

          {/* Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />

          {/* Vignette Effect */}
          <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/40" />

          {/* Warm Tint for Training Environment */}
          <div className="absolute inset-0 bg-amber-900/10 mix-blend-overlay" />

          {/* Subtle Noise Texture */}
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
            backgroundSize: '200px 200px'
          }} />

          {/* Content Overlay */}
          <div className="absolute inset-0 flex items-end pb-12">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl">
                <div className="inline-block px-4 py-1 bg-primary/90 backdrop-blur-sm text-white text-xs uppercase tracking-wider rounded mb-4">
                  Elite Training Programme
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl text-white mb-4">
                  Tactical Firearms Programme
                </h1>
                <p className="text-xl text-white/90 mb-6">
                  Professional firearms training in realistic operational environments
                </p>
                <div className="flex flex-wrap gap-4 text-sm text-white/80">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>5-Day Intensive Course</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span>Small Group Training</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Scenario-Based</span>
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
        <div className="mb-6">
          <a href="/contact?course=Tactical%20Firearms%20Programme" className="inline-flex items-center px-6 py-3 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors shadow-lg">Book this course</a>
        </div>

        <SessionInfo />

        <Card>
          <h2 className="text-xl">Overview</h2>
          <p className="mt-2 text-muted-foreground">Professional firearms training emphasising safe handling, marksmanship fundamentals, scenario-based shooting and legal considerations for protective roles.</p>
        </Card>
      </div>
    </div>
  );
}
