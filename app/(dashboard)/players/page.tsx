"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { playerData } from "@/data/index";

const PlayersPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPlayers = playerData.filter((player) =>
    [player.name, player.country]
      .join(" ")
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <main className="p-6 max-w-6xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
        <h1 className="text-3xl font-bold">Top Football Players</h1>

        <Input
          type="text"
          placeholder="Search by name or country..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-xs border-neutral-700 text-white placeholder:text-neutral-400"
        />
      </div>

      <div className="rounded-lg border border-neutral-800 overflow-hidden shadow-md">
        <Table>
          <TableCaption>A list of world-class football players.</TableCaption>

          <TableHeader>
            <TableRow className="bg-neutral-900">
              <TableHead>Photo</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Current Club</TableHead>
              <TableHead>Country</TableHead>
              <TableHead>Age</TableHead>
              <TableHead>Date of Birth</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {filteredPlayers.length > 0 ? (
              filteredPlayers.map((player) => (
                <TableRow
                  key={player.id}
                  className="hover:bg-neutral-800 transition-colors cursor-pointer"
                >
                  <TableCell>
                    <Link href={`/players/${player.id}`}>
                      <Image
                        src={player.image}
                        alt={player.name}
                        width={48}
                        height={48}
                        className="rounded-full object-cover"
                      />
                    </Link>
                  </TableCell>
                  <TableCell className="font-semibold">
                    <Link href={`/players/${player.id}`}>{player.name}</Link>
                  </TableCell>
                  <TableCell>{player.currentclub}</TableCell>
                  <TableCell>{player.country}</TableCell>
                  <TableCell>{player.age}</TableCell>
                  <TableCell>{player.dateofbirth}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={6} className="text-center py-6">
                  No players found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </main>
  );
};

export default PlayersPage;
