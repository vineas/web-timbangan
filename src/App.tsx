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
        <div className="flex h-screen mt-9">
          <SidebarComponent />
          <main className="flex-1 p-4 pt-5 h-screen overflow-y-auto">
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
