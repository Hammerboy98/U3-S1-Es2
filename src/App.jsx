import AllTheBooks from "./components/AllTheBooks";
import MyFooter from "./components/MyFooter";
import MyNavbar from "./components/MyNavbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Welcome from "./components/Welcome";

function App() {
  return (
    <>
      
      <MyNavbar />
      <Welcome />
      <AllTheBooks />
      <MyFooter />
    </>
  );
}

export default App;
