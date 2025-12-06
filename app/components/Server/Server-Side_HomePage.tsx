// app/components/Server/Server-Side_HomePage.tsx
import ClientHomePage from "../Client/ClientHomePage";
import { getProjects } from "./FetchGithub";

export default async function HomePage() {
  // Fetch project data from GitHub
  const projects = await getProjects("RojaBugade");

  // Pass any server-fetched data to the client component
  return (
    <>
      <ClientHomePage projects={projects} />
    </>
  );
}
