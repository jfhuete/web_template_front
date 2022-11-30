import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"

import App from "./App"
import "./styles/main.scss"

const app = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
  <React.StrictMode>
    {app}
  </React.StrictMode>
)
