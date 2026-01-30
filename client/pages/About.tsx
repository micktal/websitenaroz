import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";
import LinkWrapper from "@/components/LinkWrapper";

export default function About() {
  return (
    <div className="max-w-6xl mx-auto">
      {/* Hero Section */}
      <div className="mb-16">
        <SectionHeader
          title="About Us"
          subtitle="Professional Preparation for Complex Environments"
        />
        <p className="lead mt-6 text-center mx-auto max-w-3xl">
          Naroz Shield Institute is an international training organisation
          dedicated to the preparation of professionals operating in sensitive,
          complex and high-risk environments.
        </p>
      </div>

      {/* Philosophy Section */}
      <div className="mb-12">
        <Card className="p-8">
          <div className="flex items-start gap-4">
            <div className="w-1 h-16 bg-primary rounded-full flex-shrink-0" />
            <div>
              <h2 className="text-2xl mb-4 text-primary">Our Philosophy</h2>
              <p className="text-lg leading-relaxed">
                At Naroz Shield Institute, we believe that security is built
                long before an incident occurs. True professional protection
                relies on{" "}
                <strong className="text-primary font-semibold">
                  anticipation
                </strong>{" "}
                rather than reaction,{" "}
                <strong className="text-primary font-semibold">
                  preparation
                </strong>{" "}
                rather than improvisation,{" "}
                <strong className="text-primary font-semibold">
                  discipline
                </strong>{" "}
                rather than bravado, and{" "}
                <strong className="text-primary font-semibold">
                  intelligence
                </strong>{" "}
                rather than force.
              </p>
            </div>
          </div>
        </Card>
      </div>

      {/* Two Column Grid: Approach + Expertise */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <Card className="p-6 bg-gray-50">
          <h3 className="text-xl mb-3 text-primary">
            A Professional, Non-Sensational Approach
          </h3>
          <p className="text-muted-foreground">
            We deliberately reject sensationalism and unrealistic portrayals of
            security work. Our training philosophy is based on professional
            realism, legal and ethical responsibility, operational discipline
            and respect for international standards.
          </p>
        </Card>

        <Card className="p-6 bg-white">
          <h3 className="text-xl mb-3 text-primary">Our Instructors</h3>
          <p className="text-muted-foreground">
            Our instructors come from professional backgrounds in close
            protection and high-risk security operations. They are selected for
            their experience, ability to transmit knowledge clearly, teach sound
            decision-making, and maintain professional standards.
          </p>
        </Card>
      </div>

      {/* Areas of Expertise */}
      <div className="mb-12">
        <h2 className="text-2xl mb-6 text-primary text-center">
          Our Areas of Expertise
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            "Close Protection and Personal Security",
            "Diplomatic and Executive Protection",
            "Surveillance and Intelligence Awareness",
            "Protective Advance Work and Planning",
            "Tactical Driving",
            "Counter-Terrorism Awareness",
            "Medical Support for Protection Teams",
            "Team Leadership and Operations Management",
          ].map((item, idx) => (
            <Card
              key={idx}
              className="p-4 bg-white hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                <p className="text-sm text-foreground">{item}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Standards & Certification */}
      <div className="mb-12">
        <Card className="p-8 bg-primary text-primary-foreground">
          <h2 className="text-2xl mb-4">
            Standards, Certification &amp; Credibility
          </h2>
          <p className="text-lg opacity-95">
            Naroz Shield Institute aligns its programmes with recognised
            regulatory and awarding frameworks, including qualifications awarded
            by <strong>Highfield Qualifications</strong>. This ensures our
            training meets regulated standards, is externally quality-assured
            and provides professional credibility to learners.
          </p>
        </Card>
      </div>

      {/* Who We Train + Commitment */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <Card className="p-6">
          <h3 className="text-xl mb-3 text-primary">Who We Train</h3>
          <p className="text-muted-foreground mb-4">
            Our programmes are designed for professionals who understand the
            responsibilities of security work:
          </p>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-primary">•</span>
              <span>Close Protection Operatives</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">•</span>
              <span>Team leaders and supervisors</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">•</span>
              <span>Diplomatic and corporate personnel</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">•</span>
              <span>NGO and media professionals operating abroad</span>
            </li>
          </ul>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl mb-3 text-primary">Our Commitment</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-primary">✓</span>
              <span className="font-medium">Ethical and lawful training</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">✓</span>
              <span className="font-medium">Professional integrity</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">✓</span>
              <span className="font-medium">Continuous improvement</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">✓</span>
              <span className="font-medium">
                Respect for human life and responsibility
              </span>
            </li>
          </ul>
        </Card>
      </div>

      {/* Meet Our Instructors Section */}
      <div className="mb-16">
        <h2 className="text-2xl mb-6 text-primary text-center">
          Meet Our Instructors
        </h2>
        <p className="text-center text-muted-foreground mb-8 max-w-3xl mx-auto">
          Experienced professionals with operational backgrounds in high-risk
          security environments
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Instructor 1: Anti-Terrorism */}
          <div className="bg-white border border-border rounded-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-8 text-center">
              <div className="w-32 h-32 mx-auto rounded-full bg-primary/20 border-4 border-white shadow-lg flex items-center justify-center">
                <svg
                  className="w-16 h-16 text-primary"
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
              <h3 className="text-xl font-semibold text-primary mt-4">
                Colonel David Harper
              </h3>
              <p className="text-sm text-muted-foreground">
                Anti-Terrorism Specialist
              </p>
            </div>
            <div className="p-6">
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-primary mb-2">
                  Background
                </h4>
                <p className="text-sm text-muted-foreground">
                  22 years serving in military counter-terrorism units. Former
                  advisor to international security agencies on threat
                  assessment and preventive operations.
                </p>
              </div>
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-primary mb-2">
                  Expertise
                </h4>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full">
                    Threat Assessment
                  </span>
                  <span className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full">
                    Crisis Management
                  </span>
                  <span className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full">
                    Tactical Planning
                  </span>
                  <span className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full">
                    Protective Intelligence
                  </span>
                </div>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-primary mb-2">
                  Teaches
                </h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Counter-Terrorism Protection Programme</li>
                  <li>• Hostile Environment Awareness Training</li>
                  <li>• Protective Intelligence & Advance Work</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Instructor 2: Counter-Terrorism */}
          <div className="bg-white border border-border rounded-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-8 text-center">
              <div className="w-32 h-32 mx-auto rounded-full bg-primary/20 border-4 border-white shadow-lg flex items-center justify-center">
                <svg
                  className="w-16 h-16 text-primary"
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
              <h3 className="text-xl font-semibold text-primary mt-4">
                Commander Sarah Mitchell
              </h3>
              <p className="text-sm text-muted-foreground">
                Counter-Terrorism Operations Specialist
              </p>
            </div>
            <div className="p-6">
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-primary mb-2">
                  Background
                </h4>
                <p className="text-sm text-muted-foreground">
                  18 years operational experience in counter-terrorism and
                  special operations. Led protective security teams in hostile
                  environments across three continents.
                </p>
              </div>
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-primary mb-2">
                  Expertise
                </h4>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full">
                    Close Protection
                  </span>
                  <span className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full">
                    Surveillance Detection
                  </span>
                  <span className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full">
                    Tactical Response
                  </span>
                  <span className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full">
                    Team Leadership
                  </span>
                </div>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-primary mb-2">
                  Teaches
                </h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Close Protection Level 3</li>
                  <li>• Diplomatic Protection Programme</li>
                  <li>• Surveillance & Intelligence Programme</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Closing Statement + CTA */}
      <div className="text-center mb-12">
        <Card className="p-8 bg-gray-50">
          <p className="text-lg text-foreground max-w-3xl mx-auto mb-6">
            Training does not end with certification. Our objective is to
            contribute to the development of responsible professionals, capable
            of adapting, thinking critically and operating with judgement in
            uncertain environments.
          </p>
          <LinkWrapper
            to="/contact"
            className="inline-flex items-center px-6 py-3 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-lg"
          >
            Get in Touch
          </LinkWrapper>
        </Card>
      </div>
    </div>
  );
}
