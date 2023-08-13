import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from './logo.svg';
import './App.css';
import {Routes, Route, Link} from 'react-router-dom';
import Home from './components/home';
import Login from './components/login';
import Dashboard from './components/dashboard';
import Register from './components/register';

function App() {
  return (
    <div>
      <Navbar className='HomeNav' bg="light" data-bs-theme="light">
        <Container>
          <img href="./assets/lama-logo.png"/>
          <Navbar.Brand className='NavbarBrand' href="/">
            
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
            {/* <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link> */}
            {/* <Nav.Link as={Link} to ="/register">Register</Nav.Link> */}
          </Nav>
        </Container>
      </Navbar>


      <div className='container'>
        <Routes>
          <Route path='/' element={<Home />} /> 
          <Route path='/login' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
