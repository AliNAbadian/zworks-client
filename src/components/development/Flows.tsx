"use client";
import { motion } from "framer-motion";

const steps = [
  { title: "تعریف اهداف", color: "from-emerald-500/30 to-emerald-500/5" },
  { title: "تحلیل و بررسی", color: "from-gray-400/40 to-transparent" },
  { title: "انتخاب فناوری‌ها", color: "from-gray-400/40 to-transparent" },
  { title: "طراحی خلاقانه", color: "from-gray-400/40 to-transparent" },
  { title: "توسعه‌ی قدرتمند", color: "from-gray-400/40 to-transparent" },
  { title: "راه‌اندازی و گسترش", color: "from-blue-500/30 to-blue-500/5" },
];

const FlowStep = ({ title, color }: { title: string; color: string }) => {
  return (
    <div className="relative flex flex-col items-center">
      {/* Radial Glow */}
      <div
        className={`absolute -top-6 w-32 h-32 rounded-full bg-gradient-radial ${color} blur-2xl`}
      />
      {/* Capsule */}
      <div className="relative z-10 px-6 py-2 rounded-full bg-black/60 backdrop-blur-md text-white shadow-lg">
        {title}
      </div>
    </div>
  );
};

const Arrow = () => {
  return (
    <svg className="w-32 h-24 -scale-x-100" fill="none" viewBox="0 0 200 100">
      <path
        d="M0,100 C50,0 150,0 200,100"
        stroke="#4ade80"
        strokeWidth="2"
        strokeDasharray="4 4"
        fill="none"
        markerEnd="url(#arrowhead)"
      />
      <defs>
        <marker
          id="arrowhead"
          markerWidth="8"
          markerHeight="8"
          refX="6"
          refY="3"
          orient="auto"
        >
          <path d="M0,0 L0,6 L6,3 z" fill="#4ade80" />
        </marker>
      </defs>
    </svg>
  );
};

export default function ProcessFlow() {
  return (
    <div className="flex items-center justify-center gap-4 bg-black py-20">
      {steps.map((step, i) => (
        <div key={i} className="flex items-center">
          <FlowStep title={step.title} color={step.color} />
          {i < steps.length - 1 && <Arrow />}
        </div>
      ))}
    </div>
  );
}
