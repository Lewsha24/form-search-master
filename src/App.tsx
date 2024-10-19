import {Input} from "./components/input";
import {useState} from "react";
import {AddButton} from "./components/AddButton";

export const App = () => {
    const [inputValue, setInputValue] = useState("")

    const handleAddButtonClick = () => {
        console.log('Button was clicked')
    }
    return (
        <>
            <div>Form-scratch</div>

            <Input onChange={(val) => setInputValue(val)} defaultValue={inputValue}/>

            <AddButton onClick={handleAddButtonClick}/>
        </>
    )
}