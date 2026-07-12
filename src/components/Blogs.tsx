import Reveal from "@/components/Reveal";
import { blogs, profile } from "@/lib/data";

export default function Blogs() {
  return (
    <section id="scroll-archive" className="relative py-28 px-6 md:px-16">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <h2 className="text-chapter-label mb-3">Scroll Archive</h2>
          <p className="text-section-heading text-3xl md:text-4xl mb-16">Technical writing</p>
        </Reveal>

        {blogs.length === 0 ? (
          <Reveal>
            <div className="surface-raised rounded-lg p-10 text-center">
              <p className="text-body mb-4">Articles are on the way.</p>
              <a
                href={profile.medium}
                target="_blank"
                rel="noopener noreferrer"
                className="font-heading uppercase tracking-wide text-sm text-ink hover:text-active transition-colors"
              >
                Follow on Medium ↗
              </a>
            </div>
          </Reveal>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {blogs.map((post, i) => (
              <Reveal key={post.title} delay={i * 0.08}>
                <a
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block surface-raised rounded-lg p-6 h-full"
                >
                  <p className="text-technical-label mb-2">{post.topic}</p>
                  <p className="text-section-heading text-xl mb-2">{post.title}</p>
                  <p className="text-body text-sm mb-4">{post.premise}</p>
                  <p className="text-metadata">
                    {post.date} · {post.readTime}
                  </p>
                </a>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
