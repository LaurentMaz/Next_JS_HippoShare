import { useEffect } from "react";

type HandleClickOutside = (event: MouseEvent) => void;

const useHandleClickOutside = (handleClickOutside: HandleClickOutside) => {
  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [handleClickOutside]);
};

export default useHandleClickOutside;
