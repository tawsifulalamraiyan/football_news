import { prisma } from "@/lib/prisma";
import Image from "next/image";

export default async function PlayerDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // Extract player id from the params
  const { id } = await params;

  // Convert the id to an integer
  const idInt = parseInt(id, 10);

  // Check if id is a valid number
  if (isNaN(idInt)) {
    return <p>Invalid ID format.</p>;
  }

  // Fetch player data from the database using Prisma
  const data = await prisma.playerdata.findUnique({
    where: { id: idInt },
  });

  // Check if the player exists
  if (!data) {
    return <p>Player not found.</p>;
  }

  return (
    <main className="p-6 max-w-3xl mx-auto">
      <div className="text-white rounded-lg shadow-lg p-6 space-y-6">
        {/* Image Section */}
        <div className="relative">
          <Image
            src={data.imagepath}
            alt={data.name}
            width={200}
            height={200}
            className="object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Title and Meta Information */}
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">{data.name}</h1>{" "}
          {/* Display player name */}
          <div className="flex flex-col sm:flex-row sm:items-center text-sm">
            <span>
              Current Club:{" "}
              <span className="font-medium">{data.currentclub}</span>
            </span>
            <span className="mt-2 sm:mt-0 sm:ml-4">
              Country: <span className="font-medium">{data.country}</span>
            </span>
          </div>
        </div>

        {/* Player Stats Section */}
        <div className="space-y-2 text-neutral-300">
          <p>
            <span className="font-semibold">Age:</span> {data.age} years
          </p>
          <p>
            <span className="font-semibold">Total Goals:</span>{" "}
            {data.totalgoals}
          </p>
          <p>
            <span className="font-semibold">Total Assists:</span>{" "}
            {data.totalassists}
          </p>
        </div>

        {/* Footer Section */}
        <div className="text-center text-gray-500 text-sm">
          <p>Joined on {new Date(data.createdAt).toLocaleDateString()}</p>
        </div>
      </div>
    </main>
  );
}
