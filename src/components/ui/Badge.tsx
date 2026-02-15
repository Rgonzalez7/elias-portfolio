import { cn } from "./cn";

type Props = {
  children: React.ReactNode;
  variant?: "neutral" | "success";
  className?: string;
};

export default function Badge({ children, variant = "neutral", className }: Props) {
  const styles =
    variant === "success"
      ? "border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-900/40 dark:bg-emerald-950/40 dark:text-emerald-400"
      : "border-zinc-200 bg-zinc-50 text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200";

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium transition-colors duration-300",
        styles,
        className
      )}
    >
      {children}
    </span>
  );
}