import UserGreeting from "./UserGreeting";


function App() {
  return (
    <>
    <UserGreeting isLoggedIn={true} name='amanda' gg="gg"/>
    <UserGreeting/>
    <UserGreeting isLoggedIn={true}/>
    </>
  );
}

export default App
