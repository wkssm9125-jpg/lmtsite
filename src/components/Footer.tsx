import { Link } from "react-router-dom";

const footerSections = [
  {
    title: "Products",
    links: [
      { label: "Sound Reinforcement", path: "/product/professional-loud-speaker?sub=Sound%20Reinforcement" },
      { label: "Subwoofers", path: "/product/professional-loud-speaker?sub=Subwoofers" },
      { label: "Coaxial", path: "/product/professional-loud-speaker?sub=Coaxial" },
      { label: "High-Frequency Drivers", path: "/product/professional-loud-speaker?sub=High-Frequency%20Drivers" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", path: "/about" },
      { label: "Technology", path: "/technology" },
      { label: "Downloads", path: "/downloads" },
      { label: "Contact", path: "/contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Spec Sheets", path: "/downloads" },
      { label: "CAD Files", path: "/downloads" },
      { label: "Support", path: "/contact" },
      { label: "Distributor Portal", path: "/contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#f5f5f7] text-[#6e6e73]">
      <div className="mx-auto max-w-[1200px] px-6 py-12">
        <div className="border-t border-[#d2d2d7] pt-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
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
              <h4 className="m-0 mb-3 text-[0.78rem] font-semibold text-[#1d1d1f]">Connect</h4>
              <ul className="flex flex-col gap-2 p-0">
                <li><a href="#" className="text-[0.75rem] text-[#6e6e73] no-underline transition-colors hover:text-[#1d1d1f] hover:underline">LinkedIn</a></li>
                <li><a href="#" className="text-[0.75rem] text-[#6e6e73] no-underline transition-colors hover:text-[#1d1d1f] hover:underline">YouTube</a></li>
                <li><a href="#" className="text-[0.75rem] text-[#6e6e73] no-underline transition-colors hover:text-[#1d1d1f] hover:underline">Industry News</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 flex flex-col gap-2 border-t border-[#d2d2d7] pt-6 text-[0.75rem] md:flex-row md:items-center md:justify-between">
            <p className="m-0">Copyright © 2026 Sammisound. All rights reserved.</p>
            <div className="flex flex-wrap gap-4">
              <a href="#" className="no-underline transition-colors hover:text-[#1d1d1f] hover:underline">Privacy Policy</a>
              <a href="#" className="no-underline transition-colors hover:text-[#1d1d1f] hover:underline">Terms of Use</a>
              <a href="#" className="no-underline transition-colors hover:text-[#1d1d1f] hover:underline">Legal Notice</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
