"use strict";
(self["webpackChunkleaderboard"] = self["webpackChunkleaderboard"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! assets/logo.png */ "./src/assets/logo.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! assets/pop-bg.jpg */ "./src/assets/pop-bg.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: aliceblue;
  text-align: center;
}

/* Navigation bar styles */
.navbar {
  display: flex;
  background: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  background-size: 50px 50px;
  background-position-x: 40px;
  background-position-y: 1px;
  background-repeat: no-repeat;
  font-family: "Roboto", sans-serif;
  justify-content: space-between;
  align-items: center;
  background-color: aliceblue;
  opacity: 0.6;
  color: rgb(0, 0, 0);
  padding: 13px 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
  position: fixed;
  width: 100%;
  z-index: 1000;
}

.navbar-brand {
  font-family: "Roboto", sans-serif;
  position: relative;
  font-size: 24px;
  font-weight: bold;
  left: 80px;
  text-shadow: 1px 1px 1px rgb(255, 255, 255);
}

.navbar-links {
  display: flex;
  position: relative;
  font-family: "Roboto", sans-serif;
  list-style: none;
  gap: 5vw;
  left: -50px;
  text-shadow: 1px 1px 1px rgb(255, 255, 255);
}

.navbar-links li {
  position: relative;
}

.navbar-links a {
  color: black;
  text-decoration: none;
  padding: 10px;
  transition: color 0.3s;
}

.navbar-links a:hover {
  color: rgb(0, 0, 0);
  text-shadow: 1px 1px 1px rgb(255, 255, 255);
}

/* Unique navigation effect */
.navbar-links li::before {
  content: "";
  position: absolute;
  width: 0%;
  height: 2px;
  background-color: #000;
  box-shadow: 1px 1px 1px white;
  bottom: -5px;
  left: 50%;
  transform: translateX(-50%);
  transition: width 0.3s;
}

.navbar-links li:hover::before {
  width: 100%;
}

footer {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24pt;
  padding-left: 20px;
  align-items: center;
  background: rgb(159, 207, 223);
  opacity: 0.6;
  color: black;
  height: 50px;
}

.title {
  font-size: 2.7rem;
  font-weight: 500;
  margin-bottom: 10px;
  color: black;
  text-shadow: 1px 1px 1px white;
}

.single-product {
  width: 100%;
  border-radius: 8px;
}

.name {
  font-size: 1.8vw;
  font-weight: 500;
  padding: 0.5rem 0;
}

.title-underline {
  background-color: rgb(144, 189, 237);
  height: 0.2rem;
  width: 7rem;
  margin: 0 auto;
  margin-top: 10px;
  margin-bottom: 20px;
  border-radius: 50%;
}

.products {
  padding: 5rem 0;
}

.products-center {
  width: 70%;
  max-width: 1170px;
  margin: 0 auto;
}

.products-container {
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(3, 1fr);
}

.img {
  width: 100%;
  display: block;
  object-fit: cover;
  border-radius: 8px 8px 0 0;
  box-shadow: 2px 1px 2px rgb(142, 131, 131);
}

.product-footer {
  background-color: #f2f2f2c5;
  border-radius: 0 0 8px 8px;
  padding: 10px;
  box-shadow: 2px 1px 2px rgb(142, 131, 131);
}

.btn-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5px;
}

.btn-like {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
  color: red;
  font-size: 25px;
  cursor: pointer;
  background-color: transparent;
  border: none;
}

.btn-span {
  color: #555;
  font-size: 12px;
}

.btn-comment {
  font-size: 12px;
  border: none;
  background-color: rgb(217, 158, 158);
  border-radius: 10px;
  padding: 5px 10px;
  color: white;
}

/* Add Pop-up */
.hide {
  display: none;
}

.blur-bg {
  display: none;
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(193, 199, 208, 0.1);
  backdrop-filter: blur(4px);
  overflow-y: auto;
  overflow-x: hidden;
  top: 0;
  box-sizing: border-box;
}

.pop-up {
  background: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-color: white;
  margin: 0 auto;
  max-width: 920px;
  width: 50vw;
  height: 90%;
  border-radius: 8px;
  margin-top: 4.5vw;
  overflow-y: auto;
  overflow-x: hidden;
}

.pop-up::-webkit-scrollbar {
  width: 16px;
  height: 16px;
}

.pop-up::-webkit-scrollbar-thumb {
  background: rgb(166, 129, 80);
  border: 1px solid rgb(255, 255, 255);
  box-shadow: 1px 1px 1px rgb(0, 0, 0);
  border-radius: 8px 0;
}

.pop-up::-webkit-scrollbar-track {
  background: linear-gradient(90deg, #4f4848, #77848e, #414843, #9f9f9c);
  border-radius: 8px 0;
}

.pop-up-heading {
  display: flex;
  justify-content: center;
  align-content: center;
  max-width: 589px;
  max-height: 120px;
  color: white;
  width: 100%;
  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-size: 2vw;
  line-height: 3.5vw;
  text-shadow: 1px 1px 1px black;
}

.img-container {
  display: flex;
  justify-content: flex-end;
  position: relative;
  width: 100%;
  margin-top: 30px;
  left: -20px;
}

.img-container .close-pop-up {
  align-content: end;
  position: absolute;
  z-index: 2;
  width: 20px;
  height: 20px;
  border-radius: 4px;
  padding: 10px;
  box-shadow: 1px 2px 4px white;
}

.img-pop-up {
  border-radius: 8px;
  max-width: 920px;
  width: 45vw;
  height: 42vw;
  box-shadow: 1px 2px 4px black;
  z-index: 1;
}

.comments-container {
  margin-left: 10px;
  height: 300px;
  font-size: 2vw;
  font-family: "Inter", sans-serif;
  color: #fff;
  text-shadow: 1px 1px 1px black;
}

.comments-container h4 {
  border-bottom: 3px solid white;
  width: 98%;
}

.comments-container ul {
  margin: 15px;
  padding: 0;
}

.comments-container li {
  text-decoration: none;
  font-size: 1.8vw;
  list-style-type: none;
}

.input-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 20px;
  width: 100%;
  gap: 1vw;
  font-size: 2vw;
  margin-right: 0.7vw;
  font-family: sans-serif;
  color: white;
  text-shadow: 1px 1px 1px black;
}

.input-container h2 {
  margin: 0;
}

.underline {
  width: 50px;
  height: 3.5px;
  background: rgb(255, 255, 255);
  box-shadow: 1px 1px 1px black;
  margin: 5px;
}

.input-container input {
  width: 80%;
  height: 5vh;
}

.input-container textarea {
  width: 80%;
  height: 15vh;
}

.submit-btn-container {
  display: flex;
  justify-content: end;
  position: relative;
  width: 100%;
  left: -52px;
}

.submit-btn-container button {
  width: 80px;
  height: 30px;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  background: aliceblue;\r\n  text-align: center;\r\n}\r\n\r\n/* Navigation bar styles */\r\n.navbar {\r\n  display: flex;\r\n  background: url(assets/logo.png);\r\n  background-size: 50px 50px;\r\n  background-position-x: 40px;\r\n  background-position-y: 1px;\r\n  background-repeat: no-repeat;\r\n  font-family: \"Roboto\", sans-serif;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  background-color: aliceblue;\r\n  opacity: 0.6;\r\n  color: rgb(0, 0, 0);\r\n  padding: 13px 20px;\r\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);\r\n  position: fixed;\r\n  width: 100%;\r\n  z-index: 1000;\r\n}\r\n\r\n.navbar-brand {\r\n  font-family: \"Roboto\", sans-serif;\r\n  position: relative;\r\n  font-size: 24px;\r\n  font-weight: bold;\r\n  left: 80px;\r\n  text-shadow: 1px 1px 1px rgb(255, 255, 255);\r\n}\r\n\r\n.navbar-links {\r\n  display: flex;\r\n  position: relative;\r\n  font-family: \"Roboto\", sans-serif;\r\n  list-style: none;\r\n  gap: 5vw;\r\n  left: -50px;\r\n  text-shadow: 1px 1px 1px rgb(255, 255, 255);\r\n}\r\n\r\n.navbar-links li {\r\n  position: relative;\r\n}\r\n\r\n.navbar-links a {\r\n  color: black;\r\n  text-decoration: none;\r\n  padding: 10px;\r\n  transition: color 0.3s;\r\n}\r\n\r\n.navbar-links a:hover {\r\n  color: rgb(0, 0, 0);\r\n  text-shadow: 1px 1px 1px rgb(255, 255, 255);\r\n}\r\n\r\n/* Unique navigation effect */\r\n.navbar-links li::before {\r\n  content: \"\";\r\n  position: absolute;\r\n  width: 0%;\r\n  height: 2px;\r\n  background-color: #000;\r\n  box-shadow: 1px 1px 1px white;\r\n  bottom: -5px;\r\n  left: 50%;\r\n  transform: translateX(-50%);\r\n  transition: width 0.3s;\r\n}\r\n\r\n.navbar-links li:hover::before {\r\n  width: 100%;\r\n}\r\n\r\nfooter {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  font-size: 24pt;\r\n  padding-left: 20px;\r\n  align-items: center;\r\n  background: rgb(159, 207, 223);\r\n  opacity: 0.6;\r\n  color: black;\r\n  height: 50px;\r\n}\r\n\r\n.title {\r\n  font-size: 2.7rem;\r\n  font-weight: 500;\r\n  margin-bottom: 10px;\r\n  color: black;\r\n  text-shadow: 1px 1px 1px white;\r\n}\r\n\r\n.single-product {\r\n  width: 100%;\r\n  border-radius: 8px;\r\n}\r\n\r\n.name {\r\n  font-size: 1.8vw;\r\n  font-weight: 500;\r\n  padding: 0.5rem 0;\r\n}\r\n\r\n.title-underline {\r\n  background-color: rgb(144, 189, 237);\r\n  height: 0.2rem;\r\n  width: 7rem;\r\n  margin: 0 auto;\r\n  margin-top: 10px;\r\n  margin-bottom: 20px;\r\n  border-radius: 50%;\r\n}\r\n\r\n.products {\r\n  padding: 5rem 0;\r\n}\r\n\r\n.products-center {\r\n  width: 70%;\r\n  max-width: 1170px;\r\n  margin: 0 auto;\r\n}\r\n\r\n.products-container {\r\n  display: grid;\r\n  gap: 2rem;\r\n  grid-template-columns: repeat(3, 1fr);\r\n}\r\n\r\n.img {\r\n  width: 100%;\r\n  display: block;\r\n  object-fit: cover;\r\n  border-radius: 8px 8px 0 0;\r\n  box-shadow: 2px 1px 2px rgb(142, 131, 131);\r\n}\r\n\r\n.product-footer {\r\n  background-color: #f2f2f2c5;\r\n  border-radius: 0 0 8px 8px;\r\n  padding: 10px;\r\n  box-shadow: 2px 1px 2px rgb(142, 131, 131);\r\n}\r\n\r\n.btn-container {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 0 5px;\r\n}\r\n\r\n.btn-like {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  gap: 5px;\r\n  color: red;\r\n  font-size: 25px;\r\n  cursor: pointer;\r\n  background-color: transparent;\r\n  border: none;\r\n}\r\n\r\n.btn-span {\r\n  color: #555;\r\n  font-size: 12px;\r\n}\r\n\r\n.btn-comment {\r\n  font-size: 12px;\r\n  border: none;\r\n  background-color: rgb(217, 158, 158);\r\n  border-radius: 10px;\r\n  padding: 5px 10px;\r\n  color: white;\r\n}\r\n\r\n/* Add Pop-up */\r\n.hide {\r\n  display: none;\r\n}\r\n\r\n.blur-bg {\r\n  display: none;\r\n  position: fixed;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: rgba(193, 199, 208, 0.1);\r\n  backdrop-filter: blur(4px);\r\n  overflow-y: auto;\r\n  overflow-x: hidden;\r\n  top: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.pop-up {\r\n  background: url(assets/pop-bg.jpg);\r\n  background-size: 100% 100%;\r\n  background-repeat: no-repeat;\r\n  background-color: white;\r\n  margin: 0 auto;\r\n  max-width: 920px;\r\n  width: 50vw;\r\n  height: 90%;\r\n  border-radius: 8px;\r\n  margin-top: 4.5vw;\r\n  overflow-y: auto;\r\n  overflow-x: hidden;\r\n}\r\n\r\n.pop-up::-webkit-scrollbar {\r\n  width: 16px;\r\n  height: 16px;\r\n}\r\n\r\n.pop-up::-webkit-scrollbar-thumb {\r\n  background: rgb(166, 129, 80);\r\n  border: 1px solid rgb(255, 255, 255);\r\n  box-shadow: 1px 1px 1px rgb(0, 0, 0);\r\n  border-radius: 8px 0;\r\n}\r\n\r\n.pop-up::-webkit-scrollbar-track {\r\n  background: linear-gradient(90deg, #4f4848, #77848e, #414843, #9f9f9c);\r\n  border-radius: 8px 0;\r\n}\r\n\r\n.pop-up-heading {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-content: center;\r\n  max-width: 589px;\r\n  max-height: 120px;\r\n  color: white;\r\n  width: 100%;\r\n  font-family: \"Inter\", sans-serif;\r\n  font-weight: 700;\r\n  font-size: 2vw;\r\n  line-height: 3.5vw;\r\n  text-shadow: 1px 1px 1px black;\r\n}\r\n\r\n.img-container {\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  position: relative;\r\n  width: 100%;\r\n  margin-top: 30px;\r\n  left: -20px;\r\n}\r\n\r\n.img-container .close-pop-up {\r\n  align-content: end;\r\n  position: absolute;\r\n  z-index: 2;\r\n  width: 20px;\r\n  height: 20px;\r\n  border-radius: 4px;\r\n  padding: 10px;\r\n  box-shadow: 1px 2px 4px white;\r\n}\r\n\r\n.img-pop-up {\r\n  border-radius: 8px;\r\n  max-width: 920px;\r\n  width: 45vw;\r\n  height: 42vw;\r\n  box-shadow: 1px 2px 4px black;\r\n  z-index: 1;\r\n}\r\n\r\n.comments-container {\r\n  margin-left: 10px;\r\n  height: 300px;\r\n  font-size: 2vw;\r\n  font-family: \"Inter\", sans-serif;\r\n  color: #fff;\r\n  text-shadow: 1px 1px 1px black;\r\n}\r\n\r\n.comments-container h4 {\r\n  border-bottom: 3px solid white;\r\n  width: 98%;\r\n}\r\n\r\n.comments-container ul {\r\n  margin: 15px;\r\n  padding: 0;\r\n}\r\n\r\n.comments-container li {\r\n  text-decoration: none;\r\n  font-size: 1.8vw;\r\n  list-style-type: none;\r\n}\r\n\r\n.input-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  padding-bottom: 20px;\r\n  width: 100%;\r\n  gap: 1vw;\r\n  font-size: 2vw;\r\n  margin-right: 0.7vw;\r\n  font-family: sans-serif;\r\n  color: white;\r\n  text-shadow: 1px 1px 1px black;\r\n}\r\n\r\n.input-container h2 {\r\n  margin: 0;\r\n}\r\n\r\n.underline {\r\n  width: 50px;\r\n  height: 3.5px;\r\n  background: rgb(255, 255, 255);\r\n  box-shadow: 1px 1px 1px black;\r\n  margin: 5px;\r\n}\r\n\r\n.input-container input {\r\n  width: 80%;\r\n  height: 5vh;\r\n}\r\n\r\n.input-container textarea {\r\n  width: 80%;\r\n  height: 15vh;\r\n}\r\n\r\n.submit-btn-container {\r\n  display: flex;\r\n  justify-content: end;\r\n  position: relative;\r\n  width: 100%;\r\n  left: -52px;\r\n}\r\n\r\n.submit-btn-container button {\r\n  width: 80px;\r\n  height: 30px;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_fetchMeals_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/fetchMeals.js */ "./src/modules/fetchMeals.js");
/* harmony import */ var _modules_displayMeals_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/displayMeals.js */ "./src/modules/displayMeals.js");
/* harmony import */ var _modules_commentPopup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/commentPopup */ "./src/modules/commentPopup.js");





const start = async () => {
  const data = await (0,_modules_fetchMeals_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,_modules_displayMeals_js__WEBPACK_IMPORTED_MODULE_2__["default"])(data);
};

document.addEventListener('DOMContentLoaded', () => {
  start();
  JSON.parse(localStorage.getItem('likes'));
});

document.addEventListener('click', () => {
  (0,_modules_commentPopup__WEBPACK_IMPORTED_MODULE_3__["default"])();
});

/***/ }),

/***/ "./src/modules/commentPopup.js":
/*!*************************************!*\
  !*** ./src/modules/commentPopup.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cancel: () => (/* binding */ cancel),
/* harmony export */   "default": () => (/* binding */ show)
/* harmony export */ });
const allProducts = document.querySelectorAll('.btn-comment');
const popUp = document.querySelector('.blur-bg');
const popUpImg = popUp.querySelector('.img-pop-up');
const popUpHeading = popUp.querySelector('.pop-up-heading');

function show() {
  document.addEventListener('click', (event) => {
    const clickedElement = event.target;
    if (clickedElement.className === 'btn-comment') {
      const parentElement = clickedElement.closest('section');
      const img = parentElement.children[0].getAttribute('src');
      const title = parentElement.children[1].getElementsByTagName('h5')[0].innerText;
      popUpImg.setAttribute('src', img);
      popUpHeading.innerHTML = `<h2>${title}</h2>`;
      popUp.style.display = 'block';
    }
  });
}

function cancel() {
  document.addEventListener('click', (event) => {
    const clickedElement = event.target;
    if (clickedElement.className === 'close-pop-up') {
      
    }
  })
}

/***/ }),

/***/ "./src/modules/displayMeals.js":
/*!*************************************!*\
  !*** ./src/modules/displayMeals.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const productsDOM = document.querySelector('.products-center');

// display function
const displayMeals = (list) => {
  const productList = list.meals
    .map((item) => {
      // console.log(idMeal);
      const { strMeal: title } = item;
      const { strMealThumb: img } = item;

      return ` <section class="single-product">
      <img
        src="${img}"
        alt="${title}"
        class="single-product-img img"
      />
      <div class="product-footer">
        <h5 class="name">${title}</h5>
        <div class="btn-container">
        <button class="btn-like" type="button" >&#10084 <span class="btn-span">0 likes</span></button>
        <button class="btn-comment">COMMENTS</button>
        </div>
      </div>
    </section>`;
    })
    .join('');
  productsDOM.innerHTML = `<div class="products-container">
  ${productList}
  </div>`;
  const likeBtns = [...document.querySelectorAll('.btn-like')];
  likeBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const span = btn.querySelector('.btn-span');
      let count = 0;
      count += span.textContent;
      const newCount = parseInt(count, 10) + 1;
      span.textContent = `${newCount} likes`;
      localStorage.setItem('likes', JSON.stringify(newCount));
    });
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayMeals);


/***/ }),

/***/ "./src/modules/fetchMeals.js":
/*!***********************************!*\
  !*** ./src/modules/fetchMeals.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// fetch  function
const url = 'https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian';

const productsDOM = document.querySelector('.products-center');

const fetchMeals = async () => {
  productsDOM.innerHTML = 'Loading...';
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    productsDOM.innerHTML = 'Error detected';
  }
  return null;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchMeals);


/***/ }),

/***/ "./src/assets/logo.png":
/*!*****************************!*\
  !*** ./src/assets/logo.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "914a58ac15fc61bda00c.png";

/***/ }),

/***/ "./src/assets/pop-bg.jpg":
/*!*******************************!*\
  !*** ./src/assets/pop-bg.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dc44ceaf676fed11a036.jpg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLDZHQUFrQztBQUM5RSw0Q0FBNEMsaUhBQW9DO0FBQ2hGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixtQ0FBbUM7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLG1DQUFtQztBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sZ0ZBQWdGLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sWUFBWSxNQUFNLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sVUFBVSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0s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QTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2JxQjtBQUM0QjtBQUNJO0FBQ1g7O0FBRTFDO0FBQ0EscUJBQXFCLGtFQUFVO0FBQy9CLEVBQUUsb0VBQVk7QUFDZDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0EsRUFBRSxpRUFBSTtBQUNOLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ2pCRDtBQUNBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLE1BQU07QUFDNUM7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7Ozs7O0FDMUJBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLGlCQUFpQjtBQUMvQixjQUFjLG9CQUFvQjs7QUFFbEM7QUFDQTtBQUNBLGVBQWUsSUFBSTtBQUNuQixlQUFlLE1BQU07QUFDckI7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLE1BQU07QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixVQUFVO0FBQ3RDO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDs7QUFFQSxpRUFBZSxZQUFZLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQzFDNUI7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsVUFBVSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLy4vc3JjL21vZHVsZXMvY29tbWVudFBvcHVwLmpzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLy4vc3JjL21vZHVsZXMvZGlzcGxheU1lYWxzLmpzIiwid2VicGFjazovL2xlYWRlcmJvYXJkLy4vc3JjL21vZHVsZXMvZmV0Y2hNZWFscy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiYXNzZXRzL2xvZ28ucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiYXNzZXRzL3BvcC1iZy5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG5ib2R5IHtcclxuICBiYWNrZ3JvdW5kOiBhbGljZWJsdWU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4vKiBOYXZpZ2F0aW9uIGJhciBzdHlsZXMgKi9cclxuLm5hdmJhciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBiYWNrZ3JvdW5kOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiA1MHB4IDUwcHg7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiA0MHB4O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb24teTogMXB4O1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xyXG4gIG9wYWNpdHk6IDAuNjtcclxuICBjb2xvcjogcmdiKDAsIDAsIDApO1xyXG4gIHBhZGRpbmc6IDEzcHggMjBweDtcclxuICBib3gtc2hhZG93OiAwIDJweCA1cHggcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB3aWR0aDogMTAwJTtcclxuICB6LWluZGV4OiAxMDAwO1xyXG59XHJcblxyXG4ubmF2YmFyLWJyYW5kIHtcclxuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGxlZnQ6IDgwcHg7XHJcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggMXB4IHJnYigyNTUsIDI1NSwgMjU1KTtcclxufVxyXG5cclxuLm5hdmJhci1saW5rcyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBnYXA6IDV2dztcclxuICBsZWZ0OiAtNTBweDtcclxuICB0ZXh0LXNoYWRvdzogMXB4IDFweCAxcHggcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG59XHJcblxyXG4ubmF2YmFyLWxpbmtzIGxpIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5uYXZiYXItbGlua3MgYSB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIHRyYW5zaXRpb246IGNvbG9yIDAuM3M7XHJcbn1cclxuXHJcbi5uYXZiYXItbGlua3MgYTpob3ZlciB7XHJcbiAgY29sb3I6IHJnYigwLCAwLCAwKTtcclxuICB0ZXh0LXNoYWRvdzogMXB4IDFweCAxcHggcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG59XHJcblxyXG4vKiBVbmlxdWUgbmF2aWdhdGlvbiBlZmZlY3QgKi9cclxuLm5hdmJhci1saW5rcyBsaTo6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMCU7XHJcbiAgaGVpZ2h0OiAycHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcclxuICBib3gtc2hhZG93OiAxcHggMXB4IDFweCB3aGl0ZTtcclxuICBib3R0b206IC01cHg7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICB0cmFuc2l0aW9uOiB3aWR0aCAwLjNzO1xyXG59XHJcblxyXG4ubmF2YmFyLWxpbmtzIGxpOmhvdmVyOjpiZWZvcmUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5mb290ZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmb250LXNpemU6IDI0cHQ7XHJcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZDogcmdiKDE1OSwgMjA3LCAyMjMpO1xyXG4gIG9wYWNpdHk6IDAuNjtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMi43cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggMXB4IHdoaXRlO1xyXG59XHJcblxyXG4uc2luZ2xlLXByb2R1Y3Qge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxufVxyXG5cclxuLm5hbWUge1xyXG4gIGZvbnQtc2l6ZTogMS44dnc7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBwYWRkaW5nOiAwLjVyZW0gMDtcclxufVxyXG5cclxuLnRpdGxlLXVuZGVybGluZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE0NCwgMTg5LCAyMzcpO1xyXG4gIGhlaWdodDogMC4ycmVtO1xyXG4gIHdpZHRoOiA3cmVtO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbi5wcm9kdWN0cyB7XHJcbiAgcGFkZGluZzogNXJlbSAwO1xyXG59XHJcblxyXG4ucHJvZHVjdHMtY2VudGVyIHtcclxuICB3aWR0aDogNzAlO1xyXG4gIG1heC13aWR0aDogMTE3MHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4ucHJvZHVjdHMtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdhcDogMnJlbTtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xyXG59XHJcblxyXG4uaW1nIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICBib3JkZXItcmFkaXVzOiA4cHggOHB4IDAgMDtcclxuICBib3gtc2hhZG93OiAycHggMXB4IDJweCByZ2IoMTQyLCAxMzEsIDEzMSk7XHJcbn1cclxuXHJcbi5wcm9kdWN0LWZvb3RlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMmM1O1xyXG4gIGJvcmRlci1yYWRpdXM6IDAgMCA4cHggOHB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYm94LXNoYWRvdzogMnB4IDFweCAycHggcmdiKDE0MiwgMTMxLCAxMzEpO1xyXG59XHJcblxyXG4uYnRuLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAwIDVweDtcclxufVxyXG5cclxuLmJ0bi1saWtlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogNXB4O1xyXG4gIGNvbG9yOiByZWQ7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbi5idG4tc3BhbiB7XHJcbiAgY29sb3I6ICM1NTU7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4uYnRuLWNvbW1lbnQge1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxNywgMTU4LCAxNTgpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4vKiBBZGQgUG9wLXVwICovXHJcbi5oaWRlIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uYmx1ci1iZyB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTkzLCAxOTksIDIwOCwgMC4xKTtcclxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHB4KTtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICB0b3A6IDA7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuLnBvcC11cCB7XHJcbiAgYmFja2dyb3VuZDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgbWF4LXdpZHRoOiA5MjBweDtcclxuICB3aWR0aDogNTB2dztcclxuICBoZWlnaHQ6IDkwJTtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgbWFyZ2luLXRvcDogNC41dnc7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbn1cclxuXHJcbi5wb3AtdXA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICB3aWR0aDogMTZweDtcclxuICBoZWlnaHQ6IDE2cHg7XHJcbn1cclxuXHJcbi5wb3AtdXA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICBiYWNrZ3JvdW5kOiByZ2IoMTY2LCAxMjksIDgwKTtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgYm94LXNoYWRvdzogMXB4IDFweCAxcHggcmdiKDAsIDAsIDApO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweCAwO1xyXG59XHJcblxyXG4ucG9wLXVwOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjNGY0ODQ4LCAjNzc4NDhlLCAjNDE0ODQzLCAjOWY5ZjljKTtcclxuICBib3JkZXItcmFkaXVzOiA4cHggMDtcclxufVxyXG5cclxuLnBvcC11cC1oZWFkaW5nIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXgtd2lkdGg6IDU4OXB4O1xyXG4gIG1heC1oZWlnaHQ6IDEyMHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBmb250LWZhbWlseTogXCJJbnRlclwiLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgZm9udC1zaXplOiAydnc7XHJcbiAgbGluZS1oZWlnaHQ6IDMuNXZ3O1xyXG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDFweCBibGFjaztcclxufVxyXG5cclxuLmltZy1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxuICBsZWZ0OiAtMjBweDtcclxufVxyXG5cclxuLmltZy1jb250YWluZXIgLmNsb3NlLXBvcC11cCB7XHJcbiAgYWxpZ24tY29udGVudDogZW5kO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB6LWluZGV4OiAyO1xyXG4gIHdpZHRoOiAyMHB4O1xyXG4gIGhlaWdodDogMjBweDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBib3gtc2hhZG93OiAxcHggMnB4IDRweCB3aGl0ZTtcclxufVxyXG5cclxuLmltZy1wb3AtdXAge1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBtYXgtd2lkdGg6IDkyMHB4O1xyXG4gIHdpZHRoOiA0NXZ3O1xyXG4gIGhlaWdodDogNDJ2dztcclxuICBib3gtc2hhZG93OiAxcHggMnB4IDRweCBibGFjaztcclxuICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG4uY29tbWVudHMtY29udGFpbmVyIHtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxuICBoZWlnaHQ6IDMwMHB4O1xyXG4gIGZvbnQtc2l6ZTogMnZ3O1xyXG4gIGZvbnQtZmFtaWx5OiBcIkludGVyXCIsIHNhbnMtc2VyaWY7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggMXB4IGJsYWNrO1xyXG59XHJcblxyXG4uY29tbWVudHMtY29udGFpbmVyIGg0IHtcclxuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgd2hpdGU7XHJcbiAgd2lkdGg6IDk4JTtcclxufVxyXG5cclxuLmNvbW1lbnRzLWNvbnRhaW5lciB1bCB7XHJcbiAgbWFyZ2luOiAxNXB4O1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5jb21tZW50cy1jb250YWluZXIgbGkge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBmb250LXNpemU6IDEuOHZ3O1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxufVxyXG5cclxuLmlucHV0LWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZ2FwOiAxdnc7XHJcbiAgZm9udC1zaXplOiAydnc7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwLjd2dztcclxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggMXB4IGJsYWNrO1xyXG59XHJcblxyXG4uaW5wdXQtY29udGFpbmVyIGgyIHtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi51bmRlcmxpbmUge1xyXG4gIHdpZHRoOiA1MHB4O1xyXG4gIGhlaWdodDogMy41cHg7XHJcbiAgYmFja2dyb3VuZDogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gIGJveC1zaGFkb3c6IDFweCAxcHggMXB4IGJsYWNrO1xyXG4gIG1hcmdpbjogNXB4O1xyXG59XHJcblxyXG4uaW5wdXQtY29udGFpbmVyIGlucHV0IHtcclxuICB3aWR0aDogODAlO1xyXG4gIGhlaWdodDogNXZoO1xyXG59XHJcblxyXG4uaW5wdXQtY29udGFpbmVyIHRleHRhcmVhIHtcclxuICB3aWR0aDogODAlO1xyXG4gIGhlaWdodDogMTV2aDtcclxufVxyXG5cclxuLnN1Ym1pdC1idG4tY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZW5kO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBsZWZ0OiAtNTJweDtcclxufVxyXG5cclxuLnN1Ym1pdC1idG4tY29udGFpbmVyIGJ1dHRvbiB7XHJcbiAgd2lkdGg6IDgwcHg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG59XHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGtCQUFrQjtBQUNwQjs7QUFFQSwwQkFBMEI7QUFDMUI7RUFDRSxhQUFhO0VBQ2IsbURBQWdDO0VBQ2hDLDBCQUEwQjtFQUMxQiwyQkFBMkI7RUFDM0IsMEJBQTBCO0VBQzFCLDRCQUE0QjtFQUM1QixpQ0FBaUM7RUFDakMsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQiwyQkFBMkI7RUFDM0IsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsd0NBQXdDO0VBQ3hDLGVBQWU7RUFDZixXQUFXO0VBQ1gsYUFBYTtBQUNmOztBQUVBO0VBQ0UsaUNBQWlDO0VBQ2pDLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLFVBQVU7RUFDViwyQ0FBMkM7QUFDN0M7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGlDQUFpQztFQUNqQyxnQkFBZ0I7RUFDaEIsUUFBUTtFQUNSLFdBQVc7RUFDWCwyQ0FBMkM7QUFDN0M7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsMkNBQTJDO0FBQzdDOztBQUVBLDZCQUE2QjtBQUM3QjtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsNkJBQTZCO0VBQzdCLFlBQVk7RUFDWixTQUFTO0VBQ1QsMkJBQTJCO0VBQzNCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixr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O0VBQzlCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFlBQVk7RUFDWixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsV0FBVztFQUNYLFFBQVE7RUFDUixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsU0FBUztBQUNYOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsNkJBQTZCO0VBQzdCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFVBQVU7RUFDVixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBiYWNrZ3JvdW5kOiBhbGljZWJsdWU7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi8qIE5hdmlnYXRpb24gYmFyIHN0eWxlcyAqL1xcclxcbi5uYXZiYXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGJhY2tncm91bmQ6IHVybChhc3NldHMvbG9nby5wbmcpO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiA1MHB4IDUwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IDQwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IDFweDtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xcclxcbiAgb3BhY2l0eTogMC42O1xcclxcbiAgY29sb3I6IHJnYigwLCAwLCAwKTtcXHJcXG4gIHBhZGRpbmc6IDEzcHggMjBweDtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMnB4IDVweCByZ2JhKDAsIDAsIDAsIDAuNSk7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHotaW5kZXg6IDEwMDA7XFxyXFxufVxcclxcblxcclxcbi5uYXZiYXItYnJhbmQge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgZm9udC1zaXplOiAyNHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBsZWZ0OiA4MHB4O1xcclxcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggMXB4IHJnYigyNTUsIDI1NSwgMjU1KTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhci1saW5rcyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIGdhcDogNXZ3O1xcclxcbiAgbGVmdDogLTUwcHg7XFxyXFxuICB0ZXh0LXNoYWRvdzogMXB4IDFweCAxcHggcmdiKDI1NSwgMjU1LCAyNTUpO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2YmFyLWxpbmtzIGxpIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhci1saW5rcyBhIHtcXHJcXG4gIGNvbG9yOiBibGFjaztcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2YmFyLWxpbmtzIGE6aG92ZXIge1xcclxcbiAgY29sb3I6IHJnYigwLCAwLCAwKTtcXHJcXG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDFweCByZ2IoMjU1LCAyNTUsIDI1NSk7XFxyXFxufVxcclxcblxcclxcbi8qIFVuaXF1ZSBuYXZpZ2F0aW9uIGVmZmVjdCAqL1xcclxcbi5uYXZiYXItbGlua3MgbGk6OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHdpZHRoOiAwJTtcXHJcXG4gIGhlaWdodDogMnB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcXHJcXG4gIGJveC1zaGFkb3c6IDFweCAxcHggMXB4IHdoaXRlO1xcclxcbiAgYm90dG9tOiAtNXB4O1xcclxcbiAgbGVmdDogNTAlO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcclxcbiAgdHJhbnNpdGlvbjogd2lkdGggMC4zcztcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhci1saW5rcyBsaTpob3Zlcjo6YmVmb3JlIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMjRwdDtcXHJcXG4gIHBhZGRpbmctbGVmdDogMjBweDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2IoMTU5LCAyMDcsIDIyMyk7XFxyXFxuICBvcGFjaXR5OiAwLjY7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxuICBoZWlnaHQ6IDUwcHg7XFxyXFxufVxcclxcblxcclxcbi50aXRsZSB7XFxyXFxuICBmb250LXNpemU6IDIuN3JlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggMXB4IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uc2luZ2xlLXByb2R1Y3Qge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxufVxcclxcblxcclxcbi5uYW1lIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS44dnc7XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgcGFkZGluZzogMC41cmVtIDA7XFxyXFxufVxcclxcblxcclxcbi50aXRsZS11bmRlcmxpbmUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE0NCwgMTg5LCAyMzcpO1xcclxcbiAgaGVpZ2h0OiAwLjJyZW07XFxyXFxuICB3aWR0aDogN3JlbTtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxufVxcclxcblxcclxcbi5wcm9kdWN0cyB7XFxyXFxuICBwYWRkaW5nOiA1cmVtIDA7XFxyXFxufVxcclxcblxcclxcbi5wcm9kdWN0cy1jZW50ZXIge1xcclxcbiAgd2lkdGg6IDcwJTtcXHJcXG4gIG1heC13aWR0aDogMTE3MHB4O1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxufVxcclxcblxcclxcbi5wcm9kdWN0cy1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdhcDogMnJlbTtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxyXFxufVxcclxcblxcclxcbi5pbWcge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcclxcbiAgYm9yZGVyLXJhZGl1czogOHB4IDhweCAwIDA7XFxyXFxuICBib3gtc2hhZG93OiAycHggMXB4IDJweCByZ2IoMTQyLCAxMzEsIDEzMSk7XFxyXFxufVxcclxcblxcclxcbi5wcm9kdWN0LWZvb3RlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyYzU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwIDAgOHB4IDhweDtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBib3gtc2hhZG93OiAycHggMXB4IDJweCByZ2IoMTQyLCAxMzEsIDEzMSk7XFxyXFxufVxcclxcblxcclxcbi5idG4tY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMCA1cHg7XFxyXFxufVxcclxcblxcclxcbi5idG4tbGlrZSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogNXB4O1xcclxcbiAgY29sb3I6IHJlZDtcXHJcXG4gIGZvbnQtc2l6ZTogMjVweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuLXNwYW4ge1xcclxcbiAgY29sb3I6ICM1NTU7XFxyXFxuICBmb250LXNpemU6IDEycHg7XFxyXFxufVxcclxcblxcclxcbi5idG4tY29tbWVudCB7XFxyXFxuICBmb250LXNpemU6IDEycHg7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE3LCAxNTgsIDE1OCk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi8qIEFkZCBQb3AtdXAgKi9cXHJcXG4uaGlkZSB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uYmx1ci1iZyB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE5MywgMTk5LCAyMDgsIDAuMSk7XFxyXFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHB4KTtcXHJcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxyXFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxyXFxuICB0b3A6IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wLXVwIHtcXHJcXG4gIGJhY2tncm91bmQ6IHVybChhc3NldHMvcG9wLWJnLmpwZyk7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgbWF4LXdpZHRoOiA5MjBweDtcXHJcXG4gIHdpZHRoOiA1MHZ3O1xcclxcbiAgaGVpZ2h0OiA5MCU7XFxyXFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICBtYXJnaW4tdG9wOiA0LjV2dztcXHJcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxyXFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi5wb3AtdXA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXHJcXG4gIHdpZHRoOiAxNnB4O1xcclxcbiAgaGVpZ2h0OiAxNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wLXVwOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2IoMTY2LCAxMjksIDgwKTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyNTUsIDI1NSwgMjU1KTtcXHJcXG4gIGJveC1zaGFkb3c6IDFweCAxcHggMXB4IHJnYigwLCAwLCAwKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDhweCAwO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wLXVwOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxyXFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICM0ZjQ4NDgsICM3Nzg0OGUsICM0MTQ4NDMsICM5ZjlmOWMpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogOHB4IDA7XFxyXFxufVxcclxcblxcclxcbi5wb3AtdXAtaGVhZGluZyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBtYXgtd2lkdGg6IDU4OXB4O1xcclxcbiAgbWF4LWhlaWdodDogMTIwcHg7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSW50ZXJcXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gIGZvbnQtc2l6ZTogMnZ3O1xcclxcbiAgbGluZS1oZWlnaHQ6IDMuNXZ3O1xcclxcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggMXB4IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4uaW1nLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgbWFyZ2luLXRvcDogMzBweDtcXHJcXG4gIGxlZnQ6IC0yMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaW1nLWNvbnRhaW5lciAuY2xvc2UtcG9wLXVwIHtcXHJcXG4gIGFsaWduLWNvbnRlbnQ6IGVuZDtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHotaW5kZXg6IDI7XFxyXFxuICB3aWR0aDogMjBweDtcXHJcXG4gIGhlaWdodDogMjBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBib3gtc2hhZG93OiAxcHggMnB4IDRweCB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmltZy1wb3AtdXAge1xcclxcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgbWF4LXdpZHRoOiA5MjBweDtcXHJcXG4gIHdpZHRoOiA0NXZ3O1xcclxcbiAgaGVpZ2h0OiA0MnZ3O1xcclxcbiAgYm94LXNoYWRvdzogMXB4IDJweCA0cHggYmxhY2s7XFxyXFxuICB6LWluZGV4OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudHMtY29udGFpbmVyIHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcclxcbiAgaGVpZ2h0OiAzMDBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMnZ3O1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJJbnRlclxcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDFweCBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnRzLWNvbnRhaW5lciBoNCB7XFxyXFxuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgd2hpdGU7XFxyXFxuICB3aWR0aDogOTglO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudHMtY29udGFpbmVyIHVsIHtcXHJcXG4gIG1hcmdpbjogMTVweDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50cy1jb250YWluZXIgbGkge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgZm9udC1zaXplOiAxLjh2dztcXHJcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmlucHV0LWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBnYXA6IDF2dztcXHJcXG4gIGZvbnQtc2l6ZTogMnZ3O1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAwLjd2dztcXHJcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggMXB4IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXQtY29udGFpbmVyIGgyIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnVuZGVybGluZSB7XFxyXFxuICB3aWR0aDogNTBweDtcXHJcXG4gIGhlaWdodDogMy41cHg7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxyXFxuICBib3gtc2hhZG93OiAxcHggMXB4IDFweCBibGFjaztcXHJcXG4gIG1hcmdpbjogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXQtY29udGFpbmVyIGlucHV0IHtcXHJcXG4gIHdpZHRoOiA4MCU7XFxyXFxuICBoZWlnaHQ6IDV2aDtcXHJcXG59XFxyXFxuXFxyXFxuLmlucHV0LWNvbnRhaW5lciB0ZXh0YXJlYSB7XFxyXFxuICB3aWR0aDogODAlO1xcclxcbiAgaGVpZ2h0OiAxNXZoO1xcclxcbn1cXHJcXG5cXHJcXG4uc3VibWl0LWJ0bi1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZW5kO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBsZWZ0OiAtNTJweDtcXHJcXG59XFxyXFxuXFxyXFxuLnN1Ym1pdC1idG4tY29udGFpbmVyIGJ1dHRvbiB7XFxyXFxuICB3aWR0aDogODBweDtcXHJcXG4gIGhlaWdodDogMzBweDtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBmZXRjaE1lYWxzIGZyb20gJy4vbW9kdWxlcy9mZXRjaE1lYWxzLmpzJztcbmltcG9ydCBkaXNwbGF5TWVhbHMgZnJvbSAnLi9tb2R1bGVzL2Rpc3BsYXlNZWFscy5qcyc7XG5pbXBvcnQgc2hvdyBmcm9tICcuL21vZHVsZXMvY29tbWVudFBvcHVwJztcblxuY29uc3Qgc3RhcnQgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaE1lYWxzKCk7XG4gIGRpc3BsYXlNZWFscyhkYXRhKTtcbn07XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gIHN0YXJ0KCk7XG4gIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xpa2VzJykpO1xufSk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBzaG93KCk7XG59KTsiLCJjb25zdCBhbGxQcm9kdWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idG4tY29tbWVudCcpO1xuY29uc3QgcG9wVXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmx1ci1iZycpO1xuY29uc3QgcG9wVXBJbWcgPSBwb3BVcC5xdWVyeVNlbGVjdG9yKCcuaW1nLXBvcC11cCcpO1xuY29uc3QgcG9wVXBIZWFkaW5nID0gcG9wVXAucXVlcnlTZWxlY3RvcignLnBvcC11cC1oZWFkaW5nJyk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNob3coKSB7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgY2xpY2tlZEVsZW1lbnQgPSBldmVudC50YXJnZXQ7XG4gICAgaWYgKGNsaWNrZWRFbGVtZW50LmNsYXNzTmFtZSA9PT0gJ2J0bi1jb21tZW50Jykge1xuICAgICAgY29uc3QgcGFyZW50RWxlbWVudCA9IGNsaWNrZWRFbGVtZW50LmNsb3Nlc3QoJ3NlY3Rpb24nKTtcbiAgICAgIGNvbnN0IGltZyA9IHBhcmVudEVsZW1lbnQuY2hpbGRyZW5bMF0uZ2V0QXR0cmlidXRlKCdzcmMnKTtcbiAgICAgIGNvbnN0IHRpdGxlID0gcGFyZW50RWxlbWVudC5jaGlsZHJlblsxXS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaDUnKVswXS5pbm5lclRleHQ7XG4gICAgICBwb3BVcEltZy5zZXRBdHRyaWJ1dGUoJ3NyYycsIGltZyk7XG4gICAgICBwb3BVcEhlYWRpbmcuaW5uZXJIVE1MID0gYDxoMj4ke3RpdGxlfTwvaDI+YDtcbiAgICAgIHBvcFVwLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYW5jZWwoKSB7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgY2xpY2tlZEVsZW1lbnQgPSBldmVudC50YXJnZXQ7XG4gICAgaWYgKGNsaWNrZWRFbGVtZW50LmNsYXNzTmFtZSA9PT0gJ2Nsb3NlLXBvcC11cCcpIHtcbiAgICAgIFxuICAgIH1cbiAgfSlcbn0iLCJjb25zdCBwcm9kdWN0c0RPTSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWN0cy1jZW50ZXInKTtcblxuLy8gZGlzcGxheSBmdW5jdGlvblxuY29uc3QgZGlzcGxheU1lYWxzID0gKGxpc3QpID0+IHtcbiAgY29uc3QgcHJvZHVjdExpc3QgPSBsaXN0Lm1lYWxzXG4gICAgLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgLy8gY29uc29sZS5sb2coaWRNZWFsKTtcbiAgICAgIGNvbnN0IHsgc3RyTWVhbDogdGl0bGUgfSA9IGl0ZW07XG4gICAgICBjb25zdCB7IHN0ck1lYWxUaHVtYjogaW1nIH0gPSBpdGVtO1xuXG4gICAgICByZXR1cm4gYCA8c2VjdGlvbiBjbGFzcz1cInNpbmdsZS1wcm9kdWN0XCI+XG4gICAgICA8aW1nXG4gICAgICAgIHNyYz1cIiR7aW1nfVwiXG4gICAgICAgIGFsdD1cIiR7dGl0bGV9XCJcbiAgICAgICAgY2xhc3M9XCJzaW5nbGUtcHJvZHVjdC1pbWcgaW1nXCJcbiAgICAgIC8+XG4gICAgICA8ZGl2IGNsYXNzPVwicHJvZHVjdC1mb290ZXJcIj5cbiAgICAgICAgPGg1IGNsYXNzPVwibmFtZVwiPiR7dGl0bGV9PC9oNT5cbiAgICAgICAgPGRpdiBjbGFzcz1cImJ0bi1jb250YWluZXJcIj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0bi1saWtlXCIgdHlwZT1cImJ1dHRvblwiID4mIzEwMDg0IDxzcGFuIGNsYXNzPVwiYnRuLXNwYW5cIj4wIGxpa2VzPC9zcGFuPjwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuLWNvbW1lbnRcIj5DT01NRU5UUzwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5gO1xuICAgIH0pXG4gICAgLmpvaW4oJycpO1xuICBwcm9kdWN0c0RPTS5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz1cInByb2R1Y3RzLWNvbnRhaW5lclwiPlxuICAke3Byb2R1Y3RMaXN0fVxuICA8L2Rpdj5gO1xuICBjb25zdCBsaWtlQnRucyA9IFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnRuLWxpa2UnKV07XG4gIGxpa2VCdG5zLmZvckVhY2goKGJ0bikgPT4ge1xuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNvbnN0IHNwYW4gPSBidG4ucXVlcnlTZWxlY3RvcignLmJ0bi1zcGFuJyk7XG4gICAgICBsZXQgY291bnQgPSAwO1xuICAgICAgY291bnQgKz0gc3Bhbi50ZXh0Q29udGVudDtcbiAgICAgIGNvbnN0IG5ld0NvdW50ID0gcGFyc2VJbnQoY291bnQsIDEwKSArIDE7XG4gICAgICBzcGFuLnRleHRDb250ZW50ID0gYCR7bmV3Q291bnR9IGxpa2VzYDtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsaWtlcycsIEpTT04uc3RyaW5naWZ5KG5ld0NvdW50KSk7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZGlzcGxheU1lYWxzO1xuIiwiLy8gZmV0Y2ggIGZ1bmN0aW9uXG5jb25zdCB1cmwgPSAnaHR0cHM6Ly93d3cudGhlbWVhbGRiLmNvbS9hcGkvanNvbi92MS8xL2ZpbHRlci5waHA/YT1DYW5hZGlhbic7XG5cbmNvbnN0IHByb2R1Y3RzRE9NID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2R1Y3RzLWNlbnRlcicpO1xuXG5jb25zdCBmZXRjaE1lYWxzID0gYXN5bmMgKCkgPT4ge1xuICBwcm9kdWN0c0RPTS5pbm5lckhUTUwgPSAnTG9hZGluZy4uLic7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcHJvZHVjdHNET00uaW5uZXJIVE1MID0gJ0Vycm9yIGRldGVjdGVkJztcbiAgfVxuICByZXR1cm4gbnVsbDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZldGNoTWVhbHM7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=