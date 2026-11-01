import { useEffect, useState } from "react";
import type { VideoItem } from "../data/landing";
import TopBanner from "./TopBanner";
import Hero from "./Hero";
import OfferSection from "./OfferSection";
import Differentials from "./Differentials";
import Construction from "./Construction";
import Location from "./Location";
import Faq from "./Faq";
import Footer from "./Footer";
import VideoModal from "./VideoModal";
import Navbar from "./Navbar";
import Reveal from "./Reveal";
import { MotionConfig } from "motion/react";

export default function LanettoFitness() {
  const [_, setCheckoutOpen] = useState(false);
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
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen overflow-x-clip text-[#eef1f6] antialiased">
        <TopBanner />
        <Navbar />

        <main>
          <Reveal variant="fadeUp">
            <Hero />
          </Reveal>

          {/* OfferSection e Differentials animam por dentro (header + cards) */}
          <OfferSection onOpenCheckout={() => setCheckoutOpen(true)} />
          <Differentials />

          <Reveal variant="fadeIn">
            <Construction onSelectVideo={setVideo} />
          </Reveal>
          {/* <VipForm /> */}
          <Reveal variant="fadeUp">
            <Location />
          </Reveal>
          <Reveal variant="fadeIn">
            <Faq />
          </Reveal>
        </main>

        <Reveal variant="fadeIn">
          <Footer />
        </Reveal>

        <VideoModal video={video} onClose={() => setVideo(null)} />
      </div>
    </MotionConfig>
  );
}
