import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Accommodations } from './components/Accommodations';
import { Safaris } from './components/Safaris';
import { Experiences } from './components/Experiences';
import { WildlifeGuide } from './components/WildlifeGuide';
import { Testimonials } from './components/Testimonials';
import { CampLocation } from './components/CampLocation';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingPrefill, setBookingPrefill] = useState<{
    tentId?: string;
    checkIn?: string;
    checkOut?: string;
    guests?: number;
    safariZoneId?: string;
  }>({});

  const handleOpenBooking = (tentId?: string) => {
    setBookingPrefill(prev => ({ ...prev, tentId }));
    setIsBookingOpen(true);
  };

  const handleCheckAvailability = (tentId: string, checkIn: string, checkOut: string, guests: number) => {
    setBookingPrefill({
      tentId,
      checkIn,
      checkOut,
      guests
    });
    setIsBookingOpen(true);
  };

  const handleBookSafariWithStay = (safariZoneId: string) => {
    setBookingPrefill(prev => ({
      ...prev,
      safariZoneId
    }));
    setIsBookingOpen(true);
  };

  const handleExploreMap = () => {
    const el = document.getElementById('location-faq');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-900 flex flex-col selection:bg-emerald-900 selection:text-emerald-100">
      {/* Navigation */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      {/* Main Flow */}
      <main className="flex-1">
        {/* 1. Hero with Quick Availability Bar */}
        <Hero
          onCheckAvailability={handleCheckAvailability}
          onExploreMap={handleExploreMap}
        />

        {/* 2. Handcrafted Tents & River Cottages */}
        <Accommodations
          onSelectAccommodation={(tentId) => handleOpenBooking(tentId)}
        />

        {/* 3. Open 4x4 Gypsy Safaris & Forest Trails */}
        <Safaris
          onBookSafariWithStay={handleBookSafariWithStay}
        />

        {/* 4. Camp Life & Gastronomy */}
        <Experiences
          onPlanTrip={() => handleOpenBooking()}
        />

        {/* 5. Wildlife Sighting Calendar & Birding Index */}
        <WildlifeGuide />

        {/* 6. Guest Reflections & Verified Proof */}
        <Testimonials />

        {/* 7. Location, Routes & Traveler FAQs */}
        <CampLocation />
      </main>

      {/* Footer */}
      <Footer onOpenBooking={() => handleOpenBooking()} />

      {/* Reservation & Booking Voucher Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        preselectedTentId={bookingPrefill.tentId}
        initialCheckIn={bookingPrefill.checkIn}
        initialCheckOut={bookingPrefill.checkOut}
        initialGuests={bookingPrefill.guests}
        initialSafariZoneId={bookingPrefill.safariZoneId}
      />
    </div>
  );
}
