import { Link, ArrowRight, BarChart, Users } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SignUpButton } from "@/components/sign-up-button";

export function Section3() {
  return (
    <section>
      <section className="w-full bg-background py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Everything you need to succeed
            </h2>
            <p className="max-w-[700px] text-lg text-muted-foreground">
              Select from a wide range of Products and Brands.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
              <div className="rounded-full bg-primary/10 p-3">
                <Link className="size-6 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-bold">Personalized Link</h3>
              <p className="text-center text-muted-foreground">
                Get your very own link for a product that you promote to put on your Content
              </p>
              <Button size="sm" variant="outline" className="bg-yellow-200">
                Learn more
                <ArrowRight className="ml-2 size-4" />
              </Button>
            </div>
            <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
              <div className="rounded-full bg-primary/10 p-3">
                <BarChart className="size-6 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-bold">Earn As You Sell !</h3>
              <p className="text-center text-muted-foreground">
                When users buy product from your personalized link, You earn !
              </p>
              <Button size="sm" variant="outline" className="bg-yellow-200">
                Learn more
                <ArrowRight className="ml-2 size-4" />
              </Button>
            </div>
            <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
              <div className="rounded-full bg-primary/10 p-3">
                <Users className="size-6 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-bold">Mulitple Brands</h3>
              <p className="text-center text-muted-foreground">
                Work seamlessly with your Favorite Brands you wanna promote.
              </p>
              <Button size="sm" variant="outline" className="bg-yellow-200">
                Learn more
                <ArrowRight className="ml-2 size-4" />
              </Button>
            </div>
          </div>
        </div>
        <SignUpButton />
      </section>
    </section>
  );
}
