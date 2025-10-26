import { prisma } from "@/lib/prisma";

export default async function PlayerDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const idInt = parseInt(id, 10);

  if (isNaN(idInt)) {
    return <p>Invalid ID format.</p>;
  }

  const data = await prisma.news.findUnique({
    where: { id: idInt },
  });

  if (!data) {
    return <p>Article not found.</p>;
  }

  return (
    <main className="p-6 max-w-3xl mx-auto">
      <div className=" text-white rounded-lg shadow-lg p-6 space-y-6">
        {/* Image Section */}
        <div className="relative">
          <img
            src={data.imagepath}
            alt={data.title}
            className="w-full h-72 object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Title and Meta Information */}
        <div className="space-y-2">
          <h1 className="text-3xl font-bold ">{data.title}</h1>
          <div className="flex flex-col sm:flex-row sm:items-center  text-sm">
            <span>
              By <span className="font-medium">{data.writer}</span>
            </span>
            <span className="mt-2 sm:mt-0 sm:ml-4">
              {new Date(data.createdAt).toLocaleDateString()}
            </span>
          </div>
        </div>

        {/* Content Section */}
        <p className="text-neutral-300 leading-relaxed">{data.content}</p>

        {/* Footer Section */}
        <div className="text-center text-gray-500 text-sm">
          <p>Published on {new Date(data.createdAt).toLocaleDateString()}</p>
        </div>
      </div>
    </main>
  );
}
