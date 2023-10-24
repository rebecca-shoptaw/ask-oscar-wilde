"use strict";
//video stopping place: 
exports.__esModule = true;
var react_1 = require("react");
var AskOscar_1 = require("./components/AskOscar");
function App() {
    var _a = (0, react_1.useState)(false), alertVisible = _a[0], setAlertVisibility = _a[1];
    return (<div>
      {/*{alertVisible &&<Alert onClose={() => setAlertVisibility(false)}>
          well hello there!
        </Alert>}
        {!alertVisible && <Button color="secondary" onClick={() => setAlertVisibility(true)}>
          say hello?
        </Button>}
        {alertVisible && <Button color="primary" onClick={() => setAlertVisibility(false)}>
          say goodbye?
    </Button>}*/}
      <AskOscar_1.default />
    </div>);
}
exports["default"] = App;
