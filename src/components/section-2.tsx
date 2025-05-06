import Image from "next/image";

export function Section2() {
  return (
    <section className="sm:block lg:hidden">
      <div className="mt-32 w-full bg-background pt-12">
        <h2 className="mb-8 text-center font-heading text-5xl font-bold tracking-tight sm:text-6xl">
          Brands we work with
        </h2>
        <p className="container max-w-2xl px-5 pb-5 text-center text-xl text-muted-foreground">
          Our Featured Partners
        </p>
      </div>
      <div className="grid grid-cols-4">
        <Image
          alt="Image"
          src="/images/logo-3.png"
          width={400}
          height={400}
          className="p-6"
        />
        <Image
          alt="Image"
          src="/images/logo-3.png"
          width={400}
          height={400}
          className="p-6"
        />
        <Image
          alt="Image"
          src="/images/logo-4.png"
          width={400}
          height={400}
          className="p-6"
        />
        <Image
          alt="Image"
          src="/images/logo-4.png"
          width={400}
          height={400}
          className="p-6"
        />
      </div>
    </section>
  );
}
