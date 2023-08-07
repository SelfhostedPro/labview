export interface Dictionary {
  [scheme: string]: string;
}
export const colorClasses: Dictionary = {
  primary: "bg-primary-500 text-primary-content",
  secondary: "bg-secondary-500 text-secondary-content",
  accent: "bg-accent-400 text-accent-content",
};

export const sizeClasses: Dictionary = {
    xsmall: "h-6 px-2 min-h-6",
    small: "h-8 px-3 min-h-8",
    medium: "h-12 px-4 min-h-12",
    large: "h-16 px-6 min-h-16"
}

export const classCombiner = (...classes: string[]): string => {
    console.log(classes);
  return classes.join(" ");
};
