import { useState } from "react";
import { MotionConfig } from "motion/react";
import GalleryModal from "./GalleryModal";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Experience from "./sections/Experience";
import Differentials from "./sections/Differentials";
import Plans from "./sections/Plans";
import Opening from "./sections/Opening";
import Footer from "./sections/Footer";

export default function LanettoFitness() {
  const [galleryOpen, setGalleryOpen] = useState(false);

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen overflow-x-clip bg-[#f6f1ee] antialiased">
        <Header />
        <main>
          <Hero />
          <Experience onOpenGallery={() => setGalleryOpen(true)} />
          <Differentials />
          <Plans />
          <Opening />
        </main>
        <Footer />
        <GalleryModal
          open={galleryOpen}
          onClose={() => setGalleryOpen(false)}
        />
      </div>
    </MotionConfig>
  );
}
