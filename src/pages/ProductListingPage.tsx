import { useMemo, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Search, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { products, subcategories, type Subcategory } from "@/data/products";

type SortKey = "standard" | "name" | "power" | "sensitivity";

const sortOptions: { key: SortKey; label: string }[] = [
  { key: "standard", label: "Standard Order" },
  { key: "name", label: "Model Name (A-Z)" },
  { key: "power", label: "Power Rating (W)" },
  { key: "sensitivity", label: "Sensitivity (dB)" },
];

const ITEMS_PER_PAGE = 8;

function parsePower(specs: { label: string; value: string }[]): number {
  const program = specs.find((s) => s.label === "Program Power");
  return program ? parseInt(program.value.replace(/\D/g, ""), 10) : 0;
}

function parseSensitivity(specs: { label: string; value: string }[]): number {
  const sens = specs.find((s) => s.label === "Sensitivity (1W/1m)");
  return sens ? parseInt(sens.value.replace(/\D/g, ""), 10) : 0;
}

export default function ProductListingPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeSub = searchParams.get("sub") || "All";
  const searchQuery = searchParams.get("q") || "";
  const [sortKey, setSortKey] = useState<SortKey>("standard");
  const [page, setPage] = useState(1);
  const [searchInput, setSearchInput] = useState(searchQuery);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (activeSub !== "All") {
      result = result.filter((p) => p.subcategory === activeSub);
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
      case "power":
        result.sort((a, b) => parsePower(b.generalSpecs) - parsePower(a.generalSpecs));
        break;
      case "sensitivity":
        result.sort((a, b) => parseSensitivity(b.generalSpecs) - parseSensitivity(a.generalSpecs));
        break;
    }

    return result;
  }, [activeSub, searchQuery, sortKey]);

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const paginatedProducts = filteredProducts.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  const handleSubcategoryChange = (sub: string) => {
    const next = new URLSearchParams(searchParams);
    if (sub === "All") {
      next.delete("sub");
    } else {
      next.set("sub", sub);
    }
    setSearchParams(next);
    setPage(1);
  };

  const handleSearch = (value: string) => {
    setSearchInput(value);
    const next = new URLSearchParams(searchParams);
    if (value) {
      next.set("q", value);
    } else {
      next.delete("q");
    }
    setSearchParams(next);
    setPage(1);
  };

  return (
    <div className="min-h-screen bg-[#f5f5f7]" style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif' }}>
      {/* Hero Banner */}
      <section className="bg-white pb-12 pt-16 text-center md:pt-24">
        <div className="mx-auto max-w-[1200px] px-6">
          <nav className="mb-6 flex items-center justify-center gap-2 text-[0.78rem] text-[#6e6e73]">
            <Link to="/" className="no-underline hover:text-[#1d1d1f] hover:underline">Home</Link>
            <span>›</span>
            <span>Products</span>
            <span>›</span>
            <span className="font-medium text-[#1d1d1f]">Professional Loudspeakers</span>
          </nav>
          <h1 className="m-0 text-[2.8rem] font-bold tracking-[-0.03em] text-[#1d1d1f] md:text-[4rem]">
            Professional Loudspeakers
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-[1.1rem] text-[#6e6e73] md:text-[1.2rem]">
            Precision acoustic engineering for demanding professional audio applications.
          </p>
        </div>
      </section>

      {/* Filter & Sort Bar */}
      <section className="sticky top-[57px] z-30 border-b border-gray-200/80 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto max-w-[1200px] px-6 py-4">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            {/* Subcategory pills */}
            <div className="flex flex-wrap gap-2">
              <PillButton active={activeSub === "All" || !activeSub} onClick={() => handleSubcategoryChange("All")}>
                All
              </PillButton>
              {subcategories.map((sub) => (
                <PillButton
                  key={sub.key}
                  active={activeSub === sub.key}
                  onClick={() => handleSubcategoryChange(sub.key)}
                >
                  {sub.label}
                </PillButton>
              ))}
            </div>

            <div className="flex items-center gap-3">
              {/* Search input */}
              <div className="relative flex items-center">
                <Search size={16} className="pointer-events-none absolute left-3 text-gray-400" />
                <input
                  type="text"
                  value={searchInput}
                  onChange={(e) => handleSearch(e.target.value)}
                  placeholder="Search models..."
                  className="w-full rounded-full border border-gray-200 bg-white py-2 pl-9 pr-4 text-[0.82rem] text-[#1d1d1f] outline-none transition-colors placeholder:text-gray-400 focus:border-[#0071e3] lg:w-[200px]"
                />
              </div>

              {/* Sort dropdown */}
              <select
                value={sortKey}
                onChange={(e) => setSortKey(e.target.value as SortKey)}
                className="cursor-pointer rounded-full border border-gray-200 bg-white py-2 pl-4 pr-8 text-[0.82rem] font-medium text-[#1d1d1f] outline-none transition-colors focus:border-[#0071e3]"
              >
                {sortOptions.map((opt) => (
                  <option key={opt.key} value={opt.key}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="mx-auto max-w-[1200px] px-6 py-12">
        <p className="mb-6 text-[0.82rem] text-[#6e6e73]">
          {filteredProducts.length} {filteredProducts.length === 1 ? "product" : "products"}
        </p>

        {paginatedProducts.length === 0 ? (
          <div className="py-20 text-center">
            <p className="m-0 text-[1.1rem] text-[#6e6e73]">No products found. Try adjusting your filters.</p>
          </div>
        ) : (
          <motion.div
            layout
            className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          >
            {paginatedProducts.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </motion.div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-12 flex items-center justify-center gap-2">
            <button
              type="button"
              onClick={() => setPage(Math.max(1, page - 1))}
              disabled={page === 1}
              aria-label="Previous page"
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
                  p === page
                    ? "bg-[#1d1d1f] text-white"
                    : "border border-gray-200 bg-white text-[#1d1d1f] hover:bg-gray-50"
                }`}
              >
                {p}
              </button>
            ))}
            <button
              type="button"
              onClick={() => setPage(Math.min(totalPages, page + 1))}
              disabled={page === totalPages}
              aria-label="Next page"
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

function PillButton({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`cursor-pointer rounded-full border px-4 py-2 text-[0.82rem] font-medium transition-all ${
        active
          ? "border-[#1d1d1f] bg-[#1d1d1f] text-white"
          : "border-gray-200 bg-white text-[#1d1d1f] hover:border-gray-300 hover:bg-gray-50"
      }`}
    >
      {children}
    </button>
  );
}

function ProductCard({ product, index }: { product: typeof products[number]; index: number }) {
  const powerSpec = product.generalSpecs.find((s) => s.label === "Program Power");
  const impedanceSpec = product.generalSpecs.find((s) => s.label === "Rated Impedance");
  const sensitivitySpec = product.generalSpecs.find((s) => s.label === "Sensitivity (1W/1m)");

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

          <div className="mb-5 flex h-[180px] items-center justify-center overflow-hidden rounded-xl bg-[#f5f5f7]">
            <img
              src={product.image}
              alt={`${product.model} professional loudspeaker`}
              loading="lazy"
              className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          <h3 className="m-0 text-[1.15rem] font-bold tracking-[-0.01em] text-[#1d1d1f]">
            {product.model}
          </h3>
          <p className="mt-1.5 line-clamp-2 text-[0.82rem] leading-[1.45] text-[#6e6e73]">
            {product.summary}
          </p>

          {/* Quick specs */}
          <div className="mt-4 flex flex-wrap gap-2">
            {powerSpec && <SpecChip label="Program" value={powerSpec.value} />}
            {impedanceSpec && <SpecChip label="Impedance" value={impedanceSpec.value} />}
            {sensitivitySpec && <SpecChip label="Sensitivity" value={sensitivitySpec.value} />}
          </div>

          <div className="mt-5 flex items-center gap-1 text-[0.85rem] font-medium text-[#0071e3]">
            View Specifications
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
