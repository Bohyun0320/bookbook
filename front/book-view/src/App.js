//import './App.css';
import SignUp from './component/Auth/SignUp';
import Header from './component/Layout/Header';
import Layout from './component/Layout/Layout';
import Login from './component/Auth/Login';
import { Route, Link } from "react-router-dom";



function App() {
  return (
    <div className="App">
      <Header />
      <SignUp />
      <Layout />


    </div>
  );
}

export default App;
