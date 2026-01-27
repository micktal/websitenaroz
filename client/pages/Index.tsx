export default function Index() {
  return (
    <section className="grid gap-10 lg:grid-cols-2 items-center py-8">
      <div className="animate-fade-up" style={{ animationDelay: '80ms' }}>
        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">Naroz Shield Institute</h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-xl">
          We provide world-class training and protective services for individuals and organizations seeking professional security, risk management, and international operations readiness. Modern curriculum — practical scenarios — global certifications.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a href="/contact" className="inline-flex items-center px-6 py-3 rounded-md bg-primary text-primary-foreground font-semibold shadow-md transform transition hover:scale-[1.02]">Get in touch</a>
          <a href="/courses" className="inline-flex items-center px-6 py-3 rounded-md border border-border text-sm text-foreground transform transition hover:scale-[1.02]">View programs</a>
        </div>

        <div className="mt-8 flex gap-4 items-center text-sm text-muted-foreground">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-full bg-slate-100 flex items-center justify-center">🌍</div>
            <div>
              <div className="font-semibold">International Reach</div>
              <div className="text-sm">Training locations across Europe, Africa and the Middle East</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-full bg-slate-100 flex items-center justify-center">🎖️</div>
            <div>
              <div className="font-semibold">Experienced Instructors</div>
              <div className="text-sm">Industry veterans with operational field experience</div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative animate-fade-up" style={{ animationDelay: '160ms' }}>
        <div className="rounded-2xl overflow-hidden shadow-xl ring-1 ring-border hover:scale-[1.01] transform transition-all duration-300">
          <img src="/hero.jpg" alt="Naroz Shield Institute" className="w-full h-80 object-cover bg-slate-200" />
        </div>

        <div className="mt-4 grid grid-cols-2 gap-4">
          <div className="p-4 rounded-lg border border-border bg-card transform transition hover:scale-105 hover:shadow-lg">
            <div className="text-sm font-semibold">Short Courses</div>
            <div className="text-xs text-muted-foreground mt-2">Focused practical modules you can take in 1–5 days.</div>
          </div>
          <div className="p-4 rounded-lg border border-border bg-card transform transition hover:scale-105 hover:shadow-lg">
            <div className="text-sm font-semibold">Corporate Training</div>
            <div className="text-xs text-muted-foreground mt-2">Tailored programs for teams and organizations.</div>
          </div>
        </div>
      </div>
    </section>
  );
}
