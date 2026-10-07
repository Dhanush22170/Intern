export default function Footer() {
  return (
    <footer className="border-t border-ink/10 py-8 dark:border-fog/10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 text-sm text-ink/60 sm:flex-row dark:text-fog/60">
        <p>&copy; {new Date().getFullYear()} Plainsight Studio</p>
        <p>Built with Next.js and Tailwind CSS</p>
      </div>
    </footer>
  );
}
