export default async (request) => {
  if (request.method !== "GET") {
    return new Response("Method not allowed", { status: 405 });
  }

  return new Response("AKA153_FUNCTION_A", {
    status: 200,
    headers: { "content-type": "text/plain; charset=utf-8" },
  });
};

export const config = {
  method: "GET",
};
