import { cn } from "./cn";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function Container({ children, className }: Props) {
  return (
    <div className={cn("mx-auto w-full max-w-5xl px-5", className)}>
      {children}
    </div>
  );
}