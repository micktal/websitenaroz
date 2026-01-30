import LinkWrapper from "@/components/LinkWrapper";
import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";

export default function AboutHighfield() {
  return (
    <div className="max-w-6xl mx-auto">
      {/* Hero Section */}
      <div className="mb-16">
        <div className="flex justify-center mb-8">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2Fd93d9a0ec7824aa1ac4d890a1f90a2ec%2F5ff0bed850854dc2ac2c034f77766073?format=webp&width=800&height=1200"
            alt="Highfield Qualifications Approved Centre"
            className="h-24 w-auto"
          />
        </div>
        <SectionHeader title="About Highfield Qualifications" subtitle="An International Awarding Body for Professional Excellence" />
        <p className="lead mt-6 text-center mx-auto max-w-3xl">
          Highfield Qualifications is a UK-based awarding organisation recognised internationally for the development and certification of regulated professional qualifications.
        </p>
      </div>

      {/* What is an Awarding Organisation */}
      <div className="mb-12">
        <Card className="p-8">
          <div className="flex items-start gap-4">
            <div className="w-1 h-16 bg-primary rounded-full flex-shrink-0" />
            <div>
              <h2 className="text-2xl mb-4 text-primary">What Is an Awarding Organisation?</h2>
              <p className="text-lg leading-relaxed mb-4">
                An awarding organisation is responsible for designing qualification frameworks, defining learning outcomes and assessment criteria, ensuring qualifications meet regulated standards, monitoring training centres through quality assurance and audits, and issuing recognised certificates and diplomas.
              </p>
              <p className="text-muted-foreground">
                Highfield does not deliver training directly. Instead, it ensures that training delivered by approved centres meets defined, audited and regulated requirements.
              </p>
            </div>
          </div>
        </Card>
      </div>

      {/* Two Column Grid: Recognition + Security Industry */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <Card className="p-6 bg-gray-50">
          <h3 className="text-xl mb-3 text-primary">International Recognition &amp; Credibility</h3>
          <p className="text-muted-foreground mb-4">
            Highfield qualifications are widely recognised across multiple sectors, including:
          </p>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-primary">•</span>
              <span>Security and close protection</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">•</span>
              <span>First aid and emergency care</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">•</span>
              <span>Health &amp; safety</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">•</span>
              <span>Hospitality and professional services</span>
            </li>
          </ul>
          <p className="text-sm text-muted-foreground mt-4">
            Because Highfield qualifications are regulated and externally quality-assured, they offer learners professional credibility and international portability.
          </p>
        </Card>

        <Card className="p-6 bg-white">
          <h3 className="text-xl mb-3 text-primary">Highfield and the Security Industry</h3>
          <p className="text-muted-foreground">
            Within the private security sector, Highfield awards qualifications that are:
          </p>
          <ul className="space-y-2 text-sm mt-4">
            <li className="flex items-start gap-2">
              <span className="text-primary">✓</span>
              <span>Aligned with UK regulatory requirements</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">✓</span>
              <span>Accepted by licensing authorities such as the Security Industry Authority (SIA)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">✓</span>
              <span>Recognised by employers operating in international and high-risk environments</span>
            </li>
          </ul>
        </Card>
      </div>

      {/* Why Highfield Qualifications Matter */}
      <div className="mb-12">
        <h2 className="text-2xl mb-6 text-primary text-center">Why Highfield Qualifications Matter</h2>
        <p className="text-center text-muted-foreground mb-8 max-w-3xl mx-auto">
          Choosing a Highfield-awarded qualification ensures:
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {[
            "Training meets regulated educational standards",
            "Assessments are conducted fairly and consistently",
            "Certificates are externally validated",
            "Learners are protected from unregulated or misleading training",
            "Employers can trust the competence of certified professionals"
          ].map((item, idx) => (
            <Card key={idx} className="p-4 bg-white hover:shadow-md transition-shadow">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                <p className="text-sm text-foreground">{item}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Quality Assurance */}
      <div className="mb-12">
        <Card className="p-8 bg-primary text-primary-foreground">
          <h2 className="text-2xl mb-4">Quality Assurance &amp; Compliance</h2>
          <p className="text-lg opacity-95 mb-6">
            Highfield maintains quality through:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <span className="text-2xl">✓</span>
              <div>
                <h4 className="font-semibold mb-1">Centre Approval Processes</h4>
                <p className="text-sm opacity-90">Rigorous approval and ongoing monitoring</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">✓</span>
              <div>
                <h4 className="font-semibold mb-1">Assessor Requirements</h4>
                <p className="text-sm opacity-90">Internal quality assurer (IQA) standards</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">✓</span>
              <div>
                <h4 className="font-semibold mb-1">External Quality Assurance (EQA)</h4>
                <p className="text-sm opacity-90">Independent verification and validation</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">✓</span>
              <div>
                <h4 className="font-semibold mb-1">Ongoing Monitoring</h4>
                <p className="text-sm opacity-90">Continuous review and improvement</p>
              </div>
            </div>
          </div>
          <p className="text-sm opacity-90 mt-6">
            This ensures that every learner is assessed against the same standards, regardless of where the training is delivered.
          </p>
        </Card>
      </div>

      {/* Naroz Shield & Highfield + Commitment */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <Card className="p-6">
          <h3 className="text-xl mb-3 text-primary">Naroz Shield Institute &amp; Highfield Alignment</h3>
          <p className="text-muted-foreground mb-4">
            Naroz Shield Institute delivers training programmes aligned with Highfield qualifications, ensuring that learners benefit from:
          </p>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-primary">•</span>
              <span>Regulated qualification frameworks</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">•</span>
              <span>Transparent assessment criteria</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">•</span>
              <span>Internationally recognised certification</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">•</span>
              <span>Professional credibility within the security industry</span>
            </li>
          </ul>
        </Card>

        <Card className="p-6 bg-gray-50">
          <h3 className="text-xl mb-3 text-primary">A Commitment to Professional Standards</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-primary">✓</span>
              <span className="font-medium">Legal compliance</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">✓</span>
              <span className="font-medium">Professional accountability</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">✓</span>
              <span className="font-medium">Ethical conduct</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">✓</span>
              <span className="font-medium">Continuous professional development</span>
            </li>
          </ul>
          <p className="text-sm text-muted-foreground mt-4">
            Highfield qualifications are an essential element for individuals seeking to operate responsibly and legitimately within regulated industries.
          </p>
        </Card>
      </div>

      {/* Important Notice + CTA */}
      <div className="mb-12">
        <Card className="p-8 border-2 border-primary/20">
          <h3 className="text-xl mb-3 text-primary">Important Notice</h3>
          <p className="text-foreground mb-6">
            Highfield Qualifications is an independent awarding organisation. Certification is issued following successful assessment in accordance with Highfield requirements. Naroz Shield Institute does not issue Highfield certificates independently and complies fully with awarding body standards.
          </p>
          <div className="text-center">
            <LinkWrapper 
              to="/contact" 
              className="inline-flex items-center px-6 py-3 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-lg"
            >
              Contact Us
            </LinkWrapper>
          </div>
        </Card>
      </div>
    </div>
  );
}
