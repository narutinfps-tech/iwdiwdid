import React, { useState } from "react";
import { Sparkles, ArrowRight, CheckCircle2, GraduationCap, Flame, AlertCircle } from "lucide-react";
import { motion } from "motion/react";

export default function ClassroomAuditWidget() {
  const [step, setStep] = useState(1);
  const [selectedGrade, setSelectedGrade] = useState("");
  const [struggle, setStruggle] = useState("");
  const [timeSpent, setTimeSpent] = useState("");
  const [isCalculating, setIsCalculating] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const startAnalysis = () => {
    setIsCalculating(true);
    setTimeout(() => {
      setIsCalculating(false);
      setShowResult(true);
    }, 1500);
  };

  const resetAudit = () => {
    setStep(1);
    setSelectedGrade("");
    setStruggle("");
    setTimeSpent("");
    setShowResult(false);
  };

  return (
    <div id="classroom-audit-widget" className="bg-white rounded-3xl p-6 md:p-8 shadow-xl border-2 border-dashed border-purple-200/80 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-purple-100/40 rounded-full blur-2xl -z-10" />
      <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-100/40 rounded-full blur-2xl -z-10" />

      {/* Header */}
      <div className="mb-6">
        <span className="inline-flex items-center gap-1 bg-purple-50 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider mb-2">
          <GraduationCap className="w-3.5 h-3.5" /> Diagnóstico Rápido Secundário
        </span>
        <h3 className="text-xl md:text-2xl font-bold font-sans text-slate-800 tracking-tight">
          Qual o nível de engajamento da sua turma?
        </h3>
        <p className="text-sm text-slate-500 mt-1">
          Descubra em 3 cliques o diagnóstico pedagógico da sua classe e veja como mudar esse cenário.
        </p>
      </div>

      {!showResult && !isCalculating && (
        <div className="space-y-6">
          {step === 1 && (
            <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }}>
              <label className="block text-sm font-semibold text-slate-700 mb-3">
                1. Qual ano escolar você mais leciona atualmente ou sente mais desafios?
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {["7º Ano (Transição e energia)", "8º Ano (Início da apatia)", "9º Ano (Resistência a falar)"].map((grade) => (
                  <button
                    key={grade}
                    onClick={() => {
                      setSelectedGrade(grade);
                      setStep(2);
                    }}
                    className={`p-4 rounded-2xl text-left border-2 text-sm font-medium transition-all ${
                      selectedGrade === grade
                        ? "border-purple-600 bg-purple-50 text-purple-950 shadow-sm"
                        : "border-slate-100 bg-slate-50 hover:border-slate-200 text-slate-700"
                    }`}
                  >
                     {grade}
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }}>
              <label className="block text-sm font-semibold text-slate-700 mb-3">
                2. Qual o principal obstáculo que você enfrenta na hora do speaking ou fixação?
              </label>
              <div className="grid grid-cols-1 gap-2.5">
                {[
                  "Apenas os mesmos 2 ou 3 alunos participam, o resto fica calado.",
                  "Os alunos têm vergonha de falar inglês na frente dos colegas.",
                  "Falta de foco e inquietação (a turma se dispersa muito rápido).",
                  "Eles respondem, mas só querem falar em português por comodidade."
                ].map((item) => (
                  <button
                    key={item}
                    onClick={() => {
                      setStruggle(item);
                      setStep(3);
                    }}
                    className={`p-3.5 rounded-xl text-left border text-sm transition-all ${
                      struggle === item
                        ? "border-purple-600 bg-purple-50/80 text-purple-950 font-medium"
                        : "border-slate-200 bg-white hover:bg-slate-50 text-slate-700"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
              <button onClick={() => setStep(1)} className="text-xs text-purple-600 font-medium mt-3 hover:underline">
                ← Voltar para a pergunta anterior
              </button>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }}>
              <label className="block text-sm font-semibold text-slate-700 mb-3">
                3. Quantas horas você gasta planejando atividades dinâmicas novas por semana?
              </label>
              <div className="grid grid-cols-1 gap-2.5">
                {[
                  "Mais de 4 horas (Vou pro Pinterest, YouTube, adapto regras e perco o fim de semana).",
                  "1 a 2 horas (Acabo repetindo os mesmos 3 jogos de sempre por falta de tempo).",
                  "Quase não aplico dinâmicas de movimento porque dão muita bagunça na sala."
                ].map((item) => (
                  <button
                    key={item}
                    onClick={() => {
                      setTimeSpent(item);
                      startAnalysis();
                    }}
                    className={`p-3.5 rounded-xl text-left border text-sm transition-all ${
                      timeSpent === item
                        ? "border-purple-600 bg-purple-50/80 text-purple-950 font-medium"
                        : "border-slate-200 bg-white hover:bg-slate-50 text-slate-700"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
              <button onClick={() => setStep(2)} className="text-xs text-purple-600 font-medium mt-3 hover:underline">
                ← Voltar para a pergunta anterior
              </button>
            </motion.div>
          )}
        </div>
      )}

      {/* Calculating indicator */}
      {isCalculating && (
        <div className="flex flex-col items-center justify-center py-10 space-y-4">
          <div className="relative w-16 h-16">
            <div className="absolute inset-0 rounded-full border-4 border-purple-200 animate-pulse" />
            <div className="absolute inset-0 rounded-full border-4 border-t-purple-600 animate-spin" />
          </div>
          <p className="text-sm font-medium text-purple-900 animate-pulse font-mono">
            Processando respostas escolares...
          </p>
        </div>
      )}

      {/* Diagnostic result screen */}
      {showResult && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-purple-950 text-purple-100 rounded-2xl p-5 md:p-6"
        >
          <div className="flex items-start gap-3">
            <Flame className="w-8 h-8 text-amber-400 shrink-0 mt-1" />
            <div>
              <h4 className="font-bold text-lg text-white">
                DIAGNÓSTICO: Alerta de Monotonia Passiva detectado no {selectedGrade.split(" ")[0]}!
              </h4>
              <p className="text-xs text-purple-300 mt-1 font-mono uppercase tracking-widest">
                Recomendação: Metodologia Ativa de Baixa Pressão Social
              </p>
            </div>
          </div>

          <div className="mt-4 space-y-3.5 text-sm text-purple-200 border-t border-purple-800 pt-4">
            <p>
              Ao enfrentar a timidez no <strong>{selectedGrade.split(" ")[0]}</strong> e gastar horas preparando conteúdo, suas aulas correm o risco de se tornarem puramente expositivas.
            </p>
            <div className="bg-purple-900/40 p-3.5 rounded-xl border border-purple-800 space-y-2">
              <span className="text-xs font-bold text-purple-300 block">DICA DO PSICOPEDAGOGO:</span>
              <p className="text-xs italic leading-relaxed">
                "Não adianta forçar alunos do fundamental II a falarem sozinhos na frente de todos. Use dinâmicas em grupo de ritmo ágil (como <span className="text-amber-300">Hot Seat</span> ou <span className="text-amber-300">Vocabulary Race</span>) onde o peso da resposta está diluído no grupo. Isso destrava a barreira do ridículo e faz com que 100% da turma participe sem pânico."
              </p>
            </div>
            <p className="text-xs text-emerald-300 flex items-center gap-1.5 font-semibold">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> English Classroom Dynamics Pack resolve exatamente isso com 500+ dinâmicas catalogadas!
            </p>
          </div>

          <div className="mt-5 flex flex-col sm:flex-row items-center gap-3">
            <button
              onClick={() => {
                // Scroll smoothly to the offer section R$37
                const offerEl = document.getElementById("post-purchase-offer-box");
                if (offerEl) {
                  offerEl.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="w-full sm:w-auto bg-amber-400 hover:bg-amber-300 text-amber-950 font-bold px-5 py-2.5 rounded-full text-xs flex items-center justify-center gap-1.5 uppercase transition-all shadow-md active:scale-95"
            >
              Verificar Dinâmicas do Pacote <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={resetAudit}
              className="text-xs text-purple-300 hover:text-white font-medium underline"
            >
              Fazer novo diagnóstico
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
}
