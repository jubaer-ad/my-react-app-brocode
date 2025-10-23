import List from "./List";



function App() {
  const fruits = [
        {id: 1, name: 'orange', calories: 45},
        {id: 2, name: 'apple', calories: 45},
        {id: 3, name: 'pineapple', calories: 37},
        {id: 4, name: 'banana', calories: 105},
    ]
    const vegetables = [
        {id: 1, name: 'shosha', calories: 45},
        {id: 2, name: 'korola', calories: 45},
        {id: 3, name: 'misti kumra', calories: 37},
        {id: 4, name: 'mulaa', calories: 105},
    ]
    const idOrdered = [...fruits].sort((a, b) => a.id - b.id);
    const nameOrdered = [...fruits].sort((a, b) => a.name.localeCompare(b.name));
    const caloryOrdered = [...fruits].sort((a, b) => a.calories - b.calories);
    const lowCal = fruits.filter(fruit => fruit.calories < 100);
  return (
    <>
    <List/>
    <List items={idOrdered}/>
    <List category="Name" items={nameOrdered}/>
    <List category="Cal" items={caloryOrdered}/>
    <List items={lowCal} category="LowCal"/>
    <List items={vegetables} category="Vegetables"/>
    </>
  );
}

export default App
