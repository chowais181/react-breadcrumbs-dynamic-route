"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var react_router_dom_1 = require("react-router-dom");
function Breadcrumbs(_a) {
    var routes = _a.routes, containerClass = _a.containerClass;
    return (react_1["default"].createElement("div", { className: "row ".concat(containerClass ? containerClass : 'mx-10') },
        react_1["default"].createElement("div", { className: 'col-sm-10 col px-0 align-items-center d-flex mt-10' }, routes && (react_1["default"].createElement("ul", { className: 'breadcrumb breadcrumb-transparent breadcrumb-lessthan font-weight-bold p-0 mb-0 font-size-sm' }, routes === null || routes === void 0 ? void 0 : routes.map(function (list, index) {
            var isLast = index === routes.length - 1;
            if (isLast) {
                return (react_1["default"].createElement("li", { className: 'breadcrumb-item text-muted', key: index }, list.name));
            }
            return (react_1["default"].createElement("li", { className: 'breadcrumb-item text-active', key: index },
                react_1["default"].createElement(react_router_dom_1.Link, { to: list.url }, list.name)));
        }))))));
}
exports["default"] = Breadcrumbs;
//# sourceMappingURL=App.js.map