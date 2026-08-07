import SoftwareEngineerResume from "@/components/resumes/SoftwareEngineerResume";
import { softwareEngineerResume } from "@/components/resumes/SoftwareEngineerResume";

export const metadata = {
  title: softwareEngineerResume.pageTitle,
  description: softwareEngineerResume.cardDescription,
};

export default function SoftwareEngineerResumePage() {
  return (
    <main>
      <SoftwareEngineerResume />
    </main>
  );
}