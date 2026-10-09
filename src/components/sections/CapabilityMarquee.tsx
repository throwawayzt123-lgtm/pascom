import { Icon } from "@/components/ui/Icon";
import { capabilities } from "@/data/content";

export function CapabilityMarquee() {
  // Rendered twice so the -50% translate loops seamlessly.
  const items = [...capabilities, ...capabilities];
  return (
    <section aria-label="Our capabilities" className="border-b border-line bg-white py-6">
      <div className="marquee-mask overflow-hidden">
        <ul className="animate-marquee flex w-max items-center gap-10 pr-10 hover:[animation-play-state:paused]">
          {items.map((item, index) => (
            <li
              key={`${item}-${index}`}
              aria-hidden={index >= capabilities.length ? true : undefined}
              className="flex items-center gap-10 font-display text-lg font-semibold whitespace-nowrap text-ink-900/80 sm:text-xl"
            >
              {item}
              <Icon name="sparkles" size={18} className="text-accent-500" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
