import ResumeSection from "@/components/resume/ResumeSection";

function ProjectItem({ title, duration, description, points }) {
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
          <li key={index}>{point}</li>
        ))}
      </ul>

    </div>
  );
}

export default function ProjectSection() {
  return (
    <ResumeSection title="Projects">

      <ProjectItem
        title="Tamil Calendars 365 - Mobile & Web Platform"
        duration="Aug 2025 – Mar 2026 (8 months)"
        description="Led the end-to-end delivery of a cross-platform calendar platform that made localized date, festival, and event information more accessible to users on mobile and web. Focused on building a reliable, easy-to-navigate product with strong performance and maintainable content workflows."
        points={[
          <>
            Built <strong>mobile and web experiences</strong> for daily calendar insights, festival schedules, and
            <strong> user-friendly navigation</strong>.
          </>,
          <>
            Integrated <strong>multiple calendar systems</strong> to keep date and event information
            <strong> synchronized across platforms</strong>.
          </>,
          <>
            Optimized <strong>performance</strong> to improve <strong>load times</strong> and reduce memory usage on a
            wide range of devices.
          </>,
          <>
            Developed <strong>responsive interfaces</strong> that delivered a <strong>consistent user experience</strong>
            across mobile and desktop screen sizes.
          </>,
          <>
            Streamlined <strong>content maintenance workflows</strong> for recurring festival and event data updates.
          </>,
        ]}
      />

      <ProjectItem
        title="Christian Community Multimedia App"
        duration="Mar 2024 – Oct 2025 (19 months)"
        description="Designed and delivered a community-focused multimedia application for streaming sermons, videos, and shared digital resources in a single platform. Emphasized dependable media delivery, secure user access, and a simple content experience for recurring community engagement."
        points={[
          <>
            Developed a <strong>scalable application</strong> that organized audio, video, and supporting community
            content in <strong>one unified platform</strong>.
          </>,
          <>
            Integrated <strong>external media services</strong> to simplify publishing workflows and
            <strong> centralize content delivery</strong>.
          </>,
          <>
            Implemented <strong>secure authentication</strong> and access flows to improve reliability for protected user
            features.
          </>,
          <>
            Optimized <strong>storage and delivery</strong> choices to reduce infrastructure costs while maintaining
            <strong> stable playback quality</strong>.
          </>,
          <>
            Supported <strong>recurring streaming demand</strong> with dependable performance and
            <strong> intuitive content discovery</strong>.
          </>,
        ]}
      />

      <ProjectItem
        title="Real-Time Online Compiler Platform"
        duration="Sep 2023 – Feb 2024 (6 months)"
        description="Built a real-time code execution platform that allowed users to write, run, and review code directly in the browser with fast feedback. The solution combined responsive frontend tooling with containerized backend execution to support scalability, isolation, and consistent deployments."
        points={[
          <>
            Developed a <strong>full-stack interface</strong> for writing, executing, and reviewing code in
            <strong> real time</strong>.
          </>,
          <>
            Added support for <strong>multiple programming languages</strong> through isolated and
            <strong> containerized execution environments</strong>.
          </>,
          <>
            Implemented <strong>WebSocket-based updates</strong> to deliver <strong>low-latency feedback</strong> for
            execution status and output.
          </>,
          <>
            Improved <strong>deployment consistency</strong> by standardizing services and environments with
            <strong> Docker</strong>.
          </>,
          <>
            Designed backend workflows to handle <strong>concurrent execution requests</strong> with reliable isolation
            and stability.
          </>,
        ]}
      />

      <ProjectItem
        title="Company Portal & TNPSC Prime Website"
        duration="Jun 2023 – Aug 2023 (3 months)"
        description="Delivered content-driven web platforms that supported both organizational communication and exam-focused digital publishing needs. The work centered on responsive user interfaces, efficient content delivery, and scalable backend support for frequently updated pages."
        points={[
          <>
            Built <strong>responsive user interfaces</strong> for company and education-focused portals with clear
            content presentation.
          </>,
          <>
            Developed <strong>backend APIs</strong> and <strong>dynamic page generation</strong> flows to publish large
            volumes of content efficiently.
          </>,
          <>
            Improved <strong>user experience</strong> through better information structure, readability, and navigation.
          </>,
          <>
            Reduced <strong>hosting and operational overhead</strong> by selecting cost-effective deployment and data
            delivery approaches.
          </>,
          <>
            Delivered the platforms <strong>ahead of schedule</strong> while meeting functional and presentation
            requirements.
          </>,
        ]}
      />

    </ResumeSection>
  );
}
