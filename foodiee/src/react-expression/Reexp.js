import React from 'react'

class App extends React.Component {
   name = "gowtham raasendiran"
   age = "27"
   Info = {school: "SSBM",
            class : "10",
            rank : "second"}
  render(){
    return<div>
      <h3>Name : {this.name}</h3>
      <p> age: {this.age}</p>
      <p>palli :{this.Info.school}, vakuppu : {this.Info.class} mathipu : {this.Info.rank}</p>
    </div>
  }
}

export default App