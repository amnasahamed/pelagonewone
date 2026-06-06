export const site = {
  name: "Pelago Consultants",
  tagline: "We handle compliance. You build the business.",
  description:
    "Startup India certified consultancy offering company registration, GST filing, ISO certification, trademark, and compliance services. 6,000+ happy clients.",
  url: "https://pelagoconsultants.com",
  phone: "+91 79946 59991",
  phoneHref: "tel:+917994659991",
  email: "info@pelagoconsultants.com",
  whatsapp: "https://wa.me/917994659991?text=Hi,%20I%20need%20help%20with%20business%20compliance",
  address: [
    "First floor, HiLITE Business Park",
    "Room 1103 B, Phase 1",
    "Palazhi, Kozhikode",
    "Kerala 673032",
  ],
  social: {
    linkedin: "https://in.linkedin.com/company/pelago-consultants",
    instagram: "https://www.instagram.com/pelago.in",
  },
  stats: [
    { value: "6,000+", label: "Founders served" },
    { value: "7–10 days", label: "Avg. incorporation" },
    { value: "4.9/5", label: "Client rating" },
    { value: "100%", label: "Transparent pricing" },
  ],
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/clients", label: "Clients" },
  { href: "/tools", label: "Free Tools" },
  { href: "/learn", label: "Learn" },
  { href: "/blog", label: "Blog" },
  { href: "/careers", label: "Join Us" },
] as const;
