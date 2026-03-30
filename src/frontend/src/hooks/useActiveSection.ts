import { useEffect, useRef, useState } from "react";

export function useActiveSection(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState<string>(
    sectionIds[0] ?? "",
  );
  const idsRef = useRef(sectionIds);

  useEffect(() => {
    const ids = idsRef.current;
    const observers: IntersectionObserver[] = [];

    for (const id of ids) {
      const element = document.getElementById(id);
      if (!element) continue;

      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          }
        },
        { threshold: 0.3, rootMargin: "-80px 0px -20% 0px" },
      );

      observer.observe(element);
      observers.push(observer);
    }

    return () => {
      for (const o of observers) {
        o.disconnect();
      }
    };
  }, []);

  return activeSection;
}
