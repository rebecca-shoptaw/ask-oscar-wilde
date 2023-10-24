"use strict";
exports.__esModule = true;
var Button = function (_a) {
    var children = _a.children, _b = _a.color, color = _b === void 0 ? 'primary' : _b, onClick = _a.onClick;
    return (<button type="button" className={"btn btn-".concat(color)} onClick={onClick}>{children}</button>);
};
exports["default"] = Button;
