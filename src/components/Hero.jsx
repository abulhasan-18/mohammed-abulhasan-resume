export default function Hero({
  name,
  title,
  tagline,
  phone,
  email,
  linkedin,
  portfolio,
  github,
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

  if (variant === "fresher") {
    return (
      <header className="grid grid-cols-[1fr_auto] items-center gap-4 mb-5 pb-4">
        <div className="min-w-0">
          <h1 className="text-2xl font-bold uppercase mb-1">{name}</h1>
          <h2 className="text-base font-normal mb-2.5">{title}</h2>
          <div className="text-[11px] leading-tight text-gray-900">
            {contactLine}
            <br />
            {linkLine}
            <br />
            {portfolioLine}
          </div>
        </div>
        <div className="w-[110px] h-[140px] rounded-lg overflow-hidden border border-gray-300 flex-shrink-0">
          <img
            src="/profile.png"
            alt={`Profile photo of ${name}`}
            className="w-full h-full object-cover block"
          />
        </div>
      </header>
    );
  }

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
        <img
          src="/profile.png"
          alt={`Profile photo of ${name}`}
          className="w-full h-full object-cover object-top block"
        />
      </div>
    </header>
  );
}
