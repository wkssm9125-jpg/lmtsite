import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check, Send } from "lucide-react";

type Props = {
  open: boolean;
  onClose: () => void;
  model: string;
};

export default function InquiryModal({ open, onClose, model }: Props) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    company: "",
    name: "",
    email: "",
    phone: "",
    quantity: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    setForm({ company: "", name: "", email: "", phone: "", quantity: "", message: "" });
    onClose();
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/40 p-4"
          onClick={handleClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ duration: 0.25, ease: [0.2, 0.7, 0.2, 1] }}
            className="w-full max-w-[480px] rounded-2xl bg-white p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {submitted ? (
              <div className="flex flex-col items-center py-8 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-50">
                  <Check size={32} className="text-green-600" />
                </div>
                <h3 className="m-0 mt-5 text-[1.3rem] font-semibold text-[#1d1d1f]">문의가 접수되었습니다</h3>
                <p className="mt-2 text-[0.92rem] text-[#6e6e73]">
                  {model}에 관심 가져주셔서 감사합니다. 담당자가 영업일 기준 2일 이내에 연락드리겠습니다.
                </p>
                <button
                  type="button"
                  onClick={handleClose}
                  className="mt-6 cursor-pointer rounded-full bg-[#0071e3] px-6 py-2.5 text-[0.92rem] font-medium text-white border-none transition-colors hover:bg-[#0077ed]"
                >
                  확인
                </button>
              </div>
            ) : (
              <>
                <div className="mb-6 flex items-start justify-between">
                  <div>
                    <h3 className="m-0 text-[1.3rem] font-semibold tracking-[-0.01em] text-[#1d1d1f]">
                      제품 문의하기
                    </h3>
                    <p className="mt-1 text-[0.88rem] text-[#6e6e73]">{model}</p>
                  </div>
                  <button
                    type="button"
                    onClick={handleClose}
                    className="flex h-8 w-8 flex-none items-center justify-center rounded-full text-gray-400 transition-colors hover:bg-gray-100 hover:text-[#1d1d1f]"
                  >
                    <X size={18} />
                  </button>
                </div>
                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                  <div className="grid grid-cols-2 gap-3">
                    <Input
                      label="회사명"
                      value={form.company}
                      onChange={(v) => setForm({ ...form, company: v })}
                      required
                    />
                    <Input
                      label="담당자명"
                      value={form.name}
                      onChange={(v) => setForm({ ...form, name: v })}
                      required
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <Input
                      label="이메일"
                      type="email"
                      value={form.email}
                      onChange={(v) => setForm({ ...form, email: v })}
                      required
                    />
                    <Input
                      label="연락처"
                      value={form.phone}
                      onChange={(v) => setForm({ ...form, phone: v })}
                    />
                  </div>
                  <Input
                    label="예상 수량"
                    value={form.quantity}
                    onChange={(v) => setForm({ ...form, quantity: v })}
                    placeholder="예: 100개"
                  />
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[0.82rem] font-medium text-[#1d1d1f]">문의 내용</label>
                    <textarea
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      rows={3}
                      className="resize-none rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-[0.9rem] text-[#1d1d1f] outline-none transition-colors placeholder:text-gray-400 focus:border-[#0071e3]"
                      placeholder="설치 공간, 용도, 희망 일정 등을 알려주세요"
                    />
                  </div>
                  <button
                    type="submit"
                    className="mt-2 flex cursor-pointer items-center justify-center gap-2 rounded-full bg-[#0071e3] py-3 text-[0.95rem] font-medium text-white border-none transition-colors hover:bg-[#0077ed] active:scale-[0.98]"
                  >
                    <Send size={16} />
                    문의 보내기
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Input({
  label,
  value,
  onChange,
  type = "text",
  required = false,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[0.82rem] font-medium text-[#1d1d1f]">
        {label} {required && <span className="text-[#0071e3]">*</span>}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        placeholder={placeholder}
        className="rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-[0.9rem] text-[#1d1d1f] outline-none transition-colors placeholder:text-gray-400 focus:border-[#0071e3]"
      />
    </div>
  );
}
