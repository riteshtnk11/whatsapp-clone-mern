import React from "react";
import "./App.css";
import Chat from "./Chat";
import Sidebar from "./Sidebar";

function App() {
  return (
    <div className="app">
      <div className="app__body">
        {/* Sidebar Component of whatsapp 40% */}
        <Sidebar />
        {/* Chat component of whatsapp 60%*/}
        <Chat />
      </div>
    </div>
  );
}

export default App;
