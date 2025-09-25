# Barrierfrei‑Check (Next.js + Tailwind)

## 1) Lokal starten
```bash
npm i
npm run dev
```
→ öffne http://localhost:3000

## 2) Deploy auf Vercel (kostenlos)
1. vercel.com → Account anlegen → „New Project“ → „Import Third‑Party Git Repository“ oder „Upload“.
2. Deinen Projektordner hochladen.
3. Build Settings: Framework = **Next.js**, sonst Standard.
4. Deploy klicken → URL wird ausgegeben.

## 3) Domain verbinden
- Domain bei Namecheap/Hetzner/Inwx kaufen.
- In Vercel: Project → Settings → Domains → deine Domain eintragen → DNS‑Einträge folgen.

## Hinweise
- Server‑Route `/api/scan` lädt HTML und prüft Basisregeln. **Kein Headless‑Chrome nötig.**
- Das ist ein **Schnellcheck** (ca. 60–70% der typischen WCAG‑Basisfehler). Für 100%‑Konformität wären zusätzliche manuelle Tests nötig (Screenreader/Keyboard etc.).
- Du kannst die Heuristiken in `lib/analyzer.ts` erweitern (z. B. Kontrast‑Schätzung mit CSS‑Parsing).
