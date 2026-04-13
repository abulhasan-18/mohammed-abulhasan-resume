import ResumeSection from "@/components/resume/ResumeSection";

export default function EducationSection() {
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
