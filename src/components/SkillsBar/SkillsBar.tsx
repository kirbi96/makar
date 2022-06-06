import React, {useEffect, useState} from "react";
import "./SkillsBar.css"

interface ISkillsBar{
    stack: string
    percent: number
    index: number
}

export const SkillsBar = ({stack, percent, index}: ISkillsBar) => {
    const [count, setCount] = useState(0)

    const detectDelay = () =>{
        setTimeout(() =>{
            increaseCount()
        }, 150 * index)
    }

    const increaseCount = () => {
        if(count < percent / 2.3) {
            setTimeout(() => {
                setCount(count + 1)
            },50)
        }
    }

    useEffect(() =>{
        detectDelay()
    },[])

    useEffect(() =>{
        if(count > 0){
            increaseCount()
        }
    },[count])

    return(
            <div className={"skillContainer"}>
                <div className={"skillStackName"}>* {stack}</div>
                <div className={"progressBarContainer"}>
                    <div style={{width: `${percent}%`}} className={"progressBarFull"}>
                        {/*<div className={"progressBarHideItem"}/>*/}
                        {[...new Array(100)].slice(0,count).map((_, index) => (
                            <div key={index} className={"progressBarItem"}/>
                        ))}
                    </div>
                    <div className={"percentText"}>{percent}%</div>
                </div>
            </div>
    )
}
