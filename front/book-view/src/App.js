//import './App.css';
import SignUp from './component/Auth/SignUp';
import Header from './component/Layout/Header';
import Layout from './component/Layout/Layout';
import Login from './component/Auth/Login';
import { Routes , Route, Link } from "react-router-dom";



function App() {
  return (
    <div className="App">
      <nav>

        <Header />
      </nav>
      <Routes>
        <Route path ="/" element = {<SignUp />} />
        <Route path ="/login" element = {<Login />} />
      </Routes>




    </div>
  );
}

export default App;