import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";
import SessionInfo from "@/components/SessionInfo";

export default function ProtectiveOperations() {
  return (
    <div className="max-w-4xl">
      <SectionHeader title="Protective Operations Management" subtitle="Team leader and operational management" />

      <div className="mb-6">
        <a href="/contact?course=Protective%20Operations%20Management" className="inline-flex items-center px-4 py-2 rounded-md bg-[hsl(var(--accent))] text-[hsl(var(--accent-foreground))] font-semibold shadow">Book this course</a>
      </div>

      <SessionInfo />

      <Card>
        <h2 className="text-xl font-semibold">Overview</h2>
        <p className="mt-2 text-muted-foreground">Leadership, planning and command skills for team leaders and supervisors within protective operations.</p>
      </Card>
    </div>
  );
}
