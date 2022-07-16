import { Routes, Route } from "react-router-dom";
import "./App.css";
import CreateQuiz from "./Components/CreateQuiz/CreateQuiz";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";

import Home from "./Components/Home/Home";
import RequiredAuth from "./Components/RequiredAuth/RequiredAuth";
import SignIn from "./Components/SignIn/SignIn";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/signin" element={<SignIn></SignIn>}></Route>
        <Route
          path="/creatQuiz"
          element={
            <RequiredAuth>
              <CreateQuiz></CreateQuiz>
            </RequiredAuth>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
