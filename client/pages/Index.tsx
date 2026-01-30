import LinkWrapper from "@/components/LinkWrapper";

export default function Index() {
  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      {/* subtle noise */}
      <div className="absolute inset-0 pointer-events-none bg-noise" />

      {/* Logo watermark background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <img
          src="https://cdn.builder.io/api/v1/image/assets%2Fd93d9a0ec7824aa1ac4d890a1f90a2ec%2F947900be11374c6193cb00d108c35b16?format=webp&width=800&height=1200"
          alt=""
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-auto opacity-[0.03] grayscale"
        />
      </div>

      <div className="container py-8 md:py-12 lg:py-20 relative z-10">
        <div className="grid gap-8 md:gap-12 lg:grid-cols-2 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-4">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets%2Fd93d9a0ec7824aa1ac4d890a1f90a2ec%2F947900be11374c6193cb00d108c35b16?format=webp&width=800&height=1200"
                alt="Naroz Shield Institute"
                className="h-14 w-14 rounded object-cover"
              />
              <div>
                <div className="text-sm text-primary font-medium">
                  Naroz Shield Institute
                </div>
                <div className="text-xs text-muted-foreground">
                  Professional Training for High-Risk Environments
                </div>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-primary">
              Not Standard — Professional, International Training
            </h1>

            <p className="lead text-foreground">
              We prepare professionals to operate in environments where mistakes
              are not an option. Our programmes combine realistic scenario-based
              training, operational planning and accredited qualifications to
              build confident teams and individuals.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg border border-border bg-white hover:shadow-md transition transform hover:-translate-y-1">
                <h4 className="text-primary">Did You Know?</h4>
                <ul className="mt-2 text-sm text-muted-foreground space-y-2">
                  <li>
                    • Most incidents are caused by poor anticipation, not lack
                    of courage
                  </li>
                  <li>
                    • The best protection teams avoid danger long before it
                    becomes visible
                  </li>
                  <li>• Decision-making under stress is a trainable skill</li>
                </ul>
              </div>

              <div className="p-4 rounded-lg border border-border bg-white hover:shadow-md transition transform hover:-translate-y-1">
                <h4 className="text-primary">What Makes Us Different</h4>
                <ul className="mt-2 text-sm text-muted-foreground space-y-2">
                  <li>• Realistic professional environments</li>
                  <li>• Instructors with operational experience</li>
                  <li>
                    • Accredited qualifications and international standards
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mt-4">
              <LinkWrapper
                to="/courses"
                className="inline-flex items-center px-6 py-3 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Explore our programmes
              </LinkWrapper>
              <LinkWrapper
                to="/calendar"
                className="inline-flex items-center px-5 py-3 rounded-md border border-border text-sm hover:bg-gray-50 transition-colors"
              >
                Upcoming dates
              </LinkWrapper>
              <LinkWrapper
                to="/contact"
                className="inline-flex items-center px-5 py-3 rounded-md text-sm text-primary hover:underline transition-colors"
              >
                Contact / Book
              </LinkWrapper>
            </div>

            <div className="mt-8 text-sm text-muted-foreground max-w-2xl">
              <h5 className="font-semibold text-primary">
                Who Are Our Courses For?
              </h5>
              <div className="mt-2 grid sm:grid-cols-2 gap-2">
                <div>• Close Protection Operatives (CPO)</div>
                <div>• Team leaders and supervisors</div>
                <div>• Executives, diplomats, NGOs and journalists</div>
                <div>• Individuals preparing for international deployments</div>
              </div>
            </div>
          </div>

          <aside className="relative group">
            <div className="rounded-2xl overflow-hidden border border-border p-6 bg-white shadow-sm hover:shadow-xl transition-shadow duration-500">
              <div className="aspect-[4/3] w-full rounded-lg overflow-hidden relative">
                {/* Main Image */}
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fd93d9a0ec7824aa1ac4d890a1f90a2ec%2Fcc97a581c8bf44d68c6c55bc5cb2c41c?format=webp&width=800&height=1200"
                  alt="Professional Close Protection Agents"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />

                {/* Vignette Effect */}
                <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/20" />

                {/* Subtle Blue Tint */}
                <div className="absolute inset-0 bg-primary/5 mix-blend-overlay" />

                {/* Border Frame Effect */}
                <div className="absolute inset-0 border-2 border-white/10 pointer-events-none" />

                {/* Shine Effect on Hover */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -translate-x-full group-hover:translate-x-full" />

                {/* Text Badge */}
                <div className="absolute left-6 bottom-6 z-10">
                  <div className="px-3 py-2 rounded bg-white/95 backdrop-blur-sm text-sm text-primary shadow-lg">
                    More than training — an operational path
                  </div>
                </div>
              </div>

              {/* Decorative Corner Elements */}
              <div className="absolute top-2 left-2 w-12 h-12 border-t-2 border-l-2 border-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-2 right-2 w-12 h-12 border-b-2 border-r-2 border-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="p-3 bg-gray-50 rounded border border-border">
                  <div className="text-sm text-primary">Protection</div>
                  <div className="text-xs text-muted-foreground mt-2">
                    Close protection & protective operations
                  </div>
                </div>
                <div className="p-3 bg-gray-50 rounded border border-border">
                  <div className="text-sm text-primary">Tactical</div>
                  <div className="text-xs text-muted-foreground mt-2">
                    Driving, firearms & scenario work
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>

        {/* PROMO SECTION - March Special Offer */}
        <div className="mt-12 md:mt-24 -mx-4 md:-mx-6 lg:-mx-8 relative">
          <div className="relative overflow-hidden rounded-xl md:rounded-2xl bg-gradient-to-br from-amber-500 via-orange-500 to-red-500 shadow-2xl">
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 opacity-20">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.2) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.2) 0%, transparent 50%)",
                  animation: "pulse 3s ease-in-out infinite",
                }}
              />
            </div>

            {/* Sparkle Effects */}
            <div className="absolute top-8 right-12 w-3 h-3 bg-white rounded-full animate-ping opacity-75" />
            <div
              className="absolute top-16 right-24 w-2 h-2 bg-yellow-200 rounded-full animate-ping opacity-75"
              style={{ animationDelay: "0.5s" }}
            />
            <div
              className="absolute bottom-12 left-16 w-2 h-2 bg-white rounded-full animate-ping opacity-75"
              style={{ animationDelay: "1s" }}
            />

            <div className="relative px-4 py-8 sm:px-6 sm:py-10 md:px-12 md:py-16">
              <div className="max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-6 md:gap-8 items-center">
                  {/* Left Side - Promo Content */}
                  <div className="text-white">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-white/20 backdrop-blur-sm rounded-full mb-4 md:mb-6 border border-white/30">
                      <svg
                        className="w-4 h-4 md:w-5 md:h-5 text-yellow-300 animate-pulse"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="text-xs md:text-sm font-bold uppercase tracking-wider">
                        Limited Offer - March 2026
                      </span>
                    </div>

                    {/* Main Title */}
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-3 md:mb-4 leading-tight">
                      Full CPO Experience
                      <span className="block text-yellow-300">
                        All-Inclusive Package
                      </span>
                    </h2>

                    {/* Description */}
                    <p className="text-lg sm:text-xl md:text-2xl mb-6 md:mb-8 text-white/90 font-medium">
                      Complete Close Protection Level 3 training with everything
                      you need — in beautiful Tirana!
                    </p>

                    {/* What's Included */}
                    <div className="space-y-2 md:space-y-3 mb-6 md:mb-8">
                      <div className="flex items-center gap-2 md:gap-3">
                        <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                          <svg
                            className="w-4 h-4 md:w-5 md:h-5 text-white"
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
                        <span className="text-base md:text-lg font-medium">
                          CPO Level 3 Full Certification
                        </span>
                      </div>
                      <div className="flex items-center gap-2 md:gap-3">
                        <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                          <svg
                            className="w-4 h-4 md:w-5 md:h-5 text-white"
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
                        <span className="text-base md:text-lg font-medium">
                          Tactical Shooting Range Access
                        </span>
                      </div>
                      <div className="flex items-center gap-2 md:gap-3">
                        <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                          <svg
                            className="w-4 h-4 md:w-5 md:h-5 text-white"
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
                        <span className="text-base md:text-lg font-medium">
                          Full Board Accommodation
                        </span>
                      </div>
                      <div className="flex items-center gap-2 md:gap-3">
                        <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                          <svg
                            className="w-4 h-4 md:w-5 md:h-5 text-white"
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
                        <span className="text-base md:text-lg font-medium">
                          All Meals & Refreshments Included
                        </span>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <LinkWrapper
                      to="/contact?course=CPO%20Level%203%20Full%20Combo%20-%20March%202026"
                      className="inline-flex items-center justify-center gap-2 md:gap-3 px-6 py-3 md:px-8 md:py-4 bg-white text-orange-600 rounded-lg font-bold text-base md:text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl w-full sm:w-auto"
                    >
                      <span>Book Your Spot Now</span>
                      <svg
                        className="w-5 h-5 md:w-6 md:h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </LinkWrapper>
                  </div>

                  {/* Right Side - Price Card */}
                  <div className="relative mt-8 lg:mt-0">
                    <div className="bg-white rounded-xl md:rounded-2xl shadow-2xl p-5 md:p-8 transform lg:scale-105 hover:scale-110 transition-transform">
                      {/* Starburst Badge */}
                      <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6">
                        <div className="relative w-16 h-16 md:w-24 md:h-24 flex items-center justify-center">
                          <div
                            className="absolute inset-0 bg-yellow-400 rounded-full animate-spin"
                            style={{ animationDuration: "20s" }}
                          >
                            <div className="absolute inset-1 md:inset-2 bg-red-500 rounded-full" />
                            <div className="absolute inset-2 md:inset-4 bg-yellow-400 rounded-full" />
                          </div>
                          <div className="relative z-10 text-center">
                            <div className="text-white font-bold text-[10px] md:text-xs">
                              SAVE
                            </div>
                            <div className="text-white font-bold text-base md:text-lg">
                              30%
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="text-center mb-4 md:mb-6">
                        <div className="text-gray-500 text-xs md:text-sm uppercase tracking-wider mb-2">
                          Special Package Price
                        </div>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-2">
                          <span className="text-gray-400 text-xl md:text-2xl line-through">
                            €5,200
                          </span>
                          <div className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
                            €3,700
                          </div>
                        </div>
                        <div className="text-gray-600 mt-2 text-sm md:text-base">
                          Complete all-inclusive package
                        </div>
                      </div>

                      <div className="border-t border-gray-200 pt-4 md:pt-6 space-y-2 md:space-y-3">
                        <div className="flex justify-between text-xs md:text-sm">
                          <span className="text-gray-600">
                            Training Duration:
                          </span>
                          <span className="font-semibold text-gray-900">
                            5 Full Days
                          </span>
                        </div>
                        <div className="flex justify-between text-xs md:text-sm">
                          <span className="text-gray-600">Location:</span>
                          <span className="font-semibold text-gray-900">
                            Tirana, Albania
                          </span>
                        </div>
                        <div className="flex justify-between text-xs md:text-sm">
                          <span className="text-gray-600">Available:</span>
                          <span className="font-semibold text-primary">
                            March 2026
                          </span>
                        </div>
                        <div className="flex justify-between text-xs md:text-sm">
                          <span className="text-gray-600">
                            Spots Remaining:
                          </span>
                          <span className="font-semibold text-red-600">
                            Only 4 Left!
                          </span>
                        </div>
                      </div>

                      <div className="mt-4 md:mt-6 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg p-3 md:p-4 border border-orange-200">
                        <div className="flex items-start gap-2 md:gap-3">
                          <svg
                            className="w-4 h-4 md:w-5 md:h-5 text-orange-600 flex-shrink-0 mt-0.5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <div className="text-xs md:text-sm text-gray-700">
                            <strong className="text-orange-600">
                              Early Bird Bonus:
                            </strong>{" "}
                            Book before Feb 15 and receive FREE tactical
                            equipment kit worth €400!
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mt-24 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-3">
              What Our Graduates Say
            </h2>
            <p className="text-muted-foreground">
              Real experiences from professionals who completed our programmes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1: Diplomatic Protection */}
            <div className="bg-white border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-3 mb-4">
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
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-primary">James M.</h4>
                  <p className="text-xs text-muted-foreground">
                    Diplomatic Protection Operative
                  </p>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-sm text-muted-foreground italic mb-4">
                "The Diplomatic Protection Programme completely changed my
                approach to security work. The instructors' real-world
                experience was invaluable. I now work for an international
                protection team supporting diplomatic missions."
              </p>
              <div className="text-xs text-primary font-medium">
                Diplomatic Protection Programme
              </div>
            </div>

            {/* Testimonial 2: Tactical Firearms */}
            <div className="bg-white border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-3 mb-4">
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
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-primary">Sarah K.</h4>
                  <p className="text-xs text-muted-foreground">
                    Security Consultant
                  </p>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-sm text-muted-foreground italic mb-4">
                "Professional, disciplined and realistic. The Tactical Firearms
                training gave me the confidence and skills needed for high-risk
                assignments. The focus on legal compliance and ethical
                decision-making sets this course apart."
              </p>
              <div className="text-xs text-primary font-medium">
                Tactical Firearms Programme
              </div>
            </div>

            {/* Testimonial 3: Surveillance */}
            <div className="bg-white border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-3 mb-4">
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
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-primary">Marcus T.</h4>
                  <p className="text-xs text-muted-foreground">
                    Intelligence Analyst
                  </p>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-sm text-muted-foreground italic mb-4">
                "The Surveillance & Intelligence programme taught me to think
                like a professional operator. The counter-surveillance
                techniques and threat assessment skills are directly applicable
                to my current role in corporate security."
              </p>
              <div className="text-xs text-primary font-medium">
                Surveillance & Intelligence Programme
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
