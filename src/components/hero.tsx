import Image from "next/image";

import { Avatar, AvatarImage } from "@/components/ui/avatar";

export function Hero() {
  return (
    <section className="container flex flex-col items-center gap-10 bg-gradient-to-br pb-28 pt-20 sm:gap-14 lg:flex-row">
      <div className="flex flex-1 flex-col items-center gap-8 lg:items-start lg:gap-10">
        <div className="flex items-center gap-3">
          <div className="flex">
            <Avatar className="border-2 border-white">
              <AvatarImage alt="@john" src="/images/testimonial-1.avif" />
            </Avatar>
            <Avatar className="-ml-4 border-2 border-white">
              <AvatarImage alt="@max" src="/images/testimonial-2.avif" />
            </Avatar>
            <Avatar className="-ml-4 border-2 border-white">
              <AvatarImage alt="@bob" src="/images/testimonial-3.avif" />
            </Avatar>
            <Avatar className="-ml-4 border-2 border-white">
              <AvatarImage alt="@emily" src="/images/testimonial-4.avif" />
            </Avatar>
            <Avatar className="-ml-4 border-2 border-white">
              <AvatarImage alt="@michael" src="/images/testimonial-5.avif" />
            </Avatar>
          </div>
          <div>
            <div className="flex items-center">
              <svg
                fill="none"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-yellow-500"
              >
                <polygon
                  fill="currentColor"
                  points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                />
              </svg>
              <svg
                fill="none"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-yellow-500"
              >
                <polygon
                  fill="currentColor"
                  points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                />
              </svg>
              <svg
                fill="none"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-yellow-500"
              >
                <polygon
                  fill="currentColor"
                  points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                />
              </svg>
              <svg
                fill="none"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-yellow-500"
              >
                <polygon
                  fill="currentColor"
                  points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                />
              </svg>
              <svg
                fill="none"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-yellow-500"
              >
                <polygon
                  fill="currentColor"
                  points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                />
              </svg>
            </div>
            <span className="mt-1 text-sm font-semibold text-muted-foreground">
              Join
              <span className="text-foreground"> 1000+ </span>
              creators
            </span>
          </div>
        </div>
        <h1 className="max-w-2xl text-center font-heading text-4xl font-bold tracking-tight sm:text-6xl lg:text-left">
          Start Earning as an Influencer
        </h1>
        <p className="max-w-md text-center text-lg text-muted-foreground sm:text-xl lg:text-left">
          Create Social Media Posts for Brands and earn money as a creator.
        </p>
        <div className="grid grid-cols-2 gap-3 text-center">
          <button className="group relative flex items-center overflow-hidden rounded-md bg-yellow-500 px-6 py-3 font-medium transition-all">
            <span className="absolute right-0 top-0 inline-block size-4 rounded bg-yellow-700 transition-all duration-500 ease-in-out group-hover:-mr-4 group-hover:-mt-4">
              <span className="absolute right-0 top-0 size-5 -translate-y-1/2 translate-x-1/2 rotate-45 bg-white" />
            </span>
            <span className="absolute bottom-0 left-0 inline-block size-4 rotate-180 rounded bg-yellow-700 transition-all duration-500 ease-in-out group-hover:-mb-4 group-hover:-ml-4">
              <span className="absolute right-0 top-0 size-5 -translate-y-1/2 translate-x-1/2 rotate-45 bg-white" />
            </span>
            <span className="absolute bottom-0 left-0 size-full -translate-x-full rounded-md bg-yellow-400 transition-all delay-200 duration-500 ease-in-out group-hover:translate-x-0" />
            <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
              Get Started
            </span>
          </button>
        </div>
      </div>
      <div className="relative flex-1">
        <Image
          alt="SaaS Dashboard"
          src="/images/gallery9.png"
          width={1000}
          height={698}
          priority
          className="rounded-xl border border-border shadow-lg"
        />
        <div className="absolute inset-0 -z-10 bg-primary/20 [filter:blur(180px)]" />
      </div>
    </section>
  );
}
