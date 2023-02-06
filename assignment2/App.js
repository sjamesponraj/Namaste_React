import React from 'react'
import ReactDOM from 'react-dom/client'

const heading1 = React.createElement('h1', { className: 'main' }, 'Hello React')
console.log('James')
const heading2 = React.createElement(
  'h2',
  { className: 'h2', id: 'heading2' },
  'Jesus Help me Out'
)
const root = ReactDOM.createRoot(document.querySelector('.root'))

root.render([heading1, heading2])
