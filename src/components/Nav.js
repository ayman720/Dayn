import '../css/components.css';
import {BsSearch} from 'react-icons/bs';
import {BiLogOut, BiUser} from 'react-icons/bi';

const Nav = () => {
  
  const showInfoUser = () => {
    document.getElementById("da_info_user").classList.toggle("hidden");
    };
  
  return (
        <div id='AppTopNav' className='AppTopNav' style={{backgroundColor: "#3e3e3e",height: "69px",position: "sticky",top: "0"}}>
            <div  className='da_TopNav_container' >
                <img className='da_logo' src={require('../images/logo.png')} />
                    <form  className="da_sear_nav">
                            <input  className="da_sear_text" type="text" />
                            <button className = "da_but_icon"  > <BsSearch /> </button>
                    </form>
                    <button className = "log_user" onClick={showInfoUser}  > <BiUser /> </button>
            </div>
        </div>
  );
}

export default Nav;
