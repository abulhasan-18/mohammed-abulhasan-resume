import { notFound } from "next/navigation";

import RoleResume from "@/components/roles/RoleResume";
import {
  getRoleResume,
  roleResumes,
} from "@/components/roles/roleResumeData";

export function generateStaticParams() {
  return roleResumes.map((resume) => ({
    role: resume.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { role } = await params;
  const resume = getRoleResume(role);

  if (!resume) {
    notFound();
  }

  return {
    title: resume.pageTitle,
    description: resume.cardDescription,
  };
}

export default async function RolePage({ params }) {
  const { role } = await params;
  const resume = getRoleResume(role);

  if (!resume) {
    notFound();
  }

  return (
    <main>
      <RoleResume resume={resume} />
    </main>
  );
}
