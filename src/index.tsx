import * as React from "react";
import * as ReactDOM from "react-dom";
import Hello from "./components/Hello";
import Button from './components/Button'
import NumberPicker from "./components/NumberPicker"

ReactDOM.render(
  <div>
  <Button/>
  <Hello name='Juan'/>
  <NumberPicker/>
</div>,
document.getElementById("app"));
