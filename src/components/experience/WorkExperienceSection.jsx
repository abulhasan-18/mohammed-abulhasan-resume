import ResumeJob from "@/components/resume/ResumeJob";
import ResumeSection from "@/components/resume/ResumeSection";

export default function WorkExperienceSection() {
  return (
    <ResumeSection title="Work Experience">

      <h4 className="text-sm font-bold uppercase tracking-wide mb-5 text-gray-800">
        CLOUDPIXELS CONSULTANCY SERVICES
      </h4>

      {/* TIMELINE */}
      <div className="relative border-l border-gray-200 ml-2">

        {/* JOB 1 */}
        <div className="flex items-start gap-3 mb-8 relative">
          
          <div className="w-2.5 h-2.5 bg-gray-500 rounded-full mt-1.5 -ml-[7px]"></div>

          <ResumeJob
            title="Associate Software Engineer"
            duration="Jan 2024 – Mar 2026 (2 years 2 months)"
            description="Developed comprehensive mobile and web applications serving thousands of users globally, driving digital transformation initiatives across multiple platforms. Contributed to cost optimization strategies, performance enhancements, and scalable solution architecture. Led cross-platform development projects while consistently exceeding performance targets, delivering innovative solutions ahead of schedule, and collaborating with cross-functional teams to translate business requirements into reliable production-ready software."
          />
        </div>

        {/* JOB 2 */}
        <div className="flex items-start gap-3 relative">

          <div className="w-2.5 h-2.5 bg-gray-500 rounded-full mt-1.5 -ml-[7px]"></div>

          <ResumeJob
            title="Internship Trainee"
            duration="Jun 2023 – Dec 2023 (6 months)"
            description="Designed and developed foundational web infrastructure and content management systems for organizational digital presence. Contributed to process automation, API development, and cost reduction initiatives. Built responsive web solutions while gaining hands-on experience in full-stack development methodologies and agile project delivery, and supported senior engineers in feature implementation, testing, and issue resolution across active projects."
          />
        </div>

      </div>

    </ResumeSection>
  );
}
