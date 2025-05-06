import { ArrowDown } from "lucide-react";

export function Section17() {
  return (
    <div className="container from-transparent p-0">
      <div className="hidden rounded-lg px-16 md:block">
        <div className="container mt-10 columns-2">
          <div className="justify-between rounded-xl border-border p-6">
            <div className="container rounded-3xl text-center">
              <h3 className="font-heading text-2xl font-bold hover:text-4xl lg:text-3xl">
                Empowering Brands
              </h3>
              <p className="my-5 text-wrap text-sm lg:text-xl">
                By Offering cost-effective marketing solutions with High ROAS
              </p>
            </div>
          </div>
          <div className="justify-between rounded-xl border-border p-6">
            <div className="container text-center">
              <h3 className="font-heading text-2xl font-bold hover:text-4xl lg:text-3xl">
                Enable Small Influencers
              </h3>
              <p className="my-5 text-wrap text-sm lg:text-xl">
                By Offering secure paid collaboration with brands they love.
              </p>
            </div>
          </div>
        </div>
        <div className="mb-32 grid gap-8">
          <div className="items-center justify-between rounded-lg p-6 px-60">
            <div className="container text-center">
              <h3 className="font-heading font-bold hover:text-4xl lg:text-3xl">
                Discounts For Customers
              </h3>
              <p className="my-5 text-wrap text-sm lg:text-xl">
                Provide Customers with exclusive additional discounts.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <ArrowDown size={40} />
          </div>
        </div>
      </div>
    </div>
  );
}
