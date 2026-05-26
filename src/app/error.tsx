"use client";

import { useEffect } from "react";

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="fr">
      <body style={{ margin: 0, background: "#060412", color: "white", fontFamily: "sans-serif", display: "flex", alignItems: "center", justifyContent: "center", minHeight: "100vh" }}>
        <div style={{ textAlign: "center", padding: "2rem" }}>
          <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>☀️</div>
          <h1 style={{ fontSize: "1.5rem", fontWeight: 900, marginBottom: "0.5rem" }}>Une erreur est survenue</h1>
          <p style={{ color: "rgba(255,255,255,0.6)", marginBottom: "1.5rem" }}>
            Rechargez la page ou revenez dans quelques instants.
          </p>
          <button
            onClick={reset}
            style={{ background: "#FFB800", color: "black", border: "none", borderRadius: "12px", padding: "12px 28px", fontWeight: 900, fontSize: "1rem", cursor: "pointer" }}
          >
            Réessayer
          </button>
        </div>
      </body>
    </html>
  );
}
