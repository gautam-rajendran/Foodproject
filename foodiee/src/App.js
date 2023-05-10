import React from 'react'
import { BrowserRouter as Router , Route, Routes} from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import Home from './Dummy/Home'
import Setting from './Dummy/Setting'
import Contact from './Dummy/Contact'
class App extends React.Component {
   
  render(){
    return<>
          <Router>
               <Navbar/>
              <Routes>
                <Route path='/home' element={<Home/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/settings' element={<Setting/>}/>
              </Routes>
          </Router>
         </>
  }
}

export default App
