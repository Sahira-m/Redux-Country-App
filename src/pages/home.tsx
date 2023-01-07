import React from "react";

//Components
import CountryList from "../component/country-list/countryList";
import Header from "../component/header/headrt";
import Search  from "../component/search-component/search";
import { CountryType } from "../types/type";
import PageLaoad from "../component/Page-Load/Page-Load"
//import CountryLists from "../App";
 type PropType=
  {
     userInput:string;
     countryList:CountryType[];
 setUserInput:Function ;

   };
export function Home(prop:PropType  )
{
    return <div className="Home">
        <div><Header></Header> </div>

<div>
<Search userInput={prop.userInput} setUserInput={prop.setUserInput} ></Search>

</div>
 <div>
 {
    prop.countryList.length<249?  <PageLaoad></PageLaoad>:<CountryList countryList={prop.countryList}  userInput={prop.userInput}></CountryList> 
 }
 
 </div>

 

    </div>;
}