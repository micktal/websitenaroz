import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";
import SessionInfo from "@/components/SessionInfo";

export default function SurveillanceIntelligence() {
  return (
    <div className="max-w-4xl">
      <SectionHeader title="Surveillance & Intelligence Programme" subtitle="Awareness and Protective Intelligence" />

      <div className="mb-6">
        <a href="/contact?course=Surveillance%20%26%20Intelligence%20Programme" className="inline-flex items-center px-4 py-2 rounded-md bg-[hsl(var(--accent))] text-[hsl(var(--accent-foreground))] font-semibold shadow">Book this course</a>
      </div>

      <SessionInfo />

      <Card>
        <h2 className="text-xl font-semibold">Overview</h2>
        <p className="mt-2 text-muted-foreground">Observation, intelligence awareness, reporting and basic analysis for protection operations and pre-deployment reconnaissance.</p>
      </Card>
    </div>
  );
}
