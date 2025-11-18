"use client";

import { Trophy, Award, Clock, ChevronRight } from "lucide-react";
import { useState } from "react";

import type { DriverResult } from "@/lib/types/types";

const raceResults: DriverResult[] = [
  {
    position: 1,
    driverName: "랜도 노리스",
    driverCode: "NOR",
    team: "맥라렌",
    time: "1:37:58.574",
    laps: 71,
    points: 25,
    highlight: "오늘의 드라이버",
    teamColor: "#FF8000",
  },
  {
    position: 2,
    driverName: "샤를 르클레르",
    driverCode: "LEC",
    team: "페라리",
    time: "+30.324",
    laps: 71,
    points: 18,
    teamColor: "#DC143C",
  },
  {
    position: 3,
    driverName: "막스 베르스타펜",
    driverCode: "VER",
    team: "레드불",
    time: "+31.049",
    laps: 71,
    points: 15,
    teamColor: "#1E41FF",
  },
  {
    position: 4,
    driverName: "올리버 베어먼",
    driverCode: "BEA",
    team: "하스",
    time: "+40.955",
    laps: 71,
    points: 12,
    teamColor: "#FFFFFF",
  },
  {
    position: 5,
    driverName: "오스카 피아스트리",
    driverCode: "PIA",
    team: "맥라렌",
    time: "+42.065",
    laps: 71,
    points: 10,
    teamColor: "#FF8000",
  },
];

export default function RaceResults() {
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);

  const getPositionColor = (position: number) => {
    switch (position) {
      case 1:
        return "text-primary";
      case 2:
        return "text-gray-600";
      case 3:
        return "text-primary";
      default:
        return "text-gray-600";
    }
  };

  return (
    <div className="relative w-full">
      {/* 헤더 섹션 */}
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-sm">
            <Trophy className="text-primary" size={24} />
          </div>
          <div>
            <h3 className="text-xl font-extrabold tracking-tight text-gray-900">
              멕시코 그랑프리 결과
            </h3>
            <p className="mt-1 text-sm font-medium text-gray-600">최근 레이스</p>
          </div>
        </div>
        <span className="text-xs font-extrabold px-3 py-1.5 bg-primary/20 text-primary rounded-full border border-primary/30">
          R20
        </span>
      </div>

      {/* 메인 컨텐츠 */}
      <div className="relative overflow-hidden rounded-3xl bg-white p-6 shadow-lg border border-gray-200">
        <div className="overflow-x-auto -mx-6 px-6">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-4 px-4 text-xs font-extrabold text-gray-600 uppercase tracking-wider">
                  순위
                </th>
                <th className="text-left py-4 px-4 text-xs font-extrabold text-white/70 uppercase tracking-wider">
                  드라이버
                </th>
                <th className="text-left py-4 px-4 text-xs font-extrabold text-white/70 uppercase tracking-wider">
                  시간
                </th>
                <th className="text-center py-4 px-4 text-xs font-extrabold text-gray-400 uppercase tracking-wider">
                  랩
                </th>
                <th className="text-center py-4 px-4 text-xs font-extrabold text-gray-400 uppercase tracking-wider">
                  포인트
                </th>
              </tr>
            </thead>
            <tbody>
              {raceResults.map((result, index) => (
                <tr
                  key={result.position}
                  className="border-b border-gray-200 hover:bg-gray-50 transition-all duration-300 group cursor-pointer relative"
                  onMouseEnter={() => setHoveredRow(result.position)}
                  onMouseLeave={() => setHoveredRow(null)}
                  style={{
                    animationDelay: `${index * 0.05}s`,
                  }}
                >
                <td className="py-4 px-4">
                  <div className="flex items-center space-x-2">
                    {result.position === 1 && (
                      <Trophy
                        className={`${getPositionColor(
                          result.position
                        )} animate-pulse-slow`}
                        size={18}
                      />
                    )}
                    {result.position === 2 && (
                      <Award
                        className={getPositionColor(result.position)}
                        size={18}
                      />
                    )}
                    {result.position === 3 && (
                      <Award
                        className={getPositionColor(result.position)}
                        size={18}
                      />
                    )}
                    <span
                      className={`font-bold text-lg ${getPositionColor(
                        result.position
                      )}`}
                    >
                      {result.position}
                    </span>
                  </div>
                </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center space-x-3">
                      {result.teamColor && (
                        <div
                          className="w-1.5 h-12 rounded-full transition-all duration-300 group-hover:shadow-lg"
                          style={{
                            backgroundColor: result.teamColor,
                            boxShadow:
                              hoveredRow === result.position
                                ? `0 0 15px ${result.teamColor}80`
                                : "none",
                          }}
                        ></div>
                      )}
                      <div>
                        <div className="font-semibold text-base text-gray-900 group-hover:text-primary transition-colors duration-300">
                          {result.driverName}
                        </div>
                        <div className="text-sm text-gray-600 font-medium">{result.team}</div>
                        {result.highlight && (
                          <span className="inline-block mt-1.5 text-xs px-2.5 py-1 bg-primary/20 text-primary rounded-full border border-primary/30 font-semibold">
                            {result.highlight}
                          </span>
                        )}
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center space-x-1.5">
                      <Clock size={14} className="text-gray-400" />
                      <span className="text-sm font-mono font-medium">{result.time}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-center text-sm text-gray-700 font-semibold">
                    {result.laps}
                  </td>
                  <td className="py-4 px-4 text-center">
                    <div className="flex items-center justify-center space-x-2">
                      <span className="font-bold text-lg text-primary">
                        {result.points}
                      </span>
                      <ChevronRight
                        size={16}
                        className="text-gray-400 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300"
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 pt-5 border-t border-gray-200">
          <button className="w-full py-3.5 text-sm font-semibold text-gray-700 hover:text-white rounded-2xl transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 border border-gray-200 hover:border-primary bg-gradient-to-r from-gray-50 to-white hover:from-primary hover:to-primary-dark group">
            <span className="flex items-center justify-center space-x-2">
              <span>전체 결과 보기</span>
              <ChevronRight
                size={16}
                className="transform group-hover:translate-x-1 transition-transform duration-300"
              />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
