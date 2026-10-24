import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';
import { GUEST_REVIEWS } from '../data/campsiteData';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-stone-100 text-stone-900 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-emerald-800 mb-2">
            Unfiltered Guest Reflections
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 font-display">
            Stories From the Riverbank
          </h2>
          <p className="mt-4 text-base text-stone-600 leading-relaxed">
            From wildlife photographers to families escaping city smog, here is what guests experience when staying on the edge of Jim Corbett National Park.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {GUEST_REVIEWS.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-7 flex flex-col justify-between shadow-sm"
            >
              <div>
                {/* Clean unboxed metadata (NO PILLS) */}
                <div className="flex items-center gap-2 text-xs text-stone-500 mb-3">
                  <span>{review.tentType}</span>
                  <span aria-hidden="true">·</span>
                  <span>{review.stayDate}</span>
                </div>

                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-4 text-amber-500">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                  ))}
                </div>

                <p className="text-sm text-stone-700 leading-relaxed italic mb-6">
                  "{review.text}"
                </p>
              </div>

              <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-stone-900">
                    {review.name}
                  </h4>
                  <span className="text-xs text-stone-500">
                    {review.city}
                  </span>
                </div>
                <div className="flex items-center gap-1 text-[11px] text-emerald-800 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
                  <span>Verified Stay</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Nature Ethics Strip */}
        <div className="mt-12 bg-white rounded-xl border border-stone-200 p-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h4 className="text-sm font-bold text-stone-900">
              Responsible Wildlife Tourism Pledge
            </h4>
            <p className="text-xs text-stone-600">
              We operate strictly under the National Tiger Conservation Authority (NTCA) eco-tourism guidelines. 100% solar water heating, local Pahadi staff employment, and zero litter policy.
            </p>
          </div>
          <div className="text-xs text-stone-500 font-mono shrink-0">
            Certified Uttarakhand Ecotourism Unit
          </div>
        </div>

      </div>
    </section>
  );
};
