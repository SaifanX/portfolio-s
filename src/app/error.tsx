"use client";

import { useEffect } from "react";
import { RotateCw, AlertTriangle } from "lucide-react";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("App error boundary caught:", error);
  }, [error]);

  const errorMessage =
    error instanceof Error
      ? error.message
      : typeof error === "object" && error !== null && "type" in error
      ? `System event: ${(error as { type: string }).type}`
      : "The application experienced a momentary connection interruption.";

  return (
    <div className="min-h-screen bg-[#09090d] text-zinc-100 flex flex-col items-center justify-center p-6 text-center select-none">
      <div className="max-w-md space-y-5 p-8 rounded-3xl bg-[#111118] border border-crimson/40 shadow-2xl backdrop-blur-xl">
        <div className="w-12 h-12 rounded-full bg-crimson/20 border border-crimson/40 flex items-center justify-center mx-auto text-crimson">
          <AlertTriangle className="w-6 h-6" />
        </div>

        <div className="space-y-2">
          <h2 className="text-xl font-black font-display uppercase tracking-tight text-white">
            Connection Synchronized
          </h2>
          <p className="text-xs font-mono text-zinc-400 leading-relaxed">
            {errorMessage}
          </p>
        </div>

        <button
          onClick={() => {
            if (typeof window !== "undefined") {
              window.location.reload();
            } else {
              reset();
            }
          }}
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-crimson hover:bg-crimson-glow text-white font-bold text-xs font-mono transition-all shadow-[0_0_20px_rgba(225,29,72,0.4)] active:scale-95"
        >
          <RotateCw className="w-3.5 h-3.5" />
          <span>Reload Application</span>
        </button>
      </div>
    </div>
  );
}
