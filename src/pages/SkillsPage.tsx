import React from "react";
import {CommandLine} from "../components/ComandLine/CommandLine";
import "./SkillsPage.css"
import {SkillsBar} from "../components/SkillsBar/SkillsBar";

export const SkillsPage = () =>{
    return(
        <div>
            <div>
                <div className={"skillGroupTitle"}>Mobile</div>
                <div>
                    <SkillsBar stack={"React-Native"} percent={80} index={0}/>
                    <SkillsBar stack={"Flatter"} percent={40} index={1}/>
                    <SkillsBar stack={"Kotlin"} percent={40} index={2}/>
                    <SkillsBar stack={"Swift"} percent={36} index={3}/>
                </div>
            </div>

            <div>
                <div className={"skillGroupTitle"}>Web</div>
                <div>
                    <SkillsBar stack={"JavaScript"} percent={86} index={5}/>
                    <SkillsBar stack={"TypeScript"} percent={82} index={6}/>
                    <SkillsBar stack={"MobX/Redux"} percent={76} index={7}/>
                    <SkillsBar stack={"HTML/CSS"} percent={64} index={8}/>
                </div>
            </div>
            <div className={"commandContainer"}>
                {'> home'} (вернуться на главную)<br/>
            </div>

            <CommandLine/>
        </div>
    )
}
