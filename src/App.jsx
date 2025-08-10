import React from 'react';
import {useState} from "react";
import styles from "./App.module.css";

function App() {
    const [inputValue, setInputValue] = useState("");
    //Created array of values for calculator buttons
    const buttonContent1 = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "."];
    const buttonContent2 = ["+", "-", "*", "/","C","="];
    //Event_handler
    function handleClick(value)  {
        setInputValue((prev) => prev + value); // append new value to the previous one 
    }
    //loops through an array by .map() method for creating button for each element in array
    const numberButtons = () => {
        return buttonContent1.map((item, index) => (
            <button key={index} onClick={() => handleClick(item)}>{item}</button>
        ));
    };
    //make input  clear
    function handleClear(){
        setInputValue("");
    }
    // using eval() method to perform whatever arithmetic operation to be made when press enter
    function handleEnter(){
        setInputValue(eval(inputValue).toString());
    }

    const operatorButtons = () => {
        return buttonContent2.map((item, index) => {
            if (item === "C") {
                return (
                    <button key={index} onClick={() => handleClear()}>
                        {item}
                    </button>
                );
            } else if (item === "=") {
                return (
                    <button key={index} onClick={() => handleEnter()}>
                        {item}
                    </button>
                );
            } else {
                return (
                    <button key={index} onClick={() => handleClick(item)}>
                        {item}
                    </button>
                );
            }
        });
    };


    return (
        <>
            <div className={styles.boundaryOuter}>
                <div className={styles.boundaryInterior}>
                    <div className={styles.input}>
                        <input className={styles.input} value={inputValue} readOnly />
                    </div>
                    <div className={styles.collective}>
                        <div className={styles.numbers}>
                            {numberButtons()}
                        </div>
                        <div className={styles.operators}>
                            {operatorButtons()}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
