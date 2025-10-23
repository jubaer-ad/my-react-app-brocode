
function List({category = 'default',  items = []}) {

    const listItems = items.map(item => <li>name: {item.name}, calories: {item.calories}</li>);

    return(<> 
    {
    items.length === 0 ? 
        <></>:
        <div className="list-card">
            <h2 className="list-category">{category}</h2>
            <ol className="list-item">{listItems}</ol>
        </div>}
    </>);
}

export default List