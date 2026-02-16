import Link from 'next/link';

interface LogoProps {
  brand?: 'nww' | 'clubcaddy';
  variant?: 'default' | 'white';
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

const sizeStyles = {
  sm: { icon: 'w-8 h-8', text: 'text-lg' },
  md: { icon: 'w-10 h-10', text: 'text-xl' },
  lg: { icon: 'w-12 h-12', text: 'text-2xl' },
};

function ClubCaddyIcon({ className }: { className: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M4 21v-18" />
      <path d="M4 3l12 6-12 6" />
      <circle cx="17" cy="19" r="2" />
    </svg>
  );
}

function NWWIcon({ className }: { className: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" />
    </svg>
  );
}

export function Logo({ brand = 'clubcaddy', variant = 'default', size = 'md', showText = true }: LogoProps) {
  const isNWW = brand === 'nww';
  const primaryColor = isNWW ? 'var(--nww-primary)' : 'var(--color-primary)';

  const textColor = variant === 'white' ? 'text-white' : `text-[${primaryColor}]`;
  const iconBg = variant === 'white' ? 'bg-white' : `bg-[${primaryColor}]`;
  const iconColor = variant === 'white' ? `text-[${primaryColor}]` : 'text-white';

  const href = isNWW ? '/' : '/clubcaddy';
  const name = isNWW ? 'NarenWebWorks' : 'ClubCaddy';
  const ariaLabel = isNWW ? 'NarenWebWorks Home' : 'ClubCaddy Home';

  // Direct color values for better Tailwind compatibility
  const textColorClass = variant === 'white'
    ? 'text-white'
    : isNWW
      ? 'text-[#B163FF]'
      : 'text-[#01941a]';

  const iconBgClass = variant === 'white'
    ? 'bg-white'
    : isNWW
      ? 'bg-[#B163FF]'
      : 'bg-[#01941a]';

  const iconColorClass = variant === 'white'
    ? isNWW
      ? 'text-[#B163FF]'
      : 'text-[#01941a]'
    : 'text-white';

  // NWW brand shows only "NWW" text, no icon
  if (isNWW) {
    return (
      <Link href={href} className="flex items-center group" aria-label={ariaLabel}>
        <span className={`font-bold ${sizeStyles[size].text} ${textColorClass} font-[var(--font-heading)] tracking-tight`}>
          NWW
        </span>
      </Link>
    );
  }

  return (
    <Link href={href} className="flex items-center gap-2 group" aria-label={ariaLabel}>
      <div
        className={`
          ${sizeStyles[size].icon} ${iconBgClass}
          rounded-lg flex items-center justify-center
          transition-transform duration-200 group-hover:scale-105
        `}
      >
        <ClubCaddyIcon className={`w-5 h-5 ${iconColorClass}`} />
      </div>
      {showText && (
        <span className={`font-bold ${sizeStyles[size].text} ${textColorClass} font-[var(--font-heading)]`}>
          {name}
        </span>
      )}
    </Link>
  );
}
