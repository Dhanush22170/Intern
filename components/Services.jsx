import ServiceCard from "./ServiceCard";
import { services } from "@/data/content";

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <div className="mb-12 max-w-2xl">
        <h2 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
          What we do
        </h2>
        <p className="mt-4 text-lg text-ink/70 dark:text-fog/70">
          One small team, four disciplines. We take a project from first sketch to launch.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </section>
  );
}
