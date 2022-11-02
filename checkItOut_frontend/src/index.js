import React from 'react'
import ReactDOM from 'react-dom/client'
// import ReactDOM from 'react-dom'
import App from './App'
import './index.css'

// npm i react-router-dom
import {BrowserRouter as Router} from 'react-router-dom'


const root= ReactDOM.createRoot(document.getElementById("root"))
root.render(<Router>
<App/>
</Router>)

// deprecated
// ReactDOM.render(
// <Router>
// <App/>
// </Router>,
// document.getElementById('root'))

