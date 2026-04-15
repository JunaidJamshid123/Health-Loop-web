import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import waterIcon from "@/assets/svg/water.png";
import sleepIcon from "@/assets/svg/sleepingg.svg";
import walkIcon from "@/assets/svg/walk.svg";
import moodIcon from "@/assets/svg/mood.svg";
import caloriesIcon from "@/assets/svg/calaroiess.svg";
import exerciseIcon from "@/assets/svg/excercisee.svg";

const metrics = [
  { label: "Water", value: 100, color: "bg-sky", icon: waterIcon },
  { label: "Sleep", value: 100, color: "bg-accent", icon: sleepIcon },
  { label: "Steps", value: 85, color: "bg-primary", icon: walkIcon },
  { label: "Calories", value: 92, color: "bg-coral", icon: caloriesIcon },
  { label: "Exercise", value: 100, color: "bg-mint", icon: exerciseIcon },
  { label: "Mood", value: 86, color: "bg-primary-light", icon: moodIcon },
];

export default function MetricsSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 section-beige" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-4">
          Track What <span className="text-primary">Matters</span>
        </h2>
        <p className="text-text-secondary text-center mb-12 max-w-md mx-auto">
          Monitor all your key health metrics in one beautiful dashboard.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {metrics.map((m, i) => (
            <div
              key={m.label}
              className={`bg-card rounded-2xl p-5 border border-border shadow-sm transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <img src={m.icon} alt={m.label} className="w-6 h-6 object-contain" />
                  <span className="font-semibold text-foreground">{m.label}</span>
                </div>
                <span className="text-sm font-bold text-foreground">{m.value}%</span>
              </div>
              <div className="h-2.5 rounded-full bg-border overflow-hidden">
                <div
                  className={`h-full rounded-full ${m.color} transition-all duration-1000 ease-out`}
                  style={{ width: isVisible ? `${m.value}%` : "0%" }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
