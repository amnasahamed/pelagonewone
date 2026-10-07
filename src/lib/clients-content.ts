import { suppliedClientLogos } from "@/lib/supplied-client-logos";

export type Client = {
  name: string;
  logo?: string;
  brandName?: string;
  logoBackground?: "dark";
  featured?: boolean;
};

/** Clients — synced from pelagoconsultants.com/clients */
const existingClients: Client[] = [
  { name: "Adam Design Studio LLP", logo: "/clients/ADAM DESIGN STUDIO.png" },
  {
    name: "Al Tamimi Tours And Travels LLP",
    logo: "/clients/AL TAMIMI TOURS AND TRAVELS.jpg",
  },
  { name: "Astute Spaces LLP", logo: "/clients/ASTUTE SPACES.jpg" },
  {
    name: "Bisget International Contracting LLP",
    logo: "/clients/BISGET INTERNATIONAL CONTRACTING.png",
  },
  { name: "Brunchr Enterprises LLP", logo: "/clients/brunchr.jpeg" },
  { name: "Cornice Studio Ar LLP", logo: "/clients/CORNICE STUDIO AR.jpg" },
  {
    name: "Creativerse International LLP",
    logo: "/clients/PRIMEVIA INTERNATIONAL.png",
  },
  { name: "Curb Studio LLP" },
  {
    name: "Custom3D Manufacturing Solutions LLP",
    logo: "/clients/custom3d.jpeg",
  },
  { name: "Dad Global Ventures LLP", logo: "/clients/DAD GLOBAL VENTURES.jpg" },
  { name: "Desgro International LLP" },
  { name: "Dhadh Ventures LLP" },
  { name: "Dimois Ventures LLP", logo: "/clients/dimois.jpeg" },
  {
    name: "Dojox Kozhikode Ventures LLP",
    logo: "/clients/DOJOX KOZHIKODE VENTURES.png",
  },
  { name: "Get Go Holidays LLP", logo: "/clients/GET GO HOLIDAYS.jpg" },
  { name: "Hammock Studio LLP", logo: "/clients/HAMMOCK STUDIO.jpg" },
  { name: "Haps Initiative LLP", logo: "/clients/HAPS INITIATIVE.jpg" },
  { name: "Lados Concepts LLP", logo: "/clients/LADOS CONCEPTS.jpg" },
  { name: "Lithic Developers LLP", logo: "/clients/LITHIC DEVELOPERS.jpg" },
  {
    name: "Lohakarma Engineering LLP",
    logo: "/clients/LOHAKARMA ENGINEERING.jpeg",
  },
  { name: "Moba Digihub LLP", logo: "/clients/MOBA DIGIHUB.avif" },
  { name: "Natco Ventures" },
  { name: "Outdoorsys International LLP" },
  { name: "Phloem Learning LLP", logo: "/clients/PHLOEM LEARNING.jpg" },
  { name: "Pixelearn Ed Hub LLP", logo: "/clients/PIXELEARN ED HUB.webp" },
  {
    name: "Prekashaa Design Studio LLP",
    logo: "/clients/PREKSHAA DESIGN STUDIO.jpg",
  },
  { name: "Profirst Techinfra LLP", logo: "/clients/profirst.jpeg" },
  { name: "Rayone Energy Systems LLP", logo: "/clients/rayone.jpeg" },
  { name: "Razgo International LLP" },
  {
    name: "Rex Antonio Dance & Fitness Studio LLP",
    logo: "/clients/REX ANTONIO DANCE & FITNESS STUDIO.jpg",
  },
  { name: "Rhino Concepts LLP" },
  {
    name: "Roamzone International LLP",
    logo: "/clients/ROAMZONE INTERNATIONAL.png",
  },
  { name: "Sadano International LLP" },
  {
    name: "Spot Management Consultants LLP",
    logo: "/clients/SPOT MANAGEMENT CONSULTANTS.jpg",
  },
  { name: "Tales Endeavours LLP", logo: "/clients/TALES ENDEAVOURS.jpg" },
  {
    name: "Webec International LLP",
    logo: "/clients/WEBEC INTERNATIONAL.jpeg",
  },
  { name: "Zoha Holidays LLP", logo: "/clients/ZOHA HOLIDAYS.jpg" },
  { name: "5Square Digital Media LLP" },
  { name: "Actai Technologies Private Limited" },
  { name: "Aharc Line Studio Design LLP" },
  { name: "Alsaz Hospitals Private Limited" },
  { name: "Alyph Digital Consultancy OPC Private Limited" },
  { name: "Anrex Square Private Limited" },
  { name: "Arcadia Retails LLP" },
  { name: "Base Of Stars Technologies LLP" },
  { name: "Blufang Ventures LLP" },
  { name: "C School Of Creative Studies LLP" },
];

const suppliedByName = new Map(
  suppliedClientLogos.map((client) => [client.name, client]),
);
const existingNames = new Set(existingClients.map((client) => client.name));

export const clients: Client[] = [
  ...existingClients.map((client) => ({
    ...client,
    ...suppliedByName.get(client.name),
  })),
  ...suppliedClientLogos.filter((client) => !existingNames.has(client.name)),
];

export const clientsWithLogos = clients.filter((c) => c.logo);

export const clientsPageCopy = {
  eyebrow: "Our clients",
  title: "Trusted by industry leaders",
  subtitle:
    "From ambitious startups to established enterprises — companies across India rely on Pelago Consultants for compliance, strategy, and sustainable growth.",
  rosterTitle: "Client directory",
  rosterSubtitle:
    "Search by company name — browse logos in the wall below, with the full roster listed underneath.",
  searchPlaceholder: "Search clients…",
} as const;

export function getClientStats() {
  return { total: clients.length };
}
