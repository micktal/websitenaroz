import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";
import SessionInfo from "@/components/SessionInfo";

export default function ProtectiveIntelligence() {
  return (
    <div className="max-w-4xl">
      <SectionHeader title="Protective Intelligence & Advance Work" subtitle="Advance work and reconnaissance for protective operations" />

      <div className="mb-6">
        <a href="/contact?course=Protective%20Intelligence%20%26%20Advance%20Work" className="inline-flex items-center px-4 py-2 rounded-md bg-[hsl(var(--accent))] text-[hsl(var(--accent-foreground))] font-semibold shadow">Book this course</a>
      </div>

      <SessionInfo />

      <Card>
        <h2 className="text-xl font-semibold">Overview</h2>
        <p className="mt-2 text-muted-foreground">Focused instruction on advance reconnaissance, threat assessment and operational planning to support protective operations and missions.</p>
      </Card>
    </div>
  );
}
