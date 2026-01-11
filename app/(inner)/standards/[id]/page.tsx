import { CanonicalCertificate } from "@/components/canonical-certificate"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { getStandardById } from "@/lib/standards-data"

export default async function StandardDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const standard = getStandardById(id)

  if (id.toLowerCase() === "dao-001" && standard) {
    return (
      <div className="flex min-h-screen flex-col bg-white text-black selection:bg-black selection:text-white">
        <Header />

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
                  <dt className="font-mono text-xs font-bold uppercase tracking-widest opacity-60">Status</dt>
                  <dd className="font-mono text-sm font-bold">CANONICAL · FROZEN</dd>
                </div>
                <div className="flex flex-col justify-between gap-2 sm:flex-row">
                  <dt className="font-mono text-xs font-bold uppercase tracking-widest opacity-60">Hash</dt>
                  <dd className="font-mono text-sm font-bold break-all">{standard.hash}</dd>
                </div>
              </dl>
            </section>

            <section className="mb-12 border-t border-black pt-8">
              <h2 className="mb-6 font-serif text-xl font-bold">Canonical Description</h2>
              <p className="font-serif text-lg leading-relaxed text-gray-800">{standard.excerpt}</p>
            </section>

            <div className="border-t border-black pt-10">
              <a
                href="/downloads/dao-001.pdf"
                download="RuleMark_DAO-001_Canonical_Record_v1.0.pdf"
                className="block w-full"
              >
                <Button
                  size="lg"
                  className="w-full rounded-none border-2 border-black bg-black font-mono text-sm font-bold uppercase tracking-widest text-white hover:bg-black/90"
                >
                  DOWNLOAD CANONICAL PDF
                </Button>
              </a>
            </div>
          </div>
        </main>

        <Footer />
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
