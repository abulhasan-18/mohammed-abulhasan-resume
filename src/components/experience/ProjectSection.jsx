import ResumeSection from "@/components/resume/ResumeSection";

function ProjectItem({ title, duration, description, points, technologies }) {
  return (
    <div className="mb-6">

      {/* Title + Duration */}
      <h4 className="text-[14px] font-semibold text-gray-900 leading-snug">
        {title}
        <span className="text-gray-500 font-normal">
          {" "}· {duration}
        </span>
      </h4>

      {/* Description */}
      <p className="text-[12px] text-gray-800 leading-relaxed mt-2 mb-2">
        {description}
      </p>

      {/* Points */}
      <ul className="text-[12px] text-gray-800 list-disc pl-5 space-y-1 mb-2">
        {points.map((point, index) => (
          <li key={index} dangerouslySetInnerHTML={{ __html: point }} />
        ))}
      </ul>

      {/* Technologies */}
      <p className="text-[12px] text-gray-600">
        <span className="font-medium">Technologies:</span> {technologies}
      </p>
    </div>
  );
}

export default function ProjectSection() {
  return (
    <ResumeSection title="Projects">

      <ProjectItem
        title="Tamil Calendars 365 - Mobile & Web Platform"
        duration="Aug 2025 – Mar 2026 (8 months)"
        description="Spearheaded end-to-end digital transformation initiative, architecting and delivering a comprehensive calendar platform that improved user engagement and eliminated traditional inefficiencies."
        points={[
          "Designed cross-platform solution serving <strong>50,000+ users</strong> with <strong>4.8/5 rating</strong>",
          "Built web platform handling <strong>25,000+ monthly visitors</strong> with <strong>98% uptime</strong>",
          "Integrated <strong>3 calendar systems</strong> with real-time sync",
          "Improved performance by <strong>40% faster load time</strong> and <strong>30% memory reduction</strong>",
          "Developed responsive UI supporting <strong>15+ device sizes</strong>",
          "Automated workflows for <strong>500+ festival data points</strong>",
        ]}
        technologies="Flutter, Next.js, Cloudflare"
      />

      <ProjectItem
        title="Christian Community Multimedia App"
        duration="Mar 2024 – Oct 2025 (19 months)"
        description="Architected and delivered a scalable multimedia streaming application integrating YouTube API and cloud-based storage."
        points={[
          "Developed app serving <strong>2,000+ users</strong>",
          "Integrated <strong>YouTube API</strong> for video streaming",
          "Reduced infrastructure costs by <strong>85%</strong>",
          "Implemented OAuth with <strong>96% success rate</strong>",
          "Handled <strong>10,000+ monthly streams</strong>",
          "Achieved <strong>95% user retention</strong>",
        ]}
        technologies="Flutter, Supabase, YouTube API, Google Drive API"
      />

      <ProjectItem
        title="Real-Time Online Compiler Platform"
        duration="Sep 2023 – Feb 2024 (6 months)"
        description="Engineered a real-time code execution platform with scalable backend and containerized deployment."
        points={[
          "Processed <strong>1,000+ executions daily</strong>",
          "Supported <strong>8+ programming languages</strong>",
          "Reduced deployment time by <strong>60%</strong>",
          "Delivered <strong>sub-second response</strong>",
          "Handled <strong>100+ concurrent users</strong>",
          "Achieved <strong>99.5% uptime</strong>",
        ]}
        technologies="Spring Boot, Next.js, WebSocket, Docker"
      />

      <ProjectItem
        title="Company Portal & TNPSC Prime Website"
        duration="Jun 2023 – Aug 2023 (3 months)"
        description="Delivered scalable web platforms with dynamic content management and cost optimization."
        points={[
          "Handled <strong>5,000+ monthly visitors</strong>",
          "Generated <strong>200+ pages</strong> via APIs",
          "Improved UX by <strong>40%</strong>",
          "Reduced hosting cost by <strong>70%</strong>",
          "Built <strong>50+ API endpoints</strong>",
          "Delivered <strong>2 weeks early</strong>",
        ]}
        technologies="HTML, CSS, JavaScript, Spring Boot, Supabase"
      />

    </ResumeSection>
  );
}