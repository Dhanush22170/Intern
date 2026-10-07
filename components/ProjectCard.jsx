import Image from "next/image";

export default function ProjectCard({ title, category, image }) {
  return (
    <article className="group">
      <div className="relative aspect-[3/2] overflow-hidden rounded-2xl bg-ink/10">
        <Image
          src={image}
          alt={`${title} project thumbnail`}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 flex items-end bg-gradient-to-t from-ink/70 via-transparent to-transparent p-5 opacity-0 transition duration-300 group-hover:opacity-100">
          <span className="rounded-full bg-paper px-3 py-1 text-sm font-medium text-ink">
            {category}
          </span>
        </div>
      </div>
      <h3 className="mt-4 font-display text-xl font-bold">{title}</h3>
      <p className="text-ink/60 dark:text-fog/60">{category}</p>
    </article>
  );
}
