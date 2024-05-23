import About from "./View/About";
import "./App.css";
import Header from "./Component/Header";
import Switcher from "./View/Switcher";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./View/ThemeContext";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <ThemeProvider>
          <Routes>
            <Route path="/" element={<Switcher />}></Route>
            <Route path="/About" element={<About />}></Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
