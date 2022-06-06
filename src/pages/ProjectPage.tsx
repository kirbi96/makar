import React from "react";
import {CommandLine} from "../components/ComandLine/CommandLine";

export const ProjectPage = () =>{
    return(
        <div>
            <div>
                {'> home'} (вернуться на главную)<br/>
            </div>

            <CommandLine/>
        </div>
    )
}
