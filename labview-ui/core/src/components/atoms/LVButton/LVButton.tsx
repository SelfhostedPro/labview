import React, { Component, PropsWithChildren } from "react";
import { colorMap, sizeMap } from "../../shared/styles";
import "../../index.css";
import { LoadingSpinner } from "../../shared/elements";
import {ATOM} from '../style'

export interface LVButtonProps extends LVBaseProps {
  loading?: boolean;
  hidden?: boolean;
  size?: "xsmall" | "small" | "medium" | "large" | "xlarge";
  onClick?: () => void;
}

const ButtonClasses: ATOM = {
  size: {
    xsmall: '',
    small: '',
    medium: '',
    large: '',
    xlarge: ''
  },
  variant: {
    default: '',
    secondary: '',
    outline: '',
    nav: '',
  },
}


/**
 * Primary UI component for user interaction
 */
export class LVButton extends Component<PropsWithChildren<LVButtonProps>> {
  private readonly base =
    "border-primary no-underline outline-primary-content uppercase font-bold text-center rounded hover:brightness-110 hover:scale-95 transition";

  private readonly loading = "pointer-events-none contrast-50";
  render() {
    return (
      <button
        className={[
          this.base,
          colorMap[this.props.color || "primary"],
          sizeMap[this.props.size || "medium"],
          this.props.hidden ? "hidden" : "",
          this.props.loading ? this.loading : "",
        ].join(" ")}
      >
        {this.props.loading ? (
          <LoadingSpinner
            className={
              this.props.color
                ? `fill-${this.props.color}-content `
                : "fill-primary-content"
            }
          />
        ) : null}
        {this.props.children}
      </button>
    );
  }
}
