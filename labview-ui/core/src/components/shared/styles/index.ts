import * as atom from "../../atoms/style";

interface MOLECULE {}

export const colorMap: { [color: string]: string } = {
  primary: "bg-primary text-primary-content",
  secondary: "bg-secondary text-secondary-content",
  accent: "bg-accent text-accent-content",
};

export const sizeMap: { [size: string]: string } = {
  xsmall: "h-6 px-2 min-h-6 text-xs",
  small: "h-8 px-3 min-h-8 text-small tracking-wider",
  medium: " h-12 px-4 min-h-12 text-base tracking-widest",
  large: "h-16 px-10 min-h-16 text-large tracking-widest",
  xlarge: "h-20 px-12 min-h-20 text-xl tracking-widest",
};

interface ORGANISM {}
interface TEMPLATE {}

export interface LVStyleMap {
  atom: atom.ATOM;
  molecule: MOLECULE;
  organism: ORGANISM;
  template: TEMPLATE;
}
