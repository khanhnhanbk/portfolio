export default function Tag({ children }: { children: React.ReactNode }) {
  return (
    <li className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700">
      {children}
    </li>
  );
}
