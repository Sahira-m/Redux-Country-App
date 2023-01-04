import React from "react";

//mui
import TextField from '@mui/material/TextField';

type SearchPropType= { userInput:string;
   setUserInput:Function};
export default function Search( prop:SearchPropType)
{
 
    function getConutryName(event: React.ChangeEvent<HTMLInputElement> )
    {
      const input =event.target.value;
     prop.setUserInput(input); 
     console.log(input,"userInputs");
    } 
    return<div>
<TextField id="outlined-search" label="Enter Country Name" type="search"  onChange={getConutryName}/>
    </div>
    ;
}