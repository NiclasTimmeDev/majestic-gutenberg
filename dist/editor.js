/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/TeamMembers/edit.js":
/*!****************************************!*\
  !*** ./src/blocks/TeamMembers/edit.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_PanelTab_PanelTab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../components/PanelTab/PanelTab */ "./src/components/PanelTab/PanelTab.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_ResponsiveDisplay_ResponsiveDisplay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../components/ResponsiveDisplay/ResponsiveDisplay */ "./src/components/ResponsiveDisplay/ResponsiveDisplay.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _jsxFileName = "/Users/niclastimm/code/projects/gutenberg/app/public/wp-content/plugins/majestic-gutenberg/src/blocks/TeamMembers/edit.js";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var InspectorControls = wp.blockEditor.InspectorControls;
var PanelColorSettings = wp.blockEditor.PanelColorSettings;
var RichText = wp.blockEditor.RichText;
var withColors = wp.blockEditor.withColors;



/**
 * The class for editing the block in the gutenberg editor.
 */

var TeamMembersEdit = /*#__PURE__*/function (_Component) {
  _inherits(TeamMembersEdit, _Component);

  var _super = _createSuper(TeamMembersEdit);

  function TeamMembersEdit() {
    var _this;

    _classCallCheck(this, TeamMembersEdit);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "onChangeTitle", function (title) {
      _this.props.setAttributes({
        title: title
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onChangeInfo", function (info) {
      _this.props.setAttributes({
        info: info
      });
    });

    _defineProperty(_assertThisInitialized(_this), "designSettings", wp.element.createElement(wp.element.Fragment, null, wp.element.createElement(_components_ResponsiveDisplay_ResponsiveDisplay__WEBPACK_IMPORTED_MODULE_4__.default, {
      hideOnDesktop: false,
      hideOnTablet: false,
      hideOnMobile: false,
      toggleDesktop: function toggleDesktop() {
        console.log('Toggle Desktop');
      },
      toggleTablet: function toggleTablet() {
        console.log('Toggle Tablet');
      },
      toggleMobile: function toggleMobile() {
        console.log('Toggle Mobile');
      },
      __self: _assertThisInitialized(_this),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 7
      }
    })));

    return _this;
  }

  _createClass(TeamMembersEdit, [{
    key: "render",
    value: function render() {
      var attributes = this.props.attributes;
      var title = attributes.title,
          info = attributes.info;
      return wp.element.createElement(wp.element.Fragment, null, wp.element.createElement(InspectorControls, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 9
        }
      }, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Panel, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 11
        }
      }, wp.element.createElement(_components_PanelTab_PanelTab__WEBPACK_IMPORTED_MODULE_2__.default, {
        design: this.designSettings,
        style: wp.element.createElement("div", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 22
          }
        }, "Style"),
        advanced: wp.element.createElement("div", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 25
          }
        }, "Advanced"),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 13
        }
      }))), wp.element.createElement("div", {
        className: "w-full p-3 bg-white rounded-md shadow-md",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 9
        }
      }, wp.element.createElement(RichText, {
        className: "w-full",
        value: title,
        tagName: "h4",
        onChange: this.onChangeTitle,
        placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('The name of the team member', 'majestic-gutenberg'),
        formattingControls: [],
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 11
        }
      }), wp.element.createElement(RichText, {
        className: "w-full",
        value: info,
        tagName: "p",
        onChange: this.onChangeInfo,
        placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Write something about the team member', 'majestic-gutenberg'),
        formattingControls: [],
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 11
        }
      })));
    }
  }]);

  return TeamMembersEdit;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Component);

/* harmony default export */ __webpack_exports__["default"] = (withColors('backgroundColor')(TeamMembersEdit));

/***/ }),

/***/ "./src/blocks/TeamMembers/index.js":
/*!*****************************************!*\
  !*** ./src/blocks/TeamMembers/index.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/blocks/TeamMembers/edit.js");
var _jsxFileName = "/Users/niclastimm/code/projects/gutenberg/app/public/wp-content/plugins/majestic-gutenberg/src/blocks/TeamMembers/index.js";


var RichText = wp.blockEditor.RichText;
 //import { PanelBody } from '@wordpress/components';

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)('majestic-gutenberg/team-members', {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Team member', 'majestic-gutenberg'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Team Member', 'majestic-gutenberg'),
  category: 'majestic-gutenberg-category',
  keywords: '',
  icon: 'admin-users',
  parent: ['majestic-gutenberg/parent'],
  attributes: {
    title: {
      type: 'string',
      source: 'html',
      selector: 'h4'
    },
    info: {
      type: 'string',
      source: 'html',
      selector: 'p'
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__.default,
  save: function save(_ref) {
    var attributes = _ref.attributes;
    var title = attributes.title,
        info = attributes.info;
    return wp.element.createElement("div", {
      className: "w-full p-3 bg-white rounded-md shadow-md",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 7
      }
    }, title && wp.element.createElement(RichText.Content, {
      className: "w-full",
      value: title,
      tagName: "h4",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 11
      }
    }), info && wp.element.createElement(RichText.Content, {
      className: "w-full",
      value: info,
      tagName: "p",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 11
      }
    }));
  }
});

/***/ }),

/***/ "./src/blocks/TeamMembers/parent.js":
/*!******************************************!*\
  !*** ./src/blocks/TeamMembers/parent.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/blocks/TeamMembers/edit.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/niclastimm/code/projects/gutenberg/app/public/wp-content/plugins/majestic-gutenberg/src/blocks/TeamMembers/parent.js",
    _this = undefined;



var InnerBlocks = wp.blockEditor.InnerBlocks;
var InspectorControls = wp.blockEditor.InspectorControls;


(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)('majestic-gutenberg/parent', {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Team members', 'majestic-gutenberg'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Team Members', 'majestic-gutenberg'),
  category: 'majestic-gutenberg-category',
  keywords: '',
  icon: 'grid-view',
  attributes: {
    columns: {
      type: 'number',
      default: 2
    },
    gap: {
      type: 'number',
      default: 1
    }
  },
  edit: function edit(_ref) {
    var attributes = _ref.attributes,
        setAttributes = _ref.setAttributes;
    var columns = attributes.columns,
        gap = attributes.gap;

    var onChangeColumns = function onChangeColumns(columns) {
      setAttributes({
        columns: columns
      });
    };

    var onChangeColumnsGap = function onChangeColumnsGap(gap) {
      setAttributes({
        gap: gap
      });
    };

    var containerClasses = "grid grid-cols-".concat(columns, " gap-").concat(gap);
    return wp.element.createElement(wp.element.Fragment, null, wp.element.createElement(InspectorControls, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }
    }, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Panel, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 11
      }
    }, wp.element.createElement("button", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 13
      }
    }, "Hello"), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Columns', 'majestic-gutenberg'),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 13
      }
    }, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 15
      }
    }, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Number of columns', 'majestic-gutenberg'),
      value: columns,
      onChange: function onChange(columns) {
        return onChangeColumns(columns);
      },
      min: 1,
      max: 12,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 17
      }
    }))), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 13
      }
    }, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Column gaps', 'majestic-gutenberg'),
      value: gap,
      onChange: function onChange(gap) {
        return onChangeColumnsGap(gap);
      },
      min: 1,
      max: 4,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 15
      }
    })))), wp.element.createElement("div", {
      className: containerClasses,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 9
      }
    }, wp.element.createElement(InnerBlocks, {
      allowedBlocks: ['majestic-gutenberg/team-members'],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 11
      }
    })));
  },
  save: function save(_ref2) {
    var attributes = _ref2.attributes;
    var columns = attributes.columns,
        gap = attributes.gap;
    var containerClasses = "grid grid-cols-".concat(columns, " gap-").concat(gap);
    return wp.element.createElement(wp.element.Fragment, null, wp.element.createElement("div", {
      className: containerClasses,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 9
      }
    }, wp.element.createElement(InnerBlocks.Content, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 11
      }
    })));
  }
});

/***/ }),

/***/ "./src/blocks/Testimonials/edit.js":
/*!*****************************************!*\
  !*** ./src/blocks/Testimonials/edit.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _jsxFileName = "/Users/niclastimm/code/projects/gutenberg/app/public/wp-content/plugins/majestic-gutenberg/src/blocks/Testimonials/edit.js";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

//==================================================
// The edit functionality of the Inline Notice block.
//==================================================



var TestimonialsEdit = /*#__PURE__*/function (_Component) {
  _inherits(TestimonialsEdit, _Component);

  var _super = _createSuper(TestimonialsEdit);

  function TestimonialsEdit() {
    _classCallCheck(this, TestimonialsEdit);

    return _super.apply(this, arguments);
  }

  _createClass(TestimonialsEdit, [{
    key: "render",
    value: function render() {
      return wp.element.createElement(wp.element.Fragment, null, wp.element.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 9
        }
      }, "Hello World!"));
    }
  }]);

  return TestimonialsEdit;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Component);

/* harmony default export */ __webpack_exports__["default"] = (TestimonialsEdit);

/***/ }),

/***/ "./src/blocks/Testimonials/index.js":
/*!******************************************!*\
  !*** ./src/blocks/Testimonials/index.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/blocks/Testimonials/edit.js");
var _jsxFileName = "/Users/niclastimm/code/projects/gutenberg/app/public/wp-content/plugins/majestic-gutenberg/src/blocks/Testimonials/index.js";
//==================================================
// The main functionality of the Team Members block.
//==================================================


var RichText = wp.blockEditor.RichText;

/**
 * Register a new blocktype.
 */

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)('majestic-gutenberg/testimonials', {
  // Meta info.
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Testimonials', 'majestic-gutenberg'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Show of some great reviews of your users.'), 'majestic-gutenberg'),
  category: 'majestic-gutenberg-category',
  keywords: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('info', 'majestic-gutenberg'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('grid', 'majestic-gutenberg'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('testimonial', 'majestic-gutenberg'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('review', 'majestic-gutenberg')],
  // The main variables that define the content and layout of the block.
  attributes: {
    name: {
      type: 'string',
      source: 'html',
      selector: 'div'
    },
    quote: {
      type: 'string',
      source: 'html',
      selector: 'p'
    }
  },

  /**
   * Define the edit output of the block.
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__.default,

  /**
   * Define the frontend output of the block.
   *
   * @param {object} attributes
   *   The attributes for the component.
   */
  save: function save(_ref) {
    var attributes = _ref.attributes;
    //const {} = attributes;
    // ==================================
    // Return statement.
    // ==================================
    return wp.element.createElement(wp.element.Fragment, null, wp.element.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 9
      }
    }, "Hello World"));
  }
});

/***/ }),

/***/ "./src/blocks/firstblock/edit.js":
/*!***************************************!*\
  !*** ./src/blocks/firstblock/edit.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _jsxFileName = "/Users/niclastimm/code/projects/gutenberg/app/public/wp-content/plugins/majestic-gutenberg/src/blocks/firstblock/edit.js";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var InspectorControls = wp.blockEditor.InspectorControls;
var PanelColorSettings = wp.blockEditor.PanelColorSettings;
var RichText = wp.blockEditor.RichText;
var withColors = wp.blockEditor.withColors;
/**
 * The class for editing the block in the gutenberg editor.
 */

var Edit = /*#__PURE__*/function (_Component) {
  _inherits(Edit, _Component);

  var _super = _createSuper(Edit);

  function Edit() {
    var _this;

    _classCallCheck(this, Edit);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "onChangeContent", function (content) {
      _this.props.setAttributes({
        content: content
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onChangeBackgroundColor", function (backgroundColor) {
      _this.props.setAttributes({
        backgroundColor: backgroundColor
      });
    });

    return _this;
  }

  _createClass(Edit, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          attributes = _this$props.attributes,
          backgroundColor = _this$props.backgroundColor,
          setBackgroundColor = _this$props.setBackgroundColor;
      var content = attributes.content;
      return wp.element.createElement(wp.element.Fragment, null, wp.element.createElement(InspectorControls, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 9
        }
      }, wp.element.createElement(PanelColorSettings, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Colors', 'majestic-gutenberg'),
        colorSettings: [{
          value: backgroundColor.colo,
          onChange: setBackgroundColor,
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Background Color', 'majestic-gutenberg')
        }],
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 11
        }
      })), wp.element.createElement(RichText, {
        tagName: "p",
        className: "w-full",
        onChange: function onChange(value) {
          _this2.onChangeContent(value);
        },
        style: {
          backgroundColor: backgroundColor.color
        },
        value: content,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 9
        }
      }));
    }
  }]);

  return Edit;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Component);

/* harmony default export */ __webpack_exports__["default"] = (withColors('backgroundColor')(Edit));

/***/ }),

/***/ "./src/blocks/firstblock/index.js":
/*!****************************************!*\
  !*** ./src/blocks/firstblock/index.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/blocks/firstblock/edit.js");
var _jsxFileName = "/Users/niclastimm/code/projects/gutenberg/app/public/wp-content/plugins/majestic-gutenberg/src/blocks/firstblock/index.js";


var RichText = wp.blockEditor.RichText;
 //import { PanelBody } from '@wordpress/components';

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)('majestic-gutenberg/firstblock', {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('First block', 'majestic-gutenberg'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('My First block', 'majestic-gutenberg'),
  category: 'layout',
  keywords: '',
  attributes: {
    content: {
      type: 'string',
      source: 'html',
      selector: 'p'
    },
    backgroundColor: {
      type: 'string'
    },
    customBackgroundColor: {
      type: 'string'
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__.default,
  save: function save(_ref) {
    var attributes = _ref.attributes;
    var content = attributes.content;
    return (// Header.
      wp.element.createElement(wp.element.Fragment, null, wp.element.createElement(RichText.Content, {
        tagName: "p",
        value: content,
        className: "w-full bg-red-700",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 9
        }
      }), wp.element.createElement(RichText.Content, {
        tagName: "p",
        value: content,
        className: "w-full bg-red-700",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 9
        }
      }))
    );
  }
});

/***/ }),

/***/ "./src/blocks/inlineNotice/edit.js":
/*!*****************************************!*\
  !*** ./src/blocks/inlineNotice/edit.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _jsxFileName = "/Users/niclastimm/code/projects/gutenberg/app/public/wp-content/plugins/majestic-gutenberg/src/blocks/inlineNotice/edit.js";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//==================================================
// The edit functionality of the Inline Notice block.
//==================================================


var InspectorControls = wp.blockEditor.InspectorControls;
var PanelColorSettings = wp.blockEditor.PanelColorSettings;
var RichText = wp.blockEditor.RichText;
var withColors = wp.blockEditor.withColors;

/**
 * The edit class.
 */

var Edit = /*#__PURE__*/function (_Component) {
  _inherits(Edit, _Component);

  var _super = _createSuper(Edit);

  function Edit() {
    var _this;

    _classCallCheck(this, Edit);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "onChangeHeadline", function (headline) {
      _this.props.setAttributes({
        headline: headline
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onChangeContent", function (content) {
      _this.props.setAttributes({
        content: content
      });
    });

    _defineProperty(_assertThisInitialized(_this), "toggleBorder", function () {
      _this.props.setAttributes({
        border: !_this.props.attributes.border
      });
    });

    return _this;
  }

  _createClass(Edit, [{
    key: "render",

    /**
     * The render method.
     */
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          attributes = _this$props.attributes,
          headlineBackgroundColor = _this$props.headlineBackgroundColor,
          setHeadlineBackgroundColor = _this$props.setHeadlineBackgroundColor,
          headlineTextColor = _this$props.headlineTextColor,
          setHeadlineTextColor = _this$props.setHeadlineTextColor,
          contentBackgroundColor = _this$props.contentBackgroundColor,
          setContentBackgroundColor = _this$props.setContentBackgroundColor,
          contentTextColor = _this$props.contentTextColor,
          setContentTextColor = _this$props.setContentTextColor;
      var headline = attributes.headline,
          content = attributes.content,
          border = attributes.border; // The class list for the wrapper div. Depends on the border state.

      var wrapperClassList = "w-full rounded ".concat(border ? 'border border-gray-700' : '');
      ''; // The class list applied to the header. Depends on state of background-color.

      var headerClassList = "w-full border-gray-500 px-1 mt-0 mb-0 ".concat(headlineBackgroundColor.color ? '' : 'border-b'); // The inline styles for the header. They concern background and text color.

      var headerInlineStyles = {
        backgroundColor: headlineBackgroundColor.color,
        color: headlineTextColor.color
      }; // The inline styles for the content. They concern background and text color.

      var contentInlineStyles = {
        backgroundColor: contentBackgroundColor.color,
        color: contentTextColor.color
      }; // ==================================
      // Return statement.
      // ==================================

      return wp.element.createElement(wp.element.Fragment, null, wp.element.createElement(InspectorControls, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 9
        }
      }, wp.element.createElement(PanelColorSettings, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Colors', 'majestic-gutenberg'),
        colorSettings: [{
          value: headlineBackgroundColor.color,
          onChange: setHeadlineBackgroundColor,
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Headline Background Color', 'majestic-gutenberg')
        }, {
          value: headlineTextColor.color,
          onChange: setHeadlineTextColor,
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Headline Text Color', 'majestic-gutenberg')
        }, {
          value: contentBackgroundColor.color,
          onChange: setContentBackgroundColor,
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Content Background Color', 'majestic-gutenberg')
        }, {
          value: contentTextColor.color,
          onChange: setContentTextColor,
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Content Text Color', 'majestic-gutenberg')
        }],
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 11
        }
      }), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: "Border",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 11
        }
      }, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 13
        }
      }, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Show border?', 'majestic-gutenberg'),
        checked: border,
        onChange: this.toggleBorder,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 15
        }
      })))), wp.element.createElement("div", {
        className: wrapperClassList,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 9
        }
      }, wp.element.createElement(RichText, {
        tagName: "h3",
        value: headline,
        className: headerClassList,
        onChange: function onChange(headline) {
          return _this2.onChangeHeadline(headline);
        },
        style: headerInlineStyles,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 11
        }
      }), wp.element.createElement(RichText, {
        tagName: "p",
        value: content,
        className: "w-full mt-1 px-1",
        onChange: function onChange(content) {
          return _this2.onChangeContent(content);
        },
        style: contentInlineStyles,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 11
        }
      })));
    }
  }]);

  return Edit;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Component);

/* harmony default export */ __webpack_exports__["default"] = (withColors('headlineBackgroundColor', 'headlineTextColor', 'contentBackgroundColor', 'contentTextColor')(Edit));

/***/ }),

/***/ "./src/blocks/inlineNotice/index.js":
/*!******************************************!*\
  !*** ./src/blocks/inlineNotice/index.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/blocks/inlineNotice/edit.js");
var _jsxFileName = "/Users/niclastimm/code/projects/gutenberg/app/public/wp-content/plugins/majestic-gutenberg/src/blocks/inlineNotice/index.js";
//==================================================
// The main functionality of the Inline Notice block.
//==================================================


var RichText = wp.blockEditor.RichText;

/**
 * Register a new blocktype.
 */

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)('majestic-gutenberg/inline-notice', {
  // Meta info.
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Inline Notice', 'majestic-gutenberg'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('An Inline Notice Box where important information can be highlighted'), 'majestic-gutenberg'),
  category: 'majestic-gutenberg-category',
  keywords: 'information, text, info, notice, inline,',
  // The main variables that define the content and layout of the block.
  attributes: {
    headline: {
      type: 'string',
      source: 'html',
      selector: 'h3'
    },
    content: {
      type: 'string',
      source: 'html',
      selector: 'p'
    },
    headlineBackgroundColor: {
      type: 'string'
    },
    customHeadlineBackgroundColor: {
      type: 'string'
    },
    headlineTextColor: {
      type: 'string'
    },
    customHeadlineTextColor: {
      type: 'string'
    },
    contentBackgroundColor: {
      type: 'string'
    },
    customContentBackgroundColor: {
      type: 'string'
    },
    contentTextColor: {
      type: 'string'
    },
    customContentTextColor: {
      type: 'string'
    },
    border: {
      type: 'boolean'
    }
  },

  /**
   * Define the edit output of the block.
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__.default,

  /**
   * Define the frontend output of the block.
   *
   * @param {object} attributes
   *   The attributes for the component.
   */
  save: function save(_ref) {
    var attributes = _ref.attributes;
    var headline = attributes.headline,
        content = attributes.content,
        headlineBackgroundColor = attributes.headlineBackgroundColor,
        customHeadlineBackgroundColor = attributes.customHeadlineBackgroundColor,
        headlineTextColor = attributes.headlineTextColor,
        customHeadlineTextColor = attributes.customHeadlineTextColor,
        contentBackgroundColor = attributes.contentBackgroundColor,
        customContentBackgroundColor = attributes.customContentBackgroundColor,
        contentTextColor = attributes.contentTextColor,
        customContentTextColor = attributes.customContentTextColor,
        border = attributes.border; // Classes for wrapper div. Depends on the border.

    var wrapperClassList = border ? 'w-full border border-gray-700 rounded' : 'w-full'; // Classes for the headline div. Depends on border and background color.

    var headerClassList = "w-full border-gray-500 m-0 py-1 px-2\n    ".concat(border ? '' : 'rounded-sm', "\n    ").concat(headlineBackgroundColor || customHeadlineBackgroundColor ? '' : 'border-b', "\n    "); // The inline styles for the header. They concern background and text color.

    var headerInlineStyles = {
      backgroundColor: headlineBackgroundColor || customHeadlineBackgroundColor,
      color: headlineTextColor || customHeadlineTextColor
    }; // The inline styles for the content. They concern background and text color.

    var contentInlineStyles = {
      backgroundColor: contentBackgroundColor || customContentBackgroundColor,
      color: contentTextColor || customContentTextColor
    }; // ==================================
    // Return statement.
    // ==================================

    return wp.element.createElement(wp.element.Fragment, null, wp.element.createElement("div", {
      className: wrapperClassList,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 9
      }
    }, wp.element.createElement(RichText.Content, {
      tagName: "h3",
      value: headline,
      className: headerClassList,
      style: headerInlineStyles,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 11
      }
    }), wp.element.createElement(RichText.Content, {
      tagName: "p",
      value: content,
      className: "w-full py-1 px-2",
      style: contentInlineStyles,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 11
      }
    })));
  }
});

/***/ }),

/***/ "./src/components/PanelTab/PanelTab.js":
/*!*********************************************!*\
  !*** ./src/components/PanelTab/PanelTab.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _PanelTabButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PanelTabButton */ "./src/components/PanelTab/PanelTabButton.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _jsxFileName = "/Users/niclastimm/code/projects/gutenberg/app/public/wp-content/plugins/majestic-gutenberg/src/components/PanelTab/PanelTab.js";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





/**
 * An additional tab in the Inspector Panel that
 * allows for more granular and clear control over
 * the rendered content.
 */

var PanelTab = /*#__PURE__*/function (_Component) {
  _inherits(PanelTab, _Component);

  var _super = _createSuper(PanelTab);

  /**
   * The constructor function where the state is initialized.
   *
   * @param {object} props
   *   The props
   */
  function PanelTab(props) {
    var _this;

    _classCallCheck(this, PanelTab);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "onUpdatePanelTab", function (tab) {
      // Mimic the state.
      var showPanelTabContent = {
        design: false,
        style: false,
        advanced: false
      }; // Update the key-value pair of interest.

      showPanelTabContent[tab] = true; // Set state.

      _this.setState({
        showPanelTabContent: showPanelTabContent
      });
    });

    _this.state = {
      showPanelTabContent: {
        design: true,
        style: false,
        advanced: false
      }
    };
    return _this;
  }
  /**
   * Set a new active tab.
   *
   * @param {string} tab
   *   The name of the tab.
   */


  _createClass(PanelTab, [{
    key: "render",

    /**
     * The render function. It renders the markup.
     */
    value: function render() {
      var _this2 = this;

      return wp.element.createElement(wp.element.Fragment, null, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Panel, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 9
        }
      }, wp.element.createElement("div", {
        className: "grid grid-cols-3 gap-0",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 11
        }
      }, wp.element.createElement(_PanelTabButton__WEBPACK_IMPORTED_MODULE_3__.default, {
        title: "Design",
        active: this.state.showPanelTabContent.design,
        icon: "Icon",
        onClick: function onClick() {
          _this2.onUpdatePanelTab('design');
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 13
        }
      }), wp.element.createElement(_PanelTabButton__WEBPACK_IMPORTED_MODULE_3__.default, {
        title: "Style",
        active: this.state.showPanelTabContent.style,
        icon: "Icon",
        onClick: function onClick() {
          _this2.onUpdatePanelTab('style');
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 13
        }
      }), wp.element.createElement(_PanelTabButton__WEBPACK_IMPORTED_MODULE_3__.default, {
        title: "Advanced",
        active: this.state.showPanelTabContent.advanced,
        icon: "Icon",
        onClick: function onClick() {
          _this2.onUpdatePanelTab('advanced');
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 13
        }
      })), this.state.showPanelTabContent.design && this.props.design, this.state.showPanelTabContent.style && this.props.style, this.state.showPanelTabContent.advanced && this.props.advanced));
    }
  }]);

  return PanelTab;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Component);

/* harmony default export */ __webpack_exports__["default"] = (PanelTab);

/***/ }),

/***/ "./src/components/PanelTab/PanelTabButton.js":
/*!***************************************************!*\
  !*** ./src/components/PanelTab/PanelTabButton.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _jsxFileName = "/Users/niclastimm/code/projects/gutenberg/app/public/wp-content/plugins/majestic-gutenberg/src/components/PanelTab/PanelTabButton.js";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var PanelTabButton = /*#__PURE__*/function (_Component) {
  _inherits(PanelTabButton, _Component);

  var _super = _createSuper(PanelTabButton);

  function PanelTabButton() {
    _classCallCheck(this, PanelTabButton);

    return _super.apply(this, arguments);
  }

  _createClass(PanelTabButton, [{
    key: "render",
    value: function render() {
      return wp.element.createElement("button", {
        onClick: this.props.onClick,
        className: "w-full flex flex-col justify-center items-center m-0 p-2 bg-white text-black focus:outline-none ".concat(this.props.active ? 'bg-gray-100' : ''),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7,
          columnNumber: 7
        }
      }, wp.element.createElement("span", {
        className: "mx-auto inline-block mb-1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 9
        }
      }, this.props.icon), wp.element.createElement("span", {
        className: "inline-block mx-auto",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 9
        }
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)(this.props.title, 'majestic-gutenberg')));
    }
  }]);

  return PanelTabButton;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Component);

/* harmony default export */ __webpack_exports__["default"] = (PanelTabButton);

/***/ }),

/***/ "./src/components/ResponsiveDisplay/ResponsiveDisplay.js":
/*!***************************************************************!*\
  !*** ./src/components/ResponsiveDisplay/ResponsiveDisplay.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _jsxFileName = "/Users/niclastimm/code/projects/gutenberg/app/public/wp-content/plugins/majestic-gutenberg/src/components/ResponsiveDisplay/ResponsiveDisplay.js";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




/**
 * A component that provides a sidebar panel
 * with options to hide on different screen
 * sizes.
 */

var ResponsiveDisplay = /*#__PURE__*/function (_Component) {
  _inherits(ResponsiveDisplay, _Component);

  var _super = _createSuper(ResponsiveDisplay);

  function ResponsiveDisplay() {
    _classCallCheck(this, ResponsiveDisplay);

    return _super.apply(this, arguments);
  }

  _createClass(ResponsiveDisplay, [{
    key: "render",
    value: function render() {
      return wp.element.createElement(wp.element.Fragment, null, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Responsive Display', 'majestic-gutenberg'),
        icon: 'desktop',
        initialOpen: false,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 9
        }
      }, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 11
        }
      }, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Hide on desktop', 'majestic-gutenberg'),
        checked: this.props.hideOnDesktop,
        onChange: this.props.toggleDesktop,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 13
        }
      })), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 11
        }
      }, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Hide on tablet', 'majestic-gutenberg'),
        checked: this.props.hideOnTablet,
        onChange: this.props.toggleTablet,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 13
        }
      })), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 11
        }
      }, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Hide on mobile', 'majestic-gutenberg'),
        checked: this.props.hideOnMobile,
        onChange: this.props.toggleMobile,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 13
        }
      }))));
    }
  }]);

  return ResponsiveDisplay;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Component);

/* harmony default export */ __webpack_exports__["default"] = (ResponsiveDisplay);

/***/ }),

/***/ "./src/editor.js":
/*!***********************!*\
  !*** ./src/editor.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blocks_firstblock_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blocks/firstblock/index */ "./src/blocks/firstblock/index.js");
/* harmony import */ var _blocks_inlineNotice_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blocks/inlineNotice/index */ "./src/blocks/inlineNotice/index.js");
/* harmony import */ var _blocks_Testimonials_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blocks/Testimonials/index */ "./src/blocks/Testimonials/index.js");
/* harmony import */ var _blocks_TeamMembers_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blocks/TeamMembers/index */ "./src/blocks/TeamMembers/index.js");
/* harmony import */ var _blocks_TeamMembers_parent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blocks/TeamMembers/parent */ "./src/blocks/TeamMembers/parent.js");
// First block.






/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ (function(module) {

module.exports = wp.blocks;

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

module.exports = wp.components;

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

module.exports = wp.element;

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

module.exports = wp.i18n;

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/editor.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=editor.js.map