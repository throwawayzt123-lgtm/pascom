import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  variant?: "dark" | "light";
  onClick?: () => void;
  preload?: boolean;
};

/** Horizontal lockup: the "P" mark from the logo + wordmark. */
export function Logo({ variant = "light", onClick, preload = false }: LogoProps) {
  const isLight = variant === "light";
  return (
    <Link
      href="/"
      onClick={onClick}
      aria-label="PashaCommerce home"
      className="group inline-flex shrink-0 items-center gap-3"
    >
      <span
        className={
          isLight
            ? "grid size-11 place-items-center rounded-xl bg-white shadow-sm"
            : "grid size-11 place-items-center"
        }
      >
        <Image
          src="/images/logo/logo-mark.png"
          alt=""
          width={131}
          height={164}
          className="h-8 w-auto transition-transform duration-300 group-hover:scale-105"
          preload={preload}
        />
      </span>
      <span className="leading-none">
        <span
          className={`block font-sans text-[1.15rem] font-bold tracking-[0.3em] ${
            isLight ? "text-white" : "text-ink-900"
          }`}
        >
          PASHA
        </span>
        <span
          className={`mt-1.5 flex items-center gap-1.5 text-[0.58rem] font-semibold tracking-[0.38em] ${
            isLight ? "text-accent-200" : "text-muted"
          }`}
        >
          <span className="h-px w-3 bg-current opacity-60" aria-hidden="true" />
          COMMERCE
        </span>
      </span>
    </Link>
  );
}
