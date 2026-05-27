import { NextResponse } from 'next/server';
import functions from '@/context/functions.json';
import triggers from '@/context/triggers.json';
import fs from 'node:fs';
import path from 'node:path';

export async function GET() {
  // Functions count
  const functionsCount = functions.length;

  // Triggers count
  const triggersCount = triggers.length;

  // Categories count
  const categoriesPath = path.join(process.cwd(), 'context', 'categories.txt');
  const categoriesRaw = fs.readFileSync(categoriesPath, 'utf8');
  const categoryLines = categoriesRaw.split('\n');
  const uniqueCategories = new Set(
    categoryLines
      .filter(line => line.includes(' - '))
      .map(line => line.split(' - ')[1].trim())
  );
  const categoriesCount = uniqueCategories.size;

  // Fetch Version from GitHub
  let version = 'unknown';
  try {
    const response = await fetch('https://raw.githubusercontent.com/zbrlang/zbr/main/package.json', {
      next: { revalidate: 3600 },
    });
    if (response.ok) {
      const data = await response.json();
      version = data.version;
    }
  } catch (e) {
    console.error('Failed to fetch ZBR version', e);
  }

  return NextResponse.json({
    functionsCount,
    categoriesCount,
    triggersCount,
    version
  }, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
