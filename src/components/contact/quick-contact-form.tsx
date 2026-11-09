import { useState } from "react";
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { ArrowUpRight } from "@/components/layout/icons";

export default function QuickContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    honeypot: "",
  });

  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage(null);

    const payload = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      company: "",
      branch: "Dubai, UAE (Global HQ)",
      service: "Quick Footer Enquiry",
      budget: "Flexible",
      message: formData.message.trim(),
      honeypot: formData.honeypot.trim(),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.error || "Failed to submit enquiry");
      }

      setStatus("success");
    } catch (err: any) {
      setStatus("error");
      setErrorMessage(
        err.message ||
          "An error occurred while sending your message. Please try again or email us directly.",
      );
    }
  };

  if (status === "success") {
    return (
      <div
        role="status"
        aria-live="polite"
        className="w-full rounded-2xl border border-orchid/35 bg-white/[0.03] backdrop-blur-md p-6 text-center"
      >
        <CheckCircle2 className="mx-auto size-9 text-orchid mb-2.5" />
        <h4 className="text-base font-semibold text-white mb-1">
          Enquiry Received
        </h4>
        <p className="text-xs text-[#cfcad8] leading-relaxed mb-4">
          Thank you for reaching out. Our engineering team will review your requirements and respond shortly.
        </p>
        <button
          type="button"
          onClick={() => {
            setStatus("idle");
            setFormData({
              name: "",
              email: "",
              phone: "",
              message: "",
              honeypot: "",
            });
          }}
          className="text-xs font-semibold text-orchid hover:underline cursor-pointer"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <div className="w-full rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md p-5 sm:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.45)]">
      <form
        onSubmit={handleSubmit}
        aria-label="Quick project enquiry form"
        className="space-y-3.5"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label htmlFor="quick-name" className="sr-only">
              Your Name
            </label>
            <input
              id="quick-name"
              type="text"
              name="name"
              required
              aria-required="true"
              autoComplete="name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              placeholder="Your name *"
              className="w-full rounded-xl bg-white/[0.05] border border-white/15 px-3.5 py-2.5 text-sm text-white placeholder-white/40 focus:border-orchid focus:bg-white/[0.08] focus:outline-none transition-colors"
            />
          </div>
          <div>
            <label htmlFor="quick-email" className="sr-only">
              Work Email
            </label>
            <input
              id="quick-email"
              type="email"
              name="email"
              required
              aria-required="true"
              autoComplete="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              placeholder="Work email *"
              className="w-full rounded-xl bg-white/[0.05] border border-white/15 px-3.5 py-2.5 text-sm text-white placeholder-white/40 focus:border-orchid focus:bg-white/[0.08] focus:outline-none transition-colors"
            />
          </div>
        </div>

        <div>
          <label htmlFor="quick-phone" className="sr-only">
            Phone Number
          </label>
          <input
            id="quick-phone"
            type="tel"
            name="phone"
            autoComplete="tel"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            placeholder="Phone number"
            className="w-full rounded-xl bg-white/[0.05] border border-white/15 px-3.5 py-2.5 text-sm text-white placeholder-white/40 focus:border-orchid focus:bg-white/[0.08] focus:outline-none transition-colors"
          />
        </div>

        <div>
          <label htmlFor="quick-message" className="sr-only">
            Message
          </label>
          <textarea
            id="quick-message"
            name="message"
            required
            aria-required="true"
            rows={3}
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            placeholder="Tell us about your project... *"
            className="w-full rounded-xl bg-white/[0.05] border border-white/15 px-3.5 py-2.5 text-sm text-white placeholder-white/40 focus:border-orchid focus:bg-white/[0.08] focus:outline-none transition-colors resize-none"
          />
        </div>

        {/* Bot trap */}
        <div className="hidden" aria-hidden="true">
          <input
            type="text"
            name="honeypot"
            value={formData.honeypot}
            onChange={(e) =>
              setFormData({ ...formData, honeypot: e.target.value })
            }
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        {errorMessage && (
          <div
            role="alert"
            aria-live="assertive"
            className="flex items-center gap-2 rounded-xl border border-red-500/30 bg-red-500/10 p-3 text-xs text-red-300"
          >
            <AlertCircle className="size-4 shrink-0 text-red-400" />
            <span>{errorMessage}</span>
          </div>
        )}

        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-orchid px-5 py-3 text-sm font-semibold text-white hover:bg-orchid/90 active:scale-[0.99] transition-all disabled:opacity-50 cursor-pointer shadow-[0_8px_20px_rgba(176,99,255,0.25)]"
        >
          {status === "submitting" ? (
            <>
              <Loader2 className="size-4 animate-spin" />
              <span>Sending enquiry...</span>
            </>
          ) : (
            <>
              <span>Make an Enquiry</span>
              <ArrowUpRight className="size-4" />
            </>
          )}
        </button>
      </form>
    </div>
  );
}

