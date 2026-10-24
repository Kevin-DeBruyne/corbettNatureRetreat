import { Accommodation, SafariPackage, ExperienceItem, WildlifeSighting } from '../types';
import heroImg from '../assets/images/corbett_campsite_hero_1792819779238.jpg';
import tentImg from '../assets/images/corbett_luxury_tent_1792819780371.jpg';
import safariImg from '../assets/images/corbett_safari_gypsy_1792819781666.jpg';
import campfireImg from '../assets/images/corbett_campfire_evening_1792819781072.jpg';

export { heroImg, tentImg, safariImg, campfireImg };

export const ACCOMMODATIONS: Accommodation[] = [
  {
    id: 'riverfront-safari-tent',
    name: 'Khichri Riverfront Luxury Safari Tent',
    category: 'riverfront',
    tagline: 'Step directly from your teak deck onto the riverbank pebbles',
    pricePerNight: 7500,
    capacity: '2 Adults + 1 Child',
    size: '420 sq.ft living + 140 sq.ft private deck',
    bed: 'King-size hand-carved Sheesham bed',
    image: tentImg,
    description: 'Weatherproof heavy-duty multi-layer canvas safari tent raised on natural timber stilts. Features panoramic river vistas, an en-suite stone bathroom with hot running water, handcrafted jute rugs, and brass lantern accents.',
    highlights: [
      'Private wooden sit-out with views of the Khichri River',
      'En-suite natural slate bathroom with rain shower & hot water',
      'All meals included (Breakfast, Pahadi Lunch & Campfire Barbeque Dinner)',
      '100% insect-screened mesh windows with blackout canvas flaps'
    ],
    amenities: [
      'Running Hot & Cold Spring Water',
      'Organic Lemongrass & Citronella Toiletries',
      'Charging Ports for Cameras & Phones',
      'Brass Reading Lanterns & Ceiling Fan',
      'Complimentary Corbett Herbal Tea & Press Kettle',
      'Plush Cotton Linens & Woolen Quilts'
    ],
    availableUnits: 6
  },
  {
    id: 'forest-glamping-dome',
    name: 'Stargazer Forest Glamping Dome',
    category: 'dome',
    tagline: '360° celestial sky view beneath the dense Sal canopy',
    pricePerNight: 6200,
    capacity: '2 Adults',
    size: '360 sq.ft geodesic dome on raised platform',
    bed: 'Plush Queen Bed with starry skylight above',
    image: heroImg,
    description: 'Designed for couples and astronomy lovers. Geodesic architectural dome tucked quietly into the bamboo grove. Features an unobstructed transparent skylight section for stargazing into unpolluted Himalayan skies.',
    highlights: [
      'Transparent dome section aligned with the Milky Way arc',
      'Private balcony deck facing the forest buffer zone',
      'Includes telescope setup and stargazing map',
      'All 3 artisanal meals and evening campfire tea included'
    ],
    amenities: [
      'Private Attached Bathroom with hot shower',
      'Celestron Stargazing Refractor Telescope',
      'Cozy Heating & Electric Warm Blankets for winter nights',
      'Solar Powered Charging Station',
      'Forest Soundproofing & Canvas Privacy Curtains',
      'Organic Bath Products'
    ],
    availableUnits: 4
  },
  {
    id: 'kumaoni-sal-cottage',
    name: 'Heritage Kumaoni Sal Wood Cottage',
    category: 'cottage',
    tagline: 'Traditional mountain masonry and reclaimed Sal timbers',
    pricePerNight: 9800,
    capacity: '3 Adults or 2 Adults + 2 Kids',
    size: '560 sq.ft with spacious stone verandah',
    bed: '1 King Bed + 1 Cozy Recessed Daybed',
    image: campfireImg,
    description: 'Built by local Kumaoni artisans using river stone, mud plaster, and seasoned Sal wood beams. Maintains natural warmth during cold Corbett nights and refreshing coolness during sunny afternoons. Perfect for families or small groups.',
    highlights: [
      'Stone verandah overlooking the orchard and mountain ridge',
      'Handcrafted stone wood-burning fireplace for winter warmth',
      'Spacious double bathroom with hammered brass fittings',
      'Customized Pahadi dining table setup on private deck'
    ],
    amenities: [
      'Traditional Fireplace with pre-stacked firewood',
      'En-suite Dressing Room & Spacious Wardrobe',
      'High-speed Satellite Wi-Fi for remote work',
      'Artisanal Kumaoni Clay Water Dispensers',
      'Binoculars for bird watching from your porch',
      'Daily Butler & Turndown Service'
    ],
    availableUnits: 3
  }
];

export const SAFARI_PACKAGES: SafariPackage[] = [
  {
    id: 'bijrani-safari',
    zone: 'Bijrani Safari Zone',
    duration: '3.5 Hours',
    timing: 'Morning 06:00 AM / Afternoon 02:30 PM',
    pricePerGypsy: 5800,
    maxGuests: 6,
    bestFor: 'High Royal Bengal Tiger sighting probability & scenic grasslands',
    description: 'Bijrani is renowned for its diverse vegetation, scenic river beds, and open meadows (chaurs). It has one of the highest densities of tigers in Jim Corbett National Park.',
    permitRequired: true,
    included: [
      'Registered Open 4x4 Maruti Gypsy',
      'Certified Uttarakhand Forest Naturalist Guide',
      'Campsite pickup & drop service',
      'All Corbett Forest Entry permits & vehicle road taxes'
    ]
  },
  {
    id: 'jhirna-safari',
    zone: 'Jhirna Eco-Safari Zone',
    duration: '3.5 Hours',
    timing: 'Morning 06:00 AM / Afternoon 02:30 PM',
    pricePerGypsy: 5400,
    maxGuests: 6,
    bestFor: 'Year-round open zone, wild Asiatic elephants & sloth bears',
    description: 'Situated on the southern boundary of the national park. Famous for herds of wild elephants wandering through bamboo thickets, nilgai, sambar deer, and sloth bears.',
    permitRequired: true,
    included: [
      'Registered 4x4 Gypsy',
      'Expert Tracker Naturalist',
      'Permit processing with Government Corbett Portal',
      'Binoculars provided in the vehicle'
    ]
  },
  {
    id: 'sitabani-buffer',
    zone: 'Sitabani Jungle & Birding Trail',
    duration: '4 Hours',
    timing: 'Flexible (Morning / Afternoon / Full Trek)',
    pricePerGypsy: 4200,
    maxGuests: 6,
    bestFor: 'Over 300 bird species, river crossings & ancient hermitage',
    description: 'A serene sanctuary where nature walking treks are permissible with camp guides. Great for sighting Hornbills, Crested Serpent Eagles, barking deer, and river crossings.',
    permitRequired: false,
    included: [
      '4x4 Gypsy or Guided Walking Trek',
      'Senior Camp Ornithologist Guide',
      'Bird Identification Guide Book',
      'Packed Mountain Tea & Artisanal Cookies'
    ]
  },
  {
    id: 'dhela-zone',
    zone: 'Dhela Wildlife Eco-Zone',
    duration: '3.5 Hours',
    timing: 'Morning 06:00 AM / Afternoon 02:30 PM',
    pricePerGypsy: 5400,
    maxGuests: 6,
    bestFor: 'Grassland birding, Leopards, and Tiger tracking',
    description: 'A magnificent ecotourism zone rich in birdlife and active leopard tracking corridors. Features expansive water reservoirs where raptors and jackals congregate.',
    permitRequired: true,
    included: [
      'Open 4x4 Gypsy Safari',
      'Forest Department Verified Naturalist',
      'All Entry Permits & Forest Cess',
      'Camp assistance with ID upload'
    ]
  }
];

export const CAMP_EXPERIENCES: ExperienceItem[] = [
  {
    id: 'campfire-folklore',
    title: 'Starlit Campfire & Kumaoni Folklore',
    category: 'Evenings at Camp',
    timeOfDay: '07:30 PM - 10:00 PM',
    duration: '2.5 Hours',
    description: 'Gather around the riverside stone fire pit beneath a crystal-clear night sky. Listen to captivating wildlife trackers recount legendary encounters of Jim Corbett while savoring wood-roasted corn, slow-smoked appetizers, and spiced Himalayan tea.',
    image: campfireImg,
    tags: ['Campfire', 'Live Stories', 'Starry Skies', 'Included in Stay']
  },
  {
    id: 'khichri-river-walk',
    title: 'Dawn Khichri River & Pebble Trail Walk',
    category: 'River Adventure',
    timeOfDay: '06:30 AM - 08:00 AM',
    duration: '1.5 Hours',
    description: 'Walk through dewy Sal trees along the riverbank with our resident naturalist. Spot freshwater otters, kingfishers diving into turquoise pools, and examine fresh pugmarks left on the river sand during the night.',
    image: heroImg,
    tags: ['Pugmark Tracking', 'Otter Sighting', 'Gentle Walk', 'All Ages']
  },
  {
    id: 'gypsy-safari-expedition',
    title: 'Private Open 4x4 Corbett Gypsy Safaris',
    category: 'Wilderness Safari',
    timeOfDay: 'Dawn & Dusk Slots',
    duration: '3.5 Hours',
    description: 'Venture into the heart of Jim Corbett National Park. Our seasoned drivers and naturalists read alarm calls from deer and monkeys to track the elusive Royal Bengal Tiger and wild Asiatic elephants in their pristine habitat.',
    image: safariImg,
    tags: ['Tiger Tracking', 'Elephant Herds', 'Open 4x4 Gypsy', 'Permit Supported']
  },
  {
    id: 'kumaoni-pahadi-cuisine',
    title: 'Authentic Kumaoni Kitchen & Organic Harvest',
    category: 'Culinary Heritage',
    timeOfDay: 'All Meals',
    duration: 'Dining Hours',
    description: 'Taste authentic hill dishes prepared on slow wood-fire chulhas: Bhatt ki Churkani (black bean curry), Aloo ke Gutke, Mandua (finger millet) rotis, Pahadi raita with mountain mustard seeds, and fresh buransh (rhododendron) drinks.',
    image: tentImg,
    tags: ['Slow Wood Cooked', 'Local Farm Produce', 'All Meals Included', 'Special Diets']
  }
];

export const WILDLIFE_CALENDAR: WildlifeSighting[] = [
  {
    month: 'Nov - Feb',
    season: 'Crisp Winter & Morning Mist',
    tempRange: '8°C - 22°C',
    tigerActivity: 'High - Basking in sunny grasslands and riverside boulders',
    elephantActivity: 'Moderate - Moving through lower Sal forests',
    birdActivity: 'Peak - Over 150+ migratory Himalayan bird species arrive',
    idealFor: 'Bonfires, misty photography, crisp morning safaris, birdwatching'
  },
  {
    month: 'Mar - Jun',
    season: 'Golden Spring & Warm Dry Wilderness',
    tempRange: '18°C - 36°C',
    tigerActivity: 'Peak - Frequent sightings around Khichri river & waterholes',
    elephantActivity: 'High - Large breeding herds grazing along riverbanks',
    birdActivity: 'High - Summer breeding plumage, nesting raptors',
    idealFor: 'Big cat sightings, swimming in safe river shallows, night sky astronomy'
  },
  {
    month: 'Jul - Oct',
    season: 'Lush Green Monsoon Rejuvenation',
    tempRange: '22°C - 30°C',
    tigerActivity: 'Moderate - Buffer zones & Sitabani trails accessible',
    elephantActivity: 'High - Roaming freely across lush hill ranges',
    birdActivity: 'High - Rain frogs, hornbills, lush jungle soundscapes',
    idealFor: 'Rejuvenating nature walks, rushing river rapids, quiet retreat'
  }
];

export const GUEST_REVIEWS = [
  {
    id: 'rev-1',
    name: 'Aditya & Sunita Rao',
    city: 'New Delhi',
    stayDate: 'Stayed February 2026',
    tentType: 'Riverfront Luxury Safari Tent',
    rating: 5,
    text: 'Sleeping with the sound of the Khichri River just outside our tent canvas was pure therapy. In the morning, our naturalist Devendra spotted fresh tiger pugmarks on the sand just 200m downstream! The bonfire and Kumaoni dinner were unforgettable.',
    highlight: 'Sound of the river at night & expert naturalist'
  },
  {
    id: 'rev-2',
    name: 'Marcus & Elena Vance',
    city: 'London, UK',
    stayDate: 'Stayed January 2026',
    tentType: 'Forest Glamping Dome',
    rating: 5,
    text: 'We spent two weeks traveling northern India and this campsite was the absolute crown jewel. The safari permits for Bijrani were arranged seamlessly, and we had an incredible 40-minute sighting of a tigress with two cubs. Zero plastic, pristine care.',
    highlight: 'Flawless Bijrani permit arrangement & 40-min tiger encounter'
  },
  {
    id: 'rev-3',
    name: 'Dr. Sameer Kapoor',
    city: 'Chandigarh',
    stayDate: 'Stayed March 2026',
    tentType: 'Heritage Kumaoni Sal Cottage',
    rating: 5,
    text: 'Traveled with our parents and children. The cottage had a working stone fireplace and plenty of space. The campsite staff treated us like family, and the food made from local organic grains was wholesome and delicious.',
    highlight: 'Family warmth, stone fireplace, and organic Pahadi food'
  }
];

export const FAQS = [
  {
    question: 'How do Jim Corbett Safari permits work and will the camp arrange them?',
    answer: 'Jim Corbett National Park has strict daily vehicle permit quotas managed by the Uttarakhand Forest Department. We assist our confirmed guests with end-to-end permit bookings for Bijrani, Jhirna, Dhela, and Sitabani zones. Since permits open 45 days in advance (and core zones sell out quickly), we strongly recommend booking your campsite stay and safari simultaneously.'
  },
  {
    question: 'Is the campsite safe from wild animals?',
    answer: 'Yes, completely. Our campsite has continuous solar perimeter fencing, well-lit pathways, and round-the-clock trained local wildlife night watchmen and naturalists. While we are right in nature on the Khichri riverbank, animals naturally avoid camp lights and human activity.'
  },
  {
    question: 'What is included in the night tariff?',
    answer: 'All our tariffs are all-inclusive of three freshly cooked farm-to-table meals (Breakfast, Pahadi/North Indian Lunch, and Evening Campfire Dinner with barbecue appetizers), morning and evening herbal tea/coffee, campfire gatherings, and guided dawn riverbank nature walks.'
  },
  {
    question: 'How do we reach the campsite from Delhi or Pantnagar?',
    answer: 'By Road: A pleasant 5.5-hour drive (260 km) from New Delhi via Hapur bypass, Moradabad, and Ramnagar. By Train: Daily express trains from Old Delhi to Ramnagar (Ranikhet Express, Corbett City Park Express). We provide pickup and drop service from Ramnagar (30 mins drive) and Kathgodam railway stations.'
  },
  {
    question: 'What are the rules regarding music and alcohol?',
    answer: 'To preserve the delicate tranquility of the jungle and respect wildlife, loud amplified music, DJ speakers, and car honking are strictly prohibited at all times. Guests are welcome to enjoy personal acoustic instruments and quiet conversations by the campfire.'
  }
];
