"use client"
import { useEffect, useRef } from "react";

const DEFAULT_EVENTS = ["mousedown", "touchstart"];

export function useClickOutside<T extends HTMLDivElement>(
    handler: () => void,
    events?: string[] | null,
    nodes?: (HTMLElement | null)[]
) {
    const ref = useRef<T>(null);

    useEffect(() => {
        const listener = (event: Event) => {
            const target = event.target as HTMLElement;
            if (Array.isArray(nodes)) {
                const shouldIgnore =
                    target?.hasAttribute("data-ignore-outside-clicks") ||
                    (!document.body.contains(target) && target.tagName !== "HTML");
                const shouldTrigger = nodes.every((node) => !!node && !event.composedPath().includes(node));
                if (shouldTrigger && !shouldIgnore) {
                    handler();
                }
            } else if (ref.current && !ref.current.contains(target)) {
                handler();
            }
        };

        (events || DEFAULT_EVENTS).forEach((fn) => document.addEventListener(fn, listener));

        return () => {
            (events || DEFAULT_EVENTS).forEach((fn) => document.removeEventListener(fn, listener));
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ref, handler, nodes]);

    return ref;
}