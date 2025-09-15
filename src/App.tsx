import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { HeaderComponent } from "./components/Header";
import { SidebarComponent } from "./components/Sidebar";
import { CustomerPage } from "./Pages/Customer";
import { PenimbanganPage } from "./Pages/Penimbangan";
import { MasterProductsPage } from "./Pages/MasterProducts";
import { TransporterPage } from "./Pages/Transporter";

function App() {
  
  return (
    <>
      <Router>
          <HeaderComponent />
        <div className="flex h-screen ">
          <SidebarComponent />
          <main className="p-4 pt-15 overflow-y-scroll bg-gray-300">
            <Routes>
              <Route path="/" element={<PenimbanganPage />} />
              <Route path="/penimbangan" element={<PenimbanganPage />} />
              <Route path="/master-product" element={<MasterProductsPage />} />
              <Route path="/suplier-customer" element={<CustomerPage />} />
              <Route path="/transporter" element={<TransporterPage />} />
            </Routes>
          </main>
        </div>
      </Router>
    </>
  );
}

export default App;
