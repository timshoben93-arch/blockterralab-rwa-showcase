import jermainePhoto from "@/assets/team-jermaine.jpg";

export type Member = {
  name: string;
  role: string;
  bio: string;
  initials: string;
  photo?: string;
  linkedin?: string;
};

export const TEAM: Member[] = [
  {
    name: "Jermaine J.",
    role: "Chief Executive Officer",
    initials: "JJ",
    photo: jermainePhoto,
    linkedin: "https://www.linkedin.com/in/jermaine-johnson-093894b9/",
    bio: "Leads BlockTerraLab's vision to bring real estate on-chain, bridging fintech and Web3 to unlock fractional ownership of real-world assets.",
  },
  {
    name: "Priya Raman",
    role: "Chief Technology Officer",
    initials: "PR",
    bio: "Distributed systems architect. Previously built tokenization infrastructure handling $400M+ TVL. Drives our protocol, security and AI roadmap.",
  },
  {
    name: "Marcus Lee",
    role: "Tech Lead",
    initials: "ML",
    bio: "Full-stack engineer specializing in Solidity, zk-proofs and 3D web experiences. Owns the end-to-end delivery of our RWA tokenization platform.",
  },
];

export const COMPANY_LOCATION = {
  name: "BlockTerraLab HQ",
  address: "1208 2nd Avenue, Seattle, WA 98101",
  // Seattle downtown bounding box (left, bottom, right, top), marker lat/lon
  lat: 47.6079,
  lon: -122.3375,
};
