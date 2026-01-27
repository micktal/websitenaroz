export default function Courses() {
  return (
    <div>
      <h2 className="text-3xl font-bold animate-fade-up" style={{ animationDelay: '80ms' }}>Our Courses</h2>
      <p className="mt-4 text-muted-foreground max-w-3xl animate-fade-up" style={{ animationDelay: '140ms' }}>This page will list all available courses and modules. Please provide the full list and descriptions and we'll display them here in an organized catalogue.</p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <a href="/courses/cpo-level-3" className="block p-6 rounded-lg border border-border bg-card transform transition hover:scale-105 hover:shadow-lg animate-fade-up" style={{ animationDelay: '200ms' }}>
          <h4 className="font-semibold">Close Protection</h4>
          <p className="mt-2 text-sm text-muted-foreground">Tactical movement, threat analysis, and protective planning.</p>
        </a>

        <a href="/courses/diplomatic-protection" className="block p-6 rounded-lg border border-border bg-card transform transition hover:scale-105 hover:shadow-lg animate-fade-up" style={{ animationDelay: '240ms' }}>
          <h4 className="font-semibold">Diplomatic Protection Programme</h4>
          <p className="mt-2 text-sm text-muted-foreground">7-day intensive programme focused on protecting diplomats and international officials.</p>
        </a>

        <a href="/courses/tactical-driving" className="block p-6 rounded-lg border border-border bg-card transform transition hover:scale-105 hover:shadow-lg animate-fade-up" style={{ animationDelay: '280ms' }}>
          <h4 className="font-semibold">Tactical Driving Programme</h4>
          <p className="mt-2 text-sm text-muted-foreground">3-day intensive course for defensive and protective driving.</p>
        </a>

        <a href="/courses" className="block p-6 rounded-lg border border-border bg-card transform transition hover:scale-105 hover:shadow-lg animate-fade-up" style={{ animationDelay: '320ms' }}>
          <h4 className="font-semibold">Travel Security</h4>
          <p className="mt-2 text-sm text-muted-foreground">Pre-departure planning, safe transit and cultural briefings.</p>
        </a>

        <a href="/courses" className="block p-6 rounded-lg border border-border bg-card transform transition hover:scale-105 hover:shadow-lg animate-fade-up" style={{ animationDelay: '360ms' }}>
          <h4 className="font-semibold">Risk Management</h4>
          <p className="mt-2 text-sm text-muted-foreground">Operational risk assessments and mitigation strategies.</p>
        </a>
      </div>
    </div>
  );
}
