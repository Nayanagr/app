import { PhotoSetAbout } from "@/components/photo-set-about";

export function Section6() {
  return (
    <div className="bg-pink-600 p-10 lg:px-32">
      <div className="grid lg:mt-12 lg:grid-cols-2">
        <text x={0} className="text-left text-7xl font-extrabold text-white">
          MEET THE TEAM
        </text>
      </div>
      <div className="mb-32 mt-10">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <PhotoSetAbout
            link=""
            name="Shubham Shrivastav"
            image="/images/placeholder.png"
            person={false}
            position="Founder"
          />
          <PhotoSetAbout
            link=""
            name="Shivanshee sahu"
            image="/images/placeholder.png"
            person={false}
            position="Co-Founder"
          />
          <PhotoSetAbout
            link=""
            name="Nayan Agrawal"
            image="/images/placeholder.png"
            person={false}
            position="-"
          />
          <PhotoSetAbout
            link=""
            name="John Doe"
            image="/images/placeholder.png"
            person={false}
            position="-"
          />
        </div>
      </div>
    </div>
  );
}
