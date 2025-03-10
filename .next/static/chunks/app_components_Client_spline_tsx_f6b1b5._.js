(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/app_components_Client_spline_tsx_f6b1b5._.js", {

"[project]/app/components/Client/spline.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>SplineClientWrapper)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
// Loader component
function SplineLoader() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full h-full flex items-center justify-center",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"
        }, void 0, false, {
            fileName: "[project]/app/components/Client/spline.tsx",
            lineNumber: 14,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/Client/spline.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = SplineLoader;
function SplineClientWrapper({ scene, className = "" }) {
    _s();
    // State to track if component is mounted
    const [isLoaded, setIsLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [SplineComponent, setSplineComponent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SplineClientWrapper.useEffect": ()=>{
            // Only import Spline in the client
            let isMounted = true;
            const loadSpline = {
                "SplineClientWrapper.useEffect.loadSpline": async ()=>{
                    try {
                        // Dynamically import Spline only on the client side
                        const SplineModule = await __turbopack_require__("[project]/node_modules/@splinetool/react-spline/dist/react-spline-next.js [app-client] (ecmascript, async loader)")(__turbopack_import__);
                        // Only update state if component is still mounted
                        if (isMounted) {
                            setSplineComponent({
                                "SplineClientWrapper.useEffect.loadSpline": ()=>SplineModule.default
                            }["SplineClientWrapper.useEffect.loadSpline"]);
                            setIsLoaded(true);
                        }
                    } catch (error) {
                        console.error("Failed to load Spline:", error);
                    }
                }
            }["SplineClientWrapper.useEffect.loadSpline"];
            loadSpline();
            // Cleanup function
            return ({
                "SplineClientWrapper.useEffect": ()=>{
                    isMounted = false;
                }
            })["SplineClientWrapper.useEffect"];
        }
    }["SplineClientWrapper.useEffect"], []);
    if (!isLoaded || !SplineComponent) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SplineLoader, {}, void 0, false, {
            fileName: "[project]/app/components/Client/spline.tsx",
            lineNumber: 56,
            columnNumber: 12
        }, this);
    }
    // Using the dynamically loaded component
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: className,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
            fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SplineLoader, {}, void 0, false, {
                fileName: "[project]/app/components/Client/spline.tsx",
                lineNumber: 62,
                columnNumber: 27
            }, void 0),
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SplineComponent, {
                scene: scene
            }, void 0, false, {
                fileName: "[project]/app/components/Client/spline.tsx",
                lineNumber: 63,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/components/Client/spline.tsx",
            lineNumber: 62,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/Client/spline.tsx",
        lineNumber: 61,
        columnNumber: 5
    }, this);
}
_s(SplineClientWrapper, "HGxqwgs9Er3uBK5KzDfUNgweigk=");
_c1 = SplineClientWrapper;
var _c, _c1;
__turbopack_refresh__.register(_c, "SplineLoader");
__turbopack_refresh__.register(_c1, "SplineClientWrapper");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=app_components_Client_spline_tsx_f6b1b5._.js.map