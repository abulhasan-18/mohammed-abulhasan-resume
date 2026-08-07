import Hero from "@/components/Hero";
import ResumeJob from "@/components/resume/ResumeJob";
import ResumeSection from "@/components/resume/ResumeSection";

function AboutSection() {
  return (
    <section className="about-print-grid grid grid-cols-[2fr_1fr] gap-8 mb-6 max-[760px]:grid-cols-1">
      <div>
        <h3 className="text-sm font-bold uppercase tracking-wide border-b border-black pb-0.5 mb-3">
          About
        </h3>

        <p className="text-[12px] leading-relaxed text-gray-900 text-left">
          Data &amp; BI Analyst with hands-on experience turning raw business data into clear dashboards, reports, and actionable
          insights. Proficient in SQL, Power BI, Excel, Python, and data visualization with a strong focus on data
          modeling, KPI tracking, trend analysis, stakeholder communication, and reporting automation. Comfortable
          designing ETL-ready datasets, validating data integrity, and presenting findings to both technical and
          non-technical teams to drive data-informed decisions.
        </p>
      </div>

      <div className="flex flex-col justify-start">
        <h3 className="text-sm font-bold uppercase tracking-wide border-b border-black pb-0.5 mb-3">
          Tools & Skills
        </h3>

        <div className="text-[12px] leading-relaxed text-gray-900 space-y-2">
          <p>
            <strong>BI &amp; Visualization:</strong> Power BI, Tableau, Excel
          </p>
          <p>
            <strong>Databases &amp; Querying:</strong> SQL, Postgres, Snowflake
          </p>
          <p>
            <strong>Data &amp; ETL:</strong> Data Modeling, Data Cleaning, ETL Concepts
          </p>
          <p>
            <strong>Programming:</strong> Python, Java
          </p>
          <p>
            <strong>Business Concepts:</strong> KPI Dashboards, Trend Analysis, Statistics, Reporting Automation
          </p>
        </div>
      </div>
    </section>
  );
}

function WorkExperienceSection() {
  return (
    <ResumeSection title="Work Experience">
      <h4 className="text-[14px] font-semibold text-gray-900 leading-snug mb-4">
        CloudPixels Consultancy Services
      </h4>

      <div className="relative border-l border-gray-200 ml-2">
        <div className="flex items-start gap-3 mb-8 relative">
          <div className="w-2.5 h-2.5 bg-gray-500 rounded-full mt-1.5 -ml-[7px]"></div>

          <ResumeJob
            title="Data &amp; BI Analyst"
            duration="Jan 2024 – Mar 2026 (2 years 2 months)"
            description="Built recurring dashboards and reporting workflows to translate operational data into clear business metrics. Designed data models, cleaned and validated datasets from multiple sources, automated reporting tasks, and partnered with stakeholders to improve data quality, visibility, and decision-making."
          />
        </div>

        <div className="flex items-start gap-3 relative">
          <div className="w-2.5 h-2.5 bg-gray-500 rounded-full mt-1.5 -ml-[7px]"></div>

          <ResumeJob
            title="Data Analyst Intern (BI Track)"
            duration="Jun 2023 – Dec 2023 (6 months)"
            description="Supported reporting and analysis tasks by preparing datasets, writing SQL queries, and assembling periodic KPI summaries. Helped streamline spreadsheet-based processes, documented data issues, and delivered concise findings for review by team leads."
          />
        </div>
      </div>
    </ResumeSection>
  );
}

function ProjectItem({ title, duration, description, points }) {
  return (
    <div className="mb-6">
      <h4 className="text-[14px] font-semibold text-gray-900 leading-snug">
        {title}
        <span className="text-gray-500 font-normal">
          {" "}· {duration}
        </span>
      </h4>

      <p className="text-[12px] text-gray-800 leading-relaxed mt-2 mb-2">
        {description}
      </p>

      <ul className="text-[12px] text-gray-800 list-disc pl-5 space-y-1 mb-2">
        {points.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  );
}

function ProjectSection() {
  return (
    <ResumeSection title="Projects">
      <ProjectItem
        title="Tamil Calendars 365 - Mobile & Web Platform"
        duration="Aug 2025 – Mar 2026 (8 months)"
        description="Analyzed product usage for the same cross-platform calendar experience to understand user engagement, content popularity, and update patterns across mobile and web. Focused on turning raw activity data into dashboards and insights that supported product improvements."
        points={[
          <> 
            Built <strong>Power BI dashboards</strong> to track daily usage, page views, and festival content
            engagement.
          </>,
          <>
            Cleaned and modeled data from <strong>SQL queries</strong>, spreadsheets, and export files for reporting.
          </>,
          <>
            Added <strong>trend analysis</strong> to compare user interest across calendar dates, events, and regions.
          </>,
          <>
            Highlighted <strong>content update patterns</strong> and usage spikes to support planning for future releases.
          </>,
        ]}
      />

      <ProjectItem
        title="Christian Community Multimedia App"
        duration="Mar 2024 – Oct 2025 (19 months)"
        description="Analyzed media consumption for the same community multimedia app to measure sermon plays, video engagement, and recurring audience behavior. Used reporting outputs to understand traffic sources, page-level attraction, and which content patterns performed best."
        points={[
          <>
            Built <strong>Power BI dashboards</strong> to track user traffic, source channels, and platform engagement.
          </>,
          <>
            Used <strong>heat maps</strong> and page-level analysis to identify which screens and sections attracted the
            most attention.
          </>,
          <>
            Segmented users by <strong>content type</strong>, visit frequency, and repeat engagement behavior.
          </>,
          <>
            Presented insights with <strong>charts and dashboards</strong> to support content planning and audience
            growth.
          </>,
        ]}
      />

      <ProjectItem
        title="Company Portal & TNPSC Prime Website"
        duration="Jun 2023 – Aug 2023 (3 months)"
        description="Analyzed traffic and content performance for the same portal and education-focused website work to understand which pages drove the most engagement. Focused on reporting page trends, navigation behavior, and content updates to support better publishing decisions."
        points={[
          <>
            Analyzed <strong>page traffic</strong>, content views, and repeat visits across the portals.
          </>,
          <>
            Compared <strong>top-performing pages</strong> and content categories to identify high-interest topics.
          </>,
          <>
            Built a dashboard view for <strong>quick weekly review</strong> by content and operations stakeholders.
          </>,
          <>
            Supported better decision-making with <strong>trend-based summaries</strong> and clear reporting snapshots.
          </>,
        ]}
      />
    </ResumeSection>
  );
}

function EducationSection() {
  return (
    <ResumeSection title="Education">
      <div className="mb-2.5">
        <div className="text-[12px] font-bold">Master of Computer Applications (MCA)</div>
        <div className="text-[11px] my-0.5">Jain University (Online)</div>
        <div className="text-[10px] text-gray-800">Currently Pursuing | Expected Graduation: 2026</div>
      </div>

      <div>
        <div className="text-[12px] font-bold">Bachelor of Science in Computer Science</div>
        <div className="text-[11px] my-0.5">Islamiah College (Autonomous)</div>
        <div className="text-[10px] text-gray-800">CGPA: 7.89/10 | Graduated: 2022</div>
      </div>
    </ResumeSection>
  );
}

function CertificationsSection() {
  return (
    <ResumeSection title="Certifications">
      <ul className="text-[10px] leading-relaxed">
        <li>• Full Stack Development Certification - SmartCliff Learning Solutions (2023)</li>
        <li>• SQL (Intermediate) - HackerRank Skill Certification (Issued Mar 2025)</li>
        <li>• SQL Basics - HackerRank Skill Certification (Issued Jan 2025)</li>
      </ul>
    </ResumeSection>
  );
}

export default function DataAnalystResume() {
  return (
    <div className="max-w-[8.5in] mx-auto p-[0.5in] bg-white text-black font-sans leading-normal print:p-0 print:max-w-none">
      <Hero
        title="Data &amp; BI Analyst"
        tagline="Power BI | SQL | Python | Excel | Tableau | Data Modeling | ETL | KPI Dashboards | Data Visualization | Reporting"
        variant="experience"
      />
      <AboutSection />
      <WorkExperienceSection />
      <ProjectSection />
      <EducationSection />
      <CertificationsSection />
    </div>
  );
}
