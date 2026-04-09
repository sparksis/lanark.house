export function TimelineItem({
  date,
  title,
  children,
}: {
  date: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="relative pl-8 pb-8 border-l-2 border-[var(--color-border)] last:border-l-0 last:pb-0">
      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[var(--color-accent)]" />
      <time className="text-sm text-[var(--color-text-muted)]">{date}</time>
      <h3 className="text-lg font-medium mt-1">{title}</h3>
      {children && (
        <div className="mt-2 text-[var(--color-text-muted)]">{children}</div>
      )}
    </div>
  );
}
