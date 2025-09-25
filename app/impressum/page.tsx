export default function ImpressumPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16 space-y-6 text-gray-700">
      <h1 className="text-3xl font-bold mb-6">Impressum</h1>
      <p><strong>Angaben gemäß § 5 TMG:</strong></p>
      <p>
        [Dein Vor- und Nachname]<br />
        [Deine Straße Nr.]<br />
        [PLZ Ort]<br />
      </p>
      <p>
        <strong>Kontakt:</strong><br />
        E-Mail: [deine@email.de]<br />
        Telefon: [01234 / 567890]
      </p>
      <p>
        <strong>Haftungsausschluss:</strong><br />
        Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung
        für Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind
        ausschließlich deren Betreiber verantwortlich.
      </p>
    </main>
  );
}
