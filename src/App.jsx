import AllTheBooks from "./components/AllTheBooks";
import MyFooter from "./components/MyFooter";
import MyNavbar from "./components/MyNavbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Welcome from "./components/Welcome";
import SingleBook from "./components/SingleBook";
import Fantasy from "./components/Fantasy";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <>
      <MyNavbar />
      <Welcome />
      <SearchBar/>
      <AllTheBooks />
      <SingleBook/>
      <Fantasy/>
      <MyFooter />
    </>
  );
}

export default App;
