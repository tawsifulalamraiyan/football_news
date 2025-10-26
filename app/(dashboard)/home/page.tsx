import Image from "next/image"; // External import first
import { SignOut } from "@/app/(auth)/auth-actions"; // Internal import
import { Button } from "@/components/ui/button"; // Internal import
import { Card } from "@/components/ui/card"; // Internal import
import bg from "@/public/background.jpg"; // Static asset import (image)

const Page = async () => {
  return (
    <main className="relative flex items-center justify-center min-h-screen overflow-hidden bg-gray-50 dark:bg-neutral-950">
      <Image
        src={bg}
        alt="Background"
        fill
        priority
        className="absolute inset-0 object-cover opacity-20"
      />

      <Card className="relative z-10 w-[400px] max-w-[90%] bg-white/80 dark:bg-neutral-900/70 backdrop-blur-md p-8 rounded-lg shadow-lg flex flex-col items-center gap-4 text-center">
        <h1 className="text-2xl font-semibold">Welcome Back 👋</h1>
        <p className="text-muted-foreground">You’re signed in successfully.</p>

        <form action={SignOut} className="w-full">
          <Button type="submit" className="w-full mt-2 rounded-full">
            Sign out
          </Button>
        </form>
      </Card>
    </main>
  );
};

export default Page;
