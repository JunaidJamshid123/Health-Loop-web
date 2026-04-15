import waterIcon from "@/assets/svg/water.png";
import sleepIcon from "@/assets/svg/sleepingg.svg";
import walkIcon from "@/assets/svg/walk.svg";
import moodIcon from "@/assets/svg/mood.svg";
import caloriesIcon from "@/assets/svg/calaroiess.svg";
import exerciseIcon from "@/assets/svg/excercisee.svg";
import { Link } from "@tanstack/react-router";

const footerIcons = [waterIcon, sleepIcon, walkIcon, moodIcon, caloriesIcon, exerciseIcon];

export default function Footer() {
  return (
    <footer className="bg-footer text-footer-foreground py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <a href="#" className="text-xl font-bold">
              Health<span className="text-primary">Loop</span>
              <span className="inline-block h-2 w-2 rounded-full bg-primary ml-1" />
            </a>
            <p className="text-sm text-footer-foreground/60 mt-1">Your Daily Health Companion</p>
          </div>

          <div className="flex items-center gap-4">
            {footerIcons.map((icon, i) => (
              <img key={i} src={icon} alt="" className="w-6 h-6 object-contain opacity-60" />
            ))}
          </div>

          <div className="flex gap-6 text-sm text-footer-foreground/60">
            <Link to="/privacy-policy" className="hover:text-footer-foreground transition-colors">Privacy Policy</Link>
            <a href="#" className="hover:text-footer-foreground transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-footer-foreground transition-colors">Contact</a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-footer-foreground/10 text-center text-sm text-footer-foreground/40">
          Made with ❤️ for your health · © {new Date().getFullYear()} HealthLoop
        </div>
      </div>
    </footer>
  );
}
