import Link from "next/link";

import { PhotoSetAbout } from "@/components/photo-set-about";

export function Section18() {
  return (
    <div className="lg:px-32 px-10 bg-gradient-to-tr from-transparent to-transparent via-amber-50 py-10">
      <div className="grid lg:grid-cols-2 lg:mt-12">
        <text x={0} className="font-extrabold text-7xl text-left">
          MEET THE TEAM
        </text>
      </div>
      <div className="mt-10 mb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
