import { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Download,
  FileText,
  MessageSquare,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Maximize2,
} from "lucide-react";
import { getProductById, getRelatedProducts } from "@/data/products";
import FrequencyResponseChart from "@/components/FrequencyResponseChart";
import InquiryModal from "@/components/InquiryModal";

type TabKey = "frequency" | "dimensions";

const galleryLabels = ["Front", "Back", "Angled", "Blueprint"];

export default function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();
  const product = id ? getProductById(id) : undefined;
  const [activeImage, setActiveImage] = useState(0);
  const [activeTab, setActiveTab] = useState<TabKey>("frequency");
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const [zoomOpen, setZoomOpen] = useState(false);

  if (!product) {
    return <Navigate to="/product/professional-loud-speaker" replace />;
  }

  const related = getRelatedProducts(product, 4);

  return (
    <div className="min-h-screen bg-[#f5f5f7]" style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif' }}>
      {/* Breadcrumbs */}
      <div className="border-b border-gray-200/80 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto max-w-[1200px] px-6 py-3">
          <nav className="flex items-center gap-1.5 text-[0.78rem] text-[#6e6e73]">
            <Link to="/" className="no-underline hover:text-[#1d1d1f] hover:underline">Home</Link>
            <span>›</span>
            <Link to="/product/professional-loud-speaker" className="no-underline hover:text-[#1d1d1f] hover:underline">Products</Link>
            <span>›</span>
            <Link to="/product/professional-loud-speaker" className="no-underline hover:text-[#1d1d1f] hover:underline">Professional Loudspeakers</Link>
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
            {/* Left: Image Gallery */}
            <div className="flex-1">
              <div className="relative">
                <div
                  className="flex aspect-square items-center justify-center overflow-hidden rounded-2xl bg-[#f5f5f7] cursor-zoom-in"
                  onClick={() => setZoomOpen(true)}
                >
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={activeImage}
                      src={product.gallery[activeImage]}
                      alt={`${product.model} ${galleryLabels[activeImage]} view`}
                      initial={{ opacity: 0, scale: 1.02 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="max-h-full max-w-full object-contain"
                    />
                  </AnimatePresence>
                </div>
                <button
                  type="button"
                  onClick={() => setZoomOpen(true)}
                  aria-label="Zoom image"
                  className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/80 text-[#1d1d1f] shadow-sm backdrop-blur-sm transition-colors hover:bg-white"
                >
                  <Maximize2 size={16} />
                </button>
              </div>

              {/* Thumbnails */}
              <div className="mt-4 flex gap-3">
                {product.gallery.map((img, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setActiveImage(i)}
                    className={`relative flex h-[80px] w-[80px] flex-none items-center justify-center overflow-hidden rounded-xl border-2 transition-all ${
                      activeImage === i
                        ? "border-[#0071e3]"
                        : "border-transparent opacity-70 hover:opacity-100"
                    }`}
                  >
                    <img src={img} alt={`${product.model} ${galleryLabels[i]}`} className="max-h-full max-w-full object-contain" />
                  </button>
                ))}
              </div>
              <div className="mt-2 flex gap-[88px] pl-1 text-[0.68rem] text-[#86868b]">
                {galleryLabels.map((label) => (
                  <span key={label}>{label}</span>
                ))}
              </div>
            </div>

            {/* Right: Product Info */}
            <div className="flex-1">
              <span className="inline-block rounded-full bg-[#f5f5f7] px-3 py-1 text-[0.72rem] font-medium text-[#6e6e73]">
                {product.subcategory}
              </span>
              <h1 className="m-0 mt-3 text-[2.4rem] font-bold tracking-[-0.03em] text-[#1d1d1f] md:text-[3rem]">
                {product.model}
              </h1>
              <p className="mt-3 max-w-md text-[1.05rem] leading-[1.5] text-[#6e6e73]">
                {product.summary}
              </p>

              {/* Highlight badges */}
              <div className="mt-6 flex flex-wrap gap-3">
                {product.badges.map((badge) => (
                  <div
                    key={badge}
                    className="rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-[0.82rem] font-semibold text-[#1d1d1f]"
                  >
                    {badge}
                  </div>
                ))}
              </div>

              {/* Action buttons */}
              <div className="mt-8 flex flex-col gap-3">
                <button
                  type="button"
                  className="flex cursor-pointer items-center justify-center gap-2 rounded-full bg-[#0071e3] py-3.5 text-[0.95rem] font-medium text-white border-none transition-colors hover:bg-[#0077ed] active:scale-[0.98]"
                >
                  <Download size={18} />
                  Download 2D/3D CAD
                </button>
                <button
                  type="button"
                  className="flex cursor-pointer items-center justify-center gap-2 rounded-full border border-gray-300 bg-white py-3.5 text-[0.95rem] font-medium text-[#1d1d1f] transition-colors hover:border-gray-400 hover:bg-gray-50 active:scale-[0.98]"
                >
                  <FileText size={18} />
                  Download Spec Sheet (PDF)
                </button>
                <button
                  type="button"
                  onClick={() => setInquiryOpen(true)}
                  className="flex cursor-pointer items-center justify-center gap-2 rounded-full border border-gray-300 bg-white py-3.5 text-[0.95rem] font-medium text-[#1d1d1f] transition-colors hover:border-gray-400 hover:bg-gray-50 active:scale-[0.98]"
                >
                  <MessageSquare size={18} />
                  Inquire About Model
                </button>
              </div>

              {/* Frequency range quick stat */}
              <div className="mt-8 rounded-xl bg-[#f5f5f7] p-4">
                <p className="m-0 text-[0.78rem] text-[#86868b]">Frequency Range</p>
                <p className="m-0 mt-1 text-[1.2rem] font-semibold text-[#1d1d1f]">{product.frequencyRange}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-16">
        <div className="mx-auto max-w-[1200px] px-6">
          <h2 className="m-0 mb-8 text-[2rem] font-bold tracking-[-0.02em] text-[#1d1d1f] md:text-[2.4rem]">
            Technical Specifications
          </h2>

          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
            <SpecTable title="General Specifications" specs={product.generalSpecs} />
            <SpecTable title="Thiele-Small Parameters" specs={product.thieleSmall} />
            <SpecTable title="Mounting & Shipping Information" specs={product.mounting} last />
          </div>
        </div>
      </section>

      {/* Engineering Curves & Drawings Tab */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-[1200px] px-6">
          <h2 className="m-0 mb-8 text-[2rem] font-bold tracking-[-0.02em] text-[#1d1d1f] md:text-[2.4rem]">
            Engineering Curves & Technical Drawings
          </h2>

          {/* Tab buttons */}
          <div className="mb-8 flex gap-2 border-b border-gray-200">
            <TabButton active={activeTab === "frequency"} onClick={() => setActiveTab("frequency")}>
              Frequency Response / Impedance Curve
            </TabButton>
            <TabButton active={activeTab === "dimensions"} onClick={() => setActiveTab("dimensions")}>
              Mechanical Dimensions (CAD Blueprint)
            </TabButton>
          </div>

          <AnimatePresence mode="wait">
            {activeTab === "frequency" ? (
              <motion.div
                key="frequency"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="rounded-2xl border border-gray-200 bg-white p-8"
              >
                <FrequencyResponseChart points={product.freqCurvePoints} />
                <p className="mt-4 text-center text-[0.82rem] text-[#86868b]">
                  On-axis frequency response measured at 1W/1m in an anechoic chamber.
                </p>
              </motion.div>
            ) : (
              <motion.div
                key="dimensions"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="rounded-2xl border border-gray-200 bg-white p-8"
              >
                <BlueprintView product={product} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-16">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="mb-8 flex items-end justify-between">
            <h2 className="m-0 text-[2rem] font-bold tracking-[-0.02em] text-[#1d1d1f] md:text-[2.4rem]">
              Related Products
            </h2>
            <Link
              to="/product/professional-loud-speaker"
              className="hidden items-center gap-1 text-[0.88rem] font-medium text-[#0071e3] no-underline hover:underline md:flex"
            >
              View All <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((rp, i) => (
              <motion.div
                key={rp.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
              >
                <Link to={`/product/professional-loud-speaker/${rp.id}`} className="block no-underline">
                  <article className="group flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
                    <div className="mb-4 flex h-[140px] items-center justify-center overflow-hidden rounded-xl bg-[#f5f5f7]">
                      <img
                        src={rp.image}
                        alt={`${rp.model} loudspeaker`}
                        loading="lazy"
                        className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <span className="mb-1 text-[0.68rem] font-medium text-[#6e6e73]">{rp.subcategory}</span>
                    <h3 className="m-0 text-[1rem] font-bold text-[#1d1d1f]">{rp.model}</h3>
                    <p className="mt-1 line-clamp-2 text-[0.78rem] leading-[1.4] text-[#6e6e73]">{rp.summary}</p>
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

      {/* Zoom Modal */}
      <AnimatePresence>
        {zoomOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-black/80 p-8"
            onClick={() => setZoomOpen(false)}
          >
            <button
              type="button"
              onClick={() => setZoomOpen(false)}
              className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            >
              <ChevronRight size={20} className="rotate-45" />
            </button>
            <motion.img
              src={product.gallery[activeImage]}
              alt={`${product.model} zoomed view`}
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="max-h-full max-w-full object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Inquiry Modal */}
      <InquiryModal open={inquiryOpen} onClose={() => setInquiryOpen(false)} model={product.model} />
    </div>
  );
}

function SpecTable({ title, specs, last }: { title: string; specs: { label: string; value: string }[]; last?: boolean }) {
  return (
    <div className={last ? "" : "border-b border-gray-200"}>
      <div className="border-b border-gray-100 bg-[#f5f5f7] px-6 py-3">
        <h3 className="m-0 text-[0.92rem] font-semibold text-[#1d1d1f]">{title}</h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2">
        {specs.map((spec, i) => (
          <div
            key={spec.label}
            className={`flex items-center justify-between px-6 py-3 ${
              i % 2 === 0 ? "bg-white" : "bg-[#fbfbfd]"
            } ${i < specs.length - 2 ? "border-b border-gray-100" : ""} ${
              specs.length % 2 === 1 && i === specs.length - 1 ? "sm:col-span-2" : ""
            }`}
          >
            <span className="text-[0.85rem] text-[#6e6e73]">{spec.label}</span>
            <span className="text-[0.85rem] font-medium text-[#1d1d1f]">{spec.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function TabButton({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`relative cursor-pointer border-none bg-transparent px-4 py-3 text-[0.88rem] font-medium transition-colors ${
        active ? "text-[#1d1d1f]" : "text-[#6e6e73] hover:text-[#1d1d1f]"
      }`}
    >
      {children}
      {active && (
        <motion.div
          layoutId="tab-underline"
          className="absolute inset-x-0 -bottom-px h-0.5 rounded-full bg-[#1d1d1f]"
        />
      )}
    </button>
  );
}

function BlueprintView({ product }: { product: { model: string; mounting: { label: string; value: string }[] } }) {
  const overallDiameter = product.mounting.find((s) => s.label === "Overall Diameter");
  const boltCircle = product.mounting.find((s) => s.label === "Bolt Circle Diameter");
  const depth = product.mounting.find((s) => s.label === "Mounting Depth");

  return (
    <div className="flex flex-col items-center">
      <svg viewBox="0 0 500 400" className="max-w-[500px]" role="img" aria-label="Mechanical dimension blueprint">
        {/* Outer circle */}
        <circle cx="250" cy="180" r="140" fill="none" stroke="#1d1d1f" strokeWidth="1.5" />
        {/* Bolt circle */}
        <circle cx="250" cy="180" r="125" fill="none" stroke="#86868b" strokeWidth="1" strokeDasharray="6 4" />
        {/* Inner cone */}
        <ellipse cx="250" cy="180" rx="100" ry="95" fill="#f5f5f7" stroke="#1d1d1f" strokeWidth="1" />
        <ellipse cx="250" cy="180" rx="55" ry="50" fill="none" stroke="#86868b" strokeWidth="0.8" />
        {/* Dust cap */}
        <ellipse cx="250" cy="180" rx="35" ry="30" fill="none" stroke="#1d1d1f" strokeWidth="1" />
        {/* Bolt holes */}
        {[0, 90, 180, 270].map((angle) => {
          const rad = (angle * Math.PI) / 180;
          const x = 250 + 125 * Math.cos(rad);
          const y = 180 + 125 * Math.sin(rad);
          return <circle key={angle} cx={x} cy={y} r="5" fill="none" stroke="#1d1d1f" strokeWidth="1" />;
        })}

        {/* Dimension lines */}
        <line x1="100" y1="350" x2="400" y2="350" stroke="#0071e3" strokeWidth="1" />
        <line x1="100" y1="345" x2="100" y2="355" stroke="#0071e3" strokeWidth="1" />
        <line x1="400" y1="345" x2="400" y2="355" stroke="#0071e3" strokeWidth="1" />
        <text x="250" y="370" textAnchor="middle" fontSize="12" fill="#0071e3" fontWeight="600">
          {overallDiameter?.value || "—"}
        </text>

        <line x1="440" y1="40" x2="440" y2="320" stroke="#0071e3" strokeWidth="1" />
        <line x1="435" y1="40" x2="445" y2="40" stroke="#0071e3" strokeWidth="1" />
        <line x1="435" y1="320" x2="445" y2="320" stroke="#0071e3" strokeWidth="1" />
        <text x="460" y="185" textAnchor="middle" fontSize="12" fill="#0071e3" fontWeight="600" transform="rotate(90 460 185)">
          {depth?.value || "—"}
        </text>

        <text x="250" y="180" textAnchor="middle" fontSize="14" fill="#86868b" fontWeight="600">
          {product.model}
        </text>
      </svg>

      <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
        {product.mounting.map((m) => (
          <div key={m.label} className="rounded-lg bg-[#f5f5f7] px-4 py-3 text-center">
            <p className="m-0 text-[0.72rem] text-[#86868b]">{m.label}</p>
            <p className="m-0 mt-1 text-[0.92rem] font-semibold text-[#1d1d1f]">{m.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
