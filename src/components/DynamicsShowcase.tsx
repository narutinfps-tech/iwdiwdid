import React, { useState } from "react";
import { DYNAMICS_LIST } from "../data";
import { DynamicItem } from "../types";
import { Gamepad2, GraduationCap, CheckCircle, Clock, FileText, ChevronRight, Sparkles, BookOpen } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function DynamicsShowcase() {
  const [selectedItem, setSelectedItem] = useState<DynamicItem>(DYNAMICS_LIST[0]);

  return (
    <div id="dynamics-showcase-root" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      {/* List of Dynamics (Tabs) */}
      <div className="lg:col-span-5 space-y-2 max-h-[580px] overflow-y-auto pr-2 custom-scrollbar">
        <p className="text-xs font-semibold uppercase tracking-wider text-purple-600 mb-3 px-1 flex items-center gap-1">
          <Gamepad2 className="w-4 h-4 text-purple-500" /> Clique nos exemplos abaixo para experimentar:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2">
          {DYNAMICS_LIST.map((dyn) => {
            const isSelected = selectedItem.id === dyn.id;
            return (
              <button
                key={dyn.id}
                onClick={() => setSelectedItem(dyn)}
                className={`w-full text-left p-3.5 rounded-2xl border text-sm transition-all ${
                  isSelected
                    ? "border-amber-400 bg-amber-500/10 text-amber-900 font-semibold shadow-sm"
                    : "border-slate-200 bg-white hover:border-slate-300 text-slate-700"
                } transition-all duration-200 flex items-center justify-between group`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${
                      isSelected ? "bg-amber-400 text-amber-950" : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    <span className="font-mono text-xs font-bold font-sans">
                      {dyn.title.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h5 className="font-semibold text-slate-800 tracking-tight group-hover:text-purple-700 transition-colors">
                      {dyn.title}
                    </h5>
                    <p className="text-xs text-slate-400 line-clamp-1 font-normal font-sans">
                      {dyn.shortDesc}
                    </p>
                  </div>
                </div>
                <ChevronRight
                  className={`w-4 h-4 transition-transform text-slate-400 ${
                    isSelected ? "translate-x-1 text-amber-500" : "group-hover:translate-x-0.5"
                  }`}
                />
              </button>
            );
          })}
        </div>
      </div>

      {/* Chalkboard / Canvas Detail Panel */}
      <div className="lg:col-span-7">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedItem.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.2 }}
            className="bg-slate-900 text-white rounded-3xl p-6 md:p-8 shadow-2xl relative overflow-hidden border-4 border-slate-950/80"
          >
            {/* Wooden Blackboard Border Accent */}
            <div className="absolute top-0 inset-x-0 h-2 bg-amber-800" />
            <div className="absolute inset-0 bg-radial from-slate-900 via-slate-950 to-emerald-950 opacity-40 mix-blend-color-burn" />

            {/* Chalkboard Texture Details */}
            <div className="relative z-10">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-4 mb-4">
                <span className="flex items-center gap-1 text-amber-400 text-xs font-mono font-bold uppercase tracking-widest bg-slate-950/50 px-2.5 py-1 rounded">
                  <Sparkles className="w-3.5 h-3.5" /> Quadro Negro do Professor
                </span>
                <span className="bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 text-[11px] font-semibold px-2 py-0.5 rounded-full font-mono">
                  ★ Exclusivo
                </span>
              </div>

              {/* Title on the board: Written like chalk */}
              <h4 className="text-2xl md:text-3xl font-extrabold text-white font-mono tracking-tight [text-shadow:1px_1px_2px_rgba(0,0,0,0.5)]">
                {selectedItem.title}
              </h4>
              <p className="text-blue-200 mt-1.5 text-sm font-sans italic">
                "{selectedItem.shortDesc}"
              </p>

              {/* Practical Stats Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 my-5 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800 font-mono text-xs">
                <div>
                  <span className="text-slate-400 text-[10px] block uppercase tracking-widest">Duração média</span>
                  <span className="text-emerald-300 flex items-center gap-1 font-semibold mt-0.5">
                    <Clock className="w-3.5 h-3.5 shrink-0" />
                    {selectedItem.duration}
                  </span>
                </div>
                <div>
                  <span className="text-slate-400 text-[10px] block uppercase tracking-widest">Material</span>
                  <span className="text-purple-300 flex items-center gap-1 font-semibold mt-0.5 truncate bg-slate-950">
                    <FileText className="w-3.5 h-3.5 shrink-0" />
                    {selectedItem.materials}
                  </span>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <span className="text-slate-400 text-[10px] block uppercase tracking-widest">Recomendado</span>
                  <span className="text-amber-300 flex items-center gap-1 font-semibold mt-0.5">
                    <GraduationCap className="w-3.5 h-3.5 shrink-0" />
                    {selectedItem.gradeRecommended}
                  </span>
                </div>
              </div>

              {/* Pedagogical Objective section */}
              <div className="space-y-4 font-sans leading-relaxed text-sm">
                <div>
                  <span className="font-mono text-xs text-indigo-300 font-bold uppercase tracking-wider block">
                    🎯 Objetivo Pedagógico:
                  </span>
                  <p className="text-slate-200 mt-1 font-normal text-sm">
                    {selectedItem.objective}
                  </p>
                </div>

                {/* Practical application steps */}
                <div className="bg-slate-950/40 p-4 rounded-xl border-l-[3px] border-emerald-400">
                  <span className="font-mono text-xs text-emerald-400 font-bold uppercase tracking-wider block mb-1.5">
                    📝 Como aplicar na prática:
                  </span>
                  <p className="text-slate-300 text-xs md:text-sm leading-relaxed whitespace-pre-line font-light">
                    {selectedItem.howToApply}
                  </p>
                </div>
              </div>

              <div className="mt-6 border-t border-slate-800 pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-400 text-xs sm:text-[11px] font-mono">
                <span>✓ Incluso no pacote com +500 dinâmicas catalogadas</span>
                <span className="text-amber-400 animate-pulse">● Pronto para imprimir e usar</span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
