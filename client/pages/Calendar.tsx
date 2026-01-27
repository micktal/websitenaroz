import React from "react";
import LinkWrapper from "@/components/LinkWrapper";

type Session = {
  Course: string;
  "Session Title": string;
  "Start Date": string;
  "End Date": string;
  Location: string;
  "Price (USD)": string;
  Currency: string;
  Seats: string;
  Notes: string;
};

export default function Calendar() {
  const [sessions, setSessions] = React.useState<Session[]>([]);

  React.useEffect(() => {
    let mounted = true;
    fetch("/data/training-calendar.csv")
      .then((r) => r.text())
      .then((text) => {
        const lines = text
          .split('\n')
          .map((l) => l.trim())
          .filter(Boolean);
        if (lines.length < 2) return;
        const header = lines[0]
          .split(',')
          .map((h) => h.replace(/(^\"|\"$)/g, '').trim());
        const rows = lines.slice(1).map((line) => {
          const vals = line.split(',').map((v) => v.replace(/(^\"|\"$)/g, '').trim());
          const obj: any = {};
          header.forEach((h, i) => (obj[h] = vals[i] ?? ""));
          return obj as Session;
        });
        rows.sort((a, b) => new Date(a["Start Date"]).getTime() - new Date(b["Start Date"]).getTime());
        if (mounted) setSessions(rows);
      })
      .catch((err) => console.error("Failed to load calendar:", err));

    return () => {
      mounted = false;
    };
  }, []);

  const mapCourse = (course: string) => {
    const map: Record<string,string> = {
      'Close Protection Level 3': '/courses/cpo-level-3',
      'Diplomatic Protection Programme': '/courses/diplomatic-protection',
      'Tactical Driving Programme': '/courses/tactical-driving',
      'Counter-Terrorism Protection Programme': '/courses/counter-terrorism',
      'Surveillance & Intelligence Programme': '/courses/surveillance-intelligence',
      'Protective Intelligence & Advance Work': '/courses/protective-intelligence',
      'Hostile Environment Awareness Training (HEAT)': '/courses/heat',
      'Protective Medical Support Programme': '/courses/protective-medical',
      'Protective Operations Management': '/courses/protective-operations',
      'Tactical Firearms Programme': '/courses/tactical-firearms',
    };
    return map[course] || '/courses';
  };

  return (
    <div>
      <h2 className="text-3xl font-bold">Training Calendar</h2>
      <p className="mt-4 text-muted-foreground">Upcoming scheduled sessions. To book a place, use the Contact / Book page.</p>

      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {sessions.length === 0 ? (
          <div className="text-sm text-muted-foreground">Loading sessions...</div>
        ) : (
          sessions.map((s, idx) => {
            const to = (() => {
              const base = mapCourse(s.Course);
              const q = new URLSearchParams();
              q.set('sessionTitle', s['Session Title']);
              q.set('startDate', s['Start Date']);
              q.set('endDate', s['End Date']);
              q.set('location', s['Location']);
              if (s['Price (USD)']) q.set('price', s['Price (USD)']);
              return `${base}?${q.toString()}`;
            })();

            const lowSeats = (() => {
              const n = parseInt(s.Seats || '0', 10);
              return !isNaN(n) && n > 0 && n <= 5;
            })();

            return (
              <div key={idx} className="relative">
                <LinkWrapper to={to} className="block p-4 rounded-lg border border-border bg-card hover:shadow-lg transition-transform transform hover:-translate-y-1">
                  {lowSeats && (
                    <span className="absolute right-3 top-3 text-[10px] px-2 py-1 rounded bg-[hsl(var(--accent))/0.12] text-[hsl(var(--accent))] border border-[hsl(var(--accent))]/20">Low seats</span>
                  )}

                  <div className="text-xs text-muted-foreground">{s['Start Date']} — {s['End Date']}</div>
                  <div className="font-semibold mt-1">{s['Session Title']}</div>
                  <div className="text-sm text-muted-foreground mt-2">{s.Course} • {s.Location}</div>
                  <div className="mt-3 flex items-center justify-between">
                    <div className="text-sm font-medium">{s['Price (USD)'] ? `$${s['Price (USD)']}` : '—'}</div>
                    <div className="text-xs text-muted-foreground">Seats: {s.Seats || 'N/A'}</div>
                  </div>
                  {s.Notes && <div className="mt-2 text-xs text-muted-foreground">{s.Notes}</div>}
                </LinkWrapper>

                <div className="absolute right-4 bottom-4">
                  <LinkWrapper to={`/contact?course=${encodeURIComponent(s['Session Title'])}&date=${encodeURIComponent(s['Start Date'])}`} className="inline-flex items-center px-3 py-2 rounded bg-[hsl(var(--accent))] text-[hsl(var(--navy-deep))] text-sm font-semibold">Book</LinkWrapper>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
