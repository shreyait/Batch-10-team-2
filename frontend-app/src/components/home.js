import Button from 'react-bootstrap/Button';
import {Routes, Route, useNavigate} from 'react-router-dom';
import Login from './login';

export default function Home(){
    const navigate = useNavigate();

    const navigateRegister = () => {
        navigate('/login');
    };

    return(
        <div>
            <img src="./../assets/lama-logo.png"/>
            <Button variant="primary" type="submit" onClick={navigateRegister}>
                Get Started
            </Button>


            <Routes>
                <Route path='/login' element={<Login />}></Route>
            </Routes>
        </div>
    )
}