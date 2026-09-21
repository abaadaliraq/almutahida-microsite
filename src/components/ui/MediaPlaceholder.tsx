type MediaPlaceholderProps = {
  label?: string;
  className?: string;
};

export function MediaPlaceholder({ label = "Media pending", className }: MediaPlaceholderProps) {
  return (
    <div
      className={[
        "grid min-h-40 place-items-center border border-white/10 bg-white/[0.03] text-sm text-white/55",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      role="img"
      aria-label={label}
    >
      <span>{label}</span>
    </div>
  );
}
