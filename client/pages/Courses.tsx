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

        <a href="/courses/counter-terrorism" className="block p-6 rounded-lg border border-border bg-card transform transition hover:scale-105 hover:shadow-lg text-red-700 animate-fade-up" style={{ animationDelay: '260ms' }}>
          <h4 className="font-semibold">Counter-Terrorism Protection Programme</h4>
          <p className="mt-2 text-sm text-muted-foreground">5-day intensive course with a strong firearms and protective response focus (regulated environments).</p>
        </a>

        <a href="/courses/tactical-driving" className="block p-6 rounded-lg border border-border bg-card transform transition hover:scale-105 hover:shadow-lg animate-fade-up" style={{ animationDelay: '280ms' }}>
          <h4 className="font-semibold">Tactical Driving Programme</h4>
          <p className="mt-2 text-sm text-muted-foreground">3-day intensive course for defensive and protective driving.</p>
        </a>

        <a href="/courses/tactical-firearms" className="block p-6 rounded-lg border border-border bg-card transform transition hover:scale-105 hover:shadow-lg text-red-700 animate-fade-up" style={{ animationDelay: '290ms' }}>
          <h4 className="font-semibold">Tactical Firearms Programme</h4>
          <p className="mt-2 text-sm text-muted-foreground">5-day professional firearms course focusing on safe, responsible weapons handling.</p>
        </a>

        <a href="/courses/surveillance-intelligence" className="block p-6 rounded-lg border border-border bg-card transform transition hover:scale-105 hover:shadow-lg animate-fade-up" style={{ animationDelay: '300ms' }}>
          <h4 className="font-semibold">Surveillance &amp; Intelligence Programme</h4>
          <p className="mt-2 text-sm text-muted-foreground">Professional course focused on observation, intelligence awareness and reporting.</p>
        </a>

        <a href="/courses/protective-intelligence" className="block p-6 rounded-lg border border-border bg-card transform transition hover:scale-105 hover:shadow-lg animate-fade-up" style={{ animationDelay: '310ms' }}>
          <h4 className="font-semibold">Protective Intelligence &amp; Advance Work Programme</h4>
          <p className="mt-2 text-sm text-muted-foreground">Professional course emphasising advance work, reconnaissance and planning for protective operations.</p>
        </a>

        <a href="/courses/heat" className="block p-6 rounded-lg border border-border bg-card transform transition hover:scale-105 hover:shadow-lg animate-fade-up" style={{ animationDelay: '320ms' }}>
          <h4 className="font-semibold">Hostile Environment Awareness Training (HEAT)</h4>
          <p className="mt-2 text-sm text-muted-foreground">Non-armed awareness course for operating safely in unstable and sensitive environments.</p>
        </a>

        <a href="/courses/protective-medical" className="block p-6 rounded-lg border border-border bg-card transform transition hover:scale-105 hover:shadow-lg animate-fade-up" style={{ animationDelay: '330ms' }}>
          <h4 className="font-semibold">Protective Medical Support Programme</h4>
          <p className="mt-2 text-sm text-muted-foreground">FREC Level 3 aligned medical training for protection teams and operational environments.</p>
        </a>

        <a href="/courses/protective-operations" className="block p-6 rounded-lg border border-border bg-card transform transition hover:scale-105 hover:shadow-lg animate-fade-up" style={{ animationDelay: '340ms' }}>
          <h4 className="font-semibold">Protective Operations Management</h4>
          <p className="mt-2 text-sm text-muted-foreground">Team Leader & Supervisor programme focused on leadership, command and operational management.</p>
        </a>

      </div>
    </div>
  );
}
