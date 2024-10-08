import type { IconType } from 'react-icons';

import {
  ELEMENT_BASE_SIZES,
  ELEMENT_BASE_VARIANTS,
  ELEMENT_BORDER_SHAPES,
  ELEMENT_DIRECTIONS,
  ELEMENT_EXTENDED_SIZES,
  ELEMENT_EXTENDED_VARIANTS,
  ELEMENT_SPACINGS,
} from '../data/constants';

// common element types
export type ElementBaseSize = (typeof ELEMENT_BASE_SIZES)[number];
export type ElementExtendedSize = (typeof ELEMENT_EXTENDED_SIZES)[number];
export type ElementSpacing = (typeof ELEMENT_SPACINGS)[number];
export type ElementBaseVariant = (typeof ELEMENT_BASE_VARIANTS)[number];
export type ElementExtendedVariant = (typeof ELEMENT_EXTENDED_VARIANTS)[number];
export type ElementDirection = (typeof ELEMENT_DIRECTIONS)[number];
export type ElementBorderShape = (typeof ELEMENT_BORDER_SHAPES)[number];
export interface ElementStatus {
  isDisabled?: boolean;
  isSelected?: boolean;
  isLoading?: boolean;
}
export interface ElementWithHref {
  href?: {
    to: string;
    replace?: boolean;
  };
}
type EventHandler<T extends Element> = Omit<
  React.DOMAttributes<T>,
  'children' | 'dangerouslySetInnerHTML'
>;
export type ElementEventHandler<
  T extends Element,
  K extends keyof EventHandler<T> = never,
> = [K] extends [never] ? EventHandler<T> : Pick<EventHandler<T>, K>;

// polymorphic element types
type AsProp<T extends React.ElementType> = {
  as?: T;
};
export type PolymorphicRef<T extends React.ElementType> =
  React.ComponentPropsWithRef<T>['ref'];
export type PolymorphicElementPropsWithoutRef<
  T extends React.ElementType,
  Props = {},
> = React.PropsWithChildren<
  AsProp<T> & Props & React.ComponentPropsWithoutRef<T>
>;
export type PolymorphicElementPropsWithRef<
  T extends React.ElementType,
  Props = {},
> = PolymorphicElementPropsWithoutRef<T, Props> & {
  ref?: PolymorphicRef<T>;
};

// content element types
export type Children = Exclude<React.ReactNode, null | undefined>;
export type PropsWithChildren<Props = {}> = Omit<Props, 'children'> & {
  children: Children;
};
export interface BaseContent {
  content: Children;
  description?: string;
}
export interface ContentWithId extends BaseContent {
  id: string;
}
export interface ContentWithIcon {
  iconBefore?: ElementEventHandler<SVGElement> &
    Pick<React.ComponentPropsWithoutRef<'svg'>, 'className'> & {
      icon?: IconType;
      size?: ElementExtendedSize;
    };
  iconAfter?: ElementEventHandler<SVGElement> &
    Pick<React.ComponentPropsWithoutRef<'svg'>, 'className'> & {
      icon?: IconType;
      size?: ElementExtendedSize;
    };
}

export interface ContentWithElement {
  elemBefore?: Children;
  elemAfter?: Children;
}
export interface ItemsWithHeading {
  id: string;
  heading: string;
  items: (ContentWithId & ContentWithIcon)[];
}
