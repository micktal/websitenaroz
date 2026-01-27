import { useState } from "react";

import React from "react";
import { useLocation } from "react-router-dom";
import { toast } from "@/hooks/use-toast";

export default function Contact() {
  const location = useLocation();
  const [form, setForm] = React.useState({ name: "", email: "", course: "Close Protection", date: "", message: "" });

  React.useEffect(() => {
    const params = new URLSearchParams(location.search);
    const course = params.get("course");
    if (course) {
      setForm((f) => ({ ...f, course }));
    }
  }, [location.search]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Use app toast for confirmation. Backend integration can be added later.
    toast({ title: "Request received", description: `Thanks ${form.name || 'candidate'} — we received your booking request for ${form.course}. We'll contact you at ${form.email || 'your email'}.` });
    setForm({ name: "", email: "", course: "Close Protection", date: "", message: "" });
  };

  return (
    <div className="grid gap-8 lg:grid-cols-3">
      <div className="lg:col-span-2">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold">Contact & Book a Course</h2>
          <p className="mt-3 text-muted-foreground">Use the form below to request a brochure, ask a question or book a course. We'll respond within 48 hours.</p>

          <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <input name="name" value={form.name} onChange={handleChange} placeholder="Full name" className="w-full rounded-md border border-border px-4 py-2 bg-card" />
              <input name="email" value={form.email} onChange={handleChange} placeholder="Email address" type="email" className="w-full rounded-md border border-border px-4 py-2 bg-card" />
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <select name="course" value={form.course} onChange={handleChange} className="w-full rounded-md border border-border px-4 py-2 bg-card">
                <option>Close Protection</option>
                <option>Close Protection Level 3</option>
                <option>Diplomatic Protection Programme</option>
                <option>Counter-Terrorism Protection Programme</option>
                <option>Surveillance &amp; Intelligence Programme</option>
                <option>Protective Intelligence &amp; Advance Work Programme</option>
                <option>Hostile Environment Awareness Training (HEAT)</option>
                <option>Protective Medical Support Programme</option>
                <option>Protective Operations Management</option>
                <option>Tactical Firearms Programme</option>
                <option>Tactical Driving Programme</option>
              </select>

              <input name="date" value={form.date} onChange={handleChange} placeholder="Preferred date" type="date" className="w-full rounded-md border border-border px-4 py-2 bg-card" />
            </div>

            <textarea name="message" value={form.message} onChange={handleChange} placeholder="Message (optional)" className="w-full rounded-md border border-border px-4 py-2 bg-card" rows={6} />

            <div className="flex items-center gap-3">
              <button type="submit" className="inline-flex items-center px-6 py-3 rounded-md bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold shadow-lg">Send request</button>
              <button type="button" onClick={() => setForm({ name: "", email: "", course: "Close Protection", date: "", message: "" })} className="inline-flex items-center px-4 py-2 rounded-md border border-border">Clear</button>
              <div className="ml-auto text-sm text-muted-foreground">By submitting you agree we may contact you regarding your enquiry.</div>
            </div>
          </form>
        </div>
      </div>

      <aside className="rounded-lg border border-border bg-card p-6">
        <h4 className="text-lg font-semibold">Need help choosing?</h4>
        <p className="mt-2 text-sm text-muted-foreground">If you're unsure which programme fits your goals, tell us briefly and our team will advise.</p>

        <div className="mt-4">
          <div className="text-sm font-semibold">Contact</div>
          <div className="text-sm text-muted-foreground mt-1">hello@narozshield.example</div>
          <div className="text-sm text-muted-foreground">+44 20 7946 0958</div>
        </div>

        <div className="mt-6">
          <h5 className="text-sm font-semibold">Office Hours</h5>
          <div className="text-sm text-muted-foreground">Mon–Fri 09:00–18:00 (GMT)</div>
        </div>

        <div className="mt-6">
          <h5 className="text-sm font-semibold">Quick Links</h5>
          <ul className="mt-2 space-y-2 text-sm">
            <li><a href="/courses" className="text-primary hover:underline">Explore programmes</a></li>
            <li><a href="/calendar" className="text-primary hover:underline">View calendar</a></li>
            <li><a href="/about-highfield" className="text-primary hover:underline">About Highfield</a></li>
          </ul>
        </div>
      </aside>
    </div>
  );
}
