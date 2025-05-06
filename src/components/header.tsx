import Link from "next/link";
import Image from "next/image";

import { NavItem } from "@/components/nav-item";
import { Button } from "@/components/ui/button";
import { MobileNavbar } from "@/components/mobile-navbar";
import { cn } from "@/lib/utils";

interface HeaderProps {
  className?: string;
}

export function Header({ className }: HeaderProps) {
  return (
    <header className={cn("container flex items-center justify-between gap-10 py-4", className)}>
      <Link href="/" className="flex flex-1 items-center gap-3">
        <Image alt="Image" src="/images/LOGO--21.png" width={50} height={50} />
        <span className="font-heading text-xl font-bold">PROMORT-IT</span>
      </Link>
      <nav className="hidden flex-1 items-center justify-center gap-10 md:flex">
        <NavItem href="/" label="Creator" />
        <NavItem href="/brand" label="Brands" />
        <NavItem href="/blogs" label="Customer" />
        <NavItem href="/about-us-final" label="About Us" />
      </nav>
      <div className="hidden flex-1 items-center justify-end gap-2 md:flex">
        <Button asChild>
          <Link href="/signup" className="cursor-pointer">
            Get Started
          </Link>
        </Button>
      </div>
      <MobileNavbar>
        <div className="container rounded-b-lg bg-background py-4 text-foreground shadow-xl">
          <nav className="grid grid-cols-1 gap-1 pt-2">
            <NavItem href="/" label="Creator" className="text-xl text-black" />
            <NavItem href="/brand" label="Brands" className="text-xl text-black" />
            <NavItem href="/blogs" label="Customer" className="text-xl text-black" />
            <NavItem href="/about-us-final" label="About Us" className="text-xl text-black" />
            <Button size="lg" asChild className="mt-2">
              <Link href="/login" className="w-auto cursor-pointer">
                Get Started
              </Link>
            </Button>
          </nav>
        </div>
      </MobileNavbar>
    </header>
  );
}
