"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-client)/./app/page.tsx":
/*!**********************!*\
  !*** ./app/page.tsx ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-markdown */ \"(app-client)/./node_modules/react-markdown/lib/react-markdown.js\");\n/* harmony import */ var remark_gfm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! remark-gfm */ \"(app-client)/./node_modules/remark-gfm/index.js\");\n/* harmony import */ var _city_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../city-data */ \"(app-client)/./city-data.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Home() {\n    _s();\n    const [request, setRequest] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    let [itinerary, setItinerary] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        checkRedirect();\n    }, []);\n    function checkRedirect() {\n        if (window.location.hostname === \"gpt-travel-advisor.vercel.app\") {\n            window.location.replace(\"https://www.roamaround.io/\");\n        }\n    }\n    async function hitAPI() {\n        try {\n            if (!request.city || !request.days) return;\n            setMessage(\"Hi! We hit out GPT limits at the moment. Please come back tomorrow!\");\n            //setMessage('Building itinerary...this may take 40 seconds')\n            setLoading(true);\n            setItinerary(\"\");\n            setTimeout(()=>{\n                if (!loading) return;\n                setMessage(\"Getting closer ...\");\n            }, 2000);\n            setTimeout(()=>{\n                if (!loading) return;\n                setMessage(\"Almost there ...\");\n            }, 15000);\n            const response = await fetch(\"/api/get-itinerary\", {\n                method: \"POST\",\n                body: JSON.stringify({\n                    days: request.days,\n                    city: request.city\n                })\n            });\n            const json = await response.json();\n            const response2 = await fetch(\"/api/get-points-of-interest\", {\n                method: \"POST\",\n                body: JSON.stringify({\n                    pointsOfInterestPrompt: json.pointsOfInterestPrompt\n                })\n            });\n            const json2 = await response2.json();\n            let pointsOfInterest = JSON.parse(json2.pointsOfInterest);\n            let itinerary = json.itinerary;\n            pointsOfInterest.map((point)=>{\n                itinerary = itinerary.replace(point, \"[\".concat(point, \"](https://www.viator.com/searchResults/all?pid=P00089289&mcid=42383&medium=link&text=\").concat(encodeURIComponent(point + \" \" + request.city), \")\"));\n            });\n            setItinerary(itinerary);\n            setLoading(false);\n        } catch (err) {\n            console.log(\"error: \", err);\n            setMessage(\"\");\n        }\n    }\n    let days = itinerary.split(\"Day\");\n    if (days.length > 1) {\n        days.shift();\n    } else {\n        days[0] = \"1\" + days[0];\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"app-container\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    style: styles.header,\n                    className: \"hero-header\",\n                    children: \"Roam Around\"\n                }, void 0, false, {\n                    fileName: \"/Users/shie/RoamAroundV2/app/page.tsx\",\n                    lineNumber: 85,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    style: styles.formContainer,\n                    className: \"form-container\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            style: styles.input,\n                            placeholder: \"City\",\n                            onChange: (e)=>setRequest((request)=>({\n                                        ...request,\n                                        city: e.target.value\n                                    }))\n                        }, void 0, false, {\n                            fileName: \"/Users/shie/RoamAroundV2/app/page.tsx\",\n                            lineNumber: 87,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            style: styles.input,\n                            placeholder: \"Days\",\n                            onChange: (e)=>setRequest((request)=>({\n                                        ...request,\n                                        days: e.target.value\n                                    }))\n                        }, void 0, false, {\n                            fileName: \"/Users/shie/RoamAroundV2/app/page.tsx\",\n                            lineNumber: 90,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"input-button\",\n                            onClick: hitAPI,\n                            children: \"Build Itinerary\"\n                        }, void 0, false, {\n                            fileName: \"/Users/shie/RoamAroundV2/app/page.tsx\",\n                            lineNumber: 93,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/shie/RoamAroundV2/app/page.tsx\",\n                    lineNumber: 86,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"results-container\",\n                    children: [\n                        loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: message\n                        }, void 0, false, {\n                            fileName: \"/Users/shie/RoamAroundV2/app/page.tsx\",\n                            lineNumber: 98,\n                            columnNumber: 13\n                        }, this),\n                        itinerary && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            style: styles.cityHeadingStyle,\n                            children: [\n                                \"Ok, we've made your itinerary for \",\n                                checkCity(request.city)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/shie/RoamAroundV2/app/page.tsx\",\n                            lineNumber: 103,\n                            columnNumber: 13\n                        }, this),\n                        itinerary && days.map((day, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                style: {\n                                    marginBottom: \"30px\"\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_markdown__WEBPACK_IMPORTED_MODULE_3__.ReactMarkdown, {\n                                    remarkPlugins: [\n                                        remark_gfm__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n                                    ],\n                                    components: {\n                                        a: (props)=>{\n                                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                target: \"_blank\",\n                                                rel: \"no-opener\",\n                                                href: props.href,\n                                                children: props.children\n                                            }, void 0, false, void 0, void 0);\n                                        }\n                                    },\n                                    children: \"Day \".concat(day)\n                                }, void 0, false, {\n                                    fileName: \"/Users/shie/RoamAroundV2/app/page.tsx\",\n                                    lineNumber: 112,\n                                    columnNumber: 15\n                                }, this)\n                            }, index, false, {\n                                fileName: \"/Users/shie/RoamAroundV2/app/page.tsx\",\n                                lineNumber: 108,\n                                columnNumber: 13\n                            }, this))\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/shie/RoamAroundV2/app/page.tsx\",\n                    lineNumber: 95,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/shie/RoamAroundV2/app/page.tsx\",\n            lineNumber: 84,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/shie/RoamAroundV2/app/page.tsx\",\n        lineNumber: 83,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"uM0CpzJ8ESsodw8VtcgV9qDcOAs=\");\n_c = Home;\nfunction checkCity(city) {\n    if (!city) return;\n    const cityToLowerCase = city.toLowerCase();\n    const cityData = _city_data__WEBPACK_IMPORTED_MODULE_2__.data[cityToLowerCase];\n    if (cityData) {\n        const link = _city_data__WEBPACK_IMPORTED_MODULE_2__.data[cityToLowerCase].link;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n            target: \"_blank\",\n            rel: \"no-referrer\",\n            href: link,\n            children: cityToLowerCase.charAt(0).toUpperCase() + cityToLowerCase.slice(1)\n        }, void 0, false, {\n            fileName: \"/Users/shie/RoamAroundV2/app/page.tsx\",\n            lineNumber: 140,\n            columnNumber: 7\n        }, this);\n    } else {\n        return cityToLowerCase.charAt(0).toUpperCase() + cityToLowerCase.slice(1);\n    }\n}\nconst styles = {\n    cityHeadingStyle: {\n        color: \"white\",\n        marginBottom: \"20px\"\n    },\n    header: {\n        textAlign: \"center\",\n        marginTop: \"60px\",\n        color: \"#c683ff\",\n        fontWeight: \"900\",\n        fontFamily: \"Poppins\",\n        fontSize: \"68px\"\n    },\n    input: {\n        padding: \"10px 14px\",\n        marginBottom: \"4px\",\n        outline: \"none\",\n        fontSize: \"16px\",\n        width: \"100%\",\n        borderRadius: \"8px\"\n    },\n    formContainer: {\n        display: \"flex\",\n        flexDirection: \"column\",\n        margin: \"20px auto 0px\",\n        padding: \"20px\",\n        boxShadow: \"0px 0px 12px rgba(198, 131, 255, .2)\",\n        borderRadius: \"10px\"\n    },\n    result: {\n        color: \"white\"\n    }\n};\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0lBQ3RDLElBQUlFLFVBQVU7UUFDWixNQUFNQyxPQUFPekUsNENBQUksQ0FBQ3NFLGdCQUFnQixDQUFDRyxJQUFJO1FBQ3ZDLHFCQUNFLDhEQUFDUjtZQUNDYixRQUFPO1lBQ1BlLEtBQUk7WUFDSkMsTUFBTUs7c0JBQ05ILGdCQUFnQkksTUFBTSxDQUFDLEdBQUdDLFdBQVcsS0FBS0wsZ0JBQWdCTSxLQUFLLENBQUM7Ozs7OztJQUV0RSxPQUFPO1FBQ0wsT0FBT04sZ0JBQWdCSSxNQUFNLENBQUMsR0FBR0MsV0FBVyxLQUFLTCxnQkFBZ0JNLEtBQUssQ0FBQztJQUN6RSxDQUFDO0FBQ0g7QUFFQSxNQUFNL0IsU0FBUztJQUNiYSxrQkFBa0I7UUFDaEJtQixPQUFPO1FBQ1BmLGNBQWM7SUFDaEI7SUFDQWhCLFFBQVE7UUFDTmdDLFdBQVc7UUFDWEMsV0FBVztRQUNYRixPQUFPO1FBQ1BHLFlBQVk7UUFDWkMsWUFBWTtRQUNaQyxVQUFVO0lBQ1o7SUFDQWxDLE9BQU87UUFDTG1DLFNBQVM7UUFDVHJCLGNBQWM7UUFDZHNCLFNBQVM7UUFDVEYsVUFBVTtRQUNWRyxPQUFPO1FBQ1BDLGNBQWM7SUFDaEI7SUFDQXZDLGVBQWU7UUFDYndDLFNBQVM7UUFDVEMsZUFBZTtRQUNmQyxRQUFRO1FBQ1JOLFNBQVM7UUFDVE8sV0FBVztRQUNYSixjQUFjO0lBQ2hCO0lBQ0FLLFFBQVE7UUFDTmQsT0FBTztJQUNUO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3BhZ2UudHN4Pzc2MDMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5cbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWR1Y2VyIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUmVhY3RNYXJrZG93biBmcm9tICdyZWFjdC1tYXJrZG93bidcbmltcG9ydCByZW1hcmtHZm0gZnJvbSAncmVtYXJrLWdmbSdcbmltcG9ydCB7IGRhdGEgfSBmcm9tICcuLi9jaXR5LWRhdGEnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtyZXF1ZXN0LCBzZXRSZXF1ZXN0XSA9IHVzZVN0YXRlPHtkYXlzPzogc3RyaW5nLCBjaXR5Pzogc3RyaW5nfT4oe30pXG4gIGxldCBbaXRpbmVyYXJ5LCBzZXRJdGluZXJhcnldID0gdXNlU3RhdGU8c3RyaW5nPignJylcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlKCcnKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY2hlY2tSZWRpcmVjdCgpXG4gIH0sIFtdKVxuXG4gIGZ1bmN0aW9uIGNoZWNrUmVkaXJlY3QoKSB7XG4gICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZSA9PT0gJ2dwdC10cmF2ZWwtYWR2aXNvci52ZXJjZWwuYXBwJykge1xuICAgICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoJ2h0dHBzOi8vd3d3LnJvYW1hcm91bmQuaW8vJylcbiAgICB9XG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBoaXRBUEkoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghcmVxdWVzdC5jaXR5IHx8ICFyZXF1ZXN0LmRheXMpIHJldHVyblxuICAgICAgc2V0TWVzc2FnZSgnSGkhIFdlIGhpdCBvdXQgR1BUIGxpbWl0cyBhdCB0aGUgbW9tZW50LiBQbGVhc2UgY29tZSBiYWNrIHRvbW9ycm93IScpXG4gICAgICAgICAgIC8vc2V0TWVzc2FnZSgnQnVpbGRpbmcgaXRpbmVyYXJ5Li4udGhpcyBtYXkgdGFrZSA0MCBzZWNvbmRzJylcbiAgICAgIHNldExvYWRpbmcodHJ1ZSlcbiAgICAgIHNldEl0aW5lcmFyeSgnJylcblxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGlmICghbG9hZGluZykgcmV0dXJuXG4gICAgICAgIHNldE1lc3NhZ2UoJ0dldHRpbmcgY2xvc2VyIC4uLicpXG4gICAgICB9LCAyMDAwKVxuXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgaWYgKCFsb2FkaW5nKSByZXR1cm5cbiAgICAgICAgc2V0TWVzc2FnZSgnQWxtb3N0IHRoZXJlIC4uLicpXG4gICAgICB9LCAxNTAwMClcblxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2FwaS9nZXQtaXRpbmVyYXJ5Jywge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgIGRheXM6IHJlcXVlc3QuZGF5cyxcbiAgICAgICAgICBjaXR5OiByZXF1ZXN0LmNpdHlcbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG4gICAgICBcbiAgICAgIGNvbnN0IHJlc3BvbnNlMiA9IGF3YWl0IGZldGNoKCcvYXBpL2dldC1wb2ludHMtb2YtaW50ZXJlc3QnLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgcG9pbnRzT2ZJbnRlcmVzdFByb21wdDoganNvbi5wb2ludHNPZkludGVyZXN0UHJvbXB0LFxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICAgIGNvbnN0IGpzb24yID0gYXdhaXQgcmVzcG9uc2UyLmpzb24oKVxuXG4gICAgICBsZXQgcG9pbnRzT2ZJbnRlcmVzdCA9IEpTT04ucGFyc2UoanNvbjIucG9pbnRzT2ZJbnRlcmVzdClcbiAgICAgIGxldCBpdGluZXJhcnkgPSBqc29uLml0aW5lcmFyeVxuXG4gICAgICBwb2ludHNPZkludGVyZXN0Lm1hcChwb2ludCA9PiB7XG4gICAgICAgIGl0aW5lcmFyeSA9IGl0aW5lcmFyeS5yZXBsYWNlKHBvaW50LCBgWyR7cG9pbnR9XShodHRwczovL3d3dy52aWF0b3IuY29tL3NlYXJjaFJlc3VsdHMvYWxsP3BpZD1QMDAwODkyODkmbWNpZD00MjM4MyZtZWRpdW09bGluayZ0ZXh0PSR7ZW5jb2RlVVJJQ29tcG9uZW50KHBvaW50ICsgJyAnICsgcmVxdWVzdC5jaXR5KX0pYClcbiAgICAgIH0pXG5cbiAgICAgIHNldEl0aW5lcmFyeShpdGluZXJhcnkpXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5sb2coJ2Vycm9yOiAnLCBlcnIpXG4gICAgICBzZXRNZXNzYWdlKCcnKVxuICAgIH1cbiAgfVxuICBcbiAgbGV0IGRheXMgPSBpdGluZXJhcnkuc3BsaXQoJ0RheScpXG5cbiAgaWYgKGRheXMubGVuZ3RoID4gMSkge1xuICAgIGRheXMuc2hpZnQoKVxuICB9IGVsc2Uge1xuICAgIGRheXNbMF0gPSBcIjFcIiArIGRheXNbMF1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPG1haW4+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFwcC1jb250YWluZXJcIj5cbiAgICAgICAgPGgxIHN0eWxlPXtzdHlsZXMuaGVhZGVyfSBjbGFzc05hbWU9XCJoZXJvLWhlYWRlclwiPlJvYW0gQXJvdW5kPC9oMT5cbiAgICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLmZvcm1Db250YWluZXJ9IGNsYXNzTmFtZT1cImZvcm0tY29udGFpbmVyXCI+XG4gICAgICAgICAgPGlucHV0IHN0eWxlPXtzdHlsZXMuaW5wdXR9ICBwbGFjZWhvbGRlcj1cIkNpdHlcIiBvbkNoYW5nZT17ZSA9PiBzZXRSZXF1ZXN0KHJlcXVlc3QgPT4gKHtcbiAgICAgICAgICAgIC4uLnJlcXVlc3QsIGNpdHk6IGUudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgfSkpfSAvPlxuICAgICAgICAgIDxpbnB1dCBzdHlsZT17c3R5bGVzLmlucHV0fSBwbGFjZWhvbGRlcj1cIkRheXNcIiBvbkNoYW5nZT17ZSA9PiBzZXRSZXF1ZXN0KHJlcXVlc3QgPT4gKHtcbiAgICAgICAgICAgIC4uLnJlcXVlc3QsIGRheXM6IGUudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgfSkpfSAvPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiaW5wdXQtYnV0dG9uXCIgIG9uQ2xpY2s9e2hpdEFQSX0+QnVpbGQgSXRpbmVyYXJ5PC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlc3VsdHMtY29udGFpbmVyXCI+XG4gICAgICAgIHtcbiAgICAgICAgICBsb2FkaW5nICYmIChcbiAgICAgICAgICAgIDxwPnttZXNzYWdlfTwvcD5cbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgICAge1xuICAgICAgICAgIGl0aW5lcmFyeSAmJiAoXG4gICAgICAgICAgICA8aDMgc3R5bGU9e3N0eWxlcy5jaXR5SGVhZGluZ1N0eWxlfT5Paywgd2UndmUgbWFkZSB5b3VyIGl0aW5lcmFyeSBmb3Ige2NoZWNrQ2l0eShyZXF1ZXN0LmNpdHkpfTwvaDM+XG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICAgIHtcbiAgICAgICAgICBpdGluZXJhcnkgJiYgZGF5cy5tYXAoKGRheSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW5Cb3R0b206ICczMHB4J319XG4gICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxSZWFjdE1hcmtkb3duXG4gICAgICAgICAgICAgIHJlbWFya1BsdWdpbnM9e1tyZW1hcmtHZm1dfVxuICAgICAgICAgICAgICBjb21wb25lbnRzPXt7XG4gICAgICAgICAgICAgICAgYTogcHJvcHMgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGEgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm8tb3BlbmVyXCIgaHJlZj17cHJvcHMuaHJlZn0+e3Byb3BzLmNoaWxkcmVufTwvYT5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2BEYXkgJHtkYXl9YH1cbiAgICAgICAgICAgICAgICA8L1JlYWN0TWFya2Rvd24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApKVxuICAgICAgICAgIH1cbiAgICAgIFxuICAgICAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L21haW4+XG4gIClcbn1cblxuZnVuY3Rpb24gY2hlY2tDaXR5KGNpdHk/OiBzdHJpbmcpIHtcbiAgaWYgKCFjaXR5KSByZXR1cm5cbiAgY29uc3QgY2l0eVRvTG93ZXJDYXNlID0gY2l0eS50b0xvd2VyQ2FzZSgpXG4gIGNvbnN0IGNpdHlEYXRhID0gZGF0YVtjaXR5VG9Mb3dlckNhc2VdXG4gIGlmIChjaXR5RGF0YSkge1xuICAgIGNvbnN0IGxpbmsgPSBkYXRhW2NpdHlUb0xvd2VyQ2FzZV0ubGlua1xuICAgIHJldHVybiAoXG4gICAgICA8YVxuICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICByZWw9XCJuby1yZWZlcnJlclwiXG4gICAgICAgIGhyZWY9e2xpbmt9XG4gICAgICA+e2NpdHlUb0xvd2VyQ2FzZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGNpdHlUb0xvd2VyQ2FzZS5zbGljZSgxKX08L2E+XG4gICAgKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBjaXR5VG9Mb3dlckNhc2UuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBjaXR5VG9Mb3dlckNhc2Uuc2xpY2UoMSlcbiAgfVxufVxuXG5jb25zdCBzdHlsZXMgPSB7XG4gIGNpdHlIZWFkaW5nU3R5bGU6IHtcbiAgICBjb2xvcjogJ3doaXRlJyxcbiAgICBtYXJnaW5Cb3R0b206ICcyMHB4J1xuICB9LFxuICBoZWFkZXI6IHtcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInIGFzICdjZW50ZXInLFxuICAgIG1hcmdpblRvcDogJzYwcHgnLFxuICAgIGNvbG9yOiAnI2M2ODNmZicsXG4gICAgZm9udFdlaWdodDogJzkwMCcsXG4gICAgZm9udEZhbWlseTogJ1BvcHBpbnMnLFxuICAgIGZvbnRTaXplOiAnNjhweCdcbiAgfSxcbiAgaW5wdXQ6IHtcbiAgICBwYWRkaW5nOiAnMTBweCAxNHB4JyxcbiAgICBtYXJnaW5Cb3R0b206ICc0cHgnLFxuICAgIG91dGxpbmU6ICdub25lJyxcbiAgICBmb250U2l6ZTogJzE2cHgnLFxuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgYm9yZGVyUmFkaXVzOiAnOHB4J1xuICB9LFxuICBmb3JtQ29udGFpbmVyOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nIGFzICdjb2x1bW4nLFxuICAgIG1hcmdpbjogJzIwcHggYXV0byAwcHgnLFxuICAgIHBhZGRpbmc6ICcyMHB4JyxcbiAgICBib3hTaGFkb3c6ICcwcHggMHB4IDEycHggcmdiYSgxOTgsIDEzMSwgMjU1LCAuMiknLFxuICAgIGJvcmRlclJhZGl1czogJzEwcHgnXG4gIH0sXG4gIHJlc3VsdDoge1xuICAgIGNvbG9yOiAnd2hpdGUnXG4gIH1cbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlJlYWN0TWFya2Rvd24iLCJyZW1hcmtHZm0iLCJkYXRhIiwiSG9tZSIsInJlcXVlc3QiLCJzZXRSZXF1ZXN0IiwiaXRpbmVyYXJ5Iiwic2V0SXRpbmVyYXJ5IiwibG9hZGluZyIsInNldExvYWRpbmciLCJtZXNzYWdlIiwic2V0TWVzc2FnZSIsImNoZWNrUmVkaXJlY3QiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhvc3RuYW1lIiwicmVwbGFjZSIsImhpdEFQSSIsImNpdHkiLCJkYXlzIiwic2V0VGltZW91dCIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImpzb24iLCJyZXNwb25zZTIiLCJwb2ludHNPZkludGVyZXN0UHJvbXB0IiwianNvbjIiLCJwb2ludHNPZkludGVyZXN0IiwicGFyc2UiLCJtYXAiLCJwb2ludCIsImVuY29kZVVSSUNvbXBvbmVudCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJzcGxpdCIsImxlbmd0aCIsInNoaWZ0IiwibWFpbiIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwic3R5bGUiLCJzdHlsZXMiLCJoZWFkZXIiLCJmb3JtQ29udGFpbmVyIiwiaW5wdXQiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiYnV0dG9uIiwib25DbGljayIsInAiLCJoMyIsImNpdHlIZWFkaW5nU3R5bGUiLCJjaGVja0NpdHkiLCJkYXkiLCJpbmRleCIsIm1hcmdpbkJvdHRvbSIsInJlbWFya1BsdWdpbnMiLCJjb21wb25lbnRzIiwiYSIsInByb3BzIiwicmVsIiwiaHJlZiIsImNoaWxkcmVuIiwiY2l0eVRvTG93ZXJDYXNlIiwidG9Mb3dlckNhc2UiLCJjaXR5RGF0YSIsImxpbmsiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwiY29sb3IiLCJ0ZXh0QWxpZ24iLCJtYXJnaW5Ub3AiLCJmb250V2VpZ2h0IiwiZm9udEZhbWlseSIsImZvbnRTaXplIiwicGFkZGluZyIsIm91dGxpbmUiLCJ3aWR0aCIsImJvcmRlclJhZGl1cyIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwibWFyZ2luIiwiYm94U2hhZG93IiwicmVzdWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./app/page.tsx\n"));

/***/ })

});