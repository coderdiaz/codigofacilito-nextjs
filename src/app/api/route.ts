export async function GET(
  request: Request,
  context: { params: { id: string } }
) {
  return Response.json({
    message: 'Hello from API routes',
  });
}
