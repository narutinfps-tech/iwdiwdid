import React, { useState, useEffect } from "react";
import { CheckCircle2, ShieldCheck, Download, ExternalLink, Calendar, Mail, FileCheck, Layers, FileDown, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

interface SuccessOverlayProps {
  onClose: () => void;
  isDeclinedSuccess?: boolean; // if they declined the upsell but just finalized the order
}

export default function SuccessOverlay({ onClose, isDeclinedSuccess = false }: SuccessOverlayProps) {
  const [loadingStep, setLoadingStep] = useState(0);
  const [done, setDone] = useState(false);

  const steps = isDeclinedSuccess 
    ? [
        "Localizando sua transação dos Slides...",
        "Calculando credenciais de acesso seguro...",
        "Liberando materiais na sua área de membros...",
        "Tudo pronto!"
      ]
    : [
        "Localizando sua transação dos Slides...",
        "Integrando 'English Classroom Dynamics Pack'...",
        "Aplicando desconto pós-compra especial (+R$37)...",
        "Sincronizando 500+ dinâmicas e brincadeiras...",
        "Tudo pronto!"
      ];

  useEffect(() => {
    let currentStep = 0;
    const interval = setInterval(() => {
      if (currentStep < steps.length - 1) {
        currentStep++;
        setLoadingStep(currentStep);
      } else {
        clearInterval(interval);
        setDone(true);
      }
    }, 1200);

    return () => clearInterval(interval);
  }, [steps.length]);

  return (
    <div id="payment-success-overlay" className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/95 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-radial from-violet-950/30 to-slate-950 opacity-90" />
      
      <div className="relative w-full max-w-2xl bg-white rounded-3xl p-6 md:p-10 shadow-2xl border-4 border-dashed border-emerald-400/30 overflow-hidden text-center z-10 my-8">
        
        {/* Background Grid Accent */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000003_1px,transparent_1px),linear-gradient(to_bottom,#00000003_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

        {!done ? (
          <div className="flex flex-col items-center justify-center py-12 space-y-6">
            {/* Spinning educational compass or logo */}
            <div className="relative w-20 h-20">
              <div className="absolute inset-0 rounded-full border-4 border-emerald-100 animate-pulse" />
              <div className="absolute inset-0 rounded-full border-4 border-t-emerald-500 animate-spin" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Layers className="w-8 h-8 text-emerald-600" />
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl md:text-2xl font-black font-sans text-slate-800 tracking-tight">
                Processando seu Pedido
              </h3>
              <p className="text-sm text-slate-400 font-mono">
                Por favor, não feche esta janela...
              </p>
            </div>

            {/* Current Loading Step status */}
            <div className="w-full max-w-sm bg-slate-100 rounded-full h-2.5 overflow-hidden">
               <motion.div 
                 className="bg-emerald-500 h-full ease-out duration-500"
                 style={{ width: `${((loadingStep + 1) / steps.length) * 100}%` }}
               />
            </div>
            
            <p className="text-sm font-semibold text-emerald-600 animate-pulse font-mono min-h-[20px]">
              → {steps[loadingStep]}
            </p>
          </div>
        ) : (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="space-y-6 py-4"
          >
            {/* Big green badge */}
            <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full mb-2">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl md:text-4xl font-black text-slate-800 tracking-tight font-sans">
                {isDeclinedSuccess ? "Pedido Finalizado!" : "Combo Adicionado!"}
              </h3>
              <p className="text-sm text-slate-500 max-w-md mx-auto">
                {isDeclinedSuccess 
                  ? "Suas credenciais e PDF dos Slides Educativos de Inglês foram enviados para o seu e-mail de compra cadastrado."
                  : "Parabéns! Você acaba de dar um salto gigante em sua carreira docente. O English Classroom Dynamics Pack já foi integrado!"}
              </p>
            </div>

            {/* Receipt Summary Card */}
            <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100 text-left space-y-4 max-w-md mx-auto">
              <div className="flex justify-between items-center text-xs font-mono text-slate-400 border-b border-slate-200 pb-2">
                <span>TRANS: #EDU-89021-X</span>
                <span>{new Date().toLocaleDateString("pt-BR")}</span>
              </div>

              <div className="space-y-3">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h5 className="font-bold text-xs sm:text-sm text-slate-800">
                      1. Slides Educativos em Inglês (Ensino Fundamental II)
                    </h5>
                    <p className="text-[11px] text-slate-500">Material principal selecionado</p>
                  </div>
                  <span className="text-xs bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded shrink-0">
                    LIBERADO
                  </span>
                </div>

                {!isDeclinedSuccess && (
                  <div className="flex items-start justify-between gap-4 border-t border-dashed border-slate-200 pt-3">
                    <div>
                      <h5 className="font-bold text-xs sm:text-sm text-indigo-900 flex items-center gap-1">
                        2. English Classroom Dynamics Pack (500+ ideias)
                      </h5>
                      <p className="text-[11px] text-slate-500">Acrescentado com desconto pós-compra</p>
                    </div>
                    <span className="text-xs bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded shrink-0">
                      + R$37,00
                    </span>
                  </div>
                )}
              </div>

              <div className="border-t border-slate-200 pt-3 flex justify-between items-center font-sans text-sm font-bold text-slate-800">
                <span>Total faturado:</span>
                <span className="text-lg text-emerald-600">{isDeclinedSuccess ? "R$ 47,00 (Pago)" : "R$ 84,00 (Compilado)"}</span>
              </div>
            </div>

            {/* Simulated Action Options */}
            <div className="flex flex-col gap-3 max-w-sm mx-auto pt-2">
              <a
                href="#download-sandbox"
                onClick={(e) => {
                  e.preventDefault();
                  alert("Simulação de download: PDF de Dinâmicas e Link do Drive com Slides enviados para seu e-mail com sucesso!");
                }}
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 px-6 rounded-2xl flex items-center justify-center gap-2 transition-all shadow-md font-sans"
              >
                <Download className="w-5 h-5" />
                Baixar Kit de Materiais (.ZIP)
              </a>

              <a
                href="#academy"
                onClick={(e) => {
                  e.preventDefault();
                  alert("Simulação de portal: Abrindo Área de Membros Educacional do Professor no ambiente demo...");
                }}
                className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-3 px-6 rounded-2xl flex items-center justify-center gap-2 transition-all font-sans text-xs sm:text-sm"
              >
                <ExternalLink className="w-4 h-4 text-slate-500" />
                Acessar Área de Membros do Professor
              </a>
            </div>

            {/* Email notice footer */}
            <p className="text-xs text-slate-400 mt-2 font-mono flex items-center justify-center gap-1.5 bg-slate-50 py-2.5 rounded-xl border border-slate-100">
              <Mail className="w-3.5 h-3.5 text-slate-400" /> Acesso enviado também para o e-mail: <strong className="text-slate-600">narutinfps@gmail.com</strong>
            </p>

            <button
              onClick={onClose}
              className="text-xs font-semibold text-purple-600 hover:text-purple-500 underline pt-2 block mx-auto"
            >
              Voltar para a página de vendas
            </button>
          </motion.div>
        )}

      </div>
    </div>
  );
}
