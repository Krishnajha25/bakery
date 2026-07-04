export const site = {
  name: "Bakeology",
  handle: "@bakeologgyyy",
  description:
    "Small-batch cookies, cookie cakes & tiramisu, baked from home in Vasai-Virar, Mumbai. FSSAI registered. Pre-order 1–2 days in advance — DM on Instagram or WhatsApp.",
  location: "Vasai-Virar | Mumbai",
  instagramDm: "https://ig.me/m/bakeologgyyy",
  instagram: "https://instagram.com/bakeologgyyy",
  whatsapp: "https://wa.me/918010993277",
  whatsappDisplay: "80109 93277",
} as const;

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
