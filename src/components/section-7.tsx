import { PhotoSetAbout } from "@/components/photo-set-about";

export function Section7() {
  return (
    <div className="break-words bg-primary p-10 lg:px-32">
      <div className="grid lg:mt-12 lg:grid-cols-2">
        <text x={0} className="text-left text-6xl font-extrabold text-white lg:text-7xl">
          INVESTORS
        </text>
      </div>
      <div className="mb-32 mt-10">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <PhotoSetAbout
            link=""
            name="Amazon Inc"
            image="/images/placeholder.png"
            person={false}
            position=""
          />
          <PhotoSetAbout
            link=""
            name="Flipkart.com"
            image="/images/placeholder.png"
            person={false}
            position=""
          />
          <PhotoSetAbout
            link=""
            name="Instagram.com"
            image="/images/placeholder.png"
            person={false}
            position=""
          />
          <PhotoSetAbout
            link=""
            name="Facebook.com"
            image="/images/placeholder.png"
            person={false}
            position=""
          />
        </div>
      </div>
    </div>
  );
}
