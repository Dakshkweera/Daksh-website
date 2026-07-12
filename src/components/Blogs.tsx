import Reveal from "@/components/Reveal";
import { blogs, profile } from "@/lib/data";

export default function Blogs() {
  return (
    <section id="scroll-archive" className="relative py-28 px-6 md:px-16">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <h2 className="font-heading uppercase tracking-[0.3em] text-sm text-neon-cyan mb-3">
            Scroll Archive
          </h2>
          <p className="font-display text-3xl md:text-4xl font-bold mb-16 text-glow-purple">
            Technical writing
          </p>
        </Reveal>

        {blogs.length === 0 ? (
          <Reveal>
            <div className="glass-panel rounded-lg p-10 border border-border-glow text-center">
              <p className="text-foreground-muted mb-4">Articles are on the way.</p>
              <a
                href={profile.medium}
                target="_blank"
                rel="noopener noreferrer"
                className="font-heading uppercase tracking-wide text-sm text-neon-cyan hover:text-glow-cyan transition-colors"
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
                  className="block glass-panel glow-border rounded-lg p-6 h-full"
                >
                  <p className="text-xs uppercase tracking-wide text-neon-cyan mb-2">{post.topic}</p>
                  <p className="font-display text-xl font-bold text-neon-purple-light mb-2">
                    {post.title}
                  </p>
                  <p className="text-sm text-foreground-muted mb-4">{post.premise}</p>
                  <p className="text-xs text-foreground-muted">
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
