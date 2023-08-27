import { createContext, useState } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [isLoggedIn, setLoginState] = useState(false);

  const logIn = async (username, password,employeeId = "") => {
    console.log("logging in", username);
    const url = "https://localhost:7033/api/LoanLoggerNew";
    if (username === "admin" && password === "12345") {
      setLoginState(true);
      navigate("/AdminDashboard");
    } else {
      try {
        const result = await axios.post(url, {
          Name: username,
          password: password,
        });
        console.log(result.data);
        setLoginState(true);
        const loginData={
          Name: username,
          password: password,
          employeeId:employeeId
        }
        window.sessionStorage.setItem("loginData",JSON.stringify(loginData));

        navigate("/dashboard");
      } catch (error) {
        alert(error);
      }
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
      const UserData= {
        username: username,
        password: password,
        Name: name,
        email: email,
        designation: designation,
        department: department,
        dateofBirth: DOB,
        dateofJoining: DOJ,
        employeeId: empID,
        Gender: gender,
      }
      const result = await axios.post(url, UserData);
      console.log(result.data);
      window.sessionStorage.setItem("UserDataSession",JSON.stringify(UserData));
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
