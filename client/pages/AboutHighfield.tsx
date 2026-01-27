import { Link } from "react-router-dom";

import SectionHeader from "@/components/SectionHeader";

export default function AboutHighfield() {
  return (
    <div className="max-w-4xl card-elevated">
      <SectionHeader title="About Highfield Qualifications" subtitle="An International Awarding Body for Professional Excellence" />

      <section className="mt-2 space-y-4">
        <p>
          Highfield Qualifications is a UK-based awarding organisation recognised internationally for the development and certification of regulated professional qualifications.
        </p>

        <p>
          Highfield works with approved training centres across the world to ensure that learners receive consistent, high-quality training aligned with industry and regulatory standards.
        </p>

        <h3 className="text-xl font-semibold mt-4 section-header"><span className="marker" aria-hidden />What Is an Awarding Organisation?</h3>
        <p>
          An awarding organisation is responsible for designing qualification frameworks, defining learning outcomes and assessment criteria, ensuring qualifications meet regulated standards, monitoring training centres through quality assurance and audits, and issuing recognised certificates and diplomas.
        </p>

        <p>Highfield does not deliver training directly. Instead, it ensures that training delivered by approved centres meets defined, audited and regulated requirements.</p>

        <h3 className="text-lg font-semibold mt-4">International Recognition &amp; Credibility</h3>
        <p>
          Highfield qualifications are widely recognised across multiple sectors, including security and close protection, first aid and emergency care, health &amp; safety, hospitality and professional services. Because Highfield qualifications are regulated and externally quality-assured, they offer learners professional credibility and international portability.
        </p>

        <h3 className="text-lg font-semibold mt-4">Highfield and the Security Industry</h3>
        <p>
          Within the private security sector, Highfield awards qualifications that are aligned with UK regulatory requirements, accepted by licensing authorities such as the Security Industry Authority (SIA), and recognised by employers operating in international and high-risk environments.
        </p>

        <h3 className="text-lg font-semibold mt-4">Why Highfield Qualifications Matter</h3>
        <p>
          Choosing a Highfield-awarded qualification ensures that training meets regulated educational standards, assessments are conducted fairly and consistently, certificates are externally validated, learners are protected from unregulated or misleading training, and employers can trust the competence of certified professionals.
        </p>

        <h3 className="text-lg font-semibold mt-4">Quality Assurance &amp; Compliance</h3>
        <p>
          Highfield maintains quality through centre approval processes, assessor and internal quality assurer (IQA) requirements, external quality assurance (EQA), and ongoing monitoring and review. This ensures that every learner is assessed against the same standards, regardless of where the training is delivered.
        </p>

        <h3 className="text-lg font-semibold mt-4">Naroz Shield Institute &amp; Highfield Alignment</h3>
        <p>
          Naroz Shield Institute delivers training programmes aligned with Highfield qualifications, ensuring that learners benefit from regulated qualification frameworks, transparent assessment criteria, internationally recognised certification and professional credibility within the security industry.
        </p>

        <h3 className="text-lg font-semibold mt-4">A Commitment to Professional Standards</h3>
        <ul className="list-disc pl-5 text-muted-foreground space-y-1">
          <li>Legal compliance</li>
          <li>Professional accountability</li>
          <li>Ethical conduct</li>
          <li>Continuous professional development</li>
        </ul>

        <p className="mt-4">Highfield qualifications are an essential element for individuals seeking to operate responsibly and legitimately within regulated industries.</p>

        <h3 className="text-lg font-semibold mt-4">Important Notice</h3>
        <p>
          Highfield Qualifications is an independent awarding organisation. Certification is issued following successful assessment in accordance with Highfield requirements. Naroz Shield Institute does not issue Highfield certificates independently and complies fully with awarding body standards.
        </p>

        <div className="mt-6">
          <Link to="/contact" className="inline-flex items-center px-4 py-2 rounded-md bg-primary text-primary-foreground font-semibold">Contact us</Link>
        </div>
      </section>
    </div>
  );
}
