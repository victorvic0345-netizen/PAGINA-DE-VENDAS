
import React, { useState, useEffect, useCallback, useRef } from 'react';
import PageOne from './components/PageOne';
import PageTwo from './components/PageTwo';
import TransitionOverlay from './components/TransitionOverlay';
import FloatingNotification from './components/FloatingNotification';

const playSound = (type: 'ping' | 'success' | 'level' | 'headshot') => {
  if (type === 'headshot') {
    const audio = new Audio('https://www.myinstants.com/media/sounds/headshot.mp3');
    audio.volume = 0.6;
    audio.play().catch(e => console.debug("Audio play blocked", e));
    return;
  }

  const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.connect(gain);
  gain.connect(ctx.destination);
  const now = ctx.currentTime;
  
  if (type === 'ping') {
    osc.type = 'sine';
    osc.frequency.setValueAtTime(880, now);
    osc.frequency.exponentialRampToValueAtTime(440, now + 0.1);
    gain.gain.setValueAtTime(0.1, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.1);
    osc.start(now);
    osc.stop(now + 0.1);
  } else if (type === 'success') {
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(523.25, now);
    osc.frequency.exponentialRampToValueAtTime(1046.5, now + 0.2);
    gain.gain.setValueAtTime(0.1, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.3);
    osc.start(now);
    osc.stop(now + 0.3);
  } else if (type === 'level') {
    osc.type = 'square';
    osc.frequency.setValueAtTime(200, now);
    osc.frequency.linearRampToValueAtTime(800, now + 0.5);
    gain.gain.setValueAtTime(0.05, now);
    gain.gain.linearRampToValueAtTime(0, now + 0.5);
    osc.start(now);
    osc.stop(now + 0.5);
  }
};

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'page1' | 'page2'>('page1');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [notification, setNotification] = useState<{ message: string; type: 'level' | 'perk' | 'action' | 'headshot' } | null>(null);

  const handleStartTransition = useCallback(() => {
    // Toca o som de Headshot solicitado
    playSound('headshot');
    
    // Mostra a notificação de Headshot solicitada
    setNotification({ message: "HEADSHOT!", type: 'headshot' });
    
    setTimeout(() => {
      setNotification(null);
      setIsTransitioning(true);
      playSound('level');
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentPage('page2');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 3000);
    }, 1500);
  }, []);

  const backgroundClass = currentPage === 'page1' ? 'bg-hero-grad' : 'bg-black';

  return (
    <div className={`min-h-screen ${backgroundClass} bg-fixed text-ff-textLight flex flex-col items-center select-none overflow-x-hidden font-inter relative transition-colors duration-1000`}>
      {/* Scarcity Banner at the top of everything */}
      <div className="w-full bg-[#c40000] py-2.5 flex justify-center items-center shadow-lg sticky top-0 z-[120]">
        <p className="scarcity-banner-text text-white text-[13px] md:text-sm font-black text-center uppercase tracking-tight">
          {/* Populated by head script */}
          Carregando oferta...
        </p>
      </div>

      <div className="fixed top-24 left-0 right-0 z-[110] flex flex-col items-center pointer-events-none px-4">
        {notification && <FloatingNotification message={notification.message} type={notification.type} />}
      </div>
      {isTransitioning && <TransitionOverlay />}
      <main className="w-full max-w-xl mx-auto px-4 py-8 relative z-10 mb-10">
        <div className="fixed inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,87,34,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-50 bg-[length:100%_2px,3px_100%]"></div>
        {currentPage === 'page1' ? (
          <PageOne onTriggerTransition={handleStartTransition} onAction={() => playSound('ping')} />
        ) : (
          <PageTwo onAction={() => playSound('ping')} />
        )}
      </main>
    </div>
  );
};

export default App;
