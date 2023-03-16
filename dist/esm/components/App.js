import React from 'react';
import { Link } from 'react-router-dom';
function Breadcrumbs(_a) {
    var routes = _a.routes, containerClass = _a.containerClass;
    return (React.createElement("div", { className: "row ".concat(containerClass ? containerClass : 'mx-10') },
        React.createElement("div", { className: 'col-sm-10 col px-0 align-items-center d-flex mt-10' }, routes && (React.createElement("ul", { className: 'breadcrumb breadcrumb-transparent breadcrumb-lessthan font-weight-bold p-0 mb-0 font-size-sm' }, routes === null || routes === void 0 ? void 0 : routes.map(function (list, index) {
            var isLast = index === routes.length - 1;
            if (isLast) {
                return (React.createElement("li", { className: 'breadcrumb-item text-muted', key: index }, list.name));
            }
            return (React.createElement("li", { className: 'breadcrumb-item text-active', key: index },
                React.createElement(Link, { to: list.url }, list.name)));
        }))))));
}
export default Breadcrumbs;
//# sourceMappingURL=App.js.map