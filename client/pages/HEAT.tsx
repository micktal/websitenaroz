import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";
import SessionInfo from "@/components/SessionInfo";

export default function HEAT() {
  return (
    <div className="max-w-4xl">
      <SectionHeader title="Hostile Environment Awareness Training (HEAT)" subtitle="Non-armed awareness" />

      <div className="mb-6">
        <a href="/contact?course=Hostile%20Environment%20Awareness%20Training%20(HEAT)" className="inline-flex items-center px-4 py-2 rounded-md bg-[hsl(var(--accent))] text-[hsl(var(--accent-foreground))] font-semibold shadow">Book this course</a>
      </div>

      <SessionInfo />

      <Card>
        <h2 className="text-xl font-semibold">Overview</h2>
        <p className="mt-2 text-muted-foreground">Awareness training for personnel travelling or operating in unstable regions. Focus on avoidance, situational awareness and personal safety.</p>
      </Card>
    </div>
  );
}
