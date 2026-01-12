// app/(inner)/standards/[id]/RM_S_DAO_001.tsx

export default function RM_S_DAO_001() {
  return (
    <article className="max-w-4xl mx-auto bg-white shadow-xl border border-slate-200 p-8 sm:p-12 md:p-16 relative overflow-hidden">

      <div className="absolute top-0 left-0 w-full h-2 bg-slate-900"></div>

      {/* ================= HEADER ================= */}
      <header className="border-b-2 border-slate-900 pb-8 mb-10">
        <div className="flex flex-col md:flex-row justify-between items-start gap-6">
          <div>
            <div className="flex items-center gap-4 mb-3">
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
                RM-S-DAO-001
              </h1>
              <span className="px-3 py-1.5 text-xs font-bold tracking-widest uppercase text-white bg-slate-900">
                Frozen
              </span>
            </div>
            <h2 className="text-xl md:text-2xl text-slate-600 italic font-serif">
              Compliant DAO Framework
            </h2>
          </div>

          <a
            href="/verify/RM-S-DAO-001"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex flex-col items-end"
          >
            <div className="inline-flex items-center gap-2 text-emerald-800 bg-emerald-50 px-4 py-1.5 border border-emerald-100">
              <span className="text-xs font-bold uppercase tracking-wide">
                Registry Verified
              </span>
            </div>
            <div className="bg-slate-50 border border-slate-200 px-3 py-1.5 text-[10px] font-mono text-slate-500 text-right">
              <div>Verified: 2026-01-12 UTC</div>
              <div>RuleMark Registry</div>
              <div className="opacity-70">sha256:e3b0c4…b855</div>
            </div>
          </a>
        </div>
      </header>

      {/* ================= BODY ================= */}
      <main className="prose prose-slate max-w-none">
        <div className="bg-slate-50 p-6 border-l-4 border-slate-300">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500">
            Abstract
          </h3>
          <p className="font-serif">
            This document defines the canonical governance framework for
            Compliant Decentralized Autonomous Organizations (DAOs).
          </p>
        </div>

        <h2>Core Principles</h2>
        <ol>
          <li><strong>Rule Supremacy</strong></li>
          <li><strong>Structural Transparency</strong></li>
          <li><strong>Non-Discretionary Execution</strong></li>
          <li><strong>Upgrade Constraint</strong></li>
        </ol>

        <div className="mt-12 border-t pt-8 not-prose">
          <a
            href="https://records.rulemark.org/standards/RM-S-DAO-001.pdf"
            target="_blank"
            className="inline-block bg-slate-900 text-white px-6 py-3 text-xs font-bold uppercase tracking-widest"
          >
            Download Canonical File
          </a>

          <a
            href="https://records.rulemark.org/standards/RM-S-DAO-001.sig"
            target="_blank"
            className="ml-4 text-xs font-mono text-slate-500 underline"
          >
            .SIG
          </a>
        </div>
      </main>

      {/* ================= FOOTER ================= */}
      <footer className="mt-20 pt-10 border-t text-[10px] font-mono uppercase tracking-widest text-slate-400 flex justify-between">
        <span>RuleMark Architecture System</span>
        <span>RM-S-SPEC-001</span>
      </footer>

    </article>
  );
}
