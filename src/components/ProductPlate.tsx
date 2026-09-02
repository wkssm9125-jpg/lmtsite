type Props = {
  model: string;
  brand: string;
  className?: string;
  compact?: boolean;
};

/**
 * 제품 사진이 준비되기 전까지 쓰는 자리 표시자입니다.
 * 실제 시공/제품 사진이 들어오면 이 컴포넌트 대신 <img>로 교체하세요.
 */
export default function ProductPlate({ model, brand, className = "", compact = false }: Props) {
  return (
    <div
      className={`relative flex h-full w-full items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-[#e8e8ed] to-[#fbfbfd] ${className}`}
    >
      <span
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: "radial-gradient(rgba(0,0,0,0.10) 1px, transparent 1.4px)",
          backgroundSize: "9px 9px",
        }}
        aria-hidden="true"
      />
      <div className="relative flex flex-col items-center gap-1 px-3 text-center">
        <span className="text-[0.62rem] font-semibold uppercase tracking-[0.08em] text-[#86868b]">
          {brand}
        </span>
        <span className={`font-bold tracking-[-0.02em] text-[#1d1d1f] ${compact ? "text-[0.95rem]" : "text-[1.3rem]"}`}>
          {model}
        </span>
      </div>
      <span className="absolute right-2 top-2 rounded-full bg-white/80 px-2 py-0.5 text-[0.6rem] font-medium text-[#6e6e73] backdrop-blur-sm">
        준비중
      </span>
    </div>
  );
}
