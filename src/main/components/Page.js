import React, { useState } from 'react';
import Table from './Table'
import Modal from './Modal';
import dummyData from "../../Data.json";
import arrowRight from '../assets/arrowRight.png'

import '../style/Page.css'


const Page = () => {
  const [users, setUsers] = useState(dummyData.users);
  const [filterdList, setFilterdList] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const addUser = (newUser) => {
    users.push(newUser)
    setUsers(users)
  }

  const removeUser = (email) => {
    const newList = users.filter(user => user.email !== email)
    setUsers(newList)
  }

  const handleChange = (event) => {
    const value = event.target.value;
    if (value === '') {
      setFilterdList(users)
    } else {
      const list = users.filter(user =>
        user.name.includes(value) ||
        user.idNumber.includes(value) ||
        user.phoneNumber.includes(value) ||
        user.email.includes(value) ||
        user.role.includes(value) ||
        user.clinic.includes(value) ||
        user.createAt.includes(value) ||
        user.userCreate.includes(value) ||
        user.approveBy.includes(value) ||
        user.status.includes(value) ||
        user.rank.includes(value)
      )
      setFilterdList(list)
    }
  }


  return (
    <div className='page-container'>
      <div className='page-name'>
        <div>מועמדים</div>
        <img src={arrowRight} alt='Back' />
      </div>
      <div className='page-action'>
        <button className='addBtn' onClick={() => setShowModal(true)}>הוספת מועמד חדש +</button>
        <Modal addUser={addUser} onClose={() => setShowModal(false)} show={showModal} />
        <input className='searchInput' placeholder='חיפוש מועמד' onChange={handleChange} />
      </div>
      <Table users={filterdList.length > 0 ? filterdList : users} removeUser={removeUser} />
    </div>
  )
}

export default Page