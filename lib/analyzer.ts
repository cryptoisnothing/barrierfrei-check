import * as cheerio from 'cheerio';

export type Issue = {
  id: string;
  title: string;
  severity: 'critical' | 'major' | 'minor';
  detail: string;
  selector?: string;
  wcag?: string;
};

export type ScanResult = {
  url: string;
  score: number; // 0-100
  issues: Issue[];
  stats: {
    images: number;
    imagesMissingAlt: number;
    links: number;
    genericLinks: number;
    headingsH1: number;
    inputs: number;
    inputsWithoutLabel: number;
  };
  summary: string[]; // kurze Bulletpoints
  timestamp: string;
};

function penaltyFor(count: number, weight: number) {
  return Math.min(30, count * weight);
}

export function analyzeHtml(html: string, url: string): ScanResult {
  const $ = cheerio.load(html);

  const issues: Issue[] = [];
  const stats = {
    images: $('img').length,
    imagesMissingAlt: 0,
    links: $('a').length,
    genericLinks: 0,
    headingsH1: $('h1').length,
    inputs: $('input, textarea, select').length,
    inputsWithoutLabel: 0,
  };

  // 1) Sprache
  const htmlLang = $('html').attr('lang');
  if (!htmlLang) {
    issues.push({ id: 'lang-missing', title: 'Sprachangabe fehlt', severity: 'major', detail: '<html lang="…"> ist nicht gesetzt.', wcag: '3.1.1' });
  }

  // 2) Alt-Texte
  $('img').each((idx, el) => {
    const alt = $(el).attr('alt');
    if (alt === undefined || alt === '') {
      stats.imagesMissingAlt++;
      if (stats.imagesMissingAlt <= 5) {
        issues.push({ id: `img-alt-${stats.imagesMissingAlt}`, title: 'Alternativtext fehlt', severity: 'major', detail: 'Ein Bild hat keinen aussagekräftigen Alternativtext.', selector: $(el).attr('src') ?? '', wcag: '1.1.1' });
      }
    }
  });

  // 3) Links (generisch)
  const badLinkRegex = /^(hier klicken|mehr|weiter|mehr erfahren|click here|read more)$/i;
  $('a').each((idx, el) => {
    const text = ($(el).text() || '').trim();
    if (text && badLinkRegex.test(text)) {
      stats.genericLinks++;
      if (stats.genericLinks <= 5) {
        issues.push({ id: `link-generic-${stats.genericLinks}`, title: 'Nicht aussagekräftiger Linktext', severity: 'minor', detail: `Linktext "${text}" ist zu generisch.`, wcag: '2.4.4' });
      }
    }
  });

  // 4) Form Labels
  $('input, textarea, select').each((idx, el) => {
    const id = $(el).attr('id');
    const ariaLabel = $(el).attr('aria-label');
    const labelled = ariaLabel || (id && $(`label[for="${id}"]`).length > 0) || $(el).closest('label').length > 0;
    if (!labelled) {
      stats.inputsWithoutLabel++;
    }
  });
  if (stats.inputsWithoutLabel > 0) {
    issues.push({ id: 'inputs-labels', title: 'Formularfelder ohne Label', severity: 'major', detail: `${stats.inputsWithoutLabel} Eingabefeld(er) ohne sichtbares Label oder aria-label.`, wcag: '3.3.2' });
  }

  // 5) Mehrere H1
  if (stats.headingsH1 > 1) {
    issues.push({ id: 'multi-h1', title: 'Mehrere H1-Überschriften', severity: 'minor', detail: `${stats.headingsH1} H1-Elemente gefunden. Nur 1 H1 empfohlen.`, wcag: '1.3.1' });
  }

  // 6) Buttons ohne Text/Label
  $('button').each((idx, el) => {
    const txt = ($(el).text() || '').trim();
    const aria = $(el).attr('aria-label');
    if (!txt && !aria) {
      issues.push({ id: 'btn-empty-' + idx, title: 'Button ohne Text/Label', severity: 'major', detail: 'Ein Button hat keinen sichtbaren Text oder aria-label.', wcag: '4.1.2' });
    }
  });

  // Heuristischer Score
  let score = 100;
  score -= penaltyFor(issues.filter(i => i.severity === 'critical').length, 10);
  score -= penaltyFor(issues.filter(i => i.severity === 'major').length, 5);
  score -= penaltyFor(issues.filter(i => i.severity === 'minor').length, 2);
  score = Math.max(0, Math.min(100, score));

  const summary: string[] = [];
  if (!htmlLang) summary.push('Sprachangabe (lang) fehlt.');
  if (stats.imagesMissingAlt > 0) summary.push(`${stats.imagesMissingAlt} Bild(er) ohne Alt-Text.`);
  if (stats.genericLinks > 0) summary.push(`${stats.genericLinks} generische Linktexte.`);
  if (stats.inputsWithoutLabel > 0) summary.push(`${stats.inputsWithoutLabel} Formularfeld(er) ohne Label.`);
  if (stats.headingsH1 > 1) summary.push('Mehr als 1× H1-Überschrift.');

  return {
    url,
    score,
    issues,
    stats,
    summary,
    timestamp: new Date().toISOString()
  };
}
