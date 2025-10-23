import { SignUp } from "../auth-actions";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { UserIcon, Mail, LockIcon } from "lucide-react";
import Image from "next/image";
import bg from "@/public/background.jpg";
import Link from "next/link";

const SignupPage = () => {
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
          <h1 className="text-2xl font-semibold mb-1">Create an Account</h1>
          <p className="text-sm text-muted-foreground">
            Sign up to get started
          </p>
        </header>

        <form action={SignUp} className="flex flex-col gap-4">
          <Input
            type="text"
            name="name"
            placeholder="Full name"
            leftIcon={<UserIcon size={18} />}
            required
          />

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
            Sign up
          </Button>
        </form>

        <div className="flex flex-col items-center gap-2">
          <p className="text-sm text-muted-foreground">
            Already have an account?
          </p>
          <Link href="/signin" className="w-full">
            <Button
              type="button"
              variant="outline"
              className="w-full border rounded-full bg-transparent"
            >
              Sign in instead
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default SignupPage;
