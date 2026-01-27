export default function DiplomaticProtection() {
  return (
    <div className="max-w-4xl">
      <header className="mb-6">
        <h1 className="text-3xl md:text-4xl font-extrabold">Diplomatic Protection Programme</h1>
        <p className="mt-2 text-muted-foreground">7-Day Intensive Course</p>
        <div className="mt-4">
          <a href="/contact?course=Diplomatic%20Protection%20Programme" className="inline-flex items-center px-4 py-2 rounded-md bg-primary text-primary-foreground font-semibold shadow">Book this course</a>
          <a href="/contact?course=Diplomatic%20Protection%20Programme" className="ml-3 text-sm text-muted-foreground underline">Request brochure</a>
        </div>
      </header>

      <div>
        <SessionInfo />
      </div>

      <section className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold">Programme Overview</h2>
          <p className="mt-2 text-muted-foreground">The Diplomatic Protection Programme is a specialised, intensive training course designed to prepare security professionals for protective duties involving diplomats, international officials, government representatives and high-profile individuals operating in sensitive or hostile environments.</p>
          <p className="mt-2 text-muted-foreground">This programme focuses on protective planning, operational coordination, threat mitigation and professional conduct, with a controlled and realistic integration of tactical shooting, representing 20% of the total training time.</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Course Duration</h3>
          <ul className="mt-3 list-disc pl-5 text-muted-foreground space-y-2">
            <li>Total duration: 7 days</li>
            <li>Training intensity: Full-time, immersive</li>
            <li>Practical training: High</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Target Audience & Entry Requirements</h3>
          <div className="mt-3 grid gap-4 sm:grid-cols-2">
            <div>
              <h4 className="font-semibold">Target Audience</h4>
              <ul className="mt-2 list-disc pl-5 text-muted-foreground space-y-2">
                <li>Close Protection Operatives (CPO)</li>
                <li>Protective Security Officers</li>
                <li>Security professionals supporting diplomatic missions</li>
                <li>NGO / international organisation security staff</li>
                <li>Government or private sector protection teams</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">Entry Requirements</h4>
              <ul className="mt-2 list-disc pl-5 text-muted-foreground space-y-2">
                <li>Minimum age: 18</li>
                <li>Good physical and medical condition</li>
                <li>Prior experience in security or protective roles recommended</li>
                <li>Professional attitude and discipline required</li>
                <li>Firearms experience recommended (where legally applicable)</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Learning Objectives</h3>
          <ul className="mt-3 list-disc pl-5 text-muted-foreground space-y-2">
            <li>Understand the specificities of diplomatic protection</li>
            <li>Operate within legal, ethical and political constraints</li>
            <li>Conduct threat and risk assessments in diplomatic contexts</li>
            <li>Plan and execute protective movements and visits</li>
            <li>Coordinate with local authorities and host nation security</li>
            <li>Apply tactical decision-making under pressure</li>
            <li>Safely and responsibly handle firearms in a protective role</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Programme Structure — 7 Days</h3>
          <div className="mt-3 grid gap-4">
            <div className="p-4 rounded-lg border border-border bg-card">Diplomatic Protection Fundamentals: Principles of diplomatic protection, roles and responsibilities, diplomatic protocols, legal frameworks and professional conduct.</div>
            <div className="p-4 rounded-lg border border-border bg-card">Threat, Risk & Intelligence Awareness: Threat actors, risk assessment methodology, vulnerability analysis and intelligence handling.</div>
            <div className="p-4 rounded-lg border border-border bg-card">Operational Planning & Advance Work: Protective mission planning, reconnaissance, route planning and coordination.</div>
            <div className="p-4 rounded-lg border border-border bg-card">Movement, Transport & Protective Formations: Protective movement on foot and vehicle, convoy theory and emergency actions.</div>
            <div className="p-4 rounded-lg border border-border bg-card">Tactical Shooting (20%): Firearms safety, handling, marksmanship fundamentals and scenario-based shooting exercises.</div>
            <div className="p-4 rounded-lg border border-border bg-card">Integrated Scenarios & Final Exercises: Full mission simulations, communication under pressure and after-action reviews.</div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Assessment & Certification</h3>
          <p className="mt-2 text-muted-foreground">Participants are evaluated through continuous instructor observation, practical performance during scenarios, and professional behaviour. Successful participants will receive a Certificate of Completion.</p>
        </div>

        <div className="rounded-md border border-border bg-card p-4">
          <h4 className="font-semibold">Important Notice</h4>
          <p className="mt-2 text-muted-foreground">This programme is selective and demanding. Participation is subject to profile review and suitability assessment.</p>
        </div>
      </section>
    </div>
  );
}
