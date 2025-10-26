import { headers } from "next/headers";
import { redirect } from "next/navigation";
import Navbar from "@/components/Navber";
import { auth } from "@/lib/auth";

const Layout = async ({ children }: { children: React.ReactNode }) => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/signin");
  }

  return (
    <div className="flex min-h-screen max-sm:flex-col">
      {/* Sidebar / Navbar */}
      <div className="sticky top-0 z-40 h-screen max-sm:h-auto max-sm:w-full">
        <Navbar />
      </div>

      {/* Main content */}
      <div className="flex-1 overflow-auto max-sm:mt-0">{children}</div>
    </div>
  );
};

export default Layout;
