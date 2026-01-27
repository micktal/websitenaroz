export default function TacticalDriving() {
  return (
    <div className="max-w-4xl">
      <header className="mb-6">
        <h1 className="text-3xl md:text-4xl font-extrabold">Tactical Driving Programme</h1>
        <p className="mt-2 text-muted-foreground">3-Day Professional Course</p>
        <div className="mt-4">
          <a href="/contact?course=Tactical%20Driving%20Programme" className="inline-flex items-center px-4 py-2 rounded-md bg-primary text-primary-foreground font-semibold shadow">Book this course</a>
          <a href="/contact?course=Tactical%20Driving%20Programme" className="ml-3 text-sm text-muted-foreground underline">Request brochure</a>
        </div>
      </header>

      <div>
        <SessionInfo />
      </div>

      <section className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold">Programme Overview</h2>
          <p className="mt-2 text-muted-foreground">The Tactical Driving Programme is a short, intensive course designed to develop defensive and protective driving skills for security professionals operating in sensitive or high-risk environments.</p>
          <p className="mt-2 text-muted-foreground">This programme focuses on vehicle control, situational awareness, risk avoidance and decision-making, rather than high-speed or competitive driving.</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Course Duration</h3>
          <ul className="mt-3 list-disc pl-5 text-muted-foreground space-y-2">
            <li>Total duration: 3 days</li>
            <li>Training format: Intensive, practical-focused</li>
            <li>Driving environment: Controlled training area and designated routes</li>
            <li>Firearms: Not included</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Target Audience</h3>
          <ul className="mt-3 list-disc pl-5 text-muted-foreground space-y-2">
            <li>Close Protection Operatives (CPO)</li>
            <li>Protective drivers</li>
            <li>Security professionals involved in mobile protection</li>
            <li>NGO and corporate security staff</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Learning Objectives</h3>
          <ul className="mt-3 list-disc pl-5 text-muted-foreground space-y-2">
            <li>Apply protective and defensive driving principles</li>
            <li>Maintain situational awareness while driving</li>
            <li>Manage risk during vehicle-based movements</li>
            <li>Execute safe embarkation and disembarkation procedures</li>
            <li>Respond appropriately to incidents during movement</li>
            <li>Operate vehicles in a professional protection context</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Programme Structure</h3>
          <div className="mt-3 grid gap-4">
            <div className="p-4 rounded-lg border border-border bg-card">Day 1 – Foundations of Tactical Driving: Principles, vehicle dynamics, situational awareness and safety.</div>
            <div className="p-4 rounded-lg border border-border bg-card">Day 2 – Defensive Driving & Incident Avoidance: Hazard perception, route selection and evasive techniques.</div>
            <div className="p-4 rounded-lg border border-border bg-card">Day 3 – Applied Driving Scenarios: Integrated driving exercises, protective movements and emergency response.</div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Assessment & Certification</h3>
          <p className="mt-2 text-muted-foreground">Continuous instructor evaluation with emphasis on safety, control and judgement. Participants who successfully complete the programme will receive a Certificate of Completion.</p>
        </div>

        <div className="rounded-md border border-border bg-card p-4">
          <h4 className="font-semibold">Important Notice</h4>
          <p className="mt-2 text-muted-foreground">This programme is professionally focused and not intended for competitive or high-speed driving. Training complies with local traffic laws and safety regulations.</p>
        </div>
      </section>
    </div>
  );
}
