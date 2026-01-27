import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";
import SessionInfo from "@/components/SessionInfo";

export default function ProtectiveMedical() {
  return (
    <div className="max-w-4xl">
      <SectionHeader title="Protective Medical Support Programme" subtitle="FREC-aligned medical training" />

      <div className="mb-6">
        <a href="/contact?course=Protective%20Medical%20Support%20Programme" className="inline-flex items-center px-4 py-2 rounded-md bg-[hsl(var(--accent))] text-[hsl(var(--accent-foreground))] font-semibold shadow">Book this course</a>
      </div>

      <SessionInfo />

      <Card>
        <h2 className="text-xl font-semibold">Overview</h2>
        <p className="mt-2 text-muted-foreground">Medical care for operational teams focusing on acute care, casualty management and operational medical decision-making in hostile environments.</p>
      </Card>
    </div>
  );
}
