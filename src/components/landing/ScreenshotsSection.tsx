import { useRef } from "react";
import PhoneMockup from "./PhoneMockup";
import homeImg from "@/assets/home.png";
import historyImg from "@/assets/history.png";
import analysisImg from "@/assets/analysis.png";
import profileImg from "@/assets/profile.png";
import welcomeImg from "@/assets/welcome.png";

const screenshots = [
  { src: homeImg, alt: "Home Dashboard" },
  { src: historyImg, alt: "Activity History" },
  { src: analysisImg, alt: "Health Analysis" },
  { src: profileImg, alt: "User Profile" },
  { src: welcomeImg, alt: "Welcome Screen" },
];

export default function ScreenshotsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section id="screenshots" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground text-center mb-3 sm:mb-4">
          Beautiful. Simple. <span className="text-primary">Powerful.</span>
        </h2>
        <p className="text-sm sm:text-base text-text-secondary text-center mb-8 sm:mb-12 max-w-md mx-auto">
          Every screen is crafted to make health tracking effortless and enjoyable.
        </p>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-4 sm:gap-6 overflow-x-auto px-4 sm:px-8 pb-6 snap-x snap-mandatory lg:justify-center"
        style={{ scrollbarWidth: "none", WebkitOverflowScrolling: "touch" }}
      >
        {screenshots.map((s) => (
          <div key={s.alt} className="snap-center shrink-0 first:pl-2 last:pr-2 lg:first:pl-0 lg:last:pr-0">
            <PhoneMockup src={s.src} alt={s.alt} className="w-40 sm:w-52 md:w-56 lg:w-60" />
          </div>
        ))}
      </div>
    </section>
  );
}
