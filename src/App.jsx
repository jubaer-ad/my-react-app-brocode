import Student from "./Student";



function App() {
  return (
    <>
      <Student name="Shaakira" age={45} isStudent={false} />
      <Student name="JLO" age={49} isStudent={true} />
      <Student />
    </>
  );
}

export default App
