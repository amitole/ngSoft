import React from 'react';
import TableRow from './TableRow';
import dummyData from "../../Data.json";
import '../style/Table.css';

const Table = ({ users, removeUser }) => {

    const tableHeaderName = dummyData.tableHeaderName.map((name, i) => <th key={i}>{name}</th>).reverse();
    const tableRows = users.map((row, i) => <TableRow key={i} data={row} id={i} removeUser={removeUser} />);

    return (
        <div className="Table">
            <table>
                <tr>
                    {tableHeaderName}
                </tr>
                {tableRows}
            </table>
        </div>
    )
}

export default Table