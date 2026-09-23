"use client";

import {
  motion,
  useReducedMotion,
  type BezierDefinition,
  type Variants,
  type HTMLMotionProps,
} from "framer-motion";
import { createElement, type ReactNode } from "react";

/* ------------------------------------------------------------------ */
/*  Shared defaults                                                    */
/* ------------------------------------------------------------------ */

const EASE: BezierDefinition = [0.2, 0.75, 0.25, 1]; // matches --ease-fluid
const DURATION = 0.6;
const VIEWPORT = { once: true, margin: "-80px" } as const;

/* ------------------------------------------------------------------ */
/*  FadeIn                                                             */
/* ------------------------------------------------------------------ */

type FadeInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  /** Set to "x" for a horizontal slide, default is "y" (vertical). */
  direction?: "x" | "y";
  /** Distance in px the element travels. Default 20. */
  distance?: number;
  as?: "div" | "section" | "li" | "p" | "span" | "footer";
} & Omit<HTMLMotionProps<"div">, "children">;

export function FadeIn({
  children,
  className,
  delay = 0,
  duration = DURATION,
  direction = "y",
  distance = 20,
  as = "div",
  ...rest
}: FadeInProps) {
  const shouldReduce = useReducedMotion();

  if (shouldReduce) {
    return createElement(as, { className }, children);
  }

  const Component = motion[as] as typeof motion.div;

  return (
    <Component
      className={className}
      initial={{ opacity: 0, [direction]: distance }}
      whileInView={{ opacity: 1, [direction]: 0 }}
      viewport={VIEWPORT}
      transition={{ duration, delay, ease: EASE }}
      {...rest}
    >
      {children}
    </Component>
  );
}

/* ------------------------------------------------------------------ */
/*  ScaleIn  –  subtle scale entrance (hero image, decorative rings)   */
/* ------------------------------------------------------------------ */

type ScaleInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  from?: number;
};

export function ScaleIn({
  children,
  className,
  delay = 0,
  duration = 0.8,
  from = 0.94,
}: ScaleInProps) {
  const shouldReduce = useReducedMotion();

  if (shouldReduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: from }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={VIEWPORT}
      transition={{ duration, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Stagger container + item                                           */
/* ------------------------------------------------------------------ */

const staggerItemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION, ease: EASE },
  },
};

type StaggerContainerProps = {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  as?: "div" | "ol" | "ul" | "dl";
} & Omit<HTMLMotionProps<"div">, "children">;

export function StaggerContainer({
  children,
  className,
  staggerDelay = 0.1,
  as = "div",
  ...rest
}: StaggerContainerProps) {
  const shouldReduce = useReducedMotion();

  if (shouldReduce) {
    return createElement(as, { className }, children);
  }

  const variants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: staggerDelay } },
  };

  const Component = motion[as] as typeof motion.div;

  return (
    <Component
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      {...rest}
    >
      {children}
    </Component>
  );
}

type StaggerItemProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "li" | "article";
} & Omit<HTMLMotionProps<"div">, "children">;

export function StaggerItem({
  children,
  className,
  as = "div",
  ...rest
}: StaggerItemProps) {
  const shouldReduce = useReducedMotion();

  if (shouldReduce) {
    return createElement(as, { className }, children);
  }

  const Component = motion[as] as typeof motion.div;

  return (
    <Component className={className} variants={staggerItemVariants} {...rest}>
      {children}
    </Component>
  );
}
