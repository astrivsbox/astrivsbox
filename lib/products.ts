export type Product = {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  affiliateUrl: string;
  category: string;
  badge?: string;
};

export type Category = {
  slug: string;
  name: string;
  description: string;
  image: string;
  icon: string;
};

export const categories: Category[] = [
  {
    slug: "home-gadgets",
    name: "Home Gadgets",
    description: "Smart devices and clever tools to upgrade your home life.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    icon: "🏠",
  },
  {
    slug: "outdoor",
    name: "Outdoor & Adventure",
    description: "Gear for hiking, camping, and everything in between.",
    image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=600&q=80",
    icon: "⛺",
  },
  {
    slug: "home-decor",
    name: "Home Decor",
    description: "Beautiful pieces to elevate every room in your home.",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80",
    icon: "🛋️",
  },
  {
    slug: "kitchen",
    name: "Kitchen & Dining",
    description: "Tools and essentials for cooking and entertaining.",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80",
    icon: "🍳",
  },
  {
    slug: "man-cave",
    name: "Man Cave",
    description: "Gadgets, gaming tech, and garage gear to level up your space.",
    image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=600&q=80",
    icon: "🎮",
  },
];

export const products: Product[] = [
  // Home Gadgets
  {
    id: "hg-1",
    name: "Smart LED Desk Lamp",
    description: "Touch-control LED lamp with USB charging port, adjustable brightness, and 5 color temperatures.",
    price: "$39.99",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&q=80",
    affiliateUrl: "https://www.amazon.com/s?k=smart+led+desk+lamp&tag=astrivsbox-20",
    category: "home-gadgets",
    badge: "Best Seller",
  },
  {
    id: "hg-2",
    name: "Mini Projector",
    description: "Portable 1080p projector for movies, gaming, and presentations. Compatible with HDMI, USB, and wireless.",
    price: "$89.99",
    image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400&q=80",
    affiliateUrl: "https://www.amazon.com/s?k=mini+projector+portable&tag=astrivsbox-20",
    category: "home-gadgets",
    badge: "Top Pick",
  },
  {
    id: "hg-3",
    name: "Robot Vacuum Cleaner",
    description: "Slim, powerful robot vacuum with auto-scheduling, app control, and self-charging dock.",
    price: "$149.99",
    image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&q=80",
    affiliateUrl: "https://www.amazon.com/s?k=robot+vacuum+cleaner&tag=astrivsbox-20",
    category: "home-gadgets",
  },
  {
    id: "hg-4",
    name: "Smart Plug (4-Pack)",
    description: "Control any outlet with your voice or phone. Works with Alexa and Google Home.",
    price: "$29.99",
    image: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?w=400&q=80",
    affiliateUrl: "https://www.amazon.com/s?k=smart+plug+4+pack&tag=astrivsbox-20",
    category: "home-gadgets",
  },
  // Outdoor
  {
    id: "out-1",
    name: "Ultralight Camping Hammock",
    description: "Quick-set nylon hammock with tree straps. Holds up to 400 lbs, packs into a small pouch.",
    price: "$34.99",
    image: "https://images.unsplash.com/photo-1532339142463-fd0a8979791a?w=400&q=80",
    affiliateUrl: "https://www.amazon.com/s?k=ultralight+camping+hammock&tag=astrivsbox-20",
    category: "outdoor",
    badge: "Staff Pick",
  },
  {
    id: "out-2",
    name: "Portable Solar Charger",
    description: "20,000mAh solar power bank with dual USB ports. Perfect for camping and emergencies.",
    price: "$49.99",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&q=80",
    affiliateUrl: "https://www.amazon.com/s?k=portable+solar+charger+power+bank&tag=astrivsbox-20",
    category: "outdoor",
    badge: "Best Seller",
  },
  {
    id: "out-3",
    name: "Trekking Poles (Pair)",
    description: "Lightweight aluminum poles with ergonomic cork grips, adjustable height, and quick-lock system.",
    price: "$44.99",
    image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=400&q=80",
    affiliateUrl: "https://www.amazon.com/s?k=lightweight+trekking+poles&tag=astrivsbox-20",
    category: "outdoor",
  },
  {
    id: "out-4",
    name: "Waterproof Dry Bag",
    description: "Keeps your gear dry on kayaking, rafting, or rainy hikes. Roll-top seal, 20L capacity.",
    price: "$22.99",
    image: "https://images.unsplash.com/photo-1527004013197-933b2a3747ae?w=400&q=80",
    affiliateUrl: "https://www.amazon.com/s?k=waterproof+dry+bag+20l&tag=astrivsbox-20",
    category: "outdoor",
  },
  // Home Decor
  {
    id: "dec-1",
    name: "Boho Macrame Wall Hanging",
    description: "Handcrafted cotton macrame tapestry. Adds a warm, textural touch to any room.",
    price: "$28.99",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
    affiliateUrl: "https://www.amazon.com/s?k=boho+macrame+wall+hanging&tag=astrivsbox-20",
    category: "home-decor",
    badge: "Trending",
  },
  {
    id: "dec-2",
    name: "Minimalist Floating Shelves (Set of 3)",
    description: "Rustic wood and iron wall shelves. Easy to install, holds up to 15 lbs each.",
    price: "$45.99",
    image: "https://images.unsplash.com/photo-1565183997392-2f6f122e5912?w=400&q=80",
    affiliateUrl: "https://www.amazon.com/s?k=minimalist+floating+shelves+set&tag=astrivsbox-20",
    category: "home-decor",
  },
  {
    id: "dec-3",
    name: "Faux Pampas Grass Stems",
    description: "Realistic dried pampas grass for vases. Low-maintenance, no watering needed.",
    price: "$19.99",
    image: "https://images.unsplash.com/photo-1545239351-ef35f43d514b?w=400&q=80",
    affiliateUrl: "https://www.amazon.com/s?k=faux+pampas+grass+decor&tag=astrivsbox-20",
    category: "home-decor",
    badge: "Trending",
  },
  {
    id: "dec-4",
    name: "Woven Seagrass Storage Baskets",
    description: "Natural seagrass baskets for organizing shelves, toys, and plants. Set of 3 sizes.",
    price: "$36.99",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=400&q=80",
    affiliateUrl: "https://www.amazon.com/s?k=woven+seagrass+storage+baskets&tag=astrivsbox-20",
    category: "home-decor",
  },
  // Kitchen
  {
    id: "kit-1",
    name: "Digital Kitchen Scale",
    description: "Slim stainless steel scale with tare function, 11 lb capacity, accurate to 1g.",
    price: "$17.99",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
    affiliateUrl: "https://www.amazon.com/s?k=digital+kitchen+scale+stainless&tag=astrivsbox-20",
    category: "kitchen",
    badge: "Best Seller",
  },
  {
    id: "kit-2",
    name: "Silicone Cooking Utensil Set",
    description: "13-piece heat-resistant silicone set with wooden handles. Dishwasher safe.",
    price: "$32.99",
    image: "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=400&q=80",
    affiliateUrl: "https://www.amazon.com/s?k=silicone+cooking+utensil+set&tag=astrivsbox-20",
    category: "kitchen",
  },
  {
    id: "kit-3",
    name: "Cold Brew Coffee Maker",
    description: "1-quart glass cold brew maker with a fine mesh filter. Makes smooth, bold cold brew in 12-24 hours.",
    price: "$27.99",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&q=80",
    affiliateUrl: "https://www.amazon.com/s?k=cold+brew+coffee+maker+glass&tag=astrivsbox-20",
    category: "kitchen",
    badge: "Top Pick",
  },
  {
    id: "kit-4",
    name: "Bamboo Cutting Board Set",
    description: "3-piece bamboo cutting boards with juice grooves. Eco-friendly and gentle on knives.",
    price: "$24.99",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&q=80",
    affiliateUrl: "https://www.amazon.com/s?k=bamboo+cutting+board+set&tag=astrivsbox-20",
    category: "kitchen",
  },
  // Man Cave
  {
    id: "mc-1",
    name: "LED Strip Lights (32ft)",
    description: "App-controlled RGB LED strips with music sync mode. Perfect for behind TVs, desks, or shelving.",
    price: "$22.99",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&q=80",
    affiliateUrl: "https://www.amazon.com/s?k=led+strip+lights+rgb+app+controlled&tag=astrivsbox-20",
    category: "man-cave",
    badge: "Best Seller",
  },
  {
    id: "mc-2",
    name: "Gaming Chair with Lumbar Support",
    description: "Ergonomic racing-style chair with adjustable armrests, recline, and built-in lumbar pillow.",
    price: "$189.99",
    image: "https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=400&q=80",
    affiliateUrl: "https://www.amazon.com/s?k=gaming+chair+lumbar+support+ergonomic&tag=astrivsbox-20",
    category: "man-cave",
    badge: "Top Pick",
  },
  {
    id: "mc-3",
    name: "Wireless Gaming Headset",
    description: "7.1 surround sound, 20-hour battery, noise-canceling mic. Compatible with PC, PS5, and Xbox.",
    price: "$79.99",
    image: "https://images.unsplash.com/photo-1599669454699-248893623440?w=400&q=80",
    affiliateUrl: "https://www.amazon.com/s?k=wireless+gaming+headset+surround+sound&tag=astrivsbox-20",
    category: "man-cave",
  },
  {
    id: "mc-4",
    name: "Mini Fridge for Desk or Garage",
    description: "4-liter compact fridge holds 6 cans. Quiet operation, AC/DC power — perfect for any room or garage.",
    price: "$44.99",
    image: "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=400&q=80",
    affiliateUrl: "https://www.amazon.com/s?k=mini+fridge+compact+desk+garage&tag=astrivsbox-20",
    category: "man-cave",
    badge: "Staff Pick",
  },
  {
    id: "mc-5",
    name: "Pegboard Tool Organizer Kit",
    description: "Steel pegboard panel with 50+ hooks and bins. Mounts to any wall — ideal for garage or workshop.",
    price: "$54.99",
    image: "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?w=400&q=80",
    affiliateUrl: "https://www.amazon.com/s?k=pegboard+tool+organizer+garage+kit&tag=astrivsbox-20",
    category: "man-cave",
  },
  {
    id: "mc-6",
    name: "Mechanical Gaming Keyboard",
    description: "Tenkeyless layout with tactile switches, per-key RGB backlighting, and aircraft-grade aluminum frame.",
    price: "$69.99",
    image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&q=80",
    affiliateUrl: "https://www.amazon.com/s?k=mechanical+gaming+keyboard+rgb+tenkeyless&tag=astrivsbox-20",
    category: "man-cave",
  },
  {
    id: "mc-7",
    name: "Dart Board Cabinet Set",
    description: "Official-size sisal dartboard with solid wood cabinet, two sets of darts, and chalk scoreboard.",
    price: "$89.99",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&q=80",
    affiliateUrl: "https://www.amazon.com/s?k=dart+board+cabinet+set+sisal&tag=astrivsbox-20",
    category: "man-cave",
  },
  {
    id: "mc-8",
    name: "Heavy-Duty Garage Shelving Unit",
    description: "5-tier steel wire shelving, holds 350 lbs per shelf. Tool-free assembly, adjustable heights.",
    price: "$67.99",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
    affiliateUrl: "https://www.amazon.com/s?k=heavy+duty+garage+shelving+unit+steel&tag=astrivsbox-20",
    category: "man-cave",
    badge: "Best Seller",
  },
];

export function getProductsByCategory(slug: string): Product[] {
  return products.filter((p) => p.category === slug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.badge).slice(0, 6);
}
