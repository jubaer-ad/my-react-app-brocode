
function List(){
    const fruits = [
        {id: 1, name: 'orange', calories: 45},
        {id: 2, name: 'apple', calories: 45},
        {id: 3, name: 'pineapple', calories: 37},
        {id: 4, name: 'banana', calories: 105},
    ]
    const idOrdered = [...fruits].sort((a, b) => a.id - b.id);
    const nameOrdered = [...fruits].sort((a, b) => a.name.localeCompare(b.name));
    const caloryOrdered = [...fruits].sort((a, b) => a.calories - b.calories);
    const lowCal = fruits.filter(fruit => fruit.calories < 100);

    const idOrderedListItems = idOrdered.map(fruit => <li>id: {fruit.id}, name: {fruit.name}, calories: {fruit.calories}</li>);
    const nameOrderedListItems = nameOrdered.map(fruit => <li>id: {fruit.id}, name: {fruit.name}, calories: {fruit.calories}</li>);
    const caloryOrderedListItems = caloryOrdered.map(fruit => <li>id: {fruit.id}, name: {fruit.name}, calories: {fruit.calories}</li>);
    const lowCalItems = lowCal.map(fruit => <li>id: {fruit.id}, name: {fruit.name}, calories: {fruit.calories}</li>);

    return(<>
    <div>
        <h2>ID Ordered</h2>
        <ul>{idOrderedListItems}</ul>
    </div>
    <div>
        <h2>Name Ordered</h2>
        <ul>{nameOrderedListItems}</ul>
    </div>
    <div>
        <h2>Calory Ordered</h2>
        <ul>{caloryOrderedListItems}</ul>
    </div>
    <div>
        <h2>Low Calory</h2>
        <ul>{lowCalItems}</ul>
    </div>
    </>);
}

export default List