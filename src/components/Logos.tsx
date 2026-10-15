import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
}

export const GoogleAIStudioLogo: React.FC<LogoProps> = ({ className = 'w-10 h-10', size = 40 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect width="64" height="64" rx="14" fill="#EFF6FF" />
    <path
      d="M32 10C32 22.15 22.15 32 10 32C22.15 32 32 41.85 32 54C32 41.85 41.85 32 54 32C41.85 32 32 22.15 32 10Z"
      fill="url(#ai_studio_grad)"
    />
    <circle cx="48" cy="18" r="4" fill="#60A5FA" />
    <circle cx="18" cy="46" r="3" fill="#3B82F6" />
    <defs>
      <linearGradient id="ai_studio_grad" x1="10" y1="10" x2="54" y2="54" gradientUnits="userSpaceOnUse">
        <stop stopColor="#2563EB" />
        <stop offset="0.5" stopColor="#38BDF8" />
        <stop offset="1" stopColor="#1D4ED8" />
      </linearGradient>
    </defs>
  </svg>
);

export const SupabaseLogo: React.FC<LogoProps> = ({ className = 'w-10 h-10', size = 40 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect width="64" height="64" rx="14" fill="#EFF6FF" />
    <path
      d="M35.6 13.8C34.7 12.6 32.7 13.2 32.7 14.7V31.5H19.2C17.7 31.5 16.9 33.3 17.8 34.4L30.4 50.2C31.3 51.4 33.3 50.8 33.3 49.3V32.5H46.8C48.3 32.5 49.1 30.7 48.2 29.6L35.6 13.8Z"
      fill="url(#supabase_grad)"
    />
    <path
      d="M32.7 31.5H19.2C17.7 31.5 16.9 33.3 17.8 34.4L30.4 50.2C31.3 51.4 33.3 50.8 33.3 49.3V32.5H46.8C48.3 32.5 49.1 30.7 48.2 29.6L35.6 13.8C34.7 12.6 32.7 13.2 32.7 14.7V31.5Z"
      fillOpacity="0.85"
    />
    <defs>
      <linearGradient id="supabase_grad" x1="18" y1="14" x2="48" y2="50" gradientUnits="userSpaceOnUse">
        <stop stopColor="#3B82F6" />
        <stop offset="0.5" stopColor="#0284C7" />
        <stop offset="1" stopColor="#2563EB" />
      </linearGradient>
    </defs>
  </svg>
);

export const VercelLogo: React.FC<LogoProps> = ({ className = 'w-10 h-10', size = 40 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect width="64" height="64" rx="14" fill="#EFF6FF" />
    <path
      d="M32 14L49 46H15L32 14Z"
      fill="url(#vercel_grad)"
    />
    <defs>
      <linearGradient id="vercel_grad" x1="32" y1="14" x2="32" y2="46" gradientUnits="userSpaceOnUse">
        <stop stopColor="#1D4ED8" />
        <stop offset="1" stopColor="#2563EB" />
      </linearGradient>
    </defs>
  </svg>
);

export const GitHubLogo: React.FC<LogoProps> = ({ className = 'w-10 h-10', size = 40 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect width="64" height="64" rx="14" fill="#EFF6FF" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M32 15C22.61 15 15 22.61 15 32C15 39.52 19.87 45.89 26.63 48.14C27.48 48.3 27.8 47.77 27.8 47.32C27.8 46.92 27.78 45.6 27.78 44.17C23.5 45.1 22.42 42.32 22.42 42.32C21.72 40.54 20.71 40.07 20.71 40.07C19.31 39.12 20.82 39.14 20.82 39.14C22.37 39.25 23.18 40.73 23.18 40.73C24.55 43.08 26.78 42.4 27.66 42.01C27.8 41.02 28.2 40.34 28.64 39.95C25.22 39.56 21.63 38.24 21.63 32.35C21.63 30.67 22.23 29.3 23.21 28.23C23.05 27.84 22.52 26.28 23.36 24.16C23.36 24.16 24.65 23.75 27.6 25.75C28.83 25.41 30.14 25.24 31.45 25.23C32.76 25.24 34.07 25.41 35.3 25.75C38.25 23.75 39.54 24.16 39.54 24.16C40.38 26.28 39.85 27.84 39.69 28.23C40.67 29.3 41.27 30.67 41.27 32.35C41.27 38.26 37.67 39.55 34.24 39.94C34.79 40.41 35.28 41.34 35.28 42.76C35.28 44.8 35.26 46.45 35.26 46.95C35.26 47.41 35.57 47.95 36.43 47.78C43.18 45.52 48.04 39.16 48.04 31.64C48.04 22.61 40.43 15 32 15Z"
      fill="#1E40AF"
    />
  </svg>
);

export const GeminiLogo: React.FC<LogoProps> = ({ className = 'w-10 h-10', size = 40 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect width="64" height="64" rx="14" fill="#EFF6FF" />
    <path
      d="M32 12C32 23.04 23.04 32 12 32C23.04 32 32 40.96 32 52C32 40.96 40.96 32 52 32C40.96 32 32 23.04 32 12Z"
      fill="url(#gemini_grad)"
    />
    <defs>
      <linearGradient id="gemini_grad" x1="12" y1="12" x2="52" y2="52" gradientUnits="userSpaceOnUse">
        <stop stopColor="#2563EB" />
        <stop offset="0.5" stopColor="#38BDF8" />
        <stop offset="1" stopColor="#1E40AF" />
      </linearGradient>
    </defs>
  </svg>
);

export const GoogleDocsLogo: React.FC<LogoProps> = ({ className = 'w-10 h-10', size = 40 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect width="64" height="64" rx="14" fill="#EFF6FF" />
    {/* Page base */}
    <path
      d="M20 14C18.8954 14 18 14.8954 18 16V48C18 49.1046 18.8954 50 20 50H44C45.1046 50 46 49.1046 46 48V24L36 14H20Z"
      fill="#2563EB"
    />
    {/* Folded corner */}
    <path
      d="M36 14L46 24H38C36.8954 24 36 23.1046 36 22V14Z"
      fill="#93C5FD"
    />
    {/* Document lines */}
    <rect x="24" y="29" width="16" height="2.5" rx="1.25" fill="#FFFFFF" />
    <rect x="24" y="34.5" width="16" height="2.5" rx="1.25" fill="#FFFFFF" />
    <rect x="24" y="40" width="10" height="2.5" rx="1.25" fill="#FFFFFF" />
  </svg>
);

export const KaggleLogo: React.FC<LogoProps> = ({ className = 'w-10 h-10', size = 40 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect width="64" height="64" rx="14" fill="#EFF6FF" />
    <path
      d="M22 17H26.8V47H22V17Z"
      fill="#0284C7"
    />
    <path
      d="M42.5 47H36.2L28.8 35.8L35.8 26.5H41.8L34.5 35.8L42.5 47Z"
      fill="#0284C7"
    />
    <path
      d="M33 33.5L41.2 24.5H47.2L37.8 34.6L33 33.5Z"
      fill="#38BDF8"
    />
  </svg>
);

export const CanvaLogo: React.FC<LogoProps> = ({ className = 'w-10 h-10', size = 40 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect width="64" height="64" rx="14" fill="#EFF6FF" />
    <circle cx="32" cy="32" r="20" fill="url(#canva_grad)" />
    <path
      d="M36.8 26.2C35.2 24.8 33.1 24.1 30.6 24.1C25.4 24.1 21.2 28.1 21.2 33.8C21.2 38.6 24.6 42.1 29.8 42.1C33.2 42.1 35.8 40.8 37.4 38.6C37.8 38.1 37.4 37.3 36.8 37.3C36.4 37.3 36 37.5 35.7 37.9C34.4 39.5 32.3 40.5 29.8 40.5C25.7 40.5 23.3 37.5 23.3 33.6C23.3 29.3 26.6 25.8 30.7 25.8C32.7 25.8 34.2 26.4 35.4 27.5C35.8 27.9 36.4 27.8 36.7 27.4C37.1 27 37.1 26.5 36.8 26.2Z"
      fill="#FFFFFF"
    />
    <defs>
      <linearGradient id="canva_grad" x1="12" y1="12" x2="52" y2="52" gradientUnits="userSpaceOnUse">
        <stop stopColor="#06B6D4" />
        <stop offset="0.6" stopColor="#2563EB" />
        <stop offset="1" stopColor="#1E40AF" />
      </linearGradient>
    </defs>
  </svg>
);

export const CustomLogo: React.FC<LogoProps> = ({ className = 'w-10 h-10', size = 40 }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect width="64" height="64" rx="14" fill="#EFF6FF" />
    <circle cx="32" cy="32" r="16" stroke="#2563EB" strokeWidth="2.5" strokeDasharray="4 4" />
    <path d="M32 24V40M24 32H40" stroke="#2563EB" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

export const ShortcutLogoRenderer: React.FC<{
  type: string;
  size?: number;
  className?: string;
}> = ({ type, size = 44, className = '' }) => {
  switch (type) {
    case 'google-ai-studio':
      return <GoogleAIStudioLogo size={size} className={className} />;
    case 'supabase':
      return <SupabaseLogo size={size} className={className} />;
    case 'vercel':
      return <VercelLogo size={size} className={className} />;
    case 'github':
      return <GitHubLogo size={size} className={className} />;
    case 'gemini':
      return <GeminiLogo size={size} className={className} />;
    case 'google-docs':
      return <GoogleDocsLogo size={size} className={className} />;
    case 'kaggle':
      return <KaggleLogo size={size} className={className} />;
    case 'canva':
      return <CanvaLogo size={size} className={className} />;
    default:
      return <CustomLogo size={size} className={className} />;
  }
};
