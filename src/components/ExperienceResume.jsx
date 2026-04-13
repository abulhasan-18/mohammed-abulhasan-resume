import Hero from "@/components/Hero";
import AboutSection from "@/components/experience/AboutSection";
import CertificationsSection from "@/components/experience/CertificationsSection";
import EducationSection from "@/components/experience/EducationSection";
import LanguagesSection from "@/components/experience/LanguagesSection";
import WorkExperienceSection from "@/components/experience/WorkExperienceSection";

import ProjectSection from "./experience/ProjectSection";

export default function ExperienceResume() {
  return (
    <div className="max-w-[8.5in] mx-auto p-[0.5in] bg-white text-black font-sans leading-normal print:p-0 print:max-w-none">
      <Hero />
      <AboutSection />
      <WorkExperienceSection />
      <ProjectSection />
      <EducationSection />
      <CertificationsSection />
      <LanguagesSection />
    </div>
  );
}
