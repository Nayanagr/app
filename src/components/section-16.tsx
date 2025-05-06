import { ArrowDown } from "lucide-react";

export function Section16() {
  return (
    <div className="container p-10 text-center lg:px-32">
      <div className="grid text-center lg:mt-12">
        <text x={0} className="text-6xl font-extrabold lg:text-7xl">
          VISION
        </text>
      </div>
      <div className="aspect-auto lg:hidden">
        <div className="mt-10 gap-8">
          <div className="flex justify-between rounded-xl border-border">
            <div className="container rounded-3xl pt-5 text-center">
              <h3 className="font-heading text-2xl font-bold hover:text-3xl">Empowering Brands</h3>
              <p className="my-5 text-lg">
                By Offering cost-effective marketing solutions with High ROAS
              </p>
            </div>
          </div>
          <div className="mt-6 flex justify-between rounded-lg">
            <div className="container text-center">
              <h3 className="font-heading text-2xl font-bold hover:text-3xl">
                Enable Small Influencers
              </h3>
              <p className="my-5 text-wrap text-lg">
                By Offering secure paid collaboration with brands they love.
              </p>
            </div>
          </div>
        </div>
        <div className="mb-32 grid gap-8">
          <div className="flex rounded-lg">
            <div className="container text-center">
              <h3 className="font-heading text-2xl font-bold hover:text-3xl">
                Discounts For Customers
              </h3>
              <p className="my-5 text-wrap text-lg">
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
