import Link from "next/link"

interface CertificateData {
  id: string
  title: string
  status: string
  hash: string
  timestamp: string
  blockHeight: string
  signer: string
  excerpt?: string
}

interface CanonicalCertificateProps {
  data: CertificateData | null
  returnPath?: string
  returnLabel?: string
}

export function CanonicalCertificate({
  data,
  returnPath = "/standards",
  returnLabel = "← Return to Registry",
}: CanonicalCertificateProps) {
  const isFound = !!data && data.status !== "NOT FOUND"

  return (
    <div className="flex min-h-screen flex-col bg-white text-black">
      {/* HEADER */}
      <header className="border-b border-black">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
          <Link href="/" className="font-serif text-xl font-bold tracking-wide">
            RULEMARK
          </Link>
          <Link
            href={returnPath}
            className="font-mono text-sm no-underline hover:underline"
            style={{ textDecoration: "none" }}
          >
            {returnLabel}
          </Link>
        </div>
      </header>

      {/* MAIN */}
      <main className="flex-1">
        <div className="mx-auto max-w-4xl px-6 py-12">
          {/* VERDICT BLOCK */}
          <div className="mb-16 mt-8 bg-black px-8 py-8 text-center" style={{ borderRadius: 0, borderColor: "#000" }}>
            <span
              className="font-mono text-2xl font-bold uppercase text-white sm:text-3xl"
              style={{ borderRadius: 0, letterSpacing: "0.15em" }}
            >
              [ {isFound ? "VERIFIED" : "NOT FOUND"} ]
            </span>
          </div>

          {/* IDENTITY BLOCK */}
          <div className="mb-20 text-center">
            <p className="mb-8 font-mono text-3xl font-bold tracking-wider sm:text-4xl" style={{ borderRadius: 0 }}>
              {data?.id || "UNKNOWN"}
            </p>
            <h1 className="font-serif text-3xl font-bold leading-tight sm:text-5xl" style={{ borderRadius: 0 }}>
              {data?.title || "Record Not Found"}
            </h1>
          </div>

          {/* EVIDENCE TABLE */}
          {isFound && data && (
            <div className="mb-16" style={{ borderRadius: 0, border: "1px solid #000" }}>
              <table className="w-full" style={{ borderRadius: 0 }}>
                <tbody>
                  <tr style={{ borderBottom: "1px solid #000" }}>
                    <td
                      className="w-1/3 px-6 py-5 text-left font-serif align-top sm:px-8"
                      style={{ borderRadius: 0, borderRight: "1px solid #000" }}
                    >
                      Cryptographic Hash
                    </td>
                    <td
                      className="px-6 py-5 text-right font-mono text-sm break-all align-top sm:px-8"
                      style={{ borderRadius: 0 }}
                    >
                      {data.hash}
                    </td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid #000" }}>
                    <td
                      className="w-1/3 px-6 py-5 text-left font-serif align-top sm:px-8"
                      style={{ borderRadius: 0, borderRight: "1px solid #000" }}
                    >
                      Timestamp
                    </td>
                    <td className="px-6 py-5 text-right font-mono align-top sm:px-8" style={{ borderRadius: 0 }}>
                      {data.timestamp}
                    </td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid #000" }}>
                    <td
                      className="w-1/3 px-6 py-5 text-left font-serif align-top sm:px-8"
                      style={{ borderRadius: 0, borderRight: "1px solid #000" }}
                    >
                      Block Height
                    </td>
                    <td className="px-6 py-5 text-right font-mono align-top sm:px-8" style={{ borderRadius: 0 }}>
                      {data.blockHeight}
                    </td>
                  </tr>
                  <tr>
                    <td
                      className="w-1/3 px-6 py-5 text-left font-serif align-top sm:px-8"
                      style={{ borderRadius: 0, borderRight: "1px solid #000" }}
                    >
                      Signer
                    </td>
                    <td className="px-6 py-5 text-right font-mono align-top sm:px-8" style={{ borderRadius: 0 }}>
                      {data.signer}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}

          {/* CANONICAL EXCERPT */}
          {isFound && data?.excerpt && (
            <div className="mb-16">
              <p className="font-serif text-lg leading-relaxed text-gray-800">{data.excerpt}</p>
            </div>
          )}

          {/* EXPORT LINK */}
          {isFound && data && (
            <div className="mb-16 text-center">
              <a
                href={`/api/export/pdf?id=${data.id}`}
                download
                className="font-mono text-xs text-black no-underline opacity-60 hover:opacity-100 hover:underline print:hidden"
                style={{ borderRadius: 0 }}
              >
                [ Export Canonical Record (PDF) ]
              </a>
            </div>
          )}
        </div>
      </main>

      {/* FOOTER */}
      <footer className="bg-white py-8 text-center" style={{ borderTop: "1px solid #000" }}>
        <p className="font-mono text-[10px] uppercase tracking-wider opacity-60">
          RuleMark Canonical Record · Immutable
        </p>
      </footer>
    </div>
  )
}
