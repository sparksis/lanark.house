export function Callout({
  type = "info",
  children,
}: {
  type?: "info" | "warning" | "success" | "danger";
  children: React.ReactNode;
}) {
  const styles: Record<string, string> = {
    info: "border-[var(--color-accent)] bg-[var(--color-accent)]/10",
    warning: "border-[#e8b355] bg-[#e8b355]/10",
    success: "border-[#52c41a] bg-[#52c41a]/10",
    danger: "border-[#e85050] bg-[#e85050]/10",
  };

  return (
    <div className={`border-l-4 p-4 my-4 rounded-r ${styles[type]}`}>
      {children}
    </div>
  );
}
