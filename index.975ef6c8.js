// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"icZzK":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "890e741a975ef6c8";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws;
    try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        if (e.message) console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"8lqZg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _gridJs = require("./components/Grid.js");
var _gridJsDefault = parcelHelpers.interopDefault(_gridJs);
var _domql = require("domql");
var _domqlDefault = parcelHelpers.interopDefault(_domql);
"use strict";
var { performance } = window;
var start = performance.now();
var dom = (0, _domqlDefault.default).create({
    class: "app",
    proto: (0, _gridJsDefault.default)
}, null, "app"); // dom.update({ time: `${performance.now() - start}` })

},{"./components/Grid.js":"8j1Nr","domql":"9Ckga","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8j1Nr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _gridAreaJs = require("./GridArea.js");
var _gridAreaJsDefault = parcelHelpers.interopDefault(_gridAreaJs);
var _gridCellJs = require("./GridCell.js");
var _gridCellJsDefault = parcelHelpers.interopDefault(_gridCellJs);
var _gridFooterJs = require("./GridFooter.js");
var _gridFooterJsDefault = parcelHelpers.interopDefault(_gridFooterJs);
const childComponents = [];
const rows = 8;
const cols = 16;
const gridAreaContent = [];
for(let i = 0; i < rows; i++)for(let ii = 0; ii < cols; ii++)gridAreaContent.push((0, _gridCellJsDefault.default)());
const title = {
    tag: "h1",
    class: "title",
    text: "Grid Selection"
};
const gridArea = (0, _gridAreaJsDefault.default)(gridAreaContent);
const coordinatesSpan = {
    tag: "span",
    class: "value",
    text: (el, state)=>{
        return `${el.parent.state.coordinates[0]}, ${el.parent.state.coordinates[1]}`;
    }
};
const selectionCoordsComponent = {
    tag: "p",
    class: "selection_coordinates",
    text: (elem, state)=>{
        return "Selection coordinates:";
    },
    childProto: coordinatesSpan,
    state: {
        coordinates: [
            0,
            0
        ]
    }
};
const selectionTotal = {
    tag: "span",
    class: "value",
    text: (el, state)=>{
        return el.parent.state.selectionTotal;
    }
};
const totalSelectionComponent = {
    tag: "p",
    class: "selection_total",
    text: (elem, state)=>{
        return "Total cells selected:";
    },
    childProto: selectionTotal,
    state: {
        selectionTotal: 0
    }
};
const footerContent = [
    selectionCoordsComponent,
    totalSelectionComponent
];
childComponents.push(title, gridArea, (0, _gridFooterJsDefault.default)(footerContent));
const Grid = ()=>({
        tag: "div",
        class: "grid",
        childProto: childComponents
    });
exports.default = Grid;

},{"./GridArea.js":"73BQ8","./GridCell.js":"1FQZb","./GridFooter.js":"6yBSo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"73BQ8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const GridArea = (children)=>({
        tag: "div",
        class: "grid__area",
        childProto: children,
        state: {
            selectedCells: []
        },
        on: {
            update: (el, state)=>{
                // Each time the number of selected cells gets updated, update the total selection component text
                const footerComponent = el.parent[2];
                const totalSelectionComponent = footerComponent.childProto[1];
                const totalSelected = state.selectedCells.length;
                // update component state
                totalSelectionComponent.state.update({
                    selectionTotal: totalSelected
                });
            }
        }
    });
exports.default = GridArea;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"1FQZb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const baseClass = "grid__cell ";
const selected = "selected";
const GridCell = ()=>({
        tag: "div",
        class: (elem, state)=>state.isSelected ? baseClass + selected : baseClass,
        // text: (elem, state) => elem.key,
        state: {
            isSelected: false,
            classList: baseClass,
            prevSelection: null
        },
        on: {
            click: (event, gridCell, state)=>{
                // Update the selected state for the current cell and all previous sibling cells
                const cellKey = parseInt(gridCell.key);
                const cellParent = gridCell.parent;
                const selectedCells = cellParent.state.selectedCells;
                const selectedCellsLength = cellParent.state.selectedCells.length;
                const currentKey = cellKey;
                // TODO:
                // Move the logic that handles updating the parent state into the on:{ update() }
                // So when the cell's isSelected state is updated, then add or remove it from the selectedCells parent array list.
                if (selectedCellsLength <= 1 && currentKey == 0) {
                    // if we have only 1 or less cells selected
                    updateState(state, "isSelected", !state.isSelected);
                    if (state.isSelected) // add to array list
                    updateState(cellParent.state, "selectedCells", [
                        currentKey
                    ]);
                    else {
                        // remove from array list
                        selectedCells.splice(currentKey, 1);
                        updateState(cellParent.state, "selectedCells", selectedCells);
                    }
                } else if (currentKey <= selectedCellsLength) {
                    // Handle deselection of cells because user has clicked a grid cell key than is less than the amount stored
                    for(let i = currentKey; i < selectedCellsLength + 1; i++)if (cellParent[i].state.isSelected) {
                        // if we have already selected grid cells then update their state to false and remove from array list
                        updateState(cellParent[i].state, "isSelected", false);
                        // remove cell from selected cells array
                        for(let ii = 0; ii < selectedCellsLength; ii++)if (selectedCells[ii] && selectedCells[ii] == cellParent[i].key) {
                            selectedCells.splice(ii, 1);
                            updateState(cellParent.state, "selectedCells", selectedCells);
                        }
                    }
                } else for(let i = selectedCellsLength; i < currentKey + 1; i++){
                    // work backwards updating the grid cell states until reaching the first cell item
                    updateState(cellParent[i].state, "isSelected", !cellParent[i].state.isSelected);
                    updateState(cellParent.state, "selectedCells", [
                        i,
                        ...selectedCells
                    ]);
                }
                /**
       * Update selection co-ordinates
       */ const selectionCoordsComponent = cellParent.parent.parent[2].childProto[0];
                const { row, column } = calculateRowAndColumn(cellKey) // offset the key by 1 due to the keys starting from 0.
                ;
                selectionCoordsComponent.state.update({
                    coordinates: [
                        row + 1,
                        column + 1
                    ]
                });
            }
        }
    });
function updateState(state, keyString, value) {
    state.update({
        [keyString]: value
    });
}
function calculateRowAndColumn(cellKey, columns = 16) {
    const row = Math.floor(cellKey / columns);
    const column = cellKey % columns;
    return {
        row,
        column
    };
}
exports.default = GridCell;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6yBSo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _gridFooterScss = require("../styles/grid_footer.scss");
const GridArea = (children)=>({
        tag: "div",
        class: "grid__footer",
        childProto: children
    });
exports.default = GridArea;

},{"../styles/grid_footer.scss":"6nuQd","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6nuQd":[function() {},{}],"9Ckga":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _element = require("@domql/element");
"use strict";
const create = (element, parent, key, options)=>{
    return (0, _element.create)(element, parent, key, options);
};
exports.default = {
    TREE: (0, _element.TREE),
    create
};

},{"@domql/element":"1qTSs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1qTSs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TREE", ()=>(0, _tree.TREE));
parcelHelpers.export(exports, "create", ()=>(0, _createDefault.default));
parcelHelpers.export(exports, "createNode", ()=>(0, _nodeDefault.default));
parcelHelpers.export(exports, "define", ()=>(0, _defineDefault.default));
parcelHelpers.export(exports, "update", ()=>(0, _updateDefault.default));
parcelHelpers.export(exports, "set", ()=>(0, _setDefault.default));
var _tree = require("./tree");
var _create = require("./create");
var _createDefault = parcelHelpers.interopDefault(_create);
var _node = require("./node");
var _nodeDefault = parcelHelpers.interopDefault(_node);
var _define = require("./define");
var _defineDefault = parcelHelpers.interopDefault(_define);
var _update = require("./update");
var _updateDefault = parcelHelpers.interopDefault(_update);
var _set = require("./set");
var _setDefault = parcelHelpers.interopDefault(_set);
"use strict";

},{"./tree":"aQnvi","./create":"c6v6x","./node":"knagg","./define":"9eBu1","./update":"4g3kr","./set":"gPXWh","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aQnvi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ROOT", ()=>ROOT);
parcelHelpers.export(exports, "TREE", ()=>TREE);
var _utils = require("@domql/utils");
var _report = require("@domql/report");
"use strict";
const ROOT = {
    key: ":root",
    node: (0, _utils.document) ? (0, _utils.document).body : (0, _report.report)("DocumentNotDefined", (0, _utils.document))
};
const TREE = ROOT;

},{"@domql/utils":"fVj5t","@domql/report":"bSAtn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fVj5t":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _keyJs = require("./key.js");
parcelHelpers.exportAll(_keyJs, exports);
var _envJs = require("./env.js");
parcelHelpers.exportAll(_envJs, exports);
var _typesJs = require("./types.js");
parcelHelpers.exportAll(_typesJs, exports);
var _objectJs = require("./object.js");
parcelHelpers.exportAll(_objectJs, exports);
var _functionJs = require("./function.js");
parcelHelpers.exportAll(_functionJs, exports);
var _arrayJs = require("./array.js");
parcelHelpers.exportAll(_arrayJs, exports);
var _nodeJs = require("./node.js");
parcelHelpers.exportAll(_nodeJs, exports);
var _logJs = require("./log.js");
parcelHelpers.exportAll(_logJs, exports);
var _stringJs = require("./string.js");
parcelHelpers.exportAll(_stringJs, exports);
var _globalsJs = require("./globals.js");
parcelHelpers.exportAll(_globalsJs, exports);
var _cookieJs = require("./cookie.js");
parcelHelpers.exportAll(_cookieJs, exports);
var _tagsJs = require("./tags.js");
parcelHelpers.exportAll(_tagsJs, exports);
"use strict";

},{"./key.js":"5FaRV","./env.js":"lYgsL","./types.js":"gHIzt","./object.js":"g7e4E","./function.js":"lUHFt","./array.js":"9fhw4","./node.js":"2clFB","./log.js":"4J3B2","./string.js":"7joQT","./globals.js":"cIh78","./cookie.js":"MsRuf","./tags.js":"248iH","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5FaRV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "generateKey", ()=>generateKey);
parcelHelpers.export(exports, "createSnapshotId", ()=>createSnapshotId);
"use strict";
const generateKey = function() {
    let index = 0;
    function newId() {
        index++;
        return index;
    }
    return newId;
}();
const createSnapshotId = generateKey;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lYgsL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "NODE_ENV", ()=>NODE_ENV);
parcelHelpers.export(exports, "isProduction", ()=>isProduction);
parcelHelpers.export(exports, "isTest", ()=>isTest);
parcelHelpers.export(exports, "isDevelopment", ()=>isDevelopment);
parcelHelpers.export(exports, "getNev", ()=>getNev);
"use strict";
const NODE_ENV = "development";
const isProduction = (env = NODE_ENV)=>env === "production" || env === "prod" || env !== "development" && env !== "dev" && env !== "test";
const isTest = (env = NODE_ENV)=>env === "test";
const isDevelopment = (env = NODE_ENV)=>env === "development" || env === "dev";
const getNev = (key, env = NODE_ENV)=>env[key];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gHIzt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isObject", ()=>isObject);
parcelHelpers.export(exports, "isString", ()=>isString);
parcelHelpers.export(exports, "isNumber", ()=>isNumber);
parcelHelpers.export(exports, "isFunction", ()=>isFunction);
parcelHelpers.export(exports, "isBoolean", ()=>isBoolean);
parcelHelpers.export(exports, "isNull", ()=>isNull);
parcelHelpers.export(exports, "isArray", ()=>isArray);
parcelHelpers.export(exports, "isDate", ()=>isDate);
parcelHelpers.export(exports, "isObjectLike", ()=>isObjectLike);
parcelHelpers.export(exports, "isDefined", ()=>isDefined);
parcelHelpers.export(exports, "isUndefined", ()=>isUndefined);
parcelHelpers.export(exports, "TYPES", ()=>TYPES);
parcelHelpers.export(exports, "is", ()=>is);
parcelHelpers.export(exports, "isNot", ()=>isNot);
var _node = require("./node");
"use strict";
const isObject = (arg)=>{
    if (arg === null) return false;
    return typeof arg === "object" && arg.constructor === Object;
};
const isString = (arg)=>typeof arg === "string";
const isNumber = (arg)=>typeof arg === "number";
const isFunction = (arg)=>typeof arg === "function";
const isBoolean = (arg)=>arg === true || arg === false;
const isNull = (arg)=>arg === null;
const isArray = (arg)=>Array.isArray(arg);
const isDate = (d)=>d instanceof Date;
const isObjectLike = (arg)=>{
    if (arg === null) return false;
    // if (isArray(arg)) return false
    return typeof arg === "object";
};
const isDefined = (arg)=>{
    return isObject(arg) || isObjectLike(arg) || isString(arg) || isNumber(arg) || isFunction(arg) || isArray(arg) || isObjectLike(arg) || isBoolean(arg) || isDate(arg) || isNull(arg);
};
const isUndefined = (arg)=>{
    return arg === undefined;
};
const TYPES = {
    boolean: isBoolean,
    array: isArray,
    object: isObject,
    string: isString,
    date: isDate,
    number: isNumber,
    null: isNull,
    function: isFunction,
    objectLike: isObjectLike,
    node: (0, _node.isNode),
    htmlElement: (0, _node.isHtmlElement),
    defined: isDefined
};
const is = (arg)=>{
    return (...args)=>{
        return args.map((val)=>TYPES[val](arg)).filter((v)=>v).length > 0;
    };
};
const isNot = (arg)=>{
    return (...args)=>{
        return args.map((val)=>TYPES[val](arg)).filter((v)=>v).length === 0;
    };
};

},{"./node":"2clFB","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2clFB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isNode", ()=>isNode);
parcelHelpers.export(exports, "isHtmlElement", ()=>isHtmlElement);
var _globals = require("./globals");
"use strict";
const isNode = (obj)=>{
    return (typeof Node === "object" ? obj instanceof (0, _globals.window).Node : obj && typeof obj === "object" && typeof obj.nodeType === "number" && typeof obj.nodeName === "string") || false;
};
const isHtmlElement = (obj)=>{
    return (typeof HTMLElement === "object" ? obj instanceof (0, _globals.window).HTMLElement // DOM2
     : obj && typeof obj === "object" && obj !== null && obj.nodeType === 1 && typeof obj.nodeName === "string") || false;
};

},{"./globals":"cIh78","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cIh78":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "global", ()=>global);
parcelHelpers.export(exports, "self", ()=>self);
parcelHelpers.export(exports, "window", ()=>window);
parcelHelpers.export(exports, "document", ()=>document);
"use strict";
const global = globalThis;
const self = globalThis;
const window = globalThis;
const document = window.document // eslint-disable-line
;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"g7e4E":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "exec", ()=>exec);
parcelHelpers.export(exports, "map", ()=>map);
parcelHelpers.export(exports, "merge", ()=>merge);
parcelHelpers.export(exports, "deepMerge", ()=>deepMerge);
parcelHelpers.export(exports, "clone", ()=>clone);
parcelHelpers.export(exports, "deepCloneExclude", ()=>deepCloneExclude);
parcelHelpers.export(exports, "mergeArrayExclude", ()=>mergeArrayExclude);
parcelHelpers.export(exports, "deepClone", ()=>deepClone);
parcelHelpers.export(exports, "deepCloneWithExtnd", ()=>deepCloneWithExtnd);
parcelHelpers.export(exports, "deepStringify", ()=>deepStringify);
parcelHelpers.export(exports, "objectToString", ()=>objectToString);
parcelHelpers.export(exports, "detachFunctionsFromObject", ()=>detachFunctionsFromObject);
parcelHelpers.export(exports, "deepDestringify", ()=>deepDestringify);
parcelHelpers.export(exports, "stringToObject", ()=>stringToObject);
parcelHelpers.export(exports, "diffObjects", ()=>diffObjects);
parcelHelpers.export(exports, "diffArrays", ()=>diffArrays);
parcelHelpers.export(exports, "diff", ()=>diff);
parcelHelpers.export(exports, "hasOwnProperty", ()=>hasOwnProperty);
parcelHelpers.export(exports, "isEmpty", ()=>isEmpty);
parcelHelpers.export(exports, "isEmptyObject", ()=>isEmptyObject);
parcelHelpers.export(exports, "makeObjectWithoutPrototype", ()=>makeObjectWithoutPrototype);
parcelHelpers.export(exports, "deepDiff", ()=>deepDiff);
parcelHelpers.export(exports, "overwrite", ()=>overwrite);
parcelHelpers.export(exports, "overwriteShallow", ()=>overwriteShallow);
parcelHelpers.export(exports, "overwriteDeep", ()=>overwriteDeep);
parcelHelpers.export(exports, "mergeIfExisted", ()=>mergeIfExisted);
parcelHelpers.export(exports, "flattenRecursive", ()=>flattenRecursive);
parcelHelpers.export(exports, "isEqualDeep", ()=>isEqualDeep);
parcelHelpers.export(exports, "deepContains", ()=>deepContains);
parcelHelpers.export(exports, "removeFromObject", ()=>removeFromObject);
var _globalsJs = require("./globals.js");
var _typesJs = require("./types.js");
var _arrayJs = require("./array.js");
var _stringJs = require("./string.js");
"use strict";
const exec = (param, element, state, context)=>{
    if ((0, _typesJs.isFunction)(param)) return param(element, state || element.state, context || element.context);
    return param;
};
const map = (obj, extention, element)=>{
    for(const e in extention)obj[e] = exec(extention[e], element);
};
const merge = (element, obj, excludeFrom = [])=>{
    for(const e in obj){
        const hasOwnProperty = Object.prototype.hasOwnProperty.call(obj, e);
        if (!hasOwnProperty || excludeFrom.includes(e) || e.startsWith("__")) continue;
        const elementProp = element[e];
        const objProp = obj[e];
        if (elementProp === undefined) element[e] = objProp;
    }
    return element;
};
const deepMerge = (element, extend, excludeFrom = [])=>{
    for(const e in extend){
        const hasOwnProperty = Object.prototype.hasOwnProperty.call(extend, e);
        if (!hasOwnProperty || excludeFrom.includes(e) || e.startsWith("__")) continue;
        const elementProp = element[e];
        const extendProp = extend[e];
        if ((0, _typesJs.isObjectLike)(elementProp) && (0, _typesJs.isObjectLike)(extendProp)) deepMerge(elementProp, extendProp, excludeFrom);
        else if (elementProp === undefined) element[e] = extendProp;
    }
    return element;
};
const clone = (obj, excludeFrom = [])=>{
    const o = {};
    for(const prop in obj){
        const hasOwnProperty = Object.prototype.hasOwnProperty.call(obj, prop);
        if (!hasOwnProperty || excludeFrom.includes(prop) || prop.startsWith("__")) continue;
        o[prop] = obj[prop];
    }
    return o;
};
const deepCloneExclude = (obj, excludeFrom = [])=>{
    if ((0, _typesJs.isArray)(obj)) return obj.map((x)=>deepCloneExclude(x, excludeFrom));
    const o = {};
    for(const k in obj){
        const hasOwnProperty = Object.prototype.hasOwnProperty.call(obj, k);
        if (!hasOwnProperty || excludeFrom.includes(k) || k.startsWith("__")) continue;
        let v = obj[k];
        if (k === "extend" && (0, _typesJs.isArray)(v)) v = mergeArrayExclude(v, excludeFrom);
        if ((0, _typesJs.isArray)(v)) o[k] = v.map((x)=>deepCloneExclude(x, excludeFrom));
        else if ((0, _typesJs.isObject)(v)) o[k] = deepCloneExclude(v, excludeFrom);
        else o[k] = v;
    }
    return o;
};
const mergeArrayExclude = (arr, excl = [])=>{
    return arr.reduce((acc, curr)=>deepMerge(acc, deepCloneExclude(curr, excl)), {});
};
const deepClone = (obj, excludeFrom = [], cleanUndefined = false)=>{
    const o = (0, _typesJs.isArray)(obj) ? [] : {};
    for(const prop in obj){
        if (prop === "__proto__") continue;
        if (excludeFrom.includes(prop) || prop.startsWith("__")) continue;
        let objProp = obj[prop];
        if (cleanUndefined && (0, _typesJs.isUndefined)(objProp)) continue;
        if (prop === "extend" && (0, _typesJs.isArray)(objProp)) objProp = (0, _arrayJs.mergeArray)(objProp);
        if ((0, _typesJs.isObjectLike)(objProp)) o[prop] = deepClone(objProp, excludeFrom, cleanUndefined);
        else o[prop] = objProp;
    }
    return o;
};
const deepCloneWithExtnd = (obj, excludeFrom = [], cleanUndefined = false)=>{
    const o = (0, _typesJs.isArray)(obj) ? [] : {};
    for(const prop in obj){
        if (prop === "__proto__") continue;
        if (excludeFrom.includes(prop) || prop.startsWith("__")) continue;
        const objProp = obj[prop];
        if (cleanUndefined && (0, _typesJs.isUndefined)(objProp)) continue;
        if ((0, _typesJs.isObjectLike)(objProp)) o[prop] = deepCloneWithExtnd(objProp, excludeFrom, cleanUndefined);
        else o[prop] = objProp;
    }
    return o;
};
const deepStringify = (obj, stringified = {})=>{
    for(const prop in obj){
        const objProp = obj[prop];
        if ((0, _typesJs.isFunction)(objProp)) stringified[prop] = objProp.toString();
        else if ((0, _typesJs.isObject)(objProp)) {
            stringified[prop] = {};
            deepStringify(objProp, stringified[prop]);
        } else if ((0, _typesJs.isArray)(objProp)) {
            stringified[prop] = [];
            objProp.forEach((v, i)=>{
                if ((0, _typesJs.isObject)(v)) {
                    stringified[prop][i] = {};
                    deepStringify(v, stringified[prop][i]);
                } else if ((0, _typesJs.isFunction)(v)) stringified[prop][i] = v.toString();
                else stringified[prop][i] = v;
            });
        } else stringified[prop] = objProp;
    }
    return stringified;
};
const objectToString = (obj, indent = 0)=>{
    const spaces = "  ".repeat(indent);
    let str = "{\n";
    for (const [key, value] of Object.entries(obj)){
        const keyNotAllowdChars = (0, _stringJs.stringIncludesAny)(key, [
            "&",
            "*",
            "-",
            ":",
            "@",
            ".",
            "/",
            "!",
            " "
        ]);
        const stringedKey = keyNotAllowdChars ? `'${key}'` : key;
        str += `${spaces}  ${stringedKey}: `;
        if ((0, _typesJs.isArray)(value)) {
            str += "[\n";
            for (const element of value){
                if ((0, _typesJs.isObject)(element) && element !== null) str += `${spaces}    ${objectToString(element, indent + 2)},\n`;
                else if ((0, _typesJs.isString)(element)) str += `${spaces}    '${element}',\n`;
                else str += `${spaces}    ${element},\n`;
            }
            str += `${spaces}  ]`;
        } else if ((0, _typesJs.isObjectLike)(value)) str += objectToString(value, indent + 1);
        else if ((0, _typesJs.isString)(value)) str += (0, _stringJs.stringIncludesAny)(value, [
            "\n",
            "'"
        ]) ? `\`${value}\`` : `'${value}'`;
        else str += value;
        str += ",\n";
    }
    str += `${spaces}}`;
    return str;
};
const detachFunctionsFromObject = (obj, detached = {})=>{
    for(const prop in obj){
        const objProp = obj[prop];
        if ((0, _typesJs.isFunction)(objProp)) continue;
        else if ((0, _typesJs.isObject)(objProp)) {
            detached[prop] = {};
            deepStringify(objProp, detached[prop]);
        } else if ((0, _typesJs.isArray)(objProp)) {
            detached[prop] = [];
            objProp.forEach((v, i)=>{
                if ((0, _typesJs.isFunction)(v)) return;
                if ((0, _typesJs.isObject)(v)) {
                    detached[prop][i] = {};
                    detachFunctionsFromObject(v, detached[prop][i]);
                } else detached[prop][i] = v;
            });
        } else detached[prop] = objProp;
    }
    return detached;
};
const deepDestringify = (obj, destringified = {})=>{
    for(const prop in obj){
        const hasOwnProperty = Object.prototype.hasOwnProperty.call(obj, prop);
        if (!hasOwnProperty) continue;
        const objProp = obj[prop];
        if ((0, _typesJs.isString)(objProp)) {
            if (objProp.includes("=>") || objProp.includes("function") || objProp.startsWith("(")) try {
                const evalProp = (0, _globalsJs.window).eval(`(${objProp})`) // use parentheses to convert string to function expression
                ;
                destringified[prop] = evalProp;
            } catch (e) {
                if (e) destringified[prop] = objProp;
            }
            else destringified[prop] = objProp;
        } else if ((0, _typesJs.isArray)(objProp)) {
            destringified[prop] = [];
            objProp.forEach((arrProp)=>{
                if ((0, _typesJs.isString)(arrProp)) {
                    if (arrProp.includes("=>") || arrProp.includes("function") || arrProp.startsWith("(")) try {
                        const evalProp = (0, _globalsJs.window).eval(`(${arrProp})`) // use parentheses to convert string to function expression
                        ;
                        destringified[prop].push(evalProp);
                    } catch (e) {
                        if (e) destringified[prop].push(arrProp);
                    }
                    else destringified[prop].push(arrProp);
                } else if ((0, _typesJs.isObject)(arrProp)) destringified[prop].push(deepDestringify(arrProp));
                else destringified[prop].push(arrProp);
            });
        } else if ((0, _typesJs.isObject)(objProp)) destringified[prop] = deepDestringify(objProp, destringified[prop]) // recursively call deepDestringify for nested objects
        ;
        else destringified[prop] = objProp;
    }
    return destringified;
};
const stringToObject = (str, verbose)=>{
    try {
        return (0, _globalsJs.window).eval("(" + str + ")") // eslint-disable-line
        ;
    } catch (e) {
        if (verbose) console.warn(e);
    }
};
const diffObjects = (original, objToDiff, cache)=>{
    for(const e in objToDiff){
        if (e === "ref") continue;
        const originalProp = original[e];
        const objToDiffProp = objToDiff[e];
        if ((0, _typesJs.isObject)(originalProp) && (0, _typesJs.isObject)(objToDiffProp)) {
            cache[e] = {};
            diff(originalProp, objToDiffProp, cache[e]);
        } else if (objToDiffProp !== undefined) cache[e] = objToDiffProp;
    }
    return cache;
};
const diffArrays = (original, objToDiff, cache)=>{
    if (original.length !== objToDiff.length) cache = objToDiff;
    else {
        const diffArr = [];
        for(let i = 0; i < original.length; i++){
            const diffObj = diff(original[i], objToDiff[i]);
            if (Object.keys(diffObj).length > 0) diffArr.push(diffObj);
        }
        if (diffArr.length > 0) cache = diffArr;
    }
    return cache;
};
const diff = (original, objToDiff, cache = {})=>{
    if ((0, _typesJs.isArray)(original) && (0, _typesJs.isArray)(objToDiff)) {
        cache = [];
        diffArrays(original, objToDiff, cache);
    } else diffObjects(original, objToDiff, cache);
    return cache;
};
const hasOwnProperty = (o, ...args)=>Object.prototype.hasOwnProperty.call(o, ...args);
const isEmpty = (o)=>Object.keys(o).length === 0;
const isEmptyObject = (o)=>(0, _typesJs.isObject)(o) && isEmpty(o);
const makeObjectWithoutPrototype = ()=>Object.create(null);
const deepDiff = (lhs, rhs)=>{
    if (lhs === rhs) return {};
    if (!(0, _typesJs.isObjectLike)(lhs) || !(0, _typesJs.isObjectLike)(rhs)) return rhs;
    const deletedValues = Object.keys(lhs).reduce((acc, key)=>{
        if (!hasOwnProperty(rhs, key)) acc[key] = undefined;
        return acc;
    }, makeObjectWithoutPrototype());
    if ((0, _typesJs.isDate)(lhs) || (0, _typesJs.isDate)(rhs)) {
        if (lhs.valueOf() === rhs.valueOf()) return {};
        return rhs;
    }
    return Object.keys(rhs).reduce((acc, key)=>{
        if (!hasOwnProperty(lhs, key)) {
            acc[key] = rhs[key];
            return acc;
        }
        const difference = diff(lhs[key], rhs[key]);
        if (isEmptyObject(difference) && !(0, _typesJs.isDate)(difference) && (isEmptyObject(lhs[key]) || !isEmptyObject(rhs[key]))) return acc;
        acc[key] = difference;
        return acc;
    }, deletedValues);
};
const overwrite = (element, params, excludeFrom = [])=>{
    const { ref } = element;
    const changes = {};
    for(const e in params){
        if (excludeFrom.includes(e) || e.startsWith("__")) continue;
        const elementProp = element[e];
        const paramsProp = params[e];
        if (paramsProp) {
            ref.__cache[e] = changes[e] = elementProp;
            ref[e] = paramsProp;
        }
    }
    return changes;
};
const overwriteShallow = (obj, params, excludeFrom = [])=>{
    for(const e in params){
        if (excludeFrom.includes(e) || e.startsWith("__")) continue;
        obj[e] = params[e];
    }
    return obj;
};
const overwriteDeep = (obj, params, excludeFrom = [])=>{
    for(const e in params){
        if (e === "__proto__") continue;
        if (excludeFrom.includes(e) || e.startsWith("__")) continue;
        const objProp = obj[e];
        const paramsProp = params[e];
        if ((0, _typesJs.isObjectLike)(objProp) && (0, _typesJs.isObjectLike)(paramsProp)) overwriteDeep(objProp, paramsProp);
        else if (paramsProp !== undefined) obj[e] = paramsProp;
    }
    return obj;
};
const mergeIfExisted = (a, b)=>{
    if ((0, _typesJs.isObjectLike)(a) && (0, _typesJs.isObjectLike)(b)) return deepMerge(a, b);
    return a || b;
};
const flattenRecursive = (param, prop, stack = [])=>{
    const objectized = (0, _arrayJs.mergeAndCloneIfArray)(param);
    stack.push(objectized);
    const extendOfExtend = objectized[prop];
    if (extendOfExtend) flattenRecursive(extendOfExtend, prop, stack);
    delete objectized[prop];
    return stack;
};
const isEqualDeep = (param, element, visited = new Set())=>{
    // Check if both values are non-null objects
    if (typeof param !== "object" || typeof element !== "object" || param === null || element === null) return param === element // Compare non-object values directly
    ;
    // Check for circular references
    if (visited.has(param) || visited.has(element)) return true // Assume equality to break the circular reference
    ;
    visited.add(param);
    visited.add(element);
    const keysParam = Object.keys(param);
    const keysElement = Object.keys(element);
    // Check if both objects have the same number of properties
    if (keysParam.length !== keysElement.length) return false;
    // Check if all properties in param also exist in element
    for (const key of keysParam){
        if (!keysElement.includes(key)) return false;
        const paramProp = param[key];
        const elementProp = element[key];
        // Recursively check property values
        if (!isEqualDeep(paramProp, elementProp, visited)) return false;
    }
    return true;
};
const deepContains = (obj1, obj2)=>{
    if (typeof obj1 !== typeof obj2) return false;
    if ((0, _typesJs.isObjectLike)(obj1)) {
        if (Array.isArray(obj1) && Array.isArray(obj2)) {
            if (obj1.length !== obj2.length) return false;
            for(let i = 0; i < obj1.length; i++){
                if (!deepContains(obj1[i], obj2[i])) return false;
            }
        } else if ((0, _typesJs.isObjectLike)(obj1) && obj2 !== null) for(const key in obj1){
            const hasOwnProperty = Object.prototype.hasOwnProperty.call(obj2, key);
            if (!hasOwnProperty || !deepContains(obj1[key], obj2[key])) return false;
        }
    } else return obj2 === obj1;
    return true;
};
const removeFromObject = (obj, props)=>{
    if (props === undefined || props === null) return obj;
    if ((0, _typesJs.is)(props)("string", "number")) delete obj[props];
    else if ((0, _typesJs.isArray)(props)) props.forEach((prop)=>delete obj[prop]);
    else throw new Error("Invalid input: props must be a string or an array of strings");
    return obj;
};

},{"./globals.js":"cIh78","./types.js":"gHIzt","./array.js":"9fhw4","./string.js":"7joQT","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9fhw4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "arrayContainsOtherArray", ()=>arrayContainsOtherArray);
parcelHelpers.export(exports, "removeFromArray", ()=>removeFromArray);
parcelHelpers.export(exports, "swapItemsInArray", ()=>swapItemsInArray);
parcelHelpers.export(exports, "joinArrays", ()=>joinArrays);
parcelHelpers.export(exports, "mergeArray", ()=>mergeArray);
parcelHelpers.export(exports, "mergeAndCloneIfArray", ()=>mergeAndCloneIfArray);
parcelHelpers.export(exports, "cutArrayBeforeValue", ()=>cutArrayBeforeValue);
parcelHelpers.export(exports, "cutArrayAfterValue", ()=>cutArrayAfterValue);
parcelHelpers.export(exports, "createNestedObject", ()=>createNestedObject);
parcelHelpers.export(exports, "removeValueFromArray", ()=>removeValueFromArray);
parcelHelpers.export(exports, "removeValueFromArrayAll", ()=>removeValueFromArrayAll);
var _object = require("./object");
var _types = require("./types");
"use strict";
const arrayContainsOtherArray = (arr1, arr2)=>{
    return arr2.every((val)=>arr1.includes(val));
};
const removeFromArray = (arr, index)=>{
    if ((0, _types.isString)(index)) index = parseInt(index);
    if ((0, _types.isNumber)(index)) {
        if (index < 0 || index >= arr.length || isNaN(index)) throw new Error("Invalid index");
        arr.splice(index, 1);
    } else if ((0, _types.isArray)(index)) index.forEach((idx)=>removeFromArray(arr, idx));
    else throw new Error("Invalid index");
    return arr;
};
const swapItemsInArray = (arr, i, j)=>{
    [arr[i], arr[j]] = [
        arr[j],
        arr[i]
    ];
};
const joinArrays = (...arrays)=>{
    return [].concat(...arrays);
};
const mergeArray = (arr, excludeFrom = [])=>{
    return arr.reduce((a, c)=>(0, _object.deepMerge)(a, (0, _object.deepClone)(c, excludeFrom), excludeFrom), {});
};
const mergeAndCloneIfArray = (obj)=>{
    return (0, _types.isArray)(obj) ? mergeArray(obj) : (0, _object.deepClone)(obj);
};
const cutArrayBeforeValue = (arr, value)=>{
    const index = arr.indexOf(value);
    if (index !== -1) return arr.slice(0, index);
    return arr;
};
const cutArrayAfterValue = (arr, value)=>{
    const index = arr.indexOf(value);
    if (index !== -1) return arr.slice(index + 1);
    return arr;
};
const createNestedObject = (arr, lastValue)=>{
    const nestedObject = {};
    if (arr.length === 0) return lastValue;
    arr.reduce((obj, value, index)=>{
        if (!obj[value]) obj[value] = {};
        if (index === arr.length - 1 && lastValue) obj[value] = lastValue;
        return obj[value];
    }, nestedObject);
    return nestedObject;
};
const removeValueFromArray = (arr, value)=>{
    const index = arr.indexOf(value);
    if (index > -1) {
        const newArray = [
            ...arr
        ];
        newArray.splice(index, 1);
        return newArray;
    }
    return arr.slice();
};
const removeValueFromArrayAll = (arr, value)=>{
    return arr.filter((item)=>item !== value);
};

},{"./object":"g7e4E","./types":"gHIzt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7joQT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "stringIncludesAny", ()=>stringIncludesAny);
parcelHelpers.export(exports, "trimStringFromSymbols", ()=>trimStringFromSymbols);
parcelHelpers.export(exports, "replaceLiteralsWithObjectFields", ()=>replaceLiteralsWithObjectFields);
"use strict";
const stringIncludesAny = (str, characters)=>{
    for (const char of characters){
        if (str.includes(char)) return true;
    }
    return false;
};
const trimStringFromSymbols = (str, characters)=>{
    // Create a regular expression pattern to match the specified symbols
    const pattern = new RegExp(`[${characters.join("\\")}]`, "g");
    // Replace matched symbols with an empty string
    return str.replace(pattern, "");
};
/**
 * Replaces placeholders in a string with corresponding {{ }} values from an object.
 *
 * @param {string} str - The string containing placeholders to replace.
 * @param {object} state - The object containing the values to substitute.
 * @returns {string} The modified string with placeholders replaced by values from the object.
 */ const brackRegex = /\{\{\s*((?:\.\.\/)+)?([^}\s]+)\s*\}\}/g;
const replaceLiteralsWithObjectFields = (str, state)=>{
    if (!str.includes("{{")) return str;
    return str.replace(brackRegex, (_, parentPath, variable)=>{
        if (parentPath) {
            const parentLevels = parentPath.match(/\.\.\//g).length;
            let parentState = state;
            for(let i = 0; i < parentLevels; i++){
                parentState = parentState.parent;
                if (!parentState) return "" // Return an empty string if the parent level doesn't exist
                ;
            }
            const value = parentState[variable.trim()];
            return value !== undefined ? `${value}` : "";
        } else {
            const value = state[variable.trim()];
            return value !== undefined ? `${value}` : "";
        }
    });
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lUHFt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Debounces a function, ensuring that it is only executed after a specified timeout
 * period has elapsed since the last invocation.
 *
 * @param {function} func - The function to be debounced.
 * @param {number} [timeout=300] - The time (in milliseconds) to wait after the last call to
 *     `debounce` before executing the `func`.
 * @returns {function} - A debounced version of the input function `func`.
 * @example
 * // Usage example:
 * const debouncedFunction = debounce(this, myFunction, 500);
 * window.addEventListener('resize', debouncedFunction);
 */ parcelHelpers.export(exports, "debounce", ()=>debounce);
parcelHelpers.export(exports, "debounceOnContext", ()=>debounceOnContext);
parcelHelpers.export(exports, "memoize", ()=>memoize);
parcelHelpers.export(exports, "isStringFunction", ()=>isStringFunction);
"use strict";
function debounce(func, wait, immediate) {
    let timeout;
    return function() {
        const context = this;
        const args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}
const debounceOnContext = (element, func, timeout = 300)=>{
    let timer;
    return (...args)=>{
        clearTimeout(timer);
        timer = setTimeout(()=>{
            func.apply(element, args);
        }, timeout);
    };
};
const memoize = (fn)=>{
    const cache = {};
    return (...args)=>{
        const n = args[0];
        if (n in cache) return cache[n];
        else {
            const result = fn(n);
            cache[n] = result;
            return result;
        }
    };
};
const isStringFunction = (inputString)=>{
    // Regular expression to match both regular and arrow function declarations
    const functionRegex = /^((function\s*\([^)]*\)\s*\{[^}]*\})|(\([^)]*\)\s*=>))/;
    // Use the regex to test if the inputString matches the function pattern
    return functionRegex.test(inputString);
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4J3B2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "logIf", ()=>logIf);
parcelHelpers.export(exports, "logGroupIf", ()=>logGroupIf);
"use strict";
const logIf = (bool, ...arg)=>{
    if (bool) arg.map((v)=>console.log(v));
};
const logGroupIf = (bool, key, ...arg)=>{
    if (bool) {
        console.group(key);
        arg.map((v)=>console.log(v));
        console.groupEnd(key);
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"MsRuf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isMobile", ()=>isMobile);
parcelHelpers.export(exports, "setCookie", ()=>setCookie);
parcelHelpers.export(exports, "getCookie", ()=>getCookie);
var _types = require("./types");
"use strict";
const isMobile = (()=>typeof navigator === "undefined" ? false : /Mobi/.test(navigator.userAgent))();
const setCookie = (cname, cvalue, exdays = 365)=>{
    if ((0, _types.isUndefined)(document) || (0, _types.isUndefined)(document.cookie)) return;
    const d = new Date();
    d.setTime(d.getTime() + exdays * 86400000);
    const expires = `expires=${d.toUTCString()}`;
    document.cookie = `${cname}=${cvalue};${expires};path=/`;
};
const getCookie = (cname)=>{
    if ((0, _types.isUndefined)(document) || (0, _types.isUndefined)(document.cookie)) return;
    const name = `${cname}=`;
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(";");
    for(let i = 0; i < ca.length; i++){
        let c = ca[i];
        while(c.charAt(0) === " ")c = c.substring(1);
        if (c.indexOf(name) === 0) return c.substring(name.length, c.length);
    }
    return "";
};

},{"./types":"gHIzt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"248iH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "HTML_TAGS", ()=>HTML_TAGS);
parcelHelpers.export(exports, "isValidHtmlTag", ()=>isValidHtmlTag);
"use strict";
const HTML_TAGS = {
    root: [
        "body",
        "html"
    ],
    head: [
        "title",
        "base",
        "meta",
        "style"
    ],
    body: [
        "string",
        "fragment",
        "a",
        "abbr",
        "acronym",
        "address",
        "applet",
        "area",
        "article",
        "aside",
        "audio",
        "b",
        "basefont",
        "bdi",
        "bdo",
        "big",
        "blockquote",
        "br",
        "button",
        "canvas",
        "caption",
        "center",
        "cite",
        "code",
        "col",
        "colgroup",
        "data",
        "datalist",
        "dd",
        "del",
        "details",
        "dfn",
        "dialog",
        "dir",
        "div",
        "dl",
        "dt",
        "em",
        "embed",
        "fieldset",
        "figcaption",
        "figure",
        "font",
        "footer",
        "form",
        "frame",
        "frameset",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "head",
        "header",
        "hr",
        "i",
        "iframe",
        "img",
        "input",
        "ins",
        "kbd",
        "label",
        "legend",
        "li",
        "link",
        "main",
        "map",
        "mark",
        "meter",
        "nav",
        "noframes",
        "noscript",
        "object",
        "ol",
        "optgroup",
        "option",
        "output",
        "p",
        "param",
        "picture",
        "pre",
        "progress",
        "q",
        "rp",
        "rt",
        "ruby",
        "s",
        "samp",
        "script",
        "section",
        "select",
        "small",
        "source",
        "span",
        "strike",
        "strong",
        "sub",
        "summary",
        "sup",
        "table",
        "tbody",
        "td",
        "template",
        "textarea",
        "tfoot",
        "th",
        "thead",
        "time",
        "tr",
        "track",
        "tt",
        "u",
        "ul",
        "var",
        "video",
        "wbr",
        // SVG
        "svg",
        "path"
    ]
};
const isValidHtmlTag = (arg)=>HTML_TAGS.body.includes(arg);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bSAtn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ERRORS_REGISTRY", ()=>ERRORS_REGISTRY);
parcelHelpers.export(exports, "report", ()=>report);
"use strict";
const ERRORS_REGISTRY = {
    en: {
        DocumentNotDefined: {
            title: "Document is undefined",
            description: "To tweak with DOM, you should use browser."
        },
        OverwriteToBuiltin: {
            title: "Overwriting to builtin method",
            description: "Overwriting a builtin method in the window define is not possible, please choose different name"
        },
        BrowserNotDefined: {
            title: "Can't recognize environment",
            description: "Environment should be browser application, that can run Javascript"
        },
        SetQuickPreferancesIsNotObject: {
            title: "Quick preferances object is required",
            description: 'Please pass a plain object with "lang", "culture" and "area" properties'
        },
        InvalidParams: {
            title: "Params are invalid",
            description: 'Please pass a plain object with "lang", "culture" and "area" properties'
        },
        CantCreateWithoutNode: {
            title: "You must provide node",
            description: "Can't create DOM element without setting node or text"
        },
        HTMLInvalidTag: {
            title: "Element tag name (or DOM nodeName) is invalid",
            description: "To create element, you must provide valid DOM node. See full list of them at here: http://www.w3schools.com/tags/"
        },
        HTMLInvalidAttr: {
            title: "Attibutes object is invalid",
            description: "Please pass a valid plain object to apply as an attributes for a DOM node"
        },
        HTMLInvalidData: {
            title: "Data object is invalid",
            description: "Please pass a valid plain object to apply as an dataset for a DOM node"
        },
        HTMLInvalidStyles: {
            title: "Styles object is invalid",
            description: "Please pass a valid plain object to apply as an style for a DOM node"
        },
        HTMLInvalidText: {
            title: "Text string is invalid",
            description: "Please pass a valid string to apply text to DOM node"
        },
        ElementOnStateIsNotDefined: {
            title: "Element on state is not defined",
            description: "Please check the element object"
        }
    }
};
const report = (err, arg, element)=>{
    const currentLang = "en";
    let errObj;
    if (err && typeof err === "string") errObj = ERRORS_REGISTRY[currentLang][err];
    return new Error(`"${err}", "${arg}"\n\n`, `${errObj.description}`, element ? `\n\n${element}` : "");
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"c6v6x":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _node = require("./node");
var _nodeDefault = parcelHelpers.interopDefault(_node);
var _tree = require("./tree");
var _registry = require("@domql/registry");
var _event = require("@domql/event");
var _render = require("@domql/render");
var _state = require("@domql/state");
var _methods = require("./methods");
var _props = require("./props");
var _extend = require("./extend");
var _mixins = require("./mixins");
var _set = require("./methods/set");
var _classList = require("./mixins/classList");
var _iterate = require("./iterate");
var _utils = require("@domql/utils");
var _options = require("./cache/options");
var _optionsDefault = parcelHelpers.interopDefault(_options);
var _component = require("./utils/component");
"use strict";
const ENV = "development";
/**
 * Creating a domQL element using passed parameters
 */ const create = (element, parent, key, options = (0, _optionsDefault.default).create || {}, attachOptions)=>{
    cacheOptions(element, options);
    // if (key === 'Title') debugger
    // if element is STRING
    if (checkIfPrimitive(element)) element = applyValueAsText(element, parent, key);
    element = redefineElement(element, parent, key, options);
    parent = redefineParent(element, parent, key);
    key = createKey(element, parent, key);
    const ref = addRef(element, parent, key);
    // assign initial props
    ref.__initialProps = (0, _utils.deepClone)(element.props, []);
    // assign context
    applyContext(element, parent, options);
    (0, _component.applyComponentFromContext)(element, parent, options);
    if (!ref.__skipCreate) // create EXTEND inheritance
    (0, _extend.applyExtend)(element, parent, options);
    // create and assign a KEY
    element.key = key;
    // Only resolve extends, skip everything else
    if (options.onlyResolveExtends) return onlyResolveExtends(element, parent, key, options);
    replaceOptions(element, parent, options);
    addCaching(element, parent);
    (0, _set.addMethods)(element, parent);
    createScope(element, parent);
    (0, _state.createState)(element, parent);
    if (element.scope === "state") element.scope = element.state;
    createIfConditionFlag(element, parent);
    // apply props settings
    (0, _props.createProps)(element, parent);
    if (element.scope === "props" || element.scope === true) element.scope = element.props;
    // recatch if it passess props again
    createIfConditionFlag(element, parent);
    // if it already HAS a NODE
    if (element.node && ref.__if) return (0, _render.assignNode)(element, parent, key, attachOptions);
    // apply variants
    (0, _component.applyVariant)(element, parent);
    const onInit = (0, _event.triggerEventOn)("init", element, options);
    if (onInit === false) return element;
    (0, _event.triggerEventOn)("beforeClassAssign", element, options);
    // generate a CLASS name
    (0, _classList.assignKeyAsClassname)(element);
    renderElement(element, parent, options, attachOptions);
    addElementIntoParentChildren(element, parent);
    (0, _event.triggerEventOn)("complete", element, options);
    return element;
};
const createBasedOnType = (element, parent, key, options)=>{
    // if ELEMENT is not given
    if (element === undefined) {
        if (ENV === "test" || ENV === "development") console.warn(key, "element is undefined in", parent && parent.__ref && parent.__ref.path);
        return {};
    }
    if ((0, _utils.isString)(key) && key.slice(0, false)) {
        if (ENV === "test" || ENV === "development") console.warn(key, "seems like to be in __ref");
    }
    if (element === null) return;
    if (element === true) return {
        text: true
    };
    // if element is extend
    if (element.__hash) return {
        extend: element
    };
    return element;
};
const redefineElement = (element, parent, key, options)=>{
    const elementWrapper = createBasedOnType(element, parent, key, options);
    if ((0, _component.checkIfKeyIsComponent)(key)) return (0, _component.applyKeyComponentAsExtend)(elementWrapper, parent, key);
    // TODO: move as define plugins
    // Responsive rendering
    if (checkIfMedia(key)) return applyMediaProps(elementWrapper, parent, key);
    return elementWrapper;
};
const redefineParent = (element, parent, key, options)=>{
    if (!parent) return 0, _tree.ROOT;
    if ((0, _utils.isNode)(parent)) {
        const parentNodeWrapper = {
            key: ":root",
            node: parent
        };
        (0, _tree.ROOT)[`${key}_parent`] = parentNodeWrapper;
        return parentNodeWrapper;
    }
    return parent;
};
const cacheOptions = (element, options)=>{
    if (options && !(0, _optionsDefault.default).create) {
        (0, _optionsDefault.default).create = options;
        (0, _optionsDefault.default).create.context = element.context || options.context;
    }
};
const createKey = (element, parent, key)=>{
    return ((0, _utils.exec)(key, element) || key || element.key || (0, _utils.generateKey)()).toString();
};
const addRef = (element, parent)=>{
    if (element.__ref) element.__ref.origin = element;
    else element.__ref = {
        origin: element
    };
    return element.__ref;
};
const replaceOptions = (element, parent, options)=>{
    if (Object.keys(options).length) {
        (0, _mixins.registry).defaultOptions = options;
        if (options.ignoreChildExtend) delete options.ignoreChildExtend;
    }
};
const addElementIntoParentChildren = (element, parent)=>{
    if (parent.__ref && parent.__ref.__children) parent.__ref.__children.push(element.key);
};
const renderElement = (element, parent, options, attachOptions)=>{
    const { __ref: ref, key } = element;
    // CREATE a real NODE
    (0, _nodeDefault.default)(element, options);
    if (!ref.__if) {
        parent[key || element.key] = element;
        return element;
    }
    // assign NODE
    (0, _render.assignNode)(element, parent, key, attachOptions);
    // run `on.renderRouter`
    (0, _event.triggerEventOn)("renderRouter", element, options);
    // run `on.render`
    (0, _event.triggerEventOn)("render", element, options);
};
const checkIfPrimitive = (element)=>{
    return (0, _utils.is)(element)("string", "number");
};
const applyValueAsText = (element, parent, key)=>{
    const extendTag = element.extend && element.extend.tag;
    const childExtendTag = parent.childExtend && parent.childExtend.tag;
    const isKeyValidHTMLTag = (0, _registry.TAGS).body.indexOf(key) > -1 && key;
    return {
        text: element,
        tag: extendTag || childExtendTag || isKeyValidHTMLTag || "string"
    };
};
const applyContext = (element, parent, options)=>{
    if (options.context && !(0, _tree.ROOT).context && !element.context) (0, _tree.ROOT).context = options.context;
    if (!element.context) element.context = parent.context || options.context || (0, _tree.ROOT).context;
};
const createScope = (element, parent)=>{
    const { __ref: ref } = element;
    if (!element.scope) element.scope = parent.scope || ref.__root.scope || {};
};
const createIfConditionFlag = (element, parent)=>{
    const { __ref: ref } = element;
    if ((0, _utils.isFunction)(element.if) && !element.if(element, element.state)) delete ref.__if;
    else ref.__if = true;
};
const addCaching = (element, parent)=>{
    const { __ref: ref } = element;
    let { __ref: parentRef } = parent;
    // enable TRANSFORM in data
    if (!element.transform) element.transform = {};
    // enable CACHING
    if (!ref.__cached) ref.__cached = {};
    if (!ref.__defineCache) ref.__defineCache = {};
    // enable EXEC
    if (!ref.__exec) ref.__exec = {};
    // enable CLASS CACHING
    if (!ref.__class) ref.__class = {};
    if (!ref.__classNames) ref.__classNames = {};
    // enable CLASS CACHING
    if (!ref.__attr) ref.__attr = {};
    // enable CHANGES storing
    if (!ref.__changes) ref.__changes = [];
    // enable CHANGES storing
    if (!ref.__children) ref.__children = [];
    // Add _root element property
    const hasRoot = parent && parent.key === ":root";
    if (!ref.__root) ref.__root = hasRoot ? element : parentRef.__root;
    // set the PATH array
    if (ENV === "test" || ENV === "development") {
        if (!parentRef) parentRef = parent.ref = {};
        if (!parentRef.__path) parentRef.__path = [];
        ref.__path = parentRef.__path.concat(element.key);
    }
};
const onlyResolveExtends = (element, parent, key, options)=>{
    const { __ref: ref } = element;
    if (!ref.__skipCreate) {
        element.tag = (0, _render.detectTag)(element);
        // if (!element.props) element.props = {}
        // Copy-paste of addCaching()
        // enable CACHING
        if (!ref.__cached) ref.__cached = {};
        if (!ref.__defineCache) ref.__defineCache = {};
        // enable EXEC
        if (!ref.__exec) ref.__exec = {};
        // enable CLASS CACHING
        if (!ref.__class) ref.__class = {};
        if (!ref.__classNames) ref.__classNames = {};
        // enable CLASS CACHING
        if (!ref.__attr) ref.__attr = {};
        // enable CHANGES storing
        if (!ref.__changes) ref.__changes = [];
        // enable CHANGES storing
        if (!ref.__children) ref.__children = [];
        // Add __root element property
        // const hasRoot = parent && parent.key === ':root'
        // if (!ref.__root) ref.__root = hasRoot ? element : parentRef.__root
        (0, _set.addMethods)(element, parent);
        (0, _state.createState)(element, parent);
        // Borrowed from createIfConditionFlag()
        if ((0, _utils.isFunction)(element.if)) {
            const ifPassed = element.if(element, element.state);
            if (!ifPassed) // const ifFragment = cacheNode({ tag: 'fragment' })
            // ref.__ifFragment = appendNode(ifFragment, parent.node)
            delete ref.__if;
            else ref.__if = true;
        } else ref.__if = true;
        /// ///
        if (element.node && ref.__if) parent[key || element.key] = element;
         // Borrowed from assignNode()
        (0, _props.createProps)(element, parent);
        if (!element.props) element.props = {};
        (0, _component.applyVariant)(element, parent);
    }
    if (element.tag !== "string" && element.tag !== "fragment") {
        (0, _iterate.throughInitialDefine)(element);
        (0, _iterate.throughInitialExec)(element);
        for(const k in element){
            if ((0, _utils.isUndefined)(element[k]) || (0, _methods.isMethod)(k) || (0, _utils.isObject)((0, _mixins.registry)[k]) || (0, _component.isVariant)(k)) continue;
            const hasDefine = element.define && element.define[k];
            const contextHasDefine = element.context && element.context.define && element.context.define[k];
            const optionsHasDefine = options.define && options.define[k];
            if (!ref.__skipCreate && (0, _mixins.registry)[k] && !optionsHasDefine) continue;
            else if (element[k] && !hasDefine && !optionsHasDefine && !contextHasDefine) create((0, _utils.exec)(element[k], element), element, k, options);
        }
    }
    parent[key || element.key] = element // Borrowed from assignNode()
    ;
    delete element.update;
    delete element.__element;
    // added by createProps
    if (element.props) {
        delete element.props.update;
        delete element.props.__element;
    }
    return element;
};
const checkIfMedia = (key)=>key.slice(0, 1) === "@";
const applyMediaProps = (element, parent, key)=>{
    const { props } = element;
    if (props) {
        props.display = "none";
        if (props[key]) props[key].display = props.display;
        else props[key] = {
            display: props.display || "block"
        };
        return element;
    } else return {
        ...element,
        props: {
            display: "none",
            [key]: {
                display: "block"
            }
        }
    };
};
exports.default = create;

},{"./node":"knagg","./tree":"aQnvi","@domql/registry":"c6QTw","@domql/event":"bmjl7","@domql/render":"26EUa","@domql/state":"5eRWK","./methods":"i5xTe","./props":"37wVo","./extend":"bjG4Z","./mixins":"dKW5S","./methods/set":"k57vt","./mixins/classList":"lOW4z","./iterate":"9obXT","@domql/utils":"fVj5t","./cache/options":"gdiJQ","./utils/component":"khsOs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"knagg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createNode", ()=>createNode);
var _utils = require("@domql/utils");
var _event = require("@domql/event");
var _render = require("@domql/render");
var _methods = require("./methods");
var _create = require("./create");
var _createDefault = parcelHelpers.interopDefault(_create);
var _iterate = require("./iterate");
var _mixins = require("./mixins");
var _applyParam = require("./applyParam");
var _utils1 = require("./utils");
"use strict";
// import { defineSetter } from './methods'
const ENV = "development";
const createNode = (element, options)=>{
    // create and assign a node
    let { node, tag, __ref: ref } = element;
    let isNewNode;
    if (!node) {
        isNewNode = true;
        if (!ref.__if) return element;
        if (tag === "shadow") node = element.node = element.parent.node.attachShadow({
            mode: "open"
        });
        else node = element.node = (0, _render.cacheNode)(element);
        // trigger `on.attachNode`
        (0, _event.triggerEventOn)("attachNode", element, options);
    }
    // node.dataset // .key = element.key
    if (ENV === "test" || ENV === "development" || options.alowRefReference) {
        node.ref = element;
        if ((0, _utils.isFunction)(node.setAttribute)) node.setAttribute("key", element.key);
    }
    // iterate through define
    (0, _iterate.throughInitialDefine)(element);
    // iterate through exec
    (0, _iterate.throughInitialExec)(element);
    if (element.tag !== "string" && element.tag !== "fragment") // apply events
    {
        if (isNewNode && (0, _utils.isObject)(element.on)) (0, _event.applyEventsOnNode)(element, options);
    }
    for(const param in element){
        const value = element[param];
        if ((0, _utils.isUndefined)(value) || (0, _methods.isMethod)(param) || (0, _utils1.isVariant)(param) || (0, _utils.isObject)((0, _mixins.registry)[param])) continue;
        const isElement = (0, _applyParam.applyParam)(param, element, options);
        if (isElement) {
            const { hasDefine, hasContextDefine } = isElement;
            if (element[param] && !hasDefine && !hasContextDefine) {
                const createAsync = ()=>(0, _createDefault.default)((0, _utils.exec)(value, element), element, param, options);
                if (element.props && element.props.lazyLoad || options.lazyLoad) window.requestAnimationFrame(()=>createAsync());
                else createAsync();
            }
        }
    }
    // node.dataset.key = key
    return element;
};
exports.default = createNode;

},{"@domql/utils":"fVj5t","@domql/event":"bmjl7","@domql/render":"26EUa","./methods":"i5xTe","./create":"c6v6x","./iterate":"9obXT","./mixins":"dKW5S","./applyParam":"3kNZR","./utils":"ehooX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bmjl7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _on = require("./on");
parcelHelpers.exportAll(_on, exports);
var _can = require("./can");
parcelHelpers.exportAll(_can, exports);
"use strict";

},{"./on":"cgoIT","./can":"32tnv","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cgoIT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "applyEvent", ()=>applyEvent);
parcelHelpers.export(exports, "triggerEventOn", ()=>triggerEventOn);
parcelHelpers.export(exports, "applyEventUpdate", ()=>applyEventUpdate);
parcelHelpers.export(exports, "triggerEventOnUpdate", ()=>triggerEventOnUpdate);
parcelHelpers.export(exports, "applyEventsOnNode", ()=>applyEventsOnNode);
var _utils = require("@domql/utils");
"use strict";
const applyEvent = (param, element, state, context, options)=>{
    return param(element, state || element.state, context || element.context, options);
};
const triggerEventOn = (param, element, options)=>{
    if (element.on && (0, _utils.isFunction)(element.on[param])) {
        const { state, context } = element;
        return applyEvent(element.on[param], element, state, context, options);
    }
};
const applyEventUpdate = (param, updatedObj, element, state, context, options)=>{
    return param(updatedObj, element, state || element.state, context || element.context, options);
};
const triggerEventOnUpdate = (param, updatedObj, element, options)=>{
    if (element.on && (0, _utils.isFunction)(element.on[param])) {
        const { state, context } = element;
        return applyEventUpdate(element.on[param], updatedObj, element, state, context, options);
    }
};
const applyEventsOnNode = (element, options)=>{
    const { node, on } = element;
    for(const param in on){
        if (param === "init" || param === "beforeClassAssign" || param === "render" || param === "renderRouter" || param === "attachNode" || param === "stateInit" || param === "stateCreated" || param === "initStateUpdated" || param === "stateUpdated" || param === "initUpdate" || param === "update") continue;
        const appliedFunction = element.on[param];
        if ((0, _utils.isFunction)(appliedFunction)) node.addEventListener(param, (event)=>{
            const { state, context } = element;
            appliedFunction(event, element, state, context, options);
        });
    }
};

},{"@domql/utils":"fVj5t","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"32tnv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "canRender", ()=>canRender);
var _report = require("@domql/report");
var _utils = require("@domql/utils");
"use strict";
const canRender = (element)=>{
    const tag = element.tag || "div";
    return (0, _utils.isValidHtmlTag)(tag) || (0, _report.report)("HTMLInvalidTag");
};

},{"@domql/report":"bSAtn","@domql/utils":"fVj5t","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"26EUa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _create = require("./create");
parcelHelpers.exportAll(_create, exports);
var _cache = require("./cache");
parcelHelpers.exportAll(_cache, exports);
var _append = require("./append");
parcelHelpers.exportAll(_append, exports);
"use strict";

},{"./create":"8fpWC","./cache":"024dR","./append":"hOvIQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8fpWC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createNode", ()=>createNode);
"use strict";
const createNode = (element)=>{};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"024dR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createHTMLNode", ()=>createHTMLNode);
parcelHelpers.export(exports, "detectTag", ()=>detectTag);
parcelHelpers.export(exports, "cacheNode", ()=>cacheNode);
var _report = require("@domql/report");
var _event = require("@domql/event");
var _utils = require("@domql/utils");
"use strict";
const cache = {};
const createHTMLNode = (element)=>{
    const { tag } = element;
    if (tag) {
        if (tag === "string") return document.createTextNode(element.text);
        else if (tag === "fragment") return document.createDocumentFragment();
        else if (tag === "svg" || tag === "path") return document.createElementNS("http://www.w3.org/2000/svg", tag);
        else return document.createElement(tag) // TODO: allow strict mode to check validity
        ;
    } else return document.createElement("div");
};
const detectTag = (element)=>{
    let { tag, key, props } = element;
    tag = (0, _utils.exec)(tag, element);
    if (tag === true) tag = key;
    if ((0, _utils.isObject)(props) && (0, _utils.isString)(props.tag)) {
        const tagExists = (0, _utils.isValidHtmlTag)(props.tag);
        if (tagExists) return props.tag;
    }
    if ((0, _utils.isString)(tag)) {
        const tagExists = (0, _utils.isValidHtmlTag)(tag);
        if (tagExists) return tag;
    } else {
        const isKeyATag = (0, _utils.isValidHtmlTag)(key);
        if (isKeyATag) return key;
    }
    return "div";
};
const cacheNode = (element)=>{
    const tag = element.tag = detectTag(element);
    if (!(0, _event.canRender)(element)) return (0, _report.report)("HTMLInvalidTag", element.tag, element);
    let cachedTag = cache[tag];
    if (!cachedTag) cachedTag = cache[tag] = createHTMLNode(element);
    const clonedNode = cachedTag.cloneNode(true);
    if (tag === "string") clonedNode.nodeValue = element.text;
    return clonedNode;
};

},{"@domql/report":"bSAtn","@domql/event":"bmjl7","@domql/utils":"fVj5t","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hOvIQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "appendNode", ()=>appendNode);
parcelHelpers.export(exports, "insertNodeAfter", ()=>insertNodeAfter);
parcelHelpers.export(exports, "insertNodeBefore", ()=>insertNodeBefore);
parcelHelpers.export(exports, "assignNode", ()=>assignNode);
"use strict";
const appendNode = (node, parentNode)=>{
    parentNode.appendChild(node);
    return node;
};
const insertNodeAfter = (node, siblingNode, parentNode)=>{
    const parent = parentNode || siblingNode.parentNode;
    if (siblingNode.nextSibling) parent?.insertBefore(node, siblingNode.nextSibling);
    else siblingNode?.insertAdjacentElement("afterend", node);
};
const insertNodeBefore = (node, siblingNode, parentNode)=>{
    (parentNode || siblingNode.parentNode)?.insertBefore(node, siblingNode);
};
const assignNode = (element, parent, key, attachOptions)=>{
    parent[key || element.key] = element;
    if (element.tag !== "shadow") {
        if (attachOptions && attachOptions.position) (attachOptions.position === "before" ? insertNodeBefore : insertNodeAfter)(element.node, attachOptions.node || parent.node);
        else appendNode(element.node, parent.node);
    }
    return element;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"i5xTe":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "spotByPath", ()=>spotByPath);
parcelHelpers.export(exports, "lookup", ()=>lookup);
parcelHelpers.export(exports, "remove", ()=>remove);
parcelHelpers.export(exports, "get", ()=>get);
parcelHelpers.export(exports, "setProps", ()=>setProps);
parcelHelpers.export(exports, "defineSetter", ()=>defineSetter);
parcelHelpers.export(exports, "keys", ()=>keys);
parcelHelpers.export(exports, "parse", ()=>parse);
parcelHelpers.export(exports, "parseDeep", ()=>parseDeep);
parcelHelpers.export(exports, "log", ()=>log);
parcelHelpers.export(exports, "nextElement", ()=>nextElement);
parcelHelpers.export(exports, "previousElement", ()=>previousElement);
parcelHelpers.export(exports, "METHODS", ()=>METHODS);
parcelHelpers.export(exports, "isMethod", ()=>isMethod);
var _utils = require("@domql/utils");
var _tree = require("../tree");
var _mixins = require("../mixins");
"use strict";
const spotByPath = function(path) {
    const element = this;
    const arr = [].concat(path);
    let active = (0, _tree.TREE)[arr[0]];
    if (!arr || !arr.length) return console.log(arr, "on", element.key, "is undefined");
    while(active.key === arr[0]){
        arr.shift();
        if (!arr.length) break;
        active = active[arr[0]];
        if (!active) return;
    }
    return active;
};
const lookup = function(key) {
    const element = this;
    let { parent } = element;
    while(parent.key !== key){
        if (parent[key]) return parent[key];
        parent = parent.parent;
        if (!parent) return;
    }
    return parent;
};
const remove = function(params) {
    const element = this;
    if ((0, _utils.isFunction)(element.node.remove)) element.node.remove();
    else if (!(0, _utils.isProduction)()) {
        console.warn("This item cant be removed");
        element.log();
    }
    delete element.parent[element.key];
};
const get = function(param) {
    const element = this;
    return element[param];
};
const setProps = function(param, options) {
    const element = this;
    if (!param || !element.props) return;
    element.update({
        props: param
    }, options);
    return element;
};
const defineSetter = (element, key, get, set)=>Object.defineProperty(element, key, {
        get,
        set
    });
const keys = function() {
    const element = this;
    const keys = [];
    for(const param in element){
        if ((0, _mixins.registry)[param] && !(0, _mixins.parseFilters).elementKeys.includes(param)) continue;
        keys.push(param);
    }
    return keys;
};
const parse = function(excl = []) {
    const element = this;
    const obj = {};
    const keyList = keys.call(element);
    keyList.forEach((v)=>{
        if (excl.includes(v)) return;
        let val = element[v];
        if (v === "state") {
            if (element.__ref && element.__ref.__hasRootState) return;
            if ((0, _utils.isFunction)(val && val.parse)) val = val.parse();
        } else if (v === "props") {
            const { __element, update, ...props } = element[v];
            obj[v] = props;
        } else if ((0, _utils.isDefined)(val)) obj[v] = val;
    });
    return obj;
};
const parseDeep = function(excl = []) {
    const element = this;
    const obj = parse.call(element, excl);
    for(const v in obj){
        if (excl.includes(v)) return;
        if ((0, _utils.isObjectLike)(obj[v])) obj[v] = parseDeep.call(obj[v], excl);
    }
    return obj;
};
const log = function(...args) {
    const element = this;
    const { __ref } = element;
    console.group(element.key);
    if (args.length) args.forEach((v)=>console.log(`%c${v}:\n`, "font-weight: bold", element[v]));
    else {
        console.log(__ref.path);
        const keys = element.keys();
        keys.forEach((v)=>console.log(`%c${v}:\n`, "font-weight: bold", element[v]));
    }
    console.groupEnd(element.key);
    return element;
};
const nextElement = function() {
    const element = this;
    const { key, parent } = element;
    const { __children } = parent.__ref;
    const currentIndex = __children.indexOf(key);
    const nextChild = __children[currentIndex + 1];
    return parent[nextChild];
};
const previousElement = function(el) {
    const element = el || this;
    const { key, parent } = element;
    const { __children } = parent.__ref;
    if (!__children) return;
    const currentIndex = __children.indexOf(key);
    return parent[__children[currentIndex - 1]];
};
const METHODS = [
    "set",
    "update",
    "remove",
    "updateContent",
    "removeContent",
    "lookup",
    "spotByPath",
    "keys",
    "parse",
    "setProps",
    "parseDeep",
    "if",
    "log",
    "nextElement",
    "previousElement"
];
const isMethod = function(param) {
    return METHODS.includes(param);
};

},{"@domql/utils":"fVj5t","../tree":"aQnvi","../mixins":"dKW5S","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dKW5S":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "attr", ()=>(0, _attrDefault.default));
parcelHelpers.export(exports, "classList", ()=>(0, _classListDefault.default));
parcelHelpers.export(exports, "content", ()=>(0, _contentDefault.default));
parcelHelpers.export(exports, "data", ()=>(0, _dataDefault.default));
parcelHelpers.export(exports, "style", ()=>(0, _styleDefault.default));
parcelHelpers.export(exports, "text", ()=>(0, _textDefault.default));
parcelHelpers.export(exports, "html", ()=>(0, _htmlDefault.default));
parcelHelpers.export(exports, "state", ()=>(0, _stateDefault.default));
parcelHelpers.export(exports, "scope", ()=>(0, _scopeDefault.default));
parcelHelpers.export(exports, "registry", ()=>(0, _registryDefault.default));
var _attr = require("./attr");
var _attrDefault = parcelHelpers.interopDefault(_attr);
var _classList = require("./classList");
var _classListDefault = parcelHelpers.interopDefault(_classList);
var _content = require("./content");
var _contentDefault = parcelHelpers.interopDefault(_content);
var _data = require("./data");
var _dataDefault = parcelHelpers.interopDefault(_data);
var _html = require("./html");
var _htmlDefault = parcelHelpers.interopDefault(_html);
var _style = require("./style");
var _styleDefault = parcelHelpers.interopDefault(_style);
var _text = require("./text");
var _textDefault = parcelHelpers.interopDefault(_text);
var _state = require("./state");
var _stateDefault = parcelHelpers.interopDefault(_state);
var _scope = require("./scope");
var _scopeDefault = parcelHelpers.interopDefault(_scope);
var _registry = require("./registry");
var _registryDefault = parcelHelpers.interopDefault(_registry);
parcelHelpers.exportAll(_registry, exports);
"use strict";

},{"./attr":"bqCoJ","./classList":"lOW4z","./content":"2oLLo","./data":"94Asz","./html":"4xRJ9","./style":"k0TD1","./text":"aqaxs","./state":"7WoDr","./scope":"ezNQc","./registry":"9HviL","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bqCoJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utils = require("@domql/utils");
var _report = require("@domql/report");
"use strict";
/**
 * Recursively add attributes to a DOM node
 */ exports.default = (params, element, node)=>{
    const { __ref } = element;
    const { __attr } = __ref;
    if ((0, _utils.isNot)("object")) (0, _report.report)("HTMLInvalidAttr", params);
    if (params) for(const attr in params){
        const val = (0, _utils.exec)(params[attr], element);
        // if (__attr[attr] === val) return
        if (val && node.setAttribute) node.setAttribute(attr, val);
        else if (node.removeAttribute) node.removeAttribute(attr);
        __attr[attr] = val;
    }
    console.groupEnd(params, __attr);
};

},{"@domql/utils":"fVj5t","@domql/report":"bSAtn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lOW4z":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "assignKeyAsClassname", ()=>assignKeyAsClassname);
parcelHelpers.export(exports, "classify", ()=>classify);
parcelHelpers.export(exports, "classList", ()=>classList);
parcelHelpers.export(exports, "applyClassListOnNode", ()=>applyClassListOnNode);
var _utils = require("@domql/utils");
"use strict";
const assignKeyAsClassname = (element)=>{
    const { key } = element;
    if (element.class === true) element.class = key;
    else if (!element.class && typeof key === "string" && key.charAt(0) === "_" && key.charAt(1) !== "_") element.class = key.slice(1);
};
const classify = (obj, element)=>{
    let className = "";
    for(const item in obj){
        const param = obj[item];
        if (typeof param === "boolean" && param) className += ` ${item}`;
        else if (typeof param === "string") className += ` ${param}`;
        else if (typeof param === "function") className += ` ${(0, _utils.exec)(param, element)}`;
    }
    return className;
};
const classList = (params, element)=>{
    if (!params) return;
    const { key } = element;
    if (params === true) params = element.class = {
        key
    };
    if ((0, _utils.isString)(params)) params = element.class = {
        default: params
    };
    if ((0, _utils.isObject)(params)) params = classify(params, element);
    // TODO: fails on string
    const className = params.replace(/\s+/g, " ").trim();
    if (element.ref) element.ref.class = className // TODO: this check is NOT needed in new DOMQL
    ;
    return className;
};
const applyClassListOnNode = (params, element, node)=>{
    const className = classList(params, element);
    node.classList = className;
    return className;
};
exports.default = (params, element, node)=>{
    applyClassListOnNode(params, element, node);
};

},{"@domql/utils":"fVj5t","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2oLLo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "updateContent", ()=>updateContent);
parcelHelpers.export(exports, "removeContent", ()=>removeContent);
parcelHelpers.export(exports, "setContent", ()=>setContent);
var _utils = require("@domql/utils");
var _set = require("../set");
var _setDefault = parcelHelpers.interopDefault(_set);
"use strict";
const updateContent = function(params, options) {
    const element = this;
    if (!element.content) return;
    if (element.content.update) element.content.update(params, options);
};
const removeContent = function(el) {
    const element = el || this;
    const { __ref } = element;
    if (element.content) {
        if (element.content.node) {
            if (element.content.tag === "fragment") element.node.innerHTML = "";
            else element.node.removeChild(element.content.node);
        }
        const { __cached } = __ref;
        if (__cached && __cached.content) {
            if (__cached.content.tag === "fragment") __cached.content.parent.node.innerHTML = "";
            else if (__cached.content && (0, _utils.isFunction)(__cached.content.remove)) __cached.content.remove();
        }
        delete element.content;
    }
};
const setContent = (param, element, node, options)=>{
    if (param && element) {
        if (element.content.update) element.content.update({}, options);
        else (0, _setDefault.default).call(element, param, options);
    }
};
exports.default = setContent;

},{"@domql/utils":"fVj5t","../set":"gPXWh","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gPXWh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utils = require("@domql/utils");
var _create = require("./create");
var _createDefault = parcelHelpers.interopDefault(_create);
var _options = require("./cache/options");
var _optionsDefault = parcelHelpers.interopDefault(_options);
var _mixins = require("./mixins");
var _content = require("./mixins/content");
"use strict";
const set = function(params, options = {}, el) {
    const element = el || this;
    const { __ref: ref, content } = element;
    const __contentRef = content && content.__ref;
    const lazyLoad = element.props && element.props.lazyLoad;
    if (ref.__noCollectionDifference || __contentRef && __contentRef.__cached && (0, _utils.deepContains)(params, content)) return content.update();
    if (options.preventContentUpdate === true) return;
    const setAsync = ()=>{
        (0, _content.removeContent)(element);
        (0, _createDefault.default)(params, element, "content", {
            ignoreChildExtend: true,
            ...(0, _mixins.registry).defaultOptions,
            ...(0, _optionsDefault.default).create,
            ...options
        });
    };
    if (params) {
        const { childExtend } = params;
        if (!childExtend && element.childExtend) params.childExtend = element.childExtend;
        if (lazyLoad) window.requestAnimationFrame(setAsync);
        else setAsync();
    }
    return element;
};
exports.default = set;

},{"@domql/utils":"fVj5t","./create":"c6v6x","./cache/options":"gdiJQ","./mixins":"dKW5S","./mixins/content":"2oLLo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gdiJQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
"use strict";
exports.default = {};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"94Asz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utils = require("@domql/utils");
var _report = require("@domql/report");
"use strict";
/**
 * Apply data parameters on the DOM nodes
 * this should only work if `showOnNode: true` is passed
 */ exports.default = (params, element, node)=>{
    if (params && params.showOnNode) {
        if (!(0, _utils.isObject)(params)) (0, _report.report)("HTMLInvalidData", params);
        // Apply data params on node
        for(const dataset in params)if (dataset !== "showOnNode") node.dataset[dataset] = (0, _utils.exec)(params[dataset], element);
    }
};

},{"@domql/utils":"fVj5t","@domql/report":"bSAtn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4xRJ9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utils = require("@domql/utils");
"use strict";
/**
 * Appends raw HTML as content
 * an original one as a child
 */ exports.default = (param, element, node)=>{
    const prop = (0, _utils.exec)(param, element);
    const { __ref } = element;
    if (prop !== __ref.__html) {
        // const parser = new window.DOMParser()
        // param = parser.parseFromString(param, 'text/html')
        if (node.nodeName === "SVG") node.textContent = prop;
        else node.innerHTML = prop;
        __ref.__html = prop;
    }
};

},{"@domql/utils":"fVj5t","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"k0TD1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utils = require("@domql/utils");
var _report = require("@domql/report");
"use strict";
/**
 * Recursively add styles to a DOM node
 */ exports.default = (params, element, node)=>{
    if (params) {
        if ((0, _utils.isObject)(params)) (0, _utils.map)(node.style, params, element);
        else (0, _report.report)("HTMLInvalidStyles", params);
    }
};

},{"@domql/utils":"fVj5t","@domql/report":"bSAtn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aqaxs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _ = require("..");
var _utils = require("@domql/utils");
"use strict";
/**
 * Creates a text node and appends into
 * an original one as a child
 */ exports.default = (param, element, node)=>{
    let prop = (0, _utils.exec)(param, element);
    if ((0, _utils.isString)(prop) && prop.includes("{{")) prop = (0, _utils.replaceLiteralsWithObjectFields)(prop, element.state);
    if (element.tag === "string") node.nodeValue = prop;
    else if (param !== undefined || param !== null) {
        if (element.__text) {
            if (element.__text.text === prop) return;
            element.__text.text = prop;
            if (element.__text.node) element.__text.node.nodeValue = prop;
        } else (0, _.create)({
            tag: "string",
            text: prop
        }, element, "__text");
    }
};

},{"..":"1qTSs","@domql/utils":"fVj5t","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7WoDr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "state", ()=>state);
var _state = require("@domql/state");
var _utils = require("@domql/utils");
"use strict";
const state = (params, element, node)=>{
    const state = (0, _utils.exec)(params, element);
    if ((0, _utils.isObject)(state)) for(const param in state){
        if ((0, _state.IGNORE_STATE_PARAMS).includes(param)) continue;
        if (!Object.hasOwnProperty.call(state, param)) continue;
        element.state[param] = (0, _utils.exec)(state[param], element);
    }
    return element;
};
exports.default = state;

},{"@domql/state":"5eRWK","@domql/utils":"fVj5t","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5eRWK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _ignore = require("./ignore");
parcelHelpers.exportAll(_ignore, exports);
var _create = require("./create");
parcelHelpers.exportAll(_create, exports);
var _updateState = require("./updateState");
parcelHelpers.exportAll(_updateState, exports);
var _methods = require("./methods");
parcelHelpers.exportAll(_methods, exports);
var _inherit = require("./inherit");
parcelHelpers.exportAll(_inherit, exports);
"use strict";

},{"./ignore":"iR985","./create":"hAE1T","./updateState":"5dir7","./methods":"9JeDc","./inherit":"jwyJH","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iR985":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "IGNORE_STATE_PARAMS", ()=>IGNORE_STATE_PARAMS);
"use strict";
const IGNORE_STATE_PARAMS = [
    "update",
    "parse",
    "clean",
    "create",
    "destroy",
    "add",
    "toggle",
    "remove",
    "apply",
    "set",
    "reset",
    "rootUpdate",
    "parentUpdate",
    "parent",
    "__element",
    "__depends",
    "__ref",
    "__children",
    "__root"
];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hAE1T":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createState", ()=>createState);
parcelHelpers.export(exports, "applyInitialState", ()=>applyInitialState);
var _event = require("@domql/event");
var _utils = require("@domql/utils");
var _ignore = require("./ignore");
var _methods = require("./methods");
var _updateState = require("./updateState");
var _inherit = require("./inherit");
"use strict";
const createState = function(element, parent, options) {
    element.state = applyInitialState(element, parent, options);
    return element.state;
};
const applyInitialState = function(element, parent, options) {
    const objectizeState = checkForTypes(element);
    if (objectizeState === false) return parent.state || {};
    else element.state = (0, _utils.deepCloneWithExtnd)(objectizeState, (0, _ignore.IGNORE_STATE_PARAMS));
    const whatInitReturns = (0, _event.triggerEventOn)("stateInit", element, options);
    if (whatInitReturns === false) return element.state;
    if ((0, _inherit.checkIfInherits)(element)) {
        const inheritedState = (0, _inherit.createInheritedState)(element, parent);
        element.state = (0, _utils.isUndefined)(inheritedState) ? {} : inheritedState;
    }
    const dependentState = applyDependentState(element, element.state);
    if (dependentState) element.state = dependentState;
    applyMethods(element);
    // trigger `on.stateCreated`
    (0, _event.triggerEventOn)("stateCreated", element);
    return element.state;
};
const applyDependentState = (element, state)=>{
    const { __ref: ref } = state;
    if (!ref) return;
    const dependentState = (0, _utils.deepCloneWithExtnd)(ref, (0, _ignore.IGNORE_STATE_PARAMS));
    const newDepends = {
        [element.key]: dependentState
    };
    ref.__depends = (0, _utils.isObject)(ref.__depends) ? {
        ...ref.__depends,
        ...newDepends
    } : newDepends;
    return dependentState;
};
const checkForTypes = (element)=>{
    const { state, __ref: ref } = element;
    if ((0, _utils.isFunction)(state)) {
        ref.__state = state;
        return (0, _utils.exec)(state, element);
    } else if ((0, _utils.is)(state)("string", "number")) {
        ref.__state = state;
        return {};
    } else if (state === true) {
        ref.__state = element.key;
        return {};
    } else if (state) {
        ref.__hasRootState = true;
        return state;
    } else return false;
};
const addProtoToArray = (state, proto)=>{
    for(const key in proto)Object.defineProperty(state, key, {
        value: proto[key],
        enumerable: false,
        configurable: true,
        writable: true // Set this to true if you want to allow changing the function later
    });
};
const applyMethods = (element)=>{
    const state = element.state;
    const ref = element.__ref;
    const proto = {
        clean: (0, _methods.clean).bind(state),
        parse: (0, _methods.parse).bind(state),
        destroy: (0, _methods.destroy).bind(state),
        update: (0, _updateState.updateState).bind(state),
        rootUpdate: (0, _methods.rootUpdate).bind(state),
        parentUpdate: (0, _methods.parentUpdate).bind(state),
        create: createState.bind(state),
        add: (0, _methods.add).bind(state),
        toggle: (0, _methods.toggle).bind(state),
        remove: (0, _methods.remove).bind(state),
        apply: (0, _methods.apply).bind(state),
        set: (0, _methods.set).bind(state),
        reset: (0, _methods.reset).bind(state),
        parent: element.parent.state,
        __element: element,
        __children: {},
        __root: ref.__root ? ref.__root.state : state
    };
    if ((0, _utils.isArray)(state)) addProtoToArray(state, proto);
    else Object.setPrototypeOf(state, proto);
    if (state.parent && state.parent.__children) state.parent.__children[element.key] = state;
};

},{"@domql/event":"bmjl7","@domql/utils":"fVj5t","./ignore":"iR985","./methods":"9JeDc","./updateState":"5dir7","./inherit":"jwyJH","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9JeDc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "parse", ()=>parse);
parcelHelpers.export(exports, "clean", ()=>clean);
parcelHelpers.export(exports, "destroy", ()=>destroy);
parcelHelpers.export(exports, "parentUpdate", ()=>parentUpdate);
parcelHelpers.export(exports, "rootUpdate", ()=>rootUpdate);
parcelHelpers.export(exports, "add", ()=>add);
parcelHelpers.export(exports, "toggle", ()=>toggle);
parcelHelpers.export(exports, "remove", ()=>remove);
parcelHelpers.export(exports, "set", ()=>set);
parcelHelpers.export(exports, "reset", ()=>reset);
parcelHelpers.export(exports, "apply", ()=>apply);
var _utils = require("@domql/utils");
var _ignore = require("./ignore");
"use strict";
const parse = function() {
    const state = this;
    if ((0, _utils.isObject)(state)) {
        const obj = {};
        for(const param in state)if (!(0, _ignore.IGNORE_STATE_PARAMS).includes(param)) obj[param] = state[param];
        return obj;
    } else if ((0, _utils.isArray)(state)) return state.filter((item)=>!(0, _ignore.IGNORE_STATE_PARAMS).includes(item));
};
const clean = function(options = {}) {
    const state = this;
    for(const param in state)if (!(0, _ignore.IGNORE_STATE_PARAMS).includes(param)) delete state[param];
    if (!options.preventStateUpdate) state.update(state, {
        replace: true,
        ...options
    });
    return state;
};
const destroy = function(options = {}) {
    const state = this;
    const element = state.__element;
    const stateKey = element.__ref.__state;
    if ((0, _utils.isString)(stateKey)) {
        element.parent.state.remove(stateKey, {
            isHoisted: true,
            ...options
        });
        return element.state;
    }
    delete element.state;
    element.state = state.parent;
    if (state.parent) delete state.parent.__children[element.key];
    if (state.__children) for(const key in state.__children){
        const child = state.__children[key];
        if (child.state) {
            if ((0, _utils.isArray)(child.state)) Object.defineProperty(child.state, "parent", {
                value: state.parent,
                enumerable: false,
                configurable: true,
                writable: true // Set this to true if you want to allow changing the function later
            });
            else Object.setPrototypeOf(child, {
                parent: state.parent
            });
        }
    }
    element.state.update({}, {
        isHoisted: true,
        ...options
    });
    return element.state;
};
const parentUpdate = function(obj, options = {}) {
    const state = this;
    if (!state || !state.parent) return;
    return state.parent.update(obj, {
        isHoisted: true,
        ...options
    });
};
const rootUpdate = function(obj, options = {}) {
    const state = this;
    if (!state) return;
    const rootState = state.__element.__ref.__root.state;
    return rootState.update(obj, {
        isHoisted: false,
        ...options
    });
};
const add = function(value, options = {}) {
    const state = this;
    if ((0, _utils.isArray)(state)) {
        state.push(value);
        state.update(state.parse(), {
            overwrite: "replace",
            ...options
        });
    } else if ((0, _utils.isObject)(state)) {
        const key = Object.keys(state).length;
        state.update({
            [key]: value
        }, options);
    }
};
const toggle = function(key, options = {}) {
    const state = this;
    state.update({
        [key]: !state[key]
    }, options);
};
const remove = function(key, options = {}) {
    const state = this;
    if ((0, _utils.isArray)(state)) (0, _utils.removeFromArray)(state, key);
    if ((0, _utils.isObject)(state)) (0, _utils.removeFromObject)(state, key);
    return state.update(state.parse(), {
        replace: true,
        ...options
    });
};
const set = function(val, options = {}) {
    const state = this;
    const value = (0, _utils.deepCloneWithExtnd)(val);
    return state.clean({
        preventStateUpdate: true,
        ...options
    }).update(value, {
        replace: true,
        ...options
    });
};
const reset = function(options = {}) {
    const state = this;
    const value = (0, _utils.deepCloneWithExtnd)(state.parse());
    return state.set(value, {
        replace: true,
        ...options
    });
};
const apply = function(func, options = {}) {
    const state = this;
    if ((0, _utils.isFunction)(func)) {
        func(state);
        return state.update(state.parse(), {
            replace: true,
            ...options
        });
    }
};

},{"@domql/utils":"fVj5t","./ignore":"iR985","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5dir7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "updateState", ()=>updateState);
var _report = require("@domql/report");
var _event = require("@domql/event");
var _ignore = require("./ignore");
var _utils = require("@domql/utils");
var _inherit = require("./inherit");
"use strict";
const STATE_UPDATE_OPTIONS = {
    overwrite: true,
    preventHoistElementUpdate: false,
    updateByState: true,
    isHoisted: true,
    execStateFunction: true
};
const updateState = function(obj, options = STATE_UPDATE_OPTIONS) {
    const state = this;
    const element = state.__element;
    if (!options.updateByState) (0, _utils.merge)(options, STATE_UPDATE_OPTIONS);
    if (!state.__element) (0, _report.report)("ElementOnStateIsNotDefined");
    if (options.preventInheritAtCurrentState === true) options.preventInheritAtCurrentState = state;
    else if (options.preventInheritAtCurrentState) return;
    if (!options.preventInitStateUpdateListener) {
        const initStateUpdateReturns = (0, _event.triggerEventOnUpdate)("initStateUpdated", obj, element, options);
        if (initStateUpdateReturns === false) return element;
    }
    applyOverwrite(state, obj, options);
    const updateIsHoisted = hoistStateUpdate(state, obj, options);
    if (updateIsHoisted) return state;
    updateDependentState(state, obj, options);
    applyElementUpdate(state, obj, options);
    if (!options.preventStateUpdateListener) (0, _event.triggerEventOnUpdate)("stateUpdated", obj, element, options);
    return state;
};
const applyOverwrite = (state, obj, options)=>{
    const { overwrite } = options;
    if (!overwrite) return;
    const shallow = overwrite === "shallow";
    const merge = overwrite === "merge";
    if (merge) {
        (0, _utils.deepMerge)(state, obj, (0, _ignore.IGNORE_STATE_PARAMS));
        return;
    }
    const overwriteFunc = shallow ? (0, _utils.overwriteShallow) : (0, _utils.overwriteDeep);
    overwriteFunc(state, obj, (0, _ignore.IGNORE_STATE_PARAMS));
};
const hoistStateUpdate = (state, obj, options)=>{
    const element = state.__element;
    const { parent, __ref: ref } = element;
    const stateKey = ref.__state;
    const stateType = ref.__stateType;
    if (!stateKey) return;
    const asksForInherit = (0, _inherit.checkIfInherits)(element);
    const inheritedState = (0, _inherit.findInheritedState)(element, parent, {
        returnParent: true
    });
    const shouldPropagateState = asksForInherit && inheritedState && !options.stopStatePropagation;
    if (!shouldPropagateState) return;
    const isStringState = stateType === "string" || stateType === "number" || stateType === "boolean";
    const value = isStringState ? state.value : state.parse();
    const passedValue = isStringState ? state.value : obj;
    const findGrandParentState = (0, _inherit.getParentStateInKey)(stateKey, parent.state);
    const changesValue = (0, _inherit.createChangesByKey)(stateKey, passedValue);
    const targetParent = findGrandParentState || parent.state;
    if (options.replace) (0, _utils.overwriteDeep)(targetParent, changesValue || value) // check with createChangesByKey
    ;
    targetParent.update(changesValue, {
        execStateFunction: false,
        isHoisted: true,
        ...options,
        preventUpdate: options.preventHoistElementUpdate,
        overwrite: !options.replace
    });
    const hasNotUpdated = options.preventUpdate !== true || !options.preventHoistElementUpdate;
    if (!options.preventStateUpdateListener && hasNotUpdated) (0, _event.triggerEventOnUpdate)("stateUpdated", obj, element, options);
    return true;
};
const updateDependentState = (state, obj, options)=>{
    if (!state.__depends) return;
    for(const el in state.__depends){
        const dependentState = state.__depends[el];
        dependentState.clean().update(state.parse(), options);
    }
};
const applyElementUpdate = (state, obj, options)=>{
    const element = state.__element;
    if (options.preventUpdate !== true) element.update({}, {
        ...options,
        updateByState: true
    });
    else if (options.preventUpdate === "recursive") element.update({}, {
        ...options,
        isHoisted: false,
        updateByState: true,
        preventUpdate: true
    });
};

},{"@domql/report":"bSAtn","@domql/event":"bmjl7","./ignore":"iR985","@domql/utils":"fVj5t","./inherit":"jwyJH","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jwyJH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getParentStateInKey", ()=>getParentStateInKey);
parcelHelpers.export(exports, "getChildStateInKey", ()=>getChildStateInKey);
parcelHelpers.export(exports, "findInheritedState", ()=>findInheritedState);
parcelHelpers.export(exports, "createInheritedState", ()=>createInheritedState);
parcelHelpers.export(exports, "checkIfInherits", ()=>checkIfInherits);
parcelHelpers.export(exports, "isState", ()=>isState);
parcelHelpers.export(exports, "createChangesByKey", ()=>createChangesByKey);
var _utils = require("@domql/utils");
var _ignore = require("./ignore");
"use strict";
const getParentStateInKey = (stateKey, parentState)=>{
    if (!stateKey.includes("../")) return;
    const arr = stateKey.split("../");
    const arrLength = arr.length - 1;
    for(let i = 0; i < arrLength; i++){
        if (!parentState.parent) return null;
        parentState = parentState.parent;
    }
    return parentState;
};
const getChildStateInKey = (stateKey, parentState, options = {})=>{
    const arr = stateKey.split("/");
    const arrLength = arr.length - 1;
    for(let i = 0; i < arrLength; i++){
        const childKey = arr[i];
        const grandChildKey = arr[i + 1];
        if (childKey === "__proto__" || grandChildKey === "__proto__") return;
        let childInParent = parentState[childKey];
        if (!childInParent) childInParent = parentState[childKey] = {} // check for array
        ;
        if (!childInParent[grandChildKey]) childInParent[grandChildKey] = {} // check for array
        ;
        stateKey = grandChildKey;
        parentState = childInParent;
    }
    if (options.returnParent) return parentState;
    return parentState[stateKey];
};
const findInheritedState = (element, parent, options = {})=>{
    const ref = element.__ref;
    let stateKey = ref.__state;
    if (!checkIfInherits(element)) return;
    let parentState = parent.state;
    const findGrandParentState = getParentStateInKey(stateKey, parent.state);
    if (findGrandParentState) {
        parentState = findGrandParentState;
        stateKey = stateKey.replaceAll("../", "");
    }
    if (!parentState) return;
    return getChildStateInKey(stateKey, parentState, options);
};
const createInheritedState = (element, parent)=>{
    const ref = element.__ref;
    const inheritedState = findInheritedState(element, parent);
    if ((0, _utils.isUndefined)(inheritedState)) return element.state;
    if ((0, _utils.is)(inheritedState)("object", "array")) return (0, _utils.deepCloneWithExtnd)(inheritedState, (0, _ignore.IGNORE_STATE_PARAMS));
    else if ((0, _utils.is)(inheritedState)("string", "number", "boolean")) {
        ref.__stateType = typeof inheritedState;
        return {
            value: inheritedState
        };
    }
    console.warn(ref.__state, "is not present. Replacing with", {});
};
const checkIfInherits = (element)=>{
    const ref = element.__ref;
    const stateKey = ref.__state;
    if (stateKey && (0, _utils.is)(stateKey)("number", "string", "boolean")) return true;
    return false;
};
const isState = function(state) {
    if (!(0, _utils.isObjectLike)(state)) return false;
    return state.update && state.parse && state.clean && state.create && state.parent && state.destroy && state.rootUpdate && state.parentUpdate && state.toggle && state.add && state.apply && state.__element && state.__children;
// return arrayContainsOtherArray(keys, ['update', 'parse', 'clean', 'create', 'parent', 'rootUpdate'])
};
const createChangesByKey = (path, value)=>{
    if (!path) return value || {};
    const keys = path.split("/");
    const obj = {};
    let ref = obj;
    keys.forEach((key, index)=>{
        ref[key] = index === keys.length - 1 ? value || {} : {};
        ref = ref[key];
    });
    return obj;
};

},{"@domql/utils":"fVj5t","./ignore":"iR985","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ezNQc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utils = require("@domql/utils");
"use strict";
/**
 * Apply data parameters on the DOM nodes
 * this should only work if `showOnNode: true` is passed
 */ exports.default = (params, element, node)=>{
    if (!(0, _utils.isObject)(params)) return;
    // Apply data params on node
    for(const scopeItem in params){
        const value = params[scopeItem];
        if ((0, _utils.isFunction)(value)) element.scope[scopeItem] = value.bind(element);
        else element.scope[scopeItem] = value;
    }
};

},{"@domql/utils":"fVj5t","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9HviL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "parseFilters", ()=>parseFilters);
var _ = require(".");
"use strict";
exports.default = {
    attr: (0, _.attr),
    style: (0, _.style),
    text: (0, _.text),
    html: (0, _.html),
    content: (0, _.content),
    data: (0, _.data),
    class: (0, _.classList),
    state: (0, _.state),
    scope: (0, _.scope),
    deps: (param, el)=>param || el.parent.deps,
    extend: {},
    childExtend: {},
    childExtendRecursive: {},
    props: {},
    path: {},
    if: {},
    define: {},
    transform: {},
    __name: {},
    __ref: {},
    __hash: {},
    __text: {},
    nextElement: {},
    previousElement: {},
    key: {},
    tag: {},
    query: {},
    parent: {},
    node: {},
    set: {},
    update: {},
    setProps: {},
    remove: {},
    updateContent: {},
    removeContent: {},
    lookup: {},
    spotByPath: {},
    keys: {},
    log: {},
    parse: {},
    parseDeep: {},
    on: {},
    component: {},
    context: {},
    $setStateCollection: {},
    $setCollection: {},
    $setPropsCollection: {}
};
const parseFilters = {
    elementKeys: [
        "tag",
        "text",
        "style",
        "attr",
        "class",
        "state",
        "props",
        "data",
        "content",
        "html",
        "on",
        "key"
    ],
    propsKeys: [
        "__element",
        "update"
    ],
    stateKeys: []
};

},{".":"dKW5S","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9obXT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "throughInitialExec", ()=>throughInitialExec);
parcelHelpers.export(exports, "throughUpdatedExec", ()=>throughUpdatedExec);
parcelHelpers.export(exports, "throughInitialDefine", ()=>throughInitialDefine);
parcelHelpers.export(exports, "throughUpdatedDefine", ()=>throughUpdatedDefine);
var _utils = require("@domql/utils");
var _utils1 = require("./utils");
var _methods = require("./methods");
"use strict";
const throughInitialExec = (element, exclude = {})=>{
    const { __ref: ref } = element;
    for(const param in element){
        if (exclude[param]) continue;
        const prop = element[param];
        if ((0, _utils.isFunction)(prop) && !(0, _methods.isMethod)(param) && !(0, _utils1.isVariant)(param)) {
            ref.__exec[param] = prop;
            element[param] = prop(element, element.state);
        // if (isComponent)
        }
    }
};
const throughUpdatedExec = (element, options = {
    excludes: (0, _utils1.METHODS_EXL)
})=>{
    const { __ref: ref } = element;
    const changes = {};
    for(const param in ref.__exec){
        const prop = element[param];
        const isDefinedParam = ref.__defineCache[param];
        if (isDefinedParam) continue;
        const newExec = ref.__exec[param](element, element.state, element.context);
        const execReturnsString = (0, _utils.isString)(newExec) || (0, _utils.isNumber)(newExec);
        // if (prop && prop.node && execReturnsString) {
        if (prop && prop.node && execReturnsString) (0, _utils1.overwrite)(prop, {
            text: newExec
        }, options);
        else if (newExec !== prop) {
            if ((0, _utils1.checkIfKeyIsComponent)(param)) {
                const { extend, ...newElem } = (0, _utils1.extendizeByKey)(newExec, element, param);
                (0, _utils1.overwrite)(prop, newElem, options);
            // } else {
            //   overwrite(prop, newExec, options)
            } else {
                ref.__cached[param] = changes[param] = prop;
                element[param] = newExec;
            }
        }
    }
    return changes;
};
const throughInitialDefine = (element)=>{
    const { define, context, __ref: ref } = element;
    let defineObj = {};
    const hasGlobalDefine = context && (0, _utils.isObject)(context.define);
    if ((0, _utils.isObject)(define)) defineObj = {
        ...define
    };
    if (hasGlobalDefine) defineObj = {
        ...defineObj,
        ...context.define
    };
    for(const param in defineObj){
        let elementProp = element[param];
        if ((0, _utils.isFunction)(elementProp) && !(0, _methods.isMethod)(param) && !(0, _utils1.isVariant)(param)) {
            ref.__exec[param] = elementProp;
            const execParam = elementProp = (0, _utils.exec)(elementProp, element);
            if (execParam) {
                elementProp = element[param] = execParam.parse ? execParam.parse() : execParam;
                ref.__defineCache[param] = elementProp;
            }
        }
        const execParam = defineObj[param](elementProp, element, element.state, element.context);
        if (execParam) element[param] = execParam;
    }
    return element;
};
const throughUpdatedDefine = (element)=>{
    const { context, define, __ref: ref } = element;
    const changes = {};
    let obj = {};
    if ((0, _utils.isObject)(define)) obj = {
        ...define
    };
    if ((0, _utils.isObject)(context && context.define)) obj = {
        ...obj,
        ...context.define
    };
    for(const param in obj){
        const execParam = ref.__exec[param];
        if (execParam) ref.__defineCache[param] = execParam(element, element.state, element.context);
        const cached = (0, _utils.exec)(ref.__defineCache[param], element);
        const newExecParam = obj[param](cached, element, element.state, element.context);
        if (newExecParam) element[param] = newExecParam;
    }
    return changes;
};

},{"@domql/utils":"fVj5t","./utils":"ehooX","./methods":"i5xTe","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ehooX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _object = require("./object");
parcelHelpers.exportAll(_object, exports);
var _extendUtils = require("./extendUtils");
parcelHelpers.exportAll(_extendUtils, exports);
var _component = require("./component");
parcelHelpers.exportAll(_component, exports);
"use strict";

},{"./object":"8hvZa","./extendUtils":"4wxiw","./component":"khsOs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8hvZa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "METHODS_EXL", ()=>METHODS_EXL);
parcelHelpers.export(exports, "deepMerge", ()=>deepMerge);
parcelHelpers.export(exports, "clone", ()=>clone);
parcelHelpers.export(exports, "deepClone", ()=>deepClone);
parcelHelpers.export(exports, "overwrite", ()=>overwrite);
parcelHelpers.export(exports, "overwriteShallow", ()=>overwriteShallow);
parcelHelpers.export(exports, "overwriteDeep", ()=>overwriteDeep);
parcelHelpers.export(exports, "mergeIfExisted", ()=>mergeIfExisted);
parcelHelpers.export(exports, "mergeArray", ()=>mergeArray);
parcelHelpers.export(exports, "mergeAndCloneIfArray", ()=>mergeAndCloneIfArray);
parcelHelpers.export(exports, "flattenRecursive", ()=>flattenRecursive);
var _utils = require("@domql/utils");
var _state = require("@domql/state");
var _props = require("../props");
var _methods = require("../methods");
"use strict";
const METHODS_EXL = (0, _utils.joinArrays)([
    "node",
    "state",
    "context",
    "extend"
], (0, _methods.METHODS), (0, _state.IGNORE_STATE_PARAMS), (0, _props.IGNORE_PROPS_PARAMS));
const deepMerge = (element, extend, exclude = METHODS_EXL)=>{
    for(const e in extend){
        if (exclude.includes(e)) continue;
        const elementProp = element[e];
        const extendProp = extend[e];
        if (elementProp === undefined) element[e] = extendProp;
        else if ((0, _utils.isObjectLike)(elementProp) && (0, _utils.isObject)(extendProp)) deepMerge(elementProp, extendProp);
    }
    return element;
};
const clone = (obj, exclude = METHODS_EXL)=>{
    const o = {};
    for(const e in obj){
        if (exclude.includes(e)) continue;
        o[e] = obj[e];
    }
    return o;
};
const deepClone = (obj, exclude = METHODS_EXL)=>{
    const o = (0, _utils.isArray)(obj) ? [] : {};
    for(const e in obj){
        if (exclude.includes(e)) continue;
        let objProp = obj[e];
        if (e === "extend" && (0, _utils.isArray)(objProp)) objProp = mergeArray(objProp, exclude);
        if ((0, _utils.isObjectLike)(objProp)) o[e] = deepClone(objProp, exclude);
        else o[e] = objProp;
    }
    return o;
};
const overwrite = (element, params, options)=>{
    const changes = {};
    const { __ref } = element;
    const { __exec, __cached } = __ref;
    for(const e in params){
        if (e === "props" || e === "state" || e === "__ref") continue;
        const elementProp = element[e];
        const paramsProp = params[e];
        if (paramsProp !== undefined) {
            __cached[e] = changes[e] = elementProp;
            element[e] = paramsProp;
        }
        if (options.cleanExec) delete __exec[e];
    }
    return changes;
};
const overwriteShallow = (obj, params, exclude = METHODS_EXL)=>{
    for(const e in params){
        if (exclude.includes(e)) continue;
        obj[e] = params[e];
    }
    return obj;
};
const overwriteDeep = (obj, params, exclude = METHODS_EXL)=>{
    for(const e in params){
        if (exclude.includes(e)) continue;
        const objProp = obj[e];
        const paramsProp = params[e];
        if ((0, _utils.isObjectLike)(objProp) && (0, _utils.isObjectLike)(paramsProp)) overwriteDeep(objProp, paramsProp);
        else if (paramsProp !== undefined) obj[e] = paramsProp;
    }
    return obj;
};
const mergeIfExisted = (a, b)=>{
    if ((0, _utils.isObjectLike)(a) && (0, _utils.isObjectLike)(b)) return deepMerge(a, b);
    return a || b;
};
const mergeArray = (arr, exclude = [
    "parent",
    "node",
    "__element",
    "state",
    "context",
    "__ref"
])=>{
    return arr.reduce((a, c)=>deepMerge(a, deepClone(c, exclude)), {});
};
const mergeAndCloneIfArray = (obj)=>{
    return (0, _utils.isArray)(obj) ? mergeArray(obj) : deepClone(obj);
};
const flattenRecursive = (param, prop, stack = [])=>{
    const objectized = mergeAndCloneIfArray(param);
    stack.push(objectized);
    const extendOfExtend = objectized[prop];
    if (extendOfExtend) flattenRecursive(extendOfExtend, prop, stack);
    delete objectized[prop];
    return stack;
};

},{"@domql/utils":"fVj5t","@domql/state":"5eRWK","../props":"37wVo","../methods":"i5xTe","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"37wVo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _ignore = require("./ignore");
parcelHelpers.exportAll(_ignore, exports);
var _create = require("./create");
parcelHelpers.exportAll(_create, exports);
var _inherit = require("./inherit");
parcelHelpers.exportAll(_inherit, exports);
var _update = require("./update");
parcelHelpers.exportAll(_update, exports);
"use strict";

},{"./ignore":"c6r3e","./create":"3aLuE","./inherit":"inmW3","./update":"d67QD","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"c6r3e":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "IGNORE_PROPS_PARAMS", ()=>IGNORE_PROPS_PARAMS);
"use strict";
const IGNORE_PROPS_PARAMS = [
    "update",
    "__element"
];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3aLuE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "syncProps", ()=>syncProps);
parcelHelpers.export(exports, "createProps", ()=>createProps);
var _utils = require("@domql/utils");
var _ignore = require("./ignore");
var _inherit = require("./inherit");
"use strict";
const createPropsStack = (element, parent)=>{
    const { props, __ref } = element;
    const propsStack = __ref.__props = (0, _inherit.inheritParentProps)(element, parent);
    if ((0, _utils.isObject)(props)) propsStack.push(props);
    else if (props === "inherit" && parent.props) propsStack.push(parent.props);
    else if (props) propsStack.push(props);
    if ((0, _utils.isArray)(__ref.__extend)) __ref.__extend.forEach((extend)=>{
        if (extend.props && extend.props !== props) propsStack.push(extend.props);
    });
    __ref.__props = propsStack;
    return propsStack;
};
const syncProps = (props, element)=>{
    element.props = {};
    const mergedProps = {};
    props.forEach((v)=>{
        if ((0, _ignore.IGNORE_PROPS_PARAMS).includes(v)) return;
        const execProps = (0, _utils.exec)(v, element);
        // TODO: check if this failing the function props merge
        // if (isObject(execProps) && execProps.__element) return
        // it was causing infinite loop at early days
        element.props = (0, _utils.deepMerge)(mergedProps, (0, _utils.deepClone)(execProps, (0, _ignore.IGNORE_PROPS_PARAMS)), (0, _ignore.IGNORE_PROPS_PARAMS));
    });
    element.props = mergedProps;
    const methods = {
        update: update.bind(element.props),
        __element: element
    };
    Object.setPrototypeOf(element.props, methods);
    return element.props;
};
const createProps = function(element, parent, cached) {
    const { __ref: ref } = element;
    // if (element.parent.key === '0' && element.key === 'editor') {
    //   debugger
    // }
    const applyProps = ()=>{
        const propsStack = cached || createPropsStack(element, parent);
        if (propsStack.length) {
            ref.__props = propsStack;
            syncProps(propsStack, element);
        } else {
            ref.__props = cached || [];
            element.props = {};
        }
    };
    if (ref.__if) applyProps();
    else try {
        applyProps();
    } catch  {
        element.props = {};
        ref.__props = cached || [];
    }
    const methods = {
        update: update.bind(element.props),
        __element: element
    };
    Object.setPrototypeOf(element.props, methods);
    return element;
};
function update(props, options) {
    const element = this.__element;
    element.update({
        props
    }, options);
}

},{"@domql/utils":"fVj5t","./ignore":"c6r3e","./inherit":"inmW3","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"inmW3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "inheritParentProps", ()=>inheritParentProps);
var _utils = require("@domql/utils");
"use strict";
const objectizeStringProperty = (propValue)=>{
    if ((0, _utils.is)(propValue)("string", "number")) return {
        inheritedString: propValue
    };
    return propValue;
};
const inheritParentProps = (element, parent)=>{
    let propsStack = [];
    const parentProps = (0, _utils.exec)(parent, parent.state).props;
    const matchParent = parent.props && parentProps[element.key];
    const matchParentIsString = (0, _utils.isString)(matchParent);
    const matchParentChildProps = parentProps && parentProps.childProps;
    if (matchParent) {
        if (matchParentIsString) {
            const inheritedStringExists = propsStack.filter((v)=>v.inheritedString)[0];
            if (inheritedStringExists) inheritedStringExists.inheritedString = matchParent;
            else propsStack = [].concat(objectizeStringProperty(matchParent), propsStack);
        } else propsStack.push(objectizeStringProperty(matchParent));
    }
    if (matchParentChildProps) propsStack.push(matchParentChildProps);
    return propsStack;
};

},{"@domql/utils":"fVj5t","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d67QD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "updateProps", ()=>updateProps);
var _create = require("./create");
var _inherit = require("./inherit");
"use strict";
const updateProps = (newProps, element, parent)=>{
    const { __ref } = element;
    let propsStack = __ref.__props;
    const parentProps = (0, _inherit.inheritParentProps)(element, parent);
    if (parentProps.length) propsStack = __ref.__props = [].concat(parentProps, propsStack);
    if (newProps) propsStack = __ref.__props = [].concat(newProps, propsStack);
    if (propsStack) (0, _create.syncProps)(propsStack, element);
    return element;
};

},{"./create":"3aLuE","./inherit":"inmW3","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4wxiw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "generateHash", ()=>generateHash);
parcelHelpers.export(exports, "extendStackRegistry", ()=>extendStackRegistry);
parcelHelpers.export(exports, "extendCachedRegistry", ()=>extendCachedRegistry);
parcelHelpers.export(exports, "getHashedExtend", ()=>getHashedExtend);
parcelHelpers.export(exports, "setHashedExtend", ()=>setHashedExtend);
parcelHelpers.export(exports, "getExtendStackRegistry", ()=>getExtendStackRegistry);
parcelHelpers.export(exports, "extractArrayExtend", ()=>extractArrayExtend);
parcelHelpers.export(exports, "deepExtend", ()=>deepExtend);
parcelHelpers.export(exports, "flattenExtend", ()=>flattenExtend);
parcelHelpers.export(exports, "deepCloneExtend", ()=>deepCloneExtend);
parcelHelpers.export(exports, "deepMergeExtend", ()=>deepMergeExtend);
parcelHelpers.export(exports, "cloneAndMergeArrayExtend", ()=>cloneAndMergeArrayExtend);
parcelHelpers.export(exports, "fallbackStringExtend", ()=>fallbackStringExtend);
parcelHelpers.export(exports, "jointStacks", ()=>jointStacks);
parcelHelpers.export(exports, "getExtendStack", ()=>getExtendStack);
parcelHelpers.export(exports, "getExtendMerged", ()=>getExtendMerged);
var _utils = require("@domql/utils");
"use strict";
const ENV = "development";
const generateHash = ()=>Math.random().toString(36).substring(2);
const extendStackRegistry = {};
const extendCachedRegistry = {};
const getHashedExtend = (extend)=>{
    return extendStackRegistry[extend.__hash];
};
const setHashedExtend = (extend, stack)=>{
    const hash = generateHash();
    if (!(0, _utils.isString)(extend)) extend.__hash = hash;
    extendStackRegistry[hash] = stack;
    return stack;
};
const getExtendStackRegistry = (extend, stack)=>{
    if (extend.__hash) return stack.concat(getHashedExtend(extend));
    return setHashedExtend(extend, stack) // stack .concat(hashedExtend)
    ;
};
const extractArrayExtend = (extend, stack, context)=>{
    extend.forEach((each)=>flattenExtend(each, stack, context));
    return stack;
};
const deepExtend = (extend, stack, context)=>{
    const extendOflattenExtend = extend.extend;
    if (extendOflattenExtend) flattenExtend(extendOflattenExtend, stack, context);
    return stack;
};
const flattenExtend = (extend, stack, context)=>{
    if (!extend) return stack;
    if ((0, _utils.isArray)(extend)) return extractArrayExtend(extend, stack, context);
    if ((0, _utils.isString)(extend)) extend = fallbackStringExtend(extend, context);
    stack.push(extend);
    if (extend.extend) deepExtend(extend, stack, context);
    return stack;
};
const deepCloneExtend = (obj)=>{
    const o = {};
    for(const prop in obj){
        if ([
            "parent",
            "node",
            "__element"
        ].indexOf(prop) > -1) continue;
        const objProp = obj[prop];
        if ((0, _utils.isObject)(objProp)) o[prop] = deepCloneExtend(objProp);
        else if ((0, _utils.isArray)(objProp)) o[prop] = objProp.map((x)=>x);
        else o[prop] = objProp;
    }
    return o;
};
const deepMergeExtend = (element, extend)=>{
    for(const e in extend){
        if ([
            "parent",
            "node",
            "__element"
        ].indexOf(e) > -1) continue;
        const elementProp = element[e];
        const extendProp = extend[e];
        if (elementProp === undefined) element[e] = extendProp;
        else if ((0, _utils.isObject)(elementProp) && (0, _utils.isObject)(extendProp)) deepMergeExtend(elementProp, extendProp);
        else if ((0, _utils.isArray)(elementProp) && (0, _utils.isArray)(extendProp)) element[e] = elementProp.concat(extendProp);
        else if ((0, _utils.isArray)(elementProp) && (0, _utils.isObject)(extendProp)) {
            const obj = deepMergeExtend({}, elementProp);
            element[e] = deepMergeExtend(obj, extendProp);
        } else if (elementProp === undefined && (0, _utils.isFunction)(extendProp)) element[e] = extendProp;
    }
    return element;
};
const cloneAndMergeArrayExtend = (stack)=>{
    return stack.reduce((a, c)=>{
        return deepMergeExtend(a, deepCloneExtend(c));
    }, {});
};
const fallbackStringExtend = (extend, context, options = {})=>{
    const COMPONENTS = context && context.components || options.components;
    if ((0, _utils.isString)(extend)) {
        const componentExists = COMPONENTS[extend] || COMPONENTS["smbls." + extend];
        if (COMPONENTS && componentExists) return componentExists;
        else {
            if (ENV !== "test" || ENV !== "development") console.warn("Extend is string but component was not found:", extend);
            return {};
        }
    }
    return extend;
};
const jointStacks = (extendStack, childExtendStack)=>{
    return [].concat(extendStack.slice(0, 1)).concat(childExtendStack.slice(0, 1)).concat(extendStack.slice(1)).concat(childExtendStack.slice(1));
};
const getExtendStack = (extend, context)=>{
    if (!extend) return [];
    if (extend.__hash) return getHashedExtend(extend) || [];
    const stack = flattenExtend(extend, [], context);
    return getExtendStackRegistry(extend, stack);
};
const getExtendMerged = (extend)=>{
    const stack = getExtendStack(extend);
    return cloneAndMergeArrayExtend(stack);
} // export const replaceStringsWithComponents = (stack, context, options) => {
 //   const COMPONENTS = (context && context.components) || options.components
 //   return stack.map(v => {
 //     if (isString(v)) {
 //       const component = COMPONENTS[v]
 //       return component
 //     }
 //     if (isString(v.extend)) {
 //       v.extend = getExtendMerged(COMPONENTS[v.extend])
 //     }
 //     return v
 //   })
 // }
;

},{"@domql/utils":"fVj5t","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"khsOs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "checkIfKeyIsComponent", ()=>checkIfKeyIsComponent);
parcelHelpers.export(exports, "addAdditionalExtend", ()=>addAdditionalExtend);
parcelHelpers.export(exports, "extendizeByKey", ()=>extendizeByKey);
parcelHelpers.export(exports, "applyKeyComponentAsExtend", ()=>applyKeyComponentAsExtend);
parcelHelpers.export(exports, "applyComponentFromContext", ()=>applyComponentFromContext);
parcelHelpers.export(exports, "isVariant", ()=>isVariant);
parcelHelpers.export(exports, "hasVariantProp", ()=>hasVariantProp);
parcelHelpers.export(exports, "overwriteVariant", ()=>overwriteVariant);
parcelHelpers.export(exports, "applyVariant", ()=>applyVariant);
var _utils = require("@domql/utils");
var _extend = require("../extend");
"use strict";
const ENV = "development";
const checkIfKeyIsComponent = (key)=>{
    const isFirstKeyString = (0, _utils.isString)(key);
    if (!isFirstKeyString) return;
    const firstCharKey = key.slice(0, 1);
    return /^[A-Z]*$/.test(firstCharKey);
};
const addAdditionalExtend = (newExtend, element)=>{
    const { extend: elementExtend } = element;
    const originalArray = (0, _utils.isArray)(elementExtend) ? elementExtend : [
        elementExtend
    ];
    const receivedArray = (0, _utils.isArray)(newExtend) ? newExtend : [
        newExtend
    ];
    const extend = (0, _utils.joinArrays)(receivedArray, originalArray);
    return {
        ...element,
        extend
    };
};
const extendizeByKey = (element, parent, key)=>{
    const { context, tag, extend, props, attr, state, childExtend, childProps, on, if: condition } = element;
    const hasComponentAttrs = extend || childExtend || props || state || on || condition || attr;
    const extendFromKey = key.includes("+") ? key.split("+") : key.includes("_") ? key.split("_")[0] : key.includes(".") ? key.split(".")[0] : key;
    const isExtendKeyComponent = context?.components[extendFromKey];
    if (element === isExtendKeyComponent) return element;
    else if (!hasComponentAttrs || childProps) return {
        extend: extendFromKey,
        tag,
        props: {
            ...element
        }
    };
    else if (!extend || extend === true) return {
        ...element,
        tag,
        extend: extendFromKey
    };
    else if (extend) return addAdditionalExtend(extendFromKey, element);
    else if ((0, _utils.isFunction)(element)) return {
        extend: extendFromKey,
        tag,
        props: {
            ...(0, _utils.exec)(element, parent)
        }
    };
};
const applyKeyComponentAsExtend = (element, parent, key)=>{
    return extendizeByKey(element, parent, key) || element;
};
const applyComponentFromContext = (element, parent, options)=>{
    const { context } = element;
    if (!context || !context.components) return;
    const { components } = context;
    const { extend } = element;
    const execExtend = (0, _utils.exec)(extend, element);
    if ((0, _utils.isString)(execExtend)) {
        const componentExists = components[execExtend] || components["smbls." + execExtend];
        if (componentExists) element.extend = componentExists;
        else {
            if ((ENV === "test" || ENV === "development") && options.verbose) {
                console.warn(execExtend, "is not in library", components, element);
                console.warn("replacing with ", {});
            }
            element.extend = {};
        }
    }
};
const isVariant = (param)=>{
    if (!(0, _utils.isString)(param)) return;
    const firstCharKey = param.slice(0, 1);
    // return (firstCharKey === '.' || firstCharKey === '$')
    return firstCharKey === ".";
};
const hasVariantProp = (element)=>{
    const { props } = element;
    if ((0, _utils.isObject)(props) && (0, _utils.isString)(props.variant)) return true;
};
const overwriteVariant = (element, variant, variantProps)=>{
    let variantElement = element[variant];
    if (!variantElement) return;
    const props = (0, _utils.isObject)(variantProps) ? variantProps : {};
    if ((0, _utils.isString)(variantElement)) variantElement = {
        extend: [
            {
                props
            },
            variantElement
        ]
    };
    else if (variantElement.extend) variantElement = addAdditionalExtend({
        props
    }, variantElement);
    return (0, _utils.overwriteDeep)(element, (0, _extend.applyExtend)(variantElement)) // TODO: check why string is not working
    ;
};
const applyVariant = (element)=>{
    const { props } = element;
    if (!hasVariantProp(element)) return element;
    const { variant } = props;
    overwriteVariant(element, `.${variant}`);
    const elKeys = Object.keys(element).filter((key)=>isVariant(key));
    elKeys.forEach((variant)=>{
        const slicedVariantElementKey = variant.slice(1);
        const variantElementProps = props[slicedVariantElementKey];
        if (variantElementProps) overwriteVariant(element, variant, variantElementProps);
    });
    return element;
};

},{"@domql/utils":"fVj5t","../extend":"bjG4Z","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bjG4Z":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "applyExtend", ()=>applyExtend);
var _utils = require("@domql/utils");
var _utils1 = require("./utils");
"use strict";
const ENV = "development";
const applyExtend = (element, parent, options = {})=>{
    if ((0, _utils.isFunction)(element)) element = (0, _utils.exec)(element, parent);
    let { extend, props, context, __ref } = element;
    extend = (0, _utils1.fallbackStringExtend)(extend, context, options);
    const extendStack = (0, _utils1.getExtendStack)(extend, context);
    if (ENV !== "test" || ENV !== "development") delete element.extend;
    let childExtendStack = [];
    if (parent) {
        element.parent = parent;
        // Assign parent attr to the element
        if (!options.ignoreChildExtend && !(props && props.ignoreChildExtend)) {
            childExtendStack = (0, _utils1.getExtendStack)(parent.childExtend, context);
            const ignoreChildExtendRecursive = props && props.ignoreChildExtendRecursive;
            if (parent.childExtendRecursive && !ignoreChildExtendRecursive) {
                const canExtendRecursive = element.key !== "__text";
                if (canExtendRecursive) {
                    const childExtendRecursiveStack = (0, _utils1.getExtendStack)(parent.childExtendRecursive, context);
                    // add error if childExtendRecursive contains element which goes to infinite loop
                    childExtendStack = childExtendStack.concat(childExtendRecursiveStack);
                    element.childExtendRecursive = parent.childExtendRecursive;
                }
            }
        }
    }
    const extendLength = extendStack.length;
    const childExtendLength = childExtendStack.length;
    let stack = [];
    if (extendLength && childExtendLength) stack = (0, _utils1.jointStacks)(extendStack, childExtendStack);
    else if (extendLength) stack = extendStack;
    else if (childExtendLength) stack = childExtendStack;
    else if (!options.extend) return element;
    if (options.extend) {
        const defaultOptionsExtend = (0, _utils1.getExtendStack)(options.extend, context);
        stack = [].concat(stack, defaultOptionsExtend);
    }
    // check if array contains string extends
    if (__ref) __ref.__extend = stack;
    let mergedExtend = (0, _utils1.cloneAndMergeArrayExtend)(stack);
    // apply `component:` property
    const COMPONENTS = context && context.components || options.components;
    const component = (0, _utils.exec)(element.component || mergedExtend.component, element);
    if (component && COMPONENTS && COMPONENTS[component]) {
        const componentExtend = (0, _utils1.cloneAndMergeArrayExtend)((0, _utils1.getExtendStack)(COMPONENTS[component]));
        mergedExtend = (0, _utils1.deepMergeExtend)(componentExtend, mergedExtend);
    }
    return (0, _utils1.deepMergeExtend)(element, mergedExtend);
};

},{"@domql/utils":"fVj5t","./utils":"ehooX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3kNZR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "applyParam", ()=>applyParam);
var _utils = require("@domql/utils");
var _mixins = require("./mixins");
"use strict";
const applyParam = (param, element, options)=>{
    const { node, context, __ref: ref } = element;
    const prop = element[param];
    const DOMQLProperty = (0, _mixins.registry)[param];
    const DOMQLPropertyFromContext = context && context.registry && context.registry[param];
    const isGlobalTransformer = DOMQLPropertyFromContext || DOMQLProperty;
    const hasDefine = element.define && element.define[param];
    const hasContextDefine = context && context.define && context.define[param];
    if (!ref.__if) return;
    if (isGlobalTransformer && !hasContextDefine) {
        if ((0, _utils.isFunction)(isGlobalTransformer)) {
            isGlobalTransformer(prop, element, node, options);
            return;
        }
    }
    return {
        hasDefine,
        hasContextDefine
    };
};

},{"@domql/utils":"fVj5t","./mixins":"dKW5S","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"c6QTw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _methods = require("./methods");
parcelHelpers.exportAll(_methods, exports);
var _tags = require("./tags");
parcelHelpers.exportAll(_tags, exports);
"use strict";

},{"./methods":"5iSEk","./tags":"d2Quo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5iSEk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DEFAULT_METHODS", ()=>DEFAULT_METHODS);
var _utils = require("@domql/utils");
"use strict";
const DEFAULT_METHODS = {
    key: {},
    tag: {},
    if: {},
    define: {},
    attr: {},
    style: {},
    content: {},
    class: {},
    props: {},
    state: {},
    method: {},
    transform: {},
    on: {},
    ref: {},
    extend: {},
    childExtend: {},
    text: (element, state)=>{
        element.ref.text = {
            tag: "text",
            text: (0, _utils.exec)(element.text, element, state)
        };
    },
    innerHTML: {},
    set: {},
    update: {},
    remove: {}
} // log: {}
 // value: {},
 // text: {},
 // html: {},
 // path: {},
 // data: {},
 // if: {},
 // __hash: {},
 // __cache: {},
 // __defined: {},
 // __exec: {},
 // __changes: {},
 // __trash: {},
 // __root: {},
 // __props: {},
 // __extend: {},
 // __ifFragment: {},
 // __ifFalsy: {},
 // parent: {},
 // node: {},
 // lookup: {},
 // keys: {},
 // parse: {},
 // parseDeep: {},
;

},{"@domql/utils":"fVj5t","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d2Quo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TAGS", ()=>TAGS);
"use strict";
const TAGS = {
    root: [
        "body",
        "html"
    ],
    head: [
        "title",
        "base",
        "meta",
        "style"
    ],
    body: [
        "html",
        "body",
        "string",
        "fragment",
        "a",
        "abbr",
        "acronym",
        "address",
        "applet",
        "area",
        "article",
        "aside",
        "audio",
        "b",
        "basefont",
        "bdi",
        "bdo",
        "big",
        "blockquote",
        "br",
        "button",
        "canvas",
        "caption",
        "center",
        "cite",
        "code",
        "col",
        "colgroup",
        "data",
        "datalist",
        "dd",
        "del",
        "details",
        "dfn",
        "dialog",
        "dir",
        "div",
        "dl",
        "dt",
        "em",
        "embed",
        "fieldset",
        "figcaption",
        "figure",
        "font",
        "footer",
        "form",
        "frame",
        "frameset",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "head",
        "header",
        "hr",
        "i",
        "iframe",
        "img",
        "input",
        "ins",
        "kbd",
        "label",
        "legend",
        "li",
        "link",
        "main",
        "map",
        "mark",
        "meter",
        "nav",
        "noframes",
        "noscript",
        "object",
        "ol",
        "optgroup",
        "option",
        "output",
        "p",
        "param",
        "picture",
        "pre",
        "progress",
        "q",
        "rp",
        "rt",
        "ruby",
        "s",
        "samp",
        "script",
        "section",
        "select",
        "small",
        "source",
        "span",
        "strike",
        "strong",
        "sub",
        "summary",
        "sup",
        "table",
        "tbody",
        "td",
        "template",
        "textarea",
        "tfoot",
        "th",
        "thead",
        "time",
        "tr",
        "track",
        "tt",
        "u",
        "ul",
        "var",
        "video",
        "wbr",
        // SVG
        "svg",
        "path"
    ]
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"k57vt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "addMethods", ()=>addMethods);
var _utils = require("@domql/utils");
var _set = require("../set");
var _setDefault = parcelHelpers.interopDefault(_set);
var _update = require("../update");
var _updateDefault = parcelHelpers.interopDefault(_update);
var _ = require("./");
var _content = require("../mixins/content");
"use strict";
const addMethods = (element, parent)=>{
    const proto = {
        set: (0, _setDefault.default).bind(element),
        update: (0, _updateDefault.default).bind(element),
        remove: (0, _.remove).bind(element),
        updateContent: (0, _content.updateContent).bind(element),
        removeContent: (0, _content.removeContent).bind(element),
        setProps: (0, _.setProps).bind(element),
        lookup: (0, _.lookup).bind(element),
        spotByPath: (0, _.spotByPath).bind(element),
        parse: (0, _.parse).bind(element),
        parseDeep: (0, _.parseDeep).bind(element),
        keys: (0, _.keys).bind(element),
        nextElement: (0, _.nextElement).bind(element),
        previousElement: (0, _.previousElement).bind(element)
    };
    if ((0, _utils.isDevelopment)()) proto.log = (0, _.log).bind(element);
    Object.setPrototypeOf(element, proto);
};

},{"@domql/utils":"fVj5t","../set":"gPXWh","../update":"4g3kr","./":"i5xTe","../mixins/content":"2oLLo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4g3kr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utils = require("@domql/utils");
var _event = require("@domql/event");
var _methods = require("./methods");
var _props = require("./props");
var _state = require("@domql/state");
var _utils1 = require("./utils");
var _create = require("./create");
var _createDefault = parcelHelpers.interopDefault(_create);
var _iterate = require("./iterate");
var _mixins = require("./mixins");
var _applyParam = require("./applyParam");
var _options = require("./cache/options");
var _optionsDefault = parcelHelpers.interopDefault(_options);
"use strict";
const snapshot = {
    snapshotId: (0, _utils.createSnapshotId)
};
const UPDATE_DEFAULT_OPTIONS = {
    stackChanges: false,
    cleanExec: true,
    preventRecursive: false,
    currentSnapshot: false,
    calleeElement: false,
    excludes: (0, _utils1.METHODS_EXL)
};
const update = function(params = {}, options = UPDATE_DEFAULT_OPTIONS) {
    const element = this;
    const { parent, node, key } = element;
    const { excludes, preventInheritAtCurrentState } = options;
    (0, _event.triggerEventOnUpdate)("startUpdate", params, element, options);
    if (preventInheritAtCurrentState && preventInheritAtCurrentState.__element === element) return;
    if (!excludes) (0, _utils.merge)(options, UPDATE_DEFAULT_OPTIONS);
    let ref = element.__ref;
    if (!ref) ref = element.__ref = {};
    const [snapshotOnCallee, calleeElement, snapshotHasUpdated] = captureSnapshot(element, options);
    if (snapshotHasUpdated) return;
    if ((0, _utils.isString)(params) || (0, _utils.isNumber)(params)) params = {
        text: params
    };
    const inheritState = inheritStateUpdates(element, options);
    if (inheritState === false) return;
    const ifFails = checkIfOnUpdate(element, parent, options);
    if (ifFails) return;
    if (ref.__if && !options.preventPropsUpdate) {
        const hasParentProps = parent.props && (parent.props[key] || parent.props.childProps);
        const hasFunctionInProps = ref.__props.filter((v)=>(0, _utils.isFunction)(v));
        const props = params.props || hasParentProps || hasFunctionInProps.length;
        if (props) (0, _props.updateProps)(props, element, parent);
    }
    if (!options.preventInitUpdateListener) {
        const initUpdateReturns = (0, _event.triggerEventOnUpdate)("initUpdate", params, element, options);
        if (initUpdateReturns === false) return element;
    }
    const overwriteChanges = (0, _utils.overwriteDeep)(element, params, (0, _utils1.METHODS_EXL));
    const execChanges = (0, _iterate.throughUpdatedExec)(element, {
        ignore: UPDATE_DEFAULT_OPTIONS
    });
    const definedChanges = (0, _iterate.throughUpdatedDefine)(element);
    if (!options.isForced) (0, _event.triggerEventOn)("beforeClassAssign", element, options);
    if (options.stackChanges && element.__stackChanges) {
        const stackChanges = (0, _utils.merge)(definedChanges, (0, _utils.merge)(execChanges, overwriteChanges));
        element.__stackChanges.push(stackChanges);
    }
    if (!ref.__if) return false;
    if (!node) // return createNode(element, options)
    return;
    for(const param in element){
        const prop = element[param];
        const hasOnlyUpdateFalsy = options.onlyUpdate && (options.onlyUpdate !== param || !element.lookup(options.onlyUpdate));
        const isInPreventUpdate = (0, _utils.isArray)(options.preventUpdate) && options.preventUpdate.includes(param);
        const isInPreventDefineUpdate = (0, _utils.isArray)(options.preventDefineUpdate) && options.preventDefineUpdate.includes(param);
        if ((0, _utils.isUndefined)(prop) || hasOnlyUpdateFalsy || isInPreventUpdate || isInPreventDefineUpdate || options.preventDefineUpdate === true || options.preventDefineUpdate === param || options.preventContentUpdate && param === "content" || (options.preventStateUpdate && param) === "state" || (0, _methods.isMethod)(param) || (0, _utils.isObject)((0, _mixins.registry)[param]) || (0, _utils1.isVariant)(param)) continue;
        if (options.preventStateUpdate === "once") options.preventStateUpdate = false;
        const isElement = (0, _applyParam.applyParam)(param, element, options);
        if (isElement) {
            const { hasDefine, hasContextDefine } = isElement;
            const canUpdate = (0, _utils.isObject)(prop) && !hasDefine && !hasContextDefine && !options.preventRecursive;
            if (!canUpdate) continue;
            const lazyLoad = element.props.lazyLoad || options.lazyLoad;
            const childUpdateCall = ()=>update.call(prop, params[prop], {
                    ...options,
                    currentSnapshot: snapshotOnCallee,
                    calleeElement
                });
            lazyLoad ? (0, _utils.window).requestAnimationFrame(()=>childUpdateCall()) : childUpdateCall();
        }
    }
    if (!options.preventUpdateListener) (0, _event.triggerEventOn)("update", element, options);
};
const captureSnapshot = (element, options)=>{
    const ref = element.__ref;
    const { currentSnapshot, calleeElement } = options;
    const isCallee = calleeElement === element;
    if (!calleeElement || isCallee) {
        const createdStanpshot = snapshot.snapshotId();
        ref.__currentSnapshot = createdStanpshot;
        return [
            createdStanpshot,
            element
        ];
    }
    const snapshotOnCallee = ref.__currentSnapshot;
    if (currentSnapshot < snapshotOnCallee) return [
        snapshotOnCallee,
        calleeElement,
        true
    ];
    return [
        snapshotOnCallee,
        calleeElement
    ];
};
const checkIfOnUpdate = (element, parent, options)=>{
    if (!(0, _utils.isFunction)(element.if) || !parent) return;
    const ref = element.__ref;
    const ifPassed = element.if(element, element.state, element.context, options);
    const itWasFalse = ref.__if !== true;
    if (ifPassed) {
        ref.__if = true;
        if (itWasFalse) {
            delete element.__hash;
            delete element.extend;
            if (!ref.__hasRootState) delete element.state;
            if (ref.__state) element.state = ref.__state;
            element.node?.remove();
            const previousElement = element.previousElement();
            const nextElement = element.nextElement();
            const hasPrevious = previousElement && previousElement.node;
            const hasNext = nextElement && nextElement.node;
            const attachOptions = (hasPrevious?.parentNode || hasNext?.parentNode) && {
                position: hasPrevious ? "after" : hasNext ? "before" : null,
                node: hasPrevious || hasNext
            };
            const created = (0, _createDefault.default)(element, parent, element.key, (0, _optionsDefault.default).create, attachOptions);
            // check preventUpdate for an array (Line: 87)
            if (options.preventUpdate !== true && element.on && (0, _utils.isFunction)(element.on.update)) (0, _event.applyEvent)(element.on.update, created, created.state);
            return created;
        }
    } else if (element.node && !ifPassed) {
        element.node.remove();
        delete ref.__if;
    }
};
/**
 * Inherit state updates for a given element based on the specified options.
 *
 * @param {Object} element - The element to inherit state updates for.
 * @param {Object} options - Configuration options for state update inheritance.
 * @param {boolean} [options.preventUpdateTriggerStateUpdate] - If true, prevent triggering state updates.
 * @param {boolean} [options.isHoisted] - Whether the state is hoisted.
 * @param {boolean} [options.execStateFunction] - Execute the state functions.
 * @param {boolean} [options.stateFunctionOverwrite] - If true, overwrite (not merge) current state with what function returns.
 * @param {boolean} [options.preventInheritedStateUpdate] - If true, prevent inheriting state updates.
 * @param {boolean} [options.preventInitStateUpdateListener] - If true, prevent the 'initStateUpdated' event listener.
 * @param {boolean} [options.preventStateUpdateListener] - If true, prevent the 'stateUpdated' event listener.
 * @returns {boolean} - If returns false, it breaks the update function
 */ const inheritStateUpdates = (element, options)=>{
    const { __ref: ref } = element;
    const stateKey = ref.__state;
    const { parent, state } = element;
    const { preventUpdateTriggerStateUpdate, isHoisted, execStateFunction } = options;
    if (preventUpdateTriggerStateUpdate) return;
    // If does not have own state inherit from parent
    if (!stateKey && !ref.__hasRootState) {
        element.state = parent && parent.state || {};
        return;
    }
    // If state is function, decide execution and apply setting a current state
    const shouldForceFunctionState = (0, _utils.isFunction)(stateKey) && !isHoisted && execStateFunction;
    if (shouldForceFunctionState) {
        const execState = (0, _utils.exec)(stateKey, element);
        state.set(execState, {
            ...options,
            preventUpdate: true,
            updatedByStateFunction: true
        });
        return;
    }
    // If state is string, find its value in the state tree
    const keyInParentState = (0, _state.findInheritedState)(element, element.parent);
    if (!keyInParentState || options.preventInheritedStateUpdate) return;
    // Trigger on.initStateUpdated event
    if (!options.preventInitStateUpdateListener) {
        const initStateReturns = (0, _event.triggerEventOnUpdate)("initStateUpdated", keyInParentState, element, options);
        if (initStateReturns === false) return element;
    }
    // Recreate the state again
    const newState = createStateUpdate(element, parent, options);
    // Trigger on.stateUpdated event
    if (!options.preventStateUpdateListener) (0, _event.triggerEventOnUpdate)("stateUpdated", newState.parse(), element, options);
};
const createStateUpdate = (element, parent, options)=>{
    const __stateChildren = element.state.__children;
    const newState = (0, _state.createState)(element, parent);
    element.state = newState;
    for(const child in __stateChildren){
        // check this for inherited states
        if (newState[child]) newState.__children[child] = __stateChildren[child];
        __stateChildren[child].parent = newState;
    }
    return newState;
};
exports.default = update;

},{"@domql/utils":"fVj5t","@domql/event":"bmjl7","./methods":"i5xTe","./props":"37wVo","@domql/state":"5eRWK","./utils":"ehooX","./create":"c6v6x","./iterate":"9obXT","./mixins":"dKW5S","./applyParam":"3kNZR","./cache/options":"gdiJQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9eBu1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _report = require("@domql/report");
var _mixins = require("./mixins");
"use strict";
exports.default = (params, options = {})=>{
    const { overwrite } = options;
    for(const param in params)if ((0, _mixins.registry)[param] && !overwrite) (0, _report.report)("OverwriteToBuiltin", param);
    else (0, _mixins.registry)[param] = params[param];
};

},{"@domql/report":"bSAtn","./mixins":"dKW5S","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["icZzK","8lqZg"], "8lqZg", "parcelRequirec2d6")

//# sourceMappingURL=index.975ef6c8.js.map
