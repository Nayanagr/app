import { ArrowDown } from "lucide-react";

export function Section17() {
  return (
    <div className="from-transparent container p-0">
      <div className="hidden md:block rounded-lg px-16">
        <div className="mt-10 columns-2 container">
          <div className="justify-between p-6 rounded-xl border-border">
            <div className="text-center container rounded-3xl">
              <h3 className="font-heading font-bold text-2xl lg:text-3xl hover:text-4xl">
                Empowering Brands
              </h3>
              <p className="text-wrap lg:text-xl text-sm my-5">
                By Offering cost-effective marketing solutions with High ROAS
              </p>
            </div>
          </div>
          <div className="justify-between p-6 rounded-xl border-border">
            <div className="text-center container">
              <h3 className="font-heading font-bold text-2xl lg:text-3xl hover:text-4xl">
                Enable Small Influencers
              </h3>
              <p className="my-5 text-wrap lg:text-xl text-sm">
                By Offering secure paid collaboration with brands they love.
              </p>
            </div>
          </div>
        </div>
        <div className="mb-32 grid gap-8">
          <div className="items-center justify-between rounded-lg p-6 px-60">
            <div className="text-center container columns:1">
              <h3 className="font-heading font-bold lg:text-3xl hover:text-4xl">
                Discounts For Customers
              </h3>
              <p className="my-5 text-wrap lg:text-xl text-sm">
                Provide Customers with exclusive additional discounts.
              </p>
            </div>
          </div>
          <div className="flex items-center flex-col">
            <ArrowDown size={40} />
          </div>
        </div>
      </div>
    </div>
  );
}
