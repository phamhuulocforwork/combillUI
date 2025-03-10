import * as React from "react";

import debounce from "lodash.debounce";

const useIsMobile = (): boolean => {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useLayoutEffect(() => {
    const updateSize = (): void => {
      setIsMobile(window.innerWidth < 768);
    };
    const debouncedUpdateSize = debounce(updateSize, 250);

    updateSize();

    window.addEventListener("resize", debouncedUpdateSize);

    return (): void =>
      window.removeEventListener("resize", debouncedUpdateSize);
  }, []);

  return isMobile;
};

export default useIsMobile;
