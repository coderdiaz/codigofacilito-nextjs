export async function GET(request, context) {
  const id = context.params.id;
  return Response.json({
    data: {
      id,
    },
  });
}
