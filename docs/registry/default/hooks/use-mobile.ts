import debounce from 'lodash.debounce';
import * as React from 'react';

const useIsMobile = (): boolean => {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useLayoutEffect(() => {
    const updateSize = (): void => {
      setIsMobile(window.innerWidth < 768);
    };
    const debouncedUpdateSize = debounce(updateSize, 250);

    updateSize();

    window.addEventListener('resize', debouncedUpdateSize);

    return (): void =>
      window.removeEventListener('resize', debouncedUpdateSize);
  }, []);

  return isMobile;
};

export default useIsMobile;
