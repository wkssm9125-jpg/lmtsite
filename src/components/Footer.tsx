import { Link } from "react-router-dom";
import { subcategories } from "@/data/products";

const footerSections = [
  {
    title: "제품소개",
    links: subcategories.slice(0, 5).map((s) => ({
      label: s.label,
      path: `/product/professional-loud-speaker?sub=${encodeURIComponent(s.key)}`,
    })),
  },
  {
    title: "회사",
    links: [
      { label: "회사소개", path: "/about" },
      { label: "적용사례", path: "/cases" },
      { label: "고객센터", path: "/support" },
      { label: "스토어", path: "/store" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#f5f5f7] text-[#6e6e73]">
      <div className="mx-auto max-w-[1200px] px-6 py-12">
        <div className="border-t border-[#d2d2d7] pt-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4">
            {footerSections.map((section) => (
              <div key={section.title}>
                <h4 className="m-0 mb-3 text-[0.78rem] font-semibold text-[#1d1d1f]">{section.title}</h4>
                <ul className="flex flex-col gap-2 p-0">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link to={link.path} className="text-[0.75rem] text-[#6e6e73] no-underline transition-colors hover:text-[#1d1d1f] hover:underline">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div>
              <h4 className="m-0 mb-3 text-[0.78rem] font-semibold text-[#1d1d1f]">연락처</h4>
              <ul className="flex flex-col gap-2 p-0">
                <li><a href="tel:0313181230" className="text-[0.75rem] text-[#6e6e73] no-underline transition-colors hover:text-[#1d1d1f] hover:underline">TEL 031-318-1230</a></li>
                <li><span className="text-[0.75rem] text-[#6e6e73]">FAX 031-317-1230</span></li>
                <li><a href="https://smartstore.naver.com/lemediateck" target="_blank" rel="noreferrer" className="text-[0.75rem] text-[#6e6e73] no-underline transition-colors hover:text-[#1d1d1f] hover:underline">네이버 스마트스토어</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 flex flex-col gap-2 border-t border-[#d2d2d7] pt-6 text-[0.72rem] md:flex-row md:items-center md:justify-between">
            <p className="m-0">
              르미디어텍(LE MEDIA TECH) · 경기도 시흥시 능곡서로 10, 더플렉스 지식산업센터 509호(능곡동)
            </p>
            <p className="m-0">Copyright © 2026 르미디어텍. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
