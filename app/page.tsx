import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import bg from "@/public/background.jpg";

export default async function Home() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  // If logged in, redirect to dashboard or news feed
  if (session) {
    redirect("/home"); // or "/" if your dashboard is at root
  }

  return (
    <main className="relative flex items-center justify-center min-h-screen overflow-hidden bg-gray-50 dark:bg-neutral-950">
      {/* Background image */}
      <Image
        src={bg}
        alt="Football background"
        fill
        priority
        className="absolute inset-0 object-cover opacity-20"
      />

      {/* Hero content */}
      <section className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-12 bg-white/80 dark:bg-neutral-900/70 backdrop-blur-md rounded-lg shadow-lg max-w-[600px] w-[90%]">
        <h1 className="text-3xl font-bold mb-2">Welcome to Football News ⚽</h1>
        <p className="text-muted-foreground mb-6">
          Stay updated with the latest matches, scores, and headlines from your
          favorite teams.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:justify-center">
          <Link href="/signin" className="w-full sm:w-auto">
            <Button className="w-full sm:w-auto rounded-full px-6">
              Sign In
            </Button>
          </Link>

          <Link href="/signup" className="w-full sm:w-auto">
            <Button
              variant="outline"
              className="w-full sm:w-auto rounded-full border bg-transparent"
            >
              Create Account
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
