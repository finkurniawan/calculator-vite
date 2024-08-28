import React, { useState } from "react";

const Calculator: React.FC = () => {
    const [display, setDisplay] = useState<string>("0");
    const [lastClicked, setLastClicked] = useState<string>("");

    const handleClick = (value: string) => {
        if (value === "=") {
            try {
                const result = new Function(`return ${display}`)();
                setDisplay(result.toString());
            } catch (error) {
                setDisplay("Error");
            }
        } else if (value === "C") {
            setDisplay("0");
        } else {
            const lastChar = display[display.length - 1];
            if (
                ["+", "-", "*", "/", "^", "√", "log"].includes(value) &&
                ["+", "-", "*", "/", "^", "(", "√", "log"].includes(lastClicked) &&
                value !== "-"
            ) {
                return;
            }

            if (value === "(") {
                if (display === "0" || ["+", "-", "*", "/"].includes(lastChar)) {
                    setDisplay(display + value);
                } else {
                    setDisplay(display + "*" + value);
                }
            } else if (value === ")") {
                if (display.includes("(")) {
                    setDisplay(display + value);
                }
            } else {
                if (display === "0" && value !== ".") {
                    setDisplay(value);
                } else {
                    setDisplay(display + value);
                }
            }
        }
        setLastClicked(value);
    };

    const handleNegative = () => {
        const lastChar = display[display.length - 1];
        if (display === "0") {
            setDisplay("-");
        } else if (["+", "-", "*", "/"].includes(lastChar) || lastChar === "(") {
            setDisplay(display + "(-");
        } else {
            setDisplay(display + "*(-");
        }
    };

    const handleBackspace = () => {
        if (display.length > 1) {
            setDisplay(display.slice(0, -1));
        } else {
            setDisplay("0");
        }
    };

    const handleExponent = () => {
        setDisplay(display + "^");
    };

    const handleSquareRoot = () => {
        setDisplay(display + "√(");
    };

    const handleLogarithm = () => {
        setDisplay(display + "log(");
    };

    return (
        <div className="max-w-xs mx-auto mt-10 p-5 bg-gray-900 text-white rounded-lg shadow-md">
            <div className="mb-5 text-right text-3xl p-3 bg-gray-800 rounded-lg shadow-inner">
                {display}
            </div>
            <div className="grid grid-cols-4 gap-3">
                <button className="p-4 bg-gray-700 hover:bg-gray-600 rounded-lg" onClick={() => handleClick("7")}>7</button>
                <button className="p-4 bg-gray-700 hover:bg-gray-600 rounded-lg" onClick={() => handleClick("8")}>8</button>
                <button className="p-4 bg-gray-700 hover:bg-gray-600 rounded-lg" onClick={() => handleClick("9")}>9</button>
                <button className="p-4 bg-orange-500 hover:bg-orange-400 rounded-lg" onClick={() => handleClick("/")}>/</button>
                <button className="p-4 bg-gray-700 hover:bg-gray-600 rounded-lg" onClick={() => handleClick("4")}>4</button>
                <button className="p-4 bg-gray-700 hover:bg-gray-600 rounded-lg" onClick={() => handleClick("5")}>5</button>
                <button className="p-4 bg-gray-700 hover:bg-gray-600 rounded-lg" onClick={() => handleClick("6")}>6</button>
                <button className="p-4 bg-orange-500 hover:bg-orange-400 rounded-lg" onClick={() => handleClick("*")}>*</button>
                <button className="p-4 bg-gray-700 hover:bg-gray-600 rounded-lg" onClick={() => handleClick("1")}>1</button>
                <button className="p-4 bg-gray-700 hover:bg-gray-600 rounded-lg" onClick={() => handleClick("2")}>2</button>
                <button className="p-4 bg-gray-700 hover:bg-gray-600 rounded-lg" onClick={() => handleClick("3")}>3</button>
                <button className="p-4 bg-orange-500 hover:bg-orange-400 rounded-lg" onClick={() => handleClick("-")}>-</button>
                <button className="p-4 bg-gray-700 hover:bg-gray-600 rounded-lg" onClick={() => handleClick("0")}>0</button>
                <button className="p-4 bg-gray-700 hover:bg-gray-600 rounded-lg" onClick={() => handleClick(".")}>.</button>
                <button className="p-4 bg-green-500 hover:bg-green-400 rounded-lg" onClick={() => handleClick("=")}>=</button>
                <button className="p-4 bg-orange-500 hover:bg-orange-400 rounded-lg" onClick={() => handleClick("+")}>+</button>
                <button className="p-4 bg-yellow-500 hover:bg-yellow-400 rounded-lg" onClick={() => handleNegative()}>±</button>
                <button className="p-4 bg-gray-700 hover:bg-gray-600 rounded-lg" onClick={() => handleClick("(")}>(</button>
                <button className="p-4 bg-gray-700 hover:bg-gray-600 rounded-lg" onClick={() => handleClick(")")}>)</button>
                <button className="p-4 bg-red-500 hover:bg-red-400 rounded-lg" onClick={() => handleClick("C")}>C</button>
                <button className="p-4 bg-yellow-500 hover:bg-yellow-400 rounded-lg" onClick={handleBackspace}>←</button>
                <button className="p-4 bg-purple-500 hover:bg-purple-400 rounded-lg" onClick={handleExponent}>^</button>
                <button className="p-4 bg-blue-500 hover:bg-blue-400 rounded-lg" onClick={handleSquareRoot}>√</button>
                <button className="p-4 bg-indigo-500 hover:bg-indigo-400 rounded-lg" onClick={handleLogarithm}>log</button>
            </div>
        </div>
    );
};

export default Calculator;
