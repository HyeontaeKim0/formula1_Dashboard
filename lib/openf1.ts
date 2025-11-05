export interface OpenF1Driver {
  broadcast_name: string;
  country_code: string;
  driver_number: number;
  first_name: string;
  full_name: string;
  headshot_url: string;
  last_name: string;
  meeting_key: number;
  name_acronym: string;
  session_key: number;
  team_colour: string;
  team_name: string;
}

export interface Driver {
  driverName: string;
  driverCode: string;
  team: string;
  teamColor: string;
  teamLogoUrl: string;
  driverImageUrl: string;
  points: number;
  wins: number;
  podiums: number;
  position: number;
  nationality: string;
  driverNumber: number;
  countryCode: string;
}

// 팀 로고 URL 매핑
const teamLogoMap: Record<string, string> = {
  "Red Bull Racing":
    "https://i.namu.wiki/i/tmc7BkeuZHgon5-SUmoPnWjIJMHXK-9iKxwoaPVwgkfjoTpCfBDocni5QPxicnfuLvUu0w6F8x5OOYskdAhzYA.svg",
  McLaren:
    "https://i.namu.wiki/i/NMVkodqAXkSDUBnIu-PG7rHKsJSdUj-M7zfEW3i1aoB_QWP2QC5CaJT90iK0wJpzefENKLG-Fhtd59o1Qr1qHQ.webp",
  Ferrari:
    "https://i.namu.wiki/i/ECrvNlNmJzF6cqUToZ0rAzY7or8LZUSccqLj2H6KyEW4aJj1ZgQZLY4bhgA5A87WcQHIqY6_RqX23r6tZQCa8g.svg",
  Mercedes:
    "https://i.namu.wiki/i/1xsredTlZXOc_NkIFckcHDXRvlsPGZ0PmUYib8hZrdf_v1yT0aUjulwXeldN7m7CLP8mO_NwyW6UvjF-hEl73Jw1FgTtq6cT2EVmCnxWz2ConAvSzbWomzQQykVJn3O-aJ4onwHDm0Yud7M-9xuX6A.svg",
  "Aston Martin":
    "https://i.namu.wiki/i/RcgIM1PvyryM8UU0J-Ytt3IVS6z3FEghJYBwTQ2AGnUh89V0fN1uenv_OCaL0_JfhX4byMZUvyFLEOerSUoHtad4PBhg4piYaYxcaTgpjLFd-fffIpa0o-QRZvhe3a-Kz3CQ3nZfzUKIgLESs3FEhg.svg",
  "Kick Sauber":
    "https://i.namu.wiki/i/136BQjIm9zqHcpmJyJB67rk4NWDofehAID_tR-mEs7FxT6vyAhClZMHJJCzP6uZiNNxnJj0KuFpS9yXTbHFE9A.svg",
  Alpine:
    "https://i.namu.wiki/i/4vhnPWoRW7K8QtIRG1X_hG6E6clBWqOJnDFf-mMbKl3WpJSfud1Un7aIRWjEYuZH9tERb_CNW9u4qsIZVvZX_1YVRhYiDbxYVRQBbNs7ucQK0Fz2AzgOyzHILLDAMNyAh6IgJ-pb6z2G4u1WgJLryA.svg",
  Williams:
    "https://i.namu.wiki/i/0vJLUUPLuLAQiOXZhkLC6CVckyCPJjB4LT0V4boG9RzqyEJVkbj-7E1mZOV7T1uVdoJCyTVw-TMx5SABTvSE1A.svg",
  Haas: "https://i.namu.wiki/i/BbahTUJdRaBbw82_y3Sg1WpuNv2SJmE9QKhR2N8vLvJEdcJvhSyStL_zxgmwRJkIwAZCE6o787jxdZR_rHRvn01SR5HXq_3z1kWmqxpJsb2VcC0mUPn9fiG_iGkjqiId6Crul4JiQBgRHhZrAiSCSQ.svg",

  RB: "https://i.namu.wiki/i/GS9rp5MI79PwBFESgp04FG4Gu7OXAH3VduJEnCE0_w7xI_aU-TB9yrMC8-5LymjuOP-8U6Rwoikn6IWVpAnW2A.svg",
};

// 팀 이름 한글 매핑
const teamNameMap: Record<string, string> = {
  "Red Bull Racing": "레드불",
  McLaren: "맥라렌",
  Ferrari: "페라리",
  Mercedes: "메르세데스",
  "Aston Martin": "에스턴 마틴",
  Alpine: "알핀",
  "Haas F1 Team": "하스",
  Williams: "윌리엄스",
  RB: "RB",
  Sauber: "킥 자우버",
};

// 국가 코드 한글 매핑
const countryCodeMap: Record<string, string> = {
  NED: "네덜란드",
  GBR: "영국",
  AUS: "오스트레일리아",
  MCO: "모나코",
  ESP: "스페인",
  CAN: "캐나다",
  DEN: "덴마크",
  JPN: "일본",
  CHN: "중국",
  THA: "태국",
  GER: "독일",
  FIN: "핀란드",
};

// OpenF1 API에서 드라이버 목록 가져오기
export async function getDriversFromOpenF1(
  sessionKey: string = "latest"
): Promise<OpenF1Driver[]> {
  try {
    const response = await fetch(
      `https://api.openf1.org/v1/drivers?session_key=${sessionKey}`,
      {
        next: { revalidate: 3600 }, // 1시간마다 재검증
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch drivers: ${response.statusText}`);
    }

    const data: OpenF1Driver[] = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching drivers from OpenF1:", error);
    return [];
  }
}

// OpenF1 드라이버 데이터를 앱 형식으로 변환
export function transformOpenF1Driver(
  driver: OpenF1Driver,
  position: number = 0,
  points: number = 0,
  wins: number = 0,
  podiums: number = 0
): Driver {
  const teamColor = `#${driver.team_colour}`;
  const teamName = teamNameMap[driver.team_name] || driver.team_name;
  const nationality =
    countryCodeMap[driver.country_code] || driver.country_code;

  return {
    driverName: driver.full_name,
    driverCode: driver.name_acronym,
    team: teamName,
    teamColor: teamColor,
    teamLogoUrl: teamLogoMap[driver.team_name] || "",
    driverImageUrl: driver.headshot_url || "",
    points: points,
    wins: wins,
    podiums: podiums,
    position: position,
    nationality: nationality,
    driverNumber: driver.driver_number,
    countryCode: driver.country_code,
  };
}

// 세션 키 가져오기 (최신 세션)
export async function getLatestSessionKey(): Promise<string | null> {
  try {
    const response = await fetch(
      "https://api.openf1.org/v1/sessions?session_key=latest",
      {
        next: { revalidate: 3600 }, // 1시간마다 재검증
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch session: ${response.statusText}`);
    }

    const data = await response.json();
    if (data && data.length > 0) {
      return data[0].session_key?.toString() || "latest";
    }
    return "latest";
  } catch (error) {
    console.error("Error fetching latest session:", error);
    return "latest";
  }
}
