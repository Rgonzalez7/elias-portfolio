import { cn } from "./cn";

type Variant = "primary" | "outline" | "ghost";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  full?: boolean;
};

export default function Button({
  variant = "primary",
  full = false,
  className,
  ...props
}: Props) {
  const base =
    "inline-flex h-11 items-center justify-center rounded-full px-6 text-sm font-medium " +
    "transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-zinc-300 " +
    "dark:focus:ring-zinc-700";

  const variants: Record<Variant, string> = {
    primary:
      "bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200",
    outline:
      "border border-zinc-300 text-zinc-900 hover:bg-zinc-50 " +
      "dark:border-zinc-700 dark:text-white dark:hover:bg-zinc-900",
    ghost:
      "text-zinc-700 hover:bg-zinc-100 dark:text-zinc-200 dark:hover:bg-zinc-900",
  };

  return (
    <button
      className={cn(base, variants[variant], full && "w-full", className)}
      {...props}
    />
  );
}