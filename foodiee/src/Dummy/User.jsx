import React, { Component } from 'react'
import Axios from 'axios'


class User extends Component {
        constructor(props){
            super(props);
            this.state ={
               users: []
            }
        }
        componentDidMount(){
          Axios.get("https://jsonplaceholder.typicode.com/users")  //In Axios method we are receving date by using API 
          .then((response)=>{
            this.setState({users:response.data})
            //console.log(response.data)
          })
          .catch()
        }
  render() {
    return (
      <div>
        <pre>{JSON.stringify(this.state.users)}</pre>
        {
            this.state.users.length > 0 ? 
            <>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.users.map((user)=>{
                              return <tr key={user.name}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                              </tr>
                        })
                    }
                </tbody>
            </table>
            </> : null
        }
      </div>
    )
  }
}

export default User