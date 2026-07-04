export const site = {
  name: "Bakeology",
  handle: "@bakeologgyyy",
  description:
    "Small-batch cookies, cookie cakes & tiramisu, baked from home in Vasai-Virar, Mumbai. FSSAI registered. Pre-order 1–2 days in advance — DM on Instagram or WhatsApp.",
  location: "Vasai-Virar | Mumbai",
  // TODO: set NEXT_PUBLIC_SITE_URL (or replace the fallback) once the domain exists
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://bakeologgyyy.example.com",
  phone: "+91-8010993277",
  instagramDm: "https://ig.me/m/bakeologgyyy",
  instagram: "https://instagram.com/bakeologgyyy",
  whatsapp: "https://wa.me/918010993277",
  whatsappDisplay: "80109 93277",
  areaServed: [
    "Vasai",
    "Virar",
    "Nalasopara",
    "Naigaon",
    "Vasai-Virar",
    "Mumbai",
  ],
} as const;

export type Faq = { question: string; answer: string };

export const faqs: Faq[] = [
  {
    question: "Which areas does Bakeology deliver to?",
    answer:
      "Bakeology is a home bakery based in Vasai-Virar, Mumbai. We serve Vasai, Virar, Nalasopara, Naigaon and nearby areas with pickup and local delivery — just ask when you place your order.",
  },
  {
    question: "How do I place an order?",
    answer:
      "Message us on Instagram (@bakeologgyyy) or WhatsApp at +91 80109 93277 with what you'd like and when you need it. Please pre-order 1–2 days in advance — everything is baked fresh to order.",
  },
  {
    question: "What does Bakeology bake?",
    answer:
      "Fresh-baked cookies (₹130–₹180) including Choco Chunk, Red Devil, Cookies N Cream, Double Trouble, Chocolate Kunafa and Biscoff; cookie cakes and tins in Mini (₹200), Bento (₹300) and Large (₹600) sizes; and classic tiramisu (200g, ₹300).",
  },
  {
    question: "Is Bakeology FSSAI registered?",
    answer:
      "Yes — Bakeology is an FSSAI-registered home kitchen in Vasai-Virar. Everything is baked in small batches with no preservatives.",
  },
  {
    question: "Can I get a custom cookie cake for a birthday?",
    answer:
      "Yes! Cookie cake flavours can be customised, and they come in Mini, Bento and Large sizes — great for birthdays and small celebrations. DM us with the occasion and we'll sort the rest.",
  },
];

export type MenuItem = {
  name: string;
  price: string;
  description: string;
  flag?: string;
  image: string;
  imageAlt: string;
};

export type MenuSection = {
  title: string;
  note?: string;
  items: MenuItem[];
};

export const menuSections: MenuSection[] = [
  {
    title: "Cookies",
    items: [
      {
        name: "Choco Chunk",
        price: "₹130",
        description:
          "The classic — golden, chewy, loaded with dark chocolate chunks.",
        flag: "Bestseller",
        image: "/photos/choco-chunk.jpg",
        imageAlt: "Choco chunk cookie with sea salt and dark chocolate chunks",
      },
      {
        name: "Red Devil",
        price: "₹150",
        description:
          "Deep red velvet dough with white chocolate and molten pockets of cream cheese.",
        image: "/photos/red-devil.jpg",
        imageAlt: "Red velvet cookie topped with white chocolate",
      },
      {
        name: "Cookies N Cream",
        price: "₹150",
        description:
          "Crushed Oreos folded in and pressed on top. Cream-filled, obviously.",
        image: "/photos/cookies-n-cream.jpg",
        imageAlt: "Individually packed Bakeology cookies including Cookies n Cream",
      },
      {
        name: "Double Trouble",
        price: "₹150",
        description:
          "Cocoa dough and dark chocolate chunks. Double chocolate, zero restraint.",
        image: "/photos/double-trouble.jpg",
        imageAlt: "Double chocolate cookie loaded with chocolate chunks",
      },
      {
        name: "Chocolate Kunafa",
        price: "₹180",
        description:
          "Crisp kunafa and pistachio-chocolate filling inside a soft-baked shell.",
        flag: "Fan favourite",
        image: "/photos/chocolate-kunafa.jpg",
        imageAlt: "Chocolate kunafa cookie topped with pistachio on a plate",
      },
      {
        name: "Biscoff",
        price: "₹180",
        description:
          "A whole spoonful of Biscoff hiding inside a golden, chewy shell.",
        image: "/photos/cookie-box.jpg",
        imageAlt: "Box of assorted Bakeology cookies with Biscoff-topped cookies",
      },
    ],
  },
  {
    title: "Cookie Cake / Tin",
    note: "Flavours can be customised — just ask.",
    items: [
      {
        name: "Mini",
        price: "₹200",
        description:
          "A giant, gooey choco chunk cookie baked as a cake — just for you (or not).",
        image: "/photos/cookie-cake-mini.jpg",
        imageAlt: "Mini cookie cake topped with chocolate and a white chocolate heart",
      },
      {
        name: "Bento Cake",
        price: "₹300",
        description:
          "The lunchbox-sized cookie cake. Perfect for small celebrations for two.",
        flag: "Customisable",
        image: "/photos/cookie-cake-bento.jpg",
        imageAlt: "Bento cookie cake with LOVE written in white chocolate",
      },
      {
        name: "Large",
        price: "₹600",
        description:
          "The full party format — a sharing-size slab of warm, gooey cookie.",
        image: "/photos/cookie-cake-large.jpg",
        imageAlt: "Large cookie cake topped with cream and dusted cocoa",
      },
    ],
  },
  {
    title: "Tiramisu",
    items: [
      {
        name: "Classic Tiramisu (200g)",
        price: "₹300",
        description:
          "Espresso-soaked layers and mascarpone cream. Customisation available.",
        image: "/photos/tiramisu.jpg",
        imageAlt: "Bakeology classic tiramisu tub with branded label",
      },
    ],
  },
];

export const tickerItems = [
  "choco chunk",
  "red devil",
  "cookies n cream",
  "double trouble",
  "chocolate kunafa",
  "biscoff",
  "cookie cakes & tins",
  "classic tiramisu",
];
