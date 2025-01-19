import { useEffect } from "react";

export function useResistiveScroll() {
  useEffect(() => {
    let current = 0;
    let target = 0;
    let ease = 0.075; // Lower = more resistance
    let rafId = null;
    const container = document.querySelector(".smooth-scroll-container");

    function lerp(start, end, t) {
      return start * (1 - t) + end * t;
    }

    function smoothScroll() {
      current = lerp(current, target, ease);
      current = parseFloat(current.toFixed(2));

      if (container) {
        container.style.transform = `translate3d(0, ${-current}px, 0)`;
      }
      rafId = requestAnimationFrame(smoothScroll);
    }

    function onWheel(e) {
      e.preventDefault();
      const containerHeight = container?.scrollHeight || 0;
      target = Math.min(
        Math.max(0, target + e.deltaY),
        containerHeight - window.innerHeight
      );
    }

    window.addEventListener("wheel", onWheel, { passive: false });
    rafId = requestAnimationFrame(smoothScroll);

    return () => {
      window.removeEventListener("wheel", onWheel);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);
}
