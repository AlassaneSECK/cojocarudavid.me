import { sanityFetch } from "@/lib/sanity.client";
import { projectsQuery } from "@/lib/sanity.query";
import type { ProjectType } from "@/types";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Slide } from "../animation/Slide";
import EmptyState from "../components/shared/EmptyState";
import PageHeading from "../components/shared/PageHeading";

export const metadata: Metadata = {
  title: "Cojocaru David - Projects",
  metadataBase: new URL("https://cojocarudavid.me/projects"),
  description: "Explore projects built by Cojocaru David. A collection of projects I've worked on over the years.",
  openGraph: {
    title: "Cojocaru David - Projects",
    url: "https://cojocarudavid.me/projects",
    description: "Explore projects built by Cojocaru David. A collection of projects I've worked on over the years.",
    images:
      "https://res.cloudinary.com/dwrrey9e3/image/upload/v1706310008/ogprojects.png",
  },
};

export default async function Project() {
  const projects: ProjectType[] = await sanityFetch({
    query: projectsQuery,
    tags: ["project"],
  });

  return (
    <main className="max-w-7xl mx-auto md:px-16 px-6">
      <PageHeading
        title="Projects"
        description="I've worked on a wide range of projects over the years. Here are a few of my favorites and public projects. Please feel free to reach out if you have any questions about my work."
      />

      <Slide delay={0.1}>
        {projects.length > 0 ? (
          <section className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mb-12">
            {projects.map((project) => (
              <Link
                href={`/projects/${project.slug}`}
                key={project._id}
                className="flex items-center gap-x-4 dark:bg-primary-bg bg-zinc-50 border border-transparent dark:hover:border-zinc-700 hover:border-zinc-200 p-4 rounded-lg"
              >
                <Image
                  src={project.logo}
                  width={60}
                  height={60}
                  alt={project.name}
                  className="dark:bg-zinc-800 bg-zinc-100 rounded-md p-2"
                />
                <div>
                  <h2 className="text-lg tracking-wide mb-1">{project.name}</h2>
                  <div className="text-sm dark:text-zinc-400 text-zinc-600">
                    {project.tagline}
                  </div>
                </div>
              </Link>
            ))}
          </section>
        ) : (
          <EmptyState value="Projects" />
        )}
      </Slide>
    </main>
  );
}
