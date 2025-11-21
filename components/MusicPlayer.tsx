import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Music } from 'lucide-react';

const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const songTitle = "Tấm Thân Dãi Dầu x Đông Phai Mờ Dáng Ai";
  const songUrl = "https://files.catbox.moe/4iu75h.mp3";

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateProgress = () => {
      if (audio.duration) {
        setProgress((audio.currentTime / audio.duration) * 100);
      }
    };

    audio.addEventListener('timeupdate', updateProgress);
    audio.addEventListener('ended', () => setIsPlaying(false));

    // Auto play
    audio.play().then(() => setIsPlaying(true)).catch(() => {});

    return () => {
      audio.removeEventListener('timeupdate', updateProgress);
      audio.removeEventListener('ended', () => setIsPlaying(false));
    };
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <audio ref={audioRef} src={songUrl} loop />

      <div className="bg-white/90 dark:bg-[#1b1b1b]/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-slate-200 dark:border-[#272727] flex items-center gap-3">
        <button
          onClick={togglePlay}
          className="w-8 h-8 rounded-full bg-primary-500 text-black flex items-center justify-center hover:bg-primary-600 transition-colors"
        >
          {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
        </button>

        <div className="flex flex-col max-w-[150px]">
          <div className="flex items-center gap-1">
            <Music className="w-3 h-3 text-primary-500" />
            <span className="text-xs font-medium text-slate-700 dark:text-slate-300 truncate">
              {songTitle}
            </span>
          </div>
          <div className="w-full h-1 bg-slate-200 dark:bg-slate-700 rounded-full mt-1">
            <div
              className="h-full bg-primary-500 rounded-full transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <button
          onClick={toggleMute}
          className="text-slate-500 dark:text-slate-400 hover:text-primary-500 transition-colors"
        >
          {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
        </button>
      </div>
    </div>
  );
};

export default MusicPlayer;
