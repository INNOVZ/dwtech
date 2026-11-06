import type { APIRoute } from "astro";
import { Resend } from "resend";

export const prerender = false; // Runs dynamically as a serverless function on Vercel

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    const {
      name,
      email,
      phone,
      company,
      branch = "Dubai, UAE",
      service = "General Inquiry",
      budget,
      message,
      honeypot,
    } = data;

    // 1. Invisible bot spam trap (honeypot field)
    if (honeypot) {
      return new Response(
        JSON.stringify({ success: true, message: "Submission accepted" }),
        { status: 200, headers: { "Content-Type": "application/json" } }
      );
    }

    // 2. Strict input validation
    if (!name || typeof name !== "string" || !name.trim()) {
      return new Response(
        JSON.stringify({ error: "Please provide your full name." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    if (!email || typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      return new Response(
        JSON.stringify({ error: "Please provide a valid work email address." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length < 10) {
      return new Response(
        JSON.stringify({ error: "Please enter a detailed message (at least 10 characters)." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const recipientEmail =
      process.env.CONTACT_RECIPIENT_EMAIL ||
      import.meta.env.CONTACT_RECIPIENT_EMAIL ||
      "tech@thedesertwhales.com";

    const fromEmail =
      process.env.RESEND_FROM_EMAIL ||
      import.meta.env.RESEND_FROM_EMAIL ||
      "DW Tech Inquiries <onboarding@resend.dev>";

    const apiKey =
      process.env.RESEND_API_KEY ||
      import.meta.env.RESEND_API_KEY;

    // 3. Dev / Fallback Simulation Mode if RESEND_API_KEY is not yet populated
    if (!apiKey || apiKey === "re_your_api_key_here") {
      console.warn(
        "⚠️ [DW Tech Contact] RESEND_API_KEY is not configured. Simulating successful submission in dev mode:\n",
        { name, email, phone, company, branch, service, budget, message }
      );

      return new Response(
        JSON.stringify({
          success: true,
          simulated: true,
          message:
            "Inquiry received in dev mode. Set RESEND_API_KEY in your environment to dispatch live emails.",
        }),
        { status: 200, headers: { "Content-Type": "application/json" } }
      );
    }

    // 4. Live Resend Email Dispatch
    const resend = new Resend(apiKey);

    const safeMessageHtml = message
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/\n/g, "<br>");

    const emailResult = await resend.emails.send({
      from: fromEmail,
      to: recipientEmail,
      replyTo: email.trim(),
      subject: `[DW Tech Project Inquiry] ${name.trim()} · ${company ? company.trim() + " · " : ""}${branch}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f7f6fb; margin: 0; padding: 24px; color: #1a0046; }
            .container { max-width: 620px; margin: 0 auto; background: #ffffff; border-radius: 16px; border: 1px solid #e8e2f2; overflow: hidden; box-shadow: 0 4px 24px rgba(49,25,89,0.06); }
            .header { background: #311959; padding: 28px 32px; color: #ffffff; }
            .header h1 { margin: 0; font-size: 20px; font-weight: 700; letter-spacing: -0.02em; }
            .header p { margin: 6px 0 0; font-size: 13px; color: #d7c9f4; }
            .content { padding: 32px; }
            .grid-table { width: 100%; border-collapse: collapse; margin-bottom: 24px; }
            .grid-table td { padding: 10px 12px; border-bottom: 1px solid #f0ecf6; font-size: 14px; }
            .grid-table td.label { font-weight: 600; color: #695e7c; width: 34%; }
            .grid-table td.val { color: #1a0046; font-weight: 500; }
            .badge { display: inline-block; padding: 4px 10px; font-size: 11px; font-weight: 700; border-radius: 6px; background: #f2e9fc; color: #311959; text-transform: uppercase; letter-spacing: 0.05em; }
            .message-box { background: #faf8fd; border-left: 4px solid #311959; padding: 18px 20px; border-radius: 0 8px 8px 0; font-size: 14px; line-height: 1.65; color: #352b47; margin-top: 8px; }
            .footer { padding: 20px 32px; background: #faf9fc; border-top: 1px solid #f0ecf6; font-size: 12px; color: #857e93; text-align: center; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>New Inbound Technology Inquiry</h1>
              <p>Submitted via dwtech online strategy portal</p>
            </div>
            <div class="content">
              <table class="grid-table">
                <tr>
                  <td class="label">Full Name</td>
                  <td class="val"><strong>${name.trim()}</strong></td>
                </tr>
                <tr>
                  <td class="label">Work Email</td>
                  <td class="val"><a href="mailto:${email.trim()}" style="color:#311959;text-decoration:underline;">${email.trim()}</a></td>
                </tr>
                <tr>
                  <td class="label">Phone / WhatsApp</td>
                  <td class="val">${phone ? phone.trim() : "<span style='color:#a59eb0'>Not provided</span>"}</td>
                </tr>
                <tr>
                  <td class="label">Company / Org</td>
                  <td class="val">${company ? company.trim() : "<span style='color:#a59eb0'>Not provided</span>"}</td>
                </tr>
                <tr>
                  <td class="label">Target Branch</td>
                  <td class="val"><span class="badge">${branch}</span></td>
                </tr>
                <tr>
                  <td class="label">Service Interest</td>
                  <td class="val">${service}</td>
                </tr>
                ${
                  budget
                    ? `<tr><td class="label">Estimated Budget</td><td class="val">${budget}</td></tr>`
                    : ""
                }
              </table>

              <p style="margin: 20px 0 6px; font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: #695e7c;">
                Project Requirements / Message:
              </p>
              <div class="message-box">
                ${safeMessageHtml}
              </div>
            </div>
            <div class="footer">
              DW Tech · Digital Business Transformation · Dubai HQ · Riyadh · Kerala · Milan
            </div>
          </div>
        </body>
        </html>
      `,
    });

    if (emailResult.error) {
      console.error("Resend API Error:", emailResult.error);
      return new Response(
        JSON.stringify({ error: emailResult.error.message || "Email dispatch failed" }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    return new Response(
      JSON.stringify({
        success: true,
        id: emailResult.data?.id,
        message: "Your message has been received. Our leadership team will be in touch shortly.",
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (err: any) {
    console.error("Unexpected Contact API Error:", err);
    return new Response(
      JSON.stringify({ error: "An unexpected error occurred while processing your request." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};

