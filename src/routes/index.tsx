import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

const WHATSAPP_URL =
  "https://api.whatsapp.com/send/?phone=639467683297&text=Hello%21+Can+I+get+more+info+on+this%3F&type=phone_number&app_absent=0";

const TICKERS = [
  { label: "NIFTY", value: "24,812", change: "0.62%", up: true },
  { label: "SENSEX", value: "81,240", change: "0.14%", up: false },
  { label: "BANKNIFTY", value: "53,190", change: "0.41%", up: true },
  { label: "GOLD", value: "71,455", change: "0.28%", up: true },
  { label: "USD/INR", value: "83.42", change: "0.09%", up: false },
];

const FEATURES = [
  { icon: "💰", label: "Without Investment" },
  { icon: "📋", label: "Daily Task" },
  { icon: "⚡", label: "Instant Setup" },
  { icon: "🔐", label: "Verified Channel" },
];

const STATS = [
  { value: "5K+", label: "Members" },
  { value: "100%", label: "Free" },
  { value: "24/7", label: "Updates" },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Success With Me — Start Earning Without Investment" },
      {
        name: "description",
        content:
          "Join Success With Me free: simple daily tasks, zero investment, no spam. Get instant access to our verified WhatsApp channel.",
      },
      {
        property: "og:title",
        content: "Success With Me — Start Earning Without Investment",
      },
      {
        property: "og:description",
        content:
          "Join Success With Me free: simple daily tasks, zero investment, no spam. Get instant access to our verified WhatsApp channel.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Success With Me — Start Earning Without Investment",
      },
      {
        name: "twitter:description",
        content:
          "Join Success With Me free: simple daily tasks, zero investment, no spam. Get instant access to our verified WhatsApp channel.",
      },
    ],
  }),
  component: Index,
});

function Ticker() {
  const row = [...TICKERS, ...TICKERS, ...TICKERS, ...TICKERS];

  return (
    <div className="w-full overflow-hidden border-b border-border/60 bg-card/40 py-2">
      <div className="flex w-max animate-ticker gap-8 whitespace-nowrap px-4">
        {row.map((t, i) => (
          <span key={i} className="text-[11px] font-semibold tracking-wide">
            <span className={t.up ? "text-up" : "text-down"}>
              {t.label} {t.value} {t.up ? "▲" : "▼"} {t.change}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}

function Index() {
  const [, setSeconds] = useState(10);

  useEffect(() => {
    const id = setInterval(() => {
      setSeconds((s) => (s > 0 ? s - 1 : 0));
    }, 1000);

    return () => clearInterval(id);
  }, []);

  const trackWhatsAppClick = () => {
    window.fbq?.("track", "Subscribe", {
      content_name: "WhatsApp Channel",
    });
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Ticker />
      <main className="mx-auto flex w-full max-w-md flex-1 flex-col items-center px-5 pb-14 pt-4 text-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-card text-3xl shadow-lg">
          📈
        </div>

        <h1 className="mt-3 text-4xl font-extrabold tracking-tight">
          Success <span className="text-primary">With Me</span>
        </h1>

        <p className="mt-1 text-sm font-medium tracking-[0.2em] text-muted-foreground">
          WITHOUT INVESTMENT WORK
        </p>

        <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-primary/50 px-5 py-2 text-xs font-bold tracking-[0.15em] text-primary">
          <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
          CHANNEL ACTIVE NOW
        </div>

        <h2 className="mt-5 text-2xl font-bold leading-snug">
          Start earning <span className="text-gold">without any investment</span> — join now
        </h2>

        <p className="mt-3 text-sm text-muted-foreground">
          Simple daily tasks, zero cost to join. No spam, no hidden charges.
        </p>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={trackWhatsAppClick}
          className="cta-gradient mt-6 flex w-full items-center justify-center gap-2 rounded-full px-6 py-4 text-lg font-bold text-primary-foreground transition-transform hover:scale-[1.02]"
        >
          <span className="text-2xl">💬</span>
          Join WhatsApp Channel
        </a>

        <div className="mt-4 grid w-full grid-cols-2 gap-4">
          {FEATURES.map((f) => (
            <div
              key={f.label}
              className="rounded-2xl border border-border/70 bg-card px-4 py-5 shadow-sm"
            >
              <div className="text-2xl">{f.icon}</div>
              <div className="mt-2 text-sm font-semibold">{f.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-4 grid w-full grid-cols-3 rounded-2xl border border-border/70 bg-card py-4">
          {STATS.map((s) => (
            <div key={s.label}>
              <div className="text-lg font-extrabold text-gold">{s.value}</div>
              <div className="text-[11px] uppercase tracking-wide text-muted-foreground">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 w-full rounded-2xl border border-border/70 bg-card px-5 py-4">
          <p className="text-sm text-muted-foreground">
            WhatsApp is ready — or tap above
          </p>
          <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-secondary">
            <div
              className="h-full rounded-full bg-primary"
              style={{ width: "100%" }}
            />
          </div>
        </div>

        <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
          Joining the channel is free. Results and earnings from any task can vary and are not guaranteed. Please do your own research before proceeding.
        </p>
      </main>
    </div>
  );
}
