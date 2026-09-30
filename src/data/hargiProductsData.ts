export interface HarGiCatalogItem {
  id: string;
  name: string;
  category: 'Coconut Products' | 'Indian Coffee' | 'Indian Spices & Salt' | 'Jaggery Varieties' | 'Nuts & Dried Fruits';
  description: string;
  tags: string[];
  image: string;
  accentColor: string;
}

export const HARGI_ALL_PRODUCTS: HarGiCatalogItem[] = [
  {
    "id": "cumin",
    "name": "Cumin",
    "category": "Indian Spices & Salt",
    "description": "Aromatic cumin seeds essential for traditional cooking.",
    "tags": [
      "Earthy flavor",
      "Cleaned and sorted",
      "Fresh aroma"
    ],
    "image": "/products/cumin.jpg",
    "accentColor": "#ef4444"
  },
  {
    "id": "coco-peat-blocks",
    "name": "Coco Peat Blocks",
    "category": "Coconut Products",
    "description": "High-quality compressed coco peat blocks for agriculture.",
    "tags": [
      "Excellent water retention",
      "100% Organic",
      "Easy to use"
    ],
    "image": "/products/coco-peat-blocks.jpg",
    "accentColor": "#10b981"
  },
  {
    "id": "black-pepper",
    "name": "Black Pepper",
    "category": "Indian Spices & Salt",
    "description": "Premium Indian black pepper – bold, pungent & aromatic",
    "tags": [
      "Whole",
      "cracked & ground",
      "High piperine content",
      "MG-1 & other export grades"
    ],
    "image": "/products/black-pepper.jpg",
    "accentColor": "#ef4444"
  },
  {
    "id": "mustard-seeds",
    "name": "Mustard Seeds",
    "category": "Indian Spices & Salt",
    "description": "Pungent black/yellow mustard seeds for tempering.",
    "tags": [
      "Uniform size",
      "High oil content",
      "Cleaned"
    ],
    "image": "/products/mustard-seeds.png",
    "accentColor": "#ef4444"
  },
  {
    "id": "low-ec-coco-peat",
    "name": "Low-EC Coco Peat",
    "category": "Coconut Products",
    "description": "Washed coco peat with very low electrical conductivity.",
    "tags": [
      "Ideal for sensitive plants",
      "Salt-free",
      "Optimal pH"
    ],
    "image": "/products/low-ec-coco-peat.png",
    "accentColor": "#10b981"
  },
  {
    "id": "ajwain",
    "name": "Ajwain",
    "category": "Indian Spices & Salt",
    "description": "Carom seeds with a strong thyme-like flavor.",
    "tags": [
      "Digestive benefits",
      "Machine cleaned",
      "Fresh"
    ],
    "image": "/products/ajwain.jpg",
    "accentColor": "#ef4444"
  },
  {
    "id": "asafoetida-hing",
    "name": "Asafoetida (Hing)",
    "category": "Indian Spices & Salt",
    "description": "Strong and pungent spice used to enhance savory dishes.",
    "tags": [
      "Compounded/Pure",
      "Authentic flavor",
      "Airtight packing"
    ],
    "image": "/products/asafoetida.jpg",
    "accentColor": "#ef4444"
  },
  {
    "id": "raisins",
    "name": "Raisins",
    "category": "Nuts & Dried Fruits",
    "description": "Naturally sweet golden and dark raisins.",
    "tags": [
      "Sun-dried",
      "Seedless",
      "Plump and juicy"
    ],
    "image": "/products/raisins.jpg",
    "accentColor": "#8b5cf6"
  },
  {
    "id": "buffered-coco-peat",
    "name": "Buffered Coco Peat",
    "category": "Coconut Products",
    "description": "Premium buffered coco peat treated to reduce salt content.",
    "tags": [
      "Calcium/Magnesium treated",
      "Ready for planting",
      "High yield"
    ],
    "image": "/products/buffered-coco-peat.png",
    "accentColor": "#10b981"
  },
  {
    "id": "specialty-coffee",
    "name": "Specialty Coffee",
    "category": "Indian Coffee",
    "description": "Exclusive micro-lot coffee with distinct cupping scores.",
    "tags": [
      "Unique flavor profile",
      "Single origin",
      "Sustainably grown"
    ],
    "image": "/products/specialty-coffee.png",
    "accentColor": "#d97706"
  },
  {
    "id": "fenugreek",
    "name": "Fenugreek",
    "category": "Indian Spices & Salt",
    "description": "Golden-brown fenugreek seeds with a distinct bitter-sweet flavor.",
    "tags": [
      "Machine cleaned",
      "Bold seeds",
      "Aromatic"
    ],
    "image": "/products/fenugreek.jpg",
    "accentColor": "#ef4444"
  },
  {
    "id": "hazelnuts",
    "name": "Hazelnuts",
    "category": "Nuts & Dried Fruits",
    "description": "Rich, buttery whole hazelnuts.",
    "tags": [
      "Roasted/Raw",
      "Crunchy",
      "Great for baking"
    ],
    "image": "/products/hazelnuts.jpg",
    "accentColor": "#8b5cf6"
  },
  {
    "id": "pecans",
    "name": "Pecans",
    "category": "Nuts & Dried Fruits",
    "description": "Sweet and buttery pecan halves.",
    "tags": [
      "Rich in antioxidants",
      "Perfect halves",
      "Fresh"
    ],
    "image": "/products/pecans.jpg",
    "accentColor": "#8b5cf6"
  },
  {
    "id": "pumpkin-seeds",
    "name": "Pumpkin Seeds",
    "category": "Nuts & Dried Fruits",
    "description": "Crunchy and nutritious green pumpkin seeds (Pepitas).",
    "tags": [
      "Rich in zinc",
      "Raw/Roasted",
      "Shelled"
    ],
    "image": "/products/pumpkin-seeds.jpg",
    "accentColor": "#8b5cf6"
  },
  {
    "id": "activated-carbon",
    "name": "Activated Carbon",
    "category": "Coconut Products",
    "description": "High-performance coconut shell carbon for purification & filtration",
    "tags": [
      "Iodine value 800–1400",
      "Granular & powdered forms",
      "Water",
      "air & gold recovery grades"
    ],
    "image": "/products/activated-carbon.jpg",
    "accentColor": "#10b981"
  },
  {
    "id": "coco-peat-discs",
    "name": "Coco Peat Discs",
    "category": "Coconut Products",
    "description": "Round coco peat discs for seed starting and seedling growth.",
    "tags": [
      "Perfect for seed trays",
      "Rapid rooting",
      "Biodegradable"
    ],
    "image": "/products/coco-peat-discs.jpg",
    "accentColor": "#10b981"
  },
  {
    "id": "coconut-chips",
    "name": "Coconut Chips",
    "category": "Coconut Products",
    "description": "Toasted & natural – healthy snacking & gourmet ingredient",
    "tags": [
      "Low moisture content",
      "Plain",
      "flavored & organic options",
      "Bulk & retail packaging"
    ],
    "image": "/products/coconut-chips.jpg",
    "accentColor": "#10b981"
  },
  {
    "id": "whole-mature-coconuts",
    "name": "Whole Mature Coconuts",
    "category": "Coconut Products",
    "description": "Premium export-grade fresh coconuts for global markets",
    "tags": [
      "Uniform size & weight",
      "Long shelf life",
      "Husked",
      "semi-husked & dehusked"
    ],
    "image": "/products/whole-mature-coconuts.jpg",
    "accentColor": "#10b981"
  },
  {
    "id": "copra",
    "name": "Copra",
    "category": "Coconut Products",
    "description": "High-quality dried coconut kernel for oil extraction & confectionery",
    "tags": [
      "Grade 1 & Grade 2",
      "Moisture < 6%",
      "White & brown varieties"
    ],
    "image": "/products/copra.jpg",
    "accentColor": "#10b981"
  },
  {
    "id": "mixed-spice-blends",
    "name": "Mixed Spice Blends",
    "category": "Indian Spices & Salt",
    "description": "Authentic Indian spice blends for specific dishes like Garam Masala.",
    "tags": [
      "Perfect ratios",
      "Freshly roasted",
      "Ready to use"
    ],
    "image": "/products/mixed-spice-blends.jpg",
    "accentColor": "#ef4444"
  },
  {
    "id": "sunflower-seeds",
    "name": "Sunflower Seeds",
    "category": "Nuts & Dried Fruits",
    "description": "Healthy and crunchy shelled sunflower seeds.",
    "tags": [
      "High in Vitamin E",
      "Great for salads",
      "Roasted"
    ],
    "image": "/products/sunflower-seeds.jpg",
    "accentColor": "#8b5cf6"
  },
  {
    "id": "robusta-coffee",
    "name": "Robusta Coffee",
    "category": "Indian Coffee",
    "description": "Strong and full-bodied Robusta beans for a perfect espresso.",
    "tags": [
      "High caffeine",
      "Deep crema",
      "Bold flavor"
    ],
    "image": "/products/robusta-coffee.png",
    "accentColor": "#d97706"
  },
  {
    "id": "almonds",
    "name": "Almonds",
    "category": "Nuts & Dried Fruits",
    "description": "Crunchy and nutritious premium almonds.",
    "tags": [
      "Rich in Vitamin E",
      "Large size",
      "Non-GMO"
    ],
    "image": "/products/almonds.jpg",
    "accentColor": "#8b5cf6"
  },
  {
    "id": "dates",
    "name": "Dates",
    "category": "Nuts & Dried Fruits",
    "description": "Soft, sweet, and energy-packed dates.",
    "tags": [
      "Pitted/Unpitted",
      "Natural sweetness",
      "High fiber"
    ],
    "image": "/products/dates.jpg",
    "accentColor": "#8b5cf6"
  },
  {
    "id": "fennel",
    "name": "Fennel",
    "category": "Indian Spices & Salt",
    "description": "Sweet and aromatic fennel seeds used for seasoning and digestion.",
    "tags": [
      "Green color",
      "Fresh scent",
      "Highly graded"
    ],
    "image": "/products/fennel.jpg",
    "accentColor": "#ef4444"
  },
  {
    "id": "mace",
    "name": "Mace",
    "category": "Indian Spices & Salt",
    "description": "Lacy outer covering of nutmeg with a delicate, warm flavor.",
    "tags": [
      "Bright orange-red",
      "Freshly dried",
      "Premium grade"
    ],
    "image": "/products/mace.jpg",
    "accentColor": "#ef4444"
  },
  {
    "id": "dried-figs",
    "name": "Dried Figs",
    "category": "Nuts & Dried Fruits",
    "description": "Sweet and chewy dried figs rich in minerals.",
    "tags": [
      "Natural drying",
      "No added sugar",
      "Premium size"
    ],
    "image": "/products/dried-figs.jpg",
    "accentColor": "#8b5cf6"
  },
  {
    "id": "arabica-coffee",
    "name": "Arabica Coffee",
    "category": "Indian Coffee",
    "description": "Smooth and aromatic Arabica beans with a rich flavor profile.",
    "tags": [
      "Low acidity",
      "Sweet notes",
      "Premium export quality"
    ],
    "image": "/products/arabica-coffee.png",
    "accentColor": "#d97706"
  },
  {
    "id": "roasted-coffee",
    "name": "Roasted Coffee",
    "category": "Indian Coffee",
    "description": "Perfectly roasted coffee beans ready for grinding and brewing.",
    "tags": [
      "Medium/Dark roast",
      "Freshly packed",
      "Aromatic"
    ],
    "image": "/products/roasted-coffee.png",
    "accentColor": "#d97706"
  },
  {
    "id": "nutmeg",
    "name": "Nutmeg",
    "category": "Indian Spices & Salt",
    "description": "Whole nutmeg offering a sweet and warm aroma.",
    "tags": [
      "With/Without shell",
      "Bold size",
      "High oil"
    ],
    "image": "/products/nutmeg.jpg",
    "accentColor": "#ef4444"
  },
  {
    "id": "coco-peat-briquettes",
    "name": "Coco Peat Briquettes",
    "category": "Coconut Products",
    "description": "Small coco peat briquettes for specialized potting mixtures.",
    "tags": [
      "Quick expansion",
      "Enhanced root growth",
      "Eco-friendly"
    ],
    "image": "/products/coco-peat-briquettes.jpg",
    "accentColor": "#10b981"
  },
  {
    "id": "650g-coco-peat-blocks",
    "name": "650g Coco Peat Blocks",
    "category": "Coconut Products",
    "description": "Compact 650g briquettes perfect for home gardening.",
    "tags": [
      "Expands to 10 liters",
      "Weed-free",
      "High porosity"
    ],
    "image": "/products/650g-coco-peat-blocks.jpg",
    "accentColor": "#10b981"
  },
  {
    "id": "brazil-nuts",
    "name": "Brazil Nuts",
    "category": "Nuts & Dried Fruits",
    "description": "Large, nutrient-dense Brazil nuts.",
    "tags": [
      "High in Selenium",
      "Creamy texture",
      "Raw"
    ],
    "image": "/products/brazil-nuts.jpg",
    "accentColor": "#8b5cf6"
  },
  {
    "id": "sugarcane-jaggery-gur",
    "name": "Sugarcane Jaggery (Gur)",
    "category": "Jaggery Varieties",
    "description": "Classic golden-brown unrefined cane jaggery – rich in minerals, widely used in sweets & daily consumption",
    "tags": [
      "High iron",
      "calcium & magnesium",
      "Block",
      "powder & cube forms",
      "Versatile for Indian & international cuisines",
      "Organic options available"
    ],
    "image": "/products/sugarcane-jaggery.jpg",
    "accentColor": "#f59e0b"
  },
  {
    "id": "coriander",
    "name": "Coriander",
    "category": "Indian Spices & Salt",
    "description": "Fresh and aromatic coriander seeds/powder with a citrus hint.",
    "tags": [
      "Bright color",
      "Mildly sweet",
      "Finely milled options"
    ],
    "image": "/products/coriander.png",
    "accentColor": "#ef4444"
  },
  {
    "id": "walnuts",
    "name": "Walnuts",
    "category": "Nuts & Dried Fruits",
    "description": "High-quality walnuts rich in Omega-3 fatty acids.",
    "tags": [
      "Light halves",
      "Fresh taste",
      "Shell/Shelled"
    ],
    "image": "/products/walnuts.jpg",
    "accentColor": "#8b5cf6"
  },
  {
    "id": "green-cardamom-elachi",
    "name": "Green Cardamom (Elachi)",
    "category": "Indian Spices & Salt",
    "description": "Queen of spices – intensely aromatic for sweets, tea & coffee",
    "tags": [
      "8mm+ premium pods",
      "High oil content",
      "Organic options available"
    ],
    "image": "/products/green-cardamom.jpg",
    "accentColor": "#ef4444"
  },
  {
    "id": "tender-coconut-water",
    "name": "Tender Coconut Water",
    "category": "Coconut Products",
    "description": "Fresh natural hydration – ready-to-drink export quality",
    "tags": [
      "Naturally isotonic electrolyte",
      "No added sugar or preservatives",
      "Aseptic tetra pak & cans"
    ],
    "image": "/products/tender-coconut-water.jpg",
    "accentColor": "#10b981"
  },
  {
    "id": "mixed-nuts",
    "name": "Mixed Nuts",
    "category": "Nuts & Dried Fruits",
    "description": "A healthy, crunchy blend of premium roasted nuts.",
    "tags": [
      "Almonds/Cashews/Pistachios",
      "Salted/Unsalted",
      "Energy boosting"
    ],
    "image": "/products/mixed-nuts.jpg",
    "accentColor": "#8b5cf6"
  },
  {
    "id": "curry-leaves-dried",
    "name": "Curry Leaves (Dried)",
    "category": "Indian Spices & Salt",
    "description": "Aromatic dried curry leaves that retain their natural flavor.",
    "tags": [
      "Green color retained",
      "Strong aroma",
      "Destemmed"
    ],
    "image": "/products/curry-leaves.jpg",
    "accentColor": "#ef4444"
  },
  {
    "id": "virgin-coconut-oil",
    "name": "Virgin Coconut Oil",
    "category": "Coconut Products",
    "description": "Cold-pressed, unrefined – ideal for food, cosmetics & health",
    "tags": [
      "Lauric acid > 45%",
      "No trans-fat or cholesterol",
      "Glass bottles & bulk drums"
    ],
    "image": "/products/virgin-coconut-oil.jpg",
    "accentColor": "#10b981"
  },
  {
    "id": "coffee-blends",
    "name": "Coffee Blends",
    "category": "Indian Coffee",
    "description": "Expertly crafted blends combining Arabica and Robusta for perfect balance.",
    "tags": [
      "Consistent taste",
      "Rich aroma",
      "Ideal for cafes"
    ],
    "image": "/products/coffee-blends.png",
    "accentColor": "#d97706"
  },
  {
    "id": "desiccated-coconut",
    "name": "Desiccated Coconut",
    "category": "Coconut Products",
    "description": "Fine/medium/coarse grades for bakery & confectionery industries",
    "tags": [
      "High-fat & low-fat options",
      "Sweetened & unsweetened",
      "Macaroon & extra-fine grades"
    ],
    "image": "/products/desiccated-coconut.jpg",
    "accentColor": "#10b981"
  },
  {
    "id": "cloves",
    "name": "Cloves",
    "category": "Indian Spices & Salt",
    "description": "Intensely aromatic and sweet whole cloves.",
    "tags": [
      "High essential oil",
      "Hand-sorted",
      "Bold size"
    ],
    "image": "/products/cloves.png",
    "accentColor": "#ef4444"
  },
  {
    "id": "bay-leaf-tej-patta",
    "name": "Bay Leaf (Tej Patta)",
    "category": "Indian Spices & Salt",
    "description": "Aromatic Indian bay leaves – essential for biryanis, curries & seasoning",
    "tags": [
      "Premium hand-picked leaves",
      "Strong fragrance & flavor",
      "Dried & cleaned"
    ],
    "image": "/products/bay-leaf.jpg",
    "accentColor": "#ef4444"
  },
  {
    "id": "cashew-nuts",
    "name": "Cashew Nuts",
    "category": "Nuts & Dried Fruits",
    "description": "Creamy and large Indian cashew nuts (W210, W240, W320).",
    "tags": [
      "Whole whites",
      "Crispy texture",
      "Vacuum packed"
    ],
    "image": "/products/cashew-nuts.jpg",
    "accentColor": "#8b5cf6"
  },
  {
    "id": "coco-peat-grow-bags",
    "name": "Coco Peat Grow Bags",
    "category": "Coconut Products",
    "description": "Ready-to-use grow bags for hydroponics and greenhouse farming.",
    "tags": [
      "UV stabilized",
      "Optimal drainage",
      "Disease free"
    ],
    "image": "/products/coco-peat-grow-bags.jpg",
    "accentColor": "#10b981"
  },
  {
    "id": "5kg-coco-peat-blocks",
    "name": "5kg Coco Peat Blocks",
    "category": "Coconut Products",
    "description": "Standard 5kg coco peat blocks ideal for bulk nursery use.",
    "tags": [
      "Expands up to 75 liters",
      "Low EC",
      "Premium grade"
    ],
    "image": "/products/5kg-coco-peat-blocks.jpg",
    "accentColor": "#10b981"
  },
  {
    "id": "customized-grade-coffee",
    "name": "Customized Grade Coffee",
    "category": "Indian Coffee",
    "description": "Coffee beans graded and sorted according to specific buyer requirements.",
    "tags": [
      "Size sorted",
      "Defect-free",
      "Tailored to order"
    ],
    "image": "/products/customized-grade-coffee.png",
    "accentColor": "#d97706"
  },
  {
    "id": "pistachios",
    "name": "Pistachios",
    "category": "Nuts & Dried Fruits",
    "description": "Roasted and lightly salted premium pistachios.",
    "tags": [
      "Naturally opened",
      "Vibrant green",
      "Crunchy"
    ],
    "image": "/products/pistachios.jpg",
    "accentColor": "#8b5cf6"
  },
  {
    "id": "natural-salt",
    "name": "Natural Salt",
    "category": "Indian Spices & Salt",
    "description": "Pure sea salt & rock salt – mineral-rich & unrefined",
    "tags": [
      "Sea salt crystals & powder",
      "Low-processed options",
      "Bulk export ready"
    ],
    "image": "/products/natural-salt.jpg",
    "accentColor": "#ef4444"
  },
  {
    "id": "star-anise",
    "name": "Star Anise",
    "category": "Indian Spices & Salt",
    "description": "Beautiful, star-shaped spice with a strong licorice flavor.",
    "tags": [
      "Whole stars",
      "Highly aromatic",
      "Essential for broths"
    ],
    "image": "/products/star-anise.jpg",
    "accentColor": "#ef4444"
  },
  {
    "id": "turmeric",
    "name": "Turmeric",
    "category": "Indian Spices & Salt",
    "description": "Golden Indian turmeric with high curcumin content.",
    "tags": [
      "Anti-inflammatory",
      "Natural color",
      "Bold fingers/powder"
    ],
    "image": "/products/turmeric.png",
    "accentColor": "#ef4444"
  },
  {
    "id": "cinnamon",
    "name": "Cinnamon",
    "category": "Indian Spices & Salt",
    "description": "Sweet and woody true cinnamon sticks/powder.",
    "tags": [
      "Delicate flavor",
      "Thin bark",
      "Premium aroma"
    ],
    "image": "/products/cinnamon.png",
    "accentColor": "#ef4444"
  },
  {
    "id": "flax-seeds",
    "name": "Flax Seeds",
    "category": "Nuts & Dried Fruits",
    "description": "Nutty-flavored flax seeds, a great source of plant-based Omega-3.",
    "tags": [
      "Roasted/Raw",
      "High fiber",
      "Supports digestion"
    ],
    "image": "/products/flax-seeds.jpg",
    "accentColor": "#8b5cf6"
  },
  {
    "id": "green-coffee-beans",
    "name": "Green Coffee Beans",
    "category": "Indian Coffee",
    "description": "Raw, unroasted coffee beans sourced from premium Indian estates.",
    "tags": [
      "High antioxidant",
      "Ready for custom roasting",
      "Hand-picked"
    ],
    "image": "/products/green-coffee-beans.png",
    "accentColor": "#d97706"
  },
  {
    "id": "dry-ginger",
    "name": "Dry Ginger",
    "category": "Indian Spices & Salt",
    "description": "Sun-dried ginger roots with strong, spicy notes.",
    "tags": [
      "Washed/Unwashed",
      "High pungency",
      "Finely ground options"
    ],
    "image": "/products/dry-ginger.jpg",
    "accentColor": "#ef4444"
  },
  {
    "id": "palm-jaggery-karupatti",
    "name": "Palm Jaggery (Karupatti)",
    "category": "Jaggery Varieties",
    "description": "Dark, soft & smoky-flavored from palmyra/toddy palm sap – traditional South Indian favorite",
    "tags": [
      "Lower glycemic impact",
      "Rich in antioxidants & zinc",
      "Ideal for Ayurvedic use & desserts",
      "Bulk blocks or pieces"
    ],
    "image": "/products/palm-jaggery.jpg",
    "accentColor": "#f59e0b"
  },
  {
    "id": "pine-nuts",
    "name": "Pine Nuts",
    "category": "Nuts & Dried Fruits",
    "description": "Delicate, buttery pine nuts perfect for pesto or salads.",
    "tags": [
      "Creamy flavor",
      "Lightly toasted",
      "Premium quality"
    ],
    "image": "/products/pine-nuts.jpg",
    "accentColor": "#8b5cf6"
  },
  {
    "id": "apricots",
    "name": "Apricots",
    "category": "Nuts & Dried Fruits",
    "description": "Tart and sweet dried apricots, a perfect healthy snack.",
    "tags": [
      "Bright color",
      "Soft texture",
      "Rich in Iron"
    ],
    "image": "/products/apricots.jpg",
    "accentColor": "#8b5cf6"
  },
  {
    "id": "chia-seeds",
    "name": "Chia Seeds",
    "category": "Nuts & Dried Fruits",
    "description": "Tiny black seeds packed with Omega-3 and fiber.",
    "tags": [
      "Superfood",
      "Cleaned",
      "Great for smoothies"
    ],
    "image": "/products/nuts.jpg",
    "accentColor": "#8b5cf6"
  }
];
