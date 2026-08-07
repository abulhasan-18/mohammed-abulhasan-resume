import Link from "next/link";

import { roleResumes } from "@/components/roles/roleResumeData";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      <main className="mx-auto flex max-w-6xl flex-col gap-10">
        <section className="rounded-3xl border border-gray-200 bg-white px-6 py-10 shadow-sm sm:px-10">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
            Experienced Resume Portfolio
          </p>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            Mohammed Abulhasan
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-gray-600">
            Eight experienced role versions tailored for different jobs. Each
            page keeps the same personal details, education, and company while
            shifting the summary, skills, and work focus.
          </p>
        </section>

        <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {roleResumes.map((resume) => (
            <Link
              key={resume.slug}
              href={`/roles/${resume.slug}`}
              className="group rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-lg"
            >
              <div className="flex items-start justify-between gap-4">
                <h2 className="text-lg font-semibold text-gray-900">
                  {resume.label}
                </h2>
                <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
                  Experienced
                </span>
              </div>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                {resume.cardDescription}
              </p>

              <div className="mt-4 text-sm font-semibold text-blue-600 group-hover:text-blue-700">
                Open resume
              </div>
            </Link>
          ))}
        </section>

        <footer className="pb-4 text-center text-xs text-gray-400">
          Legacy technical resumes remain available at /experience and /data-analyst.
        </footer>
      </main>
    </div>
  );
}
