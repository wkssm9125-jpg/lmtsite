import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Search, X, Globe, ChevronDown } from "lucide-react";
import { subcategories } from "@/data/products";

type NavDropdown = {
  label: string;
  items: { name: string; path: string }[];
};

const navDropdowns: NavDropdown[] = [
  {
    label: "제품소개",
    items: subcategories.map((sub) => ({
      name: sub.label,
      path: `/product/professional-loud-speaker?sub=${encodeURIComponent(sub.key)}`,
    })),
  },
];

/* 아래 페이지는 아직 준비되지 않았습니다 — 클릭하면 홈으로 이동합니다 */
const simpleLinks = [
  { label: "회사소개", path: "/about" },
  { label: "적용사례", path: "/cases" },
  { label: "고객센터", path: "/support" },
  { label: "스토어", path: "/store" },
];

export default function GlobalNav() {
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleEnter = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setHoveredMenu(label);
  };

  const handleLeave = () => {
    closeTimer.current = setTimeout(() => setHoveredMenu(null), 150);
  };

  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };

  return (
    <>
      <header
        className="sticky top-0 z-50 border-b border-gray-200/80 bg-white/80 backdrop-blur-xl"
        onMouseLeave={handleLeave}
        onMouseEnter={cancelClose}
      >
        <nav className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-3">
          <Link to="/" className="flex items-center gap-2 text-[#1d1d1f] no-underline">
            <AudioLogo />
            <span className="text-[1.05rem] font-semibold tracking-[-0.02em]">르미디어텍</span>
          </Link>

          <ul className="hidden items-center gap-1 md:flex">
            {navDropdowns.map((dropdown) => (
              <li
                key={dropdown.label}
                onMouseEnter={() => handleEnter(dropdown.label)}
              >
                <button
                  type="button"
                  className="flex cursor-pointer items-center gap-1 rounded-lg px-3 py-2 text-[0.82rem] font-medium text-[#1d1d1f] no-underline transition-colors hover:text-[#0071e3]"
                >
                  {dropdown.label}
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${hoveredMenu === dropdown.label ? "rotate-180" : ""}`}
                  />
                </button>
              </li>
            ))}
            {simpleLinks.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.path}
                  className="rounded-lg px-3 py-2 text-[0.82rem] font-medium text-[#1d1d1f] no-underline transition-colors hover:text-[#0071e3]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              aria-label="Search"
              className="flex h-9 w-9 items-center justify-center rounded-full text-[#1d1d1f] transition-colors hover:bg-gray-100"
            >
              <Search size={18} />
            </button>
            <button
              type="button"
              aria-label="Language"
              className="hidden h-9 w-9 items-center justify-center rounded-full text-[#1d1d1f] transition-colors hover:bg-gray-100 md:flex"
            >
              <Globe size={18} />
            </button>
          </div>
        </nav>

        <div
          className={`hidden overflow-hidden border-t border-gray-100 transition-all duration-300 ease-[cubic-bezier(0.2,0.7,0.2,1)] md:block ${
            hoveredMenu ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          {hoveredMenu &&
            navDropdowns
              .filter((d) => d.label === hoveredMenu)
              .map((dropdown) => (
                <div key={dropdown.label} className="bg-white/95 backdrop-blur-xl">
                  <div className="mx-auto max-w-[1200px] px-6 py-6">
                    <div className="flex flex-wrap gap-x-12 gap-y-2">
                      {dropdown.items.map((item) => (
                        <Link
                          key={item.name}
                          to={item.path}
                          className="text-[0.88rem] font-medium text-[#1d1d1f] no-underline transition-colors hover:text-[#0071e3]"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </header>

      {searchOpen && (
        <div
          className="fixed inset-0 z-[60] flex items-start justify-center bg-black/20 pt-[15vh]"
          onClick={() => setSearchOpen(false)}
        >
          <div
            className="w-full max-w-[600px] rounded-2xl bg-white p-4 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 border-b border-gray-200 pb-3">
              <Search size={20} className="text-gray-400" />
              <input
                type="text"
                autoFocus
                placeholder="제품, 모델명, 사양 검색..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 border-none bg-transparent text-[1rem] text-[#1d1d1f] outline-none placeholder:text-gray-400"
              />
              <button
                type="button"
                onClick={() => setSearchOpen(false)}
                className="flex h-8 w-8 items-center justify-center rounded-full text-gray-400 transition-colors hover:bg-gray-100 hover:text-[#1d1d1f]"
              >
                <X size={18} />
              </button>
            </div>
            {searchQuery && (
              <div className="mt-3">
                <p className="mb-2 text-[0.75rem] font-medium text-gray-400">추천 검색</p>
                <Link
                  to={`/product/professional-loud-speaker?q=${encodeURIComponent(searchQuery)}`}
                  onClick={() => setSearchOpen(false)}
                  className="block rounded-lg px-3 py-2 text-[0.88rem] text-[#1d1d1f] no-underline transition-colors hover:bg-gray-100"
                >
                  제품소개에서 "{searchQuery}" 검색
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

function AudioLogo() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0071e3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 18v-6a9 3 0 0 1 18 0v6" />
      <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" />
      <path d="M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3" />
    </svg>
  );
}
