export interface AgroProduct {
  id: string;
  name: string;
  category: "coconut" | "jaggery" | "spices" | "coffee" | "superfoods";
  subtitle: string;
  description: string;
  image: string;
  origin: string;
  grade: string;
  packagingOptions: string[];
  keyAttributes: string[];
  moistureContent?: string;
  shelfLife?: string;
  certifications: string[];
  threeDColor: string;
  exportPorts: string[];
}

export interface ExportRoute {
  id: string;
  destination: string;
  region: string;
  leadTimeDays: string;
  status: "Active Route" | "High Demand" | "Express Route";
  primaryProducts: string[];
  coordinates: [number, number]; // lat, lng
}

export const HARGI_COMPANY_DATA = {
  name: "HarGi Agro Products Private Limited",
  brandName: "HarGi Agro",
  tagline: "Natural Agro Products, Sourced with Care.",
  subtagline:
    "Leading Indian exporter of premium South Indian coconut products, authentic traditional jaggery, bold aromatic spices, single-origin coffee, and nutrient-rich superfoods to international markets.",
  founded: "Tamil Nadu, India",
  headquarters: "South India Agricultural Corridor",
  contact: {
    phone: "+91 77799 55393",
    email: "info@hagitechsol.com",
    website: "https://hagitechsol.com/",
    whatsapp: "+917779955393",
    address: "HarGi Agro Products Pvt Ltd, South India Sourcing Hub, India",
  },
  stats: [
    { label: "Global Export Destinations", value: "28+", suffix: "Countries" },
    { label: "Purity & Quality Assurance", value: "100%", suffix: "Lab Certified" },
    { label: "Direct Farm Cooperatives", value: "450+", suffix: "Partner Acres" },
    { label: "Annual Export Volume", value: "12,500+", suffix: "Metric Tons" },
  ],
  certifications: [
    { name: "APEDA Approved", desc: "Agricultural & Processed Food Products Export Authority" },
    { name: "FSSAI Certified", desc: "Food Safety & Standards Authority of India" },
    { name: "Spices Board India", desc: "Official Spice Export Registration" },
    { name: "CDB Registered", desc: "Coconut Development Board Government of India" },
    { name: "ISO 22000 / HACCP", desc: "International Food Safety Management Protocol" },
    { name: "100% Phytosanitary", desc: "International Quarantine & Fumigation Clearance" },
  ],
  products: [
    {
      id: "coconut-products",
      name: "Organic Coconut & Derivatives",
      category: "coconut",
      subtitle: "Cold-Pressed Virgin Coconut Oil, Desiccated Coconut & Shell Charcoal",
      description:
        "Harvested from the fertile coastal coconut groves of Pollachi and Kerala. We export extra-virgin cold-pressed coconut oil, high-fat fine & medium desiccated coconut flakes, whole copra, and eco-friendly shell charcoal briquettes.",
      image: "/products/coconut.jpg",
      origin: "Pollachi & Western Ghats Foothills, India",
      grade: "Grade A / Extra Virgin Food Grade",
      packagingOptions: ["25kg Kraft Paper Bags with PE liner", "200L Food-Grade HDPE Drums", "Flexi-Tanks", "500ml/1L Retail Glass Jars"],
      keyAttributes: ["Zero Hydrogenation", "Cold-Pressed Raw Purity", "Rich Lauric Acid Content", "Moisture < 3%"],
      moistureContent: "< 3.0%",
      shelfLife: "24 Months",
      certifications: ["FSSAI", "APEDA", "CDB", "ISO 22000"],
      threeDColor: "#10b981",
      exportPorts: ["Tuticorin Port (VOC)", "Cochin Seaport", "Chennai Port"],
    },
    {
      id: "traditional-jaggery",
      name: "Traditional Golden Jaggery",
      category: "jaggery",
      subtitle: "Pure Cane Jaggery Cubes, Granulated Powder & Palm Karupatti",
      description:
        "Handcrafted using authentic artisanal techniques without synthetic chemical additives or sodium hydrosulphite. Packed with iron, calcium, and natural minerals for healthy, natural sweetening.",
      image: "/products/jaggery.jpg",
      origin: "Erode & Salem Agricultural Belts, India",
      grade: "100% Chemical-Free / Export Grade",
      packagingOptions: ["1kg / 5kg Vacuum Sealed Blocks", "25kg Multi-Wall Moisture-Proof Bags", "Custom Private Label Retail Pouches"],
      keyAttributes: ["No Added Chemicals / Bleach", "Rich in Natural Micronutrients", "Pure Sugarcane & Palmyra Palm Sap", "Uniform Golden Amber Tone"],
      moistureContent: "< 5.5%",
      shelfLife: "18 Months",
      certifications: ["FSSAI", "APEDA", "Organic Certified"],
      threeDColor: "#f59e0b",
      exportPorts: ["Tuticorin Port", "Chennai Port", "Nhava Sheva (JNPT)"],
    },
    {
      id: "authentic-spices",
      name: "Authentic Indian Spices",
      category: "spices",
      subtitle: "Tellicherry Black Pepper, Alleppey Green Cardamom & Curcumin Turmeric",
      description:
        "The world's most prized spices sourced directly from the misty slopes of the Western Ghats. High volatile essential oil percentage, robust pungency, vibrant natural color, and laboratory-verified purity.",
      image: "/products/spices.jpg",
      origin: "Idukki Hills & Wayanad High Ranges, India",
      grade: "Export Extra Bold (TGSEB / Bold 8mm)",
      packagingOptions: ["10kg / 25kg Vacuum Poly Bags in Carton", "50kg Jute Gunny Sacks", "Nitrogen-Flushed Retail Tins"],
      keyAttributes: ["Piperine > 5.5%", "Cardamom Volatile Oil > 7.0%", "Curcumin Content > 4.5%", "Strictly Aflatoxin Tested"],
      moistureContent: "< 9.5%",
      shelfLife: "36 Months",
      certifications: ["Spices Board India", "APEDA", "FSSAI", "HACCP"],
      threeDColor: "#22c55e",
      exportPorts: ["Cochin Seaport", "Tuticorin Port", "Nhava Sheva"],
    },
    {
      id: "premium-coffee",
      name: "Single-Origin South Indian Coffee",
      category: "coffee",
      subtitle: "High-Altitude Arabica & Monsoon Malabar Roasted Beans",
      description:
        "Shade-grown under rainforest canopies in Coorg and Chikmagalur at 3,500+ feet elevation. Handpicked cherries, washed, sun-dried, and expertly sorted for distinctive chocolate, caramel, and floral tasting notes.",
      image: "/products/coffee.jpg",
      origin: "Coorg & Bababudangiri Highlands, India",
      grade: "Plantation AAA / Specialty Arabica",
      packagingOptions: ["60kg GrainPro Jute Sacks", "1kg One-Way Degassing Valve Bags", "Bulk Container Liners"],
      keyAttributes: ["Handpicked Shade-Grown", "Altitude 3,800+ ft", "Screen Size 19 Bold", "SCA Score 85+"],
      moistureContent: "< 11.5%",
      shelfLife: "24 Months",
      certifications: ["Coffee Board of India", "Rainforest Alliance Friendly", "APEDA"],
      threeDColor: "#b45309",
      exportPorts: ["Mangalore Port", "Cochin Seaport", "Chennai Port"],
    },
    {
      id: "superfoods-nuts",
      name: "Superfoods & Premium Nuts",
      category: "superfoods",
      subtitle: "Black Chia, Golden Flax, Jumbo Cashews, Hazelnuts & Brazil Nuts",
      description:
        "Cleaned, graded, and hygienically packed superfoods rich in Omega-3 fatty acids, plant proteins, and antioxidants. Supplying commercial food processors, health food chains, and wholesale distributors worldwide.",
      image: "/products/nuts.jpg",
      origin: "Selected Agro-Climatic Clusters, South India & Partner Hubs",
      grade: "W240 / W320 Jumbo Cashews, 99.9% Purity Seeds",
      packagingOptions: ["25kg Multi-Layer Kraft Bags", "10kg Vacuum Foil Tins", "Food Service Standup Pouches"],
      keyAttributes: ["Purity Level 99.9%", "Rich in Plant Omega-3 & Selenium", "Zero Chemical Preservatives", "Uniform Machine Sort"],
      moistureContent: "< 6.0%",
      shelfLife: "24 Months",
      certifications: ["FSSAI", "APEDA", "ISO 22000"],
      threeDColor: "#4ade80",
      exportPorts: ["Tuticorin Port", "Chennai Port", "Nhava Sheva"],
    },
  ] as AgroProduct[],
  exportDestinations: [
    {
      id: "middle-east",
      destination: "Dubai / Jebel Ali Port (UAE)",
      region: "Middle East & GCC",
      leadTimeDays: "4 - 6 Days",
      status: "Express Route",
      primaryProducts: ["Spices", "Jaggery", "Coconut Oil", "Cashews"],
      coordinates: [25.2048, 55.2708],
    },
    {
      id: "europe",
      destination: "Rotterdam & Hamburg (Europe)",
      region: "European Union",
      leadTimeDays: "18 - 22 Days",
      status: "Active Route",
      primaryProducts: ["Organic Desiccated Coconut", "Black Pepper", "Coffee AAA", "Chia Seeds"],
      coordinates: [51.9244, 4.4777],
    },
    {
      id: "north-america",
      destination: "New York & Long Beach (USA)",
      region: "North America",
      leadTimeDays: "24 - 28 Days",
      status: "High Demand",
      primaryProducts: ["Virgin Coconut Oil", "Spices", "Cane Jaggery", "Superfoods"],
      coordinates: [40.7128, -74.006],
    },
    {
      id: "southeast-asia",
      destination: "Singapore & Port Klang",
      region: "Southeast Asia",
      leadTimeDays: "5 - 7 Days",
      status: "Express Route",
      primaryProducts: ["Traditional Jaggery", "Spices", "Dry Fruits", "Coffee Beans"],
      coordinates: [1.3521, 103.8198],
    },
    {
      id: "east-asia",
      destination: "Tokyo & Yokohama (Japan)",
      region: "East Asia",
      leadTimeDays: "14 - 17 Days",
      status: "Active Route",
      primaryProducts: ["Specialty Spices", "Coffee", "Organic Coconut Briquettes"],
      coordinates: [35.6762, 139.6503],
    },
    {
      id: "australia",
      destination: "Sydney & Melbourne (Australia)",
      region: "Oceania",
      leadTimeDays: "16 - 20 Days",
      status: "Active Route",
      primaryProducts: ["Cane Jaggery Powder", "Virgin Coconut Oil", "Mixed Nuts"],
      coordinates: [-33.8688, 151.2093],
    },
  ] as ExportRoute[],
  processSteps: [
    {
      step: "01",
      title: "Direct Sustainable Farm Sourcing",
      description:
        "Partnering directly with traditional South Indian farmer collectives in Pollachi, Western Ghats, and fertile river basins to ensure unadulterated freshness and ethical farm-gate pricing.",
      badge: "Ethical Sourcing",
      icon: "Leaf",
    },
    {
      step: "02",
      title: "Hygienic Clean-Room Processing",
      description:
        "State-of-the-art grading, sorting, cold-pressing, and low-temperature drying inside dust-free, stainless steel ISO 22000 compliant facilities.",
      badge: "ISO 22000 Protocol",
      icon: "ShieldCheck",
    },
    {
      step: "03",
      title: "Rigorous Analytical Lab Testing",
      description:
        "Every batch undergo comprehensive chromatographic testing for moisture levels, volatile oil purity, microbiological safety, pesticide residues, and zero heavy metals.",
      badge: "Zero-Adulteration",
      icon: "FlaskConical",
    },
    {
      step: "04",
      title: "Vacuum Packing & Global Export Logistics",
      description:
        "Moisture-barrier multi-wall packaging, nitrogen-flushed retail containers, phytosanitary fumigation, and temperature-controlled container dispatch from major Indian sea ports.",
      badge: "Port-Ready Dispatch",
      icon: "Ship",
    },
  ],
};
