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
                <img src="https://images.pexels.com/photos/35557506/pexels-photo-35557506.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Professional Close Protection Agents" className="w-full h-full object-cover" />
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

        {/* Testimonials Section */}
        <div className="mt-24 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-3">What Our Graduates Say</h2>
            <p className="text-muted-foreground">Real experiences from professionals who completed our programmes</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1: Diplomatic Protection */}
            <div className="bg-white border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-primary">James M.</h4>
                  <p className="text-xs text-muted-foreground">Diplomatic Protection Operative</p>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-sm text-muted-foreground italic mb-4">
                "The Diplomatic Protection Programme completely changed my approach to security work. The instructors' real-world experience was invaluable. I now work for an international protection team supporting diplomatic missions."
              </p>
              <div className="text-xs text-primary font-medium">Diplomatic Protection Programme</div>
            </div>

            {/* Testimonial 2: Tactical Firearms */}
            <div className="bg-white border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-primary">Sarah K.</h4>
                  <p className="text-xs text-muted-foreground">Security Consultant</p>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-sm text-muted-foreground italic mb-4">
                "Professional, disciplined and realistic. The Tactical Firearms training gave me the confidence and skills needed for high-risk assignments. The focus on legal compliance and ethical decision-making sets this course apart."
              </p>
              <div className="text-xs text-primary font-medium">Tactical Firearms Programme</div>
            </div>

            {/* Testimonial 3: Surveillance */}
            <div className="bg-white border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-primary">Marcus T.</h4>
                  <p className="text-xs text-muted-foreground">Intelligence Analyst</p>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-sm text-muted-foreground italic mb-4">
                "The Surveillance & Intelligence programme taught me to think like a professional operator. The counter-surveillance techniques and threat assessment skills are directly applicable to my current role in corporate security."
              </p>
              <div className="text-xs text-primary font-medium">Surveillance & Intelligence Programme</div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
