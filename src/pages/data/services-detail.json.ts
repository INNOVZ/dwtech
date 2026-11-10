import type { APIRoute } from "astro";
import rawServicesData from "@/data/services-detail.json";

export const prerender = true;

export const GET: APIRoute = async () => {
  return new Response(JSON.stringify(rawServicesData), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "public, max-age=3600",
    },
  });
};

