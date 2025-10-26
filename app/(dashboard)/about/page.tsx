"use client";

import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-neutral-900 text-neutral-100 py-12">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-semibold text-center text-neutral-50 mb-6">
          About Our Football App
        </h1>

        <p className="text-lg text-neutral-300 leading-relaxed mb-6">
          Welcome to the ultimate football experience! Our app is designed to
          give you real-time access to the world of football, with up-to-date
          player data, news, match scores, and schedules. Whether you’re a
          die-hard fan or just casually following the game, this app provides
          all the essential football insights you need.
        </p>

        <p className="text-lg text-neutral-300 leading-relaxed mb-6">
          Our goal is to offer a seamless, user-friendly platform that brings
          together players' stats, team news, upcoming match schedules, and the
          latest scores—all in one place. With an intuitive design and a focus
          on performance, we ensure you’re always in the loop about your
          favorite teams and players.
        </p>

        <h2 className="text-2xl font-semibold text-neutral-50 mb-4">
          Features:
        </h2>
        <ul className="text-lg text-neutral-300 space-y-3 mb-8">
          <li>⚽ View detailed player stats (goals, assists, etc.)</li>
          <li>📅 Check upcoming match schedules</li>
          <li>📰 Stay up-to-date with the latest football news</li>
          <li>🏆 Track live scores and match results</li>
        </ul>

        <p className="text-lg text-neutral-300 leading-relaxed mb-12">
          Built with passion and cutting-edge technologies, this app is your
          go-to source for everything football. We’re constantly improving and
          adding new features to make your experience even better. Whether
          you're tracking player performances or following the latest game
          scores, we’ve got you covered!
        </p>

        {/* Developer Info Section */}
        <div className="max-w-lg mx-auto bg-neutral-800 rounded-lg shadow-lg p-8 text-center mt-12">
          <h2 className="text-2xl font-semibold text-neutral-100 mb-4">
            About the Developer
          </h2>

          <div className="flex justify-center mb-4">
            <Image
              src="https://avatars.githubusercontent.com/u/121846548?v=4"
              alt="Developer Avatar"
              width={200}
              height={200}
              className=" rounded-full border-4 border-neutral-700"
            />
          </div>

          <p className="text-lg text-neutral-300 mb-4">
            Hi, I'm{" "}
            <span className="font-semibold text-neutral-50">Raiyan</span>, a
            passionate full-stack developer who loves creating beautiful,
            functional web applications. I built this football app to provide
            real-time football insights in an easy-to-use interface.
          </p>

          <p className="text-lg text-neutral-300 mb-6">
            I'm always open to new challenges and collaborations. Feel free to
            reach out if you have any questions or feedback!
          </p>

          {/* Developer Links */}
          <div className="flex justify-center gap-4">
            <a
              href="https://github.com/tawsifulalamraiyan" // Replace with your GitHub URL
              className="text-neutral-300 hover:text-neutral-50"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/tawsiful-alam-raiyan" // Replace with your LinkedIn URL
              className="text-neutral-300 hover:text-neutral-50"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://raiyanportfolio.vercel.app/" // Replace with your email
              className="text-neutral-300 hover:text-neutral-50"
            >
              portfolio
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
