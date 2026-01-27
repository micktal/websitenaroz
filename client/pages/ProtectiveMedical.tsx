import SessionInfo from "@/components/SessionInfo";

export default function ProtectiveMedical() {
  return (
    <div className="max-w-4xl">
      <header className="mb-6">
        <h1 className="text-3xl md:text-4xl font-extrabold">Protective Medical Support Programme</h1>
        <p className="mt-2 text-muted-foreground">FREC Level 3 Aligned – General Syllabus</p>
        <div className="mt-4">
          <a href="/contact?course=Protective%20Medical%20Support%20Programme" className="inline-flex items-center px-4 py-2 rounded-md bg-primary text-primary-foreground font-semibold shadow">Book this course</a>
          <a href="/contact?course=Protective%20Medical%20Support%20Programme" className="ml-3 text-sm text-muted-foreground underline">Request brochure</a>
        </div>
      </header>

      <section className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold">Programme Overview</h2>
          <p className="mt-2 text-muted-foreground">The Protective Medical Support Programme is a professional medical training course designed to complement and reinforce the FREC Level 3 qualification, within a protective security and close protection context.</p>
          <p className="mt-2 text-muted-foreground">This programme focuses on medical decision-making, casualty management and coordination under operational stress, rather than clinical depth or hospital-level treatment.</p>
          <p className="mt-2 text-muted-foreground">The course is aligned with the principles and learning outcomes of the FREC Level 3 qualification awarded by Highfield Qualifications, while addressing the specific realities faced by protection teams in the field.</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Target Audience & Entry Requirements</h3>
          <div className="mt-3 grid gap-4 sm:grid-cols-2">
            <div>
              <h4 className="font-semibold">Target Audience</h4>
              <ul className="mt-2 list-disc pl-5 text-muted-foreground space-y-2">
                <li>Close Protection Operatives (CPO)</li>
                <li>Protective team leaders</li>
                <li>Security personnel operating in high-risk or remote environments</li>
                <li>Professionals holding (or preparing for) a FREC Level 3 qualification</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">Entry Requirements</h4>
              <ul className="mt-2 list-disc pl-5 text-muted-foreground space-y-2">
                <li>Minimum age: 18</li>
                <li>Valid FREC Level 3 qualification (recommended or required)</li>
                <li>Good physical and medical condition</li>
                <li>Professional attitude and discipline</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Learning Objectives</h3>
          <ul className="mt-3 list-disc pl-5 text-muted-foreground space-y-2">
            <li>Apply FREC Level 3 medical principles in protective operations</li>
            <li>Make sound medical decisions under stress</li>
            <li>Manage casualties in unstable or hostile environments</li>
            <li>Coordinate medical response within protection teams</li>
            <li>Integrate medical considerations into operational planning</li>
            <li>Communicate effectively during medical incidents</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Core Topics Covered</h3>
          <div className="mt-3 grid gap-4">
            <div className="p-4 rounded-lg border border-border bg-card">Medical Role in Protective Operations: duty of care, limits of intervention and medical decision-making in protective roles.</div>
            <div className="p-4 rounded-lg border border-border bg-card">Casualty Assessment & Prioritisation: primary survey, triage mindset and recognition of life-threatening conditions.</div>
            <div className="p-4 rounded-lg border border-border bg-card">Trauma Management in the Field: bleeding control, airway awareness, shock recognition and environmental considerations.</div>
            <div className="p-4 rounded-lg border border-border bg-card">Medical Response Under Stress: cognitive performance, prioritisation, and team coordination during incidents.</div>
            <div className="p-4 rounded-lg border border-border bg-card">Medical Equipment & Preparedness: IFAK principles, team medical equipment and logistical considerations.</div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Training Methodology & Assessment</h3>
          <p className="mt-2 text-muted-foreground">Classroom instruction, practical medical drills, scenario-based exercises and continuous performance observation. Participants are evaluated through instructor observation, practical exercises and professional judgement.</p>
        </div>

        <div className="rounded-md border border-border bg-card p-4">
          <h4 className="font-semibold">Important Notice</h4>
          <p className="mt-2 text-muted-foreground">This programme is supportive and complementary to the FREC Level 3 qualification. It does not replace regulated medical certification and is intended solely to enhance operational medical capability within legal and ethical boundaries.</p>
        </div>
      </section>
    </div>
  );
}
