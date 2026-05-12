"use client";

import { useMemo, useState } from "react";
import { gallery, villas, type Villa } from "@/content";
import { BookingPanel } from "@/components/home/booking-panel";
import { HomeHeroSection } from "@/components/home/hero-section";
import {
  HomeAmenitiesSection,
  HomeCtaSection,
  HomeEditorialGrid,
  HomeExperiencesSection,
  HomeFaqSection,
  HomeFeatureStrip,
  HomeGallerySection,
  HomeLocationAndTestimonialSection,
  HomeVillasSection,
} from "@/components/home/home-sections";
import { VillaModal } from "@/components/home/villa-modal";

export default function HomePage() {
  const [selectedVilla, setSelectedVilla] = useState<Villa | null>(null);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [faqOpen, setFaqOpen] = useState(0);
  const [galleryFocus, setGalleryFocus] = useState(gallery[0]);

  const selectedVillaForBooking = useMemo(() => selectedVilla, [selectedVilla]);

  const openBooking = () => setBookingOpen(true);

  const handleVillaPreview = (villaId: string) => {
    const villa = villas.find((item) => item.id === villaId) ?? null;
    setSelectedVilla(villa);
  };

  return (
    <main>
      <HomeHeroSection onOpenBooking={openBooking} />
      <HomeFeatureStrip />
      <HomeVillasSection onVillaPreview={handleVillaPreview} />
      <HomeEditorialGrid />
      <HomeAmenitiesSection />
      <HomeGallerySection
        galleryFocus={galleryFocus}
        onSelectImage={setGalleryFocus}
      />
      <HomeExperiencesSection />
      <HomeLocationAndTestimonialSection />
      <HomeFaqSection
        openIndex={faqOpen}
        onToggle={(index) => setFaqOpen(faqOpen === index ? -1 : index)}
      />
      <HomeCtaSection onOpenBooking={openBooking} />

      <VillaModal
        villa={selectedVilla && !bookingOpen ? selectedVilla : null}
        onClose={() => setSelectedVilla(null)}
        onReserve={(villa) => {
          setSelectedVilla(villa);
          setBookingOpen(true);
        }}
      />

      {bookingOpen ? (
        <BookingPanel
          selectedVilla={selectedVillaForBooking}
          onClose={() => {
            setBookingOpen(false);
            setSelectedVilla(null);
          }}
        />
      ) : null}
    </main>
  );
}
