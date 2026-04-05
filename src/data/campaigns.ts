import campaignEducation from "@/assets/campaign-education.jpg";
import campaignWater from "@/assets/campaign-water.jpg";
import campaignHealth from "@/assets/campaign-health.jpg";
import campaignDisaster from "@/assets/campaign-disaster.jpg";
import campaignWomen from "@/assets/campaign-women.jpg";

export interface Campaign {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  category: string;
  raised: number;
  goal: number;
  donors: number;
  daysLeft: number;
  organizer: string;
  location: string;
  createdAt: string;
  updates: { date: string; text: string }[];
}

export const campaigns: Campaign[] = [
  {
    id: "1",
    title: "Build a School in Sylhet for 200 Children",
    description: "Help us build a primary school in rural Sylhet so 200 underprivileged children can access quality education.",
    longDescription: "In rural Sylhet, over 200 children walk miles each day with no school nearby. Our mission is to construct a modern primary school with 6 classrooms, a library, and clean sanitation facilities. Your donation will provide desks, books, and trained teachers. Together, we can break the cycle of poverty through education.",
    image: campaignEducation,
    category: "Education",
    raised: 485000,
    goal: 800000,
    donors: 342,
    daysLeft: 28,
    organizer: "Rahim Ahmed",
    location: "Sylhet Division",
    createdAt: "2026-02-15",
    updates: [
      { date: "2026-03-20", text: "Land has been acquired! Construction permits are being processed." },
      { date: "2026-03-01", text: "We reached 50% of our goal! Thank you all for your generous support." },
    ],
  },
  {
    id: "2",
    title: "Clean Water Wells for Rajshahi Villages",
    description: "Install 10 deep tube wells to provide safe drinking water for 5,000 villagers in Rajshahi.",
    longDescription: "Arsenic contamination affects millions in Bangladesh. In Rajshahi, families drink contaminated water daily. We plan to install 10 deep tube wells across 5 villages, providing clean water to over 5,000 people. Each well costs ৳60,000 and can serve a community for 15+ years.",
    image: campaignWater,
    category: "Clean Water",
    raised: 320000,
    goal: 600000,
    donors: 189,
    daysLeft: 35,
    organizer: "Fatima Begum",
    location: "Rajshahi Division",
    createdAt: "2026-01-20",
    updates: [
      { date: "2026-03-15", text: "3 wells have been installed successfully! Communities are already benefiting." },
    ],
  },
  {
    id: "3",
    title: "Mobile Health Clinic for Char Islands",
    description: "Fund a mobile health clinic to serve remote char island communities in the Brahmaputra river.",
    longDescription: "Char island dwellers in the Brahmaputra river basin have almost zero access to healthcare. Our mobile clinic will travel by boat, providing basic medical care, vaccinations, and maternal health services to over 10,000 people across 15 char islands monthly.",
    image: campaignHealth,
    category: "Healthcare",
    raised: 150000,
    goal: 500000,
    donors: 98,
    daysLeft: 45,
    organizer: "Dr. Kamal Hossain",
    location: "Rangpur Division",
    createdAt: "2026-03-01",
    updates: [],
  },
  {
    id: "4",
    title: "Flood Relief for Sunamganj Families",
    description: "Provide emergency food, shelter, and medical aid to 500 families affected by severe flooding.",
    longDescription: "Devastating floods in Sunamganj have displaced thousands. We are providing emergency relief including food packages, temporary shelters, clean water, and medical supplies to 500 families. Every ৳1,000 feeds a family for a week.",
    image: campaignDisaster,
    category: "Disaster Relief",
    raised: 720000,
    goal: 1000000,
    donors: 567,
    daysLeft: 12,
    organizer: "Bangladesh Relief Foundation",
    location: "Sunamganj, Sylhet",
    createdAt: "2026-03-10",
    updates: [
      { date: "2026-03-30", text: "300 families have received emergency food packages so far." },
      { date: "2026-03-25", text: "Temporary shelters set up for 150 families." },
      { date: "2026-03-15", text: "Relief operations have begun. Medical teams deployed." },
    ],
  },
  {
    id: "5",
    title: "Women's Tailoring Workshop in Barisal",
    description: "Empower 50 rural women with sewing machines and training to start their own businesses.",
    longDescription: "This project will equip 50 women in Barisal with professional sewing machines, 6 months of training, and business mentorship. Graduates will be able to earn ৳8,000-15,000 monthly, supporting their families and gaining financial independence.",
    image: campaignWomen,
    category: "Women Empowerment",
    raised: 180000,
    goal: 350000,
    donors: 134,
    daysLeft: 40,
    organizer: "Nusrat Jahan",
    location: "Barisal Division",
    createdAt: "2026-02-01",
    updates: [
      { date: "2026-03-10", text: "20 sewing machines have been purchased. Training curriculum finalized." },
    ],
  },
];

export const categories = [
  { name: "Education", icon: "GraduationCap", count: 45 },
  { name: "Healthcare", icon: "Heart", count: 32 },
  { name: "Clean Water", icon: "Droplets", count: 28 },
  { name: "Disaster Relief", icon: "Shield", count: 18 },
  { name: "Women Empowerment", icon: "Users", count: 24 },
  { name: "Agriculture", icon: "Sprout", count: 15 },
];

export function formatTaka(amount: number): string {
  if (amount >= 100000) {
    return `৳${(amount / 100000).toFixed(1)}L`;
  }
  if (amount >= 1000) {
    return `৳${(amount / 1000).toFixed(0)}K`;
  }
  return `৳${amount}`;
}

export function formatTakaFull(amount: number): string {
  return `৳${amount.toLocaleString("en-BD")}`;
}
