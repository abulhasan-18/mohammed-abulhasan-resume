import Hero from "@/components/Hero";
import ResumeJob from "@/components/resume/ResumeJob";
import ResumeSection from "@/components/resume/ResumeSection";

import { sharedCertifications, sharedEducation } from "./roleResumeData";

function AboutSection({ summary, skills }) {
  return (
    <section className="grid gap-8 mb-6" style={{ gridTemplateColumns: "7fr 3fr" }}>
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

export default function RoleResume({ resume }) {
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
