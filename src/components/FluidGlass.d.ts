import { CSSProperties, ReactNode } from 'react';

export interface FluidGlassProps {
  text?: string;
  textColor?: string;
  fontFamily?: string;
  fontWeight?: number | string;
  fontSize?: number;
  src?: string;
  fit?: 'cover' | 'contain';
  background?: string;
  shape?: 'lens' | 'blob' | 'cube' | 'pill' | 'torus' | 'prism' | 'diamond';
  shapes?: string[];
  size?: number;
  refraction?: number;
  dispersion?: number;
  reflection?: number;
  frost?: number;
  color?: string;
  tint?: number;
  shadow?: number;
  elevation?: number;
  interaction?: 'follow' | 'drag' | 'static';
  smoothness?: number;
  wobble?: number;
  spin?: number;
  idle?: boolean;
  morphOnClick?: boolean;
  onShapeChange?: (shape: string) => void;
  position?: [number, number];
  intro?: boolean;
  maxDevicePixelRatio?: number;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
}

declare const FluidGlass: (props: FluidGlassProps) => JSX.Element;
export default FluidGlass;
