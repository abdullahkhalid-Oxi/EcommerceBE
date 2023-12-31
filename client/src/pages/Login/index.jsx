import { useState } from "react";
import Container from "react-bootstrap/Container";
import "./login.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router";
import Snackbar from "@mui/material/Snackbar";


const Login = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [open, setOpen] = useState(false);

  const handleChange = (ev) => {
    const { value, name } = ev.target;
    if (name === "userName") {
      setUserName(value);
    }
    if (name === "password") {
      setPassword(value);
    }
  };

  const handleSubmit = async () => {
    const userData = { userName, password };
    const response = await fetch("/users/login", {
      // local
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    console.log(" submit click .. response = ", response)
    const data = await response.json();
    if (data.UserModel) {
      localStorage.setItem("user", JSON.stringify(data.UserModel));
      // localStorage.setItem("token", JSON.stringify(data.token));
      navigate("/addproduct");
      return;
    }
    else {
      console.log("Data", data)
    }
    setOpen(true);
  };

  return (
    <div>
      <Container className="rootContainer">
        <h4>Login Page</h4>
        <TextField
          fullWidth
          value={userName}
          onChange={handleChange}
          name="userName"
          label="User Name"
          variant="outlined"
        />
        <TextField
          fullWidth
          onChange={handleChange}
          value={password}
          type="password"
          name="password"
          label="Password"
          variant="outlined"
        />
        <Button onClick={handleSubmit} fullWidth variant="contained">
          LOGIN
        </Button>
      </Container>

      <Snackbar
        open={open}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        autoHideDuration={5000}
        // onClose={handleClose}
        message="Login Failed"
      // action={action}
      />
    </div>
  );
};

export default Login;
