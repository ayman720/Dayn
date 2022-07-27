import '../css/components.css';
import {BsSearch} from 'react-icons/bs';
import {BiLogOut, BiUser, BiHomeCircle, BiMessageSquareDetail} from 'react-icons/bi';
import {FaUserFriends, FaMoneyBillAlt} from 'react-icons/fa';
import {IoMdSettings} from 'react-icons/io';
import {MdOutlineBorderColor} from 'react-icons/md';

const NavLeft = () => {
  
  const OpenM = () => {
    document.getElementById("da_money").classList.toggle("hidden");
    };
  const OpenO = () => {
      document.getElementById("da_order").classList.toggle("hidden");
    };
  
  return (
        <div className = 'AppLeftNav' >
            <div  className='da_acceuil Left_N_List' > <BiHomeCircle style={{fontSize : "30px"}} /> <div> Aceuil </div></div>
            <div  className='da_amis Left_N_List' > <FaUserFriends style={{fontSize : "30px"}} /> <div>Amis</div> </div>
            <div  className='da_messages Left_N_List' > <BiMessageSquareDetail style={{fontSize : "30px"}} /> <div>Messages</div> </div>
            <div  className='da_parametres Left_N_List' onClick={OpenM} > <FaMoneyBillAlt style={{fontSize : "30px"}} /> <div>Money</div> </div>
            <div  className='da_parametres Left_N_List' onClick={OpenO} > <MdOutlineBorderColor style={{fontSize : "30px"}} /> <div>Orders</div> </div>
            <div  className='da_parametres Left_N_List' > <IoMdSettings style={{fontSize : "30px"}} /> <div>Paramètres</div> </div>
        </div>
  );
}

export default NavLeft;
