import AdminBtn from "@/components/AdminBtn";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { headers } from "next/headers";

const Page = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user) {
    return (
      <p className="text-center text-xl font-medium mt-10 text-gray-600">
        You are not logged in.
      </p>
    );
  }

  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
  });

  if (!user || user.rule !== "admin") {
    return (
      <p className="text-center text-xl font-medium mt-10 text-white">
        Access denied. Admins only.
      </p>
    );
  }

  return (
    <main className="min-h-screen py-10 max-w-3xl mx-auto space-y-8 px-6">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-semibold text-gray-200">
          Admin Dashboard
        </h1>
        <p className="text-xl text-gray-200">Welcome, {user.name}</p>
      </div>
      <AdminBtn />
    </main>
  );
};

export default Page;
