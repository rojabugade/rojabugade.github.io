// app/components/Server/Server-Side_ProjectSection.tsx
import ClientProjectsSection from "../Client/ClientProjectSection";
import { getProjects, ProjectData } from "./FetchGithub";

export default async function ProjectsSection() {
  // Fetch project data from GitHub
  const projects: ProjectData[] = await getProjects("RojaBugade");

  // Pass projects as a prop with correct typing
  return <ClientProjectsSection projects={projects} />;
}
