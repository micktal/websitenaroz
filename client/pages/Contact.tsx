import { useState } from "react";

import React from "react";
import { useLocation } from "react-router-dom";

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
    // For now, just show a confirmation. Integration with backend can be added later.
    alert(`Thanks ${form.name || 'candidate'} — we received your booking request for ${form.course}. We'll contact you at ${form.email || 'your email'}.`);
    setForm({ name: "", email: "", course: "Close Protection", date: "", message: "" });
  };

  return (
    <div className="max-w-2xl">
      <h2 className="text-3xl font-bold">Contact & Book a Course</h2>
      <p className="mt-4 text-muted-foreground">Use the form below to request a brochure, ask a question or book a course. We'll respond as soon as possible.</p>

      <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
        <input name="name" value={form.name} onChange={handleChange} placeholder="Full name" className="w-full rounded-md border border-border px-4 py-2 bg-card" />
        <input name="email" value={form.email} onChange={handleChange} placeholder="Email address" type="email" className="w-full rounded-md border border-border px-4 py-2 bg-card" />
        <select name="course" value={form.course} onChange={handleChange} className="w-full rounded-md border border-border px-4 py-2 bg-card">
          <option>Close Protection</option>
          <option>Close Protection Level 3</option>
          <option>Diplomatic Protection Programme</option>
          <option>Counter-Terrorism Protection Programme</option>
          <option>Surveillance &amp; Intelligence Programme</option>
          <option>Protective Intelligence &amp; Advance Work Programme</option>
          <option>Hostile Environment Awareness Training (HEAT)</option>
          <option>Protective Medical Support Programme</option>
          <option>Tactical Driving Programme</option>
        </select>
        <input name="date" value={form.date} onChange={handleChange} placeholder="Preferred date" type="date" className="w-full rounded-md border border-border px-4 py-2 bg-card" />
        <textarea name="message" value={form.message} onChange={handleChange} placeholder="Message (optional)" className="w-full rounded-md border border-border px-4 py-2 bg-card" rows={4} />
        <div className="flex items-center gap-3">
          <button type="submit" className="inline-flex items-center px-5 py-3 rounded-md bg-primary text-primary-foreground font-semibold">Send request</button>
          <button type="button" onClick={() => setForm({ name: "", email: "", course: "Close Protection", date: "", message: "" })} className="inline-flex items-center px-4 py-2 rounded-md border border-border">Clear</button>
        </div>
      </form>
    </div>
  );
}
