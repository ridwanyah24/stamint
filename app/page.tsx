import { Button } from "@/components/ui/button";
import Image from "next/image";
import { spaceBold, spaceLight } from "./utils/fontFamilies";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-5 row-start-2 items-center sm:items-start">
        <p className="text-[40px] " style={{fontFamily:spaceBold.style.fontFamily}}>Stablecoin Creation Made Easy</p>
        <p className="text-center mx-auto" style={{fontFamily:spaceBold.style.fontFamily}}>A streamlined platform to create and manage yield-backed stablecoins.</p>
        <Link href={"/dashboard"} className="mx-auto">
          <Button variant={"default"}>Connect Wallet</Button>
        </Link>
      </main>
    </div>
  );
}
