import "./css/App.css";
import {BrowserRouter as Router ,Route , Routes} from 'react-router-dom'
import Header from "./components/Header";
import Home from "./components/Home";
import Cartproduct from "./components/Cartproduct";
import { Contextapi } from "./context/Contextapi";
import { useState } from "react";

function App() {
  const [user,setUser] = useState([])
return (
  <div>
    <Router>
      <Contextapi.Provider value={{user,setUser}}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Cart" element={<Cartproduct />}></Route>
        </Routes>
      </Contextapi.Provider>
    </Router>
  </div>
);
}

export default App;
