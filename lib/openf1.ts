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

// 드라이버 얼굴 사진 맵
const driverHeadshotMap: Record<string, string> = {
  "Max VERSTAPPEN":
    "https://i.namu.wiki/i/nE2jIeuRXhG_Q43a1IQCy7T7frTKvGrHjWnUH2izuzXRDzB0t5xX4NAuvO30i6QQ8Di8M3gdjVNgalpLEcosVP56clMjcZ8EWQxp-OH3znxFtea-3RvJ7hefFYL_hij8pU79466RFm_pY93qCElosw.webp",
  "Max Verstappen":
    "https://i.namu.wiki/i/nE2jIeuRXhG_Q43a1IQCy7T7frTKvGrHjWnUH2izuzXRDzB0t5xX4NAuvO30i6QQ8Di8M3gdjVNgalpLEcosVP56clMjcZ8EWQxp-OH3znxFtea-3RvJ7hefFYL_hij8pU79466RFm_pY93qCElosw.webp",
  "Charles LECLERC":
    "https://i.namu.wiki/i/VcibXppQlW66pEXfJlcxVtIy3FPHlecmSv_ndjaDs0g7tW7sWW2QS2HNwNPGT1--z1sXWRkEACJggOv9352SzaV4iRl0ajgK98cPAsQVnZ6XauOe_wpgLYfmThcQnmJxRtlXEnlghxYZ-5HsSbROEg.webp",
  "Charles Leclerc":
    "https://i.namu.wiki/i/VcibXppQlW66pEXfJlcxVtIy3FPHlecmSv_ndjaDs0g7tW7sWW2QS2HNwNPGT1--z1sXWRkEACJggOv9352SzaV4iRl0ajgK98cPAsQVnZ6XauOe_wpgLYfmThcQnmJxRtlXEnlghxYZ-5HsSbROEg.webp",
  "Lewis HAMILTON":
    "https://i.namu.wiki/i/DPpz7hWHe8QXAHrD-MUXB-ha0cxUN4roXTtGq5zFbgSk6ZbBYZJC6IrJGxBsoqb5FJi3bDnrpRzRIRyKb0pskVTlKe3EeNAxTL6tQ7l47gsVS7eSs6v1KXVP8WR7oTOFr4vCutnbdgfpFU-ukGSX5g.webp",
  "Lewis Hamilton":
    "https://i.namu.wiki/i/DPpz7hWHe8QXAHrD-MUXB-ha0cxUN4roXTtGq5zFbgSk6ZbBYZJC6IrJGxBsoqb5FJi3bDnrpRzRIRyKb0pskVTlKe3EeNAxTL6tQ7l47gsVS7eSs6v1KXVP8WR7oTOFr4vCutnbdgfpFU-ukGSX5g.webp",
  "George RUSSELL":
    "https://i.namu.wiki/i/wi5vieXPKvZiN9WsJE0t4N0geDiKIYdXYHb9ME6PAvalFyuG8ZYH7xBrjTxICaJsrjHEHhVS1WRag38Zb6BG7MQy8V9I_MCMcrBNHedIGUeIFcc7BgT2JLtdVyvMvnke1kUzXF0WnzgghvFKiI6C-g.webp",
  "George Russell":
    "https://i.namu.wiki/i/wi5vieXPKvZiN9WsJE0t4N0geDiKIYdXYHb9ME6PAvalFyuG8ZYH7xBrjTxICaJsrjHEHhVS1WRag38Zb6BG7MQy8V9I_MCMcrBNHedIGUeIFcc7BgT2JLtdVyvMvnke1kUzXF0WnzgghvFKiI6C-g.webp",
  "Carlos SAINZ":
    "https://i.namu.wiki/i/ccjbqgz-gyk-BIFr3EKN0WUkz_XgSKZRG_6gxxMx393E51Eoh8mwS2TK5PhAwqNrxdejGzCZeqokylVkrIZ81rvFvV10xUGcUwUubLuMJ2DGJZvQqBQVnBPlhitxjZbXybg1mJe7slcGlSmmOGeFHw.webp",
  "Carlos Sainz":
    "https://i.namu.wiki/i/ccjbqgz-gyk-BIFr3EKN0WUkz_XgSKZRG_6gxxMx393E51Eoh8mwS2TK5PhAwqNrxdejGzCZeqokylVkrIZ81rvFvV10xUGcUwUubLuMJ2DGJZvQqBQVnBPlhitxjZbXybg1mJe7slcGlSmmOGeFHw.webp",
  "Carlos Sainz Jr.":
    "https://i.namu.wiki/i/ccjbqgz-gyk-BIFr3EKN0WUkz_XgSKZRG_6gxxMx393E51Eoh8mwS2TK5PhAwqNrxdejGzCZeqokylVkrIZ81rvFvV10xUGcUwUubLuMJ2DGJZvQqBQVnBPlhitxjZbXybg1mJe7slcGlSmmOGeFHw.webp",
  "Lando NORRIS":
    "https://i.namu.wiki/i/KlqVu1GUrEXhFUJG04WfEIKuN-UElLmFN2e3VFRLA6NcH4QP_vZ6A46ek8OX0fm2HbiFOrOPtC31N-RiVbdLgN87Wmy17n5cHPbDYVdqicWP6wK4pA_QrSZZULITAEe8k_ZTaon5e2diemhh9ORLzw.webp",
  "Lando Norris":
    "https://i.namu.wiki/i/KlqVu1GUrEXhFUJG04WfEIKuN-UElLmFN2e3VFRLA6NcH4QP_vZ6A46ek8OX0fm2HbiFOrOPtC31N-RiVbdLgN87Wmy17n5cHPbDYVdqicWP6wK4pA_QrSZZULITAEe8k_ZTaon5e2diemhh9ORLzw.webp",
  "Sergio PEREZ":
    "https://media.formula1.com/image/upload/f_auto,c_limit,q_75,w_auto/content/dam/fom-website/2018-redesign-assets/drivers/2025/sergeipe01.png",
  "Sergio Perez":
    "https://media.formula1.com/image/upload/f_auto,c_limit,q_75,w_auto/content/dam/fom-website/2018-redesign-assets/drivers/2025/sergeipe01.png",
  "Fernando ALONSO":
    "https://i.namu.wiki/i/mGgW_1IbrvGe_iaxtyDW7BPdFy_YAhqGVy1ErgHG-_SRu8rZcKE3_7XVRQD0ugmEjp5-foHPp4XLvZI2KzSFJxJLOAoHa90IBYB-qWUL-v8RYBGWUDCF3kCx0Lvpa22AKj3hLKeJVSmZyHpwkg_IjQ.webp",
  "Fernando Alonso":
    "https://i.namu.wiki/i/mGgW_1IbrvGe_iaxtyDW7BPdFy_YAhqGVy1ErgHG-_SRu8rZcKE3_7XVRQD0ugmEjp5-foHPp4XLvZI2KzSFJxJLOAoHa90IBYB-qWUL-v8RYBGWUDCF3kCx0Lvpa22AKj3hLKeJVSmZyHpwkg_IjQ.webp",
  "Esteban OCON":
    "https://i.namu.wiki/i/c5V5nCiURMs5dZgotUWFsM4z02nZQo1sUaYvxed9GP5R5xzy--2Croh2W8nMm_Yv_t7NcE6mgiXqFNPDSTFmzlcGtAuEv02Y4utbVP0K8pjCAOSif_2w06GOi39E84xAWZbNinczgsPea0IFKa_8Jg.webp",
  "Esteban Ocon":
    "https://i.namu.wiki/i/c5V5nCiURMs5dZgotUWFsM4z02nZQo1sUaYvxed9GP5R5xzy--2Croh2W8nMm_Yv_t7NcE6mgiXqFNPDSTFmzlcGtAuEv02Y4utbVP0K8pjCAOSif_2w06GOi39E84xAWZbNinczgsPea0IFKa_8Jg.webp",
  "Pierre GASLY":
    "https://i.namu.wiki/i/Rit7ZBzEQ8TeDsfIUYcYUZm1jDn4mhvRKpny0OSaxddpeMcZJj7F_FvsB5Btgpu5jV2brbW2CjHUDUPki8QbQiygelN6bdc0GrXem0USq7lAUvWu7Za3p90rkxHjm75Qlr0aQjLa7jVaoml6pfJyQw.webp",
  "Pierre Gasly":
    "https://i.namu.wiki/i/Rit7ZBzEQ8TeDsfIUYcYUZm1jDn4mhvRKpny0OSaxddpeMcZJj7F_FvsB5Btgpu5jV2brbW2CjHUDUPki8QbQiygelN6bdc0GrXem0USq7lAUvWu7Za3p90rkxHjm75Qlr0aQjLa7jVaoml6pfJyQw.webp",
  "Yuki TSUNODA":
    "https://i.namu.wiki/i/LvX01Es-VZpZ0VYsDHSN2JG28XBeCErYyejGbkBZrJL4S0BjCJmSZHeDOlB3YRAvP_2QZehbxwupuzWfFla5QtL_CjldTzMcW7QHiAVugB2OUh3tPSh8v3T13r0h33P2KpzKDZN1jkmpMd6z6ZA23A.webp",
  "Yuki Tsunoda":
    "https://i.namu.wiki/i/LvX01Es-VZpZ0VYsDHSN2JG28XBeCErYyejGbkBZrJL4S0BjCJmSZHeDOlB3YRAvP_2QZehbxwupuzWfFla5QtL_CjldTzMcW7QHiAVugB2OUh3tPSh8v3T13r0h33P2KpzKDZN1jkmpMd6z6ZA23A.webp",
  "Oscar PIASTRI":
    "https://i.namu.wiki/i/Ifns07jGT5Z7ACSfDmR6pkdkhB9XvizLt3nBFYDP0NheWksnplmbK7XSHvDmeW4Gzf7YbcsfXyIkhVz5A9xzEq--AUGi6wGLvKND4edVSzPjG5fJXlKJ81IjXJJVLDp9CPDxbxmcAxlMFxF-Jbhmew.webp",
  "Oscar Piastri":
    "https://i.namu.wiki/i/Ifns07jGT5Z7ACSfDmR6pkdkhB9XvizLt3nBFYDP0NheWksnplmbK7XSHvDmeW4Gzf7YbcsfXyIkhVz5A9xzEq--AUGi6wGLvKND4edVSzPjG5fJXlKJ81IjXJJVLDp9CPDxbxmcAxlMFxF-Jbhmew.webp",
  "Lance STROLL":
    "https://i.namu.wiki/i/wO141ZpPvXyzyx78NXuLkpgJYhaF2yC7QSfNts0sUz5k8U5_8AC9cgkod6u9_o7AIWHiGaPmL_MjX64rNI-L_RvmWlLhou6FfRKWbwIfmjv1j6gGJ8_OT_Zd3srd1HxIOGt0psVmXb3eMq8BDKGIIw.webp",
  "Lance Stroll":
    "https://i.namu.wiki/i/wO141ZpPvXyzyx78NXuLkpgJYhaF2yC7QSfNts0sUz5k8U5_8AC9cgkod6u9_o7AIWHiGaPmL_MjX64rNI-L_RvmWlLhou6FfRKWbwIfmjv1j6gGJ8_OT_Zd3srd1HxIOGt0psVmXb3eMq8BDKGIIw.webp",
  "Nico HULKENBERG":
    "https://i.namu.wiki/i/peePRdYK9fFEg4-pYt33ydHglYxCZ10YfJWgfQBqwgwXZUai9ObeSWc0cgFedv3MFwjWTTJPmeoHjfYfrhylQnVGFSbWFwfM1gFe6iq9iL1PcTRx0Unq-ML-r2AA7POeEGfHGMWRTsO7O3IBfjd4CA.webp",
  "Nico Hulkenberg":
    "https://i.namu.wiki/i/peePRdYK9fFEg4-pYt33ydHglYxCZ10YfJWgfQBqwgwXZUai9ObeSWc0cgFedv3MFwjWTTJPmeoHjfYfrhylQnVGFSbWFwfM1gFe6iq9iL1PcTRx0Unq-ML-r2AA7POeEGfHGMWRTsO7O3IBfjd4CA.webp",
  "Franco COLAPINTO":
    "https://i.namu.wiki/i/ZW9m6seWp5Hb-vO0uRkfU-5LZZYPRgkkiA_Tdu2UTcXllLFuqj0OrLLMJJC_P8MKnv9mnmMJ0vctbBfiTtAqeqbfFciplzFl_Q3k7Hs-iuoTHC5otq770yx9UMyw2YX0PcFtjlo9Gi6cE3ztakcBDA.webp",
  "Franco Colapinto":
    "https://i.namu.wiki/i/ZW9m6seWp5Hb-vO0uRkfU-5LZZYPRgkkiA_Tdu2UTcXllLFuqj0OrLLMJJC_P8MKnv9mnmMJ0vctbBfiTtAqeqbfFciplzFl_Q3k7Hs-iuoTHC5otq770yx9UMyw2YX0PcFtjlo9Gi6cE3ztakcBDA.webp",
  "Isack HADJAR":
    "https://i.namu.wiki/i/_Rw7Q17ZUvnxCMYIwbmxNIlXdSbTkNT9FKN4Qrn2u1uTtR1hTG-B2bJPsBthdVOwiRwrrl3lC8cZZEb7Z4fZaqyeKjQoOZSMMnn0cECfqjbD9ZCCS6xnf5w3NmgP6V-DYPrGskltkVEyCu_onT_MZg.webp",
  "Isack Hadjar":
    "https://i.namu.wiki/i/_Rw7Q17ZUvnxCMYIwbmxNIlXdSbTkNT9FKN4Qrn2u1uTtR1hTG-B2bJPsBthdVOwiRwrrl3lC8cZZEb7Z4fZaqyeKjQoOZSMMnn0cECfqjbD9ZCCS6xnf5w3NmgP6V-DYPrGskltkVEyCu_onT_MZg.webp",
  "Alexander ALBON":
    "https://i.namu.wiki/i/3wXuHiPiIIgJEBXiiuPYOUGCQYG962rvefLu3TzASbUGAFg5jtcy7NEUpIMd3lyzEkHMzLtaPj3sLL6hkBzXxK6Xz8_2rq5TsTzwuhOK3f_2OQg4Q6D2e1wTCosRk06JZ09hIvnysXQYtTJU_ZnQbA.webp",
  "Alexander Albon":
    "https://i.namu.wiki/i/3wXuHiPiIIgJEBXiiuPYOUGCQYG962rvefLu3TzASbUGAFg5jtcy7NEUpIMd3lyzEkHMzLtaPj3sLL6hkBzXxK6Xz8_2rq5TsTzwuhOK3f_2OQg4Q6D2e1wTCosRk06JZ09hIvnysXQYtTJU_ZnQbA.webp",
  "Gabriel BORTOLETO":
    "https://i.namu.wiki/i/dE7xFB-IgLm6qdlksKgu19ZUg9errhbI4ZVF3xPe1kNWzTb58_h49hyIBf2MLnkCspDCvoQwdP6Fo0t5cBlXbaNV4H3RLz_6E6BHt-ZnkRdcfUEjo08Rrq1tzaWeugZ9p_8krrH5OD3nm2PnYD2kLw.webp",
  "Gabriel Bortoleto":
    "https://i.namu.wiki/i/dE7xFB-IgLm6qdlksKgu19ZUg9errhbI4ZVF3xPe1kNWzTb58_h49hyIBf2MLnkCspDCvoQwdP6Fo0t5cBlXbaNV4H3RLz_6E6BHt-ZnkRdcfUEjo08Rrq1tzaWeugZ9p_8krrH5OD3nm2PnYD2kLw.webp",
  "Oliver BEARMAN":
    "https://i.namu.wiki/i/PxnLVE3B2MSOkQdhxfTMjHJnbot_1gaHMdyjKq9oqbXtvgIE1yFcCba5BOeOqqHjyyTdCrweDnPD55YHebV1TMfMsn0B395FDpdd7DZazy71W__prkdadpXxF6uHAuVvSvEoiHQv6-1Q6teq8-3bbA.webp",
  "Oliver Bearman":
    "https://i.namu.wiki/i/PxnLVE3B2MSOkQdhxfTMjHJnbot_1gaHMdyjKq9oqbXtvgIE1yFcCba5BOeOqqHjyyTdCrweDnPD55YHebV1TMfMsn0B395FDpdd7DZazy71W__prkdadpXxF6uHAuVvSvEoiHQv6-1Q6teq8-3bbA.webp",
  "Kimi ANTONELLI":
    "https://i.namu.wiki/i/T_4IlKDpggqymyuLEXfB0ibbdPpGSuAaSwKzCgFdLG3w2zN843-sQGrwvHmxtF3csWGjEvgV78yzo_C6k1PdtdUmcWH4mzOxDqTMQAiwAiH6mqlzS1vtCvDIFpvCuhF4WfffbOdMq6dZjbH9UHERKQ.webp",
  "Kimi Antonelli":
    "https://i.namu.wiki/i/T_4IlKDpggqymyuLEXfB0ibbdPpGSuAaSwKzCgFdLG3w2zN843-sQGrwvHmxtF3csWGjEvgV78yzo_C6k1PdtdUmcWH4mzOxDqTMQAiwAiH6mqlzS1vtCvDIFpvCuhF4WfffbOdMq6dZjbH9UHERKQ.webp",
  "Liam LAWSON":
    "https://i.namu.wiki/i/MAH9P4scITqdWlSrXr2ebqaymkoZHFGBUQYlHMoBV7xh7UqzIUGj0b-4uZguo3WCmF1ubTRQT3UPR7nOceZq-jS21Li-5IMtsUH5PPvpVdV4LsGRijMQUGlLW4Xh8al7WSqXz2_LqoSFYPI0C7B1Ow.webp",
  "Liam Lawson":
    "https://i.namu.wiki/i/MAH9P4scITqdWlSrXr2ebqaymkoZHFGBUQYlHMoBV7xh7UqzIUGj0b-4uZguo3WCmF1ubTRQT3UPR7nOceZq-jS21Li-5IMtsUH5PPvpVdV4LsGRijMQUGlLW4Xh8al7WSqXz2_LqoSFYPI0C7B1Ow.webp",
};

// 드라이버 이름 한글 번역 맵
const driverNameMap: Record<string, string> = {
  "Max VERSTAPPEN": "막스 베르스타펜",
  "Max Verstappen": "막스 베르스타펜",
  "Charles LECLERC": "샤를 르클레르",
  "Charles Leclerc": "샤를 르클레르",
  "Lewis HAMILTON": "루이스 해밀턴",
  "Lewis Hamilton": "루이스 해밀턴",
  "George RUSSELL": "조지 러셀",
  "George Russell": "조지 러셀",
  "Carlos SAINZ": "카를로스 사인츠",
  "Carlos Sainz": "카를로스 사인츠",
  "Carlos Sainz Jr.": "카를로스 사인츠",
  "Lando NORRIS": "랜도 노리스",
  "Lando Norris": "랜도 노리스",
  "Sergio PEREZ": "세르히오 페레즈",
  "Sergio Perez": "세르히오 페레즈",
  "Fernando ALONSO": "페르난도 알론소",
  "Fernando Alonso": "페르난도 알론소",
  "Esteban OCON": "에스테반 오콘",
  "Esteban Ocon": "에스테반 오콘",
  "Pierre GASLY": "피에르 가슬리",
  "Pierre Gasly": "피에르 가슬리",
  "Yuki TSUNODA": "유키 츠노다",
  "Yuki Tsunoda": "유키 츠노다",
  "Oscar PIASTRI": "오스카 피아스트리",
  "Oscar Piastri": "오스카 피아스트리",
  "Lance STROLL": "랜스 스트롤",
  "Lance Stroll": "랜스 스트롤",
  "Nico HULKENBERG": "니코 휠켄베르그",
  "Nico Hulkenberg": "니코 휠켄베르그",
  "Franco COLAPINTO": "프란코 콜라핀토",
  "Franco Colapinto": "프란코 콜라핀토",
  "Isack HADJAR": "아이작 하자르",
  "Isack Hadjar": "아이작 하자르",
  "Alexander ALBON": "알렉산더 알본",
  "Alexander Albon": "알렉산더 알본",
  "Gabriel BORTOLETO": "가브리엘 보르토레토",
  "Gabriel Bortoleto": "가브리엘 보르토레토",
  "Oliver BEARMAN": "올리버 베어먼",
  "Oliver Bearman": "올리버 베어먼",
  "Kimi ANTONELLI": "키미 안토넬리",
  "Kimi Antonelli": "키미 안토넬리",
  "Liam LAWSON": "리암 로슨",
  "Liam Lawson": "리암 로슨",
};

// 드라이버 이름 번역 함수
export function translateDriverName(name: string): string {
  return driverNameMap[name] || name;
}

// 드라이버 얼굴 사진 가져오기
export function getDriverHeadshot(name: string): string {
  return driverHeadshotMap[name] || "";
}

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
  const teamColor =
    `#${driver.team_colour}` === `#00A1E8`
      ? `#eb78ff`
      : `#${driver.team_colour}`;
  const teamName = teamNameMap[driver.team_name] || driver.team_name;
  const nationality =
    countryCodeMap[driver.country_code] || driver.country_code;

  const translatedName = translateDriverName(driver.full_name);
  const driverHeadshot = getDriverHeadshot(driver.full_name);

  return {
    driverName: translatedName,
    driverCode: driver.name_acronym,
    team: teamName,
    teamColor: teamColor,
    teamLogoUrl: teamLogoMap[driver.team_name] || "",
    driverImageUrl: driverHeadshot || "",
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
