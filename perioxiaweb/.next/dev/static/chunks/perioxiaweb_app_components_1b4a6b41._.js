(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/perioxiaweb/app/components/ui/MagneticButton.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MagneticButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/perioxiaweb/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/perioxiaweb/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/perioxiaweb/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function MagneticButton({ children, className = "", strength = 20 }) {
    _s();
    const buttonRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const innerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MagneticButton.useEffect": ()=>{
            const button = buttonRef.current;
            const inner = innerRef.current;
            if (!button || !inner) return;
            let boundingRect = null;
            const handleMouseEnter = {
                "MagneticButton.useEffect.handleMouseEnter": ()=>{
                    boundingRect = button.getBoundingClientRect();
                }
            }["MagneticButton.useEffect.handleMouseEnter"];
            const handleMouseMove = {
                "MagneticButton.useEffect.handleMouseMove": (e)=>{
                    if (!boundingRect) return;
                    const x = e.clientX - boundingRect.left;
                    const y = e.clientY - boundingRect.top;
                    const centerX = boundingRect.width / 2;
                    const centerY = boundingRect.height / 2;
                    const deltaX = (x - centerX) / centerX;
                    const deltaY = (y - centerY) / centerY;
                    __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(button, {
                        x: deltaX * strength,
                        y: deltaY * strength,
                        duration: 0.3,
                        ease: "power2.out"
                    });
                    // Inner element moves opposite direction (parallax)
                    __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(inner, {
                        x: -deltaX * (strength * 0.3),
                        y: -deltaY * (strength * 0.3),
                        duration: 0.3,
                        ease: "power2.out"
                    });
                }
            }["MagneticButton.useEffect.handleMouseMove"];
            const handleMouseLeave = {
                "MagneticButton.useEffect.handleMouseLeave": ()=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to([
                        button,
                        inner
                    ], {
                        x: 0,
                        y: 0,
                        duration: 0.5,
                        ease: "elastic.out(1, 0.3)"
                    });
                    boundingRect = null;
                }
            }["MagneticButton.useEffect.handleMouseLeave"];
            button.addEventListener("mouseenter", handleMouseEnter);
            button.addEventListener("mousemove", handleMouseMove);
            button.addEventListener("mouseleave", handleMouseLeave);
            return ({
                "MagneticButton.useEffect": ()=>{
                    button.removeEventListener("mouseenter", handleMouseEnter);
                    button.removeEventListener("mousemove", handleMouseMove);
                    button.removeEventListener("mouseleave", handleMouseLeave);
                }
            })["MagneticButton.useEffect"];
        }
    }["MagneticButton.useEffect"], [
        strength
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        ref: buttonRef,
        className: `relative ${className}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            ref: innerRef,
            className: "block",
            children: children
        }, void 0, false, {
            fileName: "[project]/perioxiaweb/app/components/ui/MagneticButton.tsx",
            lineNumber: 82,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/perioxiaweb/app/components/ui/MagneticButton.tsx",
        lineNumber: 81,
        columnNumber: 9
    }, this);
}
_s(MagneticButton, "1fzirm4KGnOtmp9PwoaTr2fHp0g=");
_c = MagneticButton;
var _c;
__turbopack_context__.k.register(_c, "MagneticButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/perioxiaweb/app/components/Hero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/perioxiaweb/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/perioxiaweb/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/perioxiaweb/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$app$2f$components$2f$ui$2f$MagneticButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/perioxiaweb/app/components/ui/MagneticButton.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function Hero() {
    _s();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "Hero.useLayoutEffect": ()=>{
            const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].context({
                "Hero.useLayoutEffect.ctx": ()=>{
                    const tl = __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
                        delay: 0.3
                    });
                    // Entrance sequence
                    tl.from(".hero-eyebrow", {
                        opacity: 0,
                        duration: 0.4
                    }).from(".hero-headline .word", {
                        y: 100,
                        opacity: 0,
                        stagger: 0.1,
                        duration: 0.8,
                        ease: "power3.out"
                    }).from(".hero-headline .highlight", {
                        scale: 0,
                        duration: 0.6,
                        ease: "back.out(1.7)"
                    }, "-=0.3").from(".hero-subheadline", {
                        y: 30,
                        opacity: 0,
                        duration: 0.6
                    }, "-=0.2").from(".hero-cta", {
                        scale: 0.8,
                        opacity: 0,
                        stagger: 0.1,
                        duration: 0.4,
                        ease: "back.out(1.7)"
                    }, "-=0.2");
                    // Cursor spotlight effect
                    const spotlight = document.querySelector(".hero-spotlight");
                    if (spotlight) {
                        const quickToX = __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].quickTo(spotlight, "--x", {
                            duration: 0.6,
                            ease: "power3"
                        });
                        const quickToY = __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].quickTo(spotlight, "--y", {
                            duration: 0.6,
                            ease: "power3"
                        });
                        document.addEventListener("mousemove", {
                            "Hero.useLayoutEffect.ctx": (e)=>{
                                quickToX(`${e.clientX}px`);
                                quickToY(`${e.clientY}px`);
                            }
                        }["Hero.useLayoutEffect.ctx"]);
                    }
                    // Continuous animations
                    __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(".hero-highlight", {
                        opacity: 0.7,
                        yoyo: true,
                        repeat: -1,
                        duration: 3,
                        ease: "power1.inOut"
                    });
                }
            }["Hero.useLayoutEffect.ctx"], containerRef);
            return ({
                "Hero.useLayoutEffect": ()=>ctx.revert()
            })["Hero.useLayoutEffect"];
        }
    }["Hero.useLayoutEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: containerRef,
        className: "relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[--obsidian]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-gradient-to-br from-[#D4FF00]/5 via-transparent to-[#00D9FF]/5 animate-pulse",
                        style: {
                            animationDuration: "8s"
                        }
                    }, void 0, false, {
                        fileName: "[project]/perioxiaweb/app/components/Hero.tsx",
                        lineNumber: 84,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"
                    }, void 0, false, {
                        fileName: "[project]/perioxiaweb/app/components/Hero.tsx",
                        lineNumber: 89,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hero-spotlight absolute w-[600px] h-[600px] rounded-full pointer-events-none opacity-30",
                        style: {
                            background: "radial-gradient(circle, rgba(212,255,0,0.2) 0%, transparent 70%)",
                            left: "var(--x, 50%)",
                            top: "var(--y, 50%)",
                            transform: "translate(-50%, -50%)"
                        }
                    }, void 0, false, {
                        fileName: "[project]/perioxiaweb/app/components/Hero.tsx",
                        lineNumber: 92,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/perioxiaweb/app/components/Hero.tsx",
                lineNumber: 82,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 container-custom text-center max-w-5xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hero-eyebrow mb-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[--silver] text-xs uppercase tracking-[0.2em] font-mono-tech",
                            children: "AI-First Software Company"
                        }, void 0, false, {
                            fileName: "[project]/perioxiaweb/app/components/Hero.tsx",
                            lineNumber: 108,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/perioxiaweb/app/components/Hero.tsx",
                        lineNumber: 107,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "hero-headline font-display text-[clamp(3.5rem,10vw,10rem)] leading-[0.95] text-[--ivory] mb-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "word",
                                children: "WE BUILD THE"
                            }, void 0, false, {
                                fileName: "[project]/perioxiaweb/app/components/Hero.tsx",
                                lineNumber: 115,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "word",
                                children: "SOFTWARE THAT"
                            }, void 0, false, {
                                fileName: "[project]/perioxiaweb/app/components/Hero.tsx",
                                lineNumber: 116,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "word",
                                children: [
                                    "DOESN'T EXIST",
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "hero-highlight highlight text-[--lime]",
                                        children: "YET."
                                    }, void 0, false, {
                                        fileName: "[project]/perioxiaweb/app/components/Hero.tsx",
                                        lineNumber: 119,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/perioxiaweb/app/components/Hero.tsx",
                                lineNumber: 117,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/perioxiaweb/app/components/Hero.tsx",
                        lineNumber: 114,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "hero-subheadline text-[clamp(1.125rem,2.5vw,1.375rem)] text-[--silver] max-w-[700px] mx-auto leading-[1.7] mb-16",
                        children: "Perioxia is a product studio creating AI-powered solutions for emerging problems. We don't build better versions of existing tools. We build what comes next."
                    }, void 0, false, {
                        fileName: "[project]/perioxiaweb/app/components/Hero.tsx",
                        lineNumber: 124,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col sm:flex-row gap-6 items-center justify-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$app$2f$components$2f$ui$2f$MagneticButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                className: "hero-cta bg-[--lime] text-[--obsidian] px-10 py-5 text-lg font-bold uppercase tracking-wide hover:shadow-[0_0_40px_rgba(212,255,0,0.4)] transition-shadow",
                                children: "View Our Work"
                            }, void 0, false, {
                                fileName: "[project]/perioxiaweb/app/components/Hero.tsx",
                                lineNumber: 131,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$app$2f$components$2f$ui$2f$MagneticButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                className: "hero-cta border-2 border-[--lime] text-[--lime] bg-transparent px-10 py-5 text-lg font-bold uppercase tracking-wide hover:bg-[--lime] hover:text-[--obsidian] transition-all",
                                children: "Let's Talk"
                            }, void 0, false, {
                                fileName: "[project]/perioxiaweb/app/components/Hero.tsx",
                                lineNumber: 135,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/perioxiaweb/app/components/Hero.tsx",
                        lineNumber: 130,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-[--silver] text-xs uppercase tracking-[0.2em] font-mono-tech",
                            children: "Scroll to Explore"
                        }, void 0, false, {
                            fileName: "[project]/perioxiaweb/app/components/Hero.tsx",
                            lineNumber: 142,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/perioxiaweb/app/components/Hero.tsx",
                        lineNumber: 141,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/perioxiaweb/app/components/Hero.tsx",
                lineNumber: 104,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/perioxiaweb/app/components/Hero.tsx",
        lineNumber: 77,
        columnNumber: 5
    }, this);
}
_s(Hero, "JVErPvg7bZ6yLj50J4lCvDO7Tjk=");
_c = Hero;
var _c;
__turbopack_context__.k.register(_c, "Hero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/perioxiaweb/app/components/Philosophy.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Philosophy
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/perioxiaweb/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/perioxiaweb/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/perioxiaweb/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/perioxiaweb/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
function Philosophy() {
    _s();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "Philosophy.useLayoutEffect": ()=>{
            const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].context({
                "Philosophy.useLayoutEffect.ctx": ()=>{
                    // Headline split-text animation
                    __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from(".philosophy-headline .char", {
                        scrollTrigger: {
                            trigger: ".philosophy-headline",
                            start: "top 70%"
                        },
                        opacity: 0,
                        x: -20,
                        stagger: 0.02,
                        duration: 0.6,
                        ease: "power2.out"
                    });
                    // Body paragraphs
                    __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from(".philosophy-text p", {
                        scrollTrigger: {
                            trigger: ".philosophy-text",
                            start: "top 70%"
                        },
                        y: 30,
                        opacity: 0,
                        stagger: 0.2,
                        duration: 0.8
                    });
                    // Number counter
                    __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from(".stat-number", {
                        scrollTrigger: {
                            trigger: ".stat-number",
                            start: "top 80%"
                        },
                        textContent: 0,
                        duration: 2,
                        snap: {
                            textContent: 1
                        },
                        ease: "power1.out"
                    });
                }
            }["Philosophy.useLayoutEffect.ctx"], containerRef);
            return ({
                "Philosophy.useLayoutEffect": ()=>ctx.revert()
            })["Philosophy.useLayoutEffect"];
        }
    }["Philosophy.useLayoutEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: containerRef,
        className: "py-32 bg-[--obsidian] border-t border-[--graphite]/30 relative overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 opacity-5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full h-full",
                    style: {
                        backgroundImage: "linear-gradient(var(--graphite) 1px, transparent 1px), linear-gradient(90deg, var(--graphite) 1px, transparent 1px)",
                        backgroundSize: "100px 100px"
                    }
                }, void 0, false, {
                    fileName: "[project]/perioxiaweb/app/components/Philosophy.tsx",
                    lineNumber: 61,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/perioxiaweb/app/components/Philosophy.tsx",
                lineNumber: 60,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container-custom relative z-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col lg:flex-row gap-20",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:w-[40%]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-8",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[--silver] text-xs uppercase tracking-[0.2em] font-mono-tech",
                                        children: "Our Approach"
                                    }, void 0, false, {
                                        fileName: "[project]/perioxiaweb/app/components/Philosophy.tsx",
                                        lineNumber: 73,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/perioxiaweb/app/components/Philosophy.tsx",
                                    lineNumber: 72,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "philosophy-headline font-display text-[clamp(2.5rem,5vw,3.5rem)] text-[--lime] leading-tight",
                                    children: "BUILDING FOR TOMORROW, NOT TODAY.".split("").map((char, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "char inline-block",
                                            children: char === " " ? "\u00A0" : char
                                        }, i, false, {
                                            fileName: "[project]/perioxiaweb/app/components/Philosophy.tsx",
                                            lineNumber: 80,
                                            columnNumber: 33
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/perioxiaweb/app/components/Philosophy.tsx",
                                    lineNumber: 78,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/perioxiaweb/app/components/Philosophy.tsx",
                            lineNumber: 71,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:w-[60%] space-y-12",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "philosophy-text space-y-6 text-[clamp(1.125rem,2vw,1.25rem)] leading-relaxed",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[--silver]",
                                            children: "Most companies build incremental improvements to existing solutions. 10% faster. 15% cheaper. Slightly better UI."
                                        }, void 0, false, {
                                            fileName: "[project]/perioxiaweb/app/components/Philosophy.tsx",
                                            lineNumber: 89,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[--ivory] font-medium",
                                            children: "We don't do that."
                                        }, void 0, false, {
                                            fileName: "[project]/perioxiaweb/app/components/Philosophy.tsx",
                                            lineNumber: 94,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[--silver]",
                                            children: "We focus on problems that are emerging right now — problems that didn't exist two years ago. Problems that will define the next decade."
                                        }, void 0, false, {
                                            fileName: "[project]/perioxiaweb/app/components/Philosophy.tsx",
                                            lineNumber: 98,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[--silver]",
                                            children: "AI visibility tracking. Neural CRM systems. Intelligent automation that actually works."
                                        }, void 0, false, {
                                            fileName: "[project]/perioxiaweb/app/components/Philosophy.tsx",
                                            lineNumber: 103,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[--ivory]",
                                            children: "We're a small team. We build one thing at a time. And we build it right."
                                        }, void 0, false, {
                                            fileName: "[project]/perioxiaweb/app/components/Philosophy.tsx",
                                            lineNumber: 107,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/perioxiaweb/app/components/Philosophy.tsx",
                                    lineNumber: 88,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "pt-12 border-t border-[--graphite]/30",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-end gap-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "stat-number font-display text-[10rem] text-transparent leading-none",
                                                style: {
                                                    WebkitTextStroke: "2px var(--lime)",
                                                    textStroke: "2px var(--lime)"
                                                },
                                                children: "01"
                                            }, void 0, false, {
                                                fileName: "[project]/perioxiaweb/app/components/Philosophy.tsx",
                                                lineNumber: 115,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "pb-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-[--lime] font-mono-tech text-sm uppercase tracking-wider",
                                                        children: "Product"
                                                    }, void 0, false, {
                                                        fileName: "[project]/perioxiaweb/app/components/Philosophy.tsx",
                                                        lineNumber: 123,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-[--silver] text-sm",
                                                        children: "In Market"
                                                    }, void 0, false, {
                                                        fileName: "[project]/perioxiaweb/app/components/Philosophy.tsx",
                                                        lineNumber: 124,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/perioxiaweb/app/components/Philosophy.tsx",
                                                lineNumber: 122,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/perioxiaweb/app/components/Philosophy.tsx",
                                        lineNumber: 114,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/perioxiaweb/app/components/Philosophy.tsx",
                                    lineNumber: 113,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/perioxiaweb/app/components/Philosophy.tsx",
                            lineNumber: 86,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/perioxiaweb/app/components/Philosophy.tsx",
                    lineNumber: 68,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/perioxiaweb/app/components/Philosophy.tsx",
                lineNumber: 67,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/perioxiaweb/app/components/Philosophy.tsx",
        lineNumber: 57,
        columnNumber: 9
    }, this);
}
_s(Philosophy, "JVErPvg7bZ6yLj50J4lCvDO7Tjk=");
_c = Philosophy;
var _c;
__turbopack_context__.k.register(_c, "Philosophy");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/perioxiaweb/app/components/Capabilities.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Capabilities
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/perioxiaweb/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/perioxiaweb/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/perioxiaweb/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/perioxiaweb/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Brain$3e$__ = __turbopack_context__.i("[project]/perioxiaweb/node_modules/lucide-react/dist/esm/icons/brain.js [app-client] (ecmascript) <export default as Brain>");
var __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__ = __turbopack_context__.i("[project]/perioxiaweb/node_modules/lucide-react/dist/esm/icons/database.js [app-client] (ecmascript) <export default as Database>");
var __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2d$xml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code2$3e$__ = __turbopack_context__.i("[project]/perioxiaweb/node_modules/lucide-react/dist/esm/icons/code-xml.js [app-client] (ecmascript) <export default as Code2>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
const capabilities = [
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Brain$3e$__["Brain"],
        title: "AI-POWERED PRODUCTS",
        description: "We build software that uses AI not as a feature, but as the foundation. Products that couldn't exist without modern machine learning.",
        tech: [
            "GPT-4",
            "Claude",
            "Custom Models",
            "Vector Databases"
        ],
        height: "tall"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__["Database"],
        title: "INTELLIGENT CRM SYSTEMS",
        description: "CRMs that predict, automate, and actually help your team work faster. Not just contact management — true business intelligence.",
        tech: [
            "Next.js",
            "Python",
            "PostgreSQL",
            "Redis"
        ],
        height: "standard"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2d$xml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code2$3e$__["Code2"],
        title: "ENTERPRISE SOLUTIONS",
        description: "Full-stack applications built for scale. Web, mobile, cloud infrastructure. Modern architecture, future-proof engineering.",
        tech: [
            "React",
            "TypeScript",
            "AWS",
            "Kubernetes"
        ],
        height: "standard"
    }
];
function Capabilities() {
    _s();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "Capabilities.useLayoutEffect": ()=>{
            const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].context({
                "Capabilities.useLayoutEffect.ctx": ()=>{
                    // Headline reveal
                    __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from(".capabilities-headline", {
                        scrollTrigger: {
                            trigger: ".capabilities-headline",
                            start: "top 80%"
                        },
                        y: 50,
                        opacity: 0,
                        duration: 1
                    });
                    // Cards stagger
                    __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from(".capability-card", {
                        scrollTrigger: {
                            trigger: ".capabilities-grid",
                            start: "top 70%"
                        },
                        y: 60,
                        opacity: 0,
                        stagger: 0.15,
                        duration: 0.8,
                        ease: "power3.out"
                    });
                }
            }["Capabilities.useLayoutEffect.ctx"], containerRef);
            return ({
                "Capabilities.useLayoutEffect": ()=>ctx.revert()
            })["Capabilities.useLayoutEffect"];
        }
    }["Capabilities.useLayoutEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: containerRef,
        className: "py-32 bg-[--obsidian] border-t border-[--graphite]/30",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container-custom",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "capabilities-headline font-display text-center text-[clamp(3rem,8vw,5rem)] text-[--ivory] mb-20",
                    children: "OUR CAPABILITIES"
                }, void 0, false, {
                    fileName: "[project]/perioxiaweb/app/components/Capabilities.tsx",
                    lineNumber: 73,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "capabilities-grid grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto",
                    children: capabilities.map((cap, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `capability-card group bg-[--graphite] p-12 hover:-translate-y-3 transition-all duration-500 hover:shadow-[0_20px_60px_rgba(212,255,0,0.1)] ${cap.height === "tall" ? "lg:row-span-2" : ""}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-8 text-[--lime] group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(cap.icon, {
                                        size: 80,
                                        strokeWidth: 1.5
                                    }, void 0, false, {
                                        fileName: "[project]/perioxiaweb/app/components/Capabilities.tsx",
                                        lineNumber: 88,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/perioxiaweb/app/components/Capabilities.tsx",
                                    lineNumber: 87,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-display text-2xl text-[--ivory] mb-6 leading-tight",
                                    children: cap.title
                                }, void 0, false, {
                                    fileName: "[project]/perioxiaweb/app/components/Capabilities.tsx",
                                    lineNumber: 92,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[--silver] text-lg leading-relaxed mb-8",
                                    children: cap.description
                                }, void 0, false, {
                                    fileName: "[project]/perioxiaweb/app/components/Capabilities.tsx",
                                    lineNumber: 97,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap gap-2",
                                    children: cap.tech.map((t, j)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-mono-tech text-xs text-[--lime] border border-[--lime]/30 px-3 py-1 rounded-full",
                                            children: t
                                        }, j, false, {
                                            fileName: "[project]/perioxiaweb/app/components/Capabilities.tsx",
                                            lineNumber: 104,
                                            columnNumber: 37
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/perioxiaweb/app/components/Capabilities.tsx",
                                    lineNumber: 102,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, i, true, {
                            fileName: "[project]/perioxiaweb/app/components/Capabilities.tsx",
                            lineNumber: 81,
                            columnNumber: 25
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/perioxiaweb/app/components/Capabilities.tsx",
                    lineNumber: 78,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/perioxiaweb/app/components/Capabilities.tsx",
            lineNumber: 70,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/perioxiaweb/app/components/Capabilities.tsx",
        lineNumber: 69,
        columnNumber: 9
    }, this);
}
_s(Capabilities, "JVErPvg7bZ6yLj50J4lCvDO7Tjk=");
_c = Capabilities;
var _c;
__turbopack_context__.k.register(_c, "Capabilities");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/perioxiaweb/app/components/FeaturedProject.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FeaturedProject
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/perioxiaweb/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/perioxiaweb/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/perioxiaweb/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/perioxiaweb/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/perioxiaweb/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
function FeaturedProject() {
    _s();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "FeaturedProject.useLayoutEffect": ()=>{
            const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].context({
                "FeaturedProject.useLayoutEffect.ctx": ()=>{
                    // Title animation
                    __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from(".project-title .char", {
                        scrollTrigger: {
                            trigger: ".project-content",
                            start: "top 70%"
                        },
                        x: -20,
                        opacity: 0,
                        stagger: 0.03,
                        duration: 0.8,
                        ease: "power3.out"
                    });
                    // Content stagger
                    __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from(".project-detail", {
                        scrollTrigger: {
                            trigger: ".project-content",
                            start: "top 70%"
                        },
                        y: 30,
                        opacity: 0,
                        stagger: 0.1,
                        duration: 0.6
                    });
                    // Dashboard entrance
                    __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from(".project-dashboard", {
                        scrollTrigger: {
                            trigger: ".project-dashboard",
                            start: "top 70%"
                        },
                        x: 100,
                        opacity: 0,
                        duration: 1.2,
                        ease: "power3.out"
                    });
                    // Metric counters
                    __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].utils.toArray(".metric-counter").forEach({
                        "FeaturedProject.useLayoutEffect.ctx": (counter)=>{
                            const target = parseInt(counter.dataset.target);
                            __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from(counter, {
                                scrollTrigger: {
                                    trigger: counter,
                                    start: "top 80%"
                                },
                                textContent: 0,
                                duration: 2,
                                snap: {
                                    textContent: 1
                                },
                                ease: "power1.out"
                            });
                        }
                    }["FeaturedProject.useLayoutEffect.ctx"]);
                }
            }["FeaturedProject.useLayoutEffect.ctx"], containerRef);
            return ({
                "FeaturedProject.useLayoutEffect": ()=>ctx.revert()
            })["FeaturedProject.useLayoutEffect"];
        }
    }["FeaturedProject.useLayoutEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: containerRef,
        className: "py-32 bg-gradient-to-br from-[--obsidian] via-[#0A0A0E] to-[--obsidian] border-t border-[--graphite]/30 relative overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 opacity-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-radial from-[--lime]/20 to-transparent"
                    }, void 0, false, {
                        fileName: "[project]/perioxiaweb/app/components/FeaturedProject.tsx",
                        lineNumber: 77,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-radial from-[--magenta]/20 to-transparent"
                    }, void 0, false, {
                        fileName: "[project]/perioxiaweb/app/components/FeaturedProject.tsx",
                        lineNumber: 78,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/perioxiaweb/app/components/FeaturedProject.tsx",
                lineNumber: 76,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container-custom relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-12",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[--lime] text-sm uppercase tracking-[0.2em] font-mono-tech font-bold",
                            children: "Featured Project"
                        }, void 0, false, {
                            fileName: "[project]/perioxiaweb/app/components/FeaturedProject.tsx",
                            lineNumber: 85,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/perioxiaweb/app/components/FeaturedProject.tsx",
                        lineNumber: 84,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col lg:flex-row gap-20 items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lg:w-1/2 project-content",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "project-title font-display text-[clamp(4rem,12vw,7.5rem)] text-[--ivory] leading-none mb-6",
                                        style: {
                                            WebkitTextStroke: "2px var(--ivory)",
                                            textStroke: "2px var(--ivory)",
                                            color: "transparent"
                                        },
                                        children: "VISIBLO".split("").map((char, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "char inline-block",
                                                children: char
                                            }, i, false, {
                                                fileName: "[project]/perioxiaweb/app/components/FeaturedProject.tsx",
                                                lineNumber: 103,
                                                columnNumber: 33
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/perioxiaweb/app/components/FeaturedProject.tsx",
                                        lineNumber: 96,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "project-detail text-2xl text-[--silver] mb-12",
                                        children: "AI Visibility Analytics Platform"
                                    }, void 0, false, {
                                        fileName: "[project]/perioxiaweb/app/components/FeaturedProject.tsx",
                                        lineNumber: 108,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-6 text-lg text-[--silver] leading-relaxed mb-12",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "project-detail",
                                                children: "Visiblo tracks how your brand appears in AI-powered search and generative responses."
                                            }, void 0, false, {
                                                fileName: "[project]/perioxiaweb/app/components/FeaturedProject.tsx",
                                                lineNumber: 114,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "project-detail",
                                                children: "As search engines die and AI becomes the primary way people discover information, traditional SEO is becoming obsolete. Visiblo gives you visibility into this new paradigm."
                                            }, void 0, false, {
                                                fileName: "[project]/perioxiaweb/app/components/FeaturedProject.tsx",
                                                lineNumber: 117,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "project-detail text-[--ivory]",
                                                children: "Track brand mentions, measure AI visibility scores, analyze competitor presence across ChatGPT, Claude, Perplexity, and emerging AI platforms."
                                            }, void 0, false, {
                                                fileName: "[project]/perioxiaweb/app/components/FeaturedProject.tsx",
                                                lineNumber: 121,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/perioxiaweb/app/components/FeaturedProject.tsx",
                                        lineNumber: 113,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "project-detail grid grid-cols-3 gap-8 mb-12",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "metric-counter font-display text-5xl text-[--lime] font-mono-tech",
                                                        "data-target": "12",
                                                        children: "0"
                                                    }, void 0, false, {
                                                        fileName: "[project]/perioxiaweb/app/components/FeaturedProject.tsx",
                                                        lineNumber: 130,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-sm text-[--silver] mt-2 uppercase tracking-wider",
                                                        children: "Early Customers"
                                                    }, void 0, false, {
                                                        fileName: "[project]/perioxiaweb/app/components/FeaturedProject.tsx",
                                                        lineNumber: 131,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/perioxiaweb/app/components/FeaturedProject.tsx",
                                                lineNumber: 129,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "metric-counter font-display text-5xl text-[--lime] font-mono-tech",
                                                        "data-target": "5",
                                                        children: "0"
                                                    }, void 0, false, {
                                                        fileName: "[project]/perioxiaweb/app/components/FeaturedProject.tsx",
                                                        lineNumber: 134,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-sm text-[--silver] mt-2 uppercase tracking-wider",
                                                        children: "AI Platforms"
                                                    }, void 0, false, {
                                                        fileName: "[project]/perioxiaweb/app/components/FeaturedProject.tsx",
                                                        lineNumber: 135,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/perioxiaweb/app/components/FeaturedProject.tsx",
                                                lineNumber: 133,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "font-display text-5xl text-[--lime] font-mono-tech",
                                                        children: "24/7"
                                                    }, void 0, false, {
                                                        fileName: "[project]/perioxiaweb/app/components/FeaturedProject.tsx",
                                                        lineNumber: 138,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-sm text-[--silver] mt-2 uppercase tracking-wider",
                                                        children: "Monitoring"
                                                    }, void 0, false, {
                                                        fileName: "[project]/perioxiaweb/app/components/FeaturedProject.tsx",
                                                        lineNumber: 139,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/perioxiaweb/app/components/FeaturedProject.tsx",
                                                lineNumber: 137,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/perioxiaweb/app/components/FeaturedProject.tsx",
                                        lineNumber: 128,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "project-detail flex flex-col sm:flex-row gap-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#",
                                                className: "group text-[--lime] text-lg font-bold flex items-center gap-3 hover:gap-5 transition-all",
                                                children: [
                                                    "Visit Visiblo.ai",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                        size: 20,
                                                        className: "group-hover:translate-x-1 transition-transform"
                                                    }, void 0, false, {
                                                        fileName: "[project]/perioxiaweb/app/components/FeaturedProject.tsx",
                                                        lineNumber: 147,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/perioxiaweb/app/components/FeaturedProject.tsx",
                                                lineNumber: 145,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#",
                                                className: "text-[--silver] text-lg hover:text-[--ivory] transition-colors",
                                                children: "Read Case Study"
                                            }, void 0, false, {
                                                fileName: "[project]/perioxiaweb/app/components/FeaturedProject.tsx",
                                                lineNumber: 149,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/perioxiaweb/app/components/FeaturedProject.tsx",
                                        lineNumber: 144,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/perioxiaweb/app/components/FeaturedProject.tsx",
                                lineNumber: 93,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lg:w-1/2 project-dashboard",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    viewBox: "0 0 600 500",
                                    className: "w-full h-auto drop-shadow-2xl",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                            x: "0",
                                            y: "0",
                                            width: "600",
                                            height: "500",
                                            rx: "12",
                                            fill: "#0A0A0E",
                                            stroke: "var(--graphite)",
                                            strokeWidth: "2"
                                        }, void 0, false, {
                                            fileName: "[project]/perioxiaweb/app/components/FeaturedProject.tsx",
                                            lineNumber: 160,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                            x: "20",
                                            y: "20",
                                            width: "560",
                                            height: "60",
                                            rx: "6",
                                            fill: "#151518"
                                        }, void 0, false, {
                                            fileName: "[project]/perioxiaweb/app/components/FeaturedProject.tsx",
                                            lineNumber: 163,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                            cx: "50",
                                            cy: "50",
                                            r: "8",
                                            fill: "var(--lime)",
                                            opacity: "0.8"
                                        }, void 0, false, {
                                            fileName: "[project]/perioxiaweb/app/components/FeaturedProject.tsx",
                                            lineNumber: 164,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                            x: "80",
                                            y: "42",
                                            width: "120",
                                            height: "16",
                                            rx: "4",
                                            fill: "var(--graphite)"
                                        }, void 0, false, {
                                            fileName: "[project]/perioxiaweb/app/components/FeaturedProject.tsx",
                                            lineNumber: 165,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                            x: "40",
                                            y: "100",
                                            width: "260",
                                            height: "180",
                                            rx: "8",
                                            fill: "#151518"
                                        }, void 0, false, {
                                            fileName: "[project]/perioxiaweb/app/components/FeaturedProject.tsx",
                                            lineNumber: 168,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                            x: "60",
                                            y: "130",
                                            fill: "var(--silver)",
                                            fontSize: "12",
                                            fontFamily: "monospace",
                                            children: "VISIBILITY SCORE"
                                        }, void 0, false, {
                                            fileName: "[project]/perioxiaweb/app/components/FeaturedProject.tsx",
                                            lineNumber: 169,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                            x: "60",
                                            y: "180",
                                            fill: "var(--lime)",
                                            fontSize: "72",
                                            fontFamily: "monospace",
                                            fontWeight: "bold",
                                            children: "84.2"
                                        }, void 0, false, {
                                            fileName: "[project]/perioxiaweb/app/components/FeaturedProject.tsx",
                                            lineNumber: 170,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                            x: "60",
                                            y: "210",
                                            fill: "var(--lime)",
                                            fontSize: "16",
                                            fontFamily: "monospace",
                                            children: "+12% ↑"
                                        }, void 0, false, {
                                            fileName: "[project]/perioxiaweb/app/components/FeaturedProject.tsx",
                                            lineNumber: 171,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                            x: "320",
                                            y: "100",
                                            width: "260",
                                            height: "180",
                                            rx: "8",
                                            fill: "#151518"
                                        }, void 0, false, {
                                            fileName: "[project]/perioxiaweb/app/components/FeaturedProject.tsx",
                                            lineNumber: 174,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                            x: "340",
                                            y: "130",
                                            fill: "var(--silver)",
                                            fontSize: "12",
                                            fontFamily: "monospace",
                                            children: "VS COMPETITORS"
                                        }, void 0, false, {
                                            fileName: "[project]/perioxiaweb/app/components/FeaturedProject.tsx",
                                            lineNumber: 175,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                            x: "340",
                                            y: "150",
                                            width: "180",
                                            height: "20",
                                            rx: "4",
                                            fill: "var(--lime)",
                                            opacity: "0.8"
                                        }, void 0, false, {
                                            fileName: "[project]/perioxiaweb/app/components/FeaturedProject.tsx",
                                            lineNumber: 178,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                            x: "340",
                                            y: "180",
                                            width: "140",
                                            height: "20",
                                            rx: "4",
                                            fill: "var(--graphite)"
                                        }, void 0, false, {
                                            fileName: "[project]/perioxiaweb/app/components/FeaturedProject.tsx",
                                            lineNumber: 179,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                            x: "340",
                                            y: "210",
                                            width: "120",
                                            height: "20",
                                            rx: "4",
                                            fill: "var(--graphite)"
                                        }, void 0, false, {
                                            fileName: "[project]/perioxiaweb/app/components/FeaturedProject.tsx",
                                            lineNumber: 180,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                            x: "340",
                                            y: "240",
                                            width: "100",
                                            height: "20",
                                            rx: "4",
                                            fill: "var(--graphite)"
                                        }, void 0, false, {
                                            fileName: "[project]/perioxiaweb/app/components/FeaturedProject.tsx",
                                            lineNumber: 181,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                            x: "40",
                                            y: "300",
                                            width: "540",
                                            height: "180",
                                            rx: "8",
                                            fill: "#151518"
                                        }, void 0, false, {
                                            fileName: "[project]/perioxiaweb/app/components/FeaturedProject.tsx",
                                            lineNumber: 184,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                            x: "60",
                                            y: "330",
                                            fill: "var(--silver)",
                                            fontSize: "12",
                                            fontFamily: "monospace",
                                            children: "LIVE MENTIONS"
                                        }, void 0, false, {
                                            fileName: "[project]/perioxiaweb/app/components/FeaturedProject.tsx",
                                            lineNumber: 185,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                            x: "60",
                                            y: "350",
                                            width: "500",
                                            height: "30",
                                            rx: "4",
                                            fill: "var(--obsidian)"
                                        }, void 0, false, {
                                            fileName: "[project]/perioxiaweb/app/components/FeaturedProject.tsx",
                                            lineNumber: 188,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                            cx: "80",
                                            cy: "365",
                                            r: "4",
                                            fill: "var(--electric-blue)"
                                        }, void 0, false, {
                                            fileName: "[project]/perioxiaweb/app/components/FeaturedProject.tsx",
                                            lineNumber: 189,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                            x: "100",
                                            y: "370",
                                            fill: "var(--ivory)",
                                            fontSize: "10",
                                            children: "ChatGPT mentioned your brand in..."
                                        }, void 0, false, {
                                            fileName: "[project]/perioxiaweb/app/components/FeaturedProject.tsx",
                                            lineNumber: 190,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                            x: "60",
                                            y: "390",
                                            width: "500",
                                            height: "30",
                                            rx: "4",
                                            fill: "var(--obsidian)"
                                        }, void 0, false, {
                                            fileName: "[project]/perioxiaweb/app/components/FeaturedProject.tsx",
                                            lineNumber: 192,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                            cx: "80",
                                            cy: "405",
                                            r: "4",
                                            fill: "var(--lime)"
                                        }, void 0, false, {
                                            fileName: "[project]/perioxiaweb/app/components/FeaturedProject.tsx",
                                            lineNumber: 193,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                            x: "100",
                                            y: "410",
                                            fill: "var(--ivory)",
                                            fontSize: "10",
                                            children: "Claude cited your product as..."
                                        }, void 0, false, {
                                            fileName: "[project]/perioxiaweb/app/components/FeaturedProject.tsx",
                                            lineNumber: 194,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                            x: "60",
                                            y: "430",
                                            width: "500",
                                            height: "30",
                                            rx: "4",
                                            fill: "var(--obsidian)"
                                        }, void 0, false, {
                                            fileName: "[project]/perioxiaweb/app/components/FeaturedProject.tsx",
                                            lineNumber: 196,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                            cx: "80",
                                            cy: "445",
                                            r: "4",
                                            fill: "var(--magenta)"
                                        }, void 0, false, {
                                            fileName: "[project]/perioxiaweb/app/components/FeaturedProject.tsx",
                                            lineNumber: 197,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                            x: "100",
                                            y: "450",
                                            fill: "var(--ivory)",
                                            fontSize: "10",
                                            children: "Perplexity AI included you in..."
                                        }, void 0, false, {
                                            fileName: "[project]/perioxiaweb/app/components/FeaturedProject.tsx",
                                            lineNumber: 198,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/perioxiaweb/app/components/FeaturedProject.tsx",
                                    lineNumber: 158,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/perioxiaweb/app/components/FeaturedProject.tsx",
                                lineNumber: 157,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/perioxiaweb/app/components/FeaturedProject.tsx",
                        lineNumber: 90,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/perioxiaweb/app/components/FeaturedProject.tsx",
                lineNumber: 81,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/perioxiaweb/app/components/FeaturedProject.tsx",
        lineNumber: 73,
        columnNumber: 9
    }, this);
}
_s(FeaturedProject, "JVErPvg7bZ6yLj50J4lCvDO7Tjk=");
_c = FeaturedProject;
var _c;
__turbopack_context__.k.register(_c, "FeaturedProject");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/perioxiaweb/app/components/ui/CustomCursor.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CustomCursor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/perioxiaweb/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/perioxiaweb/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/perioxiaweb/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function CustomCursor() {
    _s();
    const dotRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const circleRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CustomCursor.useEffect": ()=>{
            // Only on desktop with fine pointer
            if (window.matchMedia("(pointer: coarse)").matches) return;
            const dot = dotRef.current;
            const circle = circleRef.current;
            if (!dot || !circle) return;
            // Quick animations for smooth following
            const dotQuick = __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].quickTo(dot, "x", {
                duration: 0.1,
                ease: "power3"
            });
            const dotQuickY = __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].quickTo(dot, "y", {
                duration: 0.1,
                ease: "power3"
            });
            const circleQuick = __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].quickTo(circle, "x", {
                duration: 0.3,
                ease: "power3"
            });
            const circleQuickY = __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].quickTo(circle, "y", {
                duration: 0.3,
                ease: "power3"
            });
            const moveCursor = {
                "CustomCursor.useEffect.moveCursor": (e)=>{
                    dotQuick(e.clientX);
                    dotQuickY(e.clientY);
                    circleQuick(e.clientX);
                    circleQuickY(e.clientY);
                }
            }["CustomCursor.useEffect.moveCursor"];
            // State changes for different elements
            const addHoverEffects = {
                "CustomCursor.useEffect.addHoverEffects": ()=>{
                    const interactiveElements = document.querySelectorAll("a, button, [role='button']");
                    interactiveElements.forEach({
                        "CustomCursor.useEffect.addHoverEffects": (el)=>{
                            el.addEventListener("mouseenter", {
                                "CustomCursor.useEffect.addHoverEffects": ()=>{
                                    __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(dot, {
                                        scale: 2,
                                        duration: 0.2
                                    });
                                    __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(circle, {
                                        scale: 0.5,
                                        duration: 0.2
                                    });
                                }
                            }["CustomCursor.useEffect.addHoverEffects"]);
                            el.addEventListener("mouseleave", {
                                "CustomCursor.useEffect.addHoverEffects": ()=>{
                                    __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(dot, {
                                        scale: 1,
                                        duration: 0.2
                                    });
                                    __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(circle, {
                                        scale: 1,
                                        duration: 0.2
                                    });
                                }
                            }["CustomCursor.useEffect.addHoverEffects"]);
                        }
                    }["CustomCursor.useEffect.addHoverEffects"]);
                }
            }["CustomCursor.useEffect.addHoverEffects"];
            document.addEventListener("mousemove", moveCursor);
            addHoverEffects();
            return ({
                "CustomCursor.useEffect": ()=>{
                    document.removeEventListener("mousemove", moveCursor);
                }
            })["CustomCursor.useEffect"];
        }
    }["CustomCursor.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: dotRef,
                className: "cursor-dot hidden lg:block"
            }, void 0, false, {
                fileName: "[project]/perioxiaweb/app/components/ui/CustomCursor.tsx",
                lineNumber: 59,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: circleRef,
                className: "cursor-circle hidden lg:block"
            }, void 0, false, {
                fileName: "[project]/perioxiaweb/app/components/ui/CustomCursor.tsx",
                lineNumber: 60,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
}
_s(CustomCursor, "gU4bPuZfQHd9q6nkvh46V3VnOqw=");
_c = CustomCursor;
var _c;
__turbopack_context__.k.register(_c, "CustomCursor");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/perioxiaweb/app/components/ui/SmoothScroll.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SmoothScroll
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/perioxiaweb/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f40$studio$2d$freight$2f$lenis$2f$dist$2f$lenis$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/perioxiaweb/node_modules/@studio-freight/lenis/dist/lenis.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/perioxiaweb/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/perioxiaweb/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
function SmoothScroll() {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SmoothScroll.useEffect": ()=>{
            const lenis = new __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f40$studio$2d$freight$2f$lenis$2f$dist$2f$lenis$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]({
                duration: 1.2,
                easing: {
                    "SmoothScroll.useEffect": (t)=>Math.min(1, 1.001 - Math.pow(2, -10 * t))
                }["SmoothScroll.useEffect"],
                orientation: "vertical",
                gestureOrientation: "vertical",
                smoothWheel: true,
                wheelMultiplier: 1,
                smoothTouch: false,
                touchMultiplier: 2,
                infinite: false
            });
            function raf(time) {
                lenis.raf(time);
                requestAnimationFrame(raf);
            }
            requestAnimationFrame(raf);
            // Sync with GSAP ScrollTrigger
            lenis.on("scroll", __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].update);
            __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].ticker.add({
                "SmoothScroll.useEffect": (time)=>{
                    lenis.raf(time * 1000);
                }
            }["SmoothScroll.useEffect"]);
            __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].ticker.lagSmoothing(0);
            return ({
                "SmoothScroll.useEffect": ()=>{
                    lenis.destroy();
                    __TURBOPACK__imported__module__$5b$project$5d2f$perioxiaweb$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].ticker.remove({
                        "SmoothScroll.useEffect": ()=>{}
                    }["SmoothScroll.useEffect"]);
                }
            })["SmoothScroll.useEffect"];
        }
    }["SmoothScroll.useEffect"], []);
    return null;
}
_s(SmoothScroll, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = SmoothScroll;
var _c;
__turbopack_context__.k.register(_c, "SmoothScroll");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=perioxiaweb_app_components_1b4a6b41._.js.map