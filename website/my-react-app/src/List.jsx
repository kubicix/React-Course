import propTypes from 'prop-types'

function List(props) {
    const fruits = [{id:1,name:"apple",calories :95},                         {id:2,name:"orange" ,calories:45}, 
                  {id:3,name:"banana",calories:105},
                  {id:4,name:"lime",calories:13}, 
                  {id:5,name:"blueberries",calories:29}];

  const vegetables = [{id:1,name:"potatoes",calories :110},             {id:2,name:"celery" ,calories:15}, 
                  {id:3,name:"carrots",calories:25},
                  {id:4,name:"corn",calories:63}, 
                  {id:5,name:"broccoli",calories:50}];
    const category=props.category;
    const itemList=props.items;
    //alphabetical
    // fruits.sort((a,b) => a.name.localeCompare(b.name)) 
    //reverse alphabetical
    // fruits.sort((a,b) => b.name.localeCompare(a.name))
    //numeric
    // fruits.sort((a,b) => a.calories -b.calories)
    // //reverse numeric
    // fruits.sort((a,b) => b.calories -a.calories)

    // const lowCalFruits= fruits.filter(fruit=>fruit.calories<100);
    // console.log(lowCalFruits);

    const listItems=itemList.map(fruit => 
    <li key={fruit.id}>{fruit.name}: &nbsp; <b>{fruit.calories}</b></li>
    
    );

    return (
        <>
        <h3 className="list-category">{category}</h3>
        <ol className="list-items">
            {listItems }      
        </ol>
        </>
        
    );
}
List.defaultProps={
    category : "Category",
    items : [],
}
List.propTypes={
    category:propTypes.string,
    items:propTypes.arrayOf(propTypes.shape({id:propTypes.number,name:propTypes.string,calories:propTypes.number})),
}

export default List;