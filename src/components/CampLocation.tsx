import React, { useState } from 'react';
import { MapPin, Navigation, Car, Train, Plane, ChevronDown, ChevronUp, Compass, ShieldCheck } from 'lucide-react';
import { FAQS } from '../data/campsiteData';

export const CampLocation: React.FC = () => {
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaqIdx(openFaqIdx === idx ? null : idx);
  };

  return (
    <section id="location-faq" className="py-24 bg-stone-900 text-stone-100 border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-2">
            Sanctuary Access & Guide
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display">
            Reaching Camp & Wilderness Preparation
          </h2>
          <p className="mt-4 text-base text-stone-300 leading-relaxed">
            Perched along the scenic Kosi River in Mohan village, 28 km north of Ramnagar town on the Ranikhet Highway. Easy connectivity from Delhi NCR while completely secluded from tourist town traffic.
          </p>
        </div>

        {/* 2-Column Split: Travel Routes + Packing Checklist */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          
          {/* Left Column: Reaching Here (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-xl font-bold text-white font-display flex items-center gap-2">
              <Navigation className="w-5 h-5 text-emerald-400" />
              <span>How to Reach Corbett Nature Retreat</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-stone-950/70 p-4 rounded-xl border border-stone-800">
                <Car className="w-5 h-5 text-emerald-400 mb-2" />
                <h4 className="font-semibold text-white text-sm">By Road</h4>
                <p className="text-xs text-stone-400 mt-1">
                  260 km from New Delhi (5.5 hrs drive) via Hapur Bypass → Moradabad → Kashipur → Ramnagar → Mohan.
                </p>
              </div>

              <div className="bg-stone-950/70 p-4 rounded-xl border border-stone-800">
                <Train className="w-5 h-5 text-emerald-400 mb-2" />
                <h4 className="font-semibold text-white text-sm">By Train</h4>
                <p className="text-xs text-stone-400 mt-1">
                  Ranikhet Express or Corbett Park Link Express to Ramnagar station (28 km away). Private pickup arranged.
                </p>
              </div>

              <div className="bg-stone-950/70 p-4 rounded-xl border border-stone-800">
                <Plane className="w-5 h-5 text-emerald-400 mb-2" />
                <h4 className="font-semibold text-white text-sm">By Air</h4>
                <p className="text-xs text-stone-400 mt-1">
                  Pantnagar Airport (85 km, ~2 hrs drive) or Indira Gandhi International Airport New Delhi (275 km).
                </p>
              </div>
            </div>

            {/* Camp Geographic Card */}
            <div className="bg-stone-950 rounded-2xl border border-stone-800 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs text-emerald-400 font-semibold uppercase tracking-wider">
                  <MapPin className="w-4 h-4" />
                  <span>Camp GPS Coordinates</span>
                </div>
                <div className="text-white font-mono text-sm">
                  29.5482° N, 79.1245° E · Mohan, Almora-Ranikhet Highway
                </div>
                <div className="text-stone-400 text-xs">
                  Right on the Kosi riverbank, opposite Kumaria Forest Rest House.
                </div>
              </div>
              <a
                href="https://maps.google.com/?q=Jim+Corbett+National+Park+Mohan"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-stone-950 bg-emerald-400 hover:bg-emerald-300 rounded-md transition-colors whitespace-nowrap"
              >
                Open Google Maps
              </a>
            </div>
          </div>

          {/* Right Column: Wilderness Packing Advice (5 cols) */}
          <div className="lg:col-span-5 bg-stone-950 rounded-2xl border border-stone-800 p-6 sm:p-7 flex flex-col justify-between">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-1">
                Essential Checklist
              </div>
              <h3 className="text-xl font-bold text-white font-display mb-4">
                What to Pack for River Camping
              </h3>
              
              <ul className="space-y-3 text-xs text-stone-300">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0 mt-1.5" />
                  <span><strong>Earth-Tone Clothing:</strong> Olive green, khaki, brown, and beige attire for safaris. Avoid bright reds, neon, or white in the jungle.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0 mt-1.5" />
                  <span><strong>Layered Fleece & Windbreaker:</strong> Early morning safaris in open gypsies can be chilly even in spring.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0 mt-1.5" />
                  <span><strong>River Walking Shoes:</strong> Sturdy sandals or trekking shoes with good grip on wet river stones.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0 mt-1.5" />
                  <span><strong>Binoculars & Headlamp:</strong> 8x42 or 10x42 binoculars are ideal for spotting tigers and canopy birds.</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-stone-800 flex items-center gap-3 text-xs text-stone-400">
              <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
              <span>We provide mosquito repellent sprays, brass lanterns, and filtered mountain spring water flasks.</span>
            </div>
          </div>
        </div>

        {/* FAQs Section */}
        <div className="max-w-4xl mx-auto pt-8">
          <div className="text-center mb-8">
            <span className="text-xs uppercase tracking-wider text-emerald-400 font-semibold">
              Traveler Inquiries
            </span>
            <h3 className="text-2xl font-bold text-white font-display mt-1">
              Frequently Asked Questions
            </h3>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaqIdx === idx;
              return (
                <div
                  key={idx}
                  className="bg-stone-950/80 border border-stone-800 rounded-xl overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left p-5 flex items-center justify-between gap-4 text-stone-200 hover:text-white"
                  >
                    <span className="font-semibold text-sm sm:text-base">
                      {faq.question}
                    </span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-emerald-400 shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-stone-400 shrink-0" />
                    )}
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-stone-300 leading-relaxed border-t border-stone-800/60 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
