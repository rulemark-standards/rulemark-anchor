import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "RuleMark",
  description: "Canonical Immutable Public Record",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
