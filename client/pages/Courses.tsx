export default function Courses() {
  return (
    <div>
      <h2 className="text-3xl font-bold animate-fade-up" style={{ animationDelay: '80ms' }}>Our Courses</h2>
      <p className="mt-4 text-muted-foreground max-w-3xl animate-fade-up" style={{ animationDelay: '140ms' }}>This page will list all available courses and modules. Please provide the full list and descriptions and we'll display them here in an organized catalogue.</p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <article className="p-6 rounded-lg border border-border bg-card transform transition hover:scale-105 hover:shadow-lg animate-fade-up" style={{ animationDelay: '200ms' }}>
          <h4 className="font-semibold">Close Protection</h4>
          <p className="mt-2 text-sm text-muted-foreground">Tactical movement, threat analysis, and protective planning.</p>
        </article>

        <article className="p-6 rounded-lg border border-border bg-card transform transition hover:scale-105 hover:shadow-lg animate-fade-up" style={{ animationDelay: '260ms' }}>
          <h4 className="font-semibold">Travel Security</h4>
          <p className="mt-2 text-sm text-muted-foreground">Pre-departure planning, safe transit and cultural briefings.</p>
        </article>

        <article className="p-6 rounded-lg border border-border bg-card transform transition hover:scale-105 hover:shadow-lg animate-fade-up" style={{ animationDelay: '320ms' }}>
          <h4 className="font-semibold">Risk Management</h4>
          <p className="mt-2 text-sm text-muted-foreground">Operational risk assessments and mitigation strategies.</p>
        </article>
      </div>
    </div>
  );
}
