export default function CounterTerrorism() {
  return (
    <div className="max-w-4xl">
      <header className="mb-6">
        <h1 className="text-3xl md:text-4xl font-extrabold">Counter-Terrorism Protection Programme</h1>
        <p className="mt-2 text-muted-foreground">5-Day Professional Course</p>
        <div className="mt-4">
          <a href="/contact?course=Counter-Terrorism%20Protection%20Programme" className="inline-flex items-center px-4 py-2 rounded-md bg-primary text-primary-foreground font-semibold shadow">Book this course</a>
          <a href="/contact?course=Counter-Terrorism%20Protection%20Programme" className="ml-3 text-sm text-muted-foreground underline">Request brochure</a>
        </div>
      </header>

      <section className="space-y-6">
        <div className="rounded-lg overflow-hidden shadow-lg">
          <img src="https://cdn.builder.io/api/v1/image/assets%2Fd93d9a0ec7824aa1ac4d890a1f90a2ec%2Fae38441ae9b64ce59168bdf6a109c117?format=webp&width=1200&height=800" alt="Controlled firearms training" className="w-full h-64 md:h-96 object-cover" />
        </div>

        <div>
          <h2 className="text-xl font-semibold">Programme Overview</h2>
          <p className="mt-2 text-muted-foreground">The Counter-Terrorism Protection Programme is an intensive professional course designed to prepare security personnel to operate safely and responsibly in environments exposed to terrorist threats.</p>
          <p className="mt-2 text-muted-foreground">The programme focuses on threat awareness, protective response, decision-making under stress and controlled firearms application, with approximately 70% of the training dedicated to firearms skills conducted in a regulated and supervised environment.</p>
          <p className="mt-2 text-muted-foreground">This course is defensive and protective in nature, intended to improve readiness, safety and professional judgement.</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Course Duration</h3>
          <ul className="mt-3 list-disc pl-5 text-muted-foreground space-y-2">
            <li>Total duration: 5 days</li>
            <li>Training intensity: High</li>
            <li>Firearms training: Approx. 70% of total programme</li>
            <li>Training environment: Classroom, controlled ranges and scenario areas</li>
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
                <li>Protective teams operating in high-risk areas</li>
                <li>Security personnel assigned to sensitive or symbolic locations</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">Entry Requirements</h4>
              <ul className="mt-2 list-disc pl-5 text-muted-foreground space-y-2">
                <li>Minimum age: 18</li>
                <li>Good physical and medical condition</li>
                <li>Prior security or protective experience recommended</li>
                <li>Firearms handling experience recommended</li>
                <li>Compliance with all legal requirements related to firearms training</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Learning Objectives</h3>
          <ul className="mt-3 list-disc pl-5 text-muted-foreground space-y-2">
            <li>Understand terrorist threat dynamics and attack indicators</li>
            <li>Apply protective response principles in high-stress situations</li>
            <li>Maintain situational awareness in hostile environments</li>
            <li>Operate firearms safely, legally and responsibly</li>
            <li>Make sound decisions under pressure</li>
            <li>Integrate individual skills into a protective team framework</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Programme Structure</h3>
          <div className="mt-3 grid gap-4">
            <div className="p-4 rounded-lg border border-border bg-card">Counter-Terrorism Fundamentals: Overview of contemporary terrorist threats, target selection, protective mindset, legal and ethical considerations.</div>
            <div className="p-4 rounded-lg border border-border bg-card">Firearms Fundamentals in Protective Context: Firearms safety, range discipline, handling, accuracy and stress management.</div>
            <div className="p-4 rounded-lg border border-border bg-card">Applied Firearms Skills: Controlled movement, use of cover, decision-making and scenario-based shooting exercises.</div>
            <div className="p-4 rounded-lg border border-border bg-card">Integrated Counter-Terrorism Response: Application of skills in protective scenarios, communication and transition between armed and unarmed response.</div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Training Methodology & Assessment</h3>
          <p className="mt-2 text-muted-foreground">Classroom instruction, controlled firearms training, scenario-based exercises and continuous safety monitoring. Participants are evaluated through continuous observation, firearms safety and scenario performance.</p>
        </div>

        <div className="rounded-md border border-border bg-card p-4">
          <h4 className="font-semibold">Important Notice</h4>
          <p className="mt-2 text-muted-foreground">This programme is selective and demanding. Participation is subject to candidate suitability and legal compliance. Firearms training is conducted only where legally authorised and in controlled environments.</p>
        </div>
      </section>
    </div>
  );
}
