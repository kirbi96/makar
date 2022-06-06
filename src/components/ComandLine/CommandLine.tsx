import React, {useRef, useState} from "react";
import "./ComandLine.css"
import {useNavigate} from "react-router-dom";
import {ECommand} from "../../types/types";

export const CommandLine = () =>{
    const navigate = useNavigate();

    const [command, setCommand] = useState("")
    const inputRef = useRef<HTMLInputElement| null>(null);

    const changeCommand = (e: any) =>{
        const v = e.target.value
        setCommand(v)
        if(v === ECommand.HOME){
            navigate("/")
        }

        if(v === ECommand.ABOUT || v === ECommand.SKILLS || v === ECommand.PROJECTS || v === ECommand.CONTACTS){
            navigate(v)
        }
    }

    return(
        <div onClick={() => inputRef?.current?.focus()} className={"commandLineContainer"}>
            <p>{"user>"}</p>

            <div className={"commandLineContainer"}>
                <span className={'commandLine'}>{command}</span>

                <input
                    maxLength={10}
                    ref={inputRef}
                    className={"commandLineInput"}
                    value={command}
                    onChange={changeCommand}
                    autoFocus={true}
                    type={'text'}
                />

                <div className={"caret"}/>
            </div>

        </div>
    )
}
