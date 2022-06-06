import React, {useState} from 'react';
import './App.css';
import {
    Routes,
    Route,
} from "react-router-dom";
import {HomePage} from "./pages/HomePage";
import {SkillsPage} from "./pages/SkillsPage";
import {ContactsPage} from "./pages/ContactsPage";
import {ProjectPage} from "./pages/ProjectPage";
import {AboutPage} from "./pages/AboutPage";

const App = () => {
    const [onComp, setOnComp] = useState(true);

    return (
    <div className="App">
        <div className={"compContainer"}>
            <div className={"comp"} style={{backgroundImage: `url(${require("./assets/images/comp.png")})`}}>
                <div className="inCompContainer text">
                    <Routes>
                        <Route path={"/"} element={<HomePage/>}/>
                        <Route path={"/about"} element={<AboutPage/>}/>
                        <Route path={"/skills"} element={<SkillsPage/>}/>
                        <Route path={"/project"} element={<ProjectPage/>}/>
                        <Route path={"/contacts"} element={<ContactsPage/>}/>
                    </Routes>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
