import { Button } from "@/components/ui/button";
import womanImg from "@/assets/woman.png";
import waterIcon from "@/assets/svg/water.png";
import sleepIcon from "@/assets/svg/sleepingg.svg";
import walkIcon from "@/assets/svg/walk.svg";
import moodIcon from "@/assets/svg/mood.svg";
import caloriesIcon from "@/assets/svg/calaroiess.svg";
import exerciseIcon from "@/assets/svg/excercisee.svg";

const icons = [waterIcon, caloriesIcon, exerciseIcon, walkIcon, moodIcon, sleepIcon];

export default function DownloadSection() {
  return (
    <section id="download" className="relative py-16 sm:py-24 bg-primary overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-48 sm:w-64 h-48 sm:h-64 rounded-full bg-primary-light/50 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-56 sm:w-80 h-56 sm:h-80 rounded-full bg-accent/20 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="space-y-5 sm:space-y-6 text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-foreground">
              Start Your Health Journey Today
            </h2>
            <p className="text-primary-foreground/80 text-base sm:text-lg max-w-md mx-auto lg:mx-0">
              Download HealthLoop — it's free, private, and works offline. Your wellness journey begins with a single tap.
            </p>
            <div className="flex justify-center lg:justify-start">
              <Button variant="cta" size="xl" className="text-base sm:text-lg px-6 sm:px-10 h-12 sm:h-14">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 2.302a1 1 0 0 1 0 1.38l-1.709 1.069-2.584-2.584L17.698 9.508zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z"/>
                </svg>
                Download on Google Play
              </Button>
            </div>
            <div className="flex gap-3 pt-2 justify-center lg:justify-start">
              {icons.map((icon, i) => (
                <span key={i} className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                  <img src={icon} alt="" className="w-5 h-5 sm:w-6 sm:h-6 object-contain" />
                </span>
              ))}
            </div>
          </div>

          <div className="flex justify-center">
            <img
              src={womanImg}
              alt="Meditation illustration"
              className="w-48 sm:w-64 md:w-72 lg:w-80 animate-float-slow drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
