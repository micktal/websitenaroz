export default function Calendar() {
  const sessions = [
    { date: '2026-02-10', title: 'Close Protection — Level 3 (Week 1)', location: 'London' },
    { date: '2026-03-02', title: 'Travel Security — Short Course', location: 'Paris' },
    { date: '2026-03-15', title: 'Risk Management — Workshop', location: 'Abuja' },
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold">Training Calendar</h2>
      <p className="mt-4 text-muted-foreground">Upcoming scheduled sessions. To book a place, use the Contact / Book page.</p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {sessions.map((s) => (
          <div key={s.date} className="p-4 rounded-lg border border-border bg-card hover:shadow-lg transform transition hover:scale-102">
            <div className="text-sm text-muted-foreground">{s.date}</div>
            <div className="font-semibold mt-1">{s.title}</div>
            <div className="text-sm text-muted-foreground mt-2">{s.location}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
