import { useRef, useState } from "react";

type Product = {
  name: string;
  image: string;
  price: string;
  cta: string;
  isNew?: boolean;
  dots?: string[];
};

type Accessory = {
  name: string;
  image: string;
  price: string;
  badge?: string;
};

type FeatureCard = {
  title: string;
  subtitle: string;
  image: string;
  bg: string;
  dark?: boolean;
};

const tabs = ["모든 모델", "MacBook", "Mac", "비교하기"];

const products: Product[] = [
  {
    name: "MacBook Air",
    image: "https://images.pexels.com/photos/211856/pexels-photo-211856.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    price: "₩1,290,000부터",
    cta: "구매하기",
    isNew: true,
    dots: ["#1d1d1f", "#e8e8e8", "#a8c8e8", "#e8d4c0"],
  },
  {
    name: "MacBook Pro",
    image: "https://images.pexels.com/photos/18311089/pexels-photo-18311089.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    price: "₩2,090,000부터",
    cta: "구매하기",
    isNew: true,
    dots: ["#1d1d1f", "#c0c0c4", "#3d3d3d"],
  },
  {
    name: "iMac",
    image: "https://images.pexels.com/photos/5552789/pexels-photo-5552789.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    price: "₩1,790,000부터",
    cta: "구매하기",
    dots: ["#e8e8e8", "#f0b8a8", "#a8d8c8", "#d8c0e8", "#f0e0a0"],
  },
  {
    name: "Mac mini",
    image: "https://images.pexels.com/photos/34956927/pexels-photo-34956927.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    price: "₩890,000부터",
    cta: "구매하기",
    isNew: true,
    dots: ["#1d1d1f"],
  },
  {
    name: "Mac Studio",
    image: "https://images.pexels.com/photos/29283981/pexels-photo-29283981.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    price: "₩2,790,000부터",
    cta: "구매하기",
    dots: ["#1d1d1f", "#3d3d3d"],
  },
  {
    name: "Mac Pro",
    image: "https://images.pexels.com/photos/2659939/pexels-photo-2659939.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    price: "₩9,990,000부터",
    cta: "구매하기",
    dots: ["#1d1d1f", "#c0c0c4"],
  },
];

const accessories: Accessory[] = [
  {
    name: "Apple Silicon이 장착된 Mac 모델용 Magic Keyboard (Touch ID 포함)",
    image: "https://images.pexels.com/photos/211856/pexels-photo-211856.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    price: "₩279,000",
  },
  {
    name: "Magic Mouse (USB-C) - 블랙 Multi-Touch 표면",
    image: "https://images.pexels.com/photos/2659939/pexels-photo-2659939.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    price: "₩139,000",
  },
  {
    name: "Magic Trackpad (USB-C) - 블랙 Multi-Touch 표면",
    image: "https://images.pexels.com/photos/4533076/pexels-photo-4533076.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    price: "₩199,000",
  },
  {
    name: "Studio Display - 스탠드 글래스 - 기울기 조절 스탠드",
    image: "https://images.pexels.com/photos/5552789/pexels-photo-5552789.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    price: "₩2,499,000",
  },
  {
    name: "Aer Go Pack 2",
    image: "https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    price: "₩149,000",
    badge: "온라인 전용 제품",
  },
  {
    name: "Bellroy Cinch Messenger",
    image: "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    price: "₩169,000",
    badge: "NEW",
  },
];

const latestProducts: FeatureCard[] = [
  {
    title: "iPhone 16 Pro",
    subtitle: "프로급 카메라. 프로급 성능.",
    image: "https://images.pexels.com/photos/18311092/pexels-photo-18311092.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    bg: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
    dark: true,
  },
  {
    title: "iPad Pro",
    subtitle: "환상적인 성능. 얇은 두께.",
    image: "https://images.pexels.com/photos/18205642/pexels-photo-18205642.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    bg: "linear-gradient(135deg, #2c3e50 0%, #3498db 100%)",
    dark: true,
  },
  {
    title: "Apple Watch Series 10",
    subtitle: "당신의 건강을 더 깊이.",
    image: "https://images.pexels.com/photos/12564670/pexels-photo-12564670.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    bg: "linear-gradient(135deg, #0f0f1a 0%, #1a1a3e 100%)",
    dark: true,
  },
  {
    title: "AirPods Pro 2",
    subtitle: "더욱 강력한 노이즈 캔슬링.",
    image: "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    bg: "linear-gradient(135deg, #f5f5f7 0%, #e8e8ed 100%)",
  },
];

const helpCards: FeatureCard[] = [
  {
    title: "Apple Trade In",
    subtitle: "쓰던 기기를 보상 판매하고 새 기기를 더 저렴하게.",
    image: "https://images.pexels.com/photos/36680544/pexels-photo-36680544.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    bg: "linear-gradient(135deg, #e8f4fd 0%, #d1ecf9 100%)",
  },
  {
    title: "최대 18개월 무이자 할부",
    subtitle: "결제 부담 없이 새 Apple 기기를 만나보세요.",
    image: "https://images.pexels.com/photos/18311089/pexels-photo-18311089.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    bg: "linear-gradient(135deg, #fff8e1 0%, #ffecb3 100%)",
  },
  {
    title: "무료 각인",
    subtitle: "자신만의 것이라는 증표. 무료로 조합해서 새기는 이모티콘, 이름, 숫자.",
    image: "https://images.pexels.com/photos/31541678/pexels-photo-31541678.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    bg: "linear-gradient(135deg, #fce4ec 0%, #f8bbd0 100%)",
  },
  {
    title: "무료 배송 및 매장 픽업",
    subtitle: "간편한 무료 배송. 매장 보유 제품은 Apple Store에서 직접 픽업 가능.",
    image: "https://images.pexels.com/photos/14917510/pexels-photo-14917510.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    bg: "linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)",
  },
];

const appleExperience: FeatureCard[] = [
  {
    title: "연속성",
    subtitle: "혼자서도 강력. 함께하면 초강력.",
    image: "https://images.pexels.com/photos/12880803/pexels-photo-12880803.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    bg: "linear-gradient(135deg, #1a1a2e 0%, #0f3460 100%)",
    dark: true,
  },
  {
    title: "Apple Store 앱",
    subtitle: "맞춤형 쇼핑을 Apple Store 앱에서 경험하세요.",
    image: "https://images.pexels.com/photos/13753893/pexels-photo-13753893.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    bg: "linear-gradient(135deg, #f5f5f7 0%, #e8e8ed 100%)",
  },
];

const homeTheater: FeatureCard[] = [
  {
    title: "Apple TV 4K",
    subtitle: "홈 시어터 사운드의 업그레이드.",
    image: "https://images.pexels.com/photos/13348768/pexels-photo-13348768.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    bg: "linear-gradient(135deg, #0c0c1a 0%, #1a1a3e 100%)",
    dark: true,
  },
  {
    title: "HomePod",
    subtitle: "공간을 채우는 풍부한 사운드.",
    image: "https://images.pexels.com/photos/13378811/pexels-photo-13378811.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    bg: "linear-gradient(135deg, #1a1a2e 0%, #2d2d5e 100%)",
    dark: true,
  },
];

type NavMenu = {
  label: string;
  sections: { heading: string; links: string[] }[];
};

const navMenus: NavMenu[] = [
  {
    label: "Store",
    sections: [
      { heading: "쇼핑", links: ["모든 제품 쇼핑", "Mac", "iPad", "iPhone", "Apple Watch", "AirPods", "TV & 홈", "액세서리"] },
      { heading: "빠른 링크", links: ["주문 상태", "매장 픽업", "보상 판매", "금융 옵션"] },
      { heading: "Apple Store", links: ["Apple Store 앱", "Today at Apple", "Genius Bar", "Apple Camp"] },
    ],
  },
  {
    label: "Mac",
    sections: [
      { heading: "Mac 쇼핑", links: ["MacBook Air", "MacBook Pro", "iMac", "Mac mini", "Mac Studio", "Mac Pro", "디스플레이", "비교하기"] },
      { heading: "더 알아보기", links: ["Mac으로 할 수 있는 일", "Apple Silicon", "macOS", "Mac 액세서리"] },
      { heading: "지원", links: ["Mac 지원", "AppleCare+", "매장 찾기"] },
    ],
  },
  {
    label: "iPad",
    sections: [
      { heading: "iPad 쇼핑", links: ["iPad Pro", "iPad Air", "iPad", "iPad mini", "Apple Pencil", "키보드", "비교하기"] },
      { heading: "더 알아보기", links: ["iPad로 할 수 있는 일", "iPadOS", "iPad 액세서리"] },
      { heading: "지원", links: ["iPad 지원", "AppleCare+", "매장 찾기"] },
    ],
  },
  {
    label: "iPhone",
    sections: [
      { heading: "iPhone 쇼핑", links: ["iPhone 16 Pro", "iPhone 16", "iPhone 15", "비교하기", "AirPods", "AirTag", "액세서리"] },
      { heading: "더 알아보기", links: ["iPhone로 할 수 있는 일", "iOS 18", "iPhone 개인정보 보호"] },
      { heading: "지원", links: ["iPhone 지원", "AppleCare+", "매장 찾기"] },
    ],
  },
  {
    label: "Watch",
    sections: [
      { heading: "Watch 쇼핑", links: ["Apple Watch Series 10", "Apple Watch Ultra 2", "Apple Watch SE", "Apple Watch Nike", "비교하기"] },
      { heading: "더 알아보기", links: ["Apple Watch로 할 수 있는 일", "watchOS", "건강 기능"] },
      { heading: "지원", links: ["Apple Watch 지원", "AppleCare+", "매장 찾기"] },
    ],
  },
  {
    label: "AirPods",
    sections: [
      { heading: "AirPods 쇼핑", links: ["AirPods 4", "AirPods Pro 2", "AirPods Max", "비교하기"] },
      { heading: "더 알아보기", links: ["AirPods로 할 수 있는 일", "Apple Music", "공간 오디오"] },
      { heading: "지원", links: ["AirPods 지원", "AppleCare+"] },
    ],
  },
  {
    label: "TV & 홈",
    sections: [
      { heading: "TV & 홈 쇼핑", links: ["Apple TV 4K", "HomePod", "HomePod mini", "액세서리"] },
      { heading: "더 알아보기", links: ["tvOS", "Apple Music", "Siri", "홈 앱"] },
      { heading: "지원", links: ["Apple TV 지원", "HomePod 지원", "매장 찾기"] },
    ],
  },
  {
    label: "엔터테인먼트",
    sections: [
      { heading: "탐색", links: ["Apple One", "Apple TV+", "Apple Music", "Apple Arcade", "Apple Fitness+", "Apple News+", "Apple Podcasts", "Apple Books"] },
      { heading: "더 알아보기", links: ["App Store", "Apple 지원"] },
    ],
  },
  {
    label: "액세서리",
    sections: [
      { heading: "쇼핑", links: ["모든 액세서리", "iPhone 액세서리", "iPad 액세서리", "Mac 액세서리", "Apple Watch 액세서리"] },
      { heading: "더 알아보기", links: ["AirTag", "Apple 각인", "Apple 금융 옵션"] },
    ],
  },
  {
    label: "지원",
    sections: [
      { heading: "탐색", links: ["iPhone", "Mac", "iPad", "Watch", "AirPods", "Music", "Apple TV+"] },
      { heading: "도움말", links: ["AppleCare+", "Apple 지원 앱", "커뮤니티", "수리 서비스"] },
      { heading: "연락처", links: ["Apple과의 연락", "매장 찾기", "080-330-8877"] },
    ],
  },
];

const footerSections = [
  {
    title: "쇼핑 및 알아보기",
    links: ["Store", "Mac", "iPad", "iPhone", "Watch", "AirPods", "TV & 홈", "AirTag"],
  },
  {
    title: "Apple 지갑",
    links: ["지갑", "Apple Card", "Apple Pay"],
  },
  {
    title: "계정",
    links: ["Apple 계정 관리", "Apple Store 계정", "iCloud.com"],
  },
  {
    title: "엔터테인먼트",
    links: ["Apple One", "Apple TV+", "Apple Music", "Apple Arcade", "Apple Fitness+", "Apple News+", "Apple Podcasts", "Apple Books", "App Store"],
  },
  {
    title: "Apple Store",
    links: ["매장 찾기", "Genius Bar", "Today at Apple", "Apple Camp", "Apple Store 앱", "매장 픽업", "보상 판매", "금융 옵션", "주문 상태"],
  },
  {
    title: "비즈니스",
    links: ["Apple과 비즈니스", "비즈니스를 위한 쇼핑"],
  },
  {
    title: "교육",
    links: ["Apple과 교육", "교육을 위한 쇼핑", "교육 기관을 위한 쇼핑"],
  },
  {
    title: "Apple의 가치관",
    links: ["손쉬운 사용", "환경", "개인정보 보호", "공급망", "Apple의 경제적 영향력"],
  },
  {
    title: "Apple 정보",
    links: ["Apple 소개", "뉴스룸", "채용 정보", "윤리 및 규정 준수", "이벤트", "Apple과의 연락"],
  },
];

export default function 제품소개페이지({ onProductClick }: { onProductClick?: () => void }) {
  const [activeTab, setActiveTab] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const accessoryTrackRef = useRef<HTMLDivElement>(null);

  const scrollByCards = (dir: 1 | -1) => {
    trackRef.current?.scrollBy({ left: dir * 360, behavior: "smooth" });
  };

  const scrollAccessories = (dir: 1 | -1) => {
    accessoryTrackRef.current?.scrollBy({ left: dir * 300, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#f5f5f7] text-[#1d1d1f]" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", "Apple SD Gothic Neo", "Malgun Gothic", sans-serif' }}>
      {/* 글로벌 내비게이션 */}
      <GlobalNav navMenus={navMenus} mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />

      {/* 히어로 */}
      <section className="px-5 pb-8 pt-16 text-center md:pt-24">
        <h1 className="m-0 text-[2.8rem] font-bold tracking-[-0.02em] md:text-[4rem]">
          스토어
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-[1.1rem] text-[#6e6e73] md:text-[1.3rem]">
          최신 제품. 도움의 손길. 남다른 Apple Store.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <a href="#products" className="rounded-full bg-[#0071e3] px-6 py-3 text-[0.95rem] font-medium text-white no-underline transition-colors hover:bg-[#0077ed]">
            쇼핑하기
          </a>
          <a href="#accessories" className="rounded-full border border-[#0071e3] bg-transparent px-6 py-3 text-[0.95rem] font-medium text-[#0071e3] no-underline transition-colors hover:bg-[#0071e3] hover:text-white">
            액세서리 보기
          </a>
        </div>
      </section>

      {/* 최신 제품 */}
      <SectionHeading id="latest" title="최신 제품." subtitle="가장 주목받는 새로운 Apple 기기." />
      <FeatureGrid cards={latestProducts} />

      {/* Mac 쇼핑하기 */}
      <section id="products" className="mx-auto max-w-[1400px] px-5 py-12 md:px-10">
        <header className="flex flex-col items-start justify-between gap-6 md:flex-row">
          <h2 className="m-0 text-[2.4rem] font-bold leading-[1.05] tracking-[-0.02em] md:text-[3.5rem]">
            Mac 쇼핑하기
          </h2>
          <div className="flex flex-row items-start gap-5 pt-0 md:flex-col md:items-end md:gap-2 md:pt-2.5">
            <a className="whitespace-nowrap text-[0.95rem] text-[#0071e3] no-underline hover:underline" href="#">
              스페셜리스트에게 문의 ↗
            </a>
            <a className="whitespace-nowrap text-[0.95rem] text-[#0071e3] no-underline hover:underline" href="#">
              Apple Store 찾기 ↗
            </a>
          </div>
        </header>

        <nav className="mt-10 flex flex-wrap gap-7 pb-1" aria-label="Mac 쇼핑 카테고리">
          {tabs.map((tab, i) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(i)}
              aria-current={i === activeTab ? "true" : undefined}
              className={`relative cursor-pointer border-none bg-transparent pb-1.5 text-base transition-colors ${
                i === activeTab
                  ? "font-semibold text-[#1d1d1f] after:absolute after:inset-x-0 after:-bottom-px after:h-0.5 after:rounded-full after:bg-[#1d1d1f] after:content-['']"
                  : "text-[#6e6e73] hover:text-[#1d1d1f]"
              }`}
            >
              {tab}
            </button>
          ))}
        </nav>

        <h3 className="mb-6 mt-12 text-[1.6rem] font-semibold tracking-[-0.01em]">
          모든 모델. <span className="text-[#6e6e73]">당신의 선택은?</span>
        </h3>

        <div className="relative">
          <button
            type="button"
            onClick={() => scrollByCards(-1)}
            aria-label="이전 제품 보기"
            className="absolute -left-3.5 top-[42%] z-10 hidden h-11 w-11 items-center justify-center rounded-full border-none bg-white/90 text-[#1d1d1f] shadow-[0_2px_10px_rgba(0,0,0,0.15)] backdrop-blur-sm transition-colors hover:bg-white md:flex"
          >
            <Chevron dir="left" />
          </button>
          <div
            ref={trackRef}
            className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-1 pb-6 pt-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {products.map((p) => (
              <ProductCard key={p.name} product={p} onClick={onProductClick} />
            ))}
          </div>
          <button
            type="button"
            onClick={() => scrollByCards(1)}
            aria-label="다음 제품 보기"
            className="absolute -right-3.5 top-[42%] z-10 hidden h-11 w-11 items-center justify-center rounded-full border-none bg-white/90 text-[#1d1d1f] shadow-[0_2px_10px_rgba(0,0,0,0.15)] backdrop-blur-sm transition-colors hover:bg-white md:flex"
          >
            <Chevron dir="right" />
          </button>
        </div>
      </section>

      {/* 도움의 손길 */}
      <SectionHeading id="help" title="도움의 손길." subtitle="더 편리한 쇼핑을 위한 Apple의 서비스." />
      <FeatureGrid cards={helpCards} />

      {/* 남다른 Apple Store */}
      <SectionHeading id="store" title="남다른 Apple Store." subtitle="Apple만의 특별한 쇼핑 경험." />
      <FeatureGrid cards={appleExperience} />

      {/* 액세서리 */}
      <section id="accessories" className="mx-auto max-w-[1400px] px-5 py-12 md:px-10">
        <h2 className="mb-6 text-[1.6rem] font-semibold tracking-[-0.01em]">
          액세서리. <span className="text-[#6e6e73]">Mac과 함께.</span>
        </h2>
        <div className="relative">
          <button
            type="button"
            onClick={() => scrollAccessories(-1)}
            aria-label="이전 악세서리 보기"
            className="absolute -left-3.5 top-[42%] z-10 hidden h-11 w-11 items-center justify-center rounded-full border-none bg-white/90 text-[#1d1d1f] shadow-[0_2px_10px_rgba(0,0,0,0.15)] backdrop-blur-sm transition-colors hover:bg-white md:flex"
          >
            <Chevron dir="left" />
          </button>
          <div
            ref={accessoryTrackRef}
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-1 pb-6 pt-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            <AccessoryIntroCard />
            {accessories.map((accessory) => (
              <AccessoryCard key={accessory.name} accessory={accessory} />
            ))}
          </div>
          <button
            type="button"
            onClick={() => scrollAccessories(1)}
            aria-label="다음 악세서리 보기"
            className="absolute -right-3.5 top-[42%] z-10 hidden h-11 w-11 items-center justify-center rounded-full border-none bg-white/90 text-[#1d1d1f] shadow-[0_2px_10px_rgba(0,0,0,0.15)] backdrop-blur-sm transition-colors hover:bg-white md:flex"
          >
            <Chevron dir="right" />
          </button>
        </div>
      </section>

      {/* 홈 시어터 사운드의 업그레이드 */}
      <SectionHeading id="home-theater" title="홈 시어터 사운드의 업그레이드." subtitle="집에서 만나는 극장급 사운드." />
      <FeatureGrid cards={homeTheater} />

      {/* 할인 및 프로모션 */}
      <section id="promotions" className="mx-auto max-w-[1400px] px-5 py-12 md:px-10">
        <h2 className="mb-6 text-[1.6rem] font-semibold tracking-[-0.01em]">
          할인 및 프로모션. <span className="text-[#6e6e73]">놓치지 마세요.</span>
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <PromoCard
            title="Apple Trade In"
            description="쓰던 기기를 보상 판매하고 새 기기를 더 저렴하게."
            cta="더 알아보기"
          />
          <PromoCard
            title="최대 18개월 무이자 할부"
            description="결제 부담 없이 새 Apple 기기를 만나보세요."
            cta="자세히 보기"
          />
          <PromoCard
            title="교육 할인"
            description="학생과 교육자를 위한 특별한 가격."
            cta="교육 스토어"
          />
        </div>
      </section>

      {/* 빠른 링크 */}
      <section className="mx-auto max-w-[1400px] px-5 py-12 md:px-10">
        <h2 className="mb-6 text-[1.6rem] font-semibold tracking-[-0.01em]">빠른 링크</h2>
        <div className="flex flex-wrap gap-3">
          {["주문 상태", "매장 픽업", "보상 판매", "금융 옵션", "Apple Store 앱", "Today at Apple", "Genius Bar"].map((link) => (
            <a
              key={link}
              href="#"
              className="rounded-full border border-[#d2d2d7] bg-white px-5 py-2.5 text-[0.9rem] text-[#1d1d1f] no-underline transition-colors hover:border-[#0071e3] hover:text-[#0071e3]"
            >
              {link}
            </a>
          ))}
        </div>
      </section>

      {/* 푸터 */}
      <SiteFooter sections={footerSections} />
    </div>
  );
}

function GlobalNav({ navMenus, mobileMenuOpen, setMobileMenuOpen }: { navMenus: NavMenu[]; mobileMenuOpen: boolean; setMobileMenuOpen: (v: boolean) => void }) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleEnter = (index: number) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setHoveredIndex(index);
  };

  const handleLeave = () => {
    closeTimer.current = setTimeout(() => setHoveredIndex(null), 120);
  };

  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };

  const currentMenu = hoveredIndex !== null ? navMenus[hoveredIndex] : null;
  const isOpen = currentMenu !== null;

  return (
    <>
      <div className={`fixed inset-0 z-40 bg-black/30 transition-opacity duration-300 ${isOpen ? "opacity-100" : "pointer-events-none opacity-0"}`} />
      <header
        className="sticky top-0 z-50 bg-[rgba(22,22,23,0.8)] backdrop-blur-xl"
        onMouseLeave={handleLeave}
        onMouseEnter={cancelClose}
      >
        <nav className="mx-auto flex max-w-[1024px] items-center justify-between px-5 py-3 md:py-3.5">
          <a href="#" aria-label="Apple" className="text-white/90 transition-colors hover:text-white">
            <AppleLogo />
          </a>
          <ul className="hidden flex-1 items-center justify-center gap-1 md:flex">
            {navMenus.map((item, i) => (
              <li key={item.label}>
                <a
                  href="#"
                  onMouseEnter={() => handleEnter(i)}
                  className={`rounded-md px-3 py-1.5 text-[0.78rem] no-underline transition-colors ${
                    hoveredIndex === i ? "text-white" : "text-white/80 hover:text-white"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="hidden items-center gap-1 md:flex">
            <a href="#" aria-label="검색" className="rounded-md px-2 py-1.5 text-white/80 transition-colors hover:text-white">
              <SearchIcon />
            </a>
            <a href="#" aria-label="장바구니" className="rounded-md px-2 py-1.5 text-white/80 transition-colors hover:text-white">
              <BagIcon />
            </a>
          </div>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="메뉴"
            className="text-white/90 md:hidden"
          >
            <MenuIcon open={mobileMenuOpen} />
          </button>
        </nav>

        <div
          className={`hidden overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.2,0.7,0.2,1)] md:block ${
            isOpen ? "max-h-[520px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          {currentMenu && (
            <div className="border-t border-white/10 bg-[rgba(22,22,23,0.92)] backdrop-blur-2xl">
              <div className="mx-auto max-w-[1024px] px-10 py-8">
                <div className="flex flex-wrap gap-x-10 gap-y-6">
                  {currentMenu.sections.map((section) => (
                    <div key={section.heading} className="min-w-[140px]">
                      <h4 className="m-0 mb-3 text-[0.7rem] font-semibold text-white/40">{section.heading}</h4>
                      <ul className="flex flex-col gap-2 p-0">
                        {section.links.map((link) => (
                          <li key={link}>
                            <a href="#" className="text-[0.82rem] text-white/80 no-underline transition-colors hover:text-white hover:underline">
                              {link}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {mobileMenuOpen && (
          <div className="border-t border-white/10 bg-[rgba(22,22,23,0.95)] px-5 py-4 md:hidden">
            <ul className="flex flex-col gap-1">
              {navMenus.map((item) => (
                <li key={item.label}>
                  <a
                    href="#"
                    className="block rounded-md px-3 py-2.5 text-[0.95rem] text-white/80 no-underline transition-colors hover:bg-white/10 hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>
    </>
  );
}

function SectionHeading({ id, title, subtitle }: { id: string; title: string; subtitle: string }) {
  return (
    <section id={id} className="mx-auto max-w-[1400px] px-5 py-12 md:px-10">
      <h2 className="m-0 text-[2rem] font-bold tracking-[-0.02em] md:text-[2.8rem]">{title}</h2>
      <p className="mt-2 text-[1.05rem] text-[#6e6e73]">{subtitle}</p>
    </section>
  );
}

function FeatureGrid({ cards }: { cards: FeatureCard[] }) {
  return (
    <div className="mx-auto max-w-[1400px] px-5 pb-4 md:px-10">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((card) => (
          <FeatureCardItem key={card.title} card={card} />
        ))}
      </div>
    </div>
  );
}

function FeatureCardItem({ card }: { card: FeatureCard }) {
  return (
    <article
      className="group flex min-h-[340px] flex-col overflow-hidden rounded-[18px] p-6 transition-[transform,box-shadow] duration-300 ease-[cubic-bezier(0.2,0.7,0.2,1)] hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.18)]"
      style={{ background: card.bg }}
    >
      <h3 className={`m-0 text-[1.3rem] font-semibold tracking-[-0.01em] ${card.dark ? "text-white" : "text-[#1d1d1f]"}`}>
        {card.title}
      </h3>
      <p className={`mt-1.5 text-[0.92rem] leading-[1.4] ${card.dark ? "text-white/70" : "text-[#6e6e73]"}`}>
        {card.subtitle}
      </p>
      <div className="mt-auto flex h-[160px] items-center justify-center pt-4">
        <img
          src={card.image}
          alt={card.title}
          loading="lazy"
          className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>
    </article>
  );
}

function ProductCard({ product: p, onClick }: { product: Product; onClick?: () => void }) {
  return (
    <article
      className="flex w-[78vw] cursor-pointer flex-none snap-start flex-col rounded-[18px] bg-white p-7 shadow-[0_1px_3px_rgba(0,0,0,0.04)] transition-[transform,box-shadow] duration-300 ease-[cubic-bezier(0.2,0.7,0.2,1)] hover:-translate-y-2 hover:shadow-[0_18px_40px_rgba(0,0,0,0.14)] sm:w-[340px]"
      onClick={onClick}
    >
      <p className="m-0 mb-1.5 min-h-[1em] text-[0.78rem] font-semibold tracking-[0.02em] text-[#b64400]">
        {p.isNew ? "NEW" : ""}
      </p>
      <h3 className="m-0 text-[1.55rem] font-semibold tracking-[-0.01em]">{p.name}</h3>
      <div className="my-1 flex aspect-square items-center justify-center">
        <img
          src={p.image}
          alt={`${p.name} 제품 이미지`}
          loading="lazy"
          className="max-h-full max-w-full object-contain"
        />
      </div>
      <div className="mb-5 flex min-h-3 justify-center gap-2" aria-hidden="true">
        {p.dots?.map((c, di) => (
          <span
            key={di}
            className="h-[11px] w-[11px] rounded-full shadow-[inset_0_0_0_1px_rgba(0,0,0,0.12)]"
            style={{ background: c }}
          />
        ))}
      </div>
      <div className="mt-auto flex items-center justify-between gap-3">
        <span className="text-[0.9rem] font-medium text-[#1d1d1f]">{p.price}</span>
        <button
          type="button"
          className="cursor-pointer rounded-full border-none bg-[#0071e3] px-[18px] py-[9px] text-[0.9rem] font-medium text-white transition-colors hover:bg-[#0077ed] active:scale-95"
        >
          {p.cta}
        </button>
      </div>
    </article>
  );
}

function AccessoryIntroCard() {
  return (
    <article className="flex h-[328px] w-[260px] flex-none snap-start flex-col overflow-hidden rounded-[16px] bg-white shadow-[0_1px_3px_rgba(0,0,0,0.08)] sm:w-[260px]">
      <div className="px-5 pt-7">
        <h3 className="m-0 text-[1.08rem] font-semibold">Mac을 최대한 활용하는 법.</h3>
      </div>
      <div className="relative mt-auto h-[235px] overflow-hidden bg-[#f1f1f3]">
        <div className="absolute left-[-18px] top-[84px] h-[112px] w-[230px] rounded-[8px] border-[5px] border-[#262626] bg-gradient-to-br from-[#ff4f86] via-[#ffb52e] to-[#465eff] shadow-[0_8px_16px_rgba(0,0,0,0.2)]" />
        <div className="absolute bottom-[20px] left-[18px] h-[48px] w-[116px] rounded-[5px] bg-[#1d1d1f] shadow-lg" />
        <div className="absolute bottom-[14px] right-[24px] h-[74px] w-[39px] rounded-[20px] bg-[#222] shadow-lg" />
        <div className="absolute bottom-[20px] right-[72px] h-[42px] w-[66px] rounded-[4px] bg-[#303033] shadow-lg" />
      </div>
    </article>
  );
}

function AccessoryCard({ accessory }: { accessory: Accessory }) {
  return (
    <article className="flex h-[328px] w-[200px] flex-none snap-start flex-col rounded-[16px] bg-white p-5 shadow-[0_1px_3px_rgba(0,0,0,0.08)] transition-[transform,box-shadow] duration-300 hover:-translate-y-2 hover:shadow-[0_18px_36px_rgba(0,0,0,0.12)] sm:w-[205px]">
      <p className={`m-0 min-h-[1.05rem] text-[0.68rem] font-semibold ${accessory.badge ? "text-[#b64400]" : "text-transparent"}`}>
        {accessory.badge ?? "-"}
      </p>
      <div className="flex h-[148px] items-center justify-center py-2">
        <img src={accessory.image} alt={`${accessory.name} 제품 이미지`} loading="lazy" className="h-full w-full object-contain mix-blend-multiply" />
      </div>
      <div className="mb-3 flex justify-center gap-2" aria-hidden="true">
        <span className="h-2 w-2 rounded-full bg-[#f2f2f2] shadow-[inset_0_0_0_1px_rgba(0,0,0,0.1)]" />
        <span className="h-2 w-2 rounded-full bg-[#333] shadow-[inset_0_0_0_1px_rgba(0,0,0,0.1)]" />
      </div>
      <h3 className="m-0 line-clamp-3 text-[0.82rem] font-medium leading-[1.45]">{accessory.name}</h3>
      <p className="mt-auto mb-0 text-[0.78rem] font-medium text-[#6e6e73]">{accessory.price}</p>
    </article>
  );
}

function PromoCard({ title, description, cta }: { title: string; description: string; cta: string }) {
  return (
    <article className="flex flex-col rounded-[18px] bg-white p-7 shadow-[0_1px_3px_rgba(0,0,0,0.04)] transition-[transform,box-shadow] duration-300 hover:-translate-y-1.5 hover:shadow-[0_18px_40px_rgba(0,0,0,0.12)]">
      <h3 className="m-0 text-[1.3rem] font-semibold tracking-[-0.01em]">{title}</h3>
      <p className="mt-2 text-[0.95rem] leading-[1.45] text-[#6e6e73]">{description}</p>
      <a
        href="#"
        className="mt-auto inline-block w-fit rounded-full bg-[#0071e3] px-5 py-2.5 pt-3 text-[0.9rem] font-medium text-white no-underline transition-colors hover:bg-[#0077ed]"
      >
        {cta}
      </a>
    </article>
  );
}

function SiteFooter({ sections }: { sections: { title: string; links: string[] }[] }) {
  return (
    <footer className="bg-[#f5f5f7] text-[#6e6e73]">
      <div className="mx-auto max-w-[1400px] px-5 py-10 md:px-10">
        <div className="border-t border-[#d2d2d7] pt-8">
          <p className="mb-6 text-[0.78rem] leading-[1.5]">
            다양한 쇼핑 방법: <a href="#" className="text-[#0071e3] no-underline hover:underline">Apple Store를 방문</a>하거나, <a href="#" className="text-[#0071e3] no-underline hover:underline">리셀러</a>를 찾아보거나, 080-330-8877번으로 전화하세요.
          </p>
          <div className="grid grid-cols-2 gap-6 border-t border-[#d2d2d7] pt-8 md:grid-cols-3 lg:grid-cols-5">
            {sections.map((section) => (
              <div key={section.title}>
                <h4 className="m-0 mb-3 text-[0.78rem] font-semibold text-[#1d1d1f]">{section.title}</h4>
                <ul className="flex flex-col gap-2 p-0">
                  {section.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-[0.75rem] text-[#6e6e73] no-underline transition-colors hover:text-[#1d1d1f] hover:underline">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-col gap-2 border-t border-[#d2d2d7] pt-6 text-[0.75rem] md:flex-row md:items-center md:justify-between">
            <p className="m-0">Copyright © 2026 Apple Inc. 모든 권리 보유.</p>
            <div className="flex flex-wrap gap-4">
              <a href="#" className="no-underline transition-colors hover:text-[#1d1d1f] hover:underline">개인정보 처리방침</a>
              <a href="#" className="no-underline transition-colors hover:text-[#1d1d1f] hover:underline">이용약관</a>
              <a href="#" className="no-underline transition-colors hover:text-[#1d1d1f] hover:underline">판매약관</a>
              <a href="#" className="no-underline transition-colors hover:text-[#1d1d1f] hover:underline">법적 고지</a>
              <a href="#" className="no-underline transition-colors hover:text-[#1d1d1f] hover:underline">사이트 맵</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function Chevron({ dir }: { dir: "left" | "right" }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points={dir === "left" ? "15 18 9 12 15 6" : "9 18 15 12 9 6"} />
    </svg>
  );
}

function AppleLogo() {
  return (
    <svg width="16" height="18" viewBox="0 0 16 18" fill="currentColor" aria-hidden="true">
      <path d="M13.5 9.4c0-2.3 1.9-3.4 2-3.5-1.1-1.6-2.8-1.8-3.4-1.9-1.5-.1-2.8.9-3.6.9-.7 0-1.9-.8-3.1-.8C3.7 4.1 2 5.1 1.1 6.7c-1.8 3.1-.5 7.7 1.3 10.2.9 1.2 1.9 2.6 3.2 2.6 1.3-.1 1.7-.8 3.3-.8s1.9.8 3.3.8c1.3 0 2.2-1.3 3.1-2.5.9-1.4 1.3-2.7 1.3-2.8-.1 0-2.5-1-2.5-3.8zM11.2 2.7c.7-.8 1.2-2 1-3.2-1 .1-2.2.7-2.9 1.5-.7.7-1.2 1.9-1.1 3 1.1.1 2.3-.5 3-1.3z" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="11" cy="11" r="7" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

function BagIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <path d="M16 10a4 4 0 01-8 0" />
    </svg>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  return open ? (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  ) : (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}
