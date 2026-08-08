import Hero from "@/components/Hero";
import ResumeJob from "@/components/resume/ResumeJob";
import ResumeSection from "@/components/resume/ResumeSection";

import { sharedCertifications, sharedEducation } from "@/components/roles/roleResumeData";

export const softwareEngineerResume = {
  slug: "software-engineer",
  label: "Software Engineer",
  pageTitle: "Mohammed Abulhasan - Software Engineer Resume",
  cardDescription:
    "Full-stack software engineer with 2+ years experience building scalable applications, data pipelines, and automated reporting systems. Strong in data analysis, SQL, Python, and visualization.",
  heroTitle: "Software Engineer",
  heroTagline:
    "Full-stack development | Data analysis | SQL | Python | React | Node.js | PostgreSQL | Power BI | Automated reporting | Data pipelines",
  summary:
    "Software engineer with 2+ years of experience at CloudPixels Consultancy Services building full-stack applications and data-driven solutions. Expertise in designing and implementing data pipelines, automated reporting systems, and analytical dashboards. Strong command of SQL for complex queries, data modeling, and performance optimization. Proficient in Python (pandas, NumPy) for data processing and analysis, and React/Node.js for building data visualization interfaces. Experienced in transforming raw data into actionable insights through automated ETL workflows, scheduled reports, and interactive dashboards. Combines engineering rigor with analytical thinking to deliver scalable data solutions.",
  skills: [
    "Full-stack development (React, Node.js, Next.js)",
    "SQL (PostgreSQL, MySQL) - complex queries, optimization, data modeling",
    "Python (pandas, NumPy, SQLAlchemy) for data analysis & ETL",
    "Data pipeline design & automation (Airflow, cron, custom schedulers)",
    "Automated reporting systems & scheduled report generation",
    "Data visualization (Power BI, Chart.js, Recharts, D3.js)",
    "RESTful API design & GraphQL",
    "Database design, indexing, query optimization",
    "Git, Docker, CI/CD pipelines",
    "Agile/Scrum, code review, testing (Jest, PyTest)",
  ],
  companyName: "CloudPixels Consultancy Services",
  experience: [
    {
      title: "Software Engineer",
      duration: "Jan 2024 - Mar 2026 (2 years 2 months)",
      description:
        "Built full-stack applications and data pipelines, designed automated reporting systems, and developed analytical dashboards for business intelligence.",
      highlights: [
        "Designed and implemented automated ETL pipelines processing 100K+ records daily using Python (pandas, SQLAlchemy) and PostgreSQL, reducing manual reporting effort by 85%",
        "Built interactive Power BI dashboards and React-based data visualization interfaces for real-time KPI monitoring across marketing, sales, and operations",
        "Wrote complex SQL queries with CTEs, window functions, and materialized views for cohort analysis, funnel tracking, and anomaly detection",
        "Developed scheduled report generation system (PDF/Excel/Email) using Node.js cron jobs and Python, delivering 50+ automated reports weekly to stakeholders",
        "Created data validation frameworks with automated anomaly alerts, catching data quality issues before they reached production dashboards",
        "Collaborated with business teams to define metrics, build data models, and translate requirements into scalable analytical solutions",
      ],
    },
    {
      title: "Software Engineer Intern",
      duration: "Jun 2023 - Dec 2023 (7 months)",
      description:
        "Supported backend development, data extraction, and report automation while learning production-grade data engineering practices.",
      highlights: [
        "Built REST APIs in Node.js/Express for serving aggregated analytics data to frontend dashboards",
        "Developed Python scripts for data extraction, transformation, and loading from multiple source systems into PostgreSQL",
        "Created automated Excel/PDF report generation using Python (openpyxl, reportlab) scheduled via cron",
        "Wrote SQL queries for ad-hoc analysis and recurring business reports, optimizing query performance with indexes",
        "Assisted in designing database schema for analytics warehouse with star schema modeling",
      ],
    },
  ],
  projects: [
    {
      title: "Automated Business Intelligence Platform",
      duration: "Aug 2025 - Mar 2026",
      description:
        "End-to-end BI platform with automated data ingestion, transformation, and multi-format report delivery for 20+ business metrics.",
      points: [
        "Architected ETL pipeline using Python/Airflow extracting from 5+ sources (APIs, databases, CSVs) into PostgreSQL warehouse",
        "Built 15+ Power BI dashboards and 10+ React visualization components for self-service analytics",
        "Implemented scheduled report engine delivering PDF/Excel/Email reports to 30+ stakeholders on daily/weekly/monthly cadences",
        "Designed data quality checks with automated Slack/Email alerts for schema drift, null spikes, and threshold breaches",
      ],
    },
    {
      title: "Real-Time Analytics API & Dashboard",
      duration: "Mar 2024 - Oct 2025",
      description:
        "High-performance API serving aggregated analytics with sub-100ms latency, powering real-time operational dashboards.",
      points: [
        "Built Node.js/Express API with PostgreSQL materialized views and Redis caching for real-time metric serving",
        "Developed React dashboard with WebSocket updates for live KPI monitoring (conversion rates, revenue, user activity)",
        "Implemented cohort analysis and retention queries using advanced SQL (LAG/LEAD, NTILE, recursive CTEs)",
        "Created automated A/B test statistical significance reporting with Python (SciPy) integrated into deployment pipeline",
      ],
    },
    {
      title: "Data Migration & Validation Framework",
      duration: "Jun 2023 - Aug 2023",
      description:
        "Automated migration of legacy reporting data with comprehensive validation and reconciliation reporting.",
      points: [
        "Migrated 2M+ historical records from spreadsheets/legacy DB to PostgreSQL with zero data loss using Python ETL",
        "Built row-level reconciliation reports comparing source vs target with discrepancy classification and auto-resolution",
        "Developed validation rule engine (SQL + Python) with 50+ configurable checks for completeness, referential integrity, business rules",
        "Generated migration summary reports for audit compliance with before/after metrics and exception logs",
      ],
    },
  ],
  certifications: [
    "SQL (Intermediate) - HackerRank Skill Certification (Issued Mar 2025)",
    "SQL Basics - HackerRank Skill Certification (Issued Jan 2025)",
    "Full Stack Development Certification - SmartCliff Learning Solutions (2023)",
  ],
};

function AboutSection({ summary, skills }) {
  return (
    <section className="about-print-grid grid grid-cols-[7fr_3fr] gap-8 mb-6 max-[760px]:grid-cols-1">
      <div>
        <h3 className="text-sm font-bold uppercase tracking-wide border-b border-black pb-0.5 mb-3">
          About
        </h3>

        <p className="text-[12px] leading-7 text-gray-900 text-left">
          {summary}
        </p>
      </div>

      <div className="flex flex-col justify-start">
        <h3 className="text-sm font-bold uppercase tracking-wide border-b border-black pb-0.5 mb-3">
          Tools & Skills
        </h3>

        <ul className="text-[12px] leading-relaxed text-gray-900 space-y-1">
          {skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function WorkExperienceSection({ companyName, experience }) {
  return (
    <ResumeSection title="Work Experience">
      <h4 className="text-sm font-bold uppercase tracking-wide mb-5 text-gray-800">
        {companyName}
      </h4>

      <div className="relative border-l border-gray-200 ml-2">
        {experience.map((job, index) => (
          <div
            key={job.title}
            className={`flex items-start gap-3 relative ${index < experience.length - 1 ? "mb-8" : ""}`}
          >
            <div className="w-2.5 h-2.5 bg-gray-500 rounded-full mt-1.5 -ml-[7px]"></div>
            <ResumeJob
              title={job.title}
              duration={job.duration}
              description={job.description}
              highlights={job.highlights}
            />
          </div>
        ))}
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
        {points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    </div>
  );
}

function ProjectSection({ projects }) {
  return (
    <ResumeSection title="Projects">
      {projects.map((project) => (
        <ProjectItem
          key={project.title}
          title={project.title}
          duration={project.duration}
          description={project.description}
          points={project.points}
        />
      ))}
    </ResumeSection>
  );
}

function EducationSection() {
  return (
    <ResumeSection title="Education">
      {sharedEducation.map((education) => (
        <div key={education.degree} className="mb-2.5">
          <div className="text-[12px] font-bold">{education.degree}</div>
          <div className="text-[11px] my-0.5">{education.institution}</div>
          <div className="text-[10px] text-gray-800">{education.details}</div>
        </div>
      ))}
    </ResumeSection>
  );
}

function CertificationsSection({ certifications }) {
  const items = certifications ?? sharedCertifications;
  if (!items.length) return null;

  return (
    <ResumeSection title="Certifications">
      <ul className="text-[10px] leading-relaxed">
        {items.map((certification) => (
          <li key={certification}>{certification}</li>
        ))}
      </ul>
    </ResumeSection>
  );
}

export default function SoftwareEngineerResume() {
  const resume = softwareEngineerResume;

  return (
    <div className="max-w-[8.5in] mx-auto p-[0.5in] bg-white text-black font-sans leading-normal print:p-0 print:max-w-none">
      <Hero title={resume.heroTitle} tagline={resume.heroTagline} variant="experience" />
      <AboutSection summary={resume.summary} skills={resume.skills} />
      <WorkExperienceSection companyName={resume.companyName} experience={resume.experience} />
      <ProjectSection projects={resume.projects} />
      <EducationSection />
      <CertificationsSection certifications={resume.certifications} />
    </div>
  );
}