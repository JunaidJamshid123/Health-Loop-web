import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import PhoneMockup from "./PhoneMockup";
import splashImg from "@/assets/splash.png";

const bullets = [
  "Personalized advice based on YOUR health data",
  "Understands your goals, habits, and patterns",
  "Available anytime — no appointments needed",
];

export default function AISection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-16 sm:py-24 section-beige" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className={`space-y-5 sm:space-y-6 text-center lg:text-left transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
              Your Personal AI <span className="text-primary">Health Coach</span>
            </h2>
            <p className="text-text-secondary leading-relaxed max-w-lg mx-auto lg:mx-0">
              Get personalized health insights powered by AI. Ask questions about your health data, get recommendations, and understand your trends — all in a friendly chat interface.
            </p>
            <ul className="space-y-4 text-left max-w-lg mx-auto lg:mx-0">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-bold text-accent-foreground">✓</span>
                  <span className="text-sm text-foreground font-medium">{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={`flex justify-center transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
            <PhoneMockup src={splashImg} alt="AI Health Coach" className="w-44 sm:w-56 md:w-64 animate-float-slow" />
          </div>
        </div>
      </div>
    </section>
  );
}
