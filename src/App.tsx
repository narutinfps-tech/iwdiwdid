import React, { useState } from "react";
import { 
  Sparkles, 
  CheckCircle2, 
  Gamepad2, 
  Trophy, 
  Users, 
  ArrowRight, 
  BookOpen, 
  Star, 
  Play, 
  ShieldCheck, 
  Compass, 
  Smile, 
  Heart, 
  Zap, 
  FileCheck, 
  Flame, 
  RefreshCw, 
  Lock, 
  MessageCircle, 
  Database,
  Building,
  ClipboardList,
  ExternalLink
} from "lucide-react";
import { motion } from "motion/react";

// Imports from our modular files
import NoticeBanner from "./components/NoticeBanner";
import ClassroomAuditWidget from "./components/ClassroomAuditWidget";
import DynamicsShowcase from "./components/DynamicsShowcase";
import NotificationToast from "./components/NotificationToast";
import SuccessOverlay from "./components/SuccessOverlay";

// Structured data modules
import { DELIVERABLES_LIST, CORE_BENEFITS, FOR_WHOM } from "./data";

// Direct path to the generated product mockup image asset
const DYNAMICS_MOCKUP_PATH = "/src/assets/images/dynamics_mockup_1779400671238.png";

export default function App() {
  const [showOverlay, setShowOverlay] = useState(false);
  const [isDeclinedFlow, setIsDeclinedFlow] = useState(false);

  // Trigger simulated purchase success overlay (pós-compra adicionada)
  const handleAddBundle = () => {
    setIsDeclinedFlow(false);
    setShowOverlay(true);
  };

  // Trigger simulated order completion overlay without adding the upsell
  const handleDeclineBundle = () => {
    setIsDeclinedFlow(true);
    setShowOverlay(true);
  };

  // Get matching Lucide icon for each deliverable category
  const getDeliverableIcon = (title: string) => {
    const t = title.toLowerCase();
    if (t.includes("vocabulário")) return <MessageCircle className="w-5 h-5 text-indigo-600" />;
    if (t.includes("gramática")) return <BookOpen className="w-5 h-5 text-indigo-600" />;
    if (t.includes("speaking")) return <Zap className="w-5 h-5 text-amber-500" />;
    if (t.includes("revisão")) return <RefreshCw className="w-5 h-5 text-emerald-600" />;
    if (t.includes("grupo")) return <Users className="w-5 h-5 text-purple-600" />;
    if (t.includes("rápidos")) return <Flame className="w-5 h-5 text-amber-500" />;
    if (t.includes("fixação")) return <Trophy className="w-5 h-5 text-purple-600" />;
    if (t.includes("tímidos")) return <Sparkles className="w-5 h-5 text-indigo-600" />;
    if (t.includes("grandes")) return <Building className="w-5 h-5 text-slate-600" />;
    if (t.includes("passo a passo")) return <ClipboardList className="w-5 h-5 text-indigo-600" />;
    if (t.includes("envolventes") || t.includes("leve")) return <Heart className="w-5 h-5 text-emerald-600" />;
    return <Database className="w-5 h-5 text-indigo-600" />;
  };

  return (
    <div id="english-upsell-page-root" className="min-h-screen bg-[#FDFEFE] text-slate-800 selection:bg-purple-100 selection:text-purple-900 overflow-x-hidden relative">
      
      {/* Background Educational Grid Accent Overlay */}
      <div className="absolute inset-x-0 top-0 h-[1200px] bg-[linear-gradient(to_right,#eef2f6_1px,transparent_1px),linear-gradient(to_bottom,#eef2f6_1px,transparent_1px)] bg-[size:32px_32px] opacity-60 pointer-events-none -z-10" />

      {/* Top Banner with Countdown Notice */}
      <NoticeBanner />

      {/* SECTION 1 - Headline de Impacto & Apresentação de Vídeo (VSL no Começo da Página) */}
      <header id="main-header-hero" className="max-w-7xl mx-auto px-4 md:px-8 pt-10 pb-16 relative">
        {/* Centered Top Headline */}
        <div className="text-center max-w-4xl mx-auto space-y-5 mb-10">
          <div className="inline-flex items-center gap-1.5 bg-purple-100 border border-purple-200 text-purple-800 text-[11px] sm:text-xs font-semibold px-3 py-1.5 rounded-full uppercase tracking-wider uppercase">
            <Star className="w-3.5 h-3.5 fill-purple-600 text-purple-600 animate-spin" /> 
            Oferta complementar pós-compra • Apenas para novos alunos
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-sans text-slate-900 tracking-tight leading-[110%]">
            Espere! <span className="text-purple-600 relative inline-block">Complete</span> suas aulas de inglês com mais de <span className="text-emerald-600 block sm:inline">500 dinâmicas prontas</span> para aplicar
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto font-sans">
            Você acabou de garantir os <b>Slides Educativos em Inglês</b>. Agora, leve também um pacote completo com dinâmicas, brincadeiras e jogos pedagógicos para transformar suas aulas em momentos mais participativos, leves e envolventes.
          </p>
        </div>

        {/* Widescreen Columns: Video VSL vs Call To Action + Mockup */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: The Video Player (VSL - Vertical 9:16) */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-4 bg-white p-5 sm:p-6 rounded-3xl border-2 border-purple-100 shadow-md">
            
            <div className="relative aspect-[9/16] w-full max-w-[340px] mx-auto rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-950 bg-slate-950">
              <iframe
                src="https://fast.wistia.net/embed/iframe/obez58v202?videoFoam=true"
                title="Apresentação English Classroom Dynamics Pack"
                allow="autoplay; fullscreen"
                allowFullScreen
                className="absolute inset-0 w-full h-full border-0"
              />
            </div>

            <div className="flex items-center justify-between gap-3 px-1 pt-1 max-w-[340px] mx-auto w-full">
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <Play className="w-4 h-4 fill-emerald-500 text-emerald-500 animate-pulse shrink-0" />
                <div>
                  <span className="font-bold text-slate-800 block">Vídeo de Apresentação</span>
                  <span className="text-[10px] text-slate-400 font-mono">Assista diretamente aqui na página • Formato Vertical</span>
                </div>
              </div>
              <span className="text-[10px] font-mono text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full font-bold">100% ONLINE</span>
            </div>
          </div>

          {/* Right: Mockup Image + Buy Button Box */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="bg-slate-50 border border-slate-200/80 rounded-3xl p-6 sm:p-8 relative shadow-lg flex flex-col justify-between h-full">
              
              {/* Price Tag Sticker over the package */}
              <div className="absolute -top-3.5 -right-2 z-20 bg-amber-400 text-amber-950 font-mono text-center font-black px-4 py-2.5 rounded-2xl shadow-md border-2 border-slate-950 -rotate-3 hover:rotate-3 transition-transform">
                <span className="text-[9px] uppercase block tracking-wider font-sans font-black">ADICIONE HOJE</span>
                <span className="text-2xl font-black block leading-none">R$37</span>
              </div>

              {/* Product Info with Mockup preview */}
              <div className="space-y-4">
                <div className="flex items-center gap-4 bg-white p-3.5 rounded-2xl border border-slate-100 shadow-xs">
                  <img
                    src={DYNAMICS_MOCKUP_PATH}
                    alt="English Classroom Dynamics Pack"
                    className="w-20 sm:w-24 h-auto rounded-lg object-contain bg-slate-50 shrink-0 border border-slate-100"
                  />
                  <div>
                    <h4 className="text-sm sm:text-base font-black text-slate-900 leading-tight">English Classroom Dynamics Pack</h4>
                    <span className="text-xs font-mono text-purple-600 block mt-1">✓ +500 dinâmicas e brincadeiras</span>
                    <span className="text-[11px] text-emerald-600 font-semibold block uppercase tracking-wider mt-0.5">Apenas R$37,00</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-500 leading-normal font-sans">
                  Aproveite este bônus oficial pós-compra! O método ideal para contextualizar e fixar de forma lúdica os slides que você adquiriu.
                </p>
              </div>

              {/* Action Button */}
              <div className="space-y-3.5 pt-5 border-t border-slate-200/60 mt-4">
                <button
                  onClick={handleAddBundle}
                  className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs sm:text-sm uppercase tracking-wide py-4.5 px-6 rounded-full shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 cursor-pointer duration-150"
                >
                  <span>SIM, QUERO ADICIONAR AO MEU PEDIDO</span>
                  <ArrowRight className="w-4 h-4 shrink-0" />
                </button>

                {/* Instant trust parameters */}
                <div className="grid grid-cols-2 gap-2 text-[10px] text-slate-400 font-mono">
                  <span className="flex items-center gap-1 justify-center sm:justify-start">✓ Acesso imediato</span>
                  <span className="flex items-center gap-1 justify-center sm:justify-end">✓ 7 Dias de Garantia</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </header>

      {/* SECTION 2 - Conexão com a dor */}
      <section id="pain-connection-section" className="bg-slate-50 py-20 border-y border-slate-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          
          <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="font-sans text-xl font-bold text-purple-700">?</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-sans text-slate-900 tracking-tight balance">
            Depois de explicar o conteúdo, vem a pergunta: <span className="text-purple-700">“Como fazer os alunos participarem?”</span>
          </h2>

          <div className="mt-6 space-y-4 text-slate-600 max-w-3xl mx-auto leading-relaxed text-base sm:text-lg">
            <p>
              Ter bons slides ajuda muito na explicação. 
              Mas, na prática, o professor também precisa de formas simples para revisar, fixar o conteúdo, estimular a fala dos alunos e deixar a aula mais dinâmica.
            </p>
            <p>
              Muitas vezes, os alunos entendem melhor quando participam, falam, jogam, competem, se movimentam e interagem com os colegas.
            </p>
            <p className="font-semibold text-slate-800">
              Por isso, o English Classroom Dynamics Pack foi criado: para entregar ao professor um banco completo de dinâmicas prontas para usar em diferentes momentos da aula.
            </p>
          </div>

          {/* Classroom Diagnostics Audit Tool Integration */}
          <div className="mt-12 max-w-2xl mx-auto">
            <ClassroomAuditWidget />
          </div>

        </div>
      </section>

      {/* SECTION 3 - Apresentação do produto */}
      <section id="product-overview-section" className="py-20 max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
            Nossa Proposta de Valor
          </span>
          <h2 className="text-3xl md:text-5xl font-black font-sans text-slate-900 mt-3 tracking-tight">
            Conheça o English Classroom Dynamics Pack
          </h2>
          <p className="text-slate-500 mt-4 leading-relaxed text-sm sm:text-base">
            Um pacote com mais de 500 dinâmicas e brincadeiras para aulas de inglês, organizadas para ajudar professores a economizar tempo, engajar os alunos e aplicar atividades mais participativas sem precisar criar tudo do zero.
          </p>
        </div>

        {/* Modular Grid Ideal Application tags list */}
        <div className="bg-gradient-to-br from-indigo-950 to-purple-950 text-white rounded-3xl p-6 md:p-10 shadow-xl border border-indigo-900/60">
          <h3 className="text-lg md:text-xl font-bold font-mono text-indigo-300 border-b border-indigo-800 pb-4 mb-6">
            🎯 O material é ideal para usar em:
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-3.5 text-xs sm:text-sm">
            {[
              "aulas de revisão",
              "início de aula",
              "fechamento de conteúdo",
              "prática de speaking",
              "fixação de vocabulário",
              "revisão de gramática",
              "atividades em grupo",
              "aulas mais leves e criativas",
              "turmas do 7º, 8º e 9º ano"
            ].map((tag, i) => (
              <div 
                key={i} 
                className="bg-indigo-900/40 p-4 rounded-2xl border border-indigo-800 flex items-center gap-2.5 hover:bg-indigo-900/60 hover:border-indigo-600 transition-colors"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-amber-400 shrink-0" />
                <span className="font-medium text-indigo-100">{tag}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 - O que vem dentro */}
      <section id="features-grid-section" className="bg-slate-50 py-20 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
              Foco na Praticidade
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold font-sans text-slate-900 mt-2 tracking-tight">
              O que você vai receber
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-1.5">
              Todo o material foi esquematizado para te dar o máximo de agilidade no dia a dia.
            </p>
          </div>

          {/* Cards Visuais */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {DELIVERABLES_LIST.map((item, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-2xl p-5 border border-slate-200/60 shadow-xs hover:shadow-md transition-all hover:border-purple-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center mb-3.5 group-hover:bg-indigo-500 group-hover:text-white transition-colors">
                  {getDeliverableIcon(item.title)}
                </div>
                <h4 className="font-bold font-sans text-slate-800 text-sm group-hover:text-indigo-900 transition-colors flex items-center gap-1.5">
                  <span className="text-emerald-500 font-mono">✓</span> {item.title}
                </h4>
                <p className="text-xs text-slate-400 mt-1.5 leading-relaxed font-sans font-light">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 5 - Exemplos de dinâmicas (Showcase) */}
      <section id="interactive-preview-section" className="py-20 max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-purple-600 bg-purple-50 px-3 py-1 rounded-full">
            Amostra Grátis Interativa
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold font-sans text-slate-900 mt-2 tracking-tight">
            Algumas das dinâmicas que você poderá aplicar
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm mt-1">
            Clique em qualquer dinâmica na lista abaixo para ler os detalhes e sentir o poder pedagógico na ponta do giz!
          </p>
        </div>

        {/* Dynamics List & Chalkboard Display Widget */}
        <DynamicsShowcase />
      </section>

      {/* SECTION 5.5 - Testemunho e Depoimento em Vídeo (Review) */}
      <section id="video-review-section" className="bg-purple-50/70 py-20 border-y border-purple-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          
          <div className="max-w-2xl mx-auto mb-10 space-y-3">
            <span className="inline-flex items-center gap-1.5 bg-purple-100 border border-purple-200 text-purple-800 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
              ⭐ Depoimento & Avaliação Real
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-sans text-slate-900 tracking-tight">
              Veja a opinião de quem já usa o material na prática
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm">
              Dê o play e assista ao depoimento completo para entender o impacto real das dinâmicas no engajamento dos alunos.
            </p>
          </div>

          <div className="relative aspect-video w-full max-w-3xl mx-auto rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-950 bg-slate-950">
            <iframe
              src="https://fast.wistia.net/embed/iframe/ig1fh8ieb2?videoFoam=true"
              title="Depoimento sobre o English Classroom Dynamics Pack"
              allow="autoplay; fullscreen"
              allowFullScreen
              className="absolute inset-0 w-full h-full border-0"
            />
          </div>

          <div className="mt-5 flex items-center justify-center gap-2 text-xs text-slate-500 font-sans">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-semibold text-slate-600">Assista à avaliação real diretamente nesta página</span>
          </div>

        </div>
      </section>

      {/* SECTION 6 - Benefícios */}
      <section id="benefits-section" className="bg-slate-900 text-white py-20 relative overflow-hidden rounded-y-3xl">
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full">
              Benefícios Reais do Pacote
            </span>
            <h2 className="text-3xl md:text-4xl font-black font-sans text-white mt-3 tracking-tight">
              Por que esse pacote pode transformar suas aulas?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CORE_BENEFITS.map((b, idx) => (
              <div 
                key={idx} 
                className="bg-slate-950/60 p-6 rounded-2xl border border-slate-800/80 hover:border-slate-700 transition-colors"
              >
                <div className="mb-3.5 flex items-center gap-1.5">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold text-xs">
                    ✓
                  </div>
                  <h4 className="font-bold text-slate-100 text-sm tracking-tight leading-snug">
                    {b.text}
                  </h4>
                </div>
                <p className="text-slate-400 text-xs leading-relaxed font-sans font-light">
                  {b.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 7 - Como usar junto com os slides */}
      <section id="combination-workflow-section" className="py-20 max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
            Sinergia Perfeita
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold font-sans text-slate-900 mt-2 tracking-tight">
            Use junto com os slides que você acabou de comprar
          </h2>
          <p className="text-slate-500 mt-3 text-sm md:text-base leading-relaxed">
            Os slides ajudam você a explicar o conteúdo de forma visual e organizada. As dinâmicas ajudam os alunos a praticarem esse conteúdo de forma ativa.
          </p>
        </div>

        {/* Sinergy flowchart diagram */}
        <div className="bg-slate-50 border border-slate-250/50 rounded-3xl p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Steps explanations */}
            <div className="md:col-span-7 space-y-4 font-sans text-sm text-slate-600">
              <p className="font-semibold text-slate-800">
                Veja um exemplo simples de simbiose em 45 minutos:
              </p>
              
              <ul className="space-y-3 pl-1 text-xs sm:text-sm">
                <li className="flex gap-2.5 items-start">
                  <span className="w-6 h-6 rounded-full bg-indigo-600 text-white font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">1</span>
                  <div>
                    <strong className="text-slate-800">Exposição Teórica:</strong> Você apresenta o conteúdo planejado com os Slides Educativos de Inglês que já adquiriu (15 min).
                  </div>
                </li>
                <li className="flex gap-2.5 items-start">
                  <span className="w-6 h-6 rounded-full bg-indigo-600 text-white font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">2</span>
                  <div>
                    <strong className="text-slate-800">Demonstração Visual:</strong> Mostra exemplos práticos, diálogos e resoluções para a turma na tela.
                  </div>
                </li>
                <li className="flex gap-2.5 items-start">
                  <span className="w-6 h-6 rounded-full bg-indigo-600 text-white font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">3</span>
                  <div>
                    <strong className="text-slate-800">Prática Ativa Integrada:</strong> Aplica uma dinâmica rápida (como o <span className="text-purple-600 font-semibold">Vocabulary Race</span>) do material complementar para fixar.
                  </div>
                </li>
                <li className="flex gap-2.5 items-start">
                  <span className="w-6 h-6 rounded-full bg-indigo-600 text-white font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">4</span>
                  <div>
                    <strong className="text-slate-800">Revisão Rápida com Interação:</strong> Finaliza com perguntas e respostas divertidas, garantindo 100% de satisfação da turma inteira.
                  </div>
                </li>
              </ul>

              <p className="font-semibold text-indigo-900 border-t border-slate-200/80 pt-4 text-xs">
                Assim, sua aula fica mais completa, mais leve e muito mais interessante.
              </p>
            </div>

            {/* Visual Icon Representation */}
            <div className="md:col-span-5 bg-white p-6 rounded-2xl border border-slate-205/60 text-center space-y-4 shadow-xs">
              <div className="flex justify-center items-center gap-2">
                <div className="p-3 bg-indigo-100 rounded-xl text-indigo-700">
                  <BookOpen className="w-6 h-6" />
                </div>
                <div className="text-slate-400 font-bold text-xl">+</div>
                <div className="p-3 bg-purple-100 rounded-xl text-purple-700 animate-bounce">
                  <Gamepad2 className="w-6 h-6" />
                </div>
              </div>
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block">Sua Aula Perfeita</span>
              <p className="text-sm font-bold text-slate-800">
                Capacidade Explicativa + Engajamento Lúdico Ativo
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 7.5 - Demonstração dos Slides por Dentro */}
      <section id="slides-inside-demo" className="bg-white py-20 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          
          <div className="max-w-2xl mx-auto mb-10 space-y-3">
            <span className="inline-flex items-center gap-1.5 bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-indigo-600" /> Material Por Dentro
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-sans text-slate-900 tracking-tight">
              Veja os Slides Educativos de Inglês por dentro
            </h2>
            <p className="text-slate-505 text-slate-500 text-xs sm:text-sm">
              Assista à gravação abaixo onde mostramos a estrutura, a qualidade visual e a interatividade dos nossos slides de alto padrão.
            </p>
          </div>

          <div className="relative aspect-video w-full max-w-3xl mx-auto rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-950 bg-slate-950">
            <iframe
              src="https://fast.wistia.net/embed/iframe/b1cf18v5kp?videoFoam=true"
              title="Demonstração dos Slides por Dentro"
              allow="autoplay; fullscreen"
              allowFullScreen
              className="absolute inset-0 w-full h-full border-0"
            />
          </div>

          <div className="mt-5 flex items-center justify-center gap-2 text-xs text-slate-500 font-sans">
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
            <span className="font-semibold text-slate-600">Assista à gravação completa diretamente na página</span>
          </div>

        </div>
      </section>

      {/* SECTION 8 - Para quem é */}
      <section id="target-audience-section" className="bg-slate-50 py-20 border-y border-slate-100">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-purple-600 bg-purple-50 px-3 py-1 rounded-full">
              Público Alvo escolar
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold font-sans text-slate-900 mt-2 tracking-tight">
              Esse material é ideal para você se...
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {FOR_WHOM.map((target, index) => (
              <div 
                key={index} 
                className="bg-white p-4.5 rounded-2xl border border-slate-200/80 flex items-start gap-3 shadow-xs hover:border-purple-300 transition-colors"
              >
                <div className="w-5.5 h-5.5 rounded-full bg-purple-50 flex items-center justify-center text-purple-600 font-bold shrink-0 mt-0.5">
                  ✓
                </div>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {target}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9 - Oferta Especial */}
      <section id="post-purchase-offer-box" className="py-24 bg-purple-950 text-white relative overflow-hidden">
        
        {/* Absolute Design Ornaments */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-purple-900/40 rounded-full blur-3xl -z-10" />
        <div className="absolute -bottom-10 -left-10 w-96 h-96 bg-indigo-950/50 rounded-full blur-3xl -z-10" />

        <div className="max-w-3xl mx-auto px-4 text-center space-y-6">
          <span className="bg-amber-400 text-amber-950 text-xs font-mono font-bold uppercase tracking-widest px-4 py-1 rounded-full inline-block animate-pulse">
            ★ PROPOSTA DE ADICIONAL PÓS-COMPRA ★
          </span>

          <h2 className="text-4xl sm:text-5xl font-black font-sans leading-none tracking-tight text-white">
            Oferta Especial Pós-Compra
          </h2>

          <p className="text-sm sm:text-base text-purple-200 max-w-xl mx-auto font-sans leading-relaxed">
            Como você acabou de adquirir os <strong>Slides Educativos em Inglês</strong>, agora pode adicionar o English Classroom Dynamics Pack ao seu pedido por apenas:
          </p>

          {/* Pricing Bracket */}
          <div className="bg-slate-900/60 max-w-md mx-auto p-8 rounded-3xl border border-slate-800 relative">
            <span className="text-xs text-slate-400 tracking-wider font-mono uppercase block mb-1">De R$ 97 por</span>
            <div className="text-5xl sm:text-6xl font-black text-amber-400 tracking-tight font-sans">
              R$ 37,00
            </div>
            <span className="text-[11px] text-emerald-300 block font-mono mt-1">✓ Pagamento único, sem mensalidades pós-compra</span>
            
            <div className="border-t border-slate-800 mt-5 pt-4 text-left space-y-2.5 text-xs text-purple-200 font-sans">
              <p className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> Acesso imediato no mesmo painel das suas aulas.
              </p>
              <p className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> Mais de 500 dinâmicas catalogadas e prontas.
              </p>
              <p className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> Ideal para complementar os Slides de Inglês.
              </p>
            </div>
          </div>

          <div className="pt-4 space-y-4">
            <button
              onClick={handleAddBundle}
              className="w-full max-w-md bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black py-4.5 px-8 rounded-full sm:text-base uppercase tracking-wide transition-all shadow-xl hover:shadow-emerald-500/10 cursor-pointer active:scale-98 inline-block"
            >
              SIM, QUERO ADICIONAR POR R$37
            </button>
          </div>

        </div>
      </section>

      {/* SECTION 10 - Comparação de Valor */}
      <section id="value-comparison-section" className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-sans text-slate-900 tracking-tight">
            Imagine nunca mais ficar sem ideia para dinamizar sua aula
          </h2>

          <div className="text-slate-600 space-y-4 max-w-3xl mx-auto leading-relaxed text-sm sm:text-base">
            <p>
              Em vez de perder tempo procurando brincadeiras, adaptando atividades ou tentando pensar em algo diferente para a turma, você terá um banco completo com mais de 550 dinâmicas prontas para consultar sempre que precisar.
            </p>
            <p className="font-semibold text-indigo-950">
              Use em aulas normais, revisões, semanas de prova, aulas mais leves, projetos, atividades em grupo e momentos de fixação oportuna.
            </p>
          </div>

        </div>
      </section>

      {/* SECTION 11 - Garantia */}
      <section id="warranty-block" className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 border border-slate-200/80 rounded-3xl p-6 sm:p-10 shadow-xs">
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-center">
            
            {/* Guarantee Seal */}
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-purple-50 border-2 border-dashed border-purple-200 flex flex-col justify-center items-center shrink-0">
              <ShieldCheck className="w-12 h-12 text-purple-700 animate-pulse" />
              <span className="text-[10px] uppercase font-mono font-bold text-purple-900 mt-1">7 DIAS</span>
            </div>

            {/* Warranty Text */}
            <div className="space-y-3.5 text-center sm:text-left font-sans">
              <h3 className="text-xl sm:text-2xl font-black text-slate-805 tracking-tight font-sans">
                Garantia de 7 dias
              </h3>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-light">
                Você tem 7 dias para testar o material. Se sentir que o English Classroom Dynamics Pack não faz sentido para suas aulas, basta solicitar o reembolso dentro do prazo.
              </p>
              <span className="text-xs font-mono font-semibold text-indigo-700 block bg-slate-50 px-3 py-1 rounded inline-block">
                ★ Simples, direto e sem burocracia.
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 12 - Recusa */}
      <section id="decline-link-block" className="py-12 bg-slate-50 text-center border-t border-slate-150">
        <div className="max-w-xl mx-auto px-4 space-y-4">
          <p className="text-slate-400 text-xs">
            Deseja recusar o bônus promocional e encerrar o pedido?
          </p>
          <button
            onClick={handleDeclineBundle}
            className="text-xs sm:text-sm font-semibold text-slate-500 hover:text-slate-700 underline transition-colors cursor-pointer active:scale-95"
          >
            Não, obrigado. Quero continuar apenas com os Slides Educativos em Inglês.
          </button>
        </div>
      </section>

      {/* SEÇÃO FINAL */}
      <footer id="footer-landing" className="bg-slate-900 text-white pt-24 pb-16 border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
          
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight font-sans">
            Você já garantiu os slides. Agora transforme suas aulas com dinâmicas prontas.
          </h2>

          <div className="bg-slate-950/40 p-6 rounded-2xl max-w-2xl mx-auto border border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono text-slate-400 text-left">
            <div className="flex items-start gap-2">
              <span className="text-emerald-400 font-bold">▶</span>
              <span>Com os slides, você explica com alto apelo visual e embasamento educacional.</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-amber-400 font-bold">▶</span>
              <span>Com as dinâmicas, seus alunos participam, praticam e aprendem de forma ativa.</span>
            </div>
          </div>

          <p className="text-sm text-slate-400 max-w-xl mx-auto font-sans leading-relaxed">
            Adicione agora o English Classroom Dynamics Pack ao seu pedido e receba mais de 500 ideias para deixar suas aulas de inglês mais envolventes.
          </p>

          <div className="pt-2">
            <button
              onClick={handleAddBundle}
              className="w-full max-w-md bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black py-4.5 px-8 rounded-full sm:text-base uppercase tracking-wide transition-all shadow-xl cursor-pointer"
            >
              ADICIONAR ENGLISH CLASSROOM DYNAMICS PACK POR R$37
            </button>
          </div>

          <div className="border-t border-slate-800 pt-10 text-xs text-slate-500 font-mono space-y-1">
            <p>© {new Date().getFullYear()} English Classroom Dynamics Pack & Slides Educativos • Todos os direitos reservados.</p>
            <p>Destinado exclusivamente a professores que buscam excelência no aprendizado.</p>
          </div>

        </div>
      </footer>

      {/* Toast notifications simulator */}
      <NotificationToast />

      {/* Real-time Order Process Overlay Modal Simulator */}
      {showOverlay && (
        <SuccessOverlay 
          isDeclinedSuccess={isDeclinedFlow} 
          onClose={() => setShowOverlay(false)} 
        />
      )}

    </div>
  );
}
