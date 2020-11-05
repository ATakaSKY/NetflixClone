import { useEffect } from "react";

export const useIntersectionObserver = (target, callback, root) => {
  useEffect(() => {
    if (!target || !root) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          callback();
        }
      },
      { root }
    );

    observer.observe(target);

    return () => {
      observer.unobserve(target);
    };
  }, [target, callback, root]);
};
