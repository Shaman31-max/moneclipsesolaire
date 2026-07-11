import Navbar from "@/components/Navbar";
import TopBanner from "@/components/TopBanner";
import MobileCartBar from "@/components/MobileCartBar";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-full flex flex-col bg-[#060412] text-[#F0EEFF]">
      <Navbar />
      <TopBanner />
      <div style={{ paddingTop: "calc(64px + 36px)" }}>
        {children}
      </div>
      <MobileCartBar />
    </div>
  );
}
