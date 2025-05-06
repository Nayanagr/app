import { PricingCard2 } from "@/components/pricing-card2";

export function Pricing2() {
  return (
    <section className="container flex flex-col items-center gap-6 py-24 sm:gap-7">
      <div className="flex flex-col gap-3">
        <span className="text-center font-bold uppercase text-primary">Pricing</span>
        <h2 className="text-balance text-center font-heading text-4xl font-bold tracking-tight sm:text-5xl">
          Brands
        </h2>
      </div>
      <p className="max-w-lg text-balance text-center text-lg text-muted-foreground" />
      <div className="mt-7 grid w-full grid-cols-1 gap-7 md:px-20 lg:grid-cols-2">
        <PricingCard2
          name="Basic"
          price={0}
          feature1="Performance-Driven Campaigns"
          feature2="Access To Top Influencers"
          feature3="Enhanced Organic Growth"
          feature4="Support 24*7"
          description="Fixed Amount + Royalty on Sold Product"
          isMostPopular={false}
        />
        <PricingCard2
          name="Pro"
          price={19}
          feature1="Access to Targeted Influencers"
          feature2="Exclusive Support"
          feature3="Flexible Campaign Options"
          feature4="Everything in Basic"
          description="Enhanced Fixed Amount + Royalty on Sold Product"
          isMostPopular
          className="border-2 border-primary"
        />
      </div>
    </section>
  );
}
