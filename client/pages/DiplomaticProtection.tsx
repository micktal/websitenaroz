import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";
import SessionInfo from "@/components/SessionInfo";

export default function DiplomaticProtection() {
  return (
    <div className="max-w-4xl">
      <SectionHeader title="Diplomatic Protection Programme" subtitle="7-Day Intensive Course" />

      <div className="mb-6 flex gap-3">
        <a href="/contact?course=Diplomatic%20Protection%20Programme" className="inline-flex items-center px-4 py-2 rounded-md bg-[hsl(var(--accent))] text-[hsl(var(--accent-foreground))] font-semibold shadow">Book this course</a>
        <a href="/contact?course=Diplomatic%20Protection%20Programme" className="ml-3 text-sm text-muted-foreground underline">Request brochure</a>
      </div>

      <SessionInfo />

      <Card>
        <section className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold">Programme Overview</h2>
            <p className="mt-2 text-muted-foreground">The Diplomatic Protection Programme is a specialised, intensive training course designed to prepare security professionals for protective duties involving diplomats, international officials, government representatives and high-profile individuals operating in sensitive or hostile environments.</p>
            <p className="mt-2 text-muted-foreground">This programme focuses on protective planning, operational coordination, threat mitigation and professional conduct, with a controlled and realistic integration of tactical shooting exercises where applicable.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Course Structure & Assessment</h3>
            <p className="mt-2 text-muted-foreground">Practical exercises, scenario work and continuous instructor assessment. Successful candidates receive a certificate of completion.</p>
          </div>
        </section>
      </Card>
    </div>
  );
}
