export interface StandardData {
  id: string
  title: string
  status: string
  hash: string
  timestamp: string
  blockHeight: string
  signer: string
  excerpt: string
}

export const standardsData: Record<string, StandardData> = {
  "dao-001": {
    id: "DAO-001",
    title: "Compliant DAO Framework",
    status: "CANONICAL · ACTIVE",
    hash: "d6a8b2f9b590fef734ab46eb0a40690db74f1916642491b43649380a04f1af1d",
    timestamp: "2024-04-24T12:00:00Z",
    blockHeight: "1920485",
    signer: "RuleMark Governance Key",
    excerpt:
      "The Compliant DAO Framework provides a set of governance guidelines designed to ensure DAOs operate within legal and regulatory boundaries consistent with current laws and best practices.",
  },
  "dao-002": {
    id: "DAO-002",
    title: "DAO Member Duties & Liabilities",
    status: "CANONICAL · ACTIVE",
    hash: "a7c9d3e1f8b290cef634ab46eb0a50791db85f2027753602c54760491b05g2be",
    timestamp: "2024-05-15T09:30:00Z",
    blockHeight: "1935672",
    signer: "RuleMark Governance Key",
    excerpt:
      "This standard outlines legal responsibilities and protections for DAO members, establishing clear boundaries for personal liability in decentralized governance structures.",
  },
  "dao-003": {
    id: "DAO-003",
    title: "Decentralized Treasury Protocol",
    status: "CANONICAL · ACTIVE",
    hash: "b8d0e4f2g9c301dfg745bc57fc1b61802ec96g3138864713d65871502c16h3cf",
    timestamp: "2024-06-01T14:45:00Z",
    blockHeight: "1948293",
    signer: "RuleMark Governance Key",
    excerpt:
      "Instructional standards for the management of DAO treasuries, establishing non-discretionary protocols for fund allocation, reporting, and security measures.",
  },
  "dao-004": {
    id: "DAO-004",
    title: "Auditable DAO Governance Record",
    status: "CANONICAL · ACTIVE",
    hash: "c9e1f5g3h0d412egh856cd68gd2c72913fd07h4249975824e76982613d27i4dg",
    timestamp: "2024-07-10T11:20:00Z",
    blockHeight: "1962481",
    signer: "RuleMark Governance Key",
    excerpt:
      "Structure for recording and verifying DAO governance actions, ensuring transparent and immutable documentation of all organizational decisions.",
  },
  "peg-001": {
    id: "PEG-001",
    title: "Governance Change Procedure",
    status: "CANONICAL · ACTIVE",
    hash: "e2f4g6h8i0j2k4l6m8n0o2p4q6r8s0t2u4v6w8x0y2z4a6b8c0d2e4f6g8h0i2j4",
    timestamp: "2024-08-05T10:00:00Z",
    blockHeight: "1978234",
    signer: "RuleMark Governance Key",
    excerpt:
      "Defines the canonical procedure for proposing, reviewing, and implementing changes to governance structures within RuleMark-compliant organizations.",
  },
  "peg-002": {
    id: "PEG-002",
    title: "Upgrade Compatibility Rules",
    status: "CANONICAL · ACTIVE",
    hash: "f3g5h7i9j1k3l5m7n9o1p3q5r7s9t1u3v5w7x9y1z3a5b7c9d1e3f5g7h9i1j3k5",
    timestamp: "2024-09-12T16:30:00Z",
    blockHeight: "1994567",
    signer: "RuleMark Governance Key",
    excerpt:
      "Establishes compatibility requirements and migration protocols for system upgrades, ensuring continuity and integrity of canonical records.",
  },
}

export function getStandardById(id: string): StandardData | null {
  const normalizedId = id.toLowerCase()
  return standardsData[normalizedId] || null
}

export function getStandardByHash(hash: string): StandardData | null {
  const normalizedHash = hash.toLowerCase()
  for (const key in standardsData) {
    if (standardsData[key].hash.toLowerCase() === normalizedHash) {
      return standardsData[key]
    }
  }
  return null
}
