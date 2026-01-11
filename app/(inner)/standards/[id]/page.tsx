import { CanonicalCertificate } from "@/components/canonical-certificate"
import { getStandardById } from "@/lib/standards-data"
import Link from "next/link"

const dao001Principles = [
  "Rules precede discretion",
  "Structure precedes narrative",
  "Record precedes explanation",
  "Consistency outweighs efficiency",
]

export default async function StandardDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const standard = getStandardById(id)

  if (id.toLowerCase() === "dao-001" && standard) {
    return (
      <div className="flex min-h-screen flex-col bg-white text-black">
        <header className="border-b border-black">
          <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
            <Link href="/" className="font-serif text-xl font-bold tracking-wide">
              RULEMARK
            </Link>
            <nav className="flex items-center gap-6 font-mono text-xs font-bold uppercase tracking-widest">
              <Link
                href="/standards"
                className="no-underline hover:underline"
                style={{ textDecoration: "none" }}
              >
                Standards
              </Link>
            </nav>
          </div>
        </header>

        <main className="flex-1">
          <div className="mx-auto max-w-4xl px-6 py-12">
            <section className="mb-12">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="font-mono text-sm font-bold tracking-widest">{standard.id}</p>
                  <h1 className="mt-2 font-serif text-3xl font-bold leading-tight sm:text-5xl">{standard.title}</h1>
                </div>
                <span className="inline-flex items-center border-2 border-black bg-white px-4 py-2 font-mono text-xs font-bold uppercase tracking-widest">
                  CANONICAL · FROZEN
                </span>
              </div>
            </section>

            <section className="mb-12 border-t border-black pt-8">
              <h2 className="mb-6 font-serif text-xl font-bold">Metadata</h2>
              <dl className="space-y-3">
                <div className="flex flex-col justify-between gap-2 border-b border-neutral-200 pb-3 sm:flex-row">
                  <dt className="font-mono text-xs font-bold uppercase tracking-widest opacity-60">Document ID</dt>
                  <dd className="font-mono text-sm font-bold">{standard.id}</dd>
                </div>
                <div className="flex flex-col justify-between gap-2 border-b border-neutral-200 pb-3 sm:flex-row">
                  <dt className="font-mono text-xs font-bold uppercase tracking-widest opacity-60">Version</dt>
                  <dd className="font-mono text-sm font-bold">v1.0</dd>
                </div>
                <div className="flex flex-col justify-between gap-2 border-b border-neutral-200 pb-3 sm:flex-row">
                  <dt className="font-mono text-xs font-bold uppercase tracking-widest opacity-60">Status</dt>
                  <dd className="font-mono text-sm font-bold">CANONICAL · FROZEN</dd>
                </div>
                <div className="flex flex-col justify-between gap-2 border-b border-neutral-200 pb-3 sm:flex-row">
                  <dt className="font-mono text-xs font-bold uppercase tracking-widest opacity-60">Category</dt>
                  <dd className="font-mono text-sm font-bold">DAO</dd>
                </div>
                <div className="flex flex-col justify-between gap-2 border-b border-neutral-200 pb-3 sm:flex-row">
                  <dt className="font-mono text-xs font-bold uppercase tracking-widest opacity-60">Issued By</dt>
                  <dd className="font-mono text-sm font-bold">RuleMark</dd>
                </div>
                <div className="flex flex-col justify-between gap-2 border-b border-neutral-200 pb-3 sm:flex-row">
                  <dt className="font-mono text-xs font-bold uppercase tracking-widest opacity-60">
                    Cryptographic Hash
                  </dt>
                  <dd className="font-mono text-sm font-bold break-all">{standard.hash}</dd>
                </div>
                <div className="flex flex-col justify-between gap-2 border-b border-neutral-200 pb-3 sm:flex-row">
                  <dt className="font-mono text-xs font-bold uppercase tracking-widest opacity-60">Timestamp</dt>
                  <dd className="font-mono text-sm font-bold">{standard.timestamp}</dd>
                </div>
                <div className="flex flex-col justify-between gap-2 border-b border-neutral-200 pb-3 sm:flex-row">
                  <dt className="font-mono text-xs font-bold uppercase tracking-widest opacity-60">Block Height</dt>
                  <dd className="font-mono text-sm font-bold">{standard.blockHeight}</dd>
                </div>
                <div className="flex flex-col justify-between gap-2 sm:flex-row">
                  <dt className="font-mono text-xs font-bold uppercase tracking-widest opacity-60">Signer</dt>
                  <dd className="font-mono text-sm font-bold">{standard.signer}</dd>
                </div>
              </dl>
            </section>

            <section className="mb-12 border-t border-black pt-8">
              <h2 className="mb-6 font-serif text-xl font-bold">Abstract</h2>
              <p className="font-serif text-lg leading-relaxed text-gray-800">{standard.excerpt}</p>
            </section>

            <section className="mb-12 border-t border-black pt-8">
              <h2 className="mb-6 font-serif text-xl font-bold">Core Principles</h2>
              <ul className="space-y-3 font-serif text-base leading-relaxed text-black">
                {dao001Principles.map((principle) => (
                  <li key={principle}>{principle}</li>
                ))}
              </ul>
            </section>

            <section className="mb-12 border-t border-black pt-8">
              <h2 className="mb-4 font-serif text-xl font-bold">Immutability Notice</h2>
              <p className="font-mono text-sm font-bold uppercase tracking-widest">
                This record is CANONICAL and FROZEN
              </p>
            </section>

            <div className="border-t border-black pt-10">
              <a
                href="/downloads/dao-001.pdf"
                download="RuleMark_DAO-001_Canonical_Record_v1.0.pdf"
                className="block w-full"
              >
                <span
                  className="block w-full border-2 border-black bg-black px-6 py-4 text-center font-mono text-sm font-bold uppercase tracking-widest text-white hover:bg-black/90"
                >
                  [ DOWNLOAD CANONICAL PDF ]
                </span>
              </a>
            </div>
          </div>
        </main>

        <footer
          className="bg-white py-8 text-center"
          style={{ borderTop: "1px solid #000" }}
        >
          <p className="font-mono text-[10px] uppercase tracking-wider opacity-60">
            RuleMark Canonical Record · Immutable
          </p>
        </footer>
      </div>
    )
  }

  return (
    <CanonicalCertificate
      data={standard}
      returnPath="/standards"
      returnLabel="← Return to Registry"
    />
  )
}
