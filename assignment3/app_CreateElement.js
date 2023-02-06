import React from 'react'
import ReactDOM from 'react-dom/client'

const heading1 = React.createElement('h1', {}, 'This is a Level1 Heading')
const heading2 = React.createElement('h2', {}, 'This is a Level2 Heading')
const heading3 = React.createElement('h3', {}, 'This is a Level3 Heading')
const heading4 = React.createElement('h4', {}, 'This is a Level4 Heading')

const titlediv = React.createElement('div', { className: 'title' }, [
  heading1,
  heading2,
  heading3,
  heading4,
])

const root = ReactDOM.createRoot(document.querySelector('.root'))

root.render(titlediv)
