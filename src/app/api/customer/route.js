export async function GET(request) {
  return Response.json({ data: [] });
}

export async function POST(request) {
  const body = await request.text();
  console.log(body);
  return Response.json({ data: {} });
}

export async function PUT(request) {
  const body = await request.text();
  console.log(body);
  return Response.json({ data: {} });
}
