export function SectionHeading({
  eyebrow,
  title,
  align = 'left',
}: {
  eyebrow: string;
  title: string;
  align?: 'left' | 'center';
}) {
  return (
    <div className={align === 'center' ? 'text-center' : ''}>
      <p className="text-sm font-bold uppercase tracking-[0.25em] text-[var(--primary-300)]">{eyebrow}</p>
      <h2 className="heading-font mt-4 text-3xl font-black uppercase leading-tight text-white sm:text-5xl">
        {title}
      </h2>
    </div>
  );
}
