/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 786);
/******/ })
/************************************************************************/
/******/ ({

/***/ 36:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
* クリップボードコピー関数
* 入力値をクリップボードへコピーする
* [引数]   textVal: 入力値
* [返却値] true: 成功　false: 失敗
*/

exports.copyTextToClipboard = function (textVal) {
    var copyFrom = document.createElement("textarea");
    copyFrom.textContent = textVal;

    var bodyElm = document.getElementsByTagName("body")[0];
    bodyElm.appendChild(copyFrom);

    copyFrom.select();
    var retVal = document.execCommand('copy');
    bodyElm.removeChild(copyFrom);

    return retVal;
};

exports.isInformativePage = function (url) {
    console.log(url);
    if (url.match(/chrome:\/\/extensions\/.*/)) {
        // chrome extensionのページはコピーしない。
        return false;
    }
    if (url.match(/.*google.*search?.*/)) {
        // google searchの結果ページはコピーしない。
        return false;
    }
    return true;
};

/***/ }),

/***/ 786:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(36);


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYzBkNjdjNzdlMmQxYWQ0N2NhZGMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NjcmlwdHMvdXRpbC5qcyJdLCJuYW1lcyI6WyJleHBvcnRzIiwiY29weVRleHRUb0NsaXBib2FyZCIsInRleHRWYWwiLCJjb3B5RnJvbSIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInRleHRDb250ZW50IiwiYm9keUVsbSIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiYXBwZW5kQ2hpbGQiLCJzZWxlY3QiLCJyZXRWYWwiLCJleGVjQ29tbWFuZCIsInJlbW92ZUNoaWxkIiwiaXNJbmZvcm1hdGl2ZVBhZ2UiLCJ1cmwiLCJjb25zb2xlIiwibG9nIiwibWF0Y2giXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7QUM3REE7Ozs7Ozs7QUFRQUEsUUFBUUMsbUJBQVIsR0FBOEIsVUFBU0MsT0FBVCxFQUFpQjtBQUMzQyxRQUFNQyxXQUFXQyxTQUFTQyxhQUFULENBQXVCLFVBQXZCLENBQWpCO0FBQ0FGLGFBQVNHLFdBQVQsR0FBdUJKLE9BQXZCOztBQUVBLFFBQU1LLFVBQVVILFNBQVNJLG9CQUFULENBQThCLE1BQTlCLEVBQXNDLENBQXRDLENBQWhCO0FBQ0FELFlBQVFFLFdBQVIsQ0FBb0JOLFFBQXBCOztBQUVBQSxhQUFTTyxNQUFUO0FBQ0EsUUFBTUMsU0FBU1AsU0FBU1EsV0FBVCxDQUFxQixNQUFyQixDQUFmO0FBQ0FMLFlBQVFNLFdBQVIsQ0FBb0JWLFFBQXBCOztBQUVBLFdBQU9RLE1BQVA7QUFDSCxDQVpEOztBQWNBWCxRQUFRYyxpQkFBUixHQUE0QixVQUFTQyxHQUFULEVBQWE7QUFDckNDLFlBQVFDLEdBQVIsQ0FBWUYsR0FBWjtBQUNBLFFBQUdBLElBQUlHLEtBQUosQ0FBVSwyQkFBVixDQUFILEVBQTBDO0FBQUk7QUFDMUMsZUFBTyxLQUFQO0FBQ0g7QUFDRCxRQUFHSCxJQUFJRyxLQUFKLENBQVUscUJBQVYsQ0FBSCxFQUFvQztBQUFJO0FBQ3BDLGVBQU8sS0FBUDtBQUNIO0FBQ0QsV0FBTyxJQUFQO0FBQ0gsQ0FURCxDIiwiZmlsZSI6InV0aWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA3ODYpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGMwZDY3Yzc3ZTJkMWFkNDdjYWRjIiwiLyoqXG4qIOOCr+ODquODg+ODl+ODnOODvOODieOCs+ODlOODvOmWouaVsFxuKiDlhaXlipvlgKTjgpLjgq/jg6rjg4Pjg5fjg5zjg7zjg4njgbjjgrPjg5Tjg7zjgZnjgotcbiogW+W8leaVsF0gICB0ZXh0VmFsOiDlhaXlipvlgKRcbiogW+i/lOWNtOWApF0gdHJ1ZTog5oiQ5Yqf44CAZmFsc2U6IOWkseaVl1xuKi9cblxuXG5leHBvcnRzLmNvcHlUZXh0VG9DbGlwYm9hcmQgPSBmdW5jdGlvbih0ZXh0VmFsKXtcbiAgICBjb25zdCBjb3B5RnJvbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbiAgICBjb3B5RnJvbS50ZXh0Q29udGVudCA9IHRleHRWYWw7XG5cbiAgICBjb25zdCBib2R5RWxtID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJib2R5XCIpWzBdO1xuICAgIGJvZHlFbG0uYXBwZW5kQ2hpbGQoY29weUZyb20pO1xuXG4gICAgY29weUZyb20uc2VsZWN0KCk7XG4gICAgY29uc3QgcmV0VmFsID0gZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2NvcHknKTtcbiAgICBib2R5RWxtLnJlbW92ZUNoaWxkKGNvcHlGcm9tKTtcblxuICAgIHJldHVybiByZXRWYWw7XG59XG5cbmV4cG9ydHMuaXNJbmZvcm1hdGl2ZVBhZ2UgPSBmdW5jdGlvbih1cmwpe1xuICAgIGNvbnNvbGUubG9nKHVybCk7XG4gICAgaWYodXJsLm1hdGNoKC9jaHJvbWU6XFwvXFwvZXh0ZW5zaW9uc1xcLy4qLykpeyAgIC8vIGNocm9tZSBleHRlbnNpb27jga7jg5rjg7zjgrjjga/jgrPjg5Tjg7zjgZfjgarjgYTjgIJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZih1cmwubWF0Y2goLy4qZ29vZ2xlLipzZWFyY2g/LiovKSl7ICAgLy8gZ29vZ2xlIHNlYXJjaOOBrue1kOaenOODmuODvOOCuOOBr+OCs+ODlOODvOOBl+OBquOBhOOAglxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL3NjcmlwdHMvdXRpbC5qcyJdLCJzb3VyY2VSb290IjoiIn0=