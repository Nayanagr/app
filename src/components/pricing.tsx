import Image from "next/image";

import { PricingCard } from "@/components/pricing-card";

export function Pricing() {
  return (
    <section className="flex flex-col items-center gap-10 sm:gap-7">
      <div className="relative w-full overflow-hidden rounded-lg">
        <Image
          alt="Background image"
          src="/images/bg-about-us.png"
          width={1920}
          height={1080}
          className="absolute inset-0 size-full object-cover"
        />
        <div className="relative flex h-full flex-col items-center justify-center p-8">
          <div className="flex flex-col gap-3">
            <div className="pt-20" />
            <div className="rounded-3xl bg-white text-center shadow-xl">
              <span className="text-center uppercase text-black">Pricing</span>
              <h2 className="font-heading text-4xl font-bold tracking-tighter sm:text-5xl">
                Creators
              </h2>
            </div>
            <div>
              <p className="max-w-lg text-balance text-center text-lg text-muted-foreground">
                Choose a tier that suits your Experience.
              </p>
            </div>
          </div>
          <div className="mt-7 grid w-full grid-cols-1 gap-7 md:px-32 lg:grid-cols-2">
            <PricingCard
              cTA="Sign Up"
              name="Free Tier"
              price={0}
              feature1="You choose the product"
              feature2="Create content "
              feature3="Earn on every sales"
              feature4="Personalized Links"
              feature5="Creative freedom to you"
              description="No Follower Restriction"
              isMostPopular
            />
            <PricingCard
              cTA="Fill in Your Details Now!!"
              name="Premium"
              price={99}
              feature1="Everything in Basic"
              feature2="Early access to Promotional Content"
              feature3="More earning per referral"
              feature4="Exclusive Brand Deals"
              feature5="Flexible Payouts"
              description="Minimum 10K+ Followers"
              isMostPopular={false}
              className="border-2 border-primary"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
