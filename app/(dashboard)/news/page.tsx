import { prisma } from "@/lib/prisma";
import Link from "next/link";

interface News {
  id: number;
  title: string;
  content: string;
  writer: string;
  imagepath: string;
  createdAt: Date;
}

function truncateWords(text: string, wordLimit: number) {
  const words = text.split(" ");
  if (words.length <= wordLimit) return text;
  return words.slice(0, wordLimit).join(" ") + "...";
}

export default async function NewsPage() {
  // Fetching all news posts from Prisma
  const posts: News[] = await prisma.news.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="min-h-screen py-10 px-5 bg-neutral-900 text-white">
      <h1 className="text-3xl font-bold mb-8 text-center md:text-left">
        Latest News
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Map over the posts array to render each post */}
        {posts.map((post) => (
          <Link
            key={post.id} // Use post.id to key the link
            href={`/news/${post.id}`} // Dynamic link to individual post page
            className="bg-neutral-800 border border-neutral-700 rounded-lg shadow hover:shadow-lg transition overflow-hidden flex flex-col"
          >
            <img
              src={post.imagepath}
              alt={post.title}
              className="w-full h-48 object-cover"
            />

            <div className="p-4 flex flex-col flex-1">
              <h3 className="font-semibold text-lg">{post.title}</h3>
              <p className="text-neutral-400 text-sm mt-1">By {post.writer}</p>
              <p className="mt-2 text-neutral-200 text-sm">
                {truncateWords(post.content, 30)}
              </p>
              <p className="text-neutral-500 text-xs mt-3">
                {new Date(post.createdAt)
                  .toISOString()
                  .slice(0, 16)
                  .replace("T", " ")}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
