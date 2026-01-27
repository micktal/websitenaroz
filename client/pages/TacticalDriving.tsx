import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";
import SessionInfo from "@/components/SessionInfo";

export default function TacticalDriving() {
  return (
    <div className="max-w-4xl">
      <SectionHeader title="Tactical Driving Programme" subtitle="3-Day Intensive" />

      <div className="mb-6 flex gap-3">
        <a href="/contact?course=Tactical%20Driving%20Programme" className="inline-flex items-center px-4 py-2 rounded-md bg-[hsl(var(--accent))] text-[hsl(var(--accent-foreground))] font-semibold shadow">Book this course</a>
      </div>

      <SessionInfo />

      <Card>
        <h2 className="text-xl font-semibold">Overview</h2>
        <p className="mt-2 text-muted-foreground">A focused programme on defensive and protective driving techniques, vehicle handling, escort formations and emergency manoeuvres suitable for protection operations.</p>
      </Card>
    </div>
  );
}
