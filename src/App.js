import { BrowserRouter, Routes, Route } from "react-router-dom";
import Master from "./components/Master";
import Tabletwo from "./components/Tabletwo";
import Billing from "./components/Billing";
import Navbar from "./components/Navbar";
import Notification from "./components/Notification";
import Dashboard from "./components/Dashboard";
import Func from "./components/Func";
import BillingLanding from "./components/BillingLanding";
import Tab from "./components/Tab";
import Profile from "./components/Profile";
import Footer from "./components/Footer";
import SignIn from "./components/SignIn";
// import Practice from "./components/Practice";

function App() {
  return (
    <div className="App">
      {/* <Func
        Navbar={<Navbar />}
        Dashboard={<Dashboard />}
        Content={<Master />}
      /> */}
      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/Tabletwo" element={<Tab />} />
          <Route path="/" element={<Master />} />
          <Route path="/Billing" element={<BillingLanding />} />
          <Route path="/Notification" element={<Notification />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/SignIn" element={<SignIn />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
