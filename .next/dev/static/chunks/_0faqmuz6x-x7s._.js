(()=>{"use strict";(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/ContactForm.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ContactForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$26$2e$_e171bc08a728003e0206d8745f0518ad$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.4.3_@types+node@26._e171bc08a728003e0206d8745f0518ad/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$26$2e$_e171bc08a728003e0206d8745f0518ad$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.4.3_@types+node@26._e171bc08a728003e0206d8745f0518ad/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$ui$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/ui.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const inp = "w-full rounded-xl border border-line bg-white p-3 focus:border-brand2 text-fg";
function F({ id, label, err, children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$26$2e$_e171bc08a728003e0206d8745f0518ad$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$26$2e$_e171bc08a728003e0206d8745f0518ad$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                htmlFor: id,
                className: "mb-1 block font-bold",
                children: label
            }, void 0, false, {
                fileName: "[project]/components/ContactForm.tsx",
                lineNumber: 8,
                columnNumber: 16
            }, this),
            children,
            err && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$26$2e$_e171bc08a728003e0206d8745f0518ad$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-1 text-sm text-red-600",
                role: "alert",
                children: err
            }, void 0, false, {
                fileName: "[project]/components/ContactForm.tsx",
                lineNumber: 8,
                columnNumber: 102
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ContactForm.tsx",
        lineNumber: 8,
        columnNumber: 11
    }, this);
}
_c = F;
function ContactForm() {
    _s();
    const [errs, setErrs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$26$2e$_e171bc08a728003e0206d8745f0518ad$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$26$2e$_e171bc08a728003e0206d8745f0518ad$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("idle");
    async function onSubmit(e) {
        e.preventDefault();
        const form = e.currentTarget;
        const d = Object.fromEntries(new FormData(form));
        const er = {};
        if ((d.name || "").trim().length < 2) er.name = "Enter your full name.";
        if (!/^\+?[0-9\s-]{9,15}$/.test((d.phone || "").trim())) er.phone = "Enter a valid phone number, e.g. +250 788 000 000.";
        if (!/^\S+@\S+\.\S+$/.test((d.email || "").trim())) er.email = "Enter a valid email address.";
        if (!d.service) er.service = "Choose the service you need.";
        if ((d.message || "").trim().length < 10) er.message = "Describe your project in at least 10 characters.";
        setErrs(er);
        if (Object.keys(er).length) return;
        setStatus("sending");
        try {
            const r = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(d)
            });
            setStatus(r.ok ? "ok" : "fail");
            if (r.ok) form.reset();
        } catch  {
            setStatus("fail");
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$26$2e$_e171bc08a728003e0206d8745f0518ad$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        id: "quote",
        onSubmit: onSubmit,
        noValidate: true,
        className: "grid gap-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$26$2e$_e171bc08a728003e0206d8745f0518ad$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(F, {
                id: "name",
                label: "Full name",
                err: errs.name,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$26$2e$_e171bc08a728003e0206d8745f0518ad$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    className: inp,
                    id: "name",
                    name: "name",
                    autoComplete: "name"
                }, void 0, false, {
                    fileName: "[project]/components/ContactForm.tsx",
                    lineNumber: 33,
                    columnNumber: 52
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ContactForm.tsx",
                lineNumber: 33,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$26$2e$_e171bc08a728003e0206d8745f0518ad$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(F, {
                id: "phone",
                label: "Phone",
                err: errs.phone,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$26$2e$_e171bc08a728003e0206d8745f0518ad$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    className: inp,
                    id: "phone",
                    name: "phone",
                    type: "tel",
                    autoComplete: "tel"
                }, void 0, false, {
                    fileName: "[project]/components/ContactForm.tsx",
                    lineNumber: 34,
                    columnNumber: 50
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ContactForm.tsx",
                lineNumber: 34,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$26$2e$_e171bc08a728003e0206d8745f0518ad$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(F, {
                id: "email",
                label: "Email",
                err: errs.email,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$26$2e$_e171bc08a728003e0206d8745f0518ad$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    className: inp,
                    id: "email",
                    name: "email",
                    type: "email",
                    autoComplete: "email"
                }, void 0, false, {
                    fileName: "[project]/components/ContactForm.tsx",
                    lineNumber: 35,
                    columnNumber: 50
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ContactForm.tsx",
                lineNumber: 35,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$26$2e$_e171bc08a728003e0206d8745f0518ad$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(F, {
                id: "service",
                label: "Service required",
                err: errs.service,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$26$2e$_e171bc08a728003e0206d8745f0518ad$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                    className: inp,
                    id: "service",
                    name: "service",
                    defaultValue: "",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$26$2e$_e171bc08a728003e0206d8745f0518ad$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                            value: "",
                            disabled: true,
                            children: "Select a service"
                        }, void 0, false, {
                            fileName: "[project]/components/ContactForm.tsx",
                            lineNumber: 36,
                            columnNumber: 133
                        }, this),
                        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["services"].map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$26$2e$_e171bc08a728003e0206d8745f0518ad$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                children: s.title
                            }, s.slug, false, {
                                fileName: "[project]/components/ContactForm.tsx",
                                lineNumber: 37,
                                columnNumber: 28
                            }, this)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$26$2e$_e171bc08a728003e0206d8745f0518ad$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                            children: "Other"
                        }, void 0, false, {
                            fileName: "[project]/components/ContactForm.tsx",
                            lineNumber: 37,
                            columnNumber: 69
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ContactForm.tsx",
                    lineNumber: 36,
                    columnNumber: 65
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ContactForm.tsx",
                lineNumber: 36,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$26$2e$_e171bc08a728003e0206d8745f0518ad$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(F, {
                id: "location",
                label: "Project location",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$26$2e$_e171bc08a728003e0206d8745f0518ad$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    className: inp,
                    id: "location",
                    name: "location"
                }, void 0, false, {
                    fileName: "[project]/components/ContactForm.tsx",
                    lineNumber: 38,
                    columnNumber: 47
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ContactForm.tsx",
                lineNumber: 38,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$26$2e$_e171bc08a728003e0206d8745f0518ad$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(F, {
                id: "message",
                label: "Message",
                err: errs.message,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$26$2e$_e171bc08a728003e0206d8745f0518ad$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                    className: inp,
                    id: "message",
                    name: "message",
                    rows: 5
                }, void 0, false, {
                    fileName: "[project]/components/ContactForm.tsx",
                    lineNumber: 39,
                    columnNumber: 56
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ContactForm.tsx",
                lineNumber: 39,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$26$2e$_e171bc08a728003e0206d8745f0518ad$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$ui$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ui"].btn} disabled:opacity-60`,
                disabled: status === "sending",
                children: status === "sending" ? "Sending…" : "Send request"
            }, void 0, false, {
                fileName: "[project]/components/ContactForm.tsx",
                lineNumber: 40,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$26$2e$_e171bc08a728003e0206d8745f0518ad$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                role: "status",
                "aria-live": "polite",
                children: [
                    status === "ok" && "Thank you. Your request was sent and COSBEL Ltd will reply by phone or email.",
                    status === "fail" && "Your request could not be sent. Please call +250 788 312 434 or email smackreime@gmail.com."
                ]
            }, void 0, true, {
                fileName: "[project]/components/ContactForm.tsx",
                lineNumber: 41,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ContactForm.tsx",
        lineNumber: 32,
        columnNumber: 11
    }, this);
}
_s(ContactForm, "jmEGKXwjqtnFccn5mxyz3xm2pOQ=");
_c1 = ContactForm;
var _c, _c1;
__turbopack_context__.k.register(_c, "F");
__turbopack_context__.k.register(_c1, "ContactForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/data.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$26$2e$_e171bc08a728003e0206d8745f0518ad$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.4.3_@types+node@26._e171bc08a728003e0206d8745f0518ad/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
const company = {
    name: "COSBEL Ltd",
    phone: "+250 788 312 434",
    tel: "tel:+250788312434",
    email: "smackreime@gmail.com",
    mailto: "mailto:smackreime@gmail.com",
    tin: "122484737",
    location: "Kimironko, Gasabo, Kigali, Rwanda",
    site: (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$4$2e$3_$40$types$2b$node$40$26$2e$_e171bc08a728003e0206d8745f0518ad$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_SITE_URL || "https://example.com").replace(/\/$/, "")
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);})()

//# sourceMappingURL=_0faqmuz6x-x7s._.js.map