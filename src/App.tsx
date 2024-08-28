import React from "react";
import Calculator from "./components/Calculator";

const App: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gray-800">
            <h1 className="text-4xl mb-8 font-bold text-white">Calculator</h1>
            <Calculator />
        </div>
    );
};

export default App;
