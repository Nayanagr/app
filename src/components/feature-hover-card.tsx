import { LucideProps } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureHoverCardProps {
  title: string;
  description: string;
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
  className?: string;
}

export function FeatureHoverCard({
  title,
  description,
  icon: Icon,
  className,
}: FeatureHoverCardProps) {
  return (
    <div
      className={cn(
        "group/feature relative flex flex-col from-primary/20 to-transparent py-10 hover:bg-gradient-to-t lg:border-l",
        className,
      )}
    >
      <div className="relative z-10 mx-auto mb-4 px-10">
        <Icon size={48} className="text-primary" />
      </div>
      <div className="relative z-10 mx-auto mb-2 px-10 text-lg font-bold">
        <div className="absolute inset-y-0 left-0 h-6 w-1 origin-center rounded-r-full bg-neutral-300 transition-all duration-200 group-hover/feature:h-8 group-hover/feature:bg-primary" />
        <span className="inline-block text-center text-2xl">{title}</span>
      </div>
    </div>
  );
}
