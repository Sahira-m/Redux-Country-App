import React from "react";
import { useState } from 'react';
import { useDispatch } from "react-redux";
//mui
import TextField from '@mui/material/TextField';
import "./Search.css"
//slice
import  InputActions from "../../redux/slice/UserInputSlice"

export default function Search()
{
    const [userInput, setUserInput]=useState<string>("");
    const dispatch=useDispatch();
    function getConutryName(event: React.ChangeEvent<HTMLInputElement> )
    {
      const input =event.target.value;
     setUserInput(input); 
     console.log(input,"userInputs");
     dispatch(InputActions.userInputMethod(userInput));
    //clearText();
    } 

    
    function clearText()
    {
        setUserInput("");
        
    } 
    return<div className="Text-Field">

<TextField value={userInput}  id="standard-basic" label="Standard" variant="standard"  type="search"   onChange={getConutryName}  />
    
    </div>
    ;
}