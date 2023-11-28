import "./css/App.css";
import {BrowserRouter as Router ,Route , Routes} from 'react-router-dom'
import Header from "./components/Header";
import Home from "./pages/Home";
import Cartproduct from "./pages/Cartproduct";
import { ContextApi } from "./context/ContextApi";
import { useState } from "react";

function App() {
  const [user,setUser] = useState([])
return (
  <div>
    <Router>
      <ContextApi.Provider value={{user,setUser}}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Cart" element={<Cartproduct />}></Route>
        </Routes>
      </ContextApi.Provider>
    </Router>
  </div>
);
}

export default App;
