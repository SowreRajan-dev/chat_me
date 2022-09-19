import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import { useSelector, useDispatch } from "react-redux";
import { io } from "socket.io-client";
import { SocketContext } from "./context/socket";
import ConversationProvider from "./context/conversations";

function App() {
  const user = useSelector((state) => state.user);
  // const dispatch = useDispatch();
  const [socket, setSocket] = useState();
  let id = null;
  if (id === null) {
    id = user.userInfo._id;
  }

  useEffect(() => {
    if (!user.isUserLoggedIn && id === null && id === undefined) return;

    const newSocket = io("http://localhost:8080/", {
      query: {
        id,
      },
    });

    setSocket(newSocket);
  }, [user.isUserLoggedIn, id]);
  return (
    <div>
      <SocketContext.Provider value={socket}>
        <ConversationProvider>
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
        </ConversationProvider>
      </SocketContext.Provider>
    </div>
  );
}

export default App;
