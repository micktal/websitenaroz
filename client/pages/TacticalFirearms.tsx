import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";
import SessionInfo from "@/components/SessionInfo";

export default function TacticalFirearms() {
  return (
    <div className="max-w-4xl">
      <SectionHeader title="Tactical Firearms Programme" subtitle="5-Day Professional Firearms Course" />

      <div className="mb-6">
        <a href="/contact?course=Tactical%20Firearms%20Programme" className="inline-flex items-center px-4 py-2 rounded-md bg-[hsl(var(--accent))] text-[hsl(var(--accent-foreground))] font-semibold shadow">Book this course</a>
      </div>

      <SessionInfo />

      <Card>
        <h2 className="text-xl font-semibold">Overview</h2>
        <p className="mt-2 text-muted-foreground">Professional firearms training emphasising safe handling, marksmanship fundamentals, scenario-based shooting and legal considerations for protective roles.</p>
      </Card>
    </div>
  );
}
