import React from 'react';
import {useState} from "react";
import styles from "./App.module.css";

function App() {
    const [inputValue, setInputValue] = useState("");
    const buttonContent1 = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "."];
    const buttonContent2 = ["+", "-", "*", "/","C","="];

    function handleClick(value)  {
        setInputValue((prev) => prev + value);
    }

    const numberButtons = () => {
        return buttonContent1.map((item, index) => (
            <button key={index} onClick={() => handleClick(item)}>{item}</button>
        ));
    };

    function handleClear(){
        setInputValue("");
    }
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
