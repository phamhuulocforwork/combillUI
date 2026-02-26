import * as React from 'react';

type ObserverRect = Omit<DOMRectReadOnly, 'toJSON'>;

const defaultState: ObserverRect = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
};

export function useResizeObserver<T extends HTMLElement = any>(
  options?: ResizeObserverOptions,
) {
  const frameID = React.useRef(0);
  const ref = React.useRef<T>(null);

  const [rect, setRect] = React.useState<ObserverRect>(defaultState);

  const observer = React.useMemo(
    () =>
      typeof window !== 'undefined'
        ? new ResizeObserver((entries: any) => {
            const entry = entries[0];

            if (entry) {
              cancelAnimationFrame(frameID.current);

              frameID.current = requestAnimationFrame(() => {
                if (ref.current) {
                  setRect(entry.contentRect);
                }
              });
            }
          })
        : null,
    [],
  );

  React.useEffect(() => {
    if (ref.current) {
      observer?.observe(ref.current, options);
    }

    return () => {
      observer?.disconnect();

      if (frameID.current) {
        cancelAnimationFrame(frameID.current);
      }
    };
  }, [ref.current]);

  return [ref, rect] as const;
}

export function useElementSize<T extends HTMLElement = any>(
  options?: ResizeObserverOptions,
) {
  const [ref, { width, height }] = useResizeObserver<T>(options);
  return { ref, width, height };
}
