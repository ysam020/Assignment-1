import "./App.css";
import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import axios from "axios";
import UserCard from "./components/UserCard";

function App() {
  // useState
  const [users, setUsers] = useState([]);
  const [loader, setLoader] = useState(false);

  const getUsers = async () => {
    setLoader(true);

    const response = await axios.get("https://reqres.in/api/users?page=1");
    setUsers(response.data);
    setLoader(false);
  };

  return (
    <div className="App">
      <div className="appbar">
        <AppBar position="static" sx={{ backgroundColor: "#111B21" }}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Wiofy
            </Typography>
            <Button color="inherit" onClick={getUsers}>
              Get Users
            </Button>
          </Toolbar>
        </AppBar>
      </div>
      <UserCard getUsers={getUsers} users={users} loader={loader} />
    </div>
  );
}

export default App;
