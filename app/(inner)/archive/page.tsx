"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { useState } from "react"

const archivedRecords = [
  // CANONICAL · ACTIVE (5)
  {
    id: "DAO-001",
    title: "Compliant DAO Framework",
    description: "Defines non-discretionary governance boundaries for decentralized organizations.",
    status: "CANONICAL · ACTIVE",
    ref: "2026-LOG-A1",
  },
  {
    id: "DAO-002",
    title: "DAO Member Duties & Liabilities",
    description: "Outlines legal responsibilities and protections for DAO members.",
    status: "CANONICAL · ACTIVE",
    ref: "2026-LOG-A2",
  },
  {
    id: "DAO-003",
    title: "Decentralized Treasury Protocol",
    description: "Instructional standards for the management of DAO treasuries.",
    status: "CANONICAL · ACTIVE",
    ref: "2026-LOG-A3",
  },
  {
    id: "DAO-004",
    title: "Auditable DAO Governance Record",
    description: "Structure for recording and verifying DAO governance actions.",
    status: "CANONICAL · ACTIVE",
    ref: "2026-LOG-A4",
  },
  {
    id: "PEG-001",
    title: "Governance Change Procedure",
    description: "Protocol for proposing and implementing governance modifications.",
    status: "CANONICAL · ACTIVE",
    ref: "2026-LOG-A5",
  },
  // DRAFTING (7)
  {
    id: "PEG-002",
    title: "Upgrade Compatibility Rules",
    description: "Standards for ensuring backward compatibility during system upgrades.",
    status: "DRAFTING",
    ref: "2026-LOG-A6",
  },
  {
    id: "VER-001",
    title: "Canonical Record Verification Standard",
    description: "Framework for verifying the authenticity of canonical records.",
    status: "DRAFTING",
    ref: "2026-LOG-A7",
  },
  {
    id: "VER-002",
    title: "Signature & Authority Verification",
    description: "Standards for cryptographic signature validation and authority checks.",
    status: "DRAFTING",
    ref: "2026-LOG-A8",
  },
  {
    id: "VER-003",
    title: "Revocation & Deprecation Protocol",
    description: "Procedures for revoking or deprecating canonical standards.",
    status: "DRAFTING",
    ref: "2026-LOG-A9",
  },
  {
    id: "EXE-001",
    title: "Non-Discretionary Execution Rule",
    description: "Boundaries for automated execution without human intervention.",
    status: "DRAFTING",
    ref: "2026-LOG-A10",
  },
  {
    id: "EXE-002",
    title: "AI Agent Execution Boundary",
    description: "Limits and permissions for AI agents operating within the system.",
    status: "DRAFTING",
    ref: "2026-LOG-A11",
  },
  {
    id: "SYS-001",
    title: "Canonical System Snapshot Protocol",
    description: "Standards for creating and verifying system state snapshots.",
    status: "DRAFTING",
    ref: "2026-LOG-A12",
  },
  // RESERVED SLOT (8)
  {
    id: "PAY-001",
    title: "Machine-to-Machine Payment Verification",
    description: "Slot reserved for future canonical standard.",
    status: "RESERVED SLOT",
    ref: "2026-LOG-A13",
  },
  {
    id: "CUST-001",
    title: "Custody & Autonomous Asset Control",
    description: "Slot reserved for future canonical standard.",
    status: "RESERVED SLOT",
    ref: "2026-LOG-A14",
  },
  {
    id: "HALT-001",
    title: "Transaction Freezing & Emergency Halt",
    description: "Slot reserved for future canonical standard.",
    status: "RESERVED SLOT",
    ref: "2026-LOG-A15",
  },
  {
    id: "SC-001",
    title: "Canonical DAO Smart Contract Template",
    description: "Slot reserved for future canonical standard.",
    status: "RESERVED SLOT",
    ref: "2026-LOG-A16",
  },
  {
    id: "SC-002",
    title: "Bytecode Verification Standard",
    description: "Slot reserved for future canonical standard.",
    status: "RESERVED SLOT",
    ref: "2026-LOG-A17",
  },
  {
    id: "SC-003",
    title: "Upgradeable Contract Safety Rules",
    description: "Slot reserved for future canonical standard.",
    status: "RESERVED SLOT",
    ref: "2026-LOG-A18",
  },
  {
    id: "ID-001",
    title: "Decentralized Entity Identity (DID)",
    description: "Slot reserved for future canonical standard.",
    status: "RESERVED SLOT",
    ref: "2026-LOG-A19",
  },
  {
    id: "REP-001",
    title: "Reputation & Trust Scoring Boundary",
    description: "Slot reserved for future canonical standard.",
    status: "RESERVED SLOT",
    ref: "2026-LOG-A20",
  },
]

function getStatusStyle(status: string) {
  if (status === "CANONICAL · ACTIVE") {
    return "text-black font-bold"
  } else if (status === "DRAFTING") {
    return "text-[#666] italic"
  } else {
    return "text-[#999]"
  }
}

function getRowOpacity(status: string) {
  if (status === "RESERVED SLOT") {
    return "opacity-60"
  } else if (status === "DRAFTING") {
    return "opacity-80"
  }
  return ""
}

export default function ArchivePage() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredRecords = archivedRecords.filter(
    (record) =>
      record.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      record.title.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />

      <main className="flex-1">
        <section className="border-b border-black bg-white py-8">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="mb-6 font-serif text-4xl font-bold tracking-tight">ARCHIVE</h1>

            <div className="max-w-2xl">
              <input
                type="text"
                placeholder="Search by Record ID or Title"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full border border-black bg-white px-5 py-3 font-mono text-sm focus:outline-none"
                style={{ borderRadius: 0, backgroundColor: "#ffffff" }}
              />
            </div>
          </div>
        </section>

        <section className="bg-white py-8">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-2">
              {filteredRecords.map((record) => (
                <Link
                  key={record.id}
                  href={`/standards/${record.id.toLowerCase()}`}
                  className={`block cursor-pointer border border-black bg-white px-4 py-3 hover:bg-[#f7f7f7] ${getRowOpacity(record.status)}`}
                  style={{ borderRadius: 0 }}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-baseline gap-3 flex-wrap">
                        <span className="font-mono text-sm font-bold shrink-0">{record.id}</span>
                        <h2 className="font-serif text-base font-bold">{record.title}</h2>
                      </div>
                      <p className="mt-1 text-[#666] leading-snug" style={{ fontSize: "13px" }}>
                        {record.description}
                      </p>
                    </div>

                    <div className="flex flex-col items-end gap-1 shrink-0">
                      <span className={`font-mono text-xs whitespace-nowrap ${getStatusStyle(record.status)}`}>
                        [ {record.status} ]
                      </span>
                      <span className="font-mono text-[10px] text-[#999]">REF: {record.ref}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-8 flex items-center justify-center font-mono text-sm">
              <span className="text-[#999]">[ PREVIOUS ]</span>
              <span className="mx-6 font-bold tracking-widest">PAGE 01 / 01</span>
              <span className="text-[#999]">[ NEXT ]</span>
            </div>

            {filteredRecords.length === 0 && (
              <div className="py-8 text-center">
                <p className="font-mono text-sm text-[#666]">[ NO RECORDS FOUND ]</p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
