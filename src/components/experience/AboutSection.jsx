export default function AboutSection() {
  return (
    <section className="grid grid-cols-[2fr_1fr] gap-8 mb-6 max-[760px]:grid-cols-1">

      {/* LEFT - ABOUT */}
      <div>
        <h3 className="text-sm font-bold uppercase tracking-wide border-b border-black pb-0.5 mb-3">
          About
        </h3>

        <p className="text-[12px] leading-relaxed text-gray-900 text-left">
          Experienced Software Engineer with 2+ years of hands-on experience in mobile and web application development.
          Proficient in Flutter, React.js, Node.js, and full-stack development with a strong background in scalable
          architectures, API integration, database design, and agile delivery. Proven track record of shipping
          production systems such as Tamil Calendars 365, a real-time online compiler platform, and a cost-efficient
          audio streaming app for a non-profit community. Strong problem-solving skills with the ability to debug complex
          issues and optimize application performance for better scalability and user experience. Experienced in working
          with modern development workflows including Git, CI/CD pipelines, and collaborative agile environments.
        </p>
      </div>

      {/* RIGHT - SKILLS */}
      <div className="flex flex-col justify-start">
        <h3 className="text-sm font-bold uppercase tracking-wide border-b border-black pb-0.5 mb-3">
          Tools & Skills
        </h3>

        <ul className="text-[12px] leading-relaxed text-gray-900 space-y-1">
          <li>Flutter & Dart</li>
          <li>React.js & Next.js</li>
          <li>Node.js & Spring Boot</li>
          <li>REST API Development</li>
          <li>SQL & Database Design</li>
          <li>Docker & Kubernetes</li>
          <li>Supabase</li>
          <li>Power BI & Python</li>
        </ul>
      </div>

    </section>
  );
}