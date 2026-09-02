import { useRef, useState } from "react";

type ColorOption = { name: string; swatch: string; label: string };
type SpecOption = { label: string; detail: string; priceDelta: number };
type SpecGroup = { title: string; options: SpecOption[] };
type FAQItem = { question: string; answer: string };

const colors: ColorOption[] = [
  { name: "스카이라이트", swatch: "#c4d4e8", label: "스카이라이트" },
  { name: "미드나이트", swatch: "#1a1a2e", label: "미드나이트" },
  { name: "스타라이트", swatch: "#e8dcc8", label: "스타라이트" },
  { name: "실버", swatch: "#e2e2e6", label: "실버" },
];

const specGroups: SpecGroup[] = [
  {
    title: "칩",
    options: [
      { label: "M3", detail: "8코어 CPU, 최대 10코어 GPU", priceDelta: 0 },
      { label: "M3", detail: "8코어 CPU, 10코어 GPU, 16GB 메모리", priceDelta: 300000 },
    ],
  },
  {
    title: "메모리",
    options: [
      { label: "8GB", detail: "통합 메모리", priceDelta: 0 },
      { label: "16GB", detail: "통합 메모리", priceDelta: 300000 },
      { label: "24GB", detail: "통합 메모리", priceDelta: 600000 },
    ],
  },
  {
    title: "저장장치",
    options: [
      { label: "256GB", detail: "SSD 저장장치", priceDelta: 0 },
      { label: "512GB", detail: "SSD 저장장치", priceDelta: 300000 },
      { label: "1TB", detail: "SSD 저장장치", priceDelta: 600000 },
    ],
  },
];

const faqs: FAQItem[] = [
  {
    question: "PC에서 Mac으로 갈아타려고 합니다. 새 Mac을 설정하고 파일을 옮기는 것까지 쉽게 처리할 수 있나요?",
    answer: "네, Mac으로 갈아타는 건 간단합니다. Mac 사용법도 iPhone만큼이나 익히기 쉬우며, iPhone이나 다른 Apple 기기와 매끄럽게 페어링됩니다. iPhone을 Mac 가까이 가져가기만 하면 '설정 지원'이 Wi-Fi 네트워크에 연결하고 Apple 계정에 로그인해 줍니다. 덕분에 파일, 사진, 메시지, 암호 등을 iCloud에서 새 Mac으로 바로 옮길 수 있습니다.",
  },
  {
    question: "배송 옵션에는 어떤 것이 있으며, 제품은 언제 받아볼 수 있나요?",
    answer: "Mac이 바로 필요하다면 가까운 지역 Apple Store를 방문해 매장 재고나 당일 픽업 옵션을 확인해 보시기 바랍니다. 결제 시 선택할 수 있는 배송 옵션은 계신 위치와 제품 재고에 따라 달라집니다. 바로 출고하거나 매장에서 픽업할 수 있는 다양한 Mac 구성이 마련되어 있지만 일부 옵션을 맞춤 구성하는 경우 예상 배송일과 배송 옵션이 달라질 수 있습니다.",
  },
  {
    question: "Mac에 추가 디스플레이를 연결할 수 있나요?",
    answer: "네, 가능합니다. 연결할 수 있는 추가 디스플레이 수는 Mac 모델 및 칩에 따라 달라지며, 디스플레이 해상도에 따라 달라질 수도 있습니다. Mac 모델별로 외장 디스플레이 연결에 관한 자세한 내용을 참고하세요.",
  },
  {
    question: "Apple Trade In은 어떻게 진행되나요?",
    answer: "Apple Trade In은 간단한 절차를 거쳐 새 Mac 구입 시 사용할 수 있는 크레딧을 받을 수 있는 프로그램입니다. 기기와 그 상태에 관한 몇 가지 질문에만 답해 주시면 됩니다. 그러면 답변 내용을 바탕으로 산출된 예상 보상 판매 견적을 알려 드립니다. 온라인에서 구입하는 경우 보상 판매 기기 수령 후 계좌 이체로 크레딧을 지급해 드립니다.",
  },
  {
    question: "AppleCare의 보장 내용은 어떻게 되나요?",
    answer: "AppleCare+는 하드웨어 보증 기간을 연장하고 우발적 손상에 대한 보장을 추가해 줍니다. Apple 전문가의 기술 지원도 포함됩니다. 자세한 내용은 Apple 지원 페이지를 참고하세요.",
  },
  {
    question: "Mac을 반품하거나 교환할 수 있나요?",
    answer: "마음이 바뀌어 더 이상 구입하신 Mac을 원치 않으신다면 반품 또는 교환을 신청할 수 있습니다. 반품된 기기는 양호한 상태여야 하며, 모든 액세서리, 설명서, 지침서가 구입 당시 기기가 담겨있던 포장 상자에 모두 포함되어 있어야 합니다.",
  },
];

const productImages = [
  "https://images.pexels.com/photos/211856/pexels-photo-211856.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  "https://images.pexels.com/photos/11982694/pexels-photo-11982694.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  "https://images.pexels.com/photos/93405/pexels-photo-93405.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  "https://images.pexels.com/photos/225234/pexels-photo-225234.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
];

const BASE_PRICE = 1290000;

function formatWon(n: number): string {
  return "₩" + n.toLocaleString("ko-KR");
}

export default function 제품상세페이지({ onBack }: { onBack: () => void }) {
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSpecs, setSelectedSpecs] = useState<number[]>(specGroups.map(() => 0));
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const galleryRef = useRef<HTMLDivElement>(null);

  const totalPrice = specGroups.reduce((sum, group, gi) => {
    return sum + group.options[selectedSpecs[gi]].priceDelta;
  }, BASE_PRICE);

  const scrollToImage = (dir: 1 | -1) => {
    galleryRef.current?.scrollBy({ left: dir * 400, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#f5f5f7] text-[#1d1d1f]" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", "Apple SD Gothic Neo", "Malgun Gothic", sans-serif' }}>
      {/* 브레드크럼 */}
      <div className="sticky top-0 z-30 bg-[rgba(245,245,247,0.85)] backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1024px] items-center justify-between px-5 py-3">
          <nav className="flex items-center gap-2 text-[0.78rem] text-[#6e6e73]">
            <button type="button" onClick={onBack} className="cursor-pointer text-[#0071e3] no-underline hover:underline">
              Store
            </button>
            <span aria-hidden="true">›</span>
            <span className="text-[#6e6e73]">Mac</span>
            <span aria-hidden="true">›</span>
            <span className="font-medium text-[#1d1d1f]">MacBook Air</span>
          </nav>
          <div className="hidden items-center gap-4 text-[0.78rem] text-[#6e6e73] md:flex">
            <a href="#" className="no-underline hover:text-[#1d1d1f] hover:underline">제품 정보</a>
            <a href="#faq" className="no-underline hover:text-[#1d1d1f] hover:underline">자주 묻는 질문</a>
            <a href="#" className="no-underline hover:text-[#1d1d1f] hover:underline">배송</a>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1024px] px-5 md:px-10">
        {/* 제품 타이틀 */}
        <div className="pt-8 text-center md:pt-12">
          <p className="m-0 mb-2 text-[0.85rem] font-semibold text-[#b64400]">NEW</p>
          <h1 className="m-0 text-[2.4rem] font-bold tracking-[-0.02em] md:text-[3.2rem]">
            MacBook Air 구입하기
          </h1>
          <p className="mt-3 text-[1.05rem] text-[#6e6e73]">
            {formatWon(BASE_PRICE)}부터
          </p>
        </div>

        {/* 메인 레이아웃: 이미지 갤러리 + 구성 옵션 */}
        <div className="mt-10 flex flex-col gap-10 lg:flex-row lg:gap-16">
          {/* 이미지 갤러리 */}
          <div className="flex-1">
            <div className="relative">
              <button
                type="button"
                onClick={() => scrollToImage(-1)}
                aria-label="이전 이미지"
                className="absolute -left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border-none bg-white/90 text-[#1d1d1f] shadow-[0_2px_8px_rgba(0,0,0,0.12)] transition-colors hover:bg-white"
              >
                <ArrowChevron dir="left" />
              </button>
              <div
                ref={galleryRef}
                className="flex snap-x snap-mandatory overflow-x-auto scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              >
                {productImages.map((img, i) => (
                  <div key={i} className="flex w-full flex-none snap-center items-center justify-center bg-white py-8">
                    <img src={img} alt={`MacBook Air ${i + 1}`} className="max-h-[400px] max-w-full object-contain" />
                  </div>
                ))}
              </div>
              <button
                type="button"
                onClick={() => scrollToImage(1)}
                aria-label="다음 이미지"
                className="absolute -right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border-none bg-white/90 text-[#1d1d1f] shadow-[0_2px_8px_rgba(0,0,0,0.12)] transition-colors hover:bg-white"
              >
                <ArrowChevron dir="right" />
              </button>
            </div>

            {/* 썸네일 인디케이터 */}
            <div className="mt-4 flex justify-center gap-2">
              {productImages.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => {
                    setSelectedImage(i);
                    galleryRef.current?.scrollTo({ left: i * galleryRef.current.offsetWidth, behavior: "smooth" });
                  }}
                  aria-label={`이미지 ${i + 1}`}
                  className={`h-2 rounded-full transition-all ${selectedImage === i ? "w-6 bg-[#1d1d1f]" : "w-2 bg-[#d2d2d7]"}`}
                />
              ))}
            </div>
          </div>

          {/* 구성 옵션 */}
          <div className="flex-1">
            {/* 색상 선택 */}
            <section className="border-b border-[#d2d2d7] pb-8">
              <h2 className="m-0 mb-1 text-[1.4rem] font-semibold tracking-[-0.01em]">
                색상 선택: <span className="text-[#6e6e73]">{colors[selectedColor].label}</span>
              </h2>
              <div className="mt-4 flex gap-4">
                {colors.map((color, i) => (
                  <button
                    key={color.name}
                    type="button"
                    onClick={() => setSelectedColor(i)}
                    aria-label={color.label}
                    className={`flex h-12 w-12 items-center justify-center rounded-full border-2 transition-all ${
                      selectedColor === i ? "border-[#0071e3] ring-2 ring-[#0071e3]/20" : "border-[#d2d2d7] hover:border-[#86868b]"
                    }`}
                  >
                    <span className="h-8 w-8 rounded-full shadow-[inset_0_0_0_1px_rgba(0,0,0,0.1)]" style={{ background: color.swatch }} />
                  </button>
                ))}
              </div>
            </section>

            {/* 사양 선택 */}
            {specGroups.map((group, gi) => (
              <section key={group.title} className="border-b border-[#d2d2d7] py-8">
                <h2 className="m-0 mb-4 text-[1.4rem] font-semibold tracking-[-0.01em]">{group.title}</h2>
                <div className="flex flex-col gap-3">
                  {group.options.map((option, oi) => (
                    <button
                      key={option.label}
                      type="button"
                      onClick={() => {
                        const next = [...selectedSpecs];
                        next[gi] = oi;
                        setSelectedSpecs(next);
                      }}
                      className={`flex items-center justify-between rounded-[12px] border-2 p-4 text-left transition-all ${
                        selectedSpecs[gi] === oi
                          ? "border-[#0071e3] bg-[#0071e3]/5"
                          : "border-[#d2d2d7] bg-white hover:border-[#86868b]"
                      }`}
                    >
                      <span className="flex flex-col">
                        <span className="text-[1rem] font-medium">{option.label}</span>
                        <span className="text-[0.85rem] text-[#6e6e73]">{option.detail}</span>
                      </span>
                      <span className="text-[0.9rem] font-medium text-[#1d1d1f]">
                        {option.priceDelta === 0 ? "포함됨" : `+ ${formatWon(option.priceDelta)}`}
                      </span>
                    </button>
                  ))}
                </div>
              </section>
            ))}

            {/* 요금 + 구매 버튼 */}
            <section className="pt-8">
              <div className="mb-4 flex items-baseline justify-between">
                <span className="text-[1.1rem] font-medium">총합계</span>
                <span className="text-[1.6rem] font-bold tracking-[-0.01em]">{formatWon(totalPrice)}</span>
              </div>
              <button
                type="button"
                className="w-full cursor-pointer rounded-full border-none bg-[#0071e3] py-3.5 text-[1rem] font-medium text-white transition-colors hover:bg-[#0077ed] active:scale-[0.98]"
              >
                장바구니에 담기
              </button>
              <div className="mt-4 flex flex-col gap-2 text-[0.82rem] text-[#6e6e73]">
                <p className="m-0 flex items-center gap-2">
                  <TruckIcon /> 무료 배송 · 1-3 영업일 내 도착
                </p>
                <p className="m-0 flex items-center gap-2">
                  <StoreIcon /> Apple Store에서 픽업 가능
                </p>
                <p className="m-0 flex items-center gap-2">
                  <ReturnIcon /> 14일 이내 반품 가능
                </p>
              </div>
            </section>
          </div>
        </div>

        {/* 스페셜리스트 세션 */}
        <section className="my-16 overflow-hidden rounded-[18px] bg-gradient-to-br from-[#1a1a2e] to-[#0f3460] p-8 md:p-12">
          <h2 className="m-0 text-[1.6rem] font-semibold text-white md:text-[2rem]">
            스페셜리스트와 진행하는 일대일 세션을 통해 기기 설정하기.
          </h2>
          <p className="mt-3 max-w-2xl text-[1rem] leading-[1.5] text-white/70">
            Apple에서 직접 기기 구입 시, 온라인으로 진행되는 무료 개인 맞춤 설정 세션에서 데이터를 옮기고, 새 기기를 속속들이 활용하는 방법을 배울 수 있습니다.
          </p>
          <a
            href="#"
            className="mt-5 inline-block rounded-full border border-white/30 bg-transparent px-6 py-2.5 text-[0.95rem] font-medium text-white no-underline transition-colors hover:bg-white/10"
          >
            개인 맞춤 설정에 대해 더 알아보기
          </a>
        </section>

        {/* Apple 서비스 혜택 */}
        <section className="mb-16">
          <h2 className="m-0 mb-2 text-[1.6rem] font-semibold tracking-[-0.01em] md:text-[2rem]">
            새로 산 Mac과 함께 누릴 수 있는 놀라움의 세계.
          </h2>
          <p className="mb-6 text-[1rem] text-[#6e6e73]">Apple 기기를 구입하면 특정 서비스 3개월 무료.</p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {[
              { title: "Apple TV+", subtitle: "오리지널 시리즈와 영화", icon: "tv" },
              { title: "Apple Music", subtitle: "1억 곡 이상, 광고 없음", icon: "music" },
              { title: "Apple Arcade", subtitle: "200개 이상의 게임", icon: "game" },
            ].map((service) => (
              <article key={service.title} className="flex flex-col items-center rounded-[18px] bg-white p-8 text-center shadow-[0_1px_3px_rgba(0,0,0,0.04)] transition-[transform,box-shadow] duration-300 hover:-translate-y-1.5 hover:shadow-[0_18px_40px_rgba(0,0,0,0.1)]">
                <ServiceIcon type={service.icon} />
                <h3 className="m-0 mt-4 text-[1.2rem] font-semibold">{service.title}</h3>
                <p className="mt-1 text-[0.9rem] text-[#6e6e73]">{service.subtitle}</p>
              </article>
            ))}
          </div>
        </section>

        {/* 교육 할인 */}
        <section className="mb-16 overflow-hidden rounded-[18px] bg-gradient-to-br from-[#e8f4fd] to-[#d1ecf9] p-8 md:p-12">
          <h2 className="m-0 text-[1.6rem] font-semibold tracking-[-0.01em] md:text-[2rem]">
            대학생 및 교육자라면 새로운 Mac을 더욱 저렴하게.
          </h2>
          <p className="mt-3 text-[1rem] text-[#1d1d1f]/70">교육 할인 스토어에서 특별 할인가로 만나보세요.</p>
          <a
            href="#"
            className="mt-5 inline-block rounded-full bg-[#0071e3] px-6 py-3 text-[0.95rem] font-medium text-white no-underline transition-colors hover:bg-[#0077ed]"
          >
            지금 쇼핑하기
          </a>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-16">
          <h2 className="m-0 mb-6 text-[1.6rem] font-semibold tracking-[-0.01em] md:text-[2rem]">
            자주 묻는 질문
          </h2>
          <div className="flex flex-col gap-2">
            {faqs.map((faq, i) => (
              <div key={i} className="overflow-hidden rounded-[14px] bg-white shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="flex w-full items-center justify-between gap-4 border-none bg-transparent px-6 py-5 text-left cursor-pointer"
                >
                  <span className="text-[1rem] font-medium leading-[1.4]">{faq.question}</span>
                  <span className={`flex h-6 w-6 flex-none items-center justify-center text-[#6e6e73] transition-transform duration-300 ${openFaq === i ? "rotate-45" : ""}`}>
                    <PlusIcon />
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-[cubic-bezier(0.2,0.7,0.2,1)] ${
                    openFaq === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="m-0 px-6 pb-5 text-[0.92rem] leading-[1.55] text-[#6e6e73]">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 각주 */}
        <section className="border-t border-[#d2d2d7] py-8">
          <p className="m-0 text-[0.75rem] leading-[1.5] text-[#6e6e73]">
            1GB = 10억 바이트, 1TB = 1조 바이트입니다. 실제로 포맷된 용량은 더 적을 수도 있습니다.
          </p>
        </section>
      </div>
    </div>
  );
}

function ArrowChevron({ dir }: { dir: "left" | "right" }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points={dir === "left" ? "15 18 9 12 15 6" : "9 18 15 12 9 6"} />
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  );
}

function TruckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="1" y="3" width="15" height="13" rx="1" />
      <path d="M16 8h4l3 3v5h-7V8z" />
      <circle cx="5.5" cy="18.5" r="2.5" />
      <circle cx="18.5" cy="18.5" r="2.5" />
    </svg>
  );
}

function StoreIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 9l1-5h16l1 5" />
      <path d="M4 9v11h16V9" />
      <rect x="9" y="13" width="6" height="7" />
    </svg>
  );
}

function ReturnIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="1 4 1 10 7 10" />
      <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" />
    </svg>
  );
}

function ServiceIcon({ type }: { type: string }) {
  const icons: Record<string, React.ReactNode> = {
    tv: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#0071e3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="4" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="18" x2="12" y2="21" />
      </svg>
    ),
    music: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#0071e3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M9 18V5l12-2v13" />
        <circle cx="6" cy="18" r="3" />
        <circle cx="18" cy="16" r="3" />
      </svg>
    ),
    game: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#0071e3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <line x1="6" y1="11" x2="10" y2="11" />
        <line x1="8" y1="9" x2="8" y2="13" />
        <line x1="15" y1="12" x2="15.01" y2="12" />
        <line x1="18" y1="10" x2="18.01" y2="10" />
        <rect x="2" y="6" width="20" height="12" rx="6" />
      </svg>
    ),
  };
  return <>{icons[type]}</>;
}
