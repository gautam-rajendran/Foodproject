import React from 'react'
import Props1 from './Props1'
import Props2 from './Props2'

const Props = () => {
    let enamee = "gautham raasendiran"
    let work = "web developing"
  return (
    <div>
        <h1>Component one</h1>
        <hr/>
        <Props1 emp={enamee} occupation={work} />
        <Props2 emp={enamee} occupation={work}/>
        </div>
  )
}

export default Props