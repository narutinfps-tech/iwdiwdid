import React, { useState, useEffect } from "react";
import { Sparkles, ShoppingBag } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const SIMULATED_PROOFS = [
  { name: "Carla S. (Manaus/AM)", action: "adicionou as 500 dinâmicas ao pedido", time: "há 1 minuto" },
  { name: "Prof. Marcos (Campinas/SP)", action: "garantiu o kit Dynamics por R$37", time: "há 3 minutos" },
  { name: "Profª. Elaine (Salvador/BA)", action: "destravou as aulas do 8º e 9º ano", time: "há 5 minutos" },
  { name: "Sandra R. (Goiânia/GO)", action: "acessorizou os Slides de Inglês com sucesso", time: "há 12 minutos" },
  { name: "Prof. Vinícius (Curitiba/PR)", action: "deixou a aula de revisão mais leve com o kit", time: "há 15 minutos" },
  { name: "Amanda M. (Belo Horizonte/MG)", action: "economizou 5 horas de planejamento hoje", time: "há 20 minutos" }
];

export default function NotificationToast() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Show after 4 seconds initial delay
    const initialTimeout = setTimeout(() => {
      setVisible(true);
    }, 4000);

    // Dynamic rotation intervals
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % SIMULATED_PROOFS.length);
        setVisible(true);
      }, 800); // fade in transition delay
    }, 12000); // stay visible for 12 seconds

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  const current = SIMULATED_PROOFS[index];

  return (
    <div id="social-notifications-anchor" className="fixed bottom-4 left-4 z-50 max-w-sm pointer-events-none">
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
            className="bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-purple-100 flex items-center gap-3.5 pointer-events-auto"
          >
            <div className="w-10 h-10 rounded-full bg-indigo-50 border border-indigo-100 flex items-center justify-center shrink-0">
              <ShoppingBag className="w-5 h-5 text-indigo-600 animate-pulse" />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-800 flex items-center gap-1 font-sans">
                {current.name} <Sparkles className="w-3 h-3 text-amber-500 animate-spin" />
              </p>
              <p className="text-[11px] text-slate-500 font-normal leading-tight mt-0.5">
                {current.action}
              </p>
              <span className="text-[9px] text-slate-400 block font-mono mt-1">
                {current.time} • Verificado de forma independente
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
