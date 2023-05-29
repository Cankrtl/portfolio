import "./App.css";
import { Home, About, Contact } from "./pages";
import { NavMain } from "./components/NavMain";
import { Logo } from "./components/Logo";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
    
      <header>
        <Logo />

        <NavMain />
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hakkımda" element={<About/>} />
          <Route path="/iletişim" element={<Contact/>} />
        </Routes>
      </main>

      <footer>
        <Logo />
      </footer>
    </>
  );
}

export default App;
