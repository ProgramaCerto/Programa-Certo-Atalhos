import React from 'react';
import {
  GoogleAIStudioLogo,
  SupabaseLogo,
  VercelLogo,
  GitHubLogo,
  GeminiLogo,
  GoogleDocsLogo,
  KaggleLogo,
  CanvaLogo,
} from './components/Logos';

interface Shortcut {
  name: string;
  url: string;
  logo: React.ReactNode;
}

export default function App() {
  const shortcuts: Shortcut[] = [
    {
      name: 'Google AI Studio',
      url: 'https://aistudio.google.com',
      logo: <GoogleAIStudioLogo size={48} className="w-12 h-12" />,
    },
    {
      name: 'Supabase',
      url: 'https://supabase.com',
      logo: <SupabaseLogo size={48} className="w-12 h-12" />,
    },
    {
      name: 'Vercel',
      url: 'https://vercel.com',
      logo: <VercelLogo size={48} className="w-12 h-12" />,
    },
    {
      name: 'GitHub',
      url: 'https://github.com',
      logo: <GitHubLogo size={48} className="w-12 h-12" />,
    },
    {
      name: 'Gemini',
      url: 'https://gemini.google.com',
      logo: <GeminiLogo size={48} className="w-12 h-12" />,
    },
    {
      name: 'Google Docs',
      url: 'https://docs.google.com',
      logo: <GoogleDocsLogo size={48} className="w-12 h-12" />,
    },
    {
      name: 'Kaggle',
      url: 'https://www.kaggle.com',
      logo: <KaggleLogo size={48} className="w-12 h-12" />,
    },
    {
      name: 'Canva',
      url: 'https://www.canva.com',
      logo: <CanvaLogo size={48} className="w-12 h-12" />,
    },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6 sm:p-10 text-[#1e3a8a]">
      <div className="w-full max-w-4xl">
        {/* Nome do Site */}
        <div className="text-center mb-10 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1d4ed8] tracking-tight">
            Programa Certo Atalhos
          </h1>
        </div>

        {/* Grade dos Atalhos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
          {shortcuts.map((item) => (
            <a
              key={item.name}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border-2 border-[#bfdbfe] hover:border-[#2563eb] rounded-2xl p-6 flex flex-col items-center justify-center text-center transition-all duration-200 hover:shadow-md hover:scale-[1.02] cursor-pointer group"
            >
              <div className="mb-4 flex items-center justify-center">
                {item.logo}
              </div>
              <span className="text-base sm:text-lg font-bold text-[#1e40af] group-hover:text-[#2563eb] transition-colors">
                {item.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
