import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./components/header";
import AddBooks from "./view/addBook";
import Dashboard from "./view/dashboard";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/addbook" element={<AddBooks />} />
          <Route path="/editbook/:id" element={<AddBooks />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
