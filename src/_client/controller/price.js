"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var ConnectionManager_1 = require("../manager/ConnectionManager");
var routes_1 = require("../enums/routes");
var symbols_1 = require("../enums/symbols");
var events_1 = require("events");
var PriceController = /** @class */ (function () {
    function PriceController() {
        this._callbacks = {};
        this._price = {};
    }
    Object.defineProperty(PriceController, "Instance", {
        get: function () {
            return this._instance;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PriceController.prototype, "price", {
        get: function () {
            return this._price;
        },
        enumerable: true,
        configurable: true
    });
    PriceController.prototype.getRoute = function (symbol) {
        if (symbol === symbols_1.SYMBOL.XBT) {
            return routes_1.PRICE_ROUTES.PRICE_UPDATE_XBT;
        }
        return null;
    };
    PriceController.prototype.getRequestRoute = function (symbol) {
        if (symbol === symbols_1.SYMBOL.XBT) {
            return routes_1.PRICE_ROUTES.PRICE_GET_XBT;
        }
        return null;
    };
    PriceController.prototype.listenToPrice = function (symbol, token) {
        var _this = this;
        if (this._callbacks[symbol]) {
            return this._callbacks[symbol].emitter;
        }
        this._callbacks[symbol] = { emitter: new events_1.EventEmitter() };
        var handler = function (payload) {
            payload.createdAt = new Date(payload.createdAt);
            payload.updatedAt = new Date(payload.updatedAt);
            payload.timestamp = new Date(payload.timestamp);
            _this._price[payload.symbol] = payload;
            if (_this._callbacks[symbol]) {
                _this._callbacks[symbol].emitter.emit(symbol, payload);
            }
            else {
                ConnectionManager_1.default.unlisten(symbol, handler);
            }
        };
        ConnectionManager_1.default.listen(this.getRoute(symbol), handler);
        return this._callbacks[symbol].emitter;
    };
    PriceController.prototype.unlistenToPrice = function (symbol, listener) {
        if (listener) {
            this._callbacks[symbol].emitter.removeListener(symbol, listener);
        }
        else {
            this._callbacks[symbol].emitter.removeAllListeners();
            delete this._callbacks[symbol];
        }
    };
    PriceController.prototype.getCurrentPrice = function (symbol, token, getCached) {
        return __awaiter(this, void 0, void 0, function () {
            var payload, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (getCached && this.price[symbol]) {
                            return [2 /*return*/, this.price[symbol] ? this.price[symbol] : null];
                        }
                        payload = {
                            symbol: symbol
                        };
                        return [4 /*yield*/, ConnectionManager_1.default.call(this.getRequestRoute(symbol), payload, token)];
                    case 1:
                        result = _a.sent();
                        if (result._payload) {
                            this.price[symbol] = result._payload;
                        }
                        return [2 /*return*/, this.price[symbol] ? this.price[symbol] : null];
                }
            });
        });
    };
    PriceController.prototype.setPrice = function (newPrice, token) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, ConnectionManager_1.default.call(routes_1.PRICE_ROUTES.PRICE_SET_XBT, {
                            price: newPrice
                        }, token)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    PriceController._instance = new PriceController();
    return PriceController;
}());
exports.PriceController = PriceController;
exports.default = PriceController.Instance;
//# sourceMappingURL=price.js.map