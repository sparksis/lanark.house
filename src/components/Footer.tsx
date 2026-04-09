import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] mt-16">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-[var(--color-text-muted)]">
            &copy; {new Date().getFullYear()} lanark.house — Colton English
          </div>
          <div className="flex gap-6 text-sm">
            <Link
              href="/journey"
              className="text-[var(--color-text-muted)] hover:text-[var(--color-accent)]"
            >
              Journey
            </Link>
            <Link
              href="/builders"
              className="text-[var(--color-text-muted)] hover:text-[var(--color-accent)]"
            >
              Builders
            </Link>
            <Link
              href="/checklist"
              className="text-[var(--color-text-muted)] hover:text-[var(--color-accent)]"
            >
              Checklist
            </Link>
            <Link
              href="/contact"
              className="text-[var(--color-text-muted)] hover:text-[var(--color-accent)]"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
