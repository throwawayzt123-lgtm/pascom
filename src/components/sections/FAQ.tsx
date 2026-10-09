import { Icon } from "@/components/ui/Icon";
import { faqs } from "@/data/content";
import { site, whatsappLink } from "@/data/site";

export function FAQ() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <section className="section bg-surface">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c") }}
      />
      <div className="container-site grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="reveal lg:sticky lg:top-[calc(var(--header-h)+2rem)] lg:self-start">
          <span className="eyebrow">FAQ</span>
          <h2 className="text-h2 mt-5">
            Questions? <span className="highlight">We&apos;ve got answers.</span>
          </h2>
          <p className="text-lead mt-5 text-muted">
            Everything you need to know about working with a TikTok Shop agency. Can&apos;t find
            what you&apos;re looking for? Talk to us directly.
          </p>
          <div className="mt-8 rounded-(--round-lg) border border-line bg-white p-6 shadow-(--elevation-sm)">
            <p className="font-bold">Still have questions?</p>
            <p className="mt-1 text-sm text-muted">Our team usually replies within a few hours.</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp btn-sm"
              >
                <Icon name="whatsapp" size={18} />
                WhatsApp
              </a>
              <a href={`mailto:${site.email}`} className="btn btn-outline btn-sm">
                <Icon name="mail" size={16} />
                Email us
              </a>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={faq.question}
              name="faq"
              open={index === 0}
              className="reveal group rounded-(--round-lg) border border-line bg-white transition-[border-color,box-shadow] duration-300 open:border-accent-200 open:shadow-(--elevation-md)"
            >
              <summary className="flex items-center justify-between gap-4 p-5 text-left sm:p-6">
                <span className="text-[1.02rem] font-bold sm:text-lg">{faq.question}</span>
                <span className="grid size-9 shrink-0 place-items-center rounded-full border border-line text-accent-700 transition-all duration-300 group-open:rotate-45 group-open:border-transparent group-open:bg-accent-500 group-open:text-on-primary">
                  <Icon name="plus" size={18} />
                </span>
              </summary>
              <p className="-mt-1 px-5 pb-6 leading-relaxed text-muted sm:px-6">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
