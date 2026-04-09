export function BuilderRating({
  rating,
  max = 5,
}: {
  rating: number;
  max?: number;
}) {
  return (
    <div className="flex items-center gap-1" aria-label={`${rating} out of ${max} stars`}>
      {Array.from({ length: max }, (_, i) => (
        <span
          key={i}
          className={`text-xl ${i < rating ? "text-[var(--color-accent)]" : "text-[var(--color-text-muted)]/30"}`}
        >
          ★
        </span>
      ))}
      <span className="ml-2 text-sm text-[var(--color-text-muted)]">
        {rating}/{max}
      </span>
    </div>
  );
}
