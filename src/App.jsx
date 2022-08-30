import React, { useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import { useSelector } from "react-redux";
import { io } from "socket.io-client";

// const socket = io("http://localhost:8080/", { transports: ["websocket"] });

function App() {
  const socket = useRef();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    socket.current = io("http://localhost:8080/", {
      transports: ["websocket"],
    });
  }, []);

  return (
    <div>
      <Router>
        <Routes>
          <Route
            path="/register"
            element={user.isUserLoggedIn ? <Home /> : <Register />}
          />
          <Route
            path="/login"
            element={user.isUserLoggedIn ? <Home /> : <Login />}
          />
          <Route
            path="/"
            element={user.isUserLoggedIn ? <Home /> : <Login />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
