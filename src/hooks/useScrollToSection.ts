import { RefObject } from "react";

export function useScrollToSection() {
    const scrollTo = (ref: RefObject<HTMLElement | null>) => {
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: "smooth" });
        }
    };
    return scrollTo;
}