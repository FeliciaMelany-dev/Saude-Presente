import { LogoInline } from '../assets/logo-inline';

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
}

export function Logo({ className = '', width = 120, height = 120 }: LogoProps) {
  return <LogoInline width={width} height={height} className={className} />;
}
