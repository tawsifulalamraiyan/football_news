import { playerData } from "@/data/index";
import Link from "next/link";
import Image from "next/image";

export default async function PlayerDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params; // ✅ unwrap the Promise

  const player = playerData.find((p) => p.id === Number(id));

  if (!player) {
    return (
      <main className="p-6 text-center">
        <h2 className="text-2xl font-bold mb-4">Player Not Found</h2>
        <Link href="/players" className="text-blue-400 hover:underline">
          ← Back to Players
        </Link>
      </main>
    );
  }

  return (
    <main className="p-6 max-w-3xl mx-auto">
      <Link href="/players" className="text-blue-400 hover:underline">
        ← Back to Players
      </Link>

      <div className="mt-6 border border-neutral-800 rounded-lg p-6 bg-neutral-900 shadow-md flex flex-col sm:flex-row gap-6 items-center">
        <div>
          <Image
            src={player.image}
            alt={player.name}
            width={200}
            height={200}
            className="rounded-xl object-cover border border-neutral-700"
          />
        </div>

        {/* Player Details */}
        <div className="space-y-3 text-lg">
          <h1 className="text-3xl font-bold">{player.name}</h1>
          <p>
            <span className="font-semibold text-neutral-400">
              Current Club:
            </span>{" "}
            {player.currentclub}
          </p>
          <p>
            <span className="font-semibold text-neutral-400">Country:</span>{" "}
            {player.country}
          </p>
          <p>
            <span className="font-semibold text-neutral-400">
              Date of Birth:
            </span>{" "}
            {player.dateofbirth}
          </p>
          <p>
            <span className="font-semibold text-neutral-400">Age:</span>{" "}
            {player.age} years old
          </p>
        </div>
      </div>
    </main>
  );
}
