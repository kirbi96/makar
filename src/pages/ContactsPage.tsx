import React, {useEffect, useState} from "react";
import "./ContactsPage.css"
import {useWindowDimensions} from "../hooks/getWindowDimensions";

export enum EScreenSize {
    SMALL = "small",
    TABLET = "tablet",
    FULL = "full",
}

export const ContactsPage = () =>{
    const [left, setLeft] = useState(0)
    const [top, setTop] = useState(0)
    const [rotate, setRotate] = useState(180)
    const [showInfo, setShowInfo] = useState(false)
    const [showGame, setShowGame] = useState(false)

    const { width } = useWindowDimensions();

    const size: EScreenSize = width < 699
        ? EScreenSize.SMALL
        : width >= 900
            ? EScreenSize.FULL
            : EScreenSize.TABLET

    const detMin = 30;
    const detMax = size === EScreenSize.SMALL ? 200 : size === EScreenSize.FULL? 400 : 270;

    console.log(123123123, left, top)

    const pressTop = () =>{
        startGame();
        if(top > detMin && showGame){
            setRotate(180)
            setTop(prev => prev - detMin)
        }
    }

    const pressBottom = () =>{
        startGame();
        if(top < detMax && showGame){
            setRotate(0)
            setTop(prev => prev + detMin)
        }
    }

    const pressLeft = () =>{
        startGame();
        if(left > detMin && showGame){
            setRotate(90)
            setLeft(prev => prev - detMin)
        }
    }

    const pressRight = () =>{
        startGame();
        if(left < detMax && showGame){
            setRotate(270)
            setLeft(prev => prev + detMin)
        }
    }

    const startGame = () =>{
        if (!showGame){
            setShowGame(true)
        }
    }

    const correctRoad = () =>{
        if(size === EScreenSize.FULL){
            if(left >= 30 && left <= 60 && top >= 130 && top <= 220){
             startPosition()
            }

            if(left >= 300 && left <= 370 && top >= 310 && top <= 370){
                startPosition()
            }
        }

        if(size === EScreenSize.TABLET){
            if(left >= 30 && left <= 60 && top >= 150 && top < 210){
                startPosition()
            }

            if(left >= 210 && left <= 240 && top === 270 ){
                startPosition()
            }
        }

        if(size === EScreenSize.SMALL){
            if(left === 30 && top >= 90 && top <= 120){
                startPosition()
            }

            if(left >= 100 && left <= 130 && top >= 150 && top <= 180){
                startPosition()
            }
        }
    }

    const isShowInfo = () =>{
        if(size === EScreenSize.SMALL){
            if(top === 30 && left === 180 && !showInfo){
                setShowInfo(true)
            } else {
                setShowInfo(false)
            }
        }

        if(size === EScreenSize.TABLET){
            if(top === 30 && left === 240 && !showInfo){
                setShowInfo(true)
            } else {
                setShowInfo(false)
            }
        }

        if(size === EScreenSize.FULL){
            if(top === 10 && left === 360 && !showInfo){
                setShowInfo(true)
            } else {
                setShowInfo(false)
            }
        }
    }

    const startPosition = () =>{
        if(size === EScreenSize.SMALL){
            setLeft(30)
            setTop(180)
            setRotate(0)
        }

        if(size === EScreenSize.TABLET){
            setLeft(30)
            setTop(270)
            setRotate(180)
        }

        if(size === EScreenSize.FULL){
            setLeft(30)
            setTop(400)
            setRotate(180)
        }
    }


    useEffect(() =>{
        isShowInfo()
        correctRoad()
    },[top, left])

    useEffect(() =>{
        startPosition()
    },[])


    return(
        <div className={"contactsPageContainer"}>
            <div className={'back'}>назад</div>
            {showInfo &&(
                <div>
                    <div>мои ссылки</div>
                    <div>мои ссылки</div>
                    <div>мои ссылки</div>
                    <div>мои ссылки</div>
                </div>
            )}
            <div className={"keyContainer"}>
                <div className={"keyTop"} onClick={pressTop}>
                    <img className={"keyItem"} src={require("../assets/images/up.png")} alt={''}/>
                </div>
                <div className="keyDown">
                    <div onClick={pressLeft}>
                        <img className={"keyItem"} src={require("../assets/images/left.png")} alt={''}/>
                    </div>
                    <div onClick={pressBottom}>
                        <img className={"keyItem"} src={require("../assets/images/down.png")} alt={''}/>
                    </div>
                    <div onClick={pressRight}>
                        <img className={"keyItem"} src={require("../assets/images/right.png")} alt={''}/>
                    </div>
                </div>

            </div>

            {!showGame ? (
                <>
                    <div>
                        <div className={"gameRules"}>
                            <div>Для получения контактов доставьте машину до гаража</div>
                            <div onClick={startGame} className={"startGame"}>кликни чтобы начать</div>
                        </div>
                        <img className={"game"} src={require("../assets/images/game.gif")} alt={"game image"}/>
                    </div>
                </>
            ) : (
                <>
                    <img
                        style={{left, top, transform: `rotate(${rotate}deg)`}}
                        className={"car"}
                        src={require("../assets/images/car.png")}
                        alt={''}
                    />
                    <img style={{ zIndex: showInfo ? 1000 : 0}} className={"garage"} src={require("../assets/images/garage.png")} alt={''}/>

                    <img className={"road1"} src={require("../assets/images/road.jpg")} alt={''}/>
                    <img className={"road2"} src={require("../assets/images/road.jpg")} alt={''}/>
                    <img className={"road3"} src={require("../assets/images/road.jpg")} alt={''}/>
                    <img className={"tree1"} src={require("../assets/images/palm.png")} alt={''}/>
                    <img className={"tree2"} src={require("../assets/images/palm.png")} alt={''}/>
                </>
            )}
        </div>
    )
}
