import { BrowserRouter, Route, Routes } from "react-router";
import Login from "../src/components/Login"
import Register from "../src/components/Register"


function App() {
  return (
    <>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
        </Routes>
      </BrowserRouter> */}
      {/* <Login/> */}
      <Register/>
    </>
  );
}

export default App;
