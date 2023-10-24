//video stopping place: 

import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import AskOscar from "./components/AskOscar";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      {/*{alertVisible &&<Alert onClose={() => setAlertVisibility(false)}>
        well hello there!
      </Alert>}
      {!alertVisible && <Button color="secondary" onClick={() => setAlertVisibility(true)}>
        say hello?
      </Button>}
      {alertVisible && <Button color="primary" onClick={() => setAlertVisibility(false)}>
        say goodbye?
  </Button>}*/}
      <AskOscar />
    </div>
  );
}

export default App;
