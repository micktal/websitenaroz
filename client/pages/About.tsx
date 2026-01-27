import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="max-w-4xl">
      <h1 className="text-3xl font-extrabold">About Us</h1>
      <h2 className="mt-2 text-lg font-semibold">Naroz Shield Institute</h2>
      <p className="mt-4 text-muted-foreground">Professional Preparation for Complex Environments</p>

      <section className="mt-6 space-y-4">
        <p>
          Naroz Shield Institute is an international training organisation dedicated to the preparation of professionals operating in sensitive, complex and high-risk environments.
        </p>

        <p>
          Our mission is simple: to develop competence, judgement and responsibility in individuals entrusted with the safety of others. We do not train for appearances. We train for real operational conditions.
        </p>

        <h3 className="text-xl font-semibold mt-4">Our Philosophy</h3>
        <p>
          At Naroz Shield Institute, we believe that security is built long before an incident occurs. True professional protection relies on anticipation rather than reaction, preparation rather than improvisation, discipline rather than bravado, and intelligence rather than force.
        </p>

        <h3 className="text-lg font-semibold mt-4">A Professional, Non-Sensational Approach</h3>
        <p>
          We deliberately reject sensationalism and unrealistic portrayals of security work. Our training philosophy is based on professional realism, legal and ethical responsibility, operational discipline and respect for international standards.
        </p>

        <h3 className="text-lg font-semibold mt-4">Our Areas of Expertise</h3>
        <ul className="list-disc pl-5 text-muted-foreground space-y-1">
          <li>Close Protection and Personal Security</li>
          <li>Diplomatic and Executive Protection</li>
          <li>Surveillance and Intelligence Awareness</li>
          <li>Protective Advance Work and Planning</li>
          <li>Tactical Driving</li>
          <li>Counter-Terrorism Awareness</li>
          <li>Medical Support for Protection Teams</li>
          <li>Team Leadership and Operations Management</li>
        </ul>

        <h3 className="text-lg font-semibold mt-4">Our Instructors</h3>
        <p>
          Our instructors come from professional backgrounds in close protection and high-risk security operations. They are selected not only for their experience, but for their ability to transmit knowledge clearly, teach sound decision-making, maintain professional standards and respect confidentiality and discretion.
        </p>

        <h3 className="text-lg font-semibold mt-4">Standards, Certification &amp; Credibility</h3>
        <p>
          Naroz Shield Institute aligns its programmes with recognised regulatory and awarding frameworks, including qualifications awarded by Highfield Qualifications. This ensures our training meets regulated standards, is externally quality-assured and provides professional credibility to learners.
        </p>

        <h3 className="text-lg font-semibold mt-4">Who We Train</h3>
        <p>
          Our programmes are designed for professionals who understand the responsibilities of security work, including Close Protection Operatives, team leaders, diplomatic and corporate personnel, NGO and media professionals operating abroad. Our training is selective and intended for those committed to professional development.
        </p>

        <h3 className="text-lg font-semibold mt-4">Our Commitment</h3>
        <ul className="list-disc pl-5 text-muted-foreground space-y-1">
          <li>Ethical and lawful training</li>
          <li>Professional integrity</li>
          <li>Continuous improvement</li>
          <li>Respect for human life and responsibility</li>
        </ul>

        <p className="mt-4">
          Training does not end with certification. Our objective is to contribute to the development of responsible professionals, capable of adapting, thinking critically and operating with judgement in uncertain environments.
        </p>

        <div className="mt-6">
          <Link to="/contact" className="inline-flex items-center px-4 py-2 rounded-md bg-primary text-primary-foreground font-semibold">Contact us</Link>
        </div>
      </section>
    </div>
  );
}
