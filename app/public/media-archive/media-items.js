// EPSS media archive manifest — one entry per publishable derivative.
// Field names match source-review/claude-transfer/.../CLAUDE-MEDIA-PAGE-BRIEF.md so the
// editorial CSVs round-trip. `published` is the publish gate: an item renders on the
// public page only when it has an approved derivative AND an acceptable credit status.
// Unknown values stay empty strings — never guessed.

export const CATEGORIES = [
  { id: "field", label: "Field" },
  { id: "research", label: "Research" },
  { id: "people", label: "People & Community" },
  { id: "art", label: "Art" },
  { id: "nature", label: "Campus & Nature" },
  { id: "travel", label: "Conferences & Travel" },
  { id: "video", label: "Video" }
];

export const MEDIA_ITEMS = [
  // ---------- FIELD · EPSS 133 Historical and Regional Geology ----------
  {
    id: "vof-fleet", title: "The EPSS fleet at Valley of Fire",
    src: "/assets/images/2026/field-spring-2026/valley-of-fire-fleet.jpg",
    thumbnailSrc: "/assets/images/2026/field-spring-2026/valley-of-fire-fleet.jpg",
    alt: "EPSS field vehicles parked at Valley of Fire just after sunset.",
    caption: "EPSS fleet arriving at Valley of Fire just after sunset for Historical and Regional Geology, EPS 133, led by Kevin Coffey.",
    mediaType: "photograph", category: "field", collection: "EPSS 133 Historical and Regional Geology",
    season: "", date: "", location: "Valley of Fire, Nevada", course: "EPSS 133 Historical and Regional Geology",
    relatedStory: "Article - John He.dc.html", photographer: "Juan C. Alvarado Jr.", suppliedBy: "",
    sourceId: "field-drive-archive", permissionStatus: "approved", creditStatus: "confirmed",
    seasonStatus: "conflict: source map says Winter 2026, article says Spring 2026",
    featuredOnHomepage: true, sortOrder: 1, published: true
  },
  {
    id: "vof-class", title: "The whole class at Valley of Fire",
    src: "/assets/images/2026/field-spring-2026/valley-of-fire-class.jpg",
    thumbnailSrc: "/assets/images/2026/field-spring-2026/valley-of-fire-class.jpg",
    alt: "EPSS students gathered around a Valley of Fire State Park sign.",
    caption: "The whole class at Valley of Fire, photographed by a kind stranger.",
    mediaType: "photograph", category: "people", collection: "EPSS 133 Historical and Regional Geology",
    season: "", date: "", location: "Valley of Fire, Nevada", course: "EPSS 133 Historical and Regional Geology",
    relatedStory: "Article - John He.dc.html", photographer: "a kind stranger", suppliedBy: "Juan C. Alvarado Jr.",
    sourceId: "field-drive-archive", permissionStatus: "approved", creditStatus: "confirmed",
    seasonStatus: "conflict: source map says Winter 2026, article says Spring 2026",
    featuredOnHomepage: false, sortOrder: 2, published: true
  },
  {
    id: "zion-dawn", title: "An early start at Zion",
    src: "/assets/images/2026/field-spring-2026/zion-dawn.jpg",
    thumbnailSrc: "/assets/images/2026/field-spring-2026/zion-dawn.jpg",
    alt: "Students gathering at dawn near a lit field station with mountains behind them.",
    caption: "An early start at Zion National Park at dawn.",
    mediaType: "photograph", category: "field", collection: "EPSS 133 Historical and Regional Geology",
    season: "", date: "", location: "Zion National Park, Utah", course: "EPSS 133 Historical and Regional Geology",
    relatedStory: "Article - John He.dc.html", photographer: "Juan C. Alvarado Jr.", suppliedBy: "",
    sourceId: "field-drive-archive", permissionStatus: "approved", creditStatus: "confirmed",
    seasonStatus: "conflict: source map says Winter 2026, article says Spring 2026",
    featuredOnHomepage: true, sortOrder: 3, published: true
  },

  // ---------- FIELD · EPSS 112 Structural Geology ----------
  {
    id: "painted-structural", title: "Looking across the Painted Canyon outcrops",
    src: "/assets/images/2026/field-spring-2026/painted-canyon-structural.jpg",
    thumbnailSrc: "/assets/images/2026/field-spring-2026/painted-canyon-structural.jpg",
    alt: "Students looking across Painted Canyon outcrops during Structural Geology.",
    caption: "Structural Geology, EPS 112, led by John He at Painted Canyon.",
    mediaType: "photograph", category: "field", collection: "EPSS 112 Structural Geology",
    season: "", date: "", location: "Painted Canyon, Mecca Hills, California", course: "EPSS 112 Structural Geology",
    relatedStory: "Article - John He.dc.html", photographer: "Juan C. Alvarado Jr.", suppliedBy: "",
    sourceId: "field-drive-archive", permissionStatus: "approved", creditStatus: "confirmed",
    seasonStatus: "conflict: source map says Winter 2026, article says Spring 2026",
    featuredOnHomepage: false, sortOrder: 4, published: true
  },
  {
    id: "painted-whiteboard", title: "The vehicle becomes a whiteboard",
    src: "/assets/images/2026/field-spring-2026/painted-canyon-whiteboard.jpg",
    thumbnailSrc: "/assets/images/2026/field-spring-2026/painted-canyon-whiteboard.jpg",
    alt: "A field vehicle used as a whiteboard while students work near Painted Canyon outcrops.",
    caption: "At Painted Canyon, outcrops replace PowerPoint presentations and the vehicle becomes a portable whiteboard.",
    mediaType: "photograph", category: "field", collection: "EPSS 112 Structural Geology",
    season: "", date: "", location: "Painted Canyon, Mecca Hills, California", course: "EPSS 112 Structural Geology",
    relatedStory: "Article - John He.dc.html", photographer: "Juan C. Alvarado Jr.", suppliedBy: "",
    sourceId: "field-drive-archive", permissionStatus: "approved", creditStatus: "confirmed",
    seasonStatus: "conflict: source map says Winter 2026, article says Spring 2026",
    featuredOnHomepage: false, sortOrder: 5, published: true
  },

  // ---------- FIELD · Igneous Petrology ----------
  {
    id: "bishop-tuff", title: "In front of the Bishop Tuff",
    src: "/assets/images/2026/field-spring-2026/bishop-tuff-igneous-petrology.jpg",
    thumbnailSrc: "/assets/images/2026/field-spring-2026/bishop-tuff-igneous-petrology.jpg",
    alt: "Igneous Petrology students standing in front of light-coloured Bishop Tuff outcrops.",
    caption: "Igneous Petrology, led by Peng Ni, in front of the Bishop Tuff.",
    mediaType: "photograph", category: "field", collection: "Igneous Petrology",
    season: "", date: "", location: "Bishop Tuff, Volcanic Tableland, California", course: "Igneous Petrology",
    relatedStory: "Article - John He.dc.html", photographer: "Juan C. Alvarado Jr.", suppliedBy: "",
    sourceId: "field-drive-archive", permissionStatus: "approved", creditStatus: "confirmed",
    seasonStatus: "not in source map; trip undocumented in field-trip-source-map.csv",
    featuredOnHomepage: false, sortOrder: 6, published: true
  },
  {
    id: "wmrs-class", title: "Igneous Petrology at the research station",
    src: "/assets/images/2026/field-spring-2026/white-mountain-research-station-class.jpg",
    thumbnailSrc: "/assets/images/2026/field-spring-2026/white-mountain-research-station-class.jpg",
    alt: "Igneous Petrology students standing near a basketball hoop with mountains behind them.",
    caption: "Igneous Petrology class at the White Mountain Research Station.",
    mediaType: "photograph", category: "people", collection: "Igneous Petrology",
    season: "", date: "", location: "White Mountain Research Station, Bishop, California", course: "Igneous Petrology",
    relatedStory: "Article - John He.dc.html", photographer: "Juan C. Alvarado Jr.", suppliedBy: "",
    sourceId: "field-drive-archive", permissionStatus: "approved", creditStatus: "confirmed",
    seasonStatus: "not in source map",
    featuredOnHomepage: false, sortOrder: 7, published: true
  },
  {
    id: "ucla-light", title: "UCLA in light after dark",
    src: "/assets/images/2026/field-spring-2026/ucla-light-painting.jpg",
    thumbnailSrc: "/assets/images/2026/field-spring-2026/ucla-light-painting.jpg",
    alt: "Students spelling UCLA with colourful light painting at night.",
    caption: "UCLA light painting by students of Igneous Petrology at the White Mountain Research Station.",
    mediaType: "photograph", category: "people", collection: "Igneous Petrology",
    season: "", date: "", location: "White Mountain Research Station, Bishop, California", course: "Igneous Petrology",
    relatedStory: "Article - John He.dc.html", photographer: "Juan C. Alvarado Jr.", suppliedBy: "",
    sourceId: "field-drive-archive", permissionStatus: "approved", creditStatus: "confirmed",
    seasonStatus: "not in source map",
    featuredOnHomepage: true, sortOrder: 8, published: true
  },

  // ---------- FIELD · unattributed trip, captions approved ----------
  {
    id: "field-outcrop", title: "A field class at an outcrop",
    src: "/assets/images/2026/field-spring-2026/field-class-outcrop.jpg",
    thumbnailSrc: "/assets/images/2026/field-spring-2026/field-class-outcrop.jpg",
    alt: "Students gathered around an outcrop during field instruction.",
    caption: "A Spring 2026 field class working at an outcrop.",
    mediaType: "photograph", category: "field", collection: "Field trips 2025–2026",
    season: "Spring 2026", date: "", location: "", course: "",
    relatedStory: "Article - John He.dc.html", photographer: "Juan C. Alvarado Jr.", suppliedBy: "",
    sourceId: "field-drive-archive", permissionStatus: "approved", creditStatus: "confirmed",
    seasonStatus: "", featuredOnHomepage: false, sortOrder: 9, published: true
  },
  {
    id: "field-notebooks", title: "Field notes, maps, and lunch",
    src: "/assets/images/2026/field-spring-2026/field-notebook-lunch.jpg",
    thumbnailSrc: "/assets/images/2026/field-spring-2026/field-notebook-lunch.jpg",
    alt: "Students sitting in the field with maps, notebooks, and food on a tarp.",
    caption: "Field notes, maps, and lunch in the landscape.",
    mediaType: "photograph", category: "field", collection: "Field trips 2025–2026",
    season: "Spring 2026", date: "", location: "", course: "",
    relatedStory: "Article - John He.dc.html", photographer: "Juan C. Alvarado Jr.", suppliedBy: "",
    sourceId: "field-drive-archive", permissionStatus: "approved", creditStatus: "confirmed",
    seasonStatus: "", featuredOnHomepage: false, sortOrder: 10, published: true
  },
  {
    id: "field-sketching", title: "Recording observations",
    src: "/assets/images/2026/field-spring-2026/field-sketching.jpg",
    thumbnailSrc: "/assets/images/2026/field-spring-2026/field-sketching.jpg",
    alt: "Students sketching and writing in field notebooks on the ground.",
    caption: "Students recording observations in field notebooks.",
    mediaType: "photograph", category: "field", collection: "Field trips 2025–2026",
    season: "Spring 2026", date: "", location: "", course: "",
    relatedStory: "Article - John He.dc.html", photographer: "Juan C. Alvarado Jr.", suppliedBy: "",
    sourceId: "field-drive-archive", permissionStatus: "approved", creditStatus: "confirmed",
    seasonStatus: "", featuredOnHomepage: false, sortOrder: 11, published: true
  },
  {
    id: "desert-ridge", title: "Working across a desert outcrop",
    src: "/assets/images/2026/field-spring-2026/desert-ridge-class.jpg",
    thumbnailSrc: "/assets/images/2026/field-spring-2026/desert-ridge-class.jpg",
    alt: "Students gathered along a desert ridge beneath a blue sky.",
    caption: "Students working across a desert outcrop during a Spring 2026 field course.",
    mediaType: "photograph", category: "field", collection: "Field trips 2025–2026",
    season: "Spring 2026", date: "", location: "", course: "",
    relatedStory: "Article - John He.dc.html", photographer: "Juan C. Alvarado Jr.", suppliedBy: "",
    sourceId: "field-drive-archive", permissionStatus: "approved", creditStatus: "confirmed",
    seasonStatus: "", featuredOnHomepage: false, sortOrder: 12, published: true
  },

  // ---------- RESEARCH · RIMFAX ----------
  {
    id: "perseverance", title: "Perseverance and Ingenuity",
    src: "/assets/images/2026/rimfax/perseverance-ingenuity.jpg",
    thumbnailSrc: "/assets/images/2026/rimfax/perseverance-ingenuity.jpg",
    alt: "Artist's concept of the Perseverance rover and Ingenuity helicopter on the Martian surface.",
    caption: "Portrait of Perseverance and Ingenuity on the floor of Jezero Crater. Artist's concept.",
    mediaType: "figure", category: "research", collection: "RIMFAX and Perseverance",
    season: "", date: "", location: "Jezero Crater, Mars", course: "",
    relatedStory: "", photographer: "NASA/JPL-Caltech", suppliedBy: "",
    sourceId: "rimfax", permissionStatus: "approved", creditStatus: "confirmed",
    seasonStatus: "", featuredOnHomepage: true, sortOrder: 20, published: true
  },
  {
    id: "rimfax-location", title: "Where RIMFAX rides",
    src: "/assets/images/2026/rimfax/rimfax-location.jpg",
    thumbnailSrc: "/assets/images/2026/rimfax/rimfax-location.jpg",
    alt: "Illustration showing the location of the RIMFAX instrument on the Perseverance rover.",
    caption: "The RIMFAX ground-penetrating radar's location on NASA's Perseverance rover.",
    mediaType: "figure", category: "research", collection: "RIMFAX and Perseverance",
    season: "", date: "", location: "Jezero Crater, Mars", course: "",
    relatedStory: "", photographer: "NASA/JPL-Caltech", suppliedBy: "",
    sourceId: "rimfax", permissionStatus: "approved", creditStatus: "confirmed",
    seasonStatus: "", featuredOnHomepage: false, sortOrder: 21, published: true
  },

  // ---------- PEOPLE & COMMUNITY ----------
  {
    id: "commencement", title: "The class of 2026",
    src: "/assets/images/2026/commencement/class-2026-geology-building.jpg",
    thumbnailSrc: "/assets/images/2026/commencement/class-2026-geology-building.jpg",
    alt: "The class of 2026 throwing caps on the steps of the Geology Building.",
    caption: "The class of 2026 on the steps of the Geology Building.",
    mediaType: "photograph", category: "people", collection: "EPSS Commencement 2026",
    season: "Spring 2026", date: "", location: "UCLA Geology Building", course: "",
    relatedStory: "", photographer: "Valeria Jaramillo Hernandez and Zachary Lacson", suppliedBy: "",
    sourceId: "commencement", permissionStatus: "approved", creditStatus: "confirmed",
    seasonStatus: "", featuredOnHomepage: true, sortOrder: 30, published: true
  },
  {
    id: "chairs-installation", title: "The endowed chairs installation",
    src: "/assets/images/2026/giving/chairs-installation-2026.jpg",
    thumbnailSrc: "/assets/images/2026/giving/chairs-installation-2026.jpg",
    alt: "Nine people standing together on stage at the endowed chairs installation ceremony.",
    caption: "The Knopoff family with Professor Lars Stixrude, EPSS Chair Jonathan Aurnou and Dean Miguel García-Garibay.",
    mediaType: "photograph", category: "people", collection: "Endowed chairs installation",
    season: "", date: "", location: "UCLA", course: "",
    relatedStory: "", photographer: "Penny Jennings, UCLA Division of Physical Sciences", suppliedBy: "",
    sourceId: "giving", permissionStatus: "approved", creditStatus: "confirmed",
    seasonStatus: "", featuredOnHomepage: true, sortOrder: 31, published: true
  },

  // ---------- ART ----------
  {
    id: "jewitt-forest", title: "Forest", artist: "David Jewitt",
    src: "/assets/images/2026/art-science/jewitt-forest.jpg",
    thumbnailSrc: "/assets/images/2026/art-science/jewitt-forest.jpg",
    alt: "Abstract painting of a forest made from dripped acrylic.",
    caption: "Forest. Acrylic dripped from a stick, 16 × 20 inches.",
    mediaType: "artwork", category: "art", collection: "David Jewitt",
    season: "", date: "", location: "", course: "",
    relatedStory: "", photographer: "David Jewitt", suppliedBy: "",
    sourceId: "art-science", permissionStatus: "approved", creditStatus: "artist confirmed; reproduction wording pending",
    seasonStatus: "", featuredOnHomepage: true, sortOrder: 40, published: true
  },
  {
    id: "jewitt-swarm-seeds", title: "Swarm (seeds)", artist: "David Jewitt",
    src: "/assets/images/2026/art-science/jewitt-swarm-seeds.jpg",
    thumbnailSrc: "/assets/images/2026/art-science/jewitt-swarm-seeds.jpg",
    alt: "Abstract painting in the Swarm series.",
    caption: "", mediaType: "artwork", category: "art", collection: "David Jewitt",
    season: "", date: "", location: "", course: "",
    relatedStory: "", photographer: "David Jewitt", suppliedBy: "",
    sourceId: "art-science", permissionStatus: "approved", creditStatus: "artist confirmed; reproduction wording pending",
    seasonStatus: "", featuredOnHomepage: false, sortOrder: 41, published: true
  },
  {
    id: "jewitt-swarm-pistachios", title: "Swarm (pistachios)", artist: "David Jewitt",
    src: "/assets/images/2026/art-science/jewitt-swarm-pistachios.jpg",
    thumbnailSrc: "/assets/images/2026/art-science/jewitt-swarm-pistachios.jpg",
    alt: "Abstract painting in the Swarm series.",
    caption: "", mediaType: "artwork", category: "art", collection: "David Jewitt",
    season: "", date: "", location: "", course: "",
    relatedStory: "", photographer: "David Jewitt", suppliedBy: "",
    sourceId: "art-science", permissionStatus: "approved", creditStatus: "artist confirmed; reproduction wording pending",
    seasonStatus: "", featuredOnHomepage: false, sortOrder: 42, published: true
  },
  {
    id: "jewitt-mosaic", title: "Untitled (mosaic)", artist: "David Jewitt",
    src: "/assets/images/2026/art-science/jewitt-untitled-mosaic.jpg",
    thumbnailSrc: "/assets/images/2026/art-science/jewitt-untitled-mosaic.jpg",
    alt: "Untitled abstract mosaic painting.",
    caption: "", mediaType: "artwork", category: "art", collection: "David Jewitt",
    season: "", date: "", location: "", course: "",
    relatedStory: "", photographer: "David Jewitt", suppliedBy: "",
    sourceId: "art-science", permissionStatus: "approved", creditStatus: "artist confirmed; reproduction wording pending",
    seasonStatus: "", featuredOnHomepage: false, sortOrder: 43, published: true
  },
  {
    id: "jewitt-orange", title: "Untitled (orange)", artist: "David Jewitt",
    src: "/assets/images/2026/art-science/jewitt-untitled-orange.jpg",
    thumbnailSrc: "/assets/images/2026/art-science/jewitt-untitled-orange.jpg",
    alt: "Untitled abstract painting in oranges.",
    caption: "", mediaType: "artwork", category: "art", collection: "David Jewitt",
    season: "", date: "", location: "", course: "",
    relatedStory: "", photographer: "David Jewitt", suppliedBy: "",
    sourceId: "art-science", permissionStatus: "approved", creditStatus: "artist confirmed; reproduction wording pending",
    seasonStatus: "", featuredOnHomepage: false, sortOrder: 44, published: true
  },
  {
    id: "hilke-morni", title: "Morni", artist: "Hilke Schlichting",
    src: "/assets/images/2026/art-science/hilke-morni.jpg",
    thumbnailSrc: "/assets/images/2026/art-science/hilke-morni.jpg",
    alt: "Painting titled Morni, acrylics on canvas.",
    caption: "Morni. Acrylics on canvas, 2007, 30 × 30 inches.",
    mediaType: "artwork", category: "art", collection: "Hilke Schlichting",
    season: "", date: "2007", location: "", course: "",
    relatedStory: "", photographer: "Hilke Schlichting", suppliedBy: "",
    sourceId: "art-science", permissionStatus: "approved", creditStatus: "artist confirmed; reproduction wording pending",
    seasonStatus: "", featuredOnHomepage: false, sortOrder: 45, published: true
  },
  {
    id: "hilke-inle", title: "High Above Inle", artist: "Hilke Schlichting",
    src: "/assets/images/2026/art-science/hilke-high-above-inle.jpg",
    thumbnailSrc: "/assets/images/2026/art-science/hilke-high-above-inle.jpg",
    alt: "Painting titled High Above Inle.",
    caption: "", mediaType: "artwork", category: "art", collection: "Hilke Schlichting",
    season: "", date: "", location: "", course: "",
    relatedStory: "", photographer: "Hilke Schlichting", suppliedBy: "",
    sourceId: "art-science", permissionStatus: "approved", creditStatus: "artist confirmed; reproduction wording pending",
    seasonStatus: "", featuredOnHomepage: false, sortOrder: 46, published: true
  },
  {
    id: "hilke-indonesia", title: "Indonesia", artist: "Hilke Schlichting",
    src: "/assets/images/2026/art-science/hilke-indonesia.jpg",
    thumbnailSrc: "/assets/images/2026/art-science/hilke-indonesia.jpg",
    alt: "Painting titled Indonesia.",
    caption: "", mediaType: "artwork", category: "art", collection: "Hilke Schlichting",
    season: "", date: "", location: "", course: "",
    relatedStory: "", photographer: "Hilke Schlichting", suppliedBy: "",
    sourceId: "art-science", permissionStatus: "approved", creditStatus: "artist confirmed; reproduction wording pending",
    seasonStatus: "", featuredOnHomepage: false, sortOrder: 47, published: true
  },

  // ---------- PHOTO CONTEST 2026 · David James (permission granted in submission email) ----------
  { id: "dj-blood-moon", title: "August 2026 Blood Moon", src: "/assets/images/2026/photo-contest/blood-moon.jpg", thumbnailSrc: "/assets/images/2026/photo-contest/blood-moon.jpg", alt: "The blood moon of August 2026 over Santa Clarita.", caption: "The blood moon of August 2026 over Santa Clarita.", mediaType: "photograph", category: "nature", collection: "EPSS Photo Contest 2026", season: "", date: "August 2026", location: "Santa Clarita, California", course: "Personal astronomy", relatedStory: "", photographer: "David James", suppliedBy: "David James", sourceId: "photo-contest/IMG_3435.jpg", permissionStatus: "approved: non-commercial University communications; copyright retained by photographer", creditStatus: "confirmed", seasonStatus: "", featuredOnHomepage: false, sortOrder: 90, published: true },
  { id: "dj-new-hampshire-sunset", title: "Sunset in New Hampshire", src: "/assets/images/2026/photo-contest/new-hampshire-sunset.jpg", thumbnailSrc: "/assets/images/2026/photo-contest/new-hampshire-sunset.jpg", alt: "Sunset during the Gordon Research Conference on High Pressure.", caption: "Sunset during the Gordon Research Conference on High Pressure.", mediaType: "photograph", category: "travel", collection: "EPSS Photo Contest 2026", season: "", date: "", location: "New Hampshire", course: "Gordon Research Conference: High Pressure", relatedStory: "", photographer: "David James", suppliedBy: "David James", sourceId: "photo-contest/IMG_2902.jpg", permissionStatus: "approved: non-commercial University communications; copyright retained by photographer", creditStatus: "confirmed", seasonStatus: "", featuredOnHomepage: false, sortOrder: 91, published: true },
  { id: "dj-westwood-empty", title: "Westwood Boulevard, empty", src: "/assets/images/2026/photo-contest/westwood-empty.jpg", thumbnailSrc: "/assets/images/2026/photo-contest/westwood-empty.jpg", alt: "Westwood Boulevard closed to cars for CicLAvia.", caption: "Westwood Boulevard closed to cars for CicLAvia.", mediaType: "photograph", category: "people", collection: "EPSS Photo Contest 2026", season: "Spring 2026", date: "", location: "Westwood Boulevard, Los Angeles", course: "CicLAvia", relatedStory: "", photographer: "David James", suppliedBy: "David James", sourceId: "photo-contest/IMG_2393.jpg", permissionStatus: "approved: non-commercial University communications; copyright retained by photographer", creditStatus: "confirmed", seasonStatus: "", featuredOnHomepage: false, sortOrder: 92, published: true },
  { id: "dj-westwood-family", title: "Westwood Boulevard, family", src: "/assets/images/2026/photo-contest/westwood-family.jpg", thumbnailSrc: "/assets/images/2026/photo-contest/westwood-family.jpg", alt: "A family on Westwood Boulevard during CicLAvia.", caption: "A family on Westwood Boulevard during CicLAvia.", mediaType: "photograph", category: "people", collection: "EPSS Photo Contest 2026", season: "Spring 2026", date: "", location: "Westwood Boulevard, Los Angeles", course: "CicLAvia", relatedStory: "", photographer: "David James", suppliedBy: "David James", sourceId: "photo-contest/IMG_2394.jpg", permissionStatus: "pending: identifiable people, confirm consent", creditStatus: "confirmed", seasonStatus: "", featuredOnHomepage: false, sortOrder: 93, published: false, blocker: "identifiable family in frame; confirm consent before publishing" },
  { id: "dj-westwood-theater", title: "Westwood Boulevard theater", src: "/assets/images/2026/photo-contest/westwood-theater.jpg", thumbnailSrc: "/assets/images/2026/photo-contest/westwood-theater.jpg", alt: "The Westwood theater marquee during CicLAvia.", caption: "The Westwood theater marquee during CicLAvia.", mediaType: "photograph", category: "people", collection: "EPSS Photo Contest 2026", season: "Spring 2026", date: "", location: "Westwood Boulevard, Los Angeles", course: "CicLAvia", relatedStory: "", photographer: "David James", suppliedBy: "David James", sourceId: "photo-contest/IMG_2412.jpg", permissionStatus: "approved: non-commercial University communications; copyright retained by photographer", creditStatus: "confirmed", seasonStatus: "", featuredOnHomepage: false, sortOrder: 94, published: true },
  { id: "dj-westwood-jacaranda", title: "Westwood Boulevard jacaranda", src: "/assets/images/2026/photo-contest/westwood-jacaranda.jpg", thumbnailSrc: "/assets/images/2026/photo-contest/westwood-jacaranda.jpg", alt: "Jacaranda in bloom along Westwood Boulevard.", caption: "Jacaranda in bloom along Westwood Boulevard.", mediaType: "photograph", category: "nature", collection: "EPSS Photo Contest 2026", season: "Spring 2026", date: "", location: "Westwood Boulevard, Los Angeles", course: "CicLAvia", relatedStory: "", photographer: "David James", suppliedBy: "David James", sourceId: "photo-contest/IMG_2410.jpg", permissionStatus: "approved: non-commercial University communications; copyright retained by photographer", creditStatus: "confirmed", seasonStatus: "", featuredOnHomepage: false, sortOrder: 95, published: true },
  { id: "dj-cherry-blossom", title: "Cherry blossom", src: "/assets/images/2026/photo-contest/cherry-blossom.jpg", thumbnailSrc: "/assets/images/2026/photo-contest/cherry-blossom.jpg", alt: "Cherry blossom in the UCLA Botanical Garden.", caption: "Cherry blossom in the UCLA Botanical Garden.", mediaType: "photograph", category: "nature", collection: "EPSS Photo Contest 2026", season: "", date: "", location: "UCLA Botanical Garden", course: "Campus nature", relatedStory: "", photographer: "David James", suppliedBy: "David James", sourceId: "photo-contest/IMG_2339.jpg", permissionStatus: "approved: non-commercial University communications; copyright retained by photographer", creditStatus: "confirmed", seasonStatus: "", featuredOnHomepage: false, sortOrder: 96, published: true },
  { id: "dj-pond-lily", title: "Pond lily", src: "/assets/images/2026/photo-contest/pond-lily.jpg", thumbnailSrc: "/assets/images/2026/photo-contest/pond-lily.jpg", alt: "A pond lily in the UCLA Botanical Garden.", caption: "A pond lily in the UCLA Botanical Garden.", mediaType: "photograph", category: "nature", collection: "EPSS Photo Contest 2026", season: "", date: "", location: "UCLA Botanical Garden", course: "Campus nature", relatedStory: "", photographer: "David James", suppliedBy: "David James", sourceId: "photo-contest/IMG_1210.jpg", permissionStatus: "approved: non-commercial University communications; copyright retained by photographer", creditStatus: "confirmed", seasonStatus: "", featuredOnHomepage: false, sortOrder: 97, published: true },
  { id: "dj-devils-punchbowl", title: "Devil’s Punchbowl", src: "/assets/images/2026/photo-contest/devils-punchbowl.jpg", thumbnailSrc: "/assets/images/2026/photo-contest/devils-punchbowl.jpg", alt: "Tilted sandstone at Devil’s Punchbowl on a graduate student trip.", caption: "Tilted sandstone at Devil’s Punchbowl on a graduate student trip.", mediaType: "photograph", category: "field", collection: "EPSS Photo Contest 2026", season: "", date: "", location: "Devil’s Punchbowl, California", course: "Graduate student trip", relatedStory: "", photographer: "David James", suppliedBy: "David James", sourceId: "photo-contest/IMG_1271.jpg", permissionStatus: "approved: non-commercial University communications; copyright retained by photographer", creditStatus: "confirmed", seasonStatus: "", featuredOnHomepage: false, sortOrder: 98, published: true },
  { id: "dj-milky-way-landscape", title: "Milky Way over Frazier Park", src: "/assets/images/2026/photo-contest/milky-way-landscape.jpg", thumbnailSrc: "/assets/images/2026/photo-contest/milky-way-landscape.jpg", alt: "The Milky Way over Frazier Park.", caption: "The Milky Way over Frazier Park.", mediaType: "photograph", category: "nature", collection: "EPSS Photo Contest 2026", season: "", date: "", location: "Frazier Park, California", course: "Astronomy", relatedStory: "", photographer: "David James", suppliedBy: "David James", sourceId: "photo-contest/IMG_1165(1).jpg", permissionStatus: "approved: non-commercial University communications; copyright retained by photographer", creditStatus: "confirmed", seasonStatus: "", featuredOnHomepage: false, sortOrder: 99, published: true },
  { id: "dj-duster-mine", title: "Duster Mine", src: "/assets/images/2026/photo-contest/duster-mine.jpg", thumbnailSrc: "/assets/images/2026/photo-contest/duster-mine.jpg", alt: "Duster Mine on the Cluster 70C field trip.", caption: "Duster Mine on the Cluster 70C field trip.", mediaType: "photograph", category: "field", collection: "EPSS Photo Contest 2026", season: "", date: "", location: "Duster Mine", course: "Cluster 70C field trip", relatedStory: "", photographer: "David James", suppliedBy: "David James", sourceId: "photo-contest/IMG_9743.jpg", permissionStatus: "approved: non-commercial University communications; copyright retained by photographer", creditStatus: "confirmed", seasonStatus: "", featuredOnHomepage: false, sortOrder: 100, published: true },
  { id: "dj-milky-way-portrait", title: "Milky Way over Frazier Park, vertical", src: "/assets/images/2026/photo-contest/milky-way-portrait.jpg", thumbnailSrc: "/assets/images/2026/photo-contest/milky-way-portrait.jpg", alt: "The Milky Way over Frazier Park, vertical frame.", caption: "The Milky Way over Frazier Park, vertical frame.", mediaType: "photograph", category: "nature", collection: "EPSS Photo Contest 2026", season: "", date: "", location: "Frazier Park, California", course: "Astronomy", relatedStory: "", photographer: "David James", suppliedBy: "David James", sourceId: "photo-contest/IMG_1165.jpg", permissionStatus: "approved: non-commercial University communications; copyright retained by photographer", creditStatus: "confirmed", seasonStatus: "", featuredOnHomepage: false, sortOrder: 101, published: true },
  { id: "dj-california-poppy", title: "California poppy", src: "/assets/images/2026/photo-contest/california-poppy.jpg", thumbnailSrc: "/assets/images/2026/photo-contest/california-poppy.jpg", alt: "A California poppy in the UCLA Botanical Garden.", caption: "A California poppy in the UCLA Botanical Garden.", mediaType: "photograph", category: "nature", collection: "EPSS Photo Contest 2026", season: "", date: "", location: "UCLA Botanical Garden", course: "Campus nature", relatedStory: "", photographer: "David James", suppliedBy: "David James", sourceId: "photo-contest/IMG_6056.jpg", permissionStatus: "approved: non-commercial University communications; copyright retained by photographer", creditStatus: "confirmed", seasonStatus: "", featuredOnHomepage: false, sortOrder: 102, published: true },
  { id: "dj-poppy-with-bee", title: "California poppy with bee", src: "/assets/images/2026/photo-contest/poppy-with-bee.jpg", thumbnailSrc: "/assets/images/2026/photo-contest/poppy-with-bee.jpg", alt: "A bee working a California poppy in the UCLA Botanical Garden.", caption: "A bee working a California poppy in the UCLA Botanical Garden.", mediaType: "photograph", category: "nature", collection: "EPSS Photo Contest 2026", season: "", date: "", location: "UCLA Botanical Garden", course: "Campus nature", relatedStory: "", photographer: "David James", suppliedBy: "David James", sourceId: "photo-contest/IMG_6036.jpg", permissionStatus: "approved: non-commercial University communications; copyright retained by photographer", creditStatus: "confirmed", seasonStatus: "", featuredOnHomepage: false, sortOrder: 103, published: true },
  { id: "dj-california-pier", title: "Pier over the California ocean", src: "/assets/images/2026/photo-contest/california-pier.jpg", thumbnailSrc: "/assets/images/2026/photo-contest/california-pier.jpg", alt: "A pier over the Pacific on the California coast.", caption: "A pier over the Pacific on the California coast.", mediaType: "photograph", category: "nature", collection: "EPSS Photo Contest 2026", season: "", date: "", location: "California coast", course: "Landscape", relatedStory: "", photographer: "David James", suppliedBy: "David James", sourceId: "photo-contest/IMG_5958.jpg", permissionStatus: "approved: non-commercial University communications; copyright retained by photographer", creditStatus: "confirmed", seasonStatus: "", featuredOnHomepage: false, sortOrder: 104, published: true },
  { id: "dj-washington-monument", title: "Washington Monument", src: "/assets/images/2026/photo-contest/washington-monument.jpg", thumbnailSrc: "/assets/images/2026/photo-contest/washington-monument.jpg", alt: "The Washington Monument during AGU in Washington, DC.", caption: "The Washington Monument during AGU in Washington, DC.", mediaType: "photograph", category: "travel", collection: "EPSS Photo Contest 2026", season: "", date: "", location: "Washington, DC", course: "AGU Annual Meeting, Washington DC", relatedStory: "", photographer: "David James", suppliedBy: "David James", sourceId: "photo-contest/IMG_0838.jpg", permissionStatus: "approved: non-commercial University communications; copyright retained by photographer", creditStatus: "confirmed", seasonStatus: "", featuredOnHomepage: false, sortOrder: 105, published: true },
  { id: "dj-botanical-river", title: "Botanical Garden stream", src: "/assets/images/2026/photo-contest/botanical-river.jpg", thumbnailSrc: "/assets/images/2026/photo-contest/botanical-river.jpg", alt: "The stream through the UCLA Botanical Garden.", caption: "The stream through the UCLA Botanical Garden.", mediaType: "photograph", category: "nature", collection: "EPSS Photo Contest 2026", season: "", date: "", location: "UCLA Botanical Garden", course: "Campus nature", relatedStory: "", photographer: "David James", suppliedBy: "David James", sourceId: "photo-contest/IMG_6086.jpg", permissionStatus: "approved: non-commercial University communications; copyright retained by photographer", creditStatus: "confirmed", seasonStatus: "", featuredOnHomepage: false, sortOrder: 106, published: true },
  { id: "dj-joshua-tree-sunset", title: "Sunset at Joshua Tree", src: "/assets/images/2026/photo-contest/joshua-tree-sunset.jpg", thumbnailSrc: "/assets/images/2026/photo-contest/joshua-tree-sunset.jpg", alt: "Sunset near Joshua Tree on a trip with group mates.", caption: "Sunset near Joshua Tree on a trip with group mates.", mediaType: "photograph", category: "nature", collection: "EPSS Photo Contest 2026", season: "", date: "", location: "Joshua Tree area, California", course: "Trip with group mates", relatedStory: "", photographer: "David James", suppliedBy: "David James", sourceId: "photo-contest/IMG_3015.jpg", permissionStatus: "approved: non-commercial University communications; copyright retained by photographer", creditStatus: "confirmed", seasonStatus: "", featuredOnHomepage: false, sortOrder: 107, published: true },
  { id: "dj-golden-gate", title: "Golden Gate Bridge", src: "/assets/images/2026/photo-contest/golden-gate.jpg", thumbnailSrc: "/assets/images/2026/photo-contest/golden-gate.jpg", alt: "The Golden Gate Bridge during AGU in San Francisco.", caption: "The Golden Gate Bridge during AGU in San Francisco.", mediaType: "photograph", category: "travel", collection: "EPSS Photo Contest 2026", season: "", date: "", location: "San Francisco, California", course: "AGU Annual Meeting, San Francisco", relatedStory: "", photographer: "David James", suppliedBy: "David James", sourceId: "photo-contest/IMG_4511.jpg", permissionStatus: "approved: non-commercial University communications; copyright retained by photographer", creditStatus: "confirmed", seasonStatus: "", featuredOnHomepage: false, sortOrder: 108, published: true },

  // ---------- FIELD TRIPS · Drive download 24 Sept 2026 (credit pending; not in any article) ----------
  {id: "ft-rainbow-ridge", title: "Reading the ridge at Rainbow Basin", src: "/assets/images/2026/field-trips/rainbow-basin-ridge.jpg", thumbnailSrc: "/assets/images/2026/field-trips/rainbow-basin-ridge.jpg", alt: "Students gather on a ridge at Rainbow Basin as the instructor points out the folded beds behind them.", caption: "Students gather on a ridge at Rainbow Basin as the instructor points out the folded beds behind them.", mediaType: "photograph", category: "field", relatedStory: "", photographer: "", suppliedBy: "", permissionStatus: "approved", creditStatus: "pending", seasonStatus: "", featuredOnHomepage: false, date: "", published: true, group: "Field Trips", collection: "EPSS 61 Geologic Maps", season: "Fall 2025", location: "Rainbow Basin, California", course: "EPSS 61 Geologic Maps", sourceId: "field-drive-20260924/Rainbow Basin 2026 61 2.jpg", sortOrder: 60},
  {id: "ft-rainbow-camp", title: "Camp under the stars", src: "/assets/images/2026/field-trips/rainbow-basin-camp.jpg", thumbnailSrc: "/assets/images/2026/field-trips/rainbow-basin-camp.jpg", alt: "Tents lit against the night sky at the Rainbow Basin campsite.", caption: "Tents lit against the night sky at the Rainbow Basin campsite.", mediaType: "photograph", category: "field", relatedStory: "", photographer: "", suppliedBy: "", permissionStatus: "approved", creditStatus: "pending", seasonStatus: "", featuredOnHomepage: false, date: "", published: true, group: "Field Trips", collection: "EPSS 61 Geologic Maps", season: "Fall 2025", location: "Rainbow Basin, California", course: "EPSS 61 Geologic Maps", sourceId: "field-drive-20260924/Rainbow Basin 2026 61.jpg", sortOrder: 61},
  {id: "ft-painted-descent", title: "Into the slot", src: "/assets/images/2026/field-trips/painted-canyon-descent.jpg", thumbnailSrc: "/assets/images/2026/field-trips/painted-canyon-descent.jpg", alt: "Students climb down into a narrow slot canyon.", caption: "Students climb down into a narrow slot canyon.", mediaType: "photograph", category: "field", relatedStory: "", photographer: "", suppliedBy: "", permissionStatus: "approved", creditStatus: "pending", seasonStatus: "", featuredOnHomepage: false, date: "", published: true, group: "Field Trips", collection: "EPSS 112 Structural Geology", season: "Winter 2026", location: "Painted Canyon, Mecca Hills, California", course: "EPSS 112 Structural Geology", sourceId: "field-drive-20260924/2026 EPSS 112.jpg", sortOrder: 62},
  {id: "ft-painted-slot", title: "Inside Painted Canyon", src: "/assets/images/2026/field-trips/painted-canyon-slot.jpg", thumbnailSrc: "/assets/images/2026/field-trips/painted-canyon-slot.jpg", alt: "Students pause inside the walls of a slot canyon.", caption: "Students pause inside the walls of a slot canyon.", mediaType: "photograph", category: "field", relatedStory: "", photographer: "", suppliedBy: "", permissionStatus: "approved", creditStatus: "pending", seasonStatus: "", featuredOnHomepage: false, date: "", published: true, group: "Field Trips", collection: "EPSS 112 Structural Geology", season: "Winter 2026", location: "Painted Canyon, Mecca Hills, California", course: "EPSS 112 Structural Geology", sourceId: "field-drive-20260924/2026 EPSS 112 2.jpg", sortOrder: 63},
  {id: "ft-painted-wall", title: "Before the tilted beds", src: "/assets/images/2026/field-trips/painted-canyon-wall.jpg", thumbnailSrc: "/assets/images/2026/field-trips/painted-canyon-wall.jpg", alt: "Three students pose in front of steeply tilted sedimentary beds.", caption: "Three students pose in front of steeply tilted sedimentary beds.", mediaType: "photograph", category: "field", relatedStory: "", photographer: "", suppliedBy: "", permissionStatus: "approved", creditStatus: "pending", seasonStatus: "", featuredOnHomepage: false, date: "", published: true, group: "Field Trips", collection: "EPSS 112 Structural Geology", season: "Winter 2026", location: "Painted Canyon, Mecca Hills, California", course: "EPSS 112 Structural Geology", sourceId: "field-drive-20260924/2026 EPSS 112 4.jpg", sortOrder: 64},
  {id: "ft-painted-crest", title: "Along the crest", src: "/assets/images/2026/field-trips/painted-canyon-summit.jpg", thumbnailSrc: "/assets/images/2026/field-trips/painted-canyon-summit.jpg", alt: "Students walk the crest of a mudstone hill against a clear sky.", caption: "Students walk the crest of a mudstone hill against a clear sky.", mediaType: "photograph", category: "field", relatedStory: "", photographer: "", suppliedBy: "", permissionStatus: "approved", creditStatus: "pending", seasonStatus: "", featuredOnHomepage: false, date: "", published: true, group: "Field Trips", collection: "EPSS 112 Structural Geology", season: "Winter 2026", location: "", course: "EPSS 112 Structural Geology", sourceId: "field-drive-20260924/2026 EPSS 112 5.jpg", sortOrder: 65},
  {id: "ft-strat-ridge", title: "Mapping below the ridge", src: "/assets/images/2026/field-trips/stratigraphic-mapping-ridge.jpg", thumbnailSrc: "/assets/images/2026/field-trips/stratigraphic-mapping-ridge.jpg", alt: "Four students with field maps below a ridge of tilted strata.", caption: "Four students with field maps below a ridge of tilted strata.", mediaType: "photograph", category: "field", relatedStory: "", photographer: "", suppliedBy: "", permissionStatus: "approved", creditStatus: "pending", seasonStatus: "", featuredOnHomepage: false, date: "", published: true, group: "Field Trips", collection: "EPSS 111 Stratigraphic Mapping", season: "Spring 2026", location: "", course: "EPSS 111 Stratigraphic Mapping", sourceId: "field-drive-20260924/2026-EPSS-111.jpg", sortOrder: 66},
  {id: "ft-strat-outcrop", title: "Working the outcrop", src: "/assets/images/2026/field-trips/stratigraphic-mapping-outcrop.jpg", thumbnailSrc: "/assets/images/2026/field-trips/stratigraphic-mapping-outcrop.jpg", alt: "Students with clipboards spread across a boulder-strewn slope.", caption: "Students with clipboards spread across a boulder-strewn slope.", mediaType: "photograph", category: "field", relatedStory: "", photographer: "", suppliedBy: "", permissionStatus: "approved", creditStatus: "pending", seasonStatus: "", featuredOnHomepage: false, date: "", published: true, group: "Field Trips", collection: "EPSS 111 Stratigraphic Mapping", season: "Spring 2026", location: "", course: "EPSS 111 Stratigraphic Mapping", sourceId: "field-drive-20260924/2026-EPSS-111-2.jpg", sortOrder: 67},
  {id: "ft-strat-snack", title: "A break in the field", src: "/assets/images/2026/field-trips/stratigraphic-mapping-snack.jpg", thumbnailSrc: "/assets/images/2026/field-trips/stratigraphic-mapping-snack.jpg", alt: "Students share snacks during a break on the hillside.", caption: "Students share snacks during a break on the hillside.", mediaType: "photograph", category: "field", relatedStory: "", photographer: "", suppliedBy: "", permissionStatus: "approved", creditStatus: "pending", seasonStatus: "", featuredOnHomepage: false, date: "", published: true, group: "Field Trips", collection: "EPSS 111 Stratigraphic Mapping", season: "Spring 2026", location: "", course: "EPSS 111 Stratigraphic Mapping", sourceId: "field-drive-20260924/2026-EPSS-111-3.jpg", sortOrder: 68},
  {id: "ft-paige-dunes", title: "Surveying the dunes", src: "/assets/images/2026/field-trips/paige-group-dunes.jpg", thumbnailSrc: "/assets/images/2026/field-trips/paige-group-dunes.jpg", alt: "Paige Group researchers set up a GPS station and instrument among the dunes.", caption: "Paige Group researchers set up a GPS station and instrument among the dunes.", mediaType: "photograph", category: "research", relatedStory: "", photographer: "", suppliedBy: "", permissionStatus: "approved", creditStatus: "pending", seasonStatus: "", featuredOnHomepage: false, date: "", published: true, group: "Field Trips", collection: "Paige Group", season: "", location: "", course: "", sourceId: "field-drive-20260924/Paige_IMG_7361.jpg", sortOrder: 69},

  // ============================================================================
  // HELD BACK — credit unresolved, so published: false. These do not render on
  // the public page. Flip `published` to true as Codex lands each credit.
  // ============================================================================
  { id: "peltzer-badwater", title: "Three on the salt flat", src: "/assets/images/2026/peltzer/badwater-three.jpg", thumbnailSrc: "/assets/images/2026/peltzer/badwater-three.jpg", alt: "Three people standing on the Badwater salt flat.", caption: "", mediaType: "photograph", category: "field", collection: "Gilles Peltzer field collection", season: "", date: "", location: "Badwater Basin, Death Valley, California", course: "", relatedStory: "Article - Gilles Peltzer.dc.html", photographer: "", suppliedBy: "", sourceId: "peltzer", permissionStatus: "approved", creditStatus: "pending", seasonStatus: "", featuredOnHomepage: false, sortOrder: 50, published: false },
  { id: "peltzer-kelso", title: "Crossing the dune field", src: "/assets/images/2026/peltzer/kelso-dunes.jpg", thumbnailSrc: "/assets/images/2026/peltzer/kelso-dunes.jpg", alt: "Figures crossing the Kelso dune field.", caption: "", mediaType: "photograph", category: "field", collection: "Gilles Peltzer field collection", season: "", date: "", location: "Kelso Dunes, Mojave National Preserve, California", course: "", relatedStory: "Article - Gilles Peltzer.dc.html", photographer: "", suppliedBy: "", sourceId: "peltzer", permissionStatus: "approved", creditStatus: "pending", seasonStatus: "", featuredOnHomepage: false, sortOrder: 51, published: false },
  { id: "balboa-poker-flat", title: "The range under winter sky", src: "/assets/images/2026/balboa/poker-flat.jpg", thumbnailSrc: "/assets/images/2026/balboa/poker-flat.jpg", alt: "Poker Flat Research Range under a winter sky.", caption: "", mediaType: "photograph", category: "research", collection: "BALBOA balloon project", season: "", date: "", location: "Poker Flat Research Range, Chatanika, Alaska", course: "", relatedStory: "Article - BALBOA.dc.html", photographer: "", suppliedBy: "", sourceId: "balboa", permissionStatus: "approved", creditStatus: "pending", seasonStatus: "", featuredOnHomepage: false, sortOrder: 60, published: false },
  { id: "balboa-magnetosphere", title: "Solar wind and magnetosphere", src: "/assets/images/2026/balboa/balboa-magnetosphere-diagram.png", thumbnailSrc: "/assets/images/2026/balboa/balboa-magnetosphere-diagram.png", alt: "Diagram of solar wind interacting with Earth's magnetosphere.", caption: "", mediaType: "figure", category: "research", collection: "BALBOA balloon project", season: "", date: "", location: "", course: "", relatedStory: "Article - BALBOA.dc.html", photographer: "", suppliedBy: "", sourceId: "balboa", permissionStatus: "blocked: third-party adaptation from aurorahunter.com needs clearance", creditStatus: "pending", seasonStatus: "", featuredOnHomepage: false, sortOrder: 61, published: false },
  { id: "peng-ni-lab", title: "The sapphire-anvil lab team", src: "/assets/images/2026/peng-ni/sapphire-lab-team.jpg", thumbnailSrc: "/assets/images/2026/peng-ni/sapphire-lab-team.jpg", alt: "The sapphire-anvil lab team standing in the laboratory.", caption: "", mediaType: "photograph", category: "research", collection: "Peng Ni field and Sapphire Lab", season: "", date: "", location: "UCLA Sapphire Lab", course: "", relatedStory: "Article - Peng Ni.dc.html", photographer: "", suppliedBy: "", sourceId: "peng-ni", permissionStatus: "approved", creditStatus: "pending", seasonStatus: "", featuredOnHomepage: false, sortOrder: 70, published: false },
  { id: "meteor-crater", title: "Meteor Crater field trip", src: "", thumbnailSrc: "", alt: "EPSS 155 students at the rim of Meteor Crater.", caption: "EPSS 155 Planetary Physics field trip to Meteor (Barringer) Crater, Arizona, 11 November 2017.", mediaType: "photograph", category: "field", collection: "Meteor Crater field trip", season: "Fall 2017", date: "2017-11-11", location: "Meteor (Barringer) Crater, Arizona", course: "EPSS 155 Planetary Physics", relatedStory: "", photographer: "Kevin McKeegan", suppliedBy: "", sourceId: "photo-contest-meteor-crater", permissionStatus: "approved", creditStatus: "confirmed", seasonStatus: "", featuredOnHomepage: false, sortOrder: 80, published: false, blocker: "no web derivative yet; supplied image is 562×309, too small for the grid" }
];

export const publishedItems = () => MEDIA_ITEMS.filter(i => i.published);
export const heldItems = () => MEDIA_ITEMS.filter(i => !i.published);
export const homepageItems = () =>
  MEDIA_ITEMS.filter(i => i.published && i.featuredOnHomepage).sort((a, b) => a.sortOrder - b.sortOrder);
