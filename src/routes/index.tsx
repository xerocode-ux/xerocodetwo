import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

const APPLY_URL = "#apply";

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
    <div className="min-h-screen bg-background text-foreground">
      <div className="w-full bg-primary px-4 py-2 text-center text-xs font-semibold text-primary-foreground">
        🔒 Secure application process • Terms shown before acceptance
      </div>

      <main className="mx-auto max-w-md px-5 pb-14 pt-8">
        <div className="text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-3xl shadow-sm">
            💳
          </div>

          <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-2 text-xs font-bold text-primary">
            <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
            APPLICATIONS OPEN
          </div>

          <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight">
            Instant Loan
            <span className="block text-primary">Upto ₹50,000</span>
          </h1>

          <p className="mt-3 text-sm leading-6 text-muted-foreground">
            Tell us a few basic details to explore available personal loan
            options. Approval and final terms depend on the lender.
          </p>

          <a
            href={APPLY_URL}
            onClick={trackLoanClick}
            className="cta-gradient mt-6 flex w-full items-center justify-center gap-2 rounded-full px-6 py-4 text-lg font-bold text-primary-foreground shadow-lg transition-transform hover:scale-[1.02]"
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
              className="rounded-2xl border border-border/70 bg-card p-4 text-center shadow-sm"
            >
              <div className="text-2xl">{icon}</div>
              <div className="mt-2 text-sm font-semibold">{label}</div>
            </div>
          ))}
        </section>

        <section
          id="apply"
          className="mt-6 rounded-3xl border border-border/70 bg-card p-5 shadow-sm"
        >
          <div className="text-left">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
              Start here
            </p>
            <h2 className="mt-2 text-2xl font-bold">Check your options</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
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
                className="flex items-center gap-3 rounded-xl bg-secondary/60 px-4 py-3 text-sm"
              >
                <span className="text-primary">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={trackLoanClick}
            className="mt-5 w-full rounded-full border border-primary px-5 py-3.5 text-base font-bold text-primary transition-colors hover:bg-primary/5"
          >
            Start Application
          </button>
        </section>

        <section className="mt-6 rounded-2xl border border-border/70 bg-card p-5">
          <h3 className="font-bold">Important information</h3>
          <p className="mt-2 text-xs leading-5 text-muted-foreground">
            This page is for loan information and eligibility assistance.
            Loan approval, amount, interest rate, fees and tenure are decided
            by the applicable lender based on its policies and your profile.
            Do not pay any person claiming to guarantee approval. Review the
            lender, APR, processing fees, repayment schedule and privacy terms
            before proceeding.
          </p>
        </section>

        <p className="mt-6 text-center text-[11px] leading-5 text-muted-foreground">
          By proceeding, you acknowledge that eligibility is subject to lender
          criteria and that loan terms will be disclosed before acceptance.
        </p>
      </main>
    </div>
  );
}
