import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ItemCarouselProps {
  productTitle: string;
  productPrice: string;
  productDes: string;
  cTA: string;
  className?: string;
}

export function ItemCarousel({
  productTitle,
  productPrice,
  productDes,
  cTA,
  className,
}: ItemCarouselProps) {
  return (
    <Card
      className={cn(
        "inline-block rounded-lg border bg-card p-6 px-2 text-card-foreground shadow-sm",
        className,
      )}
    >
      <CardContent className="flex flex-col gap-4 p-6">
        <div className="relative h-60">
          <Image alt="Image" src="/images/gallery5.png" fill className="object-cover" />
        </div>
        <div className="grid grid-cols-2">
          <h3 className="mt-3 text-2xl font-semibold leading-none tracking-tight">
            {productTitle}
          </h3>
          <h3 className="mt-3 text-right text-2xl font-semibold leading-none">{productPrice}</h3>
        </div>
        <p className="text-sm text-muted-foreground">{productDes}</p>
        <Button className="mr-auto">{cTA}</Button>
      </CardContent>
    </Card>
  );
}
