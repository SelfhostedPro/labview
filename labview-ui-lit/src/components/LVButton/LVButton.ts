import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { classCombiner, colorClasses, sizeClasses } from "../../shared/styles";
import install from "@twind/with-web-components";
import config from "../../twind.config";
const withTwind = install(config);

export interface ButtonProps {
  variant?: string;
  color?: "primary" | "secondary" | "accent";
  size?: "xsmall" | "small" | "medium" | "large";
  label?: string;
  onClick?: () => void;
}

@customElement("lv-btn")
export class LVButton extends withTwind(LitElement) {
  @property()
  color: string = "primary";

  @property()
  variant?: string = "default";

  @property()
  size: string = "medium";

  @property({ type: Boolean })
  hidden: boolean = false;

  @property()
  onClick?: () => void;

  private base =
    " rounded hover:scale-95 hover:brightness-110 uppercase font-semibold no-underline gap-2 border inline-flex flex-shrink-0 cursor-pointer select-none flex-wrap items-center justify-center border-transparent text-center transition duration-200 ease-out";

  override render() {
    const color = colorClasses[this.color];
    const size = sizeClasses[this.size];
    const classes = classCombiner(this.base, size, color);
    return html`<h1 .className=${classes}>
        <slot></slot>
      </h1>
      <p>|color: ${color} classes: ${classes}|</p> `;
  }
}
