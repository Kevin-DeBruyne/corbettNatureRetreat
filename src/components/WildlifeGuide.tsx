import React, { useState } from 'react';
import { Calendar, Sun, CloudRain, Snowflake, Binoculars, Eye, Compass } from 'lucide-react';
import { WILDLIFE_CALENDAR } from '../data/campsiteData';

export const WildlifeGuide: React.FC = () => {
  const [selectedSeasonIdx, setSelectedSeasonIdx] = useState(0);
  const current = WILDLIFE_CALENDAR[selectedSeasonIdx];

  const birdSpecies = [
    { name: 'Great Pied Hornbill', habitat: 'Dense Sal Canopy', rarity: 'Vulnerable' },
    { name: 'Crested Serpent Eagle', habitat: 'Riverbank Perches', rarity: 'Common' },
    { name: 'Stork-billed Kingfisher', habitat: 'Khichri River Shallows', rarity: 'Resident' },
    { name: 'Pallas’s Fish Eagle', habitat: 'Ramganga & Khichri Reservoirs', rarity: 'Endangered' },
    { name: 'Brown Fish Owl', habitat: 'Old Growth River Trees', rarity: 'Nocturnal' },
    { name: 'Plum-headed Parakeet', habitat: 'Bamboo Thickets', rarity: 'Abundant' }
  ];

  return (
    <section id="wildlife" className="py-24 bg-stone-100 text-stone-900 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-emerald-800 mb-2">
            Seasonal Naturalist Guide
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 font-display">
            Wildlife Sighting Calendar & Seasons
          </h2>
          <p className="mt-4 text-base text-stone-600 leading-relaxed">
            Corbett changes dramatically across the seasons. From winter mist and roaring campfires to golden summer waterhole stakeouts, plan your camp stay according to what you wish to experience.
          </p>
        </div>

        {/* Season Selector Tabs */}
        <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2">
          {WILDLIFE_CALENDAR.map((item, idx) => {
            const isSelected = selectedSeasonIdx === idx;
            return (
              <button
                key={item.month}
                onClick={() => setSelectedSeasonIdx(idx)}
                className={`px-5 py-3 rounded-xl border text-left transition-all whitespace-nowrap shrink-0 flex items-center gap-3 ${
                  isSelected
                    ? 'bg-stone-900 border-stone-900 text-white shadow-md'
                    : 'bg-white border-stone-200 text-stone-700 hover:bg-stone-50 hover:border-stone-300'
                }`}
              >
                {idx === 0 && <Snowflake className={`w-4 h-4 ${isSelected ? 'text-cyan-400' : 'text-stone-500'}`} />}
                {idx === 1 && <Sun className={`w-4 h-4 ${isSelected ? 'text-amber-400' : 'text-stone-500'}`} />}
                {idx === 2 && <CloudRain className={`w-4 h-4 ${isSelected ? 'text-emerald-400' : 'text-stone-500'}`} />}
                <div>
                  <div className="font-bold text-sm">{item.month}</div>
                  <div className={`text-xs ${isSelected ? 'text-stone-300' : 'text-stone-500'}`}>{item.season}</div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Season Detail Card */}
        <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-sm mb-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8 pb-8 border-b border-stone-100">
            <div>
              <span className="text-xs uppercase tracking-wider text-stone-400 font-medium block mb-1">
                Temperature Range
              </span>
              <span className="text-xl sm:text-2xl font-bold text-stone-900 font-mono tabular-nums">
                {current.tempRange}
              </span>
            </div>
            <div>
              <span className="text-xs uppercase tracking-wider text-stone-400 font-medium block mb-1">
                Tiger Sighting Probability
              </span>
              <span className="text-sm font-semibold text-stone-800">
                {current.tigerActivity}
              </span>
            </div>
            <div>
              <span className="text-xs uppercase tracking-wider text-stone-400 font-medium block mb-1">
                Elephant Herds Movement
              </span>
              <span className="text-sm font-semibold text-stone-800">
                {current.elephantActivity}
              </span>
            </div>
            <div>
              <span className="text-xs uppercase tracking-wider text-stone-400 font-medium block mb-1">
                Avian & Birding Activity
              </span>
              <span className="text-sm font-semibold text-stone-800">
                {current.birdActivity}
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-emerald-50/60 border border-emerald-100 p-4 rounded-xl">
            <div className="flex items-center gap-3">
              <Eye className="w-5 h-5 text-emerald-700 shrink-0" />
              <div className="text-xs sm:text-sm text-emerald-950">
                <span className="font-semibold">Recommended Focus:</span> {current.idealFor}
              </div>
            </div>
            <a
              href="#accommodations"
              className="text-xs font-semibold text-emerald-800 hover:text-emerald-950 underline underline-offset-4 whitespace-nowrap self-start sm:self-auto"
            >
              Book For This Season →
            </a>
          </div>
        </div>

        {/* Birding Checklist Grid */}
        <div className="bg-stone-900 text-stone-100 rounded-2xl p-6 sm:p-8 border border-stone-800">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
            <div>
              <span className="text-xs uppercase tracking-wider text-emerald-400 font-semibold">
                Corbett Birding Corridor
              </span>
              <h3 className="text-xl font-bold text-white font-display mt-1">
                Over 300+ Resident & Migratory Species Sighted at Camp
              </h3>
            </div>
            <div className="flex items-center gap-2 text-xs text-stone-400">
              <Binoculars className="w-4 h-4 text-emerald-400" />
              <span>Complimentary field guides & binoculars on request</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {birdSpecies.map((bird, idx) => (
              <div
                key={idx}
                className="bg-stone-950/70 p-3.5 rounded-xl border border-stone-800 flex items-center justify-between gap-3"
              >
                <div>
                  <h4 className="text-sm font-semibold text-white">
                    {bird.name}
                  </h4>
                  <p className="text-xs text-stone-400 mt-0.5">
                    {bird.habitat}
                  </p>
                </div>
                {/* Clean unboxed metadata (NO PILLS) */}
                <span className="text-xs text-emerald-400 font-mono">
                  {bird.rarity}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
