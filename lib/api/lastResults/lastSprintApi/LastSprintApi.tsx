const LAST_SPRINT_RESULT_API_URL =
  "https://f1api.dev/api/current/last/sprint/race";

interface LastSprintResult {
  raceId: string;
  raceName: string;
  laps: number;
  drivers: string[];
  winner: string;
  teamWinner: string;
  fastestLap: string;
  fastestLapDriver: string;
  fastestLapTeam: string;
  position: number;
}

export interface LastSprintResultResponse {
  raceId: string;
  raceName: string;
  laps: number;
  drivers: string[];
  teams: string[];
  winner: string;
  teamWinner: string;
  fastestLap: string;
  fastestLapDriver: string;
  fastestLapTeam: string;
  position: number;
}

export async function getLastSprintRaceResult(): Promise<LastSprintResult | null> {
  try {
    const response = await fetch(LAST_SPRINT_RESULT_API_URL);
    if (!response.ok) {
      throw new Error(
        `Failed to fetch last sprint race result: ${response.status} ${response.statusText}`
      );
    }
    const data: LastSprintResult = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching last sprint race result:", error);
    return null;
  }
}
