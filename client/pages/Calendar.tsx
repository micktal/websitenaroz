import { useEffect, useState } from "react";

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
  const [sessions, setSessions] = useState<Session[]>([]);

  useEffect(() => {
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

  return (
    <div>
      <h2 className="text-3xl font-bold">Training Calendar</h2>
      <p className="mt-4 text-muted-foreground">Upcoming scheduled sessions. To book a place, use the Contact / Book page.</p>

      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {sessions.length === 0 ? (
          <div className="text-sm text-muted-foreground">Loading sessions...</div>
        ) : (
          sessions.map((s, idx) => (
            <div key={idx} className="p-4 rounded-lg border border-border bg-card hover:shadow-lg transition-transform transform hover:-translate-y-1">
              <div className="text-xs text-muted-foreground">{s["Start Date"]} — {s["End Date"]}</div>
              <div className="font-semibold mt-1">{s["Session Title"]}</div>
              <div className="text-sm text-muted-foreground mt-2">{s.Course} • {s.Location}</div>
              <div className="mt-3 flex items-center justify-between">
                <div className="text-sm font-medium">{s["Price (USD)"] ? `$${s["Price (USD)"]}` : "—"}</div>
                <div className="text-xs text-muted-foreground">Seats: {s.Seats || 'N/A'}</div>
              </div>
              {s.Notes && <div className="mt-2 text-xs text-muted-foreground">{s.Notes}</div>}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
