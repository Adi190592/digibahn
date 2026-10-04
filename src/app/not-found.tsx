import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[80svh] items-center pt-24">
      <div className="shell">
        <p className="eyebrow mb-8">404 / Not found</p>
        <h1 className="text-display-sm font-semibold tracking-tight">
          This route
          <br />
          isn&rsquo;t connected.
        </h1>
        <p className="mt-8 max-w-prose text-lead text-text-primary/70">
          The page you&rsquo;re looking for doesn&rsquo;t exist — but the rest of the system does.
        </p>
        <Link href="/" className="btn-primary btn-arrow mt-12 text-base">
          Back to home
        </Link>
      </div>
    </section>
  );
}
