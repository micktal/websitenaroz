import React from "react";
import LinkWrapper from "@/components/LinkWrapper";
import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";

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
          .split("\n")
          .map((l) => l.trim())
          .filter(Boolean);
        if (lines.length < 2) return;
        const header = lines[0]
          .split(",")
          .map((h) => h.replace(/(^\"|\"$)/g, "").trim());
        const rows = lines.slice(1).map((line) => {
          const vals = line
            .split(",")
            .map((v) => v.replace(/(^\"|\"$)/g, "").trim());
          const obj: any = {};
          header.forEach((h, i) => (obj[h] = vals[i] ?? ""));
          return obj as Session;
        });
        rows.sort(
          (a, b) =>
            new Date(a["Start Date"]).getTime() -
            new Date(b["Start Date"]).getTime(),
        );
        if (mounted) setSessions(rows);
      })
      .catch((err) => console.error("Failed to load calendar:", err));

    return () => {
      mounted = false;
    };
  }, []);

  const mapCourse = (course: string) => {
    const map: Record<string, string> = {
      "Close Protection Level 3": "/courses/cpo-level-3",
      "Diplomatic Protection Programme": "/courses/diplomatic-protection",
      "Tactical Driving Programme": "/courses/tactical-driving",
      "Counter-Terrorism Protection Programme": "/courses/counter-terrorism",
      "Surveillance & Intelligence Programme":
        "/courses/surveillance-intelligence",
      "Protective Intelligence & Advance Work":
        "/courses/protective-intelligence",
      "Hostile Environment Awareness Training (HEAT)": "/courses/heat",
      "Protective Medical Support Programme": "/courses/protective-medical",
      "Protective Operations Management": "/courses/protective-operations",
      "Tactical Firearms Programme": "/courses/tactical-firearms",
    };
    return map[course] || "/courses";
  };

  return (
    <div className="max-w-7xl mx-auto">
      {/* Hero Section */}
      <div className="mb-12">
        <SectionHeader
          title="Training Calendar"
          subtitle="Upcoming scheduled sessions and course dates"
        />
      </div>

      {/* Sessions Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {sessions.length === 0 ? (
          <Card className="col-span-full p-8 text-center">
            <div className="text-muted-foreground">Loading sessions...</div>
          </Card>
        ) : (
          sessions.map((s, idx) => {
            const to = (() => {
              const base = mapCourse(s.Course);
              const q = new URLSearchParams();
              q.set("sessionTitle", s["Session Title"]);
              q.set("startDate", s["Start Date"]);
              q.set("endDate", s["End Date"]);
              q.set("location", s["Location"]);
              if (s["Price (USD)"]) q.set("price", s["Price (USD)"]);
              return `${base}?${q.toString()}`;
            })();

            const lowSeats = (() => {
              const n = parseInt(s.Seats || "0", 10);
              return !isNaN(n) && n > 0 && n <= 5;
            })();

            return (
              <Card
                key={idx}
                className="relative overflow-hidden hover:shadow-lg transition-all group"
              >
                {/* Low seats badge */}
                {lowSeats && (
                  <div className="absolute right-3 top-3 z-10">
                    <span className="text-xs px-3 py-1 rounded-full bg-red-50 text-red-600 border border-red-200 font-medium">
                      Limited seats
                    </span>
                  </div>
                )}

                {/* Main clickable area */}
                <LinkWrapper
                  to={to}
                  className="block p-6 hover:bg-gray-50 transition-colors"
                >
                  {/* Date range */}
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <span>
                      {s["Start Date"]} — {s["End Date"]}
                    </span>
                  </div>

                  {/* Session title */}
                  <h3 className="text-lg mb-2 text-primary group-hover:text-primary/80 transition-colors">
                    {s["Session Title"]}
                  </h3>

                  {/* Course name + Location */}
                  <div className="flex items-start gap-2 text-sm text-muted-foreground mb-4">
                    <svg
                      className="w-4 h-4 mt-0.5 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <div>
                      <div className="font-medium text-foreground">
                        {s.Course}
                      </div>
                      <div>{s.Location}</div>
                    </div>
                  </div>

                  {/* Notes if present */}
                  {s.Notes && (
                    <div className="mb-4 p-3 bg-blue-50 border border-blue-100 rounded text-xs text-blue-900">
                      {s.Notes}
                    </div>
                  )}

                  {/* Price + Seats */}
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="text-lg font-semibold text-primary">
                      {s["Price (USD)"] ? `$${s["Price (USD)"]}` : "Price TBA"}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                      <span>{s.Seats || "N/A"} seats</span>
                    </div>
                  </div>
                </LinkWrapper>

                {/* Book button - separate from clickable card */}
                <div className="px-6 pb-6">
                  <LinkWrapper
                    to={`/contact?course=${encodeURIComponent(s["Session Title"])}&date=${encodeURIComponent(s["Start Date"])}`}
                    className="block w-full text-center px-4 py-2.5 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium"
                  >
                    Book This Session
                  </LinkWrapper>
                </div>
              </Card>
            );
          })
        )}
      </div>

      {/* Footer info */}
      {sessions.length > 0 && (
        <Card className="mt-12 p-6 bg-gray-50 text-center">
          <p className="text-sm text-muted-foreground">
            Can't find a suitable date?{" "}
            <LinkWrapper
              to="/contact"
              className="text-primary hover:underline font-medium"
            >
              Contact us
            </LinkWrapper>{" "}
            to discuss custom scheduling or enquire about future sessions.
          </p>
        </Card>
      )}
    </div>
  );
}
