"use client";

import { Trophy, Medal } from "lucide-react";
import Image from "next/image";

interface PodiumDriver {
  position: number;
  driverName: string;
  driverCode: string;
  team: string;
  teamColor?: string;
  imageUrl?: string;
  teamLogoUrl?: string;
}

const podiumData: PodiumDriver[] = [
  {
    position: 2,
    driverName: "샤를 르클레르",
    driverCode: "LEC",
    team: "페라리",
    teamColor: "#DC143C",
    imageUrl:
      "https://media.formula1.com/image/upload/f_auto,c_limit,q_75,w_auto/content/dam/fom-website/2018-redesign-assets/drivers/2025/chalec01.png",
    teamLogoUrl:
      "https://i.namu.wiki/i/ECrvNlNmJzF6cqUToZ0rAzY7or8LZUSccqLj2H6KyEW4aJj1ZgQZLY4bhgA5A87WcQHIqY6_RqX23r6tZQCa8g.svg",
  },
  {
    position: 1,
    driverName: "랜도 노리스",
    driverCode: "NOR",
    team: "맥라렌",
    teamColor: "#FF8000",
    imageUrl:
      "https://media.formula1.com/image/upload/f_auto,c_limit,q_75,w_auto/content/dam/fom-website/2018-redesign-assets/drivers/2025/lannor01.png",
    teamLogoUrl:
      "https://i.namu.wiki/i/NMVkodqAXkSDUBnIu-PG7rHKsJSdUj-M7zfEW3i1aoB_QWP2QC5CaJT90iK0wJpzefENKLG-Fhtd59o1Qr1qHQ.webp",
  },
  {
    position: 3,
    driverName: "막스 베르스타펜",
    driverCode: "VER",
    team: "레드불",
    teamColor: "#1E41FF",
    imageUrl:
      "https://media.formula1.com/image/upload/f_auto,c_limit,q_75,w_auto/content/dam/fom-website/2018-redesign-assets/drivers/2025/maxver01.png",
    teamLogoUrl:
      "https://i.namu.wiki/i/vYEiVV8vmhw4238pjyzmChCDSXs0yczx87qDd2EentaqZurc2fe0WzPDa4jtDdPXMcJbJBfJk5J9STzdsQttjezF7kd2rnqeSzei7TBYqdS71sQ0-cuuFuw_er0cyZy6SZd6xD1UiUFOEGSspcla7A.svg",
  },
];

export default function Podium() {
  const getPositionHeight = (position: number) => {
    switch (position) {
      case 1:
        return "h-40"; // 가장 높음
      case 2:
        return "h-32"; // 중간
      case 3:
        return "h-28"; // 가장 낮음
      default:
        return "h-28";
    }
  };

  const getPositionIcon = (position: number) => {
    switch (position) {
      case 1:
        return <Trophy className="text-yellow-400" size={32} />;
      case 2:
        return <Medal className="text-gray-300" size={28} />;
      case 3:
        return <Medal className="text-orange-500" size={24} />;
      default:
        return null;
    }
  };

  const getPositionGradient = (position: number) => {
    switch (position) {
      case 1:
        return "from-yellow-500/20 to-yellow-600/10";
      case 2:
        return "from-gray-400/20 to-gray-500/10";
      case 3:
        return "from-orange-600/20 to-orange-700/10";
      default:
        return "from-gray-500/20 to-gray-600/10";
    }
  };

  return (
    <div className="relative bg-gradient-to-br from-dark-light to-dark rounded-xl border border-dark-lighter p-6 animate-fade-in overflow-hidden">
      {/* 배경 레이어 1: 기본 그라데이션 */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-light via-dark to-dark-light"></div>

      {/* 배경 레이어 2: 움직이는 그라데이션 */}
      <div className="absolute inset-0 podium-bg-gradient bg-gradient-to-br from-primary/10 via-secondary/5 to-primary/10 opacity-60"></div>

      {/* 배경 레이어 3: 글로우 효과 */}
      <div
        className="absolute inset-0 podium-glow opacity-40"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, rgba(0, 212, 255, 0.2) 0%, transparent 50%)",
        }}
      ></div>
      <div
        className="absolute inset-0 podium-glow opacity-30"
        style={{
          background:
            "radial-gradient(circle at 70% 70%, rgba(6, 255, 165, 0.15) 0%, transparent 50%)",
          animationDelay: "1.5s",
        }}
      ></div>

      {/* 배경 레이어 4: 반짝이는 요소들 */}
      <div className="absolute top-10 left-20 w-2 h-2 bg-primary rounded-full podium-sparkle opacity-60"></div>
      <div className="absolute top-20 right-32 w-1.5 h-1.5 bg-secondary rounded-full podium-sparkle opacity-60"></div>
      <div className="absolute bottom-20 left-32 w-1.5 h-1.5 bg-primary rounded-full podium-sparkle opacity-60"></div>
      <div className="absolute top-32 right-20 w-2 h-2 bg-secondary rounded-full podium-sparkle opacity-60"></div>
      <div className="absolute bottom-32 left-40 w-1 h-1 bg-primary rounded-full podium-sparkle opacity-60"></div>

      {/* 배경 레이어 5: 패턴 오버레이 */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      ></div>

      {/* 컨텐츠 레이어 (z-index 상위) */}
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-dark rounded-lg flex items-center justify-center shadow-lg shadow-primary/30">
              <Trophy className="text-white" size={20} />
            </div>
            <div>
              <h2 className="text-2xl font-bold">최근 레이스 포디움</h2>
              <p className="text-sm text-gray-400">멕시코 그랑프리</p>
            </div>
          </div>
        </div>

        <div className="flex items-end justify-center gap-6 md:gap-8 mt-8">
          {podiumData.map((driver, index) => (
            <div
              key={driver.position}
              className="flex flex-col items-center flex-1 max-w-[180px] group cursor-pointer"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              {/* 드라이버 정보 (위쪽) */}
              <div className="flex flex-col items-center mb-4 w-full">
                {/* 드라이버 이미지 */}
                {driver.imageUrl && (
                  <div className="relative w-28 h-28 mb-4 group-hover:scale-110 transition-transform duration-300">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                    <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-dark-lighter group-hover:border-primary/50 transition-colors duration-300 bg-dark">
                      <Image
                        src={driver.imageUrl}
                        alt={driver.driverName}
                        fill
                        className="object-cover object-center"
                        sizes="112px"
                        unoptimized
                      />
                    </div>
                    {/* 순위 아이콘 오버레이 */}
                    <div className="absolute -top-1 -right-1 z-10">
                      {getPositionIcon(driver.position)}
                    </div>
                  </div>
                )}

                {/* 팀 컬러 바 */}
                <div
                  className="w-1.5 h-10 rounded-full mb-3 transition-all duration-300 group-hover:shadow-lg"
                  style={{
                    backgroundColor: driver.teamColor,
                    boxShadow: `0 0 15px ${driver.teamColor}80`,
                  }}
                ></div>

                {/* 드라이버 정보 */}
                <div className="text-center">
                  <div className="font-bold text-base text-white mb-1.5 group-hover:text-primary transition-colors duration-300">
                    {driver.driverName}
                  </div>
                  <div className="flex items-center justify-center gap-2 mb-1">
                    {driver.teamLogoUrl && (
                      <div className="relative w-8 h-8 flex-shrink-0">
                        <Image
                          src={driver.teamLogoUrl}
                          alt={driver.team}
                          fill
                          className="object-contain opacity-90"
                          sizes="32px"
                          unoptimized
                        />
                      </div>
                    )}
                    <div className="text-sm text-gray-400">{driver.team}</div>
                  </div>
                  <div className="text-sm font-mono text-gray-500">
                    {driver.driverCode}
                  </div>
                </div>
              </div>

              {/* 포디움 (아래쪽) */}
              <div
                className={`w-full ${getPositionHeight(
                  driver.position
                )} relative rounded-t-lg bg-gradient-to-t ${getPositionGradient(
                  driver.position
                )} border-t-2 border-l-2 border-r-2 transition-all duration-300 group-hover:scale-105 group-hover:border-primary/50 overflow-hidden`}
                style={{
                  borderTopColor:
                    driver.position === 1
                      ? "#FBBF24"
                      : driver.position === 2
                      ? "#D1D5DB"
                      : "#F97316",
                  borderLeftColor:
                    driver.position === 1
                      ? "#FBBF24"
                      : driver.position === 2
                      ? "#D1D5DB"
                      : "#F97316",
                  borderRightColor:
                    driver.position === 1
                      ? "#FBBF24"
                      : driver.position === 2
                      ? "#D1D5DB"
                      : "#F97316",
                }}
              >
                {/* 포디움 번호 */}
                <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2">
                  <div
                    className={`text-5xl font-bold ${
                      driver.position === 1
                        ? "text-yellow-400"
                        : driver.position === 2
                        ? "text-gray-300"
                        : "text-orange-500"
                    }`}
                  >
                    {driver.position}
                  </div>
                </div>

                {/* 그라데이션 오버레이 */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 rounded-t-lg"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
