import React from 'react';
import { Shield, Zap, TrendingUp } from 'lucide-react';

interface FloatingNotificationProps {
  message: string;
  type: 'level' | 'perk' | 'action' | 'headshot';
}

const FloatingNotification: React.FC<FloatingNotificationProps> = ({ message, type }) => {
  // Estilo específico para Headshot conforme imagem enviada (sem a imagem agora)
  if (type === 'headshot') {
    return (
      <div className="bg-[#666666] p-4 rounded-xl flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.5)] border border-white/10 animate-headshot-pop max-w-[300px] w-full">
        <div className="flex-1 text-center">
          <p className="text-3xl font-black text-white italic tracking-tighter uppercase leading-none drop-shadow-lg">
            HEADSHOT!
          </p>
        </div>
        <style>{`
          @keyframes headshot-pop {
            0% { transform: scale(0.5) translateY(-50px); opacity: 0; filter: blur(10px); }
            15% { transform: scale(1.1) translateY(0); opacity: 1; filter: blur(0); }
            20% { transform: scale(1) translateY(0); }
            80% { transform: scale(1) translateY(0); opacity: 1; }
            100% { transform: scale(0.9) translateY(-20px); opacity: 0; filter: blur(5px); }
          }
          .animate-headshot-pop { animation: headshot-pop 2.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards; }
        `}</style>
      </div>
    );
  }

  const config = {
    level: { border: 'border-ff-orange', icon: <TrendingUp size={16} className="text-ff-orange" />, label: 'PROGRESSO DE RANK' },
    perk: { border: 'border-ff-gold', icon: <Zap size={16} className="text-ff-gold" />, label: 'SKILL DESBLOQUEADA' },
    action: { border: 'border-ff-yellow', icon: <Shield size={16} className="text-ff-yellow" />, label: 'SISTEMA ATUALIZADO' }
  }[type as 'level' | 'perk' | 'action'];

  if (!config) return null;

  return (
    <div className={`bg-ff-darkSuave px-4 py-3 rounded-2xl border ${config.border} backdrop-blur-2xl shadow-[0_15px_40px_rgba(0,0,0,0.8)] flex items-center gap-4 animate-phone-notification max-w-[340px] w-full`}>
      <div className="p-2.5 bg-ff-greyDark rounded-2xl shadow-inner">{config.icon}</div>
      <div className="flex-1 min-w-0">
        <p className="text-[9px] font-black text-ff-textLight tracking-[0.25em] mb-0.5 leading-none uppercase font-hud">{config.label}</p>
        <p className="text-xs font-bold text-ff-white leading-tight truncate uppercase italic font-gamer tracking-tight">{message}</p>
      </div>
      <div className="w-1.5 h-10 bg-ff-greyDark rounded-full" />
      <style>{`
        @keyframes phone-notification {
          0% { transform: translateY(-40px) scale(0.95); opacity: 0; filter: blur(8px); }
          10% { transform: translateY(0) scale(1); opacity: 1; filter: blur(0); }
          90% { transform: translateY(0) scale(1); opacity: 1; filter: blur(0); }
          100% { transform: translateY(-20px) scale(0.98); opacity: 0; filter: blur(4px); }
        }
        .animate-phone-notification { animation: phone-notification 5s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
      `}</style>
    </div>
  );
};

export default FloatingNotification;