import { NextResponse } from 'next/server';
import rawData from '../../../../context/triggers.json';

export async function GET(
  request: Request,
  { params }: { params: { name: string } }
) {
  if (!Array.isArray(rawData)) {
    return NextResponse.json(
      { error: 'Internal server error: triggers data is malformed' },
      { status: 500,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
        },
      }
    );
  }

  const data = rawData as { name: string }[];
  const triggerName = params.name;
  
  const trigger = data.find((t) => t.name === triggerName);
  
  if (!trigger) {
    return NextResponse.json(
      { error: `Trigger "${triggerName}" not found` },
      { status: 404,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
        },
      }
    );
  }
  
  return NextResponse.json(trigger, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
