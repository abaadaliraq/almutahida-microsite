export async function assetExists(src?: string) {
  if (!src) {
    return false;
  }

  try {
    const response = await fetch(src, { method: "HEAD" });
    return response.ok;
  } catch {
    return false;
  }
}
