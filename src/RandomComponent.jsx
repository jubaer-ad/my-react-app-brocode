
import React, { useState } from "react";

function RandomComponent() {

    const [name, setName] = useState("Ki Jani!!!");
    const [age, setAge] = useState(0);
    const [isStudent, setIsStudent] = useState(true);
    return(
        <>
            <h1>This is a Random Component</h1>
            <p>Name: {name}</p>
            <input id="input-name"
                type="text"
                placeholder="Enter your name"
            />
            <button onClick={() => {
                const element = document.getElementById("input-name");
                const inputName = element.value;
                element.value = "";
                setName(inputName);
            }}>Submit</button>

            <p>Age: {age}</p>
            <input id="input-age"
                type="number"
                placeholder="Enter your age"
            />
            <button onClick={() => {
                const element = document.getElementById("input-age");
                const inputAge = element.value;
                element.value = "";
                setAge(inputAge);
            }}>Submit</button>

            <p>Student: {isStudent ? "Yes" : "No"}</p>
            <button onClick={() => {setIsStudent(!isStudent)}}>Toggle Student</button>
            
        </>
    );
}
export default RandomComponent;