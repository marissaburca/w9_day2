import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomNavbar from "./components/MyNav";
import CustomWelc from "./components/Welcome";
import CustomFtr from "./components/MyFooter";
import AllTheBooks from "./components/AllTheBooks";
import BookList from './components/BookList'
import fantasy from './books/fantasy.json'
import history from './books/history.json';
import horror from './books/horror.json';
import romance from './books/romance.json';
import scifi from './books/scifi.json';



function App() {
  return (
    <div>
      <CustomNavbar />
      <CustomWelc/>
      <BookList fantasy={fantasy}/>
      <AllTheBooks/>
      <CustomFtr/>
    </div>
  );
}

export default App;
