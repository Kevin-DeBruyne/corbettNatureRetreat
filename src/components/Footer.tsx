import React from 'react';
import { Phone, Mail, MapPin, Compass, Shield } from 'lucide-react';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  return (
    <footer className="bg-stone-950 text-stone-400 border-t border-stone-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          
          {/* Brand & Wordmark */}
          <div className="space-y-4 md:col-span-1">
            <span className="text-xl font-bold tracking-tight text-white font-display block">
              Corbett Nature Retreat
            </span>
            <p className="text-stone-400 text-xs leading-relaxed">
              Riverbank wilderness camping, luxury canvas safari tents, and certified Jim Corbett National Park expeditions along the Khichri River, Uttarakhand.
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-stone-950 bg-emerald-400 hover:bg-emerald-300 transition-colors rounded-md"
              >
                Book Your Stay
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-200">
              Accommodations
            </h4>
            <ul className="space-y-2">
              <li><a href="#accommodations" className="hover:text-white transition-colors">Khichri Riverfront Safari Tent</a></li>
              <li><a href="#accommodations" className="hover:text-white transition-colors">Stargazer Forest Dome</a></li>
              <li><a href="#accommodations" className="hover:text-white transition-colors">Heritage Kumaoni Sal Cottage</a></li>
              <li><a href="#accommodations" className="hover:text-white transition-colors">All-Inclusive Meal Plan</a></li>
            </ul>
          </div>

          {/* Expeditions */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-200">
              Wildlife & Safaris
            </h4>
            <ul className="space-y-2">
              <li><a href="#safaris" className="hover:text-white transition-colors">Bijrani Tiger Safari Zone</a></li>
              <li><a href="#safaris" className="hover:text-white transition-colors">Jhirna Eco-Safari Corridor</a></li>
              <li><a href="#safaris" className="hover:text-white transition-colors">Sitabani Forest Walking Trail</a></li>
              <li><a href="#wildlife" className="hover:text-white transition-colors">Seasonal Sighting Calendar</a></li>
              <li><a href="#safaris" className="hover:text-white transition-colors">45-Day Permit Assistance</a></li>
            </ul>
          </div>

          {/* Direct Camp Office */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-200">
              Camp Concierge & Location
            </h4>
            <div className="space-y-2.5 text-xs text-stone-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span>Khichri Riverbank, Village Kyari, Corbett, Ramnagar, Uttarakhand 244715</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <a href="tel:+918449506167" className="hover:text-white">+91 84495 06167</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <a href="mailto:stay@corbettnatureretreat.in" className="hover:text-white">stay@corbettnatureretreat.in</a>
              </div>
            </div>
          </div>

        </div>

        {/* Quiet Sub-Footer */}
        <div className="mt-12 pt-8 border-t border-stone-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-stone-500">
          <div>
            © {new Date().getFullYear()} Corbett Nature Retreat & Campsite. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-xs">
            <span>Eco-Tourism Certified</span>
            <span aria-hidden="true">·</span>
            <span>Zero Plastic Facility</span>
            <span aria-hidden="true">·</span>
            <span>Uttarakhand Forest Buffer Partner</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
