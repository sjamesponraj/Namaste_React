import React from 'react'
import ReactDOM from 'react-dom/client'

const FuncComponent = () => {
  return (
    <div className="title">
      <h1 key={Math.random()}>This is a Level1 Heading</h1>
      <h2 key="h2">This is a Level2 Heading</h2>
      <h3 key="h3">This is a Level3 Heading</h3>
    </div>
  )
}

const root = ReactDOM.createRoot(document.querySelector('.root'))

root.render(<FuncComponent className="TitleComponent"> </FuncComponent>)
