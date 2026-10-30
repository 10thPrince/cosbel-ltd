(()=>{"use strict";module.exports = [
"[project]/components/ProjectsGallery.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProjectsGallery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$26$2e$_e171bc08a728003e0206d8745f0518ad$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.4.3_@types+node@26._e171bc08a728003e0206d8745f0518ad/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$26$2e$_e171bc08a728003e0206d8745f0518ad$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.4.3_@types+node@26._e171bc08a728003e0206d8745f0518ad/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
function ProjectsGallery() {
    const [selectedProject, setSelectedProject] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$26$2e$_e171bc08a728003e0206d8745f0518ad$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedImage, setSelectedImage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$26$2e$_e171bc08a728003e0206d8745f0518ad$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const activeProject = selectedProject === null ? null : __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["projects"][selectedProject];
    const totalImages = activeProject ? activeProject.images.length : 0;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$26$2e$_e171bc08a728003e0206d8745f0518ad$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (selectedProject === null) return;
        const handleKeydown = (event)=>{
            if (event.key === "Escape") {
                setSelectedProject(null);
            }
            if (event.key === "ArrowRight" && totalImages > 0) {
                setSelectedImage((current)=>(current + 1) % totalImages);
            }
            if (event.key === "ArrowLeft" && totalImages > 0) {
                setSelectedImage((current)=>(current - 1 + totalImages) % totalImages);
            }
        };
        window.addEventListener("keydown", handleKeydown);
        return ()=>window.removeEventListener("keydown", handleKeydown);
    }, [
        selectedProject,
        totalImages
    ]);
    const openModal = (projectIndex, imageIndex)=>{
        setSelectedProject(projectIndex);
        setSelectedImage(imageIndex);
    };
    const closeModal = ()=>setSelectedProject(null);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$26$2e$_e171bc08a728003e0206d8745f0518ad$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$26$2e$_e171bc08a728003e0206d8745f0518ad$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$26$2e$_e171bc08a728003e0206d8745f0518ad$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-6",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["projects"].map((project, projectIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$26$2e$_e171bc08a728003e0206d8745f0518ad$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                        className: "w-full overflow-hidden rounded-[28px] border border-line bg-white shadow-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$26$2e$_e171bc08a728003e0206d8745f0518ad$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid gap-3 p-4 sm:grid-cols-3",
                                children: project.images.map((image, imageIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$26$2e$_e171bc08a728003e0206d8745f0518ad$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>openModal(projectIndex, imageIndex),
                                        className: "group relative block overflow-hidden rounded-2xl border border-line bg-mist focus:outline-none focus-visible:ring-2 focus-visible:ring-brand2",
                                        "aria-label": `Open ${project.title} image ${imageIndex + 1}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$26$2e$_e171bc08a728003e0206d8745f0518ad$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: image.src,
                                            alt: image.alt,
                                            className: "h-56 w-full object-cover transition duration-300 group-hover:scale-105"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ProjectsGallery.tsx",
                                            lineNumber: 53,
                                            columnNumber: 19
                                        }, this)
                                    }, `${project.title}-${image.src}`, false, {
                                        fileName: "[project]/components/ProjectsGallery.tsx",
                                        lineNumber: 46,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/ProjectsGallery.tsx",
                                lineNumber: 44,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$26$2e$_e171bc08a728003e0206d8745f0518ad$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border-t border-line px-5 pb-6 pt-5 sm:px-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$26$2e$_e171bc08a728003e0206d8745f0518ad$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$26$2e$_e171bc08a728003e0206d8745f0518ad$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$26$2e$_e171bc08a728003e0206d8745f0518ad$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "rounded-full border border-brand2/20 bg-brand2/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-brand2",
                                                        children: project.category
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ProjectsGallery.tsx",
                                                        lineNumber: 65,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$26$2e$_e171bc08a728003e0206d8745f0518ad$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "mt-3 text-2xl font-extrabold tracking-tight text-brand",
                                                        children: project.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ProjectsGallery.tsx",
                                                        lineNumber: 68,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/ProjectsGallery.tsx",
                                                lineNumber: 64,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$26$2e$_e171bc08a728003e0206d8745f0518ad$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs font-semibold uppercase tracking-[0.16em] text-fg/60",
                                                children: project.location
                                            }, void 0, false, {
                                                fileName: "[project]/components/ProjectsGallery.tsx",
                                                lineNumber: 70,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ProjectsGallery.tsx",
                                        lineNumber: 63,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$26$2e$_e171bc08a728003e0206d8745f0518ad$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-3 text-sm font-semibold uppercase tracking-[0.14em] text-brand2",
                                        children: project.scope
                                    }, void 0, false, {
                                        fileName: "[project]/components/ProjectsGallery.tsx",
                                        lineNumber: 73,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$26$2e$_e171bc08a728003e0206d8745f0518ad$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-4 text-base text-fg/70",
                                        children: project.description
                                    }, void 0, false, {
                                        fileName: "[project]/components/ProjectsGallery.tsx",
                                        lineNumber: 74,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$26$2e$_e171bc08a728003e0206d8745f0518ad$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-6 grid gap-3 sm:grid-cols-3",
                                        children: project.metrics.map((metric)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$26$2e$_e171bc08a728003e0206d8745f0518ad$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "rounded-2xl border border-line bg-mist p-3 text-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$26$2e$_e171bc08a728003e0206d8745f0518ad$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xl font-extrabold text-brand",
                                                        children: metric.value
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ProjectsGallery.tsx",
                                                        lineNumber: 79,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$26$2e$_e171bc08a728003e0206d8745f0518ad$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mt-1 text-[10px] uppercase tracking-[0.14em] text-fg/60",
                                                        children: metric.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ProjectsGallery.tsx",
                                                        lineNumber: 80,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, `${project.title}-${metric.label}`, true, {
                                                fileName: "[project]/components/ProjectsGallery.tsx",
                                                lineNumber: 78,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/ProjectsGallery.tsx",
                                        lineNumber: 76,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$26$2e$_e171bc08a728003e0206d8745f0518ad$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-6 flex items-center justify-between gap-3 border-t border-line pt-4 text-sm text-fg/70",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$26$2e$_e171bc08a728003e0206d8745f0518ad$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-semibold",
                                                children: project.completion
                                            }, void 0, false, {
                                                fileName: "[project]/components/ProjectsGallery.tsx",
                                                lineNumber: 86,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$26$2e$_e171bc08a728003e0206d8745f0518ad$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>openModal(projectIndex, 0),
                                                className: "font-semibold text-brand2 hover:underline",
                                                children: "View gallery"
                                            }, void 0, false, {
                                                fileName: "[project]/components/ProjectsGallery.tsx",
                                                lineNumber: 87,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ProjectsGallery.tsx",
                                        lineNumber: 85,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ProjectsGallery.tsx",
                                lineNumber: 62,
                                columnNumber: 13
                            }, this)
                        ]
                    }, project.title, true, {
                        fileName: "[project]/components/ProjectsGallery.tsx",
                        lineNumber: 43,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/ProjectsGallery.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            selectedProject !== null && activeProject && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$26$2e$_e171bc08a728003e0206d8745f0518ad$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$26$2e$_e171bc08a728003e0206d8745f0518ad$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative w-full max-w-5xl overflow-hidden rounded-[28px] border border-white/10 bg-white shadow-2xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$26$2e$_e171bc08a728003e0206d8745f0518ad$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: closeModal,
                            className: "absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-lg text-white transition hover:bg-black/80",
                            "aria-label": "Close gallery",
                            children: "×"
                        }, void 0, false, {
                            fileName: "[project]/components/ProjectsGallery.tsx",
                            lineNumber: 103,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$26$2e$_e171bc08a728003e0206d8745f0518ad$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between border-b border-line bg-mist px-5 py-3 text-sm font-semibold text-brand",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$26$2e$_e171bc08a728003e0206d8745f0518ad$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: activeProject.title
                                }, void 0, false, {
                                    fileName: "[project]/components/ProjectsGallery.tsx",
                                    lineNumber: 113,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$26$2e$_e171bc08a728003e0206d8745f0518ad$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-fg/60",
                                    children: [
                                        selectedImage + 1,
                                        " / ",
                                        totalImages
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ProjectsGallery.tsx",
                                    lineNumber: 114,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ProjectsGallery.tsx",
                            lineNumber: 112,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$26$2e$_e171bc08a728003e0206d8745f0518ad$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative bg-[#f5f3ee]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$26$2e$_e171bc08a728003e0206d8745f0518ad$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: activeProject.images[selectedImage].src,
                                    alt: activeProject.images[selectedImage].alt,
                                    className: "max-h-[72vh] w-full object-contain"
                                }, void 0, false, {
                                    fileName: "[project]/components/ProjectsGallery.tsx",
                                    lineNumber: 118,
                                    columnNumber: 15
                                }, this),
                                totalImages > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$26$2e$_e171bc08a728003e0206d8745f0518ad$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$26$2e$_e171bc08a728003e0206d8745f0518ad$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$26$2e$_e171bc08a728003e0206d8745f0518ad$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setSelectedImage((current)=>(current - 1 + totalImages) % totalImages),
                                            className: "absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-2xl text-white hover:bg-black/80",
                                            "aria-label": "Previous image",
                                            children: "‹"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ProjectsGallery.tsx",
                                            lineNumber: 126,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$26$2e$_e171bc08a728003e0206d8745f0518ad$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setSelectedImage((current)=>(current + 1) % totalImages),
                                            className: "absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-2xl text-white hover:bg-black/80",
                                            "aria-label": "Next image",
                                            children: "›"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ProjectsGallery.tsx",
                                            lineNumber: 134,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ProjectsGallery.tsx",
                                    lineNumber: 125,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ProjectsGallery.tsx",
                            lineNumber: 117,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$26$2e$_e171bc08a728003e0206d8745f0518ad$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-3 overflow-x-auto border-t border-line bg-white p-3",
                            children: activeProject.images.map((image, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$26$2e$_e171bc08a728003e0206d8745f0518ad$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setSelectedImage(index),
                                    className: `relative h-20 w-28 shrink-0 overflow-hidden rounded-xl border ${index === selectedImage ? "border-brand2 ring-2 ring-brand2/25" : "border-line"}`,
                                    "aria-label": `View image ${index + 1}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$26$2e$_e171bc08a728003e0206d8745f0518ad$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: image.src,
                                        alt: image.alt,
                                        className: "h-full w-full object-cover"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ProjectsGallery.tsx",
                                        lineNumber: 157,
                                        columnNumber: 19
                                    }, this)
                                }, `${activeProject.title}-thumb-${image.src}`, false, {
                                    fileName: "[project]/components/ProjectsGallery.tsx",
                                    lineNumber: 148,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/ProjectsGallery.tsx",
                            lineNumber: 146,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ProjectsGallery.tsx",
                    lineNumber: 102,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ProjectsGallery.tsx",
                lineNumber: 101,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ProjectsGallery.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
}),
"[project]/lib/data.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "company",
    ()=>company,
    "industries",
    ()=>industries,
    "photos",
    ()=>photos,
    "projects",
    ()=>projects,
    "services",
    ()=>services,
    "values",
    ()=>values
]);
const company = {
    name: "COSBEL Ltd",
    phone: "+250 788 312 434",
    tel: "tel:+250788312434",
    email: "smackreime@gmail.com",
    mailto: "mailto:smackreime@gmail.com",
    tin: "122484737",
    location: "Kimironko, Gasabo, Kigali, Rwanda",
    site: (process.env.NEXT_PUBLIC_SITE_URL || "https://example.com").replace(/\/$/, "")
};
const photos = {
    board: {
        src: "/images/electrical-distribution-board.jpg",
        w: 392,
        h: 510,
        alt: "Electrical distribution board with circuit breakers and neatly routed wiring"
    },
    tray: {
        src: "/images/cable-tray-installation.jpg",
        w: 669,
        h: 457,
        alt: "Steel cable trays carrying power cables along a building ceiling"
    },
    switchgear: {
        src: "/images/industrial-switchgear-panel.jpg",
        w: 387,
        h: 516,
        alt: "Industrial medium-voltage switchgear panels with protection relays"
    },
    control: {
        src: "/images/control-panel-terminals.jpg",
        w: 678,
        h: 452,
        alt: "Control panel circuit breakers and terminal blocks with colour-coded wiring"
    },
    transformer: {
        src: "/images/pole-mounted-transformer.jpg",
        w: 547,
        h: 365,
        alt: "Pole-mounted electrical transformer with insulators against a blue sky"
    },
    wiring: {
        src: "/images/panel-wiring-terminals.jpg",
        w: 547,
        h: 365,
        alt: "Close-up of blue and green wiring connected to electrical terminal blocks"
    }
};
const services = [
    {
        slug: "industrial-electrical-services",
        title: "Industrial Electrical Services",
        tag: "Industrial",
        confirmed: true,
        photo: photos.switchgear,
        short: "Electrical work for factories and industrial facilities.",
        body: "Electrical support for industrial sites, planned around the way each facility operates.",
        seoTitle: "Industrial Electrical Services in Rwanda",
        seoDesc: "Industrial electrical services for factories, workshops and warehouses in Kigali and across Rwanda from COSBEL Ltd. Request a quote.",
        keywords: [
            "industrial electrical services Rwanda",
            "factory electrical Kigali",
            "industrial electrician Kigali"
        ],
        applications: [
            "Factories and production sites",
            "Warehouses and workshops",
            "Power distribution equipment"
        ]
    },
    {
        slug: "residential-electrical-services",
        title: "Residential Electrical Services",
        tag: "Residential",
        confirmed: true,
        photo: photos.board,
        short: "Safe, tidy electrical work for homes and households.",
        body: "Electrical services for households, from new installations to everyday electrical needs.",
        seoTitle: "Residential Electrical Installation in Kigali",
        seoDesc: "Residential electrical installation and services for homes in Kigali, Rwanda. COSBEL Ltd delivers safe, tidy household electrical work.",
        keywords: [
            "residential electrical installation Kigali",
            "house wiring Kigali",
            "home electrician Kigali"
        ],
        applications: [
            "New homes and extensions",
            "Household wiring and fittings",
            "Residential upgrades"
        ]
    },
    {
        slug: "commercial-electrical-installations",
        title: "Commercial Electrical Installations",
        tag: "Commercial",
        confirmed: true,
        photo: photos.tray,
        short: "Electrical installations for offices and business premises.",
        body: "Installations for offices and commercial buildings, delivered with clear communication.",
        seoTitle: "Commercial Electrical Installation in Kigali",
        seoDesc: "Electrical installations for offices, shops and commercial buildings in Kigali, Rwanda. Talk to COSBEL Ltd about your premises.",
        keywords: [
            "commercial electrical installation Kigali",
            "office electrical Kigali",
            "commercial electrician Rwanda"
        ],
        applications: [
            "Offices",
            "Shops and business premises",
            "Commercial buildings"
        ]
    },
    {
        slug: "installation-and-maintenance",
        title: "Electrical Installation and Maintenance",
        tag: "Maintenance",
        confirmed: true,
        photo: photos.wiring,
        short: "Installation and ongoing maintenance of electrical systems.",
        body: "Installation of electrical systems and maintenance to keep them working safely.",
        seoTitle: "Electrical Maintenance Services in Kigali",
        seoDesc: "Electrical installation and maintenance in Kigali, Rwanda: distribution boards, repairs and routine upkeep from COSBEL Ltd.",
        keywords: [
            "electrical maintenance Kigali",
            "electrical installation Rwanda",
            "electrician Kigali"
        ],
        applications: [
            "New installations",
            "Routine maintenance",
            "Repairs and replacements"
        ]
    },
    {
        slug: "electrical-troubleshooting",
        title: "Electrical Troubleshooting",
        tag: "Troubleshooting",
        confirmed: false,
        photo: photos.control,
        short: "Finding and fixing electrical faults.",
        body: "",
        seoTitle: "",
        seoDesc: "",
        keywords: [],
        applications: []
    },
    {
        slug: "inspection-and-testing",
        title: "Electrical Inspection and Testing",
        tag: "Inspection",
        confirmed: false,
        photo: photos.control,
        short: "Inspection and testing of electrical installations.",
        body: "",
        seoTitle: "",
        seoDesc: "",
        keywords: [],
        applications: []
    }
].filter((s)=>s.confirmed);
const industries = [
    {
        title: "Factories and industrial facilities",
        icon: "factory"
    },
    {
        title: "Homes and residential properties",
        icon: "home"
    },
    {
        title: "Offices and commercial buildings",
        icon: "building"
    },
    {
        title: "Business premises and other electrical projects",
        icon: "bolt"
    }
];
const values = [
    [
        "Electrical safety",
        "Safety is the first consideration on every job."
    ],
    [
        "Quality workmanship",
        "Work is done carefully and checked before handover."
    ],
    [
        "Flexible solutions",
        "Different customers need different electrical solutions."
    ],
    [
        "Clear communication",
        "You know what is planned, what it involves and who to call."
    ],
    [
        "Right for the setting",
        "Approach adapted to industrial, residential and commercial sites."
    ]
];
const projects = [
    {
        title: "Kigali Commercial Fit-Out",
        location: "Kigali, Rwanda",
        category: "Commercial",
        scope: "Full electrical fit-out and final commissioning",
        description: "Completed a multi-zone office and retail fit-out with new power distribution, lighting circuits, and tenant-ready final testing for a busy commercial property.",
        completion: "100% complete",
        metrics: [
            {
                value: "86",
                label: "Points"
            },
            {
                value: "24",
                label: "Lighting Circuits"
            },
            {
                value: "100%",
                label: "Completed"
            }
        ],
        images: [
            {
                src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
                alt: "Commercial electrical installation interior"
            },
            {
                src: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80",
                alt: "Office lighting and power installation"
            },
            {
                src: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
                alt: "Completed office fit-out with electrical systems"
            }
        ]
    },
    {
        title: "Industrial Backup Power Upgrade",
        location: "Masaka, Rwanda",
        category: "Industrial",
        scope: "Power upgrade, generator integration, and system protection",
        description: "Upgraded an industrial facility with a safer distribution layout, generator connection, surge protection, and testing to keep operations stable during outages.",
        completion: "Completed on schedule",
        metrics: [
            {
                value: "3",
                label: "Panels upgraded"
            },
            {
                value: "2",
                label: "Backup sources"
            },
            {
                value: "98%",
                label: "Uptime"
            }
        ],
        images: [
            {
                src: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1200&q=80",
                alt: "Industrial electrical panel upgrade"
            },
            {
                src: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1200&q=80",
                alt: "Factory backup power system"
            },
            {
                src: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80",
                alt: "Electrical systems in a manufacturing facility"
            }
        ]
    }
];
}),
];})()

//# sourceMappingURL=_1fpn5ge70uc_q._.js.map