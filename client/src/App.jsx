import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Navbar/Header";

function App() {
  return (
    <div className="bg-slate-700 min-h-screen">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
