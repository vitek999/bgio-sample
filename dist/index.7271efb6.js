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
})({"2BKCt":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "7fb4cd117271efb6";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
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
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
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
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
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
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
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
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
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
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
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
function hmrApply(bundle, asset) {
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
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
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
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
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
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"2kQhy":[function(require,module,exports) {
var _client = require("boardgame.io/client");
var _game = require("./Game");
class TicTacToeClient {
    constructor(rootElement){
        this.client = (0, _client.Client)({
            game: (0, _game.TicTacToe)
        });
        this.client.start();
        this.rootElement = rootElement;
        this.createBoard();
        this.attachListeners();
        this.client.subscribe((state)=>this.update(state));
    }
    createBoard() {
        // Create cells in rows for the Tic-Tac-Toe board.
        const rows = [];
        for(let i = 0; i < 3; i++){
            const cells = [];
            for(let j = 0; j < 3; j++){
                const id = 3 * i + j;
                cells.push(`<td class="cell" data-id="${id}"></td>`);
            }
            rows.push(`<tr>${cells.join("")}</tr>`);
        }
        // Add the HTML to our app <div>.
        // We’ll use the empty <p> to display the game winner later.
        this.rootElement.innerHTML = `
      <table>${rows.join("")}</table>
      <p class="winner"></p>
    `;
    }
    attachListeners() {
        // Attach event listeners to the board cells.
        const cells = this.rootElement.querySelectorAll(".cell");
        // This event handler will read the cell id from the cell’s
        // `data-id` attribute and make the `clickCell` move.
        const handleCellClick = (event)=>{
            const id = parseInt(event.target.dataset.id);
            this.client.moves.clickCell(id);
        };
        cells.forEach((cell)=>{
            cell.onclick = handleCellClick;
        });
    }
    update(state) {
        // Get all the board cells.
        const cells = this.rootElement.querySelectorAll(".cell");
        // Update cells to display the values in game state.
        cells.forEach((cell)=>{
            const cellId = parseInt(cell.dataset.id);
            const cellValue = state.G.cells[cellId];
            cell.textContent = cellValue !== null ? cellValue : "";
        });
        // Get the gameover message element.
        const messageEl = this.rootElement.querySelector(".winner");
        // Update the element to show a winner if any.
        if (state.ctx.gameover) messageEl.textContent = state.ctx.gameover.winner !== undefined ? "Winner: " + state.ctx.gameover.winner : "Draw!";
        else messageEl.textContent = "";
    }
}
const appElement = document.getElementById("app");
const app = new TicTacToeClient(appElement);

},{"boardgame.io/client":"4TGq9","./Game":"l338F"}],"4TGq9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Client", ()=>(0, _clientF7F02B82Js.C));
parcelHelpers.export(exports, "LobbyClient", ()=>(0, _client5F57C3F2Js.L));
parcelHelpers.export(exports, "LobbyClientError", ()=>(0, _client5F57C3F2Js.a));
var _nonSecure = require("nanoid/non-secure");
var _debug8242C26EJs = require("./Debug-8242c26e.js");
var _redux = require("redux");
var _turnOrder8Cc4909BJs = require("./turn-order-8cc4909b.js");
var _immer = require("immer");
var _pluginRandom087F861EJs = require("./plugin-random-087f861e.js");
var _lodashIsplainobject = require("lodash.isplainobject");
var _reducer24Ea3E4CJs = require("./reducer-24ea3e4c.js");
var _rfc6902 = require("rfc6902");
var _initialize7316768FJs = require("./initialize-7316768f.js");
var _transportCe07B771Js = require("./transport-ce07b771.js");
var _clientF7F02B82Js = require("./client-f7f02b82.js");
var _flatted = require("flatted");
var _setimmediate = require("setimmediate");
var _ai7998B00FJs = require("./ai-7998b00f.js");
var _client5F57C3F2Js = require("./client-5f57c3f2.js");

},{"nanoid/non-secure":"fO50M","./Debug-8242c26e.js":"l07fb","redux":"cDNB3","./turn-order-8cc4909b.js":"eWUI2","immer":"4sfoz","./plugin-random-087f861e.js":"lhxqo","lodash.isplainobject":"6W10L","./reducer-24ea3e4c.js":"b7fst","rfc6902":"kXRIf","./initialize-7316768f.js":"3IrVq","./transport-ce07b771.js":"6VfRJ","./client-f7f02b82.js":"1RcJa","flatted":"aMR0x","setimmediate":"g4k8b","./ai-7998b00f.js":"1rFTn","./client-5f57c3f2.js":false,"@parcel/transformer-js/src/esmodule-helpers.js":"cjuhS"}],"fO50M":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "nanoid", ()=>nanoid);
parcelHelpers.export(exports, "customAlphabet", ()=>customAlphabet);
let urlAlphabet = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";
let customAlphabet = (alphabet, defaultSize = 21)=>{
    return (size = defaultSize)=>{
        let id = "";
        let i = size;
        while(i--)id += alphabet[Math.random() * alphabet.length | 0];
        return id;
    };
};
let nanoid = (size = 21)=>{
    let id = "";
    let i = size;
    while(i--)id += urlAlphabet[Math.random() * 64 | 0];
    return id;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"cjuhS"}],"cjuhS":[function(require,module,exports) {
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
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
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

},{}],"l07fb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "D", ()=>Debug);
parcelHelpers.export(exports, "_", ()=>_inherits);
parcelHelpers.export(exports, "a", ()=>_createSuper);
parcelHelpers.export(exports, "b", ()=>_createClass);
parcelHelpers.export(exports, "c", ()=>_defineProperty);
parcelHelpers.export(exports, "d", ()=>_classCallCheck);
parcelHelpers.export(exports, "e", ()=>_objectWithoutProperties);
parcelHelpers.export(exports, "f", ()=>_objectSpread2);
var _turnOrder8Cc4909BJs = require("./turn-order-8cc4909b.js");
var _reducer24Ea3E4CJs = require("./reducer-24ea3e4c.js");
var _flatted = require("flatted");
var _ai7998B00FJs = require("./ai-7998b00f.js");
function noop() {}
const identity = (x)=>x;
function assign(tar, src) {
    // @ts-ignore
    for(const k in src)tar[k] = src[k];
    return tar;
}
function run(fn) {
    return fn();
}
function blank_object() {
    return Object.create(null);
}
function run_all(fns) {
    fns.forEach(run);
}
function is_function(thing) {
    return typeof thing === "function";
}
function safe_not_equal(a, b) {
    return a != a ? b == b : a !== b || a && typeof a === "object" || typeof a === "function";
}
function is_empty(obj) {
    return Object.keys(obj).length === 0;
}
function subscribe(store, ...callbacks) {
    if (store == null) return noop;
    const unsub = store.subscribe(...callbacks);
    return unsub.unsubscribe ? ()=>unsub.unsubscribe() : unsub;
}
function component_subscribe(component, store, callback) {
    component.$$.on_destroy.push(subscribe(store, callback));
}
function create_slot(definition, ctx, $$scope, fn) {
    if (definition) {
        const slot_ctx = get_slot_context(definition, ctx, $$scope, fn);
        return definition[0](slot_ctx);
    }
}
function get_slot_context(definition, ctx, $$scope, fn) {
    return definition[1] && fn ? assign($$scope.ctx.slice(), definition[1](fn(ctx))) : $$scope.ctx;
}
function get_slot_changes(definition, $$scope, dirty, fn) {
    if (definition[2] && fn) {
        const lets = definition[2](fn(dirty));
        if ($$scope.dirty === undefined) return lets;
        if (typeof lets === "object") {
            const merged = [];
            const len = Math.max($$scope.dirty.length, lets.length);
            for(let i = 0; i < len; i += 1)merged[i] = $$scope.dirty[i] | lets[i];
            return merged;
        }
        return $$scope.dirty | lets;
    }
    return $$scope.dirty;
}
function update_slot_base(slot, slot_definition, ctx, $$scope, slot_changes, get_slot_context_fn) {
    if (slot_changes) {
        const slot_context = get_slot_context(slot_definition, ctx, $$scope, get_slot_context_fn);
        slot.p(slot_context, slot_changes);
    }
}
function get_all_dirty_from_scope($$scope) {
    if ($$scope.ctx.length > 32) {
        const dirty = [];
        const length = $$scope.ctx.length / 32;
        for(let i = 0; i < length; i++)dirty[i] = -1;
        return dirty;
    }
    return -1;
}
function exclude_internal_props(props) {
    const result = {};
    for(const k in props)if (k[0] !== "$") result[k] = props[k];
    return result;
}
function null_to_empty(value) {
    return value == null ? "" : value;
}
const is_client = typeof window !== "undefined";
let now = is_client ? ()=>window.performance.now() : ()=>Date.now();
let raf = is_client ? (cb)=>requestAnimationFrame(cb) : noop;
const tasks = new Set();
function run_tasks(now) {
    tasks.forEach((task)=>{
        if (!task.c(now)) {
            tasks.delete(task);
            task.f();
        }
    });
    if (tasks.size !== 0) raf(run_tasks);
}
/**
 * Creates a new task that runs on each raf frame
 * until it returns a falsy value or is aborted
 */ function loop(callback) {
    let task;
    if (tasks.size === 0) raf(run_tasks);
    return {
        promise: new Promise((fulfill)=>{
            tasks.add(task = {
                c: callback,
                f: fulfill
            });
        }),
        abort () {
            tasks.delete(task);
        }
    };
}
function append(target, node) {
    target.appendChild(node);
}
function append_styles(target, style_sheet_id, styles) {
    const append_styles_to = get_root_for_style(target);
    if (!append_styles_to.getElementById(style_sheet_id)) {
        const style = element("style");
        style.id = style_sheet_id;
        style.textContent = styles;
        append_stylesheet(append_styles_to, style);
    }
}
function get_root_for_style(node) {
    if (!node) return document;
    const root = node.getRootNode ? node.getRootNode() : node.ownerDocument;
    if (root && root.host) return root;
    return node.ownerDocument;
}
function append_empty_stylesheet(node) {
    const style_element = element("style");
    append_stylesheet(get_root_for_style(node), style_element);
    return style_element.sheet;
}
function append_stylesheet(node, style) {
    append(node.head || node, style);
}
function insert(target, node, anchor) {
    target.insertBefore(node, anchor || null);
}
function detach(node) {
    node.parentNode.removeChild(node);
}
function destroy_each(iterations, detaching) {
    for(let i = 0; i < iterations.length; i += 1)if (iterations[i]) iterations[i].d(detaching);
}
function element(name) {
    return document.createElement(name);
}
function svg_element(name) {
    return document.createElementNS("http://www.w3.org/2000/svg", name);
}
function text(data) {
    return document.createTextNode(data);
}
function space() {
    return text(" ");
}
function empty() {
    return text("");
}
function listen(node, event, handler, options) {
    node.addEventListener(event, handler, options);
    return ()=>node.removeEventListener(event, handler, options);
}
function stop_propagation(fn) {
    return function(event) {
        event.stopPropagation();
        // @ts-ignore
        return fn.call(this, event);
    };
}
function attr(node, attribute, value) {
    if (value == null) node.removeAttribute(attribute);
    else if (node.getAttribute(attribute) !== value) node.setAttribute(attribute, value);
}
function to_number(value) {
    return value === "" ? null : +value;
}
function children(element) {
    return Array.from(element.childNodes);
}
function set_data(text, data) {
    data = "" + data;
    if (text.wholeText !== data) text.data = data;
}
function set_input_value(input, value) {
    input.value = value == null ? "" : value;
}
function select_option(select, value) {
    for(let i = 0; i < select.options.length; i += 1){
        const option = select.options[i];
        if (option.__value === value) {
            option.selected = true;
            return;
        }
    }
    select.selectedIndex = -1; // no option should be selected
}
function select_value(select) {
    const selected_option = select.querySelector(":checked") || select.options[0];
    return selected_option && selected_option.__value;
}
function toggle_class(element, name, toggle) {
    element.classList[toggle ? "add" : "remove"](name);
}
function custom_event(type, detail, { bubbles =false , cancelable =false  } = {}) {
    const e = document.createEvent("CustomEvent");
    e.initCustomEvent(type, bubbles, cancelable, detail);
    return e;
}
// we need to store the information for multiple documents because a Svelte application could also contain iframes
// https://github.com/sveltejs/svelte/issues/3624
const managed_styles = new Map();
let active = 0;
// https://github.com/darkskyapp/string-hash/blob/master/index.js
function hash(str) {
    let hash = 5381;
    let i = str.length;
    while(i--)hash = (hash << 5) - hash ^ str.charCodeAt(i);
    return hash >>> 0;
}
function create_style_information(doc, node) {
    const info = {
        stylesheet: append_empty_stylesheet(node),
        rules: {}
    };
    managed_styles.set(doc, info);
    return info;
}
function create_rule(node, a, b, duration, delay, ease, fn, uid = 0) {
    const step = 16.666 / duration;
    let keyframes = "{\n";
    for(let p = 0; p <= 1; p += step){
        const t = a + (b - a) * ease(p);
        keyframes += p * 100 + `%{${fn(t, 1 - t)}}\n`;
    }
    const rule = keyframes + `100% {${fn(b, 1 - b)}}\n}`;
    const name = `__svelte_${hash(rule)}_${uid}`;
    const doc = get_root_for_style(node);
    const { stylesheet , rules  } = managed_styles.get(doc) || create_style_information(doc, node);
    if (!rules[name]) {
        rules[name] = true;
        stylesheet.insertRule(`@keyframes ${name} ${rule}`, stylesheet.cssRules.length);
    }
    const animation = node.style.animation || "";
    node.style.animation = `${animation ? `${animation}, ` : ""}${name} ${duration}ms linear ${delay}ms 1 both`;
    active += 1;
    return name;
}
function delete_rule(node, name) {
    const previous = (node.style.animation || "").split(", ");
    const next = previous.filter(name ? (anim)=>anim.indexOf(name) < 0 // remove specific animation
     : (anim)=>anim.indexOf("__svelte") === -1 // remove all Svelte animations
    );
    const deleted = previous.length - next.length;
    if (deleted) {
        node.style.animation = next.join(", ");
        active -= deleted;
        if (!active) clear_rules();
    }
}
function clear_rules() {
    raf(()=>{
        if (active) return;
        managed_styles.forEach((info)=>{
            const { stylesheet  } = info;
            let i = stylesheet.cssRules.length;
            while(i--)stylesheet.deleteRule(i);
            info.rules = {};
        });
        managed_styles.clear();
    });
}
let current_component;
function set_current_component(component) {
    current_component = component;
}
function get_current_component() {
    if (!current_component) throw new Error("Function called outside component initialization");
    return current_component;
}
function afterUpdate(fn) {
    get_current_component().$$.after_update.push(fn);
}
function onDestroy(fn) {
    get_current_component().$$.on_destroy.push(fn);
}
function createEventDispatcher() {
    const component = get_current_component();
    return (type, detail, { cancelable =false  } = {})=>{
        const callbacks = component.$$.callbacks[type];
        if (callbacks) {
            // TODO are there situations where events could be dispatched
            // in a server (non-DOM) environment?
            const event = custom_event(type, detail, {
                cancelable
            });
            callbacks.slice().forEach((fn)=>{
                fn.call(component, event);
            });
            return !event.defaultPrevented;
        }
        return true;
    };
}
function setContext(key, context) {
    get_current_component().$$.context.set(key, context);
    return context;
}
function getContext(key) {
    return get_current_component().$$.context.get(key);
}
// TODO figure out if we still want to support
// shorthand events, or if we want to implement
// a real bubbling mechanism
function bubble(component, event) {
    const callbacks = component.$$.callbacks[event.type];
    if (callbacks) // @ts-ignore
    callbacks.slice().forEach((fn)=>fn.call(this, event));
}
const dirty_components = [];
const binding_callbacks = [];
const render_callbacks = [];
const flush_callbacks = [];
const resolved_promise = Promise.resolve();
let update_scheduled = false;
function schedule_update() {
    if (!update_scheduled) {
        update_scheduled = true;
        resolved_promise.then(flush);
    }
}
function add_render_callback(fn) {
    render_callbacks.push(fn);
}
// flush() calls callbacks in this order:
// 1. All beforeUpdate callbacks, in order: parents before children
// 2. All bind:this callbacks, in reverse order: children before parents.
// 3. All afterUpdate callbacks, in order: parents before children. EXCEPT
//    for afterUpdates called during the initial onMount, which are called in
//    reverse order: children before parents.
// Since callbacks might update component values, which could trigger another
// call to flush(), the following steps guard against this:
// 1. During beforeUpdate, any updated components will be added to the
//    dirty_components array and will cause a reentrant call to flush(). Because
//    the flush index is kept outside the function, the reentrant call will pick
//    up where the earlier call left off and go through all dirty components. The
//    current_component value is saved and restored so that the reentrant call will
//    not interfere with the "parent" flush() call.
// 2. bind:this callbacks cannot trigger new flush() calls.
// 3. During afterUpdate, any updated components will NOT have their afterUpdate
//    callback called a second time; the seen_callbacks set, outside the flush()
//    function, guarantees this behavior.
const seen_callbacks = new Set();
let flushidx = 0; // Do *not* move this inside the flush() function
function flush() {
    const saved_component = current_component;
    do {
        // first, call beforeUpdate functions
        // and update components
        while(flushidx < dirty_components.length){
            const component = dirty_components[flushidx];
            flushidx++;
            set_current_component(component);
            update(component.$$);
        }
        set_current_component(null);
        dirty_components.length = 0;
        flushidx = 0;
        while(binding_callbacks.length)binding_callbacks.pop()();
        // then, once components are updated, call
        // afterUpdate functions. This may cause
        // subsequent updates...
        for(let i = 0; i < render_callbacks.length; i += 1){
            const callback = render_callbacks[i];
            if (!seen_callbacks.has(callback)) {
                // ...so guard against infinite loops
                seen_callbacks.add(callback);
                callback();
            }
        }
        render_callbacks.length = 0;
    }while (dirty_components.length);
    while(flush_callbacks.length)flush_callbacks.pop()();
    update_scheduled = false;
    seen_callbacks.clear();
    set_current_component(saved_component);
}
function update($$) {
    if ($$.fragment !== null) {
        $$.update();
        run_all($$.before_update);
        const dirty = $$.dirty;
        $$.dirty = [
            -1
        ];
        $$.fragment && $$.fragment.p($$.ctx, dirty);
        $$.after_update.forEach(add_render_callback);
    }
}
let promise;
function wait() {
    if (!promise) {
        promise = Promise.resolve();
        promise.then(()=>{
            promise = null;
        });
    }
    return promise;
}
function dispatch(node, direction, kind) {
    node.dispatchEvent(custom_event(`${direction ? "intro" : "outro"}${kind}`));
}
const outroing = new Set();
let outros;
function group_outros() {
    outros = {
        r: 0,
        c: [],
        p: outros // parent group
    };
}
function check_outros() {
    if (!outros.r) run_all(outros.c);
    outros = outros.p;
}
function transition_in(block, local) {
    if (block && block.i) {
        outroing.delete(block);
        block.i(local);
    }
}
function transition_out(block, local, detach, callback) {
    if (block && block.o) {
        if (outroing.has(block)) return;
        outroing.add(block);
        outros.c.push(()=>{
            outroing.delete(block);
            if (callback) {
                if (detach) block.d(1);
                callback();
            }
        });
        block.o(local);
    } else if (callback) callback();
}
const null_transition = {
    duration: 0
};
function create_in_transition(node, fn, params) {
    let config = fn(node, params);
    let running = false;
    let animation_name;
    let task;
    let uid = 0;
    function cleanup() {
        if (animation_name) delete_rule(node, animation_name);
    }
    function go() {
        const { delay =0 , duration =300 , easing =identity , tick =noop , css  } = config || null_transition;
        if (css) animation_name = create_rule(node, 0, 1, duration, delay, easing, css, uid++);
        tick(0, 1);
        const start_time = now() + delay;
        const end_time = start_time + duration;
        if (task) task.abort();
        running = true;
        add_render_callback(()=>dispatch(node, true, "start"));
        task = loop((now)=>{
            if (running) {
                if (now >= end_time) {
                    tick(1, 0);
                    dispatch(node, true, "end");
                    cleanup();
                    return running = false;
                }
                if (now >= start_time) {
                    const t = easing((now - start_time) / duration);
                    tick(t, 1 - t);
                }
            }
            return running;
        });
    }
    let started = false;
    return {
        start () {
            if (started) return;
            started = true;
            delete_rule(node);
            if (is_function(config)) {
                config = config();
                wait().then(go);
            } else go();
        },
        invalidate () {
            started = false;
        },
        end () {
            if (running) {
                cleanup();
                running = false;
            }
        }
    };
}
function create_out_transition(node, fn, params) {
    let config = fn(node, params);
    let running = true;
    let animation_name;
    const group = outros;
    group.r += 1;
    function go() {
        const { delay =0 , duration =300 , easing =identity , tick =noop , css  } = config || null_transition;
        if (css) animation_name = create_rule(node, 1, 0, duration, delay, easing, css);
        const start_time = now() + delay;
        const end_time = start_time + duration;
        add_render_callback(()=>dispatch(node, false, "start"));
        loop((now)=>{
            if (running) {
                if (now >= end_time) {
                    tick(0, 1);
                    dispatch(node, false, "end");
                    if (!--group.r) // this will result in `end()` being called,
                    // so we don't need to clean up here
                    run_all(group.c);
                    return false;
                }
                if (now >= start_time) {
                    const t = easing((now - start_time) / duration);
                    tick(1 - t, t);
                }
            }
            return running;
        });
    }
    if (is_function(config)) wait().then(()=>{
        // @ts-ignore
        config = config();
        go();
    });
    else go();
    return {
        end (reset) {
            if (reset && config.tick) config.tick(1, 0);
            if (running) {
                if (animation_name) delete_rule(node, animation_name);
                running = false;
            }
        }
    };
}
function create_bidirectional_transition(node, fn, params, intro) {
    let config = fn(node, params);
    let t = intro ? 0 : 1;
    let running_program = null;
    let pending_program = null;
    let animation_name = null;
    function clear_animation() {
        if (animation_name) delete_rule(node, animation_name);
    }
    function init(program, duration) {
        const d = program.b - t;
        duration *= Math.abs(d);
        return {
            a: t,
            b: program.b,
            d,
            duration,
            start: program.start,
            end: program.start + duration,
            group: program.group
        };
    }
    function go(b) {
        const { delay =0 , duration =300 , easing =identity , tick =noop , css  } = config || null_transition;
        const program = {
            start: now() + delay,
            b
        };
        if (!b) {
            // @ts-ignore todo: improve typings
            program.group = outros;
            outros.r += 1;
        }
        if (running_program || pending_program) pending_program = program;
        else {
            // if this is an intro, and there's a delay, we need to do
            // an initial tick and/or apply CSS animation immediately
            if (css) {
                clear_animation();
                animation_name = create_rule(node, t, b, duration, delay, easing, css);
            }
            if (b) tick(0, 1);
            running_program = init(program, duration);
            add_render_callback(()=>dispatch(node, b, "start"));
            loop((now)=>{
                if (pending_program && now > pending_program.start) {
                    running_program = init(pending_program, duration);
                    pending_program = null;
                    dispatch(node, running_program.b, "start");
                    if (css) {
                        clear_animation();
                        animation_name = create_rule(node, t, running_program.b, running_program.duration, 0, easing, config.css);
                    }
                }
                if (running_program) {
                    if (now >= running_program.end) {
                        tick(t = running_program.b, 1 - t);
                        dispatch(node, running_program.b, "end");
                        if (!pending_program) {
                            // we're done
                            if (running_program.b) // intro — we can tidy up immediately
                            clear_animation();
                            else // outro — needs to be coordinated
                            if (!--running_program.group.r) run_all(running_program.group.c);
                        }
                        running_program = null;
                    } else if (now >= running_program.start) {
                        const p = now - running_program.start;
                        t = running_program.a + running_program.d * easing(p / running_program.duration);
                        tick(t, 1 - t);
                    }
                }
                return !!(running_program || pending_program);
            });
        }
    }
    return {
        run (b) {
            if (is_function(config)) wait().then(()=>{
                // @ts-ignore
                config = config();
                go(b);
            });
            else go(b);
        },
        end () {
            clear_animation();
            running_program = pending_program = null;
        }
    };
}
function get_spread_update(levels, updates) {
    const update = {};
    const to_null_out = {};
    const accounted_for = {
        $$scope: 1
    };
    let i = levels.length;
    while(i--){
        const o = levels[i];
        const n = updates[i];
        if (n) {
            for(const key in o)if (!(key in n)) to_null_out[key] = 1;
            for(const key1 in n)if (!accounted_for[key1]) {
                update[key1] = n[key1];
                accounted_for[key1] = 1;
            }
            levels[i] = n;
        } else for(const key2 in o)accounted_for[key2] = 1;
    }
    for(const key3 in to_null_out)if (!(key3 in update)) update[key3] = undefined;
    return update;
}
function get_spread_object(spread_props) {
    return typeof spread_props === "object" && spread_props !== null ? spread_props : {};
}
function create_component(block) {
    block && block.c();
}
function mount_component(component, target, anchor, customElement) {
    const { fragment , on_mount , on_destroy , after_update  } = component.$$;
    fragment && fragment.m(target, anchor);
    if (!customElement) // onMount happens before the initial afterUpdate
    add_render_callback(()=>{
        const new_on_destroy = on_mount.map(run).filter(is_function);
        if (on_destroy) on_destroy.push(...new_on_destroy);
        else // Edge case - component was destroyed immediately,
        // most likely as a result of a binding initialising
        run_all(new_on_destroy);
        component.$$.on_mount = [];
    });
    after_update.forEach(add_render_callback);
}
function destroy_component(component, detaching) {
    const $$ = component.$$;
    if ($$.fragment !== null) {
        run_all($$.on_destroy);
        $$.fragment && $$.fragment.d(detaching);
        // TODO null out other refs, including component.$$ (but need to
        // preserve final state?)
        $$.on_destroy = $$.fragment = null;
        $$.ctx = [];
    }
}
function make_dirty(component, i) {
    if (component.$$.dirty[0] === -1) {
        dirty_components.push(component);
        schedule_update();
        component.$$.dirty.fill(0);
    }
    component.$$.dirty[i / 31 | 0] |= 1 << i % 31;
}
function init(component, options, instance, create_fragment, not_equal, props, append_styles, dirty = [
    -1
]) {
    const parent_component = current_component;
    set_current_component(component);
    const $$ = component.$$ = {
        fragment: null,
        ctx: null,
        // state
        props,
        update: noop,
        not_equal,
        bound: blank_object(),
        // lifecycle
        on_mount: [],
        on_destroy: [],
        on_disconnect: [],
        before_update: [],
        after_update: [],
        context: new Map(options.context || (parent_component ? parent_component.$$.context : [])),
        // everything else
        callbacks: blank_object(),
        dirty,
        skip_bound: false,
        root: options.target || parent_component.$$.root
    };
    append_styles && append_styles($$.root);
    let ready = false;
    $$.ctx = instance ? instance(component, options.props || {}, (i, ret, ...rest)=>{
        const value = rest.length ? rest[0] : ret;
        if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
            if (!$$.skip_bound && $$.bound[i]) $$.bound[i](value);
            if (ready) make_dirty(component, i);
        }
        return ret;
    }) : [];
    $$.update();
    ready = true;
    run_all($$.before_update);
    // `false` as a special case of no DOM component
    $$.fragment = create_fragment ? create_fragment($$.ctx) : false;
    if (options.target) {
        if (options.hydrate) {
            const nodes = children(options.target);
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            $$.fragment && $$.fragment.l(nodes);
            nodes.forEach(detach);
        } else // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        $$.fragment && $$.fragment.c();
        if (options.intro) transition_in(component.$$.fragment);
        mount_component(component, options.target, options.anchor, options.customElement);
        flush();
    }
    set_current_component(parent_component);
}
/**
 * Base class for Svelte components. Used when dev=false.
 */ class SvelteComponent {
    $destroy() {
        destroy_component(this, 1);
        this.$destroy = noop;
    }
    $on(type, callback) {
        const callbacks = this.$$.callbacks[type] || (this.$$.callbacks[type] = []);
        callbacks.push(callback);
        return ()=>{
            const index = callbacks.indexOf(callback);
            if (index !== -1) callbacks.splice(index, 1);
        };
    }
    $set($$props) {
        if (this.$$set && !is_empty($$props)) {
            this.$$.skip_bound = true;
            this.$$set($$props);
            this.$$.skip_bound = false;
        }
    }
}
const subscriber_queue = [];
/**
 * Create a `Writable` store that allows both updating and reading by subscription.
 * @param {*=}value initial value
 * @param {StartStopNotifier=}start start and stop notifications for subscriptions
 */ function writable(value, start = noop) {
    let stop;
    const subscribers = new Set();
    function set(new_value) {
        if (safe_not_equal(value, new_value)) {
            value = new_value;
            if (stop) {
                const run_queue = !subscriber_queue.length;
                for (const subscriber of subscribers){
                    subscriber[1]();
                    subscriber_queue.push(subscriber, value);
                }
                if (run_queue) {
                    for(let i = 0; i < subscriber_queue.length; i += 2)subscriber_queue[i][0](subscriber_queue[i + 1]);
                    subscriber_queue.length = 0;
                }
            }
        }
    }
    function update(fn) {
        set(fn(value));
    }
    function subscribe(run, invalidate = noop) {
        const subscriber = [
            run,
            invalidate
        ];
        subscribers.add(subscriber);
        if (subscribers.size === 1) stop = start(set) || noop;
        run(value);
        return ()=>{
            subscribers.delete(subscriber);
            if (subscribers.size === 0) {
                stop();
                stop = null;
            }
        };
    }
    return {
        set,
        update,
        subscribe
    };
}
function cubicOut(t) {
    const f = t - 1.0;
    return f * f * f + 1.0;
}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ function __rest(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") {
        for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
}
function fly(node, { delay =0 , duration =400 , easing =cubicOut , x =0 , y =0 , opacity =0  } = {}) {
    const style = getComputedStyle(node);
    const target_opacity = +style.opacity;
    const transform = style.transform === "none" ? "" : style.transform;
    const od = target_opacity * (1 - opacity);
    return {
        delay,
        duration,
        easing,
        css: (t, u)=>`
			transform: ${transform} translate(${(1 - t) * x}px, ${(1 - t) * y}px);
			opacity: ${target_opacity - od * u}`
    };
}
function crossfade(_a) {
    var { fallback  } = _a, defaults = __rest(_a, [
        "fallback"
    ]);
    const to_receive = new Map();
    const to_send = new Map();
    function crossfade(from, node, params) {
        const { delay =0 , duration =(d)=>Math.sqrt(d) * 30 , easing =cubicOut  } = assign(assign({}, defaults), params);
        const to = node.getBoundingClientRect();
        const dx = from.left - to.left;
        const dy = from.top - to.top;
        const dw = from.width / to.width;
        const dh = from.height / to.height;
        const d = Math.sqrt(dx * dx + dy * dy);
        const style = getComputedStyle(node);
        const transform = style.transform === "none" ? "" : style.transform;
        const opacity = +style.opacity;
        return {
            delay,
            duration: is_function(duration) ? duration(d) : duration,
            easing,
            css: (t, u)=>`
				opacity: ${t * opacity};
				transform-origin: top left;
				transform: ${transform} translate(${u * dx}px,${u * dy}px) scale(${t + (1 - t) * dw}, ${t + (1 - t) * dh});
			`
        };
    }
    function transition(items, counterparts, intro) {
        return (node, params)=>{
            items.set(params.key, {
                rect: node.getBoundingClientRect()
            });
            return ()=>{
                if (counterparts.has(params.key)) {
                    const { rect  } = counterparts.get(params.key);
                    counterparts.delete(params.key);
                    return crossfade(rect, node, params);
                }
                // if the node is disappearing altogether
                // (i.e. wasn't claimed by the other list)
                // then we need to supply an outro
                items.delete(params.key);
                return fallback && fallback(node, params, intro);
            };
        };
    }
    return [
        transition(to_send, to_receive, false),
        transition(to_receive, to_send, true)
    ];
}
/* node_modules/svelte-icons/components/IconBase.svelte generated by Svelte v3.49.0 */ function add_css(target) {
    append_styles(target, "svelte-c8tyih", "svg.svelte-c8tyih{stroke:currentColor;fill:currentColor;stroke-width:0;width:100%;height:auto;max-height:100%}");
}
// (18:2) {#if title}
function create_if_block(ctx) {
    let title_1;
    let t;
    return {
        c () {
            title_1 = svg_element("title");
            t = text(/*title*/ ctx[0]);
        },
        m (target, anchor) {
            insert(target, title_1, anchor);
            append(title_1, t);
        },
        p (ctx, dirty) {
            if (dirty & /*title*/ 1) set_data(t, /*title*/ ctx[0]);
        },
        d (detaching) {
            if (detaching) detach(title_1);
        }
    };
}
function create_fragment(ctx) {
    let svg;
    let if_block_anchor;
    let current;
    let if_block = /*title*/ ctx[0] && create_if_block(ctx);
    const default_slot_template = /*#slots*/ ctx[3].default;
    const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[2], null);
    return {
        c () {
            svg = svg_element("svg");
            if (if_block) if_block.c();
            if_block_anchor = empty();
            if (default_slot) default_slot.c();
            attr(svg, "xmlns", "http://www.w3.org/2000/svg");
            attr(svg, "viewBox", /*viewBox*/ ctx[1]);
            attr(svg, "class", "svelte-c8tyih");
        },
        m (target, anchor) {
            insert(target, svg, anchor);
            if (if_block) if_block.m(svg, null);
            append(svg, if_block_anchor);
            if (default_slot) default_slot.m(svg, null);
            current = true;
        },
        p (ctx, [dirty]) {
            if (/*title*/ ctx[0]) {
                if (if_block) if_block.p(ctx, dirty);
                else {
                    if_block = create_if_block(ctx);
                    if_block.c();
                    if_block.m(svg, if_block_anchor);
                }
            } else if (if_block) {
                if_block.d(1);
                if_block = null;
            }
            if (default_slot) {
                if (default_slot.p && (!current || dirty & /*$$scope*/ 4)) update_slot_base(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[2], !current ? get_all_dirty_from_scope(/*$$scope*/ ctx[2]) : get_slot_changes(default_slot_template, /*$$scope*/ ctx[2], dirty, null), null);
            }
            if (!current || dirty & /*viewBox*/ 2) attr(svg, "viewBox", /*viewBox*/ ctx[1]);
        },
        i (local) {
            if (current) return;
            transition_in(default_slot, local);
            current = true;
        },
        o (local) {
            transition_out(default_slot, local);
            current = false;
        },
        d (detaching) {
            if (detaching) detach(svg);
            if (if_block) if_block.d();
            if (default_slot) default_slot.d(detaching);
        }
    };
}
function instance($$self, $$props, $$invalidate) {
    let { $$slots: slots = {} , $$scope  } = $$props;
    let { title =null  } = $$props;
    let { viewBox  } = $$props;
    $$self.$$set = ($$props)=>{
        if ("title" in $$props) $$invalidate(0, title = $$props.title);
        if ("viewBox" in $$props) $$invalidate(1, viewBox = $$props.viewBox);
        if ("$$scope" in $$props) $$invalidate(2, $$scope = $$props.$$scope);
    };
    return [
        title,
        viewBox,
        $$scope,
        slots
    ];
}
class IconBase extends SvelteComponent {
    constructor(options){
        super();
        init(this, options, instance, create_fragment, safe_not_equal, {
            title: 0,
            viewBox: 1
        }, add_css);
    }
}
/* node_modules/svelte-icons/fa/FaChevronRight.svelte generated by Svelte v3.49.0 */ function create_default_slot(ctx) {
    let path;
    return {
        c () {
            path = svg_element("path");
            attr(path, "d", "M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z");
        },
        m (target, anchor) {
            insert(target, path, anchor);
        },
        p: noop,
        d (detaching) {
            if (detaching) detach(path);
        }
    };
}
function create_fragment$1(ctx) {
    let iconbase;
    let current;
    const iconbase_spread_levels = [
        {
            viewBox: "0 0 320 512"
        },
        /*$$props*/ ctx[0]
    ];
    let iconbase_props = {
        $$slots: {
            default: [
                create_default_slot
            ]
        },
        $$scope: {
            ctx
        }
    };
    for(let i = 0; i < iconbase_spread_levels.length; i += 1)iconbase_props = assign(iconbase_props, iconbase_spread_levels[i]);
    iconbase = new IconBase({
        props: iconbase_props
    });
    return {
        c () {
            create_component(iconbase.$$.fragment);
        },
        m (target, anchor) {
            mount_component(iconbase, target, anchor);
            current = true;
        },
        p (ctx, [dirty]) {
            const iconbase_changes = dirty & /*$$props*/ 1 ? get_spread_update(iconbase_spread_levels, [
                iconbase_spread_levels[0],
                get_spread_object(/*$$props*/ ctx[0])
            ]) : {};
            if (dirty & /*$$scope*/ 2) iconbase_changes.$$scope = {
                dirty,
                ctx
            };
            iconbase.$set(iconbase_changes);
        },
        i (local) {
            if (current) return;
            transition_in(iconbase.$$.fragment, local);
            current = true;
        },
        o (local) {
            transition_out(iconbase.$$.fragment, local);
            current = false;
        },
        d (detaching) {
            destroy_component(iconbase, detaching);
        }
    };
}
function instance$1($$self, $$props, $$invalidate) {
    $$self.$$set = ($$new_props)=>{
        $$invalidate(0, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    };
    $$props = exclude_internal_props($$props);
    return [
        $$props
    ];
}
class FaChevronRight extends SvelteComponent {
    constructor(options){
        super();
        init(this, options, instance$1, create_fragment$1, safe_not_equal, {});
    }
}
/* src/client/debug/Menu.svelte generated by Svelte v3.49.0 */ function add_css$1(target) {
    append_styles(target, "svelte-1xg9v5h", ".menu.svelte-1xg9v5h{display:flex;margin-top:43px;flex-direction:row-reverse;border:1px solid #ccc;border-radius:5px 5px 0 0;height:25px;line-height:25px;margin-right:-500px;transform-origin:bottom right;transform:rotate(-90deg) translate(0, -500px)}.menu-item.svelte-1xg9v5h{line-height:25px;cursor:pointer;border:0;background:#fefefe;color:#555;padding-left:15px;padding-right:15px;text-align:center}.menu-item.svelte-1xg9v5h:first-child{border-radius:0 5px 0 0}.menu-item.svelte-1xg9v5h:last-child{border-radius:5px 0 0 0}.menu-item.active.svelte-1xg9v5h{cursor:default;font-weight:bold;background:#ddd;color:#555}.menu-item.svelte-1xg9v5h:hover,.menu-item.svelte-1xg9v5h:focus{background:#eee;color:#555}");
}
function get_each_context(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[4] = list[i][0];
    child_ctx[5] = list[i][1].label;
    return child_ctx;
}
// (57:2) {#each Object.entries(panes) as [key, {label}
function create_each_block(ctx) {
    let button;
    let t0_value = /*label*/ ctx[5] + "";
    let t0;
    let t1;
    let mounted;
    let dispose;
    function click_handler() {
        return /*click_handler*/ ctx[3](/*key*/ ctx[4]);
    }
    return {
        c () {
            button = element("button");
            t0 = text(t0_value);
            t1 = space();
            attr(button, "class", "menu-item svelte-1xg9v5h");
            toggle_class(button, "active", /*pane*/ ctx[0] == /*key*/ ctx[4]);
        },
        m (target, anchor) {
            insert(target, button, anchor);
            append(button, t0);
            append(button, t1);
            if (!mounted) {
                dispose = listen(button, "click", click_handler);
                mounted = true;
            }
        },
        p (new_ctx, dirty) {
            ctx = new_ctx;
            if (dirty & /*panes*/ 2 && t0_value !== (t0_value = /*label*/ ctx[5] + "")) set_data(t0, t0_value);
            if (dirty & /*pane, Object, panes*/ 3) toggle_class(button, "active", /*pane*/ ctx[0] == /*key*/ ctx[4]);
        },
        d (detaching) {
            if (detaching) detach(button);
            mounted = false;
            dispose();
        }
    };
}
function create_fragment$2(ctx) {
    let nav;
    let each_value = Object.entries(/*panes*/ ctx[1]);
    let each_blocks = [];
    for(let i = 0; i < each_value.length; i += 1)each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
    return {
        c () {
            nav = element("nav");
            for(let i = 0; i < each_blocks.length; i += 1)each_blocks[i].c();
            attr(nav, "class", "menu svelte-1xg9v5h");
        },
        m (target, anchor) {
            insert(target, nav, anchor);
            for(let i = 0; i < each_blocks.length; i += 1)each_blocks[i].m(nav, null);
        },
        p (ctx, [dirty]) {
            if (dirty & /*pane, Object, panes, dispatch*/ 7) {
                each_value = Object.entries(/*panes*/ ctx[1]);
                let i;
                for(i = 0; i < each_value.length; i += 1){
                    const child_ctx = get_each_context(ctx, each_value, i);
                    if (each_blocks[i]) each_blocks[i].p(child_ctx, dirty);
                    else {
                        each_blocks[i] = create_each_block(child_ctx);
                        each_blocks[i].c();
                        each_blocks[i].m(nav, null);
                    }
                }
                for(; i < each_blocks.length; i += 1)each_blocks[i].d(1);
                each_blocks.length = each_value.length;
            }
        },
        i: noop,
        o: noop,
        d (detaching) {
            if (detaching) detach(nav);
            destroy_each(each_blocks, detaching);
        }
    };
}
function instance$2($$self, $$props, $$invalidate) {
    let { pane  } = $$props;
    let { panes  } = $$props;
    const dispatch = createEventDispatcher();
    const click_handler = (key)=>dispatch("change", key);
    $$self.$$set = ($$props)=>{
        if ("pane" in $$props) $$invalidate(0, pane = $$props.pane);
        if ("panes" in $$props) $$invalidate(1, panes = $$props.panes);
    };
    return [
        pane,
        panes,
        dispatch,
        click_handler
    ];
}
class Menu extends SvelteComponent {
    constructor(options){
        super();
        init(this, options, instance$2, create_fragment$2, safe_not_equal, {
            pane: 0,
            panes: 1
        }, add_css$1);
    }
}
var contextKey = {};
/* node_modules/svelte-json-tree-auto/src/JSONArrow.svelte generated by Svelte v3.49.0 */ function add_css$2(target) {
    append_styles(target, "svelte-1vyml86", ".container.svelte-1vyml86{display:inline-block;cursor:pointer;transform:translate(calc(0px - var(--li-identation)), -50%);position:absolute;top:50%;padding-right:100%}.arrow.svelte-1vyml86{transform-origin:25% 50%;position:relative;line-height:1.1em;font-size:0.75em;margin-left:0;transition:150ms;color:var(--arrow-sign);user-select:none;font-family:'Courier New', Courier, monospace}.expanded.svelte-1vyml86{transform:rotateZ(90deg) translateX(-3px)}");
}
function create_fragment$3(ctx) {
    let div1;
    let div0;
    let mounted;
    let dispose;
    return {
        c () {
            div1 = element("div");
            div0 = element("div");
            div0.textContent = `${"▶"}`;
            attr(div0, "class", "arrow svelte-1vyml86");
            toggle_class(div0, "expanded", /*expanded*/ ctx[0]);
            attr(div1, "class", "container svelte-1vyml86");
        },
        m (target, anchor) {
            insert(target, div1, anchor);
            append(div1, div0);
            if (!mounted) {
                dispose = listen(div1, "click", /*click_handler*/ ctx[1]);
                mounted = true;
            }
        },
        p (ctx, [dirty]) {
            if (dirty & /*expanded*/ 1) toggle_class(div0, "expanded", /*expanded*/ ctx[0]);
        },
        i: noop,
        o: noop,
        d (detaching) {
            if (detaching) detach(div1);
            mounted = false;
            dispose();
        }
    };
}
function instance$3($$self, $$props, $$invalidate) {
    let { expanded  } = $$props;
    function click_handler(event) {
        bubble.call(this, $$self, event);
    }
    $$self.$$set = ($$props)=>{
        if ("expanded" in $$props) $$invalidate(0, expanded = $$props.expanded);
    };
    return [
        expanded,
        click_handler
    ];
}
class JSONArrow extends SvelteComponent {
    constructor(options){
        super();
        init(this, options, instance$3, create_fragment$3, safe_not_equal, {
            expanded: 0
        }, add_css$2);
    }
}
/* node_modules/svelte-json-tree-auto/src/JSONKey.svelte generated by Svelte v3.49.0 */ function add_css$3(target) {
    append_styles(target, "svelte-1vlbacg", "label.svelte-1vlbacg{display:inline-block;color:var(--label-color);padding:0}.spaced.svelte-1vlbacg{padding-right:var(--li-colon-space)}");
}
// (16:0) {#if showKey && key}
function create_if_block$1(ctx) {
    let label;
    let span;
    let t0;
    let t1;
    let mounted;
    let dispose;
    return {
        c () {
            label = element("label");
            span = element("span");
            t0 = text(/*key*/ ctx[0]);
            t1 = text(/*colon*/ ctx[2]);
            attr(label, "class", "svelte-1vlbacg");
            toggle_class(label, "spaced", /*isParentExpanded*/ ctx[1]);
        },
        m (target, anchor) {
            insert(target, label, anchor);
            append(label, span);
            append(span, t0);
            append(span, t1);
            if (!mounted) {
                dispose = listen(label, "click", /*click_handler*/ ctx[5]);
                mounted = true;
            }
        },
        p (ctx, dirty) {
            if (dirty & /*key*/ 1) set_data(t0, /*key*/ ctx[0]);
            if (dirty & /*colon*/ 4) set_data(t1, /*colon*/ ctx[2]);
            if (dirty & /*isParentExpanded*/ 2) toggle_class(label, "spaced", /*isParentExpanded*/ ctx[1]);
        },
        d (detaching) {
            if (detaching) detach(label);
            mounted = false;
            dispose();
        }
    };
}
function create_fragment$4(ctx) {
    let if_block_anchor;
    let if_block = /*showKey*/ ctx[3] && /*key*/ ctx[0] && create_if_block$1(ctx);
    return {
        c () {
            if (if_block) if_block.c();
            if_block_anchor = empty();
        },
        m (target, anchor) {
            if (if_block) if_block.m(target, anchor);
            insert(target, if_block_anchor, anchor);
        },
        p (ctx, [dirty]) {
            if (/*showKey*/ ctx[3] && /*key*/ ctx[0]) {
                if (if_block) if_block.p(ctx, dirty);
                else {
                    if_block = create_if_block$1(ctx);
                    if_block.c();
                    if_block.m(if_block_anchor.parentNode, if_block_anchor);
                }
            } else if (if_block) {
                if_block.d(1);
                if_block = null;
            }
        },
        i: noop,
        o: noop,
        d (detaching) {
            if (if_block) if_block.d(detaching);
            if (detaching) detach(if_block_anchor);
        }
    };
}
function instance$4($$self, $$props, $$invalidate) {
    let showKey;
    let { key , isParentExpanded , isParentArray =false , colon =":"  } = $$props;
    function click_handler(event) {
        bubble.call(this, $$self, event);
    }
    $$self.$$set = ($$props)=>{
        if ("key" in $$props) $$invalidate(0, key = $$props.key);
        if ("isParentExpanded" in $$props) $$invalidate(1, isParentExpanded = $$props.isParentExpanded);
        if ("isParentArray" in $$props) $$invalidate(4, isParentArray = $$props.isParentArray);
        if ("colon" in $$props) $$invalidate(2, colon = $$props.colon);
    };
    $$self.$$.update = ()=>{
        if ($$self.$$.dirty & /*isParentExpanded, isParentArray, key*/ 19) $$invalidate(3, showKey = isParentExpanded || !isParentArray || key != +key);
    };
    return [
        key,
        isParentExpanded,
        colon,
        showKey,
        isParentArray,
        click_handler
    ];
}
class JSONKey extends SvelteComponent {
    constructor(options){
        super();
        init(this, options, instance$4, create_fragment$4, safe_not_equal, {
            key: 0,
            isParentExpanded: 1,
            isParentArray: 4,
            colon: 2
        }, add_css$3);
    }
}
/* node_modules/svelte-json-tree-auto/src/JSONNested.svelte generated by Svelte v3.49.0 */ function add_css$4(target) {
    append_styles(target, "svelte-rwxv37", "label.svelte-rwxv37{display:inline-block}.indent.svelte-rwxv37{padding-left:var(--li-identation)}.collapse.svelte-rwxv37{--li-display:inline;display:inline;font-style:italic}.comma.svelte-rwxv37{margin-left:-0.5em;margin-right:0.5em}label.svelte-rwxv37{position:relative}");
}
function get_each_context$1(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[12] = list[i];
    child_ctx[20] = i;
    return child_ctx;
}
// (57:4) {#if expandable && isParentExpanded}
function create_if_block_3(ctx) {
    let jsonarrow;
    let current;
    jsonarrow = new JSONArrow({
        props: {
            expanded: /*expanded*/ ctx[0]
        }
    });
    jsonarrow.$on("click", /*toggleExpand*/ ctx[15]);
    return {
        c () {
            create_component(jsonarrow.$$.fragment);
        },
        m (target, anchor) {
            mount_component(jsonarrow, target, anchor);
            current = true;
        },
        p (ctx, dirty) {
            const jsonarrow_changes = {};
            if (dirty & /*expanded*/ 1) jsonarrow_changes.expanded = /*expanded*/ ctx[0];
            jsonarrow.$set(jsonarrow_changes);
        },
        i (local) {
            if (current) return;
            transition_in(jsonarrow.$$.fragment, local);
            current = true;
        },
        o (local) {
            transition_out(jsonarrow.$$.fragment, local);
            current = false;
        },
        d (detaching) {
            destroy_component(jsonarrow, detaching);
        }
    };
}
// (75:4) {:else}
function create_else_block(ctx) {
    let span;
    return {
        c () {
            span = element("span");
            span.textContent = "…";
        },
        m (target, anchor) {
            insert(target, span, anchor);
        },
        p: noop,
        i: noop,
        o: noop,
        d (detaching) {
            if (detaching) detach(span);
        }
    };
}
// (63:4) {#if isParentExpanded}
function create_if_block$2(ctx) {
    let ul;
    let t;
    let current;
    let mounted;
    let dispose;
    let each_value = /*slicedKeys*/ ctx[13];
    let each_blocks = [];
    for(let i = 0; i < each_value.length; i += 1)each_blocks[i] = create_each_block$1(get_each_context$1(ctx, each_value, i));
    const out = (i)=>transition_out(each_blocks[i], 1, 1, ()=>{
            each_blocks[i] = null;
        });
    let if_block = /*slicedKeys*/ ctx[13].length < /*previewKeys*/ ctx[7].length && create_if_block_1();
    return {
        c () {
            ul = element("ul");
            for(let i = 0; i < each_blocks.length; i += 1)each_blocks[i].c();
            t = space();
            if (if_block) if_block.c();
            attr(ul, "class", "svelte-rwxv37");
            toggle_class(ul, "collapse", !/*expanded*/ ctx[0]);
        },
        m (target, anchor) {
            insert(target, ul, anchor);
            for(let i = 0; i < each_blocks.length; i += 1)each_blocks[i].m(ul, null);
            append(ul, t);
            if (if_block) if_block.m(ul, null);
            current = true;
            if (!mounted) {
                dispose = listen(ul, "click", /*expand*/ ctx[16]);
                mounted = true;
            }
        },
        p (ctx, dirty) {
            if (dirty & /*expanded, previewKeys, getKey, slicedKeys, isArray, getValue, getPreviewValue*/ 10129) {
                each_value = /*slicedKeys*/ ctx[13];
                let i;
                for(i = 0; i < each_value.length; i += 1){
                    const child_ctx = get_each_context$1(ctx, each_value, i);
                    if (each_blocks[i]) {
                        each_blocks[i].p(child_ctx, dirty);
                        transition_in(each_blocks[i], 1);
                    } else {
                        each_blocks[i] = create_each_block$1(child_ctx);
                        each_blocks[i].c();
                        transition_in(each_blocks[i], 1);
                        each_blocks[i].m(ul, t);
                    }
                }
                group_outros();
                for(i = each_value.length; i < each_blocks.length; i += 1)out(i);
                check_outros();
            }
            if (/*slicedKeys*/ ctx[13].length < /*previewKeys*/ ctx[7].length) {
                if (if_block) ;
                else {
                    if_block = create_if_block_1();
                    if_block.c();
                    if_block.m(ul, null);
                }
            } else if (if_block) {
                if_block.d(1);
                if_block = null;
            }
            if (dirty & /*expanded*/ 1) toggle_class(ul, "collapse", !/*expanded*/ ctx[0]);
        },
        i (local) {
            if (current) return;
            for(let i = 0; i < each_value.length; i += 1)transition_in(each_blocks[i]);
            current = true;
        },
        o (local) {
            each_blocks = each_blocks.filter(Boolean);
            for(let i = 0; i < each_blocks.length; i += 1)transition_out(each_blocks[i]);
            current = false;
        },
        d (detaching) {
            if (detaching) detach(ul);
            destroy_each(each_blocks, detaching);
            if (if_block) if_block.d();
            mounted = false;
            dispose();
        }
    };
}
// (67:10) {#if !expanded && index < previewKeys.length - 1}
function create_if_block_2(ctx) {
    let span;
    return {
        c () {
            span = element("span");
            span.textContent = ",";
            attr(span, "class", "comma svelte-rwxv37");
        },
        m (target, anchor) {
            insert(target, span, anchor);
        },
        d (detaching) {
            if (detaching) detach(span);
        }
    };
}
// (65:8) {#each slicedKeys as key, index}
function create_each_block$1(ctx) {
    let jsonnode;
    let t;
    let if_block_anchor;
    let current;
    jsonnode = new JSONNode({
        props: {
            key: /*getKey*/ ctx[8](/*key*/ ctx[12]),
            isParentExpanded: /*expanded*/ ctx[0],
            isParentArray: /*isArray*/ ctx[4],
            value: /*expanded*/ ctx[0] ? /*getValue*/ ctx[9](/*key*/ ctx[12]) : /*getPreviewValue*/ ctx[10](/*key*/ ctx[12])
        }
    });
    let if_block = !/*expanded*/ ctx[0] && /*index*/ ctx[20] < /*previewKeys*/ ctx[7].length - 1 && create_if_block_2();
    return {
        c () {
            create_component(jsonnode.$$.fragment);
            t = space();
            if (if_block) if_block.c();
            if_block_anchor = empty();
        },
        m (target, anchor) {
            mount_component(jsonnode, target, anchor);
            insert(target, t, anchor);
            if (if_block) if_block.m(target, anchor);
            insert(target, if_block_anchor, anchor);
            current = true;
        },
        p (ctx, dirty) {
            const jsonnode_changes = {};
            if (dirty & /*getKey, slicedKeys*/ 8448) jsonnode_changes.key = /*getKey*/ ctx[8](/*key*/ ctx[12]);
            if (dirty & /*expanded*/ 1) jsonnode_changes.isParentExpanded = /*expanded*/ ctx[0];
            if (dirty & /*isArray*/ 16) jsonnode_changes.isParentArray = /*isArray*/ ctx[4];
            if (dirty & /*expanded, getValue, slicedKeys, getPreviewValue*/ 9729) jsonnode_changes.value = /*expanded*/ ctx[0] ? /*getValue*/ ctx[9](/*key*/ ctx[12]) : /*getPreviewValue*/ ctx[10](/*key*/ ctx[12]);
            jsonnode.$set(jsonnode_changes);
            if (!/*expanded*/ ctx[0] && /*index*/ ctx[20] < /*previewKeys*/ ctx[7].length - 1) {
                if (if_block) ;
                else {
                    if_block = create_if_block_2();
                    if_block.c();
                    if_block.m(if_block_anchor.parentNode, if_block_anchor);
                }
            } else if (if_block) {
                if_block.d(1);
                if_block = null;
            }
        },
        i (local) {
            if (current) return;
            transition_in(jsonnode.$$.fragment, local);
            current = true;
        },
        o (local) {
            transition_out(jsonnode.$$.fragment, local);
            current = false;
        },
        d (detaching) {
            destroy_component(jsonnode, detaching);
            if (detaching) detach(t);
            if (if_block) if_block.d(detaching);
            if (detaching) detach(if_block_anchor);
        }
    };
}
// (71:8) {#if slicedKeys.length < previewKeys.length }
function create_if_block_1(ctx) {
    let span;
    return {
        c () {
            span = element("span");
            span.textContent = "…";
        },
        m (target, anchor) {
            insert(target, span, anchor);
        },
        d (detaching) {
            if (detaching) detach(span);
        }
    };
}
function create_fragment$5(ctx) {
    let li;
    let label_1;
    let t0;
    let jsonkey;
    let t1;
    let span1;
    let span0;
    let t2;
    let t3;
    let t4;
    let current_block_type_index;
    let if_block1;
    let t5;
    let span2;
    let t6;
    let current;
    let mounted;
    let dispose;
    let if_block0 = /*expandable*/ ctx[11] && /*isParentExpanded*/ ctx[2] && create_if_block_3(ctx);
    jsonkey = new JSONKey({
        props: {
            key: /*key*/ ctx[12],
            colon: /*context*/ ctx[14].colon,
            isParentExpanded: /*isParentExpanded*/ ctx[2],
            isParentArray: /*isParentArray*/ ctx[3]
        }
    });
    jsonkey.$on("click", /*toggleExpand*/ ctx[15]);
    const if_block_creators = [
        create_if_block$2,
        create_else_block
    ];
    const if_blocks = [];
    function select_block_type(ctx, dirty) {
        if (/*isParentExpanded*/ ctx[2]) return 0;
        return 1;
    }
    current_block_type_index = select_block_type(ctx);
    if_block1 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    return {
        c () {
            li = element("li");
            label_1 = element("label");
            if (if_block0) if_block0.c();
            t0 = space();
            create_component(jsonkey.$$.fragment);
            t1 = space();
            span1 = element("span");
            span0 = element("span");
            t2 = text(/*label*/ ctx[1]);
            t3 = text(/*bracketOpen*/ ctx[5]);
            t4 = space();
            if_block1.c();
            t5 = space();
            span2 = element("span");
            t6 = text(/*bracketClose*/ ctx[6]);
            attr(label_1, "class", "svelte-rwxv37");
            attr(li, "class", "svelte-rwxv37");
            toggle_class(li, "indent", /*isParentExpanded*/ ctx[2]);
        },
        m (target, anchor) {
            insert(target, li, anchor);
            append(li, label_1);
            if (if_block0) if_block0.m(label_1, null);
            append(label_1, t0);
            mount_component(jsonkey, label_1, null);
            append(label_1, t1);
            append(label_1, span1);
            append(span1, span0);
            append(span0, t2);
            append(span1, t3);
            append(li, t4);
            if_blocks[current_block_type_index].m(li, null);
            append(li, t5);
            append(li, span2);
            append(span2, t6);
            current = true;
            if (!mounted) {
                dispose = listen(span1, "click", /*toggleExpand*/ ctx[15]);
                mounted = true;
            }
        },
        p (ctx, [dirty]) {
            if (/*expandable*/ ctx[11] && /*isParentExpanded*/ ctx[2]) {
                if (if_block0) {
                    if_block0.p(ctx, dirty);
                    if (dirty & /*expandable, isParentExpanded*/ 2052) transition_in(if_block0, 1);
                } else {
                    if_block0 = create_if_block_3(ctx);
                    if_block0.c();
                    transition_in(if_block0, 1);
                    if_block0.m(label_1, t0);
                }
            } else if (if_block0) {
                group_outros();
                transition_out(if_block0, 1, 1, ()=>{
                    if_block0 = null;
                });
                check_outros();
            }
            const jsonkey_changes = {};
            if (dirty & /*key*/ 4096) jsonkey_changes.key = /*key*/ ctx[12];
            if (dirty & /*isParentExpanded*/ 4) jsonkey_changes.isParentExpanded = /*isParentExpanded*/ ctx[2];
            if (dirty & /*isParentArray*/ 8) jsonkey_changes.isParentArray = /*isParentArray*/ ctx[3];
            jsonkey.$set(jsonkey_changes);
            if (!current || dirty & /*label*/ 2) set_data(t2, /*label*/ ctx[1]);
            if (!current || dirty & /*bracketOpen*/ 32) set_data(t3, /*bracketOpen*/ ctx[5]);
            let previous_block_index = current_block_type_index;
            current_block_type_index = select_block_type(ctx);
            if (current_block_type_index === previous_block_index) if_blocks[current_block_type_index].p(ctx, dirty);
            else {
                group_outros();
                transition_out(if_blocks[previous_block_index], 1, 1, ()=>{
                    if_blocks[previous_block_index] = null;
                });
                check_outros();
                if_block1 = if_blocks[current_block_type_index];
                if (!if_block1) {
                    if_block1 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
                    if_block1.c();
                } else if_block1.p(ctx, dirty);
                transition_in(if_block1, 1);
                if_block1.m(li, t5);
            }
            if (!current || dirty & /*bracketClose*/ 64) set_data(t6, /*bracketClose*/ ctx[6]);
            if (dirty & /*isParentExpanded*/ 4) toggle_class(li, "indent", /*isParentExpanded*/ ctx[2]);
        },
        i (local) {
            if (current) return;
            transition_in(if_block0);
            transition_in(jsonkey.$$.fragment, local);
            transition_in(if_block1);
            current = true;
        },
        o (local) {
            transition_out(if_block0);
            transition_out(jsonkey.$$.fragment, local);
            transition_out(if_block1);
            current = false;
        },
        d (detaching) {
            if (detaching) detach(li);
            if (if_block0) if_block0.d();
            destroy_component(jsonkey);
            if_blocks[current_block_type_index].d();
            mounted = false;
            dispose();
        }
    };
}
function instance$5($$self, $$props, $$invalidate) {
    let slicedKeys;
    let { key , keys , colon =":" , label ="" , isParentExpanded , isParentArray , isArray =false , bracketOpen , bracketClose  } = $$props;
    let { previewKeys =keys  } = $$props;
    let { getKey =(key)=>key  } = $$props;
    let { getValue =(key)=>key  } = $$props;
    let { getPreviewValue =getValue  } = $$props;
    let { expanded =false , expandable =true  } = $$props;
    const context = getContext(contextKey);
    setContext(contextKey, {
        ...context,
        colon
    });
    function toggleExpand() {
        $$invalidate(0, expanded = !expanded);
    }
    function expand() {
        $$invalidate(0, expanded = true);
    }
    $$self.$$set = ($$props)=>{
        if ("key" in $$props) $$invalidate(12, key = $$props.key);
        if ("keys" in $$props) $$invalidate(17, keys = $$props.keys);
        if ("colon" in $$props) $$invalidate(18, colon = $$props.colon);
        if ("label" in $$props) $$invalidate(1, label = $$props.label);
        if ("isParentExpanded" in $$props) $$invalidate(2, isParentExpanded = $$props.isParentExpanded);
        if ("isParentArray" in $$props) $$invalidate(3, isParentArray = $$props.isParentArray);
        if ("isArray" in $$props) $$invalidate(4, isArray = $$props.isArray);
        if ("bracketOpen" in $$props) $$invalidate(5, bracketOpen = $$props.bracketOpen);
        if ("bracketClose" in $$props) $$invalidate(6, bracketClose = $$props.bracketClose);
        if ("previewKeys" in $$props) $$invalidate(7, previewKeys = $$props.previewKeys);
        if ("getKey" in $$props) $$invalidate(8, getKey = $$props.getKey);
        if ("getValue" in $$props) $$invalidate(9, getValue = $$props.getValue);
        if ("getPreviewValue" in $$props) $$invalidate(10, getPreviewValue = $$props.getPreviewValue);
        if ("expanded" in $$props) $$invalidate(0, expanded = $$props.expanded);
        if ("expandable" in $$props) $$invalidate(11, expandable = $$props.expandable);
    };
    $$self.$$.update = ()=>{
        if ($$self.$$.dirty & /*isParentExpanded*/ 4) {
            if (!isParentExpanded) $$invalidate(0, expanded = false);
        }
        if ($$self.$$.dirty & /*expanded, keys, previewKeys*/ 131201) $$invalidate(13, slicedKeys = expanded ? keys : previewKeys.slice(0, 5));
    };
    return [
        expanded,
        label,
        isParentExpanded,
        isParentArray,
        isArray,
        bracketOpen,
        bracketClose,
        previewKeys,
        getKey,
        getValue,
        getPreviewValue,
        expandable,
        key,
        slicedKeys,
        context,
        toggleExpand,
        expand,
        keys,
        colon
    ];
}
class JSONNested extends SvelteComponent {
    constructor(options){
        super();
        init(this, options, instance$5, create_fragment$5, safe_not_equal, {
            key: 12,
            keys: 17,
            colon: 18,
            label: 1,
            isParentExpanded: 2,
            isParentArray: 3,
            isArray: 4,
            bracketOpen: 5,
            bracketClose: 6,
            previewKeys: 7,
            getKey: 8,
            getValue: 9,
            getPreviewValue: 10,
            expanded: 0,
            expandable: 11
        }, add_css$4);
    }
}
/* node_modules/svelte-json-tree-auto/src/JSONObjectNode.svelte generated by Svelte v3.49.0 */ function create_fragment$6(ctx) {
    let jsonnested;
    let current;
    jsonnested = new JSONNested({
        props: {
            key: /*key*/ ctx[0],
            expanded: /*expanded*/ ctx[4],
            isParentExpanded: /*isParentExpanded*/ ctx[1],
            isParentArray: /*isParentArray*/ ctx[2],
            keys: /*keys*/ ctx[5],
            previewKeys: /*keys*/ ctx[5],
            getValue: /*getValue*/ ctx[6],
            label: "" + /*nodeType*/ (ctx[3] + " "),
            bracketOpen: "{",
            bracketClose: "}"
        }
    });
    return {
        c () {
            create_component(jsonnested.$$.fragment);
        },
        m (target, anchor) {
            mount_component(jsonnested, target, anchor);
            current = true;
        },
        p (ctx, [dirty]) {
            const jsonnested_changes = {};
            if (dirty & /*key*/ 1) jsonnested_changes.key = /*key*/ ctx[0];
            if (dirty & /*expanded*/ 16) jsonnested_changes.expanded = /*expanded*/ ctx[4];
            if (dirty & /*isParentExpanded*/ 2) jsonnested_changes.isParentExpanded = /*isParentExpanded*/ ctx[1];
            if (dirty & /*isParentArray*/ 4) jsonnested_changes.isParentArray = /*isParentArray*/ ctx[2];
            if (dirty & /*keys*/ 32) jsonnested_changes.keys = /*keys*/ ctx[5];
            if (dirty & /*keys*/ 32) jsonnested_changes.previewKeys = /*keys*/ ctx[5];
            if (dirty & /*nodeType*/ 8) jsonnested_changes.label = "" + /*nodeType*/ (ctx[3] + " ");
            jsonnested.$set(jsonnested_changes);
        },
        i (local) {
            if (current) return;
            transition_in(jsonnested.$$.fragment, local);
            current = true;
        },
        o (local) {
            transition_out(jsonnested.$$.fragment, local);
            current = false;
        },
        d (detaching) {
            destroy_component(jsonnested, detaching);
        }
    };
}
function instance$6($$self, $$props, $$invalidate) {
    let keys;
    let { key , value , isParentExpanded , isParentArray , nodeType  } = $$props;
    let { expanded =true  } = $$props;
    function getValue(key) {
        return value[key];
    }
    $$self.$$set = ($$props)=>{
        if ("key" in $$props) $$invalidate(0, key = $$props.key);
        if ("value" in $$props) $$invalidate(7, value = $$props.value);
        if ("isParentExpanded" in $$props) $$invalidate(1, isParentExpanded = $$props.isParentExpanded);
        if ("isParentArray" in $$props) $$invalidate(2, isParentArray = $$props.isParentArray);
        if ("nodeType" in $$props) $$invalidate(3, nodeType = $$props.nodeType);
        if ("expanded" in $$props) $$invalidate(4, expanded = $$props.expanded);
    };
    $$self.$$.update = ()=>{
        if ($$self.$$.dirty & /*value*/ 128) $$invalidate(5, keys = Object.getOwnPropertyNames(value));
    };
    return [
        key,
        isParentExpanded,
        isParentArray,
        nodeType,
        expanded,
        keys,
        getValue,
        value
    ];
}
class JSONObjectNode extends SvelteComponent {
    constructor(options){
        super();
        init(this, options, instance$6, create_fragment$6, safe_not_equal, {
            key: 0,
            value: 7,
            isParentExpanded: 1,
            isParentArray: 2,
            nodeType: 3,
            expanded: 4
        });
    }
}
/* node_modules/svelte-json-tree-auto/src/JSONArrayNode.svelte generated by Svelte v3.49.0 */ function create_fragment$7(ctx) {
    let jsonnested;
    let current;
    jsonnested = new JSONNested({
        props: {
            key: /*key*/ ctx[0],
            expanded: /*expanded*/ ctx[4],
            isParentExpanded: /*isParentExpanded*/ ctx[2],
            isParentArray: /*isParentArray*/ ctx[3],
            isArray: true,
            keys: /*keys*/ ctx[5],
            previewKeys: /*previewKeys*/ ctx[6],
            getValue: /*getValue*/ ctx[7],
            label: "Array(" + /*value*/ ctx[1].length + ")",
            bracketOpen: "[",
            bracketClose: "]"
        }
    });
    return {
        c () {
            create_component(jsonnested.$$.fragment);
        },
        m (target, anchor) {
            mount_component(jsonnested, target, anchor);
            current = true;
        },
        p (ctx, [dirty]) {
            const jsonnested_changes = {};
            if (dirty & /*key*/ 1) jsonnested_changes.key = /*key*/ ctx[0];
            if (dirty & /*expanded*/ 16) jsonnested_changes.expanded = /*expanded*/ ctx[4];
            if (dirty & /*isParentExpanded*/ 4) jsonnested_changes.isParentExpanded = /*isParentExpanded*/ ctx[2];
            if (dirty & /*isParentArray*/ 8) jsonnested_changes.isParentArray = /*isParentArray*/ ctx[3];
            if (dirty & /*keys*/ 32) jsonnested_changes.keys = /*keys*/ ctx[5];
            if (dirty & /*previewKeys*/ 64) jsonnested_changes.previewKeys = /*previewKeys*/ ctx[6];
            if (dirty & /*value*/ 2) jsonnested_changes.label = "Array(" + /*value*/ ctx[1].length + ")";
            jsonnested.$set(jsonnested_changes);
        },
        i (local) {
            if (current) return;
            transition_in(jsonnested.$$.fragment, local);
            current = true;
        },
        o (local) {
            transition_out(jsonnested.$$.fragment, local);
            current = false;
        },
        d (detaching) {
            destroy_component(jsonnested, detaching);
        }
    };
}
function instance$7($$self, $$props, $$invalidate) {
    let keys;
    let previewKeys;
    let { key , value , isParentExpanded , isParentArray  } = $$props;
    let { expanded =JSON.stringify(value).length < 1024  } = $$props;
    const filteredKey = new Set([
        "length"
    ]);
    function getValue(key) {
        return value[key];
    }
    $$self.$$set = ($$props)=>{
        if ("key" in $$props) $$invalidate(0, key = $$props.key);
        if ("value" in $$props) $$invalidate(1, value = $$props.value);
        if ("isParentExpanded" in $$props) $$invalidate(2, isParentExpanded = $$props.isParentExpanded);
        if ("isParentArray" in $$props) $$invalidate(3, isParentArray = $$props.isParentArray);
        if ("expanded" in $$props) $$invalidate(4, expanded = $$props.expanded);
    };
    $$self.$$.update = ()=>{
        if ($$self.$$.dirty & /*value*/ 2) $$invalidate(5, keys = Object.getOwnPropertyNames(value));
        if ($$self.$$.dirty & /*keys*/ 32) $$invalidate(6, previewKeys = keys.filter((key)=>!filteredKey.has(key)));
    };
    return [
        key,
        value,
        isParentExpanded,
        isParentArray,
        expanded,
        keys,
        previewKeys,
        getValue
    ];
}
class JSONArrayNode extends SvelteComponent {
    constructor(options){
        super();
        init(this, options, instance$7, create_fragment$7, safe_not_equal, {
            key: 0,
            value: 1,
            isParentExpanded: 2,
            isParentArray: 3,
            expanded: 4
        });
    }
}
/* node_modules/svelte-json-tree-auto/src/JSONIterableArrayNode.svelte generated by Svelte v3.49.0 */ function create_fragment$8(ctx) {
    let jsonnested;
    let current;
    jsonnested = new JSONNested({
        props: {
            key: /*key*/ ctx[0],
            isParentExpanded: /*isParentExpanded*/ ctx[1],
            isParentArray: /*isParentArray*/ ctx[2],
            keys: /*keys*/ ctx[4],
            getKey,
            getValue,
            isArray: true,
            label: "" + /*nodeType*/ (ctx[3] + "(" + /*keys*/ ctx[4].length + ")"),
            bracketOpen: "{",
            bracketClose: "}"
        }
    });
    return {
        c () {
            create_component(jsonnested.$$.fragment);
        },
        m (target, anchor) {
            mount_component(jsonnested, target, anchor);
            current = true;
        },
        p (ctx, [dirty]) {
            const jsonnested_changes = {};
            if (dirty & /*key*/ 1) jsonnested_changes.key = /*key*/ ctx[0];
            if (dirty & /*isParentExpanded*/ 2) jsonnested_changes.isParentExpanded = /*isParentExpanded*/ ctx[1];
            if (dirty & /*isParentArray*/ 4) jsonnested_changes.isParentArray = /*isParentArray*/ ctx[2];
            if (dirty & /*keys*/ 16) jsonnested_changes.keys = /*keys*/ ctx[4];
            if (dirty & /*nodeType, keys*/ 24) jsonnested_changes.label = "" + /*nodeType*/ (ctx[3] + "(" + /*keys*/ ctx[4].length + ")");
            jsonnested.$set(jsonnested_changes);
        },
        i (local) {
            if (current) return;
            transition_in(jsonnested.$$.fragment, local);
            current = true;
        },
        o (local) {
            transition_out(jsonnested.$$.fragment, local);
            current = false;
        },
        d (detaching) {
            destroy_component(jsonnested, detaching);
        }
    };
}
function getKey(key) {
    return String(key[0]);
}
function getValue(key) {
    return key[1];
}
function instance$8($$self, $$props, $$invalidate) {
    let { key , value , isParentExpanded , isParentArray , nodeType  } = $$props;
    let keys = [];
    $$self.$$set = ($$props)=>{
        if ("key" in $$props) $$invalidate(0, key = $$props.key);
        if ("value" in $$props) $$invalidate(5, value = $$props.value);
        if ("isParentExpanded" in $$props) $$invalidate(1, isParentExpanded = $$props.isParentExpanded);
        if ("isParentArray" in $$props) $$invalidate(2, isParentArray = $$props.isParentArray);
        if ("nodeType" in $$props) $$invalidate(3, nodeType = $$props.nodeType);
    };
    $$self.$$.update = ()=>{
        if ($$self.$$.dirty & /*value*/ 32) {
            let result = [];
            let i = 0;
            for (const entry of value)result.push([
                i++,
                entry
            ]);
            $$invalidate(4, keys = result);
        }
    };
    return [
        key,
        isParentExpanded,
        isParentArray,
        nodeType,
        keys,
        value
    ];
}
class JSONIterableArrayNode extends SvelteComponent {
    constructor(options){
        super();
        init(this, options, instance$8, create_fragment$8, safe_not_equal, {
            key: 0,
            value: 5,
            isParentExpanded: 1,
            isParentArray: 2,
            nodeType: 3
        });
    }
}
class MapEntry {
    constructor(key, value){
        this.key = key;
        this.value = value;
    }
}
/* node_modules/svelte-json-tree-auto/src/JSONIterableMapNode.svelte generated by Svelte v3.49.0 */ function create_fragment$9(ctx) {
    let jsonnested;
    let current;
    jsonnested = new JSONNested({
        props: {
            key: /*key*/ ctx[0],
            isParentExpanded: /*isParentExpanded*/ ctx[1],
            isParentArray: /*isParentArray*/ ctx[2],
            keys: /*keys*/ ctx[4],
            getKey: getKey$1,
            getValue: getValue$1,
            label: "" + /*nodeType*/ (ctx[3] + "(" + /*keys*/ ctx[4].length + ")"),
            colon: "",
            bracketOpen: "{",
            bracketClose: "}"
        }
    });
    return {
        c () {
            create_component(jsonnested.$$.fragment);
        },
        m (target, anchor) {
            mount_component(jsonnested, target, anchor);
            current = true;
        },
        p (ctx, [dirty]) {
            const jsonnested_changes = {};
            if (dirty & /*key*/ 1) jsonnested_changes.key = /*key*/ ctx[0];
            if (dirty & /*isParentExpanded*/ 2) jsonnested_changes.isParentExpanded = /*isParentExpanded*/ ctx[1];
            if (dirty & /*isParentArray*/ 4) jsonnested_changes.isParentArray = /*isParentArray*/ ctx[2];
            if (dirty & /*keys*/ 16) jsonnested_changes.keys = /*keys*/ ctx[4];
            if (dirty & /*nodeType, keys*/ 24) jsonnested_changes.label = "" + /*nodeType*/ (ctx[3] + "(" + /*keys*/ ctx[4].length + ")");
            jsonnested.$set(jsonnested_changes);
        },
        i (local) {
            if (current) return;
            transition_in(jsonnested.$$.fragment, local);
            current = true;
        },
        o (local) {
            transition_out(jsonnested.$$.fragment, local);
            current = false;
        },
        d (detaching) {
            destroy_component(jsonnested, detaching);
        }
    };
}
function getKey$1(entry) {
    return entry[0];
}
function getValue$1(entry) {
    return entry[1];
}
function instance$9($$self, $$props, $$invalidate) {
    let { key , value , isParentExpanded , isParentArray , nodeType  } = $$props;
    let keys = [];
    $$self.$$set = ($$props)=>{
        if ("key" in $$props) $$invalidate(0, key = $$props.key);
        if ("value" in $$props) $$invalidate(5, value = $$props.value);
        if ("isParentExpanded" in $$props) $$invalidate(1, isParentExpanded = $$props.isParentExpanded);
        if ("isParentArray" in $$props) $$invalidate(2, isParentArray = $$props.isParentArray);
        if ("nodeType" in $$props) $$invalidate(3, nodeType = $$props.nodeType);
    };
    $$self.$$.update = ()=>{
        if ($$self.$$.dirty & /*value*/ 32) {
            let result = [];
            let i = 0;
            for (const entry of value)result.push([
                i++,
                new MapEntry(entry[0], entry[1])
            ]);
            $$invalidate(4, keys = result);
        }
    };
    return [
        key,
        isParentExpanded,
        isParentArray,
        nodeType,
        keys,
        value
    ];
}
class JSONIterableMapNode extends SvelteComponent {
    constructor(options){
        super();
        init(this, options, instance$9, create_fragment$9, safe_not_equal, {
            key: 0,
            value: 5,
            isParentExpanded: 1,
            isParentArray: 2,
            nodeType: 3
        });
    }
}
/* node_modules/svelte-json-tree-auto/src/JSONMapEntryNode.svelte generated by Svelte v3.49.0 */ function create_fragment$a(ctx) {
    let jsonnested;
    let current;
    jsonnested = new JSONNested({
        props: {
            expanded: /*expanded*/ ctx[4],
            isParentExpanded: /*isParentExpanded*/ ctx[2],
            isParentArray: /*isParentArray*/ ctx[3],
            key: /*isParentExpanded*/ ctx[2] ? String(/*key*/ ctx[0]) : /*value*/ ctx[1].key,
            keys: /*keys*/ ctx[5],
            getValue: /*getValue*/ ctx[6],
            label: /*isParentExpanded*/ ctx[2] ? "Entry " : "=> ",
            bracketOpen: "{",
            bracketClose: "}"
        }
    });
    return {
        c () {
            create_component(jsonnested.$$.fragment);
        },
        m (target, anchor) {
            mount_component(jsonnested, target, anchor);
            current = true;
        },
        p (ctx, [dirty]) {
            const jsonnested_changes = {};
            if (dirty & /*expanded*/ 16) jsonnested_changes.expanded = /*expanded*/ ctx[4];
            if (dirty & /*isParentExpanded*/ 4) jsonnested_changes.isParentExpanded = /*isParentExpanded*/ ctx[2];
            if (dirty & /*isParentArray*/ 8) jsonnested_changes.isParentArray = /*isParentArray*/ ctx[3];
            if (dirty & /*isParentExpanded, key, value*/ 7) jsonnested_changes.key = /*isParentExpanded*/ ctx[2] ? String(/*key*/ ctx[0]) : /*value*/ ctx[1].key;
            if (dirty & /*isParentExpanded*/ 4) jsonnested_changes.label = /*isParentExpanded*/ ctx[2] ? "Entry " : "=> ";
            jsonnested.$set(jsonnested_changes);
        },
        i (local) {
            if (current) return;
            transition_in(jsonnested.$$.fragment, local);
            current = true;
        },
        o (local) {
            transition_out(jsonnested.$$.fragment, local);
            current = false;
        },
        d (detaching) {
            destroy_component(jsonnested, detaching);
        }
    };
}
function instance$a($$self, $$props, $$invalidate) {
    let { key , value , isParentExpanded , isParentArray  } = $$props;
    let { expanded =false  } = $$props;
    const keys = [
        "key",
        "value"
    ];
    function getValue(key) {
        return value[key];
    }
    $$self.$$set = ($$props)=>{
        if ("key" in $$props) $$invalidate(0, key = $$props.key);
        if ("value" in $$props) $$invalidate(1, value = $$props.value);
        if ("isParentExpanded" in $$props) $$invalidate(2, isParentExpanded = $$props.isParentExpanded);
        if ("isParentArray" in $$props) $$invalidate(3, isParentArray = $$props.isParentArray);
        if ("expanded" in $$props) $$invalidate(4, expanded = $$props.expanded);
    };
    return [
        key,
        value,
        isParentExpanded,
        isParentArray,
        expanded,
        keys,
        getValue
    ];
}
class JSONMapEntryNode extends SvelteComponent {
    constructor(options){
        super();
        init(this, options, instance$a, create_fragment$a, safe_not_equal, {
            key: 0,
            value: 1,
            isParentExpanded: 2,
            isParentArray: 3,
            expanded: 4
        });
    }
}
/* node_modules/svelte-json-tree-auto/src/JSONValueNode.svelte generated by Svelte v3.49.0 */ function add_css$5(target) {
    append_styles(target, "svelte-3bjyvl", "li.svelte-3bjyvl{user-select:text;word-wrap:break-word;word-break:break-all}.indent.svelte-3bjyvl{padding-left:var(--li-identation)}.String.svelte-3bjyvl{color:var(--string-color)}.Date.svelte-3bjyvl{color:var(--date-color)}.Number.svelte-3bjyvl{color:var(--number-color)}.Boolean.svelte-3bjyvl{color:var(--boolean-color)}.Null.svelte-3bjyvl{color:var(--null-color)}.Undefined.svelte-3bjyvl{color:var(--undefined-color)}.Function.svelte-3bjyvl{color:var(--function-color);font-style:italic}.Symbol.svelte-3bjyvl{color:var(--symbol-color)}");
}
function create_fragment$b(ctx) {
    let li;
    let jsonkey;
    let t0;
    let span;
    let t1_value = /*valueGetter*/ (ctx[2] ? /*valueGetter*/ ctx[2](/*value*/ ctx[1]) : /*value*/ ctx[1]) + "";
    let t1;
    let span_class_value;
    let current;
    jsonkey = new JSONKey({
        props: {
            key: /*key*/ ctx[0],
            colon: /*colon*/ ctx[6],
            isParentExpanded: /*isParentExpanded*/ ctx[3],
            isParentArray: /*isParentArray*/ ctx[4]
        }
    });
    return {
        c () {
            li = element("li");
            create_component(jsonkey.$$.fragment);
            t0 = space();
            span = element("span");
            t1 = text(t1_value);
            attr(span, "class", span_class_value = "" + (null_to_empty(/*nodeType*/ ctx[5]) + " svelte-3bjyvl"));
            attr(li, "class", "svelte-3bjyvl");
            toggle_class(li, "indent", /*isParentExpanded*/ ctx[3]);
        },
        m (target, anchor) {
            insert(target, li, anchor);
            mount_component(jsonkey, li, null);
            append(li, t0);
            append(li, span);
            append(span, t1);
            current = true;
        },
        p (ctx, [dirty]) {
            const jsonkey_changes = {};
            if (dirty & /*key*/ 1) jsonkey_changes.key = /*key*/ ctx[0];
            if (dirty & /*isParentExpanded*/ 8) jsonkey_changes.isParentExpanded = /*isParentExpanded*/ ctx[3];
            if (dirty & /*isParentArray*/ 16) jsonkey_changes.isParentArray = /*isParentArray*/ ctx[4];
            jsonkey.$set(jsonkey_changes);
            if ((!current || dirty & /*valueGetter, value*/ 6) && t1_value !== (t1_value = /*valueGetter*/ (ctx[2] ? /*valueGetter*/ ctx[2](/*value*/ ctx[1]) : /*value*/ ctx[1]) + "")) set_data(t1, t1_value);
            if (!current || dirty & /*nodeType*/ 32 && span_class_value !== (span_class_value = "" + (null_to_empty(/*nodeType*/ ctx[5]) + " svelte-3bjyvl"))) attr(span, "class", span_class_value);
            if (dirty & /*isParentExpanded*/ 8) toggle_class(li, "indent", /*isParentExpanded*/ ctx[3]);
        },
        i (local) {
            if (current) return;
            transition_in(jsonkey.$$.fragment, local);
            current = true;
        },
        o (local) {
            transition_out(jsonkey.$$.fragment, local);
            current = false;
        },
        d (detaching) {
            if (detaching) detach(li);
            destroy_component(jsonkey);
        }
    };
}
function instance$b($$self, $$props, $$invalidate) {
    let { key , value , valueGetter =null , isParentExpanded , isParentArray , nodeType  } = $$props;
    const { colon  } = getContext(contextKey);
    $$self.$$set = ($$props)=>{
        if ("key" in $$props) $$invalidate(0, key = $$props.key);
        if ("value" in $$props) $$invalidate(1, value = $$props.value);
        if ("valueGetter" in $$props) $$invalidate(2, valueGetter = $$props.valueGetter);
        if ("isParentExpanded" in $$props) $$invalidate(3, isParentExpanded = $$props.isParentExpanded);
        if ("isParentArray" in $$props) $$invalidate(4, isParentArray = $$props.isParentArray);
        if ("nodeType" in $$props) $$invalidate(5, nodeType = $$props.nodeType);
    };
    return [
        key,
        value,
        valueGetter,
        isParentExpanded,
        isParentArray,
        nodeType,
        colon
    ];
}
class JSONValueNode extends SvelteComponent {
    constructor(options){
        super();
        init(this, options, instance$b, create_fragment$b, safe_not_equal, {
            key: 0,
            value: 1,
            valueGetter: 2,
            isParentExpanded: 3,
            isParentArray: 4,
            nodeType: 5
        }, add_css$5);
    }
}
/* node_modules/svelte-json-tree-auto/src/ErrorNode.svelte generated by Svelte v3.49.0 */ function add_css$6(target) {
    append_styles(target, "svelte-1ca3gb2", "li.svelte-1ca3gb2{user-select:text;word-wrap:break-word;word-break:break-all}.indent.svelte-1ca3gb2{padding-left:var(--li-identation)}.collapse.svelte-1ca3gb2{--li-display:inline;display:inline;font-style:italic}");
}
function get_each_context$2(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[8] = list[i];
    child_ctx[10] = i;
    return child_ctx;
}
// (40:2) {#if isParentExpanded}
function create_if_block_2$1(ctx) {
    let jsonarrow;
    let current;
    jsonarrow = new JSONArrow({
        props: {
            expanded: /*expanded*/ ctx[0]
        }
    });
    jsonarrow.$on("click", /*toggleExpand*/ ctx[7]);
    return {
        c () {
            create_component(jsonarrow.$$.fragment);
        },
        m (target, anchor) {
            mount_component(jsonarrow, target, anchor);
            current = true;
        },
        p (ctx, dirty) {
            const jsonarrow_changes = {};
            if (dirty & /*expanded*/ 1) jsonarrow_changes.expanded = /*expanded*/ ctx[0];
            jsonarrow.$set(jsonarrow_changes);
        },
        i (local) {
            if (current) return;
            transition_in(jsonarrow.$$.fragment, local);
            current = true;
        },
        o (local) {
            transition_out(jsonarrow.$$.fragment, local);
            current = false;
        },
        d (detaching) {
            destroy_component(jsonarrow, detaching);
        }
    };
}
// (45:2) {#if isParentExpanded}
function create_if_block$3(ctx) {
    let ul;
    let current;
    let if_block = /*expanded*/ ctx[0] && create_if_block_1$1(ctx);
    return {
        c () {
            ul = element("ul");
            if (if_block) if_block.c();
            attr(ul, "class", "svelte-1ca3gb2");
            toggle_class(ul, "collapse", !/*expanded*/ ctx[0]);
        },
        m (target, anchor) {
            insert(target, ul, anchor);
            if (if_block) if_block.m(ul, null);
            current = true;
        },
        p (ctx, dirty) {
            if (/*expanded*/ ctx[0]) {
                if (if_block) {
                    if_block.p(ctx, dirty);
                    if (dirty & /*expanded*/ 1) transition_in(if_block, 1);
                } else {
                    if_block = create_if_block_1$1(ctx);
                    if_block.c();
                    transition_in(if_block, 1);
                    if_block.m(ul, null);
                }
            } else if (if_block) {
                group_outros();
                transition_out(if_block, 1, 1, ()=>{
                    if_block = null;
                });
                check_outros();
            }
            if (dirty & /*expanded*/ 1) toggle_class(ul, "collapse", !/*expanded*/ ctx[0]);
        },
        i (local) {
            if (current) return;
            transition_in(if_block);
            current = true;
        },
        o (local) {
            transition_out(if_block);
            current = false;
        },
        d (detaching) {
            if (detaching) detach(ul);
            if (if_block) if_block.d();
        }
    };
}
// (47:6) {#if expanded}
function create_if_block_1$1(ctx) {
    let jsonnode;
    let t0;
    let li;
    let jsonkey;
    let t1;
    let span;
    let current;
    jsonnode = new JSONNode({
        props: {
            key: "message",
            value: /*value*/ ctx[2].message
        }
    });
    jsonkey = new JSONKey({
        props: {
            key: "stack",
            colon: ":",
            isParentExpanded: /*isParentExpanded*/ ctx[3]
        }
    });
    let each_value = /*stack*/ ctx[5];
    let each_blocks = [];
    for(let i = 0; i < each_value.length; i += 1)each_blocks[i] = create_each_block$2(get_each_context$2(ctx, each_value, i));
    return {
        c () {
            create_component(jsonnode.$$.fragment);
            t0 = space();
            li = element("li");
            create_component(jsonkey.$$.fragment);
            t1 = space();
            span = element("span");
            for(let i = 0; i < each_blocks.length; i += 1)each_blocks[i].c();
            attr(li, "class", "svelte-1ca3gb2");
        },
        m (target, anchor) {
            mount_component(jsonnode, target, anchor);
            insert(target, t0, anchor);
            insert(target, li, anchor);
            mount_component(jsonkey, li, null);
            append(li, t1);
            append(li, span);
            for(let i = 0; i < each_blocks.length; i += 1)each_blocks[i].m(span, null);
            current = true;
        },
        p (ctx, dirty) {
            const jsonnode_changes = {};
            if (dirty & /*value*/ 4) jsonnode_changes.value = /*value*/ ctx[2].message;
            jsonnode.$set(jsonnode_changes);
            const jsonkey_changes = {};
            if (dirty & /*isParentExpanded*/ 8) jsonkey_changes.isParentExpanded = /*isParentExpanded*/ ctx[3];
            jsonkey.$set(jsonkey_changes);
            if (dirty & /*stack*/ 32) {
                each_value = /*stack*/ ctx[5];
                let i;
                for(i = 0; i < each_value.length; i += 1){
                    const child_ctx = get_each_context$2(ctx, each_value, i);
                    if (each_blocks[i]) each_blocks[i].p(child_ctx, dirty);
                    else {
                        each_blocks[i] = create_each_block$2(child_ctx);
                        each_blocks[i].c();
                        each_blocks[i].m(span, null);
                    }
                }
                for(; i < each_blocks.length; i += 1)each_blocks[i].d(1);
                each_blocks.length = each_value.length;
            }
        },
        i (local) {
            if (current) return;
            transition_in(jsonnode.$$.fragment, local);
            transition_in(jsonkey.$$.fragment, local);
            current = true;
        },
        o (local) {
            transition_out(jsonnode.$$.fragment, local);
            transition_out(jsonkey.$$.fragment, local);
            current = false;
        },
        d (detaching) {
            destroy_component(jsonnode, detaching);
            if (detaching) detach(t0);
            if (detaching) detach(li);
            destroy_component(jsonkey);
            destroy_each(each_blocks, detaching);
        }
    };
}
// (52:12) {#each stack as line, index}
function create_each_block$2(ctx) {
    let span;
    let t_value = /*line*/ ctx[8] + "";
    let t;
    let br;
    return {
        c () {
            span = element("span");
            t = text(t_value);
            br = element("br");
            attr(span, "class", "svelte-1ca3gb2");
            toggle_class(span, "indent", /*index*/ ctx[10] > 0);
        },
        m (target, anchor) {
            insert(target, span, anchor);
            append(span, t);
            insert(target, br, anchor);
        },
        p (ctx, dirty) {
            if (dirty & /*stack*/ 32 && t_value !== (t_value = /*line*/ ctx[8] + "")) set_data(t, t_value);
        },
        d (detaching) {
            if (detaching) detach(span);
            if (detaching) detach(br);
        }
    };
}
function create_fragment$c(ctx) {
    let li;
    let t0;
    let jsonkey;
    let t1;
    let span;
    let t2;
    let t3_value = /*expanded*/ (ctx[0] ? "" : /*value*/ ctx[2].message) + "";
    let t3;
    let t4;
    let current;
    let mounted;
    let dispose;
    let if_block0 = /*isParentExpanded*/ ctx[3] && create_if_block_2$1(ctx);
    jsonkey = new JSONKey({
        props: {
            key: /*key*/ ctx[1],
            colon: /*context*/ ctx[6].colon,
            isParentExpanded: /*isParentExpanded*/ ctx[3],
            isParentArray: /*isParentArray*/ ctx[4]
        }
    });
    let if_block1 = /*isParentExpanded*/ ctx[3] && create_if_block$3(ctx);
    return {
        c () {
            li = element("li");
            if (if_block0) if_block0.c();
            t0 = space();
            create_component(jsonkey.$$.fragment);
            t1 = space();
            span = element("span");
            t2 = text("Error: ");
            t3 = text(t3_value);
            t4 = space();
            if (if_block1) if_block1.c();
            attr(li, "class", "svelte-1ca3gb2");
            toggle_class(li, "indent", /*isParentExpanded*/ ctx[3]);
        },
        m (target, anchor) {
            insert(target, li, anchor);
            if (if_block0) if_block0.m(li, null);
            append(li, t0);
            mount_component(jsonkey, li, null);
            append(li, t1);
            append(li, span);
            append(span, t2);
            append(span, t3);
            append(li, t4);
            if (if_block1) if_block1.m(li, null);
            current = true;
            if (!mounted) {
                dispose = listen(span, "click", /*toggleExpand*/ ctx[7]);
                mounted = true;
            }
        },
        p (ctx, [dirty]) {
            if (/*isParentExpanded*/ ctx[3]) {
                if (if_block0) {
                    if_block0.p(ctx, dirty);
                    if (dirty & /*isParentExpanded*/ 8) transition_in(if_block0, 1);
                } else {
                    if_block0 = create_if_block_2$1(ctx);
                    if_block0.c();
                    transition_in(if_block0, 1);
                    if_block0.m(li, t0);
                }
            } else if (if_block0) {
                group_outros();
                transition_out(if_block0, 1, 1, ()=>{
                    if_block0 = null;
                });
                check_outros();
            }
            const jsonkey_changes = {};
            if (dirty & /*key*/ 2) jsonkey_changes.key = /*key*/ ctx[1];
            if (dirty & /*isParentExpanded*/ 8) jsonkey_changes.isParentExpanded = /*isParentExpanded*/ ctx[3];
            if (dirty & /*isParentArray*/ 16) jsonkey_changes.isParentArray = /*isParentArray*/ ctx[4];
            jsonkey.$set(jsonkey_changes);
            if ((!current || dirty & /*expanded, value*/ 5) && t3_value !== (t3_value = /*expanded*/ (ctx[0] ? "" : /*value*/ ctx[2].message) + "")) set_data(t3, t3_value);
            if (/*isParentExpanded*/ ctx[3]) {
                if (if_block1) {
                    if_block1.p(ctx, dirty);
                    if (dirty & /*isParentExpanded*/ 8) transition_in(if_block1, 1);
                } else {
                    if_block1 = create_if_block$3(ctx);
                    if_block1.c();
                    transition_in(if_block1, 1);
                    if_block1.m(li, null);
                }
            } else if (if_block1) {
                group_outros();
                transition_out(if_block1, 1, 1, ()=>{
                    if_block1 = null;
                });
                check_outros();
            }
            if (dirty & /*isParentExpanded*/ 8) toggle_class(li, "indent", /*isParentExpanded*/ ctx[3]);
        },
        i (local) {
            if (current) return;
            transition_in(if_block0);
            transition_in(jsonkey.$$.fragment, local);
            transition_in(if_block1);
            current = true;
        },
        o (local) {
            transition_out(if_block0);
            transition_out(jsonkey.$$.fragment, local);
            transition_out(if_block1);
            current = false;
        },
        d (detaching) {
            if (detaching) detach(li);
            if (if_block0) if_block0.d();
            destroy_component(jsonkey);
            if (if_block1) if_block1.d();
            mounted = false;
            dispose();
        }
    };
}
function instance$c($$self, $$props, $$invalidate) {
    let stack;
    let { key , value , isParentExpanded , isParentArray  } = $$props;
    let { expanded =false  } = $$props;
    const context = getContext(contextKey);
    setContext(contextKey, {
        ...context,
        colon: ":"
    });
    function toggleExpand() {
        $$invalidate(0, expanded = !expanded);
    }
    $$self.$$set = ($$props)=>{
        if ("key" in $$props) $$invalidate(1, key = $$props.key);
        if ("value" in $$props) $$invalidate(2, value = $$props.value);
        if ("isParentExpanded" in $$props) $$invalidate(3, isParentExpanded = $$props.isParentExpanded);
        if ("isParentArray" in $$props) $$invalidate(4, isParentArray = $$props.isParentArray);
        if ("expanded" in $$props) $$invalidate(0, expanded = $$props.expanded);
    };
    $$self.$$.update = ()=>{
        if ($$self.$$.dirty & /*value*/ 4) $$invalidate(5, stack = value.stack.split("\n"));
        if ($$self.$$.dirty & /*isParentExpanded*/ 8) {
            if (!isParentExpanded) $$invalidate(0, expanded = false);
        }
    };
    return [
        expanded,
        key,
        value,
        isParentExpanded,
        isParentArray,
        stack,
        context,
        toggleExpand
    ];
}
class ErrorNode extends SvelteComponent {
    constructor(options){
        super();
        init(this, options, instance$c, create_fragment$c, safe_not_equal, {
            key: 1,
            value: 2,
            isParentExpanded: 3,
            isParentArray: 4,
            expanded: 0
        }, add_css$6);
    }
}
function objType(obj) {
    const type = Object.prototype.toString.call(obj).slice(8, -1);
    if (type === "Object") {
        if (typeof obj[Symbol.iterator] === "function") return "Iterable";
        return obj.constructor.name;
    }
    return type;
}
/* node_modules/svelte-json-tree-auto/src/JSONNode.svelte generated by Svelte v3.49.0 */ function create_fragment$d(ctx) {
    let switch_instance;
    let switch_instance_anchor;
    let current;
    var switch_value = /*componentType*/ ctx[6];
    function switch_props(ctx) {
        return {
            props: {
                key: /*key*/ ctx[0],
                value: /*value*/ ctx[1],
                isParentExpanded: /*isParentExpanded*/ ctx[2],
                isParentArray: /*isParentArray*/ ctx[3],
                nodeType: /*nodeType*/ ctx[4],
                valueGetter: /*valueGetter*/ ctx[5]
            }
        };
    }
    if (switch_value) switch_instance = new switch_value(switch_props(ctx));
    return {
        c () {
            if (switch_instance) create_component(switch_instance.$$.fragment);
            switch_instance_anchor = empty();
        },
        m (target, anchor) {
            if (switch_instance) mount_component(switch_instance, target, anchor);
            insert(target, switch_instance_anchor, anchor);
            current = true;
        },
        p (ctx, [dirty]) {
            const switch_instance_changes = {};
            if (dirty & /*key*/ 1) switch_instance_changes.key = /*key*/ ctx[0];
            if (dirty & /*value*/ 2) switch_instance_changes.value = /*value*/ ctx[1];
            if (dirty & /*isParentExpanded*/ 4) switch_instance_changes.isParentExpanded = /*isParentExpanded*/ ctx[2];
            if (dirty & /*isParentArray*/ 8) switch_instance_changes.isParentArray = /*isParentArray*/ ctx[3];
            if (dirty & /*nodeType*/ 16) switch_instance_changes.nodeType = /*nodeType*/ ctx[4];
            if (dirty & /*valueGetter*/ 32) switch_instance_changes.valueGetter = /*valueGetter*/ ctx[5];
            if (switch_value !== (switch_value = /*componentType*/ ctx[6])) {
                if (switch_instance) {
                    group_outros();
                    const old_component = switch_instance;
                    transition_out(old_component.$$.fragment, 1, 0, ()=>{
                        destroy_component(old_component, 1);
                    });
                    check_outros();
                }
                if (switch_value) {
                    switch_instance = new switch_value(switch_props(ctx));
                    create_component(switch_instance.$$.fragment);
                    transition_in(switch_instance.$$.fragment, 1);
                    mount_component(switch_instance, switch_instance_anchor.parentNode, switch_instance_anchor);
                } else switch_instance = null;
            } else if (switch_value) switch_instance.$set(switch_instance_changes);
        },
        i (local) {
            if (current) return;
            if (switch_instance) transition_in(switch_instance.$$.fragment, local);
            current = true;
        },
        o (local) {
            if (switch_instance) transition_out(switch_instance.$$.fragment, local);
            current = false;
        },
        d (detaching) {
            if (detaching) detach(switch_instance_anchor);
            if (switch_instance) destroy_component(switch_instance, detaching);
        }
    };
}
function instance$d($$self, $$props, $$invalidate) {
    let nodeType;
    let componentType;
    let valueGetter;
    let { key , value , isParentExpanded , isParentArray  } = $$props;
    function getComponent(nodeType) {
        switch(nodeType){
            case "Object":
                return JSONObjectNode;
            case "Error":
                return ErrorNode;
            case "Array":
                return JSONArrayNode;
            case "Iterable":
            case "Map":
            case "Set":
                return typeof value.set === "function" ? JSONIterableMapNode : JSONIterableArrayNode;
            case "MapEntry":
                return JSONMapEntryNode;
            default:
                return JSONValueNode;
        }
    }
    function getValueGetter(nodeType) {
        switch(nodeType){
            case "Object":
            case "Error":
            case "Array":
            case "Iterable":
            case "Map":
            case "Set":
            case "MapEntry":
            case "Number":
                return undefined;
            case "String":
                return (raw)=>`"${raw}"`;
            case "Boolean":
                return (raw)=>raw ? "true" : "false";
            case "Date":
                return (raw)=>raw.toISOString();
            case "Null":
                return ()=>"null";
            case "Undefined":
                return ()=>"undefined";
            case "Function":
            case "Symbol":
                return (raw)=>raw.toString();
            default:
                return ()=>`<${nodeType}>`;
        }
    }
    $$self.$$set = ($$props)=>{
        if ("key" in $$props) $$invalidate(0, key = $$props.key);
        if ("value" in $$props) $$invalidate(1, value = $$props.value);
        if ("isParentExpanded" in $$props) $$invalidate(2, isParentExpanded = $$props.isParentExpanded);
        if ("isParentArray" in $$props) $$invalidate(3, isParentArray = $$props.isParentArray);
    };
    $$self.$$.update = ()=>{
        if ($$self.$$.dirty & /*value*/ 2) $$invalidate(4, nodeType = objType(value));
        if ($$self.$$.dirty & /*nodeType*/ 16) $$invalidate(6, componentType = getComponent(nodeType));
        if ($$self.$$.dirty & /*nodeType*/ 16) $$invalidate(5, valueGetter = getValueGetter(nodeType));
    };
    return [
        key,
        value,
        isParentExpanded,
        isParentArray,
        nodeType,
        valueGetter,
        componentType
    ];
}
class JSONNode extends SvelteComponent {
    constructor(options){
        super();
        init(this, options, instance$d, create_fragment$d, safe_not_equal, {
            key: 0,
            value: 1,
            isParentExpanded: 2,
            isParentArray: 3
        });
    }
}
/* node_modules/svelte-json-tree-auto/src/Root.svelte generated by Svelte v3.49.0 */ function add_css$7(target) {
    append_styles(target, "svelte-773n60", "ul.svelte-773n60{--string-color:var(--json-tree-string-color, #cb3f41);--symbol-color:var(--json-tree-symbol-color, #cb3f41);--boolean-color:var(--json-tree-boolean-color, #112aa7);--function-color:var(--json-tree-function-color, #112aa7);--number-color:var(--json-tree-number-color, #3029cf);--label-color:var(--json-tree-label-color, #871d8f);--arrow-color:var(--json-tree-arrow-color, #727272);--null-color:var(--json-tree-null-color, #8d8d8d);--undefined-color:var(--json-tree-undefined-color, #8d8d8d);--date-color:var(--json-tree-date-color, #8d8d8d);--li-identation:var(--json-tree-li-indentation, 1em);--li-line-height:var(--json-tree-li-line-height, 1.3);--li-colon-space:0.3em;font-size:var(--json-tree-font-size, 12px);font-family:var(--json-tree-font-family, 'Courier New', Courier, monospace)}ul.svelte-773n60 li{line-height:var(--li-line-height);display:var(--li-display, list-item);list-style:none}ul.svelte-773n60,ul.svelte-773n60 ul{padding:0;margin:0}");
}
function create_fragment$e(ctx) {
    let ul;
    let jsonnode;
    let current;
    jsonnode = new JSONNode({
        props: {
            key: /*key*/ ctx[0],
            value: /*value*/ ctx[1],
            isParentExpanded: true,
            isParentArray: false
        }
    });
    return {
        c () {
            ul = element("ul");
            create_component(jsonnode.$$.fragment);
            attr(ul, "class", "svelte-773n60");
        },
        m (target, anchor) {
            insert(target, ul, anchor);
            mount_component(jsonnode, ul, null);
            current = true;
        },
        p (ctx, [dirty]) {
            const jsonnode_changes = {};
            if (dirty & /*key*/ 1) jsonnode_changes.key = /*key*/ ctx[0];
            if (dirty & /*value*/ 2) jsonnode_changes.value = /*value*/ ctx[1];
            jsonnode.$set(jsonnode_changes);
        },
        i (local) {
            if (current) return;
            transition_in(jsonnode.$$.fragment, local);
            current = true;
        },
        o (local) {
            transition_out(jsonnode.$$.fragment, local);
            current = false;
        },
        d (detaching) {
            if (detaching) detach(ul);
            destroy_component(jsonnode);
        }
    };
}
function instance$e($$self, $$props, $$invalidate) {
    setContext(contextKey, {});
    let { key ="" , value  } = $$props;
    $$self.$$set = ($$props)=>{
        if ("key" in $$props) $$invalidate(0, key = $$props.key);
        if ("value" in $$props) $$invalidate(1, value = $$props.value);
    };
    return [
        key,
        value
    ];
}
class Root extends SvelteComponent {
    constructor(options){
        super();
        init(this, options, instance$e, create_fragment$e, safe_not_equal, {
            key: 0,
            value: 1
        }, add_css$7);
    }
}
/* src/client/debug/main/ClientSwitcher.svelte generated by Svelte v3.49.0 */ function add_css$8(target) {
    append_styles(target, "svelte-jvfq3i", ".svelte-jvfq3i{box-sizing:border-box}section.switcher.svelte-jvfq3i{position:sticky;bottom:0;transform:translateY(20px);margin:40px -20px 0;border-top:1px solid #999;padding:20px;background:#fff}label.svelte-jvfq3i{display:flex;align-items:baseline;gap:5px;font-weight:bold}select.svelte-jvfq3i{min-width:140px}");
}
function get_each_context$3(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[7] = list[i];
    child_ctx[9] = i;
    return child_ctx;
}
// (42:0) {#if debuggableClients.length > 1}
function create_if_block$4(ctx) {
    let section;
    let label;
    let t;
    let select;
    let mounted;
    let dispose;
    let each_value = /*debuggableClients*/ ctx[1];
    let each_blocks = [];
    for(let i = 0; i < each_value.length; i += 1)each_blocks[i] = create_each_block$3(get_each_context$3(ctx, each_value, i));
    return {
        c () {
            section = element("section");
            label = element("label");
            t = text("Client\n      \n      ");
            select = element("select");
            for(let i = 0; i < each_blocks.length; i += 1)each_blocks[i].c();
            attr(select, "id", selectId);
            attr(select, "class", "svelte-jvfq3i");
            if (/*selected*/ ctx[2] === void 0) add_render_callback(()=>/*select_change_handler*/ ctx[6].call(select));
            attr(label, "class", "svelte-jvfq3i");
            attr(section, "class", "switcher svelte-jvfq3i");
        },
        m (target, anchor) {
            insert(target, section, anchor);
            append(section, label);
            append(label, t);
            append(label, select);
            for(let i = 0; i < each_blocks.length; i += 1)each_blocks[i].m(select, null);
            select_option(select, /*selected*/ ctx[2]);
            if (!mounted) {
                dispose = [
                    listen(select, "change", /*handleSelection*/ ctx[3]),
                    listen(select, "change", /*select_change_handler*/ ctx[6])
                ];
                mounted = true;
            }
        },
        p (ctx, dirty) {
            if (dirty & /*debuggableClients, JSON*/ 2) {
                each_value = /*debuggableClients*/ ctx[1];
                let i;
                for(i = 0; i < each_value.length; i += 1){
                    const child_ctx = get_each_context$3(ctx, each_value, i);
                    if (each_blocks[i]) each_blocks[i].p(child_ctx, dirty);
                    else {
                        each_blocks[i] = create_each_block$3(child_ctx);
                        each_blocks[i].c();
                        each_blocks[i].m(select, null);
                    }
                }
                for(; i < each_blocks.length; i += 1)each_blocks[i].d(1);
                each_blocks.length = each_value.length;
            }
            if (dirty & /*selected*/ 4) select_option(select, /*selected*/ ctx[2]);
        },
        d (detaching) {
            if (detaching) detach(section);
            destroy_each(each_blocks, detaching);
            mounted = false;
            run_all(dispose);
        }
    };
}
// (48:8) {#each debuggableClients as clientOption, index}
function create_each_block$3(ctx) {
    let option;
    let t0;
    let t1;
    let t2_value = JSON.stringify(/*clientOption*/ ctx[7].playerID) + "";
    let t2;
    let t3;
    let t4_value = JSON.stringify(/*clientOption*/ ctx[7].matchID) + "";
    let t4;
    let t5;
    let t6_value = /*clientOption*/ ctx[7].game.name + "";
    let t6;
    let t7;
    let option_value_value;
    return {
        c () {
            option = element("option");
            t0 = text(/*index*/ ctx[9]);
            t1 = text(" —\n            playerID: ");
            t2 = text(t2_value);
            t3 = text(",\n            matchID: ");
            t4 = text(t4_value);
            t5 = text("\n            (");
            t6 = text(t6_value);
            t7 = text(")\n          ");
            option.__value = option_value_value = /*index*/ ctx[9];
            option.value = option.__value;
            attr(option, "class", "svelte-jvfq3i");
        },
        m (target, anchor) {
            insert(target, option, anchor);
            append(option, t0);
            append(option, t1);
            append(option, t2);
            append(option, t3);
            append(option, t4);
            append(option, t5);
            append(option, t6);
            append(option, t7);
        },
        p (ctx, dirty) {
            if (dirty & /*debuggableClients*/ 2 && t2_value !== (t2_value = JSON.stringify(/*clientOption*/ ctx[7].playerID) + "")) set_data(t2, t2_value);
            if (dirty & /*debuggableClients*/ 2 && t4_value !== (t4_value = JSON.stringify(/*clientOption*/ ctx[7].matchID) + "")) set_data(t4, t4_value);
            if (dirty & /*debuggableClients*/ 2 && t6_value !== (t6_value = /*clientOption*/ ctx[7].game.name + "")) set_data(t6, t6_value);
        },
        d (detaching) {
            if (detaching) detach(option);
        }
    };
}
function create_fragment$f(ctx) {
    let if_block_anchor;
    let if_block = /*debuggableClients*/ ctx[1].length > 1 && create_if_block$4(ctx);
    return {
        c () {
            if (if_block) if_block.c();
            if_block_anchor = empty();
        },
        m (target, anchor) {
            if (if_block) if_block.m(target, anchor);
            insert(target, if_block_anchor, anchor);
        },
        p (ctx, [dirty]) {
            if (/*debuggableClients*/ ctx[1].length > 1) {
                if (if_block) if_block.p(ctx, dirty);
                else {
                    if_block = create_if_block$4(ctx);
                    if_block.c();
                    if_block.m(if_block_anchor.parentNode, if_block_anchor);
                }
            } else if (if_block) {
                if_block.d(1);
                if_block = null;
            }
        },
        i: noop,
        o: noop,
        d (detaching) {
            if (if_block) if_block.d(detaching);
            if (detaching) detach(if_block_anchor);
        }
    };
}
const selectId = "bgio-debug-select-client";
function instance$f($$self, $$props, $$invalidate) {
    let client;
    let debuggableClients;
    let selected;
    let $clientManager, $$unsubscribe_clientManager = noop, $$subscribe_clientManager = ()=>($$unsubscribe_clientManager(), $$unsubscribe_clientManager = subscribe(clientManager, ($$value)=>$$invalidate(5, $clientManager = $$value)), clientManager);
    $$self.$$.on_destroy.push(()=>$$unsubscribe_clientManager());
    let { clientManager  } = $$props;
    $$subscribe_clientManager();
    const handleSelection = (e)=>{
        // Request to switch to the selected client.
        const selectedClient = debuggableClients[e.target.value];
        clientManager.switchToClient(selectedClient);
        // Maintain focus on the client select menu after switching clients.
        // Necessary because switching clients will usually trigger a mount/unmount.
        const select = document.getElementById(selectId);
        if (select) select.focus();
    };
    function select_change_handler() {
        selected = select_value(this);
        $$invalidate(2, selected), $$invalidate(1, debuggableClients), $$invalidate(4, client), $$invalidate(5, $clientManager);
    }
    $$self.$$set = ($$props)=>{
        if ("clientManager" in $$props) $$subscribe_clientManager($$invalidate(0, clientManager = $$props.clientManager));
    };
    $$self.$$.update = ()=>{
        if ($$self.$$.dirty & /*$clientManager*/ 32) $$invalidate(4, { client , debuggableClients  } = $clientManager, client, ($$invalidate(1, debuggableClients), $$invalidate(5, $clientManager)));
        if ($$self.$$.dirty & /*debuggableClients, client*/ 18) $$invalidate(2, selected = debuggableClients.indexOf(client));
    };
    return [
        clientManager,
        debuggableClients,
        selected,
        handleSelection,
        client,
        $clientManager,
        select_change_handler
    ];
}
class ClientSwitcher extends SvelteComponent {
    constructor(options){
        super();
        init(this, options, instance$f, create_fragment$f, safe_not_equal, {
            clientManager: 0
        }, add_css$8);
    }
}
/* src/client/debug/main/Hotkey.svelte generated by Svelte v3.49.0 */ function add_css$9(target) {
    append_styles(target, "svelte-1vfj1mn", ".key.svelte-1vfj1mn.svelte-1vfj1mn{display:flex;flex-direction:row;align-items:center}button.svelte-1vfj1mn.svelte-1vfj1mn{cursor:pointer;min-width:10px;padding-left:5px;padding-right:5px;height:20px;line-height:20px;text-align:center;border:1px solid #ccc;box-shadow:1px 1px 1px #888;background:#eee;color:#444}button.svelte-1vfj1mn.svelte-1vfj1mn:hover{background:#ddd}.key.active.svelte-1vfj1mn button.svelte-1vfj1mn{background:#ddd;border:1px solid #999;box-shadow:none}label.svelte-1vfj1mn.svelte-1vfj1mn{margin-left:10px}");
}
// (78:2) {#if label}
function create_if_block$5(ctx) {
    let label_1;
    let t0;
    let t1;
    let span;
    let t2_value = `(shortcut: ${ctx[0]})` + "";
    let t2;
    return {
        c () {
            label_1 = element("label");
            t0 = text(/*label*/ ctx[1]);
            t1 = space();
            span = element("span");
            t2 = text(t2_value);
            attr(span, "class", "screen-reader-only");
            attr(label_1, "for", /*id*/ ctx[5]);
            attr(label_1, "class", "svelte-1vfj1mn");
        },
        m (target, anchor) {
            insert(target, label_1, anchor);
            append(label_1, t0);
            append(label_1, t1);
            append(label_1, span);
            append(span, t2);
        },
        p (ctx, dirty) {
            if (dirty & /*label*/ 2) set_data(t0, /*label*/ ctx[1]);
            if (dirty & /*value*/ 1 && t2_value !== (t2_value = `(shortcut: ${ctx[0]})` + "")) set_data(t2, t2_value);
        },
        d (detaching) {
            if (detaching) detach(label_1);
        }
    };
}
function create_fragment$g(ctx) {
    let div;
    let button;
    let t0;
    let t1;
    let mounted;
    let dispose;
    let if_block = /*label*/ ctx[1] && create_if_block$5(ctx);
    return {
        c () {
            div = element("div");
            button = element("button");
            t0 = text(/*value*/ ctx[0]);
            t1 = space();
            if (if_block) if_block.c();
            attr(button, "id", /*id*/ ctx[5]);
            button.disabled = /*disable*/ ctx[2];
            attr(button, "class", "svelte-1vfj1mn");
            attr(div, "class", "key svelte-1vfj1mn");
            toggle_class(div, "active", /*active*/ ctx[3]);
        },
        m (target, anchor) {
            insert(target, div, anchor);
            append(div, button);
            append(button, t0);
            append(div, t1);
            if (if_block) if_block.m(div, null);
            if (!mounted) {
                dispose = [
                    listen(window, "keydown", /*Keypress*/ ctx[7]),
                    listen(button, "click", /*Activate*/ ctx[6])
                ];
                mounted = true;
            }
        },
        p (ctx, [dirty]) {
            if (dirty & /*value*/ 1) set_data(t0, /*value*/ ctx[0]);
            if (dirty & /*disable*/ 4) button.disabled = /*disable*/ ctx[2];
            if (/*label*/ ctx[1]) {
                if (if_block) if_block.p(ctx, dirty);
                else {
                    if_block = create_if_block$5(ctx);
                    if_block.c();
                    if_block.m(div, null);
                }
            } else if (if_block) {
                if_block.d(1);
                if_block = null;
            }
            if (dirty & /*active*/ 8) toggle_class(div, "active", /*active*/ ctx[3]);
        },
        i: noop,
        o: noop,
        d (detaching) {
            if (detaching) detach(div);
            if (if_block) if_block.d();
            mounted = false;
            run_all(dispose);
        }
    };
}
function instance$g($$self, $$props, $$invalidate) {
    let $disableHotkeys;
    let { value  } = $$props;
    let { onPress =null  } = $$props;
    let { label =null  } = $$props;
    let { disable =false  } = $$props;
    const { disableHotkeys  } = getContext("hotkeys");
    component_subscribe($$self, disableHotkeys, (value)=>$$invalidate(9, $disableHotkeys = value));
    let active = false;
    let id = `key-${value}`;
    function Deactivate() {
        $$invalidate(3, active = false);
    }
    function Activate() {
        $$invalidate(3, active = true);
        setTimeout(Deactivate, 200);
        if (onPress) setTimeout(onPress, 1);
    }
    function Keypress(e) {
        if (!$disableHotkeys && !disable && !e.ctrlKey && !e.metaKey && e.key == value) {
            e.preventDefault();
            Activate();
        }
    }
    $$self.$$set = ($$props)=>{
        if ("value" in $$props) $$invalidate(0, value = $$props.value);
        if ("onPress" in $$props) $$invalidate(8, onPress = $$props.onPress);
        if ("label" in $$props) $$invalidate(1, label = $$props.label);
        if ("disable" in $$props) $$invalidate(2, disable = $$props.disable);
    };
    return [
        value,
        label,
        disable,
        active,
        disableHotkeys,
        id,
        Activate,
        Keypress,
        onPress
    ];
}
class Hotkey extends SvelteComponent {
    constructor(options){
        super();
        init(this, options, instance$g, create_fragment$g, safe_not_equal, {
            value: 0,
            onPress: 8,
            label: 1,
            disable: 2
        }, add_css$9);
    }
}
/* src/client/debug/main/InteractiveFunction.svelte generated by Svelte v3.49.0 */ function add_css$a(target) {
    append_styles(target, "svelte-1mppqmp", ".move.svelte-1mppqmp{display:flex;flex-direction:row;cursor:pointer;margin-left:10px;color:#666}.move.svelte-1mppqmp:hover{color:#333}.move.active.svelte-1mppqmp{color:#111;font-weight:bold}.arg-field.svelte-1mppqmp{outline:none;font-family:monospace}");
}
function create_fragment$h(ctx) {
    let div;
    let span0;
    let t0;
    let t1;
    let span1;
    let t3;
    let span2;
    let t4;
    let span3;
    let mounted;
    let dispose;
    return {
        c () {
            div = element("div");
            span0 = element("span");
            t0 = text(/*name*/ ctx[2]);
            t1 = space();
            span1 = element("span");
            span1.textContent = "(";
            t3 = space();
            span2 = element("span");
            t4 = space();
            span3 = element("span");
            span3.textContent = ")";
            attr(span2, "class", "arg-field svelte-1mppqmp");
            attr(span2, "contenteditable", "");
            attr(div, "class", "move svelte-1mppqmp");
            toggle_class(div, "active", /*active*/ ctx[3]);
        },
        m (target, anchor) {
            insert(target, div, anchor);
            append(div, span0);
            append(span0, t0);
            append(div, t1);
            append(div, span1);
            append(div, t3);
            append(div, span2);
            /*span2_binding*/ ctx[6](span2);
            append(div, t4);
            append(div, span3);
            if (!mounted) {
                dispose = [
                    listen(span2, "focus", function() {
                        if (is_function(/*Activate*/ ctx[0])) /*Activate*/ ctx[0].apply(this, arguments);
                    }),
                    listen(span2, "blur", function() {
                        if (is_function(/*Deactivate*/ ctx[1])) /*Deactivate*/ ctx[1].apply(this, arguments);
                    }),
                    listen(span2, "keypress", stop_propagation(keypress_handler)),
                    listen(span2, "keydown", /*OnKeyDown*/ ctx[5]),
                    listen(div, "click", function() {
                        if (is_function(/*Activate*/ ctx[0])) /*Activate*/ ctx[0].apply(this, arguments);
                    })
                ];
                mounted = true;
            }
        },
        p (new_ctx, [dirty]) {
            ctx = new_ctx;
            if (dirty & /*name*/ 4) set_data(t0, /*name*/ ctx[2]);
            if (dirty & /*active*/ 8) toggle_class(div, "active", /*active*/ ctx[3]);
        },
        i: noop,
        o: noop,
        d (detaching) {
            if (detaching) detach(div);
            /*span2_binding*/ ctx[6](null);
            mounted = false;
            run_all(dispose);
        }
    };
}
const keypress_handler = ()=>{};
function instance$h($$self, $$props, $$invalidate) {
    let { Activate  } = $$props;
    let { Deactivate  } = $$props;
    let { name  } = $$props;
    let { active  } = $$props;
    let span;
    const dispatch = createEventDispatcher();
    function Submit() {
        try {
            const value = span.innerText;
            let argArray = new Function(`return [${value}]`)();
            dispatch("submit", argArray);
        } catch (error) {
            dispatch("error", error);
        }
        $$invalidate(4, span.innerText = "", span);
    }
    function OnKeyDown(e) {
        if (e.key == "Enter") {
            e.preventDefault();
            Submit();
        }
        if (e.key == "Escape") {
            e.preventDefault();
            Deactivate();
        }
    }
    afterUpdate(()=>{
        if (active) span.focus();
        else span.blur();
    });
    function span2_binding($$value) {
        binding_callbacks[$$value ? "unshift" : "push"](()=>{
            span = $$value;
            $$invalidate(4, span);
        });
    }
    $$self.$$set = ($$props)=>{
        if ("Activate" in $$props) $$invalidate(0, Activate = $$props.Activate);
        if ("Deactivate" in $$props) $$invalidate(1, Deactivate = $$props.Deactivate);
        if ("name" in $$props) $$invalidate(2, name = $$props.name);
        if ("active" in $$props) $$invalidate(3, active = $$props.active);
    };
    return [
        Activate,
        Deactivate,
        name,
        active,
        span,
        OnKeyDown,
        span2_binding
    ];
}
class InteractiveFunction extends SvelteComponent {
    constructor(options){
        super();
        init(this, options, instance$h, create_fragment$h, safe_not_equal, {
            Activate: 0,
            Deactivate: 1,
            name: 2,
            active: 3
        }, add_css$a);
    }
}
/* src/client/debug/main/Move.svelte generated by Svelte v3.49.0 */ function add_css$b(target) {
    append_styles(target, "svelte-smqssc", ".move-error.svelte-smqssc{color:#a00;font-weight:bold}.wrapper.svelte-smqssc{display:flex;flex-direction:row;align-items:center}");
}
// (65:2) {#if error}
function create_if_block$6(ctx) {
    let span;
    let t;
    return {
        c () {
            span = element("span");
            t = text(/*error*/ ctx[2]);
            attr(span, "class", "move-error svelte-smqssc");
        },
        m (target, anchor) {
            insert(target, span, anchor);
            append(span, t);
        },
        p (ctx, dirty) {
            if (dirty & /*error*/ 4) set_data(t, /*error*/ ctx[2]);
        },
        d (detaching) {
            if (detaching) detach(span);
        }
    };
}
function create_fragment$i(ctx) {
    let div1;
    let div0;
    let hotkey;
    let t0;
    let interactivefunction;
    let t1;
    let current;
    hotkey = new Hotkey({
        props: {
            value: /*shortcut*/ ctx[0],
            onPress: /*Activate*/ ctx[4]
        }
    });
    interactivefunction = new InteractiveFunction({
        props: {
            Activate: /*Activate*/ ctx[4],
            Deactivate: /*Deactivate*/ ctx[5],
            name: /*name*/ ctx[1],
            active: /*active*/ ctx[3]
        }
    });
    interactivefunction.$on("submit", /*Submit*/ ctx[6]);
    interactivefunction.$on("error", /*Error*/ ctx[7]);
    let if_block = /*error*/ ctx[2] && create_if_block$6(ctx);
    return {
        c () {
            div1 = element("div");
            div0 = element("div");
            create_component(hotkey.$$.fragment);
            t0 = space();
            create_component(interactivefunction.$$.fragment);
            t1 = space();
            if (if_block) if_block.c();
            attr(div0, "class", "wrapper svelte-smqssc");
        },
        m (target, anchor) {
            insert(target, div1, anchor);
            append(div1, div0);
            mount_component(hotkey, div0, null);
            append(div0, t0);
            mount_component(interactivefunction, div0, null);
            append(div1, t1);
            if (if_block) if_block.m(div1, null);
            current = true;
        },
        p (ctx, [dirty]) {
            const hotkey_changes = {};
            if (dirty & /*shortcut*/ 1) hotkey_changes.value = /*shortcut*/ ctx[0];
            hotkey.$set(hotkey_changes);
            const interactivefunction_changes = {};
            if (dirty & /*name*/ 2) interactivefunction_changes.name = /*name*/ ctx[1];
            if (dirty & /*active*/ 8) interactivefunction_changes.active = /*active*/ ctx[3];
            interactivefunction.$set(interactivefunction_changes);
            if (/*error*/ ctx[2]) {
                if (if_block) if_block.p(ctx, dirty);
                else {
                    if_block = create_if_block$6(ctx);
                    if_block.c();
                    if_block.m(div1, null);
                }
            } else if (if_block) {
                if_block.d(1);
                if_block = null;
            }
        },
        i (local) {
            if (current) return;
            transition_in(hotkey.$$.fragment, local);
            transition_in(interactivefunction.$$.fragment, local);
            current = true;
        },
        o (local) {
            transition_out(hotkey.$$.fragment, local);
            transition_out(interactivefunction.$$.fragment, local);
            current = false;
        },
        d (detaching) {
            if (detaching) detach(div1);
            destroy_component(hotkey);
            destroy_component(interactivefunction);
            if (if_block) if_block.d();
        }
    };
}
function instance$i($$self, $$props, $$invalidate) {
    let { shortcut  } = $$props;
    let { name  } = $$props;
    let { fn  } = $$props;
    const { disableHotkeys  } = getContext("hotkeys");
    let error$1 = "";
    let active = false;
    function Activate() {
        disableHotkeys.set(true);
        $$invalidate(3, active = true);
    }
    function Deactivate() {
        disableHotkeys.set(false);
        $$invalidate(2, error$1 = "");
        $$invalidate(3, active = false);
    }
    function Submit(e) {
        $$invalidate(2, error$1 = "");
        Deactivate();
        fn.apply(this, e.detail);
    }
    function Error1(e) {
        $$invalidate(2, error$1 = e.detail);
        (0, _turnOrder8Cc4909BJs.e)(e.detail);
    }
    $$self.$$set = ($$props)=>{
        if ("shortcut" in $$props) $$invalidate(0, shortcut = $$props.shortcut);
        if ("name" in $$props) $$invalidate(1, name = $$props.name);
        if ("fn" in $$props) $$invalidate(8, fn = $$props.fn);
    };
    return [
        shortcut,
        name,
        error$1,
        active,
        Activate,
        Deactivate,
        Submit,
        Error1,
        fn
    ];
}
class Move extends SvelteComponent {
    constructor(options){
        super();
        init(this, options, instance$i, create_fragment$i, safe_not_equal, {
            shortcut: 0,
            name: 1,
            fn: 8
        }, add_css$b);
    }
}
/* src/client/debug/main/Controls.svelte generated by Svelte v3.49.0 */ function add_css$c(target) {
    append_styles(target, "svelte-9hauj9", "ul.svelte-9hauj9{padding-left:0}li.svelte-9hauj9{list-style:none;margin:0;margin-bottom:5px}");
}
function create_fragment$j(ctx) {
    let ul;
    let li0;
    let hotkey0;
    let t0;
    let li1;
    let hotkey1;
    let t1;
    let li2;
    let hotkey2;
    let t2;
    let li3;
    let hotkey3;
    let current;
    hotkey0 = new Hotkey({
        props: {
            value: "1",
            onPress: /*client*/ ctx[0].reset,
            label: "reset"
        }
    });
    hotkey1 = new Hotkey({
        props: {
            value: "2",
            onPress: /*Save*/ ctx[2],
            label: "save"
        }
    });
    hotkey2 = new Hotkey({
        props: {
            value: "3",
            onPress: /*Restore*/ ctx[3],
            label: "restore"
        }
    });
    hotkey3 = new Hotkey({
        props: {
            value: ".",
            onPress: /*ToggleVisibility*/ ctx[1],
            label: "hide"
        }
    });
    return {
        c () {
            ul = element("ul");
            li0 = element("li");
            create_component(hotkey0.$$.fragment);
            t0 = space();
            li1 = element("li");
            create_component(hotkey1.$$.fragment);
            t1 = space();
            li2 = element("li");
            create_component(hotkey2.$$.fragment);
            t2 = space();
            li3 = element("li");
            create_component(hotkey3.$$.fragment);
            attr(li0, "class", "svelte-9hauj9");
            attr(li1, "class", "svelte-9hauj9");
            attr(li2, "class", "svelte-9hauj9");
            attr(li3, "class", "svelte-9hauj9");
            attr(ul, "id", "debug-controls");
            attr(ul, "class", "controls svelte-9hauj9");
        },
        m (target, anchor) {
            insert(target, ul, anchor);
            append(ul, li0);
            mount_component(hotkey0, li0, null);
            append(ul, t0);
            append(ul, li1);
            mount_component(hotkey1, li1, null);
            append(ul, t1);
            append(ul, li2);
            mount_component(hotkey2, li2, null);
            append(ul, t2);
            append(ul, li3);
            mount_component(hotkey3, li3, null);
            current = true;
        },
        p (ctx, [dirty]) {
            const hotkey0_changes = {};
            if (dirty & /*client*/ 1) hotkey0_changes.onPress = /*client*/ ctx[0].reset;
            hotkey0.$set(hotkey0_changes);
            const hotkey3_changes = {};
            if (dirty & /*ToggleVisibility*/ 2) hotkey3_changes.onPress = /*ToggleVisibility*/ ctx[1];
            hotkey3.$set(hotkey3_changes);
        },
        i (local) {
            if (current) return;
            transition_in(hotkey0.$$.fragment, local);
            transition_in(hotkey1.$$.fragment, local);
            transition_in(hotkey2.$$.fragment, local);
            transition_in(hotkey3.$$.fragment, local);
            current = true;
        },
        o (local) {
            transition_out(hotkey0.$$.fragment, local);
            transition_out(hotkey1.$$.fragment, local);
            transition_out(hotkey2.$$.fragment, local);
            transition_out(hotkey3.$$.fragment, local);
            current = false;
        },
        d (detaching) {
            if (detaching) detach(ul);
            destroy_component(hotkey0);
            destroy_component(hotkey1);
            destroy_component(hotkey2);
            destroy_component(hotkey3);
        }
    };
}
function instance$j($$self, $$props, $$invalidate) {
    let { client  } = $$props;
    let { ToggleVisibility  } = $$props;
    function Save() {
        // get state to persist and overwrite deltalog, _undo, and _redo
        const state = client.getState();
        const json = (0, _flatted.stringify)({
            ...state,
            _undo: [],
            _redo: [],
            deltalog: []
        });
        window.localStorage.setItem("gamestate", json);
        window.localStorage.setItem("initialState", (0, _flatted.stringify)(client.initialState));
    }
    function Restore() {
        const gamestateJSON = window.localStorage.getItem("gamestate");
        const initialStateJSON = window.localStorage.getItem("initialState");
        if (gamestateJSON !== null && initialStateJSON !== null) {
            const gamestate = (0, _flatted.parse)(gamestateJSON);
            const initialState = (0, _flatted.parse)(initialStateJSON);
            client.store.dispatch((0, _turnOrder8Cc4909BJs.s)({
                state: gamestate,
                initialState
            }));
        }
    }
    $$self.$$set = ($$props)=>{
        if ("client" in $$props) $$invalidate(0, client = $$props.client);
        if ("ToggleVisibility" in $$props) $$invalidate(1, ToggleVisibility = $$props.ToggleVisibility);
    };
    return [
        client,
        ToggleVisibility,
        Save,
        Restore
    ];
}
class Controls extends SvelteComponent {
    constructor(options){
        super();
        init(this, options, instance$j, create_fragment$j, safe_not_equal, {
            client: 0,
            ToggleVisibility: 1
        }, add_css$c);
    }
}
/* src/client/debug/main/PlayerInfo.svelte generated by Svelte v3.49.0 */ function add_css$d(target) {
    append_styles(target, "svelte-19aan9p", ".player-box.svelte-19aan9p{display:flex;flex-direction:row}.player.svelte-19aan9p{cursor:pointer;text-align:center;width:30px;height:30px;line-height:30px;background:#eee;border:3px solid #fefefe;box-sizing:content-box;padding:0}.player.current.svelte-19aan9p{background:#555;color:#eee;font-weight:bold}.player.active.svelte-19aan9p{border:3px solid #ff7f50}");
}
function get_each_context$4(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[7] = list[i];
    return child_ctx;
}
// (59:2) {#each players as player}
function create_each_block$4(ctx) {
    let button;
    let t0_value = /*player*/ ctx[7] + "";
    let t0;
    let t1;
    let button_aria_label_value;
    let mounted;
    let dispose;
    function click_handler() {
        return /*click_handler*/ ctx[5](/*player*/ ctx[7]);
    }
    return {
        c () {
            button = element("button");
            t0 = text(t0_value);
            t1 = space();
            attr(button, "class", "player svelte-19aan9p");
            attr(button, "aria-label", button_aria_label_value = /*playerLabel*/ ctx[4](/*player*/ ctx[7]));
            toggle_class(button, "current", /*player*/ ctx[7] == /*ctx*/ ctx[0].currentPlayer);
            toggle_class(button, "active", /*player*/ ctx[7] == /*playerID*/ ctx[1]);
        },
        m (target, anchor) {
            insert(target, button, anchor);
            append(button, t0);
            append(button, t1);
            if (!mounted) {
                dispose = listen(button, "click", click_handler);
                mounted = true;
            }
        },
        p (new_ctx, dirty) {
            ctx = new_ctx;
            if (dirty & /*players*/ 4 && t0_value !== (t0_value = /*player*/ ctx[7] + "")) set_data(t0, t0_value);
            if (dirty & /*players*/ 4 && button_aria_label_value !== (button_aria_label_value = /*playerLabel*/ ctx[4](/*player*/ ctx[7]))) attr(button, "aria-label", button_aria_label_value);
            if (dirty & /*players, ctx*/ 5) toggle_class(button, "current", /*player*/ ctx[7] == /*ctx*/ ctx[0].currentPlayer);
            if (dirty & /*players, playerID*/ 6) toggle_class(button, "active", /*player*/ ctx[7] == /*playerID*/ ctx[1]);
        },
        d (detaching) {
            if (detaching) detach(button);
            mounted = false;
            dispose();
        }
    };
}
function create_fragment$k(ctx) {
    let div;
    let each_value = /*players*/ ctx[2];
    let each_blocks = [];
    for(let i = 0; i < each_value.length; i += 1)each_blocks[i] = create_each_block$4(get_each_context$4(ctx, each_value, i));
    return {
        c () {
            div = element("div");
            for(let i = 0; i < each_blocks.length; i += 1)each_blocks[i].c();
            attr(div, "class", "player-box svelte-19aan9p");
        },
        m (target, anchor) {
            insert(target, div, anchor);
            for(let i = 0; i < each_blocks.length; i += 1)each_blocks[i].m(div, null);
        },
        p (ctx, [dirty]) {
            if (dirty & /*playerLabel, players, ctx, playerID, OnClick*/ 31) {
                each_value = /*players*/ ctx[2];
                let i;
                for(i = 0; i < each_value.length; i += 1){
                    const child_ctx = get_each_context$4(ctx, each_value, i);
                    if (each_blocks[i]) each_blocks[i].p(child_ctx, dirty);
                    else {
                        each_blocks[i] = create_each_block$4(child_ctx);
                        each_blocks[i].c();
                        each_blocks[i].m(div, null);
                    }
                }
                for(; i < each_blocks.length; i += 1)each_blocks[i].d(1);
                each_blocks.length = each_value.length;
            }
        },
        i: noop,
        o: noop,
        d (detaching) {
            if (detaching) detach(div);
            destroy_each(each_blocks, detaching);
        }
    };
}
function instance$k($$self, $$props, $$invalidate) {
    let { ctx  } = $$props;
    let { playerID  } = $$props;
    const dispatch = createEventDispatcher();
    function OnClick(player) {
        if (player == playerID) dispatch("change", {
            playerID: null
        });
        else dispatch("change", {
            playerID: player
        });
    }
    function playerLabel(player) {
        const properties = [];
        if (player == ctx.currentPlayer) properties.push("current");
        if (player == playerID) properties.push("active");
        let label = `Player ${player}`;
        if (properties.length) label += ` (${properties.join(", ")})`;
        return label;
    }
    let players;
    const click_handler = (player)=>OnClick(player);
    $$self.$$set = ($$props)=>{
        if ("ctx" in $$props) $$invalidate(0, ctx = $$props.ctx);
        if ("playerID" in $$props) $$invalidate(1, playerID = $$props.playerID);
    };
    $$self.$$.update = ()=>{
        if ($$self.$$.dirty & /*ctx*/ 1) $$invalidate(2, players = ctx ? [
            ...Array(ctx.numPlayers).keys()
        ].map((i)=>i.toString()) : []);
    };
    return [
        ctx,
        playerID,
        players,
        OnClick,
        playerLabel,
        click_handler
    ];
}
class PlayerInfo extends SvelteComponent {
    constructor(options){
        super();
        init(this, options, instance$k, create_fragment$k, safe_not_equal, {
            ctx: 0,
            playerID: 1
        }, add_css$d);
    }
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread2(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) return call;
    else if (call !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return _assertThisInitialized(self);
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn(this, result);
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function() {};
            return {
                s: F,
                n: function() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function(e) {
                    throw e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function() {
            it = it.call(o);
        },
        n: function() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function(e) {
            didErr = true;
            err = e;
        },
        f: function() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
/*
 * Copyright 2018 The boardgame.io Authors
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */ function AssignShortcuts(moveNames, blacklist) {
    var shortcuts = {};
    var taken = {};
    var _iterator = _createForOfIteratorHelper(blacklist), _step;
    try {
        for(_iterator.s(); !(_step = _iterator.n()).done;){
            var c = _step.value;
            taken[c] = true;
        } // Try assigning the first char of each move as the shortcut.
    } catch (err) {
        _iterator.e(err);
    } finally{
        _iterator.f();
    }
    var t = taken;
    var canUseFirstChar = true;
    for(var name in moveNames){
        var shortcut = name[0];
        if (t[shortcut]) {
            canUseFirstChar = false;
            break;
        }
        t[shortcut] = true;
        shortcuts[name] = shortcut;
    }
    if (canUseFirstChar) return shortcuts;
     // If those aren't unique, use a-z.
    t = taken;
    var next = 97;
    shortcuts = {};
    for(var _name in moveNames){
        var _shortcut = String.fromCharCode(next);
        while(t[_shortcut]){
            next++;
            _shortcut = String.fromCharCode(next);
        }
        t[_shortcut] = true;
        shortcuts[_name] = _shortcut;
    }
    return shortcuts;
}
/* src/client/debug/main/Main.svelte generated by Svelte v3.49.0 */ function add_css$e(target) {
    append_styles(target, "svelte-146sq5f", ".tree.svelte-146sq5f{--json-tree-font-family:monospace;--json-tree-font-size:14px;--json-tree-null-color:#757575}.label.svelte-146sq5f{margin-bottom:0;text-transform:none}h3.svelte-146sq5f{text-transform:uppercase}ul.svelte-146sq5f{padding-left:0}li.svelte-146sq5f{list-style:none;margin:0;margin-bottom:5px}");
}
function get_each_context$5(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[11] = list[i][0];
    child_ctx[12] = list[i][1];
    return child_ctx;
}
// (81:4) {#each Object.entries(moves) as [name, fn]}
function create_each_block$5(ctx) {
    let li;
    let move;
    let t;
    let current;
    move = new Move({
        props: {
            shortcut: /*shortcuts*/ ctx[8][/*name*/ ctx[11]],
            fn: /*fn*/ ctx[12],
            name: /*name*/ ctx[11]
        }
    });
    return {
        c () {
            li = element("li");
            create_component(move.$$.fragment);
            t = space();
            attr(li, "class", "svelte-146sq5f");
        },
        m (target, anchor) {
            insert(target, li, anchor);
            mount_component(move, li, null);
            append(li, t);
            current = true;
        },
        p (ctx, dirty) {
            const move_changes = {};
            if (dirty & /*moves*/ 16) move_changes.shortcut = /*shortcuts*/ ctx[8][/*name*/ ctx[11]];
            if (dirty & /*moves*/ 16) move_changes.fn = /*fn*/ ctx[12];
            if (dirty & /*moves*/ 16) move_changes.name = /*name*/ ctx[11];
            move.$set(move_changes);
        },
        i (local) {
            if (current) return;
            transition_in(move.$$.fragment, local);
            current = true;
        },
        o (local) {
            transition_out(move.$$.fragment, local);
            current = false;
        },
        d (detaching) {
            if (detaching) detach(li);
            destroy_component(move);
        }
    };
}
// (93:2) {#if ctx.activePlayers && events.endStage}
function create_if_block_2$2(ctx) {
    let li;
    let move;
    let current;
    move = new Move({
        props: {
            name: "endStage",
            shortcut: 7,
            fn: /*events*/ ctx[5].endStage
        }
    });
    return {
        c () {
            li = element("li");
            create_component(move.$$.fragment);
            attr(li, "class", "svelte-146sq5f");
        },
        m (target, anchor) {
            insert(target, li, anchor);
            mount_component(move, li, null);
            current = true;
        },
        p (ctx, dirty) {
            const move_changes = {};
            if (dirty & /*events*/ 32) move_changes.fn = /*events*/ ctx[5].endStage;
            move.$set(move_changes);
        },
        i (local) {
            if (current) return;
            transition_in(move.$$.fragment, local);
            current = true;
        },
        o (local) {
            transition_out(move.$$.fragment, local);
            current = false;
        },
        d (detaching) {
            if (detaching) detach(li);
            destroy_component(move);
        }
    };
}
// (98:2) {#if events.endTurn}
function create_if_block_1$2(ctx) {
    let li;
    let move;
    let current;
    move = new Move({
        props: {
            name: "endTurn",
            shortcut: 8,
            fn: /*events*/ ctx[5].endTurn
        }
    });
    return {
        c () {
            li = element("li");
            create_component(move.$$.fragment);
            attr(li, "class", "svelte-146sq5f");
        },
        m (target, anchor) {
            insert(target, li, anchor);
            mount_component(move, li, null);
            current = true;
        },
        p (ctx, dirty) {
            const move_changes = {};
            if (dirty & /*events*/ 32) move_changes.fn = /*events*/ ctx[5].endTurn;
            move.$set(move_changes);
        },
        i (local) {
            if (current) return;
            transition_in(move.$$.fragment, local);
            current = true;
        },
        o (local) {
            transition_out(move.$$.fragment, local);
            current = false;
        },
        d (detaching) {
            if (detaching) detach(li);
            destroy_component(move);
        }
    };
}
// (103:2) {#if ctx.phase && events.endPhase}
function create_if_block$7(ctx) {
    let li;
    let move;
    let current;
    move = new Move({
        props: {
            name: "endPhase",
            shortcut: 9,
            fn: /*events*/ ctx[5].endPhase
        }
    });
    return {
        c () {
            li = element("li");
            create_component(move.$$.fragment);
            attr(li, "class", "svelte-146sq5f");
        },
        m (target, anchor) {
            insert(target, li, anchor);
            mount_component(move, li, null);
            current = true;
        },
        p (ctx, dirty) {
            const move_changes = {};
            if (dirty & /*events*/ 32) move_changes.fn = /*events*/ ctx[5].endPhase;
            move.$set(move_changes);
        },
        i (local) {
            if (current) return;
            transition_in(move.$$.fragment, local);
            current = true;
        },
        o (local) {
            transition_out(move.$$.fragment, local);
            current = false;
        },
        d (detaching) {
            if (detaching) detach(li);
            destroy_component(move);
        }
    };
}
function create_fragment$l(ctx) {
    let section0;
    let h30;
    let t1;
    let controls;
    let t2;
    let section1;
    let h31;
    let t4;
    let playerinfo;
    let t5;
    let section2;
    let h32;
    let t7;
    let ul0;
    let t8;
    let section3;
    let h33;
    let t10;
    let ul1;
    let t11;
    let t12;
    let t13;
    let section4;
    let h34;
    let t15;
    let jsontree0;
    let t16;
    let section5;
    let h35;
    let t18;
    let jsontree1;
    let t19;
    let clientswitcher;
    let current;
    controls = new Controls({
        props: {
            client: /*client*/ ctx[0],
            ToggleVisibility: /*ToggleVisibility*/ ctx[2]
        }
    });
    playerinfo = new PlayerInfo({
        props: {
            ctx: /*ctx*/ ctx[6],
            playerID: /*playerID*/ ctx[3]
        }
    });
    playerinfo.$on("change", /*change_handler*/ ctx[9]);
    let each_value = Object.entries(/*moves*/ ctx[4]);
    let each_blocks = [];
    for(let i = 0; i < each_value.length; i += 1)each_blocks[i] = create_each_block$5(get_each_context$5(ctx, each_value, i));
    const out = (i)=>transition_out(each_blocks[i], 1, 1, ()=>{
            each_blocks[i] = null;
        });
    let if_block0 = /*ctx*/ ctx[6].activePlayers && /*events*/ ctx[5].endStage && create_if_block_2$2(ctx);
    let if_block1 = /*events*/ ctx[5].endTurn && create_if_block_1$2(ctx);
    let if_block2 = /*ctx*/ ctx[6].phase && /*events*/ ctx[5].endPhase && create_if_block$7(ctx);
    jsontree0 = new Root({
        props: {
            value: /*G*/ ctx[7]
        }
    });
    jsontree1 = new Root({
        props: {
            value: SanitizeCtx(/*ctx*/ ctx[6])
        }
    });
    clientswitcher = new ClientSwitcher({
        props: {
            clientManager: /*clientManager*/ ctx[1]
        }
    });
    return {
        c () {
            section0 = element("section");
            h30 = element("h3");
            h30.textContent = "Controls";
            t1 = space();
            create_component(controls.$$.fragment);
            t2 = space();
            section1 = element("section");
            h31 = element("h3");
            h31.textContent = "Players";
            t4 = space();
            create_component(playerinfo.$$.fragment);
            t5 = space();
            section2 = element("section");
            h32 = element("h3");
            h32.textContent = "Moves";
            t7 = space();
            ul0 = element("ul");
            for(let i = 0; i < each_blocks.length; i += 1)each_blocks[i].c();
            t8 = space();
            section3 = element("section");
            h33 = element("h3");
            h33.textContent = "Events";
            t10 = space();
            ul1 = element("ul");
            if (if_block0) if_block0.c();
            t11 = space();
            if (if_block1) if_block1.c();
            t12 = space();
            if (if_block2) if_block2.c();
            t13 = space();
            section4 = element("section");
            h34 = element("h3");
            h34.textContent = "G";
            t15 = space();
            create_component(jsontree0.$$.fragment);
            t16 = space();
            section5 = element("section");
            h35 = element("h3");
            h35.textContent = "ctx";
            t18 = space();
            create_component(jsontree1.$$.fragment);
            t19 = space();
            create_component(clientswitcher.$$.fragment);
            attr(h30, "class", "svelte-146sq5f");
            attr(h31, "class", "svelte-146sq5f");
            attr(h32, "class", "svelte-146sq5f");
            attr(ul0, "class", "svelte-146sq5f");
            attr(h33, "class", "svelte-146sq5f");
            attr(ul1, "class", "svelte-146sq5f");
            attr(h34, "class", "label svelte-146sq5f");
            attr(section4, "class", "tree svelte-146sq5f");
            attr(h35, "class", "label svelte-146sq5f");
            attr(section5, "class", "tree svelte-146sq5f");
        },
        m (target, anchor) {
            insert(target, section0, anchor);
            append(section0, h30);
            append(section0, t1);
            mount_component(controls, section0, null);
            insert(target, t2, anchor);
            insert(target, section1, anchor);
            append(section1, h31);
            append(section1, t4);
            mount_component(playerinfo, section1, null);
            insert(target, t5, anchor);
            insert(target, section2, anchor);
            append(section2, h32);
            append(section2, t7);
            append(section2, ul0);
            for(let i = 0; i < each_blocks.length; i += 1)each_blocks[i].m(ul0, null);
            insert(target, t8, anchor);
            insert(target, section3, anchor);
            append(section3, h33);
            append(section3, t10);
            append(section3, ul1);
            if (if_block0) if_block0.m(ul1, null);
            append(ul1, t11);
            if (if_block1) if_block1.m(ul1, null);
            append(ul1, t12);
            if (if_block2) if_block2.m(ul1, null);
            insert(target, t13, anchor);
            insert(target, section4, anchor);
            append(section4, h34);
            append(section4, t15);
            mount_component(jsontree0, section4, null);
            insert(target, t16, anchor);
            insert(target, section5, anchor);
            append(section5, h35);
            append(section5, t18);
            mount_component(jsontree1, section5, null);
            insert(target, t19, anchor);
            mount_component(clientswitcher, target, anchor);
            current = true;
        },
        p (ctx, [dirty]) {
            const controls_changes = {};
            if (dirty & /*client*/ 1) controls_changes.client = /*client*/ ctx[0];
            if (dirty & /*ToggleVisibility*/ 4) controls_changes.ToggleVisibility = /*ToggleVisibility*/ ctx[2];
            controls.$set(controls_changes);
            const playerinfo_changes = {};
            if (dirty & /*ctx*/ 64) playerinfo_changes.ctx = /*ctx*/ ctx[6];
            if (dirty & /*playerID*/ 8) playerinfo_changes.playerID = /*playerID*/ ctx[3];
            playerinfo.$set(playerinfo_changes);
            if (dirty & /*shortcuts, Object, moves*/ 272) {
                each_value = Object.entries(/*moves*/ ctx[4]);
                let i;
                for(i = 0; i < each_value.length; i += 1){
                    const child_ctx = get_each_context$5(ctx, each_value, i);
                    if (each_blocks[i]) {
                        each_blocks[i].p(child_ctx, dirty);
                        transition_in(each_blocks[i], 1);
                    } else {
                        each_blocks[i] = create_each_block$5(child_ctx);
                        each_blocks[i].c();
                        transition_in(each_blocks[i], 1);
                        each_blocks[i].m(ul0, null);
                    }
                }
                group_outros();
                for(i = each_value.length; i < each_blocks.length; i += 1)out(i);
                check_outros();
            }
            if (/*ctx*/ ctx[6].activePlayers && /*events*/ ctx[5].endStage) {
                if (if_block0) {
                    if_block0.p(ctx, dirty);
                    if (dirty & /*ctx, events*/ 96) transition_in(if_block0, 1);
                } else {
                    if_block0 = create_if_block_2$2(ctx);
                    if_block0.c();
                    transition_in(if_block0, 1);
                    if_block0.m(ul1, t11);
                }
            } else if (if_block0) {
                group_outros();
                transition_out(if_block0, 1, 1, ()=>{
                    if_block0 = null;
                });
                check_outros();
            }
            if (/*events*/ ctx[5].endTurn) {
                if (if_block1) {
                    if_block1.p(ctx, dirty);
                    if (dirty & /*events*/ 32) transition_in(if_block1, 1);
                } else {
                    if_block1 = create_if_block_1$2(ctx);
                    if_block1.c();
                    transition_in(if_block1, 1);
                    if_block1.m(ul1, t12);
                }
            } else if (if_block1) {
                group_outros();
                transition_out(if_block1, 1, 1, ()=>{
                    if_block1 = null;
                });
                check_outros();
            }
            if (/*ctx*/ ctx[6].phase && /*events*/ ctx[5].endPhase) {
                if (if_block2) {
                    if_block2.p(ctx, dirty);
                    if (dirty & /*ctx, events*/ 96) transition_in(if_block2, 1);
                } else {
                    if_block2 = create_if_block$7(ctx);
                    if_block2.c();
                    transition_in(if_block2, 1);
                    if_block2.m(ul1, null);
                }
            } else if (if_block2) {
                group_outros();
                transition_out(if_block2, 1, 1, ()=>{
                    if_block2 = null;
                });
                check_outros();
            }
            const jsontree0_changes = {};
            if (dirty & /*G*/ 128) jsontree0_changes.value = /*G*/ ctx[7];
            jsontree0.$set(jsontree0_changes);
            const jsontree1_changes = {};
            if (dirty & /*ctx*/ 64) jsontree1_changes.value = SanitizeCtx(/*ctx*/ ctx[6]);
            jsontree1.$set(jsontree1_changes);
            const clientswitcher_changes = {};
            if (dirty & /*clientManager*/ 2) clientswitcher_changes.clientManager = /*clientManager*/ ctx[1];
            clientswitcher.$set(clientswitcher_changes);
        },
        i (local) {
            if (current) return;
            transition_in(controls.$$.fragment, local);
            transition_in(playerinfo.$$.fragment, local);
            for(let i = 0; i < each_value.length; i += 1)transition_in(each_blocks[i]);
            transition_in(if_block0);
            transition_in(if_block1);
            transition_in(if_block2);
            transition_in(jsontree0.$$.fragment, local);
            transition_in(jsontree1.$$.fragment, local);
            transition_in(clientswitcher.$$.fragment, local);
            current = true;
        },
        o (local) {
            transition_out(controls.$$.fragment, local);
            transition_out(playerinfo.$$.fragment, local);
            each_blocks = each_blocks.filter(Boolean);
            for(let i = 0; i < each_blocks.length; i += 1)transition_out(each_blocks[i]);
            transition_out(if_block0);
            transition_out(if_block1);
            transition_out(if_block2);
            transition_out(jsontree0.$$.fragment, local);
            transition_out(jsontree1.$$.fragment, local);
            transition_out(clientswitcher.$$.fragment, local);
            current = false;
        },
        d (detaching) {
            if (detaching) detach(section0);
            destroy_component(controls);
            if (detaching) detach(t2);
            if (detaching) detach(section1);
            destroy_component(playerinfo);
            if (detaching) detach(t5);
            if (detaching) detach(section2);
            destroy_each(each_blocks, detaching);
            if (detaching) detach(t8);
            if (detaching) detach(section3);
            if (if_block0) if_block0.d();
            if (if_block1) if_block1.d();
            if (if_block2) if_block2.d();
            if (detaching) detach(t13);
            if (detaching) detach(section4);
            destroy_component(jsontree0);
            if (detaching) detach(t16);
            if (detaching) detach(section5);
            destroy_component(jsontree1);
            if (detaching) detach(t19);
            destroy_component(clientswitcher, detaching);
        }
    };
}
function SanitizeCtx(ctx) {
    let r = {};
    for(const key in ctx)if (!key.startsWith("_")) r[key] = ctx[key];
    return r;
}
function instance$l($$self, $$props, $$invalidate) {
    let { client  } = $$props;
    let { clientManager  } = $$props;
    let { ToggleVisibility  } = $$props;
    const shortcuts = AssignShortcuts(client.moves, "mlia");
    let { playerID , moves , events  } = client;
    let ctx = {};
    let G = {};
    const unsubscribe = client.subscribe((state)=>{
        if (state) $$invalidate(7, { G , ctx  } = state, G, $$invalidate(6, ctx));
        $$invalidate(3, { playerID , moves , events  } = client, playerID, $$invalidate(4, moves), $$invalidate(5, events));
    });
    onDestroy(unsubscribe);
    const change_handler = (e)=>clientManager.switchPlayerID(e.detail.playerID);
    $$self.$$set = ($$props)=>{
        if ("client" in $$props) $$invalidate(0, client = $$props.client);
        if ("clientManager" in $$props) $$invalidate(1, clientManager = $$props.clientManager);
        if ("ToggleVisibility" in $$props) $$invalidate(2, ToggleVisibility = $$props.ToggleVisibility);
    };
    return [
        client,
        clientManager,
        ToggleVisibility,
        playerID,
        moves,
        events,
        ctx,
        G,
        shortcuts,
        change_handler
    ];
}
class Main extends SvelteComponent {
    constructor(options){
        super();
        init(this, options, instance$l, create_fragment$l, safe_not_equal, {
            client: 0,
            clientManager: 1,
            ToggleVisibility: 2
        }, add_css$e);
    }
}
/* src/client/debug/info/Item.svelte generated by Svelte v3.49.0 */ function add_css$f(target) {
    append_styles(target, "svelte-13qih23", ".item.svelte-13qih23.svelte-13qih23{padding:10px}.item.svelte-13qih23.svelte-13qih23:not(:first-child){border-top:1px dashed #aaa}.item.svelte-13qih23 div.svelte-13qih23{float:right;text-align:right}");
}
function create_fragment$m(ctx) {
    let div1;
    let strong;
    let t0;
    let t1;
    let div0;
    let t2_value = JSON.stringify(/*value*/ ctx[1]) + "";
    let t2;
    return {
        c () {
            div1 = element("div");
            strong = element("strong");
            t0 = text(/*name*/ ctx[0]);
            t1 = space();
            div0 = element("div");
            t2 = text(t2_value);
            attr(div0, "class", "svelte-13qih23");
            attr(div1, "class", "item svelte-13qih23");
        },
        m (target, anchor) {
            insert(target, div1, anchor);
            append(div1, strong);
            append(strong, t0);
            append(div1, t1);
            append(div1, div0);
            append(div0, t2);
        },
        p (ctx, [dirty]) {
            if (dirty & /*name*/ 1) set_data(t0, /*name*/ ctx[0]);
            if (dirty & /*value*/ 2 && t2_value !== (t2_value = JSON.stringify(/*value*/ ctx[1]) + "")) set_data(t2, t2_value);
        },
        i: noop,
        o: noop,
        d (detaching) {
            if (detaching) detach(div1);
        }
    };
}
function instance$m($$self, $$props, $$invalidate) {
    let { name  } = $$props;
    let { value  } = $$props;
    $$self.$$set = ($$props)=>{
        if ("name" in $$props) $$invalidate(0, name = $$props.name);
        if ("value" in $$props) $$invalidate(1, value = $$props.value);
    };
    return [
        name,
        value
    ];
}
class Item extends SvelteComponent {
    constructor(options){
        super();
        init(this, options, instance$m, create_fragment$m, safe_not_equal, {
            name: 0,
            value: 1
        }, add_css$f);
    }
}
/* src/client/debug/info/Info.svelte generated by Svelte v3.49.0 */ function add_css$g(target) {
    append_styles(target, "svelte-1yzq5o8", ".gameinfo.svelte-1yzq5o8{padding:10px}");
}
// (19:2) {#if client.multiplayer}
function create_if_block$8(ctx) {
    let item;
    let current;
    item = new Item({
        props: {
            name: "isConnected",
            value: /*$client*/ ctx[1].isConnected
        }
    });
    return {
        c () {
            create_component(item.$$.fragment);
        },
        m (target, anchor) {
            mount_component(item, target, anchor);
            current = true;
        },
        p (ctx, dirty) {
            const item_changes = {};
            if (dirty & /*$client*/ 2) item_changes.value = /*$client*/ ctx[1].isConnected;
            item.$set(item_changes);
        },
        i (local) {
            if (current) return;
            transition_in(item.$$.fragment, local);
            current = true;
        },
        o (local) {
            transition_out(item.$$.fragment, local);
            current = false;
        },
        d (detaching) {
            destroy_component(item, detaching);
        }
    };
}
function create_fragment$n(ctx) {
    let section;
    let item0;
    let t0;
    let item1;
    let t1;
    let item2;
    let t2;
    let current;
    item0 = new Item({
        props: {
            name: "matchID",
            value: /*client*/ ctx[0].matchID
        }
    });
    item1 = new Item({
        props: {
            name: "playerID",
            value: /*client*/ ctx[0].playerID
        }
    });
    item2 = new Item({
        props: {
            name: "isActive",
            value: /*$client*/ ctx[1].isActive
        }
    });
    let if_block = /*client*/ ctx[0].multiplayer && create_if_block$8(ctx);
    return {
        c () {
            section = element("section");
            create_component(item0.$$.fragment);
            t0 = space();
            create_component(item1.$$.fragment);
            t1 = space();
            create_component(item2.$$.fragment);
            t2 = space();
            if (if_block) if_block.c();
            attr(section, "class", "gameinfo svelte-1yzq5o8");
        },
        m (target, anchor) {
            insert(target, section, anchor);
            mount_component(item0, section, null);
            append(section, t0);
            mount_component(item1, section, null);
            append(section, t1);
            mount_component(item2, section, null);
            append(section, t2);
            if (if_block) if_block.m(section, null);
            current = true;
        },
        p (ctx, [dirty]) {
            const item0_changes = {};
            if (dirty & /*client*/ 1) item0_changes.value = /*client*/ ctx[0].matchID;
            item0.$set(item0_changes);
            const item1_changes = {};
            if (dirty & /*client*/ 1) item1_changes.value = /*client*/ ctx[0].playerID;
            item1.$set(item1_changes);
            const item2_changes = {};
            if (dirty & /*$client*/ 2) item2_changes.value = /*$client*/ ctx[1].isActive;
            item2.$set(item2_changes);
            if (/*client*/ ctx[0].multiplayer) {
                if (if_block) {
                    if_block.p(ctx, dirty);
                    if (dirty & /*client*/ 1) transition_in(if_block, 1);
                } else {
                    if_block = create_if_block$8(ctx);
                    if_block.c();
                    transition_in(if_block, 1);
                    if_block.m(section, null);
                }
            } else if (if_block) {
                group_outros();
                transition_out(if_block, 1, 1, ()=>{
                    if_block = null;
                });
                check_outros();
            }
        },
        i (local) {
            if (current) return;
            transition_in(item0.$$.fragment, local);
            transition_in(item1.$$.fragment, local);
            transition_in(item2.$$.fragment, local);
            transition_in(if_block);
            current = true;
        },
        o (local) {
            transition_out(item0.$$.fragment, local);
            transition_out(item1.$$.fragment, local);
            transition_out(item2.$$.fragment, local);
            transition_out(if_block);
            current = false;
        },
        d (detaching) {
            if (detaching) detach(section);
            destroy_component(item0);
            destroy_component(item1);
            destroy_component(item2);
            if (if_block) if_block.d();
        }
    };
}
function instance$n($$self, $$props, $$invalidate) {
    let $client, $$unsubscribe_client = noop, $$subscribe_client = ()=>($$unsubscribe_client(), $$unsubscribe_client = subscribe(client, ($$value)=>$$invalidate(1, $client = $$value)), client);
    $$self.$$.on_destroy.push(()=>$$unsubscribe_client());
    let { client  } = $$props;
    $$subscribe_client();
    let { clientManager  } = $$props;
    let { ToggleVisibility  } = $$props;
    $$self.$$set = ($$props)=>{
        if ("client" in $$props) $$subscribe_client($$invalidate(0, client = $$props.client));
        if ("clientManager" in $$props) $$invalidate(2, clientManager = $$props.clientManager);
        if ("ToggleVisibility" in $$props) $$invalidate(3, ToggleVisibility = $$props.ToggleVisibility);
    };
    return [
        client,
        $client,
        clientManager,
        ToggleVisibility
    ];
}
class Info extends SvelteComponent {
    constructor(options){
        super();
        init(this, options, instance$n, create_fragment$n, safe_not_equal, {
            client: 0,
            clientManager: 2,
            ToggleVisibility: 3
        }, add_css$g);
    }
}
/* src/client/debug/log/TurnMarker.svelte generated by Svelte v3.49.0 */ function add_css$h(target) {
    append_styles(target, "svelte-6eza86", ".turn-marker.svelte-6eza86{display:flex;justify-content:center;align-items:center;grid-column:1;background:#555;color:#eee;text-align:center;font-weight:bold;border:1px solid #888}");
}
function create_fragment$o(ctx) {
    let div;
    let t;
    return {
        c () {
            div = element("div");
            t = text(/*turn*/ ctx[0]);
            attr(div, "class", "turn-marker svelte-6eza86");
            attr(div, "style", /*style*/ ctx[1]);
        },
        m (target, anchor) {
            insert(target, div, anchor);
            append(div, t);
        },
        p (ctx, [dirty]) {
            if (dirty & /*turn*/ 1) set_data(t, /*turn*/ ctx[0]);
        },
        i: noop,
        o: noop,
        d (detaching) {
            if (detaching) detach(div);
        }
    };
}
function instance$o($$self, $$props, $$invalidate) {
    let { turn  } = $$props;
    let { numEvents  } = $$props;
    const style = `grid-row: span ${numEvents}`;
    $$self.$$set = ($$props)=>{
        if ("turn" in $$props) $$invalidate(0, turn = $$props.turn);
        if ("numEvents" in $$props) $$invalidate(2, numEvents = $$props.numEvents);
    };
    return [
        turn,
        style,
        numEvents
    ];
}
class TurnMarker extends SvelteComponent {
    constructor(options){
        super();
        init(this, options, instance$o, create_fragment$o, safe_not_equal, {
            turn: 0,
            numEvents: 2
        }, add_css$h);
    }
}
/* src/client/debug/log/PhaseMarker.svelte generated by Svelte v3.49.0 */ function add_css$i(target) {
    append_styles(target, "svelte-1t4xap", ".phase-marker.svelte-1t4xap{grid-column:3;background:#555;border:1px solid #888;color:#eee;text-align:center;font-weight:bold;padding-top:10px;padding-bottom:10px;text-orientation:sideways;writing-mode:vertical-rl;line-height:30px;width:100%}");
}
function create_fragment$p(ctx) {
    let div;
    let t_value = /*phase*/ (ctx[0] || "") + "";
    let t;
    return {
        c () {
            div = element("div");
            t = text(t_value);
            attr(div, "class", "phase-marker svelte-1t4xap");
            attr(div, "style", /*style*/ ctx[1]);
        },
        m (target, anchor) {
            insert(target, div, anchor);
            append(div, t);
        },
        p (ctx, [dirty]) {
            if (dirty & /*phase*/ 1 && t_value !== (t_value = /*phase*/ (ctx[0] || "") + "")) set_data(t, t_value);
        },
        i: noop,
        o: noop,
        d (detaching) {
            if (detaching) detach(div);
        }
    };
}
function instance$p($$self, $$props, $$invalidate) {
    let { phase  } = $$props;
    let { numEvents  } = $$props;
    const style = `grid-row: span ${numEvents}`;
    $$self.$$set = ($$props)=>{
        if ("phase" in $$props) $$invalidate(0, phase = $$props.phase);
        if ("numEvents" in $$props) $$invalidate(2, numEvents = $$props.numEvents);
    };
    return [
        phase,
        style,
        numEvents
    ];
}
class PhaseMarker extends SvelteComponent {
    constructor(options){
        super();
        init(this, options, instance$p, create_fragment$p, safe_not_equal, {
            phase: 0,
            numEvents: 2
        }, add_css$i);
    }
}
/* src/client/debug/log/LogMetadata.svelte generated by Svelte v3.49.0 */ function create_fragment$q(ctx) {
    let div;
    return {
        c () {
            div = element("div");
            div.textContent = `${ctx[0]}`;
        },
        m (target, anchor) {
            insert(target, div, anchor);
        },
        p: noop,
        i: noop,
        o: noop,
        d (detaching) {
            if (detaching) detach(div);
        }
    };
}
function instance$q($$self, $$props, $$invalidate) {
    let { metadata  } = $$props;
    const renderedMetadata = metadata !== undefined ? JSON.stringify(metadata, null, 4) : "";
    $$self.$$set = ($$props)=>{
        if ("metadata" in $$props) $$invalidate(1, metadata = $$props.metadata);
    };
    return [
        renderedMetadata,
        metadata
    ];
}
class LogMetadata extends SvelteComponent {
    constructor(options){
        super();
        init(this, options, instance$q, create_fragment$q, safe_not_equal, {
            metadata: 1
        });
    }
}
/* src/client/debug/log/LogEvent.svelte generated by Svelte v3.49.0 */ function add_css$j(target) {
    append_styles(target, "svelte-vajd9z", ".log-event.svelte-vajd9z{grid-column:2;cursor:pointer;overflow:hidden;display:flex;flex-direction:column;justify-content:center;background:#fff;border:1px dotted #ccc;border-left:5px solid #ccc;padding:5px;text-align:center;color:#666;font-size:14px;min-height:25px;line-height:25px}.log-event.svelte-vajd9z:hover,.log-event.svelte-vajd9z:focus{border-style:solid;background:#eee}.log-event.pinned.svelte-vajd9z{border-style:solid;background:#eee;opacity:1}.args.svelte-vajd9z{text-align:left;white-space:pre-wrap}.player0.svelte-vajd9z{border-left-color:#ff851b}.player1.svelte-vajd9z{border-left-color:#7fdbff}.player2.svelte-vajd9z{border-left-color:#0074d9}.player3.svelte-vajd9z{border-left-color:#39cccc}.player4.svelte-vajd9z{border-left-color:#3d9970}.player5.svelte-vajd9z{border-left-color:#2ecc40}.player6.svelte-vajd9z{border-left-color:#01ff70}.player7.svelte-vajd9z{border-left-color:#ffdc00}.player8.svelte-vajd9z{border-left-color:#001f3f}.player9.svelte-vajd9z{border-left-color:#ff4136}.player10.svelte-vajd9z{border-left-color:#85144b}.player11.svelte-vajd9z{border-left-color:#f012be}.player12.svelte-vajd9z{border-left-color:#b10dc9}.player13.svelte-vajd9z{border-left-color:#111111}.player14.svelte-vajd9z{border-left-color:#aaaaaa}.player15.svelte-vajd9z{border-left-color:#dddddd}");
}
// (146:2) {:else}
function create_else_block$1(ctx) {
    let logmetadata;
    let current;
    logmetadata = new LogMetadata({
        props: {
            metadata: /*metadata*/ ctx[2]
        }
    });
    return {
        c () {
            create_component(logmetadata.$$.fragment);
        },
        m (target, anchor) {
            mount_component(logmetadata, target, anchor);
            current = true;
        },
        p (ctx, dirty) {
            const logmetadata_changes = {};
            if (dirty & /*metadata*/ 4) logmetadata_changes.metadata = /*metadata*/ ctx[2];
            logmetadata.$set(logmetadata_changes);
        },
        i (local) {
            if (current) return;
            transition_in(logmetadata.$$.fragment, local);
            current = true;
        },
        o (local) {
            transition_out(logmetadata.$$.fragment, local);
            current = false;
        },
        d (detaching) {
            destroy_component(logmetadata, detaching);
        }
    };
}
// (144:2) {#if metadataComponent}
function create_if_block$9(ctx) {
    let switch_instance;
    let switch_instance_anchor;
    let current;
    var switch_value = /*metadataComponent*/ ctx[3];
    function switch_props(ctx) {
        return {
            props: {
                metadata: /*metadata*/ ctx[2]
            }
        };
    }
    if (switch_value) switch_instance = new switch_value(switch_props(ctx));
    return {
        c () {
            if (switch_instance) create_component(switch_instance.$$.fragment);
            switch_instance_anchor = empty();
        },
        m (target, anchor) {
            if (switch_instance) mount_component(switch_instance, target, anchor);
            insert(target, switch_instance_anchor, anchor);
            current = true;
        },
        p (ctx, dirty) {
            const switch_instance_changes = {};
            if (dirty & /*metadata*/ 4) switch_instance_changes.metadata = /*metadata*/ ctx[2];
            if (switch_value !== (switch_value = /*metadataComponent*/ ctx[3])) {
                if (switch_instance) {
                    group_outros();
                    const old_component = switch_instance;
                    transition_out(old_component.$$.fragment, 1, 0, ()=>{
                        destroy_component(old_component, 1);
                    });
                    check_outros();
                }
                if (switch_value) {
                    switch_instance = new switch_value(switch_props(ctx));
                    create_component(switch_instance.$$.fragment);
                    transition_in(switch_instance.$$.fragment, 1);
                    mount_component(switch_instance, switch_instance_anchor.parentNode, switch_instance_anchor);
                } else switch_instance = null;
            } else if (switch_value) switch_instance.$set(switch_instance_changes);
        },
        i (local) {
            if (current) return;
            if (switch_instance) transition_in(switch_instance.$$.fragment, local);
            current = true;
        },
        o (local) {
            if (switch_instance) transition_out(switch_instance.$$.fragment, local);
            current = false;
        },
        d (detaching) {
            if (detaching) detach(switch_instance_anchor);
            if (switch_instance) destroy_component(switch_instance, detaching);
        }
    };
}
function create_fragment$r(ctx) {
    let button;
    let div;
    let t0;
    let t1;
    let t2;
    let t3;
    let t4;
    let current_block_type_index;
    let if_block;
    let button_class_value;
    let current;
    let mounted;
    let dispose;
    const if_block_creators = [
        create_if_block$9,
        create_else_block$1
    ];
    const if_blocks = [];
    function select_block_type(ctx, dirty) {
        if (/*metadataComponent*/ ctx[3]) return 0;
        return 1;
    }
    current_block_type_index = select_block_type(ctx);
    if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    return {
        c () {
            button = element("button");
            div = element("div");
            t0 = text(/*actionType*/ ctx[4]);
            t1 = text("(");
            t2 = text(/*renderedArgs*/ ctx[6]);
            t3 = text(")");
            t4 = space();
            if_block.c();
            attr(div, "class", "args svelte-vajd9z");
            attr(button, "class", button_class_value = "log-event player" + /*playerID*/ ctx[7] + " svelte-vajd9z");
            toggle_class(button, "pinned", /*pinned*/ ctx[1]);
        },
        m (target, anchor) {
            insert(target, button, anchor);
            append(button, div);
            append(div, t0);
            append(div, t1);
            append(div, t2);
            append(div, t3);
            append(button, t4);
            if_blocks[current_block_type_index].m(button, null);
            current = true;
            if (!mounted) {
                dispose = [
                    listen(button, "click", /*click_handler*/ ctx[9]),
                    listen(button, "mouseenter", /*mouseenter_handler*/ ctx[10]),
                    listen(button, "focus", /*focus_handler*/ ctx[11]),
                    listen(button, "mouseleave", /*mouseleave_handler*/ ctx[12]),
                    listen(button, "blur", /*blur_handler*/ ctx[13])
                ];
                mounted = true;
            }
        },
        p (ctx, [dirty]) {
            if (!current || dirty & /*actionType*/ 16) set_data(t0, /*actionType*/ ctx[4]);
            let previous_block_index = current_block_type_index;
            current_block_type_index = select_block_type(ctx);
            if (current_block_type_index === previous_block_index) if_blocks[current_block_type_index].p(ctx, dirty);
            else {
                group_outros();
                transition_out(if_blocks[previous_block_index], 1, 1, ()=>{
                    if_blocks[previous_block_index] = null;
                });
                check_outros();
                if_block = if_blocks[current_block_type_index];
                if (!if_block) {
                    if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
                    if_block.c();
                } else if_block.p(ctx, dirty);
                transition_in(if_block, 1);
                if_block.m(button, null);
            }
            if (dirty & /*pinned*/ 2) toggle_class(button, "pinned", /*pinned*/ ctx[1]);
        },
        i (local) {
            if (current) return;
            transition_in(if_block);
            current = true;
        },
        o (local) {
            transition_out(if_block);
            current = false;
        },
        d (detaching) {
            if (detaching) detach(button);
            if_blocks[current_block_type_index].d();
            mounted = false;
            run_all(dispose);
        }
    };
}
function instance$r($$self, $$props, $$invalidate) {
    let { logIndex  } = $$props;
    let { action  } = $$props;
    let { pinned  } = $$props;
    let { metadata  } = $$props;
    let { metadataComponent  } = $$props;
    const dispatch = createEventDispatcher();
    const args = action.payload.args;
    const renderedArgs = Array.isArray(args) ? args.map((arg)=>JSON.stringify(arg, null, 2)).join(",") : JSON.stringify(args, null, 2) || "";
    const playerID = action.payload.playerID;
    let actionType;
    switch(action.type){
        case "UNDO":
            actionType = "undo";
            break;
        case "REDO":
            actionType = "redo";
        case "GAME_EVENT":
        case "MAKE_MOVE":
        default:
            actionType = action.payload.type;
            break;
    }
    const click_handler = ()=>dispatch("click", {
            logIndex
        });
    const mouseenter_handler = ()=>dispatch("mouseenter", {
            logIndex
        });
    const focus_handler = ()=>dispatch("mouseenter", {
            logIndex
        });
    const mouseleave_handler = ()=>dispatch("mouseleave");
    const blur_handler = ()=>dispatch("mouseleave");
    $$self.$$set = ($$props)=>{
        if ("logIndex" in $$props) $$invalidate(0, logIndex = $$props.logIndex);
        if ("action" in $$props) $$invalidate(8, action = $$props.action);
        if ("pinned" in $$props) $$invalidate(1, pinned = $$props.pinned);
        if ("metadata" in $$props) $$invalidate(2, metadata = $$props.metadata);
        if ("metadataComponent" in $$props) $$invalidate(3, metadataComponent = $$props.metadataComponent);
    };
    return [
        logIndex,
        pinned,
        metadata,
        metadataComponent,
        actionType,
        dispatch,
        renderedArgs,
        playerID,
        action,
        click_handler,
        mouseenter_handler,
        focus_handler,
        mouseleave_handler,
        blur_handler
    ];
}
class LogEvent extends SvelteComponent {
    constructor(options){
        super();
        init(this, options, instance$r, create_fragment$r, safe_not_equal, {
            logIndex: 0,
            action: 8,
            pinned: 1,
            metadata: 2,
            metadataComponent: 3
        }, add_css$j);
    }
}
/* node_modules/svelte-icons/fa/FaArrowAltCircleDown.svelte generated by Svelte v3.49.0 */ function create_default_slot$1(ctx) {
    let path;
    return {
        c () {
            path = svg_element("path");
            attr(path, "d", "M504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zM212 140v116h-70.9c-10.7 0-16.1 13-8.5 20.5l114.9 114.3c4.7 4.7 12.2 4.7 16.9 0l114.9-114.3c7.6-7.6 2.2-20.5-8.5-20.5H300V140c0-6.6-5.4-12-12-12h-64c-6.6 0-12 5.4-12 12z");
        },
        m (target, anchor) {
            insert(target, path, anchor);
        },
        p: noop,
        d (detaching) {
            if (detaching) detach(path);
        }
    };
}
function create_fragment$s(ctx) {
    let iconbase;
    let current;
    const iconbase_spread_levels = [
        {
            viewBox: "0 0 512 512"
        },
        /*$$props*/ ctx[0]
    ];
    let iconbase_props = {
        $$slots: {
            default: [
                create_default_slot$1
            ]
        },
        $$scope: {
            ctx
        }
    };
    for(let i = 0; i < iconbase_spread_levels.length; i += 1)iconbase_props = assign(iconbase_props, iconbase_spread_levels[i]);
    iconbase = new IconBase({
        props: iconbase_props
    });
    return {
        c () {
            create_component(iconbase.$$.fragment);
        },
        m (target, anchor) {
            mount_component(iconbase, target, anchor);
            current = true;
        },
        p (ctx, [dirty]) {
            const iconbase_changes = dirty & /*$$props*/ 1 ? get_spread_update(iconbase_spread_levels, [
                iconbase_spread_levels[0],
                get_spread_object(/*$$props*/ ctx[0])
            ]) : {};
            if (dirty & /*$$scope*/ 2) iconbase_changes.$$scope = {
                dirty,
                ctx
            };
            iconbase.$set(iconbase_changes);
        },
        i (local) {
            if (current) return;
            transition_in(iconbase.$$.fragment, local);
            current = true;
        },
        o (local) {
            transition_out(iconbase.$$.fragment, local);
            current = false;
        },
        d (detaching) {
            destroy_component(iconbase, detaching);
        }
    };
}
function instance$s($$self, $$props, $$invalidate) {
    $$self.$$set = ($$new_props)=>{
        $$invalidate(0, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    };
    $$props = exclude_internal_props($$props);
    return [
        $$props
    ];
}
class FaArrowAltCircleDown extends SvelteComponent {
    constructor(options){
        super();
        init(this, options, instance$s, create_fragment$s, safe_not_equal, {});
    }
}
/* src/client/debug/mcts/Action.svelte generated by Svelte v3.49.0 */ function add_css$k(target) {
    append_styles(target, "svelte-1a7time", "div.svelte-1a7time{white-space:nowrap;text-overflow:ellipsis;overflow:hidden;max-width:500px}");
}
function create_fragment$t(ctx) {
    let div;
    let t;
    return {
        c () {
            div = element("div");
            t = text(/*text*/ ctx[0]);
            attr(div, "alt", /*text*/ ctx[0]);
            attr(div, "class", "svelte-1a7time");
        },
        m (target, anchor) {
            insert(target, div, anchor);
            append(div, t);
        },
        p (ctx, [dirty]) {
            if (dirty & /*text*/ 1) set_data(t, /*text*/ ctx[0]);
            if (dirty & /*text*/ 1) attr(div, "alt", /*text*/ ctx[0]);
        },
        i: noop,
        o: noop,
        d (detaching) {
            if (detaching) detach(div);
        }
    };
}
function instance$t($$self, $$props, $$invalidate) {
    let { action  } = $$props;
    let text;
    $$self.$$set = ($$props)=>{
        if ("action" in $$props) $$invalidate(1, action = $$props.action);
    };
    $$self.$$.update = ()=>{
        if ($$self.$$.dirty & /*action*/ 2) {
            const { type , args  } = action.payload;
            const argsFormatted = (args || []).join(",");
            $$invalidate(0, text = `${type}(${argsFormatted})`);
        }
    };
    return [
        text,
        action
    ];
}
class Action extends SvelteComponent {
    constructor(options){
        super();
        init(this, options, instance$t, create_fragment$t, safe_not_equal, {
            action: 1
        }, add_css$k);
    }
}
/* src/client/debug/mcts/Table.svelte generated by Svelte v3.49.0 */ function add_css$l(target) {
    append_styles(target, "svelte-ztcwsu", "table.svelte-ztcwsu.svelte-ztcwsu{font-size:12px;border-collapse:collapse;border:1px solid #ddd;padding:0}tr.svelte-ztcwsu.svelte-ztcwsu{cursor:pointer}tr.svelte-ztcwsu:hover td.svelte-ztcwsu{background:#eee}tr.selected.svelte-ztcwsu td.svelte-ztcwsu{background:#eee}td.svelte-ztcwsu.svelte-ztcwsu{padding:10px;height:10px;line-height:10px;font-size:12px;border:none}th.svelte-ztcwsu.svelte-ztcwsu{background:#888;color:#fff;padding:10px;text-align:center}");
}
function get_each_context$6(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[10] = list[i];
    child_ctx[12] = i;
    return child_ctx;
}
// (86:2) {#each children as child, i}
function create_each_block$6(ctx) {
    let tr;
    let td0;
    let t0_value = /*child*/ ctx[10].value + "";
    let t0;
    let t1;
    let td1;
    let t2_value = /*child*/ ctx[10].visits + "";
    let t2;
    let t3;
    let td2;
    let action;
    let t4;
    let current;
    let mounted;
    let dispose;
    action = new Action({
        props: {
            action: /*child*/ ctx[10].parentAction
        }
    });
    function click_handler() {
        return /*click_handler*/ ctx[6](/*child*/ ctx[10], /*i*/ ctx[12]);
    }
    function mouseout_handler() {
        return /*mouseout_handler*/ ctx[7](/*i*/ ctx[12]);
    }
    function mouseover_handler() {
        return /*mouseover_handler*/ ctx[8](/*child*/ ctx[10], /*i*/ ctx[12]);
    }
    return {
        c () {
            tr = element("tr");
            td0 = element("td");
            t0 = text(t0_value);
            t1 = space();
            td1 = element("td");
            t2 = text(t2_value);
            t3 = space();
            td2 = element("td");
            create_component(action.$$.fragment);
            t4 = space();
            attr(td0, "class", "svelte-ztcwsu");
            attr(td1, "class", "svelte-ztcwsu");
            attr(td2, "class", "svelte-ztcwsu");
            attr(tr, "class", "svelte-ztcwsu");
            toggle_class(tr, "clickable", /*children*/ ctx[1].length > 0);
            toggle_class(tr, "selected", /*i*/ ctx[12] === /*selectedIndex*/ ctx[0]);
        },
        m (target, anchor) {
            insert(target, tr, anchor);
            append(tr, td0);
            append(td0, t0);
            append(tr, t1);
            append(tr, td1);
            append(td1, t2);
            append(tr, t3);
            append(tr, td2);
            mount_component(action, td2, null);
            append(tr, t4);
            current = true;
            if (!mounted) {
                dispose = [
                    listen(tr, "click", click_handler),
                    listen(tr, "mouseout", mouseout_handler),
                    listen(tr, "mouseover", mouseover_handler)
                ];
                mounted = true;
            }
        },
        p (new_ctx, dirty) {
            ctx = new_ctx;
            if ((!current || dirty & /*children*/ 2) && t0_value !== (t0_value = /*child*/ ctx[10].value + "")) set_data(t0, t0_value);
            if ((!current || dirty & /*children*/ 2) && t2_value !== (t2_value = /*child*/ ctx[10].visits + "")) set_data(t2, t2_value);
            const action_changes = {};
            if (dirty & /*children*/ 2) action_changes.action = /*child*/ ctx[10].parentAction;
            action.$set(action_changes);
            if (dirty & /*children*/ 2) toggle_class(tr, "clickable", /*children*/ ctx[1].length > 0);
            if (dirty & /*selectedIndex*/ 1) toggle_class(tr, "selected", /*i*/ ctx[12] === /*selectedIndex*/ ctx[0]);
        },
        i (local) {
            if (current) return;
            transition_in(action.$$.fragment, local);
            current = true;
        },
        o (local) {
            transition_out(action.$$.fragment, local);
            current = false;
        },
        d (detaching) {
            if (detaching) detach(tr);
            destroy_component(action);
            mounted = false;
            run_all(dispose);
        }
    };
}
function create_fragment$u(ctx) {
    let table;
    let thead;
    let t5;
    let tbody;
    let current;
    let each_value = /*children*/ ctx[1];
    let each_blocks = [];
    for(let i = 0; i < each_value.length; i += 1)each_blocks[i] = create_each_block$6(get_each_context$6(ctx, each_value, i));
    const out = (i)=>transition_out(each_blocks[i], 1, 1, ()=>{
            each_blocks[i] = null;
        });
    return {
        c () {
            table = element("table");
            thead = element("thead");
            thead.innerHTML = `<th class="svelte-ztcwsu">Value</th> 
    <th class="svelte-ztcwsu">Visits</th> 
    <th class="svelte-ztcwsu">Action</th>`;
            t5 = space();
            tbody = element("tbody");
            for(let i = 0; i < each_blocks.length; i += 1)each_blocks[i].c();
            attr(table, "class", "svelte-ztcwsu");
        },
        m (target, anchor) {
            insert(target, table, anchor);
            append(table, thead);
            append(table, t5);
            append(table, tbody);
            for(let i = 0; i < each_blocks.length; i += 1)each_blocks[i].m(tbody, null);
            current = true;
        },
        p (ctx, [dirty]) {
            if (dirty & /*children, selectedIndex, Select, Preview*/ 15) {
                each_value = /*children*/ ctx[1];
                let i;
                for(i = 0; i < each_value.length; i += 1){
                    const child_ctx = get_each_context$6(ctx, each_value, i);
                    if (each_blocks[i]) {
                        each_blocks[i].p(child_ctx, dirty);
                        transition_in(each_blocks[i], 1);
                    } else {
                        each_blocks[i] = create_each_block$6(child_ctx);
                        each_blocks[i].c();
                        transition_in(each_blocks[i], 1);
                        each_blocks[i].m(tbody, null);
                    }
                }
                group_outros();
                for(i = each_value.length; i < each_blocks.length; i += 1)out(i);
                check_outros();
            }
        },
        i (local) {
            if (current) return;
            for(let i = 0; i < each_value.length; i += 1)transition_in(each_blocks[i]);
            current = true;
        },
        o (local) {
            each_blocks = each_blocks.filter(Boolean);
            for(let i = 0; i < each_blocks.length; i += 1)transition_out(each_blocks[i]);
            current = false;
        },
        d (detaching) {
            if (detaching) detach(table);
            destroy_each(each_blocks, detaching);
        }
    };
}
function instance$u($$self, $$props, $$invalidate) {
    let { root  } = $$props;
    let { selectedIndex =null  } = $$props;
    const dispatch = createEventDispatcher();
    let parents = [];
    let children = [];
    function Select(node, i) {
        dispatch("select", {
            node,
            selectedIndex: i
        });
    }
    function Preview(node, i) {
        if (selectedIndex === null) dispatch("preview", {
            node
        });
    }
    const click_handler = (child, i)=>Select(child, i);
    const mouseout_handler = (i)=>Preview(null);
    const mouseover_handler = (child, i)=>Preview(child);
    $$self.$$set = ($$props)=>{
        if ("root" in $$props) $$invalidate(4, root = $$props.root);
        if ("selectedIndex" in $$props) $$invalidate(0, selectedIndex = $$props.selectedIndex);
    };
    $$self.$$.update = ()=>{
        if ($$self.$$.dirty & /*root, parents*/ 48) {
            let t = root;
            $$invalidate(5, parents = []);
            while(t.parent){
                const parent = t.parent;
                const { type , args  } = t.parentAction.payload;
                const argsFormatted = (args || []).join(",");
                const arrowText = `${type}(${argsFormatted})`;
                parents.push({
                    parent,
                    arrowText
                });
                t = parent;
            }
            parents.reverse();
            $$invalidate(1, children = [
                ...root.children
            ].sort((a, b)=>a.visits < b.visits ? 1 : -1).slice(0, 50));
        }
    };
    return [
        selectedIndex,
        children,
        Select,
        Preview,
        root,
        parents,
        click_handler,
        mouseout_handler,
        mouseover_handler
    ];
}
class Table extends SvelteComponent {
    constructor(options){
        super();
        init(this, options, instance$u, create_fragment$u, safe_not_equal, {
            root: 4,
            selectedIndex: 0
        }, add_css$l);
    }
}
/* src/client/debug/mcts/MCTS.svelte generated by Svelte v3.49.0 */ function add_css$m(target) {
    append_styles(target, "svelte-1f0amz4", ".visualizer.svelte-1f0amz4{display:flex;flex-direction:column;align-items:center;padding:50px}.preview.svelte-1f0amz4{opacity:0.5}.icon.svelte-1f0amz4{color:#777;width:32px;height:32px;margin-bottom:20px}");
}
function get_each_context$7(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[9] = list[i].node;
    child_ctx[10] = list[i].selectedIndex;
    child_ctx[12] = i;
    return child_ctx;
}
// (50:4) {#if i !== 0}
function create_if_block_2$3(ctx) {
    let div;
    let arrow;
    let current;
    arrow = new FaArrowAltCircleDown({});
    return {
        c () {
            div = element("div");
            create_component(arrow.$$.fragment);
            attr(div, "class", "icon svelte-1f0amz4");
        },
        m (target, anchor) {
            insert(target, div, anchor);
            mount_component(arrow, div, null);
            current = true;
        },
        i (local) {
            if (current) return;
            transition_in(arrow.$$.fragment, local);
            current = true;
        },
        o (local) {
            transition_out(arrow.$$.fragment, local);
            current = false;
        },
        d (detaching) {
            if (detaching) detach(div);
            destroy_component(arrow);
        }
    };
}
// (61:6) {:else}
function create_else_block$2(ctx) {
    let table;
    let current;
    function select_handler_1(...args) {
        return /*select_handler_1*/ ctx[7](/*i*/ ctx[12], ...args);
    }
    table = new Table({
        props: {
            root: /*node*/ ctx[9],
            selectedIndex: /*selectedIndex*/ ctx[10]
        }
    });
    table.$on("select", select_handler_1);
    return {
        c () {
            create_component(table.$$.fragment);
        },
        m (target, anchor) {
            mount_component(table, target, anchor);
            current = true;
        },
        p (new_ctx, dirty) {
            ctx = new_ctx;
            const table_changes = {};
            if (dirty & /*nodes*/ 1) table_changes.root = /*node*/ ctx[9];
            if (dirty & /*nodes*/ 1) table_changes.selectedIndex = /*selectedIndex*/ ctx[10];
            table.$set(table_changes);
        },
        i (local) {
            if (current) return;
            transition_in(table.$$.fragment, local);
            current = true;
        },
        o (local) {
            transition_out(table.$$.fragment, local);
            current = false;
        },
        d (detaching) {
            destroy_component(table, detaching);
        }
    };
}
// (57:6) {#if i === nodes.length - 1}
function create_if_block_1$3(ctx) {
    let table;
    let current;
    function select_handler(...args) {
        return /*select_handler*/ ctx[5](/*i*/ ctx[12], ...args);
    }
    function preview_handler(...args) {
        return /*preview_handler*/ ctx[6](/*i*/ ctx[12], ...args);
    }
    table = new Table({
        props: {
            root: /*node*/ ctx[9]
        }
    });
    table.$on("select", select_handler);
    table.$on("preview", preview_handler);
    return {
        c () {
            create_component(table.$$.fragment);
        },
        m (target, anchor) {
            mount_component(table, target, anchor);
            current = true;
        },
        p (new_ctx, dirty) {
            ctx = new_ctx;
            const table_changes = {};
            if (dirty & /*nodes*/ 1) table_changes.root = /*node*/ ctx[9];
            table.$set(table_changes);
        },
        i (local) {
            if (current) return;
            transition_in(table.$$.fragment, local);
            current = true;
        },
        o (local) {
            transition_out(table.$$.fragment, local);
            current = false;
        },
        d (detaching) {
            destroy_component(table, detaching);
        }
    };
}
// (49:2) {#each nodes as { node, selectedIndex }
function create_each_block$7(ctx) {
    let t;
    let section;
    let current_block_type_index;
    let if_block1;
    let current;
    let if_block0 = /*i*/ ctx[12] !== 0 && create_if_block_2$3();
    const if_block_creators = [
        create_if_block_1$3,
        create_else_block$2
    ];
    const if_blocks = [];
    function select_block_type(ctx, dirty) {
        if (/*i*/ ctx[12] === /*nodes*/ ctx[0].length - 1) return 0;
        return 1;
    }
    current_block_type_index = select_block_type(ctx);
    if_block1 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    return {
        c () {
            if (if_block0) if_block0.c();
            t = space();
            section = element("section");
            if_block1.c();
        },
        m (target, anchor) {
            if (if_block0) if_block0.m(target, anchor);
            insert(target, t, anchor);
            insert(target, section, anchor);
            if_blocks[current_block_type_index].m(section, null);
            current = true;
        },
        p (ctx, dirty) {
            let previous_block_index = current_block_type_index;
            current_block_type_index = select_block_type(ctx);
            if (current_block_type_index === previous_block_index) if_blocks[current_block_type_index].p(ctx, dirty);
            else {
                group_outros();
                transition_out(if_blocks[previous_block_index], 1, 1, ()=>{
                    if_blocks[previous_block_index] = null;
                });
                check_outros();
                if_block1 = if_blocks[current_block_type_index];
                if (!if_block1) {
                    if_block1 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
                    if_block1.c();
                } else if_block1.p(ctx, dirty);
                transition_in(if_block1, 1);
                if_block1.m(section, null);
            }
        },
        i (local) {
            if (current) return;
            transition_in(if_block0);
            transition_in(if_block1);
            current = true;
        },
        o (local) {
            transition_out(if_block0);
            transition_out(if_block1);
            current = false;
        },
        d (detaching) {
            if (if_block0) if_block0.d(detaching);
            if (detaching) detach(t);
            if (detaching) detach(section);
            if_blocks[current_block_type_index].d();
        }
    };
}
// (69:2) {#if preview}
function create_if_block$a(ctx) {
    let div;
    let arrow;
    let t;
    let section;
    let table;
    let current;
    arrow = new FaArrowAltCircleDown({});
    table = new Table({
        props: {
            root: /*preview*/ ctx[1]
        }
    });
    return {
        c () {
            div = element("div");
            create_component(arrow.$$.fragment);
            t = space();
            section = element("section");
            create_component(table.$$.fragment);
            attr(div, "class", "icon svelte-1f0amz4");
            attr(section, "class", "preview svelte-1f0amz4");
        },
        m (target, anchor) {
            insert(target, div, anchor);
            mount_component(arrow, div, null);
            insert(target, t, anchor);
            insert(target, section, anchor);
            mount_component(table, section, null);
            current = true;
        },
        p (ctx, dirty) {
            const table_changes = {};
            if (dirty & /*preview*/ 2) table_changes.root = /*preview*/ ctx[1];
            table.$set(table_changes);
        },
        i (local) {
            if (current) return;
            transition_in(arrow.$$.fragment, local);
            transition_in(table.$$.fragment, local);
            current = true;
        },
        o (local) {
            transition_out(arrow.$$.fragment, local);
            transition_out(table.$$.fragment, local);
            current = false;
        },
        d (detaching) {
            if (detaching) detach(div);
            destroy_component(arrow);
            if (detaching) detach(t);
            if (detaching) detach(section);
            destroy_component(table);
        }
    };
}
function create_fragment$v(ctx) {
    let div;
    let t;
    let current;
    let each_value = /*nodes*/ ctx[0];
    let each_blocks = [];
    for(let i = 0; i < each_value.length; i += 1)each_blocks[i] = create_each_block$7(get_each_context$7(ctx, each_value, i));
    const out = (i)=>transition_out(each_blocks[i], 1, 1, ()=>{
            each_blocks[i] = null;
        });
    let if_block = /*preview*/ ctx[1] && create_if_block$a(ctx);
    return {
        c () {
            div = element("div");
            for(let i = 0; i < each_blocks.length; i += 1)each_blocks[i].c();
            t = space();
            if (if_block) if_block.c();
            attr(div, "class", "visualizer svelte-1f0amz4");
        },
        m (target, anchor) {
            insert(target, div, anchor);
            for(let i = 0; i < each_blocks.length; i += 1)each_blocks[i].m(div, null);
            append(div, t);
            if (if_block) if_block.m(div, null);
            current = true;
        },
        p (ctx, [dirty]) {
            if (dirty & /*nodes, SelectNode, PreviewNode*/ 13) {
                each_value = /*nodes*/ ctx[0];
                let i;
                for(i = 0; i < each_value.length; i += 1){
                    const child_ctx = get_each_context$7(ctx, each_value, i);
                    if (each_blocks[i]) {
                        each_blocks[i].p(child_ctx, dirty);
                        transition_in(each_blocks[i], 1);
                    } else {
                        each_blocks[i] = create_each_block$7(child_ctx);
                        each_blocks[i].c();
                        transition_in(each_blocks[i], 1);
                        each_blocks[i].m(div, t);
                    }
                }
                group_outros();
                for(i = each_value.length; i < each_blocks.length; i += 1)out(i);
                check_outros();
            }
            if (/*preview*/ ctx[1]) {
                if (if_block) {
                    if_block.p(ctx, dirty);
                    if (dirty & /*preview*/ 2) transition_in(if_block, 1);
                } else {
                    if_block = create_if_block$a(ctx);
                    if_block.c();
                    transition_in(if_block, 1);
                    if_block.m(div, null);
                }
            } else if (if_block) {
                group_outros();
                transition_out(if_block, 1, 1, ()=>{
                    if_block = null;
                });
                check_outros();
            }
        },
        i (local) {
            if (current) return;
            for(let i = 0; i < each_value.length; i += 1)transition_in(each_blocks[i]);
            transition_in(if_block);
            current = true;
        },
        o (local) {
            each_blocks = each_blocks.filter(Boolean);
            for(let i = 0; i < each_blocks.length; i += 1)transition_out(each_blocks[i]);
            transition_out(if_block);
            current = false;
        },
        d (detaching) {
            if (detaching) detach(div);
            destroy_each(each_blocks, detaching);
            if (if_block) if_block.d();
        }
    };
}
function instance$v($$self, $$props, $$invalidate) {
    let { metadata  } = $$props;
    let nodes = [];
    let preview = null;
    function SelectNode({ node , selectedIndex  }, i) {
        $$invalidate(1, preview = null);
        $$invalidate(0, nodes[i].selectedIndex = selectedIndex, nodes);
        $$invalidate(0, nodes = [
            ...nodes.slice(0, i + 1),
            {
                node
            }
        ]);
    }
    function PreviewNode({ node  }, i) {
        $$invalidate(1, preview = node);
    }
    const select_handler = (i, e)=>SelectNode(e.detail, i);
    const preview_handler = (i, e)=>PreviewNode(e.detail);
    const select_handler_1 = (i, e)=>SelectNode(e.detail, i);
    $$self.$$set = ($$props)=>{
        if ("metadata" in $$props) $$invalidate(4, metadata = $$props.metadata);
    };
    $$self.$$.update = ()=>{
        if ($$self.$$.dirty & /*metadata*/ 16) $$invalidate(0, nodes = [
            {
                node: metadata
            }
        ]);
    };
    return [
        nodes,
        preview,
        SelectNode,
        PreviewNode,
        metadata,
        select_handler,
        preview_handler,
        select_handler_1
    ];
}
class MCTS extends SvelteComponent {
    constructor(options){
        super();
        init(this, options, instance$v, create_fragment$v, safe_not_equal, {
            metadata: 4
        }, add_css$m);
    }
}
/* src/client/debug/log/Log.svelte generated by Svelte v3.49.0 */ function add_css$n(target) {
    append_styles(target, "svelte-1pq5e4b", ".gamelog.svelte-1pq5e4b{display:grid;grid-template-columns:30px 1fr 30px;grid-auto-rows:auto;grid-auto-flow:column}");
}
function get_each_context$8(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[16] = list[i].phase;
    child_ctx[18] = i;
    return child_ctx;
}
function get_each_context_1(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[19] = list[i].action;
    child_ctx[20] = list[i].metadata;
    child_ctx[18] = i;
    return child_ctx;
}
function get_each_context_2(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[22] = list[i].turn;
    child_ctx[18] = i;
    return child_ctx;
}
// (136:4) {#if i in turnBoundaries}
function create_if_block_1$4(ctx) {
    let turnmarker;
    let current;
    turnmarker = new TurnMarker({
        props: {
            turn: /*turn*/ ctx[22],
            numEvents: /*turnBoundaries*/ ctx[3][/*i*/ ctx[18]]
        }
    });
    return {
        c () {
            create_component(turnmarker.$$.fragment);
        },
        m (target, anchor) {
            mount_component(turnmarker, target, anchor);
            current = true;
        },
        p (ctx, dirty) {
            const turnmarker_changes = {};
            if (dirty & /*renderedLogEntries*/ 2) turnmarker_changes.turn = /*turn*/ ctx[22];
            if (dirty & /*turnBoundaries*/ 8) turnmarker_changes.numEvents = /*turnBoundaries*/ ctx[3][/*i*/ ctx[18]];
            turnmarker.$set(turnmarker_changes);
        },
        i (local) {
            if (current) return;
            transition_in(turnmarker.$$.fragment, local);
            current = true;
        },
        o (local) {
            transition_out(turnmarker.$$.fragment, local);
            current = false;
        },
        d (detaching) {
            destroy_component(turnmarker, detaching);
        }
    };
}
// (135:2) {#each renderedLogEntries as { turn }
function create_each_block_2(ctx) {
    let if_block_anchor;
    let current;
    let if_block = /*i*/ ctx[18] in /*turnBoundaries*/ ctx[3] && create_if_block_1$4(ctx);
    return {
        c () {
            if (if_block) if_block.c();
            if_block_anchor = empty();
        },
        m (target, anchor) {
            if (if_block) if_block.m(target, anchor);
            insert(target, if_block_anchor, anchor);
            current = true;
        },
        p (ctx, dirty) {
            if (/*i*/ ctx[18] in /*turnBoundaries*/ ctx[3]) {
                if (if_block) {
                    if_block.p(ctx, dirty);
                    if (dirty & /*turnBoundaries*/ 8) transition_in(if_block, 1);
                } else {
                    if_block = create_if_block_1$4(ctx);
                    if_block.c();
                    transition_in(if_block, 1);
                    if_block.m(if_block_anchor.parentNode, if_block_anchor);
                }
            } else if (if_block) {
                group_outros();
                transition_out(if_block, 1, 1, ()=>{
                    if_block = null;
                });
                check_outros();
            }
        },
        i (local) {
            if (current) return;
            transition_in(if_block);
            current = true;
        },
        o (local) {
            transition_out(if_block);
            current = false;
        },
        d (detaching) {
            if (if_block) if_block.d(detaching);
            if (detaching) detach(if_block_anchor);
        }
    };
}
// (141:2) {#each renderedLogEntries as { action, metadata }
function create_each_block_1(ctx) {
    let logevent;
    let current;
    logevent = new LogEvent({
        props: {
            pinned: /*i*/ ctx[18] === /*pinned*/ ctx[2],
            logIndex: /*i*/ ctx[18],
            action: /*action*/ ctx[19],
            metadata: /*metadata*/ ctx[20]
        }
    });
    logevent.$on("click", /*OnLogClick*/ ctx[5]);
    logevent.$on("mouseenter", /*OnMouseEnter*/ ctx[6]);
    logevent.$on("mouseleave", /*OnMouseLeave*/ ctx[7]);
    return {
        c () {
            create_component(logevent.$$.fragment);
        },
        m (target, anchor) {
            mount_component(logevent, target, anchor);
            current = true;
        },
        p (ctx, dirty) {
            const logevent_changes = {};
            if (dirty & /*pinned*/ 4) logevent_changes.pinned = /*i*/ ctx[18] === /*pinned*/ ctx[2];
            if (dirty & /*renderedLogEntries*/ 2) logevent_changes.action = /*action*/ ctx[19];
            if (dirty & /*renderedLogEntries*/ 2) logevent_changes.metadata = /*metadata*/ ctx[20];
            logevent.$set(logevent_changes);
        },
        i (local) {
            if (current) return;
            transition_in(logevent.$$.fragment, local);
            current = true;
        },
        o (local) {
            transition_out(logevent.$$.fragment, local);
            current = false;
        },
        d (detaching) {
            destroy_component(logevent, detaching);
        }
    };
}
// (153:4) {#if i in phaseBoundaries}
function create_if_block$b(ctx) {
    let phasemarker;
    let current;
    phasemarker = new PhaseMarker({
        props: {
            phase: /*phase*/ ctx[16],
            numEvents: /*phaseBoundaries*/ ctx[4][/*i*/ ctx[18]]
        }
    });
    return {
        c () {
            create_component(phasemarker.$$.fragment);
        },
        m (target, anchor) {
            mount_component(phasemarker, target, anchor);
            current = true;
        },
        p (ctx, dirty) {
            const phasemarker_changes = {};
            if (dirty & /*renderedLogEntries*/ 2) phasemarker_changes.phase = /*phase*/ ctx[16];
            if (dirty & /*phaseBoundaries*/ 16) phasemarker_changes.numEvents = /*phaseBoundaries*/ ctx[4][/*i*/ ctx[18]];
            phasemarker.$set(phasemarker_changes);
        },
        i (local) {
            if (current) return;
            transition_in(phasemarker.$$.fragment, local);
            current = true;
        },
        o (local) {
            transition_out(phasemarker.$$.fragment, local);
            current = false;
        },
        d (detaching) {
            destroy_component(phasemarker, detaching);
        }
    };
}
// (152:2) {#each renderedLogEntries as { phase }
function create_each_block$8(ctx) {
    let if_block_anchor;
    let current;
    let if_block = /*i*/ ctx[18] in /*phaseBoundaries*/ ctx[4] && create_if_block$b(ctx);
    return {
        c () {
            if (if_block) if_block.c();
            if_block_anchor = empty();
        },
        m (target, anchor) {
            if (if_block) if_block.m(target, anchor);
            insert(target, if_block_anchor, anchor);
            current = true;
        },
        p (ctx, dirty) {
            if (/*i*/ ctx[18] in /*phaseBoundaries*/ ctx[4]) {
                if (if_block) {
                    if_block.p(ctx, dirty);
                    if (dirty & /*phaseBoundaries*/ 16) transition_in(if_block, 1);
                } else {
                    if_block = create_if_block$b(ctx);
                    if_block.c();
                    transition_in(if_block, 1);
                    if_block.m(if_block_anchor.parentNode, if_block_anchor);
                }
            } else if (if_block) {
                group_outros();
                transition_out(if_block, 1, 1, ()=>{
                    if_block = null;
                });
                check_outros();
            }
        },
        i (local) {
            if (current) return;
            transition_in(if_block);
            current = true;
        },
        o (local) {
            transition_out(if_block);
            current = false;
        },
        d (detaching) {
            if (if_block) if_block.d(detaching);
            if (detaching) detach(if_block_anchor);
        }
    };
}
function create_fragment$w(ctx) {
    let div;
    let t0;
    let t1;
    let current;
    let mounted;
    let dispose;
    let each_value_2 = /*renderedLogEntries*/ ctx[1];
    let each_blocks_2 = [];
    for(let i = 0; i < each_value_2.length; i += 1)each_blocks_2[i] = create_each_block_2(get_each_context_2(ctx, each_value_2, i));
    const out = (i)=>transition_out(each_blocks_2[i], 1, 1, ()=>{
            each_blocks_2[i] = null;
        });
    let each_value_1 = /*renderedLogEntries*/ ctx[1];
    let each_blocks_1 = [];
    for(let i1 = 0; i1 < each_value_1.length; i1 += 1)each_blocks_1[i1] = create_each_block_1(get_each_context_1(ctx, each_value_1, i1));
    const out_1 = (i)=>transition_out(each_blocks_1[i], 1, 1, ()=>{
            each_blocks_1[i] = null;
        });
    let each_value = /*renderedLogEntries*/ ctx[1];
    let each_blocks = [];
    for(let i2 = 0; i2 < each_value.length; i2 += 1)each_blocks[i2] = create_each_block$8(get_each_context$8(ctx, each_value, i2));
    const out_2 = (i)=>transition_out(each_blocks[i], 1, 1, ()=>{
            each_blocks[i] = null;
        });
    return {
        c () {
            div = element("div");
            for(let i = 0; i < each_blocks_2.length; i += 1)each_blocks_2[i].c();
            t0 = space();
            for(let i1 = 0; i1 < each_blocks_1.length; i1 += 1)each_blocks_1[i1].c();
            t1 = space();
            for(let i2 = 0; i2 < each_blocks.length; i2 += 1)each_blocks[i2].c();
            attr(div, "class", "gamelog svelte-1pq5e4b");
            toggle_class(div, "pinned", /*pinned*/ ctx[2]);
        },
        m (target, anchor) {
            insert(target, div, anchor);
            for(let i = 0; i < each_blocks_2.length; i += 1)each_blocks_2[i].m(div, null);
            append(div, t0);
            for(let i1 = 0; i1 < each_blocks_1.length; i1 += 1)each_blocks_1[i1].m(div, null);
            append(div, t1);
            for(let i2 = 0; i2 < each_blocks.length; i2 += 1)each_blocks[i2].m(div, null);
            current = true;
            if (!mounted) {
                dispose = listen(window, "keydown", /*OnKeyDown*/ ctx[8]);
                mounted = true;
            }
        },
        p (ctx, [dirty]) {
            if (dirty & /*renderedLogEntries, turnBoundaries*/ 10) {
                each_value_2 = /*renderedLogEntries*/ ctx[1];
                let i;
                for(i = 0; i < each_value_2.length; i += 1){
                    const child_ctx = get_each_context_2(ctx, each_value_2, i);
                    if (each_blocks_2[i]) {
                        each_blocks_2[i].p(child_ctx, dirty);
                        transition_in(each_blocks_2[i], 1);
                    } else {
                        each_blocks_2[i] = create_each_block_2(child_ctx);
                        each_blocks_2[i].c();
                        transition_in(each_blocks_2[i], 1);
                        each_blocks_2[i].m(div, t0);
                    }
                }
                group_outros();
                for(i = each_value_2.length; i < each_blocks_2.length; i += 1)out(i);
                check_outros();
            }
            if (dirty & /*pinned, renderedLogEntries, OnLogClick, OnMouseEnter, OnMouseLeave*/ 230) {
                each_value_1 = /*renderedLogEntries*/ ctx[1];
                let i1;
                for(i1 = 0; i1 < each_value_1.length; i1 += 1){
                    const child_ctx1 = get_each_context_1(ctx, each_value_1, i1);
                    if (each_blocks_1[i1]) {
                        each_blocks_1[i1].p(child_ctx1, dirty);
                        transition_in(each_blocks_1[i1], 1);
                    } else {
                        each_blocks_1[i1] = create_each_block_1(child_ctx1);
                        each_blocks_1[i1].c();
                        transition_in(each_blocks_1[i1], 1);
                        each_blocks_1[i1].m(div, t1);
                    }
                }
                group_outros();
                for(i1 = each_value_1.length; i1 < each_blocks_1.length; i1 += 1)out_1(i1);
                check_outros();
            }
            if (dirty & /*renderedLogEntries, phaseBoundaries*/ 18) {
                each_value = /*renderedLogEntries*/ ctx[1];
                let i2;
                for(i2 = 0; i2 < each_value.length; i2 += 1){
                    const child_ctx2 = get_each_context$8(ctx, each_value, i2);
                    if (each_blocks[i2]) {
                        each_blocks[i2].p(child_ctx2, dirty);
                        transition_in(each_blocks[i2], 1);
                    } else {
                        each_blocks[i2] = create_each_block$8(child_ctx2);
                        each_blocks[i2].c();
                        transition_in(each_blocks[i2], 1);
                        each_blocks[i2].m(div, null);
                    }
                }
                group_outros();
                for(i2 = each_value.length; i2 < each_blocks.length; i2 += 1)out_2(i2);
                check_outros();
            }
            if (dirty & /*pinned*/ 4) toggle_class(div, "pinned", /*pinned*/ ctx[2]);
        },
        i (local) {
            if (current) return;
            for(let i = 0; i < each_value_2.length; i += 1)transition_in(each_blocks_2[i]);
            for(let i1 = 0; i1 < each_value_1.length; i1 += 1)transition_in(each_blocks_1[i1]);
            for(let i2 = 0; i2 < each_value.length; i2 += 1)transition_in(each_blocks[i2]);
            current = true;
        },
        o (local) {
            each_blocks_2 = each_blocks_2.filter(Boolean);
            for(let i = 0; i < each_blocks_2.length; i += 1)transition_out(each_blocks_2[i]);
            each_blocks_1 = each_blocks_1.filter(Boolean);
            for(let i1 = 0; i1 < each_blocks_1.length; i1 += 1)transition_out(each_blocks_1[i1]);
            each_blocks = each_blocks.filter(Boolean);
            for(let i2 = 0; i2 < each_blocks.length; i2 += 1)transition_out(each_blocks[i2]);
            current = false;
        },
        d (detaching) {
            if (detaching) detach(div);
            destroy_each(each_blocks_2, detaching);
            destroy_each(each_blocks_1, detaching);
            destroy_each(each_blocks, detaching);
            mounted = false;
            dispose();
        }
    };
}
function instance$w($$self, $$props, $$invalidate) {
    let $client, $$unsubscribe_client = noop, $$subscribe_client = ()=>($$unsubscribe_client(), $$unsubscribe_client = subscribe(client, ($$value)=>$$invalidate(10, $client = $$value)), client);
    $$self.$$.on_destroy.push(()=>$$unsubscribe_client());
    let { client  } = $$props;
    $$subscribe_client();
    const { secondaryPane  } = getContext("secondaryPane");
    const reducer = (0, _reducer24Ea3E4CJs.C)({
        game: client.game
    });
    const initialState = client.getInitialState();
    let { log  } = $client;
    let pinned = null;
    function rewind(logIndex) {
        let state = initialState;
        for(let i = 0; i < log.length; i++){
            const { action , automatic  } = log[i];
            if (!automatic) {
                state = reducer(state, action);
                if (logIndex == 0) break;
                logIndex--;
            }
        }
        return {
            G: state.G,
            ctx: state.ctx,
            plugins: state.plugins
        };
    }
    function OnLogClick(e) {
        const { logIndex  } = e.detail;
        const state = rewind(logIndex);
        const renderedLogEntries = log.filter((e)=>!e.automatic);
        client.overrideGameState(state);
        if (pinned == logIndex) {
            $$invalidate(2, pinned = null);
            secondaryPane.set(null);
        } else {
            $$invalidate(2, pinned = logIndex);
            const { metadata  } = renderedLogEntries[logIndex].action.payload;
            if (metadata) secondaryPane.set({
                component: MCTS,
                metadata
            });
        }
    }
    function OnMouseEnter(e) {
        const { logIndex  } = e.detail;
        if (pinned === null) {
            const state = rewind(logIndex);
            client.overrideGameState(state);
        }
    }
    function OnMouseLeave() {
        if (pinned === null) client.overrideGameState(null);
    }
    function Reset() {
        $$invalidate(2, pinned = null);
        client.overrideGameState(null);
        secondaryPane.set(null);
    }
    onDestroy(Reset);
    function OnKeyDown(e) {
        // ESC.
        if (e.keyCode == 27) Reset();
    }
    let renderedLogEntries;
    let turnBoundaries = {};
    let phaseBoundaries = {};
    $$self.$$set = ($$props)=>{
        if ("client" in $$props) $$subscribe_client($$invalidate(0, client = $$props.client));
    };
    $$self.$$.update = ()=>{
        if ($$self.$$.dirty & /*$client, log, renderedLogEntries*/ 1538) {
            $$invalidate(9, log = $client.log);
            $$invalidate(1, renderedLogEntries = log.filter((e)=>!e.automatic));
            let eventsInCurrentPhase = 0;
            let eventsInCurrentTurn = 0;
            $$invalidate(3, turnBoundaries = {});
            $$invalidate(4, phaseBoundaries = {});
            for(let i = 0; i < renderedLogEntries.length; i++){
                const { action , payload , turn , phase  } = renderedLogEntries[i];
                eventsInCurrentTurn++;
                eventsInCurrentPhase++;
                if (i == renderedLogEntries.length - 1 || renderedLogEntries[i + 1].turn != turn) {
                    $$invalidate(3, turnBoundaries[i] = eventsInCurrentTurn, turnBoundaries);
                    eventsInCurrentTurn = 0;
                }
                if (i == renderedLogEntries.length - 1 || renderedLogEntries[i + 1].phase != phase) {
                    $$invalidate(4, phaseBoundaries[i] = eventsInCurrentPhase, phaseBoundaries);
                    eventsInCurrentPhase = 0;
                }
            }
        }
    };
    return [
        client,
        renderedLogEntries,
        pinned,
        turnBoundaries,
        phaseBoundaries,
        OnLogClick,
        OnMouseEnter,
        OnMouseLeave,
        OnKeyDown,
        log,
        $client
    ];
}
class Log extends SvelteComponent {
    constructor(options){
        super();
        init(this, options, instance$w, create_fragment$w, safe_not_equal, {
            client: 0
        }, add_css$n);
    }
}
/* src/client/debug/ai/Options.svelte generated by Svelte v3.49.0 */ function add_css$o(target) {
    append_styles(target, "svelte-1fu900w", "label.svelte-1fu900w{color:#666}.option.svelte-1fu900w{margin-bottom:20px}.value.svelte-1fu900w{font-weight:bold;color:#000}input[type='checkbox'].svelte-1fu900w{vertical-align:middle}");
}
function get_each_context$9(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[6] = list[i][0];
    child_ctx[7] = list[i][1];
    child_ctx[8] = list;
    child_ctx[9] = i;
    return child_ctx;
}
// (44:47) 
function create_if_block_1$5(ctx) {
    let input;
    let input_id_value;
    let mounted;
    let dispose;
    function input_change_handler() {
        /*input_change_handler*/ ctx[5].call(input, /*key*/ ctx[6]);
    }
    return {
        c () {
            input = element("input");
            attr(input, "id", input_id_value = /*makeID*/ ctx[3](/*key*/ ctx[6]));
            attr(input, "type", "checkbox");
            attr(input, "class", "svelte-1fu900w");
        },
        m (target, anchor) {
            insert(target, input, anchor);
            input.checked = /*values*/ ctx[1][/*key*/ ctx[6]];
            if (!mounted) {
                dispose = [
                    listen(input, "change", input_change_handler),
                    listen(input, "change", /*OnChange*/ ctx[2])
                ];
                mounted = true;
            }
        },
        p (new_ctx, dirty) {
            ctx = new_ctx;
            if (dirty & /*bot*/ 1 && input_id_value !== (input_id_value = /*makeID*/ ctx[3](/*key*/ ctx[6]))) attr(input, "id", input_id_value);
            if (dirty & /*values, Object, bot*/ 3) input.checked = /*values*/ ctx[1][/*key*/ ctx[6]];
        },
        d (detaching) {
            if (detaching) detach(input);
            mounted = false;
            run_all(dispose);
        }
    };
}
// (41:4) {#if value.range}
function create_if_block$c(ctx) {
    let span;
    let t0_value = /*values*/ ctx[1][/*key*/ ctx[6]] + "";
    let t0;
    let t1;
    let input;
    let input_id_value;
    let input_min_value;
    let input_max_value;
    let mounted;
    let dispose;
    function input_change_input_handler() {
        /*input_change_input_handler*/ ctx[4].call(input, /*key*/ ctx[6]);
    }
    return {
        c () {
            span = element("span");
            t0 = text(t0_value);
            t1 = space();
            input = element("input");
            attr(span, "class", "value svelte-1fu900w");
            attr(input, "id", input_id_value = /*makeID*/ ctx[3](/*key*/ ctx[6]));
            attr(input, "type", "range");
            attr(input, "min", input_min_value = /*value*/ ctx[7].range.min);
            attr(input, "max", input_max_value = /*value*/ ctx[7].range.max);
        },
        m (target, anchor) {
            insert(target, span, anchor);
            append(span, t0);
            insert(target, t1, anchor);
            insert(target, input, anchor);
            set_input_value(input, /*values*/ ctx[1][/*key*/ ctx[6]]);
            if (!mounted) {
                dispose = [
                    listen(input, "change", input_change_input_handler),
                    listen(input, "input", input_change_input_handler),
                    listen(input, "change", /*OnChange*/ ctx[2])
                ];
                mounted = true;
            }
        },
        p (new_ctx, dirty) {
            ctx = new_ctx;
            if (dirty & /*values, bot*/ 3 && t0_value !== (t0_value = /*values*/ ctx[1][/*key*/ ctx[6]] + "")) set_data(t0, t0_value);
            if (dirty & /*bot*/ 1 && input_id_value !== (input_id_value = /*makeID*/ ctx[3](/*key*/ ctx[6]))) attr(input, "id", input_id_value);
            if (dirty & /*bot*/ 1 && input_min_value !== (input_min_value = /*value*/ ctx[7].range.min)) attr(input, "min", input_min_value);
            if (dirty & /*bot*/ 1 && input_max_value !== (input_max_value = /*value*/ ctx[7].range.max)) attr(input, "max", input_max_value);
            if (dirty & /*values, Object, bot*/ 3) set_input_value(input, /*values*/ ctx[1][/*key*/ ctx[6]]);
        },
        d (detaching) {
            if (detaching) detach(span);
            if (detaching) detach(t1);
            if (detaching) detach(input);
            mounted = false;
            run_all(dispose);
        }
    };
}
// (37:0) {#each Object.entries(bot.opts()) as [key, value]}
function create_each_block$9(ctx) {
    let div;
    let label;
    let t0_value = /*key*/ ctx[6] + "";
    let t0;
    let label_for_value;
    let t1;
    let t2;
    function select_block_type(ctx, dirty) {
        if (/*value*/ ctx[7].range) return create_if_block$c;
        if (typeof /*value*/ ctx[7].value === "boolean") return create_if_block_1$5;
    }
    let current_block_type = select_block_type(ctx);
    let if_block = current_block_type && current_block_type(ctx);
    return {
        c () {
            div = element("div");
            label = element("label");
            t0 = text(t0_value);
            t1 = space();
            if (if_block) if_block.c();
            t2 = space();
            attr(label, "for", label_for_value = /*makeID*/ ctx[3](/*key*/ ctx[6]));
            attr(label, "class", "svelte-1fu900w");
            attr(div, "class", "option svelte-1fu900w");
        },
        m (target, anchor) {
            insert(target, div, anchor);
            append(div, label);
            append(label, t0);
            append(div, t1);
            if (if_block) if_block.m(div, null);
            append(div, t2);
        },
        p (ctx, dirty) {
            if (dirty & /*bot*/ 1 && t0_value !== (t0_value = /*key*/ ctx[6] + "")) set_data(t0, t0_value);
            if (dirty & /*bot*/ 1 && label_for_value !== (label_for_value = /*makeID*/ ctx[3](/*key*/ ctx[6]))) attr(label, "for", label_for_value);
            if (current_block_type === (current_block_type = select_block_type(ctx)) && if_block) if_block.p(ctx, dirty);
            else {
                if (if_block) if_block.d(1);
                if_block = current_block_type && current_block_type(ctx);
                if (if_block) {
                    if_block.c();
                    if_block.m(div, t2);
                }
            }
        },
        d (detaching) {
            if (detaching) detach(div);
            if (if_block) if_block.d();
        }
    };
}
function create_fragment$x(ctx) {
    let each_1_anchor;
    let each_value = Object.entries(/*bot*/ ctx[0].opts());
    let each_blocks = [];
    for(let i = 0; i < each_value.length; i += 1)each_blocks[i] = create_each_block$9(get_each_context$9(ctx, each_value, i));
    return {
        c () {
            for(let i = 0; i < each_blocks.length; i += 1)each_blocks[i].c();
            each_1_anchor = empty();
        },
        m (target, anchor) {
            for(let i = 0; i < each_blocks.length; i += 1)each_blocks[i].m(target, anchor);
            insert(target, each_1_anchor, anchor);
        },
        p (ctx, [dirty]) {
            if (dirty & /*makeID, Object, bot, values, OnChange*/ 15) {
                each_value = Object.entries(/*bot*/ ctx[0].opts());
                let i;
                for(i = 0; i < each_value.length; i += 1){
                    const child_ctx = get_each_context$9(ctx, each_value, i);
                    if (each_blocks[i]) each_blocks[i].p(child_ctx, dirty);
                    else {
                        each_blocks[i] = create_each_block$9(child_ctx);
                        each_blocks[i].c();
                        each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
                    }
                }
                for(; i < each_blocks.length; i += 1)each_blocks[i].d(1);
                each_blocks.length = each_value.length;
            }
        },
        i: noop,
        o: noop,
        d (detaching) {
            destroy_each(each_blocks, detaching);
            if (detaching) detach(each_1_anchor);
        }
    };
}
function instance$x($$self, $$props, $$invalidate) {
    let { bot  } = $$props;
    let values = {};
    for (let [key, value] of Object.entries(bot.opts()))values[key] = value.value;
    function OnChange() {
        for (let [key, value] of Object.entries(values))bot.setOpt(key, value);
    }
    const makeID = (key)=>"ai-option-" + key;
    function input_change_input_handler(key) {
        values[key] = to_number(this.value);
        $$invalidate(1, values);
    }
    function input_change_handler(key) {
        values[key] = this.checked;
        $$invalidate(1, values);
    }
    $$self.$$set = ($$props)=>{
        if ("bot" in $$props) $$invalidate(0, bot = $$props.bot);
    };
    return [
        bot,
        values,
        OnChange,
        makeID,
        input_change_input_handler,
        input_change_handler
    ];
}
class Options extends SvelteComponent {
    constructor(options){
        super();
        init(this, options, instance$x, create_fragment$x, safe_not_equal, {
            bot: 0
        }, add_css$o);
    }
}
/* src/client/debug/ai/AI.svelte generated by Svelte v3.49.0 */ function add_css$p(target) {
    append_styles(target, "svelte-fn09gm", "ul.svelte-fn09gm{padding-left:0}li.svelte-fn09gm{list-style:none;margin:0;margin-bottom:5px}h3.svelte-fn09gm{text-transform:uppercase}label.svelte-fn09gm{color:#666}input[type='checkbox'].svelte-fn09gm{vertical-align:middle}");
}
function get_each_context$a(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[7] = list[i];
    return child_ctx;
}
// (202:4) {:else}
function create_else_block$3(ctx) {
    let p0;
    let t1;
    let p1;
    return {
        c () {
            p0 = element("p");
            p0.textContent = "No bots available.";
            t1 = space();
            p1 = element("p");
            p1.innerHTML = `Follow the instructions
        <a href="https://boardgame.io/documentation/#/tutorial?id=bots" target="_blank">here</a>
        to set up bots.`;
        },
        m (target, anchor) {
            insert(target, p0, anchor);
            insert(target, t1, anchor);
            insert(target, p1, anchor);
        },
        p: noop,
        i: noop,
        o: noop,
        d (detaching) {
            if (detaching) detach(p0);
            if (detaching) detach(t1);
            if (detaching) detach(p1);
        }
    };
}
// (200:4) {#if client.multiplayer}
function create_if_block_5(ctx) {
    let p;
    return {
        c () {
            p = element("p");
            p.textContent = "The bot debugger is only available in singleplayer mode.";
        },
        m (target, anchor) {
            insert(target, p, anchor);
        },
        p: noop,
        i: noop,
        o: noop,
        d (detaching) {
            if (detaching) detach(p);
        }
    };
}
// (150:2) {#if client.game.ai && !client.multiplayer}
function create_if_block$d(ctx) {
    let section0;
    let h30;
    let t1;
    let ul;
    let li0;
    let hotkey0;
    let t2;
    let li1;
    let hotkey1;
    let t3;
    let li2;
    let hotkey2;
    let t4;
    let section1;
    let h31;
    let t6;
    let select;
    let t7;
    let show_if = Object.keys(/*bot*/ ctx[7].opts()).length;
    let t8;
    let if_block1_anchor;
    let current;
    let mounted;
    let dispose;
    hotkey0 = new Hotkey({
        props: {
            value: "1",
            onPress: /*Reset*/ ctx[13],
            label: "reset"
        }
    });
    hotkey1 = new Hotkey({
        props: {
            value: "2",
            onPress: /*Step*/ ctx[11],
            label: "play"
        }
    });
    hotkey2 = new Hotkey({
        props: {
            value: "3",
            onPress: /*Simulate*/ ctx[12],
            label: "simulate"
        }
    });
    let each_value = Object.keys(/*bots*/ ctx[8]);
    let each_blocks = [];
    for(let i = 0; i < each_value.length; i += 1)each_blocks[i] = create_each_block$a(get_each_context$a(ctx, each_value, i));
    let if_block0 = show_if && create_if_block_4(ctx);
    let if_block1 = /*botAction*/ (ctx[5] || /*iterationCounter*/ ctx[3]) && create_if_block_1$6(ctx);
    return {
        c () {
            section0 = element("section");
            h30 = element("h3");
            h30.textContent = "Controls";
            t1 = space();
            ul = element("ul");
            li0 = element("li");
            create_component(hotkey0.$$.fragment);
            t2 = space();
            li1 = element("li");
            create_component(hotkey1.$$.fragment);
            t3 = space();
            li2 = element("li");
            create_component(hotkey2.$$.fragment);
            t4 = space();
            section1 = element("section");
            h31 = element("h3");
            h31.textContent = "Bot";
            t6 = space();
            select = element("select");
            for(let i = 0; i < each_blocks.length; i += 1)each_blocks[i].c();
            t7 = space();
            if (if_block0) if_block0.c();
            t8 = space();
            if (if_block1) if_block1.c();
            if_block1_anchor = empty();
            attr(h30, "class", "svelte-fn09gm");
            attr(li0, "class", "svelte-fn09gm");
            attr(li1, "class", "svelte-fn09gm");
            attr(li2, "class", "svelte-fn09gm");
            attr(ul, "class", "svelte-fn09gm");
            attr(h31, "class", "svelte-fn09gm");
            if (/*selectedBot*/ ctx[4] === void 0) add_render_callback(()=>/*select_change_handler*/ ctx[17].call(select));
        },
        m (target, anchor) {
            insert(target, section0, anchor);
            append(section0, h30);
            append(section0, t1);
            append(section0, ul);
            append(ul, li0);
            mount_component(hotkey0, li0, null);
            append(ul, t2);
            append(ul, li1);
            mount_component(hotkey1, li1, null);
            append(ul, t3);
            append(ul, li2);
            mount_component(hotkey2, li2, null);
            insert(target, t4, anchor);
            insert(target, section1, anchor);
            append(section1, h31);
            append(section1, t6);
            append(section1, select);
            for(let i = 0; i < each_blocks.length; i += 1)each_blocks[i].m(select, null);
            select_option(select, /*selectedBot*/ ctx[4]);
            insert(target, t7, anchor);
            if (if_block0) if_block0.m(target, anchor);
            insert(target, t8, anchor);
            if (if_block1) if_block1.m(target, anchor);
            insert(target, if_block1_anchor, anchor);
            current = true;
            if (!mounted) {
                dispose = [
                    listen(select, "change", /*select_change_handler*/ ctx[17]),
                    listen(select, "change", /*ChangeBot*/ ctx[10])
                ];
                mounted = true;
            }
        },
        p (ctx, dirty) {
            if (dirty & /*Object, bots*/ 256) {
                each_value = Object.keys(/*bots*/ ctx[8]);
                let i;
                for(i = 0; i < each_value.length; i += 1){
                    const child_ctx = get_each_context$a(ctx, each_value, i);
                    if (each_blocks[i]) each_blocks[i].p(child_ctx, dirty);
                    else {
                        each_blocks[i] = create_each_block$a(child_ctx);
                        each_blocks[i].c();
                        each_blocks[i].m(select, null);
                    }
                }
                for(; i < each_blocks.length; i += 1)each_blocks[i].d(1);
                each_blocks.length = each_value.length;
            }
            if (dirty & /*selectedBot, Object, bots*/ 272) select_option(select, /*selectedBot*/ ctx[4]);
            if (dirty & /*bot*/ 128) show_if = Object.keys(/*bot*/ ctx[7].opts()).length;
            if (show_if) {
                if (if_block0) {
                    if_block0.p(ctx, dirty);
                    if (dirty & /*bot*/ 128) transition_in(if_block0, 1);
                } else {
                    if_block0 = create_if_block_4(ctx);
                    if_block0.c();
                    transition_in(if_block0, 1);
                    if_block0.m(t8.parentNode, t8);
                }
            } else if (if_block0) {
                group_outros();
                transition_out(if_block0, 1, 1, ()=>{
                    if_block0 = null;
                });
                check_outros();
            }
            if (/*botAction*/ ctx[5] || /*iterationCounter*/ ctx[3]) {
                if (if_block1) if_block1.p(ctx, dirty);
                else {
                    if_block1 = create_if_block_1$6(ctx);
                    if_block1.c();
                    if_block1.m(if_block1_anchor.parentNode, if_block1_anchor);
                }
            } else if (if_block1) {
                if_block1.d(1);
                if_block1 = null;
            }
        },
        i (local) {
            if (current) return;
            transition_in(hotkey0.$$.fragment, local);
            transition_in(hotkey1.$$.fragment, local);
            transition_in(hotkey2.$$.fragment, local);
            transition_in(if_block0);
            current = true;
        },
        o (local) {
            transition_out(hotkey0.$$.fragment, local);
            transition_out(hotkey1.$$.fragment, local);
            transition_out(hotkey2.$$.fragment, local);
            transition_out(if_block0);
            current = false;
        },
        d (detaching) {
            if (detaching) detach(section0);
            destroy_component(hotkey0);
            destroy_component(hotkey1);
            destroy_component(hotkey2);
            if (detaching) detach(t4);
            if (detaching) detach(section1);
            destroy_each(each_blocks, detaching);
            if (detaching) detach(t7);
            if (if_block0) if_block0.d(detaching);
            if (detaching) detach(t8);
            if (if_block1) if_block1.d(detaching);
            if (detaching) detach(if_block1_anchor);
            mounted = false;
            run_all(dispose);
        }
    };
}
// (169:8) {#each Object.keys(bots) as bot}
function create_each_block$a(ctx) {
    let option;
    let t_value = /*bot*/ ctx[7] + "";
    let t;
    let option_value_value;
    return {
        c () {
            option = element("option");
            t = text(t_value);
            option.__value = option_value_value = /*bot*/ ctx[7];
            option.value = option.__value;
        },
        m (target, anchor) {
            insert(target, option, anchor);
            append(option, t);
        },
        p: noop,
        d (detaching) {
            if (detaching) detach(option);
        }
    };
}
// (175:4) {#if Object.keys(bot.opts()).length}
function create_if_block_4(ctx) {
    let section;
    let h3;
    let t1;
    let label;
    let t3;
    let input;
    let t4;
    let options;
    let current;
    let mounted;
    let dispose;
    options = new Options({
        props: {
            bot: /*bot*/ ctx[7]
        }
    });
    return {
        c () {
            section = element("section");
            h3 = element("h3");
            h3.textContent = "Options";
            t1 = space();
            label = element("label");
            label.textContent = "debug";
            t3 = space();
            input = element("input");
            t4 = space();
            create_component(options.$$.fragment);
            attr(h3, "class", "svelte-fn09gm");
            attr(label, "for", "ai-option-debug");
            attr(label, "class", "svelte-fn09gm");
            attr(input, "id", "ai-option-debug");
            attr(input, "type", "checkbox");
            attr(input, "class", "svelte-fn09gm");
        },
        m (target, anchor) {
            insert(target, section, anchor);
            append(section, h3);
            append(section, t1);
            append(section, label);
            append(section, t3);
            append(section, input);
            input.checked = /*debug*/ ctx[1];
            append(section, t4);
            mount_component(options, section, null);
            current = true;
            if (!mounted) {
                dispose = [
                    listen(input, "change", /*input_change_handler*/ ctx[18]),
                    listen(input, "change", /*OnDebug*/ ctx[9])
                ];
                mounted = true;
            }
        },
        p (ctx, dirty) {
            if (dirty & /*debug*/ 2) input.checked = /*debug*/ ctx[1];
            const options_changes = {};
            if (dirty & /*bot*/ 128) options_changes.bot = /*bot*/ ctx[7];
            options.$set(options_changes);
        },
        i (local) {
            if (current) return;
            transition_in(options.$$.fragment, local);
            current = true;
        },
        o (local) {
            transition_out(options.$$.fragment, local);
            current = false;
        },
        d (detaching) {
            if (detaching) detach(section);
            destroy_component(options);
            mounted = false;
            run_all(dispose);
        }
    };
}
// (184:4) {#if botAction || iterationCounter}
function create_if_block_1$6(ctx) {
    let section;
    let h3;
    let t1;
    let t2;
    let if_block0 = /*progress*/ ctx[2] && /*progress*/ ctx[2] < 1.0 && create_if_block_3$1(ctx);
    let if_block1 = /*botAction*/ ctx[5] && create_if_block_2$4(ctx);
    return {
        c () {
            section = element("section");
            h3 = element("h3");
            h3.textContent = "Result";
            t1 = space();
            if (if_block0) if_block0.c();
            t2 = space();
            if (if_block1) if_block1.c();
            attr(h3, "class", "svelte-fn09gm");
        },
        m (target, anchor) {
            insert(target, section, anchor);
            append(section, h3);
            append(section, t1);
            if (if_block0) if_block0.m(section, null);
            append(section, t2);
            if (if_block1) if_block1.m(section, null);
        },
        p (ctx, dirty) {
            if (/*progress*/ ctx[2] && /*progress*/ ctx[2] < 1.0) {
                if (if_block0) if_block0.p(ctx, dirty);
                else {
                    if_block0 = create_if_block_3$1(ctx);
                    if_block0.c();
                    if_block0.m(section, t2);
                }
            } else if (if_block0) {
                if_block0.d(1);
                if_block0 = null;
            }
            if (/*botAction*/ ctx[5]) {
                if (if_block1) if_block1.p(ctx, dirty);
                else {
                    if_block1 = create_if_block_2$4(ctx);
                    if_block1.c();
                    if_block1.m(section, null);
                }
            } else if (if_block1) {
                if_block1.d(1);
                if_block1 = null;
            }
        },
        d (detaching) {
            if (detaching) detach(section);
            if (if_block0) if_block0.d();
            if (if_block1) if_block1.d();
        }
    };
}
// (187:6) {#if progress && progress < 1.0}
function create_if_block_3$1(ctx) {
    let progress_1;
    return {
        c () {
            progress_1 = element("progress");
            progress_1.value = /*progress*/ ctx[2];
        },
        m (target, anchor) {
            insert(target, progress_1, anchor);
        },
        p (ctx, dirty) {
            if (dirty & /*progress*/ 4) progress_1.value = /*progress*/ ctx[2];
        },
        d (detaching) {
            if (detaching) detach(progress_1);
        }
    };
}
// (191:6) {#if botAction}
function create_if_block_2$4(ctx) {
    let ul;
    let li0;
    let t0;
    let t1;
    let t2;
    let li1;
    let t3;
    let t4_value = JSON.stringify(/*botActionArgs*/ ctx[6]) + "";
    let t4;
    return {
        c () {
            ul = element("ul");
            li0 = element("li");
            t0 = text("Action: ");
            t1 = text(/*botAction*/ ctx[5]);
            t2 = space();
            li1 = element("li");
            t3 = text("Args: ");
            t4 = text(t4_value);
            attr(li0, "class", "svelte-fn09gm");
            attr(li1, "class", "svelte-fn09gm");
            attr(ul, "class", "svelte-fn09gm");
        },
        m (target, anchor) {
            insert(target, ul, anchor);
            append(ul, li0);
            append(li0, t0);
            append(li0, t1);
            append(ul, t2);
            append(ul, li1);
            append(li1, t3);
            append(li1, t4);
        },
        p (ctx, dirty) {
            if (dirty & /*botAction*/ 32) set_data(t1, /*botAction*/ ctx[5]);
            if (dirty & /*botActionArgs*/ 64 && t4_value !== (t4_value = JSON.stringify(/*botActionArgs*/ ctx[6]) + "")) set_data(t4, t4_value);
        },
        d (detaching) {
            if (detaching) detach(ul);
        }
    };
}
function create_fragment$y(ctx) {
    let section;
    let current_block_type_index;
    let if_block;
    let current;
    let mounted;
    let dispose;
    const if_block_creators = [
        create_if_block$d,
        create_if_block_5,
        create_else_block$3
    ];
    const if_blocks = [];
    function select_block_type(ctx, dirty) {
        if (/*client*/ ctx[0].game.ai && !/*client*/ ctx[0].multiplayer) return 0;
        if (/*client*/ ctx[0].multiplayer) return 1;
        return 2;
    }
    current_block_type_index = select_block_type(ctx);
    if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    return {
        c () {
            section = element("section");
            if_block.c();
        },
        m (target, anchor) {
            insert(target, section, anchor);
            if_blocks[current_block_type_index].m(section, null);
            current = true;
            if (!mounted) {
                dispose = listen(window, "keydown", /*OnKeyDown*/ ctx[14]);
                mounted = true;
            }
        },
        p (ctx, [dirty]) {
            let previous_block_index = current_block_type_index;
            current_block_type_index = select_block_type(ctx);
            if (current_block_type_index === previous_block_index) if_blocks[current_block_type_index].p(ctx, dirty);
            else {
                group_outros();
                transition_out(if_blocks[previous_block_index], 1, 1, ()=>{
                    if_blocks[previous_block_index] = null;
                });
                check_outros();
                if_block = if_blocks[current_block_type_index];
                if (!if_block) {
                    if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
                    if_block.c();
                } else if_block.p(ctx, dirty);
                transition_in(if_block, 1);
                if_block.m(section, null);
            }
        },
        i (local) {
            if (current) return;
            transition_in(if_block);
            current = true;
        },
        o (local) {
            transition_out(if_block);
            current = false;
        },
        d (detaching) {
            if (detaching) detach(section);
            if_blocks[current_block_type_index].d();
            mounted = false;
            dispose();
        }
    };
}
function instance$y($$self, $$props, $$invalidate) {
    let { client  } = $$props;
    let { clientManager  } = $$props;
    let { ToggleVisibility  } = $$props;
    const { secondaryPane  } = getContext("secondaryPane");
    const bots = {
        "MCTS": (0, _ai7998B00FJs.M),
        "Random": (0, _ai7998B00FJs.R)
    };
    let debug = false;
    let progress = null;
    let iterationCounter = 0;
    let metadata = null;
    const iterationCallback = ({ iterationCounter: c , numIterations , metadata: m  })=>{
        $$invalidate(3, iterationCounter = c);
        $$invalidate(2, progress = c / numIterations);
        metadata = m;
        if (debug && metadata) secondaryPane.set({
            component: MCTS,
            metadata
        });
    };
    function OnDebug() {
        if (debug && metadata) secondaryPane.set({
            component: MCTS,
            metadata
        });
        else secondaryPane.set(null);
    }
    let bot;
    if (client.game.ai) {
        bot = new (0, _ai7998B00FJs.M)({
            game: client.game,
            enumerate: client.game.ai.enumerate,
            iterationCallback
        });
        bot.setOpt("async", true);
    }
    let selectedBot;
    let botAction;
    let botActionArgs;
    function ChangeBot() {
        const botConstructor = bots[selectedBot];
        $$invalidate(7, bot = new botConstructor({
            game: client.game,
            enumerate: client.game.ai.enumerate,
            iterationCallback
        }));
        bot.setOpt("async", true);
        $$invalidate(5, botAction = null);
        metadata = null;
        secondaryPane.set(null);
        $$invalidate(3, iterationCounter = 0);
    }
    async function Step$1() {
        $$invalidate(5, botAction = null);
        metadata = null;
        $$invalidate(3, iterationCounter = 0);
        const t = await (0, _ai7998B00FJs.S)(client, bot);
        if (t) {
            $$invalidate(5, botAction = t.payload.type);
            $$invalidate(6, botActionArgs = t.payload.args);
        }
    }
    function Simulate(iterations = 10000, sleepTimeout = 100) {
        $$invalidate(5, botAction = null);
        metadata = null;
        $$invalidate(3, iterationCounter = 0);
        const step = async ()=>{
            for(let i = 0; i < iterations; i++){
                const action = await (0, _ai7998B00FJs.S)(client, bot);
                if (!action) break;
                await new Promise((resolve)=>setTimeout(resolve, sleepTimeout));
            }
        };
        return step();
    }
    function Exit() {
        client.overrideGameState(null);
        secondaryPane.set(null);
        $$invalidate(1, debug = false);
    }
    function Reset() {
        client.reset();
        $$invalidate(5, botAction = null);
        metadata = null;
        $$invalidate(3, iterationCounter = 0);
        Exit();
    }
    function OnKeyDown(e) {
        // ESC.
        if (e.keyCode == 27) Exit();
    }
    onDestroy(Exit);
    function select_change_handler() {
        selectedBot = select_value(this);
        $$invalidate(4, selectedBot);
        $$invalidate(8, bots);
    }
    function input_change_handler() {
        debug = this.checked;
        $$invalidate(1, debug);
    }
    $$self.$$set = ($$props)=>{
        if ("client" in $$props) $$invalidate(0, client = $$props.client);
        if ("clientManager" in $$props) $$invalidate(15, clientManager = $$props.clientManager);
        if ("ToggleVisibility" in $$props) $$invalidate(16, ToggleVisibility = $$props.ToggleVisibility);
    };
    return [
        client,
        debug,
        progress,
        iterationCounter,
        selectedBot,
        botAction,
        botActionArgs,
        bot,
        bots,
        OnDebug,
        ChangeBot,
        Step$1,
        Simulate,
        Reset,
        OnKeyDown,
        clientManager,
        ToggleVisibility,
        select_change_handler,
        input_change_handler
    ];
}
class AI extends SvelteComponent {
    constructor(options){
        super();
        init(this, options, instance$y, create_fragment$y, safe_not_equal, {
            client: 0,
            clientManager: 15,
            ToggleVisibility: 16
        }, add_css$p);
    }
}
/* src/client/debug/Debug.svelte generated by Svelte v3.49.0 */ function add_css$q(target) {
    append_styles(target, "svelte-8ymctk", ".debug-panel.svelte-8ymctk.svelte-8ymctk{position:fixed;color:#555;font-family:monospace;right:0;top:0;height:100%;font-size:14px;opacity:0.9;z-index:99999}.panel.svelte-8ymctk.svelte-8ymctk{display:flex;position:relative;flex-direction:row;height:100%}.visibility-toggle.svelte-8ymctk.svelte-8ymctk{position:absolute;box-sizing:border-box;top:7px;border:1px solid #ccc;border-radius:5px;width:48px;height:48px;padding:8px;background:white;color:#555;box-shadow:0 0 5px rgba(0, 0, 0, 0.2)}.visibility-toggle.svelte-8ymctk.svelte-8ymctk:hover,.visibility-toggle.svelte-8ymctk.svelte-8ymctk:focus{background:#eee}.opener.svelte-8ymctk.svelte-8ymctk{right:10px}.closer.svelte-8ymctk.svelte-8ymctk{left:-326px}@keyframes svelte-8ymctk-rotateFromZero{from{transform:rotateZ(0deg)}to{transform:rotateZ(180deg)}}.icon.svelte-8ymctk.svelte-8ymctk{display:flex;height:100%;animation:svelte-8ymctk-rotateFromZero 0.4s cubic-bezier(0.68, -0.55, 0.27, 1.55) 0s 1\n      normal forwards}.closer.svelte-8ymctk .icon.svelte-8ymctk{animation-direction:reverse}.pane.svelte-8ymctk.svelte-8ymctk{flex-grow:2;overflow-x:hidden;overflow-y:scroll;background:#fefefe;padding:20px;border-left:1px solid #ccc;box-shadow:-1px 0 5px rgba(0, 0, 0, 0.2);box-sizing:border-box;width:280px}.secondary-pane.svelte-8ymctk.svelte-8ymctk{background:#fefefe;overflow-y:scroll}.debug-panel.svelte-8ymctk button,.debug-panel.svelte-8ymctk select{cursor:pointer;font-size:14px;font-family:monospace}.debug-panel.svelte-8ymctk select{background:#eee;border:1px solid #bbb;color:#555;padding:3px;border-radius:3px}.debug-panel.svelte-8ymctk section{margin-bottom:20px}.debug-panel.svelte-8ymctk .screen-reader-only{clip:rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}");
}
// (199:2) {:else}
function create_else_block$4(ctx) {
    let div1;
    let t0;
    let menu;
    let t1;
    let div0;
    let switch_instance;
    let t2;
    let div1_transition;
    let current;
    let if_block0 = /*showToggleButton*/ ctx[10] && create_if_block_3$2(ctx);
    menu = new Menu({
        props: {
            panes: /*panes*/ ctx[6],
            pane: /*pane*/ ctx[2]
        }
    });
    menu.$on("change", /*MenuChange*/ ctx[8]);
    var switch_value = /*panes*/ ctx[6][/*pane*/ ctx[2]].component;
    function switch_props(ctx) {
        return {
            props: {
                client: /*client*/ ctx[4],
                clientManager: /*clientManager*/ ctx[0],
                ToggleVisibility: /*ToggleVisibility*/ ctx[9]
            }
        };
    }
    if (switch_value) switch_instance = new switch_value(switch_props(ctx));
    let if_block1 = /*$secondaryPane*/ ctx[5] && create_if_block_2$5(ctx);
    return {
        c () {
            div1 = element("div");
            if (if_block0) if_block0.c();
            t0 = space();
            create_component(menu.$$.fragment);
            t1 = space();
            div0 = element("div");
            if (switch_instance) create_component(switch_instance.$$.fragment);
            t2 = space();
            if (if_block1) if_block1.c();
            attr(div0, "class", "pane svelte-8ymctk");
            attr(div0, "role", "region");
            attr(div0, "aria-label", /*pane*/ ctx[2]);
            attr(div0, "tabindex", "-1");
            attr(div1, "class", "panel svelte-8ymctk");
        },
        m (target, anchor) {
            insert(target, div1, anchor);
            if (if_block0) if_block0.m(div1, null);
            append(div1, t0);
            mount_component(menu, div1, null);
            append(div1, t1);
            append(div1, div0);
            if (switch_instance) mount_component(switch_instance, div0, null);
            /*div0_binding*/ ctx[16](div0);
            append(div1, t2);
            if (if_block1) if_block1.m(div1, null);
            current = true;
        },
        p (new_ctx, dirty) {
            ctx = new_ctx;
            if (/*showToggleButton*/ ctx[10]) if_block0.p(ctx, dirty);
            const menu_changes = {};
            if (dirty & /*pane*/ 4) menu_changes.pane = /*pane*/ ctx[2];
            menu.$set(menu_changes);
            const switch_instance_changes = {};
            if (dirty & /*client*/ 16) switch_instance_changes.client = /*client*/ ctx[4];
            if (dirty & /*clientManager*/ 1) switch_instance_changes.clientManager = /*clientManager*/ ctx[0];
            if (switch_value !== (switch_value = /*panes*/ ctx[6][/*pane*/ ctx[2]].component)) {
                if (switch_instance) {
                    group_outros();
                    const old_component = switch_instance;
                    transition_out(old_component.$$.fragment, 1, 0, ()=>{
                        destroy_component(old_component, 1);
                    });
                    check_outros();
                }
                if (switch_value) {
                    switch_instance = new switch_value(switch_props(ctx));
                    create_component(switch_instance.$$.fragment);
                    transition_in(switch_instance.$$.fragment, 1);
                    mount_component(switch_instance, div0, null);
                } else switch_instance = null;
            } else if (switch_value) switch_instance.$set(switch_instance_changes);
            if (!current || dirty & /*pane*/ 4) attr(div0, "aria-label", /*pane*/ ctx[2]);
            if (/*$secondaryPane*/ ctx[5]) {
                if (if_block1) {
                    if_block1.p(ctx, dirty);
                    if (dirty & /*$secondaryPane*/ 32) transition_in(if_block1, 1);
                } else {
                    if_block1 = create_if_block_2$5(ctx);
                    if_block1.c();
                    transition_in(if_block1, 1);
                    if_block1.m(div1, null);
                }
            } else if (if_block1) {
                group_outros();
                transition_out(if_block1, 1, 1, ()=>{
                    if_block1 = null;
                });
                check_outros();
            }
        },
        i (local) {
            if (current) return;
            transition_in(if_block0);
            transition_in(menu.$$.fragment, local);
            if (switch_instance) transition_in(switch_instance.$$.fragment, local);
            transition_in(if_block1);
            add_render_callback(()=>{
                if (!div1_transition) div1_transition = create_bidirectional_transition(div1, fly, {
                    x: 400,
                    .../*transitionOpts*/ ctx[12]
                }, true);
                div1_transition.run(1);
            });
            current = true;
        },
        o (local) {
            transition_out(if_block0);
            transition_out(menu.$$.fragment, local);
            if (switch_instance) transition_out(switch_instance.$$.fragment, local);
            transition_out(if_block1);
            if (!div1_transition) div1_transition = create_bidirectional_transition(div1, fly, {
                x: 400,
                .../*transitionOpts*/ ctx[12]
            }, false);
            div1_transition.run(0);
            current = false;
        },
        d (detaching) {
            if (detaching) detach(div1);
            if (if_block0) if_block0.d();
            destroy_component(menu);
            if (switch_instance) destroy_component(switch_instance);
            /*div0_binding*/ ctx[16](null);
            if (if_block1) if_block1.d();
            if (detaching && div1_transition) div1_transition.end();
        }
    };
}
// (185:2) {#if !visible}
function create_if_block$e(ctx) {
    let if_block_anchor;
    let current;
    let if_block = /*showToggleButton*/ ctx[10] && create_if_block_1$7(ctx);
    return {
        c () {
            if (if_block) if_block.c();
            if_block_anchor = empty();
        },
        m (target, anchor) {
            if (if_block) if_block.m(target, anchor);
            insert(target, if_block_anchor, anchor);
            current = true;
        },
        p (ctx, dirty) {
            if (/*showToggleButton*/ ctx[10]) if_block.p(ctx, dirty);
        },
        i (local) {
            if (current) return;
            transition_in(if_block);
            current = true;
        },
        o (local) {
            transition_out(if_block);
            current = false;
        },
        d (detaching) {
            if (if_block) if_block.d(detaching);
            if (detaching) detach(if_block_anchor);
        }
    };
}
// (201:6) {#if showToggleButton}
function create_if_block_3$2(ctx) {
    let button;
    let span;
    let chevron;
    let button_intro;
    let button_outro;
    let current;
    let mounted;
    let dispose;
    chevron = new FaChevronRight({});
    return {
        c () {
            button = element("button");
            span = element("span");
            create_component(chevron.$$.fragment);
            attr(span, "class", "icon svelte-8ymctk");
            attr(span, "aria-hidden", "true");
            attr(button, "class", "visibility-toggle closer svelte-8ymctk");
            attr(button, "title", "Hide Debug Panel");
        },
        m (target, anchor) {
            insert(target, button, anchor);
            append(button, span);
            mount_component(chevron, span, null);
            current = true;
            if (!mounted) {
                dispose = listen(button, "click", /*ToggleVisibility*/ ctx[9]);
                mounted = true;
            }
        },
        p: noop,
        i (local) {
            if (current) return;
            transition_in(chevron.$$.fragment, local);
            add_render_callback(()=>{
                if (button_outro) button_outro.end(1);
                button_intro = create_in_transition(button, /*receive*/ ctx[14], {
                    key: "toggle"
                });
                button_intro.start();
            });
            current = true;
        },
        o (local) {
            transition_out(chevron.$$.fragment, local);
            if (button_intro) button_intro.invalidate();
            button_outro = create_out_transition(button, /*send*/ ctx[13], {
                key: "toggle"
            });
            current = false;
        },
        d (detaching) {
            if (detaching) detach(button);
            destroy_component(chevron);
            if (detaching && button_outro) button_outro.end();
            mounted = false;
            dispose();
        }
    };
}
// (229:6) {#if $secondaryPane}
function create_if_block_2$5(ctx) {
    let div;
    let switch_instance;
    let current;
    var switch_value = /*$secondaryPane*/ ctx[5].component;
    function switch_props(ctx) {
        return {
            props: {
                metadata: /*$secondaryPane*/ ctx[5].metadata
            }
        };
    }
    if (switch_value) switch_instance = new switch_value(switch_props(ctx));
    return {
        c () {
            div = element("div");
            if (switch_instance) create_component(switch_instance.$$.fragment);
            attr(div, "class", "secondary-pane svelte-8ymctk");
        },
        m (target, anchor) {
            insert(target, div, anchor);
            if (switch_instance) mount_component(switch_instance, div, null);
            current = true;
        },
        p (ctx, dirty) {
            const switch_instance_changes = {};
            if (dirty & /*$secondaryPane*/ 32) switch_instance_changes.metadata = /*$secondaryPane*/ ctx[5].metadata;
            if (switch_value !== (switch_value = /*$secondaryPane*/ ctx[5].component)) {
                if (switch_instance) {
                    group_outros();
                    const old_component = switch_instance;
                    transition_out(old_component.$$.fragment, 1, 0, ()=>{
                        destroy_component(old_component, 1);
                    });
                    check_outros();
                }
                if (switch_value) {
                    switch_instance = new switch_value(switch_props(ctx));
                    create_component(switch_instance.$$.fragment);
                    transition_in(switch_instance.$$.fragment, 1);
                    mount_component(switch_instance, div, null);
                } else switch_instance = null;
            } else if (switch_value) switch_instance.$set(switch_instance_changes);
        },
        i (local) {
            if (current) return;
            if (switch_instance) transition_in(switch_instance.$$.fragment, local);
            current = true;
        },
        o (local) {
            if (switch_instance) transition_out(switch_instance.$$.fragment, local);
            current = false;
        },
        d (detaching) {
            if (detaching) detach(div);
            if (switch_instance) destroy_component(switch_instance);
        }
    };
}
// (186:4) {#if showToggleButton}
function create_if_block_1$7(ctx) {
    let button;
    let span;
    let chevron;
    let button_intro;
    let button_outro;
    let current;
    let mounted;
    let dispose;
    chevron = new FaChevronRight({});
    return {
        c () {
            button = element("button");
            span = element("span");
            create_component(chevron.$$.fragment);
            attr(span, "class", "icon svelte-8ymctk");
            attr(span, "aria-hidden", "true");
            attr(button, "class", "visibility-toggle opener svelte-8ymctk");
            attr(button, "title", "Show Debug Panel");
        },
        m (target, anchor) {
            insert(target, button, anchor);
            append(button, span);
            mount_component(chevron, span, null);
            current = true;
            if (!mounted) {
                dispose = listen(button, "click", /*ToggleVisibility*/ ctx[9]);
                mounted = true;
            }
        },
        p: noop,
        i (local) {
            if (current) return;
            transition_in(chevron.$$.fragment, local);
            add_render_callback(()=>{
                if (button_outro) button_outro.end(1);
                button_intro = create_in_transition(button, /*receive*/ ctx[14], {
                    key: "toggle"
                });
                button_intro.start();
            });
            current = true;
        },
        o (local) {
            transition_out(chevron.$$.fragment, local);
            if (button_intro) button_intro.invalidate();
            button_outro = create_out_transition(button, /*send*/ ctx[13], {
                key: "toggle"
            });
            current = false;
        },
        d (detaching) {
            if (detaching) detach(button);
            destroy_component(chevron);
            if (detaching && button_outro) button_outro.end();
            mounted = false;
            dispose();
        }
    };
}
function create_fragment$z(ctx) {
    let section;
    let current_block_type_index;
    let if_block;
    let current;
    let mounted;
    let dispose;
    const if_block_creators = [
        create_if_block$e,
        create_else_block$4
    ];
    const if_blocks = [];
    function select_block_type(ctx, dirty) {
        if (!/*visible*/ ctx[3]) return 0;
        return 1;
    }
    current_block_type_index = select_block_type(ctx);
    if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    return {
        c () {
            section = element("section");
            if_block.c();
            attr(section, "aria-label", "boardgame.io Debug Panel");
            attr(section, "class", "debug-panel svelte-8ymctk");
        },
        m (target, anchor) {
            insert(target, section, anchor);
            if_blocks[current_block_type_index].m(section, null);
            current = true;
            if (!mounted) {
                dispose = listen(window, "keypress", /*Keypress*/ ctx[11]);
                mounted = true;
            }
        },
        p (ctx, [dirty]) {
            let previous_block_index = current_block_type_index;
            current_block_type_index = select_block_type(ctx);
            if (current_block_type_index === previous_block_index) if_blocks[current_block_type_index].p(ctx, dirty);
            else {
                group_outros();
                transition_out(if_blocks[previous_block_index], 1, 1, ()=>{
                    if_blocks[previous_block_index] = null;
                });
                check_outros();
                if_block = if_blocks[current_block_type_index];
                if (!if_block) {
                    if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
                    if_block.c();
                } else if_block.p(ctx, dirty);
                transition_in(if_block, 1);
                if_block.m(section, null);
            }
        },
        i (local) {
            if (current) return;
            transition_in(if_block);
            current = true;
        },
        o (local) {
            transition_out(if_block);
            current = false;
        },
        d (detaching) {
            if (detaching) detach(section);
            if_blocks[current_block_type_index].d();
            mounted = false;
            dispose();
        }
    };
}
function instance$z($$self, $$props, $$invalidate) {
    let client;
    let $clientManager, $$unsubscribe_clientManager = noop, $$subscribe_clientManager = ()=>($$unsubscribe_clientManager(), $$unsubscribe_clientManager = subscribe(clientManager, ($$value)=>$$invalidate(15, $clientManager = $$value)), clientManager);
    let $secondaryPane;
    $$self.$$.on_destroy.push(()=>$$unsubscribe_clientManager());
    let { clientManager  } = $$props;
    $$subscribe_clientManager();
    const panes = {
        main: {
            label: "Main",
            shortcut: "m",
            component: Main
        },
        log: {
            label: "Log",
            shortcut: "l",
            component: Log
        },
        info: {
            label: "Info",
            shortcut: "i",
            component: Info
        },
        ai: {
            label: "AI",
            shortcut: "a",
            component: AI
        }
    };
    const disableHotkeys = writable(false);
    const secondaryPane = writable(null);
    component_subscribe($$self, secondaryPane, (value)=>$$invalidate(5, $secondaryPane = value));
    setContext("hotkeys", {
        disableHotkeys
    });
    setContext("secondaryPane", {
        secondaryPane
    });
    let paneDiv;
    let pane = "main";
    function MenuChange(e) {
        $$invalidate(2, pane = e.detail);
        paneDiv.focus();
    }
    // Toggle debugger visibilty
    function ToggleVisibility() {
        $$invalidate(3, visible = !visible);
    }
    const debugOpt = $clientManager.client.debugOpt;
    let visible = !debugOpt || !debugOpt.collapseOnLoad;
    const showToggleButton = !debugOpt || !debugOpt.hideToggleButton;
    function Keypress(e) {
        if (e.key == ".") {
            ToggleVisibility();
            return;
        }
        // Set displayed pane
        if (!visible) return;
        Object.entries(panes).forEach(([key, { shortcut  }])=>{
            if (e.key == shortcut) $$invalidate(2, pane = key);
        });
    }
    const transitionOpts = {
        duration: 150,
        easing: cubicOut
    };
    const [send, receive] = crossfade(transitionOpts);
    function div0_binding($$value) {
        binding_callbacks[$$value ? "unshift" : "push"](()=>{
            paneDiv = $$value;
            $$invalidate(1, paneDiv);
        });
    }
    $$self.$$set = ($$props)=>{
        if ("clientManager" in $$props) $$subscribe_clientManager($$invalidate(0, clientManager = $$props.clientManager));
    };
    $$self.$$.update = ()=>{
        if ($$self.$$.dirty & /*$clientManager*/ 32768) $$invalidate(4, client = $clientManager.client);
    };
    return [
        clientManager,
        paneDiv,
        pane,
        visible,
        client,
        $secondaryPane,
        panes,
        secondaryPane,
        MenuChange,
        ToggleVisibility,
        showToggleButton,
        Keypress,
        transitionOpts,
        send,
        receive,
        $clientManager,
        div0_binding
    ];
}
class Debug extends SvelteComponent {
    constructor(options){
        super();
        init(this, options, instance$z, create_fragment$z, safe_not_equal, {
            clientManager: 0
        }, add_css$q);
    }
}

},{"./turn-order-8cc4909b.js":"eWUI2","./reducer-24ea3e4c.js":"b7fst","flatted":"aMR0x","./ai-7998b00f.js":"1rFTn","@parcel/transformer-js/src/esmodule-helpers.js":"cjuhS"}],"eWUI2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "A", ()=>ActionCreators);
parcelHelpers.export(exports, "B", ()=>makeMove);
parcelHelpers.export(exports, "C", ()=>ActivePlayers);
parcelHelpers.export(exports, "E", ()=>Enhance);
parcelHelpers.export(exports, "F", ()=>FnWrap);
parcelHelpers.export(exports, "G", ()=>GameMethod);
parcelHelpers.export(exports, "I", ()=>InitTurnOrderState);
parcelHelpers.export(exports, "M", ()=>MAKE_MOVE);
parcelHelpers.export(exports, "N", ()=>NoClient);
parcelHelpers.export(exports, "P", ()=>PATCH);
parcelHelpers.export(exports, "R", ()=>REDO);
parcelHelpers.export(exports, "S", ()=>Stage);
parcelHelpers.export(exports, "T", ()=>TurnOrder);
parcelHelpers.export(exports, "U", ()=>UpdateTurnOrderState);
parcelHelpers.export(exports, "a", ()=>GetAPIs);
parcelHelpers.export(exports, "b", ()=>supportDeprecatedMoveLimit);
parcelHelpers.export(exports, "c", ()=>SetActivePlayers);
parcelHelpers.export(exports, "d", ()=>UpdateActivePlayersOnceEmpty);
parcelHelpers.export(exports, "e", ()=>error);
parcelHelpers.export(exports, "f", ()=>PLUGIN);
parcelHelpers.export(exports, "g", ()=>gameEvent);
parcelHelpers.export(exports, "h", ()=>ProcessAction);
parcelHelpers.export(exports, "i", ()=>info);
parcelHelpers.export(exports, "j", ()=>UNDO);
parcelHelpers.export(exports, "k", ()=>SYNC);
parcelHelpers.export(exports, "l", ()=>UPDATE);
parcelHelpers.export(exports, "m", ()=>RESET);
parcelHelpers.export(exports, "n", ()=>INVALID_MOVE);
parcelHelpers.export(exports, "o", ()=>GAME_EVENT);
parcelHelpers.export(exports, "p", ()=>STRIP_TRANSIENTS);
parcelHelpers.export(exports, "q", ()=>FlushAndValidate);
parcelHelpers.export(exports, "r", ()=>stripTransients);
parcelHelpers.export(exports, "s", ()=>sync);
parcelHelpers.export(exports, "t", ()=>Setup);
parcelHelpers.export(exports, "u", ()=>reset);
parcelHelpers.export(exports, "v", ()=>undo);
parcelHelpers.export(exports, "w", ()=>redo);
parcelHelpers.export(exports, "x", ()=>PlayerView);
parcelHelpers.export(exports, "y", ()=>patch);
parcelHelpers.export(exports, "z", ()=>update);
var _immer = require("immer");
var _immerDefault = parcelHelpers.interopDefault(_immer);
var _pluginRandom087F861EJs = require("./plugin-random-087f861e.js");
var _lodashIsplainobject = require("lodash.isplainobject");
var _lodashIsplainobjectDefault = parcelHelpers.interopDefault(_lodashIsplainobject);
/*
 * Copyright 2017 The boardgame.io Authors
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */ const MAKE_MOVE = "MAKE_MOVE";
const GAME_EVENT = "GAME_EVENT";
const REDO = "REDO";
const RESET = "RESET";
const SYNC = "SYNC";
const UNDO = "UNDO";
const UPDATE = "UPDATE";
const PATCH = "PATCH";
const PLUGIN = "PLUGIN";
const STRIP_TRANSIENTS = "STRIP_TRANSIENTS";
/*
 * Copyright 2017 The boardgame.io Authors
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */ /**
 * Generate a move to be dispatched to the game move reducer.
 *
 * @param {string} type - The move type.
 * @param {Array}  args - Additional arguments.
 * @param {string}  playerID - The ID of the player making this action.
 * @param {string}  credentials - (optional) The credentials for the player making this action.
 */ const makeMove = (type, args, playerID, credentials)=>({
        type: MAKE_MOVE,
        payload: {
            type,
            args,
            playerID,
            credentials
        }
    });
/**
 * Generate a game event to be dispatched to the flow reducer.
 *
 * @param {string} type - The event type.
 * @param {Array}  args - Additional arguments.
 * @param {string}  playerID - The ID of the player making this action.
 * @param {string}  credentials - (optional) The credentials for the player making this action.
 */ const gameEvent = (type, args, playerID, credentials)=>({
        type: GAME_EVENT,
        payload: {
            type,
            args,
            playerID,
            credentials
        }
    });
/**
 * Generate an automatic game event that is a side-effect of a move.
 * @param {string} type - The event type.
 * @param {Array}  args - Additional arguments.
 * @param {string}  playerID - The ID of the player making this action.
 * @param {string}  credentials - (optional) The credentials for the player making this action.
 */ const automaticGameEvent = (type, args, playerID, credentials)=>({
        type: GAME_EVENT,
        payload: {
            type,
            args,
            playerID,
            credentials
        },
        automatic: true
    });
const sync = (info)=>({
        type: SYNC,
        state: info.state,
        log: info.log,
        initialState: info.initialState,
        clientOnly: true
    });
/**
 * Used to update the Redux store's state with patch in response to
 * an action coming from another player.
 * @param prevStateID previous stateID
 * @param stateID stateID after this patch
 * @param {Operation[]} patch - The patch to apply.
 * @param {LogEntry[]} deltalog - A log delta.
 */ const patch = (prevStateID, stateID, patch, deltalog)=>({
        type: PATCH,
        prevStateID,
        stateID,
        patch,
        deltalog,
        clientOnly: true
    });
/**
 * Used to update the Redux store's state in response to
 * an action coming from another player.
 * @param {object} state - The state to restore.
 * @param {Array} deltalog - A log delta.
 */ const update = (state, deltalog)=>({
        type: UPDATE,
        state,
        deltalog,
        clientOnly: true
    });
/**
 * Used to reset the game state.
 * @param {object} state - The initial state.
 */ const reset = (state)=>({
        type: RESET,
        state,
        clientOnly: true
    });
/**
 * Used to undo the last move.
 * @param {string}  playerID - The ID of the player making this action.
 * @param {string}  credentials - (optional) The credentials for the player making this action.
 */ const undo = (playerID, credentials)=>({
        type: UNDO,
        payload: {
            type: null,
            args: null,
            playerID,
            credentials
        }
    });
/**
 * Used to redo the last undone move.
 * @param {string}  playerID - The ID of the player making this action.
 * @param {string}  credentials - (optional) The credentials for the player making this action.
 */ const redo = (playerID, credentials)=>({
        type: REDO,
        payload: {
            type: null,
            args: null,
            playerID,
            credentials
        }
    });
/**
 * Allows plugins to define their own actions and intercept them.
 */ const plugin = (type, args, playerID, credentials)=>({
        type: PLUGIN,
        payload: {
            type,
            args,
            playerID,
            credentials
        }
    });
/**
 * Private action used to strip transient metadata (e.g. errors) from the game
 * state.
 */ const stripTransients = ()=>({
        type: STRIP_TRANSIENTS
    });
var ActionCreators = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    makeMove: makeMove,
    gameEvent: gameEvent,
    automaticGameEvent: automaticGameEvent,
    sync: sync,
    patch: patch,
    update: update,
    reset: reset,
    undo: undo,
    redo: redo,
    plugin: plugin,
    stripTransients: stripTransients
});
/**
 * Moves can return this when they want to indicate
 * that the combination of arguments is illegal and
 * the move ought to be discarded.
 */ const INVALID_MOVE = "INVALID_MOVE";
/*
 * Copyright 2018 The boardgame.io Authors
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */ /**
 * Plugin that allows using Immer to make immutable changes
 * to G by just mutating it.
 */ const ImmerPlugin = {
    name: "plugin-immer",
    fnWrap: (move)=>(context, ...args)=>{
            let isInvalid = false;
            const newG = (0, _immerDefault.default)(context.G, (G)=>{
                const result = move({
                    ...context,
                    G
                }, ...args);
                if (result === INVALID_MOVE) {
                    isInvalid = true;
                    return;
                }
                return result;
            });
            if (isInvalid) return INVALID_MOVE;
            return newG;
        }
};
var GameMethod;
(function(GameMethod) {
    GameMethod["MOVE"] = "MOVE";
    GameMethod["GAME_ON_END"] = "GAME_ON_END";
    GameMethod["PHASE_ON_BEGIN"] = "PHASE_ON_BEGIN";
    GameMethod["PHASE_ON_END"] = "PHASE_ON_END";
    GameMethod["TURN_ON_BEGIN"] = "TURN_ON_BEGIN";
    GameMethod["TURN_ON_MOVE"] = "TURN_ON_MOVE";
    GameMethod["TURN_ON_END"] = "TURN_ON_END";
})(GameMethod || (GameMethod = {}));
/*
 * Copyright 2018 The boardgame.io Authors
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */ var Errors;
(function(Errors) {
    Errors["CalledOutsideHook"] = "Events must be called from moves or the `onBegin`, `onEnd`, and `onMove` hooks.\nThis error probably means you called an event from other game code, like an `endIf` trigger or one of the `turn.order` methods.";
    Errors["EndTurnInOnEnd"] = "`endTurn` is disallowed in `onEnd` hooks — the turn is already ending.";
    Errors["MaxTurnEndings"] = "Maximum number of turn endings exceeded for this update.\nThis likely means game code is triggering an infinite loop.";
    Errors["PhaseEventInOnEnd"] = "`setPhase` & `endPhase` are disallowed in a phase’s `onEnd` hook — the phase is already ending.\nIf you’re trying to dynamically choose the next phase when a phase ends, use the phase’s `next` trigger.";
    Errors["StageEventInOnEnd"] = "`setStage`, `endStage` & `setActivePlayers` are disallowed in `onEnd` hooks.";
    Errors["StageEventInPhaseBegin"] = "`setStage`, `endStage` & `setActivePlayers` are disallowed in a phase’s `onBegin` hook.\nUse `setActivePlayers` in a `turn.onBegin` hook or declare stages with `turn.activePlayers` instead.";
    Errors["StageEventInTurnBegin"] = "`setStage` & `endStage` are disallowed in `turn.onBegin`.\nUse `setActivePlayers` or declare stages with `turn.activePlayers` instead.";
})(Errors || (Errors = {}));
/**
 * Events
 */ class Events {
    constructor(flow, ctx, playerID){
        this.flow = flow;
        this.playerID = playerID;
        this.dispatch = [];
        this.initialTurn = ctx.turn;
        this.updateTurnContext(ctx, undefined);
        // This is an arbitrarily large upper threshold, which could be made
        // configurable via a game option if the need arises.
        this.maxEndedTurnsPerAction = ctx.numPlayers * 100;
    }
    api() {
        const events = {
            _private: this
        };
        for (const type of this.flow.eventNames)events[type] = (...args)=>{
            this.dispatch.push({
                type,
                args,
                phase: this.currentPhase,
                turn: this.currentTurn,
                calledFrom: this.currentMethod,
                // Used to capture a stack trace in case it is needed later.
                error: new Error("Events Plugin Error")
            });
        };
        return events;
    }
    isUsed() {
        return this.dispatch.length > 0;
    }
    updateTurnContext(ctx, methodType) {
        this.currentPhase = ctx.phase;
        this.currentTurn = ctx.turn;
        this.currentMethod = methodType;
    }
    unsetCurrentMethod() {
        this.currentMethod = undefined;
    }
    /**
     * Updates ctx with the triggered events.
     * @param {object} state - The state object { G, ctx }.
     */ update(state) {
        const initialState = state;
        const stateWithError = ({ stack  }, message)=>({
                ...initialState,
                plugins: {
                    ...initialState.plugins,
                    events: {
                        ...initialState.plugins.events,
                        data: {
                            error: message + "\n" + stack
                        }
                    }
                }
            });
        EventQueue: for(let i = 0; i < this.dispatch.length; i++){
            const event = this.dispatch[i];
            const turnHasEnded = event.turn !== state.ctx.turn;
            // This protects against potential infinite loops if specific events are called on hooks.
            // The moment we exceed the defined threshold, we just bail out of all phases.
            const endedTurns = this.currentTurn - this.initialTurn;
            if (endedTurns >= this.maxEndedTurnsPerAction) return stateWithError(event.error, Errors.MaxTurnEndings);
            if (event.calledFrom === undefined) return stateWithError(event.error, Errors.CalledOutsideHook);
            // Stop processing events once the game has finished.
            if (state.ctx.gameover) break EventQueue;
            switch(event.type){
                case "endStage":
                case "setStage":
                case "setActivePlayers":
                    switch(event.calledFrom){
                        // Disallow all stage events in onEnd and phase.onBegin hooks.
                        case GameMethod.TURN_ON_END:
                        case GameMethod.PHASE_ON_END:
                            return stateWithError(event.error, Errors.StageEventInOnEnd);
                        case GameMethod.PHASE_ON_BEGIN:
                            return stateWithError(event.error, Errors.StageEventInPhaseBegin);
                        // Disallow setStage & endStage in turn.onBegin hooks.
                        case GameMethod.TURN_ON_BEGIN:
                            if (event.type === "setActivePlayers") break;
                            return stateWithError(event.error, Errors.StageEventInTurnBegin);
                    }
                    // If the turn already ended, don't try to process stage events.
                    if (turnHasEnded) continue EventQueue;
                    break;
                case "endTurn":
                    if (event.calledFrom === GameMethod.TURN_ON_END || event.calledFrom === GameMethod.PHASE_ON_END) return stateWithError(event.error, Errors.EndTurnInOnEnd);
                    // If the turn already ended some other way,
                    // don't try to end the turn again.
                    if (turnHasEnded) continue EventQueue;
                    break;
                case "endPhase":
                case "setPhase":
                    if (event.calledFrom === GameMethod.PHASE_ON_END) return stateWithError(event.error, Errors.PhaseEventInOnEnd);
                    // If the phase already ended some other way,
                    // don't try to end the phase again.
                    if (event.phase !== state.ctx.phase) continue EventQueue;
                    break;
            }
            const action = automaticGameEvent(event.type, event.args, this.playerID);
            state = this.flow.processEvent(state, action);
        }
        return state;
    }
}
/*
 * Copyright 2020 The boardgame.io Authors
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */ const EventsPlugin = {
    name: "events",
    noClient: ({ api  })=>api._private.isUsed(),
    isInvalid: ({ data  })=>data.error || false,
    // Update the events plugin’s internal turn context each time a move
    // or hook is called. This allows events called after turn or phase
    // endings to dispatch the current turn and phase correctly.
    fnWrap: (method, methodType)=>(context, ...args)=>{
            const api = context.events;
            if (api) api._private.updateTurnContext(context.ctx, methodType);
            const G = method(context, ...args);
            if (api) api._private.unsetCurrentMethod();
            return G;
        },
    dangerouslyFlushRawState: ({ state , api  })=>api._private.update(state),
    api: ({ game , ctx , playerID  })=>new Events(game.flow, ctx, playerID).api()
};
/*
 * Copyright 2018 The boardgame.io Authors
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */ /**
 * Plugin that makes it possible to add metadata to log entries.
 * During a move, you can set metadata using ctx.log.setMetadata and it will be
 * available on the log entry for that move.
 */ const LogPlugin = {
    name: "log",
    flush: ()=>({}),
    api: ({ data  })=>{
        return {
            setMetadata: (metadata)=>{
                data.metadata = metadata;
            }
        };
    },
    setup: ()=>({})
};
/**
 * Check if a value can be serialized (e.g. using `JSON.stringify`).
 * Adapted from: https://stackoverflow.com/a/30712764/3829557
 */ function isSerializable(value) {
    // Primitives are OK.
    if (value === undefined || value === null || typeof value === "boolean" || typeof value === "number" || typeof value === "string") return true;
    // A non-primitive value that is neither a POJO or an array cannot be serialized.
    if (!(0, _lodashIsplainobjectDefault.default)(value) && !Array.isArray(value)) return false;
    // Recurse entries if the value is an object or array.
    for(const key in value){
        if (!isSerializable(value[key])) return false;
    }
    return true;
}
/**
 * Plugin that checks whether state is serializable, in order to avoid
 * network serialization bugs.
 */ const SerializablePlugin = {
    name: "plugin-serializable",
    fnWrap: (move)=>(context, ...args)=>{
            const result = move(context, ...args);
            // Check state in non-production environments.
            if (!isSerializable(result)) throw new Error("Move state is not JSON-serialiazable.\nSee https://boardgame.io/documentation/#/?id=state for more information.");
            return result;
        }
};
/*
 * Copyright 2018 The boardgame.io Authors
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */ const production = false;
const logfn = production ? ()=>{} : (...msg)=>console.log(...msg);
const errorfn = (...msg)=>console.error(...msg);
function info(msg) {
    logfn(`INFO: ${msg}`);
}
function error(error) {
    errorfn("ERROR:", error);
}
/*
 * Copyright 2018 The boardgame.io Authors
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */ /**
 * List of plugins that are always added.
 */ const CORE_PLUGINS = [
    ImmerPlugin,
    (0, _pluginRandom087F861EJs.R),
    LogPlugin,
    SerializablePlugin
];
const DEFAULT_PLUGINS = [
    ...CORE_PLUGINS,
    EventsPlugin
];
/**
 * Allow plugins to intercept actions and process them.
 */ const ProcessAction = (state, action, opts)=>{
    // TODO(#723): Extend error handling to plugins.
    opts.game.plugins.filter((plugin)=>plugin.action !== undefined).filter((plugin)=>plugin.name === action.payload.type).forEach((plugin)=>{
        const name = plugin.name;
        const pluginState = state.plugins[name] || {
            data: {}
        };
        const data = plugin.action(pluginState.data, action.payload);
        state = {
            ...state,
            plugins: {
                ...state.plugins,
                [name]: {
                    ...pluginState,
                    data
                }
            }
        };
    });
    return state;
};
/**
 * The APIs created by various plugins are stored in the plugins
 * section of the state object:
 *
 * {
 *   G: {},
 *   ctx: {},
 *   plugins: {
 *     plugin-a: {
 *       data: {},  // this is generated by the plugin at Setup / Flush.
 *       api: {},   // this is ephemeral and generated by Enhance.
 *     }
 *   }
 * }
 *
 * This function retrieves plugin APIs and returns them as an object
 * for consumption as used by move contexts.
 */ const GetAPIs = ({ plugins  })=>Object.entries(plugins || {}).reduce((apis, [name, { api  }])=>{
        apis[name] = api;
        return apis;
    }, {});
/**
 * Applies the provided plugins to the given move / flow function.
 *
 * @param methodToWrap - The move function or hook to apply the plugins to.
 * @param methodType - The type of the move or hook being wrapped.
 * @param plugins - The list of plugins.
 */ const FnWrap = (methodToWrap, methodType, plugins)=>{
    return [
        ...CORE_PLUGINS,
        ...plugins,
        EventsPlugin
    ].filter((plugin)=>plugin.fnWrap !== undefined).reduce((method, { fnWrap  })=>fnWrap(method, methodType), methodToWrap);
};
/**
 * Allows the plugin to generate its initial state.
 */ const Setup = (state, opts)=>{
    [
        ...DEFAULT_PLUGINS,
        ...opts.game.plugins
    ].filter((plugin)=>plugin.setup !== undefined).forEach((plugin)=>{
        const name = plugin.name;
        const data = plugin.setup({
            G: state.G,
            ctx: state.ctx,
            game: opts.game
        });
        state = {
            ...state,
            plugins: {
                ...state.plugins,
                [name]: {
                    data
                }
            }
        };
    });
    return state;
};
/**
 * Invokes the plugin before a move or event.
 * The API that the plugin generates is stored inside
 * the `plugins` section of the state (which is subsequently
 * merged into ctx).
 */ const Enhance = (state, opts)=>{
    [
        ...DEFAULT_PLUGINS,
        ...opts.game.plugins
    ].filter((plugin)=>plugin.api !== undefined).forEach((plugin)=>{
        const name = plugin.name;
        const pluginState = state.plugins[name] || {
            data: {}
        };
        const api = plugin.api({
            G: state.G,
            ctx: state.ctx,
            data: pluginState.data,
            game: opts.game,
            playerID: opts.playerID
        });
        state = {
            ...state,
            plugins: {
                ...state.plugins,
                [name]: {
                    ...pluginState,
                    api
                }
            }
        };
    });
    return state;
};
/**
 * Allows plugins to update their state after a move / event.
 */ const Flush = (state, opts)=>{
    // We flush the events plugin first, then custom plugins and the core plugins.
    // This means custom plugins cannot use the events API but will be available in event hooks.
    // Note that plugins are flushed in reverse, to allow custom plugins calling each other.
    [
        ...CORE_PLUGINS,
        ...opts.game.plugins,
        EventsPlugin
    ].reverse().forEach((plugin)=>{
        const name = plugin.name;
        const pluginState = state.plugins[name] || {
            data: {}
        };
        if (plugin.flush) {
            const newData = plugin.flush({
                G: state.G,
                ctx: state.ctx,
                game: opts.game,
                api: pluginState.api,
                data: pluginState.data
            });
            state = {
                ...state,
                plugins: {
                    ...state.plugins,
                    [plugin.name]: {
                        data: newData
                    }
                }
            };
        } else if (plugin.dangerouslyFlushRawState) {
            state = plugin.dangerouslyFlushRawState({
                state,
                game: opts.game,
                api: pluginState.api,
                data: pluginState.data
            });
            // Remove everything other than data.
            const data = state.plugins[name].data;
            state = {
                ...state,
                plugins: {
                    ...state.plugins,
                    [plugin.name]: {
                        data
                    }
                }
            };
        }
    });
    return state;
};
/**
 * Allows plugins to indicate if they should not be materialized on the client.
 * This will cause the client to discard the state update and wait for the
 * master instead.
 */ const NoClient = (state, opts)=>{
    return [
        ...DEFAULT_PLUGINS,
        ...opts.game.plugins
    ].filter((plugin)=>plugin.noClient !== undefined).map((plugin)=>{
        const name = plugin.name;
        const pluginState = state.plugins[name];
        if (pluginState) return plugin.noClient({
            G: state.G,
            ctx: state.ctx,
            game: opts.game,
            api: pluginState.api,
            data: pluginState.data
        });
        return false;
    }).includes(true);
};
/**
 * Allows plugins to indicate if the entire action should be thrown out
 * as invalid. This will cancel the entire state update.
 */ const IsInvalid = (state, opts)=>{
    const firstInvalidReturn = [
        ...DEFAULT_PLUGINS,
        ...opts.game.plugins
    ].filter((plugin)=>plugin.isInvalid !== undefined).map((plugin)=>{
        const { name  } = plugin;
        const pluginState = state.plugins[name];
        const message = plugin.isInvalid({
            G: state.G,
            ctx: state.ctx,
            game: opts.game,
            data: pluginState && pluginState.data
        });
        return message ? {
            plugin: name,
            message
        } : false;
    }).find((value)=>value);
    return firstInvalidReturn || false;
};
/**
 * Update plugin state after move/event & check if plugins consider the update to be valid.
 * @returns Tuple of `[updatedState]` or `[originalState, invalidError]`.
 */ const FlushAndValidate = (state, opts)=>{
    const updatedState = Flush(state, opts);
    const isInvalid = IsInvalid(updatedState, opts);
    if (!isInvalid) return [
        updatedState
    ];
    const { plugin , message  } = isInvalid;
    error(`${plugin} plugin declared action invalid:\n${message}`);
    return [
        state,
        isInvalid
    ];
};
/**
 * Allows plugins to customize their data for specific players.
 * For example, a plugin may want to share no data with the client, or
 * want to keep some player data secret from opponents.
 */ const PlayerView = ({ G , ctx , plugins ={}  }, { game , playerID  })=>{
    [
        ...DEFAULT_PLUGINS,
        ...game.plugins
    ].forEach(({ name , playerView  })=>{
        if (!playerView) return;
        const { data  } = plugins[name] || {
            data: {}
        };
        const newData = playerView({
            G,
            ctx,
            game,
            data,
            playerID
        });
        plugins = {
            ...plugins,
            [name]: {
                data: newData
            }
        };
    });
    return plugins;
};
/**
 * Adjust the given options to use the new minMoves/maxMoves if a legacy moveLimit was given
 * @param options The options object to apply backwards compatibility to
 * @param enforceMinMoves Use moveLimit to set both minMoves and maxMoves
 */ function supportDeprecatedMoveLimit(options, enforceMinMoves = false) {
    if (options.moveLimit) {
        if (enforceMinMoves) options.minMoves = options.moveLimit;
        options.maxMoves = options.moveLimit;
        delete options.moveLimit;
    }
}
/*
 * Copyright 2017 The boardgame.io Authors
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */ function SetActivePlayers(ctx, arg) {
    let activePlayers = {};
    let _prevActivePlayers = [];
    let _nextActivePlayers = null;
    let _activePlayersMinMoves = {};
    let _activePlayersMaxMoves = {};
    if (Array.isArray(arg)) {
        // support a simple array of player IDs as active players
        const value = {};
        arg.forEach((v)=>value[v] = Stage.NULL);
        activePlayers = value;
    } else {
        // process active players argument object
        // stages previously did not enforce minMoves, this behaviour is kept intentionally
        supportDeprecatedMoveLimit(arg);
        if (arg.next) _nextActivePlayers = arg.next;
        if (arg.revert) _prevActivePlayers = [
            ...ctx._prevActivePlayers,
            {
                activePlayers: ctx.activePlayers,
                _activePlayersMinMoves: ctx._activePlayersMinMoves,
                _activePlayersMaxMoves: ctx._activePlayersMaxMoves,
                _activePlayersNumMoves: ctx._activePlayersNumMoves
            }
        ];
        if (arg.currentPlayer !== undefined) ApplyActivePlayerArgument(activePlayers, _activePlayersMinMoves, _activePlayersMaxMoves, ctx.currentPlayer, arg.currentPlayer);
        if (arg.others !== undefined) for(let i = 0; i < ctx.playOrder.length; i++){
            const id = ctx.playOrder[i];
            if (id !== ctx.currentPlayer) ApplyActivePlayerArgument(activePlayers, _activePlayersMinMoves, _activePlayersMaxMoves, id, arg.others);
        }
        if (arg.all !== undefined) for(let i1 = 0; i1 < ctx.playOrder.length; i1++){
            const id1 = ctx.playOrder[i1];
            ApplyActivePlayerArgument(activePlayers, _activePlayersMinMoves, _activePlayersMaxMoves, id1, arg.all);
        }
        if (arg.value) for(const id2 in arg.value)ApplyActivePlayerArgument(activePlayers, _activePlayersMinMoves, _activePlayersMaxMoves, id2, arg.value[id2]);
        if (arg.minMoves) {
            for(const id3 in activePlayers)if (_activePlayersMinMoves[id3] === undefined) _activePlayersMinMoves[id3] = arg.minMoves;
        }
        if (arg.maxMoves) {
            for(const id4 in activePlayers)if (_activePlayersMaxMoves[id4] === undefined) _activePlayersMaxMoves[id4] = arg.maxMoves;
        }
    }
    if (Object.keys(activePlayers).length === 0) activePlayers = null;
    if (Object.keys(_activePlayersMinMoves).length === 0) _activePlayersMinMoves = null;
    if (Object.keys(_activePlayersMaxMoves).length === 0) _activePlayersMaxMoves = null;
    const _activePlayersNumMoves = {};
    for(const id5 in activePlayers)_activePlayersNumMoves[id5] = 0;
    return {
        ...ctx,
        activePlayers,
        _activePlayersMinMoves,
        _activePlayersMaxMoves,
        _activePlayersNumMoves,
        _prevActivePlayers,
        _nextActivePlayers
    };
}
/**
 * Update activePlayers, setting it to previous, next or null values
 * when it becomes empty.
 * @param ctx
 */ function UpdateActivePlayersOnceEmpty(ctx) {
    let { activePlayers , _activePlayersMinMoves , _activePlayersMaxMoves , _activePlayersNumMoves , _prevActivePlayers , _nextActivePlayers  } = ctx;
    if (activePlayers && Object.keys(activePlayers).length === 0) {
        if (_nextActivePlayers) {
            ctx = SetActivePlayers(ctx, _nextActivePlayers);
            ({ activePlayers , _activePlayersMinMoves , _activePlayersMaxMoves , _activePlayersNumMoves , _prevActivePlayers  } = ctx);
        } else if (_prevActivePlayers.length > 0) {
            const lastIndex = _prevActivePlayers.length - 1;
            ({ activePlayers , _activePlayersMinMoves , _activePlayersMaxMoves , _activePlayersNumMoves  } = _prevActivePlayers[lastIndex]);
            _prevActivePlayers = _prevActivePlayers.slice(0, lastIndex);
        } else {
            activePlayers = null;
            _activePlayersMinMoves = null;
            _activePlayersMaxMoves = null;
        }
    }
    return {
        ...ctx,
        activePlayers,
        _activePlayersMinMoves,
        _activePlayersMaxMoves,
        _activePlayersNumMoves,
        _prevActivePlayers
    };
}
/**
 * Apply an active player argument to the given player ID
 * @param {Object} activePlayers
 * @param {Object} _activePlayersMinMoves
 * @param {Object} _activePlayersMaxMoves
 * @param {String} playerID The player to apply the parameter to
 * @param {(String|Object)} arg An active player argument
 */ function ApplyActivePlayerArgument(activePlayers, _activePlayersMinMoves, _activePlayersMaxMoves, playerID, arg) {
    if (typeof arg !== "object" || arg === Stage.NULL) arg = {
        stage: arg
    };
    if (arg.stage !== undefined) {
        // stages previously did not enforce minMoves, this behaviour is kept intentionally
        supportDeprecatedMoveLimit(arg);
        activePlayers[playerID] = arg.stage;
        if (arg.minMoves) _activePlayersMinMoves[playerID] = arg.minMoves;
        if (arg.maxMoves) _activePlayersMaxMoves[playerID] = arg.maxMoves;
    }
}
/**
 * Converts a playOrderPos index into its value in playOrder.
 * @param {Array} playOrder - An array of player ID's.
 * @param {number} playOrderPos - An index into the above.
 */ function getCurrentPlayer(playOrder, playOrderPos) {
    // convert to string in case playOrder is set to number[]
    return playOrder[playOrderPos] + "";
}
/**
 * Called at the start of a turn to initialize turn order state.
 *
 * TODO: This is called inside StartTurn, which is called from
 * both UpdateTurn and StartPhase (so it's called at the beginning
 * of a new phase as well as between turns). We should probably
 * split it into two.
 */ function InitTurnOrderState(state, turn) {
    let { G , ctx  } = state;
    const { numPlayers  } = ctx;
    const pluginAPIs = GetAPIs(state);
    const context = {
        ...pluginAPIs,
        G,
        ctx
    };
    const order = turn.order;
    let playOrder = [
        ...Array.from({
            length: numPlayers
        })
    ].map((_, i)=>i + "");
    if (order.playOrder !== undefined) playOrder = order.playOrder(context);
    const playOrderPos = order.first(context);
    const posType = typeof playOrderPos;
    if (posType !== "number") error(`invalid value returned by turn.order.first — expected number got ${posType} “${playOrderPos}”.`);
    const currentPlayer = getCurrentPlayer(playOrder, playOrderPos);
    ctx = {
        ...ctx,
        currentPlayer,
        playOrderPos,
        playOrder
    };
    ctx = SetActivePlayers(ctx, turn.activePlayers || {});
    return ctx;
}
/**
 * Called at the end of each turn to update the turn order state.
 * @param {object} G - The game object G.
 * @param {object} ctx - The game object ctx.
 * @param {object} turn - A turn object for this phase.
 * @param {string} endTurnArg - An optional argument to endTurn that
                                may specify the next player.
 */ function UpdateTurnOrderState(state, currentPlayer, turn, endTurnArg) {
    const order = turn.order;
    let { G , ctx  } = state;
    let playOrderPos = ctx.playOrderPos;
    let endPhase = false;
    if (endTurnArg && endTurnArg !== true) {
        if (typeof endTurnArg !== "object") error(`invalid argument to endTurn: ${endTurnArg}`);
        Object.keys(endTurnArg).forEach((arg)=>{
            switch(arg){
                case "remove":
                    currentPlayer = getCurrentPlayer(ctx.playOrder, playOrderPos);
                    break;
                case "next":
                    playOrderPos = ctx.playOrder.indexOf(endTurnArg.next);
                    currentPlayer = endTurnArg.next;
                    break;
                default:
                    error(`invalid argument to endTurn: ${arg}`);
            }
        });
    } else {
        const pluginAPIs = GetAPIs(state);
        const context = {
            ...pluginAPIs,
            G,
            ctx
        };
        const t = order.next(context);
        const type = typeof t;
        if (t !== undefined && type !== "number") error(`invalid value returned by turn.order.next — expected number or undefined got ${type} “${t}”.`);
        if (t === undefined) endPhase = true;
        else {
            playOrderPos = t;
            currentPlayer = getCurrentPlayer(ctx.playOrder, playOrderPos);
        }
    }
    ctx = {
        ...ctx,
        playOrderPos,
        currentPlayer
    };
    return {
        endPhase,
        ctx
    };
}
/**
 * Set of different turn orders possible in a phase.
 * These are meant to be passed to the `turn` setting
 * in the flow objects.
 *
 * Each object defines the first player when the phase / game
 * begins, and also a function `next` to determine who the
 * next player is when the turn ends.
 *
 * The phase ends if next() returns undefined.
 */ const TurnOrder = {
    /**
     * DEFAULT
     *
     * The default round-robin turn order.
     */ DEFAULT: {
        first: ({ ctx  })=>ctx.turn === 0 ? ctx.playOrderPos : (ctx.playOrderPos + 1) % ctx.playOrder.length,
        next: ({ ctx  })=>(ctx.playOrderPos + 1) % ctx.playOrder.length
    },
    /**
     * RESET
     *
     * Similar to DEFAULT, but starts from 0 each time.
     */ RESET: {
        first: ()=>0,
        next: ({ ctx  })=>(ctx.playOrderPos + 1) % ctx.playOrder.length
    },
    /**
     * CONTINUE
     *
     * Similar to DEFAULT, but starts with the player who ended the last phase.
     */ CONTINUE: {
        first: ({ ctx  })=>ctx.playOrderPos,
        next: ({ ctx  })=>(ctx.playOrderPos + 1) % ctx.playOrder.length
    },
    /**
     * ONCE
     *
     * Another round-robin turn order, but goes around just once.
     * The phase ends after all players have played.
     */ ONCE: {
        first: ()=>0,
        next: ({ ctx  })=>{
            if (ctx.playOrderPos < ctx.playOrder.length - 1) return ctx.playOrderPos + 1;
        }
    },
    /**
     * CUSTOM
     *
     * Identical to DEFAULT, but also sets playOrder at the
     * beginning of the phase.
     *
     * @param {Array} playOrder - The play order.
     */ CUSTOM: (playOrder)=>({
            playOrder: ()=>playOrder,
            first: ()=>0,
            next: ({ ctx  })=>(ctx.playOrderPos + 1) % ctx.playOrder.length
        }),
    /**
     * CUSTOM_FROM
     *
     * Identical to DEFAULT, but also sets playOrder at the
     * beginning of the phase to a value specified by a field
     * in G.
     *
     * @param {string} playOrderField - Field in G.
     */ CUSTOM_FROM: (playOrderField)=>({
            playOrder: ({ G  })=>G[playOrderField],
            first: ()=>0,
            next: ({ ctx  })=>(ctx.playOrderPos + 1) % ctx.playOrder.length
        })
};
const Stage = {
    NULL: null
};
const ActivePlayers = {
    /**
     * ALL
     *
     * The turn stays with one player, but any player can play (in any order)
     * until the phase ends.
     */ ALL: {
        all: Stage.NULL
    },
    /**
     * ALL_ONCE
     *
     * The turn stays with one player, but any player can play (once, and in any order).
     * This is typically used in a phase where you want to elicit a response
     * from every player in the game.
     */ ALL_ONCE: {
        all: Stage.NULL,
        minMoves: 1,
        maxMoves: 1
    },
    /**
     * OTHERS
     *
     * The turn stays with one player, and every *other* player can play (in any order)
     * until the phase ends.
     */ OTHERS: {
        others: Stage.NULL
    },
    /**
     * OTHERS_ONCE
     *
     * The turn stays with one player, and every *other* player can play (once, and in any order).
     * This is typically used in a phase where you want to elicit a response
     * from every *other* player in the game.
     */ OTHERS_ONCE: {
        others: Stage.NULL,
        minMoves: 1,
        maxMoves: 1
    }
};

},{"immer":"4sfoz","./plugin-random-087f861e.js":"lhxqo","lodash.isplainobject":"6W10L","@parcel/transformer-js/src/esmodule-helpers.js":"cjuhS"}],"4sfoz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Immer", ()=>un);
parcelHelpers.export(exports, "applyPatches", ()=>pn);
parcelHelpers.export(exports, "castDraft", ()=>K);
parcelHelpers.export(exports, "castImmutable", ()=>$);
parcelHelpers.export(exports, "createDraft", ()=>ln);
parcelHelpers.export(exports, "current", ()=>D);
parcelHelpers.export(exports, "enableAllPlugins", ()=>J);
parcelHelpers.export(exports, "enableES5", ()=>N);
parcelHelpers.export(exports, "enableMapSet", ()=>C);
parcelHelpers.export(exports, "enablePatches", ()=>T);
parcelHelpers.export(exports, "finishDraft", ()=>dn);
parcelHelpers.export(exports, "freeze", ()=>d);
parcelHelpers.export(exports, "immerable", ()=>L);
parcelHelpers.export(exports, "isDraft", ()=>r);
parcelHelpers.export(exports, "isDraftable", ()=>t);
parcelHelpers.export(exports, "nothing", ()=>H);
parcelHelpers.export(exports, "original", ()=>e);
parcelHelpers.export(exports, "produce", ()=>fn);
parcelHelpers.export(exports, "produceWithPatches", ()=>cn);
parcelHelpers.export(exports, "setAutoFreeze", ()=>sn);
parcelHelpers.export(exports, "setUseProxies", ()=>vn);
function n(n) {
    for(var r = arguments.length, t = Array(r > 1 ? r - 1 : 0), e = 1; e < r; e++)t[e - 1] = arguments[e];
    var i = Y[n], o = i ? "function" == typeof i ? i.apply(null, t) : i : "unknown error nr: " + n;
    throw Error("[Immer] " + o);
    throw Error("[Immer] minified error nr: " + n + (t.length ? " " + t.map(function(n) {
        return "'" + n + "'";
    }).join(",") : "") + ". Find the full error at: https://bit.ly/3cXEKWf");
}
function r(n) {
    return !!n && !!n[Q];
}
function t(n) {
    var r;
    return !!n && (function(n) {
        if (!n || "object" != typeof n) return !1;
        var r = Object.getPrototypeOf(n);
        if (null === r) return !0;
        var t = Object.hasOwnProperty.call(r, "constructor") && r.constructor;
        return t === Object || "function" == typeof t && Function.toString.call(t) === Z;
    }(n) || Array.isArray(n) || !!n[L] || !!(null === (r = n.constructor) || void 0 === r ? void 0 : r[L]) || s(n) || v(n));
}
function e(t) {
    return r(t) || n(23, t), t[Q].t;
}
function i(n, r, t) {
    void 0 === t && (t = !1), 0 === o(n) ? (t ? Object.keys : nn)(n).forEach(function(e) {
        t && "symbol" == typeof e || r(e, n[e], n);
    }) : n.forEach(function(t, e) {
        return r(e, t, n);
    });
}
function o(n) {
    var r = n[Q];
    return r ? r.i > 3 ? r.i - 4 : r.i : Array.isArray(n) ? 1 : s(n) ? 2 : v(n) ? 3 : 0;
}
function u(n, r) {
    return 2 === o(n) ? n.has(r) : Object.prototype.hasOwnProperty.call(n, r);
}
function a(n, r) {
    return 2 === o(n) ? n.get(r) : n[r];
}
function f(n, r, t) {
    var e = o(n);
    2 === e ? n.set(r, t) : 3 === e ? (n.delete(r), n.add(t)) : n[r] = t;
}
function c(n, r) {
    return n === r ? 0 !== n || 1 / n == 1 / r : n != n && r != r;
}
function s(n) {
    return X && n instanceof Map;
}
function v(n) {
    return q && n instanceof Set;
}
function p(n) {
    return n.o || n.t;
}
function l(n) {
    if (Array.isArray(n)) return Array.prototype.slice.call(n);
    var r = rn(n);
    delete r[Q];
    for(var t = nn(r), e = 0; e < t.length; e++){
        var i = t[e], o = r[i];
        !1 === o.writable && (o.writable = !0, o.configurable = !0), (o.get || o.set) && (r[i] = {
            configurable: !0,
            writable: !0,
            enumerable: o.enumerable,
            value: n[i]
        });
    }
    return Object.create(Object.getPrototypeOf(n), r);
}
function d(n, e) {
    return void 0 === e && (e = !1), y(n) || r(n) || !t(n) ? n : (o(n) > 1 && (n.set = n.add = n.clear = n.delete = h), Object.freeze(n), e && i(n, function(n, r) {
        return d(r, !0);
    }, !0), n);
}
function h() {
    n(2);
}
function y(n) {
    return null == n || "object" != typeof n || Object.isFrozen(n);
}
function b(r) {
    var t = tn[r];
    return t || n(18, r), t;
}
function m(n, r) {
    tn[n] || (tn[n] = r);
}
function _() {
    return U || n(0), U;
}
function j(n, r) {
    r && (b("Patches"), n.u = [], n.s = [], n.v = r);
}
function O(n) {
    g(n), n.p.forEach(S), n.p = null;
}
function g(n) {
    n === U && (U = n.l);
}
function w(n) {
    return U = {
        p: [],
        l: U,
        h: n,
        m: !0,
        _: 0
    };
}
function S(n) {
    var r = n[Q];
    0 === r.i || 1 === r.i ? r.j() : r.O = !0;
}
function P(r, e) {
    e._ = e.p.length;
    var i = e.p[0], o = void 0 !== r && r !== i;
    return e.h.g || b("ES5").S(e, r, o), o ? (i[Q].P && (O(e), n(4)), t(r) && (r = M(e, r), e.l || x(e, r)), e.u && b("Patches").M(i[Q].t, r, e.u, e.s)) : r = M(e, i, []), O(e), e.u && e.v(e.u, e.s), r !== H ? r : void 0;
}
function M(n, r, t) {
    if (y(r)) return r;
    var e = r[Q];
    if (!e) return i(r, function(i, o) {
        return A(n, e, r, i, o, t);
    }, !0), r;
    if (e.A !== n) return r;
    if (!e.P) return x(n, e.t, !0), e.t;
    if (!e.I) {
        e.I = !0, e.A._--;
        var o = 4 === e.i || 5 === e.i ? e.o = l(e.k) : e.o;
        i(3 === e.i ? new Set(o) : o, function(r, i) {
            return A(n, e, o, r, i, t);
        }), x(n, o, !1), t && n.u && b("Patches").R(e, t, n.u, n.s);
    }
    return e.o;
}
function A(e, i, o, a, c, s) {
    if (c === o && n(5), r(c)) {
        var v = M(e, c, s && i && 3 !== i.i && !u(i.D, a) ? s.concat(a) : void 0);
        if (f(o, a, v), !r(v)) return;
        e.m = !1;
    }
    if (t(c) && !y(c)) {
        if (!e.h.F && e._ < 1) return;
        M(e, c), i && i.A.l || x(e, c);
    }
}
function x(n, r, t) {
    void 0 === t && (t = !1), n.h.F && n.m && d(r, t);
}
function z(n, r) {
    var t = n[Q];
    return (t ? p(t) : n)[r];
}
function I(n, r) {
    if (r in n) for(var t = Object.getPrototypeOf(n); t;){
        var e = Object.getOwnPropertyDescriptor(t, r);
        if (e) return e;
        t = Object.getPrototypeOf(t);
    }
}
function k(n) {
    n.P || (n.P = !0, n.l && k(n.l));
}
function E(n) {
    n.o || (n.o = l(n.t));
}
function R(n, r, t) {
    var e = s(r) ? b("MapSet").N(r, t) : v(r) ? b("MapSet").T(r, t) : n.g ? function(n, r) {
        var t = Array.isArray(n), e = {
            i: t ? 1 : 0,
            A: r ? r.A : _(),
            P: !1,
            I: !1,
            D: {},
            l: r,
            t: n,
            k: null,
            o: null,
            j: null,
            C: !1
        }, i = e, o = en;
        t && (i = [
            e
        ], o = on);
        var u = Proxy.revocable(i, o), a = u.revoke, f = u.proxy;
        return e.k = f, e.j = a, f;
    }(r, t) : b("ES5").J(r, t);
    return (t ? t.A : _()).p.push(e), e;
}
function D(e) {
    return r(e) || n(22, e), function n(r) {
        if (!t(r)) return r;
        var e, u = r[Q], c = o(r);
        if (u) {
            if (!u.P && (u.i < 4 || !b("ES5").K(u))) return u.t;
            u.I = !0, e = F(r, c), u.I = !1;
        } else e = F(r, c);
        return i(e, function(r, t) {
            u && a(u.t, r) === t || f(e, r, n(t));
        }), 3 === c ? new Set(e) : e;
    }(e);
}
function F(n, r) {
    switch(r){
        case 2:
            return new Map(n);
        case 3:
            return Array.from(n);
    }
    return l(n);
}
function N() {
    function t(n, r) {
        var t = s[n];
        return t ? t.enumerable = r : s[n] = t = {
            configurable: !0,
            enumerable: r,
            get: function() {
                var r = this[Q];
                return f(r), en.get(r, n);
            },
            set: function(r) {
                var t = this[Q];
                f(t), en.set(t, n, r);
            }
        }, t;
    }
    function e(n) {
        for(var r = n.length - 1; r >= 0; r--){
            var t = n[r][Q];
            if (!t.P) switch(t.i){
                case 5:
                    a(t) && k(t);
                    break;
                case 4:
                    o(t) && k(t);
            }
        }
    }
    function o(n) {
        for(var r = n.t, t = n.k, e = nn(t), i = e.length - 1; i >= 0; i--){
            var o = e[i];
            if (o !== Q) {
                var a = r[o];
                if (void 0 === a && !u(r, o)) return !0;
                var f = t[o], s = f && f[Q];
                if (s ? s.t !== a : !c(f, a)) return !0;
            }
        }
        var v = !!r[Q];
        return e.length !== nn(r).length + (v ? 0 : 1);
    }
    function a(n) {
        var r = n.k;
        if (r.length !== n.t.length) return !0;
        var t = Object.getOwnPropertyDescriptor(r, r.length - 1);
        if (t && !t.get) return !0;
        for(var e = 0; e < r.length; e++)if (!r.hasOwnProperty(e)) return !0;
        return !1;
    }
    function f(r) {
        r.O && n(3, JSON.stringify(p(r)));
    }
    var s = {};
    m("ES5", {
        J: function(n, r) {
            var e = Array.isArray(n), i = function(n, r) {
                if (n) {
                    for(var e = Array(r.length), i = 0; i < r.length; i++)Object.defineProperty(e, "" + i, t(i, !0));
                    return e;
                }
                var o = rn(r);
                delete o[Q];
                for(var u = nn(o), a = 0; a < u.length; a++){
                    var f = u[a];
                    o[f] = t(f, n || !!o[f].enumerable);
                }
                return Object.create(Object.getPrototypeOf(r), o);
            }(e, n), o = {
                i: e ? 5 : 4,
                A: r ? r.A : _(),
                P: !1,
                I: !1,
                D: {},
                l: r,
                t: n,
                k: i,
                o: null,
                O: !1,
                C: !1
            };
            return Object.defineProperty(i, Q, {
                value: o,
                writable: !0
            }), i;
        },
        S: function(n, t, o) {
            o ? r(t) && t[Q].A === n && e(n.p) : (n.u && function n(r) {
                if (r && "object" == typeof r) {
                    var t = r[Q];
                    if (t) {
                        var e = t.t, o = t.k, f = t.D, c = t.i;
                        if (4 === c) i(o, function(r) {
                            r !== Q && (void 0 !== e[r] || u(e, r) ? f[r] || n(o[r]) : (f[r] = !0, k(t)));
                        }), i(e, function(n) {
                            void 0 !== o[n] || u(o, n) || (f[n] = !1, k(t));
                        });
                        else if (5 === c) {
                            if (a(t) && (k(t), f.length = !0), o.length < e.length) for(var s = o.length; s < e.length; s++)f[s] = !1;
                            else for(var v = e.length; v < o.length; v++)f[v] = !0;
                            for(var p = Math.min(o.length, e.length), l = 0; l < p; l++)o.hasOwnProperty(l) || (f[l] = !0), void 0 === f[l] && n(o[l]);
                        }
                    }
                }
            }(n.p[0]), e(n.p));
        },
        K: function(n) {
            return 4 === n.i ? o(n) : a(n);
        }
    });
}
function T() {
    function e(n) {
        if (!t(n)) return n;
        if (Array.isArray(n)) return n.map(e);
        if (s(n)) return new Map(Array.from(n.entries()).map(function(n) {
            return [
                n[0],
                e(n[1])
            ];
        }));
        if (v(n)) return new Set(Array.from(n).map(e));
        var r = Object.create(Object.getPrototypeOf(n));
        for(var i in n)r[i] = e(n[i]);
        return u(n, L) && (r[L] = n[L]), r;
    }
    function f(n) {
        return r(n) ? e(n) : n;
    }
    var c = "add";
    m("Patches", {
        $: function(r, t) {
            return t.forEach(function(t) {
                for(var i = t.path, u = t.op, f = r, s = 0; s < i.length - 1; s++){
                    var v = o(f), p = "" + i[s];
                    0 !== v && 1 !== v || "__proto__" !== p && "constructor" !== p || n(24), "function" == typeof f && "prototype" === p && n(24), "object" != typeof (f = a(f, p)) && n(15, i.join("/"));
                }
                var l = o(f), d = e(t.value), h = i[i.length - 1];
                switch(u){
                    case "replace":
                        switch(l){
                            case 2:
                                return f.set(h, d);
                            case 3:
                                n(16);
                            default:
                                return f[h] = d;
                        }
                    case c:
                        switch(l){
                            case 1:
                                return "-" === h ? f.push(d) : f.splice(h, 0, d);
                            case 2:
                                return f.set(h, d);
                            case 3:
                                return f.add(d);
                            default:
                                return f[h] = d;
                        }
                    case "remove":
                        switch(l){
                            case 1:
                                return f.splice(h, 1);
                            case 2:
                                return f.delete(h);
                            case 3:
                                return f.delete(t.value);
                            default:
                                return delete f[h];
                        }
                    default:
                        n(17, u);
                }
            }), r;
        },
        R: function(n, r, t, e) {
            switch(n.i){
                case 0:
                case 4:
                case 2:
                    return function(n, r, t, e) {
                        var o = n.t, s = n.o;
                        i(n.D, function(n, i) {
                            var v = a(o, n), p = a(s, n), l = i ? u(o, n) ? "replace" : c : "remove";
                            if (v !== p || "replace" !== l) {
                                var d = r.concat(n);
                                t.push("remove" === l ? {
                                    op: l,
                                    path: d
                                } : {
                                    op: l,
                                    path: d,
                                    value: p
                                }), e.push(l === c ? {
                                    op: "remove",
                                    path: d
                                } : "remove" === l ? {
                                    op: c,
                                    path: d,
                                    value: f(v)
                                } : {
                                    op: "replace",
                                    path: d,
                                    value: f(v)
                                });
                            }
                        });
                    }(n, r, t, e);
                case 5:
                case 1:
                    return function(n, r, t, e) {
                        var i = n.t, o = n.D, u = n.o;
                        if (u.length < i.length) {
                            var a = [
                                u,
                                i
                            ];
                            i = a[0], u = a[1];
                            var s = [
                                e,
                                t
                            ];
                            t = s[0], e = s[1];
                        }
                        for(var v = 0; v < i.length; v++)if (o[v] && u[v] !== i[v]) {
                            var p = r.concat([
                                v
                            ]);
                            t.push({
                                op: "replace",
                                path: p,
                                value: f(u[v])
                            }), e.push({
                                op: "replace",
                                path: p,
                                value: f(i[v])
                            });
                        }
                        for(var l = i.length; l < u.length; l++){
                            var d = r.concat([
                                l
                            ]);
                            t.push({
                                op: c,
                                path: d,
                                value: f(u[l])
                            });
                        }
                        i.length < u.length && e.push({
                            op: "replace",
                            path: r.concat([
                                "length"
                            ]),
                            value: i.length
                        });
                    }(n, r, t, e);
                case 3:
                    return function(n, r, t, e) {
                        var i = n.t, o = n.o, u = 0;
                        i.forEach(function(n) {
                            if (!o.has(n)) {
                                var i = r.concat([
                                    u
                                ]);
                                t.push({
                                    op: "remove",
                                    path: i,
                                    value: n
                                }), e.unshift({
                                    op: c,
                                    path: i,
                                    value: n
                                });
                            }
                            u++;
                        }), u = 0, o.forEach(function(n) {
                            if (!i.has(n)) {
                                var o = r.concat([
                                    u
                                ]);
                                t.push({
                                    op: c,
                                    path: o,
                                    value: n
                                }), e.unshift({
                                    op: "remove",
                                    path: o,
                                    value: n
                                });
                            }
                            u++;
                        });
                    }(n, r, t, e);
            }
        },
        M: function(n, r, t, e) {
            t.push({
                op: "replace",
                path: [],
                value: r === H ? void 0 : r
            }), e.push({
                op: "replace",
                path: [],
                value: n
            });
        }
    });
}
function C() {
    function r(n, r) {
        function t() {
            this.constructor = n;
        }
        a(n, r), n.prototype = (t.prototype = r.prototype, new t);
    }
    function e(n) {
        n.o || (n.D = new Map, n.o = new Map(n.t));
    }
    function o(n) {
        n.o || (n.o = new Set, n.t.forEach(function(r) {
            if (t(r)) {
                var e = R(n.A.h, r, n);
                n.p.set(r, e), n.o.add(e);
            } else n.o.add(r);
        }));
    }
    function u(r) {
        r.O && n(3, JSON.stringify(p(r)));
    }
    var a = function(n, r) {
        return (a = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(n, r) {
            n.__proto__ = r;
        } || function(n, r) {
            for(var t in r)r.hasOwnProperty(t) && (n[t] = r[t]);
        })(n, r);
    }, f = function() {
        function n(n, r) {
            return this[Q] = {
                i: 2,
                l: r,
                A: r ? r.A : _(),
                P: !1,
                I: !1,
                o: void 0,
                D: void 0,
                t: n,
                k: this,
                C: !1,
                O: !1
            }, this;
        }
        r(n, Map);
        var o = n.prototype;
        return Object.defineProperty(o, "size", {
            get: function() {
                return p(this[Q]).size;
            }
        }), o.has = function(n) {
            return p(this[Q]).has(n);
        }, o.set = function(n, r) {
            var t = this[Q];
            return u(t), p(t).has(n) && p(t).get(n) === r || (e(t), k(t), t.D.set(n, !0), t.o.set(n, r), t.D.set(n, !0)), this;
        }, o.delete = function(n) {
            if (!this.has(n)) return !1;
            var r = this[Q];
            return u(r), e(r), k(r), r.t.has(n) ? r.D.set(n, !1) : r.D.delete(n), r.o.delete(n), !0;
        }, o.clear = function() {
            var n = this[Q];
            u(n), p(n).size && (e(n), k(n), n.D = new Map, i(n.t, function(r) {
                n.D.set(r, !1);
            }), n.o.clear());
        }, o.forEach = function(n, r) {
            var t = this;
            p(this[Q]).forEach(function(e, i) {
                n.call(r, t.get(i), i, t);
            });
        }, o.get = function(n) {
            var r = this[Q];
            u(r);
            var i = p(r).get(n);
            if (r.I || !t(i)) return i;
            if (i !== r.t.get(n)) return i;
            var o = R(r.A.h, i, r);
            return e(r), r.o.set(n, o), o;
        }, o.keys = function() {
            return p(this[Q]).keys();
        }, o.values = function() {
            var n, r = this, t = this.keys();
            return (n = {})[V] = function() {
                return r.values();
            }, n.next = function() {
                var n = t.next();
                return n.done ? n : {
                    done: !1,
                    value: r.get(n.value)
                };
            }, n;
        }, o.entries = function() {
            var n, r = this, t = this.keys();
            return (n = {})[V] = function() {
                return r.entries();
            }, n.next = function() {
                var n = t.next();
                if (n.done) return n;
                var e = r.get(n.value);
                return {
                    done: !1,
                    value: [
                        n.value,
                        e
                    ]
                };
            }, n;
        }, o[V] = function() {
            return this.entries();
        }, n;
    }(), c = function() {
        function n(n, r) {
            return this[Q] = {
                i: 3,
                l: r,
                A: r ? r.A : _(),
                P: !1,
                I: !1,
                o: void 0,
                t: n,
                k: this,
                p: new Map,
                O: !1,
                C: !1
            }, this;
        }
        r(n, Set);
        var t = n.prototype;
        return Object.defineProperty(t, "size", {
            get: function() {
                return p(this[Q]).size;
            }
        }), t.has = function(n) {
            var r = this[Q];
            return u(r), r.o ? !!r.o.has(n) || !(!r.p.has(n) || !r.o.has(r.p.get(n))) : r.t.has(n);
        }, t.add = function(n) {
            var r = this[Q];
            return u(r), this.has(n) || (o(r), k(r), r.o.add(n)), this;
        }, t.delete = function(n) {
            if (!this.has(n)) return !1;
            var r = this[Q];
            return u(r), o(r), k(r), r.o.delete(n) || !!r.p.has(n) && r.o.delete(r.p.get(n));
        }, t.clear = function() {
            var n = this[Q];
            u(n), p(n).size && (o(n), k(n), n.o.clear());
        }, t.values = function() {
            var n = this[Q];
            return u(n), o(n), n.o.values();
        }, t.entries = function() {
            var n = this[Q];
            return u(n), o(n), n.o.entries();
        }, t.keys = function() {
            return this.values();
        }, t[V] = function() {
            return this.values();
        }, t.forEach = function(n, r) {
            for(var t = this.values(), e = t.next(); !e.done;)n.call(r, e.value, e.value, this), e = t.next();
        }, n;
    }();
    m("MapSet", {
        N: function(n, r) {
            return new f(n, r);
        },
        T: function(n, r) {
            return new c(n, r);
        }
    });
}
function J() {
    N(), C(), T();
}
function K(n) {
    return n;
}
function $(n) {
    return n;
}
var G, U, W = "undefined" != typeof Symbol && "symbol" == typeof Symbol("x"), X = "undefined" != typeof Map, q = "undefined" != typeof Set, B = "undefined" != typeof Proxy && void 0 !== Proxy.revocable && "undefined" != typeof Reflect, H = W ? Symbol.for("immer-nothing") : ((G = {})["immer-nothing"] = !0, G), L = W ? Symbol.for("immer-draftable") : "__$immer_draftable", Q = W ? Symbol.for("immer-state") : "__$immer_state", V = "undefined" != typeof Symbol && Symbol.iterator || "@@iterator", Y = {
    0: "Illegal state",
    1: "Immer drafts cannot have computed properties",
    2: "This object has been frozen and should not be mutated",
    3: function(n) {
        return "Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " + n;
    },
    4: "An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.",
    5: "Immer forbids circular references",
    6: "The first or second argument to `produce` must be a function",
    7: "The third argument to `produce` must be a function or undefined",
    8: "First argument to `createDraft` must be a plain object, an array, or an immerable object",
    9: "First argument to `finishDraft` must be a draft returned by `createDraft`",
    10: "The given draft is already finalized",
    11: "Object.defineProperty() cannot be used on an Immer draft",
    12: "Object.setPrototypeOf() cannot be used on an Immer draft",
    13: "Immer only supports deleting array indices",
    14: "Immer only supports setting array indices and the 'length' property",
    15: function(n) {
        return "Cannot apply patch, path doesn't resolve: " + n;
    },
    16: 'Sets cannot have "replace" patches.',
    17: function(n) {
        return "Unsupported patch operation: " + n;
    },
    18: function(n) {
        return "The plugin for '" + n + "' has not been loaded into Immer. To enable the plugin, import and call `enable" + n + "()` when initializing your application.";
    },
    20: "Cannot use proxies if Proxy, Proxy.revocable or Reflect are not available",
    21: function(n) {
        return "produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '" + n + "'";
    },
    22: function(n) {
        return "'current' expects a draft, got: " + n;
    },
    23: function(n) {
        return "'original' expects a draft, got: " + n;
    },
    24: "Patching reserved attributes like __proto__, prototype and constructor is not allowed"
}, Z = "" + Object.prototype.constructor, nn = "undefined" != typeof Reflect && Reflect.ownKeys ? Reflect.ownKeys : void 0 !== Object.getOwnPropertySymbols ? function(n) {
    return Object.getOwnPropertyNames(n).concat(Object.getOwnPropertySymbols(n));
} : Object.getOwnPropertyNames, rn = Object.getOwnPropertyDescriptors || function(n) {
    var r = {};
    return nn(n).forEach(function(t) {
        r[t] = Object.getOwnPropertyDescriptor(n, t);
    }), r;
}, tn = {}, en = {
    get: function(n, r) {
        if (r === Q) return n;
        var e = p(n);
        if (!u(e, r)) return function(n, r, t) {
            var e, i = I(r, t);
            return i ? "value" in i ? i.value : null === (e = i.get) || void 0 === e ? void 0 : e.call(n.k) : void 0;
        }(n, e, r);
        var i = e[r];
        return n.I || !t(i) ? i : i === z(n.t, r) ? (E(n), n.o[r] = R(n.A.h, i, n)) : i;
    },
    has: function(n, r) {
        return r in p(n);
    },
    ownKeys: function(n) {
        return Reflect.ownKeys(p(n));
    },
    set: function(n, r, t) {
        var e = I(p(n), r);
        if (null == e ? void 0 : e.set) return e.set.call(n.k, t), !0;
        if (!n.P) {
            var i = z(p(n), r), o = null == i ? void 0 : i[Q];
            if (o && o.t === t) return n.o[r] = t, n.D[r] = !1, !0;
            if (c(t, i) && (void 0 !== t || u(n.t, r))) return !0;
            E(n), k(n);
        }
        return n.o[r] === t && "number" != typeof t && (void 0 !== t || r in n.o) || (n.o[r] = t, n.D[r] = !0, !0);
    },
    deleteProperty: function(n, r) {
        return void 0 !== z(n.t, r) || r in n.t ? (n.D[r] = !1, E(n), k(n)) : delete n.D[r], n.o && delete n.o[r], !0;
    },
    getOwnPropertyDescriptor: function(n, r) {
        var t = p(n), e = Reflect.getOwnPropertyDescriptor(t, r);
        return e ? {
            writable: !0,
            configurable: 1 !== n.i || "length" !== r,
            enumerable: e.enumerable,
            value: t[r]
        } : e;
    },
    defineProperty: function() {
        n(11);
    },
    getPrototypeOf: function(n) {
        return Object.getPrototypeOf(n.t);
    },
    setPrototypeOf: function() {
        n(12);
    }
}, on = {};
i(en, function(n, r) {
    on[n] = function() {
        return arguments[0] = arguments[0][0], r.apply(this, arguments);
    };
}), on.deleteProperty = function(r, t) {
    return isNaN(parseInt(t)) && n(13), on.set.call(this, r, t, void 0);
}, on.set = function(r, t, e) {
    return "length" !== t && isNaN(parseInt(t)) && n(14), en.set.call(this, r[0], t, e, r[0]);
};
var un = function() {
    function e(r) {
        var e = this;
        this.g = B, this.F = !0, this.produce = function(r, i, o) {
            if ("function" == typeof r && "function" != typeof i) {
                var u = i;
                i = r;
                var a = e;
                return function(n) {
                    var r = this;
                    void 0 === n && (n = u);
                    for(var t = arguments.length, e = Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)e[o - 1] = arguments[o];
                    return a.produce(n, function(n) {
                        var t;
                        return (t = i).call.apply(t, [
                            r,
                            n
                        ].concat(e));
                    });
                };
            }
            var f;
            if ("function" != typeof i && n(6), void 0 !== o && "function" != typeof o && n(7), t(r)) {
                var c = w(e), s = R(e, r, void 0), v = !0;
                try {
                    f = i(s), v = !1;
                } finally{
                    v ? O(c) : g(c);
                }
                return "undefined" != typeof Promise && f instanceof Promise ? f.then(function(n) {
                    return j(c, o), P(n, c);
                }, function(n) {
                    throw O(c), n;
                }) : (j(c, o), P(f, c));
            }
            if (!r || "object" != typeof r) {
                if (void 0 === (f = i(r)) && (f = r), f === H && (f = void 0), e.F && d(f, !0), o) {
                    var p = [], l = [];
                    b("Patches").M(r, f, p, l), o(p, l);
                }
                return f;
            }
            n(21, r);
        }, this.produceWithPatches = function(n, r) {
            if ("function" == typeof n) return function(r) {
                for(var t = arguments.length, i = Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)i[o - 1] = arguments[o];
                return e.produceWithPatches(r, function(r) {
                    return n.apply(void 0, [
                        r
                    ].concat(i));
                });
            };
            var t, i, o = e.produce(n, r, function(n, r) {
                t = n, i = r;
            });
            return "undefined" != typeof Promise && o instanceof Promise ? o.then(function(n) {
                return [
                    n,
                    t,
                    i
                ];
            }) : [
                o,
                t,
                i
            ];
        }, "boolean" == typeof (null == r ? void 0 : r.useProxies) && this.setUseProxies(r.useProxies), "boolean" == typeof (null == r ? void 0 : r.autoFreeze) && this.setAutoFreeze(r.autoFreeze);
    }
    var i = e.prototype;
    return i.createDraft = function(e) {
        t(e) || n(8), r(e) && (e = D(e));
        var i = w(this), o = R(this, e, void 0);
        return o[Q].C = !0, g(i), o;
    }, i.finishDraft = function(r, t) {
        var e = r && r[Q];
        e && e.C || n(9), e.I && n(10);
        var i = e.A;
        return j(i, t), P(void 0, i);
    }, i.setAutoFreeze = function(n) {
        this.F = n;
    }, i.setUseProxies = function(r) {
        r && !B && n(20), this.g = r;
    }, i.applyPatches = function(n, t) {
        var e;
        for(e = t.length - 1; e >= 0; e--){
            var i = t[e];
            if (0 === i.path.length && "replace" === i.op) {
                n = i.value;
                break;
            }
        }
        e > -1 && (t = t.slice(e + 1));
        var o = b("Patches").$;
        return r(n) ? o(n, t) : this.produce(n, function(n) {
            return o(n, t);
        });
    }, e;
}(), an = new un, fn = an.produce, cn = an.produceWithPatches.bind(an), sn = an.setAutoFreeze.bind(an), vn = an.setUseProxies.bind(an), pn = an.applyPatches.bind(an), ln = an.createDraft.bind(an), dn = an.finishDraft.bind(an);
exports.default = fn;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"cjuhS"}],"lhxqo":[function(require,module,exports) {
// Inlined version of Alea from https://github.com/davidbau/seedrandom.
// Converted to Typescript October 2020.
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "R", ()=>RandomPlugin);
parcelHelpers.export(exports, "a", ()=>alea);
class Alea {
    constructor(seed){
        const mash = Mash();
        // Apply the seeding algorithm from Baagoe.
        this.c = 1;
        this.s0 = mash(" ");
        this.s1 = mash(" ");
        this.s2 = mash(" ");
        this.s0 -= mash(seed);
        if (this.s0 < 0) this.s0 += 1;
        this.s1 -= mash(seed);
        if (this.s1 < 0) this.s1 += 1;
        this.s2 -= mash(seed);
        if (this.s2 < 0) this.s2 += 1;
    }
    next() {
        const t = 2091639 * this.s0 + this.c * 2.3283064365386963e-10; // 2^-32
        this.s0 = this.s1;
        this.s1 = this.s2;
        return this.s2 = t - (this.c = Math.trunc(t));
    }
}
function Mash() {
    let n = 0xefc8249d;
    const mash = function(data) {
        const str = data.toString();
        for(let i = 0; i < str.length; i++){
            n += str.charCodeAt(i);
            let h = 0.02519603282416938 * n;
            n = h >>> 0;
            h -= n;
            h *= n;
            n = h >>> 0;
            h -= n;
            n += h * 0x100000000; // 2^32
        }
        return (n >>> 0) * 2.3283064365386963e-10; // 2^-32
    };
    return mash;
}
function copy(f, t) {
    t.c = f.c;
    t.s0 = f.s0;
    t.s1 = f.s1;
    t.s2 = f.s2;
    return t;
}
function alea(seed, state) {
    const xg = new Alea(seed);
    const prng = xg.next.bind(xg);
    if (state) copy(state, xg);
    prng.state = ()=>copy(xg, {});
    return prng;
}
/*
 * Copyright 2017 The boardgame.io Authors
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */ /**
 * Random
 *
 * Calls that require a pseudorandom number generator.
 * Uses a seed from ctx, and also persists the PRNG
 * state in ctx so that moves can stay pure.
 */ class Random {
    /**
     * constructor
     * @param {object} ctx - The ctx object to initialize from.
     */ constructor(state){
        // If we are on the client, the seed is not present.
        // Just use a temporary seed to execute the move without
        // crashing it. The move state itself is discarded,
        // so the actual value doesn't matter.
        this.state = state || {
            seed: "0"
        };
        this.used = false;
    }
    /**
     * Generates a new seed from the current date / time.
     */ static seed() {
        return Date.now().toString(36).slice(-10);
    }
    isUsed() {
        return this.used;
    }
    getState() {
        return this.state;
    }
    /**
     * Generate a random number.
     */ _random() {
        this.used = true;
        const R = this.state;
        const seed = R.prngstate ? "" : R.seed;
        const rand = alea(seed, R.prngstate);
        const number = rand();
        this.state = {
            ...R,
            prngstate: rand.state()
        };
        return number;
    }
    api() {
        const random = this._random.bind(this);
        const SpotValue = {
            D4: 4,
            D6: 6,
            D8: 8,
            D10: 10,
            D12: 12,
            D20: 20
        };
        // Generate functions for predefined dice values D4 - D20.
        const predefined = {};
        for(const key in SpotValue){
            const spotvalue = SpotValue[key];
            predefined[key] = (diceCount)=>{
                return diceCount === undefined ? Math.floor(random() * spotvalue) + 1 : Array.from({
                    length: diceCount
                }).map(()=>Math.floor(random() * spotvalue) + 1);
            };
        }
        function Die(spotvalue = 6, diceCount) {
            return diceCount === undefined ? Math.floor(random() * spotvalue) + 1 : Array.from({
                length: diceCount
            }).map(()=>Math.floor(random() * spotvalue) + 1);
        }
        return {
            /**
             * Similar to Die below, but with fixed spot values.
             * Supports passing a diceCount
             *    if not defined, defaults to 1 and returns the value directly.
             *    if defined, returns an array containing the random dice values.
             *
             * D4: (diceCount) => value
             * D6: (diceCount) => value
             * D8: (diceCount) => value
             * D10: (diceCount) => value
             * D12: (diceCount) => value
             * D20: (diceCount) => value
             */ ...predefined,
            /**
             * Roll a die of specified spot value.
             *
             * @param {number} spotvalue - The die dimension (default: 6).
             * @param {number} diceCount - number of dice to throw.
             *                             if not defined, defaults to 1 and returns the value directly.
             *                             if defined, returns an array containing the random dice values.
             */ Die,
            /**
             * Generate a random number between 0 and 1.
             */ Number: ()=>{
                return random();
            },
            /**
             * Shuffle an array.
             *
             * @param {Array} deck - The array to shuffle. Does not mutate
             *                       the input, but returns the shuffled array.
             */ Shuffle: (deck)=>{
                const clone = [
                    ...deck
                ];
                let sourceIndex = deck.length;
                let destinationIndex = 0;
                const shuffled = Array.from({
                    length: sourceIndex
                });
                while(sourceIndex){
                    const randomIndex = Math.trunc(sourceIndex * random());
                    shuffled[destinationIndex++] = clone[randomIndex];
                    clone[randomIndex] = clone[--sourceIndex];
                }
                return shuffled;
            },
            _private: this
        };
    }
}
/*
 * Copyright 2018 The boardgame.io Authors
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */ const RandomPlugin = {
    name: "random",
    noClient: ({ api  })=>{
        return api._private.isUsed();
    },
    flush: ({ api  })=>{
        return api._private.getState();
    },
    api: ({ data  })=>{
        const random = new Random(data);
        return random.api();
    },
    setup: ({ game  })=>{
        let { seed  } = game;
        if (seed === undefined) seed = Random.seed();
        return {
            seed
        };
    },
    playerView: ()=>undefined
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"cjuhS"}],"6W10L":[function(require,module,exports) {
/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */ /** `Object#toString` result references. */ var objectTag = "[object Object]";
/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */ function isHostObject(value) {
    // Many host objects are `Object` objects that can coerce to strings
    // despite having improperly defined `toString` methods.
    var result = false;
    if (value != null && typeof value.toString != "function") try {
        result = !!(value + "");
    } catch (e) {}
    return result;
}
/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */ function overArg(func, transform) {
    return function(arg) {
        return func(transform(arg));
    };
}
/** Used for built-in method references. */ var funcProto = Function.prototype, objectProto = Object.prototype;
/** Used to resolve the decompiled source of functions. */ var funcToString = funcProto.toString;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/** Used to infer the `Object` constructor. */ var objectCtorString = funcToString.call(Object);
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */ var objectToString = objectProto.toString;
/** Built-in value references. */ var getPrototype = overArg(Object.getPrototypeOf, Object);
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */ function isObjectLike(value) {
    return !!value && typeof value == "object";
}
/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */ function isPlainObject(value) {
    if (!isObjectLike(value) || objectToString.call(value) != objectTag || isHostObject(value)) return false;
    var proto = getPrototype(value);
    if (proto === null) return true;
    var Ctor = hasOwnProperty.call(proto, "constructor") && proto.constructor;
    return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
}
module.exports = isPlainObject;

},{}],"b7fst":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "C", ()=>CreateGameReducer);
parcelHelpers.export(exports, "I", ()=>IsLongFormMove);
parcelHelpers.export(exports, "P", ()=>ProcessGameConfig);
parcelHelpers.export(exports, "T", ()=>TransientHandlingMiddleware);
var _turnOrder8Cc4909BJs = require("./turn-order-8cc4909b.js");
var _rfc6902 = require("rfc6902");
/*
 * Copyright 2017 The boardgame.io Authors
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */ /**
 * Flow
 *
 * Creates a reducer that updates ctx (analogous to how moves update G).
 */ function Flow({ moves , phases , endIf , onEnd , turn , events , plugins  }) {
    // Attach defaults.
    if (moves === undefined) moves = {};
    if (events === undefined) events = {};
    if (plugins === undefined) plugins = [];
    if (phases === undefined) phases = {};
    if (!endIf) endIf = ()=>undefined;
    if (!onEnd) onEnd = ({ G  })=>G;
    if (!turn) turn = {};
    const phaseMap = {
        ...phases
    };
    if ("" in phaseMap) (0, _turnOrder8Cc4909BJs.e)("cannot specify phase with empty name");
    phaseMap[""] = {};
    const moveMap = {};
    const moveNames = new Set();
    let startingPhase = null;
    Object.keys(moves).forEach((name)=>moveNames.add(name));
    const HookWrapper = (hook, hookType)=>{
        const withPlugins = (0, _turnOrder8Cc4909BJs.F)(hook, hookType, plugins);
        return (state)=>{
            const pluginAPIs = (0, _turnOrder8Cc4909BJs.a)(state);
            return withPlugins({
                ...pluginAPIs,
                G: state.G,
                ctx: state.ctx,
                playerID: state.playerID
            });
        };
    };
    const TriggerWrapper = (trigger)=>{
        return (state)=>{
            const pluginAPIs = (0, _turnOrder8Cc4909BJs.a)(state);
            return trigger({
                ...pluginAPIs,
                G: state.G,
                ctx: state.ctx
            });
        };
    };
    const wrapped = {
        onEnd: HookWrapper(onEnd, (0, _turnOrder8Cc4909BJs.G).GAME_ON_END),
        endIf: TriggerWrapper(endIf)
    };
    for(const phase in phaseMap){
        const phaseConfig = phaseMap[phase];
        if (phaseConfig.start === true) startingPhase = phase;
        if (phaseConfig.moves !== undefined) for (const move of Object.keys(phaseConfig.moves)){
            moveMap[phase + "." + move] = phaseConfig.moves[move];
            moveNames.add(move);
        }
        if (phaseConfig.endIf === undefined) phaseConfig.endIf = ()=>undefined;
        if (phaseConfig.onBegin === undefined) phaseConfig.onBegin = ({ G  })=>G;
        if (phaseConfig.onEnd === undefined) phaseConfig.onEnd = ({ G  })=>G;
        if (phaseConfig.turn === undefined) phaseConfig.turn = turn;
        if (phaseConfig.turn.order === undefined) phaseConfig.turn.order = (0, _turnOrder8Cc4909BJs.T).DEFAULT;
        if (phaseConfig.turn.onBegin === undefined) phaseConfig.turn.onBegin = ({ G  })=>G;
        if (phaseConfig.turn.onEnd === undefined) phaseConfig.turn.onEnd = ({ G  })=>G;
        if (phaseConfig.turn.endIf === undefined) phaseConfig.turn.endIf = ()=>false;
        if (phaseConfig.turn.onMove === undefined) phaseConfig.turn.onMove = ({ G  })=>G;
        if (phaseConfig.turn.stages === undefined) phaseConfig.turn.stages = {};
        // turns previously treated moveLimit as both minMoves and maxMoves, this behaviour is kept intentionally
        (0, _turnOrder8Cc4909BJs.b)(phaseConfig.turn, true);
        for(const stage in phaseConfig.turn.stages){
            const stageConfig = phaseConfig.turn.stages[stage];
            const moves1 = stageConfig.moves || {};
            for (const move1 of Object.keys(moves1)){
                const key = phase + "." + stage + "." + move1;
                moveMap[key] = moves1[move1];
                moveNames.add(move1);
            }
        }
        phaseConfig.wrapped = {
            onBegin: HookWrapper(phaseConfig.onBegin, (0, _turnOrder8Cc4909BJs.G).PHASE_ON_BEGIN),
            onEnd: HookWrapper(phaseConfig.onEnd, (0, _turnOrder8Cc4909BJs.G).PHASE_ON_END),
            endIf: TriggerWrapper(phaseConfig.endIf)
        };
        phaseConfig.turn.wrapped = {
            onMove: HookWrapper(phaseConfig.turn.onMove, (0, _turnOrder8Cc4909BJs.G).TURN_ON_MOVE),
            onBegin: HookWrapper(phaseConfig.turn.onBegin, (0, _turnOrder8Cc4909BJs.G).TURN_ON_BEGIN),
            onEnd: HookWrapper(phaseConfig.turn.onEnd, (0, _turnOrder8Cc4909BJs.G).TURN_ON_END),
            endIf: TriggerWrapper(phaseConfig.turn.endIf)
        };
        if (typeof phaseConfig.next !== "function") {
            const { next  } = phaseConfig;
            phaseConfig.next = ()=>next || null;
        }
        phaseConfig.wrapped.next = TriggerWrapper(phaseConfig.next);
    }
    function GetPhase(ctx) {
        return ctx.phase ? phaseMap[ctx.phase] : phaseMap[""];
    }
    function OnMove(state) {
        return state;
    }
    function Process(state, events) {
        const phasesEnded = new Set();
        const turnsEnded = new Set();
        for(let i = 0; i < events.length; i++){
            const { fn , arg , ...rest } = events[i];
            // Detect a loop of EndPhase calls.
            // This could potentially even be an infinite loop
            // if the endIf condition of each phase blindly
            // returns true. The moment we detect a single
            // loop, we just bail out of all phases.
            if (fn === EndPhase) {
                turnsEnded.clear();
                const phase = state.ctx.phase;
                if (phasesEnded.has(phase)) {
                    const ctx = {
                        ...state.ctx,
                        phase: null
                    };
                    return {
                        ...state,
                        ctx
                    };
                }
                phasesEnded.add(phase);
            }
            // Process event.
            const next = [];
            state = fn(state, {
                ...rest,
                arg,
                next
            });
            if (fn === EndGame) break;
            // Check if we should end the game.
            const shouldEndGame = ShouldEndGame(state);
            if (shouldEndGame) {
                events.push({
                    fn: EndGame,
                    arg: shouldEndGame,
                    turn: state.ctx.turn,
                    phase: state.ctx.phase,
                    automatic: true
                });
                continue;
            }
            // Check if we should end the phase.
            const shouldEndPhase = ShouldEndPhase(state);
            if (shouldEndPhase) {
                events.push({
                    fn: EndPhase,
                    arg: shouldEndPhase,
                    turn: state.ctx.turn,
                    phase: state.ctx.phase,
                    automatic: true
                });
                continue;
            }
            // Check if we should end the turn.
            if ([
                OnMove,
                UpdateStage,
                UpdateActivePlayers
            ].includes(fn)) {
                const shouldEndTurn = ShouldEndTurn(state);
                if (shouldEndTurn) {
                    events.push({
                        fn: EndTurn,
                        arg: shouldEndTurn,
                        turn: state.ctx.turn,
                        phase: state.ctx.phase,
                        automatic: true
                    });
                    continue;
                }
            }
            events.push(...next);
        }
        return state;
    }
    ///////////
    // Start //
    ///////////
    function StartGame(state, { next  }) {
        next.push({
            fn: StartPhase
        });
        return state;
    }
    function StartPhase(state, { next  }) {
        let { G , ctx  } = state;
        const phaseConfig = GetPhase(ctx);
        // Run any phase setup code provided by the user.
        G = phaseConfig.wrapped.onBegin(state);
        next.push({
            fn: StartTurn
        });
        return {
            ...state,
            G,
            ctx
        };
    }
    function StartTurn(state, { currentPlayer  }) {
        let { ctx  } = state;
        const phaseConfig = GetPhase(ctx);
        // Initialize the turn order state.
        if (currentPlayer) {
            ctx = {
                ...ctx,
                currentPlayer
            };
            if (phaseConfig.turn.activePlayers) ctx = (0, _turnOrder8Cc4909BJs.c)(ctx, phaseConfig.turn.activePlayers);
        } else // This is only called at the beginning of the phase
        // when there is no currentPlayer yet.
        ctx = (0, _turnOrder8Cc4909BJs.I)(state, phaseConfig.turn);
        const turn = ctx.turn + 1;
        ctx = {
            ...ctx,
            turn,
            numMoves: 0,
            _prevActivePlayers: []
        };
        const G = phaseConfig.turn.wrapped.onBegin({
            ...state,
            ctx
        });
        return {
            ...state,
            G,
            ctx,
            _undo: [],
            _redo: []
        };
    }
    ////////////
    // Update //
    ////////////
    function UpdatePhase(state, { arg , next , phase  }) {
        const phaseConfig = GetPhase({
            phase
        });
        let { ctx  } = state;
        if (arg && arg.next) {
            if (arg.next in phaseMap) ctx = {
                ...ctx,
                phase: arg.next
            };
            else {
                (0, _turnOrder8Cc4909BJs.e)("invalid phase: " + arg.next);
                return state;
            }
        } else ctx = {
            ...ctx,
            phase: phaseConfig.wrapped.next(state) || null
        };
        state = {
            ...state,
            ctx
        };
        // Start the new phase.
        next.push({
            fn: StartPhase
        });
        return state;
    }
    function UpdateTurn(state, { arg , currentPlayer , next  }) {
        let { G , ctx  } = state;
        const phaseConfig = GetPhase(ctx);
        // Update turn order state.
        const { endPhase , ctx: newCtx  } = (0, _turnOrder8Cc4909BJs.U)(state, currentPlayer, phaseConfig.turn, arg);
        ctx = newCtx;
        state = {
            ...state,
            G,
            ctx
        };
        if (endPhase) next.push({
            fn: EndPhase,
            turn: ctx.turn,
            phase: ctx.phase
        });
        else next.push({
            fn: StartTurn,
            currentPlayer: ctx.currentPlayer
        });
        return state;
    }
    function UpdateStage(state, { arg , playerID  }) {
        if (typeof arg === "string" || arg === (0, _turnOrder8Cc4909BJs.S).NULL) arg = {
            stage: arg
        };
        if (typeof arg !== "object") return state;
        // `arg` should be of type `StageArg`, loose typing as `any` here for historic reasons
        // stages previously did not enforce minMoves, this behaviour is kept intentionally
        (0, _turnOrder8Cc4909BJs.b)(arg);
        let { ctx  } = state;
        let { activePlayers , _activePlayersMinMoves , _activePlayersMaxMoves , _activePlayersNumMoves  } = ctx;
        // Checking if stage is valid, even Stage.NULL
        if (arg.stage !== undefined) {
            if (activePlayers === null) activePlayers = {};
            activePlayers[playerID] = arg.stage;
            _activePlayersNumMoves[playerID] = 0;
            if (arg.minMoves) {
                if (_activePlayersMinMoves === null) _activePlayersMinMoves = {};
                _activePlayersMinMoves[playerID] = arg.minMoves;
            }
            if (arg.maxMoves) {
                if (_activePlayersMaxMoves === null) _activePlayersMaxMoves = {};
                _activePlayersMaxMoves[playerID] = arg.maxMoves;
            }
        }
        ctx = {
            ...ctx,
            activePlayers,
            _activePlayersMinMoves,
            _activePlayersMaxMoves,
            _activePlayersNumMoves
        };
        return {
            ...state,
            ctx
        };
    }
    function UpdateActivePlayers(state, { arg  }) {
        return {
            ...state,
            ctx: (0, _turnOrder8Cc4909BJs.c)(state.ctx, arg)
        };
    }
    ///////////////
    // ShouldEnd //
    ///////////////
    function ShouldEndGame(state) {
        return wrapped.endIf(state);
    }
    function ShouldEndPhase(state) {
        const phaseConfig = GetPhase(state.ctx);
        return phaseConfig.wrapped.endIf(state);
    }
    function ShouldEndTurn(state) {
        const phaseConfig = GetPhase(state.ctx);
        // End the turn if the required number of moves has been made.
        const currentPlayerMoves = state.ctx.numMoves || 0;
        if (phaseConfig.turn.maxMoves && currentPlayerMoves >= phaseConfig.turn.maxMoves) return true;
        return phaseConfig.turn.wrapped.endIf(state);
    }
    /////////
    // End //
    /////////
    function EndGame(state, { arg , phase  }) {
        state = EndPhase(state, {
            phase
        });
        if (arg === undefined) arg = true;
        state = {
            ...state,
            ctx: {
                ...state.ctx,
                gameover: arg
            }
        };
        // Run game end hook.
        const G = wrapped.onEnd(state);
        return {
            ...state,
            G
        };
    }
    function EndPhase(state, { arg , next , turn: initialTurn , automatic  }) {
        // End the turn first.
        state = EndTurn(state, {
            turn: initialTurn,
            force: true,
            automatic: true
        });
        const { phase , turn  } = state.ctx;
        if (next) next.push({
            fn: UpdatePhase,
            arg,
            phase
        });
        // If we aren't in a phase, there is nothing else to do.
        if (phase === null) return state;
        // Run any cleanup code for the phase that is about to end.
        const phaseConfig = GetPhase(state.ctx);
        const G = phaseConfig.wrapped.onEnd(state);
        // Reset the phase.
        const ctx = {
            ...state.ctx,
            phase: null
        };
        // Add log entry.
        const action = (0, _turnOrder8Cc4909BJs.g)("endPhase", arg);
        const { _stateID  } = state;
        const logEntry = {
            action,
            _stateID,
            turn,
            phase
        };
        if (automatic) logEntry.automatic = true;
        const deltalog = [
            ...state.deltalog || [],
            logEntry
        ];
        return {
            ...state,
            G,
            ctx,
            deltalog
        };
    }
    function EndTurn(state, { arg , next , turn: initialTurn , force , automatic , playerID  }) {
        // This is not the turn that EndTurn was originally
        // called for. The turn was probably ended some other way.
        if (initialTurn !== state.ctx.turn) return state;
        const { currentPlayer , numMoves , phase , turn  } = state.ctx;
        const phaseConfig = GetPhase(state.ctx);
        // Prevent ending the turn if minMoves haven't been reached.
        const currentPlayerMoves = numMoves || 0;
        if (!force && phaseConfig.turn.minMoves && currentPlayerMoves < phaseConfig.turn.minMoves) {
            (0, _turnOrder8Cc4909BJs.i)(`cannot end turn before making ${phaseConfig.turn.minMoves} moves`);
            return state;
        }
        // Run turn-end triggers.
        const G = phaseConfig.turn.wrapped.onEnd(state);
        if (next) next.push({
            fn: UpdateTurn,
            arg,
            currentPlayer
        });
        // Reset activePlayers.
        let ctx = {
            ...state.ctx,
            activePlayers: null
        };
        // Remove player from playerOrder
        if (arg && arg.remove) {
            playerID = playerID || currentPlayer;
            const playOrder = ctx.playOrder.filter((i)=>i != playerID);
            const playOrderPos = ctx.playOrderPos > playOrder.length - 1 ? 0 : ctx.playOrderPos;
            ctx = {
                ...ctx,
                playOrder,
                playOrderPos
            };
            if (playOrder.length === 0) {
                next.push({
                    fn: EndPhase,
                    turn,
                    phase
                });
                return state;
            }
        }
        // Create log entry.
        const action = (0, _turnOrder8Cc4909BJs.g)("endTurn", arg);
        const { _stateID  } = state;
        const logEntry = {
            action,
            _stateID,
            turn,
            phase
        };
        if (automatic) logEntry.automatic = true;
        const deltalog = [
            ...state.deltalog || [],
            logEntry
        ];
        return {
            ...state,
            G,
            ctx,
            deltalog,
            _undo: [],
            _redo: []
        };
    }
    function EndStage(state, { arg , next , automatic , playerID  }) {
        playerID = playerID || state.ctx.currentPlayer;
        let { ctx , _stateID  } = state;
        let { activePlayers , _activePlayersNumMoves , _activePlayersMinMoves , _activePlayersMaxMoves , phase , turn  } = ctx;
        const playerInStage = activePlayers !== null && playerID in activePlayers;
        const phaseConfig = GetPhase(ctx);
        if (!arg && playerInStage) {
            const stage = phaseConfig.turn.stages[activePlayers[playerID]];
            if (stage && stage.next) arg = stage.next;
        }
        // Checking if arg is a valid stage, even Stage.NULL
        if (next) next.push({
            fn: UpdateStage,
            arg,
            playerID
        });
        // If player isn’t in a stage, there is nothing else to do.
        if (!playerInStage) return state;
        // Prevent ending the stage if minMoves haven't been reached.
        const currentPlayerMoves = _activePlayersNumMoves[playerID] || 0;
        if (_activePlayersMinMoves && _activePlayersMinMoves[playerID] && currentPlayerMoves < _activePlayersMinMoves[playerID]) {
            (0, _turnOrder8Cc4909BJs.i)(`cannot end stage before making ${_activePlayersMinMoves[playerID]} moves`);
            return state;
        }
        // Remove player from activePlayers.
        activePlayers = {
            ...activePlayers
        };
        delete activePlayers[playerID];
        if (_activePlayersMinMoves) {
            // Remove player from _activePlayersMinMoves.
            _activePlayersMinMoves = {
                ..._activePlayersMinMoves
            };
            delete _activePlayersMinMoves[playerID];
        }
        if (_activePlayersMaxMoves) {
            // Remove player from _activePlayersMaxMoves.
            _activePlayersMaxMoves = {
                ..._activePlayersMaxMoves
            };
            delete _activePlayersMaxMoves[playerID];
        }
        ctx = (0, _turnOrder8Cc4909BJs.d)({
            ...ctx,
            activePlayers,
            _activePlayersMinMoves,
            _activePlayersMaxMoves
        });
        // Create log entry.
        const action = (0, _turnOrder8Cc4909BJs.g)("endStage", arg);
        const logEntry = {
            action,
            _stateID,
            turn,
            phase
        };
        if (automatic) logEntry.automatic = true;
        const deltalog = [
            ...state.deltalog || [],
            logEntry
        ];
        return {
            ...state,
            ctx,
            deltalog
        };
    }
    /**
     * Retrieves the relevant move that can be played by playerID.
     *
     * If ctx.activePlayers is set (i.e. one or more players are in some stage),
     * then it attempts to find the move inside the stages config for
     * that turn. If the stage for a player is '', then the player is
     * allowed to make a move (as determined by the phase config), but
     * isn't restricted to a particular set as defined in the stage config.
     *
     * If not, it then looks for the move inside the phase.
     *
     * If it doesn't find the move there, it looks at the global move definition.
     *
     * @param {object} ctx
     * @param {string} name
     * @param {string} playerID
     */ function GetMove(ctx, name, playerID) {
        const phaseConfig = GetPhase(ctx);
        const stages = phaseConfig.turn.stages;
        const { activePlayers  } = ctx;
        if (activePlayers && activePlayers[playerID] !== undefined && activePlayers[playerID] !== (0, _turnOrder8Cc4909BJs.S).NULL && stages[activePlayers[playerID]] !== undefined && stages[activePlayers[playerID]].moves !== undefined) {
            // Check if moves are defined for the player's stage.
            const stage = stages[activePlayers[playerID]];
            const moves1 = stage.moves;
            if (name in moves1) return moves1[name];
        } else if (phaseConfig.moves) {
            // Check if moves are defined for the current phase.
            if (name in phaseConfig.moves) return phaseConfig.moves[name];
        } else if (name in moves) // Check for the move globally.
        return moves[name];
        return null;
    }
    function ProcessMove(state, action) {
        const { playerID , type  } = action;
        const { currentPlayer , activePlayers , _activePlayersMaxMoves  } = state.ctx;
        const move = GetMove(state.ctx, type, playerID);
        const shouldCount = !move || typeof move === "function" || move.noLimit !== true;
        let { numMoves , _activePlayersNumMoves  } = state.ctx;
        if (shouldCount) {
            if (playerID === currentPlayer) numMoves++;
            if (activePlayers) _activePlayersNumMoves[playerID]++;
        }
        state = {
            ...state,
            ctx: {
                ...state.ctx,
                numMoves,
                _activePlayersNumMoves
            }
        };
        if (_activePlayersMaxMoves && _activePlayersNumMoves[playerID] >= _activePlayersMaxMoves[playerID]) state = EndStage(state, {
            playerID,
            automatic: true
        });
        const phaseConfig = GetPhase(state.ctx);
        const G = phaseConfig.turn.wrapped.onMove({
            ...state,
            playerID
        });
        state = {
            ...state,
            G
        };
        const events = [
            {
                fn: OnMove
            }
        ];
        return Process(state, events);
    }
    function SetStageEvent(state, playerID, arg) {
        return Process(state, [
            {
                fn: EndStage,
                arg,
                playerID
            }
        ]);
    }
    function EndStageEvent(state, playerID) {
        return Process(state, [
            {
                fn: EndStage,
                playerID
            }
        ]);
    }
    function SetActivePlayersEvent(state, _playerID, arg) {
        return Process(state, [
            {
                fn: UpdateActivePlayers,
                arg
            }
        ]);
    }
    function SetPhaseEvent(state, _playerID, newPhase) {
        return Process(state, [
            {
                fn: EndPhase,
                phase: state.ctx.phase,
                turn: state.ctx.turn,
                arg: {
                    next: newPhase
                }
            }
        ]);
    }
    function EndPhaseEvent(state) {
        return Process(state, [
            {
                fn: EndPhase,
                phase: state.ctx.phase,
                turn: state.ctx.turn
            }
        ]);
    }
    function EndTurnEvent(state, _playerID, arg) {
        return Process(state, [
            {
                fn: EndTurn,
                turn: state.ctx.turn,
                phase: state.ctx.phase,
                arg
            }
        ]);
    }
    function PassEvent(state, _playerID, arg) {
        return Process(state, [
            {
                fn: EndTurn,
                turn: state.ctx.turn,
                phase: state.ctx.phase,
                force: true,
                arg
            }
        ]);
    }
    function EndGameEvent(state, _playerID, arg) {
        return Process(state, [
            {
                fn: EndGame,
                turn: state.ctx.turn,
                phase: state.ctx.phase,
                arg
            }
        ]);
    }
    const eventHandlers = {
        endStage: EndStageEvent,
        setStage: SetStageEvent,
        endTurn: EndTurnEvent,
        pass: PassEvent,
        endPhase: EndPhaseEvent,
        setPhase: SetPhaseEvent,
        endGame: EndGameEvent,
        setActivePlayers: SetActivePlayersEvent
    };
    const enabledEventNames = [];
    if (events.endTurn !== false) enabledEventNames.push("endTurn");
    if (events.pass !== false) enabledEventNames.push("pass");
    if (events.endPhase !== false) enabledEventNames.push("endPhase");
    if (events.setPhase !== false) enabledEventNames.push("setPhase");
    if (events.endGame !== false) enabledEventNames.push("endGame");
    if (events.setActivePlayers !== false) enabledEventNames.push("setActivePlayers");
    if (events.endStage !== false) enabledEventNames.push("endStage");
    if (events.setStage !== false) enabledEventNames.push("setStage");
    function ProcessEvent(state, action) {
        const { type , playerID , args  } = action.payload;
        if (typeof eventHandlers[type] !== "function") return state;
        return eventHandlers[type](state, playerID, ...Array.isArray(args) ? args : [
            args
        ]);
    }
    function IsPlayerActive(_G, ctx, playerID) {
        if (ctx.activePlayers) return playerID in ctx.activePlayers;
        return ctx.currentPlayer === playerID;
    }
    return {
        ctx: (numPlayers)=>({
                numPlayers,
                turn: 0,
                currentPlayer: "0",
                playOrder: [
                    ...Array.from({
                        length: numPlayers
                    })
                ].map((_, i)=>i + ""),
                playOrderPos: 0,
                phase: startingPhase,
                activePlayers: null
            }),
        init: (state)=>{
            return Process(state, [
                {
                    fn: StartGame
                }
            ]);
        },
        isPlayerActive: IsPlayerActive,
        eventHandlers,
        eventNames: Object.keys(eventHandlers),
        enabledEventNames,
        moveMap,
        moveNames: [
            ...moveNames.values()
        ],
        processMove: ProcessMove,
        processEvent: ProcessEvent,
        getMove: GetMove
    };
}
/*
 * Copyright 2017 The boardgame.io Authors
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */ function IsProcessed(game) {
    return game.processMove !== undefined;
}
/**
 * Helper to generate the game move reducer. The returned
 * reducer has the following signature:
 *
 * (G, action, ctx) => {}
 *
 * You can roll your own if you like, or use any Redux
 * addon to generate such a reducer.
 *
 * The convention used in this framework is to
 * have action.type contain the name of the move, and
 * action.args contain any additional arguments as an
 * Array.
 */ function ProcessGameConfig(game) {
    // The Game() function has already been called on this
    // config object, so just pass it through.
    if (IsProcessed(game)) return game;
    if (game.name === undefined) game.name = "default";
    if (game.deltaState === undefined) game.deltaState = false;
    if (game.disableUndo === undefined) game.disableUndo = false;
    if (game.setup === undefined) game.setup = ()=>({});
    if (game.moves === undefined) game.moves = {};
    if (game.playerView === undefined) game.playerView = ({ G  })=>G;
    if (game.plugins === undefined) game.plugins = [];
    game.plugins.forEach((plugin)=>{
        if (plugin.name === undefined) throw new Error("Plugin missing name attribute");
        if (plugin.name.includes(" ")) throw new Error(plugin.name + ": Plugin name must not include spaces");
    });
    if (game.name.includes(" ")) throw new Error(game.name + ": Game name must not include spaces");
    const flow = Flow(game);
    return {
        ...game,
        flow,
        moveNames: flow.moveNames,
        pluginNames: game.plugins.map((p)=>p.name),
        processMove: (state, action)=>{
            let moveFn = flow.getMove(state.ctx, action.type, action.playerID);
            if (IsLongFormMove(moveFn)) moveFn = moveFn.move;
            if (moveFn instanceof Function) {
                const fn = (0, _turnOrder8Cc4909BJs.F)(moveFn, (0, _turnOrder8Cc4909BJs.G).MOVE, game.plugins);
                let args = [];
                if (action.args !== undefined) args = Array.isArray(action.args) ? action.args : [
                    action.args
                ];
                const context = {
                    ...(0, _turnOrder8Cc4909BJs.a)(state),
                    G: state.G,
                    ctx: state.ctx,
                    playerID: action.playerID
                };
                return fn(context, ...args);
            }
            (0, _turnOrder8Cc4909BJs.e)(`invalid move object: ${action.type}`);
            return state.G;
        }
    };
}
function IsLongFormMove(move) {
    return move instanceof Object && move.move !== undefined;
}
/*
 * Copyright 2017 The boardgame.io Authors
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */ var UpdateErrorType;
(function(UpdateErrorType) {
    // The action’s credentials were missing or invalid
    UpdateErrorType["UnauthorizedAction"] = "update/unauthorized_action";
    // The action’s matchID was not found
    UpdateErrorType["MatchNotFound"] = "update/match_not_found";
    // Could not apply Patch operation (rfc6902).
    UpdateErrorType["PatchFailed"] = "update/patch_failed";
})(UpdateErrorType || (UpdateErrorType = {}));
var ActionErrorType;
(function(ActionErrorType) {
    // The action contained a stale state ID
    ActionErrorType["StaleStateId"] = "action/stale_state_id";
    // The requested move is unknown or not currently available
    ActionErrorType["UnavailableMove"] = "action/unavailable_move";
    // The move declared it was invalid (INVALID_MOVE constant)
    ActionErrorType["InvalidMove"] = "action/invalid_move";
    // The player making the action is not currently active
    ActionErrorType["InactivePlayer"] = "action/inactive_player";
    // The game has finished
    ActionErrorType["GameOver"] = "action/gameover";
    // The requested action is disabled (e.g. undo/redo, events)
    ActionErrorType["ActionDisabled"] = "action/action_disabled";
    // The requested action is not currently possible
    ActionErrorType["ActionInvalid"] = "action/action_invalid";
    // The requested action was declared invalid by a plugin
    ActionErrorType["PluginActionInvalid"] = "action/plugin_invalid";
})(ActionErrorType || (ActionErrorType = {}));
/*
 * Copyright 2017 The boardgame.io Authors
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */ /**
 * Check if the payload for the passed action contains a playerID.
 */ const actionHasPlayerID = (action)=>action.payload.playerID !== null && action.payload.playerID !== undefined;
/**
 * Returns true if a move can be undone.
 */ const CanUndoMove = (G, ctx, move)=>{
    function HasUndoable(move) {
        return move.undoable !== undefined;
    }
    function IsFunction(undoable) {
        return undoable instanceof Function;
    }
    if (!HasUndoable(move)) return true;
    if (IsFunction(move.undoable)) return move.undoable({
        G,
        ctx
    });
    return move.undoable;
};
/**
 * Update the undo and redo stacks for a move or event.
 */ function updateUndoRedoState(state, opts) {
    if (opts.game.disableUndo) return state;
    const undoEntry = {
        G: state.G,
        ctx: state.ctx,
        plugins: state.plugins,
        playerID: opts.action.payload.playerID || state.ctx.currentPlayer
    };
    if (opts.action.type === "MAKE_MOVE") undoEntry.moveType = opts.action.payload.type;
    return {
        ...state,
        _undo: [
            ...state._undo,
            undoEntry
        ],
        // Always reset redo stack when making a move or event
        _redo: []
    };
}
/**
 * Process state, adding the initial deltalog for this action.
 */ function initializeDeltalog(state, action, move) {
    // Create a log entry for this action.
    const logEntry = {
        action,
        _stateID: state._stateID,
        turn: state.ctx.turn,
        phase: state.ctx.phase
    };
    const pluginLogMetadata = state.plugins.log.data.metadata;
    if (pluginLogMetadata !== undefined) logEntry.metadata = pluginLogMetadata;
    if (typeof move === "object" && move.redact === true) logEntry.redact = true;
    else if (typeof move === "object" && move.redact instanceof Function) logEntry.redact = move.redact({
        G: state.G,
        ctx: state.ctx
    });
    return {
        ...state,
        deltalog: [
            logEntry
        ]
    };
}
/**
 * Update plugin state after move/event & check if plugins consider the action to be valid.
 * @param state Current version of state in the reducer.
 * @param oldState State to revert to in case of error.
 * @param pluginOpts Plugin configuration options.
 * @returns Tuple of the new state updated after flushing plugins and the old
 * state augmented with an error if a plugin declared the action invalid.
 */ function flushAndValidatePlugins(state, oldState, pluginOpts) {
    const [newState, isInvalid] = (0, _turnOrder8Cc4909BJs.q)(state, pluginOpts);
    if (!isInvalid) return [
        newState
    ];
    return [
        newState,
        WithError(oldState, ActionErrorType.PluginActionInvalid, isInvalid)
    ];
}
/**
 * ExtractTransientsFromState
 *
 * Split out transients from the a TransientState
 */ function ExtractTransients(transientState) {
    if (!transientState) // We preserve null for the state for legacy callers, but the transient
    // field should be undefined if not present to be consistent with the
    // code path below.
    return [
        null,
        undefined
    ];
    const { transients , ...state } = transientState;
    return [
        state,
        transients
    ];
}
/**
 * WithError
 *
 * Augment a State instance with transient error information.
 */ function WithError(state, errorType, payload) {
    const error = {
        type: errorType,
        payload
    };
    return {
        ...state,
        transients: {
            error
        }
    };
}
/**
 * Middleware for processing TransientState associated with the reducer
 * returned by CreateGameReducer.
 * This should pretty much be used everywhere you want realistic state
 * transitions and error handling.
 */ const TransientHandlingMiddleware = (store)=>(next)=>(action)=>{
            const result = next(action);
            switch(action.type){
                case 0, _turnOrder8Cc4909BJs.p:
                    return result;
                default:
                    {
                        const [, transients] = ExtractTransients(store.getState());
                        if (typeof transients !== "undefined") {
                            store.dispatch((0, _turnOrder8Cc4909BJs.r)());
                            // Dev Note: If parent middleware needs to correlate the spawned
                            // StripTransients action to the triggering action, instrument here.
                            //
                            // This is a bit tricky; for more details, see:
                            //   https://github.com/boardgameio/boardgame.io/pull/940#discussion_r636200648
                            return {
                                ...result,
                                transients
                            };
                        }
                        return result;
                    }
            }
        };
/**
 * CreateGameReducer
 *
 * Creates the main game state reducer.
 */ function CreateGameReducer({ game , isClient  }) {
    game = ProcessGameConfig(game);
    /**
     * GameReducer
     *
     * Redux reducer that maintains the overall game state.
     * @param {object} state - The state before the action.
     * @param {object} action - A Redux action.
     */ return (stateWithTransients = null, action)=>{
        let [state /*, transients */ ] = ExtractTransients(stateWithTransients);
        switch(action.type){
            case 0, _turnOrder8Cc4909BJs.p:
                // This action indicates that transient metadata in the state has been
                // consumed and should now be stripped from the state..
                return state;
            case 0, _turnOrder8Cc4909BJs.o:
                {
                    state = {
                        ...state,
                        deltalog: []
                    };
                    // Process game events only on the server.
                    // These events like `endTurn` typically
                    // contain code that may rely on secret state
                    // and cannot be computed on the client.
                    if (isClient) return state;
                    // Disallow events once the game is over.
                    if (state.ctx.gameover !== undefined) {
                        (0, _turnOrder8Cc4909BJs.e)(`cannot call event after game end`);
                        return WithError(state, ActionErrorType.GameOver);
                    }
                    // Ignore the event if the player isn't active.
                    if (actionHasPlayerID(action) && !game.flow.isPlayerActive(state.G, state.ctx, action.payload.playerID)) {
                        (0, _turnOrder8Cc4909BJs.e)(`disallowed event: ${action.payload.type}`);
                        return WithError(state, ActionErrorType.InactivePlayer);
                    }
                    // Execute plugins.
                    state = (0, _turnOrder8Cc4909BJs.E)(state, {
                        game,
                        isClient: false,
                        playerID: action.payload.playerID
                    });
                    // Process event.
                    let newState = game.flow.processEvent(state, action);
                    // Execute plugins.
                    let stateWithError;
                    [newState, stateWithError] = flushAndValidatePlugins(newState, state, {
                        game,
                        isClient: false
                    });
                    if (stateWithError) return stateWithError;
                    // Update undo / redo state.
                    newState = updateUndoRedoState(newState, {
                        game,
                        action
                    });
                    return {
                        ...newState,
                        _stateID: state._stateID + 1
                    };
                }
            case 0, _turnOrder8Cc4909BJs.M:
                {
                    const oldState = state = {
                        ...state,
                        deltalog: []
                    };
                    // Check whether the move is allowed at this time.
                    const move = game.flow.getMove(state.ctx, action.payload.type, action.payload.playerID || state.ctx.currentPlayer);
                    if (move === null) {
                        (0, _turnOrder8Cc4909BJs.e)(`disallowed move: ${action.payload.type}`);
                        return WithError(state, ActionErrorType.UnavailableMove);
                    }
                    // Don't run move on client if move says so.
                    if (isClient && move.client === false) return state;
                    // Disallow moves once the game is over.
                    if (state.ctx.gameover !== undefined) {
                        (0, _turnOrder8Cc4909BJs.e)(`cannot make move after game end`);
                        return WithError(state, ActionErrorType.GameOver);
                    }
                    // Ignore the move if the player isn't active.
                    if (actionHasPlayerID(action) && !game.flow.isPlayerActive(state.G, state.ctx, action.payload.playerID)) {
                        (0, _turnOrder8Cc4909BJs.e)(`disallowed move: ${action.payload.type}`);
                        return WithError(state, ActionErrorType.InactivePlayer);
                    }
                    // Execute plugins.
                    state = (0, _turnOrder8Cc4909BJs.E)(state, {
                        game,
                        isClient,
                        playerID: action.payload.playerID
                    });
                    // Process the move.
                    const G = game.processMove(state, action.payload);
                    // The game declared the move as invalid.
                    if (G === (0, _turnOrder8Cc4909BJs.n)) {
                        (0, _turnOrder8Cc4909BJs.e)(`invalid move: ${action.payload.type} args: ${action.payload.args}`);
                        // TODO(#723): Marshal a nice error payload with the processed move.
                        return WithError(state, ActionErrorType.InvalidMove);
                    }
                    const newState1 = {
                        ...state,
                        G
                    };
                    // Some plugin indicated that it is not suitable to be
                    // materialized on the client (and must wait for the server
                    // response instead).
                    if (isClient && (0, _turnOrder8Cc4909BJs.N)(newState1, {
                        game
                    })) return state;
                    state = newState1;
                    // If we're on the client, just process the move
                    // and no triggers in multiplayer mode.
                    // These will be processed on the server, which
                    // will send back a state update.
                    if (isClient) {
                        let stateWithError1;
                        [state, stateWithError1] = flushAndValidatePlugins(state, oldState, {
                            game,
                            isClient: true
                        });
                        if (stateWithError1) return stateWithError1;
                        return {
                            ...state,
                            _stateID: state._stateID + 1
                        };
                    }
                    // On the server, construct the deltalog.
                    state = initializeDeltalog(state, action, move);
                    // Allow the flow reducer to process any triggers that happen after moves.
                    state = game.flow.processMove(state, action.payload);
                    let stateWithError2;
                    [state, stateWithError2] = flushAndValidatePlugins(state, oldState, {
                        game
                    });
                    if (stateWithError2) return stateWithError2;
                    // Update undo / redo state.
                    state = updateUndoRedoState(state, {
                        game,
                        action
                    });
                    return {
                        ...state,
                        _stateID: state._stateID + 1
                    };
                }
            case 0, _turnOrder8Cc4909BJs.m:
            case 0, _turnOrder8Cc4909BJs.l:
            case 0, _turnOrder8Cc4909BJs.k:
                return action.state;
            case 0, _turnOrder8Cc4909BJs.j:
                {
                    state = {
                        ...state,
                        deltalog: []
                    };
                    if (game.disableUndo) {
                        (0, _turnOrder8Cc4909BJs.e)("Undo is not enabled");
                        return WithError(state, ActionErrorType.ActionDisabled);
                    }
                    const { G: G1 , ctx , _undo , _redo , _stateID  } = state;
                    if (_undo.length < 2) {
                        (0, _turnOrder8Cc4909BJs.e)(`No moves to undo`);
                        return WithError(state, ActionErrorType.ActionInvalid);
                    }
                    const last = _undo[_undo.length - 1];
                    const restore = _undo[_undo.length - 2];
                    // Only allow players to undo their own moves.
                    if (actionHasPlayerID(action) && action.payload.playerID !== last.playerID) {
                        (0, _turnOrder8Cc4909BJs.e)(`Cannot undo other players' moves`);
                        return WithError(state, ActionErrorType.ActionInvalid);
                    }
                    // If undoing a move, check it is undoable.
                    if (last.moveType) {
                        const lastMove = game.flow.getMove(restore.ctx, last.moveType, last.playerID);
                        if (!CanUndoMove(G1, ctx, lastMove)) {
                            (0, _turnOrder8Cc4909BJs.e)(`Move cannot be undone`);
                            return WithError(state, ActionErrorType.ActionInvalid);
                        }
                    }
                    state = initializeDeltalog(state, action);
                    return {
                        ...state,
                        G: restore.G,
                        ctx: restore.ctx,
                        plugins: restore.plugins,
                        _stateID: _stateID + 1,
                        _undo: _undo.slice(0, -1),
                        _redo: [
                            last,
                            ..._redo
                        ]
                    };
                }
            case 0, _turnOrder8Cc4909BJs.R:
                {
                    state = {
                        ...state,
                        deltalog: []
                    };
                    if (game.disableUndo) {
                        (0, _turnOrder8Cc4909BJs.e)("Redo is not enabled");
                        return WithError(state, ActionErrorType.ActionDisabled);
                    }
                    const { _undo: _undo1 , _redo: _redo1 , _stateID: _stateID1  } = state;
                    if (_redo1.length === 0) {
                        (0, _turnOrder8Cc4909BJs.e)(`No moves to redo`);
                        return WithError(state, ActionErrorType.ActionInvalid);
                    }
                    const first = _redo1[0];
                    // Only allow players to redo their own undos.
                    if (actionHasPlayerID(action) && action.payload.playerID !== first.playerID) {
                        (0, _turnOrder8Cc4909BJs.e)(`Cannot redo other players' moves`);
                        return WithError(state, ActionErrorType.ActionInvalid);
                    }
                    state = initializeDeltalog(state, action);
                    return {
                        ...state,
                        G: first.G,
                        ctx: first.ctx,
                        plugins: first.plugins,
                        _stateID: _stateID1 + 1,
                        _undo: [
                            ..._undo1,
                            first
                        ],
                        _redo: _redo1.slice(1)
                    };
                }
            case 0, _turnOrder8Cc4909BJs.f:
                // TODO(#723): Expose error semantics to plugin processing.
                return (0, _turnOrder8Cc4909BJs.h)(state, action, {
                    game
                });
            case 0, _turnOrder8Cc4909BJs.P:
                {
                    const oldState1 = state;
                    const newState2 = JSON.parse(JSON.stringify(oldState1));
                    const patchError = (0, _rfc6902.applyPatch)(newState2, action.patch);
                    const hasError = patchError.some((entry)=>entry !== null);
                    if (hasError) {
                        (0, _turnOrder8Cc4909BJs.e)(`Patch ${JSON.stringify(action.patch)} apply failed`);
                        return WithError(oldState1, UpdateErrorType.PatchFailed, patchError);
                    } else return newState2;
                }
            default:
                return state;
        }
    };
}

},{"./turn-order-8cc4909b.js":"eWUI2","rfc6902":"kXRIf","@parcel/transformer-js/src/esmodule-helpers.js":"cjuhS"}],"kXRIf":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createTests = exports.createPatch = exports.applyPatch = void 0;
var pointer_1 = require("./pointer");
var patch_1 = require("./patch");
var diff_1 = require("./diff");
/**
Apply a 'application/json-patch+json'-type patch to an object.

`patch` *must* be an array of operations.

> Operation objects MUST have exactly one "op" member, whose value
> indicates the operation to perform.  Its value MUST be one of "add",
> "remove", "replace", "move", "copy", or "test"; other values are
> errors.

This method mutates the target object in-place.

@returns list of results, one for each operation: `null` indicated success,
         otherwise, the result will be an instance of one of the Error classes:
         MissingError, InvalidOperationError, or TestError.
*/ function applyPatch(object, patch) {
    return patch.map(function(operation) {
        return patch_1.apply(object, operation);
    });
}
exports.applyPatch = applyPatch;
function wrapVoidableDiff(diff) {
    function wrappedDiff(input, output, ptr) {
        var custom_patch = diff(input, output, ptr);
        // ensure an array is always returned
        return Array.isArray(custom_patch) ? custom_patch : diff_1.diffAny(input, output, ptr, wrappedDiff);
    }
    return wrappedDiff;
}
/**
Produce a 'application/json-patch+json'-type patch to get from one object to
another.

This does not alter `input` or `output` unless they have a property getter with
side-effects (which is not a good idea anyway).

`diff` is called on each pair of comparable non-primitive nodes in the
`input`/`output` object trees, producing nested patches. Return `undefined`
to fall back to default behaviour.

Returns list of operations to perform on `input` to produce `output`.
*/ function createPatch(input, output, diff) {
    var ptr = new pointer_1.Pointer();
    // a new Pointer gets a default path of [''] if not specified
    return (diff ? wrapVoidableDiff(diff) : diff_1.diffAny)(input, output, ptr);
}
exports.createPatch = createPatch;
/**
Create a test operation based on `input`'s current evaluation of the JSON
Pointer `path`; if such a pointer cannot be resolved, returns undefined.
*/ function createTest(input, path) {
    var endpoint = pointer_1.Pointer.fromJSON(path).evaluate(input);
    if (endpoint !== undefined) return {
        op: "test",
        path: path,
        value: endpoint.value
    };
}
/**
Produce an 'application/json-patch+json'-type list of tests, to verify that
existing values in an object are identical to the those captured at some
checkpoint (whenever this function is called).

This does not alter `input` or `output` unless they have a property getter with
side-effects (which is not a good idea anyway).

Returns list of test operations.
*/ function createTests(input, patch) {
    var tests = new Array();
    patch.filter(diff_1.isDestructive).forEach(function(operation) {
        var pathTest = createTest(input, operation.path);
        if (pathTest) tests.push(pathTest);
        if ("from" in operation) {
            var fromTest = createTest(input, operation.from);
            if (fromTest) tests.push(fromTest);
        }
    });
    return tests;
}
exports.createTests = createTests;

},{"./pointer":"eSEsl","./patch":"gc5OA","./diff":"5yjoB"}],"eSEsl":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Pointer = void 0;
/**
Unescape token part of a JSON Pointer string

`token` should *not* contain any '/' characters.

> Evaluation of each reference token begins by decoding any escaped
> character sequence.  This is performed by first transforming any
> occurrence of the sequence '~1' to '/', and then transforming any
> occurrence of the sequence '~0' to '~'.  By performing the
> substitutions in this order, an implementation avoids the error of
> turning '~01' first into '~1' and then into '/', which would be
> incorrect (the string '~01' correctly becomes '~1' after
> transformation).

Here's my take:

~1 is unescaped with higher priority than ~0 because it is a lower-order escape character.
I say "lower order" because '/' needs escaping due to the JSON Pointer serialization technique.
Whereas, '~' is escaped because escaping '/' uses the '~' character.
*/ function unescape(token) {
    return token.replace(/~1/g, "/").replace(/~0/g, "~");
}
/** Escape token part of a JSON Pointer string

> '~' needs to be encoded as '~0' and '/'
> needs to be encoded as '~1' when these characters appear in a
> reference token.

This is the exact inverse of `unescape()`, so the reverse replacements must take place in reverse order.
*/ function escape(token) {
    return token.replace(/~/g, "~0").replace(/\//g, "~1");
}
/**
JSON Pointer representation
*/ var Pointer = /** @class */ function() {
    function Pointer(tokens) {
        if (tokens === void 0) tokens = [
            ""
        ];
        this.tokens = tokens;
    }
    /**
    `path` *must* be a properly escaped string.
    */ Pointer.fromJSON = function(path) {
        var tokens = path.split("/").map(unescape);
        if (tokens[0] !== "") throw new Error("Invalid JSON Pointer: " + path);
        return new Pointer(tokens);
    };
    Pointer.prototype.toString = function() {
        return this.tokens.map(escape).join("/");
    };
    /**
    Returns an object with 'parent', 'key', and 'value' properties.
    In the special case that this Pointer's path == "",
    this object will be {parent: null, key: '', value: object}.
    Otherwise, parent and key will have the property such that parent[key] == value.
    */ Pointer.prototype.evaluate = function(object) {
        var parent = null;
        var key = "";
        var value = object;
        for(var i = 1, l = this.tokens.length; i < l; i++){
            parent = value;
            key = this.tokens[i];
            if (key == "__proto__" || key == "constructor" || key == "prototype") continue;
            // not sure if this the best way to handle non-existant paths...
            value = (parent || {})[key];
        }
        return {
            parent: parent,
            key: key,
            value: value
        };
    };
    Pointer.prototype.get = function(object) {
        return this.evaluate(object).value;
    };
    Pointer.prototype.set = function(object, value) {
        var cursor = object;
        for(var i = 1, l = this.tokens.length - 1, token = this.tokens[i]; i < l; i++)// not sure if this the best way to handle non-existant paths...
        cursor = (cursor || {})[token];
        if (cursor) cursor[this.tokens[this.tokens.length - 1]] = value;
    };
    Pointer.prototype.push = function(token) {
        // mutable
        this.tokens.push(token);
    };
    /**
    `token` should be a String. It'll be coerced to one anyway.
  
    immutable (shallowly)
    */ Pointer.prototype.add = function(token) {
        var tokens = this.tokens.concat(String(token));
        return new Pointer(tokens);
    };
    return Pointer;
}();
exports.Pointer = Pointer;

},{}],"gc5OA":[function(require,module,exports) {
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.apply = exports.InvalidOperationError = exports.test = exports.copy = exports.move = exports.replace = exports.remove = exports.add = exports.TestError = exports.MissingError = void 0;
var pointer_1 = require("./pointer");
var util_1 = require("./util");
var diff_1 = require("./diff");
var MissingError = /** @class */ function(_super) {
    __extends(MissingError, _super);
    function MissingError(path) {
        var _this = _super.call(this, "Value required at path: " + path) || this;
        _this.path = path;
        _this.name = "MissingError";
        return _this;
    }
    return MissingError;
}(Error);
exports.MissingError = MissingError;
var TestError = /** @class */ function(_super) {
    __extends(TestError, _super);
    function TestError(actual, expected) {
        var _this = _super.call(this, "Test failed: " + actual + " != " + expected) || this;
        _this.actual = actual;
        _this.expected = expected;
        _this.name = "TestError";
        return _this;
    }
    return TestError;
}(Error);
exports.TestError = TestError;
function _add(object, key, value) {
    if (Array.isArray(object)) {
        // `key` must be an index
        if (key == "-") object.push(value);
        else {
            var index = parseInt(key, 10);
            object.splice(index, 0, value);
        }
    } else object[key] = value;
}
function _remove(object, key) {
    if (Array.isArray(object)) {
        // '-' syntax doesn't make sense when removing
        var index = parseInt(key, 10);
        object.splice(index, 1);
    } else // not sure what the proper behavior is when path = ''
    delete object[key];
}
/**
>  o  If the target location specifies an array index, a new value is
>     inserted into the array at the specified index.
>  o  If the target location specifies an object member that does not
>     already exist, a new member is added to the object.
>  o  If the target location specifies an object member that does exist,
>     that member's value is replaced.
*/ function add(object, operation) {
    var endpoint = pointer_1.Pointer.fromJSON(operation.path).evaluate(object);
    // it's not exactly a "MissingError" in the same way that `remove` is -- more like a MissingParent, or something
    if (endpoint.parent === undefined) return new MissingError(operation.path);
    _add(endpoint.parent, endpoint.key, util_1.clone(operation.value));
    return null;
}
exports.add = add;
/**
> The "remove" operation removes the value at the target location.
> The target location MUST exist for the operation to be successful.
*/ function remove(object, operation) {
    // endpoint has parent, key, and value properties
    var endpoint = pointer_1.Pointer.fromJSON(operation.path).evaluate(object);
    if (endpoint.value === undefined) return new MissingError(operation.path);
    // not sure what the proper behavior is when path = ''
    _remove(endpoint.parent, endpoint.key);
    return null;
}
exports.remove = remove;
/**
> The "replace" operation replaces the value at the target location
> with a new value.  The operation object MUST contain a "value" member
> whose content specifies the replacement value.
> The target location MUST exist for the operation to be successful.

> This operation is functionally identical to a "remove" operation for
> a value, followed immediately by an "add" operation at the same
> location with the replacement value.

Even more simply, it's like the add operation with an existence check.
*/ function replace(object, operation) {
    var endpoint = pointer_1.Pointer.fromJSON(operation.path).evaluate(object);
    if (endpoint.parent === null) return new MissingError(operation.path);
    // this existence check treats arrays as a special case
    if (Array.isArray(endpoint.parent)) {
        if (parseInt(endpoint.key, 10) >= endpoint.parent.length) return new MissingError(operation.path);
    } else if (endpoint.value === undefined) return new MissingError(operation.path);
    endpoint.parent[endpoint.key] = operation.value;
    return null;
}
exports.replace = replace;
/**
> The "move" operation removes the value at a specified location and
> adds it to the target location.
> The operation object MUST contain a "from" member, which is a string
> containing a JSON Pointer value that references the location in the
> target document to move the value from.
> This operation is functionally identical to a "remove" operation on
> the "from" location, followed immediately by an "add" operation at
> the target location with the value that was just removed.

> The "from" location MUST NOT be a proper prefix of the "path"
> location; i.e., a location cannot be moved into one of its children.

TODO: throw if the check described in the previous paragraph fails.
*/ function move(object, operation) {
    var from_endpoint = pointer_1.Pointer.fromJSON(operation.from).evaluate(object);
    if (from_endpoint.value === undefined) return new MissingError(operation.from);
    var endpoint = pointer_1.Pointer.fromJSON(operation.path).evaluate(object);
    if (endpoint.parent === undefined) return new MissingError(operation.path);
    _remove(from_endpoint.parent, from_endpoint.key);
    _add(endpoint.parent, endpoint.key, from_endpoint.value);
    return null;
}
exports.move = move;
/**
> The "copy" operation copies the value at a specified location to the
> target location.
> The operation object MUST contain a "from" member, which is a string
> containing a JSON Pointer value that references the location in the
> target document to copy the value from.
> The "from" location MUST exist for the operation to be successful.

> This operation is functionally identical to an "add" operation at the
> target location using the value specified in the "from" member.

Alternatively, it's like 'move' without the 'remove'.
*/ function copy(object, operation) {
    var from_endpoint = pointer_1.Pointer.fromJSON(operation.from).evaluate(object);
    if (from_endpoint.value === undefined) return new MissingError(operation.from);
    var endpoint = pointer_1.Pointer.fromJSON(operation.path).evaluate(object);
    if (endpoint.parent === undefined) return new MissingError(operation.path);
    _add(endpoint.parent, endpoint.key, util_1.clone(from_endpoint.value));
    return null;
}
exports.copy = copy;
/**
> The "test" operation tests that a value at the target location is
> equal to a specified value.
> The operation object MUST contain a "value" member that conveys the
> value to be compared to the target location's value.
> The target location MUST be equal to the "value" value for the
> operation to be considered successful.
*/ function test(object, operation) {
    var endpoint = pointer_1.Pointer.fromJSON(operation.path).evaluate(object);
    // TODO: this diffAny(...).length usage could/should be lazy
    if (diff_1.diffAny(endpoint.value, operation.value, new pointer_1.Pointer()).length) return new TestError(endpoint.value, operation.value);
    return null;
}
exports.test = test;
var InvalidOperationError = /** @class */ function(_super) {
    __extends(InvalidOperationError, _super);
    function InvalidOperationError(operation) {
        var _this = _super.call(this, "Invalid operation: " + operation.op) || this;
        _this.operation = operation;
        _this.name = "InvalidOperationError";
        return _this;
    }
    return InvalidOperationError;
}(Error);
exports.InvalidOperationError = InvalidOperationError;
/**
Switch on `operation.op`, applying the corresponding patch function for each
case to `object`.
*/ function apply(object, operation) {
    // not sure why TypeScript can't infer typesafety of:
    //   {add, remove, replace, move, copy, test}[operation.op](object, operation)
    // (seems like a bug)
    switch(operation.op){
        case "add":
            return add(object, operation);
        case "remove":
            return remove(object, operation);
        case "replace":
            return replace(object, operation);
        case "move":
            return move(object, operation);
        case "copy":
            return copy(object, operation);
        case "test":
            return test(object, operation);
    }
    return new InvalidOperationError(operation);
}
exports.apply = apply;

},{"./pointer":"eSEsl","./util":"fUdnQ","./diff":"5yjoB"}],"fUdnQ":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.clone = exports.objectType = exports.hasOwnProperty = void 0;
exports.hasOwnProperty = Object.prototype.hasOwnProperty;
function objectType(object) {
    if (object === undefined) return "undefined";
    if (object === null) return "null";
    if (Array.isArray(object)) return "array";
    return typeof object;
}
exports.objectType = objectType;
function isNonPrimitive(value) {
    // loose-equality checking for null is faster than strict checking for each of null/undefined/true/false
    // checking null first, then calling typeof, is faster than vice-versa
    return value != null && typeof value == "object";
}
/**
Recursively copy a value.

@param source - should be a JavaScript primitive, Array, Date, or (plain old) Object.
@returns copy of source where every Array and Object have been recursively
         reconstructed from their constituent elements
*/ function clone(source) {
    if (!isNonPrimitive(source)) // short-circuiting is faster than a single return
    return source;
    // x.constructor == Array is the fastest way to check if x is an Array
    if (source.constructor == Array) {
        // construction via imperative for-loop is faster than source.map(arrayVsObject)
        var length_1 = source.length;
        // setting the Array length during construction is faster than just `[]` or `new Array()`
        var arrayTarget = new Array(length_1);
        for(var i = 0; i < length_1; i++)arrayTarget[i] = clone(source[i]);
        return arrayTarget;
    }
    // Date
    if (source.constructor == Date) {
        var dateTarget = new Date(+source);
        return dateTarget;
    }
    // Object
    var objectTarget = {};
    // declaring the variable (with const) inside the loop is faster
    for(var key in source)// hasOwnProperty costs a bit of performance, but it's semantically necessary
    // using a global helper is MUCH faster than calling source.hasOwnProperty(key)
    if (exports.hasOwnProperty.call(source, key)) objectTarget[key] = clone(source[key]);
    return objectTarget;
}
exports.clone = clone;

},{}],"5yjoB":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.diffAny = exports.diffObjects = exports.diffArrays = exports.intersection = exports.subtract = exports.isDestructive = void 0;
var util_1 = require("./util");
function isDestructive(_a) {
    var op = _a.op;
    return op === "remove" || op === "replace" || op === "copy" || op === "move";
}
exports.isDestructive = isDestructive;
/**
List the keys in `minuend` that are not in `subtrahend`.

A key is only considered if it is both 1) an own-property (o.hasOwnProperty(k))
of the object, and 2) has a value that is not undefined. This is to match JSON
semantics, where JSON object serialization drops keys with undefined values.

@param minuend Object of interest
@param subtrahend Object of comparison
@returns Array of keys that are in `minuend` but not in `subtrahend`.
*/ function subtract(minuend, subtrahend) {
    // initialize empty object; we only care about the keys, the values can be anything
    var obj = {};
    // build up obj with all the properties of minuend
    for(var add_key in minuend)if (util_1.hasOwnProperty.call(minuend, add_key) && minuend[add_key] !== undefined) obj[add_key] = 1;
    // now delete all the properties of subtrahend from obj
    // (deleting a missing key has no effect)
    for(var del_key in subtrahend)if (util_1.hasOwnProperty.call(subtrahend, del_key) && subtrahend[del_key] !== undefined) delete obj[del_key];
    // finally, extract whatever keys remain in obj
    return Object.keys(obj);
}
exports.subtract = subtract;
/**
List the keys that shared by all `objects`.

The semantics of what constitutes a "key" is described in {@link subtract}.

@param objects Array of objects to compare
@returns Array of keys that are in ("own-properties" of) every object in `objects`.
*/ function intersection(objects) {
    var length = objects.length;
    // prepare empty counter to keep track of how many objects each key occurred in
    var counter = {};
    // go through each object and increment the counter for each key in that object
    for(var i = 0; i < length; i++){
        var object = objects[i];
        for(var key in object)if (util_1.hasOwnProperty.call(object, key) && object[key] !== undefined) counter[key] = (counter[key] || 0) + 1;
    }
    // now delete all keys from the counter that were not seen in every object
    for(var key in counter)if (counter[key] < length) delete counter[key];
    // finally, extract whatever keys remain in the counter
    return Object.keys(counter);
}
exports.intersection = intersection;
function isArrayAdd(array_operation) {
    return array_operation.op === "add";
}
function isArrayRemove(array_operation) {
    return array_operation.op === "remove";
}
function appendArrayOperation(base, operation) {
    return {
        // the new operation must be pushed on the end
        operations: base.operations.concat(operation),
        cost: base.cost + 1
    };
}
/**
Calculate the shortest sequence of operations to get from `input` to `output`,
using a dynamic programming implementation of the Levenshtein distance algorithm.

To get from the input ABC to the output AZ we could just delete all the input
and say "insert A, insert Z" and be done with it. That's what we do if the
input is empty. But we can be smarter.

          output
               A   Z
               -   -
          [0]  1   2
input A |  1  [0]  1
      B |  2  [1]  1
      C |  3   2  [2]

1) start at 0,0 (+0)
2) keep A (+0)
3) remove B (+1)
4) replace C with Z (+1)

If the `input` (source) is empty, they'll all be in the top row, resulting in an
array of 'add' operations.
If the `output` (target) is empty, everything will be in the left column,
resulting in an array of 'remove' operations.

@returns A list of add/remove/replace operations.
*/ function diffArrays(input, output, ptr, diff) {
    if (diff === void 0) diff = diffAny;
    // set up cost matrix (very simple initialization: just a map)
    var memo = {
        "0,0": {
            operations: [],
            cost: 0
        }
    };
    /**
    Calculate the cheapest sequence of operations required to get from
    input.slice(0, i) to output.slice(0, j).
    There may be other valid sequences with the same cost, but none cheaper.
  
    @param i The row in the layout above
    @param j The column in the layout above
    @returns An object containing a list of operations, along with the total cost
             of applying them (+1 for each add/remove/replace operation)
    */ function dist(i, j) {
        // memoized
        var memo_key = i + "," + j;
        var memoized = memo[memo_key];
        if (memoized === undefined) {
            // TODO: this !diff(...).length usage could/should be lazy
            if (i > 0 && j > 0 && !diff(input[i - 1], output[j - 1], ptr.add(String(i - 1))).length) // equal (no operations => no cost)
            memoized = dist(i - 1, j - 1);
            else {
                var alternatives = [];
                if (i > 0) {
                    // NOT topmost row
                    var remove_base = dist(i - 1, j);
                    var remove_operation = {
                        op: "remove",
                        index: i - 1
                    };
                    alternatives.push(appendArrayOperation(remove_base, remove_operation));
                }
                if (j > 0) {
                    // NOT leftmost column
                    var add_base = dist(i, j - 1);
                    var add_operation = {
                        op: "add",
                        index: i - 1,
                        value: output[j - 1]
                    };
                    alternatives.push(appendArrayOperation(add_base, add_operation));
                }
                if (i > 0 && j > 0) {
                    // TABLE MIDDLE
                    // supposing we replaced it, compute the rest of the costs:
                    var replace_base = dist(i - 1, j - 1);
                    // okay, the general plan is to replace it, but we can be smarter,
                    // recursing into the structure and replacing only part of it if
                    // possible, but to do so we'll need the original value
                    var replace_operation = {
                        op: "replace",
                        index: i - 1,
                        original: input[i - 1],
                        value: output[j - 1]
                    };
                    alternatives.push(appendArrayOperation(replace_base, replace_operation));
                }
                // the only other case, i === 0 && j === 0, has already been memoized
                // the meat of the algorithm:
                // sort by cost to find the lowest one (might be several ties for lowest)
                // [4, 6, 7, 1, 2].sort((a, b) => a - b) -> [ 1, 2, 4, 6, 7 ]
                var best = alternatives.sort(function(a, b) {
                    return a.cost - b.cost;
                })[0];
                memoized = best;
            }
            memo[memo_key] = memoized;
        }
        return memoized;
    }
    // handle weird objects masquerading as Arrays that don't have proper length
    // properties by using 0 for everything but positive numbers
    var input_length = isNaN(input.length) || input.length <= 0 ? 0 : input.length;
    var output_length = isNaN(output.length) || output.length <= 0 ? 0 : output.length;
    var array_operations = dist(input_length, output_length).operations;
    var padded_operations = array_operations.reduce(function(_a, array_operation) {
        var operations = _a[0], padding = _a[1];
        if (isArrayAdd(array_operation)) {
            var padded_index = array_operation.index + 1 + padding;
            var index_token = padded_index < input_length + padding ? String(padded_index) : "-";
            var operation = {
                op: array_operation.op,
                path: ptr.add(index_token).toString(),
                value: array_operation.value
            };
            // padding++ // maybe only if array_operation.index > -1 ?
            return [
                operations.concat(operation),
                padding + 1
            ];
        } else if (isArrayRemove(array_operation)) {
            var operation = {
                op: array_operation.op,
                path: ptr.add(String(array_operation.index + padding)).toString()
            };
            // padding--
            return [
                operations.concat(operation),
                padding - 1
            ];
        } else {
            var replace_ptr = ptr.add(String(array_operation.index + padding));
            var replace_operations = diff(array_operation.original, array_operation.value, replace_ptr);
            return [
                operations.concat.apply(operations, replace_operations),
                padding
            ];
        }
    }, [
        [],
        0
    ])[0];
    return padded_operations;
}
exports.diffArrays = diffArrays;
function diffObjects(input, output, ptr, diff) {
    if (diff === void 0) diff = diffAny;
    // if a key is in input but not output -> remove it
    var operations = [];
    subtract(input, output).forEach(function(key) {
        operations.push({
            op: "remove",
            path: ptr.add(key).toString()
        });
    });
    // if a key is in output but not input -> add it
    subtract(output, input).forEach(function(key) {
        operations.push({
            op: "add",
            path: ptr.add(key).toString(),
            value: output[key]
        });
    });
    // if a key is in both, diff it recursively
    intersection([
        input,
        output
    ]).forEach(function(key) {
        operations.push.apply(operations, diff(input[key], output[key], ptr.add(key)));
    });
    return operations;
}
exports.diffObjects = diffObjects;
/**
`diffAny()` returns an empty array if `input` and `output` are materially equal
(i.e., would produce equivalent JSON); otherwise it produces an array of patches
that would transform `input` into `output`.

> Here, "equal" means that the value at the target location and the
> value conveyed by "value" are of the same JSON type, and that they
> are considered equal by the following rules for that type:
> o  strings: are considered equal if they contain the same number of
>    Unicode characters and their code points are byte-by-byte equal.
> o  numbers: are considered equal if their values are numerically
>    equal.
> o  arrays: are considered equal if they contain the same number of
>    values, and if each value can be considered equal to the value at
>    the corresponding position in the other array, using this list of
>    type-specific rules.
> o  objects: are considered equal if they contain the same number of
>    members, and if each member can be considered equal to a member in
>    the other object, by comparing their keys (as strings) and their
>    values (using this list of type-specific rules).
> o  literals (false, true, and null): are considered equal if they are
>    the same.
*/ function diffAny(input, output, ptr, diff) {
    if (diff === void 0) diff = diffAny;
    // strict equality handles literals, numbers, and strings (a sufficient but not necessary cause)
    if (input === output) return [];
    var input_type = util_1.objectType(input);
    var output_type = util_1.objectType(output);
    if (input_type == "array" && output_type == "array") return diffArrays(input, output, ptr, diff);
    if (input_type == "object" && output_type == "object") return diffObjects(input, output, ptr, diff);
    // at this point we know that input and output are materially different;
    // could be array -> object, object -> array, boolean -> undefined,
    // number -> string, or some other combination, but nothing that can be split
    // up into multiple patches: so `output` must replace `input` wholesale.
    return [
        {
            op: "replace",
            path: ptr.toString(),
            value: output
        }
    ];
}
exports.diffAny = diffAny;

},{"./util":"fUdnQ"}],"aMR0x":[function(require,module,exports) {
/*! (c) 2020 Andrea Giammarchi */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "parse", ()=>parse);
parcelHelpers.export(exports, "stringify", ()=>stringify);
parcelHelpers.export(exports, "toJSON", ()=>toJSON);
parcelHelpers.export(exports, "fromJSON", ()=>fromJSON);
const { parse: $parse , stringify: $stringify  } = JSON;
const { keys  } = Object;
const Primitive = String; // it could be Number
const primitive = "string"; // it could be 'number'
const ignore = {};
const object = "object";
const noop = (_, value)=>value;
const primitives = (value)=>value instanceof Primitive ? Primitive(value) : value;
const Primitives = (_, value)=>typeof value === primitive ? new Primitive(value) : value;
const revive = (input, parsed, output, $)=>{
    const lazy = [];
    for(let ke = keys(output), { length  } = ke, y = 0; y < length; y++){
        const k = ke[y];
        const value = output[k];
        if (value instanceof Primitive) {
            const tmp = input[value];
            if (typeof tmp === object && !parsed.has(tmp)) {
                parsed.add(tmp);
                output[k] = ignore;
                lazy.push({
                    k,
                    a: [
                        input,
                        parsed,
                        tmp,
                        $
                    ]
                });
            } else output[k] = $.call(output, k, tmp);
        } else if (output[k] !== ignore) output[k] = $.call(output, k, value);
    }
    for(let { length: length1  } = lazy, i = 0; i < length1; i++){
        const { k: k1 , a  } = lazy[i];
        output[k1] = $.call(output, k1, revive.apply(null, a));
    }
    return output;
};
const set = (known, input, value)=>{
    const index = Primitive(input.push(value) - 1);
    known.set(value, index);
    return index;
};
const parse = (text, reviver)=>{
    const input = $parse(text, Primitives).map(primitives);
    const value = input[0];
    const $ = reviver || noop;
    const tmp = typeof value === object && value ? revive(input, new Set, value, $) : value;
    return $.call({
        "": tmp
    }, "", tmp);
};
const stringify = (value, replacer, space)=>{
    const $ = replacer && typeof replacer === object ? (k, v)=>k === "" || -1 < replacer.indexOf(k) ? v : void 0 : replacer || noop;
    const known = new Map;
    const input = [];
    const output = [];
    let i = +set(known, input, $.call({
        "": value
    }, "", value));
    let firstRun = !i;
    while(i < input.length){
        firstRun = true;
        output[i] = $stringify(input[i++], replace, space);
    }
    return "[" + output.join(",") + "]";
    function replace(key, value) {
        if (firstRun) {
            firstRun = !firstRun;
            return value;
        }
        const after = $.call(this, key, value);
        switch(typeof after){
            case object:
                if (after === null) return after;
            case primitive:
                return known.get(after) || set(known, input, after);
        }
        return after;
    }
};
const toJSON = (any)=>$parse(stringify(any));
const fromJSON = (any)=>parse($stringify(any));

},{"@parcel/transformer-js/src/esmodule-helpers.js":"cjuhS"}],"1rFTn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "B", ()=>Bot);
parcelHelpers.export(exports, "M", ()=>MCTSBot);
parcelHelpers.export(exports, "R", ()=>RandomBot);
parcelHelpers.export(exports, "S", ()=>Step);
parcelHelpers.export(exports, "a", ()=>Simulate);
var _turnOrder8Cc4909BJs = require("./turn-order-8cc4909b.js");
var _pluginRandom087F861EJs = require("./plugin-random-087f861e.js");
var _reducer24Ea3E4CJs = require("./reducer-24ea3e4c.js");
var _setimmediate = require("setimmediate");
/*
 * Copyright 2018 The boardgame.io Authors
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */ /**
 * Base class that bots can extend.
 */ class Bot {
    constructor({ enumerate , seed  }){
        this.enumerateFn = enumerate;
        this.seed = seed;
        this.iterationCounter = 0;
        this._opts = {};
    }
    addOpt({ key , range , initial  }) {
        this._opts[key] = {
            range,
            value: initial
        };
    }
    getOpt(key) {
        return this._opts[key].value;
    }
    setOpt(key, value) {
        if (key in this._opts) this._opts[key].value = value;
    }
    opts() {
        return this._opts;
    }
    enumerate(G, ctx, playerID) {
        const actions = this.enumerateFn(G, ctx, playerID);
        return actions.map((a)=>{
            if ("payload" in a) return a;
            if ("move" in a) return (0, _turnOrder8Cc4909BJs.B)(a.move, a.args, playerID);
            if ("event" in a) return (0, _turnOrder8Cc4909BJs.g)(a.event, a.args, playerID);
        });
    }
    random(arg) {
        let number;
        if (this.seed !== undefined) {
            const seed = this.prngstate ? "" : this.seed;
            const rand = (0, _pluginRandom087F861EJs.a)(seed, this.prngstate);
            number = rand();
            this.prngstate = rand.state();
        } else number = Math.random();
        if (arg) {
            if (Array.isArray(arg)) {
                const id = Math.floor(number * arg.length);
                return arg[id];
            } else return Math.floor(number * arg);
        }
        return number;
    }
}
/*
 * Copyright 2018 The boardgame.io Authors
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */ /**
 * The number of iterations to run before yielding to
 * the JS event loop (in async mode).
 */ const CHUNK_SIZE = 25;
/**
 * Bot that uses Monte-Carlo Tree Search to find promising moves.
 */ class MCTSBot extends Bot {
    constructor({ enumerate , seed , objectives , game , iterations , playoutDepth , iterationCallback  }){
        super({
            enumerate,
            seed
        });
        if (objectives === undefined) objectives = ()=>({});
        this.objectives = objectives;
        this.iterationCallback = iterationCallback || (()=>{});
        this.reducer = (0, _reducer24Ea3E4CJs.C)({
            game
        });
        this.iterations = iterations;
        this.playoutDepth = playoutDepth;
        this.addOpt({
            key: "async",
            initial: false
        });
        this.addOpt({
            key: "iterations",
            initial: typeof iterations === "number" ? iterations : 1000,
            range: {
                min: 1,
                max: 2000
            }
        });
        this.addOpt({
            key: "playoutDepth",
            initial: typeof playoutDepth === "number" ? playoutDepth : 50,
            range: {
                min: 1,
                max: 100
            }
        });
    }
    createNode({ state , parentAction , parent , playerID  }) {
        const { G , ctx  } = state;
        let actions = [];
        let objectives = [];
        if (playerID !== undefined) {
            actions = this.enumerate(G, ctx, playerID);
            objectives = this.objectives(G, ctx, playerID);
        } else if (ctx.activePlayers) for(const playerID1 in ctx.activePlayers){
            actions.push(...this.enumerate(G, ctx, playerID1));
            objectives.push(this.objectives(G, ctx, playerID1));
        }
        else {
            actions = this.enumerate(G, ctx, ctx.currentPlayer);
            objectives = this.objectives(G, ctx, ctx.currentPlayer);
        }
        return {
            state,
            parent,
            parentAction,
            actions,
            objectives,
            children: [],
            visits: 0,
            value: 0
        };
    }
    select(node) {
        // This node has unvisited children.
        if (node.actions.length > 0) return node;
        // This is a terminal node.
        if (node.children.length === 0) return node;
        let selectedChild = null;
        let best = 0;
        for (const child of node.children){
            const childVisits = child.visits + Number.EPSILON;
            const uct = child.value / childVisits + Math.sqrt(2 * Math.log(node.visits) / childVisits);
            if (selectedChild == null || uct > best) {
                best = uct;
                selectedChild = child;
            }
        }
        return this.select(selectedChild);
    }
    expand(node) {
        const actions = node.actions;
        if (actions.length === 0 || node.state.ctx.gameover !== undefined) return node;
        const id = this.random(actions.length);
        const action = actions[id];
        node.actions.splice(id, 1);
        const childState = this.reducer(node.state, action);
        const childNode = this.createNode({
            state: childState,
            parentAction: action,
            parent: node
        });
        node.children.push(childNode);
        return childNode;
    }
    playout({ state  }) {
        let playoutDepth = this.getOpt("playoutDepth");
        if (typeof this.playoutDepth === "function") playoutDepth = this.playoutDepth(state.G, state.ctx);
        for(let i = 0; i < playoutDepth && state.ctx.gameover === undefined; i++){
            const { G , ctx  } = state;
            let playerID = ctx.currentPlayer;
            if (ctx.activePlayers) playerID = Object.keys(ctx.activePlayers)[0];
            const moves = this.enumerate(G, ctx, playerID);
            // Check if any objectives are met.
            const objectives = this.objectives(G, ctx, playerID);
            const score = Object.keys(objectives).reduce((score, key)=>{
                const objective = objectives[key];
                if (objective.checker(G, ctx)) return score + objective.weight;
                return score;
            }, 0);
            // If so, stop and return the score.
            if (score > 0) return {
                score
            };
            if (!moves || moves.length === 0) return undefined;
            const id = this.random(moves.length);
            const childState = this.reducer(state, moves[id]);
            state = childState;
        }
        return state.ctx.gameover;
    }
    backpropagate(node, result = {}) {
        node.visits++;
        if (result.score !== undefined) node.value += result.score;
        if (result.draw === true) node.value += 0.5;
        if (node.parentAction && result.winner === node.parentAction.payload.playerID) node.value++;
        if (node.parent) this.backpropagate(node.parent, result);
    }
    play(state, playerID) {
        const root = this.createNode({
            state,
            playerID
        });
        let numIterations = this.getOpt("iterations");
        if (typeof this.iterations === "function") numIterations = this.iterations(state.G, state.ctx);
        const getResult = ()=>{
            let selectedChild = null;
            for (const child of root.children)if (selectedChild == null || child.visits > selectedChild.visits) selectedChild = child;
            const action = selectedChild && selectedChild.parentAction;
            const metadata = root;
            return {
                action,
                metadata
            };
        };
        return new Promise((resolve)=>{
            const iteration = ()=>{
                for(let i = 0; i < CHUNK_SIZE && this.iterationCounter < numIterations; i++){
                    const leaf = this.select(root);
                    const child = this.expand(leaf);
                    const result = this.playout(child);
                    this.backpropagate(child, result);
                    this.iterationCounter++;
                }
                this.iterationCallback({
                    iterationCounter: this.iterationCounter,
                    numIterations,
                    metadata: root
                });
            };
            this.iterationCounter = 0;
            if (this.getOpt("async")) {
                const asyncIteration = ()=>{
                    if (this.iterationCounter < numIterations) {
                        iteration();
                        setImmediate(asyncIteration);
                    } else resolve(getResult());
                };
                asyncIteration();
            } else {
                while(this.iterationCounter < numIterations)iteration();
                resolve(getResult());
            }
        });
    }
}
/*
 * Copyright 2018 The boardgame.io Authors
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */ /**
 * Bot that picks a move at random.
 */ class RandomBot extends Bot {
    play({ G , ctx  }, playerID) {
        const moves = this.enumerate(G, ctx, playerID);
        return Promise.resolve({
            action: this.random(moves)
        });
    }
}
/*
 * Copyright 2018 The boardgame.io Authors
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */ /**
 * Make a single move on the client with a bot.
 *
 * @param {...object} client - The game client.
 * @param {...object} bot - The bot.
 */ async function Step(client, bot) {
    const state = client.store.getState();
    let playerID = state.ctx.currentPlayer;
    if (state.ctx.activePlayers) playerID = Object.keys(state.ctx.activePlayers)[0];
    const { action , metadata  } = await bot.play(state, playerID);
    if (action) {
        const a = {
            ...action,
            payload: {
                ...action.payload,
                metadata
            }
        };
        client.store.dispatch(a);
        return a;
    }
}
/**
 * Simulates the game till the end or a max depth.
 *
 * @param {...object} game - The game object.
 * @param {...object} bots - An array of bots.
 * @param {...object} state - The game state to start from.
 */ async function Simulate({ game , bots , state , depth  }) {
    if (depth === undefined) depth = 10000;
    const reducer = (0, _reducer24Ea3E4CJs.C)({
        game
    });
    let metadata = null;
    let iter = 0;
    while(state.ctx.gameover === undefined && iter < depth){
        let playerID = state.ctx.currentPlayer;
        if (state.ctx.activePlayers) playerID = Object.keys(state.ctx.activePlayers)[0];
        const bot = bots instanceof Bot ? bots : bots[playerID];
        const t = await bot.play(state, playerID);
        if (!t.action) break;
        metadata = t.metadata;
        state = reducer(state, t.action);
        iter++;
    }
    return {
        state,
        metadata
    };
}

},{"./turn-order-8cc4909b.js":"eWUI2","./plugin-random-087f861e.js":"lhxqo","./reducer-24ea3e4c.js":"b7fst","setimmediate":"g4k8b","@parcel/transformer-js/src/esmodule-helpers.js":"cjuhS"}],"g4k8b":[function(require,module,exports) {
var process = require("process");
var global = arguments[3];
(function(global, undefined) {
    "use strict";
    if (global.setImmediate) return;
    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;
    function setImmediate(callback) {
        // Callback can either be a function or a string
        if (typeof callback !== "function") callback = new Function("" + callback);
        // Copy function arguments
        var args = new Array(arguments.length - 1);
        for(var i = 0; i < args.length; i++)args[i] = arguments[i + 1];
        // Store and register the task
        var task = {
            callback: callback,
            args: args
        };
        tasksByHandle[nextHandle] = task;
        registerImmediate(nextHandle);
        return nextHandle++;
    }
    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }
    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch(args.length){
            case 0:
                callback();
                break;
            case 1:
                callback(args[0]);
                break;
            case 2:
                callback(args[0], args[1]);
                break;
            case 3:
                callback(args[0], args[1], args[2]);
                break;
            default:
                callback.apply(undefined, args);
                break;
        }
    }
    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
        // "too much recursion" error.
        setTimeout(runIfPresent, 0, handle);
        else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally{
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }
    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function() {
                runIfPresent(handle);
            });
        };
    }
    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }
    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages
        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global && typeof event.data === "string" && event.data.indexOf(messagePrefix) === 0) runIfPresent(+event.data.slice(messagePrefix.length));
        };
        if (global.addEventListener) global.addEventListener("message", onGlobalMessage, false);
        else global.attachEvent("onmessage", onGlobalMessage);
        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }
    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };
        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }
    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function() {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }
    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }
    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;
    // Don't get fooled by e.g. browserify environments.
    if (({}).toString.call(global.process) === "[object process]") // For Node.js before 0.9
    installNextTickImplementation();
    else if (canUsePostMessage()) // For non-IE10 modern browsers
    installPostMessageImplementation();
    else if (global.MessageChannel) // For web workers, where supported
    installMessageChannelImplementation();
    else if (doc && "onreadystatechange" in doc.createElement("script")) // For IE 6–8
    installReadyStateChangeImplementation();
    else // For older browsers
    installSetTimeoutImplementation();
    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
})(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self);

},{"process":"d5jf4"}],"d5jf4":[function(require,module,exports) {
// shim for using process in browser
var process = module.exports = {};
// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.
var cachedSetTimeout;
var cachedClearTimeout;
function defaultSetTimout() {
    throw new Error("setTimeout has not been defined");
}
function defaultClearTimeout() {
    throw new Error("clearTimeout has not been defined");
}
(function() {
    try {
        if (typeof setTimeout === "function") cachedSetTimeout = setTimeout;
        else cachedSetTimeout = defaultSetTimout;
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === "function") cachedClearTimeout = clearTimeout;
        else cachedClearTimeout = defaultClearTimeout;
    } catch (e1) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) //normal enviroments in sane situations
    return setTimeout(fun, 0);
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e1) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) //normal enviroments in sane situations
    return clearTimeout(marker);
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e1) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;
function cleanUpNextTick() {
    if (!draining || !currentQueue) return;
    draining = false;
    if (currentQueue.length) queue = currentQueue.concat(queue);
    else queueIndex = -1;
    if (queue.length) drainQueue();
}
function drainQueue() {
    if (draining) return;
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;
    var len = queue.length;
    while(len){
        currentQueue = queue;
        queue = [];
        while(++queueIndex < len)if (currentQueue) currentQueue[queueIndex].run();
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}
process.nextTick = function(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) for(var i = 1; i < arguments.length; i++)args[i - 1] = arguments[i];
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) runTimeout(drainQueue);
};
// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function() {
    this.fun.apply(null, this.array);
};
process.title = "browser";
process.browser = true;
process.env = {};
process.argv = [];
process.version = ""; // empty string to avoid regexp issues
process.versions = {};
function noop() {}
process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;
process.listeners = function(name) {
    return [];
};
process.binding = function(name) {
    throw new Error("process.binding is not supported");
};
process.cwd = function() {
    return "/";
};
process.chdir = function(dir) {
    throw new Error("process.chdir is not supported");
};
process.umask = function() {
    return 0;
};

},{}],"cDNB3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "__DO_NOT_USE__ActionTypes", ()=>ActionTypes);
parcelHelpers.export(exports, "applyMiddleware", ()=>applyMiddleware);
parcelHelpers.export(exports, "bindActionCreators", ()=>bindActionCreators);
parcelHelpers.export(exports, "combineReducers", ()=>combineReducers);
parcelHelpers.export(exports, "compose", ()=>compose);
parcelHelpers.export(exports, "createStore", ()=>createStore);
parcelHelpers.export(exports, "legacy_createStore", ()=>legacy_createStore);
var _objectSpread2 = require("@babel/runtime/helpers/esm/objectSpread2");
var _objectSpread2Default = parcelHelpers.interopDefault(_objectSpread2);
/**
 * Adapted from React: https://github.com/facebook/react/blob/master/packages/shared/formatProdErrorMessage.js
 *
 * Do not require this module directly! Use normal throw error calls. These messages will be replaced with error codes
 * during build.
 * @param {number} code
 */ function formatProdErrorMessage(code) {
    return "Minified Redux error #" + code + "; visit https://redux.js.org/Errors?code=" + code + " for the full message or " + "use the non-minified dev environment for full errors. ";
}
// Inlined version of the `symbol-observable` polyfill
var $$observable = function() {
    return typeof Symbol === "function" && Symbol.observable || "@@observable";
}();
/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */ var randomString = function randomString() {
    return Math.random().toString(36).substring(7).split("").join(".");
};
var ActionTypes = {
    INIT: "@@redux/INIT" + randomString(),
    REPLACE: "@@redux/REPLACE" + randomString(),
    PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
        return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
    }
};
/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */ function isPlainObject(obj) {
    if (typeof obj !== "object" || obj === null) return false;
    var proto = obj;
    while(Object.getPrototypeOf(proto) !== null)proto = Object.getPrototypeOf(proto);
    return Object.getPrototypeOf(obj) === proto;
}
// Inlined / shortened version of `kindOf` from https://github.com/jonschlinkert/kind-of
function miniKindOf(val) {
    if (val === void 0) return "undefined";
    if (val === null) return "null";
    var type = typeof val;
    switch(type){
        case "boolean":
        case "string":
        case "number":
        case "symbol":
        case "function":
            return type;
    }
    if (Array.isArray(val)) return "array";
    if (isDate(val)) return "date";
    if (isError(val)) return "error";
    var constructorName = ctorName(val);
    switch(constructorName){
        case "Symbol":
        case "Promise":
        case "WeakMap":
        case "WeakSet":
        case "Map":
        case "Set":
            return constructorName;
    } // other
    return type.slice(8, -1).toLowerCase().replace(/\s/g, "");
}
function ctorName(val) {
    return typeof val.constructor === "function" ? val.constructor.name : null;
}
function isError(val) {
    return val instanceof Error || typeof val.message === "string" && val.constructor && typeof val.constructor.stackTraceLimit === "number";
}
function isDate(val) {
    if (val instanceof Date) return true;
    return typeof val.toDateString === "function" && typeof val.getDate === "function" && typeof val.setDate === "function";
}
function kindOf(val) {
    var typeOfVal = typeof val;
    typeOfVal = miniKindOf(val);
    return typeOfVal;
}
/**
 * @deprecated
 *
 * **We recommend using the `configureStore` method
 * of the `@reduxjs/toolkit` package**, which replaces `createStore`.
 *
 * Redux Toolkit is our recommended approach for writing Redux logic today,
 * including store setup, reducers, data fetching, and more.
 *
 * **For more details, please read this Redux docs page:**
 * **https://redux.js.org/introduction/why-rtk-is-redux-today**
 *
 * `configureStore` from Redux Toolkit is an improved version of `createStore` that
 * simplifies setup and helps avoid common bugs.
 *
 * You should not be using the `redux` core package by itself today, except for learning purposes.
 * The `createStore` method from the core `redux` package will not be removed, but we encourage
 * all users to migrate to using Redux Toolkit for all Redux code.
 *
 * If you want to use `createStore` without this visual deprecation warning, use
 * the `legacy_createStore` import instead:
 *
 * `import { legacy_createStore as createStore} from 'redux'`
 *
 */ function createStore(reducer, preloadedState, enhancer) {
    var _ref2;
    if (typeof preloadedState === "function" && typeof enhancer === "function" || typeof enhancer === "function" && typeof arguments[3] === "function") throw new Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.");
    if (typeof preloadedState === "function" && typeof enhancer === "undefined") {
        enhancer = preloadedState;
        preloadedState = undefined;
    }
    if (typeof enhancer !== "undefined") {
        if (typeof enhancer !== "function") throw new Error("Expected the enhancer to be a function. Instead, received: '" + kindOf(enhancer) + "'");
        return enhancer(createStore)(reducer, preloadedState);
    }
    if (typeof reducer !== "function") throw new Error("Expected the root reducer to be a function. Instead, received: '" + kindOf(reducer) + "'");
    var currentReducer = reducer;
    var currentState = preloadedState;
    var currentListeners = [];
    var nextListeners = currentListeners;
    var isDispatching = false;
    /**
   * This makes a shallow copy of currentListeners so we can use
   * nextListeners as a temporary list while dispatching.
   *
   * This prevents any bugs around consumers calling
   * subscribe/unsubscribe in the middle of a dispatch.
   */ function ensureCanMutateNextListeners() {
        if (nextListeners === currentListeners) nextListeners = currentListeners.slice();
    }
    /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */ function getState() {
        if (isDispatching) throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
        return currentState;
    }
    /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */ function subscribe(listener) {
        if (typeof listener !== "function") throw new Error("Expected the listener to be a function. Instead, received: '" + kindOf(listener) + "'");
        if (isDispatching) throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api/store#subscribelistener for more details.");
        var isSubscribed = true;
        ensureCanMutateNextListeners();
        nextListeners.push(listener);
        return function unsubscribe() {
            if (!isSubscribed) return;
            if (isDispatching) throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api/store#subscribelistener for more details.");
            isSubscribed = false;
            ensureCanMutateNextListeners();
            var index = nextListeners.indexOf(listener);
            nextListeners.splice(index, 1);
            currentListeners = null;
        };
    }
    /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */ function dispatch(action) {
        if (!isPlainObject(action)) throw new Error("Actions must be plain objects. Instead, the actual type was: '" + kindOf(action) + "'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.");
        if (typeof action.type === "undefined") throw new Error('Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
        if (isDispatching) throw new Error("Reducers may not dispatch actions.");
        try {
            isDispatching = true;
            currentState = currentReducer(currentState, action);
        } finally{
            isDispatching = false;
        }
        var listeners = currentListeners = nextListeners;
        for(var i = 0; i < listeners.length; i++){
            var listener = listeners[i];
            listener();
        }
        return action;
    }
    /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */ function replaceReducer(nextReducer) {
        if (typeof nextReducer !== "function") throw new Error("Expected the nextReducer to be a function. Instead, received: '" + kindOf(nextReducer));
        currentReducer = nextReducer; // This action has a similiar effect to ActionTypes.INIT.
        // Any reducers that existed in both the new and old rootReducer
        // will receive the previous state. This effectively populates
        // the new state tree with any relevant data from the old one.
        dispatch({
            type: ActionTypes.REPLACE
        });
    }
    /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/tc39/proposal-observable
   */ function observable() {
        var _ref;
        var outerSubscribe = subscribe;
        return _ref = {
            /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */ subscribe: function subscribe(observer) {
                if (typeof observer !== "object" || observer === null) throw new Error("Expected the observer to be an object. Instead, received: '" + kindOf(observer) + "'");
                function observeState() {
                    if (observer.next) observer.next(getState());
                }
                observeState();
                var unsubscribe = outerSubscribe(observeState);
                return {
                    unsubscribe: unsubscribe
                };
            }
        }, _ref[$$observable] = function() {
            return this;
        }, _ref;
    } // When a store is created, an "INIT" action is dispatched so that every
    // reducer returns their initial state. This effectively populates
    // the initial state tree.
    dispatch({
        type: ActionTypes.INIT
    });
    return _ref2 = {
        dispatch: dispatch,
        subscribe: subscribe,
        getState: getState,
        replaceReducer: replaceReducer
    }, _ref2[$$observable] = observable, _ref2;
}
/**
 * Creates a Redux store that holds the state tree.
 *
 * **We recommend using `configureStore` from the
 * `@reduxjs/toolkit` package**, which replaces `createStore`:
 * **https://redux.js.org/introduction/why-rtk-is-redux-today**
 *
 * The only way to change the data in the store is to call `dispatch()` on it.
 *
 * There should only be a single store in your app. To specify how different
 * parts of the state tree respond to actions, you may combine several reducers
 * into a single reducer function by using `combineReducers`.
 *
 * @param {Function} reducer A function that returns the next state tree, given
 * the current state tree and the action to handle.
 *
 * @param {any} [preloadedState] The initial state. You may optionally specify it
 * to hydrate the state from the server in universal apps, or to restore a
 * previously serialized user session.
 * If you use `combineReducers` to produce the root reducer function, this must be
 * an object with the same shape as `combineReducers` keys.
 *
 * @param {Function} [enhancer] The store enhancer. You may optionally specify it
 * to enhance the store with third-party capabilities such as middleware,
 * time travel, persistence, etc. The only store enhancer that ships with Redux
 * is `applyMiddleware()`.
 *
 * @returns {Store} A Redux store that lets you read the state, dispatch actions
 * and subscribe to changes.
 */ var legacy_createStore = createStore;
/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */ function warning(message) {
    /* eslint-disable no-console */ if (typeof console !== "undefined" && typeof console.error === "function") console.error(message);
    /* eslint-enable no-console */ try {
        // This error was thrown as a convenience so that if you enable
        // "break on all exceptions" in your console,
        // it would pause the execution at this line.
        throw new Error(message);
    } catch (e) {} // eslint-disable-line no-empty
}
function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
    var reducerKeys = Object.keys(reducers);
    var argumentName = action && action.type === ActionTypes.INIT ? "preloadedState argument passed to createStore" : "previous state received by the reducer";
    if (reducerKeys.length === 0) return "Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.";
    if (!isPlainObject(inputState)) return "The " + argumentName + ' has unexpected type of "' + kindOf(inputState) + '". Expected argument to be an object with the following ' + ('keys: "' + reducerKeys.join('", "') + '"');
    var unexpectedKeys = Object.keys(inputState).filter(function(key) {
        return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
    });
    unexpectedKeys.forEach(function(key) {
        unexpectedKeyCache[key] = true;
    });
    if (action && action.type === ActionTypes.REPLACE) return;
    if (unexpectedKeys.length > 0) return "Unexpected " + (unexpectedKeys.length > 1 ? "keys" : "key") + " " + ('"' + unexpectedKeys.join('", "') + '" found in ' + argumentName + ". ") + "Expected to find one of the known reducer keys instead: " + ('"' + reducerKeys.join('", "') + '". Unexpected keys will be ignored.');
}
function assertReducerShape(reducers) {
    Object.keys(reducers).forEach(function(key) {
        var reducer = reducers[key];
        var initialState = reducer(undefined, {
            type: ActionTypes.INIT
        });
        if (typeof initialState === "undefined") throw new Error('The slice reducer for key "' + key + '" returned undefined during initialization. ' + "If the state passed to the reducer is undefined, you must " + "explicitly return the initial state. The initial state may " + "not be undefined. If you don't want to set a value for this reducer, " + "you can use null instead of undefined.");
        if (typeof reducer(undefined, {
            type: ActionTypes.PROBE_UNKNOWN_ACTION()
        }) === "undefined") throw new Error('The slice reducer for key "' + key + '" returned undefined when probed with a random type. ' + ("Don't try to handle '" + ActionTypes.INIT + '\' or other actions in "redux/*" ') + "namespace. They are considered private. Instead, you must return the " + "current state for any unknown actions, unless it is undefined, " + "in which case you must return the initial state, regardless of the " + "action type. The initial state may not be undefined, but can be null.");
    });
}
/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */ function combineReducers(reducers) {
    var reducerKeys = Object.keys(reducers);
    var finalReducers = {};
    for(var i = 0; i < reducerKeys.length; i++){
        var key = reducerKeys[i];
        if (typeof reducers[key] === "undefined") warning('No reducer provided for key "' + key + '"');
        if (typeof reducers[key] === "function") finalReducers[key] = reducers[key];
    }
    var finalReducerKeys = Object.keys(finalReducers); // This is used to make sure we don't warn about the same
    // keys multiple times.
    var unexpectedKeyCache;
    unexpectedKeyCache = {};
    var shapeAssertionError;
    try {
        assertReducerShape(finalReducers);
    } catch (e) {
        shapeAssertionError = e;
    }
    return function combination(state, action) {
        if (state === void 0) state = {};
        if (shapeAssertionError) throw shapeAssertionError;
        var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);
        if (warningMessage) warning(warningMessage);
        var hasChanged = false;
        var nextState = {};
        for(var _i = 0; _i < finalReducerKeys.length; _i++){
            var _key = finalReducerKeys[_i];
            var reducer = finalReducers[_key];
            var previousStateForKey = state[_key];
            var nextStateForKey = reducer(previousStateForKey, action);
            if (typeof nextStateForKey === "undefined") {
                var actionType = action && action.type;
                throw new Error("When called with an action of type " + (actionType ? '"' + String(actionType) + '"' : "(unknown type)") + ', the slice reducer for key "' + _key + '" returned undefined. ' + "To ignore an action, you must explicitly return the previous state. " + "If you want this reducer to hold no value, you can return null instead of undefined.");
            }
            nextState[_key] = nextStateForKey;
            hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
        }
        hasChanged = hasChanged || finalReducerKeys.length !== Object.keys(state).length;
        return hasChanged ? nextState : state;
    };
}
function bindActionCreator(actionCreator, dispatch) {
    return function() {
        return dispatch(actionCreator.apply(this, arguments));
    };
}
/**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass an action creator as the first argument,
 * and get a dispatch wrapped function in return.
 *
 * @param {Function|Object} actionCreators An object whose values are action
 * creator functions. One handy way to obtain it is to use ES6 `import * as`
 * syntax. You may also pass a single function.
 *
 * @param {Function} dispatch The `dispatch` function available on your Redux
 * store.
 *
 * @returns {Function|Object} The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */ function bindActionCreators(actionCreators, dispatch) {
    if (typeof actionCreators === "function") return bindActionCreator(actionCreators, dispatch);
    if (typeof actionCreators !== "object" || actionCreators === null) throw new Error("bindActionCreators expected an object or a function, but instead received: '" + kindOf(actionCreators) + "'. " + 'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
    var boundActionCreators = {};
    for(var key in actionCreators){
        var actionCreator = actionCreators[key];
        if (typeof actionCreator === "function") boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
    return boundActionCreators;
}
/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */ function compose() {
    for(var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++)funcs[_key] = arguments[_key];
    if (funcs.length === 0) return function(arg) {
        return arg;
    };
    if (funcs.length === 1) return funcs[0];
    return funcs.reduce(function(a, b) {
        return function() {
            return a(b.apply(void 0, arguments));
        };
    });
}
/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */ function applyMiddleware() {
    for(var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++)middlewares[_key] = arguments[_key];
    return function(createStore) {
        return function() {
            var store = createStore.apply(void 0, arguments);
            var _dispatch = function dispatch() {
                throw new Error("Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.");
            };
            var middlewareAPI = {
                getState: store.getState,
                dispatch: function dispatch() {
                    return _dispatch.apply(void 0, arguments);
                }
            };
            var chain = middlewares.map(function(middleware) {
                return middleware(middlewareAPI);
            });
            _dispatch = compose.apply(void 0, chain)(store.dispatch);
            return (0, _objectSpread2Default.default)((0, _objectSpread2Default.default)({}, store), {}, {
                dispatch: _dispatch
            });
        };
    };
}
/*
 * This is a dummy function to check if the function name has been altered by minification.
 * If the function has been minified and NODE_ENV !== 'production', warn the user.
 */ function isCrushed() {}
if (typeof isCrushed.name === "string" && isCrushed.name !== "isCrushed") warning('You are currently using minified code outside of NODE_ENV === "production". This means that you are running a slower development build of Redux. You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify or setting mode to production in webpack (https://webpack.js.org/concepts/mode/) to ensure you have the correct code for your production build.');

},{"@babel/runtime/helpers/esm/objectSpread2":"bS0uk","@parcel/transformer-js/src/esmodule-helpers.js":"cjuhS"}],"bS0uk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _definePropertyJs = require("./defineProperty.js");
var _definePropertyJsDefault = parcelHelpers.interopDefault(_definePropertyJs);
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread2(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? ownKeys(Object(source), !0).forEach(function(key) {
            (0, _definePropertyJsDefault.default)(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
exports.default = _objectSpread2;

},{"./defineProperty.js":"hbmCA","@parcel/transformer-js/src/esmodule-helpers.js":"cjuhS"}],"hbmCA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _toPropertyKeyJs = require("./toPropertyKey.js");
var _toPropertyKeyJsDefault = parcelHelpers.interopDefault(_toPropertyKeyJs);
function _defineProperty(obj, key, value) {
    key = (0, _toPropertyKeyJsDefault.default)(key);
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
exports.default = _defineProperty;

},{"./toPropertyKey.js":"cviYI","@parcel/transformer-js/src/esmodule-helpers.js":"cjuhS"}],"cviYI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _typeofJs = require("./typeof.js");
var _typeofJsDefault = parcelHelpers.interopDefault(_typeofJs);
var _toPrimitiveJs = require("./toPrimitive.js");
var _toPrimitiveJsDefault = parcelHelpers.interopDefault(_toPrimitiveJs);
function _toPropertyKey(arg) {
    var key = (0, _toPrimitiveJsDefault.default)(arg, "string");
    return (0, _typeofJsDefault.default)(key) === "symbol" ? key : String(key);
}
exports.default = _toPropertyKey;

},{"./typeof.js":"i7HWY","./toPrimitive.js":"497Dv","@parcel/transformer-js/src/esmodule-helpers.js":"cjuhS"}],"i7HWY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _typeof(obj) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
}
exports.default = _typeof;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"cjuhS"}],"497Dv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _typeofJs = require("./typeof.js");
var _typeofJsDefault = parcelHelpers.interopDefault(_typeofJs);
function _toPrimitive(input, hint) {
    if ((0, _typeofJsDefault.default)(input) !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
        var res = prim.call(input, hint || "default");
        if ((0, _typeofJsDefault.default)(res) !== "object") return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
}
exports.default = _toPrimitive;

},{"./typeof.js":"i7HWY","@parcel/transformer-js/src/esmodule-helpers.js":"cjuhS"}],"3IrVq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "I", ()=>InitializeGame);
var _turnOrder8Cc4909BJs = require("./turn-order-8cc4909b.js");
var _reducer24Ea3E4CJs = require("./reducer-24ea3e4c.js");
/*
 * Copyright 2020 The boardgame.io Authors
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */ /**
 * Creates the initial game state.
 */ function InitializeGame({ game , numPlayers , setupData  }) {
    game = (0, _reducer24Ea3E4CJs.P)(game);
    if (!numPlayers) numPlayers = 2;
    const ctx = game.flow.ctx(numPlayers);
    let state = {
        // User managed state.
        G: {},
        // Framework managed state.
        ctx,
        // Plugin related state.
        plugins: {}
    };
    // Run plugins over initial state.
    state = (0, _turnOrder8Cc4909BJs.t)(state, {
        game
    });
    state = (0, _turnOrder8Cc4909BJs.E)(state, {
        game,
        playerID: undefined
    });
    const pluginAPIs = (0, _turnOrder8Cc4909BJs.a)(state);
    state.G = game.setup({
        ...pluginAPIs,
        ctx: state.ctx
    }, setupData);
    let initial = {
        ...state,
        // List of {G, ctx} pairs that can be undone.
        _undo: [],
        // List of {G, ctx} pairs that can be redone.
        _redo: [],
        // A monotonically non-decreasing ID to ensure that
        // state updates are only allowed from clients that
        // are at the same version that the server.
        _stateID: 0
    };
    initial = game.flow.init(initial);
    [initial] = (0, _turnOrder8Cc4909BJs.q)(initial, {
        game
    });
    // Initialize undo stack.
    if (!game.disableUndo) initial._undo = [
        {
            G: initial.G,
            ctx: initial.ctx,
            plugins: initial.plugins
        }
    ];
    return initial;
}

},{"./turn-order-8cc4909b.js":"eWUI2","./reducer-24ea3e4c.js":"b7fst","@parcel/transformer-js/src/esmodule-helpers.js":"cjuhS"}],"6VfRJ":[function(require,module,exports) {
/*
 * Copyright 2017 The boardgame.io Authors
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "T", ()=>Transport);
class Transport {
    constructor({ transportDataCallback , gameName , playerID , matchID , credentials , numPlayers  }){
        /** Callback to let the client know when the connection status has changed. */ this.connectionStatusCallback = ()=>{};
        this.isConnected = false;
        this.transportDataCallback = transportDataCallback;
        this.gameName = gameName || "default";
        this.playerID = playerID || null;
        this.matchID = matchID || "default";
        this.credentials = credentials;
        this.numPlayers = numPlayers || 2;
    }
    /** Subscribe to connection state changes. */ subscribeToConnectionStatus(fn) {
        this.connectionStatusCallback = fn;
    }
    /** Transport implementations should call this when they connect/disconnect. */ setConnectionStatus(isConnected) {
        this.isConnected = isConnected;
        this.connectionStatusCallback();
    }
    /** Transport implementations should call this when they receive data from a master. */ notifyClient(data) {
        this.transportDataCallback(data);
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"cjuhS"}],"1RcJa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "C", ()=>Client);
var _nonSecure = require("nanoid/non-secure");
var _debug8242C26EJs = require("./Debug-8242c26e.js");
var _redux = require("redux");
var _turnOrder8Cc4909BJs = require("./turn-order-8cc4909b.js");
var _reducer24Ea3E4CJs = require("./reducer-24ea3e4c.js");
var _initialize7316768FJs = require("./initialize-7316768f.js");
var _transportCe07B771Js = require("./transport-ce07b771.js");
/**
 * This class doesn’t do anything, but simplifies the client class by providing
 * dummy functions to call, so we don’t need to mock them in the client.
 */ class DummyImpl extends (0, _transportCe07B771Js.T) {
    connect() {}
    disconnect() {}
    sendAction() {}
    sendChatMessage() {}
    requestSync() {}
    updateCredentials() {}
    updateMatchID() {}
    updatePlayerID() {}
}
const DummyTransport = (opts)=>new DummyImpl(opts);
/**
 * Class to manage boardgame.io clients and limit debug panel rendering.
 */ class ClientManager {
    constructor(){
        this.debugPanel = null;
        this.currentClient = null;
        this.clients = new Map();
        this.subscribers = new Map();
    }
    /**
     * Register a client with the client manager.
     */ register(client) {
        // Add client to clients map.
        this.clients.set(client, client);
        // Mount debug for this client (no-op if another debug is already mounted).
        this.mountDebug(client);
        this.notifySubscribers();
    }
    /**
     * Unregister a client from the client manager.
     */ unregister(client) {
        // Remove client from clients map.
        this.clients.delete(client);
        if (this.currentClient === client) {
            // If the removed client owned the debug panel, unmount it.
            this.unmountDebug();
            // Mount debug panel for next available client.
            for (const [client1] of this.clients){
                if (this.debugPanel) break;
                this.mountDebug(client1);
            }
        }
        this.notifySubscribers();
    }
    /**
     * Subscribe to the client manager state.
     * Calls the passed callback each time the current client changes or a client
     * registers/unregisters.
     * Returns a function to unsubscribe from the state updates.
     */ subscribe(callback) {
        const id = Symbol();
        this.subscribers.set(id, callback);
        callback(this.getState());
        return ()=>{
            this.subscribers.delete(id);
        };
    }
    /**
     * Switch to a client with a matching playerID.
     */ switchPlayerID(playerID) {
        // For multiplayer clients, try switching control to a different client
        // that is using the same transport layer.
        if (this.currentClient.multiplayer) {
            for (const [client] of this.clients)if (client.playerID === playerID && client.debugOpt !== false && client.multiplayer === this.currentClient.multiplayer) {
                this.switchToClient(client);
                return;
            }
        }
        // If no client matches, update the playerID for the current client.
        this.currentClient.updatePlayerID(playerID);
        this.notifySubscribers();
    }
    /**
     * Set the passed client as the active client for debugging.
     */ switchToClient(client) {
        if (client === this.currentClient) return;
        this.unmountDebug();
        this.mountDebug(client);
        this.notifySubscribers();
    }
    /**
     * Notify all subscribers of changes to the client manager state.
     */ notifySubscribers() {
        const arg = this.getState();
        this.subscribers.forEach((cb)=>{
            cb(arg);
        });
    }
    /**
     * Get the client manager state.
     */ getState() {
        return {
            client: this.currentClient,
            debuggableClients: this.getDebuggableClients()
        };
    }
    /**
     * Get an array of the registered clients that haven’t disabled the debug panel.
     */ getDebuggableClients() {
        return [
            ...this.clients.values()
        ].filter((client)=>client.debugOpt !== false);
    }
    /**
     * Mount the debug panel using the passed client.
     */ mountDebug(client) {
        if (client.debugOpt === false || this.debugPanel !== null || typeof document === "undefined") return;
        let DebugImpl;
        let target = document.body;
        DebugImpl = (0, _debug8242C26EJs.D);
        if (client.debugOpt && client.debugOpt !== true) {
            DebugImpl = client.debugOpt.impl || DebugImpl;
            target = client.debugOpt.target || target;
        }
        if (DebugImpl) {
            this.currentClient = client;
            this.debugPanel = new DebugImpl({
                target,
                props: {
                    clientManager: this
                }
            });
        }
    }
    /**
     * Unmount the debug panel.
     */ unmountDebug() {
        this.debugPanel.$destroy();
        this.debugPanel = null;
        this.currentClient = null;
    }
}
/*
 * Copyright 2017 The boardgame.io Authors
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */ /**
 * Global client manager instance that all clients register with.
 */ const GlobalClientManager = new ClientManager();
/**
 * Standardise the passed playerID, using currentPlayer if appropriate.
 */ function assumedPlayerID(playerID, store, multiplayer) {
    // In singleplayer mode, if the client does not have a playerID
    // associated with it, we attach the currentPlayer as playerID.
    if (!multiplayer && (playerID === null || playerID === undefined)) {
        const state = store.getState();
        playerID = state.ctx.currentPlayer;
    }
    return playerID;
}
/**
 * createDispatchers
 *
 * Create action dispatcher wrappers with bound playerID and credentials
 */ function createDispatchers(storeActionType, innerActionNames, store, playerID, credentials, multiplayer) {
    const dispatchers = {};
    for (const name of innerActionNames)dispatchers[name] = (...args)=>{
        const action = (0, _turnOrder8Cc4909BJs.A)[storeActionType](name, args, assumedPlayerID(playerID, store, multiplayer), credentials);
        store.dispatch(action);
    };
    return dispatchers;
}
// Creates a set of dispatchers to make moves.
const createMoveDispatchers = createDispatchers.bind(null, "makeMove");
// Creates a set of dispatchers to dispatch game flow events.
const createEventDispatchers = createDispatchers.bind(null, "gameEvent");
// Creates a set of dispatchers to dispatch actions to plugins.
const createPluginDispatchers = createDispatchers.bind(null, "plugin");
/**
 * Implementation of Client (see below).
 */ class _ClientImpl {
    constructor({ game , debug , numPlayers , multiplayer , matchID: matchID , playerID , credentials , enhancer  }){
        this.game = (0, _reducer24Ea3E4CJs.P)(game);
        this.playerID = playerID;
        this.matchID = matchID || "default";
        this.credentials = credentials;
        this.multiplayer = multiplayer;
        this.debugOpt = debug;
        this.manager = GlobalClientManager;
        this.gameStateOverride = null;
        this.subscribers = {};
        this._running = false;
        this.reducer = (0, _reducer24Ea3E4CJs.C)({
            game: this.game,
            isClient: multiplayer !== undefined
        });
        this.initialState = null;
        if (!multiplayer) this.initialState = (0, _initialize7316768FJs.I)({
            game: this.game,
            numPlayers
        });
        this.reset = ()=>{
            this.store.dispatch((0, _turnOrder8Cc4909BJs.u)(this.initialState));
        };
        this.undo = ()=>{
            const undo$1 = (0, _turnOrder8Cc4909BJs.v)(assumedPlayerID(this.playerID, this.store, this.multiplayer), this.credentials);
            this.store.dispatch(undo$1);
        };
        this.redo = ()=>{
            const redo$1 = (0, _turnOrder8Cc4909BJs.w)(assumedPlayerID(this.playerID, this.store, this.multiplayer), this.credentials);
            this.store.dispatch(redo$1);
        };
        this.log = [];
        /**
         * Middleware that manages the log object.
         * Reducers generate deltalogs, which are log events
         * that are the result of application of a single action.
         * The master may also send back a deltalog or the entire
         * log depending on the type of request.
         * The middleware below takes care of all these cases while
         * managing the log object.
         */ const LogMiddleware = (store)=>(next)=>(action)=>{
                    const result = next(action);
                    const state = store.getState();
                    switch(action.type){
                        case 0, _turnOrder8Cc4909BJs.M:
                        case 0, _turnOrder8Cc4909BJs.o:
                        case 0, _turnOrder8Cc4909BJs.j:
                        case 0, _turnOrder8Cc4909BJs.R:
                            {
                                const deltalog = state.deltalog;
                                this.log = [
                                    ...this.log,
                                    ...deltalog
                                ];
                                break;
                            }
                        case 0, _turnOrder8Cc4909BJs.m:
                            this.log = [];
                            break;
                        case 0, _turnOrder8Cc4909BJs.P:
                        case 0, _turnOrder8Cc4909BJs.l:
                            {
                                let id = -1;
                                if (this.log.length > 0) id = this.log[this.log.length - 1]._stateID;
                                let deltalog1 = action.deltalog || [];
                                // Filter out actions that are already present
                                // in the current log. This may occur when the
                                // client adds an entry to the log followed by
                                // the update from the master here.
                                deltalog1 = deltalog1.filter((l)=>l._stateID > id);
                                this.log = [
                                    ...this.log,
                                    ...deltalog1
                                ];
                                break;
                            }
                        case 0, _turnOrder8Cc4909BJs.k:
                            this.initialState = action.initialState;
                            this.log = action.log || [];
                            break;
                    }
                    return result;
                };
        /**
         * Middleware that intercepts actions and sends them to the master,
         * which keeps the authoritative version of the state.
         */ const TransportMiddleware = (store)=>(next)=>(action)=>{
                    const baseState = store.getState();
                    const result = next(action);
                    if (!("clientOnly" in action) && action.type !== (0, _turnOrder8Cc4909BJs.p)) this.transport.sendAction(baseState, action);
                    return result;
                };
        /**
         * Middleware that intercepts actions and invokes the subscription callback.
         */ const SubscriptionMiddleware = ()=>(next)=>(action)=>{
                    const result = next(action);
                    this.notifySubscribers();
                    return result;
                };
        const middleware = (0, _redux.applyMiddleware)((0, _reducer24Ea3E4CJs.T), SubscriptionMiddleware, TransportMiddleware, LogMiddleware);
        enhancer = enhancer !== undefined ? (0, _redux.compose)(middleware, enhancer) : middleware;
        this.store = (0, _redux.createStore)(this.reducer, this.initialState, enhancer);
        if (!multiplayer) multiplayer = DummyTransport;
        this.transport = multiplayer({
            transportDataCallback: (data)=>this.receiveTransportData(data),
            gameKey: game,
            game: this.game,
            matchID,
            playerID,
            credentials,
            gameName: this.game.name,
            numPlayers
        });
        this.createDispatchers();
        this.chatMessages = [];
        this.sendChatMessage = (payload)=>{
            this.transport.sendChatMessage(this.matchID, {
                id: (0, _nonSecure.nanoid)(7),
                sender: this.playerID,
                payload: payload
            });
        };
    }
    /** Handle incoming match data from a multiplayer transport. */ receiveMatchData(matchData) {
        this.matchData = matchData;
        this.notifySubscribers();
    }
    /** Handle an incoming chat message from a multiplayer transport. */ receiveChatMessage(message) {
        this.chatMessages = [
            ...this.chatMessages,
            message
        ];
        this.notifySubscribers();
    }
    /** Handle all incoming updates from a multiplayer transport. */ receiveTransportData(data) {
        const [matchID] = data.args;
        if (matchID !== this.matchID) return;
        switch(data.type){
            case "sync":
                {
                    const [, syncInfo] = data.args;
                    const action = (0, _turnOrder8Cc4909BJs.s)(syncInfo);
                    this.receiveMatchData(syncInfo.filteredMetadata);
                    this.store.dispatch(action);
                    break;
                }
            case "update":
                {
                    const [, state, deltalog] = data.args;
                    const currentState = this.store.getState();
                    if (state._stateID >= currentState._stateID) {
                        const action1 = (0, _turnOrder8Cc4909BJs.z)(state, deltalog);
                        this.store.dispatch(action1);
                    }
                    break;
                }
            case "patch":
                {
                    const [, prevStateID, stateID, patch$1, deltalog1] = data.args;
                    const currentStateID = this.store.getState()._stateID;
                    if (prevStateID !== currentStateID) break;
                    const action2 = (0, _turnOrder8Cc4909BJs.y)(prevStateID, stateID, patch$1, deltalog1);
                    this.store.dispatch(action2);
                    // Emit sync if patch apply failed.
                    if (this.store.getState()._stateID === currentStateID) this.transport.requestSync();
                    break;
                }
            case "matchData":
                {
                    const [, matchData] = data.args;
                    this.receiveMatchData(matchData);
                    break;
                }
            case "chat":
                {
                    const [, chatMessage] = data.args;
                    this.receiveChatMessage(chatMessage);
                    break;
                }
        }
    }
    notifySubscribers() {
        Object.values(this.subscribers).forEach((fn)=>fn(this.getState()));
    }
    overrideGameState(state) {
        this.gameStateOverride = state;
        this.notifySubscribers();
    }
    start() {
        this.transport.connect();
        this._running = true;
        this.manager.register(this);
    }
    stop() {
        this.transport.disconnect();
        this._running = false;
        this.manager.unregister(this);
    }
    subscribe(fn) {
        const id = Object.keys(this.subscribers).length;
        this.subscribers[id] = fn;
        this.transport.subscribeToConnectionStatus(()=>this.notifySubscribers());
        if (this._running || !this.multiplayer) fn(this.getState());
        // Return a handle that allows the caller to unsubscribe.
        return ()=>{
            delete this.subscribers[id];
        };
    }
    getInitialState() {
        return this.initialState;
    }
    getState() {
        let state = this.store.getState();
        if (this.gameStateOverride !== null) state = this.gameStateOverride;
        // This is the state before a sync with the game master.
        if (state === null) return state;
        // isActive.
        let isActive = true;
        const isPlayerActive = this.game.flow.isPlayerActive(state.G, state.ctx, this.playerID);
        if (this.multiplayer && !isPlayerActive) isActive = false;
        if (!this.multiplayer && this.playerID !== null && this.playerID !== undefined && !isPlayerActive) isActive = false;
        if (state.ctx.gameover !== undefined) isActive = false;
        // Secrets are normally stripped on the server,
        // but we also strip them here so that game developers
        // can see their effects while prototyping.
        // Do not strip again if this is a multiplayer game
        // since the server has already stripped secret info. (issue #818)
        if (!this.multiplayer) state = {
            ...state,
            G: this.game.playerView({
                G: state.G,
                ctx: state.ctx,
                playerID: this.playerID
            }),
            plugins: (0, _turnOrder8Cc4909BJs.x)(state, this)
        };
        // Combine into return value.
        return {
            ...state,
            log: this.log,
            isActive,
            isConnected: this.transport.isConnected
        };
    }
    createDispatchers() {
        this.moves = createMoveDispatchers(this.game.moveNames, this.store, this.playerID, this.credentials, this.multiplayer);
        this.events = createEventDispatchers(this.game.flow.enabledEventNames, this.store, this.playerID, this.credentials, this.multiplayer);
        this.plugins = createPluginDispatchers(this.game.pluginNames, this.store, this.playerID, this.credentials, this.multiplayer);
    }
    updatePlayerID(playerID) {
        this.playerID = playerID;
        this.createDispatchers();
        this.transport.updatePlayerID(playerID);
        this.notifySubscribers();
    }
    updateMatchID(matchID) {
        this.matchID = matchID;
        this.createDispatchers();
        this.transport.updateMatchID(matchID);
        this.notifySubscribers();
    }
    updateCredentials(credentials) {
        this.credentials = credentials;
        this.createDispatchers();
        this.transport.updateCredentials(credentials);
        this.notifySubscribers();
    }
}
/**
 * Client
 *
 * boardgame.io JS client.
 *
 * @param {...object} game - The return value of `Game`.
 * @param {...object} numPlayers - The number of players.
 * @param {...object} multiplayer - Set to a falsy value or a transportFactory, e.g., SocketIO()
 * @param {...object} matchID - The matchID that you want to connect to.
 * @param {...object} playerID - The playerID associated with this client.
 * @param {...string} credentials - The authentication credentials associated with this client.
 *
 * Returns:
 *   A JS object that provides an API to interact with the
 *   game by dispatching moves and events.
 */ function Client(opts) {
    return new _ClientImpl(opts);
}

},{"nanoid/non-secure":"fO50M","./Debug-8242c26e.js":"l07fb","redux":"cDNB3","./turn-order-8cc4909b.js":"eWUI2","./reducer-24ea3e4c.js":"b7fst","./initialize-7316768f.js":"3IrVq","./transport-ce07b771.js":"6VfRJ","@parcel/transformer-js/src/esmodule-helpers.js":"cjuhS"}],"l338F":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TicTacToe", ()=>TicTacToe);
var _core = require("boardgame.io/core");
function IsVictory(cells) {
    const postions = [
        [
            0,
            1,
            2
        ],
        [
            3,
            4,
            5
        ],
        [
            6,
            7,
            8
        ],
        [
            0,
            3,
            6
        ],
        [
            1,
            4,
            7
        ],
        [
            2,
            5,
            8
        ],
        [
            0,
            4,
            8
        ],
        [
            2,
            4,
            6
        ]
    ];
    const isRowComplete = (row)=>{
        const symbols = row.map((i)=>cells[i]);
        return symbols.every((i)=>i !== null && i === symbols[0]);
    };
    return postions.map(isRowComplete).some((i)=>i === true);
}
function IsDraw(cells) {
    return cells.filter((c)=>c === null).length === 0;
}
const TicTacToe = {
    setup: ()=>({
            cells: Array(9).fill(null)
        }),
    turn: {
        minMoves: 1,
        maxMoves: 1
    },
    moves: {
        clickCell: ({ G , playerID  }, id)=>{
            if (G.cells[id] !== null) return 0, _core.INVALID_MOVE;
            G.cells[id] = playerID;
        }
    },
    endIf: ({ G , ctx  })=>{
        if (IsVictory(G.cells)) return {
            winner: ctx.currentPlayer
        };
        if (IsDraw(G.cells)) return {
            draw: true
        };
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"cjuhS","boardgame.io/core":"ecP8z"}],"ecP8z":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ActivePlayers", ()=>(0, _turnOrder8Cc4909BJs.C));
parcelHelpers.export(exports, "GameMethod", ()=>(0, _turnOrder8Cc4909BJs.G));
parcelHelpers.export(exports, "INVALID_MOVE", ()=>(0, _turnOrder8Cc4909BJs.n));
parcelHelpers.export(exports, "Stage", ()=>(0, _turnOrder8Cc4909BJs.S));
parcelHelpers.export(exports, "TurnOrder", ()=>(0, _turnOrder8Cc4909BJs.T));
parcelHelpers.export(exports, "PlayerView", ()=>PlayerView);
var _turnOrder8Cc4909BJs = require("./turn-order-8cc4909b.js");
var _immer = require("immer");
var _pluginRandom087F861EJs = require("./plugin-random-087f861e.js");
var _lodashIsplainobject = require("lodash.isplainobject");
/*
 * Copyright 2018 The boardgame.io Authors
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */ /**
 * PlayerView reducers.
 */ const PlayerView = {
    /**
     * STRIP_SECRETS
     *
     * Reducer which removes a key named `secret` and
     * removes all the keys in `players`, except for the one
     * corresponding to the current playerID.
     */ STRIP_SECRETS: ({ G , playerID  })=>{
        const r = {
            ...G
        };
        if (r.secret !== undefined) delete r.secret;
        if (r.players) r.players = playerID ? {
            [playerID]: r.players[playerID]
        } : {};
        return r;
    }
};

},{"./turn-order-8cc4909b.js":"eWUI2","immer":"4sfoz","./plugin-random-087f861e.js":"lhxqo","lodash.isplainobject":"6W10L","@parcel/transformer-js/src/esmodule-helpers.js":"cjuhS"}]},["2BKCt","2kQhy"], "2kQhy", "parcelRequire3ba0")

//# sourceMappingURL=index.7271efb6.js.map
