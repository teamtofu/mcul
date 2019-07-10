module.exports =
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { if (i % 2) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } else { Object.defineProperties(target, Object.getOwnPropertyDescriptors(arguments[i])); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const Types = __webpack_require__(1);

const AtomicToAMU = __webpack_require__(5);

const getCounts = function getCounts() {
  let counts = {};

  for (let i in this.children) {
    if (this.children[i].type === Types.element[0]) {
      counts[this.children[i].element] = counts[this.children[i].element] || 0;
      counts[this.children[i].element] += this.children[i].count || 1;
    } else {
      let groupCount = this.children[i].counts;

      for (let o in groupCount) {
        if (this.children[i].count) groupCount[o] *= this.children[i].count;
        counts[o] = (groupCount[o] || 0) + (counts[o] || 0);
      }
    }
  }

  return counts;
};

const getMass = function getMass() {
  const counts = getCounts.call(this);
  let sum = 0;

  for (let i in counts) {
    sum += AtomicToAMU[Number(i) - 1] * counts[i];
  }

  return this.type === 'molecule' ? Math.round(sum * 1000) / 1000 : sum;
};

const append = function append(item) {
  if (!item || Types.all.indexOf(item.type) === -1) throw new Error('Cannot append invalid item');
  this.children.push(item);
};

const appendAll = function appendAll(items) {
  for (let i in items) {
    append.call(this, items[i]);
  }
};

const findById = function findById(self, id) {
  if (id === false) return self;
  const members = this.children;

  for (let i in members) {
    if (members[i].id === id) return members[i];

    if (typeof members[i].findById === 'function') {
      let subsearch = members[i].findById(id);
      if (subsearch) return subsearch;
    }
  }

  return null;
};

const getChildIds = function getChildIds() {
  let ids = {};

  for (let i in this.children) {
    ids[this.children[i].id] = this.children[i];

    if (this.children[i].childIds) {
      ids = _objectSpread({}, ids, {}, this.children[i].childIds);
    }
  }

  return ids;
};

const getParent = function getParent() {
  const childIds = this.molecule.childIds;

  for (let i in childIds) {
    if (childIds[i].children) {
      for (let o in childIds[i].children) {
        if (childIds[i].children[o].id === this.id) {
          return childIds[i];
        }
      }
    }
  }

  return this.molecule;
};

const getElementFraction = function getElementFraction(element) {
  const counts = getCounts.call(this);
  let sum = 0;

  for (let i in counts) {
    sum += counts[i] || 0;
  }

  return (counts[element] || 0) / sum;
};

const getMassFraction = function getMassFraction(element) {
  const counts = getCounts.call(this);
  const mass = getMass.call(this);
  (counts[element] || 0) * AtomicToAMU[Number(element) - 1] / mass;
};

module.exports = {
  getCounts,
  getMass,
  append,
  appendAll,
  findById,
  getChildIds,
  getParent,
  getElementFraction,
  getMassFraction
};

/***/ }),
/* 1 */
/***/ (function(module, exports) {

let Types = {
  subgroup: ['subgroup', 'complex', 'chain', 'fngroup'],
  element: ['element']
};
Types.all = Types.subgroup.concat(Types.element);
module.exports = Types;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("rd-parse");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = function (gen) {
  return function (f) {
    return f(f);
  }(function (f) {
    return gen(function () {
      return f(f).apply(null, arguments);
    });
  });
};

/***/ }),
/* 4 */
/***/ (function(module) {

module.exports = ["H","He","Li","Be","B","C","N","O","F","Ne","Na","Mg","Al","Si","P","S","Cl","Ar","K","Ca","Sc","Ti","V","Cr","Mn","Fe","Co","Ni","Cu","Zn","Ga","Ge","As","Se","Br","Kr","Rb","Sr","Y","Zr","Nb","Mo","Tc","Ru","Rh","Pd","Ag","Cd","In","Sn","Sb","Te","I","Xe","Cs","Ba","La","Ce","Pr","Nd","Pm","Sm","Eu","Gd","Tb","Dy","Ho","Er","Tm","Yb","Lu","Hf","Ta","W","Re","Os","Ir","Pt","Au","Hg","Tl","Pb","Bi","Po","At","Rn","Fr","Ra","Ac","Th","Pa","U","Np","Pu","Am","Cm","Bk","Cf","Es","Fm","Md","No","Lr","Rf","Db","Sg","Bh","Hs","Mt"];

/***/ }),
/* 5 */
/***/ (function(module) {

module.exports = [1.008,4.0026,7,9.012183,10.81,12.011,14.007,15.999,18.99840316,20.18,22.9897693,24.305,26.981538,28.085,30.973762,32.07,35.45,39.9,39.098,40.08,44.95591,47.87,50.941,51.996,54.93804,55.84,58.93319,58.693,63.55,65.4,69.72,72.63,74.92159,78.97,79.9,83.8,85.468,87.6,88.9058,91.22,92.9064,96,97.90721,101.1,102.9055,106.4,107.868,112.41,114.82,118.71,121.76,127.6,126.9045,131.29,132.905452,137.33,138.9055,140.12,140.9077,144.24,144.91276,150.4,151.96,157.2,158.92535,162.5,164.93033,167.26,168.93422,173.04,174.967,178.5,180.9479,183.8,186.21,190.2,192.22,195.08,196.96657,200.59,204.383,207,208.9804,208.98243,209.98715,222.01758,223.01973,226.02541,227.02775,232.038,231.0359,238.0289,237.04817,244.0642,243.06138,247.07035,247.07031,251.07959,252.083,257.09511,258.09843,259.101,262.11,267.122,268.126,271.134,274.144,277.152,278.156,281.165,282.169,285.177,286.183,289.191,290.196,293.205,294.211,294.214];

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { if (i % 2) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } else { Object.defineProperties(target, Object.getOwnPropertyDescriptors(arguments[i])); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to get private field on non-instance"); } if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

const Molecule = __webpack_require__(7);

class Generator {
  constructor() {
    _state.set(this, {
      writable: true,
      value: {
        parsers: {},
        defaultFormat: 'basic'
      }
    });

    _defineProperty(this, "create", options => {
      return new Molecule(_objectSpread({}, options, {
        parsers: _classPrivateFieldGet(this, _state).parsers,
        parent: this
      }));
    });

    _defineProperty(this, "createFromText", (rawText, format, options) => {
      if (!format) format = _classPrivateFieldGet(this, _state).defaultFormat;
      return new Molecule(_objectSpread({}, options, {
        parsers: _classPrivateFieldGet(this, _state).parsers,
        rawText,
        format,
        parent: this
      }));
    });

    _defineProperty(this, "setDefaultFormat", format => {
      _classPrivateFieldGet(this, _state).defaultFormat = format;
    });

    _defineProperty(this, "addParser", (parser, format) => {
      if (typeof parser !== 'function' && typeof format !== 'string') {
        throw new Error('Parser and format must be specified.');
      }

      _classPrivateFieldGet(this, _state).parsers[format] = parser;
    });
  }

}

var _state = new WeakMap();

module.exports = new Generator();

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { if (i % 2) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } else { Object.defineProperties(target, Object.getOwnPropertyDescriptors(arguments[i])); } } return target; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to set private field on non-instance"); } if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } return value; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to get private field on non-instance"); } if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

const Basic = __webpack_require__(8);

const Iupac = __webpack_require__(10);

const Element = __webpack_require__(14);

const Subgroup = __webpack_require__(16);

const Collection = __webpack_require__(0);

const Types = __webpack_require__(1);

const SCHEMA_VERSION = '0.1.0';

class Molecule {
  constructor(_ref) {
    let _rawText = _ref.rawText,
        _format = _ref.format,
        parent = _ref.parent,
        _options = _objectWithoutProperties(_ref, ["rawText", "format", "parent"]);

    _state.set(this, {
      writable: true,
      value: {
        type: 'molecule',
        children: [],
        idIndex: 0,
        formats: ['basic', 'iupac'],
        bonds: {}
      }
    });

    _createId.set(this, {
      writable: true,
      value: () => {
        _classPrivateFieldGet(this, _state).idIndex += 1;
        return _classPrivateFieldGet(this, _state).idIndex.toString(36);
      }
    });

    _defineProperty(this, "findById", Collection.findById.bind(_classPrivateFieldGet(this, _state), this));

    _defineProperty(this, "serialize", () => {
      let children = Array.prototype.slice.call(_classPrivateFieldGet(this, _state).children);

      for (let i in children) {
        if (typeof children[i].serialize === 'function') {
          children[i] = children[i].serialize();
        }
      }

      return _objectSpread({
        type: 'molecule',
        version: SCHEMA_VERSION,
        children,
        bonds: _classPrivateFieldGet(this, _state).bonds,
        idIndex: _classPrivateFieldGet(this, _state).idIndex
      }, _classPrivateFieldGet(this, _state).rawText ? {
        fromText: _classPrivateFieldGet(this, _state).rawText
      } : {});
    });

    _defineProperty(this, "unserialize", mol => {
      if (mol.version.split('.')[0] !== SCHEMA_VERSION.split('.')[0]) throw new Error('Incompatible version');
      _classPrivateFieldGet(this, _state).idIndex = mol.idIndex;
      _classPrivateFieldGet(this, _state).rawText = mol.fromText;
      _classPrivateFieldGet(this, _state).bonds = mol.bonds;

      for (let i in mol.children) {
        if (mol.children[i].type === Types.element[0]) {
          let elProps = _objectSpread({}, mol.children[i]);

          delete elProps.type;
          delete elProps.element;
          let el = this.createElement(mol.children[i].element, elProps);
          this.append(el);
        } else if (Types.subgroup.indexOf(mol.children[i].type) !== -1) {
          let groupProps = _objectSpread({}, mol.children[i]);

          delete groupProps.children;
          delete groupProps.type;
          let group = this.createSubgroup([], groupProps);
          group.unserialize(mol.children[i].children || []);
          this.append(group);
        }
      }
    });

    _defineProperty(this, "createElement", (element, options) => new Element(element, _objectSpread({}, options, {
      molecule: this,
      id: _classPrivateFieldGet(this, _createId).call(this)
    })));

    _defineProperty(this, "createElements", (element, options) => {
      let count = options.count,
          bond = options.bond;
      count = count || 1;
      delete options.count;
      delete options.bond;
      let el = [];

      for (let i = 0; i < count; i += 1) {
        el.push(this.createElement(element, options));
        if (bond && i !== 0) this.createBond(el[i], el[i - 1], bond);
      }

      return el;
    });

    _defineProperty(this, "createSubgroup", (constituents, options) => new Subgroup(constituents, _objectSpread({}, options, {
      molecule: this,
      id: _classPrivateFieldGet(this, _createId).call(this)
    })));

    _defineProperty(this, "createSubgroups", options => {
      let count = options.count;
      count = count || 1;
      delete options.count;
      let sg = [];

      for (let i = 0; i < count; i += 1) {
        sg.push(this.createSubgroup([], options));
      }

      return sg;
    });

    _defineProperty(this, "createBond", (one, two, options) => {
      if (!one || !two) throw new Error('Missing bonding elements');
      let bondId = (one.id || one) + '-' + (two.id || two);
      let bondMirror = (two.id || two) + '-' + (one.id || one);
      options = _objectSpread({
        bondCount: 1
      }, options);
      _classPrivateFieldGet(this, _state).bonds[bondId] = options;
      _classPrivateFieldGet(this, _state).bonds[bondMirror] = bondId;
    });

    _defineProperty(this, "removeBond", (one, two) => {
      let bondId = (one.id || one) + '-' + (two.id || two);
      let bondMirror = (two.id || two) + '-' + (one.id || one);
      delete _classPrivateFieldGet(this, _state).bonds[bondId];
      delete _classPrivateFieldGet(this, _state).bonds[bondMirror];
    });

    _defineProperty(this, "getBond", (one, two) => {
      let bondId = (one.id || one) + '-' + (two.id || two);

      if (!_classPrivateFieldGet(this, _state).bonds[bondId]) {
        return null;
      } else if (typeof _classPrivateFieldGet(this, _state).bonds[bondId] === 'string') {
        return _classPrivateFieldGet(this, _state).bonds[_classPrivateFieldGet(this, _state).bonds[bondId]];
      } else {
        return _classPrivateFieldGet(this, _state).bonds[bondId];
      }
    });

    _defineProperty(this, "getBonds", one => {
      let bondPart = one.id || one;
      let bonds = [];

      for (let i in _classPrivateFieldGet(this, _state).bonds) {
        if (i.split('-')[0] === bondPart) bonds.push(i);
      }

      return bonds;
    });

    _defineProperty(this, "append", Collection.append.bind(_classPrivateFieldGet(this, _state)));

    _defineProperty(this, "appendAll", Collection.appendAll.bind(_classPrivateFieldGet(this, _state)));

    _defineProperty(this, "getElementFraction", Collection.getElementFraction.bind(_classPrivateFieldGet(this, _state)));

    _defineProperty(this, "getMassFraction", Collection.getMassFraction.bind(_classPrivateFieldGet(this, _state)));

    _defineProperty(this, "parse", () => {
      let _classPrivateFieldGet2 = _classPrivateFieldGet(this, _state),
          rawText = _classPrivateFieldGet2.rawText,
          format = _classPrivateFieldGet2.format;

      if (format === _classPrivateFieldGet(this, _state).formats[0]) {
        _classPrivateFieldGet(this, _state).children = Basic.call(this, rawText);
      } else if (format === _classPrivateFieldGet(this, _state).formats[1]) {
        Iupac.call(this, rawText);
      } else if (typeof _classPrivateFieldGet(this, _state).options.parsers[format] === 'function') {
        _classPrivateFieldGet(this, _state).children = _classPrivateFieldGet(this, _state).options.parsers[format].call(this, rawText);
      } else {
        throw new Error(`Cannot parse type "${format}".`);
      }
    });

    for (let i in _options.parsers) {
      _classPrivateFieldGet(this, _state).formats.push(i);
    }

    const fromText = typeof _rawText === 'string';

    if (fromText && _classPrivateFieldGet(this, _state).formats.indexOf(_format) === -1) {
      throw new Error(`Text to parse and format must be specified.`);
    }

    _classPrivateFieldSet(this, _state, _objectSpread({}, _classPrivateFieldGet(this, _state), {}, {
      rawText: _rawText,
      format: _format,
      parent,
      options: _objectSpread({}, {}, {}, _options)
    }));

    if (fromText) this.parse();
  }

  get children() {
    return Array.prototype.slice.call(_classPrivateFieldGet(this, _state).children);
  }

  get type() {
    return _classPrivateFieldGet(this, _state).type;
  }

  get version() {
    return SCHEMA_VERSION;
  }

  get mass() {
    return Collection.getMass.call(_classPrivateFieldGet(this, _state));
  }

  get counts() {
    return Collection.getCounts.call(_classPrivateFieldGet(this, _state));
  }

  get childIds() {
    return Collection.getChildIds.call(_classPrivateFieldGet(this, _state));
  }

}

var _state = new WeakMap();

var _createId = new WeakMap();

module.exports = Molecule;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { if (i % 2) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } else { Object.defineProperties(target, Object.getOwnPropertyDescriptors(arguments[i])); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const Parser = __webpack_require__(2);

const Y = __webpack_require__(3);

const ConvertToAtomic = __webpack_require__(9);

const BasicGrammar = function BasicGrammar(Token, All, Any, Plus, Optional, Node) {
  const Molecule = this;
  return Y(function (ThisGrammar) {
    Token(/\s+/g, 'ignore');
    Token(/([()\][^_])/g, 'verbatim');
    const ElementToken = Token(/([A-Z][a-z]*)/g, 'element');
    const Count = Token(/([0-9]+)/g, 'count');
    const Charge = Token(/([+-]?[0-9]+)/g, 'charge');
    const ChargeNode = Node(All('^', Charge), charge => Number(charge) && Number(charge) !== 0 ? {
      charge: Number(charge)
    } : {});
    const CountNode = Node(All(Count), count => Number(count) && Number(count) !== 1 ? {
      count: Number(count)
    } : {});
    const Suffix = Node(Any(All(Optional('_'), CountNode, ChargeNode), All(ChargeNode, '_', CountNode), ChargeNode, All(Optional('_'), CountNode)), stack => stack || []);
    const ParentheticalGroup = Node(All('(', ThisGrammar, ')', Optional(Suffix)), ([subgroup, suffix]) => {
      let opts = {};
      suffix = suffix || [];

      for (let i in suffix) {
        opts = _objectSpread({}, opts, {}, suffix[i]);
      }

      return Molecule.createSubgroup(subgroup, opts);
    });
    const ComplexGroup = Node(All('[', ThisGrammar, ']', Optional(Suffix)), ([subgroup, suffix]) => {
      let opts = {
        type: 'complex'
      };
      suffix = suffix || [];

      for (let i in suffix) {
        opts = _objectSpread({}, opts, {}, suffix[i]);
      }

      return Molecule.createSubgroup(subgroup, opts);
    });
    const FreeElement = Node(All(ElementToken, Optional(Suffix)), ([symbol, suffix]) => {
      let opts = {};
      suffix = suffix || [];

      for (let i in suffix) {
        opts = _objectSpread({}, opts, {}, suffix[i]);
      }

      return Molecule.createElement(ConvertToAtomic(symbol), opts);
    });
    return Node(Plus(Any(FreeElement, ParentheticalGroup, ComplexGroup)), stack => stack);
  });
};

module.exports = function (text) {
  return new Parser(BasicGrammar.bind(this)).parse(text);
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

const AtomicToSymbol = __webpack_require__(4);

const SymbolToAtomic = {};

for (let i in AtomicToSymbol) {
  SymbolToAtomic[AtomicToSymbol[i]] = Number(i) + 1;
}

module.exports = symbol => {
  if (SymbolToAtomic.hasOwnProperty(symbol)) return SymbolToAtomic[symbol];
  throw new Error(`Unable to resolve "${symbol}" to an atomic number.`);
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { if (i % 2) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } else { Object.defineProperties(target, Object.getOwnPropertyDescriptors(arguments[i])); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const Parser = __webpack_require__(2);

const Y = __webpack_require__(3);

const HydrocarbonPrefix = __webpack_require__(11);

const FunctionalGroups = __webpack_require__(12);

const GreekCounts = __webpack_require__(13);

const IupacGrammar = function IupacGrammar(Token, All, Any, Plus, Optional, Node) {
  const Molecule = this;
  return Y(function (ThisGrammar) {
    Token(/\s+/g, 'ignore'); // Ignore whitespace

    Token(/([(),-])/g, 'verbatim'); // Assistive characters

    /** ex. meth, eth, prop, ... */

    const PrefixNode = Node(Token(new RegExp(`(${HydrocarbonPrefix.join('|')})(?!yl)`, 'g'), 'prefix'), ([prefix]) => ({
      prefix: Number(HydrocarbonPrefix.indexOf(prefix)) + 1
    }));
    /** ex. ane, ene, an (depending upon context) ... */

    const BondCountNode = Node(Token(/(ane?|ene?|yne?)/g, 'bondCount'), ([bondCount]) => ({
      bondCount: bondCount[0] === 'a' ? 1 : bondCount[0] === 'e' ? 2 : 3
    }));
    /** ex. cyclo */

    const CyclicNode = Node(Token(/(cyclo)/g, 'cyclic'), () => ({
      cyclic: true
    }));
    /** ex. acid */

    const AcidNode = Node(Token(/(\sacid)/g, 'acid'), () => ({
      acid: true
    }));
    /** ex. 1 */

    const LocationNode = Node(Token(/([0-9]+)/g, 'location'), ([location]) => location);
    /** ex. fluoro */

    const PreFunctionalNode = Node(Token(new RegExp(`(${Object.keys(FunctionalGroups).filter(group => !!FunctionalGroups[group].pre).join('|')})`, 'g'), 'prefn'), ([fn]) => ({
      fn
    }));
    /** ex. ol */

    const PostFunctionalNode = Node(Token(new RegExp(`(${Object.keys(FunctionalGroups).filter(group => !FunctionalGroups[group].pre).join('|')})`, 'g'), 'postfn'), ([fn]) => ({
      fn
    }));
    /** ex. di, tri */

    const GreekCount = Node(Token(new RegExp(`(${GreekCounts.join('|')})`, 'g'), 'greekCount'), ([groupCount]) => ({
      count: Number(GreekCounts.indexOf(groupCount)) + 1
    }));
    /** ex. -1,2,3- or -1,2,3,- */

    const LocationGroup = Node(All(Optional('-'), LocationNode, Optional(Plus(All(',', LocationNode))), Optional(','), '-'), location => {
      for (let i in location) location[i] = Number(location[i]);

      return {
        location
      };
    });

    const FunctionalHandler = groups => {
      let options = {
        type: 'fngroup',
        location: []
      };

      for (let i in groups) {
        if (groups[i].hasOwnProperty('location')) {
          options.location = options.location.concat(groups[i].location);
          continue;
        }

        options = _objectSpread({}, options, {}, groups[i]);
      }

      while (options.location.length < (options.count || 1)) options.location.push(-1);

      let fngroups = [];

      for (let i in options.location) {
        fngroups.push(_objectSpread({}, options, {
          location: options.location[i],
          count: 1
        }));
      }

      return {
        fngroups
      };
    };
    /** ex. 2,3-difluoro */


    const PreFunctionalGroup = Node(All(Optional(LocationGroup), Optional(GreekCount), PreFunctionalNode), FunctionalHandler);
    /** ex. -1,2-diol */

    const PostFunctionalGroup = Node(All(Optional(LocationGroup), Optional(GreekCount), PostFunctionalNode), FunctionalHandler);
    const FreeChain = Node(All( // 1,2,2-trichloro-
    Optional(Plus(PreFunctionalGroup)), // -1,2- (can be either at start or middle)
    Optional(LocationGroup), // cyclo-
    Optional(CyclicNode), // but-
    PrefixNode, // -1,2- (denotes same thing as first one)
    Optional(LocationGroup), // -ane, -ene, -yne
    BondCountNode, // -1,2-diol
    Optional(Plus(PostFunctionalGroup)), // acid
    Optional(AcidNode)), groups => {
      // All props
      let chainProps = {
        location: [],
        children: []
      };

      for (let i in groups) {
        if (groups[i].hasOwnProperty('fngroups')) {
          chainProps.children = chainProps.children.concat(groups[i].fngroups);
          continue;
        }

        chainProps = _objectSpread({}, chainProps, {}, groups[i]);
      } // Generate carbons in main chain


      let carbons = Molecule.createElements(6, {
        count: chainProps.prefix,
        chain: true,
        bond: {
          bondCount: 1
        }
      });
      let carbonIds = [];

      for (let i in carbons) carbonIds.push(carbons[i].id); // Generate child functional groups


      let chainChildren = carbons.slice();
      let implicitChildren = [];

      for (let i in chainProps.children) {
        let location = chainProps.children[i].location;
        delete chainProps.children[i].location;
        let group = Molecule.createSubgroup([], chainProps.children[i]);
        group.unserialize(FunctionalGroups[chainProps.children[i].fn].members);

        if (location === -1) {
          implicitChildren.push(group);
        } else {
          for (let o in group.children) {
            let bond = (FunctionalGroups[chainProps.children[i].fn].bonds || [])[o] || {};
            Molecule.createBond(carbonIds[location - 1], group.children[o].id, bond);
          }
        }

        chainChildren.push(group);
      }

      delete chainProps.children; // Generate the main chain group

      let chain = Molecule.createSubgroup(chainChildren, _objectSpread({
        type: 'chain'
      }, chainProps)); // ethene, ethyne, propene, propyne can be implicitly at location 1

      if (chainProps.bondCount !== 1 && chainProps.location.length === 0 && (chainProps.prefix === 2 || chainProps.prefix === 3)) chainProps.location.push(1); // Change bond counts for main chain

      for (let i in chainProps.location) {
        Molecule.createBond(carbonIds[chainProps.location[i]], carbonIds[chainProps.location[i] - 1], {
          bondCount: chainProps.bondCount || 1
        });
      } // Append the chain


      Molecule.append(chain); // Fix implicitly bonded functional groups (e.g. trichloroethene)

      for (let i in carbons) {
        if (!implicitChildren[0]) break;
        let bondCount = 0;
        let bonds = Molecule.getBonds(carbons[i]);

        for (let o in bonds) {
          let bond = Molecule.getBond(carbons[i], bonds[o].split('-')[1]);
          bondCount += bond.bondCount;
        }

        for (let o = bondCount; o < 4; o += 1) {
          if (!implicitChildren[0]) break;

          for (let u in implicitChildren[0].children) {
            let bond = (FunctionalGroups[implicitChildren[0].functionalGroup].bonds || [])[u] || {};
            Molecule.createBond(carbons[i], implicitChildren[0].children[u], bond);
          }

          implicitChildren = implicitChildren.slice(1);
        }
      } // Dynamically add and bond hydrogens to carbon


      const flat = Molecule.childIds;

      for (let i in flat) {
        if (flat[i].element === 6) {
          let bondCount = 0;
          let bonds = Molecule.getBonds(flat[i]);

          for (let o in bonds) {
            let bond = Molecule.getBond(i, bonds[o].split('-')[1]);
            bondCount += bond.bondCount;
          }

          for (let o = bondCount; o < 4; o += 1) {
            let el = Molecule.createElement(1);
            flat[i].parent.append(el);
            Molecule.createBond(flat[i], el);
          }
        }
      }

      return chain;
    });
    return Node(Plus(Any(FreeChain)), stack => stack);
  });
};

module.exports = function (text) {
  return new Parser(IupacGrammar.bind(this)).parse(text);
};

/***/ }),
/* 11 */
/***/ (function(module) {

module.exports = ["meth","eth","prop","but","pent","hex","hept","oct","non","dec","undec","dodec","tridec","tetradec","pentadec","hexadec","heptadec","octadec","nonadec","icosn"];

/***/ }),
/* 12 */
/***/ (function(module) {

module.exports = {"fluoro":{"members":[{"type":"element","element":9}],"pre":true},"chloro":{"members":[{"type":"element","element":17}],"pre":true},"bromo":{"members":[{"type":"element","element":35}],"pre":true},"iodo":{"members":[{"type":"element","element":53}],"pre":true},"ol":{"members":[{"element":8,"type":"element"},{"element":1,"type":"element"}],"pre":false},"hydroxy":{"members":[{"element":8,"type":"element"},{"element":1,"type":"element"}],"pre":true},"one":{"members":[{"element":8,"type":"element"}],"bondCount":2,"pre":false},"oxo":{"members":[{"element":8,"type":"element"}],"bondCount":2,"pre":true},"methyl":{"members":[{"element":6,"type":"element"}],"pre":true}};

/***/ }),
/* 13 */
/***/ (function(module) {

module.exports = ["mono","di","tri","tetra","penta","hexa","hepta","octa","ennea","deca","hendeca","dodeca","triskaideca","tetrakaideca","pentakaideca","hexakaideca","heptakaideca","octakaideca","enneakaideca","icosa"];

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { if (i % 2) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } else { Object.defineProperties(target, Object.getOwnPropertyDescriptors(arguments[i])); } } return target; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to get private field on non-instance"); } if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

const AtomicToSymbol = __webpack_require__(4);

const AtomicToName = __webpack_require__(15);

const AtomicToAMU = __webpack_require__(5);

const Collection = __webpack_require__(0);

class Element {
  constructor(atomicNumber, _ref) {
    let count = _ref.count,
        charge = _ref.charge,
        id = _ref.id,
        molecule = _ref.molecule,
        _meta = _objectWithoutProperties(_ref, ["count", "charge", "id", "molecule"]);

    _state.set(this, {
      writable: true,
      value: {
        el: 1,
        id: '',
        molecule: null,
        meta: {
          count: 1,
          charge: 0
        }
      }
    });

    _defineProperty(this, "serialize", () => {
      let meta = _objectSpread({}, _classPrivateFieldGet(this, _state).meta);

      if (meta.charge === 0) delete meta.charge;
      if (meta.count === 1) delete meta.count;
      return _objectSpread({
        type: 'element',
        element: _classPrivateFieldGet(this, _state).el,
        id: _classPrivateFieldGet(this, _state).id
      }, Object.keys(meta).length === 0 ? {} : meta);
    });

    _defineProperty(this, "type", 'element');

    _defineProperty(this, "set", (key, value) => {
      if (key === 'count' && (isNaN(value) || !Number.isInteger(value) || value === 0)) return;
      if (key === 'charge' && (isNaN(value) || !Number.isInteger(value))) return;
      _classPrivateFieldGet(this, _state).meta = _objectSpread({}, _classPrivateFieldGet(this, _state).meta, {
        [key]: value
      });
    });

    _classPrivateFieldGet(this, _state).el = Number(atomicNumber);
    this.set('count', count);
    this.set('charge', charge);
    _classPrivateFieldGet(this, _state).id = id;
    _classPrivateFieldGet(this, _state).molecule = molecule;
    _classPrivateFieldGet(this, _state).meta = _objectSpread({}, _classPrivateFieldGet(this, _state).meta, {}, _meta);
  }

  get element() {
    return _classPrivateFieldGet(this, _state).el;
  }

  get symbol() {
    return AtomicToSymbol[_classPrivateFieldGet(this, _state).el - 1];
  }

  get name() {
    return AtomicToName[_classPrivateFieldGet(this, _state).el - 1];
  }

  get mass() {
    return AtomicToAMU[_classPrivateFieldGet(this, _state).el - 1] * _classPrivateFieldGet(this, _state).meta.count;
  }

  get count() {
    return _classPrivateFieldGet(this, _state).meta.count;
  }

  get charge() {
    return _classPrivateFieldGet(this, _state).meta.charge;
  }

  get parent() {
    return Collection.getParent.call(_classPrivateFieldGet(this, _state));
  }

  get id() {
    return _classPrivateFieldGet(this, _state).id;
  }

}

var _state = new WeakMap();

module.exports = Element;

/***/ }),
/* 15 */
/***/ (function(module) {

module.exports = ["Hydrogen","Helium","Lithium","Beryllium","Boron","Carbon","Nitrogen","Oxygen","Fluorine","Neon","Sodium","Magnesium","Aluminum","Silicon","Phosphorus","Sulfur","Chlorine","Argon","Potassium","Calcium","Scandium","Titanium","Vanadium","Chromium","Manganese","Iron","Cobalt","Nickel","Copper","Zinc","Gallium","Germanium","Arsenic","Selenium","Bromine","Krypton","Rubidium","Strontium","Yttrium","Zirconium","Niobium","Molybdenum","Technetium","Ruthenium","Rhodium","Palladium","Silver","Cadmium","Indium","Tin","Antimony","Tellurium","Iodine","Xenon","Cesium","Barium","Lanthanum","Cerium","Praseodymium","Neodymium","Promethium","Samarium","Europium","Gadolinium","Terbium","Dysprosium","Holmium","Erbium","Thulium","Ytterbium","Lutetium","Hafnium","Tantalum","Tungsten","Rhenium","Osmium","Iridium","Platinum","Gold","Mercury","Thallium","Lead","Bismuth","Polonium","Astatine","Radon","Francium","Radium","Actinium","Thorium","Protactinium","Uranium","Neptunium","Plutonium","Americium","Curium","Berkelium","Californium","Einsteinium","Fermium","Mendelevium","Nobelium","Lawrencium","Rutherfordium","Dubnium","Seaborgium","Bohrium","Hassium","Meitnerium"];

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { if (i % 2) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } else { Object.defineProperties(target, Object.getOwnPropertyDescriptors(arguments[i])); } } return target; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = privateMap.get(receiver); if (!descriptor) { throw new TypeError("attempted to get private field on non-instance"); } if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

const Collection = __webpack_require__(0);

const Types = __webpack_require__(1);

class Subgroup {
  constructor(_children, _ref) {
    let _type = _ref.type,
        count = _ref.count,
        charge = _ref.charge,
        id = _ref.id,
        molecule = _ref.molecule,
        _meta = _objectWithoutProperties(_ref, ["type", "count", "charge", "id", "molecule"]);

    _state.set(this, {
      writable: true,
      value: {
        children: [],
        type: 'subgroup',
        id: '',
        meta: {
          count: 1,
          charge: 0
        }
      }
    });

    _defineProperty(this, "findById", Collection.findById.bind(_classPrivateFieldGet(this, _state), this));

    _defineProperty(this, "serialize", () => {
      let children = Array.prototype.slice.call(_classPrivateFieldGet(this, _state).children);

      let meta = _objectSpread({}, _classPrivateFieldGet(this, _state).meta);

      for (let i in children) {
        if (typeof children[i].serialize === 'function') {
          children[i] = children[i].serialize();
        }
      }

      if (meta.charge === 0) delete meta.charge;
      if (meta.count === 1) delete meta.count;
      return _objectSpread({
        type: _classPrivateFieldGet(this, _state).type,
        children,
        id: _classPrivateFieldGet(this, _state).id
      }, Object.keys(meta).length === 0 ? {} : meta);
    });

    _defineProperty(this, "unserialize", mol => {
      for (let i in mol) {
        if (mol[i].type === 'element') {
          let elProps = _objectSpread({}, mol[i]);

          delete elProps.type;
          delete elProps.element;

          let el = _classPrivateFieldGet(this, _state).molecule.createElement(mol[i].element, elProps); //test


          this.append(el);
        } else if (Types.subgroup.indexOf(mol[i].type) !== -1) {
          let groupProps = _objectSpread({}, mol[i]);

          delete groupProps.children;
          delete groupProps.type;

          let group = _classPrivateFieldGet(this, _state).molecule.createSubgroup([], groupProps);

          group.unserialize(mol[i].children || []);
          this.append(group);
        }
      }
    });

    _defineProperty(this, "setType", type => {
      if (Types.subgroup.indexOf(type) !== -1) {
        _classPrivateFieldGet(this, _state).type = type;
      } else if (type) {
        throw new Error(`Invalid subgroup type: ${type}`);
      }
    });

    _defineProperty(this, "set", (key, value) => {
      if (key === 'count' && (isNaN(value) || !Number.isInteger(value) || value === 0)) return;
      if (key === 'charge' && (isNaN(value) || !Number.isInteger(value))) return;
      _classPrivateFieldGet(this, _state).meta = _objectSpread({}, _classPrivateFieldGet(this, _state).meta, {
        [key]: value
      });
    });

    _defineProperty(this, "append", Collection.append.bind(_classPrivateFieldGet(this, _state)));

    _defineProperty(this, "appendAll", Collection.appendAll.bind(_classPrivateFieldGet(this, _state)));

    this.setType(_type);
    _classPrivateFieldGet(this, _state).id = id;
    _classPrivateFieldGet(this, _state).molecule = molecule;
    this.set('count', count);
    this.set('charge', charge);

    for (let i in _meta) this.set(i, _meta[i]);

    for (let i in _children) {
      if (Array.isArray(_children[i])) {
        _classPrivateFieldGet(this, _state).children = _classPrivateFieldGet(this, _state).children.concat(_children[i]);
      } else {
        _classPrivateFieldGet(this, _state).children.push(_children[i]);
      }
    }
  }

  get id() {
    return _classPrivateFieldGet(this, _state).id;
  }

  get type() {
    return _classPrivateFieldGet(this, _state).type;
  }

  get children() {
    return Array.prototype.slice.call(_classPrivateFieldGet(this, _state).children);
  }

  get childIds() {
    return Collection.getChildIds.call(_classPrivateFieldGet(this, _state));
  }

  get counts() {
    return Collection.getCounts.call(_classPrivateFieldGet(this, _state));
  }

  get count() {
    return _classPrivateFieldGet(this, _state).meta.count;
  }

  get charge() {
    return _classPrivateFieldGet(this, _state).meta.charge;
  }

  get functionalGroup() {
    return _classPrivateFieldGet(this, _state).meta.fn;
  }

  get mass() {
    return Collection.getMass.call(_classPrivateFieldGet(this, _state));
  }

  get parent() {
    return Collection.getParent.call(_classPrivateFieldGet(this, _state));
  }

}

var _state = new WeakMap();

module.exports = Subgroup;

/***/ })
/******/ ]);
//# sourceMappingURL=mcul.node.js.map