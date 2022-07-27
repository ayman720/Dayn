import '../css/components.css';
import { useState } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai'

const Money = () => {
  
  const [money, setMoney] = useState(20);

  const close = () => {

    document.getElementById("da_money").classList.toggle("hidden");

  }

  return (
    <div id='da_money' className="Money absoluteness">
      <AiOutlineCloseCircle  className='close' onClick={close} />
      <div className="Money_Amount"> {money} </div>
    </div>
  );
  
}

export default Money;
