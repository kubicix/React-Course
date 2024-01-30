import List from './List.jsx'

function App() {
  const fruits = [{id:1,name:"apple",calories :95},                         {id:2,name:"orange" ,calories:45}, 
                  {id:3,name:"banana",calories:105},
                  {id:4,name:"lime",calories:13}, 
                  {id:5,name:"blueberries",calories:29}];

  const vegetables = [{id:1,name:"potatoes",calories :110},             {id:2,name:"celery" ,calories:15}, 
                  {id:3,name:"carrots",calories:25},
                  {id:4,name:"corn",calories:63}, 
                  {id:5,name:"broccoli",calories:50}];

  return(
    <>
          {fruits.length>0 ? <List items={fruits} category="Fruits"></List>:null}
          {vegetables.length>0 ?<List items={vegetables} category="Vegetables"></List>:null}
    </>
  );
}

export default App
