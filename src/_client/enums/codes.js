"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RESULT_CODE;
(function (RESULT_CODE) {
    RESULT_CODE[RESULT_CODE["SUCCESS"] = 200] = "SUCCESS";
    RESULT_CODE[RESULT_CODE["INVALID_PAYLOAD"] = -1] = "INVALID_PAYLOAD";
    RESULT_CODE[RESULT_CODE["NOT_YET_IMPLEMENTED"] = -60] = "NOT_YET_IMPLEMENTED";
    RESULT_CODE[RESULT_CODE["EMAIL_ALREADY_REGISTERED"] = -100] = "EMAIL_ALREADY_REGISTERED";
    RESULT_CODE[RESULT_CODE["USERNAME_ALREADY_REGISTERED"] = -101] = "USERNAME_ALREADY_REGISTERED";
    RESULT_CODE[RESULT_CODE["EMAIL_DOES_NOT_EXIST"] = -102] = "EMAIL_DOES_NOT_EXIST";
    RESULT_CODE[RESULT_CODE["INVALID_PASSWORD"] = -103] = "INVALID_PASSWORD";
    RESULT_CODE[RESULT_CODE["INVALID_FIELD_AMMOUNT"] = -104] = "INVALID_FIELD_AMMOUNT";
    RESULT_CODE[RESULT_CODE["INVALID_SEARCH_QUERY"] = -105] = "INVALID_SEARCH_QUERY";
    RESULT_CODE[RESULT_CODE["INVALID_TOKEN"] = -115] = "INVALID_TOKEN";
    RESULT_CODE[RESULT_CODE["INSUFFICIENT_FUNDS"] = -300] = "INSUFFICIENT_FUNDS";
    RESULT_CODE[RESULT_CODE["INSUFFICIENT_FUNDS_WITHDRAW"] = -301] = "INSUFFICIENT_FUNDS_WITHDRAW";
    RESULT_CODE[RESULT_CODE["OPEN_ORDER_NOT_FOUND"] = -400] = "OPEN_ORDER_NOT_FOUND";
    RESULT_CODE[RESULT_CODE["USER_NOT_FOUND"] = -401] = "USER_NOT_FOUND";
    RESULT_CODE[RESULT_CODE["BITCOIN_PRICE_NOT_FOUND"] = -402] = "BITCOIN_PRICE_NOT_FOUND";
    RESULT_CODE[RESULT_CODE["OPEN_POSITION_NOT_FOUND"] = -403] = "OPEN_POSITION_NOT_FOUND";
    RESULT_CODE[RESULT_CODE["UNKNOWN_ROUTE"] = -420] = "UNKNOWN_ROUTE";
    RESULT_CODE[RESULT_CODE["INTERNAL_ERROR"] = -500] = "INTERNAL_ERROR";
    RESULT_CODE[RESULT_CODE["ERROR_CANCELING_ORDER"] = -501] = "ERROR_CANCELING_ORDER";
    RESULT_CODE[RESULT_CODE["OPEN_POSITION_NOT_CREATED"] = -502] = "OPEN_POSITION_NOT_CREATED";
    RESULT_CODE[RESULT_CODE["ERROR_CLOSING_AMP"] = -503] = "ERROR_CLOSING_AMP";
    RESULT_CODE[RESULT_CODE["OPEN_ORDER_NOT_CREATED"] = -504] = "OPEN_ORDER_NOT_CREATED";
    RESULT_CODE[RESULT_CODE["ERROR_MAKING_DEPOSIT"] = -505] = "ERROR_MAKING_DEPOSIT";
    RESULT_CODE[RESULT_CODE["ERROR_MAKING_WITHDRAW"] = -506] = "ERROR_MAKING_WITHDRAW";
})(RESULT_CODE = exports.RESULT_CODE || (exports.RESULT_CODE = {}));
var UI_RESULT_CODE;
(function (UI_RESULT_CODE) {
    UI_RESULT_CODE[UI_RESULT_CODE["SUCCESS"] = 200] = "SUCCESS";
    UI_RESULT_CODE[UI_RESULT_CODE["INVALID_DATA"] = -1] = "INVALID_DATA";
    UI_RESULT_CODE[UI_RESULT_CODE["ERROR_INSERTING_DATA"] = -20] = "ERROR_INSERTING_DATA";
    UI_RESULT_CODE[UI_RESULT_CODE["INVALID_TABLE_NAME"] = -21] = "INVALID_TABLE_NAME";
    UI_RESULT_CODE[UI_RESULT_CODE["AUTH_INVALID"] = -22] = "AUTH_INVALID";
    UI_RESULT_CODE[UI_RESULT_CODE["PROFILE_IMAGE_TOO_BIG"] = -23] = "PROFILE_IMAGE_TOO_BIG";
})(UI_RESULT_CODE = exports.UI_RESULT_CODE || (exports.UI_RESULT_CODE = {}));
var AUTH_STATE_CHANGE;
(function (AUTH_STATE_CHANGE) {
    AUTH_STATE_CHANGE[AUTH_STATE_CHANGE["LOGGED_IN"] = 25] = "LOGGED_IN";
    AUTH_STATE_CHANGE[AUTH_STATE_CHANGE["LOGGED_OUT"] = 26] = "LOGGED_OUT";
    AUTH_STATE_CHANGE[AUTH_STATE_CHANGE["CHANGED"] = 27] = "CHANGED"; //Loaded state, unspecified (i.e., when the app first starts)
})(AUTH_STATE_CHANGE = exports.AUTH_STATE_CHANGE || (exports.AUTH_STATE_CHANGE = {}));
var SUCCESS_UI;
(function (SUCCESS_UI) {
    SUCCESS_UI[SUCCESS_UI["CREATED_ACCOUNT"] = 24] = "CREATED_ACCOUNT";
    SUCCESS_UI[SUCCESS_UI["LOGGED_IN"] = 25] = "LOGGED_IN";
    SUCCESS_UI[SUCCESS_UI["LOGGED_OUT"] = 26] = "LOGGED_OUT";
    SUCCESS_UI[SUCCESS_UI["CHANGED_PASSWORD"] = 27] = "CHANGED_PASSWORD";
    SUCCESS_UI[SUCCESS_UI["ADDED_OPEN_ORDER"] = 28] = "ADDED_OPEN_ORDER";
    SUCCESS_UI[SUCCESS_UI["ADDED_OPEN_POSITION"] = 29] = "ADDED_OPEN_POSITION";
    SUCCESS_UI[SUCCESS_UI["CANCELLED_OPEN_ODER"] = 30] = "CANCELLED_OPEN_ODER";
    SUCCESS_UI[SUCCESS_UI["CLOSED_OO_AMP"] = 31] = "CLOSED_OO_AMP";
    SUCCESS_UI[SUCCESS_UI["DEPOSIT_MADE"] = 32] = "DEPOSIT_MADE";
    SUCCESS_UI[SUCCESS_UI["WITHDRAW_MADE"] = 33] = "WITHDRAW_MADE";
})(SUCCESS_UI = exports.SUCCESS_UI || (exports.SUCCESS_UI = {}));
var ORDERBOOK_CODE;
(function (ORDERBOOK_CODE) {
    ORDERBOOK_CODE["UPDATED"] = "1";
})(ORDERBOOK_CODE = exports.ORDERBOOK_CODE || (exports.ORDERBOOK_CODE = {}));
var RECENT_TRADES_CODE;
(function (RECENT_TRADES_CODE) {
    RECENT_TRADES_CODE["UPDATED"] = "1";
})(RECENT_TRADES_CODE = exports.RECENT_TRADES_CODE || (exports.RECENT_TRADES_CODE = {}));
exports.UID_REPLACEMENT = "_UID_";
//# sourceMappingURL=codes.js.map