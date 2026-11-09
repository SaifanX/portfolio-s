import { CSSProperties, ReactNode } from 'react';

export interface LiquidEtherProps {
  colors?: string[];
  intensity?: number;
  mouseForce?: number;
  cursorSize?: number;
  persistence?: number;
  viscosity?: number;
  resolution?: number;
  autoDemo?: boolean;
  autoSpeed?: number;
  autoIntensity?: number;
  autoResumeDelay?: number;
  clickBurst?: boolean;
  bounceEdges?: boolean;
  intro?: boolean;
  lightMode?: boolean;
  backgroundColor?: string;
  maxDevicePixelRatio?: number;
  className?: string;
  style?: CSSProperties;
}

declare const LiquidEther: (props: LiquidEtherProps) => JSX.Element;
export default LiquidEther;
