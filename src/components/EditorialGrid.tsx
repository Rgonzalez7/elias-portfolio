"use client";

type EditorialGridProps = {
  enabled?: boolean;
};

export default function EditorialGrid({ enabled = false }: EditorialGridProps) {
  if (!enabled) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[60] opacity-[0.07] mix-blend-multiply dark:mix-blend-screen"
    >
      {/* vertical columns */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "repeating-linear-gradient(to right, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 1px, rgba(0,0,0,0) 1px, rgba(0,0,0,0) 64px)",
        }}
      />

      {/* horizontal baseline grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "repeating-linear-gradient(to bottom, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 1px, rgba(0,0,0,0) 1px, rgba(0,0,0,0) 24px)",
        }}
      />
    </div>
  );
}