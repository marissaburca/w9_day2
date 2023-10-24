import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomNavbar from "./components/MyNav";
import CustomWelc from "./components/Welcome";
import CustomFtr from "./components/MyFooter";
import AllTheBooks from "./components/AllTheBooks";


function App() {
  return (
    <div>
      <CustomNavbar />
      <CustomWelc/>
      <AllTheBooks/>
      <CustomFtr/>
    </div>
  );
}

export default App;
