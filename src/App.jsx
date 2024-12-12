import React from "react";
import ReactDOM from "react-dom/client";

import ColorList from './components/colorList'

const App = () => {
  return <>
  <ColorList colorList={[]} />
  <ColorList colorList={["#964127", "#c98fcc","#482796"]} />
  </>
};
const rootElement = document.getElementById("app")
if (!rootElement) throw new Error("Failed to find the root element")

const root = ReactDOM.createRoot(rootElement)

root.render(<App />)