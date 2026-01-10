import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { RulemarkSeal } from "@/components/rulemark-seal"
import Link from "next/link"

export default function StatementsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Page Header */}
        <section className="border-b border-border bg-muted/30 py-12">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="mb-6">
              <Link href="/" className="font-mono text-sm hover:underline">
                ← Return to Home
              </Link>
            </div>
            <h1 className="mb-3 font-serif text-4xl font-bold tracking-tight">Statements</h1>
            <p className="text-base text-muted-foreground">
              Legal and institutional boundary definitions for RuleMark operations.
            </p>
          </div>
        </section>

        {/* Statements Content */}
        <section className="py-16">
          <div className="mx-auto max-w-4xl space-y-12 px-4 sm:px-6 lg:px-8">
            {/* What RuleMark Is */}
            <div className="space-y-4 rounded-sm border border-border bg-card p-8">
              <h2 className="text-2xl font-semibold">What RuleMark Is</h2>
              <div className="space-y-3 leading-relaxed text-muted-foreground">
                <p>
                  RuleMark is a canonical, immutable, public record authority. It maintains a registry of frozen
                  standards and governance frameworks that have been permanently recorded for institutional reference.
                </p>
                <p>
                  RuleMark functions as a neutral archival system that records and preserves governance standards in
                  their canonical form, ensuring they remain accessible and verifiable over time.
                </p>
              </div>
            </div>

            {/* What RuleMark Is Not */}
            <div className="space-y-4 rounded-sm border border-border bg-card p-8">
              <h2 className="text-2xl font-semibold">What RuleMark Is Not</h2>
              <div className="space-y-3 leading-relaxed text-muted-foreground">
                <p>
                  RuleMark does not issue opinions, provide consultancy services, execute projects, or operate services.
                </p>
                <p>
                  RuleMark is not a regulatory body, advisory firm, or standards development organization. It does not
                  create standards, provide legal advice, or offer compliance guidance.
                </p>
                <p>
                  RuleMark does not interpret, modify, or endorse any standards it records. All records are maintained
                  in their original frozen state without commentary or evaluation.
                </p>
              </div>
            </div>

            {/* Non-Discretion Policy */}
            <div className="space-y-4 rounded-sm border border-border bg-card p-8">
              <h2 className="text-2xl font-semibold">Non-Discretion Policy</h2>
              <div className="space-y-3 leading-relaxed text-muted-foreground">
                <p>
                  RuleMark operates under strict non-discretionary principles. All records are processed according to
                  predefined protocols without subjective judgment or editorial discretion.
                </p>
                <p>
                  Once a record is frozen and entered into the canonical registry, it cannot be altered, amended, or
                  removed. This immutability ensures the integrity and reliability of the public record.
                </p>
              </div>
            </div>

            {/* No-Advice Statement */}
            <div className="space-y-4 rounded-sm border border-border bg-card p-8">
              <h2 className="text-2xl font-semibold">No-Advice Statement</h2>
              <div className="space-y-3 leading-relaxed text-muted-foreground">
                <p>
                  RuleMark does not provide legal, financial, regulatory, or compliance advice of any kind. All records
                  are maintained for informational and archival purposes only.
                </p>
                <p>
                  Users should not interpret the existence of a record in the RuleMark registry as an endorsement,
                  recommendation, or validation of its contents. Independent professional advice should be sought for
                  any specific application or implementation.
                </p>
              </div>
            </div>

            {/* Immutability Principle */}
            <div className="space-y-4 rounded-sm border border-border bg-card p-8">
              <h2 className="text-2xl font-semibold">Immutability Principle</h2>
              <div className="space-y-3 leading-relaxed text-muted-foreground">
                <p>
                  All canonical records maintained by RuleMark are permanently frozen at the time of registration.
                  Cryptographic hashes ensure the integrity and authenticity of each record.
                </p>
                <p>
                  The immutable nature of RuleMark records provides a stable reference point for governance frameworks
                  and standards over time, allowing organizations to cite and reference these documents with confidence
                  in their permanence.
                </p>
                <p>
                  New versions of standards are recorded as separate entries, preserving the complete historical record
                  of all versions without modification to prior frozen records.
                </p>
              </div>
            </div>

            {/* Institutional Permanence */}
            <div className="space-y-4 rounded-sm border border-border bg-card p-8">
              <h2 className="text-2xl font-semibold">Institutional Permanence</h2>
              <div className="space-y-3 leading-relaxed text-muted-foreground">
                <p>
                  RuleMark is designed for long-term institutional stability. The structure, format, and access methods
                  for canonical records are maintained consistently to ensure continuous availability and usability.
                </p>
                <p>
                  The registry operates independently of trends, market conditions, or organizational changes, focusing
                  solely on the preservation and accessibility of frozen public records.
                </p>
              </div>
            </div>

            {/* Seal */}
            <div className="flex justify-center pt-8">
              <RulemarkSeal className="h-32 w-32" />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
