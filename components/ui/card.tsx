export function Card({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`rounded-[2rem] border border-white/10 bg-white/5 ${className}`}>{children}</div>;
}
