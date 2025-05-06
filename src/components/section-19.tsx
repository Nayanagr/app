import { LogoSetAbout } from "@/components/logo-set-about";

export function Section19() {
  return (
    <div className="bg-gradient-to-br from-transparent via-amber-50 to-transparent p-10 lg:px-32">
      <div className="grid lg:mt-12 lg:grid-cols-2">
        <text x={0} className="text-left text-6xl font-extrabold">
          BRANDS WE WORK WITH
        </text>
      </div>
      <div className="mt-20 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <LogoSetAbout
          link=""
          name="NAME"
          image="/images/placeholder.png"
          person={false}
          position="POSITION"
        />
        <LogoSetAbout
          link=""
          name="NAME"
          image="/images/placeholder.png"
          person={false}
          position="POSITION"
        />
        <LogoSetAbout
          link=""
          name="NAME"
          image="/images/placeholder.png"
          person={false}
          position="POSITION"
        />
        <LogoSetAbout
          link=""
          name="NAME"
          image="/images/placeholder.png"
          person={false}
          position="POSITION"
        />
      </div>
    </div>
  );
}
