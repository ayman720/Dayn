import '../css/components.css';
import '../css/core_components.css';

const Friends = () => {

  var TestGroup = [
    {
      id: 1,
      Restaurent : "McDonalds",
      number_of_people: "10",
      number_of_orders: "10"
    },
    {
      id: 2,
      Restaurent : "Subway",
      number_of_people: "5",
      number_of_orders: "1"
    }
  ];
  /*
        {TestGroup.map(group => (
        <div className="Group" key={group.id}>
          <div className="Group_Restaurant">{group.Restaurent}</div>
          <div className="Group_number_of_people">{group.number_of_people}</div>
          <div className="Group_number_of_orders">{group.number_of_orders}</div>
        </div>
      ))}
  */
  return (
    <div className="Friends">
      <div className='title' >Friends</div>
    </div>
  );
  
}

export default Friends;
