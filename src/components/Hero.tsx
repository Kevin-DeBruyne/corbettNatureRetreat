import React, { useState } from 'react';
import { Calendar, Users, Tent, ArrowRight, ShieldCheck, Flame, Compass } from 'lucide-react';
import { ACCOMMODATIONS, heroImg } from '../data/campsiteData';

interface HeroProps {
  onCheckAvailability: (tentId: string, checkIn: string, checkOut: string, guests: number) => void;
  onExploreMap: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onCheckAvailability, onExploreMap }) => {
  // Default to tomorrow and 2 nights stay
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const dayAfter = new Date(today);
  dayAfter.setDate(dayAfter.getDate() + 3);

  const tomorrowStr = tomorrow.toISOString().split('T')[0];
  const dayAfterStr = dayAfter.toISOString().split('T')[0];

  const [checkIn, setCheckIn] = useState(tomorrowStr);
  const [checkOut, setCheckOut] = useState(dayAfterStr);
  const [selectedTentId, setSelectedTentId] = useState(ACCOMMODATIONS[0].id);
  const [guests, setGuests] = useState(2);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCheckAvailability(selectedTentId, checkIn, checkOut, guests);
  };

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between pt-24 pb-12 bg-stone-950 text-white overflow-hidden">
      {/* Background Image Container with Measured Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt="Luxury canvas safari tents along pebble bank of Khichri River in Jim Corbett National Park"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out"
          referrerPolicy="no-referrer"
        />
        {/* Measured scrims to guarantee WCAG AA 4.5:1 text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/65 to-stone-950/35" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-20 lg:pt-28 flex-1 flex flex-col justify-center">
        <div className="max-w-3xl">
          {/* Clean Unboxed Metadata Kicker (Anti-Pill Rule) */}
          <div className="flex items-center gap-2 text-xs sm:text-sm font-medium tracking-wide uppercase text-emerald-300 mb-4">
            <span>Khichri Riverbank</span>
            <span aria-hidden="true" className="text-stone-400">·</span>
            <span>Kyari, Corbett</span>
            <span aria-hidden="true" className="text-stone-400">·</span>
            <span>Foothills of Kumaon</span>
          </div>

          {/* Display Headline with balanced wrap */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight mb-6 font-display" style={{ textWrap: 'balance' }}>
            Welcome to Corbett Nature Retreat
          </h1>

          {/* High-Intent Value Proposition */}
          <p className="text-base sm:text-lg text-stone-200 leading-relaxed max-w-2xl mb-8 font-normal">
            Eco-luxury insulated canvas tents perched on the crystal pebble banks of the Khichri River. Unfiltered Himalayan foothills wilderness, evening woodfire campfires, farm-to-table Kumaoni dining, and private open 4x4 Gypsy safaris led by certified naturalists.
          </p>

          {/* Action Row */}
          <div className="flex flex-wrap items-center gap-4 mb-10">
            <a
              href="#accommodations"
              className="px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-stone-950 bg-emerald-400 hover:bg-emerald-300 active:scale-95 transition-all rounded-md flex items-center gap-2 shadow-lg whitespace-nowrap shrink-0"
            >
              <span>Explore Tents & Tariff</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <button
              onClick={onExploreMap}
              className="px-6 py-3.5 text-sm font-medium text-stone-200 hover:text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 transition-all rounded-md flex items-center gap-2 whitespace-nowrap shrink-0"
            >
              <Compass className="w-4 h-4 text-emerald-400" />
              <span>Campsite Map & Location</span>
            </button>
          </div>
        </div>
      </div>

      {/* Floating Booking Quick Bar */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-4">
        <form 
          onSubmit={handleSubmit}
          className="bg-stone-900/95 backdrop-blur-md border border-stone-800 rounded-xl p-4 sm:p-5 shadow-2xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-end"
        >
          {/* Check-In */}
          <div>
            <label className="block text-xs font-medium text-stone-300 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-emerald-400" />
              <span>Check-In</span>
            </label>
            <input
              type="date"
              value={checkIn}
              min={tomorrowStr}
              onChange={(e) => setCheckIn(e.target.value)}
              className="w-full bg-stone-950 border border-stone-700 text-stone-100 rounded-md px-3 py-2.5 text-sm focus:outline-none focus:border-emerald-500 transition-colors"
              required
            />
          </div>

          {/* Check-Out */}
          <div>
            <label className="block text-xs font-medium text-stone-300 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-emerald-400" />
              <span>Check-Out</span>
            </label>
            <input
              type="date"
              value={checkOut}
              min={checkIn || tomorrowStr}
              onChange={(e) => setCheckOut(e.target.value)}
              className="w-full bg-stone-950 border border-stone-700 text-stone-100 rounded-md px-3 py-2.5 text-sm focus:outline-none focus:border-emerald-500 transition-colors"
              required
            />
          </div>

          {/* Stay Style */}
          <div>
            <label className="block text-xs font-medium text-stone-300 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
              <Tent className="w-3.5 h-3.5 text-emerald-400" />
              <span>Accommodation</span>
            </label>
            <select
              value={selectedTentId}
              onChange={(e) => setSelectedTentId(e.target.value)}
              className="w-full bg-stone-950 border border-stone-700 text-stone-100 rounded-md px-3 py-2.5 text-sm focus:outline-none focus:border-emerald-500 transition-colors"
            >
              {ACCOMMODATIONS.map((tent) => (
                <option key={tent.id} value={tent.id}>
                  {tent.name} (from ₹{tent.pricePerNight.toLocaleString('en-IN')})
                </option>
              ))}
            </select>
          </div>

          {/* Guests */}
          <div>
            <label className="block text-xs font-medium text-stone-300 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-emerald-400" />
              <span>Guests</span>
            </label>
            <select
              value={guests}
              onChange={(e) => setGuests(Number(e.target.value))}
              className="w-full bg-stone-950 border border-stone-700 text-stone-100 rounded-md px-3 py-2.5 text-sm focus:outline-none focus:border-emerald-500 transition-colors"
            >
              <option value={1}>1 Guest</option>
              <option value={2}>2 Guests (Couples)</option>
              <option value={3}>3 Guests</option>
              <option value={4}>4 Guests (Family)</option>
              <option value={5}>5+ Guests (Camp Group)</option>
            </select>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full py-2.5 px-4 text-xs font-semibold uppercase tracking-wider text-stone-950 bg-emerald-400 hover:bg-emerald-300 active:scale-95 transition-all rounded-md flex items-center justify-center gap-2 h-[42px] whitespace-nowrap"
            >
              <span>Check Dates & Rate</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </form>

        {/* 4-Item Proof & Trust Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 pt-6 border-t border-white/10 text-xs text-stone-300">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Permitted Corbett Safari Assistance</span>
          </div>
          <div className="flex items-center gap-2.5">
            <Flame className="w-4 h-4 text-amber-400 shrink-0" />
            <span>Nightly Riverside Bonfire & Stories</span>
          </div>
          <div className="flex items-center gap-2.5">
            <Tent className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>All 3 Mountain Meals Included</span>
          </div>
          <div className="flex items-center gap-2.5">
            <Compass className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Direct Khichri Pebble Riverbank Access</span>
          </div>
        </div>
      </div>
    </section>
  );
};
