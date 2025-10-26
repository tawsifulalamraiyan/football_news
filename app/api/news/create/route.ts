import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const postSchema = z.object({
  title: z.string().min(1, "Title is required"),
  writer: z.string().min(1, "Writer is required"),
  imagepath: z.string().url("Invalid image URL"),
  content: z.string().min(1, "Content is required"),
});

export async function POST(req: NextRequest) {
  try {
    const session = await auth.api.getSession({
      headers: Object.fromEntries(req.headers),
    });

    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();

    const parsed = postSchema.safeParse(body);

    if (!parsed.success) {
      console.log(" Validation errors:", parsed.error.flatten().fieldErrors);
      return NextResponse.json(
        { error: parsed.error.flatten().fieldErrors },
        { status: 400 },
      );
    }

    const newPost = await prisma.news.create({
      data: {
        ...parsed.data,
        userId: session.user.id,
      },
    });

    return NextResponse.json({ success: true, post: newPost });
  } catch (error: any) {
    console.error(" Error creating post:", error);
    return NextResponse.json(
      { error: error.message || "Internal Server Error" },
      { status: 500 },
    );
  }
}
