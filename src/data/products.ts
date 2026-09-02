export type Brand = "CPL" | "LMT" | "기타";

export type Category =
  | "라인어레이"
  | "모니터스피커"
  | "포인트소스"
  | "옥외용 포인트소스"
  | "룸모니터"
  | "다목적 스피커"
  | "커넥터"
  | "오디오믹서"
  | "플레이어"
  | "무선마이크"
  | "DAC"
  | "프로세서"
  | "셋톱박스";

export type Product = {
  id: string;
  model: string;
  brand: Brand;
  subcategory: Category;
  /** 같은 시리즈 모델끼리 상세페이지 하단에서 서로 연결됩니다 (예: CD100a ↔ CD100Ba) */
  series?: string;
  summary: string;
  specTag: string;
  comingSoon: boolean;
  /** (르미디어텍)LIVO제품사양서.pptx 실측 사양 — 있는 모델만 채워져 있습니다 */
  specs?: { label: string; value: string }[];
};

const spec = (label: string, value: string) => ({ label, value });

export const brands: { key: Brand; label: string }[] = [
  { key: "CPL", label: "CPL" },
  { key: "LMT", label: "LMT" },
  { key: "기타", label: "기타" },
];

export const subcategories: { key: Category; label: string }[] = [
  { key: "라인어레이", label: "라인어레이" },
  { key: "모니터스피커", label: "모니터스피커" },
  { key: "포인트소스", label: "포인트소스" },
  { key: "옥외용 포인트소스", label: "옥외용 포인트소스" },
  { key: "룸모니터", label: "룸모니터" },
  { key: "다목적 스피커", label: "다목적 스피커" },
  { key: "커넥터", label: "커넥터" },
  { key: "오디오믹서", label: "오디오믹서" },
  { key: "플레이어", label: "플레이어" },
  { key: "무선마이크", label: "무선마이크" },
  { key: "DAC", label: "DAC" },
  { key: "프로세서", label: "프로세서" },
  { key: "셋톱박스", label: "셋톱박스" },
];

/** 스피커 계열 카테고리 — 상세페이지에서 커넥터를 공통 액세서리로 함께 보여줍니다 */
const SPEAKER_CATEGORIES: Category[] = [
  "라인어레이",
  "모니터스피커",
  "포인트소스",
  "옥외용 포인트소스",
  "룸모니터",
  "다목적 스피커",
];

export const products: Product[] = [
  // ── CPL : 라인어레이 ──────────────────────────────────────────
  { id: "cd100a", model: "CD100a", brand: "CPL", subcategory: "라인어레이", series: "CD100", summary: "Active Linear Array Full-Range Loudspeaker (Bi-amplified, Dual 10-inch)", specTag: "Active", comingSoon: true,
    specs: [spec("유닛 구성", "LF 2×10\" / HF 1×3\""), spec("주파수 응답 (-3dB)", "60–20000Hz"), spec("커버리지 각도 (-6dB)", "110°(H) × 9°(V)"), spec("감도", "LF 101dB / HF 109dB"), spec("음압레벨", "132dB(AES) / 138dB(peak)"), spec("임피던스", "LF 8Ω / HF 8Ω"), spec("입력 파워", "LF 700W(AES) / 2800W(peak)"), spec("앰프 요구사항", "내장 2×1200W 8Ω DSP 앰프 모듈"), spec("크로스오버", "1500Hz"), spec("치수 (H×W×D)", "320×648×545mm"), spec("중량", "43kg")] },
  { id: "cd100ba", model: "CD100Ba", brand: "CPL", subcategory: "라인어레이", series: "CD100", summary: "Powered linear array ultra-low subwoofer (single 18-inch)", specTag: "Active", comingSoon: true,
    specs: [spec("유닛 구성", "1×18\""), spec("주파수 응답 (-3dB)", "30–160Hz"), spec("감도", "96dB"), spec("음압레벨", "133dB(AES) / 139dB(peak)"), spec("임피던스", "8Ω"), spec("입력 파워", "2000W(AES) / 8000W(peak)"), spec("크로스오버", "90Hz"), spec("치수 (H×W×D)", "501×648×704mm"), spec("중량", "65kg")] },
  { id: "cd80", model: "CD80", brand: "CPL", subcategory: "라인어레이", series: "CD80", summary: "Line Array Full Frequency Speaker (Single 8-inch)", specTag: "Active", comingSoon: true,
    specs: [spec("유닛 구성", "LF 1×8\" / HF 1×1\""), spec("주파수 응답 (-3dB)", "50–20000Hz"), spec("커버리지 각도 (-6dB)", "100°(H) × 12.5°(V)"), spec("감도", "LF 99dB"), spec("음압레벨", "122dB(AES) / 126dB(peak)"), spec("임피던스", "LF 16Ω / HF 16Ω"), spec("입력 파워", "LF 200/800W · HF 80/320W"), spec("크로스오버", "160Hz / 2000Hz"), spec("입력 커넥터", "2×Speakon NL4MP"), spec("치수 (H×W×D)", "245×500×300mm"), spec("중량", "16kg")] },
  { id: "cd80b", model: "CD80B", brand: "CPL", subcategory: "라인어레이", series: "CD80", summary: "Line Array Subwoofer (Single 15-inch)", specTag: "Active", comingSoon: true,
    specs: [spec("유닛 구성", "1×15\""), spec("주파수 응답 (-3dB)", "36–500Hz"), spec("감도", "98dB"), spec("음압레벨", "133dB(AES) / 137dB(peak)"), spec("임피던스", "8Ω"), spec("입력 파워", "500W(AES) / 2000W(peak)"), spec("크로스오버", "160Hz"), spec("입력 커넥터", "2×Speakon NL4MP"), spec("치수 (H×W×D)", "580×500×536mm"), spec("중량", "47kg")] },
  { id: "cd80ba", model: "CD80Ba", brand: "CPL", subcategory: "라인어레이", series: "CD80", summary: "Line array active subwoofer (single 15-inch)", specTag: "Active", comingSoon: true,
    specs: [spec("유닛 구성", "1×15\""), spec("주파수 응답 (-3dB)", "36–500Hz"), spec("감도", "98dB"), spec("음압레벨", "133dB(AES) / 137dB(peak)"), spec("임피던스", "8Ω"), spec("입력 파워", "500W(AES) / 2000W(peak)"), spec("입력 커넥터", "2×Speakon NL4MP"), spec("치수 (H×W×D)", "580×500×536mm"), spec("중량", "55kg")] },
  { id: "cd50a", model: "CD50a", brand: "CPL", subcategory: "라인어레이", series: "CD50", summary: "Active Linear Line Array Speaker (Dual 5-inch)", specTag: "Active", comingSoon: true,
    specs: [spec("유닛 구성", "LF 2×5\" / HF 1×1.75\""), spec("주파수 응답 (-3dB)", "100–20000Hz"), spec("커버리지 각도 (-6dB)", "H120° × V12°"), spec("감도", "LF 98dB / HF 106dB"), spec("음압레벨", "LF 122/128dB · HF 123/129dB"), spec("임피던스", "LF 4Ω / HF 8Ω"), spec("입력 파워", "LF 250/1000W · HF 50/200W"), spec("앰프 요구사항", "내장 2×600W 8Ω DSP 앰프 모듈"), spec("크로스오버", "160Hz / 2000Hz"), spec("치수 (H×W×D)", "210×530×300mm"), spec("중량", "16kg")] },
  { id: "cd50ba", model: "CD50Ba", brand: "CPL", subcategory: "라인어레이", series: "CD50", summary: "Active Linear Line Array Speaker (Dual 10-inch)", specTag: "Active", comingSoon: true,
    specs: [spec("유닛 구성", "2×10\""), spec("주파수 응답 (-3dB)", "55–160Hz"), spec("감도", "96dB"), spec("음압레벨", "125dB(AES) / 131dB(peak)"), spec("임피던스", "2×8Ω"), spec("입력 파워", "2×400W(AES) / 2×1600W(peak)"), spec("앰프 요구사항", "내장 2×600W 8Ω DSP 앰프 모듈"), spec("크로스오버", "55Hz / 160Hz"), spec("치수 (H×W×D)", "330×530×460mm"), spec("중량", "32kg")] },
  { id: "cd2000", model: "CD2000", brand: "CPL", subcategory: "라인어레이", series: "CD2000", summary: "Line array full-frequency speaker (dual 12-inch)", specTag: "Passive", comingSoon: true,
    specs: [spec("유닛 구성", "LF 2×12\" / HF 2×2\""), spec("주파수 응답 (-3dB)", "45–18000Hz"), spec("커버리지 각도 (-6dB)", "90°(H) × 8°(V)"), spec("감도", "LF 103dB / HF 113dB"), spec("음압레벨", "141dB(AES) / 145dB(peak)"), spec("임피던스", "LF 8Ω / HF 16Ω"), spec("입력 파워", "LF 1800/7200W · HF 300/1200W"), spec("앰프 요구사항", "2300–3500W 8Ω (병렬 2조 구동 시)"), spec("크로스오버", "약 1500Hz"), spec("입력 커넥터", "2×Speakon NL8MP"), spec("치수 (H×W×D)", "343×1220×550mm"), spec("중량", "70kg")] },
  { id: "cd2000b", model: "CD2000B", brand: "CPL", subcategory: "라인어레이", series: "CD2000", summary: "Super low speaker (dual 18-inch)", specTag: "Passive", comingSoon: true,
    specs: [spec("유닛 구성", "2×18\""), spec("주파수 응답 (-3dB)", "30–160Hz"), spec("감도", "101dB"), spec("음압레벨", "135dB(AES) / 141dB(peak)"), spec("임피던스", "2×8Ω"), spec("입력 파워", "2400W(AES) / 9600W(peak)"), spec("크로스오버", "약 120Hz"), spec("입력 커넥터", "2×Speakon NL4MP"), spec("치수 (H×W×D)", "550×1192×721mm"), spec("중량", "115kg")] },
  { id: "cd120", model: "CD120", brand: "CPL", subcategory: "라인어레이", series: "CD120", summary: "Line Array Full Frequency Speaker (Single 12-inch)", specTag: "Passive", comingSoon: true,
    specs: [spec("유닛 구성", "LF 1×12\" / HF 2×3\""), spec("주파수 응답 (-3dB)", "50–20000Hz"), spec("커버리지 각도 (-6dB)", "90°(H) × 8°(V)"), spec("감도", "LF 100dB / HF 110dB"), spec("음압레벨", "LF 130/136dB · HF 135/141dB"), spec("임피던스", "LF 8Ω / HF 16Ω"), spec("입력 파워", "LF 900/1800W · HF 300/900W"), spec("앰프 요구사항", "1500–3000W 8Ω (병렬 2조 시 2800W 2Ω)"), spec("크로스오버", "약 1700Hz"), spec("입력 커넥터", "2×Speakon NL4MP"), spec("치수 (H×W×D)", "343×723×550mm"), spec("중량", "50kg")] },
  { id: "cd120b", model: "CD120B", brand: "CPL", subcategory: "라인어레이", series: "CD120", summary: "Super low speaker (single 18-inch)", specTag: "Passive", comingSoon: true,
    specs: [spec("유닛 구성", "1×18\""), spec("주파수 응답 (-3dB)", "30–160Hz"), spec("감도", "99dB"), spec("음압레벨", "130dB(AES) / 136dB(peak)"), spec("임피던스", "8Ω"), spec("입력 파워", "1200W(AES) / 3600W(peak)"), spec("크로스오버", "120Hz"), spec("입력 커넥터", "2×Speakon NL4MP"), spec("치수 (H×W×D)", "580×723×743mm"), spec("중량", "62kg")] },
  { id: "cd10", model: "CD10", brand: "CPL", subcategory: "라인어레이", series: "CD10", summary: "Line Array Full-Range Speaker (Dual 10-inch)", specTag: "Passive", comingSoon: true,
    specs: [spec("유닛 구성", "LF 2×10\" / HF 1×3\""), spec("주파수 응답 (-3dB)", "60–20000Hz"), spec("커버리지 각도 (-6dB)", "H110° × V9°"), spec("감도", "LF 102dB / HF 110dB"), spec("음압레벨", "LF·HF 130/136dB"), spec("임피던스", "LF 16Ω / HF 8Ω"), spec("입력 파워", "LF 600/2400W · HF 100/400W"), spec("크로스오버", "약 1800Hz"), spec("입력 커넥터", "2×Speakon NL4MP"), spec("치수 (H×W×D)", "320×678×447mm"), spec("중량", "35kg")] },
  { id: "cd10b", model: "CD10B", brand: "CPL", subcategory: "라인어레이", series: "CD10", summary: "Super low speaker (single 18-inch)", specTag: "Passive", comingSoon: true,
    specs: [spec("유닛 구성", "1×18\""), spec("주파수 응답 (-3dB)", "28–200Hz"), spec("감도", "98dB"), spec("음압레벨", "126dB(AES) / 132dB(peak)"), spec("임피던스", "8Ω"), spec("입력 파워", "600W(AES) / 2400W(peak)"), spec("크로스오버", "약 120Hz"), spec("입력 커넥터", "2×Speakon NL4MP"), spec("치수 (H×W×D)", "580×743×620mm"), spec("중량", "50kg")] },

  // ── CPL : 모니터스피커 ────────────────────────────────────────
  { id: "cdm1a", model: "CDM1a", brand: "CPL", subcategory: "모니터스피커", series: "CDM-a", summary: "Active Stage Monitor", specTag: "Active", comingSoon: true,
    specs: [spec("유닛 구성", "LF 1×12\" / HF 1×2\""), spec("주파수 응답 (-3dB)", "48–20000Hz"), spec("커버리지 각도", "60°×90° (설치각 15°/45°/60° 선택)"), spec("감도", "98dB"), spec("음압레벨", "125dB(AES) / 131dB(peak)"), spec("임피던스", "8Ω"), spec("입력 파워", "500W(AES) / 2000W(peak)"), spec("크로스오버", "약 1500Hz"), spec("치수 (H×W×D)", "627×452×376mm"), spec("중량", "25kg")] },
  { id: "cdm2a", model: "CDM2a", brand: "CPL", subcategory: "모니터스피커", series: "CDM-a", summary: "Active Stage Monitor", specTag: "Active", comingSoon: true,
    specs: [spec("유닛 구성", "LF 1×12\" / HF 1×2\""), spec("주파수 응답 (-3dB)", "48–20000Hz"), spec("커버리지 각도", "60°×90° (설치각 15°/45°/60° 선택)"), spec("감도", "LF 97dB / HF 106dB"), spec("음압레벨", "133dB(AES) / 136dB(peak)"), spec("임피던스", "8Ω"), spec("입력 파워", "700W(AES) / 2800W(peak)"), spec("크로스오버", "약 1500Hz"), spec("치수 (H×W×D)", "627×452×376mm"), spec("중량", "25kg")] },
  { id: "cdm3a", model: "CDM3a", brand: "CPL", subcategory: "모니터스피커", series: "CDM-a", summary: "Active Stage Monitor", specTag: "Active", comingSoon: true,
    specs: [spec("유닛 구성", "LF 1×15\" / HF 1×3\""), spec("주파수 응답 (-3dB)", "45–19000Hz"), spec("커버리지 각도", "30°×90° (설치각 15°/45°/60° 선택)"), spec("감도", "LF 97dB / HF 112dB"), spec("음압레벨", "136dB(AES) / 139dB(peak)"), spec("임피던스", "8Ω"), spec("입력 파워", "600W(AES) / 1800W(peak)"), spec("앰프 요구사항", "900–3500W 8Ω"), spec("크로스오버", "약 1500Hz"), spec("치수 (H×W×D)", "685×496×408mm"), spec("중량", "28kg")] },
  { id: "cdm1", model: "CDM1", brand: "CPL", subcategory: "모니터스피커", series: "CDM", summary: "Passive Stage Monitor Speaker", specTag: "Passive", comingSoon: true },
  { id: "cdm2", model: "CDM2", brand: "CPL", subcategory: "모니터스피커", series: "CDM", summary: "Passive Stage Monitor speaker", specTag: "Passive", comingSoon: true },
  { id: "cdm3", model: "CDM3", brand: "CPL", subcategory: "모니터스피커", series: "CDM", summary: "Passive Stage Monitor speaker", specTag: "Passive", comingSoon: true },

  // ── CPL : 포인트소스 (전 모델 Passive) ───────────────────────
  { id: "lk6", model: "LK6", brand: "CPL", subcategory: "포인트소스", series: "LK", summary: "Full-range speaker (single 6-inch)", specTag: "Passive", comingSoon: true,
    specs: [spec("유닛 구성", "LF 1×6\" / HF 1×1.5\""), spec("주파수 응답 (-3dB)", "85–20000Hz"), spec("커버리지 각도", "90°(H) × 60°(V)"), spec("감도", "96dB"), spec("음압레벨", "116dB(AES) / 122dB(peak)"), spec("임피던스", "8Ω"), spec("입력 파워", "80W(AES) / 320W(peak)"), spec("크로스오버", "2500Hz"), spec("치수 (H×W×D)", "295×198×195mm"), spec("중량", "6kg")] },
  { id: "lk8", model: "LK8", brand: "CPL", subcategory: "포인트소스", series: "LK", summary: "Full-range speaker (single 8-inch)", specTag: "Passive", comingSoon: true,
    specs: [spec("유닛 구성", "LF 1×8\" / HF 1×1\""), spec("주파수 응답 (-3dB)", "70–20000Hz"), spec("커버리지 각도", "90°(H) × 60°(V)"), spec("감도", "95dB"), spec("음압레벨", "117dB(AES) / 123dB(peak)"), spec("임피던스", "8Ω"), spec("입력 파워", "200W(AES) / 800W(peak)"), spec("크로스오버", "2500Hz"), spec("치수 (H×W×D)", "450×255×261.7mm"), spec("중량", "10kg")] },
  { id: "lk10", model: "LK10", brand: "CPL", subcategory: "포인트소스", series: "LK", summary: "Full-range speaker (single 10-inch)", specTag: "Passive", comingSoon: true,
    specs: [spec("유닛 구성", "LF 1×10\" / HF 1×2\""), spec("주파수 응답 (-3dB)", "65–20000Hz"), spec("커버리지 각도", "90°(H) × 60°(V)"), spec("감도", "97dB"), spec("음압레벨", "123dB(AES) / 129dB(peak)"), spec("임피던스", "8Ω"), spec("입력 파워", "300W(AES) / 1200W(peak)"), spec("크로스오버", "2000Hz"), spec("치수 (H×W×D)", "490×310×337mm"), spec("중량", "18kg")] },
  { id: "lk12", model: "LK12", brand: "CPL", subcategory: "포인트소스", series: "LK", summary: "Full-range speaker (single 12-inch)", specTag: "Passive", comingSoon: true,
    specs: [spec("유닛 구성", "LF 1×12\" / HF 1×2\""), spec("주파수 응답 (-3dB)", "55–20000Hz"), spec("커버리지 각도", "90°(H) × 60°(V)"), spec("감도", "97dB"), spec("음압레벨", "124dB(AES) / 130dB(peak)"), spec("임피던스", "8Ω"), spec("입력 파워", "400W(AES) / 1600W(peak)"), spec("크로스오버", "2000Hz"), spec("치수 (H×W×D)", "595×360×407mm"), spec("중량", "23kg")] },
  { id: "lk15", model: "LK15", brand: "CPL", subcategory: "포인트소스", series: "LK", summary: "Full-range speaker (single 15-inch)", specTag: "Passive", comingSoon: true,
    specs: [spec("유닛 구성", "LF 1×15\" / HF 1×2\""), spec("주파수 응답 (-3dB)", "50–20000Hz"), spec("커버리지 각도", "90°(H) × 60°(V)"), spec("감도", "99dB"), spec("음압레벨", "126dB(AES) / 132dB(peak)"), spec("임피던스", "8Ω"), spec("입력 파워", "500W(AES) / 2000W(peak)"), spec("크로스오버", "1500Hz"), spec("치수 (H×W×D)", "671×410×420mm"), spec("중량", "28kg")] },
  { id: "lk212", model: "LK212", brand: "CPL", subcategory: "포인트소스", series: "LK", summary: "Full-range speaker (dual 12-inch)", specTag: "Passive", comingSoon: true,
    specs: [spec("유닛 구성", "LF 2×12\" / HF 1×3\""), spec("주파수 응답 (-3dB)", "43–20000Hz"), spec("커버리지 각도", "80°(H) × 40°(V)"), spec("감도", "99dB"), spec("음압레벨", "129dB(AES) / 135dB(peak)"), spec("임피던스", "4Ω"), spec("입력 파워", "1000W(AES) / 4000W(peak)"), spec("크로스오버", "1500Hz"), spec("치수 (H×W×D)", "1068×406×500mm"), spec("중량", "50kg")] },
  { id: "lk215", model: "LK215", brand: "CPL", subcategory: "포인트소스", series: "LK", summary: "Full-range speaker (dual 15-inch)", specTag: "Passive", comingSoon: true,
    specs: [spec("유닛 구성", "LF 2×15\" / HF 1×3\""), spec("주파수 응답 (-3dB)", "38–20000Hz"), spec("커버리지 각도", "80°(H) × 40°(V)"), spec("감도", "100dB"), spec("음압레벨", "131dB(AES) / 137dB(peak)"), spec("임피던스", "4Ω"), spec("입력 파워", "1200W(AES) / 4800W(peak)"), spec("크로스오버", "1500Hz"), spec("치수 (H×W×D)", "1200×446×580mm"), spec("중량", "63.5kg")] },
  { id: "lk15b", model: "LK15B", brand: "CPL", subcategory: "포인트소스", series: "LK", summary: "Ultra-low subwoofer (single 15-inch)", specTag: "Passive", comingSoon: true,
    specs: [spec("유닛 구성", "1×15\""), spec("주파수 응답 (-3dB)", "40–1000Hz"), spec("감도", "97dB"), spec("음압레벨", "124dB(AES) / 130dB(peak)"), spec("임피던스", "8Ω"), spec("입력 파워", "500W(AES) / 2000W(peak)"), spec("치수 (H×W×D)", "500×480×555mm"), spec("중량", "38kg")] },
  { id: "lk18b", model: "LK18B", brand: "CPL", subcategory: "포인트소스", series: "LK", summary: "Ultra-low subwoofer (single 18-inch)", specTag: "Passive", comingSoon: true,
    specs: [spec("유닛 구성", "1×18\""), spec("주파수 응답 (-3dB)", "32–350Hz"), spec("감도", "98dB"), spec("음압레벨", "126dB(AES) / 132dB(peak)"), spec("임피던스", "8Ω"), spec("입력 파워", "600W(AES) / 2400W(peak)"), spec("치수 (H×W×D)", "580×540×613mm"), spec("중량", "55kg")] },
  { id: "lk15m", model: "LK15M", brand: "CPL", subcategory: "포인트소스", series: "LK", summary: "Stage monitor speaker (single 15-inch)", specTag: "Passive", comingSoon: true,
    specs: [spec("유닛 구성", "동축 LF 1×15\" / HF 1×3\""), spec("주파수 응답 (-3dB)", "55–19000Hz"), spec("커버리지 각도", "80°×80° (설치각 15°/45°/60° 선택)"), spec("감도", "99dB"), spec("음압레벨", "126dB(AES) / 132dB(peak)"), spec("임피던스", "8Ω"), spec("입력 파워", "600W(AES) / 1800W(peak)"), spec("크로스오버", "약 1500Hz"), spec("치수 (H×W×D)", "685×497×408mm"), spec("중량", "30kg")] },

  // ── CPL : 옥외용 포인트소스 (전 모델 waterproof) ─────────────
  { id: "lp100", model: "LP100", brand: "CPL", subcategory: "옥외용 포인트소스", series: "LP", summary: "Professional rainproof loudspeaker (single 10-inch)", specTag: "waterproof", comingSoon: true,
    specs: [spec("유닛 구성", "LF 1×10\" / HF 1×2\""), spec("주파수 응답 (-3dB)", "65–20000Hz"), spec("커버리지 각도", "90°(H) × 60°(V)"), spec("감도", "97dB"), spec("음압레벨", "123dB(AES) / 129dB(peak)"), spec("임피던스", "8Ω"), spec("입력 파워", "300W(AES) / 1200W(peak)"), spec("크로스오버", "2000Hz"), spec("표면 처리", "블랙 폴리우레아 코팅"), spec("입력 커넥터", "4핀 방수 항공 커넥터"), spec("치수 (H×W×D)", "492×324×335mm"), spec("중량", "17kg")] },
  { id: "lp120", model: "LP120", brand: "CPL", subcategory: "옥외용 포인트소스", series: "LP", summary: "Professional rainproof loudspeaker (single 12-inch)", specTag: "waterproof", comingSoon: true,
    specs: [spec("유닛 구성", "LF 1×12\" / HF 1×3\""), spec("주파수 응답 (-3dB)", "55–20000Hz"), spec("커버리지 각도", "90°(H) × 60°(V)"), spec("감도", "97dB"), spec("음압레벨", "124dB(AES) / 130dB(peak)"), spec("임피던스", "8Ω"), spec("입력 파워", "450W(AES) / 1800W(peak)"), spec("크로스오버", "2000Hz"), spec("표면 처리", "블랙 폴리우레아 코팅"), spec("입력 커넥터", "4핀 방수 항공 커넥터"), spec("치수 (H×W×D)", "605×380×415mm"), spec("중량", "25kg")] },
  { id: "lp150", model: "LP150", brand: "CPL", subcategory: "옥외용 포인트소스", series: "LP", summary: "Professional rainproof conventional loudspeaker (single 15-inch)", specTag: "waterproof", comingSoon: true,
    specs: [spec("유닛 구성", "LF 1×15\" / HF 1×2\""), spec("주파수 응답 (-3dB)", "50–20000Hz"), spec("커버리지 각도", "90°(H) × 60°(V)"), spec("감도", "99dB"), spec("음압레벨", "126dB(AES) / 132dB(peak)"), spec("임피던스", "8Ω"), spec("입력 파워", "500W(AES) / 2000W(peak)"), spec("크로스오버", "1500Hz"), spec("입력 커넥터", "4핀 방수 항공 커넥터"), spec("치수 (H×W×D)", "687×463.8×455mm"), spec("중량", "35kg")] },
  { id: "lp180b", model: "LP180B", brand: "CPL", subcategory: "옥외용 포인트소스", series: "LP", summary: "Professional rainproof ultra-low loudspeaker (single 18-inch)", specTag: "waterproof", comingSoon: true,
    specs: [spec("유닛 구성", "1×18\""), spec("주파수 응답 (-3dB)", "32–350Hz"), spec("감도", "98dB"), spec("음압레벨", "126dB(AES) / 132dB(peak)"), spec("임피던스", "8Ω"), spec("입력 파워", "600W(AES) / 2400W(peak)"), spec("입력 커넥터", "4핀 방수 항공 커넥터"), spec("치수 (H×W×D)", "580×663×592mm")] },
  { id: "lp218b", model: "LP218B", brand: "CPL", subcategory: "옥외용 포인트소스", series: "LP", summary: "Professional rainproof ultra-low subwoofer (dual 18-inch)", specTag: "waterproof", comingSoon: true,
    specs: [spec("유닛 구성", "2×18\""), spec("주파수 응답 (-3dB)", "30–250Hz"), spec("감도", "99dB"), spec("음압레벨", "130dB(AES) / 136dB(peak)"), spec("임피던스", "4Ω"), spec("입력 파워", "1200W(AES) / 4800W(peak)"), spec("입력 커넥터", "2×Speakon NL4MP"), spec("치수 (H×W×D)", "540×1142×716mm"), spec("중량", "97kg")] },
  { id: "lp120m", model: "LP120M", brand: "CPL", subcategory: "옥외용 포인트소스", series: "LP", summary: "Professional rainproof return loudspeaker (single 12-inch)", specTag: "waterproof", comingSoon: true,
    specs: [spec("유닛 구성", "LF 1×12\" / HF 1×3\""), spec("주파수 응답 (-3dB)", "48–20000Hz"), spec("커버리지 각도", "90°×60° (설치각 15°/45°/60° 선택)"), spec("감도", "97dB"), spec("음압레벨", "123dB(AES) / 129dB(peak)"), spec("임피던스", "8Ω"), spec("입력 파워", "400W(AES) / 1600W(peak)"), spec("크로스오버", "약 1500Hz"), spec("입력 커넥터", "4핀 방수 항공 커넥터"), spec("치수 (H×W×D)", "630×452×382mm"), spec("중량", "25kg")] },

  // ── CPL : 룸모니터 (전 모델 Studio Monitor) ──────────────────
  { id: "sd5p", model: "SD5-P", brand: "CPL", subcategory: "룸모니터", series: "SD/HCD", summary: "5인치 액티브 스튜디오 모니터. 소규모 음악 스튜디오, 소형 콘트롤룸, 홈 엔터테인먼트에 적합합니다.", specTag: "Studio Monitor", comingSoon: true,
    specs: [spec("유닛 구성", "LF 1×5\" / HF 1×1.25\""), spec("주파수 응답 (-3dB)", "56–20000Hz"), spec("커버리지 각도", "90°(H) × 90°(V)"), spec("감도", "82dB"), spec("음압레벨", "100dB(AES) / 106dB(peak)"), spec("임피던스", "20kΩ밸런스 / 10kΩ밸런스"), spec("입력 파워", "70W(AES) / 280W(peak)"), spec("크로스오버", "2800Hz"), spec("입력 커넥터", "XLR, TRS"), spec("전원", "115–230V / 50–60Hz"), spec("치수 (H×W×D)", "250×176×200mm"), spec("중량", "5.5kg")] },
  { id: "sd6p", model: "SD6-P", brand: "CPL", subcategory: "룸모니터", series: "SD/HCD", summary: "6인치 액티브 스튜디오 모니터. 소규모 음악 스튜디오, 소형 콘트롤룸, 홈 엔터테인먼트에 적합합니다.", specTag: "Studio Monitor", comingSoon: true,
    specs: [spec("유닛 구성", "LF 1×6\" / HF 1×1.25\""), spec("주파수 응답 (-3dB)", "45–20000Hz"), spec("커버리지 각도", "90°(H) × 90°(V)"), spec("감도", "83dB"), spec("음압레벨", "103dB(AES) / 109dB(peak)"), spec("임피던스", "20kΩ밸런스 / 10kΩ밸런스"), spec("입력 파워", "100W(AES) / 400W(peak)"), spec("크로스오버", "2200Hz"), spec("입력 커넥터", "XLR, TRS"), spec("전원", "115–230V / 50–60Hz"), spec("치수 (H×W×D)", "318×213×249mm"), spec("중량", "7.5kg")] },
  { id: "hcd812a", model: "HCD812a", brand: "CPL", subcategory: "룸모니터", series: "SD/HCD", summary: "Active Monitor speaker", specTag: "Studio Monitor", comingSoon: true,
    specs: [spec("유닛 구성", "LF 1×8\" / HF 1×2\"(돔 트위터)"), spec("앰프 모듈", "내장 2×800W(8Ω) DSP 앰프"), spec("주파수 응답 (-3dB)", "26–28000Hz"), spec("커버리지 각도", "90°(H) × 40°(V)"), spec("감도", "88dB"), spec("음압레벨", "103dB(peak)"), spec("임피던스", "8Ω"), spec("크로스오버", "2000Hz"), spec("인터페이스", "XLR IN/OUT, RS485, POWER IN/OUT"), spec("치수 (H×W×D)", "385×214×238mm"), spec("중량", "9kg")] },

  // ── CPL : 다목적 스피커 ───────────────────────────────────────
  { id: "ld51", model: "LD5.1", brand: "CPL", subcategory: "다목적 스피커", series: "LD", summary: "다목적 스피커, 5.25인치. 사양서에는 'Sound Column MIMI5.1'로 표기되어 있으나 사양(5인치·100W)이 일치해 같은 제품으로 보고 연결했습니다 — 확인 필요.", specTag: '5.25" 100W', comingSoon: true,
    specs: [spec("유닛 구성", "LF 1×5\" / HF 1×3\""), spec("주파수 응답 (-3dB)", "85–20000Hz"), spec("커버리지 각도", "90°(H) × 90°(V)"), spec("감도", "95dB"), spec("음압레벨", "115dB(AES) / 121dB(peak)"), spec("임피던스", "4Ω"), spec("입력 파워", "100W(AES) / 400W(peak)"), spec("앰프 요구사항", "150–400W 8Ω"), spec("크로스오버", "3000Hz"), spec("치수 (H×W×D)", "267×160×160mm"), spec("중량", "4kg")] },
  { id: "ld50a", model: "LD50a", brand: "CPL", subcategory: "다목적 스피커", series: "LD", summary: "다목적 스피커, 5.25인치", specTag: '5.25" 200W', comingSoon: true },

  // ── LMT : 커넥터 (전 품목 20개 묶음) ──────────────────────────
  { id: "xlr-f", model: "XLR F", brand: "LMT", subcategory: "커넥터", summary: "XLR 암 커넥터", specTag: "20개 묶음", comingSoon: true },
  { id: "xlr-m", model: "XLR M", brand: "LMT", subcategory: "커넥터", summary: "XLR 수 커넥터", specTag: "20개 묶음", comingSoon: true },
  { id: "xlr-panel-f", model: "XLR 판넬암", brand: "LMT", subcategory: "커넥터", summary: "패널 마운트형 XLR 암 커넥터", specTag: "20개 묶음", comingSoon: true },
  { id: "xlr-panel-m", model: "XLR 판넬수", brand: "LMT", subcategory: "커넥터", summary: "패널 마운트형 XLR 수 커넥터", specTag: "20개 묶음", comingSoon: true },
  { id: "speakon", model: "스피콘", brand: "LMT", subcategory: "커넥터", summary: "앰프-스피커 잠금식 커넥터", specTag: "20개 묶음", comingSoon: true },
  { id: "speakon-panel", model: "스피콘 판넬", brand: "LMT", subcategory: "커넥터", summary: "패널 마운트형 스피콘 커넥터", specTag: "20개 묶음", comingSoon: true },
  { id: "trs-mono", model: "TRS(55) 모노", brand: "LMT", subcategory: "커넥터", summary: "TRS 모노 커넥터", specTag: "20개 묶음", comingSoon: true },
  { id: "trs-stereo", model: "TRS(56) 스테레오", brand: "LMT", subcategory: "커넥터", summary: "TRS 스테레오 커넥터", specTag: "20개 묶음", comingSoon: true },
  { id: "trs-35", model: "TRS to 3.5 젠더", brand: "LMT", subcategory: "커넥터", summary: "TRS to 3.5mm 변환 젠더", specTag: "20개 묶음", comingSoon: true },

  // ── 기타 ──────────────────────────────────────────────────────
  { id: "h-gps12", model: "H-GPS12", brand: "기타", subcategory: "오디오믹서", series: "H-GPS", summary: "오디오믹서, 12채널", specTag: "12채널", comingSoon: true,
    specs: [spec("채널 구성", "4/8/12 모노 + 4 스테레오"), spec("팬텀 파워", "채널별 개별 공급, 채널·마스터 미터"), spec("모니터링", "2트랙 모니터링, LR 재생, 헤드폰·로컬 모니터 출력"), spec("이펙트", "128모드 파라미터 조절 DSP 이펙트 프로세서"), spec("녹음/재생", "MP3 플레이어·레코더 내장"), spec("출력", "전자밸런스 XLR, +26dBu 드라이브"), spec("커넥터", "메탈 잭, 금도금 XLR, 실드 포트·스위치")] },
  { id: "h-gps06", model: "H-GPS06", brand: "기타", subcategory: "오디오믹서", series: "H-GPS", summary: "오디오믹서, 6채널", specTag: "6채널", comingSoon: true,
    specs: [spec("채널 구성", "2/4 모노 + 2 스테레오 입력"), spec("게인", "-20dB 감쇠 + 로우컷 기능"), spec("디스플레이", "디지털 디스플레이, MP3 녹음, 블루투스"), spec("출력", "1FX/1MP3/1세트 메인 출력, 채널별 뮤트"), spec("연결", "USB로 스마트폰 연결(OTG), 무손실 스테레오 스트리밍"), spec("입력 스위치", "보컬 제거용 악기 입력 스위치"), spec("전원/연결", "Type-C 전원·PC 연결, 보조배터리 사용 가능"), spec("페이더", "45mm 고정밀 페이더, 99종 DSP 이펙트")] },
  { id: "lx2", model: "LX2", brand: "기타", subcategory: "플레이어", summary: "24bit/32bit DSP 오디오 이펙트 플레이어", specTag: "디지털임팩터", comingSoon: true,
    specs: [spec("EQ", "7밴드 파라메트릭 이퀄라이저"), spec("피드백 억제", "마이크 6단계 피드백 억제"), spec("프리셋", "16세트 사용자 파라미터 저장/불러오기"), spec("연결", "드라이버 불필요 USB, PC 소프트웨어로 실시간 제어"), spec("입력", "USB / COAX / OPT / AUX 지원")] },
  { id: "mic-cd12", model: "CD-12", brand: "기타", subcategory: "무선마이크", series: "CD-마이크", summary: "무선마이크, 2채널 충전식", specTag: "2채널충전식", comingSoon: true },
  { id: "mic-cd08", model: "CD-08", brand: "기타", subcategory: "무선마이크", series: "CD-마이크", summary: "무선마이크, 2채널 충전식", specTag: "2채널충전식", comingSoon: true },
  { id: "mic-cd04", model: "CD-04", brand: "기타", subcategory: "무선마이크", series: "CD-마이크", summary: "무선마이크, 2채널 충전식", specTag: "2채널충전식", comingSoon: true },
  { id: "play007", model: "PLAY 007", brand: "기타", subcategory: "DAC", summary: "Peripheral device — DAC 플레이어", specTag: "DAC PLAYER", comingSoon: true,
    specs: [spec("컴퓨터 연결", "USB 2.0 B타입"), spec("지원 OS", "Windows XP 이상 (드라이버 불필요)"), spec("샘플레이트", "32/44.1/48kHz"), spec("출력 단자", "1×1/4\" 스테레오, 2×XLR"), spec("주파수 응답", "20Hz–20kHz (0/-0.5dB)"), spec("다이나믹 레인지", "100dB, A-weighted"), spec("전원", "USB 버스 파워, 최대 2.5W"), spec("치수", "81×52×121mm"), spec("중량", "1.1kg")] },
  { id: "dsp480", model: "DSP-480", brand: "기타", subcategory: "프로세서", series: "프로세서", summary: "Digital Audio Processor", specTag: "프로세서", comingSoon: true },
  { id: "adc1616n", model: "ADC1616-N", brand: "기타", subcategory: "프로세서", series: "프로세서", summary: "Matrix processor", specTag: "with dante", comingSoon: true },
  { id: "adc0808n", model: "ADC0808-N", brand: "기타", subcategory: "프로세서", series: "프로세서", summary: "Matrix Processor", specTag: "with dante", comingSoon: true },
  { id: "avmx1000", model: "BOOM BOX AVMX-1000", brand: "기타", subcategory: "셋톱박스", series: "붐박스세트", summary: "붐박스 본체", specTag: "붐박스", comingSoon: true },
  { id: "ms1000", model: "MS-1000", brand: "기타", subcategory: "셋톱박스", series: "붐박스세트", summary: "붐박스용 무선 마이크", specTag: "무선 마이크", comingSoon: true },
];

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

/** 같은 시리즈를 우선으로, 그다음 같은 카테고리 순으로 관련 모델을 반환합니다 */
export function getRelatedProducts(product: Product, count: number = 4): Product[] {
  return products
    .filter((p) => p.id !== product.id)
    .sort((a, b) => {
      const rank = (p: Product) => {
        if (product.series && p.series === product.series) return 0;
        if (p.subcategory === product.subcategory) return 1;
        return 2;
      };
      return rank(a) - rank(b);
    })
    .filter((p) => (product.series ? p.series === product.series : p.subcategory === product.subcategory))
    .slice(0, count);
}

/** 스피커 계열 제품 상세페이지에 공통으로 노출할 커넥터 액세서리 */
export function getConnectorAccessories(product: Product): Product[] {
  if (!SPEAKER_CATEGORIES.includes(product.subcategory)) return [];
  return products.filter((p) => p.subcategory === "커넥터");
}

export function isSpeakerCategory(category: Category): boolean {
  return SPEAKER_CATEGORIES.includes(category);
}
