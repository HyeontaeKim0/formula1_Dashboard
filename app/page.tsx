"use client";

import UpcomingRacesType from "@/components/upcomingRaces/upcomingRacesType/UpcomingRacesType";
import RaceResults from "@/components/raceResults/RaceResults";
import ChampionshipStandings from "@/components/championshipStandings/ChampionshipStandings";
import NewsSection from "@/components/newsSection/NewsSection";
import Podium from "@/components/podiumSection/Podium";
import PodiumNew from "@/components/podiumSection/PodiumNew";
import CircuitSection from "@/components/upcomingRaces/components/circuit/CircuitSection";
import UpcomingRacesSection from "@/components/upcomingRaces/UpcomingRacesSection";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8 animate-fade-in">
      {/* Podium Section */}
      <div className="mb-8 animate-slide-up">
        {/* <Podium /> */}
        <PodiumNew />
      </div>

      {/* 다가오는 레이스 섹션 */}
      <UpcomingRacesSection />

      {/* 최근 레이스 결과 섹션 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div
          className="animate-slide-in-left mt-10"
          style={{ animationDelay: "0.3s" }}
        >
          <RaceResults />
        </div>
        <div
          className="animate-slide-in-right mt-10"
          style={{ animationDelay: "0.4s" }}
        >
          <ChampionshipStandings />
        </div>
      </div>
    </div>
  );
}
