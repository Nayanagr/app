import Link from "next/link";

import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <section className="container pb-16">
      <div className="flex flex-col items-center gap-6 rounded-xl bg-primary px-6 py-24 sm:gap-10">
        <h2 className="text-balance text-center font-heading text-3xl font-semibold tracking-tight text-primary-foreground sm:text-4xl sm:leading-tight md:text-5xl">
          Make Videos and Start Earning
        </h2>
        <p className="max-w-xl text-center text-lg text-primary-foreground/80">
          Your userbase and content helps brand sell and &lt;br&gt;you make money too.
        </p>
        <Button size="lg" asChild variant="outline" className="cursor-pointer border-border">
          <Link href="/login">Get Started</Link>
        </Button>
      </div>
    </section>
  );
}
