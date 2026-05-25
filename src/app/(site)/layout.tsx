import Navbar from "@/components/Navbar";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-full flex flex-col bg-[#050510] text-[#E8E8FF]">
      <Navbar />
      {children}
    </div>
  );
}
