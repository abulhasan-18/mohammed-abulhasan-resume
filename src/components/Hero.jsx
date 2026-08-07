import Image from "next/image";

export default function Hero({
  name = "Mohammed Abulhasan M",
  title = "Software Engineer",
  tagline = "Software & Flutter Developer | Dart | Java | Spring Boot | Rest API | Database | SQL | Docker | Kubernetes | Supabase | Power BI & Python",
  phone = "+971 50 252 6797",
  email = "mdyahasan18@gmail.com",
  linkedin = "linkedin.com/in/mohammed-abulhasan-256767235",
  portfolio = "abulhasan-portfolio.vercel.app",
  github = "github.com/abulhasan-18",
  variant = "experience",
}) {
  const contactLine = `Phone: ${phone} | Email: ${email}`;
  const linkLine = `LinkedIn: ${linkedin}`;
  const portfolioLine = `Portfolio: ${portfolio} | GitHub: ${github}`;

  const taglineContent = tagline
    ? tagline.split("\n").map((line, index) => (
        <span key={`${line}-${index}`}>
          {line}
          {index < tagline.split("\n").length - 1 ? <br /> : null}
        </span>
      ))
    : null;

  return (
    <header className="grid grid-cols-[1fr_auto] items-center gap-4 mb-5 pb-4">
      <div className="min-w-0">
        <h1 className="text-2xl font-bold uppercase mb-0.5">{name}</h1>
        <h2 className="text-base font-normal mb-0.5">{title}</h2>
        {taglineContent ? (
          <div className="text-[11px] mb-2.5">{taglineContent}</div>
        ) : null}
        <div className="text-[11px] leading-tight text-gray-900">
          {contactLine}
          <br />
          {linkLine}
          <br />
          {portfolioLine}
        </div>
      </div>
      <div className="w-[140px] h-[140px] rounded-full overflow-hidden border border-gray-300 flex-shrink-0">
        <Image
          src="/profile.png"
          alt={`Profile photo of ${name}`}
          width={140}
          height={140}
          className="w-full h-full object-cover object-top block"
        />
      </div>
    </header>
  );
}
