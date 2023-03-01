// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: eDreYSBqUCxfxxx8v4DS41
// Component: 7vXu9p_UWFBB1N
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

import * as pp from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_markup.module.css"; // plasmic-import: eDreYSBqUCxfxxx8v4DS41/projectcss
import sty from "./PlasmicCheckbox.module.css"; // plasmic-import: 7vXu9p_UWFBB1N/css

import SquaresvgIcon from "./icons/PlasmicIcon__Squaresvg"; // plasmic-import: bfKy0CQxtv9wD0/icon
import SquareCheckFilledsvgIcon from "./icons/PlasmicIcon__SquareCheckFilledsvg"; // plasmic-import: krvmYvxt4utxf4/icon
import SquareMinussvgIcon from "./icons/PlasmicIcon__SquareMinussvg"; // plasmic-import: O0JhSwZ5tRnOmd/icon

export type PlasmicCheckbox__VariantMembers = {
  noLabel: "noLabel";
  isDisabled: "isDisabled";
  isChecked: "isChecked";
  isIndeterminate: "isIndeterminate";
};
export type PlasmicCheckbox__VariantsArgs = {
  noLabel?: SingleBooleanChoiceArg<"noLabel">;
  isDisabled?: SingleBooleanChoiceArg<"isDisabled">;
  isChecked?: SingleBooleanChoiceArg<"isChecked">;
  isIndeterminate?: SingleBooleanChoiceArg<"isIndeterminate">;
};
type VariantPropType = keyof PlasmicCheckbox__VariantsArgs;
export const PlasmicCheckbox__VariantProps = new Array<VariantPropType>(
  "noLabel",
  "isDisabled",
  "isChecked",
  "isIndeterminate"
);

export type PlasmicCheckbox__ArgsType = {
  children?: React.ReactNode;
  name?: string;
  value?: string;
  "aria-label"?: string;
  "aria-labelledby"?: string;
};
type ArgPropType = keyof PlasmicCheckbox__ArgsType;
export const PlasmicCheckbox__ArgProps = new Array<ArgPropType>(
  "children",
  "name",
  "value",
  "aria-label",
  "aria-labelledby"
);

export type PlasmicCheckbox__OverridesType = {
  root?: p.Flex<"div">;
  freeBox?: p.Flex<"div">;
  svg?: p.Flex<"svg">;
  labelContainer?: p.Flex<"div">;
};

export interface DefaultCheckboxProps extends pp.CheckboxProps {
  "aria-label"?: string;
  "aria-labelledby"?: string;
}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicCheckbox__RenderFunc(props: {
  variants: PlasmicCheckbox__VariantsArgs;
  args: PlasmicCheckbox__ArgsType;
  overrides: PlasmicCheckbox__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};
  const [$queries, setDollarQueries] = React.useState({});
  const stateSpecs = React.useMemo(
    () => [
      {
        path: "noLabel",
        type: "private",
        variableType: "variant",
        initFunc: true
          ? ({ $props, $state, $queries, $ctx }) => $props.noLabel
          : undefined
      },
      {
        path: "isDisabled",
        type: "private",
        variableType: "variant",
        initFunc: true
          ? ({ $props, $state, $queries, $ctx }) => $props.isDisabled
          : undefined
      },
      {
        path: "isChecked",
        type: "private",
        variableType: "variant",
        initFunc: true
          ? ({ $props, $state, $queries, $ctx }) => $props.isChecked
          : undefined
      },
      {
        path: "isIndeterminate",
        type: "private",
        variableType: "variant",
        initFunc: true
          ? ({ $props, $state, $queries, $ctx }) => $props.isIndeterminate
          : undefined
      }
    ],
    [$props, $ctx]
  );
  const $state = p.useDollarState(stateSpecs, { $props, $ctx, $queries });

  const [isRootFocusVisibleWithin, triggerRootFocusVisibleWithinProps] =
    useTrigger("useFocusVisibleWithin", {
      isTextInput: false
    });
  const triggers = {
    focusVisibleWithin_root: isRootFocusVisibleWithin
  };

  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root,
        {
          [sty.root___focusVisibleWithin]: triggers.focusVisibleWithin_root,
          [sty.rootisChecked]: hasVariant($state, "isChecked", "isChecked"),
          [sty.rootisDisabled]: hasVariant($state, "isDisabled", "isDisabled"),
          [sty.rootisIndeterminate]: hasVariant(
            $state,
            "isIndeterminate",
            "isIndeterminate"
          ),
          [sty.rootnoLabel]: hasVariant($state, "noLabel", "noLabel")
        }
      )}
      data-plasmic-trigger-props={[triggerRootFocusVisibleWithinProps]}
    >
      <div
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        className={classNames(projectcss.all, sty.freeBox, {
          [sty.freeBox___focusVisibleWithin]: triggers.focusVisibleWithin_root,
          [sty.freeBoxisChecked]: hasVariant($state, "isChecked", "isChecked"),
          [sty.freeBoxisDisabled]: hasVariant(
            $state,
            "isDisabled",
            "isDisabled"
          ),
          [sty.freeBoxisIndeterminate]: hasVariant(
            $state,
            "isIndeterminate",
            "isIndeterminate"
          ),
          [sty.freeBoxnoLabel]: hasVariant($state, "noLabel", "noLabel")
        })}
      >
        {(
          hasVariant($state, "isIndeterminate", "isIndeterminate")
            ? true
            : hasVariant($state, "isChecked", "isChecked")
            ? true
            : true
        ) ? (
          <p.PlasmicIcon
            data-plasmic-name={"svg"}
            data-plasmic-override={overrides.svg}
            PlasmicIconType={
              hasVariant($state, "isIndeterminate", "isIndeterminate")
                ? SquareMinussvgIcon
                : hasVariant($state, "isChecked", "isChecked")
                ? SquareCheckFilledsvgIcon
                : SquaresvgIcon
            }
            className={classNames(projectcss.all, sty.svg, {
              [sty.svg___focusVisibleWithin]: triggers.focusVisibleWithin_root,
              [sty.svgisChecked]: hasVariant($state, "isChecked", "isChecked"),
              [sty.svgisDisabled]: hasVariant(
                $state,
                "isDisabled",
                "isDisabled"
              ),
              [sty.svgisIndeterminate]: hasVariant(
                $state,
                "isIndeterminate",
                "isIndeterminate"
              ),
              [sty.svgnoLabel]: hasVariant($state, "noLabel", "noLabel")
            })}
            role={"img"}
          />
        ) : null}
      </div>

      {(hasVariant($state, "noLabel", "noLabel") ? false : true) ? (
        <div
          data-plasmic-name={"labelContainer"}
          data-plasmic-override={overrides.labelContainer}
          className={classNames(projectcss.all, sty.labelContainer, {
            [sty.labelContainer___focusVisibleWithin]:
              triggers.focusVisibleWithin_root,
            [sty.labelContainerisDisabled]: hasVariant(
              $state,
              "isDisabled",
              "isDisabled"
            ),
            [sty.labelContainernoLabel]: hasVariant(
              $state,
              "noLabel",
              "noLabel"
            )
          })}
        >
          {p.renderPlasmicSlot({
            defaultContents: "Enter some text",
            value: args.children,
            className: classNames(sty.slotTargetChildren, {
              [sty.slotTargetChildren___focusVisibleWithin]:
                triggers.focusVisibleWithin_root,
              [sty.slotTargetChildrenisChecked]: hasVariant(
                $state,
                "isChecked",
                "isChecked"
              ),
              [sty.slotTargetChildrenisDisabled]: hasVariant(
                $state,
                "isDisabled",
                "isDisabled"
              ),
              [sty.slotTargetChildrenisIndeterminate]: hasVariant(
                $state,
                "isIndeterminate",
                "isIndeterminate"
              ),
              [sty.slotTargetChildrennoLabel]: hasVariant(
                $state,
                "noLabel",
                "noLabel"
              )
            })
          })}
        </div>
      ) : null}
    </p.Stack>
  ) as React.ReactElement | null;
}

function useBehavior<P extends pp.CheckboxProps>(
  props: P,
  ref: pp.CheckboxRef
) {
  if (!("children" in props)) {
    props = {
      ...props,
      children: "Enter some text"
    };
  }

  return pp.useCheckbox<P, typeof PlasmicCheckbox>(
    PlasmicCheckbox,
    props,
    {
      isCheckedVariant: { group: "isChecked", variant: "isChecked" },
      isIndeterminateVariant: {
        group: "isIndeterminate",
        variant: "isIndeterminate"
      },
      isDisabledVariant: { group: "isDisabled", variant: "isDisabled" },
      noLabelVariant: { group: "noLabel", variant: "noLabel" },
      labelSlot: "children",
      root: "root"
    },
    ref
  );
}

const PlasmicDescendants = {
  root: ["root", "freeBox", "svg", "labelContainer"],
  freeBox: ["freeBox", "svg"],
  svg: ["svg"],
  labelContainer: ["labelContainer"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  freeBox: "div";
  svg: "svg";
  labelContainer: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicCheckbox__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicCheckbox__VariantsArgs;
    args?: PlasmicCheckbox__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicCheckbox__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicCheckbox__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicCheckbox__ArgProps,
          internalVariantPropNames: PlasmicCheckbox__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicCheckbox__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCheckbox";
  } else {
    func.displayName = `PlasmicCheckbox.${nodeName}`;
  }
  return func;
}

export const PlasmicCheckbox = Object.assign(
  // Top-level PlasmicCheckbox renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    svg: makeNodeComponent("svg"),
    labelContainer: makeNodeComponent("labelContainer"),

    // Metadata about props expected for PlasmicCheckbox
    internalVariantProps: PlasmicCheckbox__VariantProps,
    internalArgProps: PlasmicCheckbox__ArgProps,

    useBehavior
  }
);

export default PlasmicCheckbox;
/* prettier-ignore-end */
