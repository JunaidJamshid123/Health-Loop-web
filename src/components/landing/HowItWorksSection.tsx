import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const steps = [
  { icon: "📱", title: "Download", desc: "Get HealthLoop free from the Play Store", color: "bg-primary" },
  { icon: "🎯", title: "Set Your Goals", desc: "Customize targets for water, sleep, steps, and more", color: "bg-accent" },
  { icon: "📈", title: "Track & Improve", desc: "Log daily, see insights, and let AI guide you", color: "bg-mint" },
];

export default function HowItWorksSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="how-it-works" className="py-24 section-beige-light" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-16">
          Getting Started is <span className="text-primary">Easy</span>
        </h2>

        <div className="grid sm:grid-cols-3 gap-8 relative">
          {/* Connecting line */}
          <div className="hidden sm:block absolute top-10 left-[20%] right-[20%] h-0.5 border-t-2 border-dashed border-border" />

          {steps.map((s, i) => (
            <div
              key={s.title}
              className={`text-center relative transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className={`w-20 h-20 rounded-full ${s.color} flex items-center justify-center text-3xl mx-auto mb-4 shadow-lg relative z-10`}>
                {s.icon}
              </div>
              <span className="text-xs font-bold text-text-secondary uppercase tracking-wider">Step {i + 1}</span>
              <h3 className="text-lg font-bold text-foreground mt-1">{s.title}</h3>
              <p className="text-sm text-text-secondary mt-2 max-w-xs mx-auto">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
