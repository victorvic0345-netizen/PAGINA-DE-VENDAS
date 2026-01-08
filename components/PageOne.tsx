
import React from 'react';
import { Package, Crown, PlayCircle, CheckCircle2, Zap, Instagram } from 'lucide-react';

interface PageOneProps {
  onTriggerTransition: () => void;
  onAction: () => void;
}

// Fix: Use a type-casted variable for the custom element to bypass strict JSX intrinsic element checks
// and avoid polluting the global JSX namespace which was causing standard elements to be unrecognized.
const WistiaPlayer = 'wistia-player' as any;

const PageOne: React.FC<PageOneProps> = ({ onTriggerTransition, onAction }) => {
  const scrollToOffer = () => {
    onAction();
    const offerSection = document.getElementById('offer-section');
    if (offerSection) {
      offerSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col gap-10 animate-in fade-in duration-700 max-w-lg mx-auto text-center">
      {/* Headline Section */}
      <div className="space-y-4 pt-4 px-4">
        <h1 className="text-3xl md:text-4xl font-black leading-tight uppercase text-ff-white tracking-tight drop-shadow-[0_0_15px_rgba(255,87,34,0.2)]">
          ⚠️ SUA MIRA <span className="text-ff-orange">NÃO COLA</span>.
        </h1>
        <p className="text-lg md:text-xl text-ff-white font-bold tracking-wide uppercase">
          E o motivo é simples: você está usando a sensi <span className="text-ff-error">ERRADA</span>.
        </p>
      </div>

      {/* Video Section (VSL) - UPDATED WITH WISTIA PLAYER */}
      <div className="space-y-4 px-4">
        <p className="text-[10px] font-bold text-ff-white uppercase tracking-[0.3em]">👇 Assiste isso antes de entrar na próxima partida 👇</p>
        <div className="w-full glass-card rounded-2xl border-2 border-white/5 relative overflow-hidden shadow-2xl bg-black">
          {/* Fix: Using the WistiaPlayer constant to avoid JSX intrinsic element resolution issues */}
          <WistiaPlayer media-id="etd8z5t7gh" aspect="1.7777777777777777"></WistiaPlayer>
          
          {/* Live Indicator Overlay */}
          <div className="absolute top-4 left-4 flex items-center gap-2 bg-black/60 px-2 py-1 rounded-md backdrop-blur-sm pointer-events-none z-10">
            <div className="w-2 h-2 bg-ff-error rounded-full animate-pulse"></div>
            <span className="text-[10px] uppercase font-black text-ff-white tracking-widest">🎥 AO VIVO</span>
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <div className="flex justify-center -mb-4 px-4">
        <button 
          onClick={scrollToOffer} 
          className="bg-gradient-to-r from-ff-yellow via-ff-orangeMed to-ff-orange py-3 px-10 rounded-full text-ff-dark font-black text-base flex flex-col items-center justify-center transition-all active:scale-95 shadow-2xl shadow-ff-orange/30 animate-pulse-glow border-b-4 border-ff-orange/50 uppercase tracking-tighter italic"
        >
          <span>🔥 QUERO SUBIR DE NÍVEL AGORA</span>
        </button>
      </div>

      {/* Title Below CTA */}
      <div className="flex flex-col items-center gap-4">
        <h2 className="text-xl font-black text-ff-white text-center uppercase tracking-[0.2em] -mt-2">
          Depoimentos de Alunos
        </h2>
        {/* Testimonial Video Section - Updated container size to match print */}
        <div className="px-4 w-full flex justify-center">
          <div className="w-full max-w-[340px] rounded-3xl border-2 border-white/5 shadow-2xl overflow-hidden bg-black">
            <WistiaPlayer media-id="71xesvcnxv" aspect="0.5625"></WistiaPlayer>
          </div>
        </div>
      </div>

      {/* Warnings / Requirements */}
      <div className="space-y-4 py-4 px-4 flex flex-col items-center">
        <h3 className="text-lg md:text-xl font-black text-ff-yellow uppercase tracking-tight">
          PORÉM, VAMOS COMBINAR UMA COISA? 👇
        </h3>
        
        <div className="space-y-2.5 w-full flex flex-col items-center justify-center">
          <div className="flex items-center gap-4 text-left w-fit min-w-[180px]">
            <span className="text-ff-error text-2xl font-black">❌</span>
            <span className="text-ff-white font-bold text-base uppercase tracking-tight">Isso não é hack</span>
          </div>
          <div className="flex items-center gap-4 text-left w-fit min-w-[180px]">
            <span className="text-ff-error text-2xl font-black">❌</span>
            <span className="text-ff-white font-bold text-base uppercase tracking-tight">Não dá ban</span>
          </div>
          <div className="flex items-center gap-4 text-left w-fit min-w-[180px]">
            <span className="text-ff-error text-2xl font-black">❌</span>
            <span className="text-ff-white font-bold text-base uppercase tracking-tight">Não mexe no jogo</span>
          </div>
        </div>
        
        <div className="space-y-2 pt-6 text-center max-w-sm mx-auto">
          <p className="text-ff-white text-sm md:text-base font-medium uppercase italic leading-tight">
            🎮 Não precisa saber configurar nada.<br/>É copiar, colar e jogar.
          </p>
          <p className="text-ff-white font-bold text-base uppercase tracking-tight px-2 leading-tight">
            🔥 Funciona pra quem quer parar de sofrer no x1. Não é pra curioso.
          </p>
        </div>
      </div>

      {/* Benefits List Section */}
      <div className="space-y-2 -mt-4">
        <h4 className="text-2xl font-black text-ff-white uppercase tracking-widest animate-pulse mb-4">Você vai:</h4>
        <div className="space-y-2.5 text-left px-4">
          {["dar full capa com muito mais frequência", "ganhar avalanche de diamantes 💎", "ver seus amigos sentirem o peso de perder pra você 😈"].map((item, i) => (
            <div key={i} className="flex items-center gap-4 glass-card p-4 rounded-2xl border-l-4 border-l-ff-success shadow-lg">
              <span className="text-ff-success font-black text-xl flex-shrink-0">✔️</span>
              <span className="text-ff-white font-bold text-sm uppercase italic leading-tight tracking-tight">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Grouped Content */}
      <div className="flex flex-col gap-0">
        {/* Inclusion List */}
        <div id="offer-section" className="pt-8 pb-4 space-y-6">
          <h3 className="text-xl font-black flex items-center justify-center gap-3 text-ff-white uppercase italic">
            📦 O que você vai receber:
          </h3>
          <ul className="flex flex-col items-center gap-4">
            {["Sensi Plug & Play", "Instalação em 30 segundos", "Mira ajustada pra HS", "Antiban blindado", "Compatível com Android"].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-ff-white text-sm font-bold uppercase tracking-tight italic">
                <CheckCircle2 size={18} className="text-ff-success" /> {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Consolidated Bonuses Section */}
        <div className="flex flex-col items-center gap-6">
          {/* Bonus 1 */}
          <div className="space-y-1">
            <p className="text-[10px] font-black text-ff-gold uppercase tracking-[0.3em] leading-none">BÔNUS EXCLUSIVO 01</p>
            <h4 className="text-2xl font-black text-ff-white uppercase italic tracking-wide">Diamond Infinito 💎</h4>
          </div>

          {/* Bonus 2 */}
          <div className="space-y-3">
            <div className="space-y-1">
               <p className="text-[10px] font-black text-ff-orange uppercase tracking-[0.3em] leading-none">BÔNUS SECRETO</p>
               <h4 className="text-2xl font-black text-ff-white uppercase italic tracking-wide">“VANTAGEM OCULTA” 🔥</h4>
            </div>
            <p className="text-ff-white text-[12px] font-bold uppercase italic leading-snug max-w-xs mx-auto text-center">
              (Ninguém do seu squad tem. Só você.) <br/> 
              Exclusivo pra quem entra <span className="text-ff-orange">HOJE</span> no RANK UP VAULT.
            </p>
          </div>

          {/* Final CTA Button */}
          <div id="final-cta-section" className="flex justify-center pt-2 pb-10 px-4 w-full">
            <button 
              onClick={() => { onAction(); onTriggerTransition(); }} 
              className="bg-gradient-to-r from-ff-yellow via-ff-orangeMed to-ff-orange py-3 px-10 rounded-full text-ff-dark font-black text-base flex flex-col items-center justify-center transition-all active:scale-95 shadow-2xl shadow-ff-orange/30 animate-pulse-glow border-b-4 border-ff-orange/50 uppercase tracking-tighter italic"
            >
              <span>🔥 QUERO SUBIR DE NÍVEL AGORA</span>
            </button>
          </div>

          {/* Creator Profile Section */}
          <div className="flex flex-col items-center gap-4 pb-12 px-4">
            <p className="text-ff-white font-black text-sm uppercase italic tracking-widest drop-shadow-md">
              Criador do Rank Up Vault
            </p>
            <div className="relative group">
              <div className="absolute inset-0 bg-ff-gold rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <div className="w-40 h-40 rounded-full border-4 border-ff-gold overflow-hidden shadow-2xl relative z-10 bg-ff-greyDark">
                <img 
                  src="https://i.ibb.co/WWwbdM7x/Design-sem-nome-4.png" 
                  alt="Criador Rank Up Vault" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10 backdrop-blur-md">
              <Instagram size={18} className="text-ff-white" />
              <span className="text-ff-white font-black text-sm uppercase tracking-tighter">
                @dedezinho.digital
              </span>
            </div>
          </div>

          {/* PIRATARIA É CRIME Section */}
          <div className="pt-8 pb-12 px-6 flex flex-col items-center space-y-4 border-t border-white/5 bg-ff-darkSuave/80 mt-4 rounded-b-3xl">
            <h2 className="text-2xl font-bold tracking-tight text-[#00f5a0] uppercase">
              PIRATARIA É <span className="font-black">CRIME</span>
            </h2>
            <p className="text-[11px] md:text-[12px] text-ff-white font-medium text-center leading-relaxed max-w-sm opacity-90">
              A venda do Produto só pode ser realizada através deste site, registrado em nome de RANK UP VALT
              Qualquer outro site onde você encontre este produto é uma FALSIFICAÇÃO e vai contra as leis.
              Evite falsificações e recuse conteúdos ilegais ou pirateados. NÃO adquira programas parecidos
              e que não são baseados em years de estudo da psicologia comportamental.
              Não nos responsabilizamos por compras realizadas em outros sites.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageOne;
