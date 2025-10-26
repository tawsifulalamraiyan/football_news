import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

// Define the schema for player data
const playerDataSchema = z.object({
  name: z.string().min(1, "Name is required"),
  imagepath: z.string().url("Invalid image URL"),
  totalgoals: z.number().int().min(0, "Total goals cannot be negative"),
  totalassists: z.number().int().min(0, "Total assists cannot be negative"),
  currentclub: z.string().min(1, "Current club is required"),
  age: z.number().int().min(16, "Age must be at least 16"), // You can adjust age validation as needed
  country: z.string().min(1, "Country is required"),
});

export async function POST(req: NextRequest) {
  try {
    // Get the session to check if the user is logged in
    const session = await auth.api.getSession({
      headers: Object.fromEntries(req.headers),
    });

    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Parse the request body
    const body = await req.json();

    // Validate the incoming data using zod
    const parsed = playerDataSchema.safeParse(body);

    if (!parsed.success) {
      console.log("Validation errors:", parsed.error.flatten().fieldErrors);
      return NextResponse.json(
        { error: parsed.error.flatten().fieldErrors },
        { status: 400 },
      );
    }

    const newPlayerData = await prisma.playerdata.create({
      data: {
        ...parsed.data,
        userId: session.user.id, // Associate the player data with the current user
      },
    });

    return NextResponse.json({ success: true, player: newPlayerData });
  } catch (error: any) {
    console.error("Error creating player data:", error);
    return NextResponse.json(
      { error: error.message || "Internal Server Error" },
      { status: 500 },
    );
  }
}
