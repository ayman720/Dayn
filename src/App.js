import './App.css';
import Nav from './components/Nav';
import NavLeft from './components/NavLeft';
import { FaUserCog } from 'react-icons/fa';
import { useState } from 'react';
import { BiLogOut } from 'react-icons/bi';
import Money from './components/Money';
import Groups from './components/Groups';
import Orders from './components/Orders';
import Friends from './components/Friends';

const App = () => {
  var infoTest = {
    name: "John",
    age: "30",
    city: "New York"
  };
 

  return (
    <div className="App">
      <Nav />
      <NavLeft />
      <div className="core_components">
        <Money />
        <Friends />
        <Groups />
        <Orders />
      </div>
      <div id="da_info_user" className="Info_user hidden">
        <div className="Info_user_logo"> <FaUserCog /> </div>
        <div className="Info_user_name info_text">name : {infoTest.name}</div>
        <div className="Info_user_age info_text">age : {infoTest.age}</div>
        <div className="Info_user_city info_text">city : {infoTest.city}</div>
        <button className = "log_out info_text"  ><div className='log_out_lab'> Log out </div> <BiLogOut /> </button>
      </div>
    </div>
  );
}

export default App;
