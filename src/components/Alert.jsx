"use strict";
exports.__esModule = true;
var Alert = function (_a) {
    var children = _a.children, onClose = _a.onClose;
    return (<>
      <div className="alert alert-light alert-dismissible fade show" role="alert">
      {children}
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="close" onClick={onClose}></button>
      </div>
    </>);
};
exports["default"] = Alert;
