import React,{Fragment,Component}from 'react'
import Navbar from './component/Navbar';
import Users from './component/users/Users'
import './App.css';

class App extends Component {

  render(){
    return (
      <div className='App'>
       <Navbar/>
       
       <div className='container'> 
        <Users/>
       </div>
     
      </div>
    );
  }
 
}

export default App;
