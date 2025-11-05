"use client";

import UpcomingRaces from "@/components/UpcomingRaces";
import RaceResults from "@/components/RaceResults";
import ChampionshipStandings from "@/components/ChampionshipStandings";
import NewsSection from "@/components/NewsSection";
import Podium from "@/components/Podium";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8 animate-fade-in">
      {/* Hero Section */}
      {/* <div className="mb-12 relative overflow-hidden rounded-2xl bg-gradient-to-br from-dark via-dark-light to-dark p-8 border border-dark-lighter">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5 animate-pulse-slow"></div>
        <div className="relative z-10">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-2 h-12 bg-gradient-to-b from-primary to-secondary rounded-full animate-pulse"></div>
            <div>
              <h1 className="text-5xl font-bold mb-2 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                F1 Dashboard
              </h1>
              <p className="text-gray-400 text-lg">
                포뮬러1 레이스 정보를 한눈에
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4 text-sm text-gray-500 mt-6">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
              <span>실시간 업데이트</span>
            </div>
            <span>•</span>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>2025 시즌</span>
            </div>
          </div>
        </div>
      </div> */}

      {/* Podium Section */}
      <div className="mb-8 animate-slide-up">
        <Podium />
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div
          className="lg:col-span-2 animate-slide-up"
          style={{ animationDelay: "0.1s" }}
        >
          <UpcomingRaces />
        </div>
        <div
          className="animate-slide-in-right"
          style={{ animationDelay: "0.2s" }}
        >
          <NewsSection />
        </div>
      </div>

      {/* Results and Standings Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="animate-slide-up" style={{ animationDelay: "0.3s" }}>
          <RaceResults />
        </div>
        <div className="animate-slide-up" style={{ animationDelay: "0.4s" }}>
          <ChampionshipStandings />
        </div>
      </div>
    </div>
  );
}
