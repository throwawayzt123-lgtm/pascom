import Link from "next/link";
import { Icon } from "@/components/ui/Icon";

export default function NotFound() {
  return (
    <section className="on-dark bg-black text-white relative isolate flex min-h-[70vh] items-center overflow-hidden">
      <div className="container-site py-24 text-center">
        <p className="highlight font-display text-[clamp(6rem,18vw,11rem)] leading-none font-bold">404</p>
        <h1 className="text-h2 mt-4 text-white">This page went out of stock</h1>
        <p className="text-lead mx-auto mt-4 max-w-lg text-white/70">
          The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get you back on track.
        </p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href="/" className="btn btn-primary btn-lg">
            <Icon name="home" size={18} />
            Back to home
          </Link>
          <Link href="/contact" className="btn btn-outline btn-lg">
            Contact us
          </Link>
        </div>
      </div>
    </section>
  );
}
