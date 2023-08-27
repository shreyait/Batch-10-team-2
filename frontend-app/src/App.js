import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styles from "./App.module.css";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import Home from "./components/home";
import Login from "./components/login";
import AdminDashboard from "./components/AdminDashboard";
import AddEmployee from "./components/AddEmployee";
import EditEmployeeData from './components/EditEmployeeData';
import NotFound from "./components/PageNotFound";
import Dashboard from "./components/dashboard";
import Register from "./components/register";
import DisplayLoanCards from "./components/displayLoanCards";
import LoanApply from "./components/LoanApply";
import ItemPurchased from "./components/ItemPurchased";
import logoPng from "./assets/lama-logo.png";
import { useState, useContext } from "react";
import { AuthContext } from "./context/auth";
import background from "./assets/login-bg.jpg";
import ItemMaster from "./components/ItemMaster";
import CustomerMaster from "./components/customerMaster";
import LoanMaster from "./components/LoanMaster";
import AdminLogin from "./components/adminLogin";

function App() {
  const { isLoggedIn, logOut } = useContext(AuthContext);

  return (
    <div>
      <Navbar
        className={`${styles["NavHome"]} bg-body-tertiary`}
        bg="light"
        data-bs-theme="light"
        collapseOnSelect
        expand="lg"
        // style={{ backgroundImage: `url(${background})` }}
      >
        <Container className={styles["navlinks"]}>
          <Navbar.Brand as={Link} className={styles["NavbarBrand"]} to="/">
            <img className={styles["NavImage"]} src={logoPng} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className={`me-auto ${styles["NavLink"]}`}>
              <Nav.Link as={Link} to="/">
                HOME
              </Nav.Link>
              {!isLoggedIn && (
                <Nav.Link as={Link} to="/login">
                  LOGIN
                </Nav.Link>
              )}
              {!isLoggedIn && (
                <Nav.Link as={Link} to="/adminLogin">
                  ADMIN
                </Nav.Link>
              )}
            </Nav>
            
            <Nav>
              {isLoggedIn && (
                <Nav.Link
                  className={styles["navlink"]}
                  as={Link}
                  to="/login"
                  onClick={logOut}
                >
                  LOG OUT
                </Nav.Link>
              )}
            </Nav>
            {/* <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link> */}
            {/* <Nav.Link as={Link} to ="/register">Register</Nav.Link> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          {isLoggedIn && <Route path="/dashboard" element={<Dashboard />} />}
          {isLoggedIn && (
            <Route path="/DisplayLoanCards" element={<DisplayLoanCards />} />
          )}
          {isLoggedIn && <Route path="/LoanApply" element={<LoanApply />} />}
          {isLoggedIn && (
            <Route path="/ItemPurchased" element={<ItemPurchased />} />
          )}
          <Route path="/register" element={<Register />} />
            <Route path="/AdminDashboard" element={<AdminDashboard />} />
          <Route path="/ItemMaster" element={<ItemMaster />} />
          <Route path="/CustomerMaster" element={<CustomerMaster />} />
          <Route path="/LoanMaster" element={<LoanMaster />} />
          <Route path="/AddEmployee" element={<AddEmployee />} />
          <Route path="/EditEmployeeData" element={<EditEmployeeData />} />
            <Route path="/adminLogin" element={<AdminLogin/>}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
