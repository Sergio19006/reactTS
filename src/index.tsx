import * as React from "react";
import * as ReactDOM from "react-dom";
import Hello from "./components/Hello";
import Button from './components/Button'

ReactDOM.render(
  <div>
  <Button/>
  <Hello name='Juan'/>
</div>, 
document.getElementById("app"));
