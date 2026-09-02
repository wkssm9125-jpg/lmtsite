import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Wrench, Headphones } from "lucide-react";
import { products, subcategories } from "@/data/products";
import ProductPlate from "@/components/ProductPlate";

export default function HomePage() {
  const featured = products.slice(0, 4);
  const featuredCategories = subcategories.slice(0, 4);

  return (
    <div className="min-h-screen bg-[#f5f5f7]" style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "SF Pro Display", "Apple SD Gothic Neo", "Pretendard", sans-serif' }}>
      {/* Hero */}
      <section className="bg-white py-20 text-center md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.2, 0.7, 0.2, 1] }}
            className="m-0 text-[2.8rem] font-bold tracking-[-0.03em] text-[#1d1d1f] md:text-[4.5rem]"
          >
            공간에 맞는 음향과 영상을
            <br />
            <span className="text-[#86868b]">가장 확실하게 짓는 방법.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.2, 0.7, 0.2, 1] }}
            className="mx-auto mt-6 max-w-2xl text-[1.15rem] leading-[1.5] text-[#6e6e73]"
          >
            학교, 관공서, 회의실, 공연장 등 다양한 공간을 대상으로 음향·영상 시스템 설계 및 설치를 수행하는
            르미디어텍입니다.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.2, 0.7, 0.2, 1] }}
            className="mt-8 flex flex-wrap justify-center gap-3"
          >
            <Link
              to="/product/professional-loud-speaker"
              className="rounded-full bg-[#0071e3] px-6 py-3 text-[0.95rem] font-medium text-white no-underline transition-colors hover:bg-[#0077ed]"
            >
              제품소개 보기
            </Link>
            <Link
              to="/support"
              className="rounded-full border border-gray-300 bg-white px-6 py-3 text-[0.95rem] font-medium text-[#1d1d1f] no-underline transition-colors hover:border-gray-400 hover:bg-gray-50"
            >
              견적 문의하기
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Feature highlights */}
      <section className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: Wrench, title: "현장 중심 실무 경험", desc: "도면이 아니라 현장에서 판단합니다. 총 6명 전원이 실무 인력입니다." },
            { icon: MapPin, title: "사용 목적에 맞춘 구축", desc: "강당인지 회의실인지에 따라 필요한 시스템이 다릅니다. 쓰실 용도부터 여쭙습니다." },
            { icon: Headphones, title: "철저한 사후관리", desc: "납품 후에도 담당자가 직접 응대합니다. 유지보수와 A/S를 외주로 넘기지 않습니다." },
          ].map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.08 }}
              className="rounded-2xl border border-gray-100 bg-white p-7"
            >
              <feature.icon size={28} className="text-[#0071e3]" />
              <h3 className="m-0 mt-4 text-[1.1rem] font-semibold text-[#1d1d1f]">{feature.title}</h3>
              <p className="mt-2 text-[0.85rem] leading-[1.5] text-[#6e6e73]">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured products */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="mb-8 flex items-end justify-between">
            <h2 className="m-0 text-[2rem] font-bold tracking-[-0.02em] text-[#1d1d1f] md:text-[2.4rem]">
              준비중인 제품
            </h2>
            <Link
              to="/product/professional-loud-speaker"
              className="hidden items-center gap-1 text-[0.88rem] font-medium text-[#0071e3] no-underline hover:underline md:flex"
            >
              전체 제품 보기 <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((product, i) => (
              <motion.div key={product.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: i * 0.05 }}>
                <Link to={`/product/professional-loud-speaker/${product.id}`} className="block no-underline">
                  <article className="group flex h-full flex-col rounded-2xl border border-gray-100 bg-[#fbfbfd] p-5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
                    <div className="mb-4 h-[150px]">
                      <ProductPlate model={product.model} brand={product.brand} />
                    </div>
                    <span className="mb-1 text-[0.68rem] font-medium text-[#6e6e73]">{product.subcategory}</span>
                    <h3 className="m-0 text-[1.05rem] font-bold text-[#1d1d1f]">{product.model}</h3>
                    <p className="mt-1 line-clamp-2 text-[0.78rem] leading-[1.4] text-[#6e6e73]">{product.summary}</p>
                    <div className="mt-3 flex items-center gap-1 text-[0.82rem] font-medium text-[#0071e3]">
                      자세히 보기
                      <ArrowRight size={12} className="transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </article>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Category showcase */}
      <section className="mx-auto max-w-[1200px] px-6 py-16">
        <h2 className="m-0 mb-8 text-[2rem] font-bold tracking-[-0.02em] text-[#1d1d1f] md:text-[2.4rem]">
          제품 카테고리
        </h2>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featuredCategories.map((sub, i) => {
            const sample = products.find((p) => p.subcategory === sub.key);
            const count = products.filter((p) => p.subcategory === sub.key).length;
            return (
              <motion.div key={sub.key} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: i * 0.05 }}>
                <Link to={`/product/professional-loud-speaker?sub=${encodeURIComponent(sub.key)}`} className="block no-underline">
                  <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
                    <div className="h-[160px]">
                      {sample && <ProductPlate model={sample.model} brand={sample.brand} compact />}
                    </div>
                    <div className="p-5">
                      <h3 className="m-0 text-[1.05rem] font-semibold text-[#1d1d1f]">{sub.label}</h3>
                      <p className="m-0 mt-1 text-[0.75rem] text-[#86868b]">{count}개 품목</p>
                      <div className="mt-2 flex items-center gap-1 text-[0.82rem] font-medium text-[#0071e3]">
                        모델 보기
                        <ArrowRight size={12} className="transition-transform duration-300 group-hover:translate-x-1" />
                      </div>
                    </div>
                  </article>
                </Link>
              </motion.div>
            );
          })}
        </div>
        <div className="mt-6 text-center">
          <Link to="/product/professional-loud-speaker" className="text-[0.88rem] font-medium text-[#0071e3] no-underline hover:underline">
            전체 {subcategories.length}개 카테고리 보기 →
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-[#1a1a2e] to-[#0f3460] p-12 text-center">
            <h2 className="m-0 text-[2rem] font-bold text-white md:text-[2.8rem]">
              현장에 맞는 구성이 필요하신가요?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[1.05rem] text-white/70">
              현장 방문 진단은 무료입니다. 도입 여부는 그다음에 정하셔도 됩니다.
            </p>
            <Link
              to="/support"
              className="mt-6 inline-block rounded-full bg-white px-6 py-3 text-[0.95rem] font-medium text-[#1d1d1f] no-underline transition-colors hover:bg-gray-100"
            >
              고객센터로 문의하기
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
