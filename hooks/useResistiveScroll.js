import { useEffect } from "react";

export function useResistiveScroll() {
  useEffect(() => {
    let current = 0;
    let target = 0;
    let ease = 0.075; // Lower = more resistance
    let rafId = null;
    let isTransitioning = false;
    const container = document.querySelector(".smooth-scroll-container");

    function lerp(start, end, t) {
      return start * (1 - t) + end * t;
    }

    function smoothScroll() {
      if (!isTransitioning) {
        current = lerp(current, target, ease);
        current = parseFloat(current.toFixed(2));

        if (container) {
          container.style.transform = `translate3d(0, ${-current}px, 0)`;
        }
      }
      rafId = requestAnimationFrame(smoothScroll);
    }

    function onWheel(e) {
      if (isTransitioning) return;
      e.preventDefault();
      const containerHeight = container?.scrollHeight || 0;
      target = Math.min(
        Math.max(0, target + e.deltaY),
        containerHeight - window.innerHeight
      );
    }

    // Add reset handler
    function onReset() {
      isTransitioning = true;
      container.style.transition =
        "transform 1.5s cubic-bezier(0.65, 0, 0.35, 1)";
      container.style.transform = "translate3d(0, 0, 0)";

      setTimeout(() => {
        target = 0;
        current = 0;
        container.style.transition = "";
        isTransitioning = false;
      }, 1500);
    }

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("resetScroll", onReset);
    rafId = requestAnimationFrame(smoothScroll);

    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("resetScroll", onReset);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);
}
