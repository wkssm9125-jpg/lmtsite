import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Volume2, Cpu, Ruler, Waves } from "lucide-react";
import { products, subcategories } from "@/data/products";

export default function HomePage() {
  const featured = products.slice(0, 4);

  return (
    <div className="min-h-screen bg-[#f5f5f7]" style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif' }}>
      {/* Hero */}
      <section className="bg-white py-20 text-center md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.2, 0.7, 0.2, 1] }}
            className="m-0 text-[2.8rem] font-bold tracking-[-0.03em] text-[#1d1d1f] md:text-[4.5rem]"
          >
            Professional Audio.
            <br />
            <span className="text-[#86868b]">Precision Engineered.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.2, 0.7, 0.2, 1] }}
            className="mx-auto mt-6 max-w-2xl text-[1.15rem] leading-[1.5] text-[#6e6e73]"
          >
            High-performance loudspeaker drivers and compression horns engineered for the world's most demanding sound reinforcement applications.
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
              Explore Products
            </Link>
            <Link
              to="/technology"
              className="rounded-full border border-gray-300 bg-white px-6 py-3 text-[0.95rem] font-medium text-[#1d1d1f] no-underline transition-colors hover:border-gray-400 hover:bg-gray-50"
            >
              Our Technology
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Feature highlights */}
      <section className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Volume2, title: "High SPL Output", desc: "Drivers rated up to 1500W program power with sensitivity exceeding 100 dB." },
            { icon: Cpu, title: "Ferrite & Neo Magnets", desc: "Optimized motor structures for maximum BL product and low distortion." },
            { icon: Waves, title: "Thiele-Small Tested", desc: "Every driver characterized with full T/S parameters for enclosure design." },
            { icon: Ruler, title: "CAD Files Available", desc: "2D blueprints and 3D CAD models for seamless integration into your cabinets." },
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
              Featured Drivers
            </h2>
            <Link
              to="/product/professional-loud-speaker"
              className="hidden items-center gap-1 text-[0.88rem] font-medium text-[#0071e3] no-underline hover:underline md:flex"
            >
              View All Products <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
              >
                <Link to={`/product/professional-loud-speaker/${product.id}`} className="block no-underline">
                  <article className="group flex h-full flex-col rounded-2xl border border-gray-100 bg-[#fbfbfd] p-5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
                    <div className="mb-4 flex h-[160px] items-center justify-center overflow-hidden rounded-xl bg-white">
                      <img
                        src={product.image}
                        alt={`${product.model} loudspeaker`}
                        loading="lazy"
                        className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <span className="mb-1 text-[0.68rem] font-medium text-[#6e6e73]">{product.subcategory}</span>
                    <h3 className="m-0 text-[1.05rem] font-bold text-[#1d1d1f]">{product.model}</h3>
                    <p className="mt-1 line-clamp-2 text-[0.78rem] leading-[1.4] text-[#6e6e73]">{product.summary}</p>
                    <div className="mt-3 flex items-center gap-1 text-[0.82rem] font-medium text-[#0071e3]">
                      View Specs
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
          Product Categories
        </h2>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {subcategories.map((sub, i) => {
            const sample = products.find((p) => p.subcategory === sub.key);
            return (
              <motion.div
                key={sub.key}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
              >
                <Link
                  to={`/product/professional-loud-speaker?sub=${encodeURIComponent(sub.key)}`}
                  className="block no-underline"
                >
                  <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
                    <div className="flex h-[180px] items-center justify-center bg-[#f5f5f7]">
                      {sample && (
                        <img
                          src={sample.image}
                          alt={sub.label}
                          loading="lazy"
                          className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-110"
                        />
                      )}
                    </div>
                    <div className="p-5">
                      <h3 className="m-0 text-[1.05rem] font-semibold text-[#1d1d1f]">{sub.label}</h3>
                      <div className="mt-2 flex items-center gap-1 text-[0.82rem] font-medium text-[#0071e3]">
                        Browse Models
                        <ArrowRight size={12} className="transition-transform duration-300 group-hover:translate-x-1" />
                      </div>
                    </div>
                  </article>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-[#1a1a2e] to-[#0f3460] p-12 text-center">
            <h2 className="m-0 text-[2rem] font-bold text-white md:text-[2.8rem]">
              Need a custom driver solution?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[1.05rem] text-white/70">
              Our engineering team works with OEMs and system integrators to develop purpose-built acoustic solutions.
            </p>
            <Link
              to="/contact"
              className="mt-6 inline-block rounded-full bg-white px-6 py-3 text-[0.95rem] font-medium text-[#1d1d1f] no-underline transition-colors hover:bg-gray-100"
            >
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
