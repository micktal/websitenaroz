import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";
import SessionInfo from "@/components/SessionInfo";

export default function CounterTerrorism() {
  return (
    <div className="max-w-4xl">
      <SectionHeader title="Counter-Terrorism Protection Programme" subtitle="Advanced 5-Day Course" />

      <div className="mb-6">
        <a href="/contact?course=Counter-Terrorism%20Protection%20Programme" className="inline-flex items-center px-4 py-2 rounded-md bg-[hsl(var(--accent))] text-[hsl(var(--accent-foreground))] font-semibold shadow">Book this course</a>
      </div>

      <SessionInfo />

      <Card>
        <h2 className="text-xl font-semibold">Overview</h2>
        <p className="mt-2 text-muted-foreground">Advanced awareness and preparedness for professionals operating in high-risk environments. Course covers threat analysis, incident response and integrated firearms safety where applicable.</p>
      </Card>
    </div>
  );
}
