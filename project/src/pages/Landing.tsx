import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Landing() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  const handleClick = () => {
    navigate('/dashboard');
  };

  return (
    <div
      onClick={handleClick}
      className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center cursor-pointer overflow-hidden"
    >
      <div
        className={`text-center transition-all duration-1000 ease-out transform ${
          isVisible
            ? 'opacity-100 scale-100 translate-y-0'
            : 'opacity-0 scale-90 translate-y-8'
        }`}
      >
        <h1 className="text-8xl md:text-9xl font-bold text-white mb-4 tracking-tight">
          Product<span className="text-blue-400">IQ</span>
        </h1>
        <p className="text-gray-400 text-xl animate-pulse">Click anywhere to continue</p>
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-slate-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>
    </div>
  );
}

export default Landing;
