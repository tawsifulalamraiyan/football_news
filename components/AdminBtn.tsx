"use client";
import { Button } from "./ui/button";
import { redirect } from "next/navigation";

const AdminBtn = () => {
  return (
    <>
      <main className=" flex gap-3">
        <Button
          className=" rounded-full"
          onClick={() => redirect("/createpost")}
        >
          Create post
        </Button>
        <Button
          className="rounded-full"
          onClick={() => redirect("/createplayer")}
        >
          Create player
        </Button>
      </main>
    </>
  );
};

export default AdminBtn;
