import propTypes from 'prop-types'

function List(props) {
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