import { NextResponse } from 'next/server';
import rawData from '../../../context/triggers_tag.json';

export async function GET() {
  if (!Array.isArray(rawData)) {
    return NextResponse.json(
      { error: 'Internal server error: trigger tags data is malformed' },
      { status: 500,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
        },
      }
    );
  }

  return NextResponse.json(rawData, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
