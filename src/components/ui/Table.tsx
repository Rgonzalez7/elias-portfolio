import { cn } from "./cn";

type Props = {
  columns: string[];
  rows: Array<Array<React.ReactNode>>;
  className?: string;
};

export default function Table({ columns, rows, className }: Props) {
  return (
    <div className={cn("overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800", className)}>
      <table className="w-full text-left text-sm">
        <thead className="bg-zinc-50 text-zinc-600 dark:bg-zinc-900 dark:text-zinc-300">
          <tr>
            {columns.map((c) => (
              <th key={c} className="px-4 py-3 font-medium">{c}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr
              key={i}
              className="border-t border-zinc-200/70 dark:border-zinc-800/70"
            >
              {r.map((cell, j) => (
                <td key={j} className="px-4 py-3 text-zinc-700 dark:text-zinc-200">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}