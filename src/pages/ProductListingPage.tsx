import { useMemo, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Search, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { products, subcategories, brands } from "@/data/products";
import ProductPlate from "@/components/ProductPlate";

type SortKey = "standard" | "name" | "brand";

const sortOptions: { key: SortKey; label: string }[] = [
  { key: "standard", label: "기본 순서" },
  { key: "name", label: "모델명 (A-Z)" },
  { key: "brand", label: "브랜드순" },
];

const ITEMS_PER_PAGE = 12;

export default function ProductListingPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeSub = searchParams.get("sub") || "All";
  const activeBrand = searchParams.get("brand") || "전체";
  const searchQuery = searchParams.get("q") || "";
  const [sortKey, setSortKey] = useState<SortKey>("standard");
  const [page, setPage] = useState(1);
  const [searchInput, setSearchInput] = useState(searchQuery);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (activeSub !== "All") {
      result = result.filter((p) => p.subcategory === activeSub);
    }

    if (activeBrand !== "전체") {
      result = result.filter((p) => p.brand === activeBrand);
    }

    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.model.toLowerCase().includes(q) ||
          p.summary.toLowerCase().includes(q) ||
          p.subcategory.toLowerCase().includes(q)
      );
    }

    switch (sortKey) {
      case "name":
        result.sort((a, b) => a.model.localeCompare(b.model));
        break;
      case "brand":
        result.sort((a, b) => a.brand.localeCompare(b.brand));
        break;
    }

    return result;
  }, [activeSub, activeBrand, searchQuery, sortKey]);

  const brandsInView = useMemo(
    () => brands.filter((b) => products.some((p) => (activeSub === "All" || p.subcategory === activeSub) && p.brand === b.key)),
    [activeSub]
  );

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const paginatedProducts = filteredProducts.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  const handleSubcategoryChange = (sub: string) => {
    const next = new URLSearchParams(searchParams);
    if (sub === "All") next.delete("sub");
    else next.set("sub", sub);
    setSearchParams(next);
    setPage(1);
  };

  const handleBrandChange = (brand: string) => {
    const next = new URLSearchParams(searchParams);
    if (brand === "전체") next.delete("brand");
    else next.set("brand", brand);
    setSearchParams(next);
    setPage(1);
  };

  const handleSearch = (value: string) => {
    setSearchInput(value);
    const next = new URLSearchParams(searchParams);
    if (value) next.set("q", value);
    else next.delete("q");
    setSearchParams(next);
    setPage(1);
  };

  return (
    <div className="min-h-screen bg-[#f5f5f7]" style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "SF Pro Display", "Apple SD Gothic Neo", "Pretendard", sans-serif' }}>
      {/* Hero Banner */}
      <section className="bg-white pb-12 pt-16 text-center md:pt-24">
        <div className="mx-auto max-w-[1200px] px-6">
          <nav className="mb-6 flex items-center justify-center gap-2 text-[0.78rem] text-[#6e6e73]">
            <Link to="/" className="no-underline hover:text-[#1d1d1f] hover:underline">홈</Link>
            <span>›</span>
            <span className="font-medium text-[#1d1d1f]">제품소개</span>
          </nav>
          <h1 className="m-0 text-[2.8rem] font-bold tracking-[-0.03em] text-[#1d1d1f] md:text-[4rem]">
            제품소개
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-[1.1rem] text-[#6e6e73] md:text-[1.2rem]">
            카테고리와 브랜드별로 모아봤습니다. 정식 출시 전 준비중인 라인업입니다.
          </p>
        </div>
      </section>

      {/* Filter & Sort Bar */}
      <section className="sticky top-[57px] z-30 border-b border-gray-200/80 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto max-w-[1200px] px-6 py-4">
          <div className="flex flex-col gap-3">
            {/* Category pills */}
            <div className="flex flex-wrap gap-2">
              <PillButton active={activeSub === "All" || !activeSub} onClick={() => handleSubcategoryChange("All")}>
                전체
              </PillButton>
              {subcategories.map((sub) => (
                <PillButton key={sub.key} active={activeSub === sub.key} onClick={() => handleSubcategoryChange(sub.key)}>
                  {sub.label}
                </PillButton>
              ))}
            </div>

            <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
              {/* Brand pills */}
              <div className="flex flex-wrap gap-2">
                <PillButton small active={activeBrand === "전체"} onClick={() => handleBrandChange("전체")}>
                  전체 브랜드
                </PillButton>
                {brandsInView.map((b) => (
                  <PillButton small key={b.key} active={activeBrand === b.key} onClick={() => handleBrandChange(b.key)}>
                    {b.label}
                  </PillButton>
                ))}
              </div>

              <div className="flex items-center gap-3">
                <div className="relative flex items-center">
                  <Search size={16} className="pointer-events-none absolute left-3 text-gray-400" />
                  <input
                    type="text"
                    value={searchInput}
                    onChange={(e) => handleSearch(e.target.value)}
                    placeholder="모델명 검색..."
                    className="w-full rounded-full border border-gray-200 bg-white py-2 pl-9 pr-4 text-[0.82rem] text-[#1d1d1f] outline-none transition-colors placeholder:text-gray-400 focus:border-[#0071e3] lg:w-[200px]"
                  />
                </div>

                <select
                  value={sortKey}
                  onChange={(e) => setSortKey(e.target.value as SortKey)}
                  className="cursor-pointer rounded-full border border-gray-200 bg-white py-2 pl-4 pr-8 text-[0.82rem] font-medium text-[#1d1d1f] outline-none transition-colors focus:border-[#0071e3]"
                >
                  {sortOptions.map((opt) => (
                    <option key={opt.key} value={opt.key}>{opt.label}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="mx-auto max-w-[1200px] px-6 py-12">
        <p className="mb-6 text-[0.82rem] text-[#6e6e73]">{filteredProducts.length}개 품목</p>

        {paginatedProducts.length === 0 ? (
          <div className="py-20 text-center">
            <p className="m-0 text-[1.1rem] text-[#6e6e73]">조건에 맞는 제품이 없습니다. 필터를 조정해 보세요.</p>
          </div>
        ) : (
          <motion.div layout className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {paginatedProducts.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </motion.div>
        )}

        {totalPages > 1 && (
          <div className="mt-12 flex items-center justify-center gap-2">
            <button
              type="button"
              onClick={() => setPage(Math.max(1, page - 1))}
              disabled={page === 1}
              aria-label="이전 페이지"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white text-[#1d1d1f] transition-colors hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40"
            >
              <ChevronLeft size={16} />
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <button
                key={p}
                type="button"
                onClick={() => setPage(p)}
                className={`flex h-9 w-9 items-center justify-center rounded-full text-[0.82rem] font-medium transition-colors ${
                  p === page ? "bg-[#1d1d1f] text-white" : "border border-gray-200 bg-white text-[#1d1d1f] hover:bg-gray-50"
                }`}
              >
                {p}
              </button>
            ))}
            <button
              type="button"
              onClick={() => setPage(Math.min(totalPages, page + 1))}
              disabled={page === totalPages}
              aria-label="다음 페이지"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white text-[#1d1d1f] transition-colors hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        )}
      </section>
    </div>
  );
}

function PillButton({ active, onClick, children, small }: { active: boolean; onClick: () => void; children: React.ReactNode; small?: boolean }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`cursor-pointer rounded-full border font-medium transition-all ${small ? "px-3 py-1.5 text-[0.76rem]" : "px-4 py-2 text-[0.82rem]"} ${
        active ? "border-[#1d1d1f] bg-[#1d1d1f] text-white" : "border-gray-200 bg-white text-[#1d1d1f] hover:border-gray-300 hover:bg-gray-50"
      }`}
    >
      {children}
    </button>
  );
}

function ProductCard({ product, index }: { product: typeof products[number]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05, ease: [0.2, 0.7, 0.2, 1] }}
    >
      <Link to={`/product/professional-loud-speaker/${product.id}`} className="block no-underline">
        <article className="group flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
          <div className="mb-4 flex items-center justify-between">
            <span className="rounded-full bg-[#f5f5f7] px-3 py-1 text-[0.68rem] font-medium text-[#6e6e73]">
              {product.subcategory}
            </span>
          </div>

          <div className="mb-5 h-[160px]">
            <ProductPlate model={product.model} brand={product.brand} />
          </div>

          <h3 className="m-0 text-[1.1rem] font-bold tracking-[-0.01em] text-[#1d1d1f]">{product.model}</h3>
          <p className="mt-1.5 line-clamp-2 text-[0.8rem] leading-[1.45] text-[#6e6e73]">{product.summary}</p>

          <div className="mt-4 flex flex-wrap gap-2">
            <SpecChip label="브랜드" value={product.brand} />
            <SpecChip label="사양" value={product.specTag} />
          </div>

          <div className="mt-5 flex items-center gap-1 text-[0.85rem] font-medium text-[#0071e3]">
            자세히 보기
            <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </article>
      </Link>
    </motion.div>
  );
}

function SpecChip({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center gap-1 rounded-lg bg-[#f5f5f7] px-2.5 py-1.5">
      <span className="text-[0.68rem] text-[#86868b]">{label}</span>
      <span className="text-[0.72rem] font-semibold text-[#1d1d1f]">{value}</span>
    </div>
  );
}
