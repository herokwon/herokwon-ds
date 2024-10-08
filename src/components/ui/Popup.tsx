import { useEffect, useRef, useState } from 'react';

import type {
  AbsolutePosition,
  ElementDirection,
  ElementStatus,
} from '../../types';

import LoadableElement from '../LoadableElement';
import EmptyData from './EmptyData';

interface PopupProps
  extends Pick<ElementStatus, 'isLoading'>,
    React.ComponentPropsWithoutRef<'div'> {
  isOpen: boolean;
  position?: AbsolutePosition;
  direction?: ElementDirection;
  trigger: React.ReactNode;
  onClose: () => void;
}

export default function Popup({
  children,
  position = 'bottom-center',
  direction = 'vertical',
  trigger,
  onClose,
  ...props
}: PopupProps) {
  const { isLoading = false, isOpen, ...restProps } = props;
  const [maxHeight, setMaxHeight] = useState<number>(0);
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateFloatingInnerMaxHeight = () => {
      const floatingContainer = popupRef.current?.lastElementChild;
      const floatingContainerRect = floatingContainer?.getBoundingClientRect();

      if (!floatingContainerRect) return;

      const floatingContainerMaxHeight =
        document.body.clientHeight < floatingContainerRect.bottom
          ? floatingContainerRect.height -
            (floatingContainerRect.bottom - document.body.clientHeight)
          : floatingContainerRect.height +
            (document.body.clientHeight - floatingContainerRect.bottom);
      setMaxHeight(floatingContainerMaxHeight - 16);
    };

    updateFloatingInnerMaxHeight();
    window.addEventListener('resize', updateFloatingInnerMaxHeight);
    return () =>
      window.addEventListener('resize', updateFloatingInnerMaxHeight);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const onClickHandle = (e: MouseEvent) =>
      isOpen &&
      !popupRef.current?.contains(e.target as Node | null) &&
      onClose();

    document.addEventListener('mousedown', onClickHandle);
    return () => document.removeEventListener('mousedown', onClickHandle);
  }, [isOpen, onClose]);

  return (
    <div
      {...restProps}
      ref={popupRef}
      className={`relative ${restProps.className ?? ''}`}
    >
      {trigger}
      <div
        className={`floating-container ${
          isOpen ? 'open' : ''
        } to-${position} absolute z-10 w-max max-w-[80vw] p-2 transition-all will-change-transform`}
      >
        <LoadableElement
          isActive={isLoading}
          variant="spinner"
          className="last:*:rounded-ms"
        >
          <div
            className={`flex flex-col gap-2 rounded-ms border border-light-tertiary bg-light-primary ${
              direction === 'vertical' ? 'y-scrollbar' : 'x-scrollbar'
            } ${typeof children === 'string' ? 'px-2 py-1 text-sm' : 'py-2'} shadow-primary-light shadow-light-tertiary dark:border-dark-tertiary dark:bg-dark-secondary dark:shadow-primary-dark`}
            style={{
              maxHeight: `${maxHeight}px`,
            }}
          >
            {children ?? (!isLoading && <EmptyData />)}
          </div>
        </LoadableElement>
      </div>
    </div>
  );
}
