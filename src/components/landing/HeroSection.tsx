import { Button } from "@/components/ui/button";
import homeImg from "@/assets/home.png";
import splashImg from "@/assets/splash.png";
import welcomeImg from "@/assets/welcome.png";

function PhoneFrame({ src, alt, className, style }: { src: string; alt: string; className?: string; style?: React.CSSProperties }) {
  return (
    <div className={className} style={style}>
      <div
        className="bg-card overflow-hidden"
        style={{
          borderRadius: 36,
          border: "8px solid rgba(255,255,255,0.95)",
          boxShadow: "0 20px 60px rgba(0,0,0,0.15), 0 8px 24px rgba(0,0,0,0.08)",
        }}
      >
        <img src={src} alt={alt} className="w-full h-auto block" loading="lazy" />
      </div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-visible pt-16">
      {/* Background blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-accent/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full py-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-32 items-center">
          {/* Left 50% — text */}
          <div className="space-y-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-foreground tracking-tight">
              Your Daily Health{" "}
              <span className="text-primary">Companion</span>
            </h1>
            <p className="text-lg text-text-secondary max-w-lg leading-relaxed">
              Track your water, sleep, steps, mood, calories, and exercise — all in one beautiful app. Powered by AI insights.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="xl">Download Now</Button>
              <Button variant="hero-outline" size="xl">
                <a href="#features">See Features</a>
              </Button>
            </div>
          </div>

          {/* Right 50% — 3-phone fan */}
          <div className="flex justify-center items-center overflow-visible">
            {/* Mobile fan (small) */}
            <div className="flex md:hidden justify-center items-end animate-float" style={{ position: "relative", width: 340, height: 340 }}>
              <div style={{ position: "absolute", inset: 0, borderRadius: "50%", background: "radial-gradient(circle, rgba(255,192,103,0.06) 0%, transparent 70%)" }} />
              <PhoneFrame src={splashImg} alt="Splash Screen" style={{ position: "absolute", left: 0, bottom: 0, width: 150, transform: "rotate(-8deg) translateY(12px)", zIndex: 1 }} />
              <PhoneFrame src={homeImg} alt="HealthLoop Dashboard" style={{ position: "absolute", left: "50%", bottom: 10, width: 160, transform: "translateX(-50%) scale(1.05)", zIndex: 3 }} />
              <PhoneFrame src={welcomeImg} alt="Welcome Screen" style={{ position: "absolute", right: 0, bottom: 0, width: 150, transform: "rotate(8deg) translateY(12px)", zIndex: 2 }} />
            </div>

            {/* Tablet fan */}
            <div className="hidden md:flex lg:hidden justify-center items-center animate-float group" style={{ position: "relative", width: 440, height: 420, overflow: "visible" }}>
              <div style={{ position: "absolute", inset: 0, borderRadius: "50%", background: "radial-gradient(circle, rgba(255,192,103,0.06) 0%, transparent 70%)" }} />
              <PhoneFrame src={splashImg} alt="Splash Screen" className="absolute transition-transform duration-400 ease-out group-hover:!rotate-[-3deg]" style={{ left: 0, top: "50%", width: 180, transform: "rotate(-8deg) translateY(calc(-50% + 20px))", zIndex: 1 }} />
              <PhoneFrame src={homeImg} alt="HealthLoop Dashboard" className="absolute" style={{ left: "50%", top: "50%", width: 200, transform: "translate(-50%, -55%) scale(1.05)", zIndex: 3 }} />
              <PhoneFrame src={welcomeImg} alt="Welcome Screen" className="absolute transition-transform duration-400 ease-out group-hover:!rotate-[3deg]" style={{ right: 0, top: "50%", width: 180, transform: "rotate(8deg) translateY(calc(-50% + 20px))", zIndex: 2 }} />
            </div>

            {/* Desktop fan */}
            <div className="hidden lg:flex justify-center items-center animate-float group" style={{ position: "relative", width: 560, height: 520, overflow: "visible" }}>
              {/* Background glow */}
              <div style={{ position: "absolute", inset: 0, borderRadius: "50%", background: "radial-gradient(circle, rgba(255,192,103,0.06) 0%, transparent 70%)" }} />

              {/* Left — Splash */}
              <PhoneFrame
                src={splashImg}
                alt="Splash Screen"
                className="absolute transition-transform duration-400 ease-out group-hover:[transform:rotate(-3deg)_translateX(-100px)_translateY(calc(-50%+20px))]"
                style={{ left: 40, top: "50%", width: 240, transform: "rotate(-8deg) translateX(-100px) translateY(calc(-50% + 20px))", zIndex: 1 }}
              />

              {/* Center — Home */}
              <PhoneFrame
                src={homeImg}
                alt="HealthLoop Dashboard"
                className="absolute"
                style={{ left: "50%", top: "50%", width: 260, transform: "translate(-50%, -55%) scale(1.05)", zIndex: 3 }}
              />

              {/* Right — Welcome */}
              <PhoneFrame
                src={welcomeImg}
                alt="Welcome Screen"
                className="absolute transition-transform duration-400 ease-out group-hover:[transform:rotate(3deg)_translateX(100px)_translateY(calc(-50%+20px))]"
                style={{ right: 40, top: "50%", width: 240, transform: "rotate(8deg) translateX(100px) translateY(calc(-50% + 20px))", zIndex: 2 }}
              />
            </div>
          </div>
        </div>


      </div>
    </section>
  );
}
