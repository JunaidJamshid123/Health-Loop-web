import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const cards = [
  { emoji: "🔒", title: "Privacy First", desc: "All data stored locally on your device. Your health data never leaves your phone." },
  { emoji: "📶", title: "Works Offline", desc: "No internet needed for daily tracking. Everything works seamlessly without a connection." },
  { emoji: "🎯", title: "Goal-Oriented", desc: "Personalized targets that adapt to you. Set, track, and achieve your health goals." },
];

export default function TrustSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-12">
          Built for Your <span className="text-primary">Wellbeing</span>
        </h2>

        <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {cards.map((c, i) => (
            <div
              key={c.title}
              className={`bg-card rounded-[1.25rem] p-6 border border-border text-center shadow-sm transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/15 flex items-center justify-center text-3xl mx-auto mb-4">
                {c.emoji}
              </div>
              <h3 className="font-bold text-foreground mb-2">{c.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
