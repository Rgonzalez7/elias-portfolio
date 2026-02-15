import { cn } from "./cn";

type Props = {
  label: string;
  value: string;
  hint?: string;
  className?: string;
};

export default function Stat({ label, value, hint, className }: Props) {
  return (
    <div className={cn("rounded-2xl border border-zinc-200 p-5 dark:border-zinc-800", className)}>
      <div className="text-xs font-medium text-zinc-500 dark:text-zinc-400">{label}</div>
      <div className="mt-2 text-2xl font-semibold tracking-tight">{value}</div>
      {hint ? <div className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">{hint}</div> : null}
    </div>
  );
}