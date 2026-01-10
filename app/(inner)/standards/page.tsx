import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"

const standards = [
  // ACTIVE standards
  { id: "DAO-001", title: "Compliant DAO Framework", status: "ACTIVE" },
  { id: "DAO-002", title: "DAO Member Duties & Liabilities", status: "ACTIVE" },
  { id: "DAO-003", title: "Decentralized Treasury Protocol", status: "ACTIVE" },
  { id: "DAO-004", title: "Auditable DAO Governance Record", status: "ACTIVE" },
  { id: "PEG-001", title: "Governance Change Procedure", status: "ACTIVE" },
  { id: "PEG-002", title: "Upgrade Compatibility Rules", status: "ACTIVE" },
  // DRAFTING standards
  { id: "VER-001", title: "Canonical Record Verification Standard", status: "DRAFTING" },
  { id: "VER-002", title: "Signature & Authority Verification", status: "DRAFTING" },
  { id: "VER-003", title: "Revocation & Deprecation Protocol", status: "DRAFTING" },
  { id: "EXE-001", title: "Non-Discretionary Execution Rule", status: "DRAFTING" },
  { id: "EXE-002", title: "AI Agent Execution Boundary", status: "DRAFTING" },
  // RESERVED slots
  { id: "FIN-001", title: "Machine-to-Machine Payment Verification", status: "RESERVED" },
  { id: "FIN-002", title: "Custody & Autonomous Asset Control", status: "RESERVED" },
  { id: "FIN-003", title: "Transaction Freezing & Emergency Halt", status: "RESERVED" },
  { id: "SC-001", title: "Canonical DAO Smart Contract Template", status: "RESERVED" },
  { id: "SC-002", title: "Bytecode Verification Standard", status: "RESERVED" },
  { id: "SC-003", title: "Upgradeable Contract Safety Rules", status: "RESERVED" },
  { id: "ID-001", title: "Decentralized Entity Identity (DID)", status: "RESERVED" },
  { id: "ID-002", title: "Reputation & Trust Scoring Boundary", status: "RESERVED" },
  { id: "SYS-001", title: "Canonical System Snapshot Protocol", status: "RESERVED" },
]

function getStatusStyle(status: string) {
  switch (status) {
    case "ACTIVE":
      return { text: "[ CANONICAL · ACTIVE ]", rowClass: "", idClass: "", titleClass: "", statusClass: "font-bold" }
    case "DRAFTING":
      return {
        text: "[ DRAFTING ]",
        rowClass: "opacity-80",
        idClass: "",
        titleClass: "",
        statusClass: "italic text-neutral-500",
      }
    case "RESERVED":
      return {
        text: "[ RESERVED SLOT ]",
        rowClass: "opacity-60 bg-neutral-50/50",
        idClass: "text-neutral-400",
        titleClass: "text-neutral-500",
        statusClass: "text-neutral-400",
      }
    default:
      return { text: `[ ${status} ]`, rowClass: "", idClass: "", titleClass: "", statusClass: "" }
  }
}

export default function StandardsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-black selection:bg-black selection:text-white">
      <Header />

      <main className="flex-1 px-6 md:px-12">
        <div className="mx-auto max-w-5xl border-t border-black pt-8">
          <header className="mb-12">
            <div className="mb-6 flex items-end justify-between">
              <h1 className="font-serif text-3xl font-bold tracking-tight md:text-4xl">CANONICAL INDEX</h1>
              <span className="hidden font-mono text-xs opacity-60 md:block">SYSTEM STATUS: OPERATIONAL</span>
            </div>
            <p className="max-w-2xl font-mono text-sm leading-relaxed opacity-80">
              The master registry of RuleMark standards. <br />
              This index defines the immutable boundaries for DAO governance, machine finance, and autonomous
              compliance.
            </p>
          </header>

          <div className="sticky top-0 z-10 flex w-full items-center justify-between border-y border-black bg-white px-2 py-3 font-mono text-xs font-bold uppercase tracking-widest">
            <span className="w-24 shrink-0">ID</span>
            <span className="flex-1 px-4">Standard Title</span>
            <span className="ml-4 hidden shrink-0 whitespace-nowrap text-right md:block">Status</span>
          </div>

          <div className="border-b border-black">
            {standards.map((standard) => {
              const style = getStatusStyle(standard.status)

              return (
                <Link
                  key={standard.id}
                  href={`/standards/${standard.id.toLowerCase()}`}
                  className={`flex items-center justify-between border-b border-neutral-200 px-2 py-4 hover:cursor-pointer hover:bg-[#f7f7f7] ${style.rowClass}`}
                >
                  <span className={`w-24 shrink-0 font-mono text-sm font-bold ${style.idClass}`}>{standard.id}</span>
                  <div className="flex flex-1 flex-col items-start px-4 md:flex-row md:items-center">
                    <h3 className={`font-serif text-lg leading-none ${style.titleClass}`}>{standard.title}</h3>
                    {/* Mobile status */}
                    <span className="mt-1 block font-mono text-[10px] text-neutral-500 md:hidden">
                      {standard.status === "ACTIVE"
                        ? "[ ACTIVE ]"
                        : standard.status === "DRAFTING"
                          ? "[ DRAFTING ]"
                          : "[ RESERVED ]"}
                    </span>
                  </div>
                  <span
                    className={`ml-4 hidden shrink-0 whitespace-nowrap text-right font-mono text-xs md:block ${style.statusClass}`}
                  >
                    {style.text}
                  </span>
                </Link>
              )
            })}
          </div>

          <div className="mb-20 mt-12 flex select-none items-center justify-between font-mono text-sm opacity-80">
            <span className="cursor-not-allowed text-neutral-400">[ PREVIOUS ]</span>
            <span className="font-bold tracking-widest">PAGE 01 / 01</span>
            <span className="cursor-not-allowed text-neutral-400">[ NEXT ]</span>
          </div>

          <footer className="border-t border-black pt-6 text-center opacity-60">
            <p className="font-mono text-[10px] uppercase tracking-wider">
              Only records listed here are recognized as canonical standards of RuleMark.
            </p>
          </footer>
        </div>
      </main>

      <Footer />
    </div>
  )
}
