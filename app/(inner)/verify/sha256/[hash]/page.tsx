import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"

// Mock data - in production this would look up by hash
const hashToRecord: Record<string, any> = {
  "d6a8b2f9b590fef734ab46eb0a40690db74f191664249.1b43649380a04f1af1d": {
    id: "DAO-001",
    title: "Compliant DAO Framework",
    version: "1.0",
    publicationDate: "2024-04-24T12:00:00Z",
    hash: "d6a8b2f9b590fef734ab46eb0a40690db74f191664249.1b43649380a04f1af1d",
    canonicalUrl: "https://rulemark.org/standards/compliant-dao-framework",
    blockHeight: "1920485",
    signer: "RuleMark Governance Key",
  },
}

export default async function VerifyHashResultPage({
  params,
}: {
  params: Promise<{ hash: string }>
}) {
  const { hash } = await params
  const record = hashToRecord[hash]

  const isFound = !!record

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />

      <main className="flex-1">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="mb-12">
            <Link href="/verify" className="font-mono text-sm hover:underline">
              ← Return to Verify
            </Link>
          </div>

          <div className="mb-12 bg-black px-8 py-6 text-center">
            <div className="font-mono text-xl font-bold uppercase tracking-widest text-white">
              [ {isFound ? "VERIFIED" : "NOT FOUND"} ]
            </div>
          </div>

          {isFound && (
            <div className="mb-12 text-center">
              <div className="mb-4 font-mono text-5xl font-bold tracking-tight sm:text-6xl">{record.id}</div>
              <div className="font-serif text-2xl font-bold">{record.title}</div>
            </div>
          )}

          {isFound && (
            <div className="mb-12 border border-black">
              <table className="w-full">
                <tbody>
                  <tr className="border-b border-black">
                    <td className="w-1/3 border-r border-black px-4 py-3 font-serif font-bold">Cryptographic Hash</td>
                    <td className="px-4 py-3 font-mono text-sm break-all">{record.hash}</td>
                  </tr>
                  <tr className="border-b border-black">
                    <td className="w-1/3 border-r border-black px-4 py-3 font-serif font-bold">Timestamp</td>
                    <td className="px-4 py-3 font-mono text-sm">{record.publicationDate}</td>
                  </tr>
                  <tr className="border-b border-black">
                    <td className="w-1/3 border-r border-black px-4 py-3 font-serif font-bold">Block Height</td>
                    <td className="px-4 py-3 font-mono text-sm">{record.blockHeight}</td>
                  </tr>
                  <tr>
                    <td className="w-1/3 border-r border-black px-4 py-3 font-serif font-bold">Signer</td>
                    <td className="px-4 py-3 font-mono text-sm">{record.signer}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}

          {isFound && (
            <div className="mb-12 text-center">
              <a
                href={`/api/export/pdf?id=${record.id}`}
                download
                className="font-mono text-xs text-black no-underline opacity-60 hover:opacity-100 hover:underline print:hidden"
              >
                [ Export Canonical Record (PDF) ]
              </a>
            </div>
          )}

          <div className="text-center">
            <p className="font-mono text-xs uppercase tracking-wide text-neutral-500">
              RuleMark Canonical Record. Immutable.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
