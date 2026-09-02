type Props = {
  points: number[];
  width?: number;
  height?: number;
};

export default function FrequencyResponseChart({ points, width = 700, height = 300 }: Props) {
  const padding = { top: 30, right: 40, bottom: 50, left: 50 };
  const chartW = width - padding.left - padding.right;
  const chartH = height - padding.top - padding.bottom;

  const freqLabels = ["20", "30", "50", "80", "120", "200", "300", "500", "800", "1.2k", "2k", "3k", "5k", "8k", "12k", "20k"];
  const dbMin = 40;
  const dbMax = 120;
  const dbRange = dbMax - dbMin;

  const xStep = chartW / (freqLabels.length - 1);
  const pointStep = chartW / (points.length - 1);

  const toX = (i: number) => padding.left + i * pointStep;
  const toY = (db: number) => padding.top + chartH - ((db - dbMin) / dbRange) * chartH;

  const linePath = points
    .map((db, i) => `${i === 0 ? "M" : "L"} ${toX(i)} ${toY(db)}`)
    .join(" ");

  const areaPath = `${linePath} L ${toX(points.length - 1)} ${padding.top + chartH} L ${toX(0)} ${padding.top + chartH} Z`;

  const dbGridLines = [50, 60, 70, 80, 90, 100, 110, 120];

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="w-full" role="img" aria-label="Frequency response curve">
      <defs>
        <linearGradient id="freqGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0071e3" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#0071e3" stopOpacity="0" />
        </linearGradient>
      </defs>

      {dbGridLines.map((db) => (
        <g key={db}>
          <line
            x1={padding.left}
            y1={toY(db)}
            x2={padding.left + chartW}
            y2={toY(db)}
            stroke="#e5e5ea"
            strokeWidth={1}
            strokeDasharray={db === 80 ? "0" : "4 4"}
          />
          <text x={padding.left - 8} y={toY(db) + 4} textAnchor="end" fontSize={10} fill="#86868b">
            {db}
          </text>
        </g>
      ))}

      {freqLabels.map((freq, i) => (
        <text
          key={freq}
          x={padding.left + i * xStep}
          y={height - padding.bottom + 18}
          textAnchor="middle"
          fontSize={10}
          fill="#86868b"
        >
          {freq}
        </text>
      ))}

      <path d={areaPath} fill="url(#freqGradient)" />
      <path d={linePath} fill="none" stroke="#0071e3" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />

      {points.map((db, i) => (
        <circle key={i} cx={toX(i)} cy={toY(db)} r={2.5} fill="#0071e3" />
      ))}

      <text x={padding.left} y={padding.top - 10} fontSize={11} fill="#86868b" fontWeight={600}>
        SPL (dB)
      </text>
      <text x={padding.left + chartW} y={height - padding.bottom + 38} textAnchor="end" fontSize={11} fill="#86868b" fontWeight={600}>
        Frequency (Hz)
      </text>
    </svg>
  );
}
