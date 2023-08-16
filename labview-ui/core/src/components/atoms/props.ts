type Variant = "default" | "secondary" | "outline" | "nav";
type Size = "xsmall" | "small" | "medium" | "large" | "xlarge";
type Shape = "rounded" | "square" | "circle";
type Modifiers = "icon" | "iconPosition" | "hidden" | "loading";
type Color = "primary" | "secondary" | "accent" | "surface";
type TextSize = "xsmall" | "small" | "medium" | "large" | "xlarge";
type TextWeight = "bold" | "semiBold" | "light" | "default";
type TextAlign = "left" | "center";
type TextColor = "primary" | "secondary" | "accent";
type Spacing = "normal" | "compact" | "relaxed";

export interface ATOMProps {
  variant?: Variant;
  size?: Size;
  shape?: Shape;
  modifiers?: Modifiers | Modifiers[];
  color?: Color;
  text?: {
    size?: TextSize;
    weight?: TextWeight;
    align?: TextAlign;
    color?: TextColor;
  };
  spacing?: Spacing;
}
