import Link from "next/link"

export function Header() {
  return (
    <header className="border-b border-border bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <span className="font-serif text-2xl font-bold tracking-tight text-foreground">
              RULEMARK
            </span>
          </Link>

          <nav className="hidden md:flex md:gap-8">
            <Link
              href="/standards"
              className="text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              Standards
            </Link>
            <Link
              href="/archive"
              className="text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              Archive
            </Link>
            <Link
              href="/verify"
              className="text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              Verify
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
