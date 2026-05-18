import { NextResponse } from 'next/server';
import data from '../../../../context/triggers.json';

export async function GET(
  request: Request,
  { params }: { params: { name: string } }
) {
  const triggerName = params.name;
  
  const trigger = data.find((t: any) => t.name === triggerName);
  
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
