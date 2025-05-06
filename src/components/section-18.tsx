import Link from "next/link";

import { PhotoSetAbout } from "@/components/photo-set-about";

export function Section18() {
  return (
    <div className="bg-gradient-to-tr from-transparent via-amber-50 to-transparent p-10 lg:px-32">
      <div className="grid lg:mt-12 lg:grid-cols-2">
        <text x={0} className="text-left text-7xl font-extrabold">
          MEET THE TEAM
        </text>
      </div>
      <div className="my-10">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <a
  href="https://www.linkedin.com/in/shubham-shrivastav-b418aa287/"
  target="_blank"
  rel="noopener noreferrer"
>
          <PhotoSetAbout
            link="https://www.linkedin.com/in/shubham-shrivastav-b418aa287/"
            name="Shubham Shrivastav"
            image="/images/placeholder.png"
            person={false}
            position="Founder"
          /></a>
          <a
  href="https://www.linkedin.com/in/nayan-agrawal-goyal/"
  target="_blank"
  rel="noopener noreferrer">
          <PhotoSetAbout
            link="https://www.linkedin.com/in/shivansheesahu/"
            name="Shivanshee sahu"
            image="/images/placeholder.png"
            person={false}
            position="Co-Founder"
          />
          </a>
          <a
  href="https://www.linkedin.com/in/nayan-agrawal-goyal/"
  target="_blank"
  rel="noopener noreferrer"
>
  <PhotoSetAbout
    link="https://www.linkedin.com/in/nayan-agrawal-goyal/"
    name="Nayan Agrawal"
    image="/images/nayan.png"
    person={false}
    position="Co-Founder"
  />
</a>
<a
  href="https://www.linkedin.com/in/nayan-agrawal-goyal/"
  target="_blank"
  rel="noopener noreferrer"
>
          <PhotoSetAbout
            link="https://www.linkedin.com/in/shaurya-bothra-7a8a81286/"
            name="Shaurya Bothra"
            image="/images/placeholder.png"
            person={false}
            position="-"
          /></a>
        </div>
      </div>
      <div>
        <text>Wanna Be A Part of The Team? </text>
        <Link href="/careers" className="text-primary">
          Join Us!
        </Link>
      </div>
    </div>
  );
}
