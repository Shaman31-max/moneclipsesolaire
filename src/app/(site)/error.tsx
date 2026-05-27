"use client";

import { useEffect } from "react";

export default function SiteError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error("[SiteError]", error);
  }, [error]);

  return (
    <div style={{ minHeight: "100vh", background: "#060412", color: "white", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: "1rem", padding: "2rem", textAlign: "center", fontFamily: "sans-serif" }}>
      <div style={{ fontSize: "3rem" }}>☀️</div>
      <h1 style={{ fontSize: "1.5rem", fontWeight: 900, margin: 0 }}>Une erreur est survenue</h1>
      <p style={{ color: "rgba(255,255,255,0.6)", margin: 0 }}>Rechargez la page ou revenez dans quelques instants.</p>
      <button
        onClick={reset}
        style={{ background: "#FFB800", color: "black", border: "none", borderRadius: "12px", padding: "12px 28px", fontWeight: 900, fontSize: "1rem", cursor: "pointer", marginTop: "0.5rem" }}
      >
        Réessayer
      </button>
    </div>
  );
}
