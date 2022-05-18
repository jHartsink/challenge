import "./App.css";
import Main from "./Pages/Main";
import NavProvider from "./Context/NavContext";


function App() {
  return (
    <>
      <NavProvider>
        <Main />
      </NavProvider>
    </>
  );
}

export default App;
