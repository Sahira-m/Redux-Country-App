import React from "react";

//Components
import CountryList from "../component/country-list/countryList";
import Header from "../component/header/headrt";
import Search  from "../component/search-component/search";
import { CountryType } from "../types/type";
//import CountryLists from "../App";
 type PropType=
  {
     userInput:string;
     countryList:CountryType[];
 setUserInput:Function ;

   };
export function Home(prop:PropType  )
{
    return <div>
<Header></Header>
{/* <Search  ></Search>
<CountryList ></CountryList> */}


 <Search userInput={prop.userInput} setUserInput={prop.setUserInput} ></Search>
<CountryList countryList={prop.countryList}  userInput={prop.userInput}

></CountryList> 
    </div>;
}