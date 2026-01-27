export default function TacticalFirearms() {
  return (
    <div className="max-w-4xl">
      <header className="mb-6">
        <h1 className="text-3xl md:text-4xl font-extrabold">Tactical Firearms Programme</h1>
        <p className="mt-2 text-muted-foreground">5-Day Professional Course</p>
        <div className="mt-4">
          <a href="/contact?course=Tactical%20Firearms%20Programme" className="inline-flex items-center px-4 py-2 rounded-md bg-primary text-primary-foreground font-semibold shadow">Book this course</a>
          <a href="/contact?course=Tactical%20Firearms%20Programme" className="ml-3 text-sm text-muted-foreground underline">Request brochure</a>
        </div>
      </header>

      <section className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold">Programme Overview</h2>
          <p className="mt-2 text-muted-foreground">The Tactical Firearms Programme is a professional firearms training course designed to develop safe, disciplined and effective weapon handling within a protective and security context.</p>
          <p className="mt-2 text-muted-foreground">This programme focuses on responsible firearms use, decision-making under stress and integration into protection operations, rather than competitive shooting or offensive tactics.</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Course Duration</h3>
          <ul className="mt-3 list-disc pl-5 text-muted-foreground space-y-2">
            <li>Total duration: 5 days</li>
            <li>Training intensity: High</li>
            <li>Firearms training: Primary focus</li>
            <li>Training environment: Approved ranges and controlled scenario areas</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Target Audience & Entry Requirements</h3>
          <div className="mt-3 grid gap-4 sm:grid-cols-2">
            <div>
              <h4 className="font-semibold">Target Audience</h4>
              <ul className="mt-2 list-disc pl-5 text-muted-foreground space-y-2">
                <li>Close Protection Operatives (CPO)</li>
                <li>Armed security professionals (where legally authorised)</li>
                <li>Protective team members requiring firearms competency</li>
                <li>Professionals preparing for armed protective roles</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">Entry Requirements</h4>
              <ul className="mt-2 list-disc pl-5 text-muted-foreground space-y-2">
                <li>Minimum age: 18</li>
                <li>Good physical and medical condition</li>
                <li>Prior firearms experience recommended</li>
                <li>Compliance with all legal requirements related to firearms training</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Learning Objectives</h3>
          <ul className="mt-3 list-disc pl-5 text-muted-foreground space-y-2">
            <li>Handle firearms safely, legally and responsibly</li>
            <li>Apply marksmanship fundamentals under operational stress</li>
            <li>Maintain situational awareness while armed</li>
            <li>Make appropriate use-of-force decisions</li>
            <li>Integrate firearms skills into protective scenarios</li>
            <li>Operate effectively as part of a protection team</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Core Topics Covered</h3>
          <div className="mt-3 grid gap-4">
            <div className="p-4 rounded-lg border border-border bg-card">Firearms Safety &amp; Legal Framework: safety rules, range discipline, legal responsibilities and use-of-force principles.</div>
            <div className="p-4 rounded-lg border border-border bg-card">Weapon Handling Fundamentals: safe manipulation, loading/unloading, readiness states, grip and stance.</div>
            <div className="p-4 rounded-lg border border-border bg-card">Marksmanship &amp; Control: accuracy fundamentals, recoil management, consistency and shooting under controlled stress.</div>
            <div className="p-4 rounded-lg border border-border bg-card">Movement &amp; Positioning: safe movement while armed, use of cover, positioning and team coordination.</div>
            <div className="p-4 rounded-lg border border-border bg-card">Scenario-Based Application: controlled protective scenarios, transitions between armed and unarmed response and after-action review.</div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Training Methodology & Assessment</h3>
          <p className="mt-2 text-muted-foreground">Instructor-led classroom instruction, supervised range training, practical drills and scenario-based exercises. Continuous safety monitoring and assessment of practical skills and professional judgement.</p>
        </div>

        <div className="rounded-md border border-border bg-card p-4">
          <h4 className="font-semibold">Important Notice</h4>
          <p className="mt-2 text-muted-foreground">This programme is delivered only in jurisdictions where firearms training is legally authorised. Participation is subject to candidate suitability and legal compliance.</p>
        </div>
      </section>
    </div>
  );
}
