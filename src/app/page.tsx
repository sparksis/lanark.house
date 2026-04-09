import Link from "next/link";

const stats = [
  { label: "Months", value: "18" },
  { label: "Builders", value: "3" },
  { label: "Collapsed Deals", value: "2" },
  { label: "Possession", value: "June 2, 2025" },
];

const insights = [
  {
    title: "Douglas Homes",
    rating: "1/5",
    status: "FAILED",
    statusColor: "#e85050",
    summary:
      "Deal collapsed over an 8-inch plot plan discrepancy and a refusal to provide a sample contract.",
    href: "/builders/douglas-homes",
  },
  {
    title: "Jayman Built",
    rating: "2/5",
    status: "TERMINATED",
    statusColor: "#e8b355",
    summary:
      "Builder terminated the contract rather than resolve a shower specification dispute.",
    href: "/builders/jayman-built",
  },
  {
    title: "Sterling Homes",
    rating: "4/5",
    status: "SUCCESS",
    statusColor: "#52c41a",
    summary:
      "Collaborative sales process led to successful possession at 728 Langley Terrace.",
    href: "/builders/sterling-homes",
  },
];

export default function HomePage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      {/* Hero */}
      <section className="text-center py-16">
        <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
          728 Langley Terrace SE
        </h1>
        <p className="text-lg text-[var(--color-text-muted)] mb-2">
          Airdrie, AB T4A 3R1
        </p>
        <p className="text-xl text-[var(--color-text-muted)] max-w-2xl mx-auto mt-6">
          Documenting 18 months of navigating new home builders in Alberta —
          three builders, two collapsed deals, and the lessons learned along the
          way.
        </p>
      </section>

      {/* Stats bar */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 py-8">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-[var(--color-surface-card)] border border-[var(--color-border)] rounded-lg p-4 text-center"
          >
            <div className="text-2xl font-bold text-[var(--color-accent)]">
              {stat.value}
            </div>
            <div className="text-sm text-[var(--color-text-muted)] mt-1">
              {stat.label}
            </div>
          </div>
        ))}
      </section>

      {/* Insight cards */}
      <section className="py-8">
        <h2 className="font-display text-2xl font-bold mb-6">
          Builder Insights
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {insights.map((insight) => (
            <Link
              key={insight.title}
              href={insight.href}
              className="block bg-[var(--color-surface-card)] border border-[var(--color-border)] rounded-lg p-6 hover:border-[var(--color-accent)] transition-colors"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-display text-lg font-semibold">
                  {insight.title}
                </h3>
                <span
                  className="text-xs font-mono px-2 py-1 rounded"
                  style={{
                    color: insight.statusColor,
                    backgroundColor: `${insight.statusColor}20`,
                  }}
                >
                  {insight.status}
                </span>
              </div>
              <div className="text-[var(--color-accent)] mb-2">
                {insight.rating}
              </div>
              <p className="text-sm text-[var(--color-text-muted)]">
                {insight.summary}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 text-center">
        <h2 className="font-display text-2xl font-bold mb-4">
          Explore the Full Story
        </h2>
        <p className="text-[var(--color-text-muted)] mb-8 max-w-xl mx-auto">
          From the first open house to possession day — read the complete
          timeline and detailed builder reviews.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            href="/journey"
            className="px-6 py-3 bg-[var(--color-accent)] text-[var(--color-bg)] rounded-lg font-medium hover:bg-[var(--color-accent-light)] transition-colors"
          >
            View Timeline
          </Link>
          <Link
            href="/builders"
            className="px-6 py-3 border border-[var(--color-accent)] text-[var(--color-accent)] rounded-lg font-medium hover:bg-[var(--color-accent)]/10 transition-colors"
          >
            Compare Builders
          </Link>
        </div>
      </section>
    </div>
  );
}
