import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export const useAnimation = () => {
  const { contextSafe } = useGSAP();
  const quoteTl = gsap.timeline({
    defaults: { duration: 1, ease: "power2.in", overwrite: "auto" },
  });

  const animateNewQuote = contextSafe((btn: string) => {
    quoteTl
      .fromTo(
        btn,
        { x: "1px", y: "1px", boxShadow: "none", duration: 0.3 },
        { x: "0px", y: "0px", boxShadow: "1px 2px", duration: 0.3 }
      )
      .set("#quote-text", { color: "#00000000" }, ">")
      .fromTo("#quote-text", { scaleX: 0 }, { scaleX: 1 }, "<")
      .fromTo(
        "#quote-text",
        {
          color: "#00000000",
        },
        { color: "#000" }
      );
  });

  return animateNewQuote;
};
