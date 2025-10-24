import Navber from "@/components/Navber";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const layout = async ({ children }: any) => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/signin");
  }
  return (
    <>
      <main className=" flex max-sm:flex-col">
        <Navber />
        <main>{children}</main>
      </main>
    </>
  );
};

export default layout;
