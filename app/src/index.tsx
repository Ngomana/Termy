import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import './css/index.css'
import './css/inter.css'
import './css/source-code-pro.css'
import './css/xterm.css'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
)

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/#hot-module-replacement
// if (import.meta.hot) {
//   import.meta.hot.accept()
// }
