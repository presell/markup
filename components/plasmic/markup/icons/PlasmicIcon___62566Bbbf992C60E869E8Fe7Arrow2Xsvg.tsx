// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _62566Bbbf992C60E869E8Fe7Arrow2XsvgIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function _62566Bbbf992C60E869E8Fe7Arrow2XsvgIcon(
  props: _62566Bbbf992C60E869E8Fe7Arrow2XsvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.1"}
      viewBox={"0 0 20 9"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M15.16 3.994V.5l4.84 4-4.84 4V5.006H0V3.994h15.16z"}
        fill={"currentColor"}
        fillRule={"evenodd"}
      ></path>
    </svg>
  );
}

export default _62566Bbbf992C60E869E8Fe7Arrow2XsvgIcon;
/* prettier-ignore-end */
