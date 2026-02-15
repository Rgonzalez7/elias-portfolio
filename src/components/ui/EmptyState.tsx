import { cn } from "./cn";

type Props = {
  title: string;
  description?: string;
  action?: React.ReactNode;
  className?: string;
};

export default function EmptyState({ title, description, action, className }: Props) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-zinc-200 p-10 text-center dark:border-zinc-800",
        className
      )}
    >
      <div className="text-base font-semibold tracking-tight">{title}</div>
      {description ? (
        <p className="mx-auto mt-2 max-w-md text-sm text-zinc-600 dark:text-zinc-300">
          {description}
        </p>
      ) : null}
      {action ? <div className="mt-5 flex justify-center">{action}</div> : null}
    </div>
  );
}