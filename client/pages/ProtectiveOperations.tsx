import SessionInfo from "@/components/SessionInfo";

export default function ProtectiveOperations() {
  return (
    <div className="max-w-4xl">
      <header className="mb-6">
        <h1 className="text-3xl md:text-4xl font-extrabold">Protective Operations Management</h1>
        <p className="mt-2 text-muted-foreground">Team Leader & Supervisor Programme – General Syllabus</p>
        <div className="mt-4">
          <a href="/contact?course=Protective%20Operations%20Management" className="inline-flex items-center px-4 py-2 rounded-md bg-primary text-primary-foreground font-semibold shadow">Book this course</a>
          <a href="/contact?course=Protective%20Operations%20Management" className="ml-3 text-sm text-muted-foreground underline">Request brochure</a>
        </div>
      </header>

      <section className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold">Programme Overview</h2>
          <p className="mt-2 text-muted-foreground">The Protective Operations Management – Team Leader Programme is designed to prepare experienced security and close protection professionals to lead, manage and coordinate protection teams in operational environments.</p>
          <p className="mt-2 text-muted-foreground">This course focuses on leadership, decision-making, command responsibility and operational management, bridging the gap between individual operator skills and team-level command and supervision.</p>
          <p className="mt-2 text-muted-foreground">The programme is non-armed and centred on professional judgement, coordination and accountability.</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Target Audience</h3>
          <ul className="mt-3 list-disc pl-5 text-muted-foreground space-y-2">
            <li>Close Protection Operatives (CPO)</li>
            <li>Protective team leaders and supervisors</li>
            <li>Senior security operatives preparing for leadership roles</li>
            <li>Diplomatic, corporate and NGO security personnel</li>
            <li>Professionals responsible for planning and supervising protection tasks</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Learning Objectives</h3>
          <ul className="mt-3 list-disc pl-5 text-muted-foreground space-y-2">
            <li>Understand the role and responsibilities of a Team Leader</li>
            <li>Lead and coordinate protection teams effectively</li>
            <li>Make sound decisions under operational pressure</li>
            <li>Manage planning, briefings and task allocation</li>
            <li>Maintain professional standards and discipline</li>
            <li>Communicate clearly with stakeholders and command structures</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Core Topics Covered</h3>
          <div className="mt-3 grid gap-4">
            <div className="p-4 rounded-lg border border-border bg-card">Role of the Protective Team Leader: leadership responsibilities, accountability and professional conduct.</div>
            <div className="p-4 rounded-lg border border-border bg-card">Command, Control &amp; Coordination: command structures, task allocation and information flow.</div>
            <div className="p-4 rounded-lg border border-border bg-card">Leadership &amp; Human Factors: managing stress, team dynamics, cohesion and conflict management.</div>
            <div className="p-4 rounded-lg border border-border bg-card">Operational Planning &amp; Supervision: translating strategy into plans, supervising advance work and adapting to change.</div>
            <div className="p-4 rounded-lg border border-border bg-card">Decision-Making Under Pressure: models, risk-based judgement and balancing safety with mission requirements.</div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Training Methodology & Assessment</h3>
          <p className="mt-2 text-muted-foreground">Classroom instruction, case studies, practical leadership exercises and continuous observation. Participants are evaluated on planning, decision-making, supervision and professional conduct.</p>
        </div>

        <div className="rounded-md border border-border bg-card p-4">
          <h4 className="font-semibold">Important Notice</h4>
          <p className="mt-2 text-muted-foreground">This programme is designed for experienced professionals. Selection may be subject to prior experience and suitability review.</p>
        </div>
      </section>
    </div>
  );
}
