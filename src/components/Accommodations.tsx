import React, { useState } from 'react';
import { Users, Maximize2, Bed, Check, Sparkles, X, ArrowRight, ShieldCheck, Waves } from 'lucide-react';
import { Accommodation } from '../types';
import { ACCOMMODATIONS } from '../data/campsiteData';

interface AccommodationsProps {
  onSelectAccommodation: (tentId: string) => void;
}

export const Accommodations: React.FC<AccommodationsProps> = ({ onSelectAccommodation }) => {
  const [filter, setFilter] = useState<'all' | 'riverfront' | 'dome' | 'cottage'>('all');
  const [selectedTentForModal, setSelectedTentForModal] = useState<Accommodation | null>(null);

  const filteredTents = filter === 'all'
    ? ACCOMMODATIONS
    : ACCOMMODATIONS.filter((t) => t.category === filter);

  return (
    <section id="accommodations" className="py-24 bg-stone-100 text-stone-900 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-emerald-800 mb-2">
              Eco-Luxury Wilderness Living
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 font-display">
              Handcrafted Tents & River Cottages
            </h2>
            <p className="mt-3 text-base text-stone-600 leading-relaxed">
              Every stay is built using low-impact local stone, seasoned Sal timber, and insulated canvas, spaced generously along the Kosi riverbank for absolute privacy and undisturbed bird song.
            </p>
          </div>

          {/* Interactive Filter Tabs (Buttons allowed for functional filters) */}
          <div className="flex items-center gap-1.5 p-1 bg-stone-200 rounded-lg self-start md:self-auto overflow-x-auto max-w-full">
            <button
              onClick={() => setFilter('all')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-md whitespace-nowrap transition-colors ${
                filter === 'all'
                  ? 'bg-stone-900 text-white shadow-sm'
                  : 'text-stone-700 hover:text-stone-950 hover:bg-stone-300/60'
              }`}
            >
              All Accommodations
            </button>
            <button
              onClick={() => setFilter('riverfront')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-md whitespace-nowrap transition-colors ${
                filter === 'riverfront'
                  ? 'bg-stone-900 text-white shadow-sm'
                  : 'text-stone-700 hover:text-stone-950 hover:bg-stone-300/60'
              }`}
            >
              Riverfront Tents
            </button>
            <button
              onClick={() => setFilter('dome')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-md whitespace-nowrap transition-colors ${
                filter === 'dome'
                  ? 'bg-stone-900 text-white shadow-sm'
                  : 'text-stone-700 hover:text-stone-950 hover:bg-stone-300/60'
              }`}
            >
              Stargazer Domes
            </button>
            <button
              onClick={() => setFilter('cottage')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-md whitespace-nowrap transition-colors ${
                filter === 'cottage'
                  ? 'bg-stone-900 text-white shadow-sm'
                  : 'text-stone-700 hover:text-stone-950 hover:bg-stone-300/60'
              }`}
            >
              Heritage Cottages
            </button>
          </div>
        </div>

        {/* Accommodations Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filteredTents.map((tent) => (
            <div
              key={tent.id}
              className="bg-white rounded-xl border border-stone-200 overflow-hidden flex flex-col shadow-sm hover:shadow-md transition-shadow group"
            >
              {/* Media Container with Zero-Broken-Image Safety */}
              <div className="relative h-64 overflow-hidden bg-stone-200">
                <img
                  src={tent.image}
                  alt={tent.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    // Fallback visual container
                    const target = e.target as HTMLElement;
                    target.style.display = 'none';
                  }}
                />
                <div className="absolute top-3 right-3 bg-stone-950/80 backdrop-blur-sm text-stone-100 text-xs px-2.5 py-1 rounded">
                  <span className="font-semibold text-emerald-400">₹{tent.pricePerNight.toLocaleString('en-IN')}</span> / night
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  {/* Clean unboxed metadata (NO PILLS) */}
                  <div className="flex items-center gap-2 text-xs text-stone-500 mb-2">
                    <span>{tent.capacity}</span>
                    <span aria-hidden="true">·</span>
                    <span>{tent.size}</span>
                  </div>

                  <h3 className="text-xl font-bold text-stone-900 font-display mb-1.5 group-hover:text-emerald-800 transition-colors">
                    {tent.name}
                  </h3>
                  
                  <p className="text-xs text-stone-500 italic mb-4">
                    "{tent.tagline}"
                  </p>

                  <p className="text-sm text-stone-600 line-clamp-3 mb-5 leading-relaxed">
                    {tent.description}
                  </p>

                  {/* Highlights List */}
                  <div className="space-y-2 mb-6 border-t border-stone-100 pt-4">
                    {tent.highlights.slice(0, 3).map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-stone-700">
                        <Check className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="pt-4 border-t border-stone-100 flex items-center justify-between gap-3">
                  <button
                    onClick={() => setSelectedTentForModal(tent)}
                    className="text-xs font-semibold text-stone-700 hover:text-stone-950 underline underline-offset-4 transition-colors"
                  >
                    View Specs & Amenities
                  </button>
                  <button
                    onClick={() => onSelectAccommodation(tent.id)}
                    className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-stone-900 hover:bg-emerald-800 active:scale-95 transition-all rounded-md flex items-center gap-1.5"
                  >
                    <span>Reserve</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Meal Inclusions Callout Strip */}
        <div className="mt-12 bg-stone-900 text-stone-200 rounded-xl p-6 border border-stone-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-emerald-950 border border-emerald-800 flex items-center justify-center shrink-0">
              <Sparkles className="w-6 h-6 text-emerald-400" />
            </div>
            <div>
              <h4 className="text-base font-semibold text-white font-display">
                All-Inclusive Wilderness Dining Guarantee
              </h4>
              <p className="text-xs text-stone-400 mt-0.5">
                All accommodation tariffs include morning tea, farm breakfast, authentic Kumaoni lunch, high tea by the river, and evening campfire dinner.
              </p>
            </div>
          </div>
          <button
            onClick={() => onSelectAccommodation(ACCOMMODATIONS[0].id)}
            className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-stone-950 bg-emerald-400 hover:bg-emerald-300 transition-colors rounded-md whitespace-nowrap shrink-0"
          >
            Check Available Dates
          </button>
        </div>

      </div>

      {/* Tent Details Modal */}
      {selectedTentForModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/80 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-stone-300 shadow-2xl">
            {/* Modal Header */}
            <div className="relative h-64 sm:h-72">
              <img
                src={selectedTentForModal.image}
                alt={selectedTentForModal.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <button
                onClick={() => setSelectedTentForModal(null)}
                className="absolute top-4 right-4 p-2 bg-stone-900/80 hover:bg-stone-900 text-white rounded-full transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-4 bg-stone-950/85 backdrop-blur-sm text-white px-3.5 py-1.5 rounded-lg text-sm">
                <span className="font-bold text-emerald-400">₹{selectedTentForModal.pricePerNight.toLocaleString('en-IN')}</span> / night
                <span className="text-stone-300 text-xs ml-2">(all meals included)</span>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <div className="flex items-center gap-2 text-xs text-stone-500 mb-1">
                  <span>{selectedTentForModal.capacity}</span>
                  <span>·</span>
                  <span>{selectedTentForModal.size}</span>
                  <span>·</span>
                  <span>{selectedTentForModal.bed}</span>
                </div>
                <h3 className="text-2xl font-bold text-stone-900 font-display">
                  {selectedTentForModal.name}
                </h3>
                <p className="text-stone-600 text-sm mt-3 leading-relaxed">
                  {selectedTentForModal.description}
                </p>
              </div>

              {/* Highlights */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-900 mb-3">
                  Key Experience Highlights
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedTentForModal.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-stone-700 bg-stone-50 p-2.5 rounded-lg border border-stone-200">
                      <Check className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Amenities */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-900 mb-3">
                  In-Tent Comforts & Features
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs text-stone-600">
                  {selectedTentForModal.amenities.map((amenity, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0" />
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Camp Etiquette & Nature Rules */}
              <div className="bg-emerald-50/70 border border-emerald-200 rounded-xl p-4 text-xs text-emerald-950 space-y-1.5">
                <div className="font-semibold flex items-center gap-2 text-emerald-900">
                  <ShieldCheck className="w-4 h-4 text-emerald-700" />
                  <span>National Park Buffer Zone Sanctuary</span>
                </div>
                <p>
                  Zero single-use plastic zone. Running hot water heated via solar thermal collectors. 10:00 PM quiet hours strictly observed for forest fauna comfort.
                </p>
              </div>

              {/* Modal Actions */}
              <div className="pt-4 border-t border-stone-200 flex items-center justify-end gap-3">
                <button
                  onClick={() => setSelectedTentForModal(null)}
                  className="px-4 py-2.5 text-xs font-medium text-stone-700 hover:text-stone-950 transition-colors"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    const id = selectedTentForModal.id;
                    setSelectedTentForModal(null);
                    onSelectAccommodation(id);
                  }}
                  className="px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-emerald-800 hover:bg-emerald-700 transition-colors rounded-md shadow-sm"
                >
                  Book This Accommodation
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
