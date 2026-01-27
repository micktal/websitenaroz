import SessionInfo from "@/components/SessionInfo";

export default function SurveillanceIntelligence() {
  return (
    <div className="max-w-4xl">
      <header className="mb-6">
        <h1 className="text-3xl md:text-4xl font-extrabold">Surveillance & Intelligence Programme</h1>
        <p className="mt-2 text-muted-foreground">Professional Course</p>
        <div className="mt-4">
          <a href="/contact?course=Surveillance%20%26%20Intelligence%20Programme" className="inline-flex items-center px-4 py-2 rounded-md bg-primary text-primary-foreground font-semibold shadow">Book this course</a>
          <a href="/contact?course=Surveillance%20%26%20Intelligence%20Programme" className="ml-3 text-sm text-muted-foreground underline">Request brochure</a>
        </div>
      </header>

      <section className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold">Programme Overview</h2>
          <p className="mt-2 text-muted-foreground">The Surveillance & Intelligence Programme is designed to develop a professional understanding of surveillance principles, intelligence awareness and analytical thinking within a protective and security context.</p>
          <p className="mt-2 text-muted-foreground">The programme focuses on observation, information management, situational awareness and reporting, without promoting offensive or unlawful activities. Training is conducted within a legal, ethical and professional framework.</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Target Audience</h3>
          <ul className="mt-3 list-disc pl-5 text-muted-foreground space-y-2">
            <li>Close Protection Operatives (CPO)</li>
            <li>Security and protective personnel</li>
            <li>Intelligence support staff</li>
            <li>NGO, corporate and diplomatic security teams</li>
            <li>Professionals operating in sensitive environments</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Learning Objectives</h3>
          <ul className="mt-3 list-disc pl-5 text-muted-foreground space-y-2">
            <li>Understand the principles and purpose of surveillance</li>
            <li>Apply structured observation and information collection</li>
            <li>Recognise indicators of hostile intent</li>
            <li>Support protective operations through intelligence awareness</li>
            <li>Produce clear, accurate and professional reports</li>
            <li>Operate within legal and ethical boundaries</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Core Topics Covered</h3>
          <div className="mt-3 grid gap-4">
            <div className="p-4 rounded-lg border border-border bg-card">Surveillance Fundamentals: Purpose and limits, legal and ethical considerations, roles and responsibilities and professional conduct.</div>
            <div className="p-4 rounded-lg border border-border bg-card">Observation & Situational Awareness: Developing observation skills, pattern recognition and attention management.</div>
            <div className="p-4 rounded-lg border border-border bg-card">Intelligence Awareness: Intelligence cycle, OSINT awareness, information validation and threat indicators.</div>
            <div className="p-4 rounded-lg border border-border bg-card">Reporting & Documentation: Note-taking, structured reporting formats, accuracy and objectivity.</div>
            <div className="p-4 rounded-lg border border-border bg-card">Team Coordination & Communication: Working within surveillance teams, communication protocols and information sharing.</div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Training Methodology & Assessment</h3>
          <p className="mt-2 text-muted-foreground">Classroom instruction, practical observation exercises, scenario-based discussions and continuous performance observation. Participants are evaluated through instructor assessment, reporting exercises and participation in scenarios.</p>
        </div>

        <div className="rounded-md border border-border bg-card p-4">
          <h4 className="font-semibold">Important Notice</h4>
          <p className="mt-2 text-muted-foreground">This programme is defensive, professional and awareness-based. It supports protective and security functions and is delivered in accordance with applicable laws and regulations.</p>
        </div>
      </section>
    </div>
  );
}
