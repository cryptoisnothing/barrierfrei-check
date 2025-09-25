"use client";

import { useState } from "react";

export default function KontaktPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Kontaktformular:", form);
    setSent(true);
  };

  return (
    <main className="max-w-3xl mx-auto px-6 py-16 space-y-6 text-gray-700">
      <h1 className="text-3xl font-bold mb-6">Kontakt</h1>
      {!sent ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Dein Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full border rounded-lg px-4 py-2"
            required
          />
          <input
            type="email"
            placeholder="Deine E-Mail"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full border rounded-lg px-4 py-2"
            required
          />
          <textarea
            placeholder="Deine Nachricht"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full border rounded-lg px-4 py-2 h-32"
            required
          />
          <button
            type="submit"
            className="px-6 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
          >
            Nachricht senden
          </button>
        </form>
      ) : (
        <p className="text-green-600 font-medium">
          Danke für deine Nachricht! Wir melden uns bald bei dir.
        </p>
      )}
    </main>
  );
}
