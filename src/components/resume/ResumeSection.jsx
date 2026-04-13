export default function ResumeSection({ title, children }) {
  return (
    <section className="mb-6">
      <h3 className="text-sm font-bold uppercase tracking-wide border-b border-black pb-0.5 mb-4">
        {title}
      </h3>
      {children}
    </section>
  );
}