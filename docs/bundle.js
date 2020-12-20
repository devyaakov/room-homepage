/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/images/desktop-image-hero-1.jpg":
/*!*********************************************!*\
  !*** ./src/images/desktop-image-hero-1.jpg ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/91901d0d47ea68db9434c301b247afd2.jpg");

/***/ }),

/***/ "./src/images/desktop-image-hero-2.jpg":
/*!*********************************************!*\
  !*** ./src/images/desktop-image-hero-2.jpg ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/9d35405672f4fca67945c4340723f583.jpg");

/***/ }),

/***/ "./src/images/desktop-image-hero-3.jpg":
/*!*********************************************!*\
  !*** ./src/images/desktop-image-hero-3.jpg ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/05fd679aa0d31e01c1762339eb657ce2.jpg");

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _images_desktop_image_hero_1_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/desktop-image-hero-1.jpg */ "./src/images/desktop-image-hero-1.jpg");
/* harmony import */ var _images_desktop_image_hero_2_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/desktop-image-hero-2.jpg */ "./src/images/desktop-image-hero-2.jpg");
/* harmony import */ var _images_desktop_image_hero_3_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/desktop-image-hero-3.jpg */ "./src/images/desktop-image-hero-3.jpg");







(function () {
    let slideActive = 1;
    let num = 0;

    function preview(){
        let current = document.querySelector(`#slide${slideActive}`);
        
        if((slideActive === 1)){
            slideActive=num;
            current.style.display = 'none';
            document.getElementById(`slide${num}`).style.display = '';
            return
        }

        slideActive--;
        let next = document.getElementById(`slide${slideActive}`);
        next.style.display = "";

        current.addEventListener('animationend', ()=>{
            current.style.display='none';
            current.classList.remove("anima-right");
            next.classList.remove("anima-right");
        }, { once: true});

        current.classList.add("anima-right");
        next.classList.add("anima-right");
    }

    function next(){
        let current = document.querySelector(`#slide${slideActive}`);

        if((slideActive === num)){
            slideActive=1;
            current.style.display = "none";
            document.querySelector(".slides .slide").style.display = '';
            return;
        }
        
        slideActive++;
        
        let next = document.getElementById(`slide${slideActive}`);
        next.style.display = "";

        current.addEventListener('animationend', ()=>{
            current.style.display='none';
            current.classList.remove("anima-left");
            next.classList.remove("anima-left");
        }, {once: true});
       
        current.classList.add("anima-left");
        next.classList.add("anima-left");
    }

    function initialize() {

        document.querySelector('.menu-icon').addEventListener('click', ()=>{
            document.querySelector('.menu').classList.toggle('show-menu-option');
            document.querySelector('.background-black').style.display = 'block';
        });

        document.querySelector('.menu-option-icon').addEventListener('click', ()=>{
            document.querySelector('.menu').classList.remove('show-menu-option');
            document.querySelector('.background-black').style.display = 'none';
        });
        // Cargamos las imagens en los div's del slide
        let image1 = document.getElementById("img1")
        image1.src = _images_desktop_image_hero_1_jpg__WEBPACK_IMPORTED_MODULE_1__.default

        let image2 = document.getElementById("img2")
        image2.src = _images_desktop_image_hero_2_jpg__WEBPACK_IMPORTED_MODULE_2__.default

        let image3 = document.getElementById("img3")
        image3.src = _images_desktop_image_hero_3_jpg__WEBPACK_IMPORTED_MODULE_3__.default

        // Obtenemos todos los slides
        let slides = document.querySelectorAll(".slides .slide");
        num = slides.length;

        // Asignamos un ID a cada slide, y ocultandolos por default, excepto el primero
        slides.forEach((value, index)=>{
            value.id = `slide${(index+1)}`;
            if(index > 0)
                value.style.display = 'none';
        });

        // Buscamos todos los botone de preview y next
        let lsNext = document.querySelectorAll('.slide-next');
        let lsPreview = document.querySelectorAll('.slide-preview');

        // Por cada boton next le asignamos el evento click
        lsNext.forEach(n => {
            n.addEventListener('click', () => {
                next();
            });
        });

        // Por cada boton preview le asignamos el evento click
        lsPreview.forEach(n => {
            n.addEventListener('click', () => {
                preview();
            });
        });
    }
    initialize();
})();

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yb29tLWhvbWVwYWdlLW1hc3Rlci8uL3NyYy9pbWFnZXMvZGVza3RvcC1pbWFnZS1oZXJvLTEuanBnIiwid2VicGFjazovL3Jvb20taG9tZXBhZ2UtbWFzdGVyLy4vc3JjL2ltYWdlcy9kZXNrdG9wLWltYWdlLWhlcm8tMi5qcGciLCJ3ZWJwYWNrOi8vcm9vbS1ob21lcGFnZS1tYXN0ZXIvLi9zcmMvaW1hZ2VzL2Rlc2t0b3AtaW1hZ2UtaGVyby0zLmpwZyIsIndlYnBhY2s6Ly9yb29tLWhvbWVwYWdlLW1hc3Rlci8uL3NyYy9zdHlsZS5zY3NzPzQ5NzAiLCJ3ZWJwYWNrOi8vcm9vbS1ob21lcGFnZS1tYXN0ZXIvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcm9vbS1ob21lcGFnZS1tYXN0ZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcm9vbS1ob21lcGFnZS1tYXN0ZXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jvb20taG9tZXBhZ2UtbWFzdGVyL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcm9vbS1ob21lcGFnZS1tYXN0ZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yb29tLWhvbWVwYWdlLW1hc3Rlci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jvb20taG9tZXBhZ2UtbWFzdGVyL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jvb20taG9tZXBhZ2UtbWFzdGVyL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLGlFQUFlLHFCQUF1QixnREFBZ0QsRTs7Ozs7Ozs7Ozs7Ozs7QUNBdEYsaUVBQWUscUJBQXVCLGdEQUFnRCxFOzs7Ozs7Ozs7Ozs7OztBQ0F0RixpRUFBZSxxQkFBdUIsZ0RBQWdELEU7Ozs7Ozs7Ozs7O0FDQXRGOzs7Ozs7Ozs7Ozs7Ozs7O0FDQXFCOztBQUUrQjtBQUNBO0FBQ0E7OztBQUdwRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzREFBc0QsWUFBWTs7QUFFbEU7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLElBQUk7QUFDaEQ7QUFDQTs7QUFFQTtBQUNBLG1EQUFtRCxZQUFZO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxHQUFHLFlBQVk7O0FBRXhCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNEQUFzRCxZQUFZOztBQUVsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsbURBQW1ELFlBQVk7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLEdBQUcsV0FBVzs7QUFFdkI7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxxQkFBcUIscUVBQUk7O0FBRXpCO0FBQ0EscUJBQXFCLHFFQUFJOztBQUV6QjtBQUNBLHFCQUFxQixxRUFBSTs7QUFFekI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwrQkFBK0IsVUFBVTtBQUN6QztBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBLENBQUMsSTs7Ozs7O1VDL0dEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3JCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxFQUFFO1dBQ0Y7V0FDQTtXQUNBLENBQUMsSTs7Ozs7V0NQRCxzRjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxrQzs7OztVQ2ZBO1VBQ0E7VUFDQTtVQUNBIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvOTE5MDFkMGQ0N2VhNjhkYjk0MzRjMzAxYjI0N2FmZDIuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy85ZDM1NDA1NjcyZjRmY2E2Nzk0NWM0MzQwNzIzZjU4My5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzLzA1ZmQ2NzlhYTBkMzFlMDFjMTc2MjMzOWViNjU3Y2UyLmpwZ1wiOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCAnLi9zdHlsZS5zY3NzJ1xyXG5cclxuaW1wb3J0IGltZzEgZnJvbSAnLi9pbWFnZXMvZGVza3RvcC1pbWFnZS1oZXJvLTEuanBnJ1xyXG5pbXBvcnQgaW1nMiBmcm9tICcuL2ltYWdlcy9kZXNrdG9wLWltYWdlLWhlcm8tMi5qcGcnXHJcbmltcG9ydCBpbWczIGZyb20gJy4vaW1hZ2VzL2Rlc2t0b3AtaW1hZ2UtaGVyby0zLmpwZydcclxuXHJcblxyXG4oZnVuY3Rpb24gKCkge1xyXG4gICAgbGV0IHNsaWRlQWN0aXZlID0gMTtcclxuICAgIGxldCBudW0gPSAwO1xyXG5cclxuICAgIGZ1bmN0aW9uIHByZXZpZXcoKXtcclxuICAgICAgICBsZXQgY3VycmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNzbGlkZSR7c2xpZGVBY3RpdmV9YCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYoKHNsaWRlQWN0aXZlID09PSAxKSl7XHJcbiAgICAgICAgICAgIHNsaWRlQWN0aXZlPW51bTtcclxuICAgICAgICAgICAgY3VycmVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgc2xpZGUke251bX1gKS5zdHlsZS5kaXNwbGF5ID0gJyc7XHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2xpZGVBY3RpdmUtLTtcclxuICAgICAgICBsZXQgbmV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBzbGlkZSR7c2xpZGVBY3RpdmV9YCk7XHJcbiAgICAgICAgbmV4dC5zdHlsZS5kaXNwbGF5ID0gXCJcIjtcclxuXHJcbiAgICAgICAgY3VycmVudC5hZGRFdmVudExpc3RlbmVyKCdhbmltYXRpb25lbmQnLCAoKT0+e1xyXG4gICAgICAgICAgICBjdXJyZW50LnN0eWxlLmRpc3BsYXk9J25vbmUnO1xyXG4gICAgICAgICAgICBjdXJyZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJhbmltYS1yaWdodFwiKTtcclxuICAgICAgICAgICAgbmV4dC5jbGFzc0xpc3QucmVtb3ZlKFwiYW5pbWEtcmlnaHRcIik7XHJcbiAgICAgICAgfSwgeyBvbmNlOiB0cnVlfSk7XHJcblxyXG4gICAgICAgIGN1cnJlbnQuY2xhc3NMaXN0LmFkZChcImFuaW1hLXJpZ2h0XCIpO1xyXG4gICAgICAgIG5leHQuY2xhc3NMaXN0LmFkZChcImFuaW1hLXJpZ2h0XCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG5leHQoKXtcclxuICAgICAgICBsZXQgY3VycmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNzbGlkZSR7c2xpZGVBY3RpdmV9YCk7XHJcblxyXG4gICAgICAgIGlmKChzbGlkZUFjdGl2ZSA9PT0gbnVtKSl7XHJcbiAgICAgICAgICAgIHNsaWRlQWN0aXZlPTE7XHJcbiAgICAgICAgICAgIGN1cnJlbnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNsaWRlcyAuc2xpZGVcIikuc3R5bGUuZGlzcGxheSA9ICcnO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHNsaWRlQWN0aXZlKys7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IG5leHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgc2xpZGUke3NsaWRlQWN0aXZlfWApO1xyXG4gICAgICAgIG5leHQuc3R5bGUuZGlzcGxheSA9IFwiXCI7XHJcblxyXG4gICAgICAgIGN1cnJlbnQuYWRkRXZlbnRMaXN0ZW5lcignYW5pbWF0aW9uZW5kJywgKCk9PntcclxuICAgICAgICAgICAgY3VycmVudC5zdHlsZS5kaXNwbGF5PSdub25lJztcclxuICAgICAgICAgICAgY3VycmVudC5jbGFzc0xpc3QucmVtb3ZlKFwiYW5pbWEtbGVmdFwiKTtcclxuICAgICAgICAgICAgbmV4dC5jbGFzc0xpc3QucmVtb3ZlKFwiYW5pbWEtbGVmdFwiKTtcclxuICAgICAgICB9LCB7b25jZTogdHJ1ZX0pO1xyXG4gICAgICAgXHJcbiAgICAgICAgY3VycmVudC5jbGFzc0xpc3QuYWRkKFwiYW5pbWEtbGVmdFwiKTtcclxuICAgICAgICBuZXh0LmNsYXNzTGlzdC5hZGQoXCJhbmltYS1sZWZ0XCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGluaXRpYWxpemUoKSB7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LWljb24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51JykuY2xhc3NMaXN0LnRvZ2dsZSgnc2hvdy1tZW51LW9wdGlvbicpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmFja2dyb3VuZC1ibGFjaycpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS1vcHRpb24taWNvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUnKS5jbGFzc0xpc3QucmVtb3ZlKCdzaG93LW1lbnUtb3B0aW9uJyk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iYWNrZ3JvdW5kLWJsYWNrJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyBDYXJnYW1vcyBsYXMgaW1hZ2VucyBlbiBsb3MgZGl2J3MgZGVsIHNsaWRlXHJcbiAgICAgICAgbGV0IGltYWdlMSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW1nMVwiKVxyXG4gICAgICAgIGltYWdlMS5zcmMgPSBpbWcxXHJcblxyXG4gICAgICAgIGxldCBpbWFnZTIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImltZzJcIilcclxuICAgICAgICBpbWFnZTIuc3JjID0gaW1nMlxyXG5cclxuICAgICAgICBsZXQgaW1hZ2UzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbWczXCIpXHJcbiAgICAgICAgaW1hZ2UzLnNyYyA9IGltZzNcclxuXHJcbiAgICAgICAgLy8gT2J0ZW5lbW9zIHRvZG9zIGxvcyBzbGlkZXNcclxuICAgICAgICBsZXQgc2xpZGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zbGlkZXMgLnNsaWRlXCIpO1xyXG4gICAgICAgIG51bSA9IHNsaWRlcy5sZW5ndGg7XHJcblxyXG4gICAgICAgIC8vIEFzaWduYW1vcyB1biBJRCBhIGNhZGEgc2xpZGUsIHkgb2N1bHRhbmRvbG9zIHBvciBkZWZhdWx0LCBleGNlcHRvIGVsIHByaW1lcm9cclxuICAgICAgICBzbGlkZXMuZm9yRWFjaCgodmFsdWUsIGluZGV4KT0+e1xyXG4gICAgICAgICAgICB2YWx1ZS5pZCA9IGBzbGlkZSR7KGluZGV4KzEpfWA7XHJcbiAgICAgICAgICAgIGlmKGluZGV4ID4gMClcclxuICAgICAgICAgICAgICAgIHZhbHVlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIEJ1c2NhbW9zIHRvZG9zIGxvcyBib3RvbmUgZGUgcHJldmlldyB5IG5leHRcclxuICAgICAgICBsZXQgbHNOZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNsaWRlLW5leHQnKTtcclxuICAgICAgICBsZXQgbHNQcmV2aWV3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNsaWRlLXByZXZpZXcnKTtcclxuXHJcbiAgICAgICAgLy8gUG9yIGNhZGEgYm90b24gbmV4dCBsZSBhc2lnbmFtb3MgZWwgZXZlbnRvIGNsaWNrXHJcbiAgICAgICAgbHNOZXh0LmZvckVhY2gobiA9PiB7XHJcbiAgICAgICAgICAgIG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBuZXh0KCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBQb3IgY2FkYSBib3RvbiBwcmV2aWV3IGxlIGFzaWduYW1vcyBlbCBldmVudG8gY2xpY2tcclxuICAgICAgICBsc1ByZXZpZXcuZm9yRWFjaChuID0+IHtcclxuICAgICAgICAgICAgbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHByZXZpZXcoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBpbml0aWFsaXplKCk7XHJcbn0pKCk7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZVxuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgdXNlZCAnZXhwb3J0cycgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxuIl0sInNvdXJjZVJvb3QiOiIifQ==