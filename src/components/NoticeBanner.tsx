import React, { useState, useEffect } from "react";
import { AlertTriangle, Clock, ShieldCheck } from "lucide-react";
import { motion } from "motion/react";

export default function NoticeBanner() {
  const [timeLeft, setTimeLeft] = useState(599); // 9:59 duration

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <div id="notice-banner-root" className="w-full">
      {/* Real-time UTC & Purchase Confirmation Bar */}
      <div className="bg-emerald-950 text-emerald-300 py-2.5 px-4 text-xs font-mono text-center flex flex-wrap items-center justify-center gap-2 border-b border-emerald-800">
        <span className="flex items-center gap-1.5">
          <ShieldCheck className="w-4 h-4 text-emerald-400 animate-pulse" />
          <span className="font-bold text-emerald-100">PEDIDO PRINCIPAL APROVADO:</span> Slides Educativos em Inglês garantidos!
        </span>
        <span className="hidden md:inline text-emerald-600">|</span>
        <span>Abaixo está o seu passo complementar exclusivo.</span>
      </div>

      {/* Ticking Urgency Countdown notice */}
      <div className="bg-amber-500 text-amber-950 font-sans font-medium text-xs sm:text-sm py-2 px-4 shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-4.5 h-4.5 animate-bounce shrink-0" />
            <p className="text-center sm:text-left">
              <strong>ATENÇÃO:</strong> Esta é uma oportunidade única pós-compra. Se sair desta página, não poderá adquirir este material por este valor promocional.
            </p>
          </div>
          <div className="flex items-center gap-2 bg-amber-600/30 px-3 py-1 rounded-full text-amber-950 font-bold shrink-0 font-mono">
            <Clock className="w-4 h-4" />
            <span>OFERTA EXPIRA EM: {formatTime(timeLeft)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
