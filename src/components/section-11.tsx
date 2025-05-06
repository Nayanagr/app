import Link from "next/link";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Section11() {
  return (
    <div className="block items-center md:hidden">
      <div className="flex min-h-screen flex-col items-center justify-center gap-8 px-8 py-24">
        <div className="flex">
          <div>
            <h3 className="items-center text-center text-4xl font-bold">LOG IN</h3>
          </div>
        </div>
        <form className="flex flex-col gap-3 rounded-xl border-2 px-20">
          <div className="flex grid-cols-3 justify-evenly rounded-lg py-8">
            <Tabs defaultValue="item-1">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="Creator">Creator</TabsTrigger>
                <TabsTrigger value="brand">Brand</TabsTrigger>
              </TabsList>
              <TabsContent value="item-1" />
              <TabsContent value="item-2" />
            </Tabs>
          </div>
          <div>
            <Label>Email</Label>
            <Input placeholder="example@xyz.com" className="border-4" />
          </div>
          <div>
            <Label>Password</Label>
            <Input type="password" placeholder="Password" className="border-2 border-input" />
          </div>
          <div className="py-8 text-center">
            <Button className="mt-2 rounded-full border-2 text-lg font-semibold">SUBMIT</Button>
          </div>
          <div className="grid-cols-2">
            <text y={0} className="py-2 font-bold">
              Don&apos;t have an account?{" "}
            </text>
            <Link href="/signup" className="font-bold text-primary">
              Sign Up !
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
