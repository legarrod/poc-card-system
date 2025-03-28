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

/***/ "(app-pages-browser)/./src/app/components/TaskTree/TaskTree.tsx":
/*!**************************************************!*\
  !*** ./src/app/components/TaskTree/TaskTree.tsx ***!
  \**************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_AiOutlineDown_AiOutlineUp_react_icons_ai__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=AiOutlineDown,AiOutlineUp!=!react-icons/ai */ \"(app-pages-browser)/./node_modules/react-icons/ai/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\nconst TaskTree = (param)=>{\n    let { tasks, level = 0 } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full space-y-2\",\n        children: tasks.map((task, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TaskNode, {\n                task: task,\n                level: level\n            }, index, false, {\n                fileName: \"/Users/luisgarcia/Documents/POC-system/poc-card-system/src/app/components/TaskTree/TaskTree.tsx\",\n                lineNumber: 14,\n                columnNumber: 9\n            }, undefined))\n    }, void 0, false, {\n        fileName: \"/Users/luisgarcia/Documents/POC-system/poc-card-system/src/app/components/TaskTree/TaskTree.tsx\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, undefined);\n};\n_c = TaskTree;\nconst TaskNode = (param)=>{\n    let { task, level } = param;\n    _s();\n    const [showChildren, setShowChildren] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const toggleChildren = ()=>{\n        setShowChildren(!showChildren);\n    };\n    const parsedPercent = parseFloat(task.percent || '0');\n    const percentClass = parsedPercent < 50 ? 'bg-red-500 text-white' : parsedPercent >= 51 && parsedPercent <= 80 ? 'bg-yellow-500 text-black' : 'bg-green-500 text-white';\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-white shadow-md rounded-lg p-4 w-[300px] md:w-[400px] \".concat(level > 0 ? 'ml-8' : ''),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-between items-start\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col space-y-1\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    className: \"text-sm font-semibold\",\n                                    children: task.title\n                                }, void 0, false, {\n                                    fileName: \"/Users/luisgarcia/Documents/POC-system/poc-card-system/src/app/components/TaskTree/TaskTree.tsx\",\n                                    lineNumber: 45,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                    className: \"text-xs text-gray-700\",\n                                    children: task.user\n                                }, void 0, false, {\n                                    fileName: \"/Users/luisgarcia/Documents/POC-system/poc-card-system/src/app/components/TaskTree/TaskTree.tsx\",\n                                    lineNumber: 46,\n                                    columnNumber: 13\n                                }, undefined),\n                                task.description && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-xs text-gray-600 line-clamp-2\",\n                                    children: task.description\n                                }, void 0, false, {\n                                    fileName: \"/Users/luisgarcia/Documents/POC-system/poc-card-system/src/app/components/TaskTree/TaskTree.tsx\",\n                                    lineNumber: 48,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/luisgarcia/Documents/POC-system/poc-card-system/src/app/components/TaskTree/TaskTree.tsx\",\n                            lineNumber: 44,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col items-end space-y-2\",\n                            children: [\n                                task.percent && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"text-xs px-2 py-1 rounded-full \".concat(percentClass),\n                                    children: [\n                                        task.percent,\n                                        \"%\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/luisgarcia/Documents/POC-system/poc-card-system/src/app/components/TaskTree/TaskTree.tsx\",\n                                    lineNumber: 56,\n                                    columnNumber: 15\n                                }, undefined),\n                                (task.subTask || task.objetives || task.objetive) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: toggleChildren,\n                                    className: \"bg-green-500 text-white w-6 h-6 rounded-full hover:bg-green-600 transition duration-300 flex items-center justify-center\",\n                                    children: showChildren ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AiOutlineDown_AiOutlineUp_react_icons_ai__WEBPACK_IMPORTED_MODULE_2__.AiOutlineUp, {\n                                        size: 12\n                                    }, void 0, false, {\n                                        fileName: \"/Users/luisgarcia/Documents/POC-system/poc-card-system/src/app/components/TaskTree/TaskTree.tsx\",\n                                        lineNumber: 68,\n                                        columnNumber: 19\n                                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AiOutlineDown_AiOutlineUp_react_icons_ai__WEBPACK_IMPORTED_MODULE_2__.AiOutlineDown, {\n                                        size: 12\n                                    }, void 0, false, {\n                                        fileName: \"/Users/luisgarcia/Documents/POC-system/poc-card-system/src/app/components/TaskTree/TaskTree.tsx\",\n                                        lineNumber: 70,\n                                        columnNumber: 19\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/luisgarcia/Documents/POC-system/poc-card-system/src/app/components/TaskTree/TaskTree.tsx\",\n                                    lineNumber: 63,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/luisgarcia/Documents/POC-system/poc-card-system/src/app/components/TaskTree/TaskTree.tsx\",\n                            lineNumber: 54,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/luisgarcia/Documents/POC-system/poc-card-system/src/app/components/TaskTree/TaskTree.tsx\",\n                    lineNumber: 43,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/luisgarcia/Documents/POC-system/poc-card-system/src/app/components/TaskTree/TaskTree.tsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, undefined),\n            showChildren && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-2 \".concat(level >= 0 ? 'ml-8' : ''),\n                children: [\n                    task.subTask && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TaskTree, {\n                        tasks: task.subTask,\n                        level: level + 1\n                    }, void 0, false, {\n                        fileName: \"/Users/luisgarcia/Documents/POC-system/poc-card-system/src/app/components/TaskTree/TaskTree.tsx\",\n                        lineNumber: 81,\n                        columnNumber: 28\n                    }, undefined),\n                    task.objetives && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TaskTree, {\n                        tasks: task.objetives,\n                        level: level + 1\n                    }, void 0, false, {\n                        fileName: \"/Users/luisgarcia/Documents/POC-system/poc-card-system/src/app/components/TaskTree/TaskTree.tsx\",\n                        lineNumber: 82,\n                        columnNumber: 30\n                    }, undefined),\n                    task.objetive && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TaskTree, {\n                        tasks: task.objetive,\n                        level: level + 1\n                    }, void 0, false, {\n                        fileName: \"/Users/luisgarcia/Documents/POC-system/poc-card-system/src/app/components/TaskTree/TaskTree.tsx\",\n                        lineNumber: 83,\n                        columnNumber: 29\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/luisgarcia/Documents/POC-system/poc-card-system/src/app/components/TaskTree/TaskTree.tsx\",\n                lineNumber: 80,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(TaskNode, \"sUZXn3ATDKywEr98wPI+eUazihE=\");\n_c1 = TaskNode;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TaskTree);\nvar _c, _c1;\n$RefreshReg$(_c, \"TaskTree\");\n$RefreshReg$(_c1, \"TaskNode\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9UYXNrVHJlZS9UYXNrVHJlZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUF3QztBQUVvQjtBQU81RCxNQUFNSSxXQUFvQztRQUFDLEVBQUVDLEtBQUssRUFBRUMsUUFBUSxDQUFDLEVBQUU7SUFDN0QscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7a0JBQ1pILE1BQU1JLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQyxzQkFDaEIsOERBQUNDO2dCQUFxQkYsTUFBTUE7Z0JBQU1KLE9BQU9BO2VBQTFCSzs7Ozs7Ozs7OztBQUl2QjtLQVJNUDtBQVVOLE1BQU1RLFdBQW1EO1FBQUMsRUFBRUYsSUFBSSxFQUFFSixLQUFLLEVBQUU7O0lBQ3ZFLE1BQU0sQ0FBQ08sY0FBY0MsZ0JBQWdCLEdBQUdiLCtDQUFRQSxDQUFDO0lBRWpELE1BQU1jLGlCQUFpQjtRQUNyQkQsZ0JBQWdCLENBQUNEO0lBQ25CO0lBRUEsTUFBTUcsZ0JBQWdCQyxXQUFXUCxLQUFLUSxPQUFPLElBQUk7SUFDakQsTUFBTUMsZUFDSkgsZ0JBQWdCLEtBQ1osMEJBQ0FBLGlCQUFpQixNQUFNQSxpQkFBaUIsS0FDeEMsNkJBQ0E7SUFFTixxQkFDRTs7MEJBRUUsOERBQUNUO2dCQUNDQyxXQUFXLDREQUVWLE9BRENGLFFBQVEsSUFBSSxTQUFTOzBCQUd2Qiw0RUFBQ0M7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDRDs0QkFBSUMsV0FBVTs7OENBQ2IsOERBQUNZO29DQUFHWixXQUFVOzhDQUF5QkUsS0FBS1csS0FBSzs7Ozs7OzhDQUNqRCw4REFBQ0M7b0NBQUdkLFdBQVU7OENBQXlCRSxLQUFLYSxJQUFJOzs7Ozs7Z0NBQy9DYixLQUFLYyxXQUFXLGtCQUNmLDhEQUFDQztvQ0FBRWpCLFdBQVU7OENBQ1ZFLEtBQUtjLFdBQVc7Ozs7Ozs7Ozs7OztzQ0FLdkIsOERBQUNqQjs0QkFBSUMsV0FBVTs7Z0NBQ1pFLEtBQUtRLE9BQU8sa0JBQ1gsOERBQUNRO29DQUNDbEIsV0FBVyxrQ0FBK0MsT0FBYlc7O3dDQUU1Q1QsS0FBS1EsT0FBTzt3Q0FBQzs7Ozs7OztnQ0FHaEJSLENBQUFBLEtBQUtpQixPQUFPLElBQUlqQixLQUFLa0IsU0FBUyxJQUFJbEIsS0FBS21CLFFBQVEsbUJBQy9DLDhEQUFDQztvQ0FDQ0MsU0FBU2hCO29DQUNUUCxXQUFVOzhDQUVUSyw2QkFDQyw4REFBQ1Ysd0dBQVdBO3dDQUFDNkIsTUFBTTs7Ozs7a0VBRW5CLDhEQUFDOUIsMEdBQWFBO3dDQUFDOEIsTUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVNoQ25CLDhCQUNDLDhEQUFDTjtnQkFBSUMsV0FBVyxRQUFpQyxPQUF6QkYsU0FBUyxJQUFJLFNBQVM7O29CQUMzQ0ksS0FBS2lCLE9BQU8sa0JBQUksOERBQUN2Qjt3QkFBU0MsT0FBT0ssS0FBS2lCLE9BQU87d0JBQUVyQixPQUFPQSxRQUFROzs7Ozs7b0JBQzlESSxLQUFLa0IsU0FBUyxrQkFBSSw4REFBQ3hCO3dCQUFTQyxPQUFPSyxLQUFLa0IsU0FBUzt3QkFBRXRCLE9BQU9BLFFBQVE7Ozs7OztvQkFDbEVJLEtBQUttQixRQUFRLGtCQUFJLDhEQUFDekI7d0JBQVNDLE9BQU9LLEtBQUttQixRQUFRO3dCQUFFdkIsT0FBT0EsUUFBUTs7Ozs7Ozs7Ozs7Ozs7QUFLM0U7R0FwRU1NO01BQUFBO0FBc0VOLGlFQUFlUixRQUFRQSxFQUFDIiwic291cmNlcyI6WyIvVXNlcnMvbHVpc2dhcmNpYS9Eb2N1bWVudHMvUE9DLXN5c3RlbS9wb2MtY2FyZC1zeXN0ZW0vc3JjL2FwcC9jb21wb25lbnRzL1Rhc2tUcmVlL1Rhc2tUcmVlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBUYXNrLCBTdWJUYXNrLCBPYmplY3RpdmUsIFN1Yk9iamVjdGl2ZSB9IGZyb20gJy4uLy4uL3R5cGVzJztcbmltcG9ydCB7IEFpT3V0bGluZURvd24sIEFpT3V0bGluZVVwIH0gZnJvbSBcInJlYWN0LWljb25zL2FpXCI7XG5cbmludGVyZmFjZSBUYXNrVHJlZVByb3BzIHtcbiAgdGFza3M6IFRhc2tbXSB8IFN1YlRhc2tbXSB8IE9iamVjdGl2ZVtdO1xuICBsZXZlbD86IG51bWJlcjtcbn1cblxuY29uc3QgVGFza1RyZWU6IFJlYWN0LkZDPFRhc2tUcmVlUHJvcHM+ID0gKHsgdGFza3MsIGxldmVsID0gMCB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgc3BhY2UteS0yXCI+XG4gICAgICB7dGFza3MubWFwKCh0YXNrLCBpbmRleCkgPT4gKFxuICAgICAgICA8VGFza05vZGUga2V5PXtpbmRleH0gdGFzaz17dGFza30gbGV2ZWw9e2xldmVsfSAvPlxuICAgICAgKSl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5jb25zdCBUYXNrTm9kZTogUmVhY3QuRkM8eyB0YXNrOiBhbnk7IGxldmVsOiBudW1iZXIgfT4gPSAoeyB0YXNrLCBsZXZlbCB9KSA9PiB7XG4gIGNvbnN0IFtzaG93Q2hpbGRyZW4sIHNldFNob3dDaGlsZHJlbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgdG9nZ2xlQ2hpbGRyZW4gPSAoKSA9PiB7XG4gICAgc2V0U2hvd0NoaWxkcmVuKCFzaG93Q2hpbGRyZW4pO1xuICB9O1xuXG4gIGNvbnN0IHBhcnNlZFBlcmNlbnQgPSBwYXJzZUZsb2F0KHRhc2sucGVyY2VudCB8fCAnMCcpO1xuICBjb25zdCBwZXJjZW50Q2xhc3MgPVxuICAgIHBhcnNlZFBlcmNlbnQgPCA1MFxuICAgICAgPyAnYmctcmVkLTUwMCB0ZXh0LXdoaXRlJ1xuICAgICAgOiBwYXJzZWRQZXJjZW50ID49IDUxICYmIHBhcnNlZFBlcmNlbnQgPD0gODBcbiAgICAgID8gJ2JnLXllbGxvdy01MDAgdGV4dC1ibGFjaydcbiAgICAgIDogJ2JnLWdyZWVuLTUwMCB0ZXh0LXdoaXRlJztcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7LyogQ2FkYSBub2RvIGVzIHVuIENhcmQgY29tcGxldG8gKi99XG4gICAgICA8ZGl2IFxuICAgICAgICBjbGFzc05hbWU9e2BiZy13aGl0ZSBzaGFkb3ctbWQgcm91bmRlZC1sZyBwLTQgdy1bMzAwcHhdIG1kOnctWzQwMHB4XSAke1xuICAgICAgICAgIGxldmVsID4gMCA/ICdtbC04JyA6ICcnXG4gICAgICAgIH1gfVxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLXN0YXJ0XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHNwYWNlLXktMVwiPlxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1zZW1pYm9sZFwiPnt0YXNrLnRpdGxlfTwvaDM+XG4gICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LWdyYXktNzAwXCI+e3Rhc2sudXNlcn08L2g0PlxuICAgICAgICAgICAge3Rhc2suZGVzY3JpcHRpb24gJiYgKFxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtZ3JheS02MDAgbGluZS1jbGFtcC0yXCI+XG4gICAgICAgICAgICAgICAge3Rhc2suZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtZW5kIHNwYWNlLXktMlwiPlxuICAgICAgICAgICAge3Rhc2sucGVyY2VudCAmJiAoXG4gICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgdGV4dC14cyBweC0yIHB5LTEgcm91bmRlZC1mdWxsICR7cGVyY2VudENsYXNzfWB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7dGFzay5wZXJjZW50fSVcbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHsodGFzay5zdWJUYXNrIHx8IHRhc2sub2JqZXRpdmVzIHx8IHRhc2sub2JqZXRpdmUpICYmIChcbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZUNoaWxkcmVufVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWdyZWVuLTUwMCB0ZXh0LXdoaXRlIHctNiBoLTYgcm91bmRlZC1mdWxsIGhvdmVyOmJnLWdyZWVuLTYwMCB0cmFuc2l0aW9uIGR1cmF0aW9uLTMwMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7c2hvd0NoaWxkcmVuID8gKFxuICAgICAgICAgICAgICAgICAgPEFpT3V0bGluZVVwIHNpemU9ezEyfSAvPlxuICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICA8QWlPdXRsaW5lRG93biBzaXplPXsxMn0gLz5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIHsvKiBMb3MgaGlqb3MgYXBhcmVjZW4gY29tbyBDYXJkcyBpbmRlcGVuZGllbnRlcyBkZWJham8gKi99XG4gICAgICB7c2hvd0NoaWxkcmVuICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BtdC0yICR7bGV2ZWwgPj0gMCA/ICdtbC04JyA6ICcnfWB9PlxuICAgICAgICAgIHt0YXNrLnN1YlRhc2sgJiYgPFRhc2tUcmVlIHRhc2tzPXt0YXNrLnN1YlRhc2t9IGxldmVsPXtsZXZlbCArIDF9IC8+fVxuICAgICAgICAgIHt0YXNrLm9iamV0aXZlcyAmJiA8VGFza1RyZWUgdGFza3M9e3Rhc2sub2JqZXRpdmVzfSBsZXZlbD17bGV2ZWwgKyAxfSAvPn1cbiAgICAgICAgICB7dGFzay5vYmpldGl2ZSAmJiA8VGFza1RyZWUgdGFza3M9e3Rhc2sub2JqZXRpdmV9IGxldmVsPXtsZXZlbCArIDF9IC8+fVxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUYXNrVHJlZTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiQWlPdXRsaW5lRG93biIsIkFpT3V0bGluZVVwIiwiVGFza1RyZWUiLCJ0YXNrcyIsImxldmVsIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFwIiwidGFzayIsImluZGV4IiwiVGFza05vZGUiLCJzaG93Q2hpbGRyZW4iLCJzZXRTaG93Q2hpbGRyZW4iLCJ0b2dnbGVDaGlsZHJlbiIsInBhcnNlZFBlcmNlbnQiLCJwYXJzZUZsb2F0IiwicGVyY2VudCIsInBlcmNlbnRDbGFzcyIsImgzIiwidGl0bGUiLCJoNCIsInVzZXIiLCJkZXNjcmlwdGlvbiIsInAiLCJzcGFuIiwic3ViVGFzayIsIm9iamV0aXZlcyIsIm9iamV0aXZlIiwiYnV0dG9uIiwib25DbGljayIsInNpemUiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/TaskTree/TaskTree.tsx\n"));

/***/ })

});