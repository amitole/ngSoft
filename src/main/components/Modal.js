import React, { useState } from 'react'
import '../style/Modal.css'

const Modal = ({ addUser, onClose, show }) => {
    const [inputs, setInputs] = useState({});
    if (!show) {
        return null
    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        addUser(inputs);
        onClose();
        setInputs({})
    }

    return (
        <div className='modal'>
            <div className='modal-content'>
                <div className='modal-header'>
                    <button className='modal-header-btn' onClick={onClose}>X</button>
                    <h4 className='modal-title'>מועמד חדש</h4>
                </div>
                <div className='modal-body'>
                    <input className='nameInput' name="idNumber" value={inputs.idNumber} onChange={handleChange} placeholder="תעודת זהות" />
                    <input className='nameInput' name="name" value={inputs.name} onChange={handleChange} placeholder="*שם מלא" />
                    <input name="phoneNumber" value={inputs.phoneNumber} onChange={handleChange} placeholder="*טלפון" />
                    <input name="email" value={inputs.email} onChange={handleChange} placeholder="כתובת אימייל" />
                    <select name="clinic" onChange={handleChange} placeholder='מרפאה'>
                        <option value="" selected disabled hidden>מרפאה</option>
                        <option value="אשדוד">אשדוד</option>
                        <option value="מודיעין">מודיעין</option>
                    </select>
                    <select name="role" onChange={handleChange} placeholder='תפקיד'>
                        <option value="" selected disabled hidden>תפקיד</option>
                        <option value="מנהל מרפאה">מנהל מרפאה</option>
                        <option value="מנהל תפעול">מנהל תפעול</option>
                    </select>
                    <input name="approveBy" value={inputs.approveBy} onChange={handleChange} placeholder="גורם מאשר" />
                </div>
                <div className='modal-footer'>
                    <button className='modal-btn-cancal' onClick={onClose}>ביטול</button>
                    <button className='modal-btn-approve' onClick={handleSubmit}>אישור</button>
                </div>
            </div>
        </div>
    )
}

export default Modal