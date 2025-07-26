'use client'

import HeroTitle from "@/components/atoms/hero-title";
import { ModeToggle } from "@/components/atoms/theme-toggle";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function LandingPage() {
  const router = useRouter();

  const handleClick = () => {
    const token = localStorage.getItem("token");
    if (token) {
      router.push("/home");
    } else {
      router.push("/login");
    }
  };

  return (
    <div className="font-sans min-h-screen flex flex-col justify-center items-center px-6 py-16 sm:px-10 sm:py-24 text-center">
      <HeroTitle />
      <Button
        size="lg"
        className="px-10 py-6 font-bold"
        onClick={handleClick}
      >
        Get Started
      </Button>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-10">
        <ModeToggle />
      </div>
    </div>
  );
}
