import React from "react";
import {CommandLine} from "../components/ComandLine/CommandLine";
import "./AboutPage.css"
// @ts-ignore
import mario from '../assets/images/mario.gif'


export const AboutPage = () =>{

    return(
        <div>
            <p>Люблю свою работу и кайфую от того что делаю.</p>
            <p>2,5 года опыта комерческой разработки, и большое количество разных проектов</p>
            <p>Веду свой YouTube канал {" "}
                <a target={"_blank"} style={{color: "yellow"}} href={"https://www.youtube.com/channel/UCTx46B991tGoUfCey0Emp1A"}>Ссылка</a>
            </p>
            <div>
                {'> home'} (вренуться на главную)<br/>
            </div>


            <CommandLine/>

            <img className={"mario"} src={mario} alt="." />
        </div>
    )
}
