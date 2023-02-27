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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\nconst GPT_KEY = process.env.GPT_API_KEY;\nconst headers = {\n    \"Content-Type\": \"application/json\",\n    \"Authorization\": `Bearer ${GPT_KEY}`\n};\nasync function handler(req, res) {\n    const { pointsOfInterestPrompt  } = JSON.parse(req.body);\n    const response2 = await fetch(\"https://api.openai.com/v1/completions\", {\n        method: \"POST\",\n        headers,\n        body: JSON.stringify({\n            model: \"text-davinci-003\",\n            prompt: pointsOfInterestPrompt,\n            temperature: 0,\n            max_tokens: 300\n        })\n    });\n    let pointsOfInterest = await response2.json();\n    pointsOfInterest = pointsOfInterest.choices[0].text.split(\"\\n\");\n    pointsOfInterest = pointsOfInterest[pointsOfInterest.length - 1];\n    pointsOfInterest = pointsOfInterest.split(\",\");\n    const pointsOfInterestArray = pointsOfInterest.map((i)=>i.trim());\n    res.status(200).json({\n        pointsOfInterest: JSON.stringify(pointsOfInterestArray)\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2V0LXBvaW50cy1vZi1pbnRlcmVzdC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsNkVBQTZFO0FBTzdFLE1BQU1BLFVBQVVDLFFBQVFDLEdBQUcsQ0FBQ0MsV0FBVztBQUV2QyxNQUFNQyxVQUFVO0lBQ2QsZ0JBQWdCO0lBQ2hCLGlCQUFpQixDQUFDLE9BQU8sRUFBRUosUUFBUSxDQUFDO0FBQ3RDO0FBRWUsZUFBZUssUUFDNUJDLEdBQW1CLEVBQ25CQyxHQUEwQixFQUMxQjtJQUVBLE1BQU0sRUFBRUMsdUJBQXNCLEVBQUUsR0FBR0MsS0FBS0MsS0FBSyxDQUFDSixJQUFJSyxJQUFJO0lBQ3RELE1BQU1DLFlBQVksTUFBTUMsTUFBTSx5Q0FBeUM7UUFDckVDLFFBQVE7UUFDUlY7UUFDQU8sTUFBTUYsS0FBS00sU0FBUyxDQUFDO1lBQ25CQyxPQUFPO1lBQ1BDLFFBQVFUO1lBQ1JVLGFBQWE7WUFDYkMsWUFBWTtRQUNkO0lBQ0Y7SUFFQSxJQUFJQyxtQkFBbUIsTUFBTVIsVUFBVVMsSUFBSTtJQUUzQ0QsbUJBQW1CQSxpQkFBaUJFLE9BQU8sQ0FBQyxFQUFFLENBQUNDLElBQUksQ0FBQ0MsS0FBSyxDQUFDO0lBQzFESixtQkFBbUJBLGdCQUFnQixDQUFDQSxpQkFBaUJLLE1BQU0sR0FBRyxFQUFFO0lBQ2hFTCxtQkFBbUJBLGlCQUFpQkksS0FBSyxDQUFDO0lBQzFDLE1BQU1FLHdCQUF3Qk4saUJBQWlCTyxHQUFHLENBQUNDLENBQUFBLElBQUtBLEVBQUVDLElBQUk7SUFFOUR0QixJQUFJdUIsTUFBTSxDQUFDLEtBQUtULElBQUksQ0FBQztRQUNuQkQsa0JBQWtCWCxLQUFLTSxTQUFTLENBQUNXO0lBQ25DO0FBQ0YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtZ3B0My8uL3BhZ2VzL2FwaS9nZXQtcG9pbnRzLW9mLWludGVyZXN0LnRzPzUyYzIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gTmV4dC5qcyBBUEkgcm91dGUgc3VwcG9ydDogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvYXBpLXJvdXRlcy9pbnRyb2R1Y3Rpb25cbmltcG9ydCB0eXBlIHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gJ25leHQnXG5cbnR5cGUgRGF0YSA9IHtcbiAgcG9pbnRzT2ZJbnRlcmVzdDogYW55LFxufVxuXG5jb25zdCBHUFRfS0VZID0gcHJvY2Vzcy5lbnYuR1BUX0FQSV9LRVlcblxuY29uc3QgaGVhZGVycyA9IHtcbiAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgJ0F1dGhvcml6YXRpb24nOiBgQmVhcmVyICR7R1BUX0tFWX1gXG59XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIoXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlPERhdGE+XG4pIHtcbiAgXG4gIGNvbnN0IHsgcG9pbnRzT2ZJbnRlcmVzdFByb21wdCB9ID0gSlNPTi5wYXJzZShyZXEuYm9keSlcbiAgY29uc3QgcmVzcG9uc2UyID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLm9wZW5haS5jb20vdjEvY29tcGxldGlvbnMnLCB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgaGVhZGVycyxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICBtb2RlbDogJ3RleHQtZGF2aW5jaS0wMDMnLFxuICAgICAgcHJvbXB0OiBwb2ludHNPZkludGVyZXN0UHJvbXB0LFxuICAgICAgdGVtcGVyYXR1cmU6IDAsXG4gICAgICBtYXhfdG9rZW5zOiAzMDBcbiAgICB9KVxuICB9KVxuXG4gIGxldCBwb2ludHNPZkludGVyZXN0ID0gYXdhaXQgcmVzcG9uc2UyLmpzb24oKVxuXG4gIHBvaW50c09mSW50ZXJlc3QgPSBwb2ludHNPZkludGVyZXN0LmNob2ljZXNbMF0udGV4dC5zcGxpdCgnXFxuJylcbiAgcG9pbnRzT2ZJbnRlcmVzdCA9IHBvaW50c09mSW50ZXJlc3RbcG9pbnRzT2ZJbnRlcmVzdC5sZW5ndGggLSAxXVxuICBwb2ludHNPZkludGVyZXN0ID0gcG9pbnRzT2ZJbnRlcmVzdC5zcGxpdCgnLCcpXG4gIGNvbnN0IHBvaW50c09mSW50ZXJlc3RBcnJheSA9IHBvaW50c09mSW50ZXJlc3QubWFwKGkgPT4gaS50cmltKCkpXG5cbiAgcmVzLnN0YXR1cygyMDApLmpzb24oe1xuICAgIHBvaW50c09mSW50ZXJlc3Q6IEpTT04uc3RyaW5naWZ5KHBvaW50c09mSW50ZXJlc3RBcnJheSlcbiAgfSlcbn1cbiJdLCJuYW1lcyI6WyJHUFRfS0VZIiwicHJvY2VzcyIsImVudiIsIkdQVF9BUElfS0VZIiwiaGVhZGVycyIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJwb2ludHNPZkludGVyZXN0UHJvbXB0IiwiSlNPTiIsInBhcnNlIiwiYm9keSIsInJlc3BvbnNlMiIsImZldGNoIiwibWV0aG9kIiwic3RyaW5naWZ5IiwibW9kZWwiLCJwcm9tcHQiLCJ0ZW1wZXJhdHVyZSIsIm1heF90b2tlbnMiLCJwb2ludHNPZkludGVyZXN0IiwianNvbiIsImNob2ljZXMiLCJ0ZXh0Iiwic3BsaXQiLCJsZW5ndGgiLCJwb2ludHNPZkludGVyZXN0QXJyYXkiLCJtYXAiLCJpIiwidHJpbSIsInN0YXR1cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/get-points-of-interest.ts\n");

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