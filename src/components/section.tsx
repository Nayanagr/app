import Image from "next/image";

export function Section() {
  return (
    <div className="hidden lg:block">
      <div className="my-32 w-full bg-background py-12">
        <div className="container flex px-4 md:px-6">
          <h2 className="mb-8 text-center font-heading font-bold tracking-tight sm:text-6xl">
            Brands we work with
          </h2>
          <p className="max-w-2xl text-balance px-5 py-10 text-center text-lg text-muted-foreground">
            Our Featured Partners
          </p>
          <div className="w-full overflow-hidden">
            <div className="animate-scroll-left flex">
              <div className="flex min-w-full items-center gap-12 px-4">
                <div className="shrink-0">
                  <Image
                    alt="Brand Logo 1"
                    src="/images/logo-3.png"
                    width={120}
                    height={60}
                    className="object-contain"
                  />
                </div>
                <div className="shrink-0">
                  <Image
                    alt="Brand Logo 2"
                    src="/images/logo-4.png"
                    width={120}
                    height={60}
                    className="object-contain"
                  />
                </div>
                <div className="shrink-0">
                  <Image
                    alt="Brand Logo 3"
                    src="/images/logo-3.png"
                    width={120}
                    height={60}
                    className="object-contain"
                  />
                </div>
                <div className="shrink-0">
                  <Image
                    alt="Brand Logo 4"
                    src="/images/logo-4.png"
                    width={120}
                    height={60}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
