"use client";

import UpcomingRacesType from "@/components/homePage/upcomingRaces/upcomingRacesType/UpcomingRacesType";
import RaceResults from "@/components/homePage/raceResults/RaceResults";
import ChampionshipStandings from "@/components/homePage/championshipStandings/ChampionshipStandings";
import NewsSection from "@/components/common/newsSection/NewsSection";
import Podium from "@/components/homePage/podiumSection/Podium";
import PodiumNew from "@/components/homePage/podiumSection/PodiumNew";
import CircuitSection from "@/components/homePage/upcomingRaces/components/circuit/CircuitSection";
import UpcomingRacesSection from "@/components/homePage/upcomingRaces/UpcomingRacesSection";

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
