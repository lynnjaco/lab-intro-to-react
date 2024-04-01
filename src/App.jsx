import React from "react";
import "./index.css";
import { NavBar } from "./Components/NavBar";
import { UserProfile } from "./Components/UserProfile";
import { Posts } from "./Components/Posts";
import { Contacts } from "./Components/Contacts";
import { AddPostForm } from "./Components/AddPostForm";

function App() {
  return (
    <div id="page-container">
      <header>
        <NavBar/>
      </header>
      <main>
        <div id="left-page-column">
            <UserProfile/>
            <AddPostForm/>
            <Contacts/>
        </div>
        <div id="right-page-column">
          <Posts/>
        </div>
      </main>
    </div>
  )
}

export default App;
