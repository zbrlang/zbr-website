import { NextResponse } from 'next/server';
import rawData from '../../../../context/functions.json';

export async function GET(
  request: Request,
  { params }: { params: { name: string } }
) {
  if (!Array.isArray(rawData)) {
    return NextResponse.json(
      { error: 'Internal server error: functions data is malformed' },
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
  const functionName = params.name;
  
  const func = data.find((f) => f.name === functionName);
  
  if (!func) {
    return NextResponse.json(
      { error: `Function "${functionName}" not found` },
      { status: 404,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
        },
      }
    );
  }
  
  return NextResponse.json(func, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
