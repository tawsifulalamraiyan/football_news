import { prisma } from "@/lib/prisma";
import PlayerList from "@/components/PlayerSearch"; // Import the Client Component

const PlayerPage = async () => {
  // Fetch players from Prisma
  const players = await prisma.playerdata.findMany();

  return (
    <main className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Top Football Players</h1>

      {/* Pass the players data to the PlayerList component */}
      <PlayerList players={players} />
    </main>
  );
};

export default PlayerPage;
