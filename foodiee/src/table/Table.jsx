import React, { Component } from 'react'
import employe from './Data'
import './Table.css'
class Table extends Component {
  render() {
    return (
      <div>
        <pre>{JSON.stringify(employe)}</pre>
        <div className='table'>
            <table>
                <thead className='table_head' >
                    <tr >
                        <th>ID</th>
                        <th>FIRST NAME</th>
                        <th>LAST NAME</th>
                        <th>EMAIL</th>
                        <th>GENDER</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employe.map((employe)=>{
                                return<tr key={employe.id}>
                                    <td>{employe.id}</td>
                                    <td>{employe.first_name}</td>
                                    <td>{employe.last_name}</td>
                                    <td>{employe.email}</td>
                                    <td>{employe.gender}</td>
                                </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
      </div>
    )
  }
}

export default Table