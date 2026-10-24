import React, { useState, useEffect } from 'react';
import { X, Calendar, Users, Tent, Compass, ShieldCheck, CheckCircle2, Download, Printer, MessageSquare, PhoneCall } from 'lucide-react';
import { Accommodation, SafariPackage, ConfirmedBooking } from '../types';
import { ACCOMMODATIONS, SAFARI_PACKAGES } from '../data/campsiteData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedTentId?: string;
  initialCheckIn?: string;
  initialCheckOut?: string;
  initialGuests?: number;
  initialSafariZoneId?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preselectedTentId,
  initialCheckIn,
  initialCheckOut,
  initialGuests = 2,
  initialSafariZoneId
}) => {
  // Dates
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const dayAfter = new Date(today);
  dayAfter.setDate(dayAfter.getDate() + 3);

  const [checkIn, setCheckIn] = useState(initialCheckIn || tomorrow.toISOString().split('T')[0]);
  const [checkOut, setCheckOut] = useState(initialCheckOut || dayAfter.toISOString().split('T')[0]);
  const [tentId, setTentId] = useState(preselectedTentId || ACCOMMODATIONS[0].id);
  const [adults, setAdults] = useState(initialGuests || 2);
  const [children, setChildren] = useState(0);

  // Safari selection
  const [includeSafari, setIncludeSafari] = useState(Boolean(initialSafariZoneId));
  const [safariZoneId, setSafariZoneId] = useState(initialSafariZoneId || SAFARI_PACKAGES[0].id);
  const [safariSlot, setSafariSlot] = useState<'morning' | 'afternoon'>('morning');

  // Add-ons
  const [addTransfers, setAddTransfers] = useState(false);
  const [addStarWalk, setAddStarWalk] = useState(false);

  // Guest Details
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [specialNotes, setSpecialNotes] = useState('');

  // Confirmation state
  const [confirmedBooking, setConfirmedBooking] = useState<ConfirmedBooking | null>(null);

  // Sync props when opening
  useEffect(() => {
    if (preselectedTentId) setTentId(preselectedTentId);
    if (initialCheckIn) setCheckIn(initialCheckIn);
    if (initialCheckOut) setCheckOut(initialCheckOut);
    if (initialGuests) setAdults(initialGuests);
    if (initialSafariZoneId) {
      setIncludeSafari(true);
      setSafariZoneId(initialSafariZoneId);
    }
  }, [preselectedTentId, initialCheckIn, initialCheckOut, initialGuests, initialSafariZoneId, isOpen]);

  if (!isOpen) return null;

  // Calculate nights
  const dIn = new Date(checkIn);
  const dOut = new Date(checkOut);
  const timeDiff = dOut.getTime() - dIn.getTime();
  const nights = Math.max(1, Math.round(timeDiff / (1000 * 3600 * 24)));

  const selectedTent = ACCOMMODATIONS.find((t) => t.id === tentId) || ACCOMMODATIONS[0];
  const selectedSafari = SAFARI_PACKAGES.find((s) => s.id === safariZoneId) || SAFARI_PACKAGES[0];

  // Pricing calculations
  const roomTotal = selectedTent.pricePerNight * nights;
  const safariTotal = includeSafari ? selectedSafari.pricePerGypsy : 0;
  const transferTotal = addTransfers ? 1600 : 0;
  const starWalkTotal = addStarWalk ? 800 * adults : 0;
  const addonsTotal = transferTotal + starWalkTotal;
  const conservationCess = 250; // Corbett Foundation eco fee
  const grandTotal = roomTotal + safariTotal + addonsTotal + conservationCess;

  const handleConfirmReservation = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone || !email) {
      return;
    }

    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const bookingCode = `CWT-2026-${randomNum}`;

    const newBooking: ConfirmedBooking = {
      bookingId: bookingCode,
      bookedAt: new Date().toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }),
      checkIn,
      checkOut,
      nights,
      accommodationId: tentId,
      accommodationName: selectedTent.name,
      adults,
      children,
      safariZoneId: includeSafari ? safariZoneId : undefined,
      safariSlot: includeSafari ? safariSlot : undefined,
      addTransfers,
      addStarWalk,
      fullName,
      email,
      phone,
      city,
      specialNotes,
      roomTotal,
      safariTotal,
      addonsTotal,
      conservationCess,
      grandTotal
    };

    setConfirmedBooking(newBooking);
  };

  const generateWhatsAppUrl = () => {
    if (!confirmedBooking) return '#';
    const text = encodeURIComponent(
      `Hello Corbett Nature Retreat Concierge!\nI have confirmed a reservation:\n` +
      `Booking ID: ${confirmedBooking.bookingId}\n` +
      `Name: ${confirmedBooking.fullName}\n` +
      `Tent: ${confirmedBooking.accommodationName} (${confirmedBooking.nights} Nights)\n` +
      `Dates: ${confirmedBooking.checkIn} to ${confirmedBooking.checkOut}\n` +
      `Guests: ${confirmedBooking.adults} Adults${confirmedBooking.children ? `, ${confirmedBooking.children} Children` : ''}\n` +
      `${confirmedBooking.safariZoneId ? `Safari: ${selectedSafari.zone} (${confirmedBooking.safariSlot})\n` : ''}` +
      `Estimated Total: ₹${confirmedBooking.grandTotal.toLocaleString('en-IN')}\n` +
      `Please assist with permit upload instructions.`
    );
    return `https://wa.me/918449506167?text=${text}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-stone-950/85 backdrop-blur-md overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[92vh] overflow-y-auto border border-stone-300 shadow-2xl my-auto">
        
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-stone-200 bg-stone-50 rounded-t-2xl">
          <div>
            <h3 className="text-lg font-bold text-stone-900 font-display">
              {confirmedBooking ? 'Reservation Confirmed & Voucher' : 'Campsite Stay & Safari Reservation'}
            </h3>
            <p className="text-xs text-stone-500">
              {confirmedBooking 
                ? 'Your booking voucher is ready below. Please keep your reservation code handy.' 
                : 'Direct booking rate guarantee · All 3 farm-to-table meals included'}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-stone-200 text-stone-600 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Confirmed Voucher View */}
        {confirmedBooking ? (
          <div className="p-6 sm:p-8 space-y-6">
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 flex items-start gap-4">
              <CheckCircle2 className="w-8 h-8 text-emerald-700 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-base font-bold text-emerald-950">
                  Thank You, {confirmedBooking.fullName}! Your Campsite Reservation is Confirmed.
                </h4>
                <p className="text-xs text-emerald-900 mt-1 leading-relaxed">
                  We have logged your stay for <strong className="font-semibold">{confirmedBooking.accommodationName}</strong>. Our camp manager and safari desk coordinator will contact you via WhatsApp/Phone within 2 hours to confirm your forest permit documents.
                </p>
              </div>
            </div>

            {/* Printable Voucher Card */}
            <div className="border border-stone-300 rounded-xl p-6 bg-stone-50/60 print:bg-white space-y-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-stone-200 pb-4 gap-2">
                <div>
                  <span className="text-xs uppercase tracking-wider text-stone-500 font-medium">
                    Booking Reference Code
                  </span>
                  <div className="text-2xl font-bold text-stone-900 font-mono tracking-wider">
                    {confirmedBooking.bookingId}
                  </div>
                </div>
                <div className="text-xs text-stone-500 sm:text-right">
                  <div>Booked on: {confirmedBooking.bookedAt}</div>
                  <div className="text-emerald-700 font-medium">Status: Provisional (Forest Desk Verified)</div>
                </div>
              </div>

              {/* Booking Summary Columns */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs">
                <div>
                  <span className="text-stone-400 uppercase tracking-wider block mb-1">Check-In</span>
                  <strong className="text-stone-900 text-sm">{confirmedBooking.checkIn}</strong>
                  <span className="text-stone-500 block">From 01:00 PM</span>
                </div>
                <div>
                  <span className="text-stone-400 uppercase tracking-wider block mb-1">Check-Out</span>
                  <strong className="text-stone-900 text-sm">{confirmedBooking.checkOut}</strong>
                  <span className="text-stone-500 block">By 11:00 AM ({confirmedBooking.nights} {confirmedBooking.nights === 1 ? 'Night' : 'Nights'})</span>
                </div>
                <div>
                  <span className="text-stone-400 uppercase tracking-wider block mb-1">Guests</span>
                  <strong className="text-stone-900 text-sm">
                    {confirmedBooking.adults} Adults {confirmedBooking.children > 0 && `+ ${confirmedBooking.children} Kids`}
                  </strong>
                </div>
                <div>
                  <span className="text-stone-400 uppercase tracking-wider block mb-1">Contact</span>
                  <strong className="text-stone-900 text-sm">{confirmedBooking.phone}</strong>
                  <span className="text-stone-500 block truncate">{confirmedBooking.email}</span>
                </div>
              </div>

              {/* Itemized Tariff Statement */}
              <div className="border-t border-stone-200 pt-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-stone-900 block mb-3">
                  Itemized Tariff Summary
                </span>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between text-stone-700">
                    <span>{confirmedBooking.accommodationName} ({confirmedBooking.nights} Nights × ₹{selectedTent.pricePerNight.toLocaleString('en-IN')})</span>
                    <span className="font-mono tabular-nums">₹{confirmedBooking.roomTotal.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between text-stone-700">
                    <span>All Meals (Breakfast, Kumaoni Lunch, Riverside Barbecue Dinner)</span>
                    <span className="text-emerald-700 font-medium">Included (₹0)</span>
                  </div>
                  {confirmedBooking.safariZoneId && (
                    <div className="flex justify-between text-stone-700">
                      <span>4x4 Gypsy Safari ({selectedSafari.zone} · {confirmedBooking.safariSlot})</span>
                      <span className="font-mono tabular-nums">₹{confirmedBooking.safariTotal.toLocaleString('en-IN')}</span>
                    </div>
                  )}
                  {confirmedBooking.addTransfers && (
                    <div className="flex justify-between text-stone-700">
                      <span>Railway Station Transfer (Private Cab)</span>
                      <span className="font-mono tabular-nums">₹1,600</span>
                    </div>
                  )}
                  {confirmedBooking.addStarWalk && (
                    <div className="flex justify-between text-stone-700">
                      <span>Stargazer Guided Night Walk ({confirmedBooking.adults} Pax)</span>
                      <span className="font-mono tabular-nums">₹{(800 * confirmedBooking.adults).toLocaleString('en-IN')}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-stone-700">
                    <span>Corbett Wildlife Conservation & Forest Cleanliness Cess</span>
                    <span className="font-mono tabular-nums">₹250</span>
                  </div>
                  <div className="border-t border-stone-300 pt-2 flex justify-between font-bold text-sm text-stone-900">
                    <span>Total Estimated Payable</span>
                    <span className="font-mono tabular-nums text-emerald-800 text-base">₹{confirmedBooking.grandTotal.toLocaleString('en-IN')}</span>
                  </div>
                </div>
              </div>

              {/* Forest Permit Note */}
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 text-xs text-amber-900">
                <strong>Next Step for Safari Permits:</strong> If your booking includes an open Gypsy safari, our naturalist coordinator will request soft copies of Government ID proofs (Aadhaar, Voter ID, or Passport) to register your vehicle slot on the official Corbett forest booking system.
              </div>
            </div>

            {/* Voucher Action Buttons */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-stone-200">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => window.print()}
                  className="px-4 py-2 text-xs font-semibold text-stone-700 hover:text-stone-950 border border-stone-300 rounded-md flex items-center gap-1.5 transition-colors"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print Voucher</span>
                </button>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={generateWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-emerald-700 hover:bg-emerald-800 rounded-md flex items-center gap-2 transition-colors shadow-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send Voucher to WhatsApp</span>
                </a>
                <button
                  onClick={onClose}
                  className="px-4 py-2.5 text-xs font-semibold text-stone-700 hover:text-stone-950 border border-stone-200 rounded-md"
                >
                  Done
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* Booking Form */
          <form onSubmit={handleConfirmReservation} className="p-6 sm:p-8 space-y-6">
            
            {/* Step 1: Stay & Dates */}
            <div className="space-y-4">
              <div className="text-xs font-semibold uppercase tracking-wider text-stone-900 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-stone-900 text-white flex items-center justify-center text-[10px]">1</span>
                <span>Select Dates & Tent Category</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                  <label className="block text-xs font-medium text-stone-600 mb-1">
                    Check-In Date
                  </label>
                  <input
                    type="date"
                    value={checkIn}
                    min={tomorrow.toISOString().split('T')[0]}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="w-full border border-stone-300 rounded-lg px-3 py-2 text-sm text-stone-900 focus:outline-none focus:border-emerald-600"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-600 mb-1">
                    Check-Out Date
                  </label>
                  <input
                    type="date"
                    value={checkOut}
                    min={checkIn}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="w-full border border-stone-300 rounded-lg px-3 py-2 text-sm text-stone-900 focus:outline-none focus:border-emerald-600"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-600 mb-1">
                    Adults
                  </label>
                  <select
                    value={adults}
                    onChange={(e) => setAdults(Number(e.target.value))}
                    className="w-full border border-stone-300 rounded-lg px-3 py-2 text-sm text-stone-900 focus:outline-none focus:border-emerald-600"
                  >
                    {[1, 2, 3, 4, 5, 6].map((num) => (
                      <option key={num} value={num}>{num} {num === 1 ? 'Adult' : 'Adults'}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-600 mb-1">
                    Children (Under 12)
                  </label>
                  <select
                    value={children}
                    onChange={(e) => setChildren(Number(e.target.value))}
                    className="w-full border border-stone-300 rounded-lg px-3 py-2 text-sm text-stone-900 focus:outline-none focus:border-emerald-600"
                  >
                    {[0, 1, 2, 3].map((num) => (
                      <option key={num} value={num}>{num} {num === 1 ? 'Child' : 'Children'}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Tent Selection Radio Cards */}
              <div>
                <label className="block text-xs font-medium text-stone-600 mb-2">
                  Select Accommodation ({nights} {nights === 1 ? 'Night' : 'Nights'})
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {ACCOMMODATIONS.map((t) => {
                    const isSelected = tentId === t.id;
                    return (
                      <div
                        key={t.id}
                        onClick={() => setTentId(t.id)}
                        className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
                          isSelected
                            ? 'bg-emerald-50/50 border-emerald-600 ring-1 ring-emerald-600'
                            : 'bg-white border-stone-200 hover:border-stone-300'
                        }`}
                      >
                        <div className="font-semibold text-stone-900 text-sm">{t.name}</div>
                        <div className="text-xs text-stone-500 mt-1">{t.capacity}</div>
                        <div className="text-xs font-bold text-emerald-800 mt-2">
                          ₹{t.pricePerNight.toLocaleString('en-IN')} <span className="font-normal text-stone-500">/ night</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Step 2: Safari Add-On */}
            <div className="space-y-4 pt-4 border-t border-stone-200">
              <div className="flex items-center justify-between">
                <div className="text-xs font-semibold uppercase tracking-wider text-stone-900 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-stone-900 text-white flex items-center justify-center text-[10px]">2</span>
                  <span>Corbett 4x4 Gypsy Safari Add-on</span>
                </div>
                <label className="flex items-center gap-2 cursor-pointer text-xs font-medium text-stone-700">
                  <input
                    type="checkbox"
                    checked={includeSafari}
                    onChange={(e) => setIncludeSafari(e.target.checked)}
                    className="rounded text-emerald-600 focus:ring-emerald-500 w-4 h-4"
                  />
                  <span>Include Private Gypsy Safari</span>
                </label>
              </div>

              {includeSafari && (
                <div className="bg-stone-50 rounded-xl p-4 border border-stone-200 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-stone-600 mb-1">
                      Corbett Safari Zone
                    </label>
                    <select
                      value={safariZoneId}
                      onChange={(e) => setSafariZoneId(e.target.value)}
                      className="w-full border border-stone-300 rounded-lg px-3 py-2 text-sm text-stone-900 focus:outline-none focus:border-emerald-600 bg-white"
                    >
                      {SAFARI_PACKAGES.map((s) => (
                        <option key={s.id} value={s.id}>
                          {s.zone} (+₹{s.pricePerGypsy.toLocaleString('en-IN')} up to 6 guests)
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-stone-600 mb-1">
                      Preferred Safari Timing Slot
                    </label>
                    <select
                      value={safariSlot}
                      onChange={(e) => setSafariSlot(e.target.value as 'morning' | 'afternoon')}
                      className="w-full border border-stone-300 rounded-lg px-3 py-2 text-sm text-stone-900 focus:outline-none focus:border-emerald-600 bg-white"
                    >
                      <option value="morning">Dawn Safari (06:00 AM - 09:30 AM)</option>
                      <option value="afternoon">Dusk Safari (02:30 PM - 06:00 PM)</option>
                    </select>
                  </div>
                </div>
              )}
            </div>

            {/* Step 3: Experiential Add-Ons */}
            <div className="space-y-3 pt-4 border-t border-stone-200">
              <div className="text-xs font-semibold uppercase tracking-wider text-stone-900 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-stone-900 text-white flex items-center justify-center text-[10px]">3</span>
                <span>Optional Camp Experiences & Transfers</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <label className="flex items-start gap-3 p-3 rounded-xl border border-stone-200 hover:bg-stone-50 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={addTransfers}
                    onChange={(e) => setAddTransfers(e.target.checked)}
                    className="mt-0.5 rounded text-emerald-600 focus:ring-emerald-500 w-4 h-4"
                  />
                  <div>
                    <span className="text-xs font-semibold text-stone-900 block">Ramnagar Railway Pickup / Drop</span>
                    <span className="text-[11px] text-stone-500">Private AC cab transfer to camp (+₹1,600)</span>
                  </div>
                </label>

                <label className="flex items-start gap-3 p-3 rounded-xl border border-stone-200 hover:bg-stone-50 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={addStarWalk}
                    onChange={(e) => setAddStarWalk(e.target.checked)}
                    className="mt-0.5 rounded text-emerald-600 focus:ring-emerald-500 w-4 h-4"
                  />
                  <div>
                    <span className="text-xs font-semibold text-stone-900 block">Night Stargazer & Bat Walk</span>
                    <span className="text-[11px] text-stone-500">With camp astronomer & Celestron telescope (+₹800 / person)</span>
                  </div>
                </label>
              </div>
            </div>

            {/* Step 4: Guest Contact Details */}
            <div className="space-y-4 pt-4 border-t border-stone-200">
              <div className="text-xs font-semibold uppercase tracking-wider text-stone-900 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-stone-900 text-white flex items-center justify-center text-[10px]">4</span>
                <span>Guest Contact & Wilderness Details</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-stone-600 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full border border-stone-300 rounded-lg px-3 py-2 text-sm text-stone-900 focus:outline-none focus:border-emerald-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-600 mb-1">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +91 98123 45678"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full border border-stone-300 rounded-lg px-3 py-2 text-sm text-stone-900 focus:outline-none focus:border-emerald-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-600 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border border-stone-300 rounded-lg px-3 py-2 text-sm text-stone-900 focus:outline-none focus:border-emerald-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-600 mb-1">
                    City of Origin
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Delhi NCR, Bangalore, Mumbai"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full border border-stone-300 rounded-lg px-3 py-2 text-sm text-stone-900 focus:outline-none focus:border-emerald-600"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-stone-600 mb-1">
                  Special Notes or Dietary Preferences (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Vegetarian, Jain food, anniversary setup, senior citizen access requirements..."
                  value={specialNotes}
                  onChange={(e) => setSpecialNotes(e.target.value)}
                  className="w-full border border-stone-300 rounded-lg px-3 py-2 text-sm text-stone-900 focus:outline-none focus:border-emerald-600"
                />
              </div>
            </div>

            {/* Step 5: Live Price Summary & Submit */}
            <div className="bg-stone-900 text-stone-100 rounded-xl p-5 border border-stone-800 space-y-3">
              <div className="flex justify-between items-center text-xs text-stone-400">
                <span>Stay Total ({nights} Nights in {selectedTent.name}):</span>
                <span className="font-mono tabular-nums text-white">₹{roomTotal.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between items-center text-xs text-stone-400">
                <span>Farm-to-Table All Meals (Breakfast, Lunch, Campfire Dinner):</span>
                <span className="text-emerald-400 font-medium">Included</span>
              </div>
              {includeSafari && (
                <div className="flex justify-between items-center text-xs text-stone-400">
                  <span>Open Gypsy Safari ({selectedSafari.zone}):</span>
                  <span className="font-mono tabular-nums text-white">₹{safariTotal.toLocaleString('en-IN')}</span>
                </div>
              )}
              {addonsTotal > 0 && (
                <div className="flex justify-between items-center text-xs text-stone-400">
                  <span>Selected Add-ons (Transfers / Stargazing):</span>
                  <span className="font-mono tabular-nums text-white">₹{addonsTotal.toLocaleString('en-IN')}</span>
                </div>
              )}
              <div className="flex justify-between items-center text-xs text-stone-400">
                <span>Corbett Wildlife Conservation & Waste Cleanliness Cess:</span>
                <span className="font-mono tabular-nums text-white">₹{conservationCess}</span>
              </div>
              <div className="pt-3 border-t border-stone-800 flex justify-between items-center">
                <div>
                  <span className="text-xs uppercase tracking-wider text-stone-400 block">Grand Total</span>
                  <span className="text-2xl font-bold text-white font-mono tabular-nums">
                    ₹{grandTotal.toLocaleString('en-IN')}
                  </span>
                </div>
                <button
                  type="submit"
                  className="px-8 py-3.5 text-xs font-semibold uppercase tracking-wider text-stone-950 bg-emerald-400 hover:bg-emerald-300 active:scale-95 transition-all rounded-md shadow-lg"
                >
                  Generate Booking Voucher
                </button>
              </div>
            </div>

          </form>
        )}

      </div>
    </div>
  );
};
