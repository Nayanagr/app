import Image from "next/image";

export function Section9() {
  return (
    <div className="bg-blue-300 p-10 lg:px-32">
      <div className="grid lg:mt-12 lg:grid-cols-2">
        <text x={0} className="text-left text-7xl font-extrabold text-white">
          VISION
        </text>
      </div>
      <div className="mb-32 mt-10 grid gap-8 lg:grid-cols-2">
        <div className="flex justify-between rounded-lg bg-gradient-to-r from-yellow-400 to-orange-400 p-6">
          <div className="items-center">
            <Image
              alt="Placeholder"
              src="/images/savingaccountpage.png"
              width={200}
              height={200}
              className="mr-4 rounded-full pt-10"
            />
          </div>
          <div className="container text-center">
            <h3 className="font-heading text-2xl font-bold text-white">Empower Emerging Brands</h3>
            <p className="my-5 text-wrap text-xl text-white">
              By Offering cost-effective marketing solutions with High ROAS
            </p>
          </div>
        </div>
        <div className="flex justify-between rounded-lg bg-gradient-to-r from-purple-400 to-blue-800 p-6">
          <div className="items-center">
            <Image
              alt="Placeholder"
              src="/images/secureaboutpage.png"
              width={200}
              height={200}
              className="mr-4 rounded-full pt-10"
            />
          </div>
          <div className="container text-center">
            <h3 className="font-heading text-2xl font-bold text-white">Enable Small Influencers</h3>
            <p className="my-5 text-wrap text-xl text-white">
              By Offering secure paid collaboration with brands they love.
            </p>
          </div>
        </div>
        <div className="flex justify-between rounded-lg bg-gradient-to-r from-purple-400 to-blue-800 p-6">
          <div className="items-center">
            <Image
              alt="Placeholder"
              src="/images/discaboutpage.png"
              width={200}
              height={200}
              className="mr-4 rounded-full pt-10"
            />
          </div>
          <div className="container text-center">
            <h3 className="font-heading text-2xl font-bold text-white">Discounts</h3>
            <p className="my-5 text-wrap text-xl text-white">
              Provide Customers with exclusive additional discounts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
