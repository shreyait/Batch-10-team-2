import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './../view/login.css';
import {Routes, Route, useNavigate} from 'react-router-dom';
import Register from './register';


export default function Login(){
    const navigate = useNavigate();

    const navigateRegister = () => {
        navigate('/register');
    };
    return(
        <div className='LoginCard'>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter username" />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="dark" type="submit" onClick={navigateRegister}>
                    Sign up!
                </Button>
                <Button className='button2' variant="primary" type="submit" >
                    Login
                </Button>
                <Routes>
                    <Route path='/register' element={<Register />}></Route>
                </Routes>
                
                
            </Form>
        </div>
    )
}