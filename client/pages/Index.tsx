import LinkWrapper from "@/components/LinkWrapper";

export default function Index() {
  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      {/* subtle noise */}
      <div className="absolute inset-0 pointer-events-none bg-noise" />

      <div className="container py-20 relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-4">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets%2Fd93d9a0ec7824aa1ac4d890a1f90a2ec%2F947900be11374c6193cb00d108c35b16?format=webp&width=800&height=1200" alt="Naroz Shield Institute" className="h-14 w-14 rounded object-cover" />
              <div>
                <div className="text-sm text-primary font-medium">Naroz Shield Institute</div>
                <div className="text-xs text-muted-foreground">Professional Training for High-Risk Environments</div>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-primary">Not Standard — Professional, International Training</h1>

            <p className="lead text-foreground">We prepare professionals to operate in environments where mistakes are not an option. Our programmes combine realistic scenario-based training, operational planning and accredited qualifications to build confident teams and individuals.</p>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg border border-border bg-white hover:shadow-md transition transform hover:-translate-y-1">
                <h4 className="text-primary">Did You Know?</h4>
                <ul className="mt-2 text-sm text-muted-foreground space-y-2">
                  <li>• Most incidents are caused by poor anticipation, not lack of courage</li>
                  <li>• The best protection teams avoid danger long before it becomes visible</li>
                  <li>• Decision-making under stress is a trainable skill</li>
                </ul>
              </div>

              <div className="p-4 rounded-lg border border-border bg-white hover:shadow-md transition transform hover:-translate-y-1">
                <h4 className="text-primary">What Makes Us Different</h4>
                <ul className="mt-2 text-sm text-muted-foreground space-y-2">
                  <li>• Realistic professional environments</li>
                  <li>• Instructors with operational experience</li>
                  <li>• Accredited qualifications and international standards</li>
                </ul>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mt-4">
              <LinkWrapper to="/courses" className="inline-flex items-center px-6 py-3 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">Explore our programmes</LinkWrapper>
              <LinkWrapper to="/calendar" className="inline-flex items-center px-5 py-3 rounded-md border border-border text-sm hover:bg-gray-50 transition-colors">Upcoming dates</LinkWrapper>
              <LinkWrapper to="/contact" className="inline-flex items-center px-5 py-3 rounded-md text-sm text-primary hover:underline transition-colors">Contact / Book</LinkWrapper>
            </div>

            <div className="mt-8 text-sm text-muted-foreground max-w-2xl">
              <h5 className="font-semibold text-primary">Who Are Our Courses For?</h5>
              <div className="mt-2 grid sm:grid-cols-2 gap-2">
                <div>• Close Protection Operatives (CPO)</div>
                <div>• Team leaders and supervisors</div>
                <div>• Executives, diplomats, NGOs and journalists</div>
                <div>• Individuals preparing for international deployments</div>
              </div>
            </div>
          </div>

          <aside className="relative">
            <div className="rounded-2xl overflow-hidden border border-border p-6 bg-white shadow-sm">
              <div className="aspect-[4/3] w-full rounded-lg overflow-hidden relative">
                <img src="https://cdn.builder.io/api/v1/image/assets%2Fd93d9a0ec7824aa1ac4d890a1f90a2ec%2F3fc26777b70e4140b74bc2348f6f53a2?format=webp&width=800&height=1200" alt="Hero" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute left-6 bottom-6">
                  <div className="px-3 py-2 rounded bg-white/95 backdrop-blur-sm text-sm text-primary">More than training — an operational path</div>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="p-3 bg-gray-50 rounded border border-border">
                  <div className="text-sm text-primary">Protection</div>
                  <div className="text-xs text-muted-foreground mt-2">Close protection & protective operations</div>
                </div>
                <div className="p-3 bg-gray-50 rounded border border-border">
                  <div className="text-sm text-primary">Tactical</div>
                  <div className="text-xs text-muted-foreground mt-2">Driving, firearms & scenario work</div>
                </div>
              </div>

            </div>
          </aside>
        </div>
      </div>

    </section>
  );
}
