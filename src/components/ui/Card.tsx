import { cn } from "./cn";

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-zinc-200 bg-white p-6 shadow-[0_1px_0_rgba(0,0,0,0.03)]",
        "dark:border-zinc-800 dark:bg-zinc-950",
        "transition-colors duration-300",
        className
      )}
    >
      {children}
    </div>
  );
}

export function CardHeader({ children, className }: CardProps) {
  return <div className={cn("mb-4 flex items-start justify-between gap-3", className)}>{children}</div>;
}

export function CardTitle({ children, className }: CardProps) {
  return <h3 className={cn("text-sm font-semibold tracking-tight", className)}>{children}</h3>;
}

export function CardDescription({ children, className }: CardProps) {
  return <p className={cn("mt-1 text-sm text-zinc-600 dark:text-zinc-300", className)}>{children}</p>;
}

export function CardFooter({ children, className }: CardProps) {
  return <div className={cn("mt-5 flex items-center justify-between gap-3", className)}>{children}</div>;
}