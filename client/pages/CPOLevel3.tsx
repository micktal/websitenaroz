export default function CPOLevel3() {
  return (
    <div className="max-w-4xl">
      <header className="mb-6">
        <h1 className="text-3xl md:text-4xl font-extrabold">Close Protection Level 3</h1>
        <p className="mt-2 text-muted-foreground">Certificate for Close Protection Operatives in the Private Security Industry</p>
        <div className="mt-4">
          <a href="/contact?course=Close%20Protection%20Level%203" className="inline-flex items-center px-4 py-2 rounded-md bg-primary text-primary-foreground font-semibold shadow">Book this course</a>
          <a href="/contact?course=Close%20Protection%20Level%203" className="ml-3 text-sm text-muted-foreground underline">Request brochure</a>
        </div>
      </header>

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

        <div>
          <h3 className="text-lg font-semibold">Target Audience & Entry Requirements</h3>
          <div className="mt-3 grid gap-4 sm:grid-cols-2">
            <div>
              <h4 className="font-semibold">Target Audience</h4>
              <ul className="mt-2 list-disc pl-5 text-muted-foreground space-y-2">
                <li>Security professionals seeking to specialise in close protection</li>
                <li>Individuals pursuing a career as a Close Protection Operative (CPO)</li>
                <li>Personnel working in high-risk or sensitive environments</li>
                <li>Professionals supporting diplomats, executives, journalists or NGOs</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">Entry Requirements</h4>
              <ul className="mt-2 list-disc pl-5 text-muted-foreground space-y-2">
                <li>Minimum age: 18</li>
                <li>Good physical and medical condition</li>
                <li>Strong motivation and professional attitude</li>
                <li>First Aid qualification recommended (FREC Level 3 or equivalent)</li>
                <li>Background in security, military or law enforcement is advantageous but not mandatory</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Programme Structure & Learning Units</h3>
          <div className="mt-3 grid gap-4">
            {[
              { title: 'Working as a Close Protection Operative', bullets: ['Role and responsibilities of the CPO', 'Professional standards and code of conduct', 'Ethics, integrity and discretion', 'Team roles and command structure', 'Personal presentation and situational awareness'] },
              { title: 'Legal and Regulatory Framework', bullets: ['Legal responsibilities of a Close Protection Operative', 'Use of force: principles and limitations', 'Duty of care and accountability', 'Human rights considerations', 'Professional liability and compliance'] },
              { title: 'Threat and Risk Assessment', bullets: ['Understanding threat types and intent', 'Dynamic and static risk assessments', 'Vulnerability analysis', 'Environmental and situational factors', 'Risk mitigation strategies'] },
              { title: 'Surveillance and Counter-Surveillance', bullets: ['Principles of surveillance', 'Detection of hostile surveillance', 'Observation skills and pattern recognition', 'Counter-surveillance techniques', 'Reporting and intelligence awareness'] },
              { title: 'Operational Planning', bullets: ['Mission preparation and briefing', 'Advance work and reconnaissance', 'Route planning and contingency planning', 'Coordination with stakeholders', 'Communication procedures'] },
              { title: 'Secure Movement and Transportation', bullets: ['Principles of protective driving (theory)', 'Vehicle formations and positioning', 'Embarkation and disembarkation procedures', 'Movement on foot and in vehicles', 'Emergency response during movement'] },
              { title: 'Venue and Residential Security', bullets: ['Site assessment and security planning', 'Access control and perimeter security', 'Secure accommodation principles', 'Coordination with local security services', 'Incident prevention measures'] },
              { title: 'Conflict Management and Physical Intervention', bullets: ['Conflict awareness and avoidance', 'De-escalation techniques', 'Decision-making under pressure', 'Safe physical intervention principles', 'Team coordination during incidents'] },
              { title: 'Incident and Emergency Response', bullets: ['Immediate actions during incidents', 'Evacuation procedures', 'Medical emergency awareness', 'Communication during crises', 'Post-incident reporting'] },
            ].map((unit) => (
              <div key={unit.title} className="p-4 rounded-lg border border-border bg-card hover:shadow-lg transition transform hover:-translate-y-1">
                <h4 className="font-semibold">{unit.title}</h4>
                <ul className="mt-2 list-disc pl-5 text-muted-foreground space-y-1">
                  {unit.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Training Methodology & Assessment</h3>
          <p className="mt-2 text-muted-foreground">Training includes classroom-based theoretical instruction, practical exercises, scenario-based training and continuous instructor assessment. Learners are assessed via written knowledge assessments, practical performance evaluation and scenario-based exercises.</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Certification & Professional Outcomes</h3>
          <p className="mt-2 text-muted-foreground">Successful candidates will be awarded the Highfield Level 3 Certificate for Close Protection Operatives in the Private Security Industry. Graduates may pursue roles including Close Protection Operative (CPO), Protective Security Specialist, Executive Protection Assistant, and Security Operative in high-risk environments.</p>
        </div>

        <div className="rounded-md border border-border bg-card p-4">
          <h4 className="font-semibold">Important Notice</h4>
          <p className="mt-2 text-muted-foreground">This programme is professionally demanding and selective. Admission is subject to review of the candidate’s profile and suitability for close protection duties.</p>
        </div>
      </section>
    </div>
  );
}
