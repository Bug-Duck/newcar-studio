import React from "react";
import ReactDOM from "react-dom";
import FrameEditBlock from "./frameEditBlock.jsx";
import ObjectEditBlock from "./objectEditBlock";
import CanvasBlock from "./canvasEdit.jsx";
import PublicEditBlock from "./publicEditBlock.jsx";
import BottomBlock from "./bottomBlock.jsx";
import "./block.css";

function App() {
  return (
    <>
      <FrameEditBlock />
      <div className="row">
        <ObjectEditBlock />
        <CanvasBlock />
        <PublicEditBlock />
      </div>
      <BottomBlock />
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
