"use server";

import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export const SignUp = async (formData: FormData) => {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const name = formData.get("name") as string;
  try {
    await auth.api.signUpEmail({
      body: {
        email,
        password,
        name,
        callbackURL: "/signin",
      },
    });
  } catch (error) {
    console.error(error);
  }
  redirect("/");
};

export const SignIn = async (formData: FormData) => {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  try {
    await auth.api.signInEmail({
      body: {
        email,
        password,
        callbackURL: "/",
      },
    });
  } catch (error) {
    console.error(error);
  }
  redirect("/");
};

export const SignOut = async () => {
  try {
    await auth.api.signOut({
      headers: await headers(),
    });
  } catch (error) {
    console.error(error);
  }
  redirect("/signin");
};
