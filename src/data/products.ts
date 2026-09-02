export type Subcategory =
  | "Sound Reinforcement"
  | "Subwoofers"
  | "Coaxial"
  | "High-Frequency Drivers";

export type Product = {
  id: string;
  model: string;
  subcategory: Subcategory;
  summary: string;
  image: string;
  gallery: string[];
  badges: string[];
  generalSpecs: { label: string; value: string }[];
  thieleSmall: { label: string; value: string }[];
  mounting: { label: string; value: string }[];
  frequencyRange: string;
  freqCurvePoints: number[];
};

export const subcategories: { key: Subcategory; label: string }[] = [
  { key: "Sound Reinforcement", label: "Sound Reinforcement" },
  { key: "Subwoofers", label: "Subwoofers" },
  { key: "Coaxial", label: "Coaxial" },
  { key: "High-Frequency Drivers", label: "High-Frequency Drivers" },
];

const img = (id: string) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&h=650&w=940`;

export const products: Product[] = [
  {
    id: "cw-12a30",
    model: "CW-12A30",
    subcategory: "Sound Reinforcement",
    summary: "12-inch ferrite woofer engineered for high-output sound reinforcement in compact enclosures.",
    image: img("31592148"),
    gallery: [img("31592148"), img("23466420"), img("13046056"), img("6958460")],
    badges: ["12-inch Ferrite", "1000W Program", "98 dB SPL"],
    generalSpecs: [
      { label: "Nominal Diameter", value: "320 mm (12 in)" },
      { label: "Rated Impedance", value: "8 Ω" },
      { label: "AES Power", value: "500 W" },
      { label: "Program Power", value: "1000 W" },
      { label: "Sensitivity (1W/1m)", value: "98 dB" },
      { label: "Voice Coil Diameter", value: "75 mm (3 in)" },
      { label: "Magnet Material", value: "Ferrite" },
    ],
    thieleSmall: [
      { label: "Fs (Resonance)", value: "45 Hz" },
      { label: "Re (DC Resistance)", value: "5.2 Ω" },
      { label: "Qms (Mechanical Q)", value: "4.8" },
      { label: "Qes (Electrical Q)", value: "0.38" },
      { label: "Qts (Total Q)", value: "0.35" },
      { label: "Vas (Equivalent Volume)", value: "65 L" },
      { label: "Sd (Effective Area)", value: "530 cm²" },
      { label: "Xmax (Max Linear Excursion)", value: "7.5 mm" },
    ],
    mounting: [
      { label: "Overall Diameter", value: "315 mm" },
      { label: "Bolt Circle Diameter", value: "295 mm" },
      { label: "Mounting Depth", value: "145 mm" },
      { label: "Net Weight", value: "5.8 kg" },
    ],
    frequencyRange: "45 Hz – 3.5 kHz",
    freqCurvePoints: [55, 58, 62, 68, 75, 82, 88, 93, 96, 98, 97, 95, 92, 88, 84, 78, 72, 65, 58, 50],
  },
  {
    id: "cw-15a40",
    model: "CW-15A40",
    subcategory: "Sound Reinforcement",
    summary: "15-inch high-efficiency woofer with extended low-frequency response for live sound applications.",
    image: img("2659939"),
    gallery: [img("2659939"), img("23466420"), img("13046056"), img("15191318")],
    badges: ["15-inch Ferrite", "1200W Program", "100 dB SPL"],
    generalSpecs: [
      { label: "Nominal Diameter", value: "380 mm (15 in)" },
      { label: "Rated Impedance", value: "8 Ω" },
      { label: "AES Power", value: "600 W" },
      { label: "Program Power", value: "1200 W" },
      { label: "Sensitivity (1W/1m)", value: "100 dB" },
      { label: "Voice Coil Diameter", value: "100 mm (4 in)" },
      { label: "Magnet Material", value: "Ferrite" },
    ],
    thieleSmall: [
      { label: "Fs (Resonance)", value: "38 Hz" },
      { label: "Re (DC Resistance)", value: "5.0 Ω" },
      { label: "Qms (Mechanical Q)", value: "5.2" },
      { label: "Qes (Electrical Q)", value: "0.32" },
      { label: "Qts (Total Q)", value: "0.30" },
      { label: "Vas (Equivalent Volume)", value: "120 L" },
      { label: "Sd (Effective Area)", value: "855 cm²" },
      { label: "Xmax (Max Linear Excursion)", value: "8.0 mm" },
    ],
    mounting: [
      { label: "Overall Diameter", value: "395 mm" },
      { label: "Bolt Circle Diameter", value: "372 mm" },
      { label: "Mounting Depth", value: "175 mm" },
      { label: "Net Weight", value: "8.2 kg" },
    ],
    frequencyRange: "38 Hz – 2.5 kHz",
    freqCurvePoints: [48, 52, 58, 65, 72, 80, 87, 93, 97, 100, 99, 96, 92, 87, 81, 74, 66, 58, 50, 42],
  },
  {
    id: "cw-18a50",
    model: "CW-18A50",
    subcategory: "Subwoofers",
    summary: "18-inch subwoofer with massive excursion capability for deep, impactful bass reproduction.",
    image: img("23466420"),
    gallery: [img("23466420"), img("13046056"), img("6958460"), img("34956927")],
    badges: ["18-inch Ferrite", "1500W Program", "101 dB SPL"],
    generalSpecs: [
      { label: "Nominal Diameter", value: "460 mm (18 in)" },
      { label: "Rated Impedance", value: "8 Ω" },
      { label: "AES Power", value: "750 W" },
      { label: "Program Power", value: "1500 W" },
      { label: "Sensitivity (1W/1m)", value: "101 dB" },
      { label: "Voice Coil Diameter", value: "125 mm (5 in)" },
      { label: "Magnet Material", value: "Ferrite" },
    ],
    thieleSmall: [
      { label: "Fs (Resonance)", value: "30 Hz" },
      { label: "Re (DC Resistance)", value: "4.5 Ω" },
      { label: "Qms (Mechanical Q)", value: "6.0" },
      { label: "Qes (Electrical Q)", value: "0.28" },
      { label: "Qts (Total Q)", value: "0.27" },
      { label: "Vas (Equivalent Volume)", value: "220 L" },
      { label: "Sd (Effective Area)", value: "1210 cm²" },
      { label: "Xmax (Max Linear Excursion)", value: "11.0 mm" },
    ],
    mounting: [
      { label: "Overall Diameter", value: "468 mm" },
      { label: "Bolt Circle Diameter", value: "442 mm" },
      { label: "Mounting Depth", value: "210 mm" },
      { label: "Net Weight", value: "12.5 kg" },
    ],
    frequencyRange: "30 Hz – 1.2 kHz",
    freqCurvePoints: [35, 40, 46, 54, 63, 72, 82, 90, 96, 100, 101, 99, 95, 89, 82, 73, 63, 52, 42, 35],
  },
  {
    id: "cw-8a20",
    model: "CW-8A20",
    subcategory: "Sound Reinforcement",
    summary: "8-inch compact woofer optimized for mid-bass and vocal reproduction in near-field systems.",
    image: img("13046056"),
    gallery: [img("13046056"), img("6958460"), img("23466420"), img("31592148")],
    badges: ["8-inch Ferrite", "400W Program", "93 dB SPL"],
    generalSpecs: [
      { label: "Nominal Diameter", value: "210 mm (8 in)" },
      { label: "Rated Impedance", value: "8 Ω" },
      { label: "AES Power", value: "200 W" },
      { label: "Program Power", value: "400 W" },
      { label: "Sensitivity (1W/1m)", value: "93 dB" },
      { label: "Voice Coil Diameter", value: "50 mm (2 in)" },
      { label: "Magnet Material", value: "Ferrite" },
    ],
    thieleSmall: [
      { label: "Fs (Resonance)", value: "58 Hz" },
      { label: "Re (DC Resistance)", value: "5.8 Ω" },
      { label: "Qms (Mechanical Q)", value: "3.5" },
      { label: "Qes (Electrical Q)", value: "0.45" },
      { label: "Qts (Total Q)", value: "0.40" },
      { label: "Vas (Equivalent Volume)", value: "22 L" },
      { label: "Sd (Effective Area)", value: "220 cm²" },
      { label: "Xmax (Max Linear Excursion)", value: "4.5 mm" },
    ],
    mounting: [
      { label: "Overall Diameter", value: "212 mm" },
      { label: "Bolt Circle Diameter", value: "195 mm" },
      { label: "Mounting Depth", value: "98 mm" },
      { label: "Net Weight", value: "2.8 kg" },
    ],
    frequencyRange: "58 Hz – 5 kHz",
    freqCurvePoints: [62, 66, 72, 78, 84, 88, 91, 93, 92, 90, 87, 83, 78, 72, 65, 58, 50, 42, 35, 30],
  },
  {
    id: "cw-10a25",
    model: "CW-10A25",
    subcategory: "Sound Reinforcement",
    summary: "10-inch versatile woofer balancing low-frequency extension with vocal clarity for multi-purpose systems.",
    image: img("6958460"),
    gallery: [img("6958460"), img("13046056"), img("23466420"), img("15191318")],
    badges: ["10-inch Ferrite", "600W Program", "95 dB SPL"],
    generalSpecs: [
      { label: "Nominal Diameter", value: "260 mm (10 in)" },
      { label: "Rated Impedance", value: "8 Ω" },
      { label: "AES Power", value: "300 W" },
      { label: "Program Power", value: "600 W" },
      { label: "Sensitivity (1W/1m)", value: "95 dB" },
      { label: "Voice Coil Diameter", value: "65 mm (2.5 in)" },
      { label: "Magnet Material", value: "Ferrite" },
    ],
    thieleSmall: [
      { label: "Fs (Resonance)", value: "50 Hz" },
      { label: "Re (DC Resistance)", value: "5.5 Ω" },
      { label: "Qms (Mechanical Q)", value: "4.0" },
      { label: "Qes (Electrical Q)", value: "0.40" },
      { label: "Qts (Total Q)", value: "0.36" },
      { label: "Vas (Equivalent Volume)", value: "42 L" },
      { label: "Sd (Effective Area)", value: "350 cm²" },
      { label: "Xmax (Max Linear Excursion)", value: "6.0 mm" },
    ],
    mounting: [
      { label: "Overall Diameter", value: "262 mm" },
      { label: "Bolt Circle Diameter", value: "242 mm" },
      { label: "Mounting Depth", value: "120 mm" },
      { label: "Net Weight", value: "4.2 kg" },
    ],
    frequencyRange: "50 Hz – 4 kHz",
    freqCurvePoints: [55, 60, 66, 72, 78, 84, 89, 93, 95, 94, 92, 88, 84, 78, 72, 65, 57, 48, 40, 33],
  },
  {
    id: "cd-12cx",
    model: "CD-12CX",
    subcategory: "Coaxial",
    summary: "12-inch coaxial driver integrating a woofer and compression driver for point-source accuracy.",
    image: img("15191318"),
    gallery: [img("15191318"), img("6958460"), img("13046056"), img("23466420")],
    badges: ["12-inch Coaxial", "800W Program", "99 dB SPL"],
    generalSpecs: [
      { label: "Nominal Diameter", value: "320 mm (12 in)" },
      { label: "Rated Impedance", value: "8 Ω" },
      { label: "AES Power", value: "400 W" },
      { label: "Program Power", value: "800 W" },
      { label: "Sensitivity (1W/1m)", value: "99 dB" },
      { label: "Voice Coil Diameter", value: "75 mm (3 in)" },
      { label: "Magnet Material", value: "Neodymium" },
    ],
    thieleSmall: [
      { label: "Fs (Resonance)", value: "48 Hz" },
      { label: "Re (DC Resistance)", value: "5.2 Ω" },
      { label: "Qms (Mechanical Q)", value: "4.5" },
      { label: "Qes (Electrical Q)", value: "0.36" },
      { label: "Qts (Total Q)", value: "0.33" },
      { label: "Vas (Equivalent Volume)", value: "58 L" },
      { label: "Sd (Effective Area)", value: "530 cm²" },
      { label: "Xmax (Max Linear Excursion)", value: "7.0 mm" },
    ],
    mounting: [
      { label: "Overall Diameter", value: "315 mm" },
      { label: "Bolt Circle Diameter", value: "295 mm" },
      { label: "Mounting Depth", value: "160 mm" },
      { label: "Net Weight", value: "6.5 kg" },
    ],
    frequencyRange: "48 Hz – 20 kHz",
    freqCurvePoints: [52, 56, 62, 68, 75, 82, 88, 93, 97, 99, 98, 96, 93, 90, 88, 86, 85, 84, 83, 82],
  },
  {
    id: "hf-44",
    model: "HF-44",
    subcategory: "High-Frequency Drivers",
    summary: "1.4-inch exit compression driver with titanium diaphragm for crystal-clear high-frequency reproduction.",
    image: img("34956927"),
    gallery: [img("34956927"), img("38028968"), img("13046056"), img("6958460")],
    badges: ["1.4-inch Exit", "150W Program", "112 dB SPL"],
    generalSpecs: [
      { label: "Nominal Diameter", value: "36 mm (1.4 in) exit" },
      { label: "Rated Impedance", value: "8 Ω" },
      { label: "AES Power", value: "75 W" },
      { label: "Program Power", value: "150 W" },
      { label: "Sensitivity (1W/1m)", value: "112 dB" },
      { label: "Voice Coil Diameter", value: "75 mm (3 in)" },
      { label: "Magnet Material", value: "Neodymium" },
    ],
    thieleSmall: [
      { label: "Fs (Resonance)", value: "500 Hz" },
      { label: "Re (DC Resistance)", value: "6.2 Ω" },
      { label: "Qms (Mechanical Q)", value: "2.5" },
      { label: "Qes (Electrical Q)", value: "0.80" },
      { label: "Qts (Total Q)", value: "0.60" },
      { label: "Vas (Equivalent Volume)", value: "0.05 L" },
      { label: "Sd (Effective Area)", value: "12 cm²" },
      { label: "Xmax (Max Linear Excursion)", value: "0.5 mm" },
    ],
    mounting: [
      { label: "Overall Diameter", value: "88 mm" },
      { label: "Bolt Circle Diameter", value: "76 mm (M4 × 4)" },
      { label: "Mounting Depth", value: "72 mm" },
      { label: "Net Weight", value: "1.8 kg" },
    ],
    frequencyRange: "500 Hz – 18 kHz",
    freqCurvePoints: [88, 92, 96, 100, 104, 108, 111, 112, 112, 111, 110, 109, 108, 107, 105, 102, 98, 94, 88, 82],
  },
  {
    id: "hf-34",
    model: "HF-34",
    subcategory: "High-Frequency Drivers",
    summary: "1-inch exit compression driver with polymer diaphragm for smooth, extended high-frequency response.",
    image: img("38028968"),
    gallery: [img("38028968"), img("34956927"), img("13046056"), img("6958460")],
    badges: ["1-inch Exit", "80W Program", "106 dB SPL"],
    generalSpecs: [
      { label: "Nominal Diameter", value: "25 mm (1 in) exit" },
      { label: "Rated Impedance", value: "8 Ω" },
      { label: "AES Power", value: "40 W" },
      { label: "Program Power", value: "80 W" },
      { label: "Sensitivity (1W/1m)", value: "106 dB" },
      { label: "Voice Coil Diameter", value: "44 mm (1.75 in)" },
      { label: "Magnet Material", value: "Neodymium" },
    ],
    thieleSmall: [
      { label: "Fs (Resonance)", value: "800 Hz" },
      { label: "Re (DC Resistance)", value: "6.5 Ω" },
      { label: "Qms (Mechanical Q)", value: "2.0" },
      { label: "Qes (Electrical Q)", value: "0.90" },
      { label: "Qts (Total Q)", value: "0.65" },
      { label: "Vas (Equivalent Volume)", value: "0.02 L" },
      { label: "Sd (Effective Area)", value: "7 cm²" },
      { label: "Xmax (Max Linear Excursion)", value: "0.3 mm" },
    ],
    mounting: [
      { label: "Overall Diameter", value: "62 mm" },
      { label: "Bolt Circle Diameter", value: "52 mm (M4 × 4)" },
      { label: "Mounting Depth", value: "55 mm" },
      { label: "Net Weight", value: "0.9 kg" },
    ],
    frequencyRange: "800 Hz – 20 kHz",
    freqCurvePoints: [82, 86, 90, 94, 98, 102, 105, 106, 106, 105, 104, 103, 102, 100, 98, 95, 91, 86, 80, 74],
  },
  {
    id: "cw-15sub",
    model: "CW-15SUB",
    subcategory: "Subwoofers",
    summary: "15-inch subwoofer with high-power handling and deep bass extension for touring sub arrays.",
    image: img("28268141"),
    gallery: [img("28268141"), img("23466420"), img("13046056"), img("2659939")],
    badges: ["15-inch Ferrite", "1200W Program", "98 dB SPL"],
    generalSpecs: [
      { label: "Nominal Diameter", value: "380 mm (15 in)" },
      { label: "Rated Impedance", value: "8 Ω" },
      { label: "AES Power", value: "600 W" },
      { label: "Program Power", value: "1200 W" },
      { label: "Sensitivity (1W/1m)", value: "98 dB" },
      { label: "Voice Coil Diameter", value: "100 mm (4 in)" },
      { label: "Magnet Material", value: "Ferrite" },
    ],
    thieleSmall: [
      { label: "Fs (Resonance)", value: "35 Hz" },
      { label: "Re (DC Resistance)", value: "4.8 Ω" },
      { label: "Qms (Mechanical Q)", value: "5.5" },
      { label: "Qes (Electrical Q)", value: "0.30" },
      { label: "Qts (Total Q)", value: "0.28" },
      { label: "Vas (Equivalent Volume)", value: "150 L" },
      { label: "Sd (Effective Area)", value: "855 cm²" },
      { label: "Xmax (Max Linear Excursion)", value: "9.5 mm" },
    ],
    mounting: [
      { label: "Overall Diameter", value: "395 mm" },
      { label: "Bolt Circle Diameter", value: "372 mm" },
      { label: "Mounting Depth", value: "185 mm" },
      { label: "Net Weight", value: "9.0 kg" },
    ],
    frequencyRange: "35 Hz – 1.5 kHz",
    freqCurvePoints: [42, 46, 52, 60, 68, 76, 84, 90, 95, 98, 97, 94, 89, 83, 76, 68, 58, 48, 38, 30],
  },
  {
    id: "cw-10sub",
    model: "CW-10SUB",
    subcategory: "Subwoofers",
    summary: "10-inch compact subwoofer delivering punchy bass in a shallow-mount format for space-constrained installs.",
    image: img("29581125"),
    gallery: [img("29581125"), img("23466420"), img("13046056"), img("6958460")],
    badges: ["10-inch Ferrite", "500W Program", "94 dB SPL"],
    generalSpecs: [
      { label: "Nominal Diameter", value: "260 mm (10 in)" },
      { label: "Rated Impedance", value: "4 Ω" },
      { label: "AES Power", value: "250 W" },
      { label: "Program Power", value: "500 W" },
      { label: "Sensitivity (1W/1m)", value: "94 dB" },
      { label: "Voice Coil Diameter", value: "65 mm (2.5 in)" },
      { label: "Magnet Material", value: "Ferrite" },
    ],
    thieleSmall: [
      { label: "Fs (Resonance)", value: "42 Hz" },
      { label: "Re (DC Resistance)", value: "3.2 Ω" },
      { label: "Qms (Mechanical Q)", value: "4.2" },
      { label: "Qes (Electrical Q)", value: "0.35" },
      { label: "Qts (Total Q)", value: "0.32" },
      { label: "Vas (Equivalent Volume)", value: "35 L" },
      { label: "Sd (Effective Area)", value: "350 cm²" },
      { label: "Xmax (Max Linear Excursion)", value: "6.5 mm" },
    ],
    mounting: [
      { label: "Overall Diameter", value: "262 mm" },
      { label: "Bolt Circle Diameter", value: "242 mm" },
      { label: "Mounting Depth", value: "115 mm" },
      { label: "Net Weight", value: "4.0 kg" },
    ],
    frequencyRange: "42 Hz – 2.5 kHz",
    freqCurvePoints: [48, 52, 58, 64, 72, 80, 86, 91, 94, 93, 91, 87, 82, 76, 69, 61, 52, 43, 35, 28],
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getRelatedProducts(product: Product, count: number = 4): Product[] {
  return products
    .filter((p) => p.id !== product.id)
    .sort((a, b) => {
      const aMatch = a.subcategory === product.subcategory ? 0 : 1;
      const bMatch = b.subcategory === product.subcategory ? 0 : 1;
      return aMatch - bMatch;
    })
    .slice(0, count);
}
