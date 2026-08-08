export const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Work", to: "/portfolio" },
  { label: "Studio", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export const FEATURES = [
  {
    id: 1,
    spec: "01 / STRATEGY",
    title: "Brand foundations",
    copy: "We define the position, voice, and visual logic before a single pixel is placed.",
  },
  {
    id: 2,
    spec: "02 / SYSTEM",
    title: "Design systems",
    copy: "Reusable components and clear rules so your brand stays consistent as it grows.",
  },
  {
    id: 3,
    spec: "03 / BUILD",
    title: "Web development",
    copy: "Fast, accessible sites built on modern React foundations, from brief to deploy.",
  },
  {
    id: 4,
    spec: "04 / DETAIL",
    title: "Print & production",
    copy: "Stationery, packaging, and collateral specced to real production tolerances.",
  },
];

export const SERVICES = [
  {
    id: "brand",
    title: "Brand Identity",
    price: "From $4,200",
    summary: "Naming support, mark, type system, and a usage guide your team will actually follow.",
    deliverables: ["Discovery workshop", "Logo & mark suite", "Color & type system", "Brand guidelines PDF"],
  },
  {
    id: "web",
    title: "Web Design & Build",
    price: "From $7,800",
    summary: "A responsive, accessible site designed and built in React, from wireframe to launch.",
    deliverables: ["Content architecture", "Responsive UI design", "React front-end build", "Analytics & handoff"],
  },
  {
    id: "system",
    title: "Design Systems",
    price: "From $9,500",
    summary: "Component libraries and documentation that keep design and engineering in sync.",
    deliverables: ["Component audit", "Token architecture", "Figma + code library", "Contribution docs"],
  },
  {
    id: "print",
    title: "Print & Packaging",
    price: "From $2,600",
    summary: "Business collateral and packaging specced for print, from proof to production.",
    deliverables: ["Format & stock guidance", "Print-ready files", "Press check support", "Vendor coordination"],
  },
];

export const PORTFOLIO = [
  {
    id: "p1",
    client: "Marrow Coffee Roasters",
    category: "brand",
    year: "2025",
    summary: "Identity and packaging system for a single-origin roastery, built around a hand-drawn mark.",
  },
  {
    id: "p2",
    client: "Northline Studio Apartments",
    category: "web",
    year: "2025",
    summary: "A booking-focused site with a component library shared across three property brands.",
  },
  {
    id: "p3",
    client: "Ferro & Vine",
    category: "brand",
    year: "2024",
    summary: "Wordmark, signage, and menu system for a neighborhood wine bar.",
  },
  {
    id: "p4",
    client: "Kettle Logic",
    category: "system",
    year: "2024",
    summary: "A 60-component design system unifying four product teams under one visual language.",
  },
  {
    id: "p5",
    client: "Hollow & Pine",
    category: "print",
    year: "2024",
    summary: "Packaging and stationery suite for a small-batch furniture workshop.",
  },
  {
    id: "p6",
    client: "Understory Journal",
    category: "web",
    year: "2023",
    summary: "Editorial site with a custom CMS-driven layout engine for long-form essays.",
  },
];

export const TESTIMONIALS = [
  {
    quote: "Fieldstone treated our brand like a real system, not a logo. Everything downstream got easier.",
    name: "Priya Raman",
    role: "Founder, Marrow Coffee Roasters",
  },
  {
    quote: "The handoff docs alone saved our engineering team weeks. Rare to get design and build this aligned.",
    name: "Dev Anand",
    role: "Head of Product, Kettle Logic",
  },
];
