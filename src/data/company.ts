export type Member = {
  name: string;
  role: string;
  bio: string;
  initials: string;
};

export const TEAM: Member[] = [
  {
    name: "Ethan Caldwell",
    role: "Chief Executive Officer",
    initials: "EC",
    bio: "15+ years scaling fintech and Web3 ventures. Former Head of Digital Assets at a tier-1 bank, leading BlockTerraLab's vision to bring real estate on-chain.",
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
