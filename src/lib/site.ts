export function getSiteUrl() {
  const value = process.env.URL ?? process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  return new URL(value.startsWith("http") ? value : `https://${value}`);
}
