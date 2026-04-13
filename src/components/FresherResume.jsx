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

function Job({ title, company, dates, location, description, skills, achievements }) {
  return (
    <div className="mb-4 last:mb-0">
      <div className="mb-1">
        <div className="text-[13px] font-bold">{title}</div>
        {company && <div className="text-[12px] font-bold my-0.5">{company}</div>}
        <div className="flex justify-between text-[11px] italic my-0.5">
          <span>{dates}</span>
          <span>{location}</span>
        </div>
      </div>
      {description && (
        <div className="text-[11px] italic text-gray-700 mb-2 text-justify">
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
          <span className="font-bold">Technologies Used:</span> {skills}
        </div>
      )}
    </div>
  );
}

function CareerObjectiveSection() {
  return (
    <Section title="Career Objective">
      <p className="text-[12px] text-justify">
        Recent Computer Science graduate with strong academic background and hands-on experience in software development 
        through internships and training programs. Proficient in modern programming languages including Dart, JavaScript, 
        Python, and Java. Experienced in mobile app development with Flutter, web development with React.js, and backend 
        development with Node.js. Seeking entry-level Software Engineer position to apply technical skills and contribute 
        to innovative software solutions while continuing professional growth in a collaborative environment.
      </p>
    </Section>
  );
}

function EducationSection() {
  return (
    <Section title="Education">
      <div className="mb-3">
        <div className="text-[12px] font-bold">Master of Computer Applications (MCA)</div>
        <div className="text-[11px] my-0.5">Jain University (Online)</div>
        <div className="text-[10px] text-gray-800">Currently Pursuing | Expected Graduation: 2025</div>
        <div className="text-[10px] text-gray-800 italic">Relevant Coursework: Advanced Software Engineering, Data Structures and Algorithms, Database Management Systems, System Design and Architecture, Software Testing and Quality Assurance, Computer Networks, Operating Systems</div>
        <div className="text-[10px] text-gray-800 font-semibold">Focus Areas: Full Stack Development, Mobile Application Development, Cloud Computing, Agile Software Development</div>
      </div>
      <div className="mb-3">
        <div className="text-[12px] font-bold">Bachelor of Science in Computer Science</div>
        <div className="text-[11px] my-0.5">Islamiah College (Autonomous)</div>
        <div className="text-[10px] text-gray-800">CGPA: 7.89/10 | Graduated: 2023</div>
        <div className="text-[10px] text-gray-800 italic">Relevant Coursework: Programming in C, C++, Java, Python, Data Structures, Algorithms, Database Systems, Software Engineering, Computer Networks, Web Technologies, Object-Oriented Programming</div>
        <div className="text-[10px] text-gray-800 font-semibold">Academic Projects: Library Management System, E-commerce Website, Student Information System</div>
      </div>
      <div>
        <div className="text-[12px] font-bold">Full Stack Development Professional Certificate</div>
        <div className="text-[11px] my-0.5">SmartCliff Learning Solutions</div>
        <div className="text-[10px] text-gray-800">Certificate | Completed: 2023</div>
        <div className="text-[10px] text-gray-800 italic">Comprehensive training in MERN Stack (MongoDB, Express.js, React.js, Node.js), Flutter Mobile Development, RESTful API Development, Database Design, Version Control with Git</div>
      </div>
    </Section>
  );
}

function TechnicalSkillsSection() {
  const skills = [
    { label: "Programming Languages", value: "Dart, JavaScript, TypeScript, Python, Java, C++, C, HTML5, CSS3, SQL" },
    { label: "Mobile Development", value: "Flutter, Android Development, iOS Development, Material Design, Cupertino, Cross-platform Development" },
    { label: "Web Development", value: "React.js, Next.js, JavaScript ES6+, HTML5, CSS3, Bootstrap, Tailwind CSS, Responsive Design" },
    { label: "Backend Development", value: "Node.js, Express.js, Python Flask, RESTful APIs, GraphQL, JWT Authentication, Server-side Development" },
    { label: "Databases", value: "MongoDB, MySQL, PostgreSQL, Firebase Firestore, SQLite, Database Design, Query Optimization" },
    { label: "Tools and Technologies", value: "Git, GitHub, VS Code, Android Studio, Xcode, Postman, Firebase, npm, Webpack, Docker" },
    { label: "Cloud Platforms", value: "Firebase, Vercel, Heroku, AWS (Basic), Cloud Storage, Deployment, CI/CD" },
    { label: "Software Development", value: "Object-Oriented Programming, Data Structures, Algorithms, Software Design Patterns, Agile Development, Scrum, Test-Driven Development" },
  ];

  return (
    <Section title="Technical Skills">
      <div className="grid gap-y-1.5">
        {skills.map((skill, i) => (
          <div key={i} className="text-[10px]">
            <span className="font-bold">{skill.label}:</span> {skill.value}
          </div>
        ))}
      </div>
    </Section>
  );
}

function ProfessionalExperienceSection() {
  return (
    <Section title="Professional Experience">
      <div className="mb-4">
        <h4 className="text-sm font-bold uppercase mb-2">CLOUDPIXELS CONSULTANCY SERVICES</h4>
        <Job
          title="Associate Software Engineer"
          company="Jan 2024 – Mar 2026 (2 years 2 months)"
          dates="Remote"
          description="Developed comprehensive mobile and web applications serving thousands of users globally, driving digital transformation initiatives across multiple platforms. Contributed to cost optimization strategies, performance enhancements, and scalable solution architecture. Led cross-platform development projects while consistently exceeding performance targets and delivering innovative solutions ahead of schedule."
        />
        <Job
          title="Internship Trainee"
          company="Jun 2023 – Dec 2023 (6 months)"
          dates="Remote"
          description="Designed and developed foundational web infrastructure and content management systems for organizational digital presence. Contributed to process automation, API development, and cost reduction initiatives. Built responsive web solutions while gaining hands-on experience in full-stack development methodologies and agile project delivery."
        />
      </div>

      <div className="mt-5 mb-2">
        <h4 className="text-sm font-bold uppercase border-b border-black pb-0.5 mb-2.5">Projects</h4>
      </div>

      <Job
        title="Tamil Calendars 365 - Mobile & Web Platform"
        company="Technologies: Flutter, Next.js, Cloudflare"
        dates="Duration: 8 months (Aug 2025 – Mar 2026)"
        description="Led end-to-end development of a comprehensive calendar platform, delivering both mobile and web solutions that serve tens of thousands of users daily. Spearheaded technical architecture decisions and performance optimization strategies that resulted in exceptional user satisfaction and platform scalability."
        achievements={[
          "Built cross-platform mobile application serving <strong>50,000+ active users</strong> with 4.8/5 app store rating",
          "Developed web platform handling <strong>25,000+ monthly visitors</strong> with 98% uptime",
          "Implemented dynamic calendar system supporting <strong>3 calendar formats</strong> (Tamil, Gregorian, Islamic)",
          "Optimized app performance achieving <strong>40% faster load times</strong> and reduced memory usage by <strong>30%</strong>",
          "Integrated <strong>500+ festival data points</strong> with automated daily updates"
        ]}
        skills="Flutter, Dart, Next.js, Cloudflare, Material Design, REST APIs"
      />

      <Job
        title="Christian Community Audio Streaming App"
        company="Technologies: Flutter, Supabase, Google Drive API"
        dates="Duration: 19 months (Mar 2024 – Oct 2025)"
        description="Architected and delivered a cost-effective, scalable streaming solution that transformed how a non-profit community accesses audio content. Successfully reduced operational costs while maintaining enterprise-level reliability and user experience standards."
        achievements={[
          "Developed cross-platform app serving <strong>2,000+ community members</strong> with seamless audio streaming",
          "Implemented cost-effective streaming solution reducing infrastructure costs by <strong>85%</strong>",
          "Built OAuth-based authentication system supporting <strong>99.9% login success rate</strong>",
          "Architected scalable system handling <strong>10,000+ monthly streams</strong> with zero downtime",
          "Achieved <strong>95% user retention rate</strong> through optimized UX and performance"
        ]}
        skills="Flutter, Dart, Supabase, Google Drive API, OAuth, Audio Streaming"
      />

      <Job
        title="Real-Time Online Compiler Platform"
        company="Technologies: Spring Boot, Next.js, WebSocket, Docker"
        dates="Duration: 6 months (Sep 2023 – Feb 2024)"
        description="Engineered a high-performance, real-time code execution platform supporting multiple programming languages. Designed scalable backend architecture with advanced containerization and CI/CD pipelines, delivering enterprise-grade performance and reliability."
        achievements={[
          "Architected backend system processing <strong>1,000+ code executions daily</strong> with real-time communication",
          "Built compiler supporting <strong>8+ programming languages</strong> with interactive and batch execution modes",
          "Integrated CI/CD pipeline reducing deployment time by <strong>60%</strong> using Docker containerization",
          "Developed Next.js frontend with <strong>sub-second response times</strong> for compilation results",
          "Enhanced platform supporting <strong>15+ additional SDKs</strong> for extended language compatibility"
        ]}
        skills="Java, Spring Boot, Next.js, WebSocket, Docker, REST APIs, CI/CD"
      />

      <Job
        title="Company Portal & TNPSC Prime Website"
        company="Technologies: HTML, CSS, JavaScript, Spring Boot, Supabase"
        dates="Duration: 3 months (Jun 2023 – Aug 2023)"
        description="Delivered comprehensive web solutions with dynamic content management capabilities, demonstrating strong project management skills by completing deliverables ahead of schedule. Implemented strategic cost optimization measures that significantly reduced operational expenses."
        achievements={[
          "Designed and developed company portal handling <strong>5,000+ monthly visitors</strong> with responsive design",
          "Built dynamic content management system generating <strong>200+ HTML pages</strong> via REST APIs",
          "Implemented user feedback system collecting <strong>1,000+ responses</strong> improving UX by <strong>40%</strong>",
          "Reduced hosting costs by <strong>70%</strong> through strategic OneDrive integration for PDF storage",
          "Delivered projects <strong>2 weeks ahead of schedule</strong> while maintaining 100% functionality"
        ]}
        skills="HTML, CSS, JavaScript, Spring Boot, Supabase, OneDrive API, REST APIs"
      />
    </Section>
  );
}

function AcademicProjectsSection() {
  return (
    <Section title="Academic Projects">
      <Job
        title="E-Commerce Mobile Application"
        dates="Flutter | Firebase | Individual Project"
        achievements={[
          "Developed complete e-commerce mobile application with product catalog, shopping cart, and payment integration",
          "Implemented user authentication, product search, filters, and order management system",
          "Used Firebase for backend services including authentication, database, and cloud storage",
          "Designed responsive UI following Material Design principles for Android and iOS platforms"
        ]}
      />
      <Job
        title="Task Management Web Application"
        dates="MERN Stack | Real-time Features | Team Project"
        achievements={[
          "Built collaborative task management system with real-time updates and team collaboration features",
          "Implemented user roles, project management, task assignment, and progress tracking",
          "Used Socket.io for real-time notifications and MongoDB for data persistence",
          "Created responsive dashboard with data visualization using Chart.js library"
        ]}
      />
      <Job
        title="Library Management System"
        dates="Java | MySQL | Desktop Application"
        achievements={[
          "Developed desktop application for library operations including book inventory and member management",
          "Implemented database design with MySQL for efficient data storage and retrieval",
          "Created user-friendly GUI using Java Swing for librarian and member interfaces",
          "Added features for book search, issue/return tracking, and automated fine calculation"
        ]}
      />
      <Job
        title="Student Information System"
        dates="React.js | Node.js | Academic Project"
        achievements={[
          "Built web-based student management system for academic institutions",
          "Implemented student registration, course enrollment, grade management, and reporting features",
          "Created role-based access for students, teachers, and administrators",
          "Used React.js for frontend and Node.js with Express.js for backend API development"
        ]}
      />
    </Section>
  );
}

function CertificationsTrainingSection() {
  return (
    <Section title="Certifications and Training">
      <ul className="text-[10px] leading-relaxed">
        <li>• Flutter Development Professional Certificate - SmartCliff Learning Solutions (2023)</li>
        <li>• Full Stack Web Development Certificate - SmartCliff Learning Solutions (2023)</li>
        <li>• React.js Development Course - Online Learning Platform (2023)</li>
        <li>• MongoDB Developer Basics Certificate - MongoDB University (2023)</li>
        <li>• Git and GitHub Essentials - Version Control Training (2023)</li>
        <li>• JavaScript ES6+ Modern Development - Online Certification (2023)</li>
      </ul>
    </Section>
  );
}

function ExtraCurricularSection() {
  return (
    <Section title="Extra-Curricular Activities">
      <ul className="text-[10px] leading-relaxed">
        <li>• Active member of college Computer Science Association and technical clubs</li>
        <li>• Participated in coding competitions and hackathons at college and regional level</li>
        <li>• Volunteered in blood donation drives organized by Lion&apos;s Club</li>
        <li>• Contributed to open-source projects on GitHub and community development initiatives</li>
        <li>• Organized technical workshops and coding sessions for junior students</li>
        <li>• Active participant in community sports events and charity fundraising activities</li>
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

function AdditionalInformationSection() {
  return (
    <Section title="Additional Information">
      <ul className="text-[10px] leading-relaxed">
        <li>• Strong analytical and problem-solving abilities with attention to detail</li>
        <li>• Excellent communication skills and ability to work effectively in team environments</li>
        <li>• Quick learner with passion for staying updated with latest technology trends</li>
        <li>• Self-motivated with strong work ethic and commitment to quality deliverables</li>
        <li>• Available for immediate joining and willing to relocate for career opportunities</li>
      </ul>
    </Section>
  );
}

export default function FresherResume() {
  return (
    <div className="max-w-[8.5in] mx-auto p-[0.5in] bg-white text-black font-sans leading-normal print:p-0 print:max-w-none">
      <Hero
        name="Mohammed Abulhasan M"
        title="Entry Level Software Engineer"
        phone="+971 58 302 7090"
        email="mdyahasan18@gmail.com"
        linkedin="linkedin.com/in/mohammed-abulhasan-256767235"
        portfolio="abulhasan-portfolio.vercel.app"
        github="github.com/abulhasan-18"
        variant="fresher"
      />
      <CareerObjectiveSection />
      <EducationSection />
      <TechnicalSkillsSection />
      <ProfessionalExperienceSection />
      <AcademicProjectsSection />
      <CertificationsTrainingSection />
      <ExtraCurricularSection />
      <LanguagesSection />
      <AdditionalInformationSection />
    </div>
  );
}
