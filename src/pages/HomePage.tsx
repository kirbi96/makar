import React from "react";
import Typewriter from "typewriter-effect";
import {des} from "../const/strings";
import {Link} from "react-router-dom";
import {CommandLine} from "../components/ComandLine/CommandLine";
import "./HomePage.css"

export const HomePage = () => {

    return(
        <div>
            <Typewriter
                options={{
                    delay: 40,
                    cursor: "",
                }}
                onInit={(typewriter)=> {
                    typewriter
                        .typeString("Hi username")
                        .pauseFor(100)
                        .deleteChars(8)
                        .typeString("%username%")
                        .start();
                }}
            />
            <Typewriter
                options={{
                    delay: 10,
                    cursor: "",
                }}
                onInit={(typewriter)=> {
                    typewriter
                        .pauseFor(3000)
                        .typeString(des)
                        .start();
                }}
            />

            <CommandLine/>

            <div className={"modeButtonContainer"}>
                <Link to={"/about"} className={"modeButton"}>About</Link>
                <Link to={"/skills"} className={"modeButton"}>Skills</Link>
                <Link to={"/projects"} className={"modeButton"}>Projects</Link>
                <Link to={"/contacts"} className={"modeButton"}>Contacts</Link>
            </div>
        </div>
    )
}
