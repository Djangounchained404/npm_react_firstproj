
import React from "react"
import * as ReactDOMClient from 'react-dom/client'
// import ReactDOM from "react-dom"
import App from './App'

import './css/main.css'

const app = ReactDOMClient.createRoot(document.getElementById("root"));

app.render(<App/>);


