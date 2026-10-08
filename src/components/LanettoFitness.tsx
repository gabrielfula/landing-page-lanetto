import { useEffect, useState } from "react";
import type { VideoItem } from "../data/landing";
import TopBanner from "./TopBanner";
import Hero from "./Hero";
import OfferSection from "./OfferSection";
import Differentials from "./Differentials";
import Construction from "./Construction";
import VipForm from "./VipForm";
import Location from "./Location";
import Faq from "./Faq";
import Footer from "./Footer";
import VideoModal from "./VideoModal";
import Navbar from "./Navbar";

export default function LanettoFitness() {
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [video, setVideo] = useState<VideoItem | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setCheckoutOpen(false);
        setVideo(null);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="min-h-screen scroll-smooth overflow-x-hidden bg-[#101318] text-[#eef1f6] antialiased">
      <TopBanner />
      <Navbar />

      <main>
        <Hero />
        <OfferSection onOpenCheckout={() => setCheckoutOpen(true)} />
        <Differentials />
        <Construction onSelectVideo={setVideo} />
        <VipForm />
        <Location />
        <Faq />
      </main>

      <Footer />

      {/* <CheckoutModal
        open={checkoutOpen}
        onClose={() => setCheckoutOpen(false)}
      /> */}
      <VideoModal video={video} onClose={() => setVideo(null)} />
    </div>
  );
}
