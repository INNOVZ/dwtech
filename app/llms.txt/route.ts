import { services } from "@/lib/site-data";

export function GET() {
  const body = `# DW Tech\n\nDW Tech is the technology and digital-transformation vertical of Desert Whales Marketing Services LLC. We design and build intelligent digital ecosystems that help businesses operate smarter, scale faster, and compete stronger.\n\n## Services\n${services.map((service) => `- ${service.title}: ${service.short}`).join("\n")}\n\n## Locations\nDubai, Thiruvananthapuram, Kozhikode, Riyadh, and Milan.\n\n## Contact\nEmail: tech@thedesertwhales.com\nWebsite: https://dwhalestech.com\n`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "public, max-age=3600" } });
}
