/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__dirname) {'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _server = __webpack_require__(2);

	var _reactRouter = __webpack_require__(3);

	var _routes = __webpack_require__(4);

	var _routes2 = _interopRequireDefault(_routes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// and these to match the url to routes and then render

	// server.js
	var express = __webpack_require__(39);
	// we'll use this to render our app to an html string

	var path = __webpack_require__(40);

	var app = express();
	var compression = __webpack_require__(41);
	app.use(compression());
	// serve our static stuff like index.css
	app.use(express.static(path.join(__dirname, 'public')));

	// send all requests to index.html so browserHistory in React Router works
	app.get('*', function (req, res) {
	  // match the routes to the url
	  (0, _reactRouter.match)({ routes: _routes2.default, location: req.url }, function (err, redirect, props) {
	    if (err) {
	      // there was an error somewhere during route matching
	      res.status(500).send(err.message);
	    } else if (redirect) {
	      // we haven't talked about `onEnter` hooks on routes, but before a
	      // route is entered, it can redirect. Here we handle on the server.
	      res.redirect(redirect.pathname + redirect.search);
	    } else if (props) {
	      // if we got props then we matched a route and can render
	      var appHtml = (0, _server.renderToString)(_react2.default.createElement(_reactRouter.RouterContext, props));
	      res.send(renderPage(appHtml));
	    } else {
	      // no errors, no redirect, we just didn't match anything
	      res.status(404).send('Not Found');
	    }
	  });
	});

	function renderPage(appHtml) {
	  return '\n    <!doctype html public="storage">\n    <html>\n    <meta charset=utf-8/>\n    <title>My First React Router App</title>\n    <link rel=stylesheet href=/index.css>\n    <div id=app>' + appHtml + '</div>\n    <script src="/bundle.js"></script>\n   ';
	}

	var PORT = process.env.PORT || 8080;
	app.listen(PORT, function () {
	  console.log('Production Express server running at localhost:' + PORT);
	});
	/* WEBPACK VAR INJECTION */}.call(exports, ""))

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("react-dom/server");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("react-router");

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(3);

	var _App = __webpack_require__(5);

	var _App2 = _interopRequireDefault(_App);

	var _About = __webpack_require__(14);

	var _About2 = _interopRequireDefault(_About);

	var _Repos = __webpack_require__(15);

	var _Repos2 = _interopRequireDefault(_Repos);

	var _Repo = __webpack_require__(16);

	var _Repo2 = _interopRequireDefault(_Repo);

	var _Home = __webpack_require__(17);

	var _Home2 = _interopRequireDefault(_Home);

	var _DataVis = __webpack_require__(19);

	var _DataVis2 = _interopRequireDefault(_DataVis);

	var _ChallengeApp = __webpack_require__(29);

	var _ChallengeApp2 = _interopRequireDefault(_ChallengeApp);

	var _ProjectsComponent = __webpack_require__(31);

	var _ProjectsComponent2 = _interopRequireDefault(_ProjectsComponent);

	var _ExperiencesComponent = __webpack_require__(35);

	var _ExperiencesComponent2 = _interopRequireDefault(_ExperiencesComponent);

	var _EducationComponent = __webpack_require__(37);

	var _EducationComponent2 = _interopRequireDefault(_EducationComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = _react2.default.createElement(
	  _reactRouter.Route,
	  { path: '/', component: _App2.default },
	  _react2.default.createElement(_reactRouter.IndexRoute, { component: _Home2.default }),
	  _react2.default.createElement(_reactRouter.Route, { path: '/projects', component: _ProjectsComponent2.default }),
	  _react2.default.createElement(_reactRouter.Route, { path: '/experiences', component: _ExperiencesComponent2.default }),
	  _react2.default.createElement(_reactRouter.Route, { path: '/education', component: _EducationComponent2.default }),
	  _react2.default.createElement(_reactRouter.Route, { path: '/codingChallenge', component: _ChallengeApp2.default }),
	  _react2.default.createElement(_reactRouter.Route, { path: '/dataVis', component: _DataVis2.default })
	);

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(3);

	var _NavLink = __webpack_require__(6);

	var _NavLink2 = _interopRequireDefault(_NavLink);

	var _HeaderComponent = __webpack_require__(7);

	var _HeaderComponent2 = _interopRequireDefault(_HeaderComponent);

	var _NavigationComponent = __webpack_require__(13);

	var _NavigationComponent2 = _interopRequireDefault(_NavigationComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _react2.default.createClass({
	  displayName: 'App',
	  render: function render() {
	    return _react2.default.createElement(
	      'div',
	      { className: 'app' },
	      _react2.default.createElement(_HeaderComponent2.default, null),
	      _react2.default.createElement(_NavigationComponent2.default, null),
	      this.props.children
	    )
	    /*<div>
	      <h1>React Router Tutorial</h1>
	      <ul role="nav">
	        <li><NavLink to="/" onlyActiveOnIndex={true}>Home</NavLink></li>
	        <li><NavLink to="/about">About</NavLink></li>
	        <li><NavLink to="/repos">Repos</NavLink></li>
	      </ul>
	      {this.props.children}
	    </div>*/
	    ;
	  }
	});

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _react2.default.createClass({
	  displayName: 'NavLink',
	  render: function render() {
	    return _react2.default.createElement(_reactRouter.Link, _extends({}, this.props, { activeClassName: 'active' }));
	  }
	});

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _style = __webpack_require__(8);

	var _style2 = _interopRequireDefault(_style);

	var _ProfileImageComponent = __webpack_require__(12);

	var _ProfileImageComponent2 = _interopRequireDefault(_ProfileImageComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var HeaderComponent = function (_React$Component) {
	  _inherits(HeaderComponent, _React$Component);

	  function HeaderComponent() {
	    _classCallCheck(this, HeaderComponent);

	    return _possibleConstructorReturn(this, (HeaderComponent.__proto__ || Object.getPrototypeOf(HeaderComponent)).apply(this, arguments));
	  }

	  _createClass(HeaderComponent, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'header',
	        { className: 'header' },
	        _react2.default.createElement(_ProfileImageComponent2.default, null)
	      );
	    }
	  }]);

	  return HeaderComponent;
	}(_react2.default.Component);

	exports.default = HeaderComponent;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(9);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(11)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./style.css", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./style.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(10)();
	// imports


	// module
	exports.push([module.id, ".sectionHeader {\n  background-color:grey;\n  text-align:right;\n  padding: 5px;\n  font-size: 11pt;\n}\n\n#list {\n  width:300px;\n  height:600px;\n  overflow: scroll;\n}\n\n.listItem {\n  padding: 10px;\n  border-bottom:1px solid grey;\n}\n\n.data {\n  margin:5px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.text {\n  font-size: 15pt;\n  color: green;\n}\n\n.time {\n  font-size: 12pt;\n}\n\n.app {\n  display: flex;\n  flex-flow: row wrap;\n  background-color: #ffffff;\n}\n\n.unit{\n  font-size: 10pt;\n}\n\n.circle-highlighted {\n  stroke: yellow;\n  stroke-width:7;\n}\n\n.tooltipMeasurement {\n  font-size:10pt;\n  color:orange;\n}\n\n.chartWrapper {\n  margin-left:50px;\n}\n\n.axis path,\n.axis line {\n  fill: none;\n  stroke: #000;\n  shape-rendering: crispEdges;\n}\n\n.dot {\n  stroke: #000;\n}\n\n.tooltip {\n  position: absolute;\n  width: 200px;\n  height: 28px;\n  pointer-events: none;\n}\n\n.header {\n  flex: 1 100%;\n  background-color: #363b40;\n}\n\n.imageSection {\n  flex: 1 100%;\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: center;\n  align-items: center;\n  margin:20px;\n}\n\n\n.image {\n  width: 100px;\n  height: 100px;\n  border-radius: 50%;\n}\n\n.nav {\n  flex: 1 100%;\n  display: flex;\n  flex-flow: row;\n  justify-content: center;\n  align-items: center;\n  background-color: #363b40;\n  padding: .2em 1em;\n}\n\na {\n  text-decoration: none;\n}\n\nul {\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n  list-style: none;\n}\nul li {\n  display: inline;\n}\n\nul li a {\n  padding: .2em 1em;\n  color: #fff;\n  background-color: #363b40;\n  margin: 1px;\n}\n\nul li a:hover {\n  color: #fff;\n  background-color: #848b92;\n}\n\n.mainSection {\n    display: flex;\n    flex-flow: row wrap;\n    align-items: center;\n    flex: 1 100%;\n    justify-content: center;\n}\np {\n  align-self: flex-start;\n}\n\nsection section {\n  flex: 1 100%;\n  align-self: flex-start;\n}\n\n.educationInfo {\n  flex: 1 100%;\n}\n\ndiv {\n  flex: 1 100%;\ndisplay: flex;\nflex-flow: row wrap;\nalign-items: center;\njustify-content: center;\n}\n\n.imageDiv {\n  flex: 1 100%;\n  display:flex;\n  flex-flow: row wrap;\n  align-items: center;\n  justify-content: center;\n}\n\n.name {\n  color: #ffffff;\n}\n\n.role {\n  color: #ffffff;\n}\n\n.active {\n  color: grey;\n}\n", ""]);

	// exports


/***/ },
/* 10 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _style = __webpack_require__(8);

	var _style2 = _interopRequireDefault(_style);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ProfileImageComponent = function (_React$Component) {
	  _inherits(ProfileImageComponent, _React$Component);

	  function ProfileImageComponent() {
	    _classCallCheck(this, ProfileImageComponent);

	    return _possibleConstructorReturn(this, (ProfileImageComponent.__proto__ || Object.getPrototypeOf(ProfileImageComponent)).apply(this, arguments));
	  }

	  _createClass(ProfileImageComponent, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'section',
	        { className: 'imageSection' },
	        _react2.default.createElement(
	          'div',
	          { className: 'imageDiv' },
	          _react2.default.createElement('img', { className: 'image', src: '/headshot.jpg' })
	        ),
	        _react2.default.createElement(
	          'div',
	          null,
	          ' ',
	          _react2.default.createElement(
	            'h1',
	            { className: 'name' },
	            'Alejandro Ayala-Hurtado '
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          null,
	          ' ',
	          _react2.default.createElement(
	            'h4',
	            { className: 'role' },
	            'Software Engineer '
	          )
	        )
	      );
	    }
	  }]);

	  return ProfileImageComponent;
	}(_react2.default.Component);

	exports.default = ProfileImageComponent;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(3);

	var _style = __webpack_require__(8);

	var _style2 = _interopRequireDefault(_style);

	var _NavLink = __webpack_require__(6);

	var _NavLink2 = _interopRequireDefault(_NavLink);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var NavigationComponent = _react2.default.createClass({
	  displayName: 'NavigationComponent',
	  render: function render() {
	    return _react2.default.createElement(
	      'nav',
	      { className: 'nav' },
	      _react2.default.createElement(
	        'ul',
	        null,
	        _react2.default.createElement(
	          'li',
	          null,
	          _react2.default.createElement(
	            _NavLink2.default,
	            { to: '/', onlyActiveOnIndex: true },
	            'About'
	          )
	        ),
	        _react2.default.createElement(
	          'li',
	          null,
	          _react2.default.createElement(
	            _NavLink2.default,
	            { to: '/projects' },
	            'Projects'
	          )
	        ),
	        _react2.default.createElement(
	          'li',
	          null,
	          _react2.default.createElement(
	            _NavLink2.default,
	            { to: '/experiences' },
	            'Professional Experience'
	          )
	        ),
	        _react2.default.createElement(
	          'li',
	          null,
	          _react2.default.createElement(
	            _NavLink2.default,
	            { to: '/education' },
	            'Education'
	          )
	        ),
	        _react2.default.createElement(
	          'li',
	          null,
	          _react2.default.createElement(
	            _NavLink2.default,
	            { to: '/codingChallenge' },
	            'Coding Challenge'
	          )
	        ),
	        _react2.default.createElement(
	          'li',
	          null,
	          _react2.default.createElement(
	            _NavLink2.default,
	            { to: '/dataVis' },
	            'Data Visualization'
	          )
	        )
	      )
	    );
	  }
	});

	exports.default = NavigationComponent;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _react2.default.createClass({
	  displayName: 'About',
	  render: function render() {
	    return _react2.default.createElement(
	      'div',
	      null,
	      'About'
	    );
	  }
	});

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(3);

	var _NavLink = __webpack_require__(6);

	var _NavLink2 = _interopRequireDefault(_NavLink);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// Repos.js
	exports.default = _react2.default.createClass({
	  displayName: 'Repos',

	  contextTypes: {
	    router: _react2.default.PropTypes.object
	  },
	  handleSubmit: function handleSubmit(event) {
	    event.preventDefault();
	    var userName = event.target.elements[0].value;
	    var repo = event.target.elements[1].value;
	    var path = '/repos/' + userName + '/' + repo;
	    this.context.router.push(path);
	  },
	  render: function render() {
	    return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(
	        'h2',
	        null,
	        'Repos'
	      ),
	      _react2.default.createElement(
	        'ul',
	        null,
	        _react2.default.createElement(
	          'li',
	          null,
	          _react2.default.createElement(
	            _NavLink2.default,
	            { to: '/repos/reactjs/react-router' },
	            'React Router'
	          )
	        ),
	        _react2.default.createElement(
	          'li',
	          null,
	          _react2.default.createElement(
	            _NavLink2.default,
	            { to: '/repos/facebook/react' },
	            'React'
	          )
	        ),
	        _react2.default.createElement(
	          'li',
	          null,
	          _react2.default.createElement(
	            'form',
	            { onSubmit: this.handleSubmit },
	            _react2.default.createElement('input', { type: 'text', placeholder: 'userName' }),
	            ' / ',
	            ' ',
	            _react2.default.createElement('input', { type: 'text', placeholder: 'repo' }),
	            ' ',
	            _react2.default.createElement(
	              'button',
	              { type: 'submit' },
	              'Go'
	            )
	          )
	        )
	      ),
	      this.props.children
	    );
	  }
	});

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _react2.default.createClass({
	  displayName: 'Repo',

	  propTypes: {
	    repoName: _react2.default.PropTypes.string
	  },
	  render: function render() {
	    return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(
	        'h2',
	        null,
	        this.props.params.repoName
	      )
	    );
	  }
	});

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _SummaryComponent = __webpack_require__(18);

	var _SummaryComponent2 = _interopRequireDefault(_SummaryComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _react2.default.createClass({
	  displayName: 'Home',
	  render: function render() {
	    return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(_SummaryComponent2.default, null)
	    );
	  }
	});

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _style = __webpack_require__(8);

	var _style2 = _interopRequireDefault(_style);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SummaryComponent = function (_React$Component) {
	  _inherits(SummaryComponent, _React$Component);

	  function SummaryComponent() {
	    _classCallCheck(this, SummaryComponent);

	    return _possibleConstructorReturn(this, (SummaryComponent.__proto__ || Object.getPrototypeOf(SummaryComponent)).apply(this, arguments));
	  }

	  _createClass(SummaryComponent, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'section',
	        { className: 'mainSection' },
	        _react2.default.createElement(
	          'p',
	          null,
	          'I\'m a software engineer experienced using a variety of technologies on both front end, back end and mobile development. I am passionate about applying my skills to projects that have an impact on many people. I have a B.S. in CS from Stanford.'
	        )
	      );
	    }
	  }]);

	  return SummaryComponent;
	}(_react2.default.Component);

	exports.default = SummaryComponent;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(20);

	var _DataList = __webpack_require__(21);

	var _DataList2 = _interopRequireDefault(_DataList);

	var _Chart = __webpack_require__(27);

	var _Chart2 = _interopRequireDefault(_Chart);

	var _style = __webpack_require__(8);

	var _style2 = _interopRequireDefault(_style);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var DataVis = _react2.default.createClass({
	  displayName: 'DataVis',
	  render: function render() {

	    return _react2.default.createElement(
	      'div',
	      { className: 'app' },
	      _react2.default.createElement(_DataList2.default, null),
	      _react2.default.createElement(_Chart2.default, null)
	    );
	  }
	});

	exports.default = DataVis;

/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = require("react-dom");

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _data = __webpack_require__(22);

	var _data2 = _interopRequireDefault(_data);

	var _DataItem = __webpack_require__(23);

	var _DataItem2 = _interopRequireDefault(_DataItem);

	var _SectionHeader = __webpack_require__(24);

	var _SectionHeader2 = _interopRequireDefault(_SectionHeader);

	var _moment = __webpack_require__(26);

	var _moment2 = _interopRequireDefault(_moment);

	var _style = __webpack_require__(8);

	var _style2 = _interopRequireDefault(_style);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var DataList = function (_React$Component) {
	  _inherits(DataList, _React$Component);

	  function DataList() {
	    _classCallCheck(this, DataList);

	    return _possibleConstructorReturn(this, (DataList.__proto__ || Object.getPrototypeOf(DataList)).apply(this, arguments));
	  }

	  _createClass(DataList, [{
	    key: 'render',
	    value: function render() {
	      var date = "test";
	      var readings = _data2.default.readings;
	      return _react2.default.createElement(
	        'div',
	        { id: 'list' },
	        readings.map(function (item, key) {
	          var newDate = item.timestamp.split("T").join(" ");
	          newDate = (0, _moment2.default)(newDate, "YYYYMMDD HH:mm:ss");
	          var displayDate = newDate;

	          if (newDate.isSame(date)) {
	            displayDate = undefined;
	          }

	          date = newDate;
	          return _react2.default.createElement(_DataItem2.default, { key: key, id: key, meal: item.meal, reading: item.bg_value, displayTime: displayDate, time: newDate });
	        })
	      );
	    }
	  }]);

	  return DataList;
	}(_react2.default.Component);

	exports.default = DataList;

/***/ },
/* 22 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var data = { "readings": [{ "bg_value": 150, "timestamp": "2015­04­15T11:15:34", "meal": "before_meal" }, { "bg_value": 90, "timestamp": "2015­04­16T11:15:34" }, { "bg_value": 250, "timestamp": "2015­04­17T11:15:34", "meal": "after_meal" }, { "bg_value": 350, "timestamp": "2015­04­18T11:15:34", "meal": "after_meal" }, { "bg_value": 80, "timestamp": "2015­04­18T11:15:34", "meal": "after_meal" }, { "bg_value": 300, "timestamp": "2015­04­19T11:15:34", "meal": "after_meal" }, { "bg_value": 60, "timestamp": "2015­04­19T11:15:34", "meal": "after_meal" }, { "bg_value": 250, "timestamp": "2015­04­22T11:15:34", "meal": "after_meal" }, { "bg_value": 110, "timestamp": "2015­0425T11:15:34", "meal": "after_meal" }, { "bg_value": 145, "timestamp": "2015­0427T11:15:34", "meal": "after_meal" }, { "bg_value": 225, "timestamp": "2015­04­30T11:15:34", "meal": "after_meal" }, { "bg_value": 750, "timestamp": "2015­05­01T11:15:34", "meal": "after_meal" }, { "bg_value": 125, "timestamp": "2015­0502T11:15:34", "meal": "after_meal" }, { "bg_value": 215, "timestamp": "2015­0511T11:15:34", "meal": "after_meal" }, { "bg_value": 235, "timestamp": "2015­0520T11:15:34", "meal": "after_meal" }, { "bg_value": 250, "timestamp": "2015­0521T11:15:34", "meal": "after_meal" }, { "bg_value": 290, "timestamp": "2015­0521T11:15:34", "meal": "after_meal" }, { "bg_value": 111, "timestamp": "2015­0522T11:15:34", "meal": "after_meal" }, { "bg_value": 222, "timestamp": "2015­05­23T11:15:34", "meal": "after_meal" }, { "bg_value": 345, "timestamp": "2015­05­24T11:15:34", "meal": "after_meal" }, { "bg_value": 277, "timestamp": "2015­05­25T11:15:34", "meal": "after_meal" }, { "bg_value": 123, "timestamp": "2015­0526T11:15:34", "meal": "after_meal" }, { "bg_value": 45, "timestamp": "2015­0527T11:15:34", "meal": "after_meal" }, { "bg_value": 231, "timestamp": "2015­0528T11:15:34", "meal": "after_meal" }, { "bg_value": 312, "timestamp": "2015­0529T11:15:34", "meal": "after_meal" }, { "bg_value": 12, "timestamp": "2015­0530T11:15:34", "meal": "after_meal" }, { "bg_value": 60, "timestamp": "2015­0601T11:15:34", "meal": "after_meal" }, { "bg_value": 80, "timestamp": "2015­06­02T11:15:34", "meal": "after_meal" }, { "bg_value": 57, "timestamp": "2015­06­03T11:15:34", "meal": "after_meal" }, { "bg_value": 63, "timestamp": "2015­06­04T11:15:34", "meal": "after_meal" }, { "bg_value": 43, "timestamp": "2015­0605T11:15:34", "meal": "after_meal" }, { "bg_value": 80, "timestamp": "2015­0606T11:15:34", "meal": "after_meal" }, { "bg_value": 95, "timestamp": "2015­06­07T11:15:34", "meal": "after_meal" }, { "bg_value": 241, "timestamp": "2015­0608T11:15:34", "meal": "after_meal" }, { "bg_value": 250, "timestamp": "2015­0609T11:15:34", "meal": "after_meal" }, { "bg_value": 125, "timestamp": "2015­0610T11:15:34", "meal": "after_meal" }, { "bg_value": 212, "timestamp": "2015­06­11T11:15:34", "meal": "after_meal" }, { "bg_value": 142, "timestamp": "2015­06­12T11:15:34", "meal": "after_meal" }, { "bg_value": 242, "timestamp": "2015­06­13T11:15:34", "meal": "after_meal" }, { "bg_value": 262, "timestamp": "2015­06­14T11:15:34", "meal": "after_meal" }, { "bg_value": 150, "timestamp": "2015­06­15T11:15:34", "meal": "after_meal" }, { "bg_value": 250, "timestamp": "2015­06­16T11:15:34", "meal": "after_meal" }, { "bg_value": 80, "timestamp": "2015­0702T11:15:34", "meal": "after_meal" }, { "bg_value": 57, "timestamp": "2015­07­03T11:15:34", "meal": "after_meal" }, { "bg_value": 63, "timestamp": "2015­07­04T11:15:34", "meal": "after_meal" }, { "bg_value": 43, "timestamp": "2015­0705T11:15:34", "meal": "after_meal" }, { "bg_value": 80, "timestamp": "2015­0706T11:15:34", "meal": "after_meal" }, { "bg_value": 95, "timestamp": "2015­07­07T11:15:34", "meal": "after_meal" }, { "bg_value": 241, "timestamp": "2015­0708T11:15:34", "meal": "after_meal" }, { "bg_value": 250, "timestamp": "2015­0709T11:15:34", "meal": "after_meal" }, { "bg_value": 125, "timestamp": "2015­0710T11:15:34", "meal": "after_meal" }, { "bg_value": 212, "timestamp": "2015­07­11T11:15:34", "meal": "after_meal" }, { "bg_value": 142, "timestamp": "2015­07­12T11:15:34", "meal": "after_meal" }, { "bg_value": 242, "timestamp": "2015­0713T11:15:34", "meal": "after_meal" }, { "bg_value": 262, "timestamp": "2015­07­14T11:15:34", "meal": "after_meal" }, { "bg_value": 150, "timestamp": "2015­07­15T11:15:34", "meal": "after_meal" }, { "bg_value": 250, "timestamp": "2015­0716T11:15:34", "meal": "after_meal" }] };

	var projectData = exports.projectData = { "Front End": [{ "title": "Personal Website", "link": "", "description": "Developed a web application using JavaScript, React, HTML5 and CSS3 that serves as a summary of my past projects and work experiences." }],
	  "Mobile Development": [{ "title": "Virtual Tourist", "link": "https://github.com/aayalah/VirtualTourist", "description": "Developed an iOS Application using Swift and the iOS SDK that let's a user find and store images pertaining to a particular location on a map by queriying the Flickr API." }, { "title": "OnTheMap", "link": "https://github.com/aayalah/OnTheMap", "description": "Developed an iOS Application using Swift and the iOS SDK that let's a user share their location with other users." }, { "title": "MemeMe", "link": "https://github.com/aayalah/Memev2", "description": "Developed an iOS Application using Swift and the iOS SDK that let's a user create and share a meme." }, { "title": "PitchPerfect", "link": "https://github.com/aayalah/PitchPerfect", "description": "Developed an iOS Application using Swift and the iOS SDK that let's a user record and playback audio." }, { "title": "WeVote", "link": "https://github.com/aayalah/WeVoteReactNative", "description": "Saved engineering team ~10 hours weekly in debugging front-end views through incorporating Redux into ReactJS components for predictable state management.Reduced front-end codebase by ~25% following React Native best practices and using JavaScript ES6 classes to modularize the views into reusable components.Ensured compatibility for Android and iOS devices with a single codebase with JavaScript and React Native." }], "Back End": [{ "title": "ezTemp", "link": "https://github.com/aayalah/ezTemp", "description": "Developed a server using Node.js and Java to convert html templates into React Single Page Applications and deployed it to Heroku." }], "Stanford": [{ "title": "Bees with Jetpacks!", "link": "https://github.com/aayalah/cs194", "description": "Built interface utilizing C# and Unity to execute main logic of game, ensuring team members were able to independently develop graphics and underlying data structures.Increased functionality of game for players by developing a new gameplay mode using C# and Unity engine." }, { "title": "cinemaPredict", "link": "", "description": "Implemented Naive Bayes, Principal Component Analysis, K-Means Clustering and Logistic Regression algorithms with ~60% precision utilizing MATLAB to feed Facebook profile data to determine taste in genre." }, { "title": "Object Oriented Design", "link": "", "description": "Minimized time to implement complex questions by modularizing views with JavaScript, HTML and CSS." }] };

	var experienceData = exports.experienceData = [{ "role": "Intern", "company": "Applied Energy Group", "date": "May 2016 - October 2016", "description": "Developed models in VBA and Excel to perform an energy efficiency forecast of lighting following industry best practices to reduce peak electricity usage for major utilities.Engineered Python scripts to refactor platform to move data analytics from VBA and Excel to online system.Designed mockups and prototyped UI of online energy auditing tool utilizing Justinmind for wireframing." }, { "role": "Software Engineer, Intern", "company": "Stanford University", "date": "June 2013 - June 2014", "description": "Created C++ program to extract 50+ data points from EDx and online education platform stored in SQL DB to evaluate the efficacy of Stanford’s web-based learning tools.Performed analysis with ~80% accuracy of the effects of corrosion on a reinforced concrete bridge using VBA." }, { "role": "Software Engineer, Intern", "company": "Stanford University", "date": "June 2012 - August 2012", "description": "Constructed blogging platform using JavaScript, HTML and CSS for retired professor to present life’s work." }, { "role": "Software Engineer, Intern", "company": "Global Energy Partners", "date": "July 2011 - December 2011", "description": "Enhanced project tracking web platform utilizing JavaScript, ASP.NET, HTML and CSS that enabled users to efficiently complete project milestones using SQL queries to access project information from SQL Server DB.Optimized user interfaces (UI) for Excel spreadsheets in VBA to compare solar panel system cost effectiveness."
	}];

	var educationData = exports.educationData = [{ "degree": "B.S. Computer Science", "college": "Stanford University", "date": "2010-2014" }, { "degree": "M.S. Civil and Environmental Engineering", "college": "Stanford University", "date": "2014-2015" }];

	exports.default = data;

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _SectionHeader = __webpack_require__(24);

	var _SectionHeader2 = _interopRequireDefault(_SectionHeader);

	var _d = __webpack_require__(25);

	var d3 = _interopRequireWildcard(_d);

	var _style = __webpack_require__(8);

	var _style2 = _interopRequireDefault(_style);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var DataItem = function (_React$Component) {
	  _inherits(DataItem, _React$Component);

	  function DataItem() {
	    _classCallCheck(this, DataItem);

	    return _possibleConstructorReturn(this, (DataItem.__proto__ || Object.getPrototypeOf(DataItem)).apply(this, arguments));
	  }

	  _createClass(DataItem, [{
	    key: 'onMouseOver',
	    value: function onMouseOver() {

	      d3.select("#circle" + this.props.id).classed("circle-highlighted", true);
	    }
	  }, {
	    key: 'onMouseExit',
	    value: function onMouseExit() {

	      d3.select("#circle" + this.props.id).classed("circle-highlighted", false);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var result = undefined;
	      if (this.props.displayTime) {
	        result = _react2.default.createElement(_SectionHeader2.default, { date: this.props.displayTime });
	      }
	      return _react2.default.createElement(
	        'div',
	        null,
	        result,
	        _react2.default.createElement(
	          'div',
	          { onMouseEnter: this.onMouseOver.bind(this), onMouseLeave: this.onMouseExit.bind(this), className: 'listItem' },
	          ' ',
	          _react2.default.createElement(
	            'div',
	            { className: 'data' },
	            _react2.default.createElement(
	              'span',
	              { className: 'text' },
	              this.props.reading,
	              ' ',
	              _react2.default.createElement(
	                'span',
	                { className: 'unit' },
	                'mg/dL'
	              )
	            ),
	            _react2.default.createElement(
	              'span',
	              { className: 'time' },
	              this.props.time.format("HH:mm a")
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return DataItem;
	}(_react2.default.Component);

	exports.default = DataItem;

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _style = __webpack_require__(8);

	var _style2 = _interopRequireDefault(_style);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SectionHeader = function (_React$Component) {
	  _inherits(SectionHeader, _React$Component);

	  function SectionHeader() {
	    _classCallCheck(this, SectionHeader);

	    return _possibleConstructorReturn(this, (SectionHeader.__proto__ || Object.getPrototypeOf(SectionHeader)).apply(this, arguments));
	  }

	  _createClass(SectionHeader, [{
	    key: 'render',
	    value: function render() {
	      var date = this.props.date.format("dddd, MMMM DD YYYY");
	      return _react2.default.createElement(
	        'div',
	        { className: 'sectionHeader' },
	        date
	      );
	    }
	  }]);

	  return SectionHeader;
	}(_react2.default.Component);

	exports.default = SectionHeader;

/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = require("d3");

/***/ },
/* 26 */
/***/ function(module, exports) {

	module.exports = require("moment");

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactFauxDom = __webpack_require__(28);

	var _reactFauxDom2 = _interopRequireDefault(_reactFauxDom);

	var _d = __webpack_require__(25);

	var d3 = _interopRequireWildcard(_d);

	var _data = __webpack_require__(22);

	var _data2 = _interopRequireDefault(_data);

	var _moment = __webpack_require__(26);

	var _moment2 = _interopRequireDefault(_moment);

	var _style = __webpack_require__(8);

	var _style2 = _interopRequireDefault(_style);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Chart = function (_React$Component) {
	  _inherits(Chart, _React$Component);

	  function Chart() {
	    _classCallCheck(this, Chart);

	    return _possibleConstructorReturn(this, (Chart.__proto__ || Object.getPrototypeOf(Chart)).apply(this, arguments));
	  }

	  _createClass(Chart, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      function zoomed() {
	        var data = _data2.default.readings;

	        var convertTime = function convertTime(time) {
	          var newDate = time.split("T").join(" ");
	          newDate = (0, _moment2.default)(newDate, "YYYYMMDD HH:mm:ss");
	          return newDate;
	        };

	        var minDate = convertTime(data[0].timestamp),
	            maxDate = convertTime(data[1].timestamp);

	        var margin = { top: 20, right: 20, bottom: 30, left: 40 },
	            width = 960 - margin.left - margin.right,
	            height = 500 - margin.top - margin.bottom,
	            padding = 10;

	        var svg = d3.select("svg");
	        var xScale = d3.scaleTime().domain([minDate, maxDate]).range([padding, width - padding * 2]);
	        var xAxis = d3.axisBottom().scale(xScale).ticks(d3.timeHour.every(1));

	        svg.select(".x.axis").call(xAxis.scale(d3.event.transform.rescaleX(xScale)));
	        var newScale = d3.event.transform.rescaleX(xScale);
	        d3.selectAll("circle").attr("cx", function (d) {
	          console.log(newScale(convertTime(d.timestamp)));
	        });
	      }

	      var zoom = d3.zoom().on("zoom", zoomed);
	      d3.select("svg").call(zoom);
	    }
	  }, {
	    key: 'render',
	    value: function render() {

	      var data = _data2.default.readings;
	      var div = new _reactFauxDom2.default.Element('div');
	      var margin = { top: 20, right: 20, bottom: 30, left: 40 },
	          width = 960 - margin.left - margin.right,
	          height = 500 - margin.top - margin.bottom,
	          padding = 10;

	      /*
	       * value accessor - returns the value to encode for a given data object.
	       * scale - maps value to a visual display encoding, such as a pixel position.
	       * map function - maps from data value to display value
	       * axis - sets up axis
	       */
	      var convertTime = function convertTime(time) {
	        var newDate = time.split("T").join(" ");
	        newDate = (0, _moment2.default)(newDate, "YYYYMMDD HH:mm:ss");
	        return newDate;
	      };

	      var minDate = convertTime(data[0].timestamp),
	          maxDate = convertTime(data[1].timestamp);
	      var yMin = d3.min(data, function (d) {
	        return d.bg_value;
	      }),
	          yMax = d3.max(data, function (d) {
	        return d.bg_value;
	      });
	      // setup x
	      var xValue = function xValue(d) {
	        return convertTime(d.timestamp);
	      },
	          // data -> value
	      xScale = d3.scaleTime().domain([minDate, maxDate]).range([padding, width - padding * 2]),
	          xAxis = d3.axisBottom().scale(xScale).ticks(d3.timeHour.every(1)),
	          xMap = function xMap(d) {
	        return xScale(xValue(d));
	      }; // data -> display


	      // setup y
	      var yValue = function yValue(d) {
	        return d.bg_value;
	      },
	          // data -> value
	      yScale = d3.scaleLinear().domain([yMin, yMax]).range([height, 0]),
	          // value -> display
	      yMap = function yMap(d) {
	        return yScale(yValue(d));
	      },
	          // data -> display
	      yAxis = d3.axisLeft().scale(yScale);

	      var zoom = d3.zoom().on("zoom", zoomed);

	      // setup fill color
	      var cValue = function cValue(d) {
	        if (d.bg_value < 80) {
	          return 'red';
	        } else if (d.bg_value > 150) {
	          return 'orange';
	        } else {
	          return 'green';
	        }
	      };

	      // add the graph canvas to the body of the webpage
	      var svg = d3.select(div).append("svg").attr("width", width + margin.left + margin.right).attr("height", height + margin.top + margin.bottom).append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");
	      //.call(zoom);

	      function zoomed() {

	        svg.select(".x.axis").call(xAxis.scale(d3.event.transform.rescaleX(xScale)));
	        var newScale = d3.event.transform.rescaleX(xScale);
	        svg.selectAll("circle").attr("cx", function (d) {
	          return newScale(convertTime(d.timestamp));
	        });
	      }

	      // x-axis
	      svg.append("g").attr("class", "x axis").attr("transform", "translate(0," + height + ")").call(xAxis).append("text").attr("class", "label").attr("x", width).attr("y", -6).style("text-anchor", "end").text("Time (h)");

	      var tooltip = d3.select("body").append("div").style("opacity", 0);

	      // y-axis
	      svg.append("g").attr("class", "y axis").call(yAxis).append("text").attr("class", "label").attr("transform", "rotate(-90)").attr("y", 6).attr("dy", ".71em").style("text-anchor", "end").text("");

	      // draw dots
	      svg.selectAll(".dot").data(data).enter().append("circle").attr("class", "dot").attr("r", 3.5).attr("cx", xMap).attr("cy", yMap).attr("id", function (date, i) {
	        return "circle" + i;
	      }).style("fill", function (d) {
	        return cValue(d);
	      }).on("mouseover", function (d) {
	        tooltip.transition().duration(200).style("opacity", .9);
	        tooltip.html("<div> " + d.bg_value + " mg/dL </div><div>" + xValue(d).format("MMM DD, HH:mm a") + " </div>").style("position", "absolute").style("left", d3.event.pageX + 5 + "px").style("width", "100px").style("background-color", "white").style("top", d3.event.pageY - 28 + "px");
	      }).on("mouseout", function (d) {
	        tooltip.transition().duration(500).style("opacity", 0);
	      });

	      return div.toReact();
	    }
	  }]);

	  return Chart;
	}(_react2.default.Component);

	exports.default = Chart;

/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports = require("react-faux-dom");

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	        value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _CurrencyExchange = __webpack_require__(30);

	var _CurrencyExchange2 = _interopRequireDefault(_CurrencyExchange);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ChallengeApp = _react2.default.createClass({
	        displayName: 'ChallengeApp',
	        render: function render() {
	                return _react2.default.createElement(
	                        'div',
	                        { className: 'app' },
	                        _react2.default.createElement(_CurrencyExchange2.default, null)
	                );
	        }
	});

	exports.default = ChallengeApp;

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var CurrencyExchange = function (_React$Component) {
	  _inherits(CurrencyExchange, _React$Component);

	  function CurrencyExchange(props) {
	    _classCallCheck(this, CurrencyExchange);

	    var _this = _possibleConstructorReturn(this, (CurrencyExchange.__proto__ || Object.getPrototypeOf(CurrencyExchange)).call(this, props));

	    _this.state = { currencies: "" };
	    return _this;
	  }

	  _createClass(CurrencyExchange, [{
	    key: "componentDidMount",
	    value: function componentDidMount() {
	      var _this2 = this;

	      fetch('https://api.fixer.io/latest').then(function (response) {
	        return response.json();
	      }).then(function (responseData) {
	        return _this2.setState({ currencies: responseData["rates"] });
	      }).catch(function (error) {
	        return console.log("error");
	      });
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      return _react2.default.createElement(
	        "div",
	        null,
	        _react2.default.createElement(
	          "h1",
	          null,
	          "Currency Exchange"
	        ),
	        " ",
	        _react2.default.createElement(DataInput, { currencies: this.state.currencies })
	      );
	    }
	  }]);

	  return CurrencyExchange;
	}(_react2.default.Component);

	// https://api.fixer.io/latest


	exports.default = CurrencyExchange;

	var DataInput = function (_React$Component2) {
	  _inherits(DataInput, _React$Component2);

	  function DataInput(props) {
	    _classCallCheck(this, DataInput);

	    var _this3 = _possibleConstructorReturn(this, (DataInput.__proto__ || Object.getPrototypeOf(DataInput)).call(this, props));

	    _this3.state = { inputValue: "", currencySelected: "", displayList: false };
	    _this3.inputIsChanged = _this3.inputIsChanged.bind(_this3);
	    _this3.optionSelected = _this3.optionSelected.bind(_this3);
	    _this3.displayCurrList = _this3.displayCurrList.bind(_this3);
	    return _this3;
	  }

	  _createClass(DataInput, [{
	    key: "inputIsChanged",
	    value: function inputIsChanged(e) {
	      this.setState({ inputValue: e.target.value });
	    }
	  }, {
	    key: "optionSelected",
	    value: function optionSelected(e) {
	      this.setState({ currencySelected: e.target.value });
	    }
	  }, {
	    key: "renderCurrencies",
	    value: function renderCurrencies() {

	      return [_react2.default.createElement(
	        "option",
	        { key: "0", value: this.state.currencySelected },
	        this.state.currencySelected
	      ), Object.keys(this.props.currencies).map(function (item, key) {
	        return _react2.default.createElement(
	          "option",
	          { key: key, value: item },
	          item
	        );
	      })];
	    }
	  }, {
	    key: "convertCurrency",
	    value: function convertCurrency() {
	      var type = this.state.currencySelected;
	      var intoEuros = this.state.inputValue / this.props.currencies[type];
	      return intoEuros;
	    }
	  }, {
	    key: "displayCurrList",
	    value: function displayCurrList() {
	      this.setState({ displayList: true });
	    }
	  }, {
	    key: "createList",
	    value: function createList() {
	      var _this4 = this;

	      var euros = this.convertCurrency();
	      console.log(euros);
	      return Object.keys(this.props.currencies).map(function (item, key) {
	        return _react2.default.createElement(
	          "div",
	          { key: key },
	          " ",
	          euros * _this4.props.currencies[item] + " -> " + item,
	          " "
	        );
	      });
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      return _react2.default.createElement(
	        "div",
	        null,
	        _react2.default.createElement("input", { value: this.state.inputValue, onChange: this.inputIsChanged }),
	        _react2.default.createElement(
	          "select",
	          { value: this.state.currencySelected, onChange: this.optionSelected },
	          this.renderCurrencies()
	        ),
	        _react2.default.createElement(
	          "button",
	          { onClick: this.displayCurrList },
	          "Enter"
	        ),
	        this.state.displayList ? this.createList() : ""
	      );
	    }
	  }]);

	  return DataInput;
	}(_react2.default.Component);

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _style = __webpack_require__(8);

	var _style2 = _interopRequireDefault(_style);

	var _data = __webpack_require__(22);

	var _ProjectTypeComponent = __webpack_require__(32);

	var _ProjectTypeComponent2 = _interopRequireDefault(_ProjectTypeComponent);

	var _NavigationComponent = __webpack_require__(34);

	var _NavigationComponent2 = _interopRequireDefault(_NavigationComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ProjectsComponent = function (_React$Component) {
	  _inherits(ProjectsComponent, _React$Component);

	  function ProjectsComponent() {
	    _classCallCheck(this, ProjectsComponent);

	    return _possibleConstructorReturn(this, (ProjectsComponent.__proto__ || Object.getPrototypeOf(ProjectsComponent)).apply(this, arguments));
	  }

	  _createClass(ProjectsComponent, [{
	    key: '_renderSections',
	    value: function _renderSections() {
	      return Object.keys(_data.projectData).map(function (item, key) {
	        return _react2.default.createElement(_ProjectTypeComponent2.default, { key: key, title: item, projects: _data.projectData[item] });
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {

	      console.log(this._renderSections());

	      return _react2.default.createElement(
	        'section',
	        { className: 'mainSection' },
	        _react2.default.createElement(
	          'h2',
	          { id: 'Projects' },
	          ' Projects '
	        ),
	        _react2.default.createElement(_NavigationComponent2.default, { links: Object.keys(_data.projectData) }),
	        this._renderSections()
	      );
	    }
	  }]);

	  return ProjectsComponent;
	}(_react2.default.Component);

	exports.default = ProjectsComponent;

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _style = __webpack_require__(8);

	var _style2 = _interopRequireDefault(_style);

	var _ProjectComponent = __webpack_require__(33);

	var _ProjectComponent2 = _interopRequireDefault(_ProjectComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ProjectTypeComponent = function (_React$Component) {
	  _inherits(ProjectTypeComponent, _React$Component);

	  function ProjectTypeComponent() {
	    _classCallCheck(this, ProjectTypeComponent);

	    return _possibleConstructorReturn(this, (ProjectTypeComponent.__proto__ || Object.getPrototypeOf(ProjectTypeComponent)).apply(this, arguments));
	  }

	  _createClass(ProjectTypeComponent, [{
	    key: '_renderSections',
	    value: function _renderSections() {

	      return this.props.projects.map(function (item, key) {
	        return _react2.default.createElement(_ProjectComponent2.default, { key: key, project: item });
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {

	      return _react2.default.createElement(
	        'section',
	        { id: this.props.title },
	        _react2.default.createElement(
	          'h3',
	          null,
	          this.props.title
	        ),
	        this._renderSections()
	      );
	    }
	  }]);

	  return ProjectTypeComponent;
	}(_react2.default.Component);

	exports.default = ProjectTypeComponent;

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _style = __webpack_require__(8);

	var _style2 = _interopRequireDefault(_style);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ProjectComponent = function (_React$Component) {
	  _inherits(ProjectComponent, _React$Component);

	  function ProjectComponent() {
	    _classCallCheck(this, ProjectComponent);

	    return _possibleConstructorReturn(this, (ProjectComponent.__proto__ || Object.getPrototypeOf(ProjectComponent)).apply(this, arguments));
	  }

	  _createClass(ProjectComponent, [{
	    key: '_formatDescription',
	    value: function _formatDescription(desc) {
	      //return desc.split(“ ”).map((item) =>{item}<br/>)
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'section',
	        null,
	        _react2.default.createElement(
	          'a',
	          { href: this.props.project.link },
	          _react2.default.createElement(
	            'h4',
	            null,
	            this.props.project.title
	          )
	        ),
	        _react2.default.createElement(
	          'p',
	          null,
	          this.props.project.description
	        )
	      );
	    }
	  }]);

	  return ProjectComponent;
	}(_react2.default.Component);

	exports.default = ProjectComponent;

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _style = __webpack_require__(8);

	var _style2 = _interopRequireDefault(_style);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var NavigationComponent = function (_React$Component) {
	  _inherits(NavigationComponent, _React$Component);

	  function NavigationComponent() {
	    _classCallCheck(this, NavigationComponent);

	    return _possibleConstructorReturn(this, (NavigationComponent.__proto__ || Object.getPrototypeOf(NavigationComponent)).apply(this, arguments));
	  }

	  _createClass(NavigationComponent, [{
	    key: '_renderLinks',
	    value: function _renderLinks() {
	      console.log(this.props);
	      return this.props.links.map(function (item, key) {
	        var link = "#" + item;
	        return _react2.default.createElement(
	          'li',
	          { key: key },
	          _react2.default.createElement(
	            'a',
	            { href: link },
	            item
	          )
	        );
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'nav',
	        { className: 'nav' },
	        _react2.default.createElement(
	          'ul',
	          null,
	          this._renderLinks()
	        )
	      );
	    }
	  }]);

	  return NavigationComponent;
	}(_react2.default.Component);

	exports.default = NavigationComponent;

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _style = __webpack_require__(8);

	var _style2 = _interopRequireDefault(_style);

	var _data = __webpack_require__(22);

	var _ExperienceComponent = __webpack_require__(36);

	var _ExperienceComponent2 = _interopRequireDefault(_ExperienceComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ExperiencesComponent = function (_React$Component) {
	  _inherits(ExperiencesComponent, _React$Component);

	  function ExperiencesComponent() {
	    _classCallCheck(this, ExperiencesComponent);

	    return _possibleConstructorReturn(this, (ExperiencesComponent.__proto__ || Object.getPrototypeOf(ExperiencesComponent)).apply(this, arguments));
	  }

	  _createClass(ExperiencesComponent, [{
	    key: '_renderSections',
	    value: function _renderSections() {
	      console.log(_data.experienceData);
	      return _data.experienceData.map(function (item, key) {
	        return _react2.default.createElement(_ExperienceComponent2.default, { key: key, experience: item });
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {

	      return _react2.default.createElement(
	        'section',
	        { className: 'mainSection' },
	        _react2.default.createElement(
	          'h2',
	          { id: 'Experience' },
	          ' Professional Experience '
	        ),
	        this._renderSections()
	      );
	    }
	  }]);

	  return ExperiencesComponent;
	}(_react2.default.Component);

	exports.default = ExperiencesComponent;

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _style = __webpack_require__(8);

	var _style2 = _interopRequireDefault(_style);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ExperienceComponent = function (_React$Component) {
	  _inherits(ExperienceComponent, _React$Component);

	  function ExperienceComponent() {
	    _classCallCheck(this, ExperienceComponent);

	    return _possibleConstructorReturn(this, (ExperienceComponent.__proto__ || Object.getPrototypeOf(ExperienceComponent)).apply(this, arguments));
	  }

	  _createClass(ExperienceComponent, [{
	    key: 'render',
	    value: function render() {

	      return _react2.default.createElement(
	        'section',
	        null,
	        _react2.default.createElement(
	          'h4',
	          null,
	          this.props.experience.role,
	          ', ',
	          _react2.default.createElement(
	            'span',
	            null,
	            this.props.experience.company
	          ),
	          ' ',
	          _react2.default.createElement(
	            'span',
	            null,
	            this.props.experience.date
	          )
	        ),
	        _react2.default.createElement(
	          'p',
	          null,
	          this.props.experience.description
	        )
	      );
	    }
	  }]);

	  return ExperienceComponent;
	}(_react2.default.Component);

	exports.default = ExperienceComponent;

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _style = __webpack_require__(8);

	var _style2 = _interopRequireDefault(_style);

	var _data = __webpack_require__(22);

	var _EducationInfoComponent = __webpack_require__(38);

	var _EducationInfoComponent2 = _interopRequireDefault(_EducationInfoComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var EducationComponent = function (_React$Component) {
	  _inherits(EducationComponent, _React$Component);

	  function EducationComponent() {
	    _classCallCheck(this, EducationComponent);

	    return _possibleConstructorReturn(this, (EducationComponent.__proto__ || Object.getPrototypeOf(EducationComponent)).apply(this, arguments));
	  }

	  _createClass(EducationComponent, [{
	    key: '_renderSections',
	    value: function _renderSections() {
	      return _data.educationData.map(function (item, key) {
	        return _react2.default.createElement(_EducationInfoComponent2.default, { key: key, education: item });
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {

	      return _react2.default.createElement(
	        'section',
	        { className: 'mainSection' },
	        _react2.default.createElement(
	          'h2',
	          { id: 'Education' },
	          ' Education '
	        ),
	        this._renderSections()
	      );
	    }
	  }]);

	  return EducationComponent;
	}(_react2.default.Component);

	exports.default = EducationComponent;

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _style = __webpack_require__(8);

	var _style2 = _interopRequireDefault(_style);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var EducationInfoComponent = function (_React$Component) {
	  _inherits(EducationInfoComponent, _React$Component);

	  function EducationInfoComponent() {
	    _classCallCheck(this, EducationInfoComponent);

	    return _possibleConstructorReturn(this, (EducationInfoComponent.__proto__ || Object.getPrototypeOf(EducationInfoComponent)).apply(this, arguments));
	  }

	  _createClass(EducationInfoComponent, [{
	    key: 'render',
	    value: function render() {

	      return _react2.default.createElement(
	        'h4',
	        { className: 'educationInfo' },
	        this.props.education.degree,
	        ', ',
	        _react2.default.createElement(
	          'span',
	          null,
	          this.props.education.college
	        ),
	        ' ',
	        _react2.default.createElement(
	          'span',
	          null,
	          this.props.education.date
	        )
	      );
	    }
	  }]);

	  return EducationInfoComponent;
	}(_react2.default.Component);

	exports.default = EducationInfoComponent;

/***/ },
/* 39 */
/***/ function(module, exports) {

	module.exports = require("express");

/***/ },
/* 40 */
/***/ function(module, exports) {

	module.exports = require("path");

/***/ },
/* 41 */
/***/ function(module, exports) {

	module.exports = require("compression");

/***/ }
/******/ ]);