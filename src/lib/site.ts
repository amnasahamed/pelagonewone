export const site = {
  name: "Pelago Consultants",
  tagline: "We handle compliance. You build the business.",
  description:
    "Startup India certified consultancy offering company registration, GST filing, ISO certification, trademark, and compliance services. 6,000+ happy clients.",
  url: "https://pelagoconsultants.com",
  phone: "+91 79946 59991",
  phoneHref: "tel:+917994659991",
  email: "info@pelagoconsultants.com",
  whatsapp:
    "https://wa.me/917994659991?text=Hi,%20I%20need%20help%20with%20business%20compliance",
  address: [
    "City Edge Building",
    "NH Bypass, Palazhi, TP Sankaran Road",
    "Thondayad Bypass, Kozhikode",
    "Keralam 673016",
  ],
  googleBusiness: "https://share.google/YlMhl8XPH2IN20C4G",
  social: {
    linkedin: "https://in.linkedin.com/company/pelago-consultants",
    instagram: "https://www.instagram.com/pelago.in",
  },
  stats: [
    { value: "6,000+", label: "Founders served" },
    { value: "10–15 days", label: "Avg. incorporation" },
    { value: "4.9/5", label: "Client rating" },
    { value: "100%", label: "Transparent pricing" },
  ],
} as const;

export const teamContacts = [
  {
    role: "Senior consultant",
    phone: "+91 79946 59991",
    href: "tel:+917994659991",
  },
  { role: "Audit head", phone: "+91 79946 59993", href: "tel:+917994659993" },
  {
    role: "Audit & GST associate",
    phone: "+91 79946 59996",
    href: "tel:+917994659996",
  },
  {
    role: "Head of bookkeeping",
    phone: "+91 79944 59994",
    href: "tel:+917994459994",
  },
  {
    role: "Head of compliance & MCA",
    phone: "+91 79946 59992",
    href: "tel:+917994659992",
  },
  {
    role: "Admin & accounts",
    phone: "+91 89216 59993",
    href: "tel:+918921659993",
  },
] as const;

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
