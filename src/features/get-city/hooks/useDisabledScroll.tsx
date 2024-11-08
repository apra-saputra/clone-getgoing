import { useEffect } from "react";

const useDisabledScroll = (isOpen: boolean) => {
  useEffect(() => {
    if (isOpen) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setTimeout(() => {
        document.body.style.overflow = "hidden";
      }, 300);
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);
  return null;
};

export default useDisabledScroll;
