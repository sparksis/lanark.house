import Link from "next/link";
export const dynamic = "force-static";
export const revalidate = false;
import { getAllBuilders } from "@/lib/builders";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Builder Reviews",
  description:
    "Compare Calgary home builders: Douglas Homes, Jayman Built, and Sterling Homes. Honest ratings and detailed reviews.",
};

const statusLabels: Record<string, { label: string; color: string }> = {
  failed: { label: "FAILED", color: "#e85050" },
  terminated: { label: "TERMINATED", color: "#e8b355" },
  success: { label: "SUCCESS", color: "#34d399" },
};

export default async function BuildersPage() {
  const builders = await getAllBuilders();

  // Sort: success first, then terminated, then failed
  const order = { success: 0, terminated: 1, failed: 2 };
  builders.sort(
    (a, b) => (order[a.meta.status] ?? 3) - (order[b.meta.status] ?? 3)
  );

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="font-display text-3xl font-bold mb-2">Builder Reviews</h1>
      <p className="text-[var(--color-text-muted)] mb-8">
        Three builders, two collapsed deals, one successful home purchase.
        Here&apos;s how each one stacked up.
      </p>

      <div className="flex flex-col gap-6">
        {builders.map(({ meta }) => {
          const status = statusLabels[meta.status];
          return (
            <Link
              key={meta.slug}
              href={`/builders/${meta.slug}`}
              className="block bg-[var(--color-surface-card)] border border-[var(--color-border)] rounded-lg p-6 hover:border-[var(--color-accent)] transition-colors"
            >
              <div className="flex items-center justify-between mb-3">
                <h2 className="font-display text-lg font-semibold">
                  {meta.title.replace(" Review", "")}
                </h2>
                <span
                  className="text-xs font-mono px-2 py-1 rounded"
                  style={{
                    color: status.color,
                    backgroundColor: `${status.color}20`,
                  }}
                >
                  {status.label}
                </span>
              </div>

              {/* Stars */}
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: 5 }, (_, i) => (
                  <span
                    key={i}
                    className={`text-lg ${i < meta.rating ? "text-[var(--color-accent)]" : "text-[var(--color-text-muted)]/30"}`}
                  >
                    ★
                  </span>
                ))}
                <span className="ml-2 text-sm text-[var(--color-text-muted)]">
                  {meta.rating}/5
                </span>
              </div>

              <p className="text-sm text-[var(--color-text-muted)] mb-3">
                {meta.address.city}, {meta.address.province}
              </p>

              <div className="text-sm">
                <span className="text-[#34d399]">+{meta.pros.length} pros</span>
                <span className="mx-2 text-[var(--color-border)]">/</span>
                <span className="text-[#e85050]">-{meta.cons.length} cons</span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
