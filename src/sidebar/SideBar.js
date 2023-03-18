import React from 'react'
import PageBtn from './components/PageBtn'
import logo from './assets/logo.png';
import exit from './assets/exit.png';
import status from './assets/status.png';
import send from './assets/send.png';
import vector from './assets/vector.png';
import setting from './assets/setting.png';
import manage from './assets/manage.png';


import './style/SideBar.css'

const btnList = [{ id: 1, name: 'סטטוס מועמדים', logo: status }, { id: 2, name: 'שליחת ערכה חדשה', logo: send }, { id: 3, name: 'מועמדים', logo: vector }, { id: 4, name: 'הגדרות', logo: setting }, { id: 5, name: 'ניהול דף נחיתה', logo: manage },]

const navBtn = btnList.map(btn => <PageBtn key={btn.id} logo={btn.logo} text={btn.name} altText={btn.name} />)

const SideBar = () => {
  return (
    <div className='sidebar'>
      <div>
        <img className='maccabi-logo' src={logo} alt='' />
      </div>
      <div className='btnList'>
        {navBtn}
      </div>
      <div className='exit-btn'>
        <PageBtn logo={exit} text='יציאה' altText='יציאה' />
      </div>

    </div>
  )
}




export default SideBar
