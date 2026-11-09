import { useState } from "react";
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { ArrowUpRight } from "@/components/layout/icons";

const branches = [
  "Dubai, UAE (Global HQ)",
  "Riyadh, Saudi Arabia",
  "Kerala, India",
  "Milan, Italy",
  "Other / Global Remote",
] as const;

const servicesList = [
  "AI & Automation Solutions",
  "Custom Software Development",
  "ERP & CRM Solutions",
  "Mobile App Development",
  "Digital Business Transformation",
  "UI/UX Design",
  "IT Consulting & Strategy",
] as const;

const budgetOptions = [
  "< $1k",
  "$1k – $5k",
  "$5k – $10k",
  "$10k+",
  "Exploring / Flexible",
] as const;

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    branch: "Dubai, UAE (Global HQ)",
    service: "AI & Automation Solutions",
    budget: "$25k – $50k",
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

    const formEl = e.currentTarget;
    const formValues = new FormData(formEl);

    const payload = {
      name: (formValues.get("name") as string)?.trim() || formData.name.trim(),
      email:
        (formValues.get("email") as string)?.trim() || formData.email.trim(),
      phone:
        (formValues.get("phone") as string)?.trim() || formData.phone.trim(),
      company:
        (formValues.get("company") as string)?.trim() ||
        formData.company.trim(),
      branch: (formValues.get("branch") as string)?.trim() || formData.branch,
      service: formData.service,
      budget: formData.budget,
      message:
        (formValues.get("message") as string)?.trim() ||
        formData.message.trim(),
      honeypot:
        (formValues.get("honeypot") as string)?.trim() ||
        formData.honeypot.trim(),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.error || "Failed to submit form");
      }

      setStatus("success");
    } catch (err: any) {
      setStatus("error");
      setErrorMessage(
        err.message ||
          "An error occurred while dispatching your inquiry. Please try again or email us directly.",
      );
    }
  };

  if (status === "success") {
    return (
      <div
        role="status"
        aria-live="polite"
        className="rounded-[28px] bg-white border border-[#e2dded] p-8 sm:p-12 text-center max-w-[680px] mx-auto shadow-none"
      >
        <div className="size-14 rounded-full bg-[#f4effc] border border-[#311959]/20 grid place-items-center mx-auto mb-5 text-[#311959]">
          <CheckCircle2 className="size-7" />
        </div>
        <span className="inline-block px-2.5 py-1 rounded-md text-[11px] font-mono tracking-wider uppercase font-semibold text-[#311959] bg-[#f4effc] border border-[#311959]/20 mb-4">
          Inquiry Dispatched
        </span>
        <h3 className="text-2xl sm:text-3xl font-bold text-[#05040e] mb-3 tracking-tight font-manrope">
          Thank you, {formData.name.split(" ")[0]}!
        </h3>
        <p className="text-base text-[#5e5868] leading-relaxed max-w-[500px] mx-auto mb-8">
          Your project inquiry has been delivered directly to our technical
          strategy team for{" "}
          <strong className="text-[#311959]">{formData.branch}</strong>. We
          review requirements thoroughly and typically reply within 1 business
          day.
        </p>

        <div className="pt-6 border-t border-black/[0.08] flex flex-wrap items-center justify-center gap-4 text-xs">
          <button
            type="button"
            onClick={() => {
              setFormData({
                name: "",
                email: "",
                phone: "",
                company: "",
                branch: "Dubai, UAE (Global HQ)",
                service: "AI & Automation Solutions",
                budget: "$25k – $50k",
                message: "",
                honeypot: "",
              });
              setStatus("idle");
            }}
            className="font-semibold uppercase font-mono tracking-wider text-[#311959] hover:underline cursor-pointer"
          >
            ← Send another message
          </button>
          <span className="text-black/20">·</span>
          <a
            href="mailto:tech@thedesertwhales.com"
            className="text-[#6e677c] hover:text-[#311959]"
          >
            Direct: tech@thedesertwhales.com
          </a>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      aria-label="Project inquiry form"
      className="rounded-[28px] bg-white border border-[#e2dded] p-7 sm:p-10 lg:p-12 shadow-none"
    >
      {/* Invisible Honeypot Spam Field */}
      <input
        type="text"
        name="honeypot"
        value={formData.honeypot}
        onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      {status === "error" && (
        <div
          role="alert"
          aria-live="assertive"
          className="mb-8 rounded-xl bg-red-50 border border-red-200 p-4 text-sm text-red-800 flex items-start gap-3"
        >
          <AlertCircle className="size-5 shrink-0 text-red-600 mt-0.5" />
          <div>
            <p className="font-semibold m-0">Submission Failed</p>
            <p className="m-0 mt-1">{errorMessage}</p>
            <p className="m-0 mt-2 text-xs">
              Direct fallback:{" "}
              <a
                href="mailto:tech@thedesertwhales.com"
                className="underline font-medium"
              >
                tech@thedesertwhales.com
              </a>
            </p>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
        {/* Full Name */}
        <div>
          <label
            htmlFor="contact-name"
            className="block text-xs font-semibold text-[#1a0046] uppercase font-mono tracking-wider mb-2"
          >
            Your Name <span className="text-[#311959]">*</span>
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            aria-required="true"
            autoComplete="name"
            placeholder="e.g. Sarah Al-Rashid"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full rounded-xl border border-[#d8d0e5] bg-[#faf9fd] px-4 py-3 text-sm text-[#05040e] placeholder-[#9c95a6] transition-colors focus:border-[#311959] focus:bg-white focus:outline-none"
          />
        </div>

        {/* Work Email */}
        <div>
          <label
            htmlFor="contact-email"
            className="block text-xs font-semibold text-[#1a0046] uppercase font-mono tracking-wider mb-2"
          >
            Work Email <span className="text-[#311959]">*</span>
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            aria-required="true"
            autoComplete="email"
            placeholder="e.g. sarah@company.com"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="w-full rounded-xl border border-[#d8d0e5] bg-[#faf9fd] px-4 py-3 text-sm text-[#05040e] placeholder-[#9c95a6] transition-colors focus:border-[#311959] focus:bg-white focus:outline-none"
          />
        </div>

        {/* Phone / WhatsApp */}
        <div>
          <label
            htmlFor="contact-phone"
            className="block text-xs font-semibold text-[#1a0046] uppercase font-mono tracking-wider mb-2"
          >
            Phone / WhatsApp
          </label>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="e.g. +971 50 123 4567"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            className="w-full rounded-xl border border-[#d8d0e5] bg-[#faf9fd] px-4 py-3 text-sm text-[#05040e] placeholder-[#9c95a6] transition-colors focus:border-[#311959] focus:bg-white focus:outline-none"
          />
        </div>

        {/* Company Name */}
        <div>
          <label
            htmlFor="contact-company"
            className="block text-xs font-semibold text-[#1a0046] uppercase font-mono tracking-wider mb-2"
          >
            Company / Organization
          </label>
          <input
            id="contact-company"
            name="company"
            type="text"
            autoComplete="organization"
            placeholder="e.g. Horizon Logistics LLC"
            value={formData.company}
            onChange={(e) =>
              setFormData({ ...formData, company: e.target.value })
            }
            className="w-full rounded-xl border border-[#d8d0e5] bg-[#faf9fd] px-4 py-3 text-sm text-[#05040e] placeholder-[#9c95a6] transition-colors focus:border-[#311959] focus:bg-white focus:outline-none"
          />
        </div>
      </div>

      {/* Target Branch Location */}
      <div className="mb-6">
        <label
          htmlFor="contact-branch"
          className="block text-xs font-semibold text-[#1a0046] uppercase font-mono tracking-wider mb-2"
        >
          Target Branch / Regional Hub
        </label>
        <select
          id="contact-branch"
          name="branch"
          value={formData.branch}
          onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
          className="w-full rounded-xl border border-[#d8d0e5] bg-[#faf9fd] px-4 py-3 text-sm text-[#05040e] transition-colors focus:border-[#311959] focus:bg-white focus:outline-none cursor-pointer"
        >
          {branches.map((b) => (
            <option key={b} value={b}>
              {b}
            </option>
          ))}
        </select>
      </div>

      {/* Service Focus */}
      <div className="mb-6">
        <label className="block text-xs font-semibold text-[#1a0046] uppercase font-mono tracking-wider mb-2">
          Service Focus
        </label>
        <div className="flex flex-wrap gap-2">
          {servicesList.map((svc) => {
            const isSelected = formData.service === svc;
            return (
              <button
                type="button"
                key={svc}
                onClick={() => setFormData({ ...formData, service: svc })}
                className={`px-3 py-1.5 rounded-md text-[11px] font-mono tracking-wider uppercase font-semibold transition-all cursor-pointer ${
                  isSelected
                    ? "bg-[#311959] text-white shadow-none"
                    : "bg-[#f4effc] text-[#311959] hover:bg-[#ebe1f8] border border-[#311959]/20"
                }`}
              >
                {svc}
              </button>
            );
          })}
        </div>
      </div>

      {/* Budget / Scope */}
      <div className="mb-6">
        <label className="block text-xs font-semibold text-[#1a0046] uppercase font-mono tracking-wider mb-2">
          Estimated Project Scope / Budget
        </label>
        <div className="flex flex-wrap gap-2">
          {budgetOptions.map((opt) => {
            const isSelected = formData.budget === opt;
            return (
              <button
                type="button"
                key={opt}
                onClick={() => setFormData({ ...formData, budget: opt })}
                className={`px-3 py-1.5 rounded-md text-[11px] font-mono tracking-wider uppercase font-semibold transition-all cursor-pointer ${
                  isSelected
                    ? "bg-[#311959] text-white shadow-none"
                    : "bg-[#f4effc] text-[#311959] hover:bg-[#ebe1f8] border border-[#311959]/20"
                }`}
              >
                {opt}
              </button>
            );
          })}
        </div>
      </div>

      {/* Project Details Message */}
      <div className="mb-8">
        <label
          htmlFor="contact-message"
          className="block text-xs font-semibold text-[#1a0046] uppercase font-mono tracking-wider mb-2"
        >
          Project Overview & Objectives{" "}
          <span className="text-[#311959]">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          aria-required="true"
          rows={4}
          placeholder="Briefly describe your systems, operational goals, or project scope..."
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          className="w-full rounded-xl border border-[#d8d0e5] bg-[#faf9fd] px-4 py-3 text-sm text-[#05040e] placeholder-[#9c95a6] transition-colors focus:border-[#311959] focus:bg-white focus:outline-none"
        />
      </div>

      {/* Submit Button (DW Tech Pill with Arrow) */}
      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center gap-3 bg-[#311959] text-white hover:bg-[#311959]/90 transition-colors px-8 py-3.5 rounded-full text-base font-semibold shadow-none cursor-pointer disabled:opacity-60"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="size-4 animate-spin" />
            <span>Dispatching inquiry...</span>
          </>
        ) : (
          <>
            <span>Submit Project Inquiry</span>
            <ArrowUpRight className="size-4" />
          </>
        )}
      </button>

      <p className="mt-4 text-[11px] text-[#837b90] leading-relaxed">
        Strict confidentiality: Handled under UAE Federal Decree-Law No. 45 and
        international enterprise security standards.
      </p>
    </form>
  );
}
