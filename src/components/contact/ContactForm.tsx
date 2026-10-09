"use client";

import { useState, type FormEvent } from "react";
import { Icon } from "@/components/ui/Icon";
import { Magnetic } from "@/components/animations/Magnetic";
import { services } from "@/data/services";
import { mailtoLink, site, whatsappLink } from "@/data/site";

type Channel = "whatsapp" | "email";

const revenueOptions = [
  "Just starting",
  "< $5K / mo",
  "$5K – $20K / mo",
  "$20K – $50K / mo",
  "$50K+ / mo",
];

const quickServices = [
  "TikTok Shop Setup",
  "Shoppable Video Content",
  "TikTok Shop Ads & GMV Max",
  "LIVE Shopping Management",
  "Affiliate & Creator Marketing",
  "Full Shop Management",
];

export function ContactForm() {
  const [sentVia, setSentVia] = useState<Channel | null>(null);
  const [selectedService, setSelectedService] = useState<string>("");
  const [selectedRevenue, setSelectedRevenue] = useState<string>("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const submitter = (event.nativeEvent as SubmitEvent).submitter as HTMLButtonElement | null;
    const channel: Channel = submitter?.value === "email" ? "email" : "whatsapp";
    const data = new FormData(event.currentTarget);
    const field = (key: string) => String(data.get(key) ?? "").trim();

    const details = [
      ["Name", field("name")],
      ["Email", field("email")],
      ["Phone / WhatsApp", field("phone")],
      ["Brand / Store", field("brand")],
      ["Website / Shop link", field("website")],
      ["Service", selectedService || field("service")],
      ["Current monthly sales", selectedRevenue || field("revenue")],
    ]
      .filter(([, value]) => value)
      .map(([label, value]) => `${label}: ${value}`);

    const body = `${details.join("\n")}\n\n${field("message")}`;

    if (channel === "whatsapp") {
      window.open(
        whatsappLink(`Hi PashaCommerce! New enquiry from your website:\n\n${body}`),
        "_blank",
        "noopener,noreferrer"
      );
    } else {
      window.location.href = mailtoLink(`Website enquiry from ${field("name")}`, body);
    }
    setSentVia(channel);
  }

  if (sentVia) {
    return (
      <div
        className="flex min-h-112 flex-col items-center justify-center rounded-2xl border border-accent-100 bg-accent-50/40 p-8 text-center"
        role="status"
      >
        <span className="grid size-18 place-items-center rounded-full bg-gradient-to-tr from-accent-500 to-secondary text-white shadow-lg animate-bounce">
          <Icon name="check" size={32} strokeWidth={3} />
        </span>
        <h3 className="mt-6 font-display text-2xl font-black text-ink">You&apos;re All Set!</h3>
        <p className="mt-3 max-w-sm text-muted">
          {sentVia === "whatsapp"
            ? "We've opened WhatsApp with your tailored enquiry pre-filled. Just hit send and our senior team will reply shortly!"
            : "We've opened your mail client with your enquiry pre-filled. Just hit send and our senior team will reply shortly!"}
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp btn-sm shadow-sm"
          >
            <Icon name="whatsapp" size={16} />
            Open WhatsApp Again
          </a>
          <button
            type="button"
            onClick={() => setSentVia(null)}
            className="btn btn-outline btn-sm"
          >
            Send another enquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Quick Service Selector Pills */}
      <div>
        <label className="field-label flex items-center justify-between">
          <span>
            Select Service <span className="text-secondary">*</span>
          </span>
          <span className="text-xs text-subtle">Click to quick-select</span>
        </label>
        <div className="flex flex-wrap gap-2 pt-1">
          {quickServices.map((serviceTitle) => {
            const isSelected = selectedService === serviceTitle;
            return (
              <button
                type="button"
                key={serviceTitle}
                onClick={() => setSelectedService(isSelected ? "" : serviceTitle)}
                className={`rounded-full px-3.5 py-1.5 text-xs font-bold transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? "bg-secondary text-white shadow-md ring-2 ring-secondary/30 scale-102"
                    : "border border-line-strong bg-surface text-ink hover:border-accent-500 hover:bg-accent-50"
                }`}
              >
                {serviceTitle}
              </button>
            );
          })}
        </div>
        <input type="hidden" name="service" value={selectedService} />
      </div>

      {/* Main input fields grid */}
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="field-label">
            Full name <span className="text-secondary">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="e.g. Alex Rivera"
            className="field"
          />
        </div>
        <div>
          <label htmlFor="email" className="field-label">
            Email <span className="text-secondary">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@brand.com"
            className="field"
          />
        </div>
        <div>
          <label htmlFor="phone" className="field-label">
            Phone / WhatsApp number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+1 555 000 0000"
            className="field"
          />
        </div>
        <div>
          <label htmlFor="brand" className="field-label">
            Brand / Store name
          </label>
          <input
            id="brand"
            name="brand"
            type="text"
            autoComplete="organization"
            placeholder="e.g. Aura Naturals"
            className="field"
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="website" className="field-label">
            Website or TikTok Shop Link
          </label>
          <input
            id="website"
            name="website"
            type="text"
            inputMode="url"
            placeholder="https://tiktok.com/@yourbrand or store link"
            className="field"
          />
        </div>
      </div>

      {/* Revenue Range Quick Selector */}
      <div>
        <label className="field-label">Current Monthly Sales / GMV</label>
        <div className="flex flex-wrap gap-2 pt-1">
          {revenueOptions.map((option) => {
            const isSelected = selectedRevenue === option;
            return (
              <button
                type="button"
                key={option}
                onClick={() => setSelectedRevenue(isSelected ? "" : option)}
                className={`rounded-lg px-3.5 py-1.5 text-xs font-bold transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? "bg-accent-500 text-ink shadow-sm ring-2 ring-accent-500/40"
                    : "border border-line bg-surface text-ink hover:border-accent-500 hover:bg-accent-50"
                }`}
              >
                {option}
              </button>
            );
          })}
        </div>
        <input type="hidden" name="revenue" value={selectedRevenue} />
      </div>

      {/* Message textarea */}
      <div>
        <label htmlFor="message" className="field-label">
          Tell us about your brand & growth goals <span className="text-secondary">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          placeholder="What products do you sell? Are you looking for creator outreach, GMV Max ads, shop setup, or full management?"
          className="field"
        />
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col gap-3 pt-2 sm:flex-row">
        <Magnetic strength={0.2} className="flex-1">
          <button
            type="submit"
            name="channel"
            value="whatsapp"
            className="btn btn-whatsapp btn-lg w-full shadow-md transition-all hover:shadow-[0_0_20px_rgba(37,211,102,0.4)]"
          >
            <Icon name="whatsapp" size={20} />
            Send via WhatsApp (Fastest)
          </button>
        </Magnetic>

        <Magnetic strength={0.2} className="flex-1">
          <button
            type="submit"
            name="channel"
            value="email"
            className="btn btn-primary btn-lg w-full shadow-md hover:shadow-[0_0_20px_rgba(18,176,226,0.3)]"
          >
            <Icon name="send" size={18} />
            Send via Email
          </button>
        </Magnetic>
      </div>

      {/* Confidence footer */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-line/60 pt-4 text-xs text-subtle">
        <span className="flex items-center gap-1.5 font-medium">
          <span className="size-1.5 rounded-full bg-success" />
          Average response time: &lt; 30 minutes
        </span>
        <span className="flex items-center gap-1">
          🔒 100% Confidential • No spam promise
        </span>
      </div>
    </form>
  );
}
