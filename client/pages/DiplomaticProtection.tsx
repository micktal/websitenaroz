import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";
import SessionInfo from "@/components/SessionInfo";

export default function DiplomaticProtection() {
  return (
    <div>
      {/* Hero Section with Protection Agent Image */}
      <div className="mb-12 -mt-10 -mx-4 lg:-mx-8">
        <div className="relative h-[400px] overflow-hidden group">
          {/* Main Image */}
          <img 
            src="https://cdn.builder.io/api/v1/image/assets%2Fd93d9a0ec7824aa1ac4d890a1f90a2ec%2F5c2c8b0201fd4fb7b15b99054537bab6?format=webp&width=800&height=1200"
            alt="Diplomatic Protection Training"
            className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
          />
          
          {/* Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />
          
          {/* Vignette Effect */}
          <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/40" />
          
          {/* Professional Blue-Green Tint */}
          <div className="absolute inset-0 bg-cyan-900/10 mix-blend-overlay" />
          
          {/* Subtle Grid Pattern Overlay */}
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(255, 255, 255, .05) 25%, rgba(255, 255, 255, .05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .05) 75%, rgba(255, 255, 255, .05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255, 255, 255, .05) 25%, rgba(255, 255, 255, .05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .05) 75%, rgba(255, 255, 255, .05) 76%, transparent 77%, transparent)',
            backgroundSize: '50px 50px'
          }} />
          
          {/* Content Overlay */}
          <div className="absolute inset-0 flex items-end pb-12">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl">
                <div className="inline-block px-4 py-1 bg-primary/90 backdrop-blur-sm text-white text-xs uppercase tracking-wider rounded mb-4">
                  Premier Protection Programme
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl text-white mb-4">
                  Diplomatic Protection Programme
                </h1>
                <p className="text-xl text-white/90 mb-6">
                  Elite training for high-profile diplomatic and executive protection operations
                </p>
                <div className="flex flex-wrap gap-4 text-sm text-white/80">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>7-Day Intensive</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>Professional Certification</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>International Standards</span>
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
          <a href="/contact?course=Diplomatic%20Protection%20Programme" className="inline-flex items-center px-6 py-3 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors shadow-lg">Book this course</a>
        </div>

        <SessionInfo />

        <Card>
          <section className="space-y-6">
            <div>
              <h2 className="text-xl">Programme Overview</h2>
              <p className="mt-2 text-muted-foreground">The Diplomatic Protection Programme is a specialised, intensive training course designed to prepare security professionals for protective duties involving diplomats, international officials, government representatives and high-profile individuals operating in sensitive or hostile environments.</p>
              <p className="mt-2 text-muted-foreground">This programme focuses on protective planning, operational coordination, threat mitigation and professional conduct, with a controlled and realistic integration of tactical shooting exercises where applicable.</p>
            </div>

            <div>
              <h3 className="text-lg">Course Structure & Assessment</h3>
              <p className="mt-2 text-muted-foreground">Practical exercises, scenario work and continuous instructor assessment. Successful candidates receive a certificate of completion.</p>
            </div>
          </section>
        </Card>
      </div>
    </div>
  );
}
