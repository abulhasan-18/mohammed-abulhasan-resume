function HeroSection() {
  return (
    <header className="mb-2">
      <h1 className="text-center text-[22px] font-bold uppercase tracking-[0.15em] text-gray-900 mb-0.5">
        Keerthani Sakthivel
      </h1>
      <p className="text-center text-[13px] font-normal text-gray-500 uppercase tracking-[0.2em] mb-3">
        Advocate
      </p>
      <div className="flex flex-wrap justify-center text-[10.5px] text-gray-600 leading-relaxed">
        <span>Erode, Tamil Nadu</span>
        <span className="mx-2 text-gray-300">|</span>
        <span>+91 7598531474</span>
        <span className="mx-2 text-gray-300">|</span>
        <span>keerthanisakthivel@gmail.com</span>
        <span className="mx-2 text-gray-300">|</span>
        <span>linkedin.com/in/keerthani-sakthivel</span>
      </div>
      <div className="mt-3 border-b border-gray-400" />
    </header>
  );
}

function SectionTitle({ children }) {
  return (
    <div className="mb-3">
      <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-900">
        {children}
      </h3>
      <div className="mt-1 border-b border-gray-300" />
    </div>
  );
}

function SummarySection() {
  return (
    <section className="mb-5">
      <SectionTitle>Professional Summary</SectionTitle>
      <p className="text-[11.5px] leading-[1.7] text-gray-800 text-justify">
        Advocate with experience in litigation, legal research, legal drafting,
        trial preparation, and client consultation. Strong foundation in cyber
        law, corporate compliance, and legal documentation through internships
        and postgraduate specialization at NLSIU. Interested in corporate
        legal, compliance, investigations, and technology-driven legal practice.
        Adept at managing multiple cases simultaneously while maintaining
        attention to detail and meeting strict deadlines. Committed to delivering
        ethical and client-focused legal solutions.
      </p>
    </section>
  );
}

function ExperienceEntry({ title, duration, org, highlights }) {
  return (
    <div className="mb-5">
      <div className="flex items-baseline justify-between mb-0.5">
        <h4 className="text-[12.5px] font-semibold text-gray-900">{title}</h4>
        <span className="text-[10.5px] text-gray-500">{duration}</span>
      </div>
      {org && (
        <p className="text-[11.5px] text-gray-500 italic mb-1.5">{org}</p>
      )}
      {highlights && (
        <ul className="text-[11.5px] text-gray-800 list-disc pl-4 space-y-1 leading-[1.65]">
          {highlights.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

function ExperienceSection() {
  return (
    <section className="mb-5">
      <SectionTitle>Experience</SectionTitle>

      <ExperienceEntry
        title="Advocate"
        duration="Dec 2025 – Present"
        org="Erode, Tamil Nadu"
        highlights={[
          "Manage litigation matters from legal notice through trial preparation and case resolution.",
          "Draft notices, complaints, petitions, replies and legal opinions.",
          "Conduct legal research, evidence review and banking document analysis.",
          "Advise clients on litigation strategy and settlement.",
        ]}
      />

      <ExperienceEntry
        title="Legal Intern"
        duration="Mar 2025 – May 2025"
        org="Navachetana Microfin Services Pvt. Ltd."
        highlights={[
          "Supported MCA compliance filings and corporate documentation.",
          "Assisted drafting trust deeds and legal documents.",
        ]}
      />

      <div>
        <div className="flex items-baseline justify-between mb-1.5">
          <h4 className="text-[12.5px] font-semibold text-gray-900">
            Other Legal Internships
          </h4>
          <span className="text-[10.5px] text-gray-500">
            Apr 2023 – Mar 2025
          </span>
        </div>

        <div className="grid grid-cols-2 gap-x-6 gap-y-4">
          <div>
            <p className="text-[11px] font-semibold text-gray-900 mb-1">
              Erode District &amp; Sessions Court
            </p>
            <ul className="text-[11px] text-gray-700 list-disc pl-4 space-y-0.5 leading-relaxed">
              <li>Advocate Nandhagopal K.</li>
              <li>Advocate Srinivasan M.</li>
              <li>Advocate Gurusamy S.</li>
              <li>Advocate Mahesh T. R.</li>
            </ul>
          </div>
          <div>
            <p className="text-[11px] font-semibold text-gray-900 mb-1">
              Bengaluru
            </p>
            <ul className="text-[11px] text-gray-700 list-disc pl-4 space-y-0.5 leading-relaxed">
              <li>Karnataka State Administrative Tribunal</li>
              <li>Advocate N.B. Nijalingappa, City Civil Court</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function EducationSection() {
  return (
    <section className="mb-8">
      <SectionTitle>Education</SectionTitle>

      <div className="space-y-3">
        <div className="mb-2.5">
          <div className="text-[12px] font-bold">
            PG Diploma in Cyber Law &amp; Cyber Forensics
            <span className="text-gray-500 font-normal"> · 2026</span>
          </div>
          <div className="text-[11px] my-0.5">National Law School of India University, Bangalore</div>
        </div>
        <div className="mb-2.5">
          <div className="text-[12px] font-bold">
            LL.B.
            <span className="text-gray-500 font-normal"> · 2025</span>
          </div>
          <div className="text-[11px] my-0.5">Vivekananda College of Law, Affiliated to Karnataka State Law University, Bangalore</div>
        </div>
        <div className="mb-2.5">
          <div className="text-[12px] font-bold">
            B.A. English Literature
            <span className="text-gray-500 font-normal"> · 2022</span>
          </div>
          <div className="text-[11px] my-0.5">VET Institute of Arts & Science College, Affiliated to Bharathiar University, Erode</div>
        </div>
      </div>
    </section>
  );
}

function CoreCompetenciesSection() {
  return (
    <section className="mb-5 print:break-before-page">
      <SectionTitle>Core Competencies</SectionTitle>

      <div className="grid grid-cols-[130px_1fr] gap-y-2 text-[11.5px] leading-[1.7]">
        <span className="font-semibold text-gray-900">Legal Skills</span>
        <span className="text-gray-800">
          Legal Research, Legal Drafting, Litigation Support, Trial Preparation,
          Compliance Support, Case Analysis, Legal Documentation, Client
          Consultation
        </span>

        <span className="font-semibold text-gray-900">Areas of Practice</span>
        <span className="text-gray-800">
          Negotiable Instruments Act, Criminal Law, Civil Litigation, Cyber Law
          &amp; Cyber Forensics, Corporate Compliance
        </span>

        <span className="font-semibold text-gray-900">Research Platforms</span>
        <span className="text-gray-800">SCC Online, Manupatra</span>

        <span className="font-semibold text-gray-900">Software</span>
        <span className="text-gray-800">
          Microsoft Office Suite, Court E-Filing Systems
        </span>

        <span className="font-semibold text-gray-900">Languages</span>
        <span className="text-gray-800">
          English (Professional), Tamil (Native)
        </span>
      </div>
    </section>
  );
}

function CertificationsSection() {
  const certs = [
    "Data Privacy",
    "Compliant Cyber Security",
    "Understanding Intellectual Property",
    "Non-Disclosure Agreements",
    "Labour & Employment Law",
    "People Management",
  ];

  return (
    <section className="mb-5">
      <SectionTitle>Certifications</SectionTitle>
      <div className="flex flex-wrap gap-1.5">
        {certs.map((cert) => (
          <span
            key={cert}
            className="inline-block text-[10.5px] text-gray-700 border border-gray-300 rounded-sm px-2 py-0.5"
          >
            {cert}
          </span>
        ))}
      </div>
    </section>
  );
}

function MembershipSection() {
  return (
    <section className="mb-5">
      <SectionTitle>Professional Membership</SectionTitle>
      <p className="text-[11.5px] text-gray-800">
        Enrolled Advocate, Bar Council of Tamil Nadu and Puducherry.
      </p>
    </section>
  );
}

export default function KeerthaniResume() {
  return (
    <div className="max-w-[8.5in] mx-auto py-[0.45in] pl-[0.75in] pr-[0.55in] bg-white text-black font-sans leading-normal print:py-[0.45in] print:pl-[0.75in] print:pr-[0.55in] print:max-w-none">
      <HeroSection />
      <SummarySection />
      <ExperienceSection />
      <EducationSection />
      <CoreCompetenciesSection />
      <CertificationsSection />
      <MembershipSection />
    </div>
  );
}
