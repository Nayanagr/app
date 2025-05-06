import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoSetAboutProps {
  name: string;
  position: string;
  image: string;
  link: string;
  person: boolean;
  className?: string;
}

export function LogoSetAbout({
  name,
  position,
  image,
  link,
  person,
  className,
}: LogoSetAboutProps) {
  return (
    <div className={cn("flex flex-col items-center", className)}>
      <div className="overflow-hidden bg-muted">
        <Image alt="Team Member" src={image} width={400} height={500} />
      </div>
      <h4 className="mt-4 text-center font-heading text-2xl font-bold text-black">{name}</h4>
    </div>
  );
}
