(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/app_components_Client_three_tsx_9321db._.js", {

"[project]/app/components/Client/three.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>ThreeJSModel)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$examples$2f$jsm$2f$libs$2f$lil$2d$gui$2e$module$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/three/examples/jsm/libs/lil-gui.module.min.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/three/build/three.module.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
;
;
;
const gui = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$examples$2f$jsm$2f$libs$2f$lil$2d$gui$2e$module$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GUI"]();
gui.add(cube.position, "x", -10, 10);
gui.add(cube.position, "y", -10, 10);
gui.add(cube.position, "z", -10, 10);
function ThreeJSModel() {
    _s();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const sceneRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const cubeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isLoaded, setIsLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ThreeJSModel.useEffect": ()=>{
            if (!containerRef.current || sceneRef.current) return; // Prevent multiple initializations
            // Set up scene
            const scene = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Scene();
            sceneRef.current = scene;
            // Set up camera
            const camera = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.PerspectiveCamera(50, containerRef.current.clientWidth / containerRef.current.clientHeight, 0.1, 1000);
            camera.position.z = 5;
            // Set up renderer
            const renderer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.WebGLRenderer({
                antialias: true,
                alpha: true
            });
            renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
            renderer.setPixelRatio(window.devicePixelRatio);
            containerRef.current.appendChild(renderer.domElement);
            // Create cube geometry
            const geometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.BoxGeometry(2, 2, 2);
            const materials = [
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.MeshBasicMaterial({
                    color: 0x3b82f6
                }),
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.MeshBasicMaterial({
                    color: 0x3b82f6
                }),
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.MeshBasicMaterial({
                    color: 0x3b82f6
                }),
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.MeshBasicMaterial({
                    color: 0x3b82f6
                }),
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.MeshBasicMaterial({
                    map: createSmileyTexture()
                }),
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.MeshBasicMaterial({
                    color: 0x3b82f6
                })
            ];
            // Create cube mesh
            const cube1 = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Mesh(geometry, materials);
            cubeRef.current = cube1;
            scene.add(cube1);
            console.log("Cube added to scene:", cube1);
            // Rotation tracking
            const targetRotation = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Vector2(0, 0);
            const currentRotation = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Vector2(0, 0);
            // Mouse tracking for interactive rotation
            const handleMouseMove = {
                "ThreeJSModel.useEffect.handleMouseMove": (event)=>{
                    const rect = containerRef.current?.getBoundingClientRect();
                    if (rect) {
                        const x = (event.clientX - rect.left) / rect.width * 2 - 1;
                        const y = (event.clientY - rect.top) / rect.height * 2 - 1; // Fix inverted axis
                        targetRotation.set(x * 0.3, -y * 0.3);
                    }
                }
            }["ThreeJSModel.useEffect.handleMouseMove"];
            const handleMouseLeave = {
                "ThreeJSModel.useEffect.handleMouseLeave": ()=>targetRotation.set(0, 0)
            }["ThreeJSModel.useEffect.handleMouseLeave"];
            window.addEventListener("mousemove", handleMouseMove);
            containerRef.current.addEventListener("mouseleave", handleMouseLeave);
            // Function to create smiley face texture
            function createSmileyTexture() {
                const canvas = document.createElement("canvas");
                canvas.width = 256;
                canvas.height = 256;
                const context = canvas.getContext("2d");
                if (!context) return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Texture();
                // Blue background to match cube
                context.fillStyle = "#3b82f6";
                context.fillRect(0, 0, 256, 256);
                // Draw smiley face
                context.beginPath();
                context.arc(128, 128, 100, 0, Math.PI * 2);
                context.fillStyle = "yellow";
                context.fill();
                // Eyes
                context.beginPath();
                context.arc(90, 100, 15, 0, Math.PI * 2);
                context.arc(166, 100, 15, 0, Math.PI * 2);
                context.fillStyle = "black";
                context.fill();
                // Smile
                context.beginPath();
                context.moveTo(70, 170);
                context.quadraticCurveTo(128, 200, 186, 170);
                context.strokeStyle = "black";
                context.lineWidth = 10;
                context.stroke();
                return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.CanvasTexture(canvas);
            }
            // Animation loop
            const animate = {
                "ThreeJSModel.useEffect.animate": ()=>{
                    if (!cubeRef.current) return;
                    requestAnimationFrame(animate);
                    currentRotation.x += (targetRotation.x - currentRotation.x) * 0.1;
                    currentRotation.y += (targetRotation.y - currentRotation.y) * 0.1;
                    cubeRef.current.rotation.x = currentRotation.y;
                    cubeRef.current.rotation.y = currentRotation.x;
                    renderer.render(scene, camera);
                }
            }["ThreeJSModel.useEffect.animate"];
            animate();
            setIsLoaded(true);
            // Handle resize
            const handleResize = {
                "ThreeJSModel.useEffect.handleResize": ()=>{
                    if (!containerRef.current) return;
                    camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
                    camera.updateProjectionMatrix();
                    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
                }
            }["ThreeJSModel.useEffect.handleResize"];
            window.addEventListener("resize", handleResize);
            // Cleanup
            return ({
                "ThreeJSModel.useEffect": ()=>{
                    window.removeEventListener("mousemove", handleMouseMove);
                    window.removeEventListener("resize", handleResize);
                    if (containerRef.current) {
                        containerRef.current.removeEventListener("mouseleave", handleMouseLeave);
                        containerRef.current.removeChild(renderer.domElement);
                    }
                    geometry.dispose();
                    materials.forEach({
                        "ThreeJSModel.useEffect": (material)=>material.dispose()
                    }["ThreeJSModel.useEffect"]);
                    renderer.dispose();
                    cubeRef.current = null;
                    sceneRef.current = null;
                }
            })["ThreeJSModel.useEffect"];
        }
    }["ThreeJSModel.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full h-full relative",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: containerRef,
            className: "w-full h-full bg-transparent rounded-xl",
            children: !isLoaded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 flex items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"
                }, void 0, false, {
                    fileName: "[project]/app/components/Client/three.tsx",
                    lineNumber: 170,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/Client/three.tsx",
                lineNumber: 169,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/components/Client/three.tsx",
            lineNumber: 164,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/Client/three.tsx",
        lineNumber: 163,
        columnNumber: 5
    }, this);
}
_s(ThreeJSModel, "j+r+RqTWGuYzDwgikYC04YXC1dA=");
_c = ThreeJSModel;
var _c;
__turbopack_refresh__.register(_c, "ThreeJSModel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=app_components_Client_three_tsx_9321db._.js.map