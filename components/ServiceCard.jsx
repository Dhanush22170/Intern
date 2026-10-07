import Icon from "./icons";

export default function ServiceCard({ icon, title, description }) {
  return (
    <article className="rounded-2xl border border-ink/10 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-cobalt/40 dark:border-fog/10 dark:bg-night-2 dark:hover:border-mint/40">
      <div className="mb-5 grid h-14 w-14 place-items-center rounded-xl bg-mint text-ink">
        <Icon name={icon} />
      </div>
      <h3 className="font-display text-xl font-bold">{title}</h3>
      <p className="mt-2 leading-relaxed text-ink/70 dark:text-fog/70">{description}</p>
    </article>
  );
}
