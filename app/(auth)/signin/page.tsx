import { auth } from "@/lib/auth";
import { SignIn } from "../auth-actions";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { LockIcon, Mail } from "lucide-react";
import Image from "next/image";
import bg from "@/public/background.jpg";
import Link from "next/link";

const SignInPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (session) {
    redirect("/");
  }

  return (
    <main className="relative flex items-center justify-center min-h-screen overflow-hidden bg-gray-50 dark:bg-neutral-950">
      <Image
        src={bg}
        alt="Background"
        fill
        priority
        className="absolute inset-0 object-cover opacity-20"
      />

      <section className="relative z-10 w-[400px] max-w-[90%] bg-white/80 dark:bg-neutral-900/70 backdrop-blur-md p-8 rounded-lg shadow-lg flex flex-col gap-5">
        <header className="text-center">
          <h1 className="text-2xl font-semibold mb-1">Welcome Back</h1>
          <p className="text-sm text-muted-foreground">
            Sign in to continue to your account
          </p>
        </header>

        <form action={SignIn} className="flex flex-col gap-4">
          <Input
            type="email"
            name="email"
            placeholder="Email address"
            leftIcon={<Mail size={18} />}
            required
          />

          <Input
            type="password"
            name="password"
            placeholder="Password"
            leftIcon={<LockIcon size={18} />}
            required
          />

          <Button type="submit" className="mt-2 w-full rounded-full">
            Sign in
          </Button>
        </form>

        <div className="flex flex-col items-center gap-2">
          <p className="text-sm text-muted-foreground">
            Don’t have an account?
          </p>
          <Link href="/signup" className="w-full">
            <Button
              type="button"
              variant="outline"
              className="w-full border rounded-full bg-transparent"
            >
              Create new account
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default SignInPage;
