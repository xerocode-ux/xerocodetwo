import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

const APPLY_URL = "https://chat.whatsapp.com/EJ0LCcArFRLHqsFml1Ua8A";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Instant Loan — Up to ₹50,000" },
      {
        name: "description",
        content:
          "Explore personal loan options up to ₹50,000 and check your eligibility. Loan approval and terms are subject to lender criteria.",
      },
      {
        property: "og:title",
        content: "Instant Loan — Up to ₹50,000",
      },
      {
        property: "og:description",
        content:
          "Explore personal loan options up to ₹50,000. Loan approval and terms are subject to lender criteria.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Instant Loan — Up to ₹50,000",
      },
      {
        name: "twitter:description",
        content:
          "Explore personal loan options up to ₹50,000. Terms are subject to lender approval.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const [, setSeconds] = useState(10);

  useEffect(() => {
    const id = setInterval(() => {
      setSeconds((s) => (s > 0 ? s - 1 : 0));
    }, 1000);
    return () => clearInterval(id);
  }, []);

  const trackLoanClick = () => {
    window.fbq?.("track", "Subscribe", {
      content_name: "Loan Eligibility CTA",
    });
  };

  return (
    <div className="min-h-screen bg-[#090016] text-white">
      <div className="w-full border-b border-fuchsia-400/20 bg-[#14002b] px-4 py-2 text-center text-xs font-semibold text-white">
        🔒 Secure application process • Terms shown before acceptance
      </div>

      <main className="mx-auto max-w-md px-5 pb-14 pt-8">
        <div className="text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-fuchsia-400/30 bg-gradient-to-br from-violet-700 to-fuchsia-600 text-3xl shadow-[0_0_30px_rgba(168,85,247,0.35)]">
            💳
          </div>

          <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-fuchsia-400/40 bg-fuchsia-500/10 px-4 py-2 text-xs font-bold text-fuchsia-200">
            <span className="h-2 w-2 animate-pulse rounded-full bg-fuchsia-400" />
            APPLICATIONS OPEN
          </div>

          <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight text-white">
            Instant Loan
            <span className="block bg-gradient-to-r from-violet-400 via-fuchsia-300 to-purple-500 bg-clip-text text-transparent">Upto ₹50,000</span>
          </h1>

          <p className="mt-3 text-sm leading-6 text-purple-100/75">
            Tell us a few basic details to explore available personal loan
            options. Approval and final terms depend on the lender.
          </p>

          <a
            href={APPLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={trackLoanClick}
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-full border border-fuchsia-300/40 bg-gradient-to-r from-violet-700 via-purple-600 to-fuchsia-600 px-6 py-4 text-lg font-bold text-white shadow-[0_0_35px_rgba(168,85,247,0.45)] transition-transform hover:scale-[1.02]"
          >
            <span className="text-2xl">💬</span>
            Join WhatsApp Channel
          </a>
        </div>

        <section className="mt-8 grid grid-cols-2 gap-3">
          {[
            ["⚡", "Quick Process"],
            ["📱", "Online Application"],
            ["🔐", "Secure Details"],
            ["📄", "Clear Terms"],
          ].map(([icon, label]) => (
            <div
              key={label}
              className="rounded-2xl border border-purple-400/20 bg-[#130021]/90 p-4 text-center shadow-[0_8px_30px_rgba(88,28,135,0.18)]"
            >
              <div className="text-2xl">{icon}</div>
              <div className="mt-2 text-sm font-semibold">{label}</div>
            </div>
          ))}
        </section>

        <section
          id="apply"
          className="mt-6 rounded-3xl border border-purple-400/25 bg-[#130021]/95 p-5 shadow-[0_10px_40px_rgba(88,28,135,0.22)]"
        >
          <div className="text-left">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-fuchsia-300">
              Start here
            </p>
            <h2 className="mt-2 text-2xl font-bold text-white">Check your options</h2>
            <p className="mt-2 text-sm leading-6 text-purple-100/70">
              Eligibility is not a guarantee of approval. The applicable
              lender will provide the sanctioned amount, interest/APR, fees,
              tenure and repayment schedule before acceptance.
            </p>
          </div>

          <div className="mt-5 space-y-3">
            {[
              "Basic eligibility assessment",
              "Loan amount and tenure options",
              "Interest/APR and applicable charges",
              "Repayment schedule before acceptance",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-xl border border-purple-400/10 bg-purple-950/50 px-4 py-3 text-sm text-purple-50"
              >
                <span className="text-fuchsia-300">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={trackLoanClick}
            className="mt-5 w-full rounded-full border border-fuchsia-400/40 bg-fuchsia-500/10 px-5 py-3.5 text-base font-bold text-fuchsia-200 transition-colors hover:bg-fuchsia-500/20"
          >
            Start Application
          </button>
        </section>

        <section className="mt-6 rounded-2xl border border-purple-400/20 bg-[#10001c]/95 p-5">
          <h3 className="font-bold">Important information</h3>
          <p className="mt-2 text-xs leading-5 text-purple-100/65">
            This page is for loan information and eligibility assistance.
            Loan approval, amount, interest rate, fees and tenure are decided
            by the applicable lender based on its policies and your profile.
            Do not pay any person claiming to guarantee approval. Review the
            lender, APR, processing fees, repayment schedule and privacy terms
            before proceeding.
          </p>
        </section>

        <p className="mt-6 text-center text-[11px] leading-5 text-purple-100/50">
          By proceeding, you acknowledge that eligibility is subject to lender
          criteria and that loan terms will be disclosed before acceptance.
        </p>
      </main>
    </div>
  );
}
