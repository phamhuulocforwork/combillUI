import { useLayoutEffect, useState } from "react";

import debounce from "lodash.debounce";

const useIsMobile = (): boolean => {
  const [isMobile, setIsMobile] = useState(false);

  useLayoutEffect(() => {
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
