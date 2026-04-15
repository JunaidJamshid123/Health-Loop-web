import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import waterIcon from "@/assets/svg/water.png";
import sleepIcon from "@/assets/svg/sleepingg.svg";
import walkIcon from "@/assets/svg/walk.svg";
import moodIcon from "@/assets/svg/mood.svg";
import caloriesIcon from "@/assets/svg/calaroiess.svg";
import exerciseIcon from "@/assets/svg/excercisee.svg";

const features = [
  { icon: waterIcon, title: "Water Tracking", desc: "Track daily water intake with a simple glass counter. Set personalized hydration goals.", color: "bg-sky" },
  { icon: sleepIcon, title: "Sleep Monitoring", desc: "Log sleep hours and track patterns. Get insights on your sleep quality over time.", color: "bg-accent" },
  { icon: walkIcon, title: "Step Counter", desc: "Monitor your daily steps and stay active. Set goals and track weekly trends.", color: "bg-primary" },
  { icon: moodIcon, title: "Mood Check-ins", desc: "Log your daily mood with beautiful emoji check-ins. Understand your emotional patterns.", color: "bg-coral" },
  { icon: caloriesIcon, title: "Calorie Tracker", desc: "Track your daily food intake. Set calorie goals and monitor your nutrition journey.", color: "bg-primary-light" },
  { icon: exerciseIcon, title: "Exercise Log", desc: "Record exercise minutes and types. Stay on top of your fitness routine.", color: "bg-mint" },
];

export default function FeaturesSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="features" className="py-24 section-beige-light">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Everything You Need to Stay <span className="text-primary">Healthy</span>
          </h2>
        </div>

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`bg-card rounded-[1.25rem] p-6 border border-border shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className={`w-14 h-14 rounded-2xl ${f.color} flex items-center justify-center mb-4`}>
                <img src={f.icon} alt={f.title} className="w-8 h-8 object-contain" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
