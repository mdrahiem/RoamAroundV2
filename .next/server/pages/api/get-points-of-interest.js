"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/get-points-of-interest";
exports.ids = ["pages/api/get-points-of-interest"];
exports.modules = {

/***/ "(api)/./pages/api/get-points-of-interest.ts":
/*!*********************************************!*\
  !*** ./pages/api/get-points-of-interest.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\nconst GPT_KEY = process.env.GPT_API_KEY;\nconst headers = {\n    \"Content-Type\": \"application/json\",\n    \"Authorization\": `Bearer ${GPT_KEY}`\n};\nasync function handler(req, res) {\n    const { pointsOfInterestPrompt  } = JSON.parse(req.body);\n    const response2 = await fetch(\"https://api.openai.com/v1/completions\", {\n        method: \"POST\",\n        headers,\n        body: JSON.stringify({\n            model: \"text-davinci-003\",\n            prompt: pointsOfInterestPrompt,\n            temperature: 0,\n            max_tokens: 300\n        })\n    });\n    console.log(\"response2: \", response2);\n    let pointsOfInterest = await response2.json();\n    pointsOfInterest = pointsOfInterest.choices[0].text.split(\"\\n\");\n    pointsOfInterest = pointsOfInterest[pointsOfInterest.length - 1];\n    pointsOfInterest = pointsOfInterest.split(\",\");\n    const pointsOfInterestArray = pointsOfInterest.map((i)=>i.trim());\n    res.status(200).json({\n        pointsOfInterest: JSON.stringify(pointsOfInterestArray)\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2V0LXBvaW50cy1vZi1pbnRlcmVzdC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsNkVBQTZFO0FBTzdFLE1BQU1BLFVBQVVDLFFBQVFDLEdBQUcsQ0FBQ0MsV0FBVztBQUV2QyxNQUFNQyxVQUFVO0lBQ2QsZ0JBQWdCO0lBQ2hCLGlCQUFpQixDQUFDLE9BQU8sRUFBRUosUUFBUSxDQUFDO0FBQ3RDO0FBRWUsZUFBZUssUUFDNUJDLEdBQW1CLEVBQ25CQyxHQUEwQixFQUMxQjtJQUVBLE1BQU0sRUFBRUMsdUJBQXNCLEVBQUUsR0FBR0MsS0FBS0MsS0FBSyxDQUFDSixJQUFJSyxJQUFJO0lBQ3RELE1BQU1DLFlBQVksTUFBTUMsTUFBTSx5Q0FBeUM7UUFDckVDLFFBQVE7UUFDUlY7UUFDQU8sTUFBTUYsS0FBS00sU0FBUyxDQUFDO1lBQ25CQyxPQUFPO1lBQ1BDLFFBQVFUO1lBQ1JVLGFBQWE7WUFDYkMsWUFBWTtRQUNkO0lBQ0Y7SUFFQUMsUUFBUUMsR0FBRyxDQUFDLGVBQWVUO0lBRTNCLElBQUlVLG1CQUFtQixNQUFNVixVQUFVVyxJQUFJO0lBRTNDRCxtQkFBbUJBLGlCQUFpQkUsT0FBTyxDQUFDLEVBQUUsQ0FBQ0MsSUFBSSxDQUFDQyxLQUFLLENBQUM7SUFDMURKLG1CQUFtQkEsZ0JBQWdCLENBQUNBLGlCQUFpQkssTUFBTSxHQUFHLEVBQUU7SUFDaEVMLG1CQUFtQkEsaUJBQWlCSSxLQUFLLENBQUM7SUFDMUMsTUFBTUUsd0JBQXdCTixpQkFBaUJPLEdBQUcsQ0FBQ0MsQ0FBQUEsSUFBS0EsRUFBRUMsSUFBSTtJQUU5RHhCLElBQUl5QixNQUFNLENBQUMsS0FBS1QsSUFBSSxDQUFDO1FBQ25CRCxrQkFBa0JiLEtBQUtNLFNBQVMsQ0FBQ2E7SUFDbkM7QUFDRixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1ncHQzLy4vcGFnZXMvYXBpL2dldC1wb2ludHMtb2YtaW50ZXJlc3QudHM/NTJjMiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBOZXh0LmpzIEFQSSByb3V0ZSBzdXBwb3J0OiBodHRwczovL25leHRqcy5vcmcvZG9jcy9hcGktcm91dGVzL2ludHJvZHVjdGlvblxuaW1wb3J0IHR5cGUgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSAnbmV4dCdcblxudHlwZSBEYXRhID0ge1xuICBwb2ludHNPZkludGVyZXN0OiBhbnksXG59XG5cbmNvbnN0IEdQVF9LRVkgPSBwcm9jZXNzLmVudi5HUFRfQVBJX0tFWVxuXG5jb25zdCBoZWFkZXJzID0ge1xuICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHtHUFRfS0VZfWBcbn1cblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2U8RGF0YT5cbikge1xuICBcbiAgY29uc3QgeyBwb2ludHNPZkludGVyZXN0UHJvbXB0IH0gPSBKU09OLnBhcnNlKHJlcS5ib2R5KVxuICBjb25zdCByZXNwb25zZTIgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkub3BlbmFpLmNvbS92MS9jb21wbGV0aW9ucycsIHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBoZWFkZXJzLFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIG1vZGVsOiAndGV4dC1kYXZpbmNpLTAwMycsXG4gICAgICBwcm9tcHQ6IHBvaW50c09mSW50ZXJlc3RQcm9tcHQsXG4gICAgICB0ZW1wZXJhdHVyZTogMCxcbiAgICAgIG1heF90b2tlbnM6IDMwMFxuICAgIH0pXG4gIH0pXG5cbiAgY29uc29sZS5sb2coJ3Jlc3BvbnNlMjogJywgcmVzcG9uc2UyKVxuXG4gIGxldCBwb2ludHNPZkludGVyZXN0ID0gYXdhaXQgcmVzcG9uc2UyLmpzb24oKVxuXG4gIHBvaW50c09mSW50ZXJlc3QgPSBwb2ludHNPZkludGVyZXN0LmNob2ljZXNbMF0udGV4dC5zcGxpdCgnXFxuJylcbiAgcG9pbnRzT2ZJbnRlcmVzdCA9IHBvaW50c09mSW50ZXJlc3RbcG9pbnRzT2ZJbnRlcmVzdC5sZW5ndGggLSAxXVxuICBwb2ludHNPZkludGVyZXN0ID0gcG9pbnRzT2ZJbnRlcmVzdC5zcGxpdCgnLCcpXG4gIGNvbnN0IHBvaW50c09mSW50ZXJlc3RBcnJheSA9IHBvaW50c09mSW50ZXJlc3QubWFwKGkgPT4gaS50cmltKCkpXG5cbiAgcmVzLnN0YXR1cygyMDApLmpzb24oe1xuICAgIHBvaW50c09mSW50ZXJlc3Q6IEpTT04uc3RyaW5naWZ5KHBvaW50c09mSW50ZXJlc3RBcnJheSlcbiAgfSlcbn1cbiJdLCJuYW1lcyI6WyJHUFRfS0VZIiwicHJvY2VzcyIsImVudiIsIkdQVF9BUElfS0VZIiwiaGVhZGVycyIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJwb2ludHNPZkludGVyZXN0UHJvbXB0IiwiSlNPTiIsInBhcnNlIiwiYm9keSIsInJlc3BvbnNlMiIsImZldGNoIiwibWV0aG9kIiwic3RyaW5naWZ5IiwibW9kZWwiLCJwcm9tcHQiLCJ0ZW1wZXJhdHVyZSIsIm1heF90b2tlbnMiLCJjb25zb2xlIiwibG9nIiwicG9pbnRzT2ZJbnRlcmVzdCIsImpzb24iLCJjaG9pY2VzIiwidGV4dCIsInNwbGl0IiwibGVuZ3RoIiwicG9pbnRzT2ZJbnRlcmVzdEFycmF5IiwibWFwIiwiaSIsInRyaW0iLCJzdGF0dXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/get-points-of-interest.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/get-points-of-interest.ts"));
module.exports = __webpack_exports__;

})();