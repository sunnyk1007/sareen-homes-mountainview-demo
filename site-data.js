window.siteData = {
  brand: {
    name: "Sareen Homes",
    community: "Mountain View",
    full: "Sareen Homes at Mountain View",
    location: "Centreville, Virginia"
  },

  hero: {
    eyebrow: "Sareen Homes presents a new luxury townhome address",
    titleMinor: "Sareen Homes at",
    titleMajor: "Mountain View",
    lead: "A polished demo site for a boutique collection of 41 luxury four-story townhomes with rooftop deck living, elevated finishes, and a more premium Northern Virginia presentation.",
    primaryCta: "Join the Waitlist",
    secondaryCta: "Explore Model Concepts"
  },

  stats: [
    { value: "$990k+", label: "Starting from" },
    { value: "41 homes", label: "Boutique community size" },
    { value: "4 stories", label: "With rooftop deck lifestyle" },
    { value: "Spring 2027", label: "Planned delivery window" }
  ],

  overview: {
    title: "A complete demo site that still feels focused.",
    body: "The goal of this demo is to win the job: strong visuals first, then the most useful information. It is intentionally designed so you can swap in the final renderings, plans, photography, pricing, disclosures, and neighborhood copy later without redesigning the whole experience.",
    features: [
      {
        title: "Luxury brick townhome positioning",
        text: "The visual language is built around classic brick architecture and premium Northern Virginia styling."
      },
      {
        title: "Four-story living",
        text: "The layout story highlights vertical separation between entry, entertaining, bedroom, and rooftop levels."
      },
      {
        title: "Image-led presentation",
        text: "The page uses large visuals, cleaner spacing, and fewer blocks so it feels more premium and less busy."
      },
      {
        title: "Builder-ready structure",
        text: "You can later fill in the exact community information, lot release details, model names, and contact workflow."
      }
    ],
    miniStats: [
      { value: "20 min", label: "to Dulles Airport" },
      { value: "35 min", label: "to Washington, DC" },
      { value: "Now touring", label: "Hard hat visits available" }
    ]
  },

  images: {
    hero: "assets/hero-townhomes.svg",
    overview: "assets/overview-townhomes.svg",
    interior: "https://images.unsplash.com/photo-1722349671455-2117b39b1921?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=80&w=1800",
    rooftop: "https://images.unsplash.com/photo-1758193431353-87812fbff5cd?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=80&w=1800",
    detail: "https://images.unsplash.com/photo-1758548157466-7c454382035a?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=80&w=1600"
  },

  models: [
    {
      id: "overlook",
      name: "The Overlook",
      tag: "Signature concept",
      image: "assets/overview-townhomes.svg",
      imageNote: "Illustrative exterior rendering slot • replace with your real exterior or streetscape rendering later.",
      description: "A balanced four-story concept with a flexible entry floor, open main living level, and rooftop deck designed for relaxed entertaining.",
      stats: [
        { value: "3–4", label: "Bedrooms" },
        { value: "3.5", label: "Baths" },
        { value: "2-Car", label: "Garage" },
        { value: "2,650+", label: "Approx. sq. ft." }
      ],
      badges: ["Rooftop deck", "Guest suite / office", "Large island kitchen"],
      plans: [
        {
          title: "Entry level",
          blurb: "Arrival floor with garage access and a private front flex room.",
          svg: "entry"
        },
        {
          title: "Main living level",
          blurb: "Open entertaining floor centered around kitchen, dining, and great room flow.",
          svg: "main"
        },
        {
          title: "Bedroom + rooftop",
          blurb: "Upper-level retreat paired with a rooftop deck that extends the entertaining story.",
          svg: "roof"
        }
      ]
    },
    {
      id: "vista",
      name: "The Vista",
      tag: "Expanded entertaining concept",
      image: "https://images.unsplash.com/photo-1722349671455-2117b39b1921?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=80&w=1800",
      imageNote: "Illustrative interior image • placeholder for a future model kitchen or main living rendering.",
      description: "A broader-plan concept with a showpiece kitchen, stronger entertaining sequence, and more flexibility for guests and everyday life.",
      stats: [
        { value: "4", label: "Bedrooms" },
        { value: "4.5", label: "Baths" },
        { value: "2-Car", label: "Garage" },
        { value: "2,950+", label: "Approx. sq. ft." }
      ],
      badges: ["Chef's kitchen", "Guest suite", "Covered deck concept"],
      plans: [
        {
          title: "Entry level",
          blurb: "Oversized garage with a separate front suite or private office.",
          svg: "entry_vista"
        },
        {
          title: "Main living level",
          blurb: "More formal entertaining proportions with a stronger kitchen moment.",
          svg: "main_vista"
        },
        {
          title: "Bedroom + rooftop",
          blurb: "Upper levels prioritize the primary retreat, secondary rooms, and rooftop experience.",
          svg: "roof_vista"
        }
      ]
    },
    {
      id: "summit",
      name: "The Summit",
      tag: "Most elevated concept",
      image: "https://images.unsplash.com/photo-1758193431353-87812fbff5cd?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=80&w=1800",
      imageNote: "Illustrative rooftop image • placeholder for the most premium model concept.",
      description: "The premium concept in the collection, imagined for buyers who want the strongest rooftop story and the most dramatic entertaining sequence.",
      stats: [
        { value: "4", label: "Bedrooms" },
        { value: "4.5", label: "Baths" },
        { value: "2-Car", label: "Garage" },
        { value: "3,150+", label: "Approx. sq. ft." }
      ],
      badges: ["Sky lounge", "Signature rooftop", "Wet bar option"],
      plans: [
        {
          title: "Entry level",
          blurb: "Entry floor with private office or suite potential and a more premium foyer moment.",
          svg: "entry_summit"
        },
        {
          title: "Main living level",
          blurb: "Premium main level concept with a larger kitchen and stronger hosting potential.",
          svg: "main_summit"
        },
        {
          title: "Bedroom + rooftop",
          blurb: "The top end of the range, built around a stronger rooftop and upper-level entertaining story.",
          svg: "roof_summit"
        }
      ]
    }
  ],

  homesite: {
    title: "A simple homesite plan paired with the location points buyers care about first.",
    body: "This keeps the information useful without creating another busy section. Buyers can understand the homesite layout and immediately see the core location advantages.",
    highlights: [
      { value: "20 min", label: "to Dulles Airport" },
      { value: "35 min", label: "to Washington, DC" },
      { value: "Schools", label: "Space to add assigned public schools later." },
      { value: "Parks & retail", label: "Space to add trails, shopping, dining, and convenience later." }
    ]
  },

  contact: {
    title: "Capture interest now. Fill in the final details later.",
    body: "This section is designed to do one thing well: make it easy for buyers to express interest while still keeping the overall site clean, premium, and easy to digest.",
    features: [
      {
        title: "Waitlist capture",
        text: "Collect early demand before the full community release is finalized."
      },
      {
        title: "Tour conversion",
        text: "Book hard hat visits and move leads into more serious conversations."
      },
      {
        title: "CRM ready",
        text: "Connect later to a lead pipeline with statuses, notes, and outcomes."
      },
      {
        title: "Flexible content",
        text: "Swap copy, disclosures, and contact info once your final materials are ready."
      }
    ],
    formTitle: "Request pricing, updates, or a tour.",
    formBody: "Share your information and a member of the Sareen Homes team can follow up with details, availability updates, and next steps."
  }
};
