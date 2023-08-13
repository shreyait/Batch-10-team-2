import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './../view/login.css';
import {Routes, Route, useNavigate} from 'react-router-dom';
import Register from './register';
import { useEffect , useState } from 'react';
import axios from "axios";

export default function Login(){
   
    const [username, setusername] = useState('');
    const [password, setpassword] = useState(' ');
    const handleUsernameChange = (value)=>{
        setusername(value);
    }
    const handlePasswordChange = (value)=>{
        setpassword(value);
    }

    const handleSave = () => {
        const data = {
            UserName : username,
            Password : password
        };
        const url = '';
        axios.post(url,data).then((result) => {
            alert(result.data);
        }).catch((error) => {
            alert(error);
        })
    }
  const navigate = useNavigate();

    const navigateRegister = () => {
        navigate('/register');
    };
   
    return(
        <div className='LoginCard'>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter username" onChange={(e) => handleUsernameChange(e.target.value)} />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={(e) => handlePasswordChange(e.target.value)} />
                </Form.Group>
                 <Button variant="dark" type="submit" onClick={navigateRegister}>
                    Sign up!
                </Button>
                <Button className='button2' variant="primary" type="submit" onClick={() => handleSave()} >
                    Login
                </Button>
                <Routes>
                    <Route path='/register' element={<Register />}></Route>
                </Routes>
            </Form> 
        </div>
    )
}
