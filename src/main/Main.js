import React from 'react';
import NavBar from './components/NavBar';
import Page from './components/Page';
import './style/Main.css'

const Main = () => {
  return (
    <div className='main'>
      <NavBar />
      <Page />
    </div>
  )
}


export default Main