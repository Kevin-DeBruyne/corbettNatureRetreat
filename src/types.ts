export interface Accommodation {
  id: string;
  name: string;
  category: 'riverfront' | 'dome' | 'cottage';
  tagline: string;
  pricePerNight: number;
  capacity: string;
  size: string;
  bed: string;
  image: string;
  description: string;
  highlights: string[];
  amenities: string[];
  availableUnits: number;
}

export interface SafariPackage {
  id: string;
  zone: string;
  duration: string;
  timing: string;
  pricePerGypsy: number;
  maxGuests: number;
  bestFor: string;
  description: string;
  permitRequired: boolean;
  included: string[];
}

export interface ExperienceItem {
  id: string;
  title: string;
  category: string;
  timeOfDay: string;
  duration: string;
  description: string;
  image: string;
  tags: string[];
}

export interface WildlifeSighting {
  month: string;
  season: string;
  tempRange: string;
  tigerActivity: string;
  elephantActivity: string;
  birdActivity: string;
  idealFor: string;
}

export interface BookingFormState {
  checkIn: string;
  checkOut: string;
  accommodationId: string;
  adults: number;
  children: number;
  safariZoneId?: string;
  safariDate?: string;
  safariSlot?: 'morning' | 'afternoon';
  addTransfers: boolean;
  addStarWalk: boolean;
  fullName: string;
  email: string;
  phone: string;
  city: string;
  specialNotes: string;
}

export interface ConfirmedBooking extends BookingFormState {
  bookingId: string;
  bookedAt: string;
  nights: number;
  accommodationName: string;
  roomTotal: number;
  safariTotal: number;
  addonsTotal: number;
  conservationCess: number;
  grandTotal: number;
}
