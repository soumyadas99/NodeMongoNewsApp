import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
//import { Login } from "./pages/Login"; // Correct the import statement to use PascalCase
//import { Register } from "./pages/Register" ; // Correct the import statement to use PascalCase
import { Contact } from "./pages/Contact";
import { About } from "./pages/About";
import { Navbar } from "./components/Navbar";
import {AdminLayout} from "./components/layouts/Admin-Layout"
import { AdminUsers } from "./pages/Admin-Users";
import { AdminAddNews } from "./pages/Admin-Add-News";
import { Logout } from "./pages/Logout";
import { useAuth } from "./store/auth";
import { Login } from "./pages/login";
import { Register } from "./pages/register";
import { ViewNews } from "./pages/ViewNews";



const App = () => {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/admin" element={<AdminLayout/>}>
              <Route path="users" element={<AdminUsers />} />
              <Route path="addnews" element={<AdminAddNews />} />
              <Route path="viewnews" element={<ViewNews />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;