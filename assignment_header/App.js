import React from 'react'
import ReactDOM from 'react-dom/client'

const HeaderComponent = () => {
  return (
    <div
      className="header"
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: 'grey',
      }}
    >
      <img
        src="https://cdn.logo.com/hotlink-ok/logo-social.png"
        alt="Logo"
        style={{ width: '100px', height: '100px', marginLeft: '25px' }}
      ></img>
      <SearchComponent />

      <img
        src="https://cdn3d.iconscout.com/3d/free/thumb/user-3814118-3187499.png"
        alt="user icon"
        style={{ width: '100px', height: '100px' }}
      ></img>
    </div>
  )
}

function SearchComponent() {
  return (
    <div style={{ marginTop: '35px' }}>
      <input type="text" size="50"></input>
      <p style={{ display: 'inline' }}>🔍</p>
    </div>
  )
}

const root = ReactDOM.createRoot(document.querySelector('.root'))

root.render(<HeaderComponent />)
