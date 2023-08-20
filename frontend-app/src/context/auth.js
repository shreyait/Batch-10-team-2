import { createContext, useState } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [isLoggedIn, setLoginState] = useState(true);

  const logIn = async (username, password) => {
    console.log("logging in", username);
    const url = "https://localhost:7033/api/LoanLoggerNew/login";
    try {
      const result = await axios.post(url, {
        Name: username,
        password: password,
      });
      alert(result.data);
      setLoginState(true);
      navigate("/dashboard");
    } catch (error) {
      alert(error);
    }
  };

  const logOut = () => {
    console.log("logging out");
    setLoginState(false);
  };

  const register = async ({
    username,
    password,
    name,
    email,
    gender,
    department,
    designation,
    DOB,
    DOJ,
    empID,
  }) => {
    const url = "https://localhost:7033/api/Registrations";
    console.log("registering", username);
    try {
      const result = await axios.post(url, {
        userName: username,
        password: password,
        name: name,
        email: email,
        designation: designation,
        department: department,
        dateofBirth: DOB,
        dateofJoining: DOJ,
        empId: empID,
        Gender: gender,
      });
      alert(result.data);
      setLoginState(true);
      navigate("/dashboard");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, setLoginState, logIn, logOut, register }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };
