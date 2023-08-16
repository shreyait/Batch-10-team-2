import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styles from "./App.module.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/home";
import Login from "./components/login";
import Dashboard from "./components/dashboard";
import Register from "./components/register";
import DisplayLoanCards from "./components/displayLoanCards";
import LoanApply from "./components/LoanApply";
import ItemPurchased from "./components/ItemPurchased";
import logoPng from "./assets/lama-logo.png";

// console.log(process.env.REACT_APP_BACKEND_URL);

function App() {
  return (
    <div>
      <Navbar className={styles["NavHome"]} bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand as={Link} className={styles["NavbarBrand"]} to="/">
            <img className={styles["NavImage"]} src={logoPng} />
          </Navbar.Brand>
          <Nav className={`me-auto ${styles["NavLink"]}`}>
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/login">
              Login
            </Nav.Link>
            {/* <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link> */}
            {/* <Nav.Link as={Link} to ="/register">Register</Nav.Link> */}
          </Nav>
        </Container>
      </Navbar>

      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />-
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/register" element={<Register />} />
          <Route path="/DisplayLoanCards" element={<DisplayLoanCards />} />
          <Route path="/LoanApply" element={<LoanApply />} />
          <Route path="/ItemPurchased" element={<ItemPurchased />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
