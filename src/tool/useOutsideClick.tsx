import { useEffect, useCallback, RefObject } from "react";

// Custom react hook
export default function useOutsideClick(
  ref: RefObject<HTMLDivElement> | null,
  onClick: Function,
) {
  const handleClick = useCallback(
    event => {
      if (ref && ref.current && !ref.current.contains(event.target)) {
        onClick()
      }
    },
    [onClick, ref]
  );

  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => document.removeEventListener("click", handleClick);
  }, [handleClick]);

  return ref;
};
