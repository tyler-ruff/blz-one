export async function getIdToken(req: Request) {
  const authorizationHeader = req.headers.get("authorization") || "";
  const components = authorizationHeader.split(" ");
  return components.length > 1 ? components[1] : "";
}