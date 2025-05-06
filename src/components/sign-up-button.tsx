import Link from "next/link";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SignUpButtonProps {
  className?: string;
}

export function SignUpButton({ className }: SignUpButtonProps) {
  return (
    <div className={cn("py-20 text-center", className)}>
      <Button size="lg" asChild className="cursor-pointer text-base font-extrabold shadow-xl">
        <Link href="/login">Sign Up Now - It&apos;s Free !</Link>
      </Button>
    </div>
  );
}
