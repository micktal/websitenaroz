import { Link } from "react-router-dom";

export default function Index() {
  return (
    <section className="min-h-screen relative overflow-hidden bg-[hsl(var(--navy-deep))] text-[hsl(var(--fg))]">
      {/* subtle noise + scanlines */}
      <div className="absolute inset-0 pointer-events-none bg-noise" />
      <div className="absolute inset-0 pointer-events-none scanlines" />

      <div className="container py-20 relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-4">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets%2Fd93d9a0ec7824aa1ac4d890a1f90a2ec%2F947900be11374c6193cb00d108c35b16?format=webp&width=800&height=1200" alt="Naroz Shield Institute" className="h-14 w-14 rounded-md object-cover ring-1 ring-[rgba(255,255,255,0.04)]" />
              <div>
                <div className="text-sm text-[rgba(248,250,252,0.7)]">Naroz Shield Institute</div>
                <div className="text-xs text-[rgba(248,250,252,0.55)]">Professional Training for High-Risk Environments</div>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">Not Standard — Professional, International Training</h1>

            <p className="lead">We prepare professionals to operate in environments where mistakes are not an option. Our programmes combine realistic scenario-based training, operational planning and accredited qualifications to build confident teams and individuals.</p>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg border border-[rgba(255,255,255,0.04)] bg-[rgba(255,255,255,0.02)] hover:shadow-[0_8px_40px_rgba(62,232,166,0.06)] transition transform hover:-translate-y-1">
                <h4 className="font-semibold">Did You Know?</h4>
                <ul className="mt-2 text-sm text-[rgba(248,250,252,0.65)] space-y-2">
                  <li>• Most incidents are caused by poor anticipation, not lack of courage</li>
                  <li>• The best protection teams avoid danger long before it becomes visible</li>
                  <li>• Decision-making under stress is a trainable skill</li>
                </ul>
              </div>

              <div className="p-4 rounded-lg border border-[rgba(255,255,255,0.04)] bg-[rgba(255,255,255,0.02)] hover:shadow-[0_8px_40px_rgba(62,232,166,0.04)] transition transform hover:-translate-y-1">
                <h4 className="font-semibold">What Makes Us Different</h4>
                <ul className="mt-2 text-sm text-[rgba(248,250,252,0.65)] space-y-2">
                  <li>• Realistic professional environments</li>
                  <li>• Instructors with operational experience</li>
                  <li>• Accredited qualifications and international standards</li>
                </ul>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mt-4">
              <Link to="/courses" className="inline-flex items-center px-6 py-3 rounded-md bg-[hsl(var(--accent))] text-[hsl(var(--accent-foreground))] font-semibold shadow-[0_10px_40px_rgba(62,232,166,0.12)]">Explore our programmes</Link>
              <Link to="/calendar" className="inline-flex items-center px-5 py-3 rounded-md border border-[rgba(255,255,255,0.06)] text-sm text-[hsl(var(--fg))]">Upcoming dates</Link>
              <Link to="/contact" className="inline-flex items-center px-5 py-3 rounded-md text-sm text-[rgba(248,250,252,0.85)] underline">Contact / Book</Link>
            </div>

            <div className="mt-8 text-sm text-[rgba(248,250,252,0.65)] max-w-2xl">
              <h5 className="font-semibold">Who Are Our Courses For?</h5>
              <div className="mt-2 grid sm:grid-cols-2 gap-2">
                <div>• Close Protection Operatives (CPO)</div>
                <div>• Team leaders and supervisors</div>
                <div>• Executives, diplomats, NGOs and journalists</div>
                <div>• Individuals preparing for international deployments</div>
              </div>
            </div>
          </div>

          <aside className="relative">
            <div className="rounded-3xl overflow-hidden ring-1 ring-[rgba(255,255,255,0.04)] p-6 bg-gradient-to-br from-[rgba(255,255,255,0.02)] to-[transparent] shadow-[inset_0_0_40px_rgba(0,0,0,0.6)]">
              <div className="aspect-[4/3] w-full rounded-xl overflow-hidden relative">
                <img src="https://cdn.builder.io/api/v1/image/assets%2Fd93d9a0ec7824aa1ac4d890a1f90a2ec%2F3fc26777b70e4140b74bc2348f6f53a2?format=webp&width=800&height=1200" alt="Hero" className="w-full h-full object-cover grayscale contrast-[0.9] mix-blend-overlay" />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(10,12,20,0.7)] to-transparent" />
                <div className="absolute left-6 bottom-6">
                  <div className="px-3 py-2 rounded bg-[rgba(0,0,0,0.45)] border border-[rgba(255,255,255,0.04)] text-sm">More than training — an operational path</div>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="p-3 bg-[rgba(255,255,255,0.02)] rounded border border-[rgba(255,255,255,0.03)]">
                  <div className="text-sm font-semibold">Protection</div>
                  <div className="text-xs text-[rgba(248,250,252,0.6)] mt-2">Close protection & protective operations</div>
                </div>
                <div className="p-3 bg-[rgba(255,255,255,0.02)] rounded border border-[rgba(255,255,255,0.03)]">
                  <div className="text-sm font-semibold">Tactical</div>
                  <div className="text-xs text-[rgba(248,250,252,0.6)] mt-2">Driving, firearms & scenario work</div>
                </div>
                <div className="p-3 bg-[rgba(255,255,255,0.02)] rounded border border-[rgba(255,255,255,0.03)]">
                  <div className="text-sm font-semibold">Intelligence</div>
                  <div className="text-xs text-[rgba(248,250,252,0.6)] mt-2">Surveillance & protective intelligence</div>
                </div>
                <div className="p-3 bg-[rgba(255,255,255,0.02)] rounded border border-[rgba(255,255,255,0.03)]">
                  <div className="text-sm font-semibold">Medical</div>
                  <div className="text-xs text-[rgba(248,250,252,0.6)] mt-2">Protective first aid & operational care</div>
                </div>
              </div>

            </div>

            <div className="absolute -right-8 -bottom-8 w-40 h-40 rounded-full bg-[hsl(var(--accent))/0.18] opacity-90 blur-3xl pointer-events-none" />
          </aside>
        </div>
      </div>

      {/* WHO WE PROTECT grid */}
      <div className="container py-12 relative z-10">
        <h2 className="text-center text-sm font-medium text-[rgba(248,250,252,0.6)]">WHO WE PROTECT</h2>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: 'Technology & SaaS', img: 'https://cdn.builder.io/api/v1/image/assets%2Fd93d9a0ec7824aa1ac4d890a1f90a2ec%2Ff727b85568f64d93b8d31d993f44e9ac?format=webp&width=800&height=1200' },
            { title: 'Finance & Fintech', img: 'https://cdn.builder.io/api/v1/image/assets%2Fd93d9a0ec7824aa1ac4d890a1f90a2ec%2F3fc26777b70e4140b74bc2348f6f53a2?format=webp&width=800&height=1200' },
            { title: 'Healthcare & Biotech', img: '' },
            { title: 'E-commerce & Retail', img: '' },
            { title: 'Energy & Manufacturing', img: '' },
            { title: 'Telecommunications', img: '' },
          ].map((c) => (
            <div key={c.title} className="group relative rounded-lg overflow-hidden border border-[rgba(255,255,255,0.04)] hover:shadow-[0_10px_40px_rgba(62,232,166,0.06)] transition">
              <div className="h-40 bg-[rgba(0,0,0,0.35)] flex items-center justify-center">
                {c.img ? (
                  <img src={c.img} alt={c.title} className="w-full h-full object-cover grayscale contrast-[0.85] group-hover:contrast-100" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-[rgba(248,250,252,0.3)]">{c.title}</div>
                )}
              </div>
              <div className="p-3 text-center bg-[rgba(255,255,255,0.02)]">
                <div className="text-sm text-[rgba(248,250,252,0.95)]">{c.title}</div>
              </div>
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-[hsl(var(--accent))]/60 pointer-events-none rounded-lg" />
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
