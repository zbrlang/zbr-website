import { NextResponse } from 'next/server';
import data from '../../../../context/functions.json';

export async function GET(
  request: Request,
  { params }: { params: { name: string } }
) {
  const functionName = params.name;
  
  const func = data.find((f: any) => f.name === functionName);
  
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
