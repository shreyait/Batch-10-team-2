import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './../view/register.css';
import {Routes, Route, useNavigate} from 'react-router-dom';
import { useEffect , useState } from 'react';
import axios from "axios";

export default function Register(){
 
    const [username, setusername] = useState('');
    const [password, setpassword] = useState(' ');
    const [name, setname] = useState('');
    const [email, setemail] = useState(' ');
    const handleUserNameChange = (value)=>{
        setusername(value);
    }
    const handlePasswordChange = (value)=>{
        setpassword(value);
    }
    const handleNameChange = (value)=>{
        setname(value);
    }
    const handleEmailChange = (value)=>{
        setemail(value);
    }

    const handleSave = () => {
        const data = {
            userName : username,
            password : password,
            name : name,
            email : email
        };
    const url = '';
    axios.post(url,data).then((result) =>{
         alert(result.data);
    }).catch((error)=>{
        alert(error);
    })
    }

    return(
        <div className='RegisterCard'>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter your fullname" onChange={(e) => handleNameChange(e.target.value)}/>
                        <Form.Text className="text-muted">
                        </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={(e) => handleEmailChange(e.target.value)}/>
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter your username" onChange={(e) => handleUserNameChange(e.target.value)} />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={(e) => handlePasswordChange(e.target.value)} />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={() => handleSave()}>
                    Register
                </Button>
            </Form>
        </div>
    )
}
