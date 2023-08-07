export interface ATOM {
  variant: Variant;
  size: Size;
  shape: Shape;
  modifiers: Modifiers;
}

export interface Variant {
  default: string;
  secondary: string;
  outline: string;
  nav: string;
}

export interface Size {
  xsmall: string;
  small: string;
  medium: string;
  large: string;
  xlarge: string;
}

export interface Shape {
  rounded: string;
  square: string;
  circle: string;
}

export interface Modifiers {
  icon: string;
  iconPosition: string;
  hidden: string;
  loading: string;
}


const text: {

}

const size: {
    xsmall: "h-6 px-2 min-h-6 text-xs",
    small: "h-8 px-3 min-h-8 text-small tracking-wider",
    medium: " h-12 px-4 min-h-12 text-base tracking-widest",
    large: "h-16 px-10 min-h-16 text-large tracking-widest",
    xlarge: "h-20 px-12 min-h-20 text-xl tracking-widest",
}

const color: {
    primary: "bg-primary text-primary-content",
    secondary: "bg-secondary text-secondary-content",
    accent: "bg-accent text-accent-content",
}

"border-primary no-underline outline-primary-content uppercase font-bold text-center rounded hover:brightness-110 hover:scale-95 transition";


  
  export const sizeMap: { [size: string]: string } = {
    xsmall: "h-6 px-2 min-h-6 text-xs",
    small: "h-8 px-3 min-h-8 text-small tracking-wider",
    medium: " h-12 px-4 min-h-12 text-base tracking-widest",
    large: "h-16 px-10 min-h-16 text-large tracking-widest",
    xlarge: "h-20 px-12 min-h-20 text-xl tracking-widest",
  };
  