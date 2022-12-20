import React,{Fragment,Component}from 'react'
import Navbar from './component/Navbar';
import UserItem from './component/users/UserItem';
import './App.css';

class App extends Component {

  render(){
    return (
      <div className='App'>
       <Navbar/>
       <UserItem/>
      </div>
    );
  }
 
}

export default App;
