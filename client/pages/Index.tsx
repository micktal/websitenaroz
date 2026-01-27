import { Link } from "react-router-dom";

import { Link } from "react-router-dom";

export default function Index() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-background via-card to-background">
      <div className="container py-20">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-4">
              <img src="https://cdn.builder.io/api/v1/image/assets%2Fd93d9a0ec7824aa1ac4d890a1f90a2ec%2F947900be11374c6193cb00d108c35b16?format=webp&width=800&height=1200" alt="Naroz Shield Institute" className="h-14 w-14 rounded-md object-cover" />
              <div>
                <div className="text-sm text-muted-foreground">Naroz Shield Institute</div>
                <div className="text-xs text-muted-foreground">Professional Training for High-Risk Environments</div>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">This Is Not a Standard Training Centre</h1>

            <p className="text-lg text-muted-foreground max-w-2xl">At Naroz Shield Institute, we don’t train for theory. We prepare professionals to think, decide and operate in environments where mistakes are not an option. Our programmes are designed for individuals who understand that security is preparation, not improvisation.</p>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg border border-border bg-card hover:shadow-lg transition transform hover:-translate-y-1">
                <h4 className="font-semibold">Did You Know?</h4>
                <ul className="mt-2 text-sm text-muted-foreground space-y-2">
                  <li>🔹 Most security incidents are caused by poor anticipation, not lack of courage</li>
                  <li>🔹 The best protection teams avoid danger long before it becomes visible</li>
                  <li>🔹 Decision-making under stress is a trainable skill</li>
                </ul>
              </div>

              <div className="p-4 rounded-lg border border-border bg-card hover:shadow-lg transition transform hover:-translate-y-1">
                <h4 className="font-semibold">What Makes Our Training Different?</h4>
                <ul className="mt-2 text-sm text-muted-foreground space-y-2">
                  <li>✔ Realistic, professional environments</li>
                  <li>✔ No sensationalism — focus on judgement & responsibility</li>
                  <li>✔ Instructors with backgrounds in high-risk protection operations</li>
                </ul>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mt-4">
              <Link to="/courses" className="inline-flex items-center px-6 py-3 rounded-md bg-primary text-primary-foreground font-semibold shadow transition hover:opacity-95">Explore our programmes</Link>
              <Link to="/calendar" className="inline-flex items-center px-5 py-3 rounded-md border border-border text-sm text-foreground">Upcoming dates</Link>
              <Link to="/contact" className="inline-flex items-center px-5 py-3 rounded-md text-sm text-muted-foreground underline">Contact / Book</Link>
            </div>

            <div className="mt-8 text-sm text-muted-foreground max-w-2xl">
              <h5 className="font-semibold">Who Are Our Courses Designed For?</h5>
              <div className="mt-2 grid sm:grid-cols-2 gap-2">
                <div>• Close Protection Operatives (CPO)</div>
                <div>• Team leaders and supervisors</div>
                <div>• Professionals working with diplomats, executives, NGOs or journalists</div>
                <div>• Individuals preparing for international or high-risk deployments</div>
              </div>
            </div>
          </div>

          <aside className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl ring-1 ring-border bg-gradient-to-br from-primary/10 to-card p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-bold">More Than Training — A Professional Path</h3>
                  <p className="mt-3 text-muted-foreground">Our programmes are designed to connect, not exist in isolation. Skills combine across protection, planning, intelligence, leadership and medical decision-making.</p>
                </div>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="p-4 rounded-lg bg-white/5 border border-border">
                  <div className="text-sm font-semibold">Protection</div>
                  <div className="text-xs text-muted-foreground mt-2">Close protection, protective operations and SIA-aligned qualifications.</div>
                </div>

                <div className="p-4 rounded-lg bg-white/5 border border-border">
                  <div className="text-sm font-semibold">Planning</div>
                  <div className="text-xs text-muted-foreground mt-2">Advance work, route planning and operational briefs.</div>
                </div>

                <div className="p-4 rounded-lg bg-white/5 border border-border">
                  <div className="text-sm font-semibold">Intelligence</div>
                  <div className="text-xs text-muted-foreground mt-2">Surveillance, OSINT awareness and protective analysis.</div>
                </div>

                <div className="p-4 rounded-lg bg-white/5 border border-border">
                  <div className="text-sm font-semibold">Leadership</div>
                  <div className="text-xs text-muted-foreground mt-2">Team leader and supervisory development for protection teams.</div>
                </div>
              </div>

              <div className="mt-6">
                <h4 className="font-semibold">Fun Facts from the Field</h4>
                <ul className="mt-2 text-sm text-muted-foreground space-y-2">
                  <li>🔸 The most effective protection plans are often never noticed</li>
                  <li>🔸 A well-written briefing can prevent more incidents than equipment</li>
                  <li>🔸 Preparation reduces stress before it reduces risk</li>
                </ul>
              </div>

              <div className="mt-6 flex items-center gap-3">
                <Link to="/courses" className="inline-flex items-center px-4 py-2 rounded-md bg-primary text-primary-foreground font-semibold">Discover courses</Link>
                <Link to="/contact" className="inline-flex items-center px-4 py-2 rounded-md border border-border">Book a course</Link>
              </div>
            </div>

            <div className="absolute -right-8 -bottom-8 w-40 h-40 rounded-full bg-gradient-to-br from-primary/20 to-transparent opacity-60 blur-3xl pointer-events-none" />
          </aside>
        </div>
      </div>
    </section>
  );
}
