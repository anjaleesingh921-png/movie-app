
import Header from "./components/Header";
import "./App.css";
import SearchBar from"./components/searchBar";
function App() {
  return (
    <div className="container">
    <Header />
    <SearchBar/>
    <p>search your favourite movies</p>

    </div>
  );
}
export default App;