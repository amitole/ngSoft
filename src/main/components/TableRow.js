import React from 'react';
import Delete from '../assets/delete.png'
import View from '../assets/view.png'

import '../style/TableRow.css'

const TableRow = ({ data, id, removeUser }) => {

    return (
        <tr key={id}>
            <td><img className='icon' src={Delete} alt='delete' onClick={() => removeUser(data.email)} /></td>
            <td><img className='icon' src={View} alt='view' /></td>
            <td>{data.rank}</td>
            <td>{data.status}</td>
            <td>{data.approveBy}</td>
            <td>{data.userCreate}</td>
            <td>{data.createAt}</td>
            <td>{data.clinic}</td>
            <td>{data.role}</td>
            <td>{data.email}</td>
            <td>{data.phoneNumber}</td>
            <td>{data.idNumber}</td>
            <td>{data.name}</td>
        </tr>
    )
}

export default TableRow