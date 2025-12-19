"use client";

import { useState, FormEvent } from "react";
import { AsciiBox } from "./ui";

export function GhostSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch(
        "https://www.doncoleman.ca/members/api/send-magic-link/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            emailType: "subscribe",
          }),
        }
      );

      if (response.ok) {
        setStatus("success");
        setMessage("Check your inbox for a confirmation link!");
        setEmail("");
      } else {
        const data = await response.json();
        setStatus("error");
        setMessage(
          data.errors?.[0]?.message || "Something went wrong. Please try again."
        );
      }
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  };

  return (
    <section className="pb-12">
      <div className="max-w-4xl mx-auto px-4">
        <AsciiBox variant="subtle" padding="lg">
          <div className="space-y-6 text-center">
            <h2 className="text-xl font-bold text-rust-500">
              <span className="text-mauve-600">//</span> Drift & Convergence
              Newsletter
            </h2>
            <p className="text-mauve-400 max-w-xl mx-auto">
              Subscribe for infrequent and insightful updates exploring the flow
              of ideas, leadership, and navigating complexity.
            </p>

            {status === "success" ? (
              <div className="py-4">
                <p className="text-sage-400 font-mono">
                  <span className="text-rust-500">$</span> {message}
                </p>
              </div>
            ) : (
              <div className="space-y-3">
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
                >
                  <div className="flex-1 relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-mauve-600 select-none">
                      {">"}
                    </span>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      required
                      disabled={status === "loading"}
                      className="w-full pl-8 pr-4 py-2 bg-dusk-900 border border-sand-700 text-mist-200 placeholder-mauve-600 font-mono text-sm focus:outline-none focus:border-rust-500 transition-colors disabled:opacity-50"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="px-6 py-2 border border-rust-500 text-rust-500 font-mono text-sm hover:bg-rust-500 hover:text-dusk-950 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === "loading" ? "[...]" : "[subscribe]"}
                  </button>
                </form>
                <p className="text-sage-300 text-xs">
                  Emails sent from my personal website @{" "}
                  <a
                    href="https://doncoleman.ca"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-rust-500 transition-colors"
                  >
                    doncoleman.ca
                  </a>
                </p>
              </div>
            )}

            {status === "error" && (
              <p className="text-rust-400 text-sm font-mono">
                <span className="text-rust-600">!</span> {message}
              </p>
            )}
          </div>
        </AsciiBox>
      </div>
    </section>
  );
}
