(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/OneDrive/Desktop/Growth Edge/components/SmoothAnchorScroll.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SmoothAnchorScroll
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Growth__Edge$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Growth Edge/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
function SmoothAnchorScroll() {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Growth__Edge$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SmoothAnchorScroll.useEffect": ()=>{
            function handleClick(e) {
                const anchor = e.target.closest("a[href]");
                if (!anchor) return;
                const href = anchor.getAttribute("href");
                if (!href) return;
                // Only handle same-page hash links like "#blog" or "/#blog"
                const isHashOnly = href.startsWith("#");
                const isSlashHash = href.startsWith("/#") && window.location.pathname === "/";
                if (!isHashOnly && !isSlashHash) return;
                const hash = isHashOnly ? href : href.slice(1); // "#blog"
                const target = document.querySelector(hash);
                if (!target) return;
                // Stop the event so Next.js <Link> doesn't also handle it
                e.preventDefault();
                e.stopPropagation();
                target.scrollIntoView({
                    behavior: "smooth"
                });
                // Update URL hash without triggering a scroll
                window.history.pushState(null, "", hash);
            }
            // Capture phase runs before React's bubble-phase delegation
            document.addEventListener("click", handleClick, {
                capture: true
            });
            return ({
                "SmoothAnchorScroll.useEffect": ()=>document.removeEventListener("click", handleClick, {
                        capture: true
                    })
            })["SmoothAnchorScroll.useEffect"];
        }
    }["SmoothAnchorScroll.useEffect"], []);
    return null;
}
_s(SmoothAnchorScroll, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = SmoothAnchorScroll;
var _c;
__turbopack_context__.k.register(_c, "SmoothAnchorScroll");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=OneDrive_Desktop_Growth%20Edge_components_SmoothAnchorScroll_tsx_d7fdeba4._.js.map