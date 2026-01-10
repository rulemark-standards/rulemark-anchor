"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { getStandardById, getStandardByHash } from "@/lib/standards-data"

export default function VerifyPage() {
  const [inputValue, setInputValue] = useState("")
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    const input = inputValue.trim()
    if (!input) {
      return
    }

    // Check if input is a SHA-256 hash (64 hex characters)
    const isSHA256 = /^[a-fA-F0-9]{64}$/.test(input)

    if (isSHA256) {
      // Resolve hash to standard
      const standard = getStandardByHash(input)
      if (standard) {
        // Redirect directly to canonical certificate
        router.push(`/standards/${standard.id.toLowerCase()}`)
      } else {
        setError("[ RECORD NOT FOUND ]")
      }
    } else {
      // Treat as Standard ID
      const standard = getStandardById(input)
      if (standard) {
        // Redirect directly to canonical certificate
        router.push(`/standards/${standard.id.toLowerCase()}`)
      } else {
        setError("[ RECORD NOT FOUND ]")
      }
    }
  }

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />

      <main className="flex-1">
        {/* Page Header */}
        <section className="border-b border-black bg-white py-12">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <h1 className="mb-3 font-serif text-4xl font-bold tracking-tight">Verify</h1>
            <p className="text-base text-neutral-600">
              Institutional verification interface for canonical public records.
            </p>
          </div>
        </section>

        {/* Verification Form */}
        <section className="bg-white py-16 max-sm:px-4 max-sm:py-6">
          <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
            <form onSubmit={handleVerify} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="verify-input" className="block text-base font-medium text-black">
                  Standard ID or Cryptographic Hash
                </label>
                <input
                  id="verify-input"
                  type="text"
                  placeholder="INPUT: Standard ID or SHA-256 Hash"
                  value={inputValue}
                  onChange={(e) => {
                    setInputValue(e.target.value)
                    setError(null)
                  }}
                  className="h-14 w-full border-2 border-black bg-white px-4 font-mono text-sm focus:border-black focus:outline-none focus:ring-0"
                  style={{ backgroundColor: "#ffffff" }}
                />
              </div>

              {error && (
                <div className="text-center">
                  <span className="font-mono text-sm text-black">{error}</span>
                </div>
              )}

              <Button
                type="submit"
                size="lg"
                className="w-full rounded-none border-2 border-black bg-black text-white hover:bg-black/90"
              >
                ISSUE VERDICT
              </Button>
            </form>

            <div className="mt-8 border-2 border-black bg-white p-6">
              <p className="text-sm leading-relaxed text-neutral-600">
                <strong className="font-semibold text-black">Disclaimer:</strong> Verification resolves to canonical
                public record only. RuleMark does not issue opinions or provide advisory services.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
