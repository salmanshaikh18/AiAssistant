import React from 'react'
import "./App.css"
import SideBar from './components/SideBar/SideBar'
import Main from './components/Main/Main'

const App = () => {
  return (
    <div className='flex'>
      <SideBar />
      <Main />
    </div>
  )
}

export default App