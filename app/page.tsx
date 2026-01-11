import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { RulemarkSeal } from "@/components/rulemark-seal"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="border-b border-border bg-white py-20">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <h1 className="mb-4 font-serif text-5xl font-bold tracking-tight text-foreground sm:text-6xl">RULEMARK</h1>
            <p className="mb-8 text-xl font-medium tracking-wider text-foreground">
              CANONICAL · IMMUTABLE · PUBLIC RECORD
            </p>
            <p className="mx-auto mb-12 max-w-2xl text-base leading-relaxed text-muted-foreground">
              A canonical registry for frozen standards and public records.
            </p>

            {/* Search bar stays in hero as primary action */}
            <div className="relative mx-auto max-w-3xl">
              <input
                type="text"
                placeholder="Enter Standard ID, Hash, or Keyword"
                className="h-14 w-full border-2 border-black bg-white pl-5 pr-4 text-base focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
          </div>
        </section>

        {/* Authority Statement Section */}
        <section className="border-b border-border bg-white py-20">
          <div className="mx-auto max-w-[640px] px-4 sm:px-6 lg:px-8">
            <h2 className="mb-8 font-serif text-2xl font-semibold text-foreground">RuleMark Authority Statement</h2>
            <p className="text-base leading-relaxed text-foreground" style={{ lineHeight: "1.75" }}>
              RuleMark is a non-discretionary, non-negotiable, outcome-neutral authority for rule-based determination
              and canonical recordkeeping. All determinations are produced strictly by applying published RuleSets to
              submitted materials.
            </p>
          </div>
        </section>

        {/* Navigation Cards */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 md:grid-cols-3">
              <Card className="flex h-full flex-col border-2">
                <CardHeader className="flex-1">
                  <CardTitle className="mb-2 font-serif text-xl font-semibold">Standards</CardTitle>
                  <CardDescription className="leading-relaxed">
                    Canonical governance and compliance standards.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link href="/standards">
                    <Button variant="outline" className="w-full border-2 bg-white">
                      View Standards
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="flex h-full flex-col border-2">
                <CardHeader className="flex-1">
                  <CardTitle className="mb-2 font-serif text-xl font-semibold">Archive</CardTitle>
                  <CardDescription className="leading-relaxed">
                    Frozen public records and historical versions.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link href="/archive">
                    <Button variant="outline" className="w-full border-2 bg-white">
                      View Archive
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="flex h-full flex-col border-2">
                <CardHeader className="flex-1">
                  <CardTitle className="mb-2 font-serif text-xl font-semibold">Verify</CardTitle>
                  <CardDescription className="leading-relaxed">
                    Verify a record by ID or cryptographic hash.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link href="/verify">
                    <Button variant="outline" className="w-full border-2 bg-white">
                      Verify Record
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Latest Record Section */}
        <section className="border-t border-border bg-muted/10 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-8 font-serif text-2xl font-semibold">Latest Canonical Record</h2>

            <Card className="border-2">
              <CardHeader className="flex flex-row items-start justify-between space-y-0">
                <div className="flex-1 space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-sm font-medium text-muted-foreground">DAO-001</span>
                    <span className="inline-flex items-center border border-border bg-card px-3 py-1 font-mono text-xs font-medium">
                      Canonical · Frozen
                    </span>
                  </div>
                  <CardTitle className="font-serif text-2xl font-semibold">Compliant DAO Framework</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    Defines non-discretionary governance boundaries for decentralized organizations.
                  </CardDescription>
                </div>
                <RulemarkSeal className="hidden h-20 w-20 md:block" />
              </CardHeader>
              <CardContent>
                <div className="flex gap-3">
                  <Link href="/standards/dao-001">
                    <Button className="border-2">View Standard</Button>
                  </Link>
                  <a href="/downloads/dao-001.pdf" download="RuleMark_DAO-001_Canonical_Record_v1.0.pdf">
                    <Button variant="outline" className="border-2 bg-white">
                      Download PDF
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Core Positioning / What We Do Section */}
        <section className="border-t border-border bg-white py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 md:grid-cols-2 md:gap-0 md:divide-x md:divide-black">
              <div className="md:pr-16">
                <h2 className="mb-6 font-serif text-xl font-semibold text-foreground">Core Positioning</h2>
                <ul className="space-y-4 text-base leading-relaxed text-foreground">
                  <li className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 bg-foreground" />
                    <span>Rule-based governance and compliance determination</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 bg-foreground" />
                    <span>Canonical public recordkeeping</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 bg-foreground" />
                    <span>Non-discretionary, non-advisory authority</span>
                  </li>
                </ul>
              </div>

              <div className="md:pl-16">
                <h2 className="mb-6 font-serif text-xl font-semibold text-foreground">What We Do</h2>
                <ul className="space-y-4 text-base leading-relaxed text-foreground">
                  <li className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 bg-foreground" />
                    <span>Rule Determination — Pass / Fail decisions under published RuleSets</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 bg-foreground" />
                    <span>Precedent Freeze — Published records are immutable and irrevocable</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 bg-foreground" />
                    <span>Canonical Reference — Reusable, citable public determinations</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Determination Principles Section */}
        <section className="border-t border-border bg-white py-20">
          <div className="mx-auto max-w-[640px] px-4 sm:px-6 lg:px-8">
            <div className="mb-10 border-t border-black" />
            <h2 className="mb-8 font-serif text-2xl font-semibold text-foreground">Determination Principles</h2>
            <ul className="space-y-4 text-base leading-relaxed text-foreground">
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 bg-foreground" />
                <span>Rules precede discretion</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 bg-foreground" />
                <span>Structure precedes narrative</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 bg-foreground" />
                <span>Record precedes explanation</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 bg-foreground" />
                <span>Consistency outweighs efficiency</span>
              </li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
