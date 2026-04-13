import Hero from "@/components/Hero";

function Section({ title, children }) {
  return (
    <section className="mb-5">
      <h3 className="text-sm font-bold uppercase border-b border-black pb-0.5 mb-2.5">
        {title}
      </h3>
      {children}
    </section>
  );
}

function ProfessionalHighlightsSection() {
  return (
    <Section title="Professional Highlights">
      <p className="text-[12px] text-justify">
        Experienced Software Engineer with 2+ years of hands-on experience in mobile and web application development.
        Proficient in Flutter, React.js, Node.js, and full-stack development with a strong background in scalable
        architectures, API integration, database design, and agile delivery. Proven track record of shipping
        production systems such as Tamil Calendars 365, a real-time online compiler platform, and a cost-efficient
        audio streaming app for a non-profit community.
      </p>
    </Section>
  );
}

function Job({ title, company, dates, location, description, skills, achievements }) {
  return (
    <div className="mb-4 last:mb-0">
      <div className="mb-1">
        <div className="text-[13px] font-bold">{title}</div>
        <div className="text-[12px] font-bold my-0.5">{company}</div>
        <div className="flex justify-between text-[11px] italic my-0.5">
          <span>{dates}</span>
          <span>{location}</span>
        </div>
      </div>
      {description && (
        <div className="text-[11px] italic text-gray-700 mb-2">
          {description}
        </div>
      )}
      {achievements && (
        <div className="mt-1">
          <ul className="ml-4 list-disc text-[11px]">
            {achievements.map((item, i) => (
              <li key={i} className="mb-1 last:mb-0" dangerouslySetInnerHTML={{ __html: item }} />
            ))}
          </ul>
        </div>
      )}
      {skills && (
        <div className="mt-2 text-[10px]">
          <span className="font-bold">Key Skills:</span> {skills}
        </div>
      )}
    </div>
  );
}

function WorkExperienceSection() {
  return (
    <Section title="Work Experience">
      <div className="mb-4">
        <h4 className="text-sm font-bold uppercase mb-2">CLOUDPIXELS CONSULTANCY SERVICES</h4>
        <Job
          title="Associate Software Engineer"
          company="Jan 2024 – Mar 2026 (2 years 2 months)"
          dates="Remote"
          description="Developed comprehensive mobile and web applications serving thousands of users globally, driving digital transformation initiatives across multiple platforms. Contributed to cost optimization strategies, performance enhancements, and scalable solution architecture. Led cross-platform development projects while consistently exceeding performance targets and delivering innovative solutions ahead of schedule."
          skills="Flutter, React.js, Next.js, Node.js, Spring Boot, REST APIs, MongoDB, MySQL, Firebase, AWS, Docker, CI/CD, Git/GitHub, Agile/Scrum"
        />
        <Job
          title="Internship Trainee"
          company="Jun 2023 – Dec 2023 (6 months)"
          dates="Remote"
          description="Designed and developed foundational web infrastructure and content management systems for organizational digital presence. Contributed to process automation, API development, and cost reduction initiatives. Built responsive web solutions while gaining hands-on experience in full-stack development methodologies and agile project delivery."
          skills="HTML, CSS, JavaScript, Spring Boot, Supabase, REST APIs, Responsive Web Design, Git/GitHub, Agile/Scrum"
        />
      </div>

      <div className="mt-5 mb-2">
        <h4 className="text-sm font-bold uppercase border-b border-black pb-0.5 mb-2.5">PROJECTS</h4>
      </div>

      <Job
        title="Tamil Calendars 365 - Mobile & Web Platform"
        company="Technologies: Flutter, Next.js, Cloudflare"
        dates="Duration: 8 months (Aug 2025 – Mar 2026)"
        description="Spearheaded end-to-end digital transformation initiative, architecting and delivering a comprehensive calendar platform that revolutionized user engagement and eliminated traditional calendar management inefficiencies."
        achievements={[
          "<strong>Designed and executed a cross-platform digital solution</strong> serving <strong>50,000+ active users</strong> with 4.8/5 satisfaction rating, transforming how users access cultural calendar information",
          "<strong>Streamlined user experience across multiple touchpoints</strong> by developing web platform handling <strong>25,000+ monthly visitors</strong> with 98% uptime, eliminating manual calendar lookup processes",
          "<strong>Implemented advanced data integration systems</strong> supporting <strong>3 calendar formats</strong> (Tamil, Gregorian, Islamic) with real-time synchronization, removing format conversion complexities",
          "<strong>Drove performance optimization initiatives</strong> achieving <strong>40% faster load times</strong> and <strong>30% memory usage reduction</strong>, significantly improving operational efficiency",
          "<strong>Standardized responsive UI processes</strong> supporting dark/light modes across <strong>15+ device screen sizes</strong>, ensuring consistent user experience",
          "<strong>Automated content management workflows</strong> integrating <strong>500+ festival data points</strong> with daily updates, eliminating manual data entry and reducing errors"
        ]}
      />

      <Job
        title="Christian Community Audio Streaming App"
        company="Technologies: Flutter, Supabase, Google Drive API"
        dates="Duration: 19 months (Mar 2024 – Oct 2025)"
        description="Architected and delivered a cost-effective, scalable streaming solution that transformed how a non-profit community accesses audio content. Successfully reduced operational costs while maintaining enterprise-level reliability and user experience standards."
        achievements={[
          "Developed cross-platform app serving <strong>2,000+ community members</strong> with seamless audio streaming",
          "Implemented cost-effective streaming solution reducing infrastructure costs by <strong>85%</strong> using Google Drive storage",
          "Built OAuth-based authentication system supporting <strong>99.9% login success rate</strong>",
          "Created admin portal managing <strong>500+ audio content uploads</strong> with automated organization",
          "Architected scalable system handling <strong>10,000+ monthly streams</strong> with zero downtime",
          "Achieved <strong>95% user retention rate</strong> through optimized UX and performance"
        ]}
      />

      <Job
        title="Real-Time Online Compiler Platform"
        company="Technologies: Spring Boot, Next.js, WebSocket, Docker"
        dates="Duration: 6 months (Sep 2023 – Feb 2024)"
        description="Engineered a high-performance, real-time code execution platform supporting multiple programming languages. Designed scalable backend architecture with advanced containerization and CI/CD pipelines, delivering enterprise-grade performance and reliability."
        achievements={[
          "Architected backend system processing <strong>1,000+ code executions daily</strong> with real-time WebSocket communication",
          "Built compiler supporting <strong>8+ programming languages</strong> with interactive and batch execution modes",
          "Integrated CI/CD pipeline reducing deployment time by <strong>60%</strong> using Docker containerization",
          "Developed Next.js frontend with <strong>sub-second response times</strong> for code compilation results",
          "Implemented load balancing handling <strong>100+ concurrent users</strong> with 99.5% system availability",
          "Enhanced platform supporting <strong>15+ additional SDKs</strong> for extended language compatibility"
        ]}
      />

      <Job
        title="Company Portal & TNPSC Prime Website"
        company="Technologies: HTML, CSS, JavaScript, Spring Boot, Supabase"
        dates="Duration: 3 months (Jun 2023 – Aug 2023)"
        description="Delivered comprehensive web solutions with dynamic content management capabilities, demonstrating strong project management skills by completing deliverables ahead of schedule. Implemented strategic cost optimization measures that significantly reduced operational expenses."
        achievements={[
          "Designed and developed company portal handling <strong>5,000+ monthly visitors</strong> with responsive design",
          "Built dynamic content management system generating <strong>200+ HTML pages</strong> via REST APIs",
          "Implemented user feedback system collecting <strong>1,000+ responses</strong> improving user experience by <strong>40%</strong>",
          "Reduced hosting costs by <strong>70%</strong> through strategic OneDrive integration for PDF storage",
          "Created clean API architecture serving <strong>50+ endpoints</strong> with optimized performance",
          "Delivered projects <strong>2 weeks ahead of schedule</strong> while maintaining 100% functionality requirements",
          "Learned software engineering principles, version control, and collaborative development practices",
          "Worked on team projects using Agile methodologies and Scrum framework",
          "Gained hands-on experience with development tools, code review processes, and best practices",
          "Contributed to real-world projects under senior developer mentorship and guidance"
        ]}
        skills="Git/GitHub, Agile/Scrum, Code Review, Unit Testing, Documentation, Team Collaboration"
      />
    </Section>
  );
}

function EducationSection() {
  return (
    <Section title="Education">
      <div className="mb-2.5">
        <div className="text-[12px] font-bold">Master of Computer Applications (MCA)</div>
        <div className="text-[11px] my-0.5">Jain University (Online)</div>
        <div className="text-[10px] text-gray-800">Currently Pursuing | Expected Graduation: 2025</div>
        <div className="text-[10px] text-gray-800">Relevant Coursework: Advanced Software Engineering, Database Management, System Design, Data Structures</div>
      </div>
      <div>
        <div className="text-[12px] font-bold">Bachelor of Science in Computer Science</div>
        <div className="text-[11px] my-0.5">Islamiah College (Autonomous)</div>
        <div className="text-[10px] text-gray-800">CGPA: 7.89/10 | Graduated: 2023</div>
        <div className="text-[10px] text-gray-800">Relevant Coursework: Programming, Algorithms, Database Systems, Software Engineering, Computer Networks</div>
      </div>
    </Section>
  );
}

function CertificationsSection() {
  return (
    <Section title="Certifications">
      <ul className="text-[10px] leading-relaxed">
        <li>• Full Stack Development Certification - SmartCliff Learning Solutions (2023)</li>
        <li>• SQL (Intermediate) - HackerRank Skill Certification (Issued Mar 2025)</li>
        <li>• SQL Basics - HackerRank Skill Certification (Issued Jan 2025)</li>
      </ul>
    </Section>
  );
}

function LanguagesSection() {
  return (
    <Section title="Languages">
      <div className="text-[10px]">
        English (Professional Working Proficiency) | Tamil (Native)
      </div>
    </Section>
  );
}

export default function ExperienceResume() {
  return (
    <div className="max-w-[8.5in] mx-auto p-[0.5in] bg-white text-black font-sans leading-normal print:p-0 print:max-w-none">
      <Hero
        name="Mohammed Abulhasan M"
        title="Software Engineer"
        tagline={"Software & Flutter Developer | Dart | Java | Spring Boot | Rest API | Database | SQL | Docker | Kubernetes | Supabase | Power BI & Python"}
        phone="+971 58 302 7090"
        email="mdyahasan18@gmail.com"
        linkedin="linkedin.com/in/mohammed-abulhasan-256767235"
        portfolio="abulhasan-portfolio.vercel.app"
        github="github.com/abulhasan-18"
      />
      <ProfessionalHighlightsSection />
      <WorkExperienceSection />
      <EducationSection />
      <CertificationsSection />
      <LanguagesSection />
    </div>
  );
}
