import { DemoResponse } from "@shared/api";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Index() {
  const [exampleFromServer, setExampleFromServer] = useState("");

  useEffect(() => {
    fetchDemo();
  }, []);

  const fetchDemo = async () => {
    try {
      const response = await fetch("/api/demo");
      const data = (await response.json()) as DemoResponse;
      setExampleFromServer(data.message);
    } catch (error) {
      console.error("Error fetching hello:", error);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <header className="border-b border-border bg-white/60 backdrop-blur-sm">
        <div className="container flex items-center justify-between py-6">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-md bg-primary flex items-center justify-center text-primary-foreground font-bold">NS</div>
            <div>
              <h1 className="text-lg font-semibold leading-tight">Naroz Shield Institute</h1>
              <p className="text-sm text-muted-foreground">Training & Protection Services — International</p>
            </div>
          </div>

          <nav>
            <ul className="flex items-center gap-6 text-sm">
              <li>
                <a href="#programs" className="hover:underline">Programs</a>
              </li>
              <li>
                <a href="#about" className="hover:underline">About</a>
              </li>
              <li>
                <a href="#contact" className="hover:underline">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container py-16">
        <section className="grid gap-10 lg:grid-cols-2 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Naroz Shield Institute
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-xl">
              We provide world-class training and protective services for individuals and organizations seeking professional security, risk management, and international operations readiness. Modern curriculum — practical scenarios — global certifications.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#contact" className="inline-flex items-center px-6 py-3 rounded-md bg-primary text-primary-foreground font-semibold shadow-md hover:opacity-95">Get in touch</a>
              <a href="#programs" className="inline-flex items-center px-6 py-3 rounded-md border border-border text-sm text-foreground">View programs</a>
            </div>

            <div className="mt-8 flex gap-4 items-center text-sm text-muted-foreground">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-slate-100 flex items-center justify-center">🌍</div>
                <div>
                  <div className="font-semibold">International Reach</div>
                  <div className="text-sm">Training locations across Europe, Africa and the Middle East</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-slate-100 flex items-center justify-center">🎖️</div>
                <div>
                  <div className="font-semibold">Experienced Instructors</div>
                  <div className="text-sm">Industry veterans with operational field experience</div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl ring-1 ring-border">
              <img src="/hero.jpg" alt="Naroz Shield Institute" className="w-full h-80 object-cover bg-slate-200" />
            </div>

            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="p-4 rounded-lg border border-border bg-card">
                <div className="text-sm font-semibold">Short Courses</div>
                <div className="text-xs text-muted-foreground mt-2">Focused practical modules you can take in 1–5 days.</div>
              </div>
              <div className="p-4 rounded-lg border border-border bg-card">
                <div className="text-sm font-semibold">Corporate Training</div>
                <div className="text-xs text-muted-foreground mt-2">Tailored programs for teams and organizations.</div>
              </div>
            </div>
          </div>
        </section>

        <section id="programs" className="mt-16">
          <h3 className="text-2xl font-bold">Our Programs</h3>
          <p className="text-muted-foreground mt-2 max-w-2xl">Curriculum built for real-world scenarios: Protective Operations, Risk Assessment, Close Protection, Travel Security, and Emergency Response.</p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <article className="p-6 rounded-lg border border-border bg-card">
              <h4 className="font-semibold">Close Protection</h4>
              <p className="mt-2 text-sm text-muted-foreground">Tactical movement, threat analysis, and protective planning.</p>
            </article>

            <article className="p-6 rounded-lg border border-border bg-card">
              <h4 className="font-semibold">Travel Security</h4>
              <p className="mt-2 text-sm text-muted-foreground">Pre-departure planning, safe transit and cultural briefings.</p>
            </article>

            <article className="p-6 rounded-lg border border-border bg-card">
              <h4 className="font-semibold">Risk Management</h4>
              <p className="mt-2 text-sm text-muted-foreground">Operational risk assessments and mitigation strategies.</p>
            </article>
          </div>
        </section>

        <section id="about" className="mt-16">
          <h3 className="text-2xl font-bold">About Naroz Shield Institute</h3>
          <p className="text-muted-foreground mt-2 max-w-2xl">Founded to deliver pragmatic protection and training solutions, we combine modern instructional design with operational experience to prepare personnel for high-stakes international environments.</p>
        </section>

        <section id="contact" className="mt-16">
          <div className="rounded-xl border border-border p-8 bg-card max-w-xl">
            <h3 className="text-xl font-semibold">Contact</h3>
            <p className="text-sm text-muted-foreground mt-2">Email us at <a className="text-primary hover:underline" href="mailto:hello@narozshield.example">hello@narozshield.example</a> or request a brochure.</p>
            <div className="mt-4">
              <a href="mailto:hello@narozshield.example" className="inline-flex items-center px-5 py-3 rounded-md bg-primary text-primary-foreground font-semibold">Request brochure</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-8">
        <div className="container text-sm text-muted-foreground flex flex-col md:flex-row items-center justify-between gap-4">
          <div>© {new Date().getFullYear()} Naroz Shield Institute</div>
          <div>Made for international protection & training</div>
        </div>
      </footer>
    </div>
  );
}
