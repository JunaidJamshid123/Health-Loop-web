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
    <section id="screenshots" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-4">
          Beautiful. Simple. <span className="text-primary">Powerful.</span>
        </h2>
        <p className="text-text-secondary text-center mb-12 max-w-md mx-auto">
          Every screen is crafted to make health tracking effortless and enjoyable.
        </p>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto px-8 pb-6 snap-x snap-mandatory scrollbar-hide justify-center"
        style={{ scrollbarWidth: "none" }}
      >
        {screenshots.map((s) => (
          <div key={s.alt} className="snap-center shrink-0">
            <PhoneMockup src={s.src} alt={s.alt} className="w-52 sm:w-60" />
          </div>
        ))}
      </div>
    </section>
  );
}
