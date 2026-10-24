import React, { useState } from 'react';
import { Compass, Clock, Users, ShieldAlert, Award, CheckCircle2, ArrowRight } from 'lucide-react';
import { SAFARI_PACKAGES, safariImg } from '../data/campsiteData';
import { SafariPackage } from '../types';

interface SafarisProps {
  onBookSafariWithStay: (safariId: string) => void;
}

export const Safaris: React.FC<SafarisProps> = ({ onBookSafariWithStay }) => {
  const [selectedZone, setSelectedZone] = useState<SafariPackage>(SAFARI_PACKAGES[0]);

  return (
    <section id="safaris" className="py-24 bg-stone-900 text-stone-100 border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-2">
            Jim Corbett Wildlife Expeditions
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display">
            Open 4x4 Gypsy Safaris & Forest Trails
          </h2>
          <p className="mt-4 text-base text-stone-300 leading-relaxed">
            Corbett is India’s oldest tiger sanctuary, home to over 250 Royal Bengal Tigers and wild Asian elephant herds. We provide end-to-end safari logistics: licensed open gypsies, official zone permits, and master naturalists stationed directly at camp.
          </p>
        </div>

        {/* 2-Column Split: Interactive Zone Selector & Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* Left: Zone Selection List (5 cols) */}
          <div className="lg:col-span-5 flex flex-col space-y-3">
            <span className="text-xs uppercase tracking-wider text-stone-400 font-medium px-1">
              Select Safari Zone & Expedition
            </span>
            {SAFARI_PACKAGES.map((pkg) => {
              const isSelected = selectedZone.id === pkg.id;
              return (
                <button
                  key={pkg.id}
                  onClick={() => setSelectedZone(pkg)}
                  className={`text-left p-4 rounded-xl border transition-all ${
                    isSelected
                      ? 'bg-stone-800 border-emerald-500 shadow-md ring-1 ring-emerald-500/50'
                      : 'bg-stone-950/60 border-stone-800 hover:bg-stone-800/60 hover:border-stone-700'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-semibold text-white font-display text-base">
                      {pkg.zone}
                    </span>
                    <span className="text-xs font-semibold text-emerald-400 tabular-nums">
                      ₹{pkg.pricePerGypsy.toLocaleString('en-IN')} <span className="text-stone-400 font-normal">/ gypsy</span>
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-stone-400 mb-2">
                    <span>{pkg.duration}</span>
                    <span aria-hidden="true">·</span>
                    <span>Up to {pkg.maxGuests} Guests</span>
                  </div>
                  <p className="text-xs text-stone-300 line-clamp-1">
                    {pkg.bestFor}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Right: Selected Zone Detailed Spotlight (7 cols) */}
          <div className="lg:col-span-7 bg-stone-950 rounded-2xl border border-stone-800 overflow-hidden flex flex-col justify-between">
            {/* Visual Header */}
            <div className="relative h-64 sm:h-72">
              <img
                src={safariImg}
                alt="Open top 4x4 Gypsy driving through Corbett jungle"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />
              <div className="absolute bottom-4 left-6 right-6">
                <span className="text-xs uppercase tracking-wider text-emerald-400 font-semibold">
                  Featured Wildlife Corridor
                </span>
                <h3 className="text-2xl font-bold text-white font-display">
                  {selectedZone.zone}
                </h3>
              </div>
            </div>

            {/* Content Details */}
            <div className="p-6 sm:p-8 space-y-6 flex-1 flex flex-col justify-between">
              <div>
                <p className="text-stone-300 text-sm leading-relaxed mb-6">
                  {selectedZone.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div className="bg-stone-900/80 p-3.5 rounded-lg border border-stone-800">
                    <div className="flex items-center gap-2 text-xs text-stone-400 mb-1">
                      <Clock className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="uppercase tracking-wider">Safari Timings</span>
                    </div>
                    <div className="text-sm font-semibold text-white">
                      {selectedZone.timing}
                    </div>
                  </div>

                  <div className="bg-stone-900/80 p-3.5 rounded-lg border border-stone-800">
                    <div className="flex items-center gap-2 text-xs text-stone-400 mb-1">
                      <Award className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="uppercase tracking-wider">Prime Sightings</span>
                    </div>
                    <div className="text-sm font-semibold text-white">
                      {selectedZone.bestFor}
                    </div>
                  </div>
                </div>

                {/* Inclusions List */}
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-400 mb-3">
                    What is Included in this Gypsy Expedition
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-300">
                    {selectedZone.included.map((inc, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{inc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="pt-6 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-stone-400">
                  <span className="text-white font-medium">Govt Permit Notice:</span> Government ID required for all passengers.
                </div>
                <button
                  onClick={() => onBookSafariWithStay(selectedZone.id)}
                  className="w-full sm:w-auto px-6 py-3 text-xs font-semibold uppercase tracking-wider text-stone-950 bg-emerald-400 hover:bg-emerald-300 active:scale-95 transition-all rounded-md flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  <span>Include {selectedZone.zone} in Booking</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Corbett Permit Advisory Banner */}
        <div className="bg-stone-800/70 border border-stone-700/70 rounded-xl p-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-stone-300">
          <div className="space-y-1">
            <span className="font-semibold text-white uppercase tracking-wider block">
              1. 45-Day Advance Booking Window
            </span>
            <p className="text-stone-400">
              Corbett Forest Department releases core zone permits exactly 45 days in advance. We advise securing dates early for peak months.
            </p>
          </div>
          <div className="space-y-1">
            <span className="font-semibold text-white uppercase tracking-wider block">
              2. Government ID Documentation
            </span>
            <p className="text-stone-400">
              Indian citizens require Aadhaar or Voter ID. International travelers require Passport details during permit registration.
            </p>
          </div>
          <div className="space-y-1">
            <span className="font-semibold text-white uppercase tracking-wider block">
              3. Private Gypsy Exclusivity
            </span>
            <p className="text-stone-400">
              Never shared with strangers. Your 4x4 Gypsy is exclusively reserved for you and your travel companions with a dedicated camp naturalist.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
