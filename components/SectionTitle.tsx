export default function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
      {children}
      <span className="mt-3 block h-1 w-12 rounded-full bg-blue-600" aria-hidden="true" />
    </h2>
  );
}
