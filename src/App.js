import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomNavbar from "./components/MyNav";
import CustomWelc from "./components/Welcome";
import CustomFtr from "./components/MyFooter";


function App() {
  return (
    <div>
      <CustomNavbar />
      <CustomWelc/>
      <CustomFtr/>
    </div>
  );
}

export default App;
