import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";
import SessionInfo from "@/components/SessionInfo";

export default function CPOLevel3() {
  return (
    <div className="max-w-4xl">
      <SectionHeader title="Close Protection Level 3" subtitle="Certificate for Close Protection Operatives in the Private Security Industry" />

      <div className="mb-6 flex gap-3">
        <a href="/contact?course=Close%20Protection%20Level%203" className="inline-flex items-center px-4 py-2 rounded-md bg-[hsl(var(--accent))] text-[hsl(var(--accent-foreground))] font-semibold shadow">Book this course</a>
        <a href="/contact?course=Close%20Protection%20Level%203" className="ml-3 text-sm text-muted-foreground underline">Request brochure</a>
      </div>

      <SessionInfo />

      <Card>
        <section className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold">Programme Overview</h2>
            <p className="mt-2 text-muted-foreground">The Close Protection Level 3 Certificate is a professional qualification designed to prepare candidates for operational roles in close protection and protective security environments, in accordance with UK regulatory requirements and internationally recognised industry standards.
            </p>
            <p className="mt-2 text-muted-foreground">This programme develops the knowledge, skills and professional mindset required to operate safely, legally and effectively as a Close Protection Operative (CPO) in low to high-risk environments.</p>
            <p className="mt-2 text-muted-foreground">The qualification is aligned with SIA requirements and certified by Highfield Qualifications, ensuring international credibility and professional recognition.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Aims of the Qualification</h3>
            <ul className="mt-3 list-disc pl-5 text-muted-foreground space-y-2">
              <li>Understand the role, responsibilities and professional conduct of a Close Protection Operative</li>
              <li>Operate within legal, ethical and regulatory frameworks</li>
              <li>Conduct threat and risk assessments</li>
              <li>Plan and execute protective operations</li>
              <li>Apply surveillance and counter-surveillance techniques</li>
              <li>Manage movement, transport and secure environments</li>
              <li>Respond appropriately to incidents, emergencies and hostile situations</li>
              <li>Work effectively as part of a close protection team</li>
            </ul>
          </div>

          {/* Remaining content kept similar but inside card for consistent presentation */}

        </section>
      </Card>
    </div>
  );
}
