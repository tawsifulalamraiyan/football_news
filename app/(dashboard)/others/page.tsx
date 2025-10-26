import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { headers } from "next/headers";

const Page = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user) {
    return <p className="text-center mt-10">You are not logged in.</p>;
  }

  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
  });

  if (!user || user.rule !== "admin") {
    return <p className="text-center mt-10">Access denied. Admins only.</p>;
  }

  const posts = await prisma.news.findMany({
    where: { userId: session.user.id },
    orderBy: { createdAt: "desc" },
  });

  return (
    <main className="min-h-screen py-10 max-w-3xl mx-auto space-y-8">
      {/* Client-side form for creating posts */}

      {/* List of user's posts */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold">My Posts</h2>
        {posts.length === 0 ? (
          <p>You haven't created any posts yet.</p>
        ) : (
          posts.map((post) => (
            <div
              key={post.id}
              className="p-4 border rounded shadow hover:shadow-md transition"
            >
              <h3 className="font-semibold text-lg">{post.title}</h3>
              <p className="text-gray-500 text-sm">By {post.writer}</p>
              {post.imagepath && (
                <img
                  src={post.imagepath}
                  alt={post.title}
                  className="mt-2 w-full max-h-64 object-cover rounded"
                />
              )}
              <p className="mt-2">{post.content}</p>
              <p className="mt-1 text-gray-400 text-sm">
                {new Date(post.createdAt).toLocaleString()}
              </p>
            </div>
          ))
        )}
      </div>
    </main>
  );
};

export default Page;
