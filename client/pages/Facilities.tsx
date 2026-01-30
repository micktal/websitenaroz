import SectionHeader from "@/components/SectionHeader";

export default function Facilities() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section - Grand Exterior */}
      <section className="relative h-[70vh] overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2Fd93d9a0ec7824aa1ac4d890a1f90a2ec%2Fba6fcb9625e347bda2eb20626fe75fd2?format=webp&width=800&height=1200"
            alt="Illiria Training Center"
            className="w-full h-full object-cover"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          {/* Subtle Pattern Overlay */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.1) 2px, rgba(0,0,0,0.1) 4px)",
            }}
          />
        </div>

        {/* Content */}
        <div className="relative h-full flex items-end pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-6xl lg:text-7xl text-white mb-4">
                World-Class Training Facility
              </h1>
              <p className="text-xl text-white/90 mb-6">
                The Illiria Center - Where Excellence Meets Elegance
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
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span>Tirana, Albania</span>
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
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                  <span>Premium Training Facilities</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <SectionHeader
              title="Excellence in Every Detail"
              subtitle="Our state-of-the-art facility combines classical architecture with modern training infrastructure, providing the ideal environment for elite close protection and diplomatic security training."
            />
          </div>
        </div>
      </section>

      {/* Luxurious Interior Section */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image with Effects */}
            <div className="relative group">
              <div className="relative overflow-hidden rounded-lg shadow-2xl">
                {/* Main Image */}
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fd93d9a0ec7824aa1ac4d890a1f90a2ec%2Fab2aa08332594a19b1a747e973036482?format=webp&width=800&height=1200"
                  alt="Illiria Interior"
                  className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
                />
                {/* Border Frame Effect */}
                <div className="absolute inset-0 border-4 border-white/20 pointer-events-none" />
                {/* Shine Effect on Hover */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -translate-x-full group-hover:translate-x-full" />
              </div>
              {/* Decorative Corner Elements */}
              <div className="absolute -top-4 -left-4 w-20 h-20 border-t-4 border-l-4 border-primary opacity-50" />
              <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b-4 border-r-4 border-primary opacity-50" />
            </div>

            {/* Content */}
            <div>
              <h2 className="text-4xl mb-6">Diplomatic Training Excellence</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our grand reception halls and ceremonial spaces provide the
                perfect setting for diplomatic protection training scenarios.
                Students learn to navigate high-profile events in an environment
                that mirrors real-world diplomatic settings.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
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
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg mb-1">
                      Authentic Training Environments
                    </h3>
                    <p className="text-muted-foreground">
                      Marble halls, crystal chandeliers, and period furnishings
                      create realistic diplomatic scenarios.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
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
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg mb-1">
                      Professional Briefing Rooms
                    </h3>
                    <p className="text-muted-foreground">
                      Equipped for strategic planning and tactical briefings.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
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
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg mb-1">Climate-Controlled Comfort</h3>
                    <p className="text-muted-foreground">
                      Year-round training in optimal conditions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grounds & Exterior Training Section */}
      <section className="py-20 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content First on Desktop */}
            <div className="lg:order-1 order-2">
              <h2 className="text-4xl mb-6">
                Close Protection Training Grounds
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our extensive grounds feature outdoor training areas designed
                for tactical exercises, protective formations, and vehicle
                security operations. The combination of classical architecture
                and open spaces provides diverse training scenarios.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h4 className="mb-2">Tactical Training</h4>
                  <p className="text-sm text-muted-foreground">
                    Formations, advances, and protective movements
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h4 className="mb-2">Vehicle Operations</h4>
                  <p className="text-sm text-muted-foreground">
                    Convoy security and defensive driving
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h4 className="mb-2">Perimeter Security</h4>
                  <p className="text-sm text-muted-foreground">
                    Advanced surveillance detection
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h4 className="mb-2">Night Operations</h4>
                  <p className="text-sm text-muted-foreground">
                    Low-light tactical scenarios
                  </p>
                </div>
              </div>
            </div>

            {/* Image with Effects */}
            <div className="relative group lg:order-2 order-1">
              <div className="relative overflow-hidden rounded-lg shadow-2xl">
                {/* Vignette Effect Container */}
                <div className="relative">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2Fd93d9a0ec7824aa1ac4d890a1f90a2ec%2Fca03f5933ae74d9a8de941685d530ba5?format=webp&width=800&height=1200"
                    alt="Illiria Grounds Evening"
                    className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Dramatic Vignette */}
                  <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/40" />
                  {/* Color Grading Overlay */}
                  <div className="absolute inset-0 bg-primary/5 mix-blend-overlay" />
                </div>
                {/* Animated Border */}
                <div className="absolute inset-0 border-2 border-primary/30 group-hover:border-primary/60 transition-colors duration-300" />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-xl border border-gray-200 z-10">
                <div className="text-4xl text-primary mb-1">15+</div>
                <div className="text-sm text-muted-foreground">
                  Acres of Training Grounds
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">Facility Highlights</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every element of our facility is designed to provide the most
              realistic and comprehensive training experience.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
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
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <h3 className="mb-2">Classical Architecture</h3>
              <p className="text-sm text-muted-foreground">
                18th-century inspired design with modern amenities
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
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
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="mb-2">Secure Compound</h3>
              <p className="text-sm text-muted-foreground">
                24/7 security with controlled access
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
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
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="mb-2">Training Library</h3>
              <p className="text-sm text-muted-foreground">
                Extensive resources and reference materials
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
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
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              </div>
              <h3 className="mb-2">Accommodation</h3>
              <p className="text-sm text-muted-foreground">
                On-site lodging for residential courses
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/90 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl mb-6">
              Experience the Illiria Difference
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Train in a facility that reflects the caliber of protection
              professionals we develop.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="/calendar"
                className="inline-block px-8 py-4 bg-white text-primary rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
              >
                View Training Schedule
              </a>
              <a
                href="/contact"
                className="inline-block px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white/10 transition-colors"
              >
                Schedule a Visit
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
