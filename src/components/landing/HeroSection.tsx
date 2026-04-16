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
    <section className="relative min-h-[100dvh] flex items-center overflow-hidden pt-16">
      {/* Background blobs — contained */}
      <div className="absolute top-20 left-0 w-48 sm:w-72 h-48 sm:h-72 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-0 w-64 sm:w-96 h-64 sm:h-96 rounded-full bg-accent/10 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full py-8 sm:py-12">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 xl:gap-24 items-center">
          {/* Left — text */}
          <div className="space-y-5 sm:space-y-8 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-foreground tracking-tight">
              Your Daily Health{" "}
              <span className="text-primary">Companion</span>
            </h1>
            <p className="text-base sm:text-lg text-text-secondary max-w-lg leading-relaxed mx-auto lg:mx-0">
              Track your water, sleep, steps, mood, calories, and exercise — all in one beautiful app. Powered by AI insights.
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="xl" className="text-base sm:text-lg px-6 sm:px-10 h-12 sm:h-14">Download Now</Button>
              <Button variant="hero-outline" size="xl" className="text-base sm:text-lg px-6 sm:px-10 h-12 sm:h-14">
                <a href="#features">See Features</a>
              </Button>
            </div>
          </div>

          {/* Right — 3-phone fan */}
          <div className="flex justify-center items-center">
            {/* Mobile fan */}
            <div className="flex md:hidden justify-center items-end animate-float relative w-[min(85vw,340px)] aspect-square">
              <div className="absolute inset-0 rounded-full" style={{ background: "radial-gradient(circle, rgba(255,192,103,0.06) 0%, transparent 70%)" }} />
              <PhoneFrame src={splashImg} alt="Splash Screen" className="absolute left-0 bottom-0 w-[44%]" style={{ transform: "rotate(-8deg) translateY(12px)", zIndex: 1 }} />
              <PhoneFrame src={homeImg} alt="HealthLoop Dashboard" className="absolute left-1/2 bottom-[10px] w-[47%]" style={{ transform: "translateX(-50%) scale(1.05)", zIndex: 3 }} />
              <PhoneFrame src={welcomeImg} alt="Welcome Screen" className="absolute right-0 bottom-0 w-[44%]" style={{ transform: "rotate(8deg) translateY(12px)", zIndex: 2 }} />
            </div>

            {/* Tablet fan */}
            <div className="hidden md:flex lg:hidden justify-center items-center animate-float group relative w-[min(70vw,440px)] aspect-[11/10.5]">
              <div className="absolute inset-0 rounded-full" style={{ background: "radial-gradient(circle, rgba(255,192,103,0.06) 0%, transparent 70%)" }} />
              <PhoneFrame src={splashImg} alt="Splash Screen" className="absolute left-0 top-1/2 w-[41%] transition-transform duration-400 ease-out group-hover:!rotate-[-3deg]" style={{ transform: "rotate(-8deg) translateY(calc(-50% + 20px))", zIndex: 1 }} />
              <PhoneFrame src={homeImg} alt="HealthLoop Dashboard" className="absolute left-1/2 top-1/2 w-[45%]" style={{ transform: "translate(-50%, -55%) scale(1.05)", zIndex: 3 }} />
              <PhoneFrame src={welcomeImg} alt="Welcome Screen" className="absolute right-0 top-1/2 w-[41%] transition-transform duration-400 ease-out group-hover:!rotate-[3deg]" style={{ transform: "rotate(8deg) translateY(calc(-50% + 20px))", zIndex: 2 }} />
            </div>

            {/* Desktop fan */}
            <div className="hidden lg:flex justify-center items-center animate-float group relative w-full max-w-[560px] aspect-[56/52]">
              <div className="absolute inset-0 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(255,192,103,0.06) 0%, transparent 70%)" }} />

              <PhoneFrame
                src={splashImg}
                alt="Splash Screen"
                className="absolute left-[7%] top-1/2 w-[43%] transition-transform duration-400 ease-out group-hover:[transform:rotate(-3deg)_translateX(-18%)_translateY(calc(-50%+20px))]"
                style={{ transform: "rotate(-8deg) translateX(-18%) translateY(calc(-50% + 20px))", zIndex: 1 }}
              />

              <PhoneFrame
                src={homeImg}
                alt="HealthLoop Dashboard"
                className="absolute left-1/2 top-1/2 w-[46%]"
                style={{ transform: "translate(-50%, -55%) scale(1.05)", zIndex: 3 }}
              />

              <PhoneFrame
                src={welcomeImg}
                alt="Welcome Screen"
                className="absolute right-[7%] top-1/2 w-[43%] transition-transform duration-400 ease-out group-hover:[transform:rotate(3deg)_translateX(18%)_translateY(calc(-50%+20px))]"
                style={{ transform: "rotate(8deg) translateX(18%) translateY(calc(-50% + 20px))", zIndex: 2 }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
