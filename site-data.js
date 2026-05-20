window.siteData = {
  brand: {
    name: "Sareen Homes",
    community: "Mountain View",
    full: "Sareen Homes at Mountain View",
    location: "Centreville, Virginia"
  },

  media: {
    heroVideo: "https://videos.pexels.com/video-files/31826204/13558981_3840_2160_30fps.mp4",
    heroPoster: "assets/hero-townhomes.svg",
    overviewImage: "assets/overview-townhomes.svg",
    vistaImage: "https://images.unsplash.com/photo-1722349671455-2117b39b1921?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=80&w=1800",
    summitImage: "https://images.unsplash.com/photo-1758193431353-87812fbff5cd?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=80&w=1800"
  },

  hero: {
    eyebrow: "Sareen Homes presents a new luxury townhome address",
    minorTitle: "Sareen Homes at",
    majorTitle: "Mountain View",
    lead: "A modern demo site for a boutique collection of 41 luxury four-story townhomes with rooftop deck living, elevated finishes, and a more premium Northern Virginia presentation.",
    ctaPrimary: "Join the Waitlist",
    ctaSecondary: "Explore Model Concepts"
  },

  stats: [
    { value: "$990k+", label: "Starting from" },
    { value: "41 homes", label: "Boutique community size" },
    { value: "4 stories", label: "With rooftop deck lifestyle" },
    { value: "Spring 2027", label: "Planned delivery window" }
  ],

  overview: {
    title: "A stronger demo site with motion, interactivity, and a cleaner flow.",
    body: "This version is designed to feel much closer to a real launch site: a cinematic hero, mobile-friendly navigation, animated reveal effects, interactive model tabs, hoverable homesites, and a focused page structure that still leaves room to swap in final information later.",
    features: [
      {
        title: "Image-led presentation",
        text: "The page leads with motion and architecture so it feels aspirational before buyers read a word."
      },
      {
        title: "Luxury brick townhome positioning",
        text: "The design language is built around classic brick architecture and premium Northern Virginia styling."
      },
      {
        title: "Interactive model section",
        text: "Tabbed model concepts make the demo feel more like a real community launch rather than a static landing page."
      },
      {
        title: "Builder-ready structure",
        text: "You can later swap the exact community information, release details, pricing, plans, and contact info from one data file."
      }
    ],
    miniStats: [
      { value: "20 min", label: "to Dulles Airport" },
      { value: "35 min", label: "to Washington, DC" },
      { value: "Now touring", label: "Hard hat visits available" }
    ]
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
        { title: "Entry level", blurb: "Arrival floor with garage access and a private front flex room.", svg: "entry" },
        { title: "Main living level", blurb: "Open entertaining floor centered around kitchen, dining, and great room flow.", svg: "main" },
        { title: "Bedroom + rooftop", blurb: "Upper-level retreat paired with a rooftop deck that extends the entertaining story.", svg: "roof" }
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
        { title: "Entry level", blurb: "Oversized garage with a separate front suite or private office.", svg: "entry_vista" },
        { title: "Main living level", blurb: "More formal entertaining proportions with a stronger kitchen moment.", svg: "main_vista" },
        { title: "Bedroom + rooftop", blurb: "Upper levels prioritize the primary retreat, secondary rooms, and rooftop experience.", svg: "roof_vista" }
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
        { title: "Entry level", blurb: "Entry floor with private office or suite potential and a more premium foyer moment.", svg: "entry_summit" },
        { title: "Main living level", blurb: "Premium main level concept with a larger kitchen and stronger hosting potential.", svg: "main_summit" },
        { title: "Bedroom + rooftop", blurb: "The top end of the range, built around a stronger rooftop and upper-level entertaining story.", svg: "roof_summit" }
      ]
    }
  ],

  homesite: {
    title: "A homesite plan buyers can actually interact with.",
    body: "Hover or tap a homesite to make the page feel more like a working community site. Later, you can replace the placeholder lot notes with actual availability, premium pricing, release phases, and model assignments.",
    highlights: [
      { value: "20 min", label: "to Dulles Airport" },
      { value: "35 min", label: "to Washington, DC" },
      { value: "Schools", label: "Space to add assigned public schools later." },
      { value: "Parks & retail", label: "Space to add trails, shopping, dining, and convenience later." }
    ]
  },

  sales: {
    repName: "Your Name Here",
    phone: "(555) 555-5555",
    email: "sales@example.com",
    office: "Sales gallery address goes here",
    hours: "Mon–Sun by appointment"
  },


  integrations: {
    appsScriptUrl: "PASTE_YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE",
    sheetName: "Leads",
    sendEmailNotification: true,
    notificationEmail: "sales@example.com"
  },

  contact: {
    title: "Bring buyers into the Sareen Homes story now.",
    body: "This section is designed to do one thing well: make it easy for buyers to express interest while still keeping the overall site clean, premium, and easy to digest.",
    features: [
      { title: "Waitlist capture", text: "Collect early demand before the full community release is finalized." },
      { title: "Tour conversion", text: "Book hard hat visits and move leads into more serious conversations." },
      { title: "CRM ready", text: "Connect later to a lead pipeline with statuses, notes, and outcomes." },
      { title: "Flexible content", text: "Swap copy, disclosures, and contact info once your final materials are ready." }
    ],
    formTitle: "Request pricing, updates, or a tour.",
    formBody: "Share your information and a member of the Sareen Homes team can follow up with details, availability updates, and next steps."
  }
};
