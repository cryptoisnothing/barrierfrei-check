import { NextResponse } from 'next/server';
import { analyzeHtml } from '../../../lib/analyzer';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export const revalidate = 0;

async function fetchHtml(url: string): Promise<string> {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), 15000);
  try {
    const res = await fetch(url, {
      signal: controller.signal,
      headers: { 'User-Agent': 'Mozilla/5.0 BarrierfreiCheck' },
      redirect: 'follow',
    });
    if (!res.ok) throw new Error('Fehler beim Laden der Seite');
    return await res.text();
  } finally {
    clearTimeout(id);
  }
}

export async function POST(req: Request) {
  try {
    const { url } = await req.json();
    if (!url || typeof url !== 'string') {
      return NextResponse.json({ error: 'URL fehlt' }, { status: 400 });
    }
    const normalized = url.startsWith('http') ? url : `https://${url}`;
    const html = await fetchHtml(normalized);
    const result = analyzeHtml(html, normalized);
    return NextResponse.json(result);
  } catch (e: any) {
    return NextResponse.json({ error: e?.message ?? 'Unbekannter Fehler' }, { status: 500 });
  }
}
