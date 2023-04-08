import React from 'react'

const Props1 = (info) => {
  return (
    <div>
        <h2>Component two - functional component</h2>
        <p>{JSON.stringify(info)}</p>
        <h4>employer name : {(info.emp)}</h4>
        <hr/>
        
    </div>
  )
}

export default Props1