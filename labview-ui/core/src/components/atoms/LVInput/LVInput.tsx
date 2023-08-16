import React from "react";
import { iATOM } from "../style";
import { ATOMProps } from "../props";
import { generateClasses } from "../../../utils/generateClasses";
import "../../../index.css";
import { LoadingSpinner } from "../../shared/elements";

const InputClasses: iATOM = {
  size: {
    xsmall: "px-2 py-1",
    small: "px-3 py-2",
    medium: "px-4 py-3",
    large: "px-5 py-4",
    xlarge: "px-6 py-5",
  },
  variant: {
    default: "",
    outline: "bg-_color-content text-_color border-2 border-_color",
    nav: "text-white bg-_color",
  },
  color: {
    primary: "bg-primary-800",
    secondary: "bg-secondary-800",
    accent: "bg-accent-700",
    surface: "bg-white text-black",
  },
  shape: {
    rounded: "rounded-md",
    square: "",
    circle: "rounded-full",
  },
  modifiers: {
    uppercase: "uppercase",
    icon: "flex items-center",
    iconPosition: "justify-start",
    hidden: "hidden",
    loading: "opacity-50 cursor-not-allowed",
  },
  text: {
    size: {
      xsmall: "text-xs",
      small: "text-sm",
      medium: "text-base",
      large: "text-lg",
      xlarge: "text-xl",
    },
    weight: {
      bold: "font-bold",
      semiBold: "font-semibold",
      light: "font-light",
      default: "font-normal",
    },
    align: {
      left: "text-left",
      center: "text-center",
    },
    color: {
      primary: "text-primary-content",
      secondary: "text-secondary-content",
      accent: "text-accent-content",
      black: "text-black",
    },
  },
  spacing: {
    none: "m-0",
    compact: "m-2",
    normal: "m-4",
    relaxed: "m-6",
  },
};

export interface LVInputProps extends ATOMProps {
  loading?: boolean;
  hidden?: boolean;
  onClick?: () => void;
}

const LVInput: React.FC<LVInputProps> = ({
  variant = "default",
  size = "medium",
  color = "primary",
  shape = "rounded",
  hidden = false,
  loading = false,
  text = {
    size: "medium",
    weight: "semiBold",
    align: "center",
    color,
  },
  spacing = "normal",
}) => {
  // Initialize the class names with the base variant class
  let classNames: string[];
  if (variant !== "default") {
    classNames = [InputClasses.variant[variant].replace(/_color/g, color)];
  } else {
    classNames = [InputClasses.variant[variant]];
  }

  // Append the rest of the class names conditionally
  classNames = generateClasses(classNames, hidden, "hidden");
  classNames = generateClasses(
    classNames,
    loading,
    "opacity-50 cursor-not-allowed"
  );

  // Apply size class
  classNames.push(InputClasses.size[size]);

  // Apply text size class
  if (text.size) {
    classNames.push(InputClasses.text.size[text.size]);
  } else {
    classNames.push(InputClasses.text.size[size]);
  }

  if (shape) {
    classNames.push(InputClasses.shape[shape]);
  }

  // Apply text weight class
  if (text.weight) {
    classNames.push(InputClasses.text.weight[text.weight]);
  }

  // Apply text align class
  if (text.align) {
    classNames.push(InputClasses.text.align[text.align]);
  }

  // Apply text color class
  if (text.color && variant === "default") {
    classNames.push(InputClasses.text.color[text.color]);
  }

  if (variant === "default") {
    classNames.push(InputClasses.color[color]);
  }

  // Apply spacing class
  classNames.push(InputClasses.spacing[spacing]);

  // Add classes that are required
  classNames.push(
    "focus:-translate-y-1 hover:-translate-y-1 scale-95 transition shadow-xl focus:drop-shadow-2xl focus:scale-100 hover:scale-100 hover:translate-z-0 hover:brightness-110 hover:drop-shadow-2xl"
  );

  return (
    <>
      <input className={classNames.join(" ")}>
        {loading ? (
          <LoadingSpinner
            className={color ? `fill-${color}-content` : "fill-primary-content"}
          />
        ) : null}
      </input>
      <p>{JSON.stringify(classNames)}</p>
    </>
  );
};

export default LVInput;
