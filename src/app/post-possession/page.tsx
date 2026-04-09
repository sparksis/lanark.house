import { getOutstandingTasks, type NotionTask } from "@/lib/notion";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Post-Possession Tracker",
  description:
    "Outstanding builder activities and warranty items for 728 Langley Terrace SE.",
};

const statusColors: Record<string, string> = {
  "Not started": "#888",
  "Needs follow up": "#e8b355",
  "In Dispute": "#e85050",
  "In progress": "#4ea8de",
  "In review / documentation": "#a78bfa",
  Done: "#52c41a",
};

const statusOrder: Record<string, number> = {
  "In Dispute": 0,
  "Needs follow up": 1,
  "In progress": 2,
  "In review / documentation": 3,
  "Not started": 4,
  Done: 5,
};

export default async function PostPossessionPage() {
  const tasks = await getOutstandingTasks();

  // Group by status
  const grouped: Record<string, NotionTask[]> = {};
  for (const task of tasks) {
    if (!grouped[task.status]) grouped[task.status] = [];
    grouped[task.status].push(task);
  }

  const sortedStatuses = Object.keys(grouped).sort(
    (a, b) => (statusOrder[a] ?? 99) - (statusOrder[b] ?? 99)
  );

  const openCount = tasks.filter((t) => t.status !== "Done").length;
  const doneCount = tasks.filter((t) => t.status === "Done").length;

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="font-display text-3xl font-bold mb-2">
        Post-Possession Tracker
      </h1>
      <p className="text-[var(--color-text-muted)] mb-6">
        Outstanding builder activities for 728 Langley Terrace SE. This is a
        point-in-time snapshot from the last build.
      </p>

      {/* Summary */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="bg-[var(--color-surface-card)] border border-[var(--color-border)] rounded-lg p-4 text-center">
          <div className="text-2xl font-bold">{tasks.length}</div>
          <div className="text-sm text-[var(--color-text-muted)]">
            Total Items
          </div>
        </div>
        <div className="bg-[var(--color-surface-card)] border border-[var(--color-border)] rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-[#e8b355]">{openCount}</div>
          <div className="text-sm text-[var(--color-text-muted)]">Open</div>
        </div>
        <div className="bg-[var(--color-surface-card)] border border-[var(--color-border)] rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-[#52c41a]">{doneCount}</div>
          <div className="text-sm text-[var(--color-text-muted)]">Done</div>
        </div>
      </div>

      {/* Tasks by status */}
      <div className="space-y-8">
        {sortedStatuses.map((status) => (
          <section key={status}>
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: statusColors[status] || "#888" }}
              />
              <h2 className="font-display text-lg font-bold">{status}</h2>
              <span className="text-sm text-[var(--color-text-muted)]">
                ({grouped[status].length})
              </span>
            </div>
            <div className="space-y-2">
              {grouped[status].map((task) => (
                <div
                  key={task.id}
                  className="flex items-start justify-between gap-4 p-3 bg-[var(--color-surface-card)] border border-[var(--color-border)] rounded-lg"
                >
                  <div>
                    <div className="font-medium">{task.name}</div>
                    <div className="text-xs text-[var(--color-text-muted)] mt-1">
                      {task.category}
                    </div>
                  </div>
                  {task.date && (
                    <time className="text-sm text-[var(--color-text-muted)] whitespace-nowrap">
                      {new Date(task.date + "T00:00:00").toLocaleDateString("en-CA", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </time>
                  )}
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
