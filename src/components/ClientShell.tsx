"use client";

import dynamic from "next/dynamic";

const StarField = dynamic(() => import("./StarField"), {
  ssr: false,
  loading: () => <div className="fixed inset-0 bg-[#060412] z-0" />,
});

export default function ClientShell() {
  return <StarField />;
}
