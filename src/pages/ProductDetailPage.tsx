import { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { MessageSquare, ArrowRight } from "lucide-react";
import { getProductById, getRelatedProducts, getConnectorAccessories } from "@/data/products";
import ProductPlate from "@/components/ProductPlate";
import InquiryModal from "@/components/InquiryModal";

export default function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();
  const product = id ? getProductById(id) : undefined;
  const [inquiryOpen, setInquiryOpen] = useState(false);

  if (!product) {
    return <Navigate to="/product/professional-loud-speaker" replace />;
  }

  const related = getRelatedProducts(product, 4);
  const accessories = getConnectorAccessories(product);

  return (
    <div className="min-h-screen bg-[#f5f5f7]" style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "SF Pro Display", "Apple SD Gothic Neo", "Pretendard", sans-serif' }}>
      {/* Breadcrumbs */}
      <div className="border-b border-gray-200/80 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto max-w-[1200px] px-6 py-3">
          <nav className="flex flex-wrap items-center gap-1.5 text-[0.78rem] text-[#6e6e73]">
            <Link to="/" className="no-underline hover:text-[#1d1d1f] hover:underline">홈</Link>
            <span>›</span>
            <Link to="/product/professional-loud-speaker" className="no-underline hover:text-[#1d1d1f] hover:underline">제품소개</Link>
            <span>›</span>
            <Link to={`/product/professional-loud-speaker?sub=${encodeURIComponent(product.subcategory)}`} className="no-underline hover:text-[#1d1d1f] hover:underline">
              {product.subcategory}
            </Link>
            <span>›</span>
            <span className="font-medium text-[#1d1d1f]">{product.model}</span>
          </nav>
        </div>
      </div>

      {/* Hero Showcase Split Layout */}
      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
            {/* Left: Plate */}
            <div className="flex-1">
              <div className="aspect-square">
                <ProductPlate model={product.model} brand={product.brand} />
              </div>
              <p className="mt-3 text-center text-[0.72rem] text-[#86868b]">
                실제 제품 사진은 준비되는 대로 교체됩니다.
              </p>
            </div>

            {/* Right: Product Info */}
            <div className="flex-1">
              <span className="inline-block rounded-full bg-[#f5f5f7] px-3 py-1 text-[0.72rem] font-medium text-[#6e6e73]">
                {product.subcategory}
              </span>
              <h1 className="m-0 mt-3 text-[2.4rem] font-bold tracking-[-0.03em] text-[#1d1d1f] md:text-[3rem]">
                {product.model}
              </h1>
              <p className="mt-3 max-w-md text-[1.05rem] leading-[1.5] text-[#6e6e73]">{product.summary}</p>

              {/* Highlight badges */}
              <div className="mt-6 flex flex-wrap gap-3">
                <div className="rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-[0.82rem] font-semibold text-[#1d1d1f]">
                  브랜드 · {product.brand}
                </div>
                <div className="rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-[0.82rem] font-semibold text-[#1d1d1f]">
                  {product.specTag}
                </div>
                {product.series && (
                  <div className="rounded-xl border border-[#0071e3]/30 bg-[#0071e3]/5 px-4 py-2.5 text-[0.82rem] font-semibold text-[#0071e3]">
                    시리즈 · {product.series}
                  </div>
                )}
              </div>

              {/* Action button */}
              <div className="mt-8 flex flex-col gap-3">
                <button
                  type="button"
                  onClick={() => setInquiryOpen(true)}
                  className="flex cursor-pointer items-center justify-center gap-2 rounded-full bg-[#0071e3] py-3.5 text-[0.95rem] font-medium text-white border-none transition-colors hover:bg-[#0077ed] active:scale-[0.98]"
                >
                  <MessageSquare size={18} />
                  이 제품 문의하기
                </button>
              </div>

              {/* Status */}
              <div className="mt-8 rounded-xl bg-[#f5f5f7] p-4">
                <p className="m-0 text-[0.78rem] text-[#86868b]">진행 상태</p>
                <p className="m-0 mt-1 text-[1.2rem] font-semibold text-[#1d1d1f]">준비중 — 정식 출시 전</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-16">
        <div className="mx-auto max-w-[1200px] px-6">
          <h2 className="m-0 mb-8 text-[2rem] font-bold tracking-[-0.02em] text-[#1d1d1f] md:text-[2.4rem]">
            제품 정보
          </h2>
          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
            <SpecTable
              specs={[
                { label: "브랜드", value: product.brand },
                { label: "카테고리", value: product.subcategory },
                ...(product.series ? [{ label: "시리즈", value: product.series }] : []),
                { label: "사양", value: product.specTag },
              ]}
            />
          </div>

          {product.specs && product.specs.length > 0 && (
            <div className="mt-8 overflow-hidden rounded-2xl border border-gray-200 bg-white">
              <div className="border-b border-gray-100 bg-[#f5f5f7] px-6 py-3">
                <h3 className="m-0 text-[0.92rem] font-semibold text-[#1d1d1f]">기술 사양</h3>
                <p className="m-0 mt-0.5 text-[0.72rem] text-[#86868b]">제품사양서(LIVO) 실측 기준</p>
              </div>
              <SpecTable specs={product.specs} />
            </div>
          )}
        </div>
      </section>

      {/* 같은 시리즈 관련 모델 */}
      {related.length > 0 && (
        <section className="bg-white py-16">
          <div className="mx-auto max-w-[1200px] px-6">
            <div className="mb-8 flex items-end justify-between">
              <h2 className="m-0 text-[2rem] font-bold tracking-[-0.02em] text-[#1d1d1f] md:text-[2.4rem]">
                {product.series ? `${product.series} 시리즈` : "같은 카테고리"}
              </h2>
              <Link
                to={`/product/professional-loud-speaker?sub=${encodeURIComponent(product.subcategory)}`}
                className="hidden items-center gap-1 text-[0.88rem] font-medium text-[#0071e3] no-underline hover:underline md:flex"
              >
                전체 보기 <ArrowRight size={14} />
              </Link>
            </div>
            <RelatedGrid items={related} />
          </div>
        </section>
      )}

      {/* 함께 쓰는 커넥터 (공통 액세서리) */}
      {accessories.length > 0 && (
        <section className="py-16">
          <div className="mx-auto max-w-[1200px] px-6">
            <div className="mb-8">
              <h2 className="m-0 text-[2rem] font-bold tracking-[-0.02em] text-[#1d1d1f] md:text-[2.4rem]">
                함께 쓰는 커넥터
              </h2>
              <p className="mt-2 text-[0.9rem] text-[#6e6e73]">
                시공 시 함께 필요한 공통 액세서리입니다. 특정 모델에 종속되지 않습니다.
              </p>
            </div>
            <RelatedGrid items={accessories} />
          </div>
        </section>
      )}

      <InquiryModal open={inquiryOpen} onClose={() => setInquiryOpen(false)} model={product.model} />
    </div>
  );
}

function RelatedGrid({ items }: { items: ReturnType<typeof getRelatedProducts> }) {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((rp, i) => (
        <motion.div key={rp.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: i * 0.05 }}>
          <Link to={`/product/professional-loud-speaker/${rp.id}`} className="block no-underline">
            <article className="group flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
              <div className="mb-4 h-[120px]">
                <ProductPlate model={rp.model} brand={rp.brand} compact />
              </div>
              <span className="mb-1 text-[0.68rem] font-medium text-[#6e6e73]">{rp.subcategory}</span>
              <h3 className="m-0 text-[1rem] font-bold text-[#1d1d1f]">{rp.model}</h3>
              <p className="mt-1 line-clamp-2 text-[0.78rem] leading-[1.4] text-[#6e6e73]">{rp.summary}</p>
              <div className="mt-3 flex items-center gap-1 text-[0.82rem] font-medium text-[#0071e3]">
                자세히 보기
                <ArrowRight size={12} className="transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </article>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}

function SpecTable({ specs }: { specs: { label: string; value: string }[] }) {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2">
        {specs.map((spec, i) => (
          <div
            key={spec.label}
            className={`flex items-center justify-between gap-4 px-6 py-3 ${i % 2 === 0 ? "bg-white" : "bg-[#fbfbfd]"} ${
              i < specs.length - (specs.length % 2 === 1 ? 1 : 2) ? "border-b border-gray-100" : ""
            } ${specs.length % 2 === 1 && i === specs.length - 1 ? "sm:col-span-2" : ""}`}
          >
            <span className="flex-none text-[0.85rem] text-[#6e6e73]">{spec.label}</span>
            <span className="text-right text-[0.85rem] font-medium text-[#1d1d1f]">{spec.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
