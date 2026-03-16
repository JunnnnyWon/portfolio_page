import { useEffect, useMemo, useState } from "react";
import type { SectionId } from "../data/portfolio";

type ProgressState = Record<SectionId, number>;

function clamp(value: number, min = 0, max = 1) {
  return Math.min(max, Math.max(min, value));
}

function makeProgress(ids: SectionId[]) {
  return ids.reduce((acc, id) => {
    acc[id] = 0;
    return acc;
  }, {} as ProgressState);
}

export function useSectionTransitions(sectionIds: SectionId[]) {
  const ids = useMemo(() => sectionIds, [sectionIds]);
  const [activeId, setActiveId] = useState<SectionId>(ids[0]);
  const [progress, setProgress] = useState<ProgressState>(() => makeProgress(ids));

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((node): node is HTMLElement => Boolean(node));

    if (!elements.length) {
      return;
    }

    const updateProgress = () => {
      const viewportHeight = window.innerHeight;
      const viewportCenter = viewportHeight / 2;
      const next = makeProgress(ids);
      let nextActive = ids[0];
      let nearestDistance = Number.POSITIVE_INFINITY;

      for (const element of elements) {
        const rect = element.getBoundingClientRect();
        const id = element.id as SectionId;
        const total = rect.height + viewportHeight;
        const raw = (viewportHeight - rect.top) / total;
        next[id] = clamp(raw);

        const sectionCenter = rect.top + rect.height / 2;
        const distance = Math.abs(sectionCenter - viewportCenter);

        if (distance < nearestDistance) {
          nearestDistance = distance;
          nextActive = id;
        }
      }

      setProgress(next);
      setActiveId(nextActive);
    };
    updateProgress();

    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, [ids]);

  return { activeId, progress };
}
