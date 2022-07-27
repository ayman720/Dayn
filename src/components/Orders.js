import '../css/components.css';
import { AiOutlineCloseCircle } from 'react-icons/ai'
import {FcInfo} from 'react-icons/fc';

const Orders = () => {

  var TestOrder = [
    {
      id: 1,
      name: "John",
      age: "30",
      city: "New York",
      Restaurant: "McDonalds"
    },
    {
      id: 2,
      name: "khadija",
      age: "24",
      city: "Paris",
      Restaurant: "Subway"
    },
    {
      id: 2,
      name: "khadija",
      age: "24",
      city: "Paris",
      Restaurant: "Subway"
    },
    {
      id: 2,
      name: "khadija",
      age: "24",
      city: "Paris",
      Restaurant: "Subway"
    },
    {
      id: 2,
      name: "khadija",
      age: "24",
      city: "Paris",
      Restaurant: "Subway"
    },
    {
      id: 2,
      name: "khadija",
      age: "24",
      city: "Paris",
      Restaurant: "Subway"
    },
    {
      id: 2,
      name: "khadija",
      age: "24",
      city: "Paris",
      Restaurant: "Subway"
    },
    {
      id: 2,
      name: "khadija",
      age: "24",
      city: "Paris",
      Restaurant: "Subway"
    },
    {
      id: 2,
      name: "khadija",
      age: "24",
      city: "Paris",
      Restaurant: "Subway"
    },
    {
      id: 2,
      name: "khadija",
      age: "24",
      city: "Paris",
      Restaurant: "Subway"
    },
    {
      id: 2,
      name: "khadija",
      age: "24",
      city: "Paris",
      Restaurant: "Subway"
    },
    {
      id: 2,
      name: "khadija",
      age: "24",
      city: "Paris",
      Restaurant: "Subway"
    },
    {
      id: 2,
      name: "khadija",
      age: "24",
      city: "Paris",
      Restaurant: "Subway"
    },
    {
      id: 2,
      name: "khadija",
      age: "24",
      city: "Paris",
      Restaurant: "Subway"
    },
    {
      id: 2,
      name: "khadija",
      age: "24",
      city: "Paris",
      Restaurant: "Subway"
    },
    {
      id: 2,
      name: "khadija",
      age: "24",
      city: "Paris",
      Restaurant: "Subway"
    },
    {
      id: 2,
      name: "khadija",
      age: "24",
      city: "Paris",
      Restaurant: "Subway"
    }
  ];

  /*
        {TestOrder.map(order => (
        <div className="Order" key={order.id}>
          <div className="Order_name">{order.name}</div>
          <div className="Order_age">{order.age}</div>
          <div className="Order_city">{order.city}</div>
          <div className="Order_Restaurant">{order.Restaurant}</div>
        </div>
      ))}
      */
  
  const close = () => {

    document.getElementById("da_order").classList.toggle("hidden");

  }

  return (
    <div id='da_order' className="Orders absoluteness">
    <AiOutlineCloseCircle  className='close' onClick={close} />
    {TestOrder.map(order => (
        <div className="Order" key={order.id}>
          <div className="Order_name">{order.name}</div>
          <div className="Order_city">{order.Restaurant}</div>
          <div className="Order_Restaurant"><FcInfo /></div>
        </div>
      ))}
    </div>
  );

}

export default Orders;
