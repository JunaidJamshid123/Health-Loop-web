import { cn } from "@/lib/utils";

interface PhoneMockupProps {
  src: string;
  alt: string;
  className?: string;
}

export default function PhoneMockup({ src, alt, className }: PhoneMockupProps) {
  return (
    <div className={cn("relative inline-block", className)}>
      <div className="relative rounded-[2.5rem] border-[6px] border-foreground/10 bg-foreground/5 p-1.5 shadow-2xl">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-5 w-24 bg-foreground/10 rounded-b-2xl z-10" />
        <div className="rounded-[2rem] overflow-hidden bg-card">
          <img src={src} alt={alt} className="w-full h-auto block" loading="lazy" />
        </div>
      </div>
    </div>
  );
}
