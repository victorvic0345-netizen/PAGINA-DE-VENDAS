import React, { useState } from 'react';
import { 
  ChevronDown, 
  ChevronUp, 
  Star, 
  ShieldCheck, 
  Target, 
  CheckCircle, 
  Zap, 
  Lock, 
  ShieldAlert,
  Clock,
  Trophy
} from 'lucide-react';

interface PageTwoProps {
  onAction?: () => void;
}

const WistiaPlayer = 'wistia-player' as any;

const PageTwo: React.FC<PageTwoProps> = ({ onAction }) => {
  const handleCheckout = () => {
    onAction?.();
    window.location.href = 'https://pay.lowify.com.br/checkout?product_id=MOvlNM';
  };

  return (
    <div className="flex flex-col gap-10 animate-in slide-in-from-bottom-10 duration-1000 max-w-lg mx-auto pb-32 px-4 text-center items-center relative">
      
      {/* Background Audio Player - Hidden */}
      <div className="fixed opacity-0 pointer-events-none w-px h-px overflow-hidden">
        <WistiaPlayer media-id="9nwhlskto8" swatch="false" auto-play="true" loop="true"></WistiaPlayer>
      </div>

      {/* Header Success */}
      <div className="space-y-6 pt-6 flex flex-col items-center">
        <div className="bg-ff-success/10 border border-ff-success/30 py-1 px-4 rounded-full mb-2">
          <span className="text-ff-success text-[10px] font-black uppercase tracking-widest animate-pulse">
            Acesso Identificado • Vault Aberto
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-tighter text-ff-white uppercase italic">
          VOCÊ ESTÁ <span className="text-ff-gold drop-shadow-[0_0_10px_rgba(255,215,0,0.5)]">DENTRO.</span>
        </h1>
        <p className="text-ff-white font-medium text-lg leading-relaxed max-w-sm mx-auto opacity-90">
          A partir de agora, o seu jogo nunca mais será o mesmo. O <span className="text-ff-orange font-bold uppercase">Rank Up Vault</span> foi liberado para você.
        </p>
        <div className="flex justify-center gap-1.5">
          {[1, 2, 3, 4, 5].map(i => <Star key={i} className="text-ff-yellow fill-ff-yellow" size={18} />)}
        </div>
      </div>

      {/* Product Card - The Loot */}
      <div className="w-full glass-card rounded-3xl p-1 border-2 border-ff-orange/30 shadow-[0_0_40px_rgba(255,87,34,0.2)] overflow-hidden relative group">
        <div className="absolute inset-0 bg-gradient-to-b from-ff-orange/10 to-transparent opacity-50"></div>
        <img 
          src="https://i.ibb.co/RGgzwKB9/Chat-GPT-Image-6-de-jan-de-2026-16-22-38-1.png" 
          alt="Vault Unlocked" 
          className="w-full h-auto object-cover relative z-10"
        />
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-t from-black to-transparent z-20">
          <div className="flex justify-between items-end">
            <div className="text-left">
              <p className="text-[10px] font-black text-ff-orange uppercase tracking-widest">Item Lendário</p>
              <h3 className="text-xl font-black text-ff-white uppercase italic">RANK UP VAULT v1.0</h3>
            </div>
            <div className="bg-ff-gold text-ff-dark px-3 py-1 rounded-md font-black text-xs">OFF -90%</div>
          </div>
        </div>
      </div>

      {/* Stats / Attributes Section */}
      <div className="w-full space-y-4 px-2">
        <h4 className="text-[10px] font-black text-ff-textLight uppercase tracking-[0.3em] mb-4">ATRIBUTOS DESBLOQUEADOS:</h4>
        <div className="grid grid-cols-1 gap-3 p-4 border border-blue-400/20 rounded-xl">
          <StatBar label="Precisão de Mira" value="98%" color="bg-ff-success" />
          <StatBar label="Controle de Recoil" value="85%" color="bg-ff-orange" />
          <StatBar label="Velocidade de HS" value="92%" color="bg-ff-gold" />
        </div>
      </div>

      {/* Headline de Impacto - ATUALIZADA */}
      <div className="space-y-4 py-6">
        <h2 className="text-2xl font-black text-ff-white uppercase italic tracking-tighter flex items-center justify-center gap-3">
          <Target className="text-ff-orange animate-pulse" /> O que realmente vai acontecer quando você ativar...
        </h2>
        <p className="text-ff-white font-bold text-lg leading-relaxed max-w-sm mx-auto opacity-90">
          Você vai ativar o painel secreto usado pelos jogadores que estão:
        </p>
        <h3 className="text-ff-success text-3xl font-black uppercase tracking-tighter drop-shadow-[0_0_15px_rgba(76,175,80,0.3)]">
          🔥 DROPANDO 90% CAPA SEM ESFORÇO.
        </h3>
      </div>

      {/* BLOCO DE COPY CENTRALIZADO */}
      <div className="flex flex-col gap-8 text-center text-ff-white/90 text-sm md:text-base font-medium italic leading-relaxed max-w-md mx-auto py-4">
        <p>
          Essa é a <span className="text-ff-gold font-black uppercase">DIFERENÇA</span> entre perder <span className="text-ff-white font-black">X1</span> por detalhe… e virar o <span className="text-ff-orange font-black uppercase">JOGADOR QUE O LOBBY INTEIRO EVITA.</span> Essa é a mira mais estável, suave e grudenta que o pessoal das criativas está escondendo.
        </p>
        
        <div className="flex flex-col gap-2">
          <p className="text-ff-orange font-black uppercase tracking-tighter">Se você está cansado de:</p>
          <p>❌ perder trocação por detalhe</p>
          <p>❌ ver a mira correr</p>
          <p>❌ subir torta</p>
          <p>❌ não grudar no peito</p>
          <p className="text-ff-success font-black uppercase">…isso aqui corrige tudo de uma vez.</p>
        </div>

        <p className="text-ff-white font-bold">👉 Aqui você <span className="text-ff-error font-black uppercase underline">NÃO</span> está comprando “configuração comum”. Você está desbloqueando <span className="text-ff-gold font-black uppercase tracking-tighter">VANTAGEM TÉCNICA REAL.</span></p>

        <div className="flex flex-col gap-2">
          <p className="text-ff-gold font-black uppercase tracking-widest">🎯 O RANK UP VAULT foi criado para:</p>
          <p className="flex items-center justify-center gap-2">✔️ <span className="font-bold">ATIVAR SUAVIDADE</span> sem tremer</p>
          <p className="flex items-center justify-center gap-2">✔️ subir do peito pro <span className="text-ff-success font-black uppercase">HS</span> de forma natural</p>
          <p className="flex items-center justify-center gap-2">✔️ impedir bug de mira correndo</p>
          <p className="flex items-center justify-center gap-2">✔️ funcionar em <span className="text-ff-success font-black">ANDROID</span> e emulador</p>
          <p className="flex items-center justify-center gap-2">✔️ <span className="font-bold">TRAVAR SUA SENSI</span> pra não desregular nunca mais</p>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-ff-orangeMed font-black uppercase tracking-[0.2em] shadow-ff-orange/10">⚡ O MELHOR DE TUDO:</p>
          <p className="font-bold">✔️ Instala em 30 SEGUNDOS</p>
          <p className="font-bold">✔️ Já entra <span className="uppercase">QUEBRANDO</span></p>
          <p className="font-bold">✔️ Sem enrolação</p>
          <p className="font-bold">✔️ Sem tutorial gigante</p>
          <p className="font-bold">✔️ Sem gambiarra</p>
        </div>

        <p className="text-ff-white font-bold text-lg">
          É simples: <span className="text-ff-gold uppercase">ATIVAR</span> → <span className="text-ff-white uppercase">ABRIR O JOGO</span> → <span className="text-ff-success uppercase">SENTIR DIFERENÇA NA PRIMEIRA PARTIDA</span>
        </p>
        
        <p className="opacity-70 font-bold">Quem usa, entende na hora. Quem não usa… continua tentando no achismo.</p>

        <div className="flex flex-col gap-6 pt-6 border-t border-white/5">
          <p className="text-ff-error font-black text-xl uppercase tracking-widest animate-pulse">🚨 AGORA VOCÊ TEM 2 CAMINHOS:</p>
          
          <div className="flex flex-col gap-1">
            <p className="text-ff-white/60 font-black uppercase tracking-tighter">❌ Continuar jogando igual NPC</p>
            <p className="text-xs opacity-50 uppercase">Errando capa, ouvindo piadinha no squad, sendo chamado de ruim por não acertar HS.</p>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-ff-success font-black text-lg leading-tight uppercase">
              ✅ Ou garantir o <span className="text-ff-gold">RANK UP VAULT</span> por apenas <span className="text-ff-white underline">R$ 7,99</span> e começar a dar <span className="bg-ff-success/20 px-2">SÓ CAPA</span>
            </p>
            <p className="text-ff-white font-black italic tracking-tighter">
              com seus amigos te chamando de <span className="text-ff-gold uppercase">“XITADO CABULOSO” 😎🔥</span>
            </p>
            <p className="text-[10px] opacity-60 uppercase font-bold">(sim… as meninas piram num xitado cabuloso 👌🏾)</p>
          </div>
        </div>
      </div>

      {/* Final Offer Card */}
      <div className="w-full glass-card rounded-[40px] p-8 border border-white/10 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-ff-orange/10 blur-[60px] rounded-full"></div>
        <div className="space-y-6 relative z-10">
          <div className="space-y-2">
            <p className="text-ff-textLight text-sm font-bold uppercase tracking-widest line-through opacity-50">De R$ 19,90 por apenas:</p>
            <div className="flex items-center justify-center gap-2">
              <span className="text-ff-gold text-7xl font-black italic tracking-tighter drop-shadow-[0_0_20px_rgba(255,215,0,0.3)]">R$ 7,99</span>
            </div>
            <p className="text-ff-white/80 text-xs font-bold uppercase tracking-widest">ACESSO POR 1 MÊS</p>
          </div>

          <button 
            onClick={handleCheckout} 
            className="w-full bg-gradient-to-r from-ff-yellow via-ff-orangeMed to-ff-orange py-5 rounded-2xl text-ff-dark font-black text-xl shadow-[0_10px_30px_rgba(255,87,34,0.4)] transition-all active:scale-95 hover:brightness-110 flex items-center justify-center gap-3 uppercase tracking-tighter italic"
          >
            <Zap size={24} className="fill-ff-dark" />
            RESGATAR ACESSO AGORA
          </button>

          <div className="flex flex-col items-center gap-4 pt-4 border-t border-white/5">
            <div className="flex gap-4 opacity-60">
               <img src="https://img.icons8.com/color/48/000000/visa.png" className="h-6 grayscale hover:grayscale-0 transition-all" alt="Visa" />
               <img src="https://img.icons8.com/color/48/000000/mastercard.png" className="h-6 grayscale hover:grayscale-0 transition-all" alt="Master" />
               <img src="https://i.ibb.co/X7Wq1XG/pix-logo.png" className="h-5 grayscale hover:grayscale-0 transition-all" alt="Pix" />
            </div>
            <p className="flex items-center gap-2 text-[10px] font-bold text-ff-success uppercase tracking-widest">
              <Lock size={12} /> Pagamento 100% Criptografado e Seguro
            </p>
          </div>
        </div>
      </div>

      {/* Warranty Section */}
      <div className="flex flex-col items-center gap-4 py-8 px-6 glass-card rounded-3xl border border-ff-success/20 bg-ff-success/5 w-full">
        <div className="bg-ff-success/20 p-4 rounded-full">
          <ShieldCheck size={48} className="text-ff-success" />
        </div>
        <div className="space-y-2">
          <h4 className="text-xl font-black text-ff-white uppercase">GARANTIA BLINDADA DE 7 DIAS</h4>
          <p className="text-sm text-ff-white/70 leading-relaxed italic">
            O risco é todo meu. Se você não sentir a mira colar na cabeça dos oponentes em até 7 dias, eu devolvo 100% do seu dinheiro. Sem perguntas.
          </p>
        </div>
      </div>

      {/* FAQ Section - UPDATED WITH NEW CONTENT */}
      <div className="w-full space-y-6 mt-6">
        <h3 className="text-xl md:text-2xl font-black text-ff-white italic uppercase tracking-tighter flex items-center justify-center gap-3">
           🧠 F.A.Q — PERGUNTAS QUE TODO PLAYER FAZ
        </h3>
        <div className="space-y-3">
          <FAQItem 
            question="1️⃣ Preciso entender de configuração pra usar?" 
            answer="Não. É plug & play. Copiou, ativou e jogou." 
          />
          <FAQItem 
            question="2️⃣ Isso pode dar ban?" 
            answer="Não. Não mexe no jogo nem usa arquivos proibidos." 
          />
          <FAQItem 
            question="3️⃣ Em quanto tempo vejo diferença?" 
            answer="Na primeira partida. A mira já responde diferente." 
          />
          <FAQItem 
            question="4️⃣ Funciona pra quem já tentou outras sensis e falhou?" 
            answer="Sim. Essa corrige o erro que as outras não corrigem." 
          />
          <FAQItem 
            question="5️⃣ Vou ter que mudar meu jeito de jogar?" 
            answer="Não. A sensi se adapta ao seu estilo." 
          />
          <FAQItem 
            question="6️⃣ E se eu não sentir diferença?" 
            answer="Quem ativa corretamente sente. É ajuste técnico, não promessa vazia." 
          />
        </div>
      </div>

      {/* Footer Info */}
      <div className="flex flex-col items-center gap-4 opacity-40 py-10">
        <div className="flex items-center gap-2">
          <ShieldAlert size={14} />
          <span className="text-[10px] font-bold uppercase tracking-widest">Plataforma Segura • Lowify Payments</span>
        </div>
        <p className="text-[9px] uppercase font-medium">© 2024 Rank Up Vault. Todos os direitos reservados.</p>
      </div>
    </div>
  );
};

// Components Auxiliares
const StatBar: React.FC<{ label: string; value: string; color: string }> = ({ label, value, color }) => (
  <div className="w-full space-y-1.5">
    <div className="flex justify-between items-center px-1">
      <span className="text-[11px] font-black text-ff-white uppercase italic tracking-tighter">{label}</span>
      <span className={`text-[11px] font-black ${color.replace('bg-', 'text-')} italic tracking-tighter`}>+{value}</span>
    </div>
    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
      <div className={`h-full ${color} shadow-[0_0_10px_rgba(255,255,255,0.2)]`} style={{ width: value }}></div>
    </div>
  </div>
);

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="glass-card rounded-2xl border border-white/5 overflow-hidden text-left transition-all duration-300">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="w-full p-5 flex items-center justify-between text-left hover:bg-white/5"
      >
        <span className="font-black text-sm text-ff-white uppercase tracking-tight leading-tight">{question}</span>
        {isOpen ? <ChevronUp size={20} className="text-ff-orange" /> : <ChevronDown size={20} className="text-ff-orange" />}
      </button>
      {isOpen && (
        <div className="px-5 pb-5 animate-in slide-in-from-top-2 duration-300">
          <p className="text-[13px] text-ff-white/80 font-medium border-t border-white/5 pt-4 italic leading-relaxed">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
};

export default PageTwo;