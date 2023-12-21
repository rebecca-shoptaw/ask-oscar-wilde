import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export const useAnimation = () => {
  const { contextSafe } = useGSAP();
  const tl = gsap.timeline({ defaults: { duration: 1, ease: "power2.in" } });

  const animate = contextSafe(() => {
    tl.set("#quote-text", { opacity: 0 })
      .from("#quote", { height: 0 })
      .to("#quote-text", { opacity: 1 });
  });

  return animate;
};
