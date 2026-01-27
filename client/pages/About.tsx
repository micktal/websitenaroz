import { Link as RouterLink } from "react-router-dom";

import SectionHeader from "@/components/SectionHeader";
import Illustration from "@/components/Illustration";
import Separator from "@/components/Separator";
import Card from "@/components/Card";
import { Link as RouterLink } from "react-router-dom";

export default function About() {
  return (
    <div className="max-w-4xl">
      <SectionHeader title="About Us" subtitle="Professional Preparation for Complex Environments" />

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Card>
            <p className="lead">Naroz Shield Institute is an international training organisation dedicated to the preparation of professionals operating in sensitive, complex and high-risk environments.</p>

            <Separator />

            <h3 className="text-xl font-semibold mt-2 section-header"><span className="marker" aria-hidden />Our Philosophy</h3>
            <p>At Naroz Shield Institute, we believe that security is built long before an incident occurs. True professional protection relies on anticipation rather than reaction, preparation rather than improvisation, discipline rather than bravado, and intelligence rather than force.</p>

            <Separator />

            <h3 className="text-lg font-semibold mt-4 section-header"><span className="marker" aria-hidden />A Professional, Non-Sensational Approach</h3>
            <p>We deliberately reject sensationalism and unrealistic portrayals of security work. Our training philosophy is based on professional realism, legal and ethical responsibility, operational discipline and respect for international standards.</p>

            <Separator />

            <h3 className="text-lg font-semibold mt-4 section-header"><span className="marker" aria-hidden />Our Areas of Expertise</h3>
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

            <Separator />

            <h3 className="text-lg font-semibold mt-4 section-header"><span className="marker" aria-hidden />Our Instructors</h3>
            <p>Our instructors come from professional backgrounds in close protection and high-risk security operations. They are selected not only for their experience, but for their ability to transmit knowledge clearly, teach sound decision-making, maintain professional standards and respect confidentiality and discretion.</p>

            <Separator />

            <h3 className="text-lg font-semibold mt-4 section-header"><span className="marker" aria-hidden />Standards, Certification &amp; Credibility</h3>
            <p>Naroz Shield Institute aligns its programmes with recognised regulatory and awarding frameworks, including qualifications awarded by Highfield Qualifications. This ensures our training meets regulated standards, is externally quality-assured and provides professional credibility to learners.</p>

            <Separator />

            <h3 className="text-lg font-semibold mt-4 section-header"><span className="marker" aria-hidden />Who We Train</h3>
            <p>Our programmes are designed for professionals who understand the responsibilities of security work, including Close Protection Operatives, team leaders, diplomatic and corporate personnel, NGO and media professionals operating abroad. Our training is selective and intended for those committed to professional development.</p>

            <Separator />

            <h3 className="text-lg font-semibold mt-4 section-header"><span className="marker" aria-hidden />Our Commitment</h3>
            <ul className="list-disc pl-5 text-muted-foreground space-y-1">
              <li>Ethical and lawful training</li>
              <li>Professional integrity</li>
              <li>Continuous improvement</li>
              <li>Respect for human life and responsibility</li>
            </ul>

            <p className="mt-4">Training does not end with certification. Our objective is to contribute to the development of responsible professionals, capable of adapting, thinking critically and operating with judgement in uncertain environments.</p>

            <div className="mt-6">
              <Link to="/contact" className="inline-flex items-center px-4 py-2 rounded-md bg-primary text-primary-foreground font-semibold">Contact us</Link>
            </div>
          </Card>
        </div>

        <aside>
          <Card className="p-6">
            <div className="w-40 mx-auto">
              <Illustration name="shield" className="w-full h-auto" />
            </div>
            <div className="mt-4 text-center">
              <div className="text-sm font-semibold">Professional Standards</div>
              <div className="text-xs text-muted-foreground mt-1">Accredited, quality assured training aligned to international frameworks.</div>
            </div>
          </Card>
        </aside>
      </div>

    </div>
  );
}
