import ProjectCard from "./ProjectCard";
import { projects } from "@/data/content";

export default function Portfolio() {
  return (
    <section id="work" className="bg-white py-20 md:py-28 dark:bg-night-2">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 max-w-2xl">
          <h2 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
            Selected work
          </h2>
          <p className="mt-4 text-lg text-ink/70 dark:text-fog/70">
            A few recent projects across branding, product design and the web.
          </p>
        </div>

        <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
