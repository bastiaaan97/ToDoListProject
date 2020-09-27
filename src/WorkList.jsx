import React from "react";
import {DoneButton} from "./DoneButton";


export function WorkList(props) {
    return <>
        <h1 id="naglowek1">Lista Zadań</h1>


        <ul id={"zadanie1"}>
            {props.task1.map((f)=><>{f}</>)}
            <div id="DoneButton1"><DoneButton defaultClick={"Zrobione"}/></div>
            <div id="DoneButton1"><DoneButton defaultClick={"Niezrobione"}/></div>
        </ul>
        <ul id={"zadanie2"}>
            {props.task2.map((f)=><>{f}</>)}
            <div id="DoneButton2"><DoneButton defaultClick={"Zrobione"}/></div>
            <div id="DoneButton2"><DoneButton defaultClick={"Niezrobione"}/></div>
        </ul>
        <ul id={"zadanie3"}>
            {props.task3.map((f)=><>{f}</>)}
            <div id="DoneButton3"><DoneButton defaultClick={"Zrobione"}/></div>
            <div id="DoneButton3"><DoneButton defaultClick={"Niezrobione"}/></div>
        </ul>
        <ul id={"zadanie4"}>
            {props.task4.map((f)=><>{f}</>)}
            <div id="DoneButton4"><DoneButton defaultClick={"Zrobione"}/></div>
            <div id="DoneButton4"><DoneButton defaultClick={"Niezrobione"}/></div>
        </ul>
        <ul id={"zadanie5"}>
            {props.task5.map((f)=><>{f}</>)}
            <div id="DoneButton5"><DoneButton defaultClick={"Zrobione"}/></div>
            <div id="DoneButton5"><DoneButton defaultClick={"Niezrobione"}/></div>
        </ul>

    </>




}