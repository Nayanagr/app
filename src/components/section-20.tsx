import { LogoSetAbout } from "@/components/logo-set-about";

export function Section20() {
  return (
    <div className="break-words bg-gradient-to-tr from-transparent via-amber-50 to-transparent p-10 lg:px-32">
      <div className="grid lg:mt-12 lg:grid-cols-2">
        <text x={0} className="text-left text-6xl font-extrabold lg:text-7xl">
          INVESTORS
        </text>
      </div>
      <div className="mb-32 mt-10">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
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
    </div>
  );
}
