import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

const WHATSAPP_URL =
  "https://api.whatsapp.com/send/?phone=15553454968&text=Hello%21+Can+I+get+more+info+on+this%3F&type=phone_number&app_absent=0";

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
      { property: "og:title", content: "Success With Me — Start Earning Without Investment" },
      {
        property: "og:description",
        content:
          "Join Success With Me free: simple daily tasks, zero investment, no spam. Get instant access to our verified WhatsApp channel.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Success With Me — Start Earning Without Investment" },
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
  const [seconds, setSeconds] = useState(10);

  useEffect(() => {
    const id = setInterval(() => {
      setSeconds((s) => (s > 0 ? s - 1 : 0));
    }, 1000);
    return () => clearInterval(id);
  }, []);

  const trackWhatsAppClick = () => {
    window.fbq?.("track", "Subscribe", { content_name: "WhatsApp Channel" });
  };

  const progress = ((10 - seconds) / 10) * 100;

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
          onClick={trackWhatsAppClick}
          className="cta-gradient mt-6 flex w-full items-center justify-center gap-2 rounded-full px-6 py-4 text-lg font-bold text-primary-foreground transition-transform hover:scale-[1.02]"
        >
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.198-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.134 1.585 5.932L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          Join WhatsApp Channel
        </a>

        <div className="mt-4 grid w-full grid-cols-2 gap-4">
          {FEATURES.map((f) => (
            <div key={f.label} className="rounded-2xl border border-border/70 bg-card px-4 py-5 shadow-sm">
              <div className="text-2xl">{f.icon}</div>
              <div className="mt-2 text-sm font-semibold">{f.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-4 grid w-full grid-cols-3 rounded-2xl border border-border/70 bg-card py-4">
          {STATS.map((s) => (
            <div key={s.label}>
              <div className="text-lg font-extrabold text-gold">{s.value}</div>
              <div className="text-[11px] uppercase tracking-wide text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-4 w-full rounded-2xl border border-border/70 bg-card px-5 py-4">
          <p className="text-sm text-muted-foreground">
            WhatsApp is ready — or tap above
          </p>
          <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-secondary">
            <div className="h-full rounded-full bg-primary" style={{ width: "100%" }} />
          </div>
        </div>

        <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
          Joining the channel is free. Results and earnings from any task can vary and are not guaranteed. Please do your own research before proceeding.
        </p>
      </main>
    </div>
  );
}
